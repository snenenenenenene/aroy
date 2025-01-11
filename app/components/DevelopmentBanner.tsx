"use client";

import { X } from 'lucide-react';
import { useState } from 'react';

export function DevelopmentBanner() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-center py-2 text-sm flex items-center justify-center z-50">
      <span>Deze website is momenteel in ontwikkeling</span>
      <button
        onClick={() => setShowBanner(false)}
        className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors"
        aria-label="Sluit banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
} 