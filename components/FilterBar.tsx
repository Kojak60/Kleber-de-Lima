import React from 'react';
import { Category } from '../types';

interface FilterBarProps {
  categories: Category[];
  selectedCategory: Category;
  onSelect: (category: Category) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Últimos Guias de Compra</h2>
        <p className="text-gray-500 dark:text-gray-400">Recém-atualizados com os modelos e preços mais recentes.</p>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;