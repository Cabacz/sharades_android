# Sharades — Hádej slovo

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
