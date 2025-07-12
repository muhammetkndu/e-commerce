const PageHero = ({ title, subtitle, className = "" }) => {
    return (
        <div className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageHero; 