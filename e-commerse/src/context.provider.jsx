import { createContext, useEffect, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            title: "Ev Adresi",
            address: "Atatürk Mahallesi, Cumhuriyet Caddesi\nNo: 123, Daire: 5\nKadıköy / İstanbul",
            isDefault: true
        },
        {
            id: 2,
            title: "İş Adresi",
            address: "Levent Mahallesi, Büyükdere Caddesi\nNo: 456, Kat: 10\nBeşiktaş / İstanbul",
            isDefault: false
        }
    ]);

    // API Functions
    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError("Ürünlerin Yüklenirken Hata Oldu");
            console.error("error fetching products", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data);
        } catch (err) {
            console.error('error fetching categories', err);
        }
    };

    const fetchProductsByCategories = async (category) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError("kategori ürünleri yüklenirken hata oldu");
            console.error('error fetching category products', err);
        } finally {
            setLoading(false);
        }
    };

    // Cart Functions
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateCartQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Favorites Functions
    const toggleFavorite = (product) => {
        setFavorites(prevFavorites => {
            const exists = prevFavorites.find(item => item.id === product.id);
            if (exists) {
                return prevFavorites.filter(item => item.id !== product.id);
            } else {
                return [...prevFavorites, product];
            }
        });
    };

    // Address Functions
    const addAddress = (newAddress) => {
        setAddresses(prevAddresses => [
            ...prevAddresses,
            {
                ...newAddress,
                id: Date.now(),
                isDefault: prevAddresses.length === 0
            }
        ]);
    };

    const removeAddress = (addressId) => {
        setAddresses(prevAddresses => {
            const filteredAddresses = prevAddresses.filter(addr => addr.id !== addressId);

            if (filteredAddresses.length > 0 && !filteredAddresses.some(addr => addr.isDefault)) {
                filteredAddresses[0].isDefault = true;
            }

            return filteredAddresses;
        });
    };

    const updateAddress = (addressId, updatedAddress) => {
        setAddresses(prevAddresses =>
            prevAddresses.map(addr =>
                addr.id === addressId ? { ...addr, ...updatedAddress } : addr
            )
        );
    };

    const setDefaultAddress = (addressId) => {
        setAddresses(prevAddresses =>
            prevAddresses.map(addr => ({
                ...addr,
                isDefault: addr.id === addressId
            }))
        );
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <AppContext.Provider value={{
            products, categories, loading, error, cart, favorites, addresses,
            toggleFavorite,
            removeFromCart,
            addToCart,
            updateCartQuantity,
            addAddress,
            removeAddress,
            updateAddress,
            setDefaultAddress,
            fetchProductsByCategories,
            fetchCategories,
            fetchProducts
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext; 