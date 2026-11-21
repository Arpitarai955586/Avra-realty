import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Avra Realty explaining how enquiry information may be collected and used when you contact us through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHero
        title="Privacy Policy"
        description="How Avra Realty handles information shared through this website."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-premium prose-none max-w-3xl space-y-8 text-grey-600">
          <p className="text-sm text-grey-400">Last updated: 22 November 2026</p>

          <div>
            <h2 className="font-display text-2xl text-navy">1. Introduction</h2>
            <p className="mt-3 leading-relaxed">
              This Privacy Policy explains how {SITE_NAME} (“we”, “us”, or
              “our”) may collect and use information when you interact with this
              website, including contact and property enquiry forms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">
              2. Information We Collect
            </h2>
            <p className="mt-3 leading-relaxed">
              When you submit an enquiry, you may provide your name, email
              address, phone number, and message content. We do not intentionally
              collect sensitive personal data through this website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">
              3. How We Use Information
            </h2>
            <p className="mt-3 leading-relaxed">
              Enquiry details are used to respond to your request, discuss
              property requirements, and improve our communication. We do not
              sell personal information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">
              4. Cookies & Analytics
            </h2>
            <p className="mt-3 leading-relaxed">
              If Google Analytics or similar tools are enabled through
              environment configuration, anonymised usage data may be collected
              to understand website performance. You can control cookies through
              your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">5. Data Sharing</h2>
            <p className="mt-3 leading-relaxed">
              We may share enquiry information with authorised team members or
              service providers solely to respond to your request. Legal
              disclosure may occur if required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">6. Contact</h2>
            <p className="mt-3 leading-relaxed">
              For privacy-related questions, contact {SITE_NAME} at{" "}
              <a
                href={CONTACT.emailHref}
                className="text-navy underline decoration-gold underline-offset-4"
              >
                {CONTACT.email}
              </a>{" "}
              or{" "}
              <a
                href={CONTACT.phoneHref}
                className="text-navy underline decoration-gold underline-offset-4"
              >
                {CONTACT.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">7. Updates</h2>
            <p className="mt-3 leading-relaxed">
              This policy may be updated as the website and business processes
              evolve. The latest version will always be available on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
