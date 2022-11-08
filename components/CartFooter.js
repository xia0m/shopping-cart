import { Button, Div, Text, Icon } from 'react-native-magnus';

import { useCart } from '../context/CartContext';

export default function CartFooter() {
  const { promoApplied, cart } = useCart();
  const totalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.quantity, 10) * parseFloat(currentValue.price),
    0
  );
  return (
    <Div mx="lg" mb="lg">
      <Text flex={1} fontWeight="300" fontSize={16} mt={36} color="#2e3338">
        Shipping and taxes will be calculated at checkout.
      </Text>
      <Div row justifyContent="space-between" mt="xl">
        <Text fontSize="xl" fontWeight="500">
          Total
        </Text>
        {promoApplied && parseFloat(totalPrice) > 100 ? (
          <Text fontSize="xl" fontWeight="500">
            ${totalPrice.toFixed(2)} - $100 = ${(totalPrice - 100).toFixed(2)}
          </Text>
        ) : (
          <Text fontSize="xl" fontWeight="500">
            ${totalPrice.toFixed(2)}
          </Text>
        )}
      </Div>
      <Div row mt="xl">
        <Button
          block
          bg="#1a4db3"
          flex={1}
          h={60}
          suffix={<Icon name="arrowright" position="absolute" right={8} color="white" />}>
          Checkout
        </Button>
      </Div>
    </Div>
  );
}
