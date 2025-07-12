import PageHero from '../compenents/PageHero';

const Settings = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <PageHero
                title="Hesap Ayarları"
                subtitle="Hesap bilgilerinizi güncelleyin ve güvenlik ayarlarınızı yönetin"
            />

            {/* Settings Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

                {/* Settings Navigation */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ayarlar</h3>
                            <nav className="space-y-2">
                                <a href="#profile" className="flex items-center px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium">
                                    <i className="bi bi-person-circle mr-3"></i>
                                    Profil Bilgileri
                                </a>
                                <a href="#security" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-shield-lock mr-3"></i>
                                    Güvenlik
                                </a>
                                <a href="#notifications" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-bell mr-3"></i>
                                    Bildirimler
                                </a>
                                <a href="#privacy" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-eye mr-3"></i>
                                    Gizlilik
                                </a>
                                <a href="#preferences" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-gear mr-3"></i>
                                    Tercihler
                                </a>
                                <a href="#billing" className="flex items-center px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                    <i className="bi bi-credit-card mr-3"></i>
                                    Ödeme Yöntemleri
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Main Settings Content */}
                    <div className="lg:w-3/4 space-y-8">

                        {/* Profile Settings */}
                        <div id="profile" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 lg:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Profil Bilgileri</h2>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                        <i className="bi bi-pencil mr-2"></i>
                                        Düzenle
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Ad</label>
                                        <input type="text" value="Ahmet" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
                                        <input type="text" value="Yılmaz" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                                        <input type="email" value="ahmet@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                                        <input type="tel" value="+90 555 123 4567" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Doğum Tarihi</label>
                                        <input type="date" value="1990-05-15" className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50" readOnly />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Cinsiyet</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50" disabled>
                                            <option>Erkek</option>
                                            <option>Kadın</option>
                                            <option>Diğer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security Settings */}
                        <div id="security" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 lg:p-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Güvenlik</h2>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <i className="bi bi-key text-blue-600"></i>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Şifre Değiştir</h3>
                                                <p className="text-gray-600 text-sm">Son değişiklik: 3 ay önce</p>
                                            </div>
                                        </div>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                            Değiştir
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                <i className="bi bi-phone text-green-600"></i>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">İki Faktörlü Doğrulama</h3>
                                                <p className="text-gray-600 text-sm">SMS ile doğrulama aktif</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Aktif</span>
                                            <button className="text-blue-600 hover:text-blue-700 text-sm">
                                                Düzenle
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                <i className="bi bi-device-hdd text-purple-600"></i>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Oturum Yönetimi</h3>
                                                <p className="text-gray-600 text-sm">3 aktif oturum</p>
                                            </div>
                                        </div>
                                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                                            Görüntüle
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Notification Settings */}
                        <div id="notifications" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 lg:p-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Bildirimler</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">E-posta Bildirimleri</h3>
                                            <p className="text-gray-600 text-sm">Sipariş durumu ve kampanyalar</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">SMS Bildirimleri</h3>
                                            <p className="text-gray-600 text-sm">Kargo takip ve önemli güncellemeler</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Push Bildirimleri</h3>
                                            <p className="text-gray-600 text-sm">Uygulama içi bildirimler</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Pazarlama Bildirimleri</h3>
                                            <p className="text-gray-600 text-sm">Kampanya ve indirim duyuruları</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Settings */}
                        <div id="privacy" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 lg:p-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Gizlilik</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Profil Görünürlüğü</h3>
                                            <p className="text-gray-600 text-sm">Profilinizi diğer kullanıcılara göster</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Veri Analizi</h3>
                                            <p className="text-gray-600 text-sm">Kişiselleştirilmiş deneyim için veri toplama</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Çerezler</h3>
                                            <p className="text-gray-600 text-sm">Web sitesi çerezlerini kabul et</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Preferences Settings */}
                        <div id="preferences" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 lg:p-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Tercihler</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Dil</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                            <option>Türkçe</option>
                                            <option>English</option>
                                            <option>Deutsch</option>
                                            <option>Français</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Para Birimi</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                            <option>₺ Türk Lirası</option>
                                            <option>$ US Dollar</option>
                                            <option>€ Euro</option>
                                            <option>£ British Pound</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Saat Dilimi</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                            <option>İstanbul (UTC+3)</option>
                                            <option>London (UTC+0)</option>
                                            <option>New York (UTC-5)</option>
                                            <option>Tokyo (UTC+9)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Tema</label>
                                        <div className="flex space-x-4">
                                            <label className="flex items-center">
                                                <input type="radio" name="theme" className="mr-2" defaultChecked />
                                                <span>Açık</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="theme" className="mr-2" />
                                                <span>Koyu</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input type="radio" name="theme" className="mr-2" />
                                                <span>Otomatik</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Billing Settings */}
                        <div id="billing" className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 lg:p-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Ödeme Yöntemleri</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <i className="bi bi-credit-card text-blue-600"></i>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">Visa ****1234</h3>
                                                <p className="text-gray-600 text-sm">Son kullanma: 12/25</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Varsayılan</span>
                                            <button className="text-red-600 hover:text-red-700 text-sm">
                                                <i className="bi bi-trash mr-1"></i>
                                                Sil
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                                <i className="bi bi-paypal text-orange-600"></i>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">PayPal</h3>
                                                <p className="text-gray-600 text-sm">ahmet@email.com</p>
                                            </div>
                                        </div>
                                        <button className="text-red-600 hover:text-red-700 text-sm">
                                            <i className="bi bi-trash mr-1"></i>
                                            Sil
                                        </button>
                                    </div>

                                    <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                        <i className="bi bi-plus-lg mr-2"></i>
                                        Yeni Ödeme Yöntemi Ekle
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-red-50 rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 lg:p-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-red-900 mb-6">Tehlikeli Bölge</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-white">
                                        <div>
                                            <h3 className="font-semibold text-red-900">Hesabı Dondur</h3>
                                            <p className="text-red-700 text-sm">Hesabınızı geçici olarak dondurun</p>
                                        </div>
                                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                                            Dondur
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-white">
                                        <div>
                                            <h3 className="font-semibold text-red-900">Hesabı Sil</h3>
                                            <p className="text-red-700 text-sm">Hesabınızı kalıcı olarak silin</p>
                                        </div>
                                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                                            Sil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back to Account Button */}
                        <div className="text-center">
                            <a href="/account" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                                <i className="bi bi-arrow-left mr-2"></i>
                                Hesabıma Dön
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings; 