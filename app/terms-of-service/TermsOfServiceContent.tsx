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
const calloutClass =
  "p-5 md:p-6 rounded-[24px] bg-[#EBEBEB] border border-evren-light-gray";
const panelClass = cardClass;

export default function TermsOfServiceContent() {
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
          className="absolute top-[40%] -right-[15%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(78, 124, 110, 0.15) 0%, rgba(78, 124, 110, 0.03) 50%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
      </div>

      <div className="relative z-10 pt-[140px] md:pt-[180px] pb-12 md:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(136,201,179,0.15)_0%,transparent_60%)] rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />

        <div className="max-w-[1024px] mx-auto relative">
          <p className="text-sm uppercase tracking-widest text-evren-peach font-heading font-bold mb-4">
            Foundation
          </p>
          <h1 className="font-heading font-bold text-[40px] md:text-[56px] lg:text-[64px] text-evren-navy leading-[1.1] tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="font-body text-[18px] md:text-[20px] text-evren-navy/90 leading-[1.65] max-w-2xl font-medium">
            The ground rules of our relationship. We keep things straightforward
            and human so we can focus on building intelligent futures.
          </p>
          <p className="mt-6 text-[13px] text-evren-medium-gray font-body">
            Last Updated: May 22, 2026
          </p>
        </div>
      </div>

      <div className="relative z-10 px-5 sm:px-6 mt-8 md:mt-10 pb-2 md:pb-4">
        <div className="max-w-[1024px] mx-auto">
          <section className={sectionClass}>
            <SectionHeading>Agreement and Acceptance</SectionHeading>
            <div className={bodyClass}>
              <p>
                These Terms of Service govern your access to and use of our website,{" "}
                <span className="text-evren-navy font-semibold">evrenai.com</span> (the &ldquo;Site&rdquo;), and public services.
              </p>
              <p>
                By browsing, utilizing interactive features, or booking consultations through the Site, you accept these Terms in full. If you disagree with any part, please discontinue using the Site.
              </p>
              <div className={`${calloutClass} text-[15px] md:text-[16px] text-evren-charcoal/90`}>
                <strong className="text-evren-navy">Important Client Notice:</strong> These Terms only cover the public-facing Site itself. Specific professional partnerships, sprint schedules, milestones, and software deliverables are governed by separate, mutually signed Statements of Work (SOWs) or Master Service Agreements (MSAs).
              </div>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Our Core Services</SectionHeading>
            <div className={bodyClass}>
              <p>
                AI Advocate specializes in custom enterprise software integration, native intelligence systems, and design-led engineering:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  { title: "Product Engineering", desc: "We design, write, deploy, and maintain robust web apps and mobile code architectures." },
                  { title: "AI Native Integration", desc: "Integrating customized LLM configurations, automation workflows, and predictive models from sprint one." },
                  { title: "Business Transformation", desc: "Collaborative consulting that guides firms through workflow reimagination before code deployment." },
                  { title: "Discovery Workshops", desc: "Product-driven blueprinting phases designed to align scopes, technical options, and architectural blueprints." },
                ].map((item) => (
                  <div key={item.title} className={cardClass}>
                    <h3 className="font-heading font-bold text-evren-navy text-base">{item.title}</h3>
                    <p className="mt-2 text-[15px] text-evren-charcoal/80 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Rules of Engagement</SectionHeading>
            <div className={bodyClass}>
              <p>We build tools for the open expansion of ideas and products. To ensure a safe digital studio space, we uphold simple expectations:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className={panelClass}>
                  <h3 className="font-heading font-bold text-evren-navy text-sm mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-evren-peach" />
                    Welcome Actions
                  </h3>
                  <ul className="space-y-3 text-[15px] md:text-[16px] pl-0 list-none">
                    <li className="flex gap-2"><span className="text-evren-peach">•</span>Reviewing case studies and sharing our published editorial logs.</li>
                    <li className="flex gap-2"><span className="text-evren-peach">•</span>Booking consultation calls to outline genuine digital needs.</li>
                    <li className="flex gap-2"><span className="text-evren-peach">•</span>Linking to our resources with proper credit.</li>
                  </ul>
                </div>
                <div className={panelClass}>
                  <h3 className="font-heading font-bold text-evren-navy text-sm mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-evren-medium-gray" />
                    Prohibited Actions
                  </h3>
                  <ul className="space-y-3 text-[15px] md:text-[16px] pl-0 list-none">
                    <li className="flex gap-2"><span className="text-evren-peach">•</span>Bulk data scraping, harvesting, or site spoofing.</li>
                    <li className="flex gap-2"><span className="text-evren-peach">•</span>Injecting malicious code or scanning system vulnerabilities.</li>
                    <li className="flex gap-2"><span className="text-evren-peach">•</span>Impersonating AI Advocate team members or partners.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Intellectual Property</SectionHeading>
            <div className={bodyClass}>
              <p>All content on this Site logo patterns, text articles, visual illustrations, component layouts, and custom animations is the exclusive property of AI Advocate or our licensors, safeguarded by international copyright and trademark protections.</p>
              <p>You are granted a limited, personal, non-exclusive license to browse the site. You may not copy, reverse engineer, or sell our assets without express written clearance.</p>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Confidentiality Commitment</SectionHeading>
            <div className={bodyClass}>
              <p>We treat all discovery workshops and prospective project notes with absolute discretion. Any project ideas, proprietary datasets, or workflow issues you share while inquiring about our services are held as confidential.</p>
              <p>Prior to beginning any deep engineering sprints, we execute robust Mutual Non-Disclosure Agreements (NDAs) to guarantee long-term protection for your proprietary systems and enterprise assets.</p>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Disclaimers & Limitation of Liability</SectionHeading>
            <div className={bodyClass}>
              <p>This Site is provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. While we strive to present accurate editorial thoughts, we do not warrant that site features will be entirely uninterrupted or error-free.</p>
              <p>To the maximum extent permitted by law, AI Advocate will not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to access our public site pages.</p>
            </div>
          </section>

          <section className={sectionClass}>
            <SectionHeading>Governing Law</SectionHeading>
            <div className={bodyClass}>
              <p>These Terms, and any claims arising from your use of the Site, are governed by and construed in accordance with the laws of the <strong className="text-evren-navy">State of Delaware, USA</strong> and the <strong className="text-evren-navy">United Arab Emirates (Dubai)</strong>, without regard to conflict of law principles.</p>
              <p>Any legal actions concerning these Terms must be filed in the competent courts of Delaware or Dubai respectively.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
