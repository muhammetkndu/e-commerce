const ViewToggle = ({ view = 'grid', onViewChange }) => {
    const handleGridClick = () => {
        if (onViewChange) {
            onViewChange('grid');
        }
    };

    const handleListClick = () => {
        if (onViewChange) {
            onViewChange('list');
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={handleGridClick}
                className={`p-2 border rounded-md transition-colors ${view === 'grid'
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:bg-gray-50 text-gray-600'
                    }`}
                title="Grid görünümü"
            >
                <i className="bi bi-grid-3x3-gap text-sm"></i>
            </button>
            <button
                onClick={handleListClick}
                className={`p-2 border rounded-md transition-colors ${view === 'list'
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:bg-gray-50 text-gray-600'
                    }`}
                title="Liste görünümü"
            >
                <i className="bi bi-list text-sm"></i>
            </button>
        </div>
    );
};

export default ViewToggle; 