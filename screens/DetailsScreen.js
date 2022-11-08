import { Div } from 'react-native-magnus';

import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function DetailsScreen({ route, navigation }) {
  const { productId } = route.params;
  const { productList } = useCart();
  const productData = productList.find((item) => item.id === parseInt(productId, 10));
  return (
    <Div>
      <ProductCard data={{ item: productData }} />
    </Div>
  );
}
