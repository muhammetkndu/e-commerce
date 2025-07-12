import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <i className="bi bi-shop text-2xl text-blue-400 mr-2"></i>
                            <span className="text-xl font-bold">MamiShop</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Türkiye'nin en güvenilir e-ticaret platformu. Kaliteli ürünler, hızlı teslimat ve mükemmel müşteri hizmetleri.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="bi bi-facebook text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="bi bi-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="bi bi-instagram text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <i className="bi bi-linkedin text-xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">
                                    Kategoriler
                                </Link>
                            </li>
                            <li>
                                <Link to="/favorites" className="text-gray-400 hover:text-white transition-colors">
                                    Favoriler
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">
                                    Sepetim
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                                    Hakkımızda
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Müşteri Hizmetleri</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Yardım Merkezi
                                </a>
                            </li>
                            <li>
                                <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">
                                    İade & Değişim
                                </Link>
                            </li>
                            <li>
                                <Link to="/orders" className="text-gray-400 hover:text-white transition-colors">
                                    Kargo Takip
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Sıkça Sorulan Sorular
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Canlı Destek
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">İletişim</h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <i className="bi bi-geo-alt text-blue-400 mr-3"></i>
                                <span className="text-gray-400">İstanbul, Türkiye</span>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-telephone text-blue-400 mr-3"></i>
                                <span className="text-gray-400">+90 (212) 555 0123</span>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-envelope text-blue-400 mr-3"></i>
                                <span className="text-gray-400">info@mamishop.com</span>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-clock text-blue-400 mr-3"></i>
                                <span className="text-gray-400">7/24 Hizmet</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-lg font-semibold mb-2">Bültenimize Katılın</h3>
                        <p className="text-gray-400 mb-4">
                            En yeni ürünler ve kampanyalardan haberdar olun
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="flex-1 px-4 py-2 rounded-l-lg border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                                <i className="bi bi-send"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 MamiShop. Tüm hakları saklıdır.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Gizlilik Politikası
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Kullanım Şartları
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                KVKK
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Çerez Politikası
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gray-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            Güvenli Ödeme Yöntemleri
                        </div>
                        <div className="flex space-x-4">
                            <div className="bg-white rounded px-3 py-1">
                                <i className="bi bi-credit-card text-gray-600"></i>
                            </div>
                            <div className="bg-white rounded px-3 py-1">
                                <i className="bi bi-paypal text-blue-600"></i>
                            </div>
                            <div className="bg-white rounded px-3 py-1">
                                <i className="bi bi-bank text-green-600"></i>
                            </div>
                            <div className="bg-white rounded px-3 py-1">
                                <i className="bi bi-cash-coin text-orange-600"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 