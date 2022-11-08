import { createContext, useContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  setCart: () => null,
  productList: [],
  setProductList: () => null,
  promoApplied: false,
  setPromoApplied: () => null,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [promoApplied, setPromoApplied] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        productList,
        setProductList,
        promoApplied,
        setPromoApplied,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
