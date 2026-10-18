# Sharades! — Party Challenge (v2)

Plnohodnotná mobilní webová hra šarád připravená pro GitHub Pages. Nepotřebuje build ani instalaci balíčků.

## Nahrání do původního repozitáře
1. V GitHubu otevři `Cabacz/sharades_android` a větev `main`.
2. Udělej si zálohu, případně vytvoř nový branch před přepsáním.
3. Nahraj **obsah tohoto ZIPu do kořene repozitáře** a potvrď přepsání existujících souborů. Zachovej cesty: `index.html`, `css/`, `js/`, `assets/`, `manifest.webmanifest`, `service-worker.js`, `.nojekyll`.
4. Při přidávání složek musí být `index.html` přímo v kořeni, ne v další vnořené složce.
5. V `Settings → Pages` nastav nasazení z větve `main`, složka `/(root)`.
6. Po zveřejnění otevři stránku v Chrome na Androidu; pro offline test ji nejdřív načti online a pak zapni režim letadlo.

## Co projekt obsahuje
- Čeština a angličtina.
- Režim týmů a společná hra, čas 30–120 sekund, počet tahů, bodování a výsledky.
- Výběr kategorií, vlastní slova a nastavení rodinného režimu.
- Přidávání hráčů, týmové názvy, lokálně uložená nastavení a historie.
- Zvuk, vibrace, responzivní rozhraní, PWA manifest a service worker pro offline načítání.
- Vestavěný česko-anglický slovník.

## Důležité
- Hra funguje lokálně a nevyžaduje tajné klíče.
- Vzdálené generování přes OpenAI není v tomto releasu aktivované; AI API klíč se nikdy nesmí vložit do klientského kódu. K tomu patří serverová Supabase Edge Function a tajemství na serveru.
- Obrázky `character-reference-*.jpg` a `design-reference-ui.png` jsou uložené pouze jako designové podklady; samotná hra je používá jen pro avatarové SVG, nikoli pro obrazovku hry.
- PWA je možné otestovat bez instalace přes GitHub Pages. Nejde o nativní APK.

## Kontrola před zveřejněním
Ověř na telefonu: start → výběr kategorií → hra → správná odpověď → přeskočení → vypršení času → další tým → výsledky; dále jazyk, vlastní slova, hráči a znovu načtení offline.
