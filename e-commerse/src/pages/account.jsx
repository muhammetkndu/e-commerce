import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hesabım</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Hesap bilgilerinizi yönetin ve siparişlerinizi takip edin
                        </p>
                    </div>
                </div>
            </div>

            {/* Account Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Mobile User Info Bar */}
                    <div className="lg:hidden bg-white rounded-xl shadow-lg p-4 mb-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <i className="bi bi-person text-xl text-white"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Ahmet Yılmaz</h3>
                                    <p className="text-gray-600 text-sm">ahmet@email.com</p>
                                </div>
                            </div>
                            <button className="text-gray-600 hover:text-blue-600">
                                <i className="bi bi-three-dots-vertical text-xl"></i>
                            </button>
                        </div>
                    </div>

                    {/* Sidebar Navigation - Desktop */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="bi bi-person text-3xl text-white"></i>
                                </div>
                                <h3 className="font-bold text-gray-900">Ahmet Yılmaz</h3>
                                <p className="text-gray-600 text-sm">ahmet@email.com</p>
                            </div>

                            <nav className="space-y-2">
                                <a href="#profile" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium">
                                    <i className="bi bi-person-circle mr-3"></i>
                                    Profil Bilgileri
                                </a>
                                <a href="#orders" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-box mr-3"></i>
                                    Siparişlerim
                                </a>
                                <a href="#favorites" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-heart mr-3"></i>
                                    Favorilerim
                                </a>
                                <a href="#addresses" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-geo-alt mr-3"></i>
                                    Adreslerim
                                </a>
                                <a href="#settings" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-gear mr-3"></i>
                                    Hesap Ayarları
                                </a>
                                <a href="#security" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-shield-lock mr-3"></i>
                                    Güvenlik
                                </a>
                            </nav>

                            <div className="border-t mt-6 pt-6">
                                <button className="w-full flex items-center justify-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <i className="bi bi-box-arrow-right mr-3"></i>
                                    Çıkış Yap
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-6 lg:space-y-8">

                        {/* Mobile Navigation Tabs */}
                        <div className="lg:hidden bg-white rounded-xl shadow-lg p-4">
                            <div className="flex space-x-2 overflow-x-auto">
                                <button className="flex-shrink-0 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                                    <i className="bi bi-person-circle mr-2"></i>
                                    Profil
                                </button>
                                <button className="flex-shrink-0 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                                    <i className="bi bi-box mr-2"></i>
                                    Siparişler
                                </button>
                                <button className="flex-shrink-0 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                                    <i className="bi bi-heart mr-2"></i>
                                    Favoriler
                                </button>
                                <button className="flex-shrink-0 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">
                                    <i className="bi bi-geo-alt mr-2"></i>
                                    Adresler
                                </button>
                            </div>
                        </div>

                        {/* Profile Information */}
                        <div id="profile" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-4 lg:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Profil Bilgileri</h2>
                                    <button className="bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                        <i className="bi bi-pencil mr-2"></i>
                                        Düzenle
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Ad</label>
                                        <input type="text" value="Ahmet" className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
                                        <input type="text" value="Yılmaz" className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                                        <input type="email" value="ahmet@email.com" className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                                        <input type="tel" value="+90 555 123 4567" className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm" readOnly />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Doğum Tarihi</label>
                                        <input type="date" value="1990-05-15" className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm" readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders - Collapsible on Mobile */}
                        <div id="orders" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-4 lg:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Son Siparişlerim</h2>
                                    <div className="flex items-center space-x-2">
                                        <Link to="/orders" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            Tümünü Gör
                                        </Link>
                                        <button className="lg:hidden text-gray-600 hover:text-blue-600">
                                            <i className="bi bi-chevron-down text-xl"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-3 lg:space-y-4">
                                    <div className="border border-gray-200 rounded-lg p-3 lg:p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 lg:space-x-4">
                                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                                    <i className="bi bi-phone text-lg lg:text-2xl text-gray-500"></i>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base">iPhone 14 Pro Max</h3>
                                                    <p className="text-gray-600 text-xs lg:text-sm">Sipariş #12345</p>
                                                    <p className="text-gray-500 text-xs lg:text-sm">15 Mart 2024</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-gray-900 text-sm lg:text-base">₺45,999</div>
                                                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Teslim Edildi</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-3 lg:p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 lg:space-x-4">
                                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                                    <i className="bi bi-laptop text-lg lg:text-2xl text-gray-500"></i>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base">MacBook Air M2</h3>
                                                    <p className="text-gray-600 text-xs lg:text-sm">Sipariş #12344</p>
                                                    <p className="text-gray-500 text-xs lg:text-sm">10 Mart 2024</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-gray-900 text-sm lg:text-base">₺35,999</div>
                                                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Kargoda</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Addresses - Collapsible on Mobile */}
                        <div id="addresses" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-4 lg:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Adreslerim</h2>
                                    <div className="flex items-center space-x-2">
                                        <button className="bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            <i className="bi bi-plus mr-2"></i>
                                            Yeni Adres
                                        </button>
                                        <button className="lg:hidden text-gray-600 hover:text-blue-600">
                                            <i className="bi bi-chevron-down text-xl"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                    <div className="border border-gray-200 rounded-lg p-3 lg:p-4">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">Ev Adresi</h3>
                                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Varsayılan</span>
                                        </div>
                                        <p className="text-gray-600 text-xs lg:text-sm mb-3">
                                            Atatürk Mahallesi, Cumhuriyet Caddesi<br />
                                            No: 123, Daire: 5<br />
                                            Kadıköy / İstanbul
                                        </p>
                                        <div className="flex space-x-2">
                                            <button className="text-blue-600 hover:text-blue-700 text-xs lg:text-sm">
                                                <i className="bi bi-pencil mr-1"></i>
                                                Düzenle
                                            </button>
                                            <button className="text-red-600 hover:text-red-700 text-xs lg:text-sm">
                                                <i className="bi bi-trash mr-1"></i>
                                                Sil
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-3 lg:p-4">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">İş Adresi</h3>
                                        </div>
                                        <p className="text-gray-600 text-xs lg:text-sm mb-3">
                                            Levent Mahallesi, Büyükdere Caddesi<br />
                                            No: 456, Kat: 10<br />
                                            Beşiktaş / İstanbul
                                        </p>
                                        <div className="flex space-x-2">
                                            <button className="text-blue-600 hover:text-blue-700 text-xs lg:text-sm">
                                                <i className="bi bi-pencil mr-1"></i>
                                                Düzenle
                                            </button>
                                            <button className="text-red-600 hover:text-red-700 text-xs lg:text-sm">
                                                <i className="bi bi-trash mr-1"></i>
                                                Sil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Statistics - Mobile Optimized */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-4 lg:p-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Hesap İstatistikleri</h2>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                                    <div className="text-center">
                                        <div className="bg-blue-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                                            <i className="bi bi-box text-lg lg:text-2xl text-blue-600"></i>
                                        </div>
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">12</div>
                                        <div className="text-gray-600 text-xs lg:text-sm">Toplam Sipariş</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-green-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                                            <i className="bi bi-heart text-lg lg:text-2xl text-green-600"></i>
                                        </div>
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">8</div>
                                        <div className="text-gray-600 text-xs lg:text-sm">Favori Ürün</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-purple-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                                            <i className="bi bi-star text-lg lg:text-2xl text-purple-600"></i>
                                        </div>
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">4.8</div>
                                        <div className="text-gray-600 text-xs lg:text-sm">Ortalama Puan</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-orange-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                                            <i className="bi bi-calendar-check text-lg lg:text-2xl text-orange-600"></i>
                                        </div>
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">2</div>
                                        <div className="text-gray-600 text-xs lg:text-sm">Bu Ay Sipariş</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Bottom Navigation */}
                        <div className="lg:hidden bg-white rounded-xl shadow-lg p-4">
                            <div className="flex items-center justify-center space-x-6">
                                <button className="flex flex-col items-center text-blue-600">
                                    <i className="bi bi-house text-xl mb-1"></i>
                                    <span className="text-xs">Ana Sayfa</span>
                                </button>
                                <button className="flex flex-col items-center text-gray-600">
                                    <i className="bi bi-search text-xl mb-1"></i>
                                    <span className="text-xs">Ara</span>
                                </button>
                                <button className="flex flex-col items-center text-gray-600">
                                    <i className="bi bi-heart text-xl mb-1"></i>
                                    <span className="text-xs">Favoriler</span>
                                </button>
                                <button className="flex flex-col items-center text-gray-600">
                                    <i className="bi bi-cart text-xl mb-1"></i>
                                    <span className="text-xs">Sepet</span>
                                </button>
                                <button className="flex flex-col items-center text-gray-600">
                                    <i className="bi bi-person text-xl mb-1"></i>
                                    <span className="text-xs">Profil</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account; 