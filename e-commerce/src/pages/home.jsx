import ProductCard from '../compenents/productCard';
import Filter from '../compenents/filter';
import CartModal from '../compenents/CartModal';
import PageLayout from '../compenents/PageLayout';
import LoadingSpinner from '../compenents/LoadingSpinner';
import ErrorMessage from '../compenents/ErrorMessage';
import Button from '../compenents/Button';
import { useProductActions } from '../hooks/useProductActions';
import { useAppContext } from '../context.provider';

const Home = () => {
    const { products, loading, error, favorites } = useAppContext();
    const { 
        cartModalOpen, 
        selectedProduct, 
        handleAddToCart, 
        handleToggleFavorite, 
        closeCartModal 
    } = useProductActions();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    return (
        <PageLayout>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Ürünler</h1>
                <p className="text-gray-600">En yeni ve popüler ürünleri keşfedin</p>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left Sidebar - Filters */}
                <div className="lg:col-span-1">
                    <div className="hidden lg:block">
                        <Filter />
                    </div>
                </div>

                {/* Main Content - Products Grid */}
                <div className="lg:col-span-4">
                    {/* Products Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isFavorite={favorites.some(fav => fav.id === product.id)}
                                onAddToCart={() => handleAddToCart(product)}
                                onToggleFavorite={handleToggleFavorite}
                            />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <Button icon="bi-arrow-down" variant="primary" size="lg">
                            Daha Fazla Yükle
                        </Button>
                    </div>
                </div>
            </div>

            {/* Cart Modal */}
            <CartModal
                isOpen={cartModalOpen}
                onClose={closeCartModal}
                product={selectedProduct}
            />
        </PageLayout>
    );
};

export default Home;