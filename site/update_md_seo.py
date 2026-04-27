import os
import re

updates = {
    'home.md': {
        'title': 'Bolus | Anesthesia Record App',
        'description': 'Mobile anesthesia charting for office-based procedures. Create clean, legible records from pre-op through recovery and export a professional PDF.'
    },
    'pricing.md': {
        'title': 'Pricing | Bolus Anesthesia Charting',
        'description': 'Simple pricing for anesthesia documentation software built for office-based clinicians. Start free and upgrade when your workflow grows.'
    },
    'about.md': {
        'title': 'About Bolus | Built for Anesthesia Documentation',
        'description': 'Bolus was built by clinicians to make anesthesia documentation faster, cleaner, and easier to stand behind.'
    },
    'contact.md': {
        'title': 'Contact Bolus',
        'description': 'Contact Bolus for product questions, pricing, early access, or support.'
    },
    'legal.md': {
        'title': 'Legal | Bolus',
        'description': 'View Bolus legal documents, including privacy, terms of service, medical disclaimer, and HIPAA compliance policy.'
    },
    'privacy-policy.md': {
        'title': 'Privacy Policy | Bolus',
        'description': 'Read how Bolus handles account data, device security, local-first clinical records, and privacy for anesthesia documentation.'
    },
    'terms-of-service.md': {
        'title': 'Terms of Service | Bolus',
        'description': 'Review the terms that govern use of Bolus for anesthesia documentation, accounts, subscriptions, and record exports.'
    },
    'medical-disclaimer.md': {
        'title': 'Medical Disclaimer | Bolus',
        'description': 'Bolus is a documentation tool only. Review its intended use, clinician responsibility, and medical disclaimer.'
    },
    'hipaa-compliance-policy.md': {
        'title': 'HIPAA Compliance Policy | Bolus',
        'description': 'Review Bolus policies for local-first storage, device security, record export, and clinician responsibility under HIPAA.'
    },
    'login.md': {
        'title': 'Sign In | Bolus',
        'description': 'Sign in to Bolus.'
    },
    'app.md': {
        'title': 'Dashboard | Bolus',
        'description': 'Access the Bolus dashboard.'
    }
}

content_dir = 'src/content/pages'

for filename, data in updates.items():
    filepath = os.path.join(content_dir, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace title
    content = re.sub(r'^title:\s*".*?"', f'title: "{data["title"]}"', content, flags=re.MULTILINE)
    # Replace description
    content = re.sub(r'^description:\s*".*?"', f'description: "{data["description"]}"', content, flags=re.MULTILINE)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Done updating files.")
