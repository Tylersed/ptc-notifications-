/* ═══════════════════════════════════════════════════════════════
   Peachtree Town & Country — ROAR
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
  "siteName": "ROAR",
  "navLabel": "ROAR",
  "eyebrow": "Peachtree Town & Country — Advisor Access",
  "heroTitle": "ROAR",
  "heroItalic": "Advisor Access",
  "heroDescription": "A polished starting point for advisor tools, support requests, company updates, and daily resources.",
  "announcementActive": true,
  "announcementText": "Welcome to the Lion’s Den. Use this page as your starting point for advisor tools, updates, and support."
};

let NOTIFICATIONS = [
  {
    "active": true,
    "priority": "high",
    "title": "Welcome to the Lion’s Den",
    "message": "ROAR is the quick-start page for company links, tools, support, and important updates.",
    "linkText": "Open Advisor Resource Center",
    "url": "https://tylersed.github.io/ptc-notifications-/",
    "expires": ""
  },
  {
    "active": true,
    "priority": "normal",
    "title": "Need Help?",
    "message": "Use the Support Concierge card below to choose the right contact before sending a request.",
    "linkText": "Open Support Concierge",
    "url": "https://outlook.cloud.microsoft/mail/deeplink/compose?to=amy%40peachtreetc.com&subject=Advisor+General+Support+Request&body=Hi%2C%0A%0AI+need+help+with%3A%0A%0A",
    "expires": ""
  }
];

let QUICK_LINKS = [
  {
    "label": "AppFiles",
    "desc": "Access AppFiles for transaction documents and file management.",
    "icon": "\ud83d\udcc2",
    "type": "Documents",
    "url": "https://login.appfiles.com/login",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "Peachtree Portal",
    "desc": "Open the Peachtree advisor portal dashboard.",
    "icon": "\ud83e\udd81",
    "type": "Portal",
    "url": "https://mypeachtreeportal.com/dashboard",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "MoxiWorks",
    "desc": "Open MoxiWorks through the Peachtree portal single sign-on path.",
    "icon": "\ud83d\udc65",
    "type": "CRM",
    "url": "https://mypeachtreeportal.com/saml/moxiworks/",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "Email",
    "desc": "Open your Peachtree email in Outlook on the web.",
    "icon": "\u2709\ufe0f",
    "type": "Email",
    "url": "https://outlook.cloud.microsoft/mail",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "FMLS / Remine",
    "desc": "Access FMLS and Remine login tools for listings and MLS workflows.",
    "icon": "\ud83c\udfe0",
    "type": "MLS",
    "url": "https://firstmls-login.sso.remine.com/login?state=hKFo2SBNMnQ3bnlPTHZRUFpQeVhkQmdJWk5URVk2b0NnV3ZHbqFupWxvZ2luo3RpZNkgY291VzJSUlBORjdYb1VBVmcyOGtmcTlVT1lmaGR0Q0ujY2lk2SBNbFllZlBvUjV6dFpkb3lhdVpSQjU0T2RLek1JRFZLSg&client=MlYefPoR5ztZdoyauZRB54OdKzMIDVKJ&protocol=oauth2&scope=openid%20profile%20email&redirect_uri=https%3A%2F%2Ffirstmls.sso.remine.com%2Fcallback&audience=https%3A%2F%2Fsso-dashboard-api%2F&response_type=code&response_mode=query&nonce=THBuQ1lFVmlmQ003MVFDVVllY3NzNVhFYUV1Vi44a2hPNEQ3dVRkRE5WTQ%3D%3D&code_challenge=5Uo-Hxyh4LfTKwLejZV2QYctSP3NBGySROxo-YqOF4Y&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMi4zLjAifQ%3D%3D#signin",
    "section": "MLS & Real Estate",
    "isNew": false
  },
  {
    "label": "Georgia MLS",
    "desc": "Open Georgia MLS for GAMLS access and real estate marketplace tools.",
    "icon": "\ud83c\udfe1",
    "type": "MLS",
    "url": "https://www.gamls.com/",
    "section": "MLS & Real Estate",
    "isNew": false
  },
  {
    "label": "GSCCCA / Warranty Deed",
    "desc": "Choose a warranty deed title search or send a request to a closing attorney partner.",
    "icon": "\u2696\ufe0f",
    "type": "Title Search",
    "section": "MLS & Real Estate",
    "isNew": false,
    "children": [
      {
        "label": "Warranty Deed Title Search",
        "desc": "Open the GSCCCA search page for self-service warranty deed title search.",
        "icon": "\ud83d\udd0e",
        "type": "Search",
        "url": "https://www.gsccca.org/search"
      },
      {
        "label": "Campbell & Brannon Request",
        "desc": "Email Campbell & Brannon for a warranty deed request.",
        "icon": "\u2709\ufe0f",
        "type": "Email Request",
        "url": "https://outlook.cloud.microsoft/mail/deeplink/compose?to=Attorney%40campbellandbrannon.com&subject=Warranty+Deed+Request&body=Hi%2C%0A%0AI+need+help+with+a+warranty+deed+request+for%3A%0A%0AProperty+Address%3A%0ACounty%3A%0AClient+Name%3A%0A%0AThank+you%2C"
      },
      {
        "label": "Ganek Request",
        "desc": "Email Ganek for a warranty deed request.",
        "icon": "\u2709\ufe0f",
        "type": "Email Request",
        "url": "https://outlook.cloud.microsoft/mail/deeplink/compose?to=goldenteam%40ganekpc.com&subject=Warranty+Deed+Request&body=Hi%2C%0A%0AI+need+help+with+a+warranty+deed+request+for%3A%0A%0AProperty+Address%3A%0ACounty%3A%0AClient+Name%3A%0A%0AThank+you%2C"
      }
    ]
  },
  {
    "label": "ActivePipe",
    "desc": "Open ActivePipe for marketing emails, campaigns, and advisor marketing tools.",
    "icon": "\ud83d\udce3",
    "type": "Marketing",
    "url": "https://live.activepipe.com/dashboard",
    "section": "Marketing",
    "isNew": false
  },
  {
    "label": "Advisor Resource Center",
    "desc": "Open the full Advisor Resource Center for brand files, guides, training, documents, and company materials.",
    "icon": "\ud83d\udcda",
    "type": "Resources",
    "url": "https://tylersed.github.io/ptc-notifications-/",
    "section": "Company Resources",
    "isNew": true
  },
  {
    "label": "Support Concierge",
    "desc": "Choose the right Peachtree contact before sending a support request.",
    "icon": "🛟",
    "type": "Support Concierge",
    "url": "https://outlook.cloud.microsoft/mail/deeplink/compose?to=amy%40peachtreetc.com&subject=Advisor+General+Support+Request&body=Hi%2C%0A%0AI+need+help+with%3A%0A%0A",
    "action": "support",
    "section": "Support",
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
