import React from "react";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[14px] font-heading font-bold text-evren-navy uppercase tracking-[0.08em] mb-4 md:mb-5">
      {children}
    </h2>
  );
}

const sectionClass = "py-6 md:py-8 lg:py-10";
const bodyClass =
  "font-body text-[16px] md:text-[17px] leading-[1.65] text-evren-charcoal space-y-4 md:space-y-5";
const cardClass =
  "p-5 md:p-6 rounded-[24px] bg-white border border-evren-light-gray shadow-[0_4px_20px_rgba(26,36,33,0.03)]";
const chipClass =
  "p-4 md:p-5 rounded-[24px] bg-white border border-evren-light-gray shadow-[0_4px_20px_rgba(26,36,33,0.03)]";

export default function PrivacyPolicyContent() {
  return (
    <div className="relative min-h-screen bg-evren-warm-white pb-12 md:pb-16">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(136, 201, 179, 0.2) 0%, rgba(136, 201, 179, 0.05) 45%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-[30%] -right-[15%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(107, 168, 142, 0.15) 0%, rgba(107, 168, 142, 0.03) 50%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
      </div>

      <div className="relative z-10 pt-[140px] md:pt-[180px] pb-12 md:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(136,201,179,0.15)_0%,transparent_60%)] rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />

        <div className="max-w-[1024px] mx-auto relative">
          <p className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-4">
            Transparency
          </p>
          <h1 className="font-heading font-bold text-[40px] md:text-[56px] lg:text-[64px] text-evren-navy leading-[1.1] tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="font-body text-[18px] md:text-[20px] text-evren-navy/90 leading-[1.65] max-w-2xl font-medium">
            Your trust is our foundation. We explain our data practices clearly,
            in human language, without hiding behind legal complexity.
          </p>
          <p className="mt-6 text-[13px] text-evren-medium-gray font-body">
            Last Updated: May 22, 2026
          </p>
        </div>
      </div>

      <div className="relative z-10 px-5 sm:px-6 mt-8 md:mt-10 pb-2 md:pb-4">
        <div className="max-w-[1024px] mx-auto">
          <section className={sectionClass}>
            <SectionHeading>A Note from AI Advocate Holding</SectionHeading>
            <div className={bodyClass}>
              <p>
                Welcome. We are <strong className="text-evren-navy">AI Advocate Holding</strong>, a digital product studio with operations in the United States and Dubai. We build intelligent software solutions, and we believe protecting your privacy is integral to building exceptional products.
              </p>
              <p>
                This Privacy Policy applies to our website at{" "}
                <span className="text-evren-navy font-semibold">evrenai.com</span> (the &ldquo;Site&rdquo;), and our standard discovery and project engagement cycles. By visiting the Site or contacting us, you agree to the transparent data practices described below.
              </p>
              <p>
                Because we value human connection, we have intentionally avoided dry legal jargon. If you ever have a question about how we use your information, reach out to us at{" "}
                <a
                  href="mailto:hello@evrenai.com"
                  className="font-semibold text-evren-navy underline decoration-evren-peach decoration-2 underline-offset-4 hover:text-evren-rose transition-colors"
                >
                  hello@evrenai.com
                </a>.
              </p>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>What Information We Collect</SectionHeading>
            <div className={bodyClass}>
              <p>We believe in extreme data minimization. We only collect the minimal information necessary to deliver our services, build digital products, and manage our business relationships:</p>
              <div className="space-y-4 md:space-y-5">
                {[
                  { num: "01", title: "Information You Give Directly", desc: "When you fill out a form, book a consultation, or send us project briefs, we collect your name, email, company details, phone number, and any insights you share." },
                  { num: "02", title: "Information Collected Automatically", desc: "To maintain site performance and stability, we automatically log basic technical parameters like IP address, browser type, device details, and navigation analytics." },
                  { num: "03", title: "Professional Directories", desc: "Occasionally, we verify corporate relationships or discover business matches through public professional directories like LinkedIn." },
                ].map((item) => (
                  <div key={item.num} className={`flex gap-4 ${cardClass}`}>
                    <span className="font-heading font-bold text-evren-peach text-lg leading-none">{item.num}</span>
                    <div>
                      <h3 className="font-heading font-bold text-evren-navy text-base md:text-lg">{item.title}</h3>
                      <p className="mt-2 text-[15px] md:text-[16px] text-evren-charcoal/80 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>How We Use & Share Data</SectionHeading>
            <div className={bodyClass}>
              <p>Your data is only used to fulfill the purposes you shared it for. We commit to a clean policy: no surprises, no data hoarding, and absolutely no selling of your data.</p>
              <p className="font-bold text-evren-navy">We use information specifically to:</p>
              <ul className="space-y-3 pl-0 list-none">
                {[
                  "Deliver digital product engineering services and active client project SOWs.",
                  "Communicate about sprints, schedules, invoices, and product support.",
                  "Send periodic AI research, studio updates, or newsletters (only if you opt-in).",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] md:text-[16px]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-evren-peach flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-bold text-evren-navy">Sharing Limitation:</p>
              <p>We only disclose data to trusted service providers (e.g., hosting platforms like Vercel, analytical systems like Google Analytics, or billing systems) who strictly follow security mandates. We will only share details with authorities if explicitly demanded by a governing subpoena in the US or UAE.</p>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Security & Retention</SectionHeading>
            <div className={bodyClass}>
              <p>We secure your personal information using standard industry encryption and operational safeguards. While no online communication is 100% failproof, we constantly update our practices to block unauthorized access, disclosure, or misuse.</p>
              <p><strong className="text-evren-navy">Retention Limits:</strong> We retain data only as long as necessary to service your project, stay in touch, or comply with statutory financial audits and tax rules. Once inactive, your data is securely deleted or fully anonymized.</p>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Your Rights and Choices</SectionHeading>
            <div className={bodyClass}>
              <p>Regardless of your physical location, we believe everyone deserves control over their data. You possess the following fundamental rights:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 list-none pl-0">
                {[
                  { label: "Access", desc: "what data we store." },
                  { label: "Correct", desc: "any faulty information." },
                  { label: "Delete", desc: "your contact records." },
                  { label: "Opt-out", desc: "of marketing updates instantly." },
                ].map((item) => (
                  <li key={item.label} className={`${chipClass} text-[15px] md:text-[16px] flex items-center gap-2`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-evren-peach flex-shrink-0" />
                    <span><strong>{item.label}</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-4 text-[14px] md:text-[15px] text-evren-medium-gray">
                Our practices comply with international frameworks, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
