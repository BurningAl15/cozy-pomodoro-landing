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

## Lighthouse Scores

| | Mobile | Desktop |
|--|--------|---------|
| 🟢 Performance | **100** | **99** |
| 🟢 Accessibility | **95** | **95** |
| 🟢 Best Practices | **100** | **100** |
| 🟢 SEO | **100** | **100** |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing (Hero, Features, Theme Store, FAQ) |
| `/privacy` | Privacy Policy (8 locales) |
| `/terms` | Terms of Service |
| `/rating` | Age Rating explanation |
| `/credits` | Music credits / attribution |
| `/support` | Help center |

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
