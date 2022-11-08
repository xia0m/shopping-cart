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
  const mockData = [
    {
      id: 1,
      title: 'Starry Night',
      description:
        'High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Goh.',
      imageUrl: 'https://demo.snipcart.com/images/starry-night.jpg',
      prices: {
        physical: '79.95',
        digital: '29.75',
      },
    },
    {
      id: 2,
      title: 'Irises',
      description: 'Irises is yet again, another painting by the Dutch artist Vincent van Gogh.',
      imageUrl: 'https://demo.snipcart.com/images/irises.jpg',
      prices: {
        physical: '65.95',
        digital: '37.75',
      },
    },
    {
      id: 3,
      title: 'Branches with Almond Blossom',
      description: 'Branches with Almond Blossom is another van Gogh painted in 1890.',
      imageUrl: 'https://demo.snipcart.com/images/almond.jpg',
      prices: {
        physical: '29.75',
        digital: '17.75',
      },
    },
    {
      id: 4,
      title: 'Rosy-Fingered Dawn at Louse Point',
      description:
        "The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.",
      imageUrl: 'https://demo.snipcart.com/images/rosy.jpg',
      prices: {
        physical: '49.95',
        digital: '24.75',
      },
    },
  ];
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState(mockData);
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
