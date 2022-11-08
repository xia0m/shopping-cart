import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Div } from 'react-native-magnus';

import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

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

export default function ProductListScreen() {
  const { productList, setProductList } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    // 把IP地址修改成本地计算机的地址
    const LIMIT = 8;
    const URL = `http://192.168.50.185:3000/carts?page=${currentPage}&limit=${LIMIT}`;
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setProductList([...productList, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      // 特殊情况，不是最佳写法
      setProductList(mockData);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const renderLoader = () => {
    return isLoading ? (
      <Div>
        <ActivityIndicator sie="large" color="#aaa" />
      </Div>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Div style={{ backgroundColor: 'white', height: '100%' }}>
      <FlatList
        data={productList}
        renderItem={(item) => <ProductCard data={item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.3}
      />
    </Div>
  );
}
