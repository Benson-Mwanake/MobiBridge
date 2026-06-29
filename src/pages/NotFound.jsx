import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="bg-background text-foreground font-sans antialiased [font-feature-settings:'ss01','cv11'] min-h-screen w-full overflow-x-hidden flex items-center justify-center py-20 sm:py-28 lg:py-36 relative">
      {/* Signature background grid layer */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="mx-auto max-w-2xl px-4 sm:px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Subtle Accent Indicator */}
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse">
          <HelpCircle className="w-6 h-6" />
        </div>

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary block mb-4 font-mono">
          Error Code: 404
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] max-w-[620px]">
          Route Not Found.{" "}
          <span className="font-italic-serif text-muted-foreground block mt-1">
            We couldn't establish a route to the requested destination.
          </span>
        </h1>

        <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed font-normal max-w-[480px]">
          The page may have been moved, removed, or the link you followed may be
          invalid.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-95 shadow-xs transition-all text-center w-full sm:w-auto"
          >
            <Home className="w-3.5 h-3.5" />
            Return to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors text-center w-full sm:w-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
