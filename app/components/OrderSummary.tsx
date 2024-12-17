'use client';

import { memo, useState, useMemo } from 'react';
import { Phone, Trash2, ChevronUp, ShoppingBag } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { MenuItem } from '../data/fullMenu';

interface GroupedItem extends MenuItem {
  quantity: number;
  totalPrice: number;
}

export const OrderSummary = memo(() => {
  const { selectedItems, clearOrder, totalPrice } = useOrder();
  const [isExpanded, setIsExpanded] = useState(true);

  const groupedItems = useMemo(() => {
    const groups = selectedItems.reduce((acc, item) => {
      const existing = acc.find(g => g.number === item.number);
      if (existing) {
        existing.quantity += 1;
        existing.totalPrice += item.price;
      } else {
        acc.push({
          ...item,
          quantity: 1,
          totalPrice: item.price
        });
      }
      return acc;
    }, [] as GroupedItem[]);
    
    return groups.sort((a, b) => a.number - b.number);
  }, [selectedItems]);

  if (selectedItems.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 left-0 sm:left-auto sm:bottom-6 sm:right-6 w-full sm:w-96 bg-[#080808]/95 backdrop-blur-lg sm:rounded-2xl border-t sm:border border-amber-500/20 shadow-xl z-50 overflow-hidden opacity-0 translate-y-4 animate-fadeInUp">
      {/* Header - Always visible */}
      <div 
        className="relative flex items-center justify-between p-3 sm:p-4 cursor-pointer sm:cursor-default border-b border-amber-500/20 transition-colors hover:bg-amber-500/5 active:scale-[0.98]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-amber-500/20 flex items-center justify-center">
            <ShoppingBag className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <h3 className="text-base font-medium text-white flex items-center gap-2">
              Selectie <span className="text-amber-500">({selectedItems.length})</span>
            </h3>
            <p className="text-sm text-white/60">
              Totaal: <span className="text-white font-medium">€{totalPrice.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              clearOrder();
            }}
            className="p-2 text-red-500/80 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all hover:scale-110 active:scale-90"
            title="Wis selectie"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <ChevronUp 
            className={`w-4 h-4 text-white/60 transition-transform duration-300 sm:hidden
              ${isExpanded ? 'rotate-0' : 'rotate-180'}`}
          />
        </div>
      </div>

      {/* Expandable Content */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isExpanded 
            ? 'max-h-[60vh] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 space-y-1 max-h-[40vh] overflow-y-auto py-3">
          {groupedItems.map((item, index) => (
            <div 
              key={`${item.number}-${index}`}
              className="flex justify-between items-baseline text-sm py-1 opacity-0 -translate-x-4 animate-fadeInLeft"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-white/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                <span className="text-amber-500/70">#{item.number}</span>
                <span className="truncate">{item.name}</span>
                {item.quantity > 1 && (
                  <span className="text-amber-500/60 text-xs">×{item.quantity}</span>
                )}
              </span>
              <span className="shrink-0 text-white/80 ml-4">€{item.totalPrice.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="relative border-t border-amber-500/20 p-4">
          <a
            href="tel:+32484767586"
            className="w-full py-2.5 bg-amber-500 text-black rounded-lg hover:bg-amber-400 
              transition-all flex items-center justify-center gap-2 text-sm font-medium
              hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            Bel voor bestelling
          </a>
        </div>
      </div>
    </div>
  );
});

OrderSummary.displayName = 'OrderSummary'; 