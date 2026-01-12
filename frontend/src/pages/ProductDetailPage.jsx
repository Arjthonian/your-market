import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products, flashDeals, productDetails } from '../data/mockData';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useCart } from '../CartContext';
import { toast } from '../hooks/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const allProducts = [...flashDeals, ...products];
  const product = allProducts.find(p => p.id === parseInt(id));
  const details = productDetails[id] || {
    images: [product?.image],
    description: 'High-quality product with excellent features.',
    specifications: [],
    reviews: []
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/')}>Go to Homepage</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: 'Added to cart',
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % details.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + details.images.length) % details.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <span className="cursor-pointer hover:text-orange-500" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-orange-500" onClick={() => navigate('/products')}>Products</span>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg border p-4 mb-4 relative group">
              <img
                src={details.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-lg"
              />
              {details.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
            {details.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {details.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`border-2 rounded-lg p-1 cursor-pointer transition-all ${selectedImage === idx ? 'border-orange-500' : 'border-gray-200 hover:border-orange-300'
                      }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt="" className="w-full aspect-square object-cover rounded" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                      }`}
                  />
                ))}
                <span className="ml-2 font-semibold">{product.rating}</span>
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
              <span className="text-gray-400">{product.sold} sold</span>
            </div>

            {/* Price */}
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-orange-600">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
                {product.discount > 0 && (
                  <Badge className="bg-red-500 hover:bg-red-600 text-lg px-3 py-1">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600">You save ${(product.originalPrice - product.price).toFixed(2)}</p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center p-3 bg-white rounded-lg border">
                <Truck className="h-6 w-6 text-orange-500 mb-2" />
                <span className="text-xs text-center font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-lg border">
                <Shield className="h-6 w-6 text-orange-500 mb-2" />
                <span className="text-xs text-center font-medium">Buyer Protection</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white rounded-lg border">
                <RotateCcw className="h-6 w-6 text-orange-500 mb-2" />
                <span className="text-xs text-center font-medium">Easy Returns</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-16 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <Button
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-6"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg py-6"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="py-6">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg border p-6">
          <Tabs defaultValue="description">
            <TabsList className="mb-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({details.reviews.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{details.description}</p>
              </div>
            </TabsContent>

            <TabsContent value="specifications">
              <div className="space-y-3">
                {details.specifications.map((spec, idx) => (
                  <div key={idx} className="flex py-3 border-b">
                    <span className="font-semibold w-48">{spec.label}</span>
                    <span className="text-gray-700">{spec.value}</span>
                  </div>
                ))}
                {details.specifications.length === 0 && (
                  <p className="text-gray-500">No specifications available</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                {details.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-semibold text-orange-600">
                        {review.user[0]}
                      </div>
                      <div>
                        <div className="font-semibold">{review.user}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <div className="ml-auto flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <button className="text-sm text-gray-500 hover:text-orange-500">
                      Helpful ({review.helpful})
                    </button>
                  </div>
                ))}
                {details.reviews.length === 0 && (
                  <p className="text-gray-500">No reviews yet</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
