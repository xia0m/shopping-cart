import { FlatList } from 'react-native';
import { Div } from 'react-native-magnus';

import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

export default function ProductListScreen() {
  const { productList } = useCart();

  return (
    <Div style={{ backgroundColor: 'white', height: '100%' }}>
      <FlatList
        data={productList}
        renderItem={(item) => <ProductCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Div>
  );
}
