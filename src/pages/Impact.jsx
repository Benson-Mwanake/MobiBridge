import React from "react";
import {
  BarChart3,
  Clock,
  MapPin,
  Users2,
  Target,
  FileDown,
  Download,
} from "lucide-react";

export default function ImpactAndReportingPage() {
  const reportingCapabilities = [
    {
      icon: <BarChart3 className="w-4 h-4 text-primary" />,
      title: "Fulfillment metrics",
      desc: "Requests received, fulfilled and pending. Trends over weeks, months and quarters.",
    },
    {
      icon: <Clock className="w-4 h-4 text-primary" />,
      title: "Time to delivery",
      desc: "Average and median fulfillment time, broken down by aid type, region and partner.",
    },
    {
      icon: <MapPin className="w-4 h-4 text-primary" />,
      title: "Distribution by region",
      desc: "Where mobility aids are going. Rollups by region, partner clinic and NGO.",
    },
    {
      icon: <Users2 className="w-4 h-4 text-primary" />,
      title: "Partner performance",
      desc: "Compare clinics and partner NGOs on response times, fulfillment and exception rates.",
    },
    {
      icon: <Target className="w-4 h-4 text-primary" />,
      title: "Targets vs outcomes",
      desc: "Track distribution against funded targets without compiling spreadsheets at quarter-end.",
    },
    {
      icon: <FileDown className="w-4 h-4 text-primary" />,
      title: "Donor-ready exports",
      desc: "Export structured PDF and CSV summaries for funders, boards and internal audits in one click.",
    },
  ];

  const valueProps = [
    {
      tag: "For Clinicians",
      text: "Prove the closure of referrals to hospital boards and regional health metrics with auditable delivery confirmations.",
    },
    {
      tag: "For NGOs",
      text: "Show stock turnover speed and asset utilization efficiency to international donors with live operational data.",
    },
    {
      tag: "For Funders",
      text: "Track the real lifecycle of equipment pipelines to verify that donated capital translates to verified community mobility impacts.",
    },
  ];

  return (
    <div className="bg-background text-foreground font-sans antialiased [font-feature-settings:'ss01','cv11'] min-h-screen w-full overflow-x-hidden">
      {/* =========================================================================
          HERO HEADER / TOP CTA BLOCK
         ========================================================================= */}
      <header className="relative overflow-hidden bg-hero py-16 sm:py-20 lg:py-24 border-b border-border">
        {/* MobiBridge Grid Background Overlay */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary block mb-3">
                Impact & Reporting
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.12]">
                Aggregated insights,{" "}
                <span className="font-italic-serif text-muted-foreground">
                  zero manual collection.
                </span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Because every action happens on a unified workflow token layer,
                reports are generated instantly from live operations. No
                compilation projects required.
              </p>
            </div>
            {/* CTA Download button spacing optimization for narrow phone sizes */}
            <div className="shrink-0 w-full md:w-auto">
              <button className="inline-flex h-11 w-full md:w-auto items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
                <Download className="w-4 h-4 stroke-[2.5]" />
                Download sample report
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          REPORTING CAPABILITIES FLEXIBLE GRID SYSTEM
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full">
        {/* FIXED: Changed md:grid-cols-2 to match structural layouts elsewhere */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reportingCapabilities.map((feat, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full min-w-0"
            >
              <div>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary shrink-0">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold tracking-[-0.02em] text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          AUDIENCE SPECIFIC SEGMENTATION ROW CALLOUTS
         ========================================================================= */}
      {/* FIXED: Uniform grid columns sync across all blocks cleanly at md breakpoint layout thresholds */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:py-20 lg:pb-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {valueProps.map((prop, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-muted-foreground/30 transition-all h-full min-w-0"
          >
            <div>
              <span className="text-[10px] font-bold tracking-wider text-primary uppercase block font-mono mb-4">
                {prop.tag}
              </span>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {prop.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
