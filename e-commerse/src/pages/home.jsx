import { useState } from 'react';
import ProductCard from '../compenents/productCard';
import Filter from '../compenents/filter';
import MobileFilter from '../compenents/MobileFilter';
import ProductsHeader from '../compenents/ProductsHeader';
import CartModal from '../compenents/CartModal';
import { useAppContext } from '../context.provider';

const Home = () => {
    const { products, loading, error, addToCart, toggleFavorite, favorites } = useAppContext();
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (loading) {
        return <div>Yükleniyor...</div>
    }

    if (error) {
        return <div>Hata: {error}</div>
    }

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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Ürünler</h1>
                    <p className="text-gray-600">En yeni ve popüler ürünleri keşfedin</p>
                </div>

                {/* Mobile Filter */}
                <MobileFilter />

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

                        {/* Products Header */}
                        <ProductsHeader totalProducts={products.length} currentPage={1} itemsPerPage={12} />

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
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                <i className="bi bi-arrow-down mr-2"></i>
                                Daha Fazla Yükle
                            </button>
                        </div>

                    </div>
                </div>

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

export default Home;