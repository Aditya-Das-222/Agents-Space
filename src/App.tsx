/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  ArrowRight, 
  Heart, 
  ThumbsUp, 
  CheckCircle2, 
  Globe,
  ChevronRight,
  User,
  MessageSquare,
  Zap,
  BookOpen,
  Mail
} from 'lucide-react';
import { PRODUCTS, MENTORSHIPS, Product, Mentorship } from './types';

type Language = 'bn' | 'en';

const translations = {
  nav: {
    home: { bn: 'হোম', en: 'Home' },
    aiSystem: { bn: 'এআই সিস্টেম', en: 'AI System' },
    faq: { bn: 'প্রশ্নোত্তর', en: 'FAQ' },
    aiProgram: { bn: 'এআই প্রোগ্রাম', en: 'AI Program' },
    founder: { bn: 'ফাউন্ডার', en: 'Founder' },
    contact: { bn: 'যোগাযোগ', en: 'Contact' },
  },
  hero: {
    title: { bn: 'এজেন্টিক সিস্টেম এবং রিসোর্স লাইব্রেরি', en: 'Agentic Systems & Resource Library' },
    subtitle: { bn: 'আপনার ব্যবসার জন্য সেরা এআই টুলস এবং অটোমেশন রিসোর্স।', en: 'The best AI tools and automation resources for your business.' },
  },
  sections: {
    marketplace: { bn: 'এজেন্টিক সিস্টেম এবং রিসোর্স লাইব্রেরি', en: 'Agentic Systems & Resource Library' },
    mentorship: { bn: 'এআই মেন্টরশিপ প্রোগ্রাম', en: 'AI Mentorship Program' },
  },
  buttons: {
    seeMore: { bn: 'আরও এজেন্টিক সিস্টেম দেখুন', en: 'See More Agentic Systems' },
    exploreMentorship: { bn: 'এআই মেন্টরশিপ প্রোগ্রাম এক্সপ্লোর করুন', en: 'Explore AI Mentorship Program' },
    viewDetails: { bn: 'বিস্তারিত দেখুন', en: 'View Details' },
    ctaText: { bn: 'টেমপ্লেটের বদলে ব্যক্তিগত গাইডেন্স চান?', en: 'Want personalized guidance instead of templates?' },
  },
  labels: {
    sales: { bn: 'টি বিক্রি', en: 'Sales' },
    wishlist: { bn: 'সেভ করা হয়েছে', en: 'saved' },
    likes: { bn: 'জন পছন্দ করেছেন', en: 'people liked this' },
    price: { bn: 'টাকা', en: 'BDT' },
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const t = (key: string, subKey?: string) => {
    if (subKey) {
      // @ts-ignore
      return translations[key][subKey][lang];
    }
    // @ts-ignore
    return translations[key][lang];
  };

  const visibleProducts = showAllProducts ? PRODUCTS : PRODUCTS.slice(0, 4);

  const toggleLang = () => setLang(prev => prev === 'bn' ? 'en' : 'bn');

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-white border border-black/10 rounded-2xl px-6 py-3 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Zap className="w-6 h-6 fill-black" />
            <span>ADITYA.AI</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['home', 'aiSystem', 'faq', 'aiProgram', 'founder', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-sm font-medium hover:text-black/60 transition-colors"
              >
                {t('nav', item)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-1.5 border border-black rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all"
            >
              <Globe className="w-4 h-4" />
              {lang === 'bn' ? 'English' : 'বাংলা'}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-white border border-black/10 rounded-2xl p-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {['home', 'aiSystem', 'faq', 'aiProgram', 'founder', 'contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium border-b border-black/5 pb-2"
                  >
                    {t('nav', item)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            {t('hero', 'title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-black/60 max-w-2xl mx-auto mb-10"
          >
            {t('hero', 'subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Digital Products Section */}
      <section id="aiSystem" className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('sections', 'marketplace')}</h2>
            <div className="h-1 w-20 bg-black rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
                  <img 
                    src={product.image} 
                    alt={product.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">
                      {product.sales} {t('labels', 'sales')}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.title[lang]}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold">{product.price} {t('labels', 'price')}</span>
                    <button className="flex items-center gap-1 text-sm font-bold bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-colors">
                      {t('buttons', 'viewDetails')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAllProducts && PRODUCTS.length > 4 && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAllProducts(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-black rounded-2xl font-bold hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {t('buttons', 'seeMore')}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-y border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">{t('buttons', 'ctaText')}</h3>
          <a 
            href="#aiProgram"
            className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            {t('buttons', 'exploreMentorship')}
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="aiProgram" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('sections', 'mentorship')}</h2>
            <div className="h-1 w-20 bg-black rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MENTORSHIPS.map((program) => (
              <div 
                key={program.id}
                className="bg-white border border-black/10 rounded-3xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Zap className="w-20 h-20" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight">{program.title[lang]}</h3>
                <div className="text-3xl font-black mb-6">{program.price} {t('labels', 'price')}</div>
                <p className="text-black/60 mb-8">{program.description[lang]}</p>
                
                <div className="flex-grow space-y-3 mb-10">
                  {program.features[lang].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-black/80 transition-colors flex items-center justify-center gap-2">
                  {program.buttonText[lang]}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-black/5 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter mb-6">
              <Zap className="w-8 h-8 fill-black" />
              <span>ADITYA.AI</span>
            </div>
            <p className="text-black/60 max-w-sm mb-8">
              Empowering businesses through agentic automation and strategic AI implementation. Join our community of innovators.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 bg-white border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-black/40">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#home" className="hover:underline">{t('nav', 'home')}</a></li>
              <li><a href="#aiSystem" className="hover:underline">{t('nav', 'aiSystem')}</a></li>
              <li><a href="#aiProgram" className="hover:underline">{t('nav', 'aiProgram')}</a></li>
              <li><a href="#faq" className="hover:underline">{t('nav', 'faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-black/40">Contact</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@aditya.ai</li>
              <li className="flex items-center gap-3"><MessageSquare className="w-4 h-4" /> Support Chat</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-black/5 text-center text-sm text-black/40">
          © {new Date().getFullYear()} ADITYA.AI. All rights reserved. Built with passion for the AI community.
        </div>
      </footer>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors border border-black/5"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full md:w-1/2 bg-stone-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title[lang]} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">
                    {selectedProduct.sales} {t('labels', 'sales')}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{selectedProduct.title[lang]}</h2>
                <div className="text-4xl font-black mb-6">{selectedProduct.price} {t('labels', 'price')}</div>
                
                <p className="text-black/60 mb-8 leading-relaxed">
                  {selectedProduct.description[lang]}
                </p>

                {/* FOMO Features */}
                <div className="flex items-center gap-8 mb-10 border-y border-black/5 py-6">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2 text-rose-500 font-bold">
                      <Heart className="w-5 h-5 fill-rose-500" />
                      <span>{selectedProduct.wishlist}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{t('labels', 'wishlist')}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2 text-blue-500 font-bold">
                      <ThumbsUp className="w-5 h-5 fill-blue-500" />
                      <span>{selectedProduct.likes}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold">{t('labels', 'likes')}</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg hover:bg-black/80 transition-colors flex items-center justify-center gap-3">
                  <ShoppingCart className="w-6 h-6" />
                  Buy Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
