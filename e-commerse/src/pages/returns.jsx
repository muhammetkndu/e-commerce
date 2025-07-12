import PageHero from '../compenents/PageHero';

const Returns = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <PageHero
                title="İade ve Değişim"
                subtitle="İade ve değişim politikalarımız hakkında bilgi alın"
            />

            {/* Returns Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="bi bi-check-circle text-2xl text-green-600"></i>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">14 Gün İade</h3>
                        <p className="text-gray-600 text-sm">Teslimattan sonra 14 gün içinde iade hakkı</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="bi bi-truck text-2xl text-blue-600"></i>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Ücretsiz Kargo</h3>
                        <p className="text-gray-600 text-sm">İade kargo ücreti bizde</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="bi bi-arrow-clockwise text-2xl text-purple-600"></i>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Hızlı İşlem</h3>
                        <p className="text-gray-600 text-sm">3-5 iş günü içinde iade işlemi</p>
                    </div>
                </div>

                {/* Return Process */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                    <div className="p-6 lg:p-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">İade Süreci</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-600">1</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">İade Talebi</h3>
                                <p className="text-gray-600 text-sm">Hesabınızdan iade talebinde bulunun</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-600">2</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Kargo Etiketi</h3>
                                <p className="text-gray-600 text-sm">Ücretsiz kargo etiketini alın</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-600">3</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Ürünü Gönderin</h3>
                                <p className="text-gray-600 text-sm">Ürünü kargo ile gönderin</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-600">4</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">İade Tamamlandı</h3>
                                <p className="text-gray-600 text-sm">İade işlemi tamamlandı</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Return Policy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                    {/* Return Conditions */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6 lg:p-8">
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">İade Koşulları</h2>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-check-circle text-green-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">14 Gün İade Hakkı</h3>
                                        <p className="text-gray-600 text-sm">Teslimattan sonra 14 gün içinde iade yapabilirsiniz</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-check-circle text-green-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Orijinal Ambalaj</h3>
                                        <p className="text-gray-600 text-sm">Ürün orijinal ambalajında olmalıdır</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-check-circle text-green-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Kullanılmamış Ürün</h3>
                                        <p className="text-gray-600 text-sm">Ürün kullanılmamış ve hasarsız olmalıdır</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-check-circle text-green-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Eksiksiz İçerik</h3>
                                        <p className="text-gray-600 text-sm">Tüm aksesuarlar ve belgeler dahil olmalıdır</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Non-Returnable Items */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6 lg:p-8">
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">İade Edilemeyen Ürünler</h2>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-x-circle text-red-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Kişisel Bakım Ürünleri</h3>
                                        <p className="text-gray-600 text-sm">Hijyen ve sağlık ürünleri</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-x-circle text-red-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Dijital İçerik</h3>
                                        <p className="text-gray-600 text-sm">Yazılım, e-kitap, müzik dosyaları</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-x-circle text-red-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Özel Siparişler</h3>
                                        <p className="text-gray-600 text-sm">Kişiselleştirilmiş ürünler</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <i className="bi bi-x-circle text-red-600 mt-1"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Hızlı Tüketim</h3>
                                        <p className="text-gray-600 text-sm">Gıda ve içecek ürünleri</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Return Form */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                    <div className="p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">İade Talebi Oluştur</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sipariş Numarası</label>
                                <input type="text" placeholder="Örn: 12345" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresi</label>
                                <input type="email" placeholder="ornek@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">İade Nedeni</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option>Seçiniz</option>
                                    <option>Yanlış ürün gönderildi</option>
                                    <option>Ürün hasarlı geldi</option>
                                    <option>Beklentimi karşılamadı</option>
                                    <option>Yanlış boyut/renk</option>
                                    <option>Diğer</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">İade Türü</label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option>Seçiniz</option>
                                    <option>İade (Para iadesi)</option>
                                    <option>Değişim (Aynı ürün)</option>
                                    <option>Değişim (Farklı ürün)</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                                <textarea rows="4" placeholder="İade nedeni hakkında detaylı açıklama yazın..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    <i className="bi bi-arrow-clockwise mr-2"></i>
                                    İade Talebi Oluştur
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                    <div className="p-6 lg:p-8">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h2>

                        <div className="space-y-4">
                            <div className="border border-gray-200 rounded-lg">
                                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">İade süreci ne kadar sürer?</span>
                                    <i className="bi bi-chevron-down text-gray-600"></i>
                                </button>
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600">İade süreci genellikle 3-5 iş günü içinde tamamlanır. Ürün kargoya verildikten sonra 1-2 iş günü içinde kontrol edilir ve iade işlemi gerçekleştirilir.</p>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg">
                                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">İade kargo ücreti kimde?</span>
                                    <i className="bi bi-chevron-down text-gray-600"></i>
                                </button>
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600">İade kargo ücreti tamamen bizde. Ücretsiz kargo etiketi ile ürünü gönderebilirsiniz.</p>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg">
                                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">Hangi ödeme yöntemleri ile iade alabilirim?</span>
                                    <i className="bi bi-chevron-down text-gray-600"></i>
                                </button>
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600">Kredi kartı ile yapılan ödemeler aynı karta iade edilir. Kapıda ödeme ile yapılan alışverişler için banka hesabına transfer yapılır.</p>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg">
                                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
                                    <span className="font-semibold text-gray-900">Değişim için fark ödemesi gerekir mi?</span>
                                    <i className="bi bi-chevron-down text-gray-600"></i>
                                </button>
                                <div className="px-6 pb-4">
                                    <p className="text-gray-600">Evet, değişim yapacağınız ürün daha pahalıysa fark ödemesi gerekir. Daha ucuz ürün seçerseniz fark iade edilir.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="bg-blue-50 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 lg:p-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="bi bi-headset text-2xl text-blue-600"></i>
                        </div>
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Yardıma mı ihtiyacınız var?</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            İade sürecinizle ilgili sorularınız için müşteri hizmetlerimizle iletişime geçebilirsiniz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                <i className="bi bi-chat-dots mr-2"></i>
                                Canlı Destek
                            </a>
                            <a href="tel:+902125550123" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                                <i className="bi bi-telephone mr-2"></i>
                                +90 (212) 555 0123
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns; 