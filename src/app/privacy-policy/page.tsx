import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { SITE_INFO } from "@/data/charterData";

const SITE_URL = "https://www.neworleansstylefishingcharters.com";

export const metadata: Metadata = {
  title: "Privacy Policy | New Orleans Style Fishing Charters",
  description:
    "How New Orleans Style Fishing Charters collects, uses, and protects personal data submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-[#203F39]">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-1.5 marker:text-[#BF754C]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F1E7] text-[#26302E]">
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 pt-40 pb-24">
        <article className="max-w-3xl mx-auto text-[15px] sm:text-base leading-relaxed text-[#3D4A47]">
          <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#BF754C]">
            {SITE_INFO.name}
          </span>
          <h1 className="mt-2.5 font-display text-3xl sm:text-4xl font-bold text-[#203F39]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#6B7A74]">Effective date: July 23, 2023</p>

          <div className="mt-8 space-y-4">
            <p>
              {SITE_INFO.name} (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates the{" "}
              {SITE_URL}/ website (the &ldquo;Service&rdquo;).
            </p>
            <p>
              This page informs you of our policies regarding the collection, use, and disclosure of personal
              data when you use our Service and the choices you have associated with that data.
            </p>
            <p>
              We use your data to provide and improve the Service. By using the Service, you agree to the
              collection and use of information in accordance with this policy.
            </p>
          </div>

          <Section title="Information Collection and Use">
            <p>
              We collect several different types of information for various purposes to provide and improve our
              Service to you.
            </p>
          </Section>

          <Section title="Types of Data Collected">
            <h3 className="font-display text-lg font-bold text-[#203F39]">Personal Data</h3>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable
              information that can be used to contact or identify you (&ldquo;Personal Data&rdquo;). Personally
              identifiable information may include, but is not limited to:
            </p>
            <List
              items={[
                "Email address",
                "First name and last name",
                "Phone number",
                "Address, State, Province, ZIP/Postal code, City",
                "Cookies and Usage Data",
              ]}
            />

            <h3 className="font-display text-lg font-bold text-[#203F39]">Usage Data</h3>
            <p>
              We may also collect information on how the Service is accessed and used (&ldquo;Usage Data&rdquo;).
              This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g.
              IP address), browser type, browser version, the pages of our Service that you visit, the time and
              date of your visit, the time spent on those pages, unique device identifiers and other diagnostic
              data.
            </p>

            <h3 className="font-display text-lg font-bold text-[#203F39]">Tracking &amp; Cookies Data</h3>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold
              certain information.
            </p>
            <p>
              Cookies are files with a small amount of data which may include an anonymous unique identifier.
              Cookies are sent to your browser from a website and stored on your device. Tracking technologies
              also used are beacons, tags, and scripts to collect and track information and to improve and
              analyze our Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            <p>Examples of cookies we use:</p>
            <List
              items={[
                "Session Cookies. We use Session Cookies to operate our Service.",
                "Preference Cookies. We use Preference Cookies to remember your preferences and various settings.",
                "Security Cookies. We use Security Cookies for security purposes.",
              ]}
            />
          </Section>

          <Section title="Use of Data">
            <p>{SITE_INFO.name} uses the collected data for various purposes:</p>
            <List
              items={[
                "To provide and maintain the Service",
                "To notify you about changes to our Service",
                "To allow you to participate in interactive features of our Service when you choose to do so",
                "To provide customer care and support",
                "To provide analysis or valuable information so that we can improve the Service",
                "To monitor the usage of the Service",
                "To detect, prevent and address technical issues",
              ]}
            />
          </Section>

          <Section title="Transfer of Data">
            <p>
              Your information, including Personal Data, may be transferred to &mdash; and maintained on &mdash;
              computers located outside of your state, province, country or other governmental jurisdiction where
              the data protection laws may differ from those of your jurisdiction.
            </p>
            <p>
              If you are located outside the United States and choose to provide information to us, please note
              that we transfer the data, including Personal Data, to the United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of such information represents your
              agreement to that transfer.
            </p>
            <p>
              {SITE_INFO.name} will take all steps reasonably necessary to ensure that your data is treated
              securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take
              place to an organization or a country unless there are adequate controls in place including the
              security of your data and other personal information.
            </p>
          </Section>

          <Section title="Disclosure of Data">
            <h3 className="font-display text-lg font-bold text-[#203F39]">Legal Requirements</h3>
            <p>
              {SITE_INFO.name} may disclose your Personal Data in the good faith belief that such action is
              necessary to:
            </p>
            <List
              items={[
                "Comply with a legal obligation",
                `Protect and defend the rights or property of ${SITE_INFO.name}`,
                "Prevent or investigate possible wrongdoing in connection with the Service",
                "Protect the personal safety of users of the Service or the public",
                "Protect against legal liability",
              ]}
            />
          </Section>

          <Section title="Security of Data">
            <p>
              The security of your data is important to us, but remember that no method of transmission over the
              Internet, or method of electronic storage, is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </Section>

          <Section title="Service Providers">
            <p>
              We may employ third party companies and individuals to facilitate our Service (&ldquo;Service
              Providers&rdquo;), to provide the Service on our behalf, to perform Service-related services or to
              assist us in analyzing how our Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and
              are obligated not to disclose or use it for any other purpose.
            </p>
          </Section>

          <Section title="Analytics">
            <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
            <h3 className="font-display text-lg font-bold text-[#203F39]">Google Analytics</h3>
            <p>
              Google Analytics is a web analytics service offered by Google that tracks and reports website
              traffic. Google uses the data collected to track and monitor the use of our Service. This data is
              shared with other Google services. Google may use the collected data to contextualize and
              personalize the ads of its own advertising network.
            </p>
            <p>
              You can opt out of having your activity on the Service made available to Google Analytics by
              installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics
              JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about
              visit activity.
            </p>
            <p>
              For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms
              web page:{" "}
              <a
                href="https://policies.google.com/privacy?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#203F39] hover:text-[#BF754C] underline underline-offset-4 transition-colors"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </Section>

          <Section title="Links to Other Sites">
            <p>
              Our Service may contain links to other sites that are not operated by us. If you click on a third
              party link, you will be directed to that third party&apos;s site. We strongly advise you to review
              the Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies or practices
              of any third party sites or services.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>Our Service does not address anyone under the age of 18 (&ldquo;Children&rdquo;).</p>
            <p>
              We do not knowingly collect personally identifiable information from anyone under the age of 18. If
              you are a parent or guardian and you are aware that your child has provided us with Personal Data,
              please contact us. If we become aware that we have collected Personal Data from children without
              verification of parental consent, we take steps to remove that information from our servers.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
              new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our Service, prior to the change
              becoming effective, and update the &ldquo;effective date&rdquo; at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
              Policy are effective when they are posted on this page.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <List items={[`By email: ${SITE_INFO.email}`, `By phone: ${SITE_INFO.phone}`]} />
          </Section>

          <div className="mt-12">
            <Link
              href="/"
              className="text-[#203F39] hover:text-[#BF754C] underline underline-offset-4 transition-colors"
            >
              &larr; Back to home
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
