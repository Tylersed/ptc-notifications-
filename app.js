const CONFIG = {
  $ClientID    = "44da37f2-7583-47aa-a316-7a734bd35dcd",
$TenantID    = "bcfdd46a-c2dd-4e71-a9f8-5cd31816ff9e",
  loginRequest: { scopes: ["User.Read"] },
  apps: [
    { id: "outlook", name: "Outlook", category: "Communication", href: "https://outlook.office.com/mail/", description: "Email, calendar, and day-to-day communication for the team.", access: "Microsoft sign-in", login: "Password manager / SSO", badge: "Core" },
    { id: "slack", name: "Slack", category: "Communication", href: "https://app.slack.com/client/", description: "Team messaging, quick collaboration, and internal conversations.", access: "Workspace login", login: "Saved password", badge: "Fast reply" },
    { id: "hubspot", name: "HubSpot", category: "Marketing", href: "https://app.hubspot.com/", description: "Marketing, contacts, campaigns, and customer-facing workflows.", access: "HubSpot login", login: "Saved password", badge: "Marketing" },
    { id: "monday", name: "Monday", category: "Operations", href: "https://monday.com/", description: "Work tracking, task visibility, and team planning.", access: "Monday login", login: "Saved password", badge: "Operations" },
    { id: "drive", name: "Google Drive", category: "Files", href: "https://drive.google.com/drive/my-drive", description: "Shared folders, listing photos, and team documents.", access: "Google Workspace", login: "Saved password", badge: "Files" },
    { id: "canva", name: "Canva", category: "Marketing", href: "https://www.canva.com/", description: "Design, ad creative, and branded graphics.", access: "Canva login", login: "Saved password", badge: "Creative" },
    { id: "textrequest", name: "Text Request", category: "Communication", href: "https://app.textrequest.com/", description: "Shared texting and front-line advisor communication.", access: "Text Request login", login: "Saved password", badge: "Support" },
    { id: "moxi", name: "MoxiWorks", category: "Operations", href: "https://login.moxiworks.com/", description: "Brokerage workflow tools and advisor systems.", access: "Moxi login", login: "Saved password", badge: "Brokerage" },
    { id: "appfiles", name: "AppFiles", category: "Operations", href: "https://appfiles.com/", description: "Transaction files, documents, and brokerage workflows.", access: "AppFiles login", login: "Saved password", badge: "Transactions" },
    { id: "brokerage-engine", name: "Brokerage Engine", category: "Operations", href: "https://login.brokerageengine.com/", description: "Brokerage back-office workflows and agent operations.", access: "Brokerage Engine login", login: "Saved password", badge: "Back office" },
    { id: "m365-admin", name: "Microsoft 365 Admin", category: "Admin", href: "https://admin.microsoft.com/", description: "Admin center for Microsoft 365, users, and tenant management.", access: "Microsoft admin", login: "SSO", badge: "Admin" },
    { id: "google-admin", name: "Google Admin", category: "Admin", href: "https://admin.google.com/", description: "Google Workspace administration and account management.", access: "Google admin", login: "Saved password", badge: "Admin" }
  ]
};
const FAVORITES_KEY = "ptc_app_hub_favorites";
const LAUNCHES_KEY = "ptc_app_hub_recent_launches";
let msalApp;
let activeAccount = null;
let activeCategory = "All";
let currentSearch = "";
const $ = (id) => document.getElementById(id);
const getFavorites = () => { try { return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []; } catch { return []; } };
const saveFavorites = (ids) => localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
const getLaunches = () => { try { return JSON.parse(localStorage.getItem(LAUNCHES_KEY)) || {}; } catch { return {}; } };
const saveLaunches = (obj) => localStorage.setItem(LAUNCHES_KEY, JSON.stringify(obj));
const isSignedIn = () => !!activeAccount;
function setSignedInState(signedIn){
  $("btnSignOut").disabled = !signedIn;
  $("btnOpenFavorites").disabled = !signedIn;
  $("appSearch").disabled = !signedIn;
  $("workspace").classList.toggle("locked", !signedIn);
  $("hubStatus").textContent = signedIn ? "Ready" : "Locked";
  $("hubSubStatus").textContent = signedIn ? "Open the tools you need. Each app signs in separately using saved passwords or SSO." : "Sign in to reveal the app workspace.";
  $("resultSummary").textContent = signedIn ? "Use search or category filters to launch apps." : "Sign in to view the workspace.";
}
function updateUserUI(){ $("driverName").textContent = activeAccount?.name || "—"; $("driverEmail").textContent = activeAccount?.username || "—"; }
function categories(){ return ["All", ...new Set(CONFIG.apps.map(app => app.category))]; }
function renderFilters(){
  const wrap = $("categoryFilters"); wrap.innerHTML = "";
  categories().forEach((category) => {
    const btn = document.createElement("button");
    btn.className = `filterBtn${category === activeCategory ? " active" : ""}`;
    btn.textContent = category; btn.disabled = !isSignedIn();
    btn.addEventListener("click", () => { activeCategory = category; renderFilters(); renderApps(); });
    wrap.appendChild(btn);
  });
}
function launchApp(appId){
  const appObj = CONFIG.apps.find(item => item.id === appId); if (!appObj) return;
  const launches = getLaunches(); launches[appId] = new Date().toISOString(); saveLaunches(launches);
  window.open(appObj.href, "_blank", "noopener,noreferrer"); renderApps();
}
function toggleFavorite(appId){ const set = new Set(getFavorites()); if (set.has(appId)) set.delete(appId); else set.add(appId); saveFavorites([...set]); updateFavoriteCount(); renderApps(); }
function updateFavoriteCount(){ $("favoriteCount").textContent = String(getFavorites().length); }
function matchesFilters(appObj){
  const inCategory = activeCategory === "All" || appObj.category === activeCategory;
  const needle = currentSearch.trim().toLowerCase();
  if (!needle) return inCategory;
  const haystack = [appObj.name, appObj.category, appObj.description, appObj.badge, appObj.access, appObj.login].join(" ").toLowerCase();
  return inCategory && haystack.includes(needle);
}
function formatLastLaunch(appId){ const raw = getLaunches()[appId]; if (!raw) return "Not launched yet"; const date = new Date(raw); return Number.isNaN(date.getTime()) ? "Not launched yet" : date.toLocaleString(); }
function cardTemplate(appObj){
  const isFavorite = getFavorites().includes(appObj.id);
  const article = document.createElement("article"); article.className = "appCard";
  article.innerHTML = `<div class="appTop"><div><h5 class="appName">${appObj.name}</h5><p class="appCategory">${appObj.category}</p></div><div class="badgeRow"><span class="badge">${appObj.badge}</span></div></div><p class="appDescription">${appObj.description}</p><div class="appMeta"><div class="metaBox"><span>Access</span><strong>${appObj.access}</strong></div><div class="metaBox"><span>Login flow</span><strong>${appObj.login}</strong></div><div class="metaBox"><span>Hub action</span><strong>Open in new tab</strong></div><div class="metaBox"><span>Last launch</span><strong>${formatLastLaunch(appObj.id)}</strong></div></div><div class="appActions"><button class="btn btn-primary launchBtn">Open ${appObj.name}</button><button class="pinBtn ${isFavorite ? "pinned" : ""}">${isFavorite ? "Pinned" : "Pin favorite"}</button></div>`;
  article.querySelector(".launchBtn").addEventListener("click", () => launchApp(appObj.id));
  article.querySelector(".pinBtn").addEventListener("click", () => toggleFavorite(appObj.id));
  return article;
}
function renderApps(){
  const signedIn = isSignedIn();
  const visibleApps = CONFIG.apps.filter(matchesFilters);
  const favorites = CONFIG.apps.filter(appObj => getFavorites().includes(appObj.id)).filter(matchesFilters);
  $("appGrid").innerHTML = ""; $("favoriteGrid").innerHTML = "";
  if (!signedIn){ $("favoritesWrap").hidden = true; $("emptyState").hidden = true; return; }
  visibleApps.forEach(appObj => $("appGrid").appendChild(cardTemplate(appObj)));
  $("favoritesWrap").hidden = favorites.length === 0; favorites.forEach(appObj => $("favoriteGrid").appendChild(cardTemplate(appObj)));
  const hasApps = visibleApps.length > 0; $("emptyState").hidden = hasApps;
  $("resultSummary").textContent = hasApps ? `${visibleApps.length} app${visibleApps.length === 1 ? "" : "s"} shown${currentSearch ? ` for “${currentSearch}”` : ""}.` : `No apps found${currentSearch ? ` for “${currentSearch}”` : ""}.`;
}
function openFavorites(){ if (!isSignedIn()) return; getFavorites().forEach((id, index) => setTimeout(() => launchApp(id), index * 180)); }
async function signIn(){ try { const response = await msalApp.loginPopup(CONFIG.loginRequest); activeAccount = response.account; msalApp.setActiveAccount(activeAccount); applySignedInExperience(); } catch (error) { console.error("Sign in failed", error); $("hubStatus").textContent = "Sign-in error"; $("hubSubStatus").textContent = "Microsoft sign-in did not complete. Try again."; } }
async function signOut(){ if (!activeAccount) return; try { await msalApp.logoutPopup({ account: activeAccount, mainWindowRedirectUri: window.location.href }); } catch (error) { console.error("Sign out failed", error); } activeAccount = null; applySignedOutExperience(); }
function applySignedInExperience(){ setSignedInState(true); updateUserUI(); renderFilters(); renderApps(); }
function applySignedOutExperience(){ setSignedInState(false); updateUserUI(); renderFilters(); renderApps(); }
async function initMsal(){
  msalApp = new msal.PublicClientApplication({ auth: { clientId: CONFIG.clientId, authority: `https://login.microsoftonline.com/${CONFIG.tenantId}`, redirectUri: window.location.href }, cache: { cacheLocation: "sessionStorage", storeAuthStateInCookie: false } });
  await msalApp.initialize();
  const response = await msalApp.handleRedirectPromise().catch(() => null);
  const account = response?.account || msalApp.getActiveAccount() || msalApp.getAllAccounts()[0] || null;
  activeAccount = account; if (activeAccount) msalApp.setActiveAccount(activeAccount);
}
function bindEvents(){
  $("btnSignIn").addEventListener("click", signIn); $("heroSignIn").addEventListener("click", signIn); $("btnSignOut").addEventListener("click", signOut); $("btnOpenFavorites").addEventListener("click", openFavorites);
  $("appSearch").addEventListener("input", (event) => { currentSearch = event.target.value; renderApps(); });
}
async function boot(){ $("appCount").textContent = String(CONFIG.apps.length); updateFavoriteCount(); bindEvents(); renderFilters(); await initMsal(); if (activeAccount) applySignedInExperience(); else applySignedOutExperience(); }
boot();
