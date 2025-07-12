import { Link } from 'react-router-dom';
import { useAppContext } from '../context.provider';
import PageLayout from '../compenents/PageLayout';
import EmptyState from '../compenents/EmptyState';
import Button from '../compenents/Button';
import CartItem from '../compenents/CartItem';

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity } = useAppContext();

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalOriginalPrice = cart.reduce((total, item) => total + (item.originalPrice * item.quantity), 0);
    const totalDiscount = totalOriginalPrice - totalPrice;

    if (cart.length === 0) {
        return (
            <PageLayout>
                <EmptyState
                    icon="bi-cart-x"
                    title="Sepetiniz Boş"
                    description="Sepetinizde henüz ürün bulunmuyor. Alışverişe başlamak için ürünlerimize göz atın."
                    actionText="Alışverişe Başla"
                    actionLink="/"
                />
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Sepetim</h1>
                <p className="text-gray-600">Sepetinizde {cart.length} ürün bulunuyor</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sepet Ürünleri</h2>
                            <div className="space-y-4">
                                {cart.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        onUpdateQuantity={updateCartQuantity}
                                        onRemove={removeFromCart}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-24">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Sipariş Özeti</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Ara Toplam</span>
                                <span className="font-medium">₺{totalPrice.toLocaleString('tr-TR')}</span>
                            </div>
                            {totalDiscount > 0 && (
                                <div className="flex justify-between text-green-600">
                                    <span>İndirim</span>
                                    <span>-₺{totalDiscount.toLocaleString('tr-TR')}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-gray-600">Kargo</span>
                                <span className="text-green-600">Ücretsiz</span>
                            </div>
                            <div className="border-t pt-3">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Toplam</span>
                                    <span>₺{totalPrice.toLocaleString('tr-TR')}</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            icon="bi-credit-card"
                            variant="primary"
                            className="w-full mb-3"
                        >
                            Ödemeye Geç
                        </Button>
                        <Link to="/" className="block">
                            <Button
                                icon="bi-arrow-left"
                                variant="secondary"
                                className="w-full"
                            >
                                Alışverişe Devam Et
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Cart; 