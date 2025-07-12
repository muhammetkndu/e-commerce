import FilterLabel from './FilterLabel';
import FilterSection from './FilterSection';

const MobileFilter = () => {
    return (
        <div className="lg:hidden">
            {/* Mobile Filter Toggle Button */}
            <div className="mb-6">
                <button className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="text-gray-700 font-medium">
                        <i className="bi bi-funnel mr-2"></i>
                        Filtreleri Göster
                    </span>
                    <i className="bi bi-chevron-down text-gray-500"></i>
                </button>
            </div>

            {/* Mobile Filter Panel (Hidden by default) */}
            <div className="hidden bg-white rounded-lg shadow-md p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    <i className="bi bi-funnel mr-2"></i>
                    Filtreler
                </h2>

                <FilterSection title="Kategoriler">
                    <FilterLabel label="Elektronik" />
                    <FilterLabel label="Giyim" />
                    <FilterLabel label="Ev & Yaşam" />
                    <FilterLabel label="Spor" />
                    <FilterLabel label="Kitap" />
                </FilterSection>

                <FilterSection title="Fiyat Aralığı">
                    <FilterLabel type="radio" name="price" label="0 - 100 TL" />
                    <FilterLabel type="radio" name="price" label="100 - 500 TL" />
                    <FilterLabel type="radio" name="price" label="500 - 1000 TL" />
                    <FilterLabel type="radio" name="price" label="1000+ TL" />
                </FilterSection>

                <FilterSection title="Markalar">
                    <FilterLabel label="Apple" />
                    <FilterLabel label="Samsung" />
                    <FilterLabel label="Nike" />
                    <FilterLabel label="Adidas" />
                </FilterSection>

                {/* Clear Filters Button */}
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium">
                    <i className="bi bi-arrow-clockwise mr-2"></i>
                    Filtreleri Temizle
                </button>
            </div>
        </div>
    );
};

export default MobileFilter; 