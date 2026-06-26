import React from "react";
import { FileText, Scale, ShieldAlert, Mail } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By accessing, browsing, or using the MobiBridge website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.",
        "If you do not agree to these terms or any subsequent modifications, you must immediately discontinue all use of this website."
      ]
    },
    {
      title: "2. Informational Purpose",
      paragraphs: [
        "The MobiBridge website is provided strictly for informational, research, and validation purposes.",
        "Descriptions of planned features, system workflows, and future platform architecture represent the current strategic vision of the project. This operational layout may change over time without notice as research progresses."
      ]
    },
    {
      title: "3. No Service Commitment",
      paragraphs: [
        "Access to and interaction with this website does not establish a contractual relationship, partnership, service obligation, or a binding guarantee of future commercial product availability.",
        "Participation in research inquiries or early access waitlists does not guarantee software procurement rights."
      ]
    },
    {
      title: "4. Intellectual Property",
      paragraphs: [
        "All content appearing on the website—including structured text, brand iconography, visual designs, graphics, proprietary layout concepts, technical documentation, and software-related mock materials—is the exclusive property of MobiBridge unless otherwise explicitly attributed.",
        "No content may be copied, reproduced, distributed, modified, or used for commercial gain without explicit prior written authorization from MobiBridge."
      ]
    },
    {
      title: "5. Third-Party Links",
      paragraphs: [
        "This website may contain hyperlinks directing you to third-party domains or external resources.",
        "MobiBridge exercises no operational control over, and assumes no liability for, the content, independent security systems, or active privacy frameworks managed by external services."
      ]
    },
    {
      title: "6. Disclaimer of Warranties",
      paragraphs: [
        "The website is provided entirely on an 'as-is' and 'as-available' baseline framework layout.",
        "MobiBridge makes no express or implied warranties regarding the absolute operational accuracy, completeness, long-term reliability, or uptime availability of the information presented."
      ]
    },
    {
      title: "7. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted under applicable law, MobiBridge shall not be held liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from your access to or inability to use this website.",
        "This includes, but is not limited to, dependencies on informational roadmaps, data transmissions, or temporary site disruptions."
      ]
    },
    {
      title: "8. Amendments and Changes",
      paragraphs: [
        "These Terms of Use may be updated periodically without prior direct notification to users. The date of latest revision will always be visibly maintained at the header baseline.",
        "Your continued utilization of the website following published edits constitutes formal acceptance of the revised terms."
      ]
    }
  ];

  return (
    <div className="bg-background text-foreground font-sans antialiased [font-feature-settings:'ss01','cv11'] min-h-screen w-full overflow-x-hidden">
      {/* =========================================================================
          HERO HEADER / TOP DESIGN LAYER
         ========================================================================= */}
      <header className="relative overflow-hidden bg-hero py-16 sm:py-20 lg:py-24 border-b border-border">
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary block mb-3 font-mono">
            Legal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.12] max-w-[720px]">
            Terms of Use.{" "}
            <span className="font-italic-serif text-muted-foreground">
              Core legal frameworks.
            </span>
          </h1>
          <div className="mt-5 flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground font-mono">
            <span>Last Updated:</span>
            <span className="text-foreground font-medium">June 2026</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          ASYMMETRIC MULTI-COLUMN CONTRACT SECTIONS
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 w-full min-w-0">
        <div className="border-t border-border divide-y divide-border">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-y-4 py-10 items-start w-full min-w-0"
            >
              {/* Left Side Label Column */}
              <div className="md:col-span-4">
                <h2 className="text-sm font-bold tracking-[0.05em] text-foreground uppercase block font-mono">
                  {sec.title}
                </h2>
              </div>
              {/* Right Side Content Paragraphs Column */}
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
          CONTACT / INQUIRIES FOOTER CALLOUT
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24 w-full min-w-0">
        <div className="border-t border-border pt-16 sm:pt-20 grid grid-cols-1 md:grid-cols-12 gap-6 w-full min-w-0">
          <div className="md:col-span-4 flex items-start gap-3">
            <div className="w-8 h-8 bg-muted border border-border rounded-lg flex items-center justify-center text-muted-foreground mt-0.5 shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-[-0.02em] text-foreground">
                Legal Inquiries
              </h3>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">
                MobiBridge Compliance Team
              </p>
            </div>
          </div>
          <div className="md:col-span-8 bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 shadow-xs max-w-[660px] w-full min-w-0">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 font-normal">
                  If you have clarifying operational queries regarding these formal website guidelines or licensing rights, please route your formal context directly to our legal desk:
                </p>
                <a
                  href="mailto:legal@mobibridge.health"
                  className="text-sm md:text-base font-semibold text-primary underline underline-offset-4 hover:text-foreground transition-colors break-all"
                >
                  legal@mobibridge.health
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}