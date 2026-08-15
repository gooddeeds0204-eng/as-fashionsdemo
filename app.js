// COMPLETE MALL CATALOG DATA ENGINE
const products = [
  // MEN
  { id: "M101", name: "Men's Luxury Italian Cotton Formal Shirt", category: "men", subCategory: "formal-shirts", price: 899, mrp: 1699, rating: 4.9, reviews: 240, tag: "Best Seller", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80", sizes: ["M", "L", "XL"] },
  { id: "M102", name: "Men's Slim Fit Stretch Selvedge Jeans", category: "men", subCategory: "denim", price: 1099, mrp: 2199, rating: 4.8, reviews: 98, tag: "Trending", image: "https://images.unsplash.com/photo-1542272604-780c96856484?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=80", sizes: ["30", "32", "34", "36"] },
  { id: "M103", name: "Men's Casual Washed Oxford Shirt", category: "men", subCategory: "formal-shirts", price: 799, mrp: 1499, rating: 4.7, reviews: 110, tag: "Popular", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80", sizes: ["S", "M", "L", "XL"] },
  { id: "M104", name: "Men's Royal Silk Blend Kurta Pajama Set", category: "men", subCategory: "ethnic", price: 1499, mrp: 2999, rating: 5.0, reviews: 142, tag: "Festive", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80", sizes: ["M", "L", "XL"] },

  // WOMEN
  { id: "W201", name: "Women's Pure Zari Banarasi Silk Saree", category: "women", subCategory: "silk-sarees", price: 1599, mrp: 3499, rating: 5.0, reviews: 310, tag: "Exclusive", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80", sizes: ["Free Size"] },
  { id: "W202", name: "Women's Handcrafted Chikankari Kurti Set", category: "women", subCategory: "kurtis", price: 899, mrp: 1799, rating: 4.7, reviews: 88, tag: "Popular", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=80", sizes: ["M", "L", "XL"] },
  { id: "W203", name: "Women's Pure Kanjivaram Bridal Silk Saree", category: "women", subCategory: "silk-sarees", price: 2199, mrp: 4999, rating: 4.9, reviews: 190, tag: "Bridal", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80", sizes: ["Free Size"] },
  { id: "W204", name: "Women's Flared Embroidered Anarkali Set", category: "women", subCategory: "kurtis", price: 1299, mrp: 2599, rating: 4.8, reviews: 145, tag: "Trending", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80", sizes: ["S", "M", "L", "XL"] },

  // KIDS
  { id: "K301", name: "Boys' Royal Velvet Sherwani Ensemble", category: "kids", subCategory: "boys-ethnic", price: 849, mrp: 1599, rating: 4.9, reviews: 78, tag: "Festive", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&auto=format&fit=crop&q=80", sizes: ["3-4Y", "5-6Y", "7-8Y"] },
  { id: "K302", name: "Girls' Layered Sparkle Princess Frock", category: "kids", subCategory: "girls-frocks", price: 799, mrp: 1499, rating: 4.9, reviews: 160, tag: "Trending", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&auto=format&fit=crop&q=80", sizes: ["2-3Y", "4-5Y", "6-7Y"] },
  { id: "K303", name: "Girls' Pure Silk Traditional Pattu Pavadai", category: "kids", subCategory: "girls-frocks", price: 1199, mrp: 2199, rating: 5.0, reviews: 90, tag: "Heritage", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=80", sizes: ["2-3Y", "4-5Y", "6-7Y"] },

  // FOOTWEAR
  { id: "F401", name: "Air Cushion Lightweight Sports Sneakers", category: "footwear", subCategory: "sneakers", price: 1499, mrp: 2999, rating: 4.9, reviews: 420, tag: "Hot Seller", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=80", sizes: ["7", "8", "9", "10"] },
  { id: "F402", name: "Women's Comfort Block Heel Sandals", category: "footwear", subCategory: "heels", price: 899, mrp: 1799, rating: 4.6, reviews: 110, tag: "Top Rated", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=80", sizes: ["5", "6", "7", "8"] },
  { id: "F403", name: "Men's Handcrafted Oxford Brogues", category: "footwear", subCategory: "sneakers", price: 1799, mrp: 3499, rating: 4.9, reviews: 86, tag: "Luxury", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80", sizes: ["7", "8", "9", "10"] }
];

let currentMainCat = 'all';
let currentSubCat = 'all';
let currentSearch = '';
let currentSort = 'popular';
let activeSize = null;
let selectedSizes = {};
let discountAmount = 0;

let cart = JSON.parse(localStorage.getItem('asfashions_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('asfashions_wishlist') || '[]');

// RENDER PRODUCTS
function renderCatalog() {
  let list = products.filter(p => {
    const matchesCat = currentMainCat === 'all' || p.category === currentMainCat;
    const matchesSub = currentSubCat === 'all' || p.subCategory === currentSubCat;
    const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase());
    const matchesSize = !activeSize || p.sizes.includes(activeSize);
    return matchesCat && matchesSub && matchesSearch && matchesSize;
  });

  if (currentSort === 'low-high') list.sort((a, b) => a.price - b.price);
  if (currentSort === 'high-low') list.sort((a, b) => b.price - a.price);
  if (currentSort === 'discount') list.sort((a, b) => ((b.mrp - b.price)/b.mrp) - ((a.mrp - a.price)/a.mrp));

  const grid = document.getElementById('productGrid');
  document.getElementById('itemCountDisplay').innerText = `Showing ${list.length} curated styles`;

  grid.innerHTML = '';
  if(list.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-16 text-neutral-400 text-xs">No items found in this section.</div>`;
    return;
  }

  list.forEach(p => {
    const isWishlisted = wishlist.includes(p.id);
    const curSize = selectedSizes[p.id] || p.sizes[0];

    grid.innerHTML += `
      <div class="product-img-hover bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between group">
        <div>
          <div class="relative overflow-hidden aspect-[3/4] bg-neutral-50">
            <img src="${p.image}" class="w-full h-full object-cover transition duration-700">
            <img src="${p.hoverImage}" class="back-img absolute inset-0 w-full h-full object-cover opacity-0 transition duration-700">
            <span class="absolute top-2.5 left-2.5 bg-black text-white text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm">${p.tag}</span>
            <button onclick="toggleWishlistItem('${p.id}')" class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center">
              <i class="fa-${isWishlisted ? 'solid text-rose-600' : 'regular text-neutral-600'} fa-heart text-xs"></i>
            </button>
          </div>

          <div class="p-3.5 space-y-1.5">
            <div class="flex items-center space-x-1 text-[9px] text-amber-500 font-bold">
              <span>★ ${p.rating}</span>
              <span class="text-neutral-400 font-normal">(${p.reviews})</span>
            </div>
            <h3 class="text-xs font-bold text-neutral-900 line-clamp-1">${p.name}</h3>
            <div class="flex items-baseline space-x-1.5">
              <span class="text-xs sm:text-sm font-black text-black">₹${p.price}</span>
              <span class="text-[10px] text-neutral-400 line-through">₹${p.mrp}</span>
              <span class="text-[9px] font-black text-rose-600">${Math.round(((p.mrp - p.price)/p.mrp)*100)}% OFF</span>
            </div>
            <div class="pt-1 flex flex-wrap gap-1">
              ${p.sizes.map(s => `
                <button onclick="selectProductSize('${p.id}', '${s}')" class="text-[8px] px-1.5 py-0.5 rounded border font-bold ${curSize === s ? 'bg-black text-white border-black' : 'bg-neutral-50 text-neutral-600 border-neutral-200'}">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="p-3.5 pt-0">
          <button onclick="addToBag('${p.id}')" class="w-full bg-neutral-900 hover:bg-rose-600 text-white text-[11px] font-extrabold py-2.5 rounded-xl uppercase tracking-wider transition shadow-xs">
            Add to Bag
          </button>
        </div>
      </div>
    `;
  });
  updateBadges();
}

function setMainCategory(cat) {
  currentMainCat = cat;
  currentSubCat = 'all';
  document.querySelectorAll('.main-cat-tab').forEach(b => {
    b.classList.toggle('text-rose-600', b.dataset.cat === cat);
  });
  renderCatalog();
}

function filterVisualSubcategory(cat, sub) {
  currentMainCat = cat;
  currentSubCat = sub;
  document.getElementById('activeFilterLabel').innerText = `${sub.replace('-', ' ').toUpperCase()}`;
  renderCatalog();
  document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
}

function handleSearch(val) { currentSearch = val; renderCatalog(); }
function selectProductSize(id, sz) { selectedSizes[id] = sz; renderCatalog(); }
function filterBySize(s) { activeSize = activeSize === s ? null : s; renderCatalog(); }
function resetCatalog() { currentMainCat = 'all'; currentSubCat = 'all'; currentSearch = ''; activeSize = null; renderCatalog(); }

// SORT BOTTOM SHEET (NO BROWSER POPUPS)
function openSortBottomSheet() { document.getElementById('sortSheetModal').classList.remove('hidden'); }
function closeSortBottomSheet() { document.getElementById('sortSheetModal').classList.add('hidden'); }
function selectSortOption(val) { currentSort = val; closeSortBottomSheet(); renderCatalog(); }

// FILTER DRAWER
function openFilterDrawer() { document.getElementById('filterDrawerModal').classList.remove('hidden'); }
function closeFilterDrawer() { document.getElementById('filterDrawerModal').classList.add('hidden'); }

// WISHLIST LOGIC
function toggleWishlistItem(id) {
  if(wishlist.includes(id)) wishlist = wishlist.filter(i => i !== id);
  else wishlist.push(id);
  localStorage.setItem('asfashions_wishlist', JSON.stringify(wishlist));
  renderCatalog();
}

function toggleWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  const listEl = document.getElementById('wishlistItemsList');
  document.getElementById('wishlistTotalCount').innerText = wishlist.length;

  listEl.innerHTML = '';
  if(wishlist.length === 0) {
    listEl.innerHTML = `<div class="text-center py-8 text-neutral-400 text-xs">Wishlist is empty.</div>`;
  } else {
    wishlist.forEach(id => {
      const item = products.find(p => p.id === id);
      if(item) {
        listEl.innerHTML += `
          <div class="py-2.5 flex items-center justify-between gap-3">
            <img src="${item.image}" class="w-12 h-12 object-cover rounded-xl border">
            <div class="flex-1">
              <h4 class="text-xs font-bold text-neutral-900 line-clamp-1">${item.name}</h4>
              <p class="text-xs font-black text-rose-600">₹${item.price}</p>
            </div>
            <button onclick="addToBag('${item.id}'); toggleWishlistModal();" class="bg-black text-white px-3 py-1.5 rounded-xl text-[10px] font-bold">Add to Bag</button>
          </div>
        `;
      }
    });
  }
  modal.classList.toggle('hidden');
}

// BAG & CART ENGINE
function addToBag(id) {
  const p = products.find(i => i.id === id);
  const chosenSize = selectedSizes[id] || p.sizes[0];
  const existing = cart.find(i => i.id === id && i.selectedSize === chosenSize);
  if(existing) existing.qty += 1;
  else cart.push({ ...p, qty: 1, selectedSize: chosenSize });
  persistCart();
  toggleCart(true);
}

function persistCart() {
  localStorage.setItem('asfashions_cart', JSON.stringify(cart));
  updateBadges();
  renderCartUI();
}

function updateBadges() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCountBadge').innerText = count;
  document.getElementById('cartCountTitle').innerText = count;
  document.getElementById('wishlistBadge').innerText = wishlist.length;
}

function renderCartUI() {
  const list = document.getElementById('cartItemList');
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const finalPayable = Math.max(0, subtotal - discountAmount);

  document.getElementById('billSubtotal').innerText = `₹${subtotal}`;
  document.getElementById('billTotal').innerText = `₹${finalPayable}`;

  list.innerHTML = '';
  if(cart.length === 0) {
    list.innerHTML = `<div class="text-center py-12 text-neutral-400 text-xs font-medium">Your shopping bag is empty.</div>`;
    return;
  }

  cart.forEach(item => {
    list.innerHTML += `
      <div class="py-3 flex items-center justify-between gap-3">
        <img src="${item.image}" class="w-12 h-12 object-cover rounded-xl border">
        <div class="flex-1">
          <h4 class="text-xs font-bold text-neutral-900 line-clamp-1">${item.name}</h4>
          <p class="text-[10px] text-neutral-500">₹${item.price} • Size: <strong>${item.selectedSize}</strong></p>
          <div class="flex items-center space-x-2 mt-1">
            <button onclick="modifyQty('${item.id}', '${item.selectedSize}', -1)" class="w-5 h-5 bg-neutral-100 rounded text-xs font-bold">-</button>
            <span class="text-xs font-bold">${item.qty}</span>
            <button onclick="modifyQty('${item.id}', '${item.selectedSize}', 1)" class="w-5 h-5 bg-neutral-100 rounded text-xs font-bold">+</button>
          </div>
        </div>
        <div class="text-right">
          <span class="text-xs font-extrabold text-neutral-900">₹${item.price * item.qty}</span>
          <button onclick="deleteItem('${item.id}', '${item.selectedSize}')" class="block text-[10px] text-rose-600 font-bold hover:underline mt-1">Remove</button>
        </div>
      </div>
    `;
  });
}

function modifyQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.selectedSize === size);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => !(i.id === id && i.selectedSize === size));
  persistCart();
}

function deleteItem(id, size) {
  cart = cart.filter(i => !(i.id === id && i.selectedSize === size));
  persistCart();
}

function toggleCart(forceOpen = false) {
  const modal = document.getElementById('cartModal');
  if(forceOpen) modal.classList.remove('hidden');
  else modal.classList.toggle('hidden');
  renderCartUI();
}

function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  if(subtotal === 0) return;

  if(code === 'ASF40') {
    discountAmount = Math.round(subtotal * 0.40);
    msg.innerText = `✓ Applied 40% (₹${discountAmount}) Discount!`;
    msg.className = "text-[10px] font-bold text-green-600 block";
  } else {
    discountAmount = 0;
    msg.innerText = "✕ Invalid Code. Use: ASF40";
    msg.className = "text-[10px] font-bold text-rose-600 block";
  }
  renderCartUI();
}

function openCheckoutModal() {
  if(cart.length === 0) return alert("Please add items to cart!");
  toggleCart();
  document.getElementById('checkoutModal').classList.remove('hidden');
}
function closeCheckoutModal() { document.getElementById('checkoutModal').classList.add('hidden'); }

// DIRECT ORDER PLACEMENT
function processWebsiteOrder(e) {
  e.preventDefault();
  const orderId = 'ASF-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const finalAmount = Math.max(0, subtotal - discountAmount);

  const newOrder = {
    orderId: orderId,
    date: new Date().toLocaleString(),
    customerName: document.getElementById('custName').value,
    phone: document.getElementById('custPhone').value,
    address: document.getElementById('custAddress').value,
    items: [...cart],
    totalAmount: finalAmount,
    status: "Pending"
  };

  const existingOrders = JSON.parse(localStorage.getItem('asfashions_orders') || '[]');
  existingOrders.unshift(newOrder);
  localStorage.setItem('asfashions_orders', JSON.stringify(existingOrders));

  cart = [];
  discountAmount = 0;
  persistCart();
  closeCheckoutModal();
  alert(`Order Confirmed! Order ID: ${orderId}`);
}

// SECRET PIN-PROTECTED ORDERS CRM (PIN: 1234)
function promptAdminPin() {
  const pin = prompt("Enter 4-Digit Security PIN:");
  if(pin === "1234") {
    openAdminOrdersModal();
  } else if(pin !== null) {
    alert("Invalid Security PIN!");
  }
}

function openAdminOrdersModal() {
  const container = document.getElementById('adminOrdersContainer');
  const orders = JSON.parse(localStorage.getItem('asfashions_orders') || '[]');
  if(orders.length === 0) {
    container.innerHTML = `<div class="text-center py-10 text-neutral-400 text-xs">No orders received yet.</div>`;
  } else {
    container.innerHTML = `
      <table class="w-full text-left text-xs">
        <thead class="bg-neutral-50 border-b">
          <tr>
            <th class="p-2.5">Order ID</th>
            <th class="p-2.5">Customer</th>
            <th class="p-2.5">Items</th>
            <th class="p-2.5">Amount</th>
            <th class="p-2.5">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          ${orders.map(o => `
            <tr>
              <td class="p-2.5 font-bold">${o.orderId}</td>
              <td class="p-2.5">${o.customerName} (${o.phone})</td>
              <td class="p-2.5">${o.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</td>
              <td class="p-2.5 font-bold text-rose-600">₹${o.totalAmount}</td>
              <td class="p-2.5"><span class="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded">${o.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  document.getElementById('adminOrdersModal').classList.remove('hidden');
}
function closeAdminOrdersModal() { document.getElementById('adminOrdersModal').classList.add('hidden'); }

// AUTO SLIDER
let slideIdx = 0;
setInterval(() => {
  slideIdx = slideIdx === 0 ? 1 : 0;
  document.getElementById('slide-1').style.opacity = slideIdx === 0 ? '1' : '0';
  document.getElementById('slide-2').style.opacity = slideIdx === 1 ? '1' : '0';
}, 4500);

// INITIAL LOAD
renderCatalog();
