import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';

const ShoppingCartStack = createNativeStackNavigator();

export default function ShoppingCartStackScreen() {
  return (
    <ShoppingCartStack.Navigator>
      <ShoppingCartStack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{ title: '购物车' }}
      />
      <ShoppingCartStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: '商品详情' }}
      />
    </ShoppingCartStack.Navigator>
  );
}
