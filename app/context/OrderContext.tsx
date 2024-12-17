'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '../data/fullMenu';

interface OrderContextType {
  selectedItems: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (item: MenuItem) => void;
  clearOrder: () => void;
  totalPrice: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  const removeItem = (item: MenuItem) => {
    setSelectedItems((prev) => 
      prev.filter((i, index) => 
        index !== prev.findIndex((x) => x.number === item.number)
      )
    );
  };

  const clearOrder = () => {
    setSelectedItems([]);
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <OrderContext.Provider 
      value={{ 
        selectedItems, 
        addItem, 
        removeItem, 
        clearOrder, 
        totalPrice 
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
} 