import React from "react";
import {
  KeyRound,
  ShieldCheck,
  Layers,
  FileLock2,
  Database,
  History,
  Clock3,
  Lock,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <KeyRound className="w-4 h-4 text-primary" />,
      title: "Authentication",
      desc: "Email and password authentication with session management. SSO via SAML/OIDC is on the pilot roadmap for partner organizations.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-primary" />,
      title: "Role-based access control",
      desc: "Granular roles for clinics, NGO coordinators, field agents and administrators. Each role sees only the actions and data it needs.",
    },
    {
      icon: <Layers className="w-4 h-4 text-primary" />,
      title: "Multi-tenant architecture",
      desc: "Every organization runs in its own logical tenant. Data, configuration and access policies are isolated by default; cross-organization sharing happens only via explicit shared requests.",
    },
    {
      icon: <FileLock2 className="w-4 h-4 text-primary" />,
      title: "Organization isolation",
      desc: "Records are scoped to their owning organization at the query layer. No partner organization can read another's inventory, requests or audit trail without an explicit share.",
    },
    {
      icon: <Database className="w-4 h-4 text-primary" />,
      title: "Data ownership",
      desc: "Your data remains yours. Inventory, requests and patient context belong to the originating organization and can be exported in full at any time, in standard formats.",
    },
    {
      icon: <History className="w-4 h-4 text-primary" />,
      title: "Backup & recovery",
      desc: "Production data is backed up on a continuous basis with point-in-time recovery. Recovery procedures are tested and documented for pilot partners.",
    },
    {
      icon: <Clock3 className="w-4 h-4 text-primary" />,
      title: "Audit logging",
      desc: "Every status change and key action is timestamped and attributed to a user. Audit records are immutable and exportable.",
    },
    {
      icon: <Lock className="w-4 h-4 text-primary" />,
      title: "Encryption",
      desc: "Traffic is encrypted in transit over TLS. Sensitive credentials and tokens are stored using industry-standard hashing.",
    },
  ];

  const roadmapItems = [
    "SSO via SAML / OIDC",
    "Configurable data residency",
    "Granular permission policies",
    "Third-party security review",
    "ISO 27001 readiness assessment",
    "Region-specific health data review",
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
            Security
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.12] max-w-[760px]">
            Designed with healthcare{" "}
            <span className="font-italic-serif text-muted-foreground">
              security principles.
            </span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            MobiBridge handles records that move between independent
            organizations. Security and isolation are foundational, not a
            feature we'll get to later.
          </p>
        </div>
      </header>

      {/* =========================================================================
          SECURITY ARCHITECTURE FEATURE GRID (2-Column Grid Layout)
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 items-stretch w-full min-w-0">
        {securityFeatures.map((feat, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-start transition-all duration-300 hover:border-muted-foreground/30 shadow-xs min-w-0"
          >
            <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0 text-primary">
              {feat.icon}
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold tracking-[-0.02em] text-foreground mb-2">
                {feat.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-normal">
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================================
          COMPLIANCE NOTE & ROADMAP BOTTOM SPLIT SECTION
         ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20 lg:pb-24 border-t border-border pt-16 sm:pt-20 grid grid-cols-1 md:grid-cols-12 gap-12 w-full min-w-0">
        {/* Left Column: Handled Statement on Compliance */}
        <div className="md:col-span-7 pr-0 md:pr-4">
          <div className="w-8 h-8 bg-muted border border-border rounded-lg flex items-center justify-center mb-5 text-muted-foreground">
            <AlertCircle className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-foreground mb-4">
            A note on compliance
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[580px]">
            <p>
              MobiBridge is designed with healthcare security principles, least
              privilege access, tenant isolation, immutable audit trails and
              data ownership.
            </p>
            <p className="font-medium text-foreground">
              We are not currently HIPAA- or ISO-audited.
            </p>
            <p>
              We will pursue formal certifications alongside our pilot partners,
              scoped to the regions and use cases they operate in.
            </p>
          </div>
        </div>

        {/* Right Column: Future Compliance Roadmap Timeline View */}
        <div className="md:col-span-5 bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 shadow-xs min-w-0">
          <span className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase block mb-2 font-mono">
            Next Phases
          </span>
          <h3 className="font-serif text-lg font-semibold tracking-[-0.02em] text-foreground mb-6">
            Compliance roadmap
          </h3>
          <ul className="space-y-4 pl-0 list-none m-0">
            {roadmapItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start justify-between text-xs md:text-sm font-medium text-muted-foreground pb-3 border-b border-muted last:border-0 last:pb-0 gap-4"
              >
                <div className="flex items-start gap-3 min-w-0">
                  {/* FIXED: Changed to valid standard Tailwind mt-1 utility */}
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0 mt-1" />
                  <span className="leading-tight">{item}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 opacity-40 mt-0.5" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
