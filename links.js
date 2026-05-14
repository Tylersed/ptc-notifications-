/* My Peachtree Portal advisor links. Edit this file for main homepage link cards. */

let QUICK_LINKS = [
  {
    "label": "AppFiles",
    "desc": "Compliance system for transaction documents, file management, and transaction review.",
    "icon": "\ud83d\udcc2",
    "type": "Compliance System",
    "url": "https://login.appfiles.com/login",
    "section": "Core Tools",
    "isNew": false,
    "featured": false
  },
  {
    "label": "Peachtree Portal",
    "desc": "Open Peachtree Portal for listing workflows.",
    "icon": "\ud83e\udd81",
    "type": "Listing Management",
    "url": "https://mypeachtreeportal.com/dashboard",
    "section": "Core Tools",
    "isNew": false,
    "featured": false
  },
  {
    "label": "Your Business at a Glance",
    "desc": "Click to view the summary view of your summary report at a glance.",
    "icon": "\ud83d\udcca",
    "type": "Reports",
    "url": "https://mypeachtreeportal.com/insight/agent-net-summary",
    "section": "Reports",
    "isNew": false,
    "featured": false
  },
  {
    "label": "MoxiWorks",
    "desc": "Open MoxiWorks tools, ActivePipe, Engage, Promote, Marketing Center, and the company directory.",
    "icon": "\ud83d\udc65",
    "type": "MoxiWorks",
    "url": "",
    "section": "Core Tools",
    "isNew": false,
    "featured": false,
    "children": [
      {
        "label": "MoxiWorks Dashboard",
        "desc": "Open the main MoxiWorks dashboard.",
        "icon": "\ud83c\udfe0",
        "type": "Dashboard",
        "url": "https://my.moxiworks.com/profile",
        "section": "MoxiWorks"
      },
      {
        "label": "ActivePipe",
        "desc": "Open ActivePipe for email marketing and campaigns.",
        "icon": "\ud83d\udce7",
        "type": "Email Marketing",
        "url": "https://live.activepipe.com/dashboard",
        "section": "MoxiWorks"
      },
      {
        "label": "MoxiEngage",
        "desc": "Open MoxiEngage for CRM and contact management.",
        "icon": "\ud83e\udd1d",
        "type": "CRM",
        "url": "https://engage.moxiworks.com/manager/dashboard",
        "section": "MoxiWorks"
      },
      {
        "label": "Marketing Center",
        "desc": "Open the marketing center for designs and marketing materials.",
        "icon": "\ud83c\udfa8",
        "type": "Marketing",
        "url": "https://marketing.imprev.net/ui/?cssName=default.css#home",
        "section": "MoxiWorks"
      },
      {
        "label": "MoxiPromote",
        "desc": "Open MoxiPromote for listing promotion tools.",
        "icon": "\ud83d\udce3",
        "type": "Promote",
        "url": "https://promote.moxiworks.com/#/dashboard",
        "section": "MoxiWorks"
      },
      {
        "label": "Moxi Directory",
        "desc": "Open the Moxi company directory.",
        "icon": "\ud83d\udc65",
        "type": "Directory",
        "url": "https://base.moxiworks.com/directory",
        "section": "MoxiWorks"
      }
    ]
  },
  {
    "label": "Your Email",
    "desc": "Peachtree Town and Country email in Outlook on the web.",
    "icon": "\u2709\ufe0f",
    "type": "Email",
    "url": "https://outlook.cloud.microsoft/mail",
    "section": "Core Tools",
    "isNew": false,
    "featured": false
  },
  {
    "label": "FMLS / Remine",
    "desc": "Access FMLS and Remine login tools for listings and MLS workflows.",
    "icon": "\ud83c\udfe0",
    "type": "MLS",
    "url": "https://firstmls-login.sso.remine.com/login?state=hKFo2SBNMnQ3bnlPTHZRUFpQeVhkQmdJWk5URVk2b0NnV3ZHbqFupWxvZ2luo3RpZNkgY291VzJSUlBORjdYb1VBVmcyOGtmcTlVT1lmaGR0Q0ujY2lk2SBNbFllZlBvUjV6dFpkb3lhdVpSQjU0T2RLek1JRFZLSg&client=MlYefPoR5ztZdoyauZRB54OdKzMIDVKJ&protocol=oauth2&scope=openid%20profile%20email&redirect_uri=https%3A%2F%2Ffirstmls.sso.remine.com%2Fcallback&audience=https%3A%2F%2Fsso-dashboard-api%2F&response_type=code&response_mode=query&nonce=THBuQ1lFVmlmQ003MVFDVVllY3NzNVhFYUV1Vi44a2hPNEQ3dVRkRE5WTQ%3D%3D&code_challenge=5Uo-Hxyh4LfTKwLejZV2QYctSP3NBGySROxo-YqOF4Y&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMi4zLjAifQ%3D%3D#signin",
    "section": "MLS & Real Estate",
    "isNew": false,
    "featured": false
  },
  {
    "label": "Georgia MLS",
    "desc": "Open Georgia MLS for GAMLS access and real estate marketplace tools.",
    "icon": "\ud83c\udfe1",
    "type": "MLS",
    "url": "https://www.gamls.com/",
    "section": "MLS & Real Estate",
    "isNew": false,
    "featured": false
  },
  {
    "label": "GSCCCA / Warranty Deed",
    "desc": "Access legal descriptions, warranty deed title search, and closing attorney request options.",
    "icon": "\u2696\ufe0f",
    "type": "Legal Descriptions",
    "section": "MLS & Real Estate",
    "isNew": false,
    "children": [
      {
        "label": "Legal Description Search",
        "desc": "Open GSCCCA for legal description and warranty deed title research.",
        "icon": "\ud83d\udd0e",
        "type": "Legal Descriptions",
        "url": "https://www.gsccca.org/search",
        "loginAssist": true,
        "loginHint": "Login credentials are available below. Copy the username and password, then open the GSCCCA search page.",
        "loginUsername": "townandcountry",
        "loginPassword": "Peachtree1231!"
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
    ],
    "featured": false
  },
  {
    "label": "CompFlow",
    "desc": "Open CompFlow for appraisal database access and workflow support.",
    "icon": "\ud83e\uddfe",
    "type": "Appraisal Database",
    "url": "https://app.compflo.com/login/authenticate",
    "section": "Core Tools",
    "isNew": false,
    "featured": false,
    "loginAssist": true,
    "loginHint": "Login credentials are available below. Copy the username and password, then open the login page.",
    "loginUsername": "bill@peachtree.com",
    "loginPassword": "RollTide#1"
  },
  {
    "label": "Advisor Resource Center",
    "desc": "Open the full Advisor Resource Center for brand files, guides, training, documents, and company materials.",
    "icon": "\ud83d\udcda",
    "type": "Resources",
    "url": "https://tylersed.github.io/PTC-notes/",
    "section": "Company Resources",
    "isNew": false,
    "featured": false
  },
  {
    "label": "Support Concierge",
    "desc": "Choose the right Peachtree contact before sending a support request.",
    "icon": "\ud83d\udedf",
    "type": "Support Concierge",
    "url": "https://outlook.cloud.microsoft/mail/deeplink/compose?to=amy%40peachtreetc.com&subject=Advisor+General+Support+Request&body=Hi%2C%0A%0AI+need+help+with%3A%0A%0A",
    "action": "support",
    "section": "Support",
    "isNew": false,
    "featured": false
  }
];
