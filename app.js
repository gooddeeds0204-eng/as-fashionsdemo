// COMPLETE MALL CATALOG DATA ENGINE (MEN, WOMEN, KIDS, FOOTWEAR, HOME LIVING)
const products = [
  // 1. BEST OF FASHION / APPAREL
  { id: "BF-1", brand: "ONLY", name: "Women Black Flared Western Dress", category: "women", subCategory: "western", price: 1499, mrp: 2499, badge: "NEW", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=80", sizes: ["S", "M", "L"], rating: 4.8, reviews: 190 },
  { id: "BF-2", brand: "BIBA", name: "Floral Embroidered Festive Kurta Set", category: "women", subCategory: "sarees", price: 1049, mrp: 1499, badge: "-30%", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop&q=80", sizes: ["M", "L", "XL"], rating: 4.9, reviews: 310 },
  { id: "BF-3", brand: "JACK & JONES", name: "Men Slim Fit Cotton Casual Shirt", category: "men", subCategory: "formal-shirts", price: 1799, mrp: 2799, badge: "NEW", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80", sizes: ["M", "L", "XL"], rating: 4.7, reviews: 140 },
  { id: "BF-4", brand: "ONLY", name: "Women High-Rise Stretch Denim Jeans", category: "women", subCategory: "western", price: 1349, mrp: 1799, badge: "-25%", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1542272604-780c96856484?w=500&auto=format&fit=crop&q=80", sizes: ["28", "30", "32"], rating: 4.8, reviews: 94 },
  { id: "BF-5", brand: "ROADSTER", name: "Men's Crewneck Cotton Sweatshirt", category: "men", subCategory: "formal-shirts", price: 999, mrp: 1599, badge: "NEW", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80", sizes: ["M", "L", "XL"], rating: 4.9, reviews: 215 },
  
  // 2. HOME & LIVING (BEDSHEETS, CURTAINS, DECOR, TOWELS)
  { id: "HL-1", brand: "SPACES", name: "Luxury 300 TC Pure Cotton Double Bedsheet", category: "home-living", subCategory: "bedsheets", price: 1299, mrp: 2499, badge: "Home Special", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80", sizes: ["King", "Queen"], rating: 4.9, reviews: 180 },
  { id: "HL-2", brand: "D'DECOR", name: "Jacquard Room Darkening Long Curtains (Set of 2)", category: "home-living", subCategory: "curtains", price: 1499, mrp: 2999, badge: "-50%", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=80", sizes: ["7ft", "9ft"], rating: 4.8, reviews: 120 },
  { id: "HL-3", brand: "HOME CENTRE", name: "Velvet Embroidered Cushion Covers (Pack of 5)", category: "home-living", subCategory: "decor", price: 699, mrp: 1399, badge: "Best Seller", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80", sizes: ["16x16"], rating: 4.7, reviews: 88 },
  { id: "HL-4", brand: "TRIDENT", name: "Ultra Soft 600 GSM Cotton Bath Towel Set", category: "home-living", subCategory: "bedsheets", price: 899, mrp: 1799, badge: "Top Rated", image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=80", sizes: ["Pack of 2"], rating: 4.9, reviews: 310 },
  
  // 3. FOOTWEAR HUB
  { id: "FW-1", brand: "NIKE", name: "Air Cushion Lightweight Sports Running Sneakers", category: "footwear", subCategory: "sneakers", price: 1999, mrp: 3999, badge: "Hot Seller", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=80", sizes: ["7", "8", "9", "10"], rating: 5.0, reviews: 450 },
  { id: "FW-2", brand: "ALDO", name: "Women's Elegant Strappy Block Heel Sandals", category: "footwear", subCategory: "heels", price: 1299, mrp: 2499, badge: "Trending", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=80", sizes: ["5", "6", "7", "8"], rating: 4.7, reviews: 112 },
  
  // 4. KIDS UNIVERSE
  { id: "KD-1", brand: "MAX", name: "Boys' Royal Velvet Sherwani Ensemble", category: "kids", subCategory: "kids-wear", price: 849, mrp: 1599, badge: "Festive", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&auto=format&fit=crop&q=80", hoverImage: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&auto=format&fit=crop&q=80", sizes: ["3-4Y", "5-6Y", "7-8Y"], rating: 4.9, reviews: 78 }
];

let selectedDept = 'all';
let selectedSub = 'all';
let searchKeyword = '';
let activeSortOrder = 'popular';
let activeSizeFilter = null;
let couponDiscount = 0;

let cart = JSON.parse(localStorage.getItem('asfashions_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('asfashions_wishlist') || '[]');

// RENDER ALL CATALOG GRIDS
function renderAllCatalogs() {
  // 1. Highlight Showcase (First 3 items)
  const highlightContainer = document.getElementById('highlightGrid');
  if (highlightContainer) {
    highlightContainer.innerHTML = '';
    products.slice(0, 3).forEach(p => {
      const isFav = wishlist.includes(p.id);
      highlightContainer.innerHTML += `
        <div class="product-card bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs flex flex-col justify-between group">
          <div>
            <div class="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
              <img src="${p.image}" class="w-full h-full object-cover">
              <img src="${p.hoverImage}" class="hover-img absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500">
              <span class="absolute top-2 left-2 bg-black text-white text-[8px] font-black uppercase px-2 py-0.5 rounded">${p.badge}</span>
              <button onclick="toggleWishlistItem('${p.id}')" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center">
                <i class="fa-${isFav ? 'solid text-[#ff3f6c]' : 'regular text-neutral-600'} fa-heart text-xs"></i>
              </button>
            </div>
            <div class="p-3 space-y-1">
              <span class="text-[10px] font-black uppercase tracking-wider text-neutral-900 block">${p.brand}</span>
              <h4 class="text-xs font-semibold text-neutral-600 truncate">${p.name}</h4>
              <div class="flex items-baseline space-x-1.5 pt-0.5">
                <span class="text-xs font-black text-black">₹${p.price}</span>
                <span class="text-[10px] text-neutral-400 line-through">₹${p.mrp}</span>
                <span class="text-[9px] font-black text-[#ff3f6c]">${Math.round(((p.mrp - p.price)/p.mrp)*100)}% OFF</span>
              </div>
            </div>
          </div>
          <div class="p-3 pt-0">
            <button onclick="addToBag('${p.id}')" class="w-full bg-neutral-900 hover:bg-[#ff3f6c] text-white text-xs font-bold py-2 rounded-xl transition">
              Add to Bag
            </button>
          </div>
        </div>
      `;
    });
  }

  // 2. Full Catalog Grid With Multi-Filtering
  const maxPrice = parseInt(document.getElementById('priceSlider')?.value || 4000);
  const minDiscount = parseInt(document.querySelector('input[name="discFilter"]:checked')?.value || 0);

  let list = products.filter(p => {
    const matchesDept = selectedDept === 'all' || p.category === selectedDept;
    const matchesSub = selectedSub === 'all' || p.subCategory === selectedSub;
    const matchesSearch = p.name.toLowerCase().includes(searchKeyword.toLowerCase()) || p.brand.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesPrice = p.price <= maxPrice;
    const matchesSize = !activeSizeFilter || p.sizes.includes(activeSizeFilter);
    const itemDisc = Math.round(((p.mrp - p.price)/p.mrp)*100);
    const matchesDiscount = itemDisc >= minDiscount;

    return matchesDept && matchesSub && matchesSearch && matchesPrice && matchesSize && matchesDiscount;
  });

  if (activeSortOrder === 'low-high') list.sort((a, b) => a.price - b.price);
  if (activeSortOrder === 'high-low') list.sort((a, b) => b.price - a.price);
  if (activeSortOrder === 'discount') list.sort((a, b) => ((b.mrp - b.price)/b.mrp) - ((a.mrp - a.price)/a.mrp));

  const catalogGrid = document.getElementById('fullCatalogGrid');
  const countEl = document.getElementById('itemCountDisplay');
  if (countEl) countEl.innerText = `Showing ${list.length} curated products`;

  if (catalogGrid) {
    catalogGrid.innerHTML = '';
    if(list.length === 0) {
      catalogGrid.innerHTML = `<div class="col-span-full text-center py-20 text-neutral-400 font-bold text-sm">No items found matching the selected filters.</div>`;
      return;
    }

    list.forEach(p => {
      const isFav = wishlist.includes(p.id);
      catalogGrid.innerHTML += `
        <div class="product-card bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs flex flex-col justify-between group">
          <div>
            <div class="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
              <img src="${p.image}" class="w-full h-full object-cover">
              <img src="${p.hoverImage}" class="hover-img absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500">
              <span class="absolute top-2 left-2 bg-black text-white text-[8px] font-black uppercase px-2 py-0.5 rounded">${p.badge}</span>
              <button onclick="toggleWishlistItem('${p.id}')" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 shadow-sm flex items-center justify-center">
                <i class="fa-${isFav ? 'solid text-[#ff3f6c]' : 'regular text-neutral-600'} fa-heart text-xs"></i>
              </button>
            </div>
            <div class="p-3.5 space-y-1">
              <span class="text-[10px] font-black uppercase tracking-wider text-neutral-900 block">${p.brand}</span>
              <h4 class="text-xs font-semibold text-neutral-700 truncate">${p.name}</h4>
              <div class="flex items-baseline space-x-1.5">
                <span class="text-xs font-black text-black">₹${p.price}</span>
                <span class="text-[10px] text-neutral-400 line-through">₹${p.mrp}</span>
                <span class="text-[9px] font-black text-[#ff3f6c]">${Math.round(((p.mrp - p.price)/p.mrp)*100)}% OFF</span>
              </div>
              <div class="pt-1 flex flex-wrap gap-1">
                ${p.sizes.map(s => `<span class="text-[8px] px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-50 text-neutral-600 font-bold">${s}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="p-3.5 pt-0">
            <button onclick="addToBag('${p.id}')" class="w-full bg-black hover:bg-[#ff3f6c] text-white text-xs font-bold py-2.5 rounded-xl transition">
              Add to Bag
            </button>
          </div>
        </div>
      `;
    });
  }

  updateBadges();
}

// FILTER CONTROLLERS
function applyFilters() {
  const slider = document.getElementById('priceSlider');
  const sliderVal = document.getElementById('priceSliderVal');
  if(slider && sliderVal) sliderVal.innerText = `₹${slider.value}`;
  renderAllCatalogs();
}

function toggleSizeFilter(sz) {
  activeSizeFilter = activeSizeFilter === sz ? null : sz;
  document.querySelectorAll('.size-pill').forEach(btn => {
    if(btn.innerText === sz && activeSizeFilter) {
      btn.className = 'size-pill px-2.5 py-1 text-xs rounded-lg border font-bold bg-black text-white border-black';
    } else {
      btn.className = 'size-pill px-2.5 py-1 text-xs rounded-lg border font-bold border-neutral-200 bg-white text-neutral-800';
    }
  });
  renderAllCatalogs();
}

function resetAllFilters() {
  selectedDept = 'all';
  selectedSub = 'all';
  searchKeyword = '';
  activeSizeFilter = null;
  const slider = document.getElementById('priceSlider');
  if(slider) slider.value = 4000;
  const radio = document.querySelector('input[name="discFilter"][value="0"]');
  if(radio) radio.checked = true;
  document.querySelectorAll('.size-pill').forEach(btn => btn.className = 'size-pill px-2.5 py-1 text-xs rounded-lg border font-bold border-neutral-200 bg-white text-neutral-800');
  handleDeptFilter('all');
}

function handleDeptFilter(dept) {
  selectedDept = dept;
  selectedSub = 'all';
  document.querySelectorAll('.nav-dept-link').forEach(b => {
    if(b.dataset.dept === dept) {
      b.className = 'nav-dept-link text-[#ff3f6c] border-b-2 border-[#ff3f6c] py-7 transition font-extrabold';
    } else {
      b.className = 'nav-dept-link hover:text-[#ff3f6c] py-7 transition font-black text-neutral-800';
    }
  });
  const titleEl = document.getElementById('catalogSectionTitle');
  if (titleEl) titleEl.innerText = `${dept.toUpperCase().replace('-', ' ')} Department`;
  renderAllCatalogs();
  document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' });
}

function handleSubcategoryFilter(sub) {
  selectedSub = sub;
  selectedDept = 'all';
  renderAllCatalogs();
  document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' });
}

function filterHighlights(type) {
  document.querySelectorAll('.highlight-tab').forEach(b => {
    if(b.dataset.tab === type) {
      b.className = 'highlight-tab text-black font-extrabold pb-1 border-b-2 border-black';
    } else {
      b.className = 'highlight-tab hover:text-black pb-1';
    }
  });
  renderAllCatalogs();
}

function handleSortOrder(val) { activeSortOrder = val; renderAllCatalogs(); }
function scrollToCatalog() { document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth' }); }

// PREDICTIVE SEARCH LOGIC
function handlePredictiveSearch(val) {
  searchKeyword = val;
  const resultsContainer = document.getElementById('predictiveResultsList');
  const box = document.getElementById('searchSuggestionsBox');

  if(val.trim().length === 0) {
    if(resultsContainer) resultsContainer.innerHTML = '';
    renderAllCatalogs();
    return;
  }

  box?.classList.remove('hidden');
  const matches = products.filter(p => p.name.toLowerCase().includes(val.toLowerCase()) || p.brand.toLowerCase().includes(val.toLowerCase())).slice(0, 4);

  if(resultsContainer) {
    resultsContainer.innerHTML = '';
    if(matches.length === 0) {
      resultsContainer.innerHTML = `<div class="py-2 text-neutral-400 text-xs">No matching products found.</div>`;
    } else {
      matches.forEach(m => {
        resultsContainer.innerHTML += `
          <div onclick="triggerQuickSearch('${m.name}')" class="py-2 flex items-center justify-between cursor-pointer hover:bg-neutral-50 rounded-lg px-2">
            <div class="flex items-center gap-2">
              <img src="${m.image}" class="w-8 h-8 rounded-lg object-cover">
              <div>
                <p class="text-xs font-bold text-neutral-900 line-clamp-1">${m.name}</p>
                <span class="text-[10px] text-neutral-400 font-semibold">${m.brand} • ₹${m.price}</span>
              </div>
            </div>
            <i class="fa fa-arrow-up-right-from-square text-xs text-neutral-400"></i>
          </div>
        `;
      });
    }
  }

  renderAllCatalogs();
}

function openSearchSuggestions() { document.getElementById('searchSuggestionsBox')?.classList.remove('hidden'); }
function triggerQuickSearch(kw) {
  const input = document.getElementById('globalSearchInput');
  if(input) input.value = kw;
  searchKeyword = kw;
  document.getElementById('searchSuggestionsBox')?.classList.add('hidden');
  renderAllCatalogs();
  scrollToCatalog();
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('#globalSearchInput') && !e.target.closest('#searchSuggestionsBox')) {
    document.getElementById('searchSuggestionsBox')?.classList.add('hidden');
  }
});

// MOBILE DRAWERS
function openMobileSortDrawer() { document.getElementById('mobileSortDrawer')?.classList.remove('hidden'); }
function closeMobileSortDrawer() { document.getElementById('mobileSortDrawer')?.classList.add('hidden'); }
function selectSortOption(val) { activeSortOrder = val; closeMobileSortDrawer(); renderAllCatalogs(); }

function openMobileFilterDrawer() { document.getElementById('mobileFilterDrawer')?.classList.remove('hidden'); }
function closeMobileFilterDrawer() { document.getElementById('mobileFilterDrawer')?.classList.add('hidden'); }

// WISHLIST & CART ENGINE
function toggleWishlistItem(id) {
  if(wishlist.includes(id)) wishlist = wishlist.filter(i => i !== id);
  else wishlist.push(id);
  localStorage.setItem('asfashions_wishlist', JSON.stringify(wishlist));
  renderAllCatalogs();
}

function toggleWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  const listEl = document.getElementById('wishlistItemsList');
  const countEl = document.getElementById('wishlistTotalCount');
  if (countEl) countEl.innerText = wishlist.length;

  if (listEl) {
    listEl.innerHTML = '';
    if(wishlist.length === 0) {
      listEl.innerHTML = `<div class="text-center py-6 text-neutral-400 text-xs">Wishlist is empty.</div>`;
    } else {
      wishlist.forEach(id => {
        const item = products.find(p => p.id === id);
        if(item) {
          listEl.innerHTML += `
            <div class="py-2.5 flex items-center justify-between gap-2">
              <img src="${item.image}" class="w-10 h-10 object-cover rounded border">
              <div class="flex-1">
                <h4 class="text-xs font-bold text-neutral-900 truncate">${item.name}</h4>
                <p class="text-xs font-black text-[#ff3f6c]">₹${item.price}</p>
              </div>
              <button onclick="addToBag('${item.id}'); toggleWishlistModal();" class="bg-black text-white px-2 py-1 rounded text-[9px] font-bold">Add to Bag</button>
            </div>
          `;
        }
      });
    }
  }
  modal?.classList.toggle('hidden');
}

function addToBag(id) {
  const p = products.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  if(existing) existing.qty += 1;
  else cart.push({ ...p, qty: 1, selectedSize: p.sizes[0] });
  persistCart();
  toggleCartDrawer(true);
}

function persistCart() {
  localStorage.setItem('asfashions_cart', JSON.stringify(cart));
  updateBadges();
  renderCartView();
}

function updateBadges() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartBadge = document.getElementById('cartCountBadge');
  const cartTitle = document.getElementById('cartCountTitle');
  const wishBadge = document.getElementById('wishlistBadge');

  if (cartBadge) cartBadge.innerText = count;
  if (cartTitle) cartTitle.innerText = count;
  if (wishBadge) wishBadge.innerText = wishlist.length;
}

function renderCartView() {
  const list = document.getElementById('cartItemList');
  const subtotalEl = document.getElementById('billSubtotal');
  const totalEl = document.getElementById('billTotal');

  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const finalPayable = Math.max(0, subtotal - couponDiscount);

  if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
  if (totalEl) totalEl.innerText = `₹${finalPayable}`;

  if (list) {
    list.innerHTML = '';
    if(cart.length === 0) {
      list.innerHTML = `<div class="text-center py-8 text-neutral-400 text-xs">Your bag is empty.</div>`;
      return;
    }

    cart.forEach(item => {
      list.innerHTML += `
        <div class="py-2.5 flex items-center justify-between gap-2">
          <img src="${item.image}" class="w-10 h-10 object-cover rounded border">
          <div class="flex-1">
            <h4 class="text-xs font-bold text-neutral-900 truncate">${item.name}</h4>
            <p class="text-[9px] text-neutral-500">₹${item.price} • Size: ${item.selectedSize}</p>
            <div class="flex items-center space-x-1.5 mt-1">
              <button onclick="modifyQty('${item.id}', -1)" class="w-4 h-4 bg-neutral-100 rounded text-xs font-bold">-</button>
              <span class="text-xs font-bold">${item.qty}</span>
              <button onclick="modifyQty('${item.id}', 1)" class="w-4 h-4 bg-neutral-100 rounded text-xs font-bold">+</button>
            </div>
          </div>
          <button onclick="deleteItem('${item.id}')" class="text-[10px] text-[#ff3f6c] font-bold">Remove</button>
        </div>
      `;
    });
  }
}

function modifyQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  persistCart();
}

function deleteItem(id) {
  cart = cart.filter(i => i.id !== id);
  persistCart();
}

function toggleCartDrawer(forceOpen = false) {
  const modal = document.getElementById('cartModal');
  if(forceOpen) modal?.classList.remove('hidden');
  else modal?.classList.toggle('hidden');
  renderCartView();
}

function applyPromoCoupon() {
  const input = document.getElementById('couponInput');
  const msg = document.getElementById('couponMsg');
  const code = input?.value.trim().toUpperCase();
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  if(subtotal === 0) return;

  if(code === 'ASF40') {
    couponDiscount = Math.round(subtotal * 0.40);
    if (msg) {
      msg.innerText = `✓ Applied 40% (₹${couponDiscount}) Discount!`;
      msg.className = "text-[10px] font-bold text-green-600 block";
    }
  } else {
    couponDiscount = 0;
    if (msg) {
      msg.innerText = "✕ Invalid Code. Use: ASF40";
      msg.className = "text-[10px] font-bold text-[#ff3f6c] block";
    }
  }
  renderCartView();
}

function openCheckoutModal() {
  if(cart.length === 0) return alert("Please add items to cart!");
  toggleCartDrawer();
  document.getElementById('checkoutModal')?.classList.remove('hidden');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.add('hidden');
}

function processWebsiteOrder(e) {
  e.preventDefault();
  const orderId = 'ASF-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const finalAmount = Math.max(0, subtotal - couponDiscount);

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
  couponDiscount = 0;
  persistCart();
  closeCheckoutModal();
  alert(`Order Placed Successfully! Order ID: ${orderId}`);
}

// INITIAL STARTUP
renderAllCatalogs();
