import { Link } from 'react-router-dom';
import { useAppContext } from '../context.provider';
import PageHero from '../compenents/PageHero';

const Addresses = () => {
    const { addresses, removeAddress, setDefaultAddress } = useAppContext();

    // Adres silme fonksiyonu
    const handleDeleteAddress = (addressId) => {
        if (window.confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
            removeAddress(addressId);
        }
    };

    // Varsayılan adres yapma fonksiyonu
    const handleSetDefault = (addressId) => {
        setDefaultAddress(addressId);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <PageHero
                title="Adreslerim"
                subtitle="Teslimat adreslerinizi yönetin ve yeni adresler ekleyin"
            />

            {/* Addresses Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

                {/* Header with Add Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Kayıtlı Adreslerim</h2>
                        <p className="text-gray-600">Teslimat ve fatura adreslerinizi yönetin</p>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-4 sm:mt-0">
                        <i className="bi bi-plus-lg mr-2"></i>
                        Yeni Adres Ekle
                    </button>
                </div>

                {/* Address Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{addresses.length}</div>
                        <div className="text-gray-600 text-sm">Toplam Adres</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">{addresses.filter(addr => addr.isDefault).length}</div>
                        <div className="text-gray-600 text-sm">Varsayılan Adres</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{addresses.length}</div>
                        <div className="text-gray-600 text-sm">Teslimat Adresi</div>
                    </div>
                </div>

                {/* Addresses Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {addresses.map((address) => (
                        <div key={address.id} className={`bg-white rounded-xl shadow-lg overflow-hidden ${address.isDefault ? 'border-2 border-blue-500' : ''}`}>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-10 h-10 ${address.isDefault ? 'bg-blue-100' : 'bg-green-100'} rounded-full flex items-center justify-center`}>
                                            <i className={`bi ${address.isDefault ? 'bi-house text-blue-600' : 'bi-briefcase text-green-600'}`}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{address.title}</h3>
                                            <span className={`inline-block ${address.isDefault ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} text-xs px-2 py-1 rounded-full font-medium`}>
                                                {address.isDefault ? 'Varsayılan' : 'Teslimat'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                                            <i className="bi bi-pencil text-lg"></i>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteAddress(address.id)}
                                            className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                                        >
                                            <i className="bi bi-trash text-lg"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start space-x-3">
                                        <i className="bi bi-person text-gray-400 mt-1"></i>
                                        <div>
                                            <p className="font-medium text-gray-900">Ahmet Yılmaz</p>
                                            <p className="text-gray-600 text-sm">+90 555 123 4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <i className="bi bi-geo-alt text-gray-400 mt-1"></i>
                                        <div>
                                            <p className="text-gray-900 whitespace-pre-line">{address.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex space-x-4">
                                            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                                <i className="bi bi-truck mr-2"></i>
                                                Teslimat Adresi
                                            </button>
                                            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                                <i className="bi bi-receipt mr-2"></i>
                                                Fatura Adresi
                                            </button>
                                        </div>
                                        {address.isDefault ? (
                                            <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">
                                                Varsayılan
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleSetDefault(address.id)}
                                                className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                                            >
                                                Varsayılan Yap
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add New Address Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-plus-lg text-2xl text-blue-600"></i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Yeni Adres Ekle</h3>
                            <p className="text-gray-600 text-sm mb-4">Yeni bir teslimat adresi ekleyin</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                <i className="bi bi-plus mr-2"></i>
                                Adres Ekle
                            </button>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                {addresses.length === 0 && (
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="bi bi-geo-alt text-3xl text-gray-400"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Henüz adresiniz yok</h3>
                            <p className="text-gray-600 mb-6">
                                İlk adresinizi ekleyerek alışverişe başlayabilirsiniz.
                            </p>
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                <i className="bi bi-plus mr-2"></i>
                                İlk Adresimi Ekle
                            </button>
                        </div>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Adres Yönetimi</h2>
                        <p className="text-gray-600 mb-6">
                            Birden fazla adres ekleyerek farklı teslimat noktaları belirleyebilirsiniz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                <i className="bi bi-plus mr-2"></i>
                                Yeni Adres Ekle
                            </button>
                            <Link to="/account" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                                <i className="bi bi-arrow-left mr-2"></i>
                                Hesabıma Dön
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addresses; 