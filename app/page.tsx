"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  Sparkles,
  Award,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  X,
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
  {
    id: "BF-1",
    brand: "ONLY",
    name: "Women Black Flared Western Dress",
    category: "women",
    subCategory: "western",
    price: 1499,
    mrp: 2499,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 190,
    sizes: ["S", "M", "L"],
  },
  {
    id: "BF-2",
    brand: "BIBA",
    name: "Floral Embroidered Festive Kurta Set",
    category: "women",
    subCategory: "sarees",
    price: 1049,
    mrp: 1499,
    badge: "-30%",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 310,
    sizes: ["M", "L", "XL"],
  },
  {
    id: "BF-3",
    brand: "JACK & JONES",
    name: "Men Slim Fit Cotton Casual Shirt",
    category: "men",
    subCategory: "formal-shirts",
    price: 1799,
    mrp: 2799,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 140,
    sizes: ["M", "L", "XL"],
  },
  {
    id: "HL-1",
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
    id: "HL-2",
    brand: "D'DECOR",
    name: "Jacquard Room Darkening Curtains (Set of 2)",
    category: "home-living",
    subCategory: "curtains",
    price: 1499,
    mrp: 2999,
    badge: "-50%",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 120,
    sizes: ["7ft", "9ft"],
  },
  {
    id: "FW-1",
    brand: "NIKE",
    name: "Air Cushion Lightweight Running Sneakers",
    category: "footwear",
    subCategory: "sneakers",
    price: 1999,
    mrp: 3999,
    badge: "HOT SELLER",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    rating: 5.0,
    reviews: 450,
    sizes: ["7", "8", "9", "10"],
  },
];

export default function HomePage() {
  const [selectedDept, setSelectedDept] = useState<string>("all");
  const [selectedSub, setSelectedSub] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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

  const toggleWishlist = (id: string) => {
    const updated = wishlist.includes(id)
      ? wishlist.filter((item) => item !== id)
      : [...wishlist, id];
    setWishlist(updated);
    localStorage.setItem("asfashions_wishlist", JSON.stringify(updated));
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
  const total = Math.max(0, subtotal - discount);

  return (
    <div className="min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-black text-white text-[10px] sm:text-xs py-2 px-4 text-center font-bold tracking-widest uppercase">
        ⚡ NEXT.JS APPAREL MALL • 40% OFF CODE:{" "}
        <span className="text-[#ff3f6c]">ASF40</span> • FREE PAN-INDIA EXPRESS
        SHIPPING
      </div>

      {/* Sticky Header */}
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
              <span className="text-xl font-black tracking-widest">
                AS <span className="text-[#ff3f6c]">FASHIONS</span>
              </span>
              <span className="text-[7px] tracking-[0.3em] uppercase text-neutral-400 font-extrabold -mt-1">
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
              className="w-full bg-neutral-100 pl-10 pr-4 py-2.5 rounded-full text-xs font-medium focus:bg-white focus:outline-none border border-transparent focus:border-black"
            />
            <Search className="absolute left-3.5 top-3.5 h-3.5 w-3.5 text-neutral-400" />
          </div>

          <div className="flex items-center space-x-5">
            <button className="relative p-1.5 text-neutral-700 hover:text-[#ff3f6c]">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#ff3f6c] text-white text-[8px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 text-neutral-700 hover:text-black"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                {cart.reduce((s, i) => s + i.qty, 0)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Showcase with Home & Living */}
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
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50"
            >
              Indian &amp; Ethnic Wear
            </button>
            <button
              onClick={() => {
                setSelectedDept("women");
                setSelectedSub("western");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50"
            >
              Western Dresses
            </button>
            <button
              onClick={() => {
                setSelectedDept("men");
                setSelectedSub("formal-shirts");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50"
            >
              Men's Formal Shirts
            </button>
            <button
              onClick={() => {
                setSelectedDept("home-living");
                setSelectedSub("bedsheets");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-emerald-800 font-bold"
            >
              Home: Luxury Bedsheets
            </button>
            <button
              onClick={() => {
                setSelectedDept("home-living");
                setSelectedSub("curtains");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-emerald-50 text-emerald-800 font-bold"
            >
              Home: Curtains &amp; Drapes
            </button>
            <button
              onClick={() => {
                setSelectedDept("footwear");
                setSelectedSub("sneakers");
              }}
              className="w-full text-left p-2 rounded-xl hover:bg-neutral-50"
            >
              Footwear: Running Shoes
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

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 border-t border-neutral-200 mt-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black uppercase">
            {selectedDept} Collection ({filteredProducts.length})
          </h2>
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
                className="w-full bg-black hover:bg-[#ff3f6c] text-white text-xs font-bold py-2 rounded-xl mt-3 transition"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-base font-black">Shopping Bag</h2>
                <button onClick={() => setIsCartOpen(false)}>
                  <X className="h-6 w-6 text-neutral-400" />
                </button>
              </div>

              <div className="divide-y divide-neutral-100 my-4">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}`}
                    className="py-3 flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-xs font-bold">{item.name}</h4>
                      <p className="text-[10px] text-neutral-500">
                        ₹{item.price} • Size: {item.selectedSize}
                      </p>
                    </div>
                    <span className="text-xs font-bold">Qty: {item.qty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between text-sm font-black">
                <span>Total:</span>
                <span className="text-[#ff3f6c]">₹{total}</span>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full bg-black text-white text-xs font-bold py-3 rounded-xl hover:bg-[#ff3f6c] transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Dialog */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-base font-black">Delivery Details</h3>
              <button onClick={() => setIsCheckoutOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Order Placed Successfully via Next.js Engine!");
                saveCart([]);
                setIsCheckoutOpen(false);
              }}
              className="mt-4 space-y-3 text-xs"
            >
              <input
                type="text"
                required
                placeholder="Full Name *"
                className="w-full p-2.5 border rounded-xl bg-neutral-50"
              />
              <input
                type="tel"
                required
                placeholder="Mobile Number *"
                className="w-full p-2.5 border rounded-xl bg-neutral-50"
              />
              <textarea
                required
                rows={2}
                placeholder="Address *"
                className="w-full p-2.5 border rounded-xl bg-neutral-50"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#ff3f6c] text-white font-bold py-3 rounded-xl text-xs uppercase"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
