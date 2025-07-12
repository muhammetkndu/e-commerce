import { useState } from 'react';
import { useAppContext } from '../context.provider';

const CartModal = ({ isOpen, onClose, product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useAppContext();

    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        // Ürünü belirtilen miktarda sepete ekle
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        onClose();
        setQuantity(1); // Modal kapandığında quantity'yi sıfırla
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

            {/* Modal */}
            <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 animate-fadeIn">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h3 className="text-lg font-semibold">Sepete Ekle</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <i className="bi bi-x text-xl"></i>
                    </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <h4 className="font-medium line-clamp-2">{product.title}</h4>
                            <p className="text-lg font-bold text-blue-600">₺{product.price}</p>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Adet</label>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                            >
                                <i className="bi bi-dash"></i>
                            </button>
                            <span className="w-12 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                            >
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="border-t pt-4 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Toplam:</span>
                            <span className="text-lg font-bold text-blue-600">₺{(product.price * quantity).toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
                        >
                            <i className="bi bi-cart-plus mr-2"></i>
                            Sepete Ekle
                        </button>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                        >
                            İptal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal; 