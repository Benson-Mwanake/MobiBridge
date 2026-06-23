import React from "react";
import {
  ClipboardList,
  Boxes,
  PackageCheck,
  Truck,
  FileSpreadsheet,
  BarChart3,
  ScrollText,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

export default function ProductPage() {
  return (
    <div className="bg-background text-foreground font-sans antialiased [font-feature-settings:'ss01','cv11'] min-h-screen w-full overflow-x-hidden">
      {/* =========================================================================
          HERO / PAGE HEADER
         ========================================================================= */}
      <header className="relative overflow-hidden bg-hero py-16 sm:py-20 lg:py-24 border-b border-border">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary block mb-3">
            Product Platform
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.1] mb-4">
            What the platform{" "}
            <span className="font-italic-serif text-muted-foreground">
              actually does.
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A feature-by-feature look at the capabilities inside MobiBridge.
          </p>
        </div>
      </header>

      {/* =========================================================================
          01 · REQUEST MANAGEMENT
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-primary mb-3">
              <ClipboardList className="w-4 h-4 stroke-[2]" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] block">
                01 · Request management
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-6">
              Structured intake for every mobility aid request.
            </h2>
            <ul className="space-y-4 text-sm md:text-base font-normal text-muted-foreground list-none p-0 m-0">
              {[
                "Aid type, urgency and recipient context captured once",
                "Attachments and clinical notes where needed",
                "Unique request ID and shared timeline",
                "Filterable, searchable shared queue",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-success stroke-[2.5] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FIXED: min-w-0 forces the container to compress correctly on smaller breakpoints */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm min-w-0 w-full">
            <div className="text-xs font-mono font-medium text-muted-foreground mb-4 pb-3 border-b border-muted flex items-center justify-between gap-2 overflow-hidden">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-border" />
                  <span className="w-2 h-2 rounded-full bg-border" />
                  <span className="w-2 h-2 rounded-full bg-border" />
                </div>
                <span className="tracking-wide truncate">
                  app.mobibridge.health / requests / new
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </div>
            <div className="bg-muted border border-border rounded-xl p-4 sm:p-5">
              <div className="mb-4 flex justify-between items-start gap-2">
                <div>
                  <span className="text-[10px] font-bold font-mono tracking-wider text-muted-foreground block mb-0.5">
                    NEW REQUEST
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em]">
                    R-0043 · Wheelchair
                  </h3>
                </div>
                <ClipboardList className="w-5 h-5 text-muted-foreground shrink-0" />
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-card border border-border p-3 sm:p-3.5 rounded-xl">
                  <span className="block text-[10px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    AID TYPE
                  </span>
                  <div className="text-xs sm:text-sm font-medium truncate">
                    Wheelchair · adult
                  </div>
                </div>
                <div className="bg-card border border-border p-3 sm:p-3.5 rounded-xl">
                  <span className="block text-[10px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    URGENCY
                  </span>
                  <div className="text-xs sm:text-sm font-medium text-warning">
                    High
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-card border border-border p-3 sm:p-3.5 rounded-xl">
                  <span className="block text-[10px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    CLINIC
                  </span>
                  <div className="text-xs sm:text-sm font-medium truncate">
                    St. Anne's Hospital
                  </div>
                </div>
                <div className="bg-card border border-border p-3 sm:p-3.5 rounded-xl">
                  <span className="block text-[10px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    RECIPIENT
                  </span>
                  <div className="text-xs sm:text-sm font-medium truncate">
                    Anonymized · 34 y
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-card border border-border p-3 sm:p-3.5 rounded-xl">
                  <span className="block text-[10px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    SIZE
                  </span>
                  <div className="text-xs sm:text-sm font-medium truncate">
                    Standard / 18in
                  </div>
                </div>
                <div className="bg-card border border-border p-3 sm:p-3.5 rounded-xl">
                  <span className="block text-[10px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    MOBILITY NOTES
                  </span>
                  <div className="text-xs sm:text-sm font-medium truncate">
                    Lower-limb amputee
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 text-sm font-medium">
                <button className="border border-border bg-card text-foreground hover:bg-muted px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm transition">
                  Save draft
                </button>
                <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 sm:px-4 text-xs sm:text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
                  Submit to NGO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 · INVENTORY VISIBILITY
         ========================================================================= */}
      <section className="border-t border-border bg-card py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            {/* FIXED: min-w-0 safely contains wide inner tables within the grid item */}
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-4 sm:p-6 order-last lg:order-first shadow-sm min-w-0 w-full">
              <div className="text-xs font-mono font-medium text-muted-foreground mb-4 pb-3 border-b border-muted flex justify-between items-center gap-2">
                <span className="tracking-wide truncate">
                  app.mobibridge.health / inventory
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </div>
              <div className="bg-muted border border-border rounded-xl p-4 sm:p-5">
                <div className="flex justify-between items-center mb-4 gap-2">
                  <h4 className="font-serif text-lg sm:text-xl font-semibold tracking-[-0.02em]">
                    Inventory · Partner NGO
                  </h4>
                  <span className="text-xs font-mono font-medium bg-primary/10 px-2.5 py-0.5 rounded text-primary shrink-0">
                    5 SKUs
                  </span>
                </div>
                {/* FIXED: Changed width configuration for complete overflow-x isolated scrolling */}
                <div className="w-full overflow-x-auto relative block">
                  <table className="w-full text-left text-xs sm:text-sm font-normal border-collapse min-w-[460px]">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground uppercase tracking-wider text-[10px] font-mono font-bold">
                        <th className="pb-3 pr-2 w-[20%]">SKU</th>
                        <th className="pb-3 w-[50%]">Item</th>
                        <th className="pb-3 text-right w-[15%]">On hand</th>
                        <th className="pb-3 text-right w-[15%]">Reserved</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 text-foreground">
                      {[
                        {
                          sku: "WC-AD-STD",
                          item: "Wheelchair · adult standard",
                          onHand: 14,
                          res: 3,
                        },
                        {
                          sku: "WC-PD-STD",
                          item: "Wheelchair · pediatric",
                          onHand: 4,
                          res: 1,
                        },
                        {
                          sku: "WK-STD",
                          item: "Walker · standard",
                          onHand: 22,
                          res: 5,
                        },
                        {
                          sku: "CR-PAIR",
                          item: "Crutches · pair",
                          onHand: 38,
                          res: 8,
                        },
                        {
                          sku: "PR-BK",
                          item: "Prosthetic · BK",
                          onHand: 2,
                          res: 2,
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="hover:bg-card/40 transition-colors"
                        >
                          <td className="py-3 pr-2 font-mono text-[11px] sm:text-xs font-medium whitespace-nowrap">
                            {row.sku}
                          </td>
                          <td className="py-3 font-medium tracking-tight pr-2">
                            {row.item}
                          </td>
                          <td className="py-3 text-right font-mono text-muted-foreground">
                            {row.onHand}
                          </td>
                          <td className="py-3 text-right font-mono text-primary font-semibold">
                            {row.res}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Boxes className="w-4 h-4 stroke-[2]" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] block">
                  02 · Inventory visibility
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-6">
                A shared snapshot of NGO stock, only the levels each party
                needs.
              </h2>
              <ul className="space-y-4 text-sm md:text-base font-normal text-muted-foreground list-none p-0 m-0">
                {[
                  "Category and size-level availability",
                  "Per-organization stock isolation",
                  "Reservations reflect on the shared view",
                  "Low-stock indicators for planning",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success stroke-[2.5] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 · ALLOCATION WORKFLOW
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-primary mb-3">
              <PackageCheck className="w-4 h-4 stroke-[2]" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] block">
                03 · Allocation workflow
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-6">
              Match the right equipment to the right request.
            </h2>
            <ul className="space-y-4 text-sm md:text-base font-normal text-muted-foreground list-none p-0 m-0">
              {[
                "Reserve, reassign or release with one action",
                "Notes attached to each allocation decision",
                "Reallocation without losing the original request",
                "Clear ownership at every step",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-success stroke-[2.5] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm min-w-0 w-full">
            <div className="text-xs font-mono font-medium text-muted-foreground mb-4 pb-3 border-b border-muted flex justify-between items-center gap-2">
              <span className="tracking-wide truncate">
                app.mobibridge.health / requests / R-0042
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </div>
            <div className="bg-muted border border-border rounded-xl p-4 sm:p-5">
              <div className="flex justify-between items-start mb-4 gap-2">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-[-0.02em]">
                    R-0042
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-0.5">
                    Wheelchair · adult standard
                  </p>
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 border border-primary/20 rounded uppercase shrink-0">
                  Allocated
                </span>
              </div>
              <div className="bg-card border border-border p-4 rounded-xl mb-5 flex justify-between items-center gap-3">
                <div className="min-w-0">
                  <span className="block text-[10px] font-bold text-muted-foreground tracking-wider mb-1">
                    MATCHED STOCK UNIT
                  </span>
                  <div className="text-xs sm:text-sm font-mono font-medium truncate">
                    WC-AD-STD · unit #00214
                    <span className="block font-sans text-xs text-muted-foreground mt-0.5 font-normal">
                      (Partner NGO · warehouse A)
                    </span>
                  </div>
                </div>
                <Boxes className="w-5 h-5 text-muted-foreground shrink-0" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center text-sm font-medium gap-3">
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 border border-border bg-card text-foreground hover:bg-muted px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm transition">
                    Reassign
                  </button>
                  <button className="flex-1 border border-border bg-card text-foreground hover:bg-muted px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm transition">
                    Release
                  </button>
                </div>
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 sm:px-6 text-xs sm:text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90 w-full sm:w-auto">
                  Schedule delivery <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 · DELIVERY TRACKING
         ========================================================================= */}
      <section className="border-t border-border bg-card py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-4 sm:p-6 order-last lg:order-first shadow-sm min-w-0 w-full">
              <div className="text-xs font-mono font-medium text-muted-foreground mb-4 pb-3 border-b border-muted flex justify-between items-center gap-2">
                <span className="tracking-wide truncate">
                  app.mobibridge.health / deliveries / D-0119
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </div>
              <div className="bg-muted border border-border rounded-xl p-4 sm:p-5">
                <div className="flex justify-between items-center mb-5 gap-2">
                  <h4 className="font-serif text-lg sm:text-xl font-semibold tracking-[-0.02em] truncate">
                    D-0119 · Field agent
                  </h4>
                  <span className="text-[10px] font-semibold bg-warning/10 border border-warning/20 text-warning px-2.5 py-0.5 rounded uppercase tracking-wide shrink-0">
                    In transit
                  </span>
                </div>
                <div className="space-y-4 text-xs sm:text-sm relative pl-5 before:absolute before:left-1.5 before:top-1.5 before:bottom-1.5 before:w-[1px] before:bg-border">
                  <div className="relative flex items-center gap-2.5 font-medium text-muted-foreground">
                    <span className="absolute -left-[17px] w-2.5 h-2.5 rounded-full bg-success ring-4 ring-success/10" />
                    <span>Picked up · Warehouse A</span>
                  </div>
                  <div className="relative flex items-center gap-2.5 font-semibold text-foreground">
                    <span className="absolute -left-[17px] w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent/10" />
                    <span>In transit</span>
                  </div>
                  <div className="relative flex items-center gap-2.5 font-normal opacity-40">
                    <span className="absolute -left-[17px] w-2.5 h-2.5 rounded-full bg-border" />
                    <span>Arrived at St. Anne's</span>
                  </div>
                  <div className="relative flex items-center gap-2.5 font-normal opacity-40">
                    <span className="absolute -left-[17px] w-2.5 h-2.5 rounded-full bg-border" />
                    <span>Handover & confirmation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Truck className="w-4 h-4 stroke-[2]" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] block">
                  04 · Delivery tracking
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-6">
                Field updates flow back into one record.
              </h2>
              <ul className="space-y-4 text-sm md:text-base font-normal text-muted-foreground list-none p-0 m-0">
                {[
                  "Mobile-friendly status updates",
                  "Recipient confirmation captured at handover",
                  "Failed-delivery reasons logged, not lost",
                  "Real-time visibility for clinic and NGO",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success stroke-[2.5] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 · REPORTING
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-primary mb-3">
              <BarChart3 className="w-4 h-4 stroke-[2]" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] block">
                05 · Reporting
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-6">
              Operational and outcome reports without compiling spreadsheets.
            </h2>
            <ul className="space-y-4 text-sm md:text-base font-normal text-muted-foreground list-none p-0 m-0">
              {[
                "Requests received and fulfilled by period",
                "Average fulfillment time and bottlenecks",
                "Distribution by region, aid type and partner",
                "Export to PDF or CSV for funders and boards",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-success stroke-[2.5] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm min-w-0 w-full">
            <div className="text-xs font-mono font-medium text-muted-foreground mb-4 pb-3 border-b border-muted flex justify-between items-center gap-2">
              <span className="tracking-wide truncate">
                app.mobibridge.health / reports / monthly
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </div>
            <div className="bg-muted border border-border rounded-xl p-4 sm:p-5">
              <div className="flex justify-between items-center mb-4 gap-2">
                <h4 className="font-serif text-base sm:text-lg font-semibold tracking-[-0.02em]">
                  Monthly fulfillment
                </h4>
                <span className="text-xs font-mono text-muted-foreground shrink-0">
                  Last 7 weeks
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                <div className="bg-card border border-border p-2 sm:p-3 rounded-lg text-center">
                  <span className="block text-[9px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    RECEIVED
                  </span>
                  <div className="text-base sm:text-xl font-medium font-mono">
                    142
                  </div>
                </div>
                <div className="bg-card border border-border p-2 sm:p-3 rounded-lg text-center">
                  <span className="block text-[9px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    FULFILLED
                  </span>
                  <div className="text-base sm:text-xl font-medium font-mono text-success">
                    118
                  </div>
                </div>
                <div className="bg-card border border-border p-2 sm:p-3 rounded-lg text-center">
                  <span className="block text-[9px] font-bold text-muted-foreground tracking-wider mb-0.5">
                    AVG TIME
                  </span>
                  <div className="text-xs sm:text-sm font-semibold mt-0.5">
                    3.4d
                  </div>
                </div>
              </div>
              <div className="h-24 flex items-end gap-2 px-2 border-b border-border">
                <div className="bg-primary/30 w-full h-[30%] rounded-t transitions" />
                <div className="bg-primary/45 w-full h-[45%] rounded-t transitions" />
                <div className="bg-primary/60 w-full h-[60%] rounded-t transitions" />
                <div className="bg-primary/40 w-full h-[40%] rounded-t transitions" />
                <div className="bg-primary/75 w-full h-[75%] rounded-t transitions" />
                <div className="bg-primary w-full h-[90%] rounded-t" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 · AUDIT TRAIL
         ========================================================================= */}
      <section className="border-t border-border bg-card py-16 sm:py-20 lg:py-24 w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-4 sm:p-6 order-last lg:order-first shadow-sm min-w-0 w-full">
              <div className="text-xs font-mono font-medium text-muted-foreground mb-4 pb-3 border-b border-muted flex justify-between items-center gap-2">
                <span className="tracking-wide truncate">
                  app.mobibridge.health / audit
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </div>
              <div className="bg-muted border border-border rounded-xl p-4 sm:p-5">
                <span className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground block mb-3">
                  ACTIVITY LOG
                </span>
                <div className="space-y-3 text-xs">
                  {[
                    {
                      time: "08:14",
                      who: "M. Achieng (NGO)",
                      msg: "Allocated WC-AD-STD #00214 to R-0042",
                    },
                    {
                      time: "08:02",
                      who: "Dr. P. Kamau (Clinic)",
                      msg: "Submitted R-0042",
                    },
                    {
                      time: "07:51",
                      who: "J. Otieno (Field)",
                      msg: "Confirmed delivery on R-0039",
                    },
                    {
                      time: "07:33",
                      who: "M. Achieng (NGO)",
                      msg: "Reassigned R-0036 to partner NGO",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-card border border-border p-3 rounded-xl"
                    >
                      <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1.5 gap-2">
                        <span>{item.time}</span>
                        <span className="text-foreground/70 truncate">
                          {item.who}
                        </span>
                      </div>
                      <p className="text-foreground font-medium text-xs sm:text-sm leading-snug">
                        {item.msg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-primary mb-3">
                <ScrollText className="w-4 h-4 stroke-[2]" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] block">
                  06 · Audit trail
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-6">
                Every status change, attributed and timestamped.
              </h2>
              <ul className="space-y-4 text-sm md:text-base font-normal text-muted-foreground list-none p-0 m-0">
                {[
                  "Immutable record of every action",
                  "User, organization and timestamp on every event",
                  "Filter by request, user or organization",
                  "Exportable for audits and reviews",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success stroke-[2.5] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 · EXCEL & CSV IMPORT
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 border-t border-border w-full overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-primary mb-3">
              <FileSpreadsheet className="w-4 h-4 stroke-[2]" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] block">
                07 · Excel & CSV import
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-6">
              Bring existing inventory and request history in on day one.
            </h2>
            <ul className="space-y-4 text-sm md:text-base font-normal text-muted-foreground list-none p-0 m-0">
              {[
                "Map existing columns to MobiBridge fields",
                "Validation and conflict resolution",
                "Bulk inventory load for new partners",
                "No migration project required",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-success stroke-[2.5] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm min-w-0 w-full">
            <div className="text-xs font-mono font-medium text-muted-foreground mb-4 pb-3 border-b border-muted flex justify-between items-center gap-2">
              <span className="tracking-wide truncate">
                app.mobibridge.health / import
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </div>
            <div className="bg-muted border border-border rounded-xl p-4 sm:p-5">
              <div className="flex justify-between items-baseline mb-4 gap-2">
                <h4 className="font-serif text-base sm:text-lg font-semibold tracking-[-0.02em]">
                  Map your columns
                </h4>
                <span className="text-xs font-mono text-muted-foreground shrink-0">
                  412 rows
                </span>
              </div>
              <div className="space-y-2.5 text-xs">
                {[
                  { from: "Column A, sku_code", to: "SKU" },
                  { from: "Column B, item_name", to: "Item" },
                  { from: "Column C, qty_on_hand", to: "On hand" },
                  { from: "Column D, size", to: "Size" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 bg-card border border-border rounded-xl shadow-xs gap-2"
                  >
                    <span className="font-mono text-muted-foreground truncate">
                      {row.from}
                    </span>
                    <span className="text-primary font-medium font-mono shrink-0">
                      → {row.to}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
