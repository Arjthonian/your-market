import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import * as Icons from 'lucide-react';

const CategoryNav = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = Icons[category.icon] || Icons.Package;
            return (
              <Link
                key={category.id}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-orange-50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-xs text-center font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
