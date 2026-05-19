import { motion, AnimatePresence } from 'motion/react';
import { 
  HardHat, 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Hammer,
  Facebook,
  Twitter,
  Instagram,
  ArrowUpRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS } from './constants';

const Navbar = ({ cartCount, onAction }: { cartCount: number; onAction: (m: string) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inventory', id: 'categories' },
    { name: 'Products', id: 'products' },
    { name: 'Quote Tool', id: 'quote' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-industrial-gray py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-brand text-white font-black text-xl sm:text-2xl p-1.5 sm:p-2 leading-none border-2 border-industrial-gray transition-transform group-hover:scale-110">BPD</div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-sm sm:text-lg tracking-tighter uppercase text-industrial-gray">Builders' Point</span>
            <span className="text-[8px] sm:text-[10px] font-mono font-bold tracking-widest uppercase opacity-60 text-industrial-gray">Depo Ltd.</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-industrial-gray">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} 
              className="font-display font-bold text-xs uppercase tracking-tighter transition-colors relative group hover:text-brand"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => onAction('Account portal coming soon!')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-tighter hidden sm:block border-2 bg-industrial-gray text-white border-industrial-gray hover:bg-brand hover:border-brand transition-colors"
          >
            My Account
          </button>
          <div className="border-2 border-industrial-gray px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-tighter relative bg-white text-industrial-gray shadow-sm">
            <span className="hidden xs:inline">Cart </span>({cartCount})
          </div>
          <button 
            className="md:hidden p-1.5 sm:p-2 text-industrial-gray"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={() => onAction('Our sales team will contact you shortly.')}
            className="hidden md:flex border-2 border-industrial-gray px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors bg-brand text-white hover:bg-industrial-gray"
          >
            Sales
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-brand text-white font-black text-2xl p-2 leading-none border-2 border-industrial-gray">BPD</div>
                <span className="font-display font-black text-xl tracking-tighter text-industrial-gray uppercase italic">Builders' Point</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-industrial-gray">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={`#${item.id}`} 
                  className="font-display font-black text-4xl uppercase tracking-tighter text-industrial-gray hover:text-brand transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onAction('Registration coming soon!'); }}
                className="w-full bg-brand text-white font-display font-black py-5 brutal-border uppercase italic"
              >
                Contractor Login
              </button>
              <div className="flex justify-center gap-8 py-4 opacity-40">
                <Facebook size={24} onClick={() => onAction('OPENING FACEBOOK...')} className="cursor-pointer" />
                <Twitter size={24} onClick={() => onAction('OPENING TWITTER...')} className="cursor-pointer" />
                <Instagram size={24} onClick={() => onAction('OPENING INSTAGRAM...')} className="cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-industrial-gray pt-32 md:pt-24">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/src/assets/images/hero_construction_1779113263489.png" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20 z-0" />
      <div className="absolute inset-0 bg-industrial-gray/70 md:bg-gradient-to-r md:from-industrial-gray md:via-industrial-gray/60 md:to-transparent z-0" />
      
      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-industrial-gray text-industrial-gray text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 bg-brand" />
            Greater Accra Depot - Accra
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white leading-[0.85] tracking-tighter mb-8 uppercase italic">
            Blocks, Cement <br />
            <span className="text-brand">& Foundations.</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-sm mb-10 font-medium md:mx-0">
            West Africa's #1 hub for verified sandcrete blocks and premium Ghacem cement. Direct from depot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="brutal-button !px-10 !py-4 text-sm"
            >
              Explore Inventory
            </button>
            <button 
              onClick={() => onAction('Bulk ordering panel coming soon.')}
              className="px-10 py-4 bg-white/10 border-2 border-white/20 text-white font-display font-bold uppercase text-sm hover:bg-white hover:text-industrial-gray transition-colors"
            >
              Bulk Ordering
            </button>
          </div>
        </motion.div>

        <div className="hidden md:flex flex-col gap-4 items-end">
          {[
            { id: '01', title: '24hr Readiness', desc: 'Active logistics fleet' },
            { id: '02', title: 'ISO-9001 Quality', desc: 'Verified materials only' },
            { id: '03', title: 'Direct Pricing', desc: 'No middleman costs' },
          ].map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              key={item.id}
              className="bg-white p-6 w-72 border-r-8 border-brand flex flex-col justify-between h-32 hover:bg-brand hover:text-white transition-colors group cursor-default shadow-lg"
            >
              <div className="font-mono text-industrial-gray/20 text-4xl font-black group-hover:text-white/20 transition-colors">{item.id}</div>
              <div>
                <h3 className="font-display font-black text-sm uppercase tracking-tighter leading-none mb-1">{item.title}</h3>
                <p className="text-industrial-gray/40 text-[10px] font-bold group-hover:text-white/60 transition-colors uppercase">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-6 flex items-center gap-8 text-white/30 font-mono text-[10px] tracking-[0.2em] font-bold uppercase vertical-rl rotate-180 hidden lg:flex">
        <span>ESTABLISHED 2024</span>
        <div className="h-20 w-[1px] bg-white/20" />
        <span>GHANA'S LEADING DEPO</span>
      </div>
    </section>
  );
};

const MasonryMarket = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <section className="py-24 bg-industrial-gray border-y-8 border-brand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand/20 animate-pulse" />
            <img 
              src="/src/assets/images/blocks_sandcrete_stack_1779198398636.png" 
              alt="Premium Blocks" 
              className="relative z-10 w-full aspect-video object-cover brutal-border shadow-[20px_20px_0px_rgba(255,153,0,1)]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 brutal-border z-20 hidden md:block">
              <div className="text-brand font-black text-4xl italic">GH₵12</div>
              <div className="text-industrial-gray text-[10px] font-bold uppercase tracking-widest">Starting Price / Unit</div>
            </div>
          </div>
          
          <div>
            <div className="font-mono text-brand font-bold text-sm mb-4 uppercase tracking-[0.3em]">Foundation Special</div>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-none mb-8">
              Verified <br />
              <span className="text-brand">Load-Bearing</span> <br />
              Blocks.
            </h2>
            <p className="text-white/60 text-lg mb-10 font-medium">
              We manufacture our own blocks using high-vibration casting for maximum structural integrity. Delivered within 24 hours of casting.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <ShieldCheck className="text-brand" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase italic">ISO Certified</div>
                  <div className="text-[10px] text-white/40 uppercase">Standard tested</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center border border-white/20">
                  <Truck className="text-brand" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase italic">Fleet Ready</div>
                  <div className="text-[10px] text-white/40 uppercase">30+ Trucks active</div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => onAction('BLOCK QUOTE INITIATED')}
              className="brutal-button mt-12 !bg-white !text-industrial-gray w-full sm:w-auto"
            >
              Order Blocks & Cement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoriesSection = () => {
  return (
    <section className="py-24 bg-white industrial-grid" id="categories">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-brand font-bold text-sm mb-4 uppercase tracking-[0.3em]">Departments</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic">
              Foundational <span className="text-industrial-gray/30">Materials</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-industrial-gray/60 font-medium">
            Browse our specialized departments for heavy equipment, raw materials, and precision tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-industrial-gray">
          {CATEGORIES.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative h-[240px] overflow-hidden border-r-2 last:border-r-0 border-industrial-gray bg-white hover:bg-brand cursor-pointer transition-colors duration-300"
            >
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <span className="font-display font-black text-6xl text-industrial-gray/10 group-hover:text-white/20 transition-colors">0{idx + 1}</span>
                <div>
                  <h3 className="text-industrial-gray group-hover:text-white font-display font-black text-2xl uppercase italic tracking-tighter leading-none">
                    {cat.name.split(' & ')[0]} <br />
                    <span className="text-brand group-hover:text-white transition-colors">{cat.name.split(' & ')[1] || ''}</span>
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                <img src={cat.image} className="w-full h-full object-cover grayscale" alt="" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = ({ onAddToCart, onAction }: { onAddToCart: (productName: string) => void; onAction: (m: string) => void }) => {
  return (
    <section className="py-24 bg-industrial-light" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter uppercase italic text-center sm:text-left">
            Essential <span className="text-brand">Stock</span>
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => onAction('PREVIOUS PAGE UNAVAILABLE')}
              className="p-2 border-2 border-industrial-gray hover:bg-industrial-gray hover:text-white transition-colors"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button 
              onClick={() => onAction('NEXT PAGE UNAVAILABLE')}
              className="p-2 border-2 border-industrial-gray hover:bg-industrial-gray hover:text-white transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-4 overflow-hidden brutal-border aspect-square bg-white">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-industrial-gray text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                    {product.tag}
                  </div>
                )}
                <button 
                  onClick={() => onAddToCart(product.name)}
                  className="absolute bottom-0 left-0 right-0 bg-brand text-white font-display font-black py-3 translate-y-full group-hover:translate-y-0 transition-transform uppercase italic"
                >
                  Add to Truck
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono font-bold text-industrial-gray/40 uppercase tracking-[0.2em]">{product.category}</span>
                  <h4 className="font-display font-black text-sm group-hover:text-brand transition-colors leading-tight mt-1 uppercase italic">{product.name}</h4>
                </div>
                <div className="font-display font-black text-lg text-brand">GH₵{product.price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section className="py-24 bg-industrial-gray overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
        <HardHat size={400} className="text-white" />
      </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative z-10">
        {[
          { icon: <Truck />, title: 'Site Delivery', desc: 'Own logistics fleet ensuring your materials arrive when needed, every time.' },
          { icon: <ShieldCheck />, title: 'Quality Verified', desc: 'Every batch of cement and every length of rebar is tested for structural integrity.' },
          { icon: <Hammer />, title: 'Expert Advice', desc: 'Our engineers are on standby to help you calculate materials for your project.' },
        ].map((benefit, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="mb-6 bg-brand p-4 brutal-border">
              {benefit.icon}
            </div>
            <h3 className="text-white font-display font-bold text-xl mb-4 uppercase tracking-tighter italic">{benefit.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <footer className="bg-industrial-gray pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-brand text-white font-black text-2xl p-2 leading-none border-2 border-white/20">BPD</div>
              <span className="font-display font-black text-2xl tracking-tighter text-white uppercase italic">Builders' Point</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Building Point Depo Ltd is West Africa's leading industrial hub for verified construction materials and heavy equipment logistics.
            </p>
            <div className="flex gap-4">
              <Facebook onClick={() => onAction('OPENING SOCIAL PORTAL...')} className="text-white/40 hover:text-brand cursor-pointer transition-colors" size={20} />
              <Twitter onClick={() => onAction('OPENING SOCIAL PORTAL...')} className="text-white/40 hover:text-brand cursor-pointer transition-colors" size={20} />
              <Instagram onClick={() => onAction('OPENING SOCIAL PORTAL...')} className="text-white/40 hover:text-brand cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          <div>
            <h4 className="font-display font-black uppercase italic mb-8 text-brand tracking-tighter">Inventory</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
              <li><a href="#categories" className="hover:text-brand transition-colors">Structural Steel</a></li>
              <li><a href="#categories" className="hover:text-brand transition-colors">Masonry & Cement</a></li>
              <li><a href="#categories" className="hover:text-brand transition-colors">Timber & Plywood</a></li>
              <li><a href="#categories" className="hover:text-brand transition-colors">Electrical Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase italic mb-8 text-brand tracking-tighter">Operations</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
              <li><span onClick={() => onAction('FLEET STATUS: ACTIVE')} className="hover:text-brand transition-colors cursor-pointer">Fleet Tracking</span></li>
              <li><span onClick={() => onAction('FETCHING COMPLIANCE DOCS...')} className="hover:text-brand transition-colors cursor-pointer">Safety Standards</span></li>
              <li><span onClick={() => onAction('LOAD CALCULATING...')} className="hover:text-brand transition-colors cursor-pointer">Bulk Logistics</span></li>
              <li><span onClick={() => onAction('CREDIT PORTAL OFFLINE')} className="hover:text-brand transition-colors cursor-pointer">Credit Facilities</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase italic mb-8 text-brand tracking-tighter">Depot HQ</h4>
            <div className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/60">
              <div className="flex items-start gap-3 text-white/40">
                <MapPin className="text-brand shrink-0" size={18} />
                <span>Plot 42, Industrial Sector, <br />Lagos-Ibadan Expressway.</span>
              </div>
              <div className="flex items-center gap-3 text-white/40">
                <Phone className="text-brand" size={18} />
                <span>+234 800-BUILD-BPD</span>
              </div>
              <div className="mt-8 bg-white/5 p-6 border-l-4 border-brand">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand mb-4">SYSTEM STATUS: OPTIMAL</p>
                <div className="flex gap-2 mb-4">
                  <input 
                    type="email" 
                    placeholder="DEPOT UPDATES" 
                    className="bg-white/10 border-b border-white/20 py-2 px-3 text-[10px] font-bold text-white focus:outline-none focus:border-brand w-full" 
                  />
                  <button 
                    onClick={() => onAction('SUBSCRIPTION REGISTERED: BPD UPDATES')}
                    className="bg-brand text-industrial-gray p-2 hover:bg-white transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
                <div className="flex gap-1 justify-between text-[8px] font-black uppercase text-white/20">
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-brand"></span> FLEET READY</div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-brand"></span> ISO-9001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.2em]">
          <p>© 2024 BUILDERS' POINT DEPO LTD | DIRECT DEPOT PRICING</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>24HR READINESS</span>
            <span>WEST AFRICA DIV.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState<{ message: string; show: boolean }>({ message: '', show: false });

  const showToast = (message: string) => {
    setNotification({ message, show: true });
    setTimeout(() => setNotification({ message: '', show: false }), 3000);
  };

  const handleAddToCart = (productName: string) => {
    setCartCount(prev => prev + 1);
    showToast(`SUCCESS: ${productName} ADDED TO YOUR TRUCK.`);
  };

  return (
    <div className="min-h-screen selection:bg-brand selection:text-industrial-gray font-sans overflow-x-hidden">
      <Navbar cartCount={cartCount} onAction={showToast} />
      
      {/* Visual Notification System */}
      <AnimatePresence>
        {notification.show && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-industrial-gray text-white px-6 sm:px-8 py-4 border-l-8 border-brand shadow-2xl flex items-center gap-4 w-[calc(100%-48px)] sm:w-auto"
          >
            <div className="w-2 h-2 bg-brand animate-pulse" />
            <span className="font-mono font-black text-xs uppercase tracking-widest">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero onAction={showToast} />
        <CategoriesSection />
        <MasonryMarket onAction={showToast} />
        <Benefits />
        <FeaturedProducts onAddToCart={handleAddToCart} onAction={showToast} />
        
        {/* Call to Action Section */}
        <section className="py-16 sm:py-24 bg-brand px-4 sm:px-6" id="quote">
          <div className="max-w-5xl mx-auto border-4 border-industrial-gray bg-white p-8 sm:p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-black text-industrial-gray italic uppercase leading-[0.9] mb-8">
                Ready to <span className="text-brand">Break Ground</span>?
              </h2>
              <p className="text-industrial-gray/60 text-lg mb-12 max-w-xl mx-auto font-medium">
                Contractors receive exclusive direct depot pricing and 24-hour fleet priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => showToast('REDIRECTING TO REGISTRATION PORTAL...')}
                  className="brutal-button !px-12 !py-5 text-xl"
                >
                  Open Account
                </button>
                <button 
                  onClick={() => showToast('INITIALIZING QUOTE TOOL...') }
                  className="px-12 py-5 border-2 border-industrial-gray text-industrial-gray font-display font-bold uppercase hover:bg-industrial-gray hover:text-white transition-all shadow-md active:shadow-sm"
                >
                  Quote Tool
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onAction={showToast} />
    </div>
  );
}
