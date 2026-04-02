export interface LegalDocumentSection {
  title: string;
  body: string[];
}

export interface LegalDocument {
  title: string;
  company: string;
  effectiveDate: string;
  introduction?: string[];
  sections: LegalDocumentSection[];
}

export const legalDocuments: Record<string, LegalDocument> = {
  privacy: {
    title: "Bolus Privacy Policy",
    company: "Pressor Systems LLC",
    effectiveDate: "March 7, 2026",
    introduction: [
      "Bolus respects your privacy and is committed to protecting the information you provide when using the Bolus mobile application and related services. This Privacy Policy explains what information we collect, how we use it, when it may be disclosed, and the safeguards available to you.",
    ],
    sections: [
      {
        title: "1. Local-First Architecture",
        body: [
          "Bolus is designed around a local-first architecture. In its current form, clinical records and patient-related case data are stored primarily on your device rather than on Bolus-operated servers. This is intended to reduce unnecessary transmission of protected health information and keep sensitive records under the direct control of the clinician using the app.",
        ],
      },
      {
        title: "2. Information We Collect",
        body: [
          "We may collect limited information required to operate the service, including account details such as your name, email address, professional title, degree, institution, authentication provider, and profile image. We may also collect app telemetry, crash information, and other technical diagnostics that help us maintain reliability and security. We do not intentionally collect patient names or full case logs on Bolus-hosted systems unless a future feature explicitly states otherwise and is covered by the required safeguards.",
        ],
      },
      {
        title: "3. How We Use Information",
        body: [
          "We use account and technical information to authenticate users, support account management, maintain app functionality, improve reliability, investigate security issues, and communicate important updates. De-identified operational analytics may be used to improve workflow design, stability, and performance.",
        ],
      },
      {
        title: "4. Third-Party Services",
        body: [
          "Bolus may rely on trusted service providers such as Firebase, Apple, Google, and other infrastructure vendors to provide authentication, storage, subscription processing, or technical support services. Those providers receive only the information needed to perform their specific services and are expected to maintain appropriate security controls.",
        ],
      },
      {
        title: "5. Data Security",
        body: [
          "Bolus uses device-level and application-level safeguards to help protect data, including encryption, secure authentication controls, and local access protections supported by the operating system. Users are responsible for maintaining secure devices, passcodes, biometric protections, and compliant handling practices when exporting records.",
        ],
      },
      {
        title: "6. Retention and Deletion",
        body: [
          "Account-related information may be retained for operational, billing, compliance, and support purposes for as long as reasonably necessary. Clinical records stored locally remain under the user’s control and may be lost if a device is damaged, reset, wiped, or the application is deleted without a compliant backup process.",
        ],
      },
      {
        title: "7. Your Rights and Choices",
        body: [
          "You may review, update, or delete certain profile information through the app. You may also export your own case records using the app’s available export functions. If you no longer wish to use Bolus, you may stop using the application and request account-related changes where applicable.",
        ],
      },
      {
        title: "8. HIPAA and Professional Responsibility",
        body: [
          "Bolus is designed to support HIPAA-conscious workflows, but compliance depends on how the app is used in practice. You are responsible for making sure exports, disclosures, devices, and destination systems comply with your legal, professional, employer, and institutional obligations.",
        ],
      },
      {
        title: "9. Future Features",
        body: [
          "If Bolus later offers cloud backup, synchronization, analytics, collaboration, or hosted record features involving regulated data, those services may be subject to additional terms, disclosures, and business associate requirements before use.",
        ],
      },
      {
        title: "10. Contact",
        body: [
          "If you have questions about this Privacy Policy, contact us at:",
          "Email: contact@bolusanesthesia.com",
          "Website: bolusanesthesia.com",
        ],
      },
    ],
  },
  terms: {
    title: "Bolus Terms of Use",
    company: "Pressor Systems LLC",
    effectiveDate: "March 7, 2026",
    introduction: [
      "These Terms of Use constitute a binding legal agreement between you and Pressor Systems LLC and govern your access to and use of the Bolus mobile application, website, software, interfaces, features, generated records, and related services. By downloading, registering for, accessing, or using Bolus, you agree to be bound by these Terms. If you do not agree, do not use Bolus.",
    ],
    sections: [
      {
        title: "1. Eligibility",
        body: [
          "Bolus may be used only by individuals who are legally capable of entering into binding agreements and who are authorized to use the app in accordance with applicable law, institutional policy, and professional obligations. Bolus is intended for licensed healthcare professionals, trained clinical personnel, and authorized users acting within the scope of their responsibilities.",
        ],
      },
      {
        title: "2. Medical Disclaimer",
        body: [
          "Bolus is a documentation and record-keeping tool only. It does not provide medical advice, diagnosis, treatment recommendations, or independent clinical decision support. Any templates, calculations, summaries, defaults, prompts, or workflow suggestions are provided solely for convenience. You must independently review, verify, and confirm all information before relying on it, saving it, exporting it, or incorporating it into any patient record.",
        ],
      },
      {
        title: "3. Description of Service",
        body: [
          "Bolus provides software tools intended to support anesthesia and clinical documentation workflows. Features may change over time, and certain features may be added, modified, limited, or removed without prior notice.",
        ],
      },
      {
        title: "4. Account and Access",
        body: [
          "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify Bolus promptly if you believe your account or device security has been compromised.",
        ],
      },
      {
        title: "5. Local Storage and Device Responsibility",
        body: [
          "Bolus is designed around local-first storage. Clinical records may remain primarily on your device rather than on Bolus-operated servers. You are solely responsible for securing your hardware, enabling passcodes and biometrics where available, controlling access to your device, and ensuring that local records are handled in a compliant manner.",
        ],
      },
      {
        title: "6. Cloud Features and Hosted Services",
        body: [
          "If Bolus offers hosted or cloud-enabled features in the future, those features may be subject to separate safeguards, service limitations, and additional legal terms before use. Availability of a feature does not eliminate your independent compliance obligations.",
        ],
      },
      {
        title: "7. Privacy and HIPAA",
        body: [
          "Your use of Bolus is also governed by the Bolus Privacy Policy. You remain responsible for complying with HIPAA, the HITECH Act, state privacy law, employer rules, and institutional policy whenever you create, view, store, or export regulated information.",
        ],
      },
      {
        title: "8. Exports and External Systems",
        body: [
          "Once data is exported or transferred outside Bolus, you are responsible for confirming that the destination system, method of transmission, and receiving party are lawful, secure, and appropriate. Bolus does not control third-party devices, email systems, file systems, or facility networks.",
        ],
      },
      {
        title: "9. License Restrictions",
        body: [
          "You may not reverse engineer, decompile, copy, sublicense, resell, or misuse the application except as allowed by applicable law. You may not use Bolus in a way that violates law, infringes the rights of others, or exceeds your authorized professional role.",
        ],
      },
      {
        title: "10. Availability and Modifications",
        body: [
          "Bolus may suspend, update, patch, or discontinue any part of the service at any time. We do not guarantee uninterrupted availability, error-free operation, or fitness for a particular clinical workflow.",
        ],
      },
      {
        title: "11. Data Loss",
        body: [
          "Because local-device storage may be central to app operation, records may become unavailable if a device is lost, damaged, reset, deleted, or otherwise rendered inaccessible. You assume the risk of local data loss except where prohibited by law.",
        ],
      },
      {
        title: "12. Subscriptions and Payments",
        body: [
          "Paid features, if offered, may be billed through Apple or another authorized payment platform. Subscription terms, billing cycles, renewals, cancellations, and refunds may also be governed by the applicable app marketplace rules.",
        ],
      },
      {
        title: "13. Termination",
        body: [
          "We may suspend or terminate access to Bolus if we believe you violated these Terms, created security risk, misused the service, or used the app in a way that could expose patients, clinicians, or the company to harm.",
        ],
      },
      {
        title: "14. Intellectual Property",
        body: [
          "Bolus, including its software, design, branding, and related content, is owned by Pressor Systems LLC or its licensors and is protected by applicable intellectual property law.",
        ],
      },
      {
        title: "15. Disclaimer of Warranties",
        body: [
          "Bolus is provided on an \"as is\" and \"as available\" basis to the fullest extent permitted by law. We disclaim warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted service except where such disclaimers are prohibited.",
        ],
      },
      {
        title: "16. Limitation of Liability",
        body: [
          "To the maximum extent permitted by law, Bolus, Pressor Systems LLC, and its affiliates shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of data, business interruption, professional discipline, privacy incidents, or patient-care claims arising from use, misuse, or inability to use the application.",
        ],
      },
      {
        title: "17. Indemnification",
        body: [
          "You agree to indemnify and hold harmless Bolus, Pressor Systems LLC, and related parties from claims, damages, liabilities, losses, and expenses arising from your use of the app, your records, your exports, your professional conduct, or your violation of these Terms.",
        ],
      },
      {
        title: "18. Governing Law",
        body: [
          "These Terms are governed by the applicable laws designated by Pressor Systems LLC, without regard to conflict-of-law principles, except where consumer or professional protections require otherwise.",
        ],
      },
      {
        title: "19. Severability",
        body: [
          "If any provision of these Terms is held unenforceable, the remaining provisions will remain in full force and effect to the fullest extent permitted by law.",
        ],
      },
      {
        title: "20. Entire Agreement",
        body: [
          "These Terms, together with any incorporated policies and applicable supplemental terms, constitute the entire agreement between you and Bolus regarding use of the service.",
        ],
      },
      {
        title: "21. Contact",
        body: [
          "Questions about these Terms of Use should be directed to:",
          "Email: contact@bolusanesthesia.com",
          "Website: bolusanesthesia.com",
        ],
      },
    ],
  },
  "medical-disclaimer": {
    title: "Medical Disclaimer",
    company: "Pressor Systems LLC",
    effectiveDate: "March 7, 2026",
    introduction: [
      "This Medical Disclaimer explains the intended use of Bolus and clarifies the responsibilities of clinicians using the application in clinical environments.",
    ],
    sections: [
      {
        title: "1. Documentation Tool Only",
        body: [
          "Bolus is designed to support documentation and record-keeping workflows. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or condition. Bolus does not provide medical advice, clinical orders, or treatment recommendations.",
        ],
      },
      {
        title: "2. No Substitute for Clinical Judgment",
        body: [
          "Any templates, prompts, calculations, timestamps, summaries, defaults, or generated outputs within Bolus are provided for convenience only. They are not a substitute for independent professional judgment, direct patient assessment, or institution-approved clinical decision-making.",
        ],
      },
      {
        title: "3. Verification Required",
        body: [
          "Users must independently review, confirm, and verify all information before relying on it, saving it, exporting it, or incorporating it into any medical record. You remain responsible for ensuring that all documentation is accurate, complete, timely, and appropriate for the patient encounter.",
        ],
      },
      {
        title: "4. User Responsibility",
        body: [
          "Bolus is intended for trained, authorized healthcare professionals acting within the scope of their licensure, credentials, and workplace policies. You are solely responsible for all charting, medical decisions, medication administration, monitoring, and patient-care actions associated with your clinical work.",
        ],
      },
      {
        title: "5. No Clinical Decision Support Guarantee",
        body: [
          "Bolus does not guarantee that any generated content, prefilled value, workflow suggestion, or display is clinically correct or appropriate for a given case. Any reliance on app-generated information without independent confirmation is at the user's own risk.",
        ],
      },
      {
        title: "6. Compliance and Professional Standards",
        body: [
          "You are responsible for complying with HIPAA, applicable state and federal law, professional standards, and your institution's policies whenever you use Bolus in connection with patient care or documentation.",
        ],
      },
      {
        title: "7. Limitation of Reliance",
        body: [
          "Bolus should not be used as the sole source for diagnosis, treatment planning, emergency decisions, or medication dosing. Clinical care must always be guided by your own judgment, direct evaluation of the patient, and approved clinical resources.",
        ],
      },
      {
        title: "8. Contact",
        body: [
          "Questions about this Medical Disclaimer may be directed to:",
          "Email: contact@bolusanesthesia.com",
          "Website: bolusanesthesia.com",
        ],
      },
    ],
  },
};
