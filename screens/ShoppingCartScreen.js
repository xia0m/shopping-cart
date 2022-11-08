import { FlatList } from 'react-native';
import { Div } from 'react-native-magnus';

import CartFooter from '../components/CartFooter';
import CartItem from '../components/CartItem';
import PromoInput from '../components/PromoInput';
import { useCart } from '../context/CartContext';

export default function ShoppingCartScreen({ route, navigation }) {
  const { cart } = useCart();
  return (
    <Div>
      <FlatList
        data={cart}
        renderItem={(item) => <CartItem data={item} />}
        keyExtractor={(item) => item.id.toString() + item.type}
        ListFooterComponent={
          <Div>
            <PromoInput />
            <CartFooter />
          </Div>
        }
      />
    </Div>
  );
}
