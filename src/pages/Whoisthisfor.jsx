import React from "react";
import {
  Building2,
  HeartHandshake,
  Activity,
  Building,
  Coins,
  CheckCircle2,
} from "lucide-react";

export default function WhoItsForPage() {
  const targetAudiences = [
    {
      icon: <Building2 className="w-5 h-5 text-primary stroke-[2]" />,
      title: "Clinics & hospitals",
      subtitle: "Clinical teams submitting referrals for mobility aids.",
      problems: [
        "Referrals lost across WhatsApp threads and phone calls",
        "No visibility into request status after handing off to an NGO",
        "Manual follow-up consumes clinical staff time",
        "No clean record for patient files or audits",
      ],
      transformation:
        "Submit a structured request once. Track its status to delivery without chasing.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-primary stroke-[2]" />,
      title: "NGOs",
      subtitle:
        "Organizations holding mobility aid inventory and managing distribution.",
      problems: [
        "Inventory tracked in disconnected spreadsheets per warehouse",
        "Requests arrive in inconsistent formats from many clinics",
        "Reallocation after failed delivery loses context",
        "Compiling donor and board reports takes days",
      ],
      transformation:
        "One queue of structured requests, live inventory, and exportable reports.",
    },
    {
      icon: <Activity className="w-5 h-5 text-primary stroke-[2]" />,
      title: "Rehabilitation centers",
      subtitle: "Centers prescribing and fitting devices over time.",
      problems: [
        "Hard to coordinate device delivery with appointment schedules",
        "No shared record between prescribing therapist and supplying NGO",
        "Resizing and reassignments handled informally",
      ],
      transformation:
        "A shared timeline for every device, from prescription to fitting to handover.",
    },
    {
      icon: <Building className="w-5 h-5 text-primary stroke-[2]" />,
      title: "Government programs",
      subtitle:
        "Public health programs coordinating distribution across partners.",
      problems: [
        "Limited visibility into how many partner organizations are actually serving",
        "Inconsistent data formats across partner NGOs and clinics",
        "Difficult to verify outcomes against funded targets",
      ],
      transformation:
        "Cross-partner pipeline view with consistent records and exportable rollups.",
    },
    {
      icon: <Coins className="w-5 h-5 text-primary stroke-[2]" />,
      title: "Mobility aid donors",
      subtitle: "Funders and donors backing equipment programs.",
      problems: [
        "Donor reports compiled from spreadsheets each quarter",
        "No standardized fulfillment or distribution metrics",
        "Hard to compare partner performance",
      ],
      transformation:
        "Standardized fulfillment metrics and distribution reports tied to actual operations.",
    },
  ];

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
            Who it's for
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.12] max-w-[820px]">
            Built for the organizations{" "}
            <span className="font-italic-serif text-muted-foreground">
              that move mobility aids.
            </span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            MobiBridge is sold to organizations, not roles. Here's what we solve
            for each type, and what changes when they adopt a shared
            coordination layer.
          </p>
        </div>
      </header>

      {/* =========================================================================
          AUDIENCE CARDS GRID SYSTEM
         ========================================================================= */}
      {/* Kept your original md:grid-cols-2 layout, added w-full and min-w-0 for mobile overflow safety */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full min-w-0">
        {targetAudiences.map((card, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between shadow-xs transition-colors hover:border-muted-foreground/30 min-w-0 h-full"
          >
            {/* FIXED: This wrapper now takes up all remaining vertical space */}
            <div className="flex-grow">
              {/* Custom Branded Icon Wrapper */}
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>

              {/* Title Header */}
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-[-0.02em] leading-[1.2] mb-1.5">
                {card.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-8 leading-relaxed">
                {card.subtitle}
              </p>

              {/* Pain Points List */}
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-[0.18em] text-muted-foreground uppercase block mb-4 font-mono">
                  Problems we hear
                </span>
                <ul className="space-y-3.5 pl-0 list-none m-0">
                  {card.problems.map((problem, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs sm:text-sm md:text-base text-foreground/90 flex items-start gap-3 leading-relaxed font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-border mt-2 flex-shrink-0" />
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Value Transformation Callout Box (Now perfectly pinned to the bottom baseline across rows) */}
            <div className="bg-muted border border-border rounded-xl p-4 sm:p-5 mt-auto">
              <span className="text-[10px] font-bold tracking-[0.15em] text-primary uppercase block mb-2 font-mono">
                What MobiBridge Changes
              </span>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-foreground font-medium leading-relaxed">
                <CheckCircle2 className="w-4.5 h-4.5 text-success mt-0.5 flex-shrink-0 stroke-[2.5]" />
                <span>{card.transformation}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
