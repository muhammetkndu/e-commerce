const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1) return;
        onUpdateQuantity(item.id, newQuantity);
    };

    const handleRemove = () => {
        onRemove(item.id);
    };

    return (
        <div className="border border-gray-200 rounded-lg p-4">
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
                        onClick={() => handleQuantityChange(item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                        <i className="bi bi-dash text-gray-600"></i>
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                        <i className="bi bi-plus text-gray-600"></i>
                    </button>
                </div>
                <div className="text-right">
                    <div className="font-bold text-gray-900">₺{(item.price * item.quantity).toLocaleString('tr-TR')}</div>
                    <button
                        onClick={handleRemove}
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
                            onClick={() => handleQuantityChange(item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                            <i className="bi bi-dash text-gray-600"></i>
                        </button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button
                            onClick={() => handleQuantityChange(item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                            <i className="bi bi-plus text-gray-600"></i>
                        </button>
                    </div>
                    <div className="text-right">
                        <div className="font-bold text-gray-900">₺{(item.price * item.quantity).toLocaleString('tr-TR')}</div>
                        <button
                            onClick={handleRemove}
                            className="text-red-500 hover:text-red-700 text-sm mt-1"
                        >
                            <i className="bi bi-trash mr-1"></i>
                            Kaldır
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem; 