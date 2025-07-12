import { useState } from 'react';
import { useAppContext } from '../context.provider';

export const useProductActions = () => {
    const { toggleFavorite } = useAppContext();
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setCartModalOpen(true);
    };

    const handleToggleFavorite = (product) => {
        toggleFavorite(product);
    };

    const closeCartModal = () => {
        setCartModalOpen(false);
        setSelectedProduct(null);
    };

    return {
        cartModalOpen,
        selectedProduct,
        handleAddToCart,
        handleToggleFavorite,
        closeCartModal
    };
}; 