ROAR Clean Project With Split Data Files

Upload this structure exactly:

index.html
admin.html
resources.js
notifications.js
links.js
assets/
  ptc-nav-logo-light.png
  ptc-nav-logo-dark.png
  ptc-emblem-light.png
  ptc-emblem-dark.png

What each file does:

index.html
The main ROAR site advisors use. This controls the page layout, notifications display, advisor cards, office info, Support Concierge, mobile Outlook behavior, Apple Maps buttons, and offline link display.

resources.js
Main site settings and the resource library content. Use this for hero wording and resource/folder content.

notifications.js
Only the homepage notification cards. Use this when you want to add, remove, test, or change notifications.

links.js
Only the main advisor link cards. Use this when you want to add or change AppFiles, Peachtree Portal, MoxiWorks, Email, FMLS, ActivePipe, Advisor Resource Center, and other homepage tool links.

admin.html
The simple admin editor. It now loads and exports the split data files:
- resources.js
- notifications.js
- links.js

assets folder
Company logos and emblems used by the site.

Why this is cleaner:
- You can update notifications without touching advisor links.
- You can update advisor links without touching notifications.
- The main page functionality stays in index.html.
- The site is easier to understand and safer to edit.

Important:
If you upload this version, make sure notifications.js and links.js are in the same GitHub folder as index.html and resources.js.


Holiday theme file added:
holiday-themes.css

This file is currently neutral and does not change the website design.
It is ready for future seasonal visuals like Christmas or Halloween while keeping the normal Peachtree company theme as the default.
