const FilterSection = ({ title, children }) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">{title}</h3>
            <div className="space-y-2">
                {children}
            </div>
        </div>
    );
};

export default FilterSection; 