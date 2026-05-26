# Deploy guide — Francesco Cambareri website

Three options, ordered by simplicity. Pick one.

---

## Option 1 — The one-shot script (recommended)

Open PowerShell in the `francesco-website/` folder and run:

```powershell
.\setup-github.ps1
```

This will install dependencies, init Git, create the GitHub repo (via the `gh` CLI), push, and print the Vercel deploy URL.

**Prerequisite:** [GitHub CLI](https://cli.github.com/) installed and authenticated (`gh auth login`).

---

## Option 2 — Manual GitHub + Vercel

If you'd rather do it step by step:

```powershell
# 1. Inside francesco-website/
npm install

# 2. Initialise git
git init -b main
git add .
git commit -m "feat: initial Francesco Cambareri website"

# 3. Create the repo on GitHub.com — name it francesco-cambareri-website
#    Then attach the remote and push:
git remote add origin https://github.com/<YOUR_USER>/francesco-cambareri-website.git
git push -u origin main

# 4. Deploy on Vercel
#    Go to https://vercel.com/new, import the repo, click Deploy.
```

Vercel detects Next.js automatically. No build configuration needed.

---

## Option 3 — Run locally without deploying

```powershell
cd francesco-website
npm install
npm run dev
```

Open <http://localhost:3000>. Italian is the default; switch to EN / DE / FR via the language toggle in the header.

---

## After deploy

Two files Francesco will want to edit before sharing the public URL:

1. **`messages/it.json`** — replace `contact.placeholderValues` with real email, IG handle, location.
2. **`app/[locale]/about/page.tsx`** — swap the placeholder portrait `src` for Francesco's real photo (drop the file into `public/images/portrait.jpg` and update the path).

Then commit and push — Vercel auto-deploys.

---

## Translations

`messages/de.json` and `messages/fr.json` currently mirror the English content. Translate keys in place (don't change the keys themselves) and the site picks up the new language automatically. Italian and English are already done.

---

## Domain

Once Vercel deploy works, attach a custom domain in:
**Vercel → Project → Settings → Domains**.

Suggested: `francescocambareri.com` or `francescocambareri.it`.
