import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-magnus';

import ProductStackScreen from './screens/ProductStackScreen';
import ShoppingCartStackScreen from './screens/ShoppingCartStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Product"
            component={ProductStackScreen}
            options={{ title: '商品列表' }}
          />
          <Tab.Screen
            name="Cart"
            component={ShoppingCartStackScreen}
            options={{ title: '购物车' }}
          />
        </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
