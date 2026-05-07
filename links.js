/* ═══════════════════════════════════════════════════════════════
   Peachtree Town & Country — ROAR
   ADVISOR LINKS
   ───────────────────────────────────────────────────────────────
   Edit this file when you want to change the main advisor link
   cards on the ROAR homepage.

   Notifications are now in notifications.js.
   Resource library content is in resources.js.
═══════════════════════════════════════════════════════════════ */

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
    "desc": "Open the Peachtree portal. ROAR will preserve deeper portal links after login when possible.",
    "icon": "\ud83e\udd81",
    "type": "Portal",
    "url": "https://mypeachtreeportal.com/dashboard",
    "section": "Core Tools",
    "isNew": false
  },
  {
    "label": "Peachtree Portal Deep Link Test",
    "desc": "Test ROAR smart redirect handling for deeper Peachtree Portal pages. Replace this URL later with a real portal page.",
    "icon": "🧪",
    "type": "Portal Test",
    "url": "https://mypeachtreeportal.com/marketing/691b983aafd53d14347d6ba7",
    "section": "Core Tools",
    "isNew": true
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
    "url": "https://tylersed.github.io/PTC-notes/",
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
