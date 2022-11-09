import { ScrollView } from 'react-native';

import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function DetailsScreen({ route, navigation }) {
  const { productId } = route.params;
  const { productList } = useCart();
  const productData = productList.find((item) => item.id === parseInt(productId, 10));
  return (
    <ScrollView>
      <ProductCard data={{ item: productData }} />
    </ScrollView>
  );
}
