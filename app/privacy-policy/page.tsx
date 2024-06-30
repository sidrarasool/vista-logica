import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-between overflow-x-hidden bg-white">
      <Header backgroundColor="#FFF" />
      <div className="w-screen mx-0 mt-16 flex flex-col items-center">
        <div
          className="relative w-full flex items-center justify-center text-center bg-cover bg-center py-12"
          style={{
            backgroundImage: "url('/assets/privacy_policy_banner.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 max-w-[56rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col items-center">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-5xl font-semibold">
              Privacy policy
            </h2>
            <p className="my-5 text-white text-sm max-w-2xl text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-4 gap-x-3">
        <div className="lg:w-1/4 p-4 border-[1px] rounded-lg h-max">
          <h3 className="text-xl font-semibold mb-4">Table of content</h3>
          <ul className="list-none">
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#respect-privacy" className="text-sm text-[#2286FF]">
                We respect your privacy
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#personal-info" className="text-sm text-[#2286FF]">
                What personal information is collected
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a
                href="#personal-info-collect"
                className="text-sm text-[#2286FF]"
              >
                How we collect your personal information
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#use-info" className="text-sm text-[#2286FF]">
                How we use your personal information
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#info-disclosure" className="text-sm text-[#2286FF]">
                Disclosure of your personal information
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#gdpr" className="text-sm text-[#2286FF]">
                About General Data Protection Regulation (GDPR)
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#data-hosting" className="text-sm text-[#2286FF]">
                Data Hosting and Security of Personal Information
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#complaints" className="text-sm text-[#2286FF]">
                Complaints about privacy
              </a>
            </li>
            <li className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <a href="#website" className="text-sm text-[#2286FF]">
                Website
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-3/4 p-4 border-[1px] rounded-lg">
          <h3
            id="privacy-policy"
            className="text-2xl font-semibold mb-4"
            style={{ color: "#011021" }}
          >
            VISTA LOGICA PVT LTD PRIVACY POLICY
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            “We”, “us” and “our” means VISTA LOGICA Pty Ltd ACN 676 413 988.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            By using our services and products, you agree to us collecting,
            holding, using, and disclosing your Personal Information in
            accordance with this Policy. If you have any questions about our
            Policy or your Personal Information, please contact us at{" "}
            <a
              href="mailto:privacy@vistalogica.com.au"
              className="text-[#2286FF]"
            >
              privacy@vistalogica.com.au
            </a>
            .
          </p>
          <br />
          <h3
            id="respect-privacy"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            We respect your privacy
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            "Personal information" is information we hold which is identifiable
            as being about you. This includes information such as your name,
            email address, identification number, or any other type of
            information that can reasonably identify an individual, either
            directly or indirectly.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            We adhere to the Australian Privacy Principles contained in the
            Privacy Act 1988 (Cth) and to the extent applicable, the EU General
            Data Protection Regulation (GDPR).
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            We respect your right to privacy and are committed to safeguarding
            the privacy of our customers and website visitors. This policy sets
            out how we collect and treat your personal information.
          </p>
          <br />
          <h3
            id="personal-info"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            What personal information is collected
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            We will, from time to time, receive and store personal information
            you submit to our website, provided to us directly or given to us in
            other forms. You may provide basic information such as your name,
            phone number, address and email address to enable us to send you
            information, provide updates and process your product or service
            order.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            We may collect additional information at other times, including but
            not limited to, when you provide feedback, when you provide
            information about your personal or business affairs, change your
            content or email preference, respond to surveys and/or promotions,
            or communicate with our customer support. Additionally, we may also
            collect any other information you provide while interacting with us.
          </p>
          <br />
          <h3
            id="personal-info-collect"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            How we collect your personal information
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            We collect personal information from you in a variety of ways,
            including when you interact with us electronically or in person,
            when you access our website and when we engage in business
            activities with you. We may receive personal information from third
            parties. If we do, we will protect it as set out in this Privacy
            Policy. By providing us with personal information, you consent to
            the supply of that information subject to the terms of this Privacy
            Policy.
          </p>
          <br />
          <h3
            id="use-info"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            How we use your personal information
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            We may use personal information collected from you to provide you
            with information about our products or services. We may also make
            you aware of new and additional products, services and opportunities
            available to you.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            We will use personal information only for the purposes that you
            consent to. This may include to:
          </p>
          <br />
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
            }}
            className="text-[#4D5763] text-sm"
          >
            <li>
              provide you with products and services during the usual course of
              our business activities;
            </li>
            <li>administer our business activities;</li>
            <li>manage, research and develop our products and services;</li>
            <li>
              provide you with information about our products and services;
            </li>
            <li>
              communicate with you by a variety of measures including, but not
              limited to, by telephone, email, sms or mail; and
            </li>
            <li>investigate any complaints.</li>
          </ul>
          <br />
          <p className="text-[#4D5763] text-sm">
            We may disclose your personal information to comply with a legal
            requirement, such as a law, regulation, court order, subpoena,
            warrant, legal proceedings or in response to a law enforcement
            agency request.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            If there is a change of control in our business or a sale or
            transfer of business assets, we reserve the right to transfer to the
            extent permissible at law our user databases, together with any
            personal information and non-personal information contained in those
            databases.
          </p>
          <br />
          <h3
            id="info-disclosure"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            Disclosure of your personal information
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            We may disclose your personal information to any of our employees,
            officers, insurers, professional advisers, agents, suppliers or
            subcontractors insofar as reasonably necessary for the purposes set
            out in this privacy policy. If we do disclose your personal
            information to a third party, we will protect it in accordance with
            this privacy policy.
          </p>
          <br />
          <h3
            id="gdpr"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            General Data Protection Regulation (GDPR) for the European Union
            (EU)
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            We will comply with the principles of data protection set out in the
            GDPR for the purpose of fairness, transparency and lawful data
            collection and use.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            We will only collect your personal information with your express
            consent for a specific purpose and any data collected will be to the
            extent necessary and not excessive for its purpose. We will keep
            your data safe and secure. We will also process your personal
            information if it is necessary for our legitimate interests, or to
            fulfil a contractual or legal obligation.{" "}
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            We do not collect or process any personal information from you that
            is considered "Sensitive Personal Information" under the GDPR, such
            as personal information relating to your sexual orientation or
            ethnic origin unless we have obtained your explicit consent, or if
            it is being collected subject to and in accordance with the GDPR.{" "}
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            You must not provide us with your personal information if you are
            under the age of 16 without the consent of your parent or someone
            who has parental authority for you. We do not knowingly collect or
            process the personal information of children.
          </p>
          <br />
          <h3
            id="disclosure-info"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            Your rights under the GDPR
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            We comply with your rights under the GDPR as to how your personal
            information is used and controlled if you are an individual residing
            in the EU.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            Except as otherwise provided in the GDPR, you have the following
            rights:
          </p>
          <br />
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
            }}
            className="text-[#4D5763] text-sm"
          >
            <li>to be informed how your personal information is being used;</li>
            <li>
              access your personal information (we will provide you with a free
              copy of it);
            </li>
            <li>
              to correct your personal information if it is inaccurate or
              incomplete; to delete your personal information (also known as
              "the right to be forgotten");
            </li>
            <li>to restrict processing of your personal information;</li>
            <li>
              to retain and reuse your personal information for your own
              purposes; to object to your personal information being used;
            </li>
            <li>
              iand to object against automated decision making and profiling.
            </li>
          </ul>
          <br />
          <p className="text-[#4D5763] text-sm">
            Please contact us at any time to exercise your rights under the GDPR
            at the contact details in this Privacy Policy. We may ask you to
            verify your identity before acting on any of your requests.
          </p>
          <br />
          <h3
            id="data-hosting"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            Data Hosting and Security of Personal Information
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            We store most information about you in computer systems and
            databases operated by either us or our external service providers.
            We are committed to ensuring that the information you provide to us
            is secure. In order to prevent unauthorised access or disclosure, we
            have put in place suitable physical, electronic and managerial
            procedures to safeguard and secure information and protect it from
            misuse, interference, loss and unauthorised access, modification and
            disclosure.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            These processes and systems include:
          </p>
          <br />
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
            }}
            className="text-[#4D5763] text-sm"
          >
            <li>
              the use of identity and access management technologies to control
              access to systems on which information is processed and stored;
            </li>
            <li>
              requiring all employees to comply with internal information
              security policies and keep information secure;
            </li>
            <li>
              and monitoring and regularly reviewing our practice against our
              own policies and against industry best practice.
            </li>
          </ul>
          <br />
          <p className="text-[#4D5763] text-sm">
            We will also take reasonable steps to destroy or de-identify
            Personal Information once we no longer require it for the purposes
            for which it was collected or for any secondary purpose permitted
            under the APPs.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            The transmission and exchange of information is carried out at your
            own risk. We cannot guarantee the security of any information that
            you transmit to us, or receive from us.  Although we take measures
            to safeguard against unauthorised disclosures of information, we
            cannot assure you that personal information that we collect will not
            be disclosed in a manner that is inconsistent with this Privacy
            Policy.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            You acknowledge that personal data that you submit for publication
            through our website or services may be available, via the internet,
            around the world. We cannot prevent the use (or misuse) of such
            personal data by others.
          </p>
          <br />
          <h3
            id="disclosure-info"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            Access to your personal information
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            You may request details of personal information that we hold about
            you in accordance with the provisions of the Privacy Act 1988 (Cth),
            and to the extent applicable the EU GDPR. If you would like a copy
            of the information which we hold about you or believe that any
            information we hold on you is inaccurate, out of date, incomplete,
            irrelevant or misleading, please email us at{" "}
            <a
              href="mailto:privacy@vistalogica.com.au"
              className="text-[#2286FF]"
            >
              privacy@vistalogica.com.au
            </a>{" "}
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            We reserve the right to refuse to provide you with information that
            we hold about you, in certain circumstances set out in the Privacy
            Act or any other applicable law.
          </p>
          <br />
          <h3
            id="complaints"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            Complaints about privacy
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            If you have any complaints about our privacy practices, please feel
            free to send in details of your complaints to{" "}
            <a
              href="mailto:privacy@vistalogica.com.au"
              className="text-[#2286FF]"
            >
              privacy@vistalogica.com.au
            </a>
            . We take complaints very seriously and will respond shortly after
            receiving written notice of your complaint.
          </p>
          <br />
          <h3
            id="disclosure-info"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            Changes to Privacy Policy
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            Please be aware that we may change this Privacy Policy in the
            future. We may modify this Policy at any time, in our sole
            discretion and all modifications will be effective immediately upon
            our posting of the modifications on our website or notice board.
            Please check back from time to time to review our Privacy Policy.
          </p>
          <br />
          <h3
            id="website"
            className="text-xl font-semibold mt-6 mb-2"
            style={{ color: "#011021" }}
          >
            Website
          </h3>
          <br />
          <p className="text-[#4D5763] text-sm">
            Please be aware that we may change this Privacy Policy in the
            future. We may modify this Policy at any time, in our sole
            discretion and all modifications will be effective immediately upon
            our posting of the modifications on our website or notice board.
            Please check back from time to time to review our Privacy Policy.
          </p>
          <br />
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
            }}
            className="text-[#4D5763] text-sm"
          >
            <li>
              <strong>When you visit our website </strong>
            </li>
          </ul>
          <br />
          <p className="text-[#4D5763] text-sm">
            When you come to our website (
            <a href="www.vistalogica.com.au" className="text-[#2286FF]">
              www.vistalogica.com.au
            </a>
            ) , we may collect certain information such as browser type,
            operating system, website visited immediately before coming to our
            site, etc. This information is used in an aggregated manner to
            analyse how people use our site, such that we can improve our
            service.
          </p>
          <br />
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
            }}
            className="text-[#4D5763] text-sm"
          >
            <li>
              <strong> Cookies</strong>
            </li>
          </ul>
          <br />
          <p className="text-[#4D5763] text-sm">
            We may from time to time use cookies on our website. Cookies are
            very small files which a website uses to identify you when you come
            back to the site and to store details about your use of the site.
            Cookies are not malicious programs that access or damage your
            computer. Most web browsers automatically accept cookies but you can
            choose to reject cookies by changing your browser settings. However,
            this may prevent you from taking full advantage of our website. Our
            website may from time to time use cookies to analyses website
            traffic and help us provide a better website visitor experience. In
            addition, cookies may be used to serve relevant ads to website
            visitors through third party services such as Google AdWords. These
            ads may appear on this website or other websites you visit.
          </p>
          <br />
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "20px",
            }}
            className="text-[#4D5763] text-sm"
          >
            <li>
              <strong>Third party sites </strong>
            </li>
          </ul>
          <br />
          <p className="text-[#4D5763] text-sm">
            Our site may from time to time have links to other websites not
            owned or controlled by us. These links are meant for your
            convenience only. Links to third party websites do not constitute
            sponsorship or endorsement or approval of these websites. Please be
            aware that is not responsible for the privacy practises of other
            such websites. We encourage our users to be aware, when they leave
            our website, to read the privacy statements of each and every
            website that collects personal identifiable information.
          </p>
          <br />
          <p className="text-[#4D5763] text-sm">
            <strong>Effective date / Last updated:</strong> 01 May 2024.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
