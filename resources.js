/* ═══════════════════════════════════════════════════════════════
   Peachtree Town & Country — ROAR
   MAIN RESOURCE DATA
   ───────────────────────────────────────────────────────────────
   This file controls the site settings and resource library content.

   Most common edits:
   - Site name / hero wording
   - Resource Center folders and resource links

   Advisor links are now in links.js.
   Notifications are now in notifications.js.
═══════════════════════════════════════════════════════════════ */

let SITE_CONFIG = {
  "siteName": "ROAR Holiday Edition",
  "navLabel": "ROAR Holiday Edition",
  "eyebrow": "Peachtree Town & Country — Holiday Edition",
  "heroTitle": "ROAR Holiday Edition",
  "heroItalic": "Advisor Access",
  "heroDescription": "A polished starting point for advisor tools, support requests, company updates, and daily resources.",
  "announcementActive": true,
  "announcementText": "Welcome to the Lion’s Den. Use this page as your starting point for advisor tools, updates, and support."
};

let RESOURCES = [
  {
    "label": "Brand Collateral",
    "desc": "Logos, approved files, and branded collateral assets",
    "icon": "🎨",
    "type": "Folder",
    "url": "https://drive.google.com/drive/folders/1RI0gxifMwDRnykzTXQ5zzMwOq8nSGV8n?usp=drive_link",
    "children": [
      {
        "label": "Buyers Guide",
        "desc": "Buyer presentation guides for client meetings",
        "icon": "📘",
        "type": "Guide",
        "children": [
          {
            "label": "Buyers Guide — Version 1",
            "desc": "",
            "icon": "📄",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1zdIYSU2F79WhXbkRr-cQUhr1ZFJnDcDU/view?usp=sharing",
            "section": "Marketing & Brand"
          },
          {
            "label": "Buyers Guide — Version 2",
            "desc": "",
            "icon": "📄",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1aWjPfY6_KDKMBYCDtz99GscFn7C0aVHD/view?usp=drive_link",
            "section": "Marketing & Brand"
          }
        ],
        "section": "Marketing & Brand"
      },
      {
        "label": "Listing Presentation",
        "desc": "Seller listing presentation deck",
        "icon": "🏡",
        "type": "Folder",
        "url": "https://drive.google.com/drive/folders/11awYcq7b84-F6sbeWuL0F9s9OO6BbXLG?usp=drive_link",
        "children": [
          {
            "label": "Listing Presentation — Version 1",
            "desc": "",
            "icon": "📄",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1Ccj7w__LksTiUxRJRwrkdEpaOvcMAPJM/view?usp=drive_link",
            "section": "Marketing & Brand"
          },
          {
            "label": "Listing Presentation — Version 2",
            "desc": "",
            "icon": "📄",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1pznWuxPgLkEyHuAgPpq4WNIgTYcrXxtE/view?usp=drive_link",
            "section": "Marketing & Brand"
          }
        ],
        "section": "Marketing & Brand"
      },
      {
        "label": "Sellers Guide",
        "desc": "Seller guide for client presentations",
        "icon": "📗",
        "type": "Folder",
        "url": "https://drive.google.com/drive/folders/1l16ruESyBbrLBSo_mFAJT574eFT8Y36e?usp=drive_link",
        "children": [
          {
            "label": "Sellers Guide — Version 1",
            "desc": "",
            "icon": "📄",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1FQKxuxBMTSy-gixd6vXSE3qtN-SFSvik/view?usp=drive_link",
            "section": "Marketing & Brand"
          },
          {
            "label": "Sellers Guide — Version 2",
            "desc": "",
            "icon": "📄",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1oPkFlHCz8QhgfF_WJUi1DicmOM_uQe0e/view?usp=drive_link",
            "section": "Marketing & Brand"
          }
        ],
        "section": "Marketing & Brand"
      }
    ],
    "section": "Marketing & Brand"
  },
  {
    "label": "Branding Compliance Library",
    "desc": "Brand standards, usage rules, and compliance guidelines",
    "icon": "📋",
    "type": "Guide",
    "url": "PASTE_LINK_HERE",
    "section": "Marketing & Brand"
  },
  {
    "label": "Desktop Wallpaper",
    "desc": "Official branded desktop and device wallpapers",
    "icon": "🖥️",
    "type": "Assets",
    "url": "PASTE_LINK_HERE",
    "section": "Marketing & Brand"
  },
  {
    "label": "Disclaimers",
    "desc": "Legal disclaimers, disclosures, and required language",
    "icon": "⚖️",
    "type": "Doc",
    "url": "PASTE_LINK_HERE",
    "section": "Operations & Compliance"
  },
  {
    "label": "FMLS & OneHome",
    "desc": "MLS resources, OneHome portal guides, and listing tools",
    "icon": "🏠",
    "type": "Guide",
    "url": "PASTE_LINK_HERE",
    "section": "Operations & Compliance"
  },
  {
    "label": "Photography & Video",
    "desc": "Standards, vendor contacts, and submission guidelines",
    "icon": "📸",
    "type": "Guide",
    "url": "PASTE_LINK_HERE",
    "section": "Marketing & Brand"
  },
  {
    "label": "Social Media Assets",
    "desc": "Templates, graphics, and approved social content",
    "icon": "📱",
    "type": "Assets",
    "url": "PASTE_LINK_HERE",
    "section": "Marketing & Brand"
  },
  {
    "label": "Training & How-To Videos",
    "desc": "Step-by-step training videos and onboarding resources",
    "icon": "🎓",
    "type": "Video",
    "url": "PASTE_LINK_HERE",
    "section": "Marketing & Brand"
  },
  {
    "label": "Virtual Staging",
    "desc": "Vendors, examples, and the submission process",
    "icon": "🛋️",
    "type": "Guide",
    "url": "PASTE_LINK_HERE",
    "section": "Marketing & Brand"
  },
  {
    "icon": "⭐",
    "label": "Best Practices",
    "desc": "Company-wide best practices and advisor playbooks",
    "type": "Guide",
    "isNew": false,
    "section": "Operations & Compliance",
    "children": [
      {
        "icon": "📁",
        "label": "Marketing Best Practices",
        "desc": "",
        "type": "Folder",
        "children": [
          {
            "icon": "📄",
            "label": "Google My Business Best Practices for Realtors",
            "desc": "",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1xSBT8Dw4vnWhUo6LsOn7vdcwyvJnLGEZ/view?usp=drive_link",
            "section": "Operations & Compliance"
          },
          {
            "icon": "📄",
            "label": "Marketing Department Best Practices 2026",
            "desc": "",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1iPSHXtGkTgJisFlpWETeQ4orlL4EFnbo/view?usp=drive_link",
            "section": "Operations & Compliance"
          }
        ],
        "section": "Operations & Compliance"
      },
      {
        "icon": "📁",
        "label": "Contracts Best Practices",
        "desc": "",
        "type": "Folder",
        "children": [
          {
            "icon": "📄",
            "label": "How To Sign the Contract",
            "desc": "",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1K_uk05aRrcyyssf9ILkGX_IeQO_8Ir3R/view?usp=drive_link",
            "section": "Operations & Compliance"
          },
          {
            "icon": "📄",
            "label": "Hierarchy Rules from Top to Bottom",
            "desc": "",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1-LNrW-0OCS2rlZjQ_nQt5ltLntR9_chD/view?usp=drive_link",
            "section": "Operations & Compliance"
          },
          {
            "icon": "📄",
            "label": "Contracts Best Practices",
            "desc": "",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1-HyvtDK3cHCgD4mvj69JYTk-A0YRLPyh/view?usp=drive_link",
            "section": "Operations & Compliance"
          }
        ],
        "section": "Operations & Compliance"
      },
      {
        "icon": "📁",
        "label": "Buyer Best Practices",
        "desc": "",
        "type": "Folder",
        "children": [
          {
            "icon": "📄",
            "label": "How to Sign the Contract",
            "desc": "",
            "type": "PDF",
            "url": "https://drive.google.com/file/d/1qq7_AdJ31CYAorXuCJ_04un4PmcSZikG/view?usp=drive_link",
            "section": "Operations & Compliance"
          },
          {
            "icon": "📄",
            "label": "Additional Buyer Resource",
            "desc": "Placeholder for the next buyer resource link",
            "type": "PDF",
            "url": "PASTE_LINK_HERE",
            "section": "Operations & Compliance"
          }
        ],
        "section": "Operations & Compliance"
      }
    ]
  }
];
