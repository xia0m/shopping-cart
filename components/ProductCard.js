import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Div, Text, Image, Button } from 'react-native-magnus';

import { useCart } from '../context/CartContext';
import ProductControl from './ProductControl';

export default function ProductCard({ data }) {
  const { imageUrl, title, description, prices, id } = data.item;
  const { setCart } = useCart();

  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(1);
  const [productType, setProductType] = useState('physical');

  const handleAddCart = () => {
    setCart((previousCart) => {
      return previousCart.some((item) => item.id === id && item.type === productType)
        ? previousCart.map((item) =>
            item.id === id && item.type === productType
              ? { ...item, quantity: parseInt(item.quantity, 10) + parseInt(quantity, 10) }
              : item
          )
        : [
            ...previousCart,
            {
              id,
              quantity: parseInt(quantity, 10),
              imageUrl,
              title: productType === 'digital' ? title + '(.jpg)' : title,
              description,
              price: prices[productType],
              type: productType,
            },
          ];
    });
    Alert.alert(`${quantity}个商品已经成功加入购物车`);
  };

  const handleItemQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleItemTypeChange = (value) => {
    setProductType(value);
  };

  const itemTotal = (parseFloat(prices[productType]) * parseInt(quantity, 10)).toFixed(2);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { productId: id })}>
      <Div w="100%" py="md" pl="xl" pr="2xl" mb="2xl">
        <Div shadow="md">
          <Image
            source={{ uri: imageUrl }}
            h={300}
            w="100%"
            resize
            rounded="xl"
            mb="xl"
            resizeMode="cover"
            style={styles.imageTransform}
          />
        </Div>
        <Text fontSize={48} fontWeight="bold" my="xl">
          {title} {id}
        </Text>
        <Text fontSize={20} mb={20} mt={15} fontWeight="400">
          {description}
        </Text>
        <ProductControl
          quantity={quantity}
          handleItemQuantityChange={handleItemQuantityChange}
          productType={productType}
          handleItemTypeChange={handleItemTypeChange}
        />
        <Div row mt={15}>
          <Div justifyContent="center" alignItems="center">
            <Text fontWeight="700" fontSize={20} numberOfLines={1}>{`$${itemTotal}`}</Text>
          </Div>
          <Div flex={4} ml={16}>
            <Button
              bg="#133986"
              w="100%"
              fontSize={12}
              letterSpacing={2}
              fontWeight="700"
              textTransform="uppercase"
              onPress={handleAddCart}>
              Add To Cart
            </Button>
          </Div>
        </Div>
      </Div>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageTransform: {
    transform: [
      { perspective: 650 },
      { rotate: '0rad' },
      { rotateX: '-5deg' },
      { rotateY: '5deg' },
      { scale: 1 },
      { translateX: 0 },
    ],
    shadowOpacity: '1',
    shadowRadius: 4,
    shadowOffset: {
      width: 50,
      height: 50,
    },
  },
});
