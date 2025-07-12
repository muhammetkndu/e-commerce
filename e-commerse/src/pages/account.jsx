import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context.provider';
import PageHero from '../compenents/PageHero';

const Account = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const location = useLocation();
    const { addresses, removeAddress, favorites } = useAppContext();

    // Route değiştiğinde tab'ı güncelle
    useEffect(() => {
        // URL'den tab'ı belirle
        const path = location.pathname;
        if (path === '/orders') setActiveTab('orders');
        else if (path === '/addresses') setActiveTab('addresses');
        else if (path === '/settings') setActiveTab('settings');
        else setActiveTab('profile');
    }, [location]);

    // Tab değiştirme fonksiyonu
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        // Sayfa yönlendirmesi ekle
        switch (tabName) {
            case 'orders':
                window.location.href = '/orders';
                break;
            case 'addresses':
                window.location.href = '/addresses';
                break;
            case 'settings':
                window.location.href = '/settings';
                break;
            case 'favorites':
                window.location.href = '/favorites';
                break;
            default:
                // Profile için sayfa değişmez, sadece tab değişir
                break;
        }
    };

    // Adres silme fonksiyonu
    const handleDeleteAddress = (addressId) => {
        if (window.confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
            removeAddress(addressId);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <PageHero
                title="Hesabım"
                subtitle="Hesap bilgilerinizi yönetin ve siparişlerinizi takip edin"
            />

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
                                <Link to={"/orders"} className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-box mr-3"></i>
                                    Siparişlerim
                                </Link>
                                <Link to="/favorites" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-heart mr-3"></i>
                                    Favorilerim
                                </Link>
                                <Link to="/addresses" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-geo-alt mr-3"></i>
                                    Adreslerim
                                </Link>
                                <Link to="/settings" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-gear mr-3"></i>
                                    Hesap Ayarları
                                </Link>
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
                            <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                                <button
                                    onClick={() => handleTabChange('profile')}
                                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] touch-button ${activeTab === 'profile'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    <i className="bi bi-person-circle mr-2"></i>
                                    Profil
                                </button>
                                <Link to="/orders" className="flex-shrink-0">
                                    <button
                                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] touch-button ${activeTab === 'orders'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <i className="bi bi-box mr-2"></i>
                                        Siparişler
                                    </button>
                                </Link>
                                <Link to="/favorites" className="flex-shrink-0">
                                    <button
                                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] touch-button ${activeTab === 'favorites'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <i className="bi bi-heart mr-2"></i>
                                        Favoriler
                                    </button>
                                </Link>
                                <Link to="/addresses" className="flex-shrink-0">
                                    <button
                                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] touch-button ${activeTab === 'addresses'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <i className="bi bi-geo-alt mr-2"></i>
                                        Adresler
                                    </button>
                                </Link>
                                <Link to="/settings" className="flex-shrink-0">
                                    <button
                                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] touch-button ${activeTab === 'settings'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <i className="bi bi-gear mr-2"></i>
                                        Ayarlar
                                    </button>
                                </Link>
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
                                    {addresses.map((address) => (
                                        <div key={address.id} className="border border-gray-200 rounded-lg p-3 lg:p-4">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{address.title}</h3>
                                                {address.isDefault && (
                                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Varsayılan</span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-xs lg:text-sm mb-3 whitespace-pre-line">
                                                {address.address}
                                            </p>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-600 hover:text-blue-700 text-xs lg:text-sm">
                                                    <i className="bi bi-pencil mr-1"></i>
                                                    Düzenle
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteAddress(address.id)}
                                                    className="text-red-600 hover:text-red-700 text-xs lg:text-sm"
                                                >
                                                    <i className="bi bi-trash mr-1"></i>
                                                    Sil
                                                </button>
                                            </div>
                                        </div>
                                    ))}
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
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">{favorites.length}</div>
                                        <div className="text-gray-600 text-xs lg:text-sm">Favori Ürün</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-yellow-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                                            <i className="bi bi-star text-lg lg:text-2xl text-yellow-600"></i>
                                        </div>
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">4.8</div>
                                        <div className="text-gray-600 text-xs lg:text-sm">Ortalama Puan</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-purple-100 rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-2 lg:mb-3">
                                            <i className="bi bi-calendar-check text-lg lg:text-2xl text-purple-600"></i>
                                        </div>
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">2</div>
                                        <div className="text-gray-600 text-xs lg:text-sm">Bu Ay Sipariş</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Navigation - Mobile Only */}
                        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
                            <div className="flex justify-around">
                                <Link to="/" className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
                                    <i className="bi bi-house text-lg"></i>
                                    <span className="text-xs mt-1">Ana Sayfa</span>
                                </Link>
                                <Link to="/favorites" className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
                                    <i className="bi bi-heart text-lg"></i>
                                    <span className="text-xs mt-1">Favoriler</span>
                                </Link>
                                <Link to="/cart" className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
                                    <i className="bi bi-cart text-lg"></i>
                                    <span className="text-xs mt-1">Sepet</span>
                                </Link>
                                <Link to="/account" className="flex flex-col items-center py-2 text-blue-600">
                                    <i className="bi bi-person text-lg"></i>
                                    <span className="text-xs mt-1">Hesabım</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account; 