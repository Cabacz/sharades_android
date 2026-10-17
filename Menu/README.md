# Šarády – Hádej slovo / Sharades Party Challenge

Mobilní webová hra (PWA) připravená pro GitHub Pages. Rozhraní používá tmavé neonové barvy a dodanou animovanou ilustraci muže, ženy a holčičky.

## Obrazovky
- **Hrát** – časovač, karty slov, skóre pro 2–4 týmy, pauza, přeskočení a body.
- **Kategorie** – výběr vestavěných kategorií a vlastních slov.
- **Vlastní hra** – volba herního režimu, času, počtu týmů, týmových názvů a počtu kol.
- **AI generátor** – volání Supabase Edge Function `generate-words` pro vlastní sadu slov.
- **Kolo náhody** – losování režimu, času, kategorií a počtu týmů.
- **Hráči a avatary** – vytvoření/smazání hráčů a výběr avataru.
- **Statistiky a úspěchy** – lokálně uložený přehled odehraných her, skóre a odznaků.
- **Nastavení** – jazyk, výchozí čas, zvuk, vibrace a Supabase připojení.

## AI generátor
AI vyžaduje existující a nasazenou Supabase Edge Function `generate-words`, která přijímá JSON s `language`, `topic`, `categories`, `difficulty`, `count` a `familyMode`, a vrací `{ "words": ["slovo", {"word":"slovo"}] }`. Ulož do aplikace jen veřejný Supabase anon/publishable klíč. **Nikdy nevkládej service-role nebo OpenAI API klíč do frontendového kódu.** Serverová funkce musí ověřovat požadavky a pracovat s tajným klíčem bezpečně.

## Nahrání do GitHubu
1. Otevři `Cabacz/sharades_android`.
2. Stáhni ZIP a rozbal ho.
3. Nahraj obsah složky `Sharades_release` do kořene repozitáře a nahraď odpovídající soubory.
4. Zachovej případný adresář `.github/` z původního repozitáře, aby se nevymazalo nasazení GitHub Pages.
5. Commitni změny a zkontroluj kartu Actions.
6. Otevři web na telefonu. Service worker používá novou cache `sharades-v1.0.1`.

Vlastní slova, hráči, nastavení a statistiky se zatím ukládají lokálně v prohlížeči konkrétního zařízení.
