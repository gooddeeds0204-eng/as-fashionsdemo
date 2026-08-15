"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  X,
  Star,
  Truck,
  RotateCcw,
  Zap,
} from "lucide-react";

interface Product {
  id: string;
  brand: string;
  name: string;
  category: "men" | "women" | "kids";
  subCategory: string;
  price: number;
  mrp: number;
  badge?: string;
  image: string;
  hoverImage: string;
  rating: number;
  reviews: number;
  sizes: string[];
  description: string;
}

interface CartItem extends Product {
  qty: number;
  selectedSize: string;
}

const PRODUCTS: Product[] = [
  {
    id: "W-101",
    brand: "BIBA",
    name: "Pure Zari Banarasi Silk Saree",
    category: "women",
    subCategory: "sarees",
    price: 1599,
    mrp: 3499,
    badge: "BRIDAL LUXE",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviews: 310,
    sizes: ["Free Size"],
    description: "Exquisite Banarasi Silk Saree featuring intricate zari weaving and traditional rich pallu. Perfect for weddings and festive celebrations.",
  },
  {
    id: "W-102",
    brand: "ONLY",
    name: "Women Floral Flared Midi Dress",
    category: "women",
    subCategory: "western",
    price: 1499,
    mrp: 2499,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 190,
    sizes: ["S", "M", "L"],
    description: "Chic floral printed midi dress with a flattering flared silhouette, lightweight breathable fabric, and comfortable waist styling.",
  },
  {
    id: "M-201",
    brand: "JACK & JONES",
    name: "Luxury Italian Cotton Casual Shirt",
    category: "men",
    subCategory: "formal-shirts",
    price: 1799,
    mrp: 2799,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 140,
    sizes: ["M", "L", "XL"],
    description: "Premium cotton tailored-fit shirt designed for high-end comfort and sharp formal/casual styling.",
  },
  {
    id: "M-203",
    brand: "LEVIS",
    name: "Men Slim Fit Selvedge Denim Jeans",
    category: "men",
    subCategory: "denim",
    price: 1899,
    mrp: 3299,
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1542272604-780c96856484?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 98,
    sizes: ["30", "32", "34", "36"],
    description: "Rugged yet premium selvedge denim engineered with stretch comfort and durable indigo wash.",
  },
  {
    id: "KD-301",
    brand: "MAX",
    name: "Boys' Royal Velvet Sherwani Ensemble",
    category: "kids",
    subCategory: "kids-ethnic",
    price: 849,
    mrp: 1599,
    badge: "FESTIVE",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 78,
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    description: "Luxurious velvet ethnic sherwani set designed for kids' festive occasions and family weddings.",
  },
];

