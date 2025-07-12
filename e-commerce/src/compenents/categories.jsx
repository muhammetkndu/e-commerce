import { Link } from 'react-router-dom';
import CategorySection from './CategorySection';
import { megaMenuCategories } from '../data/megaMenuCategories';

const Categories = () => {
    return (
        <div className="relative group">
            <button className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                Kategoriler
                <i className="bi bi-chevron-down ml-1 text-xs"></i>
            </button>

            {/* Mega Menu */}
            <div className="absolute top-full left-0 w-96 bg-white shadow-xl border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                        {megaMenuCategories.map((category, index) => (
                            <CategorySection
                                key={index}
                                title={category.title}
                                icon={category.icon}
                                iconColor={category.iconColor}
                                links={category.links}
                            />
                        ))}
                    </div>

                    {/* View All Categories */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                        <Link to="/categories" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                            Tüm Kategorileri Gör
                            <i className="bi bi-arrow-right ml-1"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
