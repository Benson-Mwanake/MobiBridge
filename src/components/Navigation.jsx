import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl h-20 px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground hover:opacity-90 transition-opacity"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-lg font-semibold shadow-xs">
            M
          </span>
          <span>MobiBridge</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/product" className="hover:text-primary transition-colors">
            Product
          </Link>
          <Link
            to="/how-it-works"
            className="hover:text-primary transition-colors"
          >
            How it works
          </Link>
          <Link
            to="/who-its-for"
            className="hover:text-primary transition-colors"
          >
            Who it's for
          </Link>
          <Link to="/impact" className="hover:text-primary transition-colors">
            Impact
          </Link>
          <Link to="/security" className="hover:text-primary transition-colors">
            Security
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
        </div>

        {/* Desktop Header CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/early-access"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90"
          >
            <span>Request early access</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-muted-foreground hover:text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 pt-2 pb-6 space-y-4 flex flex-col">
          <Link
            to="/product"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            to="/how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How it works
          </Link>
          <Link
            to="/who-its-for"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Who it's for
          </Link>
          <Link
            to="/impact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Impact
          </Link>
          <Link
            to="/security"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Security
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <hr className="border-border" />

          <Link
            to="/early-access"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90 w-full"
            onClick={() => setIsOpen(false)}
          >
            <span>Get early access</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
