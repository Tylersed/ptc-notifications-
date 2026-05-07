/* ═══════════════════════════════════════════════════════════════
   Peachtree Town & Country — ROAR
   NOTIFICATIONS
   ───────────────────────────────────────────────────────────────
   Edit this file when you want to change the notification cards
   at the top of ROAR.

   Main fields:
   active: true or false
   priority: "high", "normal", or "low"
   title: notification title
   message: notification message
   linkText / url: first button
   secondaryLinkText / secondaryUrl: optional second button
   copyText: optional custom text for the Copy Text button
═══════════════════════════════════════════════════════════════ */

let NOTIFICATIONS = [
  {
    "active": true,
    "priority": "high",
    "title": "Meeting Test at Alpharetta · 1:00 PM",
    "message": "Test notification for the North Atlanta Market Center in Alpharetta at 1:00 PM. Address: 2325 Lakeview Parkway, Suite 375, Alpharetta, Georgia 30009.",
    "linkText": "Open Test Link",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "secondaryLinkText": "Directions",
    "secondaryUrl": "https://maps.apple.com/?q=2325+Lakeview+Parkway+Suite+375+Alpharetta+GA+30009",
    "copyText": "Meeting Test at Alpharetta \u00b7 1:00 PM\nNorth Atlanta Market Center\n2325 Lakeview Parkway, Suite 375\nAlpharetta, Georgia 30009\nTest link: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "expires": ""
  },
  {
    "active": true,
    "priority": "high",
    "title": "Welcome to the Lion’s Den",
    "message": "ROAR is the quick-start page for company links, tools, support, and important updates.",
    "linkText": "Open Advisor Resource Center",
    "url": "https://tylersed.github.io/PTC-notes/",
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
