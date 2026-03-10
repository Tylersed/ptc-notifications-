# PTC App Hub

PTC App Hub is a single front door for staff.

## What it does
- Staff sign into the hub with Microsoft.
- The site shows all major company apps in one place.
- Clicking an app opens that platform in a new tab.
- Each platform keeps its own secure login session.
- Browser saved passwords or SSO handle the per-app sign-in experience.

## Why this version is different
This replaces the old Outlook-folder notification model.

The previous build used:
- Outlook inbox unread count
- Outlook folders for Slack / HubSpot / Monday alerts
- Microsoft Graph Mail.ReadBasic permissions

This version is intentionally simpler:
- no mapped Outlook folders
- no unread gauges
- no fake notification counts
- cleaner staff experience

## Setup
### 1) Create or reuse your Entra app registration
Use a Single-page application (SPA) redirect URI for your GitHub Pages URL.

### 2) Configure `app.js`
Set:
- `tenantId`
- `clientId`

Update the `apps` array with:
- app name
- category
- URL
- description
- access/login labels

### 3) Publish with GitHub Pages
Repo Settings -> Pages -> Deploy from branch.

## Notes
- The hub signs users into Microsoft for access to the site itself.
- App sessions are handled separately by the target platform.
- Favorites and last-launch history are stored locally in the browser.
