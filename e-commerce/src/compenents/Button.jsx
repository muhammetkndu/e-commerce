const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
    iconPosition = "left",
    ...props
}) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-colors";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    };

    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg"
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const renderIcon = () => {
        if (!icon) return null;
        return <i className={`bi ${icon} ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}></i>;
    };

    return (
        <button className={classes} {...props}>
            {iconPosition === 'left' && renderIcon()}
            {children}
            {iconPosition === 'right' && renderIcon()}
        </button>
    );
};

export default Button; 