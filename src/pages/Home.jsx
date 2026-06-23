import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Building2,
  HeartPulse,
  HandHeart,
  Shield,
  Truck,
  Landmark,
  PhoneOff,
  Eye,
  Copy,
  FileBarChart,
  FileCheck2,
  Phone,
  FileSpreadsheet,
  MessagesSquare,
  FlaskConical,
  ClipboardCheck,
  Users,
} from "lucide-react";

export default function Home() {
  const targets = [
    { icon: HeartPulse, name: "Clinics" },
    { icon: Building2, name: "Hospitals" },
    { icon: HandHeart, name: "NGOs" },
    { icon: Shield, name: "Rehabilitation centers" },
    { icon: Truck, name: "Field teams" },
    { icon: Landmark, name: "Government programs" },
  ];

  const outcomes = [
    {
      icon: PhoneOff,
      title: "Fewer follow-up calls",
      desc: "Clinics and NGOs share a single view of request progress.",
    },
    {
      icon: Eye,
      title: "Real-time delivery status",
      desc: "Shared visibility from request creation through delivery confirmation.",
    },
    {
      icon: Copy,
      title: "No duplicate data entry",
      desc: "One structured workflow designed to reduce duplicate coordination work.",
    },
    {
      icon: FileBarChart,
      title: "Donor reports from real data",
      desc: "Operational data captured in a format designed for reporting.",
    },
    {
      icon: FileCheck2,
      title: "Complete audit trail",
      desc: "Complete request history with status, allocation and delivery records.",
    },
  ];

  const steps = ["Request", "Review", "Allocate", "Deliver", "Confirm"];

  const validationItems = [
    { icon: FlaskConical, text: "Validating request workflows" },
    { icon: ClipboardCheck, text: "Testing allocation logic" },
    { icon: Users, text: "Co-designing with field teams" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased [font-feature-settings:'ss01','cv11']">
      {/* ==========================================
         1. HERO SECTION
         ========================================== */}
      <section className="relative overflow-hidden bg-hero py-16 sm:py-20 lg:py-24">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-12 items-center relative z-10">
          {/* Left Side: Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-warning animate-pulse" />
              <span>Exploring mobility aid coordination workflows</span>
            </div>

            <h1 className="font-serif text-[34px] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[68px] font-semibold tracking-[-0.02em] leading-[1.05]">
              The coordination layer for{" "}
              <span className="font-italic-serif text-muted-foreground">
                mobility aid
              </span>{" "}
              operations.
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
              Every request represents a person waiting for mobility equipment.
              MobiBridge is being designed to give clinics, NGOs and field teams
              a shared view of what happens next, without replacing the systems
              they already use.
            </p>

            {/* FIXED: Added explicit button widths for clean stacking on ultra-small viewport scales */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90 w-full sm:w-auto"
              >
                Get early access <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/product"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition hover:bg-muted w-full sm:w-auto"
              >
                See the platform <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Mock App Interface */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="rounded-2xl border border-border bg-card shadow-md overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-5 py-3.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <span className="ml-3 text-xs text-muted-foreground font-mono tracking-wide">
                  app.mobibridge.health / dashboard
                </span>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      SHARED QUEUE
                    </p>
                    <h3 className="font-sans text-lg font-semibold tracking-tight mt-0.5">
                      Active requests
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live
                  </span>
                </div>

                {/* Mini Stats Card Strip */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Pending", val: "6", color: "text-warning" },
                    { label: "In transit", val: "3", color: "text-primary" },
                    { label: "Delivered", val: "14", color: "text-success" },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border p-3.5 bg-card"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {stat.label}
                      </p>
                      <p
                        className={`mt-1 text-2xl font-semibold tracking-tight ${stat.color}`}
                      >
                        {stat.val}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini Request Queue Rows */}
                <div className="divide-y divide-border border border-border rounded-xl overflow-hidden text-sm">
                  <div className="flex items-center justify-between px-4 py-3.5 bg-card">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                        R-0042
                      </span>
                      <span className="font-medium text-sm">
                        Wheelchair · adult
                      </span>
                    </div>
                    <span className="text-primary text-xs font-medium flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />{" "}
                      Allocated
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3.5 bg-card">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                        R-0041
                      </span>
                      <span className="font-medium text-sm">
                        Walker · standard
                      </span>
                    </div>
                    <span className="text-warning text-xs font-medium flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />{" "}
                      In transit
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3.5 bg-card">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                        R-0039
                      </span>
                      <span className="font-medium text-sm">
                        Crutches · pair
                      </span>
                    </div>
                    <span className="text-success text-xs font-medium flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />{" "}
                      Delivered
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification */}
            <div className="absolute -bottom-5 -left-5 hidden md:block max-w-[240px] rounded-2xl border border-border bg-card p-4 shadow-md z-20">
              <div className="flex gap-3">
                <div className="mt-0.5 h-6 w-6 rounded-full bg-success/10 flex items-center justify-center text-success flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Delivery confirmed</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Visible to clinic and NGO in real time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         2. TARGET AUDIENCE STRIP
         ========================================== */}
      <section className="border-y border-border bg-card py-12" id="audience">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Built for the organizations coordinating mobility aid delivery
          </p>
          {/* FIXED: Added md:grid-cols-3 to smoothly scale the grid across mid-sized responsive screens */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {targets.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium hover:border-muted-foreground/30 transition-all text-foreground"
              >
                <item.icon className="h-5 w-5 text-primary" />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         3. PROBLEM / WORKFLOW SECTION
         ========================================== */}
      <section
        className="py-16 sm:py-20 lg:py-24 mx-auto max-w-7xl px-4 sm:px-6"
        id="product"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            The problem
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            Mobility aid operations are{" "}
            <span className="font-italic-serif text-muted-foreground">
              fragmented.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            A single wheelchair request moves through phone calls, spreadsheets
            and WhatsApp threads before it reaches the patient. No one
            organization sees the whole picture.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Today */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              TODAY
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.02em]">
              Disconnected channels
            </h3>
            <div className="mt-8 space-y-3">
              {[
                { icon: Building2, label: "Clinic" },
                { icon: Phone, label: "Phone call" },
                { icon: FileSpreadsheet, label: "NGO spreadsheet" },
                { icon: MessagesSquare, label: "WhatsApp thread" },
                { icon: Truck, label: "Field agent" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With MobiBridge */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              WITH MOBIBRIDGE
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.02em]">
              One shared request record
            </h3>
            <div className="mt-8 space-y-3">
              {[
                { icon: Building2, label: "Clinic" },
                { label: "MobiBridge", highlight: true },
                { icon: HandHeart, label: "NGO" },
                { icon: Truck, label: "Field team" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 rounded-2xl border p-5 transition-all ${
                    item.highlight
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-card"
                  }`}
                >
                  {item.highlight ? (
                    <div className="h-6 w-6 rounded bg-primary-foreground text-primary flex items-center justify-center text-xs font-medium font-serif">
                      M
                    </div>
                  ) : (
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         4. OUTCOMES GRID
         ========================================== */}
      <section
        className="py-16 sm:py-20 lg:py-24 border-t border-border bg-card"
        id="impact"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Why organizations adopt MobiBridge
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              Designed for visibility, <br />
              <span className="font-italic-serif text-muted-foreground">
                not just software.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         5. WORKFLOW STEP INDICATOR
         ========================================== */}
      <section
        className="py-16 sm:py-20 lg:py-24 border-t border-border bg-background"
        id="workflow"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                How it works
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
                One shared workflow.{" "}
                <span className="font-italic-serif text-muted-foreground">
                  Five clear steps.
                </span>
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                Replaces four common coordination channels—phone calls,
                spreadsheets, WhatsApp threads, and paper forms—with a single
                record everyone can see.
              </p>
            </div>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-90"
            >
              See the full workflow <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Desktop Workflow Steps Layout */}
          <div className="mt-16 hidden lg:flex items-center gap-4">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-xs font-mono tracking-[0.18em] text-muted-foreground uppercase font-medium">
                    STEP {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-4 font-serif text-2xl font-semibold tracking-[-0.02em]">
                    {step}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Workflow Steps Layout */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="text-xs font-mono tracking-[0.18em] text-muted-foreground uppercase font-medium">
                  STEP {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 font-serif text-2xl font-semibold tracking-[-0.02em]">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         6. VALIDATION STRIP
         ========================================== */}
      <section className="border-y border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            What we're validating right now
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {validationItems.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         7. CALL TO ACTION / PILOT PROGRAM
         ========================================== */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20 lg:py-24 border-t border-border relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-8 relative z-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
            Pilot program · 2026
          </p>

          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            Researching real-world mobility aid workflows.
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-primary-foreground/80">
            MobiBridge is speaking with healthcare providers, NGOs,
            rehabilitation programs and field teams to understand how mobility
            aid requests, allocation and delivery are coordinated today. We are
            validating the workflows, challenges and operational gaps that will
            shape the platform.
          </p>

          {/* FIXED: Set buttons to width-full on mobile stacks */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto">
            <Link
              to="/about#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow-md transition hover:opacity-90 w-full sm:w-auto"
            >
              Contact Us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
