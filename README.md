# Cozy Pomodoro — Landing Page

Marketing landing page for the **Cozy Pomodoro** iOS/Android app.

🌐 **Live:** [cozy-pomodoro-landing.vercel.app](https://cozy-pomodoro-landing.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (Pages Router) |
| Language | TypeScript |
| Styling | Vanilla CSS + CSS custom properties |
| i18n | Custom `translations.ts` — 8 languages, React Context |
| Carousel | Swiper.js (EffectCards + Autoplay) |
| Icons | Lucide React |
| Deployment | Vercel (auto-deploy on push to `main`) |

## Product and release copy

The homepage's 1.5.0 section is localized in `locales/productContent.ts`. It is intentionally labeled **Coming Soon** until the release is publicly available. Build 64 is currently Android internal testing; do not describe it as a production release before both stores are verified.

The 1.5.0 copy covers iOS Live Activities, focus widgets, iOS music resume behavior, and the Android widget reliability fix. Android widget 64 passed emulator validation; physical-device confirmation is still pending. Keep this caveat in mind when preparing public campaigns.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing (Hero, Features, Theme Store, FAQ) |
| `/privacy` | Privacy Policy (8 locales) |
| `/terms` | Terms of Service |
| `/rating` | Age Rating explanation |
| `/credits` | Music credits / attribution |
| `/support` | Help center |
| `/delete-account` | Account deletion instructions |

## Supported Languages

🇺🇸 English · 🇪🇸 Español · 🇧🇷 Português · 🇩🇪 Deutsch · 🇫🇷 Français · 🇮🇹 Italiano · 🇯🇵 日本語 · 🇰🇷 한국어

## Performance Architecture

- **LCP image** (`cozy_light`) preloaded via `<link rel="preload">` in document head
- **Hero image randomization** — fixed LCP image on first paint, random image silently preloaded via `new Image()` and faded in after cache-warm (no double download penalty)
- **Google Fonts** loaded async via `media="print"` → `onLoad` swap (zero render-blocking)
- **ThemeStore images** — `loading="lazy"` with explicit `width`/`height` on all 27 images
- **JSON-LD** `SoftwareApplication` schema for Google Rich Results
- **Open Graph + Twitter Card** meta tags

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Project Structure

```
components/     # Hero, Features, ThemeStore, Footer, Layout, ...
pages/          # index.tsx, privacy, terms, rating, credits, support
locales/        # translations.ts (all 8 languages)
styles/         # globals.css
public/assets/  # carousel images, theme thumbnails, badges
```

## Related

- **App:** [`../CozyApp/`](../CozyApp/) — Flutter mobile app (iOS + Android)
- **Overview:** [`../PROJECT_OVERVIEW.md`](../PROJECT_OVERVIEW.md) — Full project documentation
- **Current app state and QA:** [`../CozyApp/docs/COZY_PRODUCT_REFERENCE_2026-10-14.md`](../CozyApp/docs/COZY_PRODUCT_REFERENCE_2026-10-14.md)
- **Verified marketing claims and post ideas:** [`../CozyApp/docs/MARKETING_FEATURES_AND_POSTS_2026-10-14.md`](../CozyApp/docs/MARKETING_FEATURES_AND_POSTS_2026-10-14.md)
