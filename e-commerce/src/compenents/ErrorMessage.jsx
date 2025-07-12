const ErrorMessage = ({ message, className = "" }) => {
    return (
        <div className={`text-center py-16 ${className}`}>
            <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="bi bi-exclamation-triangle text-3xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hata Oluştu</h3>
                <p className="text-gray-600">{message}</p>
            </div>
        </div>
    );
};

export default ErrorMessage; 