const FilterLabel = ({
    type = "checkbox",
    name,
    value,
    label,
    checked,
    onChange
}) => {
    // Eğer onChange yoksa defaultChecked kullan, yoksa controlled component olarak kullan
    const inputProps = onChange
        ? { checked, onChange }
        : { defaultChecked: checked };

    return (
        <label className="flex items-center">
            <input
                type={type}
                name={name}
                value={value}
                {...inputProps}
                className={`${type === 'checkbox' ? 'rounded' : ''} border-gray-300 text-blue-600 focus:ring-blue-500`}
            />
            <span className="ml-2 text-sm text-gray-600">{label}</span>
        </label>
    );
};

export default FilterLabel; 