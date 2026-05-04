/* ═══════════════════════════════════════════════════════════════
   Peachtree Town & Country — Advisor Hub
   DATA FILE
   ───────────────────────────────────────────────────────────────
   This is the only file that needs to be updated for most advisor
   links, notifications, and Resource Center content.

   Admin workflow:
   1. Open admin.html
   2. Make updates
   3. Export resources.js
   4. Upload/replace this file in GitHub
═══════════════════════════════════════════════════════════════ */

let SITE_CONFIG = {
  "siteName": "Advisor Hub",
  "navLabel": "Advisor Hub",
  "eyebrow": "Peachtree Town & Country — Internal",
  "heroTitle": "Advisor",
  "heroItalic": "Hub",
  "heroDescription": "One polished home for advisor links, company resources, training materials, documents, and time-sensitive updates.",
  "announcementActive": true,
  "announcementText": "Welcome to the Advisor Hub. Use this page as your single starting point for tools, resources, and company updates."
};

let NOTIFICATIONS = [
  {
    "active": true,
    "priority": "high",
    "title": "Advisor Meeting",
    "message": "Meeting in the main office today at 10:00 AM. Use the meeting link below if you are joining remotely.",
    "linkText": "Open Meeting Link",
    "url": "PASTE_MEETING_LINK_HERE",
    "expires": ""
  },
  {
    "active": true,
    "priority": "normal",
    "title": "New Advisor Hub Draft",
    "message": "This is the first draft of the new Advisor Hub. Please send feedback on missing links or sections that should be added.",
    "linkText": "Send Feedback",
    "url": "mailto:tyler@peachtreetc.com?subject=Advisor%20Hub%20Feedback",
    "expires": ""
  }
];

let QUICK_LINKS = [
  {
    "label": "MoxiEngage",
    "desc": "Open CRM, client management, and advisor engagement tools.",
    "icon": "👥",
    "type": "CRM",
    "url": "PASTE_LINK_HERE",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "FMLS",
    "desc": "Access MLS tools, listings, and market data.",
    "icon": "🏠",
    "type": "MLS",
    "url": "PASTE_LINK_HERE",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "OneHome",
    "desc": "Open OneHome resources and client-facing listing tools.",
    "icon": "🔎",
    "type": "Portal",
    "url": "PASTE_LINK_HERE",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "Google Drive",
    "desc": "Access shared company folders, listing photos, and advisor resources.",
    "icon": "📁",
    "type": "Drive",
    "url": "PASTE_LINK_HERE",
    "section": "Company Resources",
    "isNew": false
  },
  {
    "label": "Listing Photos Upload",
    "desc": "Upload or access listing media in the shared Drive workflow.",
    "icon": "📸",
    "type": "Upload",
    "url": "PASTE_LINK_HERE",
    "section": "Company Resources",
    "isNew": true
  },
  {
    "label": "Marketing Requests",
    "desc": "Submit a marketing request or access approved marketing workflows.",
    "icon": "✨",
    "type": "Request",
    "url": "PASTE_LINK_HERE",
    "section": "Company Resources",
    "isNew": false
  },
  {
    "label": "Text Request",
    "desc": "Open Text Request for advisor texting and client communication workflows.",
    "icon": "💬",
    "type": "Communication",
    "url": "PASTE_LINK_HERE",
    "section": "Support & Communication",
    "isNew": false
  },
  {
    "label": "Email Quarantine",
    "desc": "Review held messages and release legitimate email when needed.",
    "icon": "🛡️",
    "type": "Security",
    "url": "PASTE_LINK_HERE",
    "section": "Support & Communication",
    "isNew": false
  },
  {
    "label": "Email Signature Help",
    "desc": "Quick help for WiseStamp / Outlook signature issues.",
    "icon": "✉️",
    "type": "Help",
    "url": "PASTE_LINK_HERE",
    "section": "Support & Communication",
    "isNew": false
  },
  {
    "label": "IT Support",
    "desc": "Request help with email, access, passwords, devices, or advisor tools.",
    "icon": "🧰",
    "type": "Support",
    "url": "mailto:tyler@peachtreetc.com?subject=Advisor%20Support%20Request",
    "section": "Support & Communication",
    "isNew": false
  }
];

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
