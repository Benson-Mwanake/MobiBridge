import React from "react";
import { ShieldCheck, Mail } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Overview",
      paragraphs: [
        "MobiBridge respects your privacy and is committed to protecting the information you share with us.",
        "This Privacy Policy explains what information we collect, how we use it, and the steps we take to protect it while MobiBridge is in its research and validation stage.",
      ],
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        "If you submit a form through the MobiBridge website, we may collect your name, organization, work email address, role, and any information you voluntarily provide about your workflow or operational challenges.",
        "We may also collect limited technical information such as browser type, device information, pages visited, and basic website analytics to improve performance and usability.",
      ],
    },
    {
      title: "3. How We Use Information",
      paragraphs: [
        "We use the information you provide to respond to inquiries, better understand mobility aid delivery workflows, conduct product research and validation, improve the MobiBridge platform, and communicate updates when appropriate.",
      ],
    },
    {
      title: "4. Information Sharing",
      paragraphs: [
        "We do not sell or rent personal information.",
        "Information may be shared with trusted third-party service providers that help us operate the website, process forms, host infrastructure, or communicate with interested organizations. These providers only receive the information necessary to perform those services.",
      ],
    },
    {
      title: "5. Data Retention",
      paragraphs: [
        "We retain information only for as long as reasonably necessary to support research, communication, product validation, and future platform development.",
      ],
    },
    {
      title: "6. Security",
      paragraphs: [
        "We use reasonable administrative and technical measures to protect the information shared with us. While we take security seriously, no internet-based service can guarantee absolute protection against every possible risk.",
      ],
    },
    {
      title: "7. Third-Party Services",
      paragraphs: [
        "The MobiBridge website may use third-party services such as website hosting, analytics, email providers, or form processing tools. These services process information according to their own privacy policies.",
      ],
    },
    {
      title: "8. Changes to This Policy",
      paragraphs: [
        "This Privacy Policy may be updated periodically as the project evolves. Any changes will be published on this page together with the updated revision date.",
      ],
    },
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
            Privacy Policy.{" "}
            <span className="font-italic-serif text-muted-foreground">
              How we collect and use information.
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
                <h2 className="text-sm font-bold tracking-[0.05em] text-primary uppercase block font-mono">
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
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-[-0.02em] text-foreground">
                Privacy Contact
              </h3>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">
                Questions about this policy
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
                  If you have questions about this Privacy Policy or the
                  information you've shared with MobiBridge, you're welcome to
                  contact us.
                </p>
                <a
                  href="mailto:privacy@mobibridge.health"
                  className="text-sm md:text-base font-semibold text-primary underline underline-offset-4 hover:text-foreground transition-colors break-all"
                >
                  privacy@mobibridge.health
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
