import { NextRequest, NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/d1';
import { migrate } from 'drizzle-orm/d1/migrator';

// 从环境变量获取密钥
const MIGRATE_SECRET = process.env.MIGRATE_SECRET || 'change-this-secret';

// 可选的 IP 白名单
const ALLOWED_IPS = process.env.ALLOWED_IPS?.split(',') || [];

export async function POST(request: NextRequest) {
  // 验证授权
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.substring(7);
  if (token !== MIGRATE_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }

  // 检查 IP 白名单（如果配置了）
  if (ALLOWED_IPS.length > 0) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    if (!ALLOWED_IPS.includes(ip)) {
      return NextResponse.json({ error: 'IP not allowed' }, { status: 403 });
    }
  }

  try {
    // 获取 D1 数据库连接
    const db = drizzle((request as any).env?.DB || (request as any).env?.__D1_BLOB__);

    // 运行迁移
    await migrate(db, { migrationsFolder: 'drizzle' });

    return NextResponse.json({
      success: true,
      message: '✅ Migrations completed successfully'
    });
  } catch (error) {
    console.error('❌ Migration failed:', error);
    return NextResponse.json({
      error: 'Migration failed',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Migration endpoint ready',
    usage: 'POST with Authorization: Bearer <MIGRATE_SECRET>'
  });
}
