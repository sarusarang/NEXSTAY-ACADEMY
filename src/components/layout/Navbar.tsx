import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Fee & Admission', href: '/admission' },
  { label: 'Placement & Careers', href: '/placement' },
  { label: 'Contact Us', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Seamless backdrop with smooth opacity fade to prevent any flash or sudden lines */}
        <motion.div
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 bg-[#071322]/95 backdrop-blur-md shadow-lg pointer-events-none"
        />

        <div className="relative w-full flex items-center justify-between py-4 px-5 sm:px-8 lg:px-12">

          {/* Brand Logo */}
          <motion.div
            initial={{ opacity: 0, y: -22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/" className="flex items-center group">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                src="/nav-logo-new.png"
                alt="Nexstay Academy"
                className="h-11 sm:h-12 md:h-12 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-0.5">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.95,
                    delay: 0.18 + index * 0.07,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-2.5 xl:px-3 py-1.5 text-[12px] xl:text-[13px] font-bold tracking-[0.06em] uppercase whitespace-nowrap transition-colors duration-200 block drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] ${
                      isActive ? 'text-[#c59b27]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-[2px] bg-gradient-to-r from-[#c59b27] to-[#e5be58] rounded-full"
                        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile Hamburger — only on < lg */}
          <motion.button
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
            whileTap={{ scale: 0.88 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center items-end gap-[5px] p-2 text-white focus:outline-none"
            aria-label="Open menu"
          >
            <span className="w-[22px] h-[2px] bg-white rounded-full" />
            <span className="w-[15px] h-[2px] bg-white rounded-full" />
          </motion.button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-xs sm:max-w-sm bg-[#06101f] z-[70] flex flex-col shadow-2xl border-l border-white/10"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                  <img src="/nav-logo-new.png" alt="Nexstay Academy" className="h-10 w-auto object-contain" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-6 space-y-1">
                {navItems.map((item, idx) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * idx, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-2 font-['Outfit'] font-bold text-xl tracking-wide uppercase border-b border-white/5 transition-all ${
                          isActive
                            ? 'text-[#c59b27] pl-4 border-l-2 border-l-[#c59b27]'
                            : 'text-white/75 hover:text-white hover:pl-4'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-6 py-6 border-t border-white/10 text-[11px] text-white/40 space-y-1">
                <div className="text-white/60 font-semibold uppercase tracking-wider text-xs">Nexstay Academy</div>
                <div>6th Floor, V-Zone Building, Parayancheri, Calicut</div>
                <div>+91 77367 97333</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
