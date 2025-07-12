import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../compenents/productCard';
import ProductsHeader from '../compenents/ProductsHeader';
import CartModal from '../compenents/CartModal';
import { useAppContext } from '../context.provider';

const Favorites = () => {
    const { favorites, toggleFavorite, addToCart } = useAppContext();
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setCartModalOpen(true);
    };

    const handleToggleFavorite = (product) => {
        toggleFavorite(product);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Favorilerim</h1>
                    <p className="text-gray-600">Beğendiğiniz ürünleri kolayca takip edin</p>
                </div>

                {/* Products Header */}
                <ProductsHeader
                    totalProducts={favorites.length}
                    currentPage={1}
                    itemsPerPage={12}
                />

                {/* Favorites Grid */}
                {favorites.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {favorites.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isFavorite={true}
                                onAddToCart={() => handleAddToCart(product)}
                                onToggleFavorite={handleToggleFavorite}
                            />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="bi bi-heart text-3xl text-gray-400"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Henüz favori ürününüz yok</h3>
                            <p className="text-gray-600 mb-6">
                                Beğendiğiniz ürünleri favorilere ekleyerek daha sonra kolayca bulabilirsiniz.
                            </p>
                            <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                <i className="bi bi-arrow-left mr-2"></i>
                                Alışverişe Başla
                            </Link>
                        </div>
                    </div>
                )}

                {/* Bottom CTA - Sadece favori varsa göster */}
                {favorites.length > 0 && (
                    <div className="text-center mt-12">
                        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Favorilerinizi Paylaşın</h2>
                            <p className="text-gray-600 mb-6">
                                Beğendiğiniz ürünleri arkadaşlarınızla paylaşın ve onların da keşfetmesine yardımcı olun.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                    <i className="bi bi-share mr-2"></i>
                                    Paylaş
                                </button>
                                <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                                    <i className="bi bi-cart-plus mr-2"></i>
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Cart Modal */}
                <CartModal
                    isOpen={cartModalOpen}
                    onClose={() => setCartModalOpen(false)}
                    product={selectedProduct}
                />

            </div>
        </div>
    );
};

export default Favorites; 