const ProductCard = ({ product, onAddToCart, onToggleFavorite = () => {}, isFavorite = false }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
                <img
                    src={product?.image || "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=Ürün"}
                    alt={product?.title || "Ürün"}
                    className="w-full h-48 object-cover"
                />
                <button 
                    className={`absolute top-2 right-2 text-gray-400 hover:text-red-500 ${isFavorite ? 'text-red-500' : ''}`}
                    onClick={() => onToggleFavorite(product)}
                >
                    <i className={`bi bi-heart${isFavorite ? '-fill' : ''} text-xl`}></i>
                </button>

                {/* Discount Badge */}
                {product?.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        %{product.discount}
                    </span>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{product?.title || 'Ürün Adı'}</h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className={`bi ${i < (product?.rating || 0) ? 'bi-star-fill' : 'bi-star'}`}></i>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product?.reviewCount || 0})</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                        <span className="text-base sm:text-lg font-bold text-gray-900">₺{product?.price?.toLocaleString('tr-TR')}</span>
                        {product?.originalPrice && (
                            <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">₺{product.originalPrice.toLocaleString('tr-TR')}</span>
                        )}
                    </div>
                    <button 
                        className="bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700 transition-colors flex-shrink-0 ml-2"
                        onClick={() => onAddToCart(product)}
                    >
                        <i className="bi bi-cart-plus text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 