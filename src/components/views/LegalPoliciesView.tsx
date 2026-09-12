import React from 'react';
import {
  ShieldCheck,
  FileText,
  Scale,
  RotateCcw,
  Cookie,
  ArrowLeft,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { TabId } from '../../types';

type LegalPolicyId = 'privacy' | 'terms' | 'disclaimer' | 'refund' | 'cookies';

interface LegalPoliciesViewProps {
  policy: LegalPolicyId;
  onNavigate: (tab: TabId) => void;
}

const POLICY_META: Record<LegalPolicyId, {
  label: string;
  title: string;
  intro: string;
  icon: React.ComponentType<{ className?: string }>;
}> = {
  privacy: {
    label: 'Privacy Policy',
    title: 'Privacy Policy',
    intro: 'This Privacy Policy explains how CareerNova collects, uses, stores, and protects information when you visit our website, contact us, use our tools, or engage our services.',
    icon: ShieldCheck,
  },
  terms: {
    label: 'Terms of Service',
    title: 'Terms of Service',
    intro: 'These Terms of Service govern your use of the CareerNova website, digital tools, service enquiries, and any professional services or projects you engage us to provide.',
    icon: FileText,
  },
  disclaimer: {
    label: 'Disclaimer',
    title: 'Disclaimer',
    intro: 'The information, tools, guidance, and AI-assisted outputs available through CareerNova are provided for general informational and decision-support purposes.',
    icon: Scale,
  },
  refund: {
    label: 'Refund & Cancellation',
    title: 'Refund & Cancellation Policy',
    intro: 'This policy explains how cancellations, project changes, refunds, and payments are handled for CareerNova services.',
    icon: RotateCcw,
  },
  cookies: {
    label: 'Cookie Policy',
    title: 'Cookie Policy',
    intro: 'This Cookie Policy explains how CareerNova may use cookies and similar technologies to operate, understand, and improve its website.',
    icon: Cookie,
  },
};

const LAST_UPDATED = 'September 2026';

export const LegalPoliciesView: React.FC<LegalPoliciesViewProps> = ({ policy, onNavigate }) => {
  const meta = POLICY_META[policy];
  const Icon = meta.icon;

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="space-y-2.5">
      <h2 className="text-lg sm:text-xl font-black text-slate-900">{title}</h2>
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );

  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => onNavigate('home')}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to CareerNova
        </button>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-6 py-9 sm:px-10 sm:py-12">
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-indigo-200/30 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-violet-200/30 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-600">
                <Icon className="h-3.5 w-3.5" />
                {meta.label}
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{meta.title}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{meta.intro}</p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Last updated: {LAST_UPDATED}
              </p>
            </div>
          </div>

          <article className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
            {policy === 'privacy' && (
              <>
                <Section title="1. Information We May Collect">
                  <p>When you contact CareerNova, request a service, submit a form, or use parts of our website, we may receive information such as your name, email address, phone number, project or service requirements, and the message or information you choose to provide.</p>
                  <p className="mt-2">We may also receive limited technical information such as browser type, device information, pages visited, approximate usage information, and similar analytics data when such technologies are enabled.</p>
                </Section>
                <Section title="2. How We Use Information">
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Respond to enquiries, support requests, and service discussions.</li>
                    <li>Understand project requirements and provide requested services.</li>
                    <li>Communicate about proposals, delivery, revisions, updates, or support.</li>
                    <li>Improve website performance, tools, content, and user experience.</li>
                    <li>Maintain security, prevent misuse, and meet applicable legal obligations.</li>
                  </ul>
                </Section>
                <Section title="3. Sharing of Information">
                  <p>CareerNova does not sell personal information as a business model. Information may be shared with service providers or technology partners when reasonably necessary to operate the website, process enquiries, deliver a requested service, provide analytics, process payments, or maintain technical infrastructure. We may also disclose information where required by law or to protect legitimate rights and security.</p>
                </Section>
                <Section title="4. Data Security and Retention">
                  <p>We use reasonable technical and organisational measures to protect information. No internet transmission or storage system can be guaranteed to be completely secure. We retain information for as long as reasonably necessary for the purpose for which it was collected, ongoing business records, dispute resolution, security, or legal requirements.</p>
                </Section>
                <Section title="5. Your Choices">
                  <p>You may contact CareerNova to ask about personal information we hold about you, request correction of inaccurate information, or ask questions about how your information is used. Some records may need to be retained where required for legitimate business or legal purposes.</p>
                </Section>
                <Section title="6. Third-Party Services and Links">
                  <p>Our website may use third-party services such as hosting, analytics, forms, communications, payment providers, or external links. Those services may have their own privacy practices and terms. We encourage you to review the policies of third-party services you choose to use.</p>
                </Section>
                <Section title="7. Contact">
                  <p>For privacy questions, contact CareerNova at <a className="font-bold text-indigo-600 hover:underline" href="mailto:sudheersinghrajput8932@gmail.com">sudheersinghrajput8932@gmail.com</a> or call/WhatsApp <a className="font-bold text-indigo-600 hover:underline" href="tel:+917007260391">+91 7007260391</a>.</p>
                </Section>
              </>
            )}

            {policy === 'terms' && (
              <>
                <Section title="1. Acceptance of Terms">
                  <p>By accessing or using CareerNova, you agree to use the website lawfully and in accordance with these Terms. If you do not agree with these Terms, please do not use the relevant service or website functionality.</p>
                </Section>
                <Section title="2. Services and Enquiries">
                  <p>CareerNova may provide web development, iOS app development, e-commerce development, AI and automation, UI/UX and product design, digital marketing and SEO, business growth, and maintenance and support services. A service enquiry, quotation, or discussion does not by itself create a binding project agreement. Specific scope, price, timeline, deliverables, payment terms, revisions, and responsibilities may be confirmed separately before work begins.</p>
                </Section>
                <Section title="3. Pricing and Payment">
                  <p>Prices, taxes, payment schedules, deposits, milestones, and other commercial terms will be communicated for the applicable service or project. Where a payment is required before work begins, work may commence only after the required payment or confirmation has been received.</p>
                </Section>
                <Section title="4. Client Responsibilities">
                  <p>Clients are responsible for providing accurate requirements, content, credentials, approvals, feedback, and other materials reasonably required to complete a project. Delays in receiving required information or approvals may affect delivery timelines.</p>
                </Section>
                <Section title="5. Intellectual Property">
                  <p>Unless a separate written agreement states otherwise, ownership and permitted use of final project deliverables will depend on the agreed scope and payment terms. CareerNova may retain rights in its pre-existing frameworks, reusable components, methods, know-how, templates, and general-purpose tools. Clients must have the right to use materials they provide to CareerNova.</p>
                </Section>
                <Section title="6. Revisions and Changes">
                  <p>Revisions are handled according to the agreed project scope. Requests that materially change the approved scope, functionality, design direction, integrations, or deliverables may require additional time or fees.</p>
                </Section>
                <Section title="7. Acceptable Use">
                  <p>You must not use the website, tools, or services for unlawful activity, fraud, abuse, infringement, malicious activity, unauthorised access, or any purpose that could harm CareerNova, its users, service providers, or third parties.</p>
                </Section>
                <Section title="8. Limitation of Liability">
                  <p>CareerNova will take reasonable care in delivering agreed services, but cannot guarantee uninterrupted availability, error-free operation, specific commercial outcomes, search rankings, revenue, leads, downloads, app-store approval, or other results that depend on third parties, markets, platforms, client decisions, or external conditions.</p>
                </Section>
                <Section title="9. Governing Law">
                  <p>These Terms are intended to be governed by the laws applicable in India. Any dispute will be subject to the jurisdiction of the appropriate courts, subject to applicable law and any separate written agreement between the parties.</p>
                </Section>
              </>
            )}

            {policy === 'disclaimer' && (
              <>
                <Section title="1. General Information">
                  <p>CareerNova provides information, tools, resources, software solutions, and business-growth services. Website content is provided for general informational and decision-support purposes and should not be treated as legal, tax, accounting, investment, medical, or other regulated professional advice.</p>
                </Section>
                <Section title="2. Business and Growth Results">
                  <p>Business growth, marketing, SEO, conversion, revenue, customer acquisition, and other commercial outcomes depend on many factors outside CareerNova’s control. Past examples, projections, estimates, or strategy suggestions are not guarantees of future results.</p>
                </Section>
                <Section title="3. AI and Automated Outputs">
                  <p>AI-assisted tools and workflows can produce inaccurate, incomplete, outdated, or unsuitable outputs. You should review and independently verify important AI-generated information before relying on it for material decisions.</p>
                </Section>
                <Section title="4. Third-Party Platforms">
                  <p>CareerNova may integrate with or refer to third-party platforms, APIs, hosting providers, analytics systems, payment services, app stores, advertising platforms, or other external services. Their availability, pricing, policies, and performance are outside CareerNova’s direct control.</p>
                </Section>
                <Section title="5. External Links">
                  <p>Links to external websites are provided for convenience or functionality. CareerNova is not responsible for the content, security, availability, or policies of third-party websites.</p>
                </Section>
              </>
            )}

            {policy === 'refund' && (
              <>
                <Section title="1. Cancellation Before Work Starts">
                  <p>If a client cancels a confirmed service before substantive work has started, any refund will depend on the agreed commercial terms and any non-refundable payment-processing, booking, preparation, or other costs already incurred. Where no specific refund term was agreed, CareerNova will review the request reasonably based on the work and costs already incurred.</p>
                </Section>
                <Section title="2. Cancellation After Work Starts">
                  <p>Once project work, development, design, research, setup, configuration, or other substantive service delivery has started, payments relating to work already performed may be non-refundable. Any eligible balance will be assessed against the agreed scope, completed work, and unrecoverable costs.</p>
                </Section>
                <Section title="3. Scope Changes and Delays">
                  <p>A change in requirements or delay caused by missing client materials, approvals, credentials, or feedback does not automatically create a right to a refund. We will first try to agree on a revised scope or timeline where practical.</p>
                </Section>
                <Section title="4. Defects and Revisions">
                  <p>If an agreed deliverable has a material defect within the applicable support or revision period, the first remedy will generally be correction or reasonable revision rather than an immediate refund, provided the issue falls within the agreed scope.</p>
                </Section>
                <Section title="5. Refund Processing">
                  <p>Where a refund is approved, CareerNova will communicate the approved amount and expected processing method. The time taken for funds to reach the original payment method may also depend on the relevant bank, payment gateway, or financial institution.</p>
                </Section>
                <Section title="6. How to Request a Cancellation or Refund">
                  <p>Send your request with your name, contact details, project/service reference if available, payment information, and reason for the request to <a className="font-bold text-indigo-600 hover:underline" href="mailto:sudheersinghrajput8932@gmail.com">sudheersinghrajput8932@gmail.com</a>. We will review the request against the applicable agreement and this policy.</p>
                </Section>
              </>
            )}

            {policy === 'cookies' && (
              <>
                <Section title="1. What Cookies Are">
                  <p>Cookies are small data files stored on a device by a website. Similar technologies may also be used to remember preferences, understand usage, maintain sessions, or measure performance.</p>
                </Section>
                <Section title="2. How CareerNova May Use Cookies">
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Essential functionality and security.</li>
                    <li>Remembering selected preferences or session information.</li>
                    <li>Understanding website usage and improving performance.</li>
                    <li>Measuring page views and engagement through analytics where enabled.</li>
                  </ul>
                </Section>
                <Section title="3. Third-Party Technologies">
                  <p>Some functions may rely on third-party services that place or access cookies or similar identifiers. Their use is governed by the relevant provider’s policies and settings.</p>
                </Section>
                <Section title="4. Managing Cookies">
                  <p>You can usually control or delete cookies through your browser settings. Disabling certain cookies may affect website functionality or preferences. Where a dedicated consent or cookie-control mechanism is provided, you can use that mechanism to manage optional technologies.</p>
                </Section>
                <Section title="5. Updates">
                  <p>CareerNova may update this Cookie Policy when our website, analytics, technologies, or legal requirements change. The latest version will be published on this page.</p>
                </Section>
              </>
            )}

            <div className="mt-10 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <a href="mailto:sudheersinghrajput8932@gmail.com" className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 text-sm font-bold text-slate-700 transition hover:bg-indigo-50">
                <Mail className="h-5 w-5 text-indigo-600" />
                Email CareerNova
              </a>
              <a
                href="https://wa.me/917007260391?text=Hi%20CareerNova%20Team%2C%20I%20have%20a%20question%20about%20your%20policies."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-violet-50/60 p-4 text-sm font-bold text-slate-700 transition hover:bg-violet-50"
              >
                <MessageCircle className="h-5 w-5 text-violet-600" />
                WhatsApp CareerNova
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default LegalPoliciesView;
