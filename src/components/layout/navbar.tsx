
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Award, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: Briefcase }, // Changed href
  { href: '#experience', label: 'Experience', icon: Award },
  { href: '#resume', label: 'Resume', icon: FileText },
  { href: '#contact', label: 'Contact', icon: Send },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold text-accent hover:opacity-80 transition-opacity flex flex-col leading-tight">
            <span>Gordon Hatcher</span>
            <span>Engineering Portfolio</span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-primary hover:text-accent transition-colors duration-300 font-medium flex items-center space-x-1"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X className="text-accent" /> : <Menu className="text-accent" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg absolute w-full left-0 top-20">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary hover:text-accent hover:bg-secondary px-3 py-2 rounded-md transition-colors duration-300 font-medium flex items-center space-x-2"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
