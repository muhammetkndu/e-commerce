const SortSelect = ({ value, onChange }) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <select
            value={value || ''}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="">Sıralama</option>
            <option value="price-low">Fiyat: Düşükten Yükseğe</option>
            <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
            <option value="newest">En Yeni</option>
            <option value="popular">En Popüler</option>
            <option value="rating">En Yüksek Puan</option>
        </select>
    );
};

export default SortSelect; 