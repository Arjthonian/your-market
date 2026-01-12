import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { flashDeals, products } from '../data/mockData';
import { Clock, TrendingUp, Package } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/20 px-4 py-1 text-sm backdrop-blur-sm">
                New Summer Collection 2025
              </Badge>
              <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
                Discover Your <span className="text-gradient">Perfect</span> Match
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-lg leading-relaxed">
                Experience the next generation of shopping with curated deals and premium quality products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-7 text-lg rounded-2xl shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95">
                    Shop Now
                  </Button>
                </Link>
                <div className="flex items-center gap-4 glass px-6 py-2 rounded-2xl border border-white/10">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-white">10k+ Shoppers</p>
                    <p className="text-slate-400">Joined today</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative z-10 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                  alt="Hero"
                  className="rounded-3xl shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <p className="text-orange-500 font-bold text-2xl">70% OFF</p>
                  <p className="text-slate-600 text-sm">Flash Sale active</p>
                </div>
                <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <TrendingUp className="h-8 w-8 text-red-500" />
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none opacity-50" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Flash Deals Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Flash Deals</h2>
            </div>
            <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm">
              Ends in 05:23:45
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {flashDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Trending Products</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
