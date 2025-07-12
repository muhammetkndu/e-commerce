import { Link } from 'react-router-dom';

const CategorySection = ({ title, icon, iconColor, links }) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                <i className={`${icon} ${iconColor} mr-2`}></i>
                {title}
            </h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.to} className="text-sm text-gray-600 hover:text-blue-600 block py-1">
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategorySection; 