"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">LogiTech Solutions</span>
              <Truck className="h-10 w-auto text-primary" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="#services" className="text-base font-medium text-gray-500 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-base font-medium text-gray-500 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-base font-medium text-gray-500 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button variant="outline" className="hidden lg:inline-block">
              Log in
            </Button>
            <Button className="hidden lg:inline-block">Get a Quote</Button>
          </div>
          <div className="lg:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Services
            </Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              About
            </Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Button variant="outline" className="block w-full text-center">
                Log in
              </Button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Button className="block w-full text-center">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}