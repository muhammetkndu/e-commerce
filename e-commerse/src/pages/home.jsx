import { useState } from 'react';
import ProductCard from '../compenents/productCard';
import Filter from '../compenents/filter';
import MobileFilter from '../compenents/MobileFilter';
import ProductsHeader from '../compenents/ProductsHeader';
import CartModal from '../compenents/CartModal';

const Home = () => {
    // Mock ürünler - gerçek uygulamada API'den gelecek
    const products = [
        {
            id: 1,
            title: "iPhone 14 Pro Max 256GB",
            price: 45999,
            discount: 20,
            rating: 4,
            reviewCount: 128,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=iPhone",
            isFavorite: false
        },
        {
            id: 2,
            title: "MacBook Air M2 13.6 inch",
            price: 35999,
            discount: 16,
            rating: 5,
            reviewCount: 89,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=MacBook",
            isFavorite: true
        },
        {
            id: 3,
            title: "Samsung Galaxy S23 Ultra",
            price: 38999,
            discount: 15,
            rating: 4,
            reviewCount: 156,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=Galaxy",
            isFavorite: false
        },
        {
            id: 4,
            title: "AirPods Pro 2. Nesil",
            price: 5999,
            discount: 20,
            rating: 5,
            reviewCount: 234,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=AirPods",
            isFavorite: true
        },
        {
            id: 5,
            title: "iPad Air 5. Nesil",
            price: 18999,
            discount: 17,
            rating: 4,
            reviewCount: 67,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=iPad",
            isFavorite: false
        },
        {
            id: 6,
            title: "Apple Watch Series 8",
            price: 12999,
            discount: 19,
            rating: 5,
            reviewCount: 189,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=Watch",
            isFavorite: false
        },
        {
            id: 7,
            title: "Sony WH-1000XM5",
            price: 8999,
            discount: 18,
            rating: 5,
            reviewCount: 312,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=Sony",
            isFavorite: true
        },
        {
            id: 8,
            title: "Nintendo Switch OLED",
            price: 7999,
            discount: 11,
            rating: 4,
            reviewCount: 445,
            image: "https://via.placeholder.com/300x300/f3f4f6/6b7280?text=Nintendo",
            isFavorite: false
        }
    ];

    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setCartModalOpen(true);
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
                                    onAddToCart={() => handleAddToCart(product)}
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