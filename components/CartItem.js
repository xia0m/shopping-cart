import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Button, Div, Image, Text, Icon } from 'react-native-magnus';

import { useCart } from '../context/CartContext';
import CartQuantity from './CartQuantity';

export default function CartItem({ data }) {
  const { imageUrl, title, description, price, quantity, id, type } = data.item;
  const { setCart } = useCart();

  const deleteCartItem = () => {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id || item.type !== type));
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { productId: id })}>
      <Div w="100%" p={32} mt={0} mb={24} bg="white">
        <Div p={0} mx={16}>
          <Div row alignItems="center" mb={16} justifyContent="space-between">
            <Image source={{ uri: imageUrl }} h={36} w={36} resize resizeMode="cover" />
            <Text flex={1} fontSize={18} fontWeight="600" textAlign="center">
              {title} {id}
            </Text>
            <Div>
              <Button bg="#fceae8" rounded="circle" onPress={deleteCartItem}>
                <Icon
                  name="delete-outline"
                  fontFamily="MaterialIcons"
                  w={18}
                  h={18}
                  fontSize={22}
                  top={-2}
                  left={-1}
                  color="#9e2215"
                />
              </Button>
            </Div>
          </Div>
          <Div>
            <Text fontSize={16} fontWeight="300" color="#2e3339" py={8}>
              {description}
            </Text>
          </Div>
          <Div pt={16}>
            <Text mb={8} color="#2e3338" fontWeight="300">
              Quantity
            </Text>
            <CartQuantity price={price} quantity={quantity} id={id} type={type} />
          </Div>
        </Div>
      </Div>
    </TouchableOpacity>
  );
}
