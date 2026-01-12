import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useCart } from '../CartContext';
import { toast } from '../hooks/use-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <div className="bg-white h-full rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.discount > 0 && (
              <Badge className="bg-red-500 hover:bg-red-600 text-xs font-bold px-2 py-1 shadow-lg shadow-red-500/20">
                -{product.discount}%
              </Badge>
            )}
            {product.shipping === 'Free' && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-xs font-bold px-2 py-1 shadow-lg shadow-orange-500/20">
                Free
              </Badge>
            )}
          </div>

          {/* Quick Add Overlay on Hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-white text-slate-900 hover:bg-slate-100 shadow-xl border border-white/20 font-bold"
              size="sm"
            >
              Quick Add
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 transition-colors group-hover:text-orange-500">
              {product.name}
            </h3>
          </div>

          <div className="mt-auto">
            {/* Price */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-black text-slate-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through decoration-red-400/50">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                <span className="text-[10px] text-slate-400">({product.reviews})</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {product.sold} sold
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
