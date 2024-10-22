import React from 'react';

export default function Privacy() {
  return (
    <div className="px-4 md:px-16 my-8">
      <h1 className="text-center text-xl md:text-3xl mb-3">Privacy Policy</h1>
      <p className="mb-4">
        At the International Journal of Data Processing and Networking (IJDPN), we are committed to safeguarding the privacy and personal data of our website visitors, authors, reviewers, and all individuals who interact with our journal. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in accordance with applicable data protection laws.
      </p>

      <h2 className="text-lg md:text-2xl mt-4">Information We Collect</h2>
      <p className="mb-4">
        Personal Identification Information: Name, email address, phone number, professional affiliations, and postal address when you submit articles, register as a reviewer, or contact us.
        Technical Information: IP address, browser type, and usage data for website analytics purposes.
        Submission Data: Any information provided during the submission process, including manuscripts, author details, and correspondence.
      </p>

      <h2 className="text-lg md:text-2xl mt-4">How We Use Your Information</h2>
      <p className="mb-4">
        The information collected is used for the following purposes:
        <ul className="list-disc ml-6">
          <li>To process article submissions and manage the peer review process.</li>
          <li>To communicate with authors, reviewers, and editors regarding submissions and journal activities.</li>
          <li>To provide access to journal content and manage user accounts.</li>
          <li>To analyze website traffic and usage to improve our services.</li>
          <li>To comply with legal obligations, such as those related to publishing ethics and intellectual property rights.</li>
        </ul>
      </p>

      <h2 className="text-lg md:text-2xl mt-4">Data Sharing and Disclosure</h2>
      <p className="mb-4">
        We do not share your personal information with third parties except in the following circumstances:
        With third-party service providers that help us manage the journal (e.g., hosting services, email services), under strict confidentiality agreements.
        If required by law, to comply with legal proceedings or protect the rights, property, or safety of IJDPN, its users, or others.
      </p>

      <h2 className="text-lg md:text-2xl mt-4">Data Security</h2>
      <p className="mb-4">
        We take appropriate technical and organizational measures to ensure the security of your personal data. We use industry-standard protocols to protect against unauthorized access, alteration, disclosure, or destruction of personal information.
      </p>

      <h2 className="text-lg md:text-2xl mt-4">Your Rights</h2>
      <p className="mb-4">
        You have the right to:
        <ul className="list-disc ml-6">
          <li>Access, update, or delete your personal information held by IJDPN.</li>
          <li>Withdraw your consent for data processing where applicable.</li>
          <li>Lodge a complaint with a data protection authority if you believe your rights have been violated.</li>
        </ul>
      </p>

      <h2 className="text-lg md:text-2xl mt-4">Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        Our website may use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You can modify your browser settings to refuse cookies or notify you when they are being used, but this may affect the functionality of the website.
      </p>

      <h2 className="text-lg md:text-2xl mt-4">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        IJDPN reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and we will notify users through the website or via email where appropriate.
      </p>

      <h2 className="text-lg md:text-2xl mt-4">Contact Information</h2>
      <p>
        For any questions or concerns regarding this Privacy Policy or the processing of your personal data, please contact us at:
        <br />
        International Journal of Data Processing and Networking (IJDPN)
        <br />
        Email: [insert contact email]
        <br />
        Address: [insert office address]
      </p>
    </div>
  );
}
