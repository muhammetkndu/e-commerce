import { Link, useLocation } from 'react-router-dom';
import Categories from './categories';
import { useAppContext } from '../context.provider';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { favorites, cart } = useAppContext();
    const [isMobileOpenMenu, setIsMobileOpenMenu] = useState(false);
    const location = useLocation(); 

    const toggleMenuMobile = () => {
        setIsMobileOpenMenu(!isMobileOpenMenu);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileOpenMenu(false);
    }, [location.pathname]);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <i className="bi bi-shop text-2xl text-blue-600 mr-2"></i>
                            <span className="text-xl font-bold text-gray-800">MamiShop</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Ana Sayfa
                            </Link>

                            {/* Categories Dropdown */}
                            <Categories />

                            <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Hakkımızda
                            </Link>
                            <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                İletişim
                            </Link>
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:block flex-1 max-w-md mx-4 lg:mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ürün ara..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            <i className="bi bi-search absolute left-3 top-2.5 text-gray-400"></i>
                        </div>
                    </div>

                    {/* Right Side Icons - Desktop and Tablet */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        {/* User Account */}
                        <Link to="/account" className="text-gray-600 hover:text-blue-600 p-2 relative">
                            <i className="bi bi-person text-lg lg:text-xl"></i>
                        </Link>

                        {/* Favorites */}
                        <Link to="/favorites" className="text-gray-600 hover:text-blue-600 p-2 relative">
                            <i className="bi bi-heart text-lg lg:text-xl"></i>
                            {favorites.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {favorites.length}
                                </span>
                            )}
                        </Link>

                        {/* Shopping Cart */}
                        <Link to="/cart" className="text-gray-600 hover:text-blue-600 p-2 relative">
                            <i className="bi bi-cart text-lg lg:text-xl"></i>
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenuMobile} className="text-gray-600 hover:text-blue-600 p-2">
                            <i className="bi bi-list text-xl"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileOpenMenu && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
                        <div className="px-4 py-2 space-y-1">
                            {/* Search Bar - Mobile */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    placeholder="Ürün ara..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                />
                                <i className="bi bi-search absolute left-3 top-2.5 text-gray-400"></i>
                            </div>

                            {/* Navigation Links */}
                            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                                Ana Sayfa
                            </Link>
                            <Link to="/categories" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                                Kategoriler
                            </Link>
                            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                                Hakkımızda
                            </Link>
                            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                                İletişim
                            </Link>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-2"></div>

                            {/* User Actions */}
                            <Link to="/account" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                                <i className="bi bi-person mr-2"></i>
                                Hesabım
                            </Link>
                            <Link to="/favorites" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                                <i className="bi bi-heart mr-2"></i>
                                Favorilerim {favorites.length > 0 && `(${favorites.length})`}
                            </Link>
                            <Link to="/cart" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                                <i className="bi bi-cart mr-2"></i>
                                Sepetim {cart.length > 0 && `(${cart.length})`}
                            </Link>
                        </div>
                    </div>
                )}

                {/* Tablet Navigation - Show on medium screens only */}
                <div className="hidden md:block lg:hidden border-t border-gray-200 py-2">
                    <div className="flex justify-center space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                            Ana Sayfa
                        </Link>
                        <Link to="/products" className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                            Ürünler
                        </Link>
                        <Link to="/categories" className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                            Kategoriler
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                            Hakkımızda
                        </Link>
                        <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium transition-colors">
                            İletişim
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;