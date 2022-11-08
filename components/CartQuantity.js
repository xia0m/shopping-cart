import { useCallback } from 'react';
import { Div, Text } from 'react-native-magnus';

import { useCart } from '../context/CartContext';
import CartControlButton from './CartControlButton';

export default function CartQuantity({ price, quantity, id, type }) {
  const { setCart } = useCart();

  const itemTotal = parseInt(quantity, 10) * parseFloat(price);

  const handleDecreaseCartItem = useCallback(() => {
    if (parseInt(quantity, 10) <= 1) {
      setCart((previousCart) => {
        return previousCart.filter((item) => item.id !== id || item.type !== type);
      });
    } else {
      setCart((previousCart) => {
        return previousCart.map((item) =>
          item.id === id && item.type === type
            ? { ...item, quantity: parseInt(item.quantity, 10) - 1 }
            : item
        );
      });
    }
  }, [quantity]);

  const handleIncreaseCartItem = useCallback(() => {
    setCart((previousCart) => {
      const newArray = previousCart.map((item) =>
        item.id === id && item.type === type
          ? { ...item, quantity: parseInt(item.quantity, 10) + 1 }
          : item
      );
      return newArray;
    });
  }, [quantity]);

  return (
    <Div row justifyContent="space-between" alignItems="center">
      <Div
        row
        alignItems="center"
        borderStyle="solid"
        borderColor="#e3e6e8"
        borderWidth={1}
        py={12}
        px={8}>
        <CartControlButton
          name="minus"
          bg="#e7f6fe"
          onQuantityButtonPressed={handleDecreaseCartItem}
        />
        <Text mx={36} fontSize={14} fontWeight="500">
          {quantity}
        </Text>
        <CartControlButton
          name="plus"
          bg="#e7f6fe"
          onQuantityButtonPressed={handleIncreaseCartItem}
        />
      </Div>
      <Text fontSize={14} fontWeight="500">
        {itemTotal.toFixed(2)}
      </Text>
    </Div>
  );
}
