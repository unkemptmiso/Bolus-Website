export type LegalDocumentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export interface LegalDocumentSection {
  title: string;
  blocks: LegalDocumentBlock[];
}

export interface LegalDocument {
  title: string;
  company: string;
  effectiveDate: string;
  introduction?: string[];
  sections: LegalDocumentSection[];
}

export const legalDocuments: Record<string, LegalDocument> = {
  "privacy-policy": {
    "title": "Privacy Policy",
    "company": "Pressor Systems LLC",
    "effectiveDate": "May 23, 2026",
    "introduction": [
      "Pressor Systems LLC (“Pressor Systems,” “Bolus,” “we,” “us,” or “our”) respects your privacy and is committed to protecting information associated with your use of Bolus.",
      "This Privacy Policy explains what information we collect, how we use it, when it may be disclosed, and the choices available to you.",
      "This Privacy Policy applies to the Bolus mobile application, website, software, account features, documentation tools, templates, snippets, settings, analytics, and related services (collectively, the “Service”).",
      "By using Bolus, you acknowledge the practices described in this Privacy Policy."
    ],
    "sections": [
      {
        "title": "1. Local-First Architecture",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is designed around a local-first architecture. In its current form, clinical records and patient-related case data are stored primarily on your device rather than on servers operated by Pressor Systems."
          },
          {
            "type": "paragraph",
            "text": "This design is intended to reduce unnecessary transmission of protected health information and keep sensitive clinical records under the direct control of the clinician using the app."
          },
          {
            "type": "paragraph",
            "text": "In general:"
          },
          {
            "type": "list",
            "items": [
              "clinical case records are stored primarily on your device;",
              "Pressor Systems does not routinely receive or store full clinical case records on Bolus-operated systems;",
              "you control when records are exported, transmitted, uploaded, printed, or shared outside the app;",
              "records stored only on your device may not be recoverable by Pressor Systems if the device is lost, damaged, reset, wiped, or the app is deleted."
            ]
          },
          {
            "type": "paragraph",
            "text": "Certain features may involve remote infrastructure, including account authentication, profile management, subscription processing, analytics, diagnostics, snippets, templates, settings, and future hosted or cloud-enabled features."
          }
        ]
      },
      {
        "title": "2. Information We Collect",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We collect limited categories of information to operate, secure, support, and improve the Service."
          },
          {
            "type": "subheading",
            "text": "Account and Profile Information"
          },
          {
            "type": "paragraph",
            "text": "When you create or use an account, we may collect and store information such as:"
          },
          {
            "type": "list",
            "items": [
              "name;",
              "email address;",
              "professional title;",
              "degree or credentials;",
              "name of practice, institution, or organization;",
              "account identifiers;",
              "authentication provider information;",
              "user ID;",
              "profile image uploaded by you or provided through Apple, Google, or another authentication provider."
            ]
          },
          {
            "type": "paragraph",
            "text": "We use this information to create and manage your account, authenticate you, personalize your experience, support user identity within the app, and communicate with you about the Service."
          },
          {
            "type": "subheading",
            "text": "User-Created Preferences, Snippets, and Templates"
          },
          {
            "type": "paragraph",
            "text": "Bolus may allow you to create, save, sync, or manage user-specific content and preferences, including:"
          },
          {
            "type": "list",
            "items": [
              "quick phrases or “snippets” used to streamline documentation;",
              "templates created by you;",
              "app settings and preferences;",
              "workflow configuration choices;",
              "saved user defaults."
            ]
          },
          {
            "type": "paragraph",
            "text": "These items may be stored remotely so they can sync across devices and remain associated with your account."
          },
          {
            "type": "paragraph",
            "text": "You should avoid including patient identifiers or protected health information in snippets, templates, profile fields, settings, or other reusable content unless a specific feature is designed and authorized for that purpose."
          },
          {
            "type": "subheading",
            "text": "Subscription and Payment Information"
          },
          {
            "type": "paragraph",
            "text": "If you purchase a subscription or paid feature, payment and subscription information may be processed by Apple, Google, or another authorized payment platform."
          },
          {
            "type": "paragraph",
            "text": "We may receive limited information about your subscription status, plan type, renewal status, trial eligibility, cancellation status, and related account entitlements. We do not receive your full payment card details from app marketplace providers."
          },
          {
            "type": "subheading",
            "text": "Technical and Device Information"
          },
          {
            "type": "paragraph",
            "text": "We may collect technical information such as:"
          },
          {
            "type": "list",
            "items": [
              "device type and model;",
              "operating system version;",
              "app version;",
              "crash reports;",
              "diagnostic logs;",
              "performance information;",
              "security and error events;",
              "authentication and session information."
            ]
          },
          {
            "type": "paragraph",
            "text": "We use this information to maintain reliability, troubleshoot problems, improve performance, investigate errors, and protect the security of the Service."
          },
          {
            "type": "subheading",
            "text": "Usage and Analytics Data"
          },
          {
            "type": "paragraph",
            "text": "We may collect usage analytics and operational metrics that help us understand how the Service is used and how to improve it. This may include information such as:"
          },
          {
            "type": "list",
            "items": [
              "features used;",
              "onboarding progress;",
              "subscription or trial status;",
              "number of cases created or exported;",
              "total anesthesia time recorded or summarized;",
              "frequency of exports;",
              "use of templates, snippets, or settings;",
              "general workflow events;",
              "app performance and reliability metrics."
            ]
          },
          {
            "type": "paragraph",
            "text": "Usage analytics are intended to help us improve the Service, monitor reliability, understand feature adoption, and support product development."
          },
          {
            "type": "paragraph",
            "text": "We design analytics to avoid collecting patient names, direct patient identifiers, or full clinical case records unless a specific feature expressly states otherwise and is subject to appropriate safeguards."
          },
          {
            "type": "subheading",
            "text": "Legal Acceptance Records"
          },
          {
            "type": "paragraph",
            "text": "We may collect and store records showing that you accepted or acknowledged legal documents, including:"
          },
          {
            "type": "list",
            "items": [
              "Terms of Use version;",
              "Privacy Policy version;",
              "HIPAA Security & Compliance Policy version;",
              "Medical Disclaimer version;",
              "timestamp of acceptance;",
              "app version;",
              "acceptance method;",
              "associated user ID or account identifier."
            ]
          },
          {
            "type": "paragraph",
            "text": "We use these records for compliance, auditing, account administration, and dispute resolution."
          },
          {
            "type": "subheading",
            "text": "Support Communications and Information You Provide"
          },
          {
            "type": "paragraph",
            "text": "If you contact us for support, feedback, bug reports, or other communications, we may collect the information you choose to provide, including your contact information, messages, screenshots, attachments, logs, or other materials."
          },
          {
            "type": "paragraph",
            "text": "Please do not send protected health information, patient identifiers, or clinical records to us through support channels unless specifically instructed through an authorized secure workflow."
          }
        ]
      },
      {
        "title": "3. Clinical Records and Patient-Related Information",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is designed so that clinical case records and patient-related case data are generally stored locally on your device."
          },
          {
            "type": "paragraph",
            "text": "In the current local-first model, Pressor Systems does not routinely receive or store full clinical case records or patient identifiers on Bolus-operated systems unless you use a feature that transmits, exports, backs up, synchronizes, uploads, or otherwise sends that information off-device."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for ensuring that any patient-related information you enter, export, transmit, store, or share using Bolus is handled in accordance with applicable law, professional obligations, institutional policies, and the Bolus HIPAA Security & Compliance Policy."
          },
          {
            "type": "paragraph",
            "text": "If future features involve hosted storage, synchronization, cloud backup, collaboration, or remote processing of clinical records or protected health information, those features may be subject to additional safeguards, disclosures, supplemental terms, and business associate requirements where applicable."
          }
        ]
      },
      {
        "title": "4. How We Use Information",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We may use information collected through the Service to:"
          },
          {
            "type": "list",
            "items": [
              "create, authenticate, and manage accounts;",
              "provide and operate the Service;",
              "sync user-specific snippets, templates, settings, and preferences;",
              "manage subscriptions, trials, access, and entitlements;",
              "provide customer support;",
              "troubleshoot errors and improve reliability;",
              "monitor security and prevent misuse;",
              "understand feature usage and improve product design;",
              "communicate important updates, security notices, policy changes, or service-related messages;",
              "maintain legal acceptance records;",
              "comply with legal obligations and enforce our Terms of Use."
            ]
          }
        ]
      },
      {
        "title": "5. How Information Is Shared",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We do not sell your personal information. We may share information only as described in this Privacy Policy or as otherwise permitted by law."
          },
          {
            "type": "subheading",
            "text": "Service Providers"
          },
          {
            "type": "paragraph",
            "text": "We may share information with trusted service providers that help us operate the Service, such as providers of authentication, cloud infrastructure, database hosting, analytics, crash reporting, customer support, email delivery, subscription management, and payment processing."
          },
          {
            "type": "paragraph",
            "text": "These providers are permitted to process information only as needed to provide services to us and are expected to maintain appropriate security controls."
          },
          {
            "type": "subheading",
            "text": "App Stores and Payment Platforms"
          },
          {
            "type": "paragraph",
            "text": "If you subscribe or purchase through Apple, Google, or another app marketplace or payment platform, your transaction may be handled by that platform according to its own terms and privacy policies."
          },
          {
            "type": "subheading",
            "text": "User-Directed Exports and Sharing"
          },
          {
            "type": "paragraph",
            "text": "If you export, transmit, upload, print, email, save, share, or otherwise send information from Bolus to another destination, you direct that disclosure. Once information leaves Bolus or your device, we may have no ability to control, retrieve, delete, monitor, verify, or secure it."
          },
          {
            "type": "subheading",
            "text": "Legal, Safety, and Security Purposes"
          },
          {
            "type": "paragraph",
            "text": "We may disclose information if we believe disclosure is reasonably necessary to comply with law, legal process, regulatory obligations, enforce our terms, protect the security or integrity of the Service, investigate misuse, prevent fraud, or protect the rights, safety, or property of users, patients, Pressor Systems, or others."
          },
          {
            "type": "subheading",
            "text": "Business Transfers"
          },
          {
            "type": "paragraph",
            "text": "If Pressor Systems is involved in a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, information may be transferred as part of that transaction, subject to appropriate confidentiality and legal protections."
          }
        ]
      },
      {
        "title": "6. Third-Party Services",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may rely on third-party services, including Firebase, Apple, Google, app stores, cloud infrastructure providers, analytics providers, crash-reporting tools, email providers, support tools, and other vendors."
          },
          {
            "type": "paragraph",
            "text": "These services may process limited information necessary to perform their functions. Your use of third-party platforms or services may also be governed by their own terms and privacy policies."
          },
          {
            "type": "paragraph",
            "text": "If third-party services are used in connection with protected health information or other regulated information, additional safeguards, agreements, or limitations may apply where required by law."
          }
        ]
      },
      {
        "title": "7. Data Security",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus uses administrative, technical, and organizational safeguards intended to protect information associated with the Service."
          },
          {
            "type": "paragraph",
            "text": "Security measures may include:"
          },
          {
            "type": "list",
            "items": [
              "mandatory app access protection;",
              "biometric authentication and/or secure device passcode or password requirements;",
              "encryption supported by the device operating system;",
              "secure communication channels;",
              "access controls;",
              "infrastructure security controls;",
              "monitoring, diagnostics, and error detection."
            ]
          },
          {
            "type": "paragraph",
            "text": "Access to the app and case logs requires mandatory authentication, including biometric authentication and/or a secure device passcode, password, or comparable supported method."
          },
          {
            "type": "paragraph",
            "text": "Despite these safeguards, no app, device, network, server, or transmission method can be guaranteed to be completely secure."
          },
          {
            "type": "paragraph",
            "text": "Users are responsible for maintaining secure devices, restricting access to authorized persons, keeping devices updated, and using compliant workflows when exporting, storing, or transmitting records."
          }
        ]
      },
      {
        "title": "8. Retention and Deletion",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Retention periods vary depending on the type of information and the purpose for which it is maintained."
          },
          {
            "type": "paragraph",
            "text": "Account and profile information may be retained as long as necessary to maintain your account, provide the Service, comply with legal obligations, resolve disputes, enforce agreements, prevent fraud, and support business operations."
          },
          {
            "type": "paragraph",
            "text": "User-created snippets, templates, settings, and preferences may be retained while your account remains active or as needed to provide sync and account functionality."
          },
          {
            "type": "paragraph",
            "text": "Legal acceptance records may be retained for compliance, audit, and dispute-resolution purposes."
          },
          {
            "type": "paragraph",
            "text": "Clinical records stored locally on your device remain under your control and may be deleted if you delete the app, clear local data, reset the device, or lose access to the device."
          },
          {
            "type": "paragraph",
            "text": "Deleting your account or the app may not delete records that you previously exported, printed, emailed, uploaded, saved to external systems, or otherwise shared outside Bolus."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems may not be able to recover or delete data stored only on your device or data that has already been exported to third-party systems."
          }
        ]
      },
      {
        "title": "9. Your Rights and Choices",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Depending on your location and applicable law, you may have rights to access, correct, delete, or receive a copy of certain personal information associated with your account."
          },
          {
            "type": "paragraph",
            "text": "You may review, update, or delete certain profile information through the app where those features are available."
          },
          {
            "type": "paragraph",
            "text": "You may export your own case records using the app’s available export functions."
          },
          {
            "type": "paragraph",
            "text": "You may stop using Bolus at any time and may request account-related changes where applicable."
          },
          {
            "type": "paragraph",
            "text": "Some information may be retained where necessary for legal, security, fraud-prevention, audit, subscription, dispute-resolution, or compliance purposes."
          },
          {
            "type": "paragraph",
            "text": "Because some clinical records may be stored only locally on your device, Pressor Systems may not be able to access, correct, export, recover, or delete those records remotely."
          }
        ]
      },
      {
        "title": "10. HIPAA and Professional Responsibility",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is designed to support HIPAA-conscious documentation workflows, but compliance depends on how the app is configured and used in practice."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for making sure your use of Bolus, including exports, disclosures, devices, destination systems, snippets, templates, settings, and retained records, complies with your legal, professional, employer, facility, and institutional obligations."
          },
          {
            "type": "paragraph",
            "text": "If Bolus provides features that create, receive, maintain, transmit, host, or process electronic protected health information on behalf of a covered entity or business associate, additional HIPAA safeguards and contractual terms, including a Business Associate Agreement where legally required, may apply."
          }
        ]
      },
      {
        "title": "11. Intended Users",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is intended for use by healthcare professionals, trained clinical personnel, and authorized users in professional settings."
          },
          {
            "type": "paragraph",
            "text": "Bolus is not intended for use by children or by patients as a consumer health application."
          }
        ]
      },
      {
        "title": "12. Future Features",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If Bolus later offers cloud backup, synchronization, analytics, collaboration, hosted record storage, multi-device access, or other features involving regulated data, those services may be subject to additional terms, disclosures, safeguards, user choices, and business associate requirements where applicable."
          },
          {
            "type": "paragraph",
            "text": "We may update this Privacy Policy before or when such features are made available."
          }
        ]
      },
      {
        "title": "13. Changes to This Privacy Policy",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We may update this Privacy Policy from time to time. If we make material changes, we may provide notice through the Service, by email, or by other reasonable means."
          },
          {
            "type": "paragraph",
            "text": "Your continued use of Bolus after an updated Privacy Policy becomes effective means you acknowledge the updated policy."
          }
        ]
      },
      {
        "title": "14. Contact",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If you have questions about this Privacy Policy, contact us at:"
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC"
          },
          {
            "type": "paragraph",
            "text": "Email: contact@bolusanesthesia.com"
          },
          {
            "type": "paragraph",
            "text": "Website: bolusanesthesia.com"
          }
        ]
      }
    ]
  },
  "terms-of-service": {
    "title": "Terms of Service",
    "company": "Pressor Systems LLC",
    "effectiveDate": "May 23, 2026",
    "introduction": [
      "These Terms of Use constitute a binding legal agreement between you and Pressor Systems LLC (“Pressor Systems,” “Bolus,” “we,” “us,” or “our”) and govern your access to and use of the Bolus mobile application, website, software, interfaces, features, generated records, documentation tools, and related services (collectively, the “Service”).",
      "By downloading, registering for, accessing, or using Bolus, you agree to be bound by these Terms. If you do not agree, do not access or use Bolus."
    ],
    "sections": [
      {
        "title": "1. Eligibility",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may be used only by individuals who are legally capable of entering into binding agreements and who are authorized to use the Service in accordance with applicable law, institutional policy, and professional obligations."
          },
          {
            "type": "paragraph",
            "text": "Bolus is intended for licensed healthcare professionals, trained clinical personnel, and other authorized users acting within the scope of their professional responsibilities. You represent and warrant that your access to and use of Bolus is lawful, authorized, and appropriate in your practice setting."
          }
        ]
      },
      {
        "title": "2. Incorporated Policies and Documents",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Your use of Bolus is also governed by the following documents, each of which is incorporated into these Terms by reference and forms part of your agreement with Pressor Systems LLC:"
          },
          {
            "type": "list",
            "items": [
              "the Bolus Privacy Policy;",
              "the Bolus HIPAA Security & Compliance Policy;",
              "the Bolus Medical Disclaimer; and",
              "any supplemental terms, notices, or policies that apply to specific features, subscriptions, cloud services, hosted services, or future functionality."
            ]
          },
          {
            "type": "paragraph",
            "text": "By using Bolus, you agree to comply with these incorporated documents. If there is a conflict between these Terms and any incorporated document, these Terms control unless the supplemental document expressly states otherwise."
          }
        ]
      },
      {
        "title": "3. Medical Disclaimer and Clinical Responsibility",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is a documentation and record-keeping tool only. Bolus does not provide medical advice, diagnosis, treatment recommendations, medication recommendations, monitoring recommendations, patient management instructions, or independent clinical decision support."
          },
          {
            "type": "paragraph",
            "text": "Any templates, calculations, summaries, defaults, prompts, suggested text, timing features, structured fields, or workflow tools are provided solely for documentation convenience. You must independently review, verify, and confirm all information before relying on it, saving it, signing it, exporting it, submitting it, uploading it, printing it, billing from it, or incorporating it into any patient record."
          },
          {
            "type": "paragraph",
            "text": "You remain solely responsible for:"
          },
          {
            "type": "list",
            "items": [
              "patient care and patient outcomes;",
              "clinical assessment and decision-making;",
              "medication selection and dosing;",
              "monitoring, interpretation, and clinical documentation;",
              "determining what information must be documented;",
              "the accuracy, completeness, timeliness, and sufficiency of all records; and",
              "compliance with applicable laws, regulations, professional standards, payer requirements, credentialing requirements, facility rules, and institutional policies."
            ]
          },
          {
            "type": "paragraph",
            "text": "In all circumstances involving patient care, your independent professional judgment controls."
          }
        ]
      },
      {
        "title": "4. Final Record Review Required",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Before signing, exporting, submitting, uploading, printing, billing from, relying on, or otherwise using any record created, edited, displayed, or generated through Bolus, you are responsible for reviewing the complete record and confirming that it accurately reflects the patient encounter."
          },
          {
            "type": "paragraph",
            "text": "This includes, as applicable, confirming the accuracy and completeness of patient identifiers, procedure information, timing of events, medications and doses, monitoring data, clinical observations, airway management, complications, interventions, recovery status, discharge condition, attestations, and signatures."
          },
          {
            "type": "paragraph",
            "text": "Bolus does not replace your responsibility to perform a final review of the medical record."
          }
        ]
      },
      {
        "title": "5. No Documentation Completeness, Accuracy, or Defensibility Guarantee",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may be described on its website, in product materials, or in marketing as supporting cleaner, more organized, or more defensible documentation workflows. Any such description refers only to the intended design, workflow purpose, and organizational function of the Service."
          },
          {
            "type": "paragraph",
            "text": "References to “defensible” documentation do not mean, and should not be understood to mean, that any record created, edited, signed, exported, submitted, uploaded, printed, or stored using Bolus will be complete, accurate, legally sufficient, billing-compliant, regulatory-compliant, malpractice-proof, litigation-proof, audit-proof, or defensible in any particular dispute, review, audit, claim, investigation, or proceeding."
          },
          {
            "type": "paragraph",
            "text": "Use of Bolus does not guarantee protection from malpractice claims, professional discipline, payer disputes, reimbursement denials, regulatory review, quality review, credentialing action, litigation, adverse findings, or other documentation-related consequences."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC does not provide legal advice, billing advice, compliance advice, malpractice advice, or professional documentation review. Pressor Systems LLC does not determine whether any record is legally sufficient, clinically adequate, billing-compliant, regulatory-compliant, professionally adequate, or defensible for any specific patient encounter, facility, payer, regulator, court, licensing board, malpractice carrier, reviewer, auditor, or credentialing body."
          }
        ]
      },
      {
        "title": "6. No Duty to Monitor, Audit, or Validate Records",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC does not review, monitor, audit, approve, validate, or verify user-generated records for clinical accuracy, completeness, billing sufficiency, regulatory compliance, legal defensibility, or professional adequacy."
          },
          {
            "type": "paragraph",
            "text": "You are solely responsible for any omission, inaccuracy, delay, inconsistency, incomplete entry, incorrect entry, or failure to document information required by law, institutional policy, professional standards, payer requirements, credentialing requirements, quality review standards, or the circumstances of the patient encounter."
          }
        ]
      },
      {
        "title": "7. Description of Service",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus provides software tools intended to support anesthesia and clinical documentation workflows. The Service may include case logging, record generation, templates, snippets, timing tools, export functionality, local storage, account features, subscription features, and other documentation-related tools."
          },
          {
            "type": "paragraph",
            "text": "Features may change over time. Certain features may be added, modified, limited, suspended, or removed with or without prior notice, to the fullest extent permitted by law."
          }
        ]
      },
      {
        "title": "8. Account and Access",
        "blocks": [
          {
            "type": "paragraph",
            "text": "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify Pressor Systems promptly if you believe your account, credentials, device, or access to Bolus has been compromised."
          },
          {
            "type": "paragraph",
            "text": "Use of Bolus requires mandatory access protections. You must enable and maintain all security controls required by the Service and supported by your device, including biometric authentication and/or a secure passcode, password, or comparable device-supported authentication method."
          },
          {
            "type": "paragraph",
            "text": "You may not disable, circumvent, impair, weaken, or otherwise interfere with any authentication, access-control, or security feature required by Bolus."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for ensuring that only authorized individuals can unlock your device, access your account, or access the Service. If biometric authentication is enabled, you are responsible for ensuring that only authorized individuals are enrolled on the device."
          },
          {
            "type": "paragraph",
            "text": "Failure to maintain required security settings may result in reduced functionality, suspension of access, or inability to use the Service."
          }
        ]
      },
      {
        "title": "9. Local Storage and Device Responsibility",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is designed around local-first storage. Clinical records may remain primarily on your device rather than on servers operated by Pressor Systems."
          },
          {
            "type": "paragraph",
            "text": "You are solely responsible for securing your device, controlling access to your device, maintaining required authentication protections, and ensuring that local records are handled in a lawful and compliant manner."
          },
          {
            "type": "paragraph",
            "text": "Because local-device storage may be central to app operation, records may become unavailable or permanently lost if a device is lost, stolen, damaged, reset, wiped, compromised, deleted, or otherwise rendered inaccessible, or if the application is deleted."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems may have no ability to recover records stored only on your device. You are responsible for maintaining any backup, export, retention, and archival workflows required by law, policy, contract, credentialing requirements, payer requirements, or professional obligations."
          }
        ]
      },
      {
        "title": "10. Cloud Features and Hosted Services",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Certain current or future features may permit the transmission, synchronization, hosting, backup, storage, or processing of information using remote infrastructure, including cloud storage, hosted databases, third-party authentication services, or other service providers."
          },
          {
            "type": "paragraph",
            "text": "If Bolus offers hosted or cloud-enabled features, those features may be subject to separate safeguards, service limitations, additional disclosures, supplemental terms, and additional legal or compliance documentation before use."
          },
          {
            "type": "paragraph",
            "text": "If such features involve protected health information, personal information, clinical records, or other regulated data, additional privacy, security, HIPAA, or Business Associate Agreement terms may apply where legally required."
          },
          {
            "type": "paragraph",
            "text": "Availability of a hosted or cloud-enabled feature does not eliminate your independent legal, professional, or institutional compliance obligations."
          }
        ]
      },
      {
        "title": "11. Privacy and HIPAA",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Your use of Bolus is also governed by the Bolus Privacy Policy and Bolus HIPAA Security & Compliance Policy."
          },
          {
            "type": "paragraph",
            "text": "You remain responsible for complying with HIPAA, the HITECH Act, applicable state privacy laws, employer rules, facility policies, professional obligations, and institutional requirements whenever you create, view, store, use, export, transmit, upload, share, print, or otherwise handle protected health information or other regulated information through or from Bolus."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems is not responsible for HIPAA violations, privacy breaches, unauthorized disclosures, data loss, or compliance failures caused by your acts or omissions, including your failure to secure your device, restrict access, use authorized workflows, maintain appropriate safeguards, or handle patient records in accordance with applicable law and institutional policy."
          }
        ]
      },
      {
        "title": "12. Exports and External Systems",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may allow you to export, print, upload, transmit, share, or store records outside the application."
          },
          {
            "type": "paragraph",
            "text": "Once data is exported, transmitted, uploaded, printed, copied, edited, stored, or shared outside Bolus, Pressor Systems may have no ability to control, retrieve, correct, delete, monitor, verify, or secure that information."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for confirming that the destination system, method of transmission, recipient, storage location, and resulting record are lawful, secure, appropriate, complete, and consistent with applicable clinical, legal, privacy, security, payer, professional, and institutional requirements."
          },
          {
            "type": "paragraph",
            "text": "Bolus does not control third-party devices, email systems, file systems, facility networks, electronic health records, storage providers, cloud drives, messaging systems, or other external systems."
          }
        ]
      },
      {
        "title": "13. License Restrictions",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Subject to your compliance with these Terms, Pressor Systems grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and use Bolus solely for your internal professional use."
          },
          {
            "type": "paragraph",
            "text": "You may not, and may not permit any third party to:"
          },
          {
            "type": "list",
            "items": [
              "reverse engineer, decompile, disassemble, or attempt to derive source code from Bolus, except to the extent prohibited by applicable law;",
              "copy, reproduce, distribute, sell, lease, sublicense, or commercially exploit the Service except as expressly authorized by these Terms;",
              "use Bolus in a way that violates law, infringes the rights of others, or exceeds your authorized professional role;",
              "use Bolus to process, disclose, or transmit data without proper authorization;",
              "interfere with or disrupt the operation, integrity, security, or availability of the Service;",
              "introduce malware, malicious code, or harmful data;",
              "share access with unauthorized persons;",
              "misrepresent your identity, credentials, affiliation, or authority;",
              "use Bolus to create a competing product or for benchmarking, scraping, or other commercial intelligence purposes; or",
              "bypass or undermine mandatory authentication or security requirements."
            ]
          }
        ]
      },
      {
        "title": "14. Availability, Modifications, and Backup Workflows",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may suspend, update, patch, modify, limit, or discontinue any part of the Service at any time, to the fullest extent permitted by law."
          },
          {
            "type": "paragraph",
            "text": "We do not guarantee uninterrupted availability, error-free operation, compatibility with every device, or fitness for any particular clinical workflow."
          },
          {
            "type": "paragraph",
            "text": "Bolus should not be relied upon as the sole method of documentation in a clinical emergency, device failure, connectivity issue, software malfunction, battery failure, account access issue, or any other circumstance where use of the Service is unavailable, unreliable, delayed, or inappropriate."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for maintaining appropriate backup documentation workflows and for ensuring that required clinical documentation is completed even if Bolus is unavailable."
          }
        ]
      },
      {
        "title": "15. Subscriptions and Payments",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Paid features, if offered, may be billed through Apple, Google, or another authorized payment platform. Subscription terms, billing cycles, renewals, cancellations, and refunds may also be governed by the applicable app marketplace or payment platform rules."
          },
          {
            "type": "paragraph",
            "text": "Unless otherwise required by applicable law, subscriptions may automatically renew until canceled, and fees paid may be non-refundable once charged."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for managing your subscription through the applicable platform."
          }
        ]
      },
      {
        "title": "16. Intellectual Property",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus, including its software, source code, object code, design, interface, workflows, branding, text, graphics, documentation, and related content, is owned by Pressor Systems LLC or its licensors and is protected by applicable intellectual property law."
          },
          {
            "type": "paragraph",
            "text": "Except for the limited license expressly granted in these Terms, no right, title, or interest in or to Bolus or any related intellectual property is transferred to you."
          },
          {
            "type": "paragraph",
            "text": "You may not use the Bolus name, logo, trademarks, service marks, or branding without prior written permission from Pressor Systems LLC."
          }
        ]
      },
      {
        "title": "17. Disclaimer of Warranties",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is provided on an “as is” and “as available” basis to the fullest extent permitted by law."
          },
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, Pressor Systems disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, reliability, security, availability, uninterrupted service, and error-free operation."
          },
          {
            "type": "paragraph",
            "text": "Without limiting the foregoing, Pressor Systems does not warrant that:"
          },
          {
            "type": "list",
            "items": [
              "the Service will be available at all times or free from interruption;",
              "defects or errors will be corrected;",
              "the Service will be compatible with every device, platform, practice setting, or workflow;",
              "any record, export, summary, field, template, calculation, prompt, or output generated through the Service will be accurate, complete, timely, legally sufficient, clinically adequate, billing-compliant, regulatory-compliant, or professionally adequate;",
              "use of the Service will prevent malpractice claims, payer disputes, reimbursement denials, privacy incidents, regulatory review, professional discipline, litigation, or adverse findings; or",
              "data loss, unauthorized access, security incidents, or service interruptions will not occur."
            ]
          }
        ]
      },
      {
        "title": "18. Limitation of Liability",
        "blocks": [
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, Pressor Systems LLC and its affiliates, members, managers, officers, employees, contractors, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, business, goodwill, data, records, or business interruption, arising out of or relating to the Service or these Terms, even if advised of the possibility of such damages."
          },
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, Pressor Systems LLC shall have no liability for claims arising out of or relating to:"
          },
          {
            "type": "list",
            "items": [
              "patient care;",
              "clinical decisions;",
              "medication choices, dosing, or administration;",
              "patient monitoring;",
              "patient outcomes;",
              "incomplete, inaccurate, delayed, inconsistent, missing, or insufficient documentation;",
              "failure to review, correct, sign, export, submit, preserve, or retain records;",
              "reliance on information generated, displayed, exported, or stored by Bolus;",
              "use of Bolus in an inappropriate clinical setting;",
              "lack of backup documentation workflows;",
              "billing submissions, reimbursement denials, payer disputes, audits, or recoupments;",
              "professional discipline, credentialing action, regulatory investigation, malpractice claim, or litigation;",
              "privacy incidents, HIPAA violations, unauthorized disclosures, or data loss caused by your acts or omissions;",
              "exported records or information stored, transmitted, or modified outside Bolus; or",
              "misuse, unauthorized use, or inability to use the Service."
            ]
          },
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, the total aggregate liability of Pressor Systems LLC arising out of or relating to the Service or these Terms shall not exceed the greater of:"
          },
          {
            "type": "list",
            "items": [
              "the amount paid by you to Pressor Systems for the Service during the twelve (12) months preceding the event giving rise to the claim; or",
              "one hundred U.S. dollars (US $100)."
            ]
          },
          {
            "type": "paragraph",
            "text": "Nothing in these Terms excludes or limits liability to the extent such liability cannot be excluded or limited under applicable law."
          }
        ]
      },
      {
        "title": "19. Indemnification",
        "blocks": [
          {
            "type": "paragraph",
            "text": "You agree to defend, indemnify, and hold harmless Pressor Systems LLC and its affiliates, members, managers, officers, employees, contractors, agents, and licensors from and against any and all claims, actions, demands, proceedings, damages, judgments, settlements, liabilities, losses, costs, and expenses, including reasonable attorneys’ fees, arising out of or relating to:"
          },
          {
            "type": "list",
            "items": [
              "your access to or use of Bolus;",
              "your patient care, clinical decisions, treatment choices, medication decisions, documentation practices, or professional conduct;",
              "incomplete, inaccurate, delayed, inconsistent, missing, or insufficient documentation;",
              "your failure to review, correct, sign, export, submit, preserve, or retain records;",
              "your User Content, clinical records, exports, or documentation;",
              "your handling, storage, export, transmission, disclosure, or loss of protected health information or other regulated information;",
              "any HIPAA violation, privacy breach, unauthorized disclosure, or compliance failure caused by your acts or omissions;",
              "your use of exported records in billing, reimbursement, credentialing, quality review, regulatory, legal, or professional settings;",
              "your violation of these Terms or any incorporated policy;",
              "your violation of any law, regulation, privacy obligation, professional obligation, institutional policy, or third-party right; or",
              "misuse of the Service by you or by anyone accessing the Service through your device, credentials, or account."
            ]
          }
        ]
      },
      {
        "title": "20. Termination",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We may suspend, restrict, or terminate your access to all or any portion of Bolus at any time, with or without notice, if:"
          },
          {
            "type": "list",
            "items": [
              "you violate these Terms or any incorporated policy;",
              "your use presents a legal, regulatory, security, compliance, operational, professional, or patient-safety risk;",
              "we are required to do so by law or by a third-party platform provider; or",
              "we discontinue the Service or any feature."
            ]
          },
          {
            "type": "paragraph",
            "text": "You may stop using Bolus at any time and may cancel any subscription through the applicable purchase platform."
          },
          {
            "type": "paragraph",
            "text": "Any provisions of these Terms that by their nature should survive suspension or termination shall survive, including provisions relating to ownership, disclaimers, limitations of liability, indemnification, accrued payment obligations, incorporated disclaimers, and miscellaneous legal terms."
          }
        ]
      },
      {
        "title": "21. Changes to Terms or Incorporated Policies",
        "blocks": [
          {
            "type": "paragraph",
            "text": "We may revise these Terms or any incorporated policy from time to time. If we make material changes, we may provide notice through the Service, by email, or by other reasonable means."
          },
          {
            "type": "paragraph",
            "text": "We may require you to accept updated Terms or updated incorporated policies before continuing to use Bolus."
          },
          {
            "type": "paragraph",
            "text": "Your continued use of Bolus after updated Terms or policies become effective constitutes acceptance of the updated Terms or policies."
          }
        ]
      },
      {
        "title": "22. Governing Law",
        "blocks": [
          {
            "type": "paragraph",
            "text": "These Terms are governed by the applicable laws designated by Pressor Systems LLC, without regard to conflict-of-law principles, except where consumer or professional protections require otherwise."
          }
        ]
      },
      {
        "title": "23. Severability",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If any provision of these Terms is held invalid, illegal, or unenforceable, the remaining provisions will remain in full force and effect to the fullest extent permitted by law."
          }
        ]
      },
      {
        "title": "24. Entire Agreement",
        "blocks": [
          {
            "type": "paragraph",
            "text": "These Terms, together with the Privacy Policy, HIPAA Security & Compliance Policy, Medical Disclaimer, and any applicable supplemental terms or incorporated policies, constitute the entire agreement between you and Pressor Systems LLC regarding use of Bolus and supersede all prior or contemporaneous understandings relating to the Service."
          }
        ]
      },
      {
        "title": "25. Contact",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Questions about these Terms of Use should be directed to:"
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC"
          },
          {
            "type": "paragraph",
            "text": "Email: contact@bolusanesthesia.com"
          },
          {
            "type": "paragraph",
            "text": "Website: bolusanesthesia.com"
          }
        ]
      }
    ]
  },
  "medical-disclaimer": {
    "title": "Bolus Medical Disclaimer",
    "company": "Pressor Systems LLC",
    "effectiveDate": "May 23, 2026",
    "introduction": [
      "Bolus is developed and operated by Pressor Systems LLC.",
      "This Medical Disclaimer explains the intended use of the Bolus application and clarifies the responsibilities of users when using the Service in clinical environments."
    ],
    "sections": [
      {
        "title": "1. Documentation Tool Only",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is designed to assist healthcare professionals with clinical documentation and record-keeping workflows."
          },
          {
            "type": "paragraph",
            "text": "Bolus is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition."
          },
          {
            "type": "paragraph",
            "text": "Bolus does not provide medical advice, clinical decision support, diagnosis, treatment recommendations, medication recommendations, monitoring recommendations, or patient management instructions."
          }
        ]
      },
      {
        "title": "2. No Substitute for Clinical Judgment",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is not a substitute for the independent clinical judgment of a licensed healthcare professional."
          },
          {
            "type": "paragraph",
            "text": "Any information, templates, prompts, calculations, timing features, summaries, defaults, alerts, suggested text, or other outputs generated or displayed by the application are provided for documentation convenience only."
          },
          {
            "type": "paragraph",
            "text": "Users must independently evaluate the patient, monitor the clinical situation, make all treatment decisions, and determine what documentation is clinically, legally, professionally, and institutionally required."
          },
          {
            "type": "paragraph",
            "text": "In all circumstances involving patient care, the user’s independent professional judgment controls."
          }
        ]
      },
      {
        "title": "3. Verification and Final Record Review Required",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Users are responsible for reviewing and verifying all information entered into, displayed by, generated by, or exported from Bolus."
          },
          {
            "type": "paragraph",
            "text": "Before signing, exporting, submitting, uploading, printing, billing from, relying on, or otherwise using any record created through Bolus, the user must review the complete record and confirm that it accurately reflects the patient encounter."
          },
          {
            "type": "paragraph",
            "text": "This includes, as applicable, verification of:"
          },
          {
            "type": "list",
            "items": [
              "patient identifiers",
              "procedure information",
              "timing of events",
              "medications and doses",
              "monitoring data",
              "clinical observations",
              "airway management",
              "complications",
              "interventions",
              "recovery status",
              "discharge condition",
              "required attestations or signatures"
            ]
          },
          {
            "type": "paragraph",
            "text": "Bolus does not replace the user’s responsibility to perform a final review of the medical record."
          }
        ]
      },
      {
        "title": "4. Responsibility for Incomplete or Inaccurate Documentation",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Users are solely responsible for the accuracy, completeness, timeliness, consistency, and sufficiency of all documentation created, edited, signed, exported, submitted, uploaded, printed, or stored using Bolus."
          },
          {
            "type": "paragraph",
            "text": "This includes responsibility for any omission, inaccuracy, delay, inconsistency, incomplete entry, incorrect entry, or failure to document information required by law, institutional policy, professional standards, payer requirements, credentialing requirements, quality review standards, or the circumstances of the patient encounter."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC does not review, monitor, audit, approve, validate, or verify user-generated records for clinical accuracy, completeness, billing sufficiency, regulatory compliance, legal defensibility, or professional adequacy."
          }
        ]
      },
      {
        "title": "5. Templates, Prompts, Defaults, and Generated Outputs",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may include templates, prompts, defaults, snippets, autofill features, suggested text, structured fields, timing tools, calculations, or generated outputs."
          },
          {
            "type": "paragraph",
            "text": "These features are optional documentation aids. They may not capture every clinically relevant event, facility requirement, payer requirement, regulatory requirement, or legal documentation requirement for a particular encounter."
          },
          {
            "type": "paragraph",
            "text": "Users are responsible for modifying, supplementing, correcting, overriding, or rejecting any template, prompt, default, generated output, or suggested entry as needed."
          },
          {
            "type": "paragraph",
            "text": "No template, prompt, default, generated output, or suggested entry should be treated as complete, correct, required, or sufficient without independent user review."
          }
        ]
      },
      {
        "title": "6. No Clinical Decision Support or Completeness Guarantee",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus does not provide clinical decision support and does not guarantee that any output, record, field, prompt, reminder, calculation, summary, or export is clinically appropriate, accurate, complete, timely, legally sufficient, billing-compliant, or suitable for any particular patient encounter."
          },
          {
            "type": "paragraph",
            "text": "Bolus does not guarantee that any record created through the Service will satisfy the requirements of any healthcare institution, dental office, hospital, ambulatory surgery center, payer, licensing board, regulatory agency, malpractice carrier, court, auditor, reviewer, credentialing body, or quality assurance process."
          }
        ]
      },
      {
        "title": "7. No Legal, Billing, Regulatory, Malpractice, or Defensibility Guarantee",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may be described on its website, in product materials, or in marketing as supporting cleaner, more organized, or more defensible documentation workflows. Any such description refers only to the intended design, workflow purpose, and organizational function of the Service."
          },
          {
            "type": "paragraph",
            "text": "References to “defensible” documentation do not mean, and should not be understood to mean, that any record created, edited, signed, exported, submitted, uploaded, printed, or stored using Bolus will be complete, accurate, legally sufficient, billing-compliant, regulatory-compliant, malpractice-proof, litigation-proof, audit-proof, or defensible in any particular dispute, review, audit, claim, investigation, or proceeding."
          },
          {
            "type": "paragraph",
            "text": "Use of the Service does not guarantee protection from malpractice claims, professional discipline, payer disputes, reimbursement denials, regulatory review, quality review, credentialing action, litigation, adverse findings, or other documentation-related consequences."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC does not provide legal advice, billing advice, compliance advice, malpractice advice, or professional documentation review. Pressor Systems LLC does not determine whether any record is legally sufficient, clinically adequate, billing-compliant, regulatory-compliant, professionally adequate, or defensible for any specific patient encounter, facility, payer, regulator, court, licensing board, malpractice carrier, reviewer, auditor, or credentialing body."
          },
          {
            "type": "paragraph",
            "text": "Users remain solely responsible for determining whether documentation created, edited, signed, exported, submitted, uploaded, printed, or stored using Bolus is accurate, complete, timely, sufficient, and appropriate for clinical, billing, legal, regulatory, institutional, and professional purposes."
          }
        ]
      },
      {
        "title": "8. Emergency Use and Backup Documentation",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus should not be relied upon as the sole method of documentation in a clinical emergency, device failure, connectivity issue, software malfunction, battery failure, account access issue, or any other circumstance where use of the Service is unavailable, unreliable, delayed, or inappropriate."
          },
          {
            "type": "paragraph",
            "text": "Users are responsible for maintaining appropriate backup documentation workflows and for ensuring that required clinical documentation is completed even if Bolus is unavailable."
          }
        ]
      },
      {
        "title": "9. Compliance and Professional Standards",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Users remain solely responsible for complying with all applicable laws, regulations, licensing requirements, professional standards, facility rules, medical staff requirements, payer requirements, record retention requirements, privacy requirements, and institutional policies."
          },
          {
            "type": "paragraph",
            "text": "This includes responsibility for determining what information must be documented, how it must be documented, when it must be documented, where it must be stored, and how long it must be retained."
          },
          {
            "type": "paragraph",
            "text": "Bolus does not determine the documentation requirements applicable to any specific user, patient, procedure, jurisdiction, facility, payer, or practice setting."
          }
        ]
      },
      {
        "title": "10. Exported Records and External Systems",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may allow users to export, print, upload, transmit, share, or store records outside the application."
          },
          {
            "type": "paragraph",
            "text": "Once a record is exported, transmitted, uploaded, printed, copied, edited, stored, or shared outside Bolus, Pressor Systems LLC may have no ability to control, retrieve, correct, delete, monitor, verify, or secure that record."
          },
          {
            "type": "paragraph",
            "text": "Users are responsible for ensuring that exported records are sent to appropriate destinations, preserved as required, and handled in accordance with applicable privacy, security, clinical, legal, and institutional requirements."
          }
        ]
      },
      {
        "title": "11. Limitation of Responsibility",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC does not assume responsibility for clinical decisions, treatment choices, medication selection, medication administration, patient monitoring, patient outcomes, documentation decisions, or the sufficiency of any medical record."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC shall not be responsible for any injury, harm, loss, liability, claim, penalty, denial, disciplinary action, regulatory action, malpractice claim, documentation dispute, or damages resulting from:"
          },
          {
            "type": "list",
            "items": [
              "clinical decisions made by users",
              "patient care provided by users",
              "incorrect, incomplete, delayed, or missing documentation",
              "reliance on information generated or displayed by the Service",
              "failure to review or correct documentation",
              "misuse of the Service",
              "use of the Service in an inappropriate clinical setting",
              "failure to maintain backup documentation workflows",
              "failure to follow professional standards, applicable law, payer requirements, or institutional policies"
            ]
          }
        ]
      },
      {
        "title": "12. Intended Users",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is intended for use by trained healthcare professionals who are qualified to provide clinical care and who understand the responsibilities associated with maintaining accurate medical documentation."
          },
          {
            "type": "paragraph",
            "text": "The Service is not intended for use by patients or by individuals without appropriate clinical training, authorization, and professional responsibility."
          }
        ]
      },
      {
        "title": "13. Acknowledgment",
        "blocks": [
          {
            "type": "paragraph",
            "text": "By using Bolus, you acknowledge and agree that:"
          },
          {
            "type": "list",
            "items": [
              "you understand this Medical Disclaimer",
              "Bolus is a documentation tool only",
              "Bolus does not provide medical advice, treatment recommendations, or clinical decision support",
              "references to “defensible” documentation refer to Bolus’s intended workflow purpose and do not guarantee that any record will be legally, clinically, professionally, or practically defensible in any specific dispute, review, audit, claim, investigation, or proceeding",
              "you will exercise independent professional judgment when providing patient care",
              "you will not rely on Bolus as a substitute for clinical decision-making",
              "you are solely responsible for patient care and patient outcomes",
              "you are solely responsible for the accuracy, completeness, timeliness, and sufficiency of any documentation created, edited, signed, exported, submitted, uploaded, printed, or stored using the Service",
              "you are solely responsible for reviewing and verifying any record before using it for clinical, legal, billing, regulatory, institutional, or professional purposes"
            ]
          }
        ]
      },
      {
        "title": "14. Contact Information",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC"
          },
          {
            "type": "paragraph",
            "text": "Email: contact@bolusanesthesia.com"
          },
          {
            "type": "paragraph",
            "text": "Website: bolusanesthesia.com"
          }
        ]
      }
    ]
  },
  "hipaa-compliance-policy": {
    "title": "HIPAA Security & Compliance Policy",
    "company": "Pressor Systems LLC",
    "effectiveDate": "May 23, 2026",
    "introduction": [
      "This policy explains how Bolus is designed to support secure handling of sensitive information and what users must do to use the app responsibly in clinical settings.",
      "Bolus is developed and operated by Pressor Systems LLC."
    ],
    "sections": [
      {
        "title": "Security Highlights",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Local-first clinical records: clinical case records are generally stored primarily on the user’s device.",
              "Mandatory authentication: access to Bolus and case logs requires biometric authentication and/or a secure device passcode, password, or comparable device-supported method.",
              "Device-supported encryption: app data is protected using security features supported by the device and operating system.",
              "User-controlled exports: users decide when and where records are exported, transmitted, printed, uploaded, or shared.",
              "Remote account data: certain account, profile, settings, snippets, templates, analytics, subscription, and legal acceptance data may be stored remotely to support app functionality.",
              "User responsibility: HIPAA compliance depends on how the user secures devices, handles records, exports data, and follows institutional policies.",
              "Future hosted features: cloud backup, sync, or hosted PHI features may require additional safeguards, terms, and business associate documentation where applicable."
            ]
          }
        ]
      },
      {
        "title": "1. Purpose of This Policy",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is built to support anesthesia and clinical documentation workflows. This policy explains the app’s security model and the user’s responsibilities when handling protected health information (“PHI”) or other sensitive information."
          },
          {
            "type": "paragraph",
            "text": "This policy is intended to support safe use of Bolus. It does not replace the user’s independent obligations under HIPAA, the HITECH Act, applicable state privacy laws, professional obligations, or workplace policies."
          }
        ]
      },
      {
        "title": "2. Local-First Clinical Record Architecture",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus is designed around a local-first architecture for clinical case records. In general, clinical records and patient-related case data are stored primarily on the user’s device rather than on servers operated by Pressor Systems."
          },
          {
            "type": "paragraph",
            "text": "This design is intended to reduce unnecessary cloud exposure of patient-related information and keep clinical records under the direct control of the clinician using the app."
          },
          {
            "type": "paragraph",
            "text": "In general:"
          },
          {
            "type": "list",
            "items": [
              "case logs and clinical records are stored primarily on the user’s device;",
              "Pressor Systems does not routinely receive or store full clinical case records on Bolus-operated systems;",
              "users control when records are exported, transmitted, uploaded, printed, or shared outside the app;",
              "records stored only on a device may not be recoverable by Pressor Systems if the device is lost, damaged, reset, wiped, or the app is deleted."
            ]
          },
          {
            "type": "paragraph",
            "text": "Local-first storage can reduce certain risks, but it does not eliminate HIPAA or other privacy and security obligations."
          }
        ]
      },
      {
        "title": "3. Data That May Be Stored or Synced Remotely",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Although clinical case records are generally local-first, certain non-clinical or account-related information may be stored remotely to operate the Service and support account functionality."
          },
          {
            "type": "paragraph",
            "text": "This may include:"
          },
          {
            "type": "list",
            "items": [
              "account information;",
              "name, email address, title, degree, practice, institution, or organization;",
              "uploaded profile images or profile images provided through Apple, Google, or another authentication provider;",
              "subscription and entitlement information;",
              "app settings and preferences;",
              "user-created snippets or quick phrases;",
              "user-created templates;",
              "usage analytics and operational metrics;",
              "crash reports and diagnostic data;",
              "legal acceptance records, including accepted policy versions and timestamps."
            ]
          },
          {
            "type": "paragraph",
            "text": "Users should avoid placing patient identifiers, PHI, or patient-specific clinical details into profile fields, settings, snippets, templates, support messages, or other reusable content unless a specific feature is designed, authorized, and appropriately safeguarded for that purpose."
          }
        ]
      },
      {
        "title": "4. Mandatory Authentication and Device Security",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Access to Bolus and case logs requires mandatory authentication using security protections supported by the user’s device. These protections may include biometric authentication and/or a secure device passcode, password, or comparable device-supported authentication method."
          },
          {
            "type": "paragraph",
            "text": "Users may not disable, bypass, weaken, or interfere with authentication or access-control protections required by Bolus."
          },
          {
            "type": "paragraph",
            "text": "Because Bolus may store clinical records locally, the user’s device is a critical part of the security environment. Users are responsible for maintaining appropriate device security, including:"
          },
          {
            "type": "list",
            "items": [
              "using a secure device passcode or password;",
              "enabling biometric authentication when available and appropriate;",
              "ensuring only authorized persons can unlock the device;",
              "ensuring only authorized persons are enrolled in biometric access;",
              "keeping the device and operating system updated;",
              "using automatic screen lock;",
              "maintaining physical control of the device;",
              "using remote tracking or remote wipe features when available and appropriate."
            ]
          },
          {
            "type": "paragraph",
            "text": "If an unauthorized person can unlock the device, that person may be able to access sensitive information stored in or accessible through Bolus."
          }
        ]
      },
      {
        "title": "5. Required User Safeguards",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Users are responsible for using Bolus in a manner consistent with HIPAA, applicable law, professional obligations, and institutional policy."
          },
          {
            "type": "paragraph",
            "text": "Users should not:"
          },
          {
            "type": "list",
            "items": [
              "share their Bolus account credentials with unauthorized persons;",
              "leave a device unlocked or unattended in a way that could expose PHI;",
              "allow unauthorized individuals to use their device or account;",
              "export PHI to unsecured email, cloud storage, messaging systems, or file-sharing tools;",
              "store PHI in snippets, templates, settings, profile fields, or reusable content unless specifically authorized and appropriately safeguarded;",
              "send PHI to Bolus support unless specifically instructed through an authorized secure workflow;",
              "use Bolus in a manner prohibited by their employer, institution, facility, practice, or applicable law."
            ]
          },
          {
            "type": "paragraph",
            "text": "Users remain responsible for determining whether Bolus is appropriate for their specific practice setting and workflow."
          }
        ]
      },
      {
        "title": "6. Exporting and Sharing PHI",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may allow users to export, print, upload, transmit, share, or store records outside the app."
          },
          {
            "type": "paragraph",
            "text": "When records leave Bolus, users are responsible for selecting lawful, secure, and appropriate destinations and transmission methods. Exports should be sent only through secure, authorized, and institution-approved workflows."
          },
          {
            "type": "paragraph",
            "text": "Examples of potentially appropriate workflows may include approved electronic health record systems, secure clinical storage systems, or other secure channels authorized by the user’s institution or practice."
          },
          {
            "type": "paragraph",
            "text": "Users should avoid transmitting PHI through unsecured or unapproved systems."
          },
          {
            "type": "paragraph",
            "text": "Once a record is exported, transmitted, uploaded, printed, copied, edited, stored, or shared outside Bolus, Pressor Systems may have no ability to control, retrieve, correct, delete, monitor, verify, or secure that information."
          }
        ]
      },
      {
        "title": "7. Snippets, Templates, Settings, and Reusable Content",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may allow users to create, store, and sync snippets, quick phrases, templates, settings, preferences, and other reusable content."
          },
          {
            "type": "paragraph",
            "text": "These features are intended to support workflow efficiency. They are not intended to store patient-specific information unless a specific feature expressly supports that use and includes appropriate safeguards."
          },
          {
            "type": "paragraph",
            "text": "Users should not include patient names, dates of birth, medical record numbers, procedure-specific patient identifiers, or other PHI in snippets, templates, profile fields, settings, or reusable content unless specifically authorized and appropriate for the feature."
          },
          {
            "type": "paragraph",
            "text": "Users are responsible for reviewing reusable content before using it in clinical documentation to ensure it is accurate, appropriate, and does not introduce incorrect or patient-specific information into the wrong record."
          }
        ]
      },
      {
        "title": "8. Support Communications and PHI",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Users should not send PHI, patient identifiers, case logs, exported records, screenshots containing patient information, or clinical documents to Pressor Systems through general support channels unless specifically instructed through an authorized secure workflow."
          },
          {
            "type": "paragraph",
            "text": "If a user voluntarily sends PHI or patient-related information to Pressor Systems outside an approved secure process, the user is responsible for ensuring that the disclosure is lawful, authorized, and consistent with applicable privacy and institutional requirements."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems may use support communications, diagnostic information, screenshots, logs, or attachments provided by users to troubleshoot issues, improve the Service, and respond to user requests, subject to applicable law and the Bolus Privacy Policy."
          }
        ]
      },
      {
        "title": "9. Legal and Professional Obligations",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Users remain responsible for complying with:"
          },
          {
            "type": "list",
            "items": [
              "HIPAA;",
              "the HITECH Act;",
              "applicable state privacy and security laws;",
              "professional confidentiality obligations;",
              "employer, practice, hospital, ambulatory surgery center, dental office, or facility policies;",
              "medical staff rules;",
              "payer requirements;",
              "record retention requirements;",
              "credentialing and quality review requirements."
            ]
          },
          {
            "type": "paragraph",
            "text": "Bolus provides software tools and safeguards, but Pressor Systems does not control the user’s clinical environment, device management, institutional access policies, workforce compliance, export destinations, or professional documentation practices."
          }
        ]
      },
      {
        "title": "10. Security Incidents, Breach Response, and User Responsibility",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Users are responsible for promptly following their employer, practice, facility, or institutional policies for reporting, investigating, and responding to suspected privacy or security incidents involving:"
          },
          {
            "type": "list",
            "items": [
              "lost or stolen devices;",
              "unauthorized access to a device or Bolus account;",
              "improper exports or transmissions;",
              "disclosure of PHI to the wrong recipient;",
              "use of unsecured or unauthorized systems;",
              "compromised credentials;",
              "records stored or shared outside Bolus."
            ]
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems is not responsible for HIPAA violations, privacy breaches, unauthorized disclosures, data loss, or compliance failures caused by a user’s acts or omissions, including failure to secure a device, restrict access, use authorized workflows, maintain appropriate safeguards, or handle patient records in accordance with applicable law and institutional policy."
          }
        ]
      },
      {
        "title": "11. Data Loss, Retention, and Recovery",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Local-first storage reduces unnecessary cloud exposure, but it also means recovery may be limited."
          },
          {
            "type": "paragraph",
            "text": "Records may become unavailable or permanently lost if a device is lost, stolen, damaged, reset, wiped, compromised, deleted, or otherwise rendered inaccessible, or if the application is deleted."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems may not be able to recover records stored only on the user’s device."
          },
          {
            "type": "paragraph",
            "text": "Users are responsible for exporting, retaining, archiving, and preserving records when required for legal, billing, clinical, professional, payer, credentialing, or institutional purposes."
          }
        ]
      },
      {
        "title": "12. Future Cloud or Hosted PHI Features",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Bolus may offer additional hosted or cloud-based features in the future, such as backup, synchronization, collaboration, hosted record storage, or multi-device clinical record access."
          },
          {
            "type": "paragraph",
            "text": "If those features involve PHI or other regulated information, additional safeguards, disclosures, user choices, supplemental terms, and business associate documentation may apply where legally required."
          },
          {
            "type": "paragraph",
            "text": "Users should not assume that a feature is authorized for PHI unless the feature, documentation, or applicable terms expressly indicate that it is designed for that purpose."
          }
        ]
      },
      {
        "title": "13. Security Limitations",
        "blocks": [
          {
            "type": "paragraph",
            "text": "No app, device, server, network, storage system, or transmission method can be guaranteed to be completely secure."
          },
          {
            "type": "paragraph",
            "text": "Bolus is designed to support secure documentation workflows, but good security also depends on how the user manages the device, controls access, handles exports, stores records, and follows institutional policies."
          }
        ]
      },
      {
        "title": "14. User Acknowledgment and Responsibility",
        "blocks": [
          {
            "type": "paragraph",
            "text": "By accessing or using Bolus, you acknowledge that you have read and understand this HIPAA Security & Compliance Policy and agree to use the Service in a manner consistent with the safeguards described in this policy, applicable law, and the privacy and security requirements of your employer, practice, hospital, ambulatory surgery center, dental office, or other institution."
          },
          {
            "type": "paragraph",
            "text": "You acknowledge and agree that you are responsible for maintaining HIPAA-compliant practices in connection with your use of Bolus, including how you access, store, export, transmit, share, retain, and safeguard PHI."
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC is not responsible for any HIPAA violation, privacy breach, unauthorized disclosure, loss of PHI, or other compliance failure caused by your acts or omissions, including your failure to follow this policy, secure your device, restrict access, use authorized workflows, avoid inappropriate storage of PHI in reusable content, or otherwise handle patient records in accordance with applicable law and institutional requirements."
          }
        ]
      },
      {
        "title": "15. Questions",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Questions about this policy should be directed to:"
          },
          {
            "type": "paragraph",
            "text": "Pressor Systems LLC"
          },
          {
            "type": "paragraph",
            "text": "Email: contact@bolusanesthesia.com"
          },
          {
            "type": "paragraph",
            "text": "Website: bolusanesthesia.com"
          }
        ]
      }
    ]
  }
};