export default function HomePage() {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [selectedSub, setSelectedSub] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  
  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState<{ text: string; error: boolean } | null>(null);

  const [custName, setCustName] = useState("");
  const [custPhone, setCustPhone] = useState("");
  const [custAddress, setCustAddress] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("asfashions_cart");
    const savedWish = localStorage.getItem("asfashions_wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWish) setWishlist(JSON.parse(savedWish));
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("asfashions_cart", JSON.stringify(newCart));
  };

  const addToCart = (product: Product, size: string) => {
    const existing = cart.find(
      (i) => i.id === product.id && i.selectedSize === size
    );
    let updated;
    if (existing) {
      updated = cart.map((i) =>
        i.id === product.id && i.selectedSize === size
          ? { ...i, qty: i.qty + 1 }
          : i
      );
    } else {
      updated = [...cart, { ...product, qty: 1, selectedSize: size }];
    }
    saveCart(updated);
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const updateQty = (id: string, size: string, delta: number) => {
    const updated = cart
      .map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, qty: item.qty + delta }
          : item
      )
      .filter((item) => item.qty > 0);
    saveCart(updated);
  };

  const removeFromCart = (id: string, size: string) => {
    const updated = cart.filter(
      (i) => !(i.id === id && i.selectedSize === size)
    );
    saveCart(updated);
  };

  const toggleWishlist = (id: string) => {
    const updated = wishlist.includes(id)
      ? wishlist.filter((item) => item !== id)
      : [...wishlist, id];
    setWishlist(updated);
    localStorage.setItem("asfashions_wishlist", JSON.stringify(updated));
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
    if (sub === 0) return;

    if (code === "ASF40") {
      const disc = Math.round(sub * 0.4);
      setDiscount(disc);
      setCouponMsg({ text: `✓ Applied 40% (₹${disc}) Discount!`, error: false });
    } else {
      setDiscount(0);
      setCouponMsg({ text: "✕ Invalid Code. Use: ASF40", error: true });
    }
  };

  let filteredProducts = PRODUCTS.filter((p) => {
    const matchesDept = selectedDept === "all" || p.category === selectedDept;
    const matchesSub = selectedSub === "all" || p.subCategory === selectedSub;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSub && matchesSearch;
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalPayable = Math.max(0, subtotal - discount);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `ASF-${Math.floor(100000 + Math.random() * 900000)}`;
    saveCart([]);
    setIsCheckoutOpen(false);
    alert(`Order Placed Successfully!\nOrder ID: ${orderId}\nCustomer: ${custName}\nTotal Payable: ₹${totalPayable}`);
  };

  return (
    <div className="min-h-screen bg-[#fafafb] text-neutral-900 antialiased pb-20 lg:pb-12">
      
      {/* 1. TOP TICKER */}
      <div className="bg-black text-white text-[10px] sm:text-xs py-2 px-4 text-center font-bold tracking-widest uppercase flex justify-between items-center border-b border-neutral-800">
        <span className="hidden sm:flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-rose-500" /> Free Express Delivery Across India</span>
        <span className="mx-auto flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" /> GRAND LAUNCH: FLAT 40% OFF CODE: <strong className="text-rose-400">ASF40</strong>
        </span>
        <span className="hidden md:flex items-center gap-1.5"><RotateCcw className="h-3.5 w-3.5 text-neutral-400" /> 15 Days Easy Returns</span>
      </div>

      {/* 2. STICKY APP NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <div
            onClick={() => {
              setSelectedDept("all");
              setSelectedSub("all");
            }}
            className="flex items-center space-x-2.5 cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black text-white flex items-center justify-center rounded-xl font-black text-sm tracking-wider shadow-sm">
              AS
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-black tracking-widest leading-none">
                AS <span className="text-[#ff3f6c]">FASHIONS</span>
              </span>
              <span className="text-[7px] tracking-[0.3em] uppercase text-neutral-400 font-extrabold mt-0.5">
                Luxury Mall
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-black uppercase tracking-wider text-neutral-800">
            {[
              { id: "all", label: "All Mall" },
              { id: "men", label: "Men" },
              { id: "women", label: "Women" },
              { id: "kids", label: "Kids" },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setSelectedDept(d.id);
                  setSelectedSub("all");
                }}
                className={`py-2 transition ${
                  selectedDept === d.id
                    ? "text-[#ff3f6c] border-b-2 border-[#ff3f6c]"
                    : "hover:text-[#ff3f6c]"
                }`}
              >
                {d.label}
              </button>
            ))}
          </nav>

          <div className="relative flex-1 max-w-xs sm:max-w-sm">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Sarees, Shirts, Kurtis..."
              className="w-full bg-neutral-100 pl-9 pr-4 py-2 rounded-full text-xs font-medium focus:bg-white focus:outline-none border border-transparent focus:border-black transition"
            />
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-neutral-400" />
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-1.5 text-neutral-700 hover:text-[#ff3f6c] transition"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#ff3f6c] text-white text-[8px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-neutral-700 hover:text-black transition"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                {cart.reduce((s, i) => s + i.qty, 0)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. CATALOG GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div>
            <h2 className="text-base sm:text-xl font-black uppercase tracking-tight text-neutral-900">
              {selectedDept} Collection
            </h2>
            <p className="text-[11px] text-neutral-500">
              Showing {filteredProducts.length} curated apparel styles
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((p) => {
            const isFav = wishlist.includes(p.id);
            const discountPercent = Math.round(((p.mrp - p.price) / p.mrp) * 100);

            return (
              <div
                key={p.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div onClick={() => { setSelectedProduct(p); setSelectedSize(p.sizes[0]); }}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                    <img
                      src={p.image}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {p.badge && (
                      <span className="absolute top-2 left-2 bg-black text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                        {p.badge}
                      </span>
                    )}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:scale-110 transition"
                    >
                      <Heart
                        className={`h-3.5 w-3.5 ${
                          isFav ? "fill-[#ff3f6c] text-[#ff3f6c]" : "text-neutral-600"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-3 space-y-1">
                    <div className="flex items-center space-x-1 text-[9px] text-amber-500 font-bold">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span>{p.rating}</span>
                      <span className="text-neutral-400 font-normal">({p.reviews})</span>
                    </div>
                    <span className="text-[10px] font-black uppercase text-neutral-400 block truncate">
                      {p.brand}
                    </span>
                    <h3 className="text-xs font-bold text-neutral-900 truncate">{p.name}</h3>
                    <div className="flex items-baseline space-x-1.5 pt-0.5">
                      <span className="text-xs sm:text-sm font-black text-black">₹{p.price}</span>
                      <span className="text-[10px] text-neutral-400 line-through">₹{p.mrp}</span>
                      <span className="text-[9px] font-black text-[#ff3f6c]">
                        {discountPercent}% OFF
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 pt-0">
                  <button
                    onClick={() => addToCart(p, p.sizes[0])}
                    className="w-full bg-neutral-900 hover:bg-[#ff3f6c] text-white text-[11px] font-black py-2 rounded-xl uppercase tracking-wider transition shadow-xs flex items-center justify-center space-x-1"
                  >
                    <ShoppingBag className="h-3 w-3" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* 4. WISHLIST DRAWER */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-base font-black flex items-center gap-2">
                  <Heart className="h-5 w-5 fill-[#ff3f6c] text-[#ff3f6c]" />
                  My Wishlist ({wishlist.length})
                </h2>
                <button onClick={() => setIsWishlistOpen(false)}>
                  <X className="h-6 w-6 text-neutral-400 hover:text-black" />
                </button>
              </div>

              <div className="divide-y divide-neutral-100 my-4 max-h-[70vh] overflow-y-auto">
                {wishlist.length === 0 ? (
                  <div className="text-center py-16 text-neutral-400 text-xs font-medium">
                    Your wishlist is empty. Tap the heart icon on any product to save it here!
                  </div>
                ) : (
                  wishlist.map((id) => {
                    const prod = PRODUCTS.find((p) => p.id === id);
                    if (!prod) return null;
                    return (
                      <div key={prod.id} className="py-3 flex items-center justify-between gap-3">
                        <img src={prod.image} className="w-14 h-18 object-cover rounded-xl" />
                        <div className="flex-1">
                          <h4 className="text-xs font-bold truncate">{prod.name}</h4>
                          <p className="text-xs font-black text-black mt-0.5">₹{prod.price}</p>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                          <button
                            onClick={() => {
                              addToCart(prod, prod.sizes[0]);
                              toggleWishlist(prod.id);
                            }}
                            className="text-[10px] font-bold bg-black text-white px-3 py-1.5 rounded-lg hover:bg-[#ff3f6c]"
                          >
                            Move to Bag
                          </button>
                          <button
                            onClick={() => toggleWishlist(prod.id)}
                            className="text-[10px] font-bold text-rose-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-full bg-neutral-100 text-neutral-800 text-xs font-bold py-3.5 rounded-2xl hover:bg-neutral-200 transition uppercase tracking-wider"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* 5. PRODUCT DETAIL MODAL (PDP QUICK VIEW) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col sm:flex-row max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white"
            >
              <X className="h-5 w-5 text-neutral-700" />
            </button>
            <div className="sm:w-1/2 bg-neutral-100 relative aspect-[3/4]">
              <img
                src={selectedProduct.image}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400">
                  {selectedProduct.brand}
                </span>
                <h3 className="text-base font-black text-neutral-900">{selectedProduct.name}</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-lg font-black text-black">₹{selectedProduct.price}</span>
                  <span className="text-xs text-neutral-400 line-through">₹{selectedProduct.mrp}</span>
                </div>
                <p className="text-xs text-neutral-600 pt-2 border-t">
                  {selectedProduct.description}
                </p>

                <div className="pt-2">
                  <label className="text-[10px] font-black uppercase text-neutral-500 block mb-1">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition ${
                          selectedSize === sz
                            ? "border-black bg-black text-white"
                            : "border-neutral-200 bg-white text-neutral-800"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => addToCart(selectedProduct, selectedSize || selectedProduct.sizes[0])}
                className="w-full bg-[#ff3f6c] hover:bg-rose-700 text-white font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Shopping Bag</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. SHOPPING BAG DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-base font-black">
                  Shopping Bag ({cart.reduce((s, i) => s + i.qty, 0)})
                </h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X className="h-6 w-6 text-neutral-400 hover:text-black" />
                </button>
              </div>

              <div className="divide-y divide-neutral-100 my-4 max-h-[50vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-neutral-400 text-xs font-medium">
                    Your bag is empty.
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}`}
                      className="py-3 flex justify-between items-center"
                    >
                      <div>
                        <h4 className="text-xs font-bold truncate max-w-[200px]">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-neutral-500">
                          ₹{item.price} • Size: {item.selectedSize}
                        </p>
                        <div className="flex items-center space-x-2 mt-1.5">
                          <button
                            onClick={() => updateQty(item.id, item.selectedSize, -1)}
                            className="w-5 h-5 bg-neutral-100 rounded text-xs font-bold"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.selectedSize, 1)}
                            className="w-5 h-5 bg-neutral-100 rounded text-xs font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black">
                          ₹{item.price * item.qty}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="block text-[10px] text-rose-600 font-bold mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Coupon Box */}
              <div className="bg-neutral-50 p-3 rounded-2xl border space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400">
                  Promo Coupon Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="ASF40"
                    className="w-full text-xs uppercase p-2 border rounded-xl bg-white focus:outline-none"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-black text-white text-xs font-bold px-4 rounded-xl hover:bg-[#ff3f6c] transition"
                  >
                    Apply
                  </button>
                </div>
                {couponMsg && (
                  <p
                    className={`text-[10px] font-bold ${
                      couponMsg.error ? "text-rose-600" : "text-green-600"
                    }`}
                  >
                    {couponMsg.text}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="space-y-1 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-neutral-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-green-700 font-bold">
                  <span>Express Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-sm font-black text-neutral-950 pt-2 border-t">
                  <span>Total Payable</span>
                  <span className="text-[#ff3f6c]">₹{totalPayable}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  if (cart.length === 0) return alert("Bag is empty!");
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full bg-black text-white text-xs font-bold py-3.5 rounded-2xl hover:bg-[#ff3f6c] transition shadow-lg uppercase tracking-wider"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. CHECKOUT MODAL */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-black">Order Delivery Details</h3>
              <button onClick={() => setIsCheckoutOpen(false)}>
                <X className="h-5 w-5 text-neutral-400 hover:text-black" />
              </button>
            </div>
            <form onSubmit={handleOrderSubmit} className="mt-4 space-y-3 text-xs">
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full p-2.5 border rounded-xl bg-neutral-50 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={custPhone}
                  onChange={(e) => setCustPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full p-2.5 border rounded-xl bg-neutral-50 focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Complete Address *</label>
                <textarea
                  required
                  rows={2}
                  value={custAddress}
                  onChange={(e) => setCustAddress(e.target.value)}
                  placeholder="Door No, Street, City, State, Pincode"
                  className="w-full p-2.5 border rounded-xl bg-neutral-50 focus:bg-white focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff3f6c] text-white font-extrabold py-3.5 rounded-2xl text-xs uppercase shadow-md hover:bg-rose-700 transition tracking-wider"
              >
                Confirm Order (Cash on Delivery)
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
