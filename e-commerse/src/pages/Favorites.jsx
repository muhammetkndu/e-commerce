import { Link } from 'react-router-dom';
import ProductCard from '../compenents/productCard';
import CartModal from '../compenents/CartModal';
import PageLayout from '../compenents/PageLayout';
import EmptyState from '../compenents/EmptyState';
import Button from '../compenents/Button';
import { useProductActions } from '../hooks/useProductActions';
import { useAppContext } from '../context.provider';

const Favorites = () => {
    const { favorites } = useAppContext();
    const {
        cartModalOpen,
        selectedProduct,
        handleAddToCart,
        handleToggleFavorite,
        closeCartModal
    } = useProductActions();

    return (
        <PageLayout>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Favorilerim</h1>
                <p className="text-gray-600">Beğendiğiniz ürünleri kolayca takip edin</p>
            </div>

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
                <EmptyState
                    icon="bi-heart"
                    title="Henüz favori ürününüz yok"
                    description="Beğendiğiniz ürünleri favorilere ekleyerek daha sonra kolayca bulabilirsiniz."
                    actionText="Alışverişe Başla"
                    actionLink="/"
                />
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
                            <Button icon="bi-share" variant="primary">
                                Paylaş
                            </Button>
                            <Button icon="bi-cart-plus" variant="secondary">
                                Sepete Ekle
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cart Modal */}
            <CartModal
                isOpen={cartModalOpen}
                onClose={closeCartModal}
                product={selectedProduct}
            />
        </PageLayout>
    );
};

export default Favorites; 