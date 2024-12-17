'use client';

import { useOrder } from '../context/OrderContext';
import { MenuItem } from '../data/fullMenu';

interface NewMenuItemProps {
  item: MenuItem;
  isSelected: boolean;
}

export const NewMenuItem = ({ item, isSelected }: NewMenuItemProps) => {
  const { addItem, removeItem } = useOrder();

  return (
    <div className="group relative hover:bg-white/5 transition-colors py-0.5">
      <div className="flex items-start gap-1">
        <span className="text-[10px] text-white/40 mt-px shrink-0">#{item.number}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-1">
            <h4 className="font-medium text-xs text-white truncate">{item.name}</h4>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[10px] text-white/80">€{item.price.toFixed(2)}</span>
              <div className="flex items-center -mr-1">
                {isSelected && (
                  <button
                    onClick={() => removeItem(item)}
                    className="p-0.5 text-red-500/80 hover:text-red-500 hover:bg-red-500/10 rounded-sm transition-colors"
                  >
                    <span className="text-xs leading-none">−</span>
                  </button>
                )}
                <button
                  onClick={() => addItem(item)}
                  className="p-0.5 text-amber-500/80 hover:text-amber-500 hover:bg-amber-500/10 rounded-sm transition-colors"
                >
                  <span className="text-xs leading-none">+</span>
                </button>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/50 line-clamp-1">{item.description}</p>
        </div>
      </div>
    </div>
  );
}; 