import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    /* FIXED: Enforced w-full and overflow-x-hidden for layout perimeter protection */
    <footer className="bg-card border-t border-border py-12 text-sm text-muted-foreground w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-base font-bold text-foreground transition-opacity hover:opacity-90"
          >
            <img
              src="/mobibridge.png"
              alt="MobiBridge Logo"
              className="h-6 w-6 object-contain"
            />
            <span>MobiBridge</span>
          </Link>

          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            The operational infrastructure layer built seamlessly alongside
            existing ecosystems to handle tracking pipelines gracefully.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3">
            Product
          </h4>
          <ul className="space-y-2 text-xs list-none pl-0 m-0">
            <li>
              <Link
                to="/product"
                className="hover:text-primary transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-primary transition-colors"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="/who-its-for"
                className="hover:text-primary transition-colors"
              >
                Target Audience
              </Link>
            </li>
            <li>
              <Link
                to="/security"
                className="hover:text-primary transition-colors"
              >
                Security & Trust
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3">
            Company
          </h4>
          <ul className="space-y-2 text-xs list-none pl-0 m-0">
            <li>
              <Link
                to="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/impact"
                className="hover:text-primary transition-colors"
              >
                Impact Reporting
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-3">
            Get Started
          </h4>
          <ul className="space-y-2 text-xs list-none pl-0 m-0">
            <li>
              <Link
                to="/early-access"
                className="hover:text-primary transition-colors"
              >
                Registration Access
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* FIXED: Applied subtle layout-width padding defenses to prevent horizontal shifting */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground/80 w-full">
        <p className="whitespace-normal leading-normal">
          &copy; {new Date().getFullYear()} MobiBridge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
