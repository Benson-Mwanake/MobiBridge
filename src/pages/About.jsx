import React from "react";

export default function AboutPage() {
  const clearSections = [
    {
      label: "Why MobiBridge exists",
      paragraphs: [
        "Mobility aids can have a profound impact on independence, mobility and quality of life. Yet the operational processes behind getting a wheelchair, walker, crutch or prosthetic aid to the right person are often fragmented across multiple organizations and systems.",
        "The challenge is rarely a lack of commitment from the people doing the work. More often, it is a lack of shared operational infrastructure that allows organizations to coordinate efficiently.",
      ],
    },

    {
      label: "The problem",
      paragraphs: [
        "Many healthcare providers and mobility aid organizations rely on a combination of existing systems, spreadsheets, paper records, email and messaging platforms to coordinate requests and deliveries.",
        "These tools often work well within individual organizations, but they were not designed to coordinate workflows across multiple organizations. As a result, teams may struggle with visibility into request progress, manual inventory coordination, repeated status inquiries and difficult reporting processes.",
      ],
    },

    {
      label: "Our approach",
      paragraphs: [
        "MobiBridge is intentionally focused. It is not a hospital management system, an electronic medical record, an ERP or a logistics platform.",
        "Instead, MobiBridge is being designed as a coordination layer that sits alongside existing systems. The goal is to provide a shared workflow where participating organizations can track requests, coordinate inventory allocations and monitor delivery progress without disrupting existing operations.",
      ],
    },

    {
      label: "Why mobility aid delivery",
      paragraphs: [
        "Mobility aid distribution presents a clear operational challenge with well-defined stakeholders and measurable outcomes. Requests often involve coordination between healthcare providers, NGOs, inventory managers and field teams.",
        "Because the workflow is tangible and the impact is immediate, mobility aid delivery provides a strong foundation for building and validating a coordination platform.",
      ],
    },

    {
      label: "Current stage",
      paragraphs: [
        "MobiBridge is currently in the research, planning and validation phase.",
        "The current focus is understanding real-world workflows, validating assumptions and ensuring that future development is grounded in operational reality rather than theoretical design.",
      ],
    },

    {
      label: "Looking ahead",
      paragraphs: [
        "The long-term goal is to make mobility aid operations easier to coordinate, easier to measure and easier to report.",
        "We believe organizations should be able to work together through a shared operational workflow without abandoning the systems they already rely on.",
      ],
    },

    {
      label: "Founder note",
      paragraphs: [
        "MobiBridge began with a simple question: why are critical mobility aid workflows still coordinated across disconnected tools when the organizations involved already have systems of their own?",
        "The challenge is not a lack of technology. The challenge is creating something that fits the way clinics, NGOs and field teams actually work. MobiBridge is being built around the belief that coordination should be simpler, visibility should be shared and organizations should not have to replace their existing systems just to work together more effectively.",
      ],
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
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary block mb-3 font-mono">
            About
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.12] max-w-[720px]">
            Built around a{" "}
            <span className="font-italic-serif text-muted-foreground">
              simple observation.
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Mobility aid delivery is often coordinated across spreadsheets,
            phone calls, email chains and messaging apps. The people involved
            work incredibly hard, but the workflow connecting them was never
            designed to be shared.
          </p>
        </div>
      </header>

      {/* =========================================================================
          ASYMMETRIC 12-COLUMN BORDERED TEXT GRID
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full min-w-0">
        <div className="border-t border-border divide-y divide-border">
          {clearSections.map((sec, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-y-4 py-10 items-start w-full min-w-0"
            >
              {/* Left Column Label: Spans 4 Columns */}
              <div className="md:col-span-4">
                <span className="text-xs font-bold tracking-[0.1em] text-primary uppercase block font-mono">
                  {sec.label}
                </span>
              </div>
              {/* Right Column Body Paragraphs: Spans 8 Columns */}
              <div className="md:col-span-8 space-y-4">
                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal max-w-[660px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PILOT CONTACT INTAKE FOOTER BLOCK
         ========================================================================= */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24 w-full min-w-0"
      >
        <div className="border-t border-border pt-16 sm:pt-20 grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-12 items-start w-full min-w-0">
          {/* Left Summary Block */}
          <div className="md:col-span-6">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary block mb-3 font-mono">
              Get in touch
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground mb-4">
              Interested in following the project?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal max-w-[480px] mb-8">
              MobiBridge is currently in the validation stage. If you work in
              healthcare, rehabilitation services, mobility aid distribution,
              nonprofit operations or healthcare logistics, I'd love to learn
              about your workflow and hear your perspective.
            </p>
            <a
              href="mailto:pilots@mobibridge.health"
              className="text-sm md:text-base font-medium text-primary underline underline-offset-4 hover:text-foreground transition-colors break-all"
            >
              pilots@mobibridge.health
            </a>
          </div>

          {/* Right Contact Registration Form */}
          <div className="md:col-span-6 bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 shadow-xs w-full min-w-0">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Form inputs stack on mobile, expand to 2-columns on small screens and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Work email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                    Role
                  </label>
                  <input
                    type="text"
                    className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 font-mono">
                  Tell us about your workflow
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-muted border border-border rounded-md px-3 py-2 text-xs md:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-md transition hover:opacity-90"
              >
                Request early access
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
