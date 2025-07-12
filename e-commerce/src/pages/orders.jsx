import PageHero from '../compenents/PageHero';

const Orders = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <PageHero
                title="Siparişlerim"
                subtitle="Tüm siparişlerinizi takip edin ve kargo durumlarını öğrenin"
            />

            {/* Orders Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

                {/* Order Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
                        <div className="text-gray-600 text-sm">Toplam Sipariş</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">8</div>
                        <div className="text-gray-600 text-sm">Teslim Edildi</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-orange-600 mb-1">2</div>
                        <div className="text-gray-600 text-sm">Kargoda</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">2</div>
                        <div className="text-gray-600 text-sm">Hazırlanıyor</div>
                    </div>
                </div>

                {/* Orders List */}
                <div className="space-y-6">

                    {/* Order 1 - Delivered */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <i className="bi bi-phone text-2xl text-gray-500"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">iPhone 14 Pro Max 256GB</h3>
                                        <p className="text-gray-600 text-sm">Sipariş #12345</p>
                                        <p className="text-gray-500 text-sm">15 Mart 2024</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <div className="text-2xl font-bold text-gray-900">₺45,999</div>
                                    <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                                        Teslim Edildi
                                    </span>
                                </div>
                            </div>

                            {/* Shipping Timeline */}
                            <div className="border-t pt-6">
                                <h4 className="font-semibold text-gray-900 mb-4">Kargo Takip</h4>
                                <div className="relative">
                                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-500"></div>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                                <i className="bi bi-check text-white text-sm"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">Teslim Edildi</div>
                                                <div className="text-sm text-gray-600">16 Mart 2024, 14:30</div>
                                                <div className="text-sm text-gray-500">Kadıköy, İstanbul</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                                <i className="bi bi-check text-white text-sm"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">Dağıtıma Çıktı</div>
                                                <div className="text-sm text-gray-600">16 Mart 2024, 08:15</div>
                                                <div className="text-sm text-gray-500">Kadıköy Dağıtım Merkezi</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                                <i className="bi bi-check text-white text-sm"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">Transfer Merkezinde</div>
                                                <div className="text-sm text-gray-600">15 Mart 2024, 22:45</div>
                                                <div className="text-sm text-gray-500">İstanbul Transfer Merkezi</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                                <i className="bi bi-check text-white text-sm"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">Kargoya Verildi</div>
                                                <div className="text-sm text-gray-600">15 Mart 2024, 18:20</div>
                                                <div className="text-sm text-gray-500">MamiShop Depo</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-6 mt-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                                    <div className="flex space-x-4">
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            <i className="bi bi-eye mr-2"></i>
                                            Detayları Gör
                                        </button>
                                        <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                                            <i className="bi bi-star mr-2"></i>
                                            Değerlendir
                                        </button>
                                    </div>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                        <i className="bi bi-arrow-repeat mr-2"></i>
                                        Tekrar Sipariş Ver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order 2 - In Transit */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <i className="bi bi-laptop text-2xl text-gray-500"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">MacBook Air M2 13.6 inch</h3>
                                        <p className="text-gray-600 text-sm">Sipariş #12344</p>
                                        <p className="text-gray-500 text-sm">10 Mart 2024</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <div className="text-2xl font-bold text-gray-900">₺35,999</div>
                                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                                        Kargoda
                                    </span>
                                </div>
                            </div>

                            {/* Shipping Timeline */}
                            <div className="border-t pt-6">
                                <h4 className="font-semibold text-gray-900 mb-4">Kargo Takip</h4>
                                <div className="relative">
                                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                                <i className="bi bi-truck text-white text-sm"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">Dağıtıma Çıktı</div>
                                                <div className="text-sm text-gray-600">Bugün, 08:15</div>
                                                <div className="text-sm text-gray-500">Kadıköy Dağıtım Merkezi</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                                <i className="bi bi-check text-white text-sm"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">Transfer Merkezinde</div>
                                                <div className="text-sm text-gray-600">Dün, 22:45</div>
                                                <div className="text-sm text-gray-500">İstanbul Transfer Merkezi</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                                <i className="bi bi-check text-white text-sm"></i>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-gray-900">Kargoya Verildi</div>
                                                <div className="text-sm text-gray-600">10 Mart 2024, 18:20</div>
                                                <div className="text-sm text-gray-500">MamiShop Depo</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-6 mt-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                                    <div className="flex space-x-4">
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            <i className="bi bi-eye mr-2"></i>
                                            Detayları Gör
                                        </button>
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            <i className="bi bi-truck mr-2"></i>
                                            Kargo Takip
                                        </button>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Tahmini Teslimat: <span className="font-medium">18 Mart 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order 3 - Processing */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <i className="bi bi-headphones text-2xl text-gray-500"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Sony WH-1000XM5</h3>
                                        <p className="text-gray-600 text-sm">Sipariş #12343</p>
                                        <p className="text-gray-500 text-sm">12 Mart 2024</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <div className="text-2xl font-bold text-gray-900">₺8,999</div>
                                    <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-medium">
                                        Hazırlanıyor
                                    </span>
                                </div>
                            </div>

                            {/* Order Status */}
                            <div className="border-t pt-6">
                                <h4 className="font-semibold text-gray-900 mb-4">Sipariş Durumu</h4>
                                <div className="bg-purple-50 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                            <i className="bi bi-gear text-white text-sm"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Sipariş Hazırlanıyor</div>
                                            <div className="text-sm text-gray-600">Ürün depoda hazırlanıyor</div>
                                            <div className="text-sm text-gray-500">Tahmini kargo tarihi: 15 Mart 2024</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-6 mt-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                                    <div className="flex space-x-4">
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            <i className="bi bi-eye mr-2"></i>
                                            Detayları Gör
                                        </button>
                                        <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                                            <i className="bi bi-x-circle mr-2"></i>
                                            İptal Et
                                        </button>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Durum: <span className="font-medium">Hazırlanıyor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order 4 - Cancelled */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                        <i className="bi bi-watch text-2xl text-gray-500"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Apple Watch Series 8</h3>
                                        <p className="text-gray-600 text-sm">Sipariş #12342</p>
                                        <p className="text-gray-500 text-sm">8 Mart 2024</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <div className="text-2xl font-bold text-gray-900 line-through">₺12,999</div>
                                    <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-medium">
                                        İptal Edildi
                                    </span>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <div className="bg-red-50 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                                            <i className="bi bi-x text-white text-sm"></i>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Sipariş İptal Edildi</div>
                                            <div className="text-sm text-gray-600">Müşteri talebi üzerine iptal edildi</div>
                                            <div className="text-sm text-gray-500">İptal tarihi: 9 Mart 2024</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-6 mt-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                                    <div className="flex space-x-4">
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            <i className="bi bi-eye mr-2"></i>
                                            Detayları Gör
                                        </button>
                                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            <i className="bi bi-arrow-repeat mr-2"></i>
                                            Tekrar Sipariş Ver
                                        </button>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Durum: <span className="font-medium text-red-600">İptal Edildi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        <i className="bi bi-arrow-down mr-2"></i>
                        Daha Fazla Sipariş Yükle
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Orders; 