"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  Star,
  Check,
  ArrowRight,
  Flame,
} from "lucide-react";

interface Product {
  id: string;
  brand: string;
  name: string;
  category: "men" | "women" | "kids" | "footwear" | "home-living";
  subCategory: string;
  price: number;
  mrp: number;
  badge?: string;
  image: string;
  hoverImage: string;
  rating: number;
  reviews: number;
  sizes: string[];
}

interface CartItem extends Product {
  qty: number;
  selectedSize: string;
}

const PRODUCTS: Product[] = [
  // APPAREL & FESTIVE
  {
    id: "W-101",
    brand: "BIBA",
    name: "Pure Zari Banarasi Silk Saree",
    category: "women",
    subCategory: "sarees",
    price: 1599,
    mrp: 3499,
    badge: "BRIDAL SPECIAL",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviews: 310,
    sizes: ["Free Size"],
  },
  {
    id: "W-102",
    brand: "ONLY",
    name: "Women Black Flared Western Dress",
    category: "women",
    subCategory: "western",
    price: 1499,
    mrp: 2499,
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 190,
    sizes: ["S", "M", "L"],
  },
  {
    id: "M-201",
    brand: "JACK & JONES",
    name: "Men Slim Fit Cotton Casual Shirt",
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
  },
  {
    id: "M-202",
    brand: "ROADSTER",
    name: "Men's Crewneck Cotton Sweatshirt",
    category: "men",
    subCategory: "formal-shirts",
    price: 999,
    mrp: 1599,
    badge: "HOT DEAL",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 215,
    sizes: ["M", "L", "XL"],
  },
  
  // HOME & LIVING (DETAILED CATALOG)
  {
    id: "HL-301",
    brand: "SPACES",
    name: "Luxury 300 TC Pure Cotton Double Bedsheet",
    category: "home-living",
    subCategory: "bedsheets",
    price: 1299,
    mrp: 2499,
    badge: "HOME SPECIAL",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 180,
    sizes: ["King", "Queen"],
  },
  {
    id: "HL-302",
    brand: "D'DECOR",
    name: "Jacquard Room Darkening Long Curtains (Set of 2)",
    category: "home-living",
    subCategory: "curtains",
    price: 1499,
    mrp: 2999,
    badge: "-50% OFF",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 120,
    sizes: ["7ft", "9ft"],
  },
  {
    id: "HL-303",
    brand: "HOME CENTRE",
    name: "Velvet Embroidered Cushion Covers (Pack of 5)",
    category: "home-living",
    subCategory: "decor",
    price: 699,
    mrp: 1399,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 88,
    sizes: ["16x16"],
  },

  // FOOTWEAR
  {
    id: "FW-401",
    brand: "NIKE",
    name: "Air Cushion Lightweight Sports Running Sneakers",
    category: "footwear",
    subCategory: "sneakers",
    price: 1999,
    mrp: 3999,
    badge: "TOP SELLER",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviews: 450,
    sizes: ["7", "8", "9", "10"],
  },
  {
    id: "FW-402",
    brand: "ALDO",
    name: "Women's Elegant Strappy Block Heel Sandals",
    category: "footwear",
    subCategory: "heels",
    price: 1299,
    mrp: 2499,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 112,
    sizes: ["5", "6", "7", "8"],
  },

  // KIDS
  {
    id: "KD-501",
    brand: "MAX",
    name: "Boys' Royal Velvet Sherwani Ensemble",
    category: "kids",
    subCategory: "kids-wear",
    price: 849,
    mrp: 1599,
    badge: "FESTIVE",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 78,
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
  },
];

