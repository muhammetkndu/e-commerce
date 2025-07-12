import { Link } from 'react-router-dom';
import { useAppContext } from '../context.provider';

const Cart = () => {
    const {cart, removeFromCart, updateCartQuantity} = useAppContext();
    
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        updateCartQuantity(id, newQuantity);
    };

    const removeItem = (id) => {
        removeFromCart(id);
    };

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalOriginalPrice = cart.reduce((total, item) => total + (item.originalPrice * item.quantity), 0);
    const totalDiscount = totalOriginalPrice - totalPrice;

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <div className="mb-8">
                            <i className="bi bi-cart-x text-8xl text-gray-300 mb-4"></i>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sepetiniz Boş</h1>
                            <p className="text-gray-600 mb-8">Sepetinizde henüz ürün bulunmuyor. Alışverişe başlamak için ürünlerimize göz atın.</p>
                        </div>
                        <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            <i className="bi bi-arrow-left mr-2"></i>
                            Alışverişe Başla
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Sepetim</h1>
                    <p className="text-gray-600">Sepetinizde {cart.length} ürün bulunuyor</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Sepet Ürünleri</h2>
                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                                            {/* Desktop Layout - Horizontal */}
                                            <div className="hidden md:flex items-center space-x-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                                                    <div className="flex items-center mt-1">
                                                        <span className="text-lg font-bold text-gray-900">₺{item.price.toLocaleString('tr-TR')}</span>
                                                        {item.originalPrice && (
                                                            <span className="text-sm text-gray-500 line-through ml-2">₺{item.originalPrice.toLocaleString('tr-TR')}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        <i className="bi bi-dash text-gray-600"></i>
                                                    </button>
                                                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                    >
                                                        <i className="bi bi-plus text-gray-600"></i>
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-bold text-gray-900">₺{(item.price * item.quantity).toLocaleString('tr-TR')}</div>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-red-500 hover:text-red-700 text-sm mt-1"
                                                    >
                                                        <i className="bi bi-trash mr-1"></i>
                                                        Kaldır
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Mobile Layout - Vertical */}
                                            <div className="md:hidden">
                                                <div className="flex items-start space-x-3 mb-3">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                                    />
                                                    <div className="flex-1">
                                                        <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                                                        <div className="flex items-center mt-1">
                                                            <span className="text-base font-bold text-gray-900">₺{item.price.toLocaleString('tr-TR')}</span>
                                                            {item.originalPrice && (
                                                                <span className="text-xs text-gray-500 line-through ml-2">₺{item.originalPrice.toLocaleString('tr-TR')}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                        >
                                                            <i className="bi bi-dash text-gray-600"></i>
                                                        </button>
                                                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                                                        >
                                                            <i className="bi bi-plus text-gray-600"></i>
                                                        </button>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-bold text-gray-900">₺{(item.price * item.quantity).toLocaleString('tr-TR')}</div>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-red-500 hover:text-red-700 text-sm mt-1"
                                                        >
                                                            <i className="bi bi-trash mr-1"></i>
                                                            Kaldır
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-24">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sipariş Özeti</h2>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Ara Toplam</span>
                                    <span className="font-medium">₺{totalPrice.toLocaleString('tr-TR')}</span>
                                </div>
                                {totalDiscount > 0 && (
                                    <div className="flex justify-between text-green-600">
                                        <span>İndirim</span>
                                        <span>-₺{totalDiscount.toLocaleString('tr-TR')}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Kargo</span>
                                    <span className="text-green-600">Ücretsiz</span>
                                </div>
                                <div className="border-t pt-3">
                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Toplam</span>
                                        <span>₺{totalPrice.toLocaleString('tr-TR')}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-3">
                                <i className="bi bi-credit-card mr-2"></i>
                                Ödemeye Geç
                            </button>
                            <Link to="/" className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center block">
                                <i className="bi bi-arrow-left mr-2"></i>
                                Alışverişe Devam Et
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 