export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 py-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ElecAgent 电子元件商城
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          面向终端工厂的 B2B 电子元件一站式采购平台
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              🏷️ 品牌齐全
            </h3>
            <p className="text-gray-600">
              提供 IGBT、电容、传感器等知名品牌产品
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              💰 阶梯价格
            </h3>
            <p className="text-gray-600">
              采购数量越多，单价越优惠
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              📦 绑定销售
            </h3>
            <p className="text-gray-600">
              IGBT+ 驱动 + 电容套餐更划算
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