export default function HomePage() {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [selectedSub, setSelectedSub] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState<{ text: string; error: boolean } | null>(null);

  // Form State
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

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesDept = selectedDept === "all" || p.category === selectedDept;
    const matchesSub = selectedSub === "all" || p.subCategory === selectedSub;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSub && matchesSearch;
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalPayable = Math.max(0, subtotal - discount);

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `ASF-${Math.floor(100000 + Math.random() * 900000)}`;
    const itemsList = cart
      .map((i) => `• ${i.name} (${i.selectedSize}) x ${i.qty} = ₹${i.price * i.qty}`)
      .join("%0A");

    const message = `*NEW ORDER: ${orderId}*%0A%0A*Customer:* ${custName}%0A*Phone:* ${custPhone}%0A*Address:* ${custAddress}%0A%0A*Items:*%0A${itemsList}%0A%0A*Total Amount:* ₹${totalPayable}%0A*Status:* Confirmed (Cash on Delivery)`;
    
    // Save to Local/Cloud Store
    saveCart([]);
    setIsCheckoutOpen(false);
    
    // Open WhatsApp Direct with Order Details
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
    alert(`Order Placed! ID: ${orderId}`);
  };

  return (
    <div className="min-h-screen pb-24">
      {/* 1. Top Strip */}
      <div className="bg-black text-white text-[10px] sm:text-xs py-2 px-4 text-center font-bold tracking-widest uppercase flex justify-center items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
        <span>
          NEXT.JS GRAND MALL • 40% OFF CODE: <strong className="text-rose-400">ASF40</strong> • FREE PAN-INDIA EXPRESS SHIPPING
        </span>
      </div>

      {/* 2. Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
          <div
            onClick={() => {
              setSelectedDept("all");
              setSelectedSub("all");
            }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-2xl font-black text-base shadow-md">
              AS
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest leading-none">
                AS <span className="text-[#ff3f6c]">FASHIONS</span>
              </span>
              <span className="text-[7px] tracking-[0.3em] uppercase text-neutral-400 font-extrabold mt-0.5">
                Family Mall
              </span>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-7 text-xs font-black uppercase tracking-wider text-neutral-800">
            {[
              { id: "all", label: "All Mall" },
              { id: "men", label: "Men" },
              { id: "women", label: "Women" },
              { id: "kids", label: "Kids" },
              { id: "footwear", label: "Footwear 👟" },
              { id: "home-living", label: "Home & Living 🏠" },
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

          <div className="relative flex-1 max-w-sm hidden md:block">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Sarees, Shirts, Bedsheets..."
              className="w-full bg-neutral-100 pl-10 pr-4 py-2.5 rounded-full text-xs font-medium focus:bg-white focus:outline-none border border-transparent focus:border-black transition"
            />
            <Search className="absolute left-3.5 top-3.5 h-3.5 w-3.5 text-neutral-400" />
          </div>

          <div className="flex items-center space-x-5">
            <button
              onClick={() => setSelectedDept("all")}
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

      {/* 3. Hero Showcase with Home & Living */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-3xl border border-neutral-200/80 p-5 sm:p-7 shadow-xs">
          <div className="lg:col-span-3 border-r border-neutral-100 pr-4 space-y-1.5 text-xs font-semibold text-neutral-700">
            <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block pb-1 border-b">
              Departments
            </span>
            <button
              onClick={() => {
                setSelectedDept("women");
                setSelectedSub("sarees");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50 flex justify-between items-center"
            >
              <span>Indian &amp; Ethnic Wear</span>
              <ArrowRight className="h-3 w-3 text-neutral-400" />
            </button>
            <button
              onClick={() => {
                setSelectedDept("women");
                setSelectedSub("western");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50 flex justify-between items-center"
            >
              <span>Western Dresses</span>
              <ArrowRight className="h-3 w-3 text-neutral-400" />
            </button>
            <button
              onClick={() => {
                setSelectedDept("men");
                setSelectedSub("formal-shirts");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50 flex justify-between items-center"
            >
              <span>Men's Formal Shirts</span>
              <ArrowRight className="h-3 w-3 text-neutral-400" />
            </button>
            <button
              onClick={() => {
                setSelectedDept("home-living");
                setSelectedSub("bedsheets");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-emerald-800 font-bold flex justify-between items-center"
            >
              <span>Home: Luxury Bedsheets</span>
              <ArrowRight className="h-3 w-3 text-emerald-600" />
            </button>
            <button
              onClick={() => {
                setSelectedDept("home-living");
                setSelectedSub("curtains");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-emerald-800 font-bold flex justify-between items-center"
            >
              <span>Home: Curtains &amp; Drapes</span>
              <ArrowRight className="h-3 w-3 text-emerald-600" />
            </button>
            <button
              onClick={() => {
                setSelectedDept("footwear");
                setSelectedSub("sneakers");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50 flex justify-between items-center"
            >
              <span>Footwear: Running Shoes</span>
              <ArrowRight className="h-3 w-3 text-neutral-400" />
            </button>
          </div>

          <div className="lg:col-span-9 flex items-center justify-between bg-gradient-to-r from-neutral-100 via-neutral-50 to-white rounded-2xl p-6 sm:p-8">
            <div className="space-y-3 max-w-sm">
              <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-neutral-500">
                Curated Season
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif leading-tight">
                NEW STYLE
              </h1>
              <p className="text-xs text-neutral-600">
                Premium fashion, footwear and home living catalog at factory
                prices.
              </p>
              <span className="text-sm font-extrabold text-neutral-900 block">
                UP TO <strong className="text-[#ff3f6c]">60% OFF</strong>
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80"
              className="hidden sm:block w-48 h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 4. Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 border-t border-neutral-200 mt-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight">
              {selectedDept} Collection
            </h2>
            <p className="text-xs text-neutral-500">
              Showing {filteredProducts.length} items ready to ship
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 p-3 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 mb-3">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-2 left-2 bg-black text-white text-[8px] font-bold px-2 py-0.5 rounded">
                      {p.badge}
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(p.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 shadow-sm"
                  >
                    <Heart
                      className={`h-3.5 w-3.5 ${
                        wishlist.includes(p.id)
                          ? "fill-[#ff3f6c] text-[#ff3f6c]"
                          : "text-neutral-600"
                      }`}
                    />
                  </button>
                </div>
                <span className="text-[10px] font-black uppercase text-neutral-400 block">
                  {p.brand}
                </span>
                <h3 className="text-xs font-bold truncate">{p.name}</h3>
                <div className="flex items-baseline space-x-1.5 pt-1">
                  <span className="text-sm font-black">₹{p.price}</span>
                  <span className="text-xs text-neutral-400 line-through">
                    ₹{p.mrp}
                  </span>
                  <span className="text-[9px] font-bold text-[#ff3f6c]">
                    {Math.round(((p.mrp - p.price) / p.mrp) * 100)}% OFF
                  </span>
                </div>
              </div>

              <button
                onClick={() => addToCart(p, p.sizes[0])}
                className="w-full bg-black hover:bg-[#ff3f6c] text-white text-xs font-bold py-2.5 rounded-xl mt-3 transition shadow-xs"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-base font-black">
                  Shopping Bag ({cart.reduce((s, i) => s + i.qty, 0)})
                </h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X className="h-6 w-6 text-neutral-400" />
                </button>
              </div>

              <div className="divide-y divide-neutral-100 my-4 max-h-[50vh] overflow-y-auto">
                {cart.map((item) => (
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
                ))}
              </div>

              {/* Coupon Box */}
              <div className="bg-neutral-50 p-3 rounded-xl border space-y-2">
                <label className="text-[10px] font-black uppercase text-neutral-400">
                  Promo Coupon
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="ASF40"
                    className="w-full text-xs uppercase p-2 border rounded-lg bg-white"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-black text-white text-xs font-bold px-3 rounded-lg hover:bg-[#ff3f6c]"
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
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between text-sm font-black text-neutral-950 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-[#ff3f6c]">₹{totalPayable}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  if (cart.length === 0) return alert("Bag is empty!");
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full bg-black text-white text-xs font-bold py-3.5 rounded-xl hover:bg-[#ff3f6c] transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Checkout Dialog */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-black">Delivery Details</h3>
              <button onClick={() => setIsCheckoutOpen(false)}>
                <X className="h-5 w-5 text-neutral-400" />
              </button>
            </div>
            <form onSubmit={handleWhatsAppCheckout} className="mt-4 space-y-3 text-xs">
              <input
                type="text"
                required
                value={custName}
                onChange={(e) => setCustName(e.target.value)}
                placeholder="Full Name *"
                className="w-full p-2.5 border rounded-xl bg-neutral-50"
              />
              <input
                type="tel"
                required
                value={custPhone}
                onChange={(e) => setCustPhone(e.target.value)}
                placeholder="Mobile Number *"
                className="w-full p-2.5 border rounded-xl bg-neutral-50"
              />
              <textarea
                required
                rows={2}
                value={custAddress}
                onChange={(e) => setCustAddress(e.target.value)}
                placeholder="Complete Door Address, City, Pincode *"
                className="w-full p-2.5 border rounded-xl bg-neutral-50"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#ff3f6c] text-white font-bold py-3 rounded-xl text-xs uppercase shadow-md hover:bg-rose-700 transition"
              >
                Place Order (COD / WhatsApp)
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
