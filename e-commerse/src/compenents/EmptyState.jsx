import { Link } from 'react-router-dom';
import Button from './Button';

const EmptyState = ({
    icon,
    title,
    description,
    actionText,
    actionLink,
    actionOnClick,
    className = ""
}) => {
    return (
        <div className={`text-center py-16 ${className}`}>
            <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`bi ${icon} text-3xl text-gray-400`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-6">{description}</p>

                {actionLink ? (
                    <Link to={actionLink}>
                        <Button icon="bi-arrow-left" variant="primary">
                            {actionText}
                        </Button>
                    </Link>
                ) : actionOnClick ? (
                    <Button icon="bi-arrow-left" variant="primary" onClick={actionOnClick}>
                        {actionText}
                    </Button>
                ) : (
                    <Button icon="bi-arrow-left" variant="primary">
                        {actionText}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default EmptyState; 