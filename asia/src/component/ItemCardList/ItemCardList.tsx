import { useState } from "react";
import { useQuery } from "react-query";
import ItemsCard from "../home/ItemsCard/ItemsCard";

export interface CartItemType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading, error } = useQuery("products", getProducts);

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => {
      return ack + item.amount;
    }, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [];
        }
      }, [] as CartItemType[])
    );
  };

  if (error) return <div>에러 발생~!!</div>;
  return (
    <>
      <div>
        {data?.map((item) => (
          <div key={item.id}>
            <ItemsCard item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </>
  );
};
export default App;
