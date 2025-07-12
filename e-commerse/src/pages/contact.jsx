import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form gönderme işlemi burada yapılacak
        console.log('Form data:', formData);
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bize Mesaj Gönderin</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ad Soyad *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Adınız ve soyadınız"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        E-posta *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Konu *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Konu seçiniz</option>
                                    <option value="siparis">Sipariş Hakkında</option>
                                    <option value="iade">İade & Değişim</option>
                                    <option value="kargo">Kargo Takip</option>
                                    <option value="urun">Ürün Bilgisi</option>
                                    <option value="oneri">Öneri & Şikayet</option>
                                    <option value="diger">Diğer</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mesajınız *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Mesajınızı buraya yazın..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                <i className="bi bi-send mr-2"></i>
                                Mesaj Gönder
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Contact Methods */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">İletişim Yöntemleri</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                        <i className="bi bi-telephone text-blue-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                                        <p className="text-gray-600 mb-1">+90 (212) 555 0123</p>
                                        <p className="text-sm text-gray-500">7/24 Müşteri Hizmetleri</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-100 rounded-full p-3 mr-4">
                                        <i className="bi bi-envelope text-green-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">E-posta</h4>
                                        <p className="text-gray-600 mb-1">info@mamishop.com</p>
                                        <p className="text-sm text-gray-500">24 saat içinde yanıt</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                                        <i className="bi bi-chat-dots text-purple-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Canlı Destek</h4>
                                        <p className="text-gray-600 mb-1">Anında yanıt</p>
                                        <p className="text-sm text-gray-500">Pazartesi - Pazar 09:00-18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Location */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Ofis Adresimiz</h3>
                            <div className="flex items-start">
                                <div className="bg-orange-100 rounded-full p-3 mr-4">
                                    <i className="bi bi-geo-alt text-orange-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">MamiShop Merkez Ofis</h4>
                                    <p className="text-gray-600 mb-2">
                                        Levent Mahallesi, Büyükdere Caddesi<br />
                                        No: 123, Kat: 5<br />
                                        Beşiktaş / İstanbul
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Metro: Levent İstasyonu (M2)<br />
                                        Otobüs: 54, 74, 129
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Çalışma Saatleri</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Pazartesi - Cuma</span>
                                    <span className="font-medium">09:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Cumartesi</span>
                                    <span className="font-medium">10:00 - 16:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Pazar</span>
                                    <span className="font-medium text-red-600">Kapalı</span>
                                </div>
                                <div className="border-t pt-3 mt-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Online Destek</span>
                                        <span className="font-medium text-green-600">7/24</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
                        <p className="text-gray-600">En çok sorulan sorulara hızlı yanıtlar</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">Siparişim ne zaman teslim edilecek?</h3>
                            <p className="text-gray-600 text-sm">
                                Siparişleriniz genellikle 1-3 iş günü içinde kargoya verilir. Teslimat süresi bulunduğunuz bölgeye göre 1-2 gün arasında değişir.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">İade işlemi nasıl yapılır?</h3>
                            <p className="text-gray-600 text-sm">
                                14 gün içinde ücretsiz iade hakkınız bulunmaktadır. Müşteri hizmetlerimizle iletişime geçerek iade sürecini başlatabilirsiniz.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">Hangi ödeme yöntemlerini kabul ediyorsunuz?</h3>
                            <p className="text-gray-600 text-sm">
                                Kredi kartı, banka kartı, havale/EFT, kapıda ödeme ve taksit seçeneklerimiz mevcuttur. Tüm ödemeler SSL ile güvenle korunmaktadır.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">Kargo ücreti ne kadar?</h3>
                            <p className="text-gray-600 text-sm">
                                150 TL ve üzeri alışverişlerde kargo ücretsizdir. 150 TL altı siparişlerde 19.90 TL kargo ücreti alınır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 