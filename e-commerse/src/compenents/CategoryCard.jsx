import { Link } from 'react-router-dom';

const CategoryCard = ({ type, title, description, features, linkTo, icon, gradientFrom, gradientTo }) => {
    // Gradient renklerini sabit sınıflarla eşleştir
    const getGradientClass = (from, to) => {
        const gradientMap = {
            'blue-500': 'from-blue-500 to-blue-600',
            'green-500': 'from-green-500 to-green-600',
            'orange-500': 'from-orange-500 to-orange-600',
            'yellow-500': 'from-yellow-500 to-yellow-600',
            'purple-500': 'from-purple-500 to-purple-600',
            'pink-500': 'from-pink-500 to-pink-600',
            'red-500': 'from-red-500 to-red-600',
            'gray-600': 'from-gray-600 to-gray-700'
        };

        return gradientMap[from] || 'from-blue-500 to-blue-600';
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div className={`h-48 bg-gradient-to-br ${getGradientClass(gradientFrom, gradientTo)} flex items-center justify-center`}>
                <i className={`${icon} text-6xl text-white group-hover:scale-110 transition-transform`}></i>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="space-y-2 mb-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-500">
                            <i className="bi bi-check-circle text-green-500 mr-2"></i>
                            {feature}
                        </div>
                    ))}
                </div>
                <Link to={linkTo} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Ürünleri Gör
                    <i className="bi bi-arrow-right ml-2"></i>
                </Link>
            </div>
        </div>
    );
};

export default CategoryCard; 