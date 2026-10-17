# Sharades – Party Challenge (GitHub Pages)

## Struktura
- `index.html` + `landing.css`: samostatná úvodní stránka. Herní aplikaci nepřepisuje.
- `menu/index.html`, `menu/styles.css`, `menu/app.js`: samostatné herní menu a SPA pro nastavení, kategorii, AI generátor, hráče/avatary, statistiky, úspěchy a samotnou hru.
- `assets/characters.png`: hlavní trojice postav (muž, žena a holčička), s jemnou CSS animací.
- `assets/characters/character-spritesheet-reference.png`: původní referenční sprite sheet.
- `assets/references/`: předchozí grafické reference a screenshoty.

## Nahrání na GitHub
1. Stáhni a rozbal ZIP.
2. V repozitáři `Cabacz/sharades_android` zvol **Add file → Upload files**.
3. Nahraj obsah rozbalené složky do kořene repozitáře, zachovej adresáře `menu/` a `assets/`.
4. Potvrď commit. V **Settings → Pages** nastav publikování z větve `main` a kořene (`/`).
5. Po nasazení otevři `https://cabacz.github.io/sharades_android/`.

## Hra a stav funkcí
Vestavěné kategorie a herní kola fungují bez serveru. Hráči, kategorie, nastavení a statistiky se ukládají do `localStorage` daného prohlížeče. AI generátor vyžaduje nasazenou Supabase Edge Function `generate-words`, která vrací `{ "words": ["slovo", ...] }`. Ve webovém klientu používej pouze veřejný anon/publishable klíč. Nikdy sem nedávej `service_role` ani OpenAI tajný klíč.

## Kontrola
Tento balíček zachovává původní úvodní stránku jako samostatný soubor a umisťuje kompletní herní aplikaci do `menu/`. Grafické reference jsou přiložené v `assets/references/`; obrázek postav je animován pomocí CSS (jemný pohyb celého obrázku, nikoli jednotlivých kloubů postav). Před vydáním otestuj všechny obrazovky na cílovém telefonu a funkci AI po připojení Supabase.
