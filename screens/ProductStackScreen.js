import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';
import ProductListScreen from './ProductListScreen';

const ProductStack = createNativeStackNavigator();

export default function ProductStackScreen({ navigation, route }) {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: '商品列表' }}
      />
      <ProductStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: '商品详情' }}
      />
    </ProductStack.Navigator>
  );
}
