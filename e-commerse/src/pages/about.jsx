import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            2020 yılından beri Türkiye'nin en güvenilir e-ticaret platformlarından biri olarak hizmet veriyoruz.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Müşterilerimize en kaliteli ürünleri, en uygun fiyatlarla sunarak alışveriş deneyimini
                            kolaylaştırmak ve memnuniyetlerini en üst seviyede tutmak.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="bi bi-check-circle-fill text-green-500 text-xl mr-3"></i>
                                <span className="text-gray-700">Güvenilir ve hızlı teslimat</span>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-check-circle-fill text-green-500 text-xl mr-3"></i>
                                <span className="text-gray-700">7/24 müşteri desteği</span>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-check-circle-fill text-green-500 text-xl mr-3"></i>
                                <span className="text-gray-700">Kaliteli ürün garantisi</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
                        <p className="text-gray-600 mb-6">
                            Türkiye'nin lider e-ticaret platformu olarak, teknoloji ve yenilikçilik ile
                            müşteri memnuniyetini birleştiren bir marka haline gelmek.
                        </p>
                        <div className="bg-blue-50 rounded-lg p-4">
                            <div className="flex items-center">
                                <i className="bi bi-lightbulb text-blue-600 text-2xl mr-3"></i>
                                <div>
                                    <h4 className="font-semibold text-blue-900">İnovasyon</h4>
                                    <p className="text-blue-700 text-sm">Sürekli gelişim ve yenilik</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Rakamlarla MamiShop</h2>
                        <p className="text-gray-600">Başarılarımızı sayılarla anlatıyoruz</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
                            <div className="text-gray-600">Mutlu Müşteri</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                            <div className="text-gray-600">Ürün Çeşidi</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                            <div className="text-gray-600">Müşteri Desteği</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">%99</div>
                            <div className="text-gray-600">Müşteri Memnuniyeti</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
                    <p className="text-gray-600">Başarılarımızın arkasındaki güçlü ekip</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 flex items-center justify-center">
                            <i className="bi bi-person-circle text-6xl text-white"></i>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ahmet Yılmaz</h3>
                            <p className="text-blue-600 mb-3">Kurucu & CEO</p>
                            <p className="text-gray-600 text-sm">
                                10+ yıl e-ticaret deneyimi ile şirketimizin vizyonunu belirliyor.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-green-500 to-green-600 h-32 flex items-center justify-center">
                            <i className="bi bi-person-circle text-6xl text-white"></i>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ayşe Demir</h3>
                            <p className="text-green-600 mb-3">Operasyon Müdürü</p>
                            <p className="text-gray-600 text-sm">
                                Günlük operasyonları yöneterek müşteri memnuniyetini sağlıyor.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-32 flex items-center justify-center">
                            <i className="bi bi-person-circle text-6xl text-white"></i>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mehmet Kaya</h3>
                            <p className="text-purple-600 mb-3">Teknoloji Direktörü</p>
                            <p className="text-gray-600 text-sm">
                                Platformumuzun teknik altyapısını sürekli geliştiriyor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
                        <p className="text-gray-600">Bizi biz yapan temel değerler</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-shield-check text-2xl text-blue-600"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Güvenilirlik</h3>
                            <p className="text-gray-600 text-sm">Müşterilerimizin güvenini kazanmak en önemli önceliğimizdir.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-star text-2xl text-green-600"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Kalite</h3>
                            <p className="text-gray-600 text-sm">En kaliteli ürünleri en uygun fiyatlarla sunuyoruz.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-heart text-2xl text-orange-600"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Müşteri Odaklılık</h3>
                            <p className="text-gray-600 text-sm">Müşteri memnuniyeti her kararımızın merkezinde yer alır.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center shadow-md">
                            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-lightning text-2xl text-purple-600"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hız</h3>
                            <p className="text-gray-600 text-sm">Hızlı teslimat ve anında müşteri desteği sağlıyoruz.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Bizimle Çalışmaya Hazır mısınız?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Kaliteli ürünler ve mükemmel hizmet için hemen alışverişe başlayın.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                            <i className="bi bi-shop mr-2"></i>
                            Alışverişe Başla
                        </Link>
                        <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                            <i className="bi bi-chat mr-2"></i>
                            İletişime Geç
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;