import { Link } from 'react-router-dom';
import CategoryCard from '../compenents/CategoryCard';
import { categories } from '../data/categories';

const AllCategories = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Tüm Kategoriler</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        İhtiyacınız olan her şeyi bulabileceğiniz geniş kategori koleksiyonumuzu keşfedin
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            type={category.type}
                            title={category.title}
                            description={category.description}
                            features={category.features}
                            linkTo={category.linkTo}
                            icon={category.icon}
                            gradientFrom={category.gradientFrom}
                            gradientTo={category.gradientTo}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Aradığınızı Bulamadınız mı?</h2>
                        <p className="text-gray-600 mb-6">
                            Binlerce ürün arasından aradığınızı bulmak için arama yapabilir veya bizimle iletişime geçebilirsiniz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/search" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                <i className="bi bi-search mr-2"></i>
                                Arama Yap
                            </Link>
                            <Link to="/contact" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                                <i className="bi bi-chat mr-2"></i>
                                İletişime Geç
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllCategories; 