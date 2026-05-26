# Francesco Cambareri — Vintage Calisthenics Site

Personal website for **Francesco Cambareri**, calisthenics personal trainer.
Visual identity inspired by the @vintage_calisthenics Instagram archive:
sepia tones, cream paper background, classical serif typography, modern sans
accents.

## Tech

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom sepia / cream / burgundy palette
- **next-intl** for i18n (Italian default, English / German / French scaffolded)
- Public-domain vintage imagery from Wikimedia Commons, Wellcome Collection,
  Library of Congress + Francesco's own Instagram archive

## Run

```bash
cd francesco-website
npm install
npm run dev
```

Open <http://localhost:3000> — middleware redirects to `/it`.

## Pages

| Route             | What                                                    |
|-------------------|---------------------------------------------------------|
| `/it`             | Homepage — hero, manifesto, vintage gallery w/ filters |
| `/it/about`       | Chi sono — Francesco's bio                              |
| `/it/services`    | Three training tiers (online / in-person / hybrid)      |
| `/it/gallery`     | Full archive — Cambareri posts + historical PD images   |
| `/it/contact`     | Form + direct contact info                              |
| `/en/*`, `/de/*`, `/fr/*` | Same routes, other languages              |

## i18n

Italian strings are filled out in `messages/it.json`. English keys are
already in place (`messages/en.json`); `de.json` and `fr.json` currently
copy the English content — Francesco can translate them in place. All
locale keys are identical, so missing translations fall back gracefully
during build.

## Where things live

```
app/[locale]/        # All pages, scoped by locale
components/          # SiteHeader, SiteFooter, VintageGallery, ContactForm, LanguageSwitcher
lib/gallery.ts       # Gallery data — image paths, Italian captions, era stamps
messages/            # next-intl JSON files (it/en/de/fr)
public/images/
  francesco-ig/      # Francesco's Instagram posts (unzipped, renamed)
  vintage/           # Public-domain archive, organised by category
public/brand/        # Logo + favicon source
```

## Replacing placeholders

Edit `messages/it.json` and look for `contact.placeholderValues.*`:

```json
"placeholderValues": {
  "email": "francesco@example.com",
  "instagram": "@francesco.cambareri",
  "location": "Italia · sessioni outdoor e online"
}
```

Replace with Francesco's real email, Instagram handle and location.

## Image attribution

Vintage images are sourced from public-domain archives:

- **Wellcome Collection** (Sandow photographs)
- **Library of Congress** (Indian club drills, vintage portraits)
- **Wikimedia Commons** (Hackenschmidt, Macfadden, gymnastics)
- **Francesco's Instagram** (`/public/images/francesco-ig/*`) — Francesco's
  own posts and reels, used with permission

Image attribution is shown in the modal on hover-click in the homepage
gallery, and printed under each image on the Gallery page.

## Build

```bash
npm run build
npm run start
```

Deploy target: Vercel (zero-config Next.js), Netlify, or any Node host.
