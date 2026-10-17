# Sharades - Party Challenge

Mobile-first installable Progressive Web App (PWA) for party charades, built with HTML, CSS and JavaScript.

## Features
- Czech and English interface and word decks.
- Dark/purple responsive design with animated hero.
- 2–4 teams; 30–120 second rounds; pause, skip, correct, scoring and results.
- Categories: animals, movies, sports, jobs, food, everyday actions and nature.
- Add/remove custom words; saved locally on device.
- PWA manifest, icon and service-worker cache for offline play after first successful load.
- Optional Supabase Edge Function integration for AI-generated words.

## Publish with GitHub Pages
1. Open **Settings → Pages**.
2. Choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. Open the Pages URL once it is available.
4. On Android Chrome use **Install app** or **Add to Home screen**.

## AI words (optional)
In the app settings, enter the Supabase project URL and a **public anon/publishable key**. The frontend calls `/functions/v1/generate-words` with language, categories, difficulty, count and family-mode options. The function should return JSON containing a `words` array of strings or objects with a `word` or `text` property.

Never expose a service-role key or AI provider secret in the frontend. The Edge Function must enforce its own authentication and request validation. Adjust the request schema in `app.js` if your existing function expects different fields.

This is a fresh implementation and does not include proprietary source/assets from the old Rezone project. AI generation requires a working Supabase function; the game itself works without AI.


## Neon update package
This update restores a brighter neon/cartoon visual direction, adds selectable game-mode cards, team-name fields, and double-point / sudden-death behavior while preserving the existing mobile PWA structure.
Upload the updated files in the repository root. GitHub Pages deploys from the configured Actions workflow.
AI word generation remains optional and requires a working Supabase Edge Function plus a public anon/publishable key configured inside app settings. Never place a service-role secret in frontend code.


## Obnovený původní vizuální styl

Tato verze přidává neonové uvítání s volbou češtiny/angličtiny při prvním spuštění a čtyřkrokový obrázkový tutoriál s tlačítky Zpět, Další a Přeskočit. Volba jazyka i dokončení úvodního průchodu se ukládají v prohlížeči. Ilustrace v tutoriálu jsou odvozené z dodaného storyboardu.

Po nahrání souborů do kořene GitHub repozitáře zkontrolujte, že GitHub Pages workflow doběhl úspěšně. Pro opětovné zobrazení úvodního průchodu smažte v prohlížeči položku `sh-onboarded` z localStorage.


## Vizuální identita a úvodní průchod

Název aplikace je **Sharades - Party Challenge**. Úvodní obrazovka nabízí češtinu/angličtinu při prvním spuštění; po volbě jazyka následuje pět obrazovek onboarding průvodce (čtyři vysvětlující kroky a závěrečná obrazovka) v neonovém kresleném stylu. Volba jazyka a dokončení průvodce se ukládají lokálně.


## Grafické podklady / Artwork references

The `assets/reference/` folder contains generated visual reference boards for the intended neon-cartoon direction and bilingual Czech/English screen design. They are design references, not individual production UI components. The app currently uses the separate `assets/tutorial-*.webp` illustrations in its onboarding screens.

Složka `assets/reference/` obsahuje referenční návrhy grafiky pro jednotný neonový kreslený styl. Jde o podklady pro další vývoj, nikoliv o jednotlivé interaktivní obrazovky. Tutoriál aplikace používá samostatné obrázky `assets/tutorial-*.webp`.

## Upload to GitHub

1. Download and extract the ZIP.
2. Open your repository `Cabacz/sharades_android`.
3. Upload the **contents** of the `sharades_android` folder into the repository root, keeping the `assets/` and `.github/` folders. Replace files with the same names.
4. Commit the changes and check **Actions** for the Pages deployment workflow.
5. Reload the site on your phone. If an older version remains, close the installed PWA and reload the site after the service worker updates.

## Nahrání na GitHub

1. Stáhni ZIP a rozbal ho.
2. Otevři repozitář `Cabacz/sharades_android`.
3. Nahraj **obsah složky** `sharades_android` do kořene repozitáře. Zachovej složky `assets/` a `.github/` a nahraď soubory se stejnými názvy.
4. Potvrď změny (Commit changes) a v části **Actions** zkontroluj nasazení GitHub Pages.
5. Otevři web v telefonu znovu. Pokud se stále zobrazuje stará verze, zavři nainstalovanou PWA a znovu načti web po aktualizaci service workeru.
