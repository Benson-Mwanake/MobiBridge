import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Shield,
  Calendar,
} from "lucide-react";

export default function EarlyAccessPage() {
  const valueProps = [
    {
      icon: <Building2 className="w-5 h-5 text-primary" />,
      title: "Inter-organizational workflow",
      desc: "Connect your existing clinical, inventory, or distribution systems seamlessly to a single secure coordination trail.",
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Built-in patient isolation",
      desc: "Maintain rigorous healthcare privacy standards. Control exactly which records are visible to external partners.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-primary" />,
      title: "2026 Pilot Cohort priority",
      desc: "Work closely with our engineering team to shape integration pathways, data residency configurations, and reporting tools.",
    },
  ];

  return (
    <div className="bg-background text-foreground font-sans antialiased [font-feature-settings:'ss01','cv11'] min-h-screen">
      {/* =========================================================================
          HERO / PAGE HEADER SECTION
         ========================================================================= */}
      <header className="relative overflow-hidden bg-hero py-16 sm:py-20 lg:py-24 border-b border-border">
        {/* MobiBridge Grid Background Overlay */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary block mb-3 font-mono">
            Registration
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.12] max-w-[760px]">
            Join the 2026{" "}
            <span className="font-italic-serif text-muted-foreground">
              pilot cohort.
            </span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We are granting early platform access to a select number of clinics,
            NGO coordinators, and distribution teams to deploy shared tracking
            infrastructure.
          </p>
        </div>
      </header>

      {/* =========================================================================
          SPLIT CONTENT GRID: VALUE PROPS & FORM INTAKE
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Value Propositions (Spans 5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-foreground mb-4">
                Shared operational infrastructure.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                MobiBridge sits between independent ecosystems as a dedicated
                coordination layer, eliminating manual WhatsApp loops and
                fragmented logistics tracking sheets.
              </p>
            </div>

            <div className="space-y-6">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-foreground mb-1">
                      {prop.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-xs text-muted-foreground italic">
                Looking for a product evaluation instead? Email us directly at{" "}
                <a
                  href="mailto:pilots@mobibridge.health"
                  className="text-primary underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  pilots@mobibridge.health
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Intake Request Form Panel (Spans 7 Columns) */}
          <div className="lg:col-span-7 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xs">
            <h3 className="font-serif text-xl font-semibold tracking-[-0.02em] text-foreground mb-2">
              Request Platform Invitation
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-6">
              Complete the intake questionnaire below. Our operational team will
              reach out within 5 business days to schedule a technical
              screening.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sarah Jenkins"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Hope Mobility NGO"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., s.jenkins@organization.org"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Your Operational Role
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Logistics Director / Clinician"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                  Primary Region of Operations
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., East Africa / Central America Regional Logistics"
                  className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                  Describe your tracking ecosystem & current workflows
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us briefly about the independent clinics, warehouses, and field teams you coordinate with, along with what systems are currently in place..."
                  className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all resize-none"
                ></textarea>
              </div>

              <div className="bg-muted/50 border border-border/60 rounded-xl p-4 flex gap-3 items-start">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-muted-foreground leading-normal">
                  By submitting this inquiry, you confirm your alignment with
                  baseline secure data architecture principles. MobiBridge
                  enforces strict multi-tenant organizational separation by
                  default.
                </p>
              </div>

              <button
                type="submit"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90 cursor-pointer"
              >
                <span>Submit Cohort Registration Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
