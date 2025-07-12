import SortSelect from './SortSelect';
import ViewToggle from './ViewToggle';

const ProductsHeader = ({ totalProducts, currentPage = 1, itemsPerPage = 12 }) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalProducts);

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="mb-4 sm:mb-0">
                <span className="text-sm text-gray-500">
                    Toplam {totalProducts} ürün
                    {totalProducts > 0 && (
                        <span className="hidden sm:inline">
                            {' '}• {startItem}-{endItem} arası gösteriliyor
                        </span>
                    )}
                </span>
            </div>
            <div className="flex items-center space-x-4">
                <SortSelect />
                <ViewToggle />
            </div>
        </div>
    );
};

export default ProductsHeader; 