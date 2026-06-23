import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="bg-background text-foreground font-sans antialiased [font-feature-settings:'ss01','cv11'] min-h-screen w-full overflow-x-hidden">
      {/* =========================================================================
          HERO / PAGE HEADER SECTION
         ========================================================================= */}
      <header className="relative overflow-hidden bg-hero py-16 sm:py-20 lg:py-24 border-b border-border">
        {/* MobiBridge Grid Background Overlay */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary block mb-3">
            How it works
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.12] max-w-[720px]">
            From request to{" "}
            <span className="font-italic-serif text-muted-foreground">
              delivery, on one record.
            </span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            MobiBridge standardizes the operational workflow across
            organizations so a request never falls through the cracks between a
            clinic, an NGO and a field team.
          </p>
        </div>
      </header>

      {/* =========================================================================
          TIMELINE PIPELINE SECTION
         ========================================================================= */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 relative">
        {/* FIXED: The line is now visible on mobile, left-aligned perfectly under the mobile-centered numbers */}
        <div className="absolute left-[28px] sm:left-[39px] top-[40px] sm:top-[90px] bottom-[40px] sm:bottom-[90px] w-[1px] bg-border block" />

        <div className="space-y-8 sm:space-y-6 relative">
          {/* STEP 01: REQUEST CREATION */}
          <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 items-start">
            {/* FIXED: Changed to flex-shrink-0 to prevent layout circles from compressing into ovals on multi-line headers */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center font-mono text-[11px] font-bold text-muted-foreground shadow-sm z-10 relative">
              01
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 transition-all hover:border-muted-foreground/30 min-w-0">
              <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground font-mono block mb-1">
                Clinic
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-2">
                Request creation
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                A clinician submits a mobility aid request with patient context,
                urgency and notes. The request enters the shared queue with a
                unique ID.
              </p>
            </div>
          </div>

          {/* STEP 02: REVIEW */}
          <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center font-mono text-[11px] font-bold text-muted-foreground shadow-sm z-10 relative">
              02
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 transition-all hover:border-muted-foreground/30 min-w-0">
              <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground font-mono block mb-1">
                NGO
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-2">
                Review
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                The receiving NGO is notified. A coordinator triages the
                request, validates the details and accepts or routes it
                elsewhere.
              </p>
            </div>
          </div>

          {/* STEP 03: ALLOCATION */}
          <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center font-mono text-[11px] font-bold text-muted-foreground shadow-sm z-10 relative">
              03
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 transition-all hover:border-muted-foreground/30 min-w-0">
              <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground font-mono block mb-1">
                NGO
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-2">
                Allocation
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Available equipment is matched against the request specs. Stock
                is reserved against the request, visible to all parties.
              </p>
            </div>
          </div>

          {/* STEP 04: DELIVERY */}
          <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center font-mono text-[11px] font-bold text-muted-foreground shadow-sm z-10 relative">
              04
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 transition-all hover:border-muted-foreground/30 min-w-0">
              <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground font-mono block mb-1">
                Field team
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-2">
                Delivery
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                A field agent picks up the equipment and updates status as they
                move. Clinic and NGO see progress in real time.
              </p>
            </div>
          </div>

          {/* STEP 05: CONFIRMATION */}
          <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center font-mono text-[11px] font-bold text-muted-foreground shadow-sm z-10 relative">
              05
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 transition-all hover:border-muted-foreground/30 min-w-0">
              <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground font-mono block mb-1">
                Clinic
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-2">
                Confirmation
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                On handover, recipient confirmation is captured. The request
                closes with a complete, attributed audit trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXCEPTIONS GRID SECTION
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24 grid md:grid-cols-2 gap-6 items-stretch w-full">
        {/* FAILURE HANDLING */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all hover:border-muted-foreground/30 min-w-0">
          <div>
            <div className="w-9 h-9 bg-warning/10 rounded-lg flex items-center justify-center text-warning mb-6">
              <AlertTriangle className="w-5 h-5 stroke-[2]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-3">
              Failure handling
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              When a delivery can't be completed, recipient unavailable, wrong
              size, equipment damaged, the field agent records the reason
              against the request. The NGO sees the exception immediately and
              can act on it without losing context.
            </p>
          </div>
        </div>

        {/* REALLOCATION */}
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all hover:border-muted-foreground/30 min-w-0">
          <div>
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <RefreshCw className="w-4 h-4 stroke-[2.5]" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-3">
              Reallocation
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Failed deliveries return inventory to the available pool. The same
              request can be reallocated to another stock item or routed to
              another NGO, without creating a new request or losing the original
              audit trail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
