# Long Pond Plantation — Website Build Loop

You are building the Long Pond Plantation Events website in this repo. Read `PROJECT-BRIEF.md` in full before writing any code — it contains the client context, content inventory, the White Magnolia design system breakdown, and the build rules. This file tells you HOW to execute the build as an iterative loop. Follow it exactly.

---

## LOCKED SCOPE DECISIONS (do not revisit, do not ask)

1. **Primary focus: the wedding venue.** The venue pages (Home, Weddings/Venue, Gallery, Packages, About, Contact) are the product. The sister brands are supporting pages, not co-equal.
2. **Grace & Co. candles: showcase page only, NO e-commerce.** One page: brand story, scent lineup (from brief §3), strong product photography slots, CTA = "Message us to order" → Facebook page + email. Structure the page so a shop/cart can be added later without redesign (product cards with a price slot, even if price is hidden for now). Do not build cart, checkout, or payment anything.
3. **Pricing: published openly**, like the current site does. Build the Packages page with visible package pricing. Include an HTML comment at the top of the pricing section AND a note in the client-review notes file: *"Option for later: gate pricing behind a 'Request Pricing Guide' email capture (the White Magnolia pattern) — turns the page into a lead-gen machine. Client's call."*
4. **Build NOW with placeholders.** Client media has not arrived. Use `placehold.co` placeholders sized and labeled for their slot (e.g. `https://placehold.co/1920x1080/282626/F2EFED?text=HERO+VIDEO+—+Maudie+Lucas+drone+film`). Check `brand_assets/` at the START of every loop iteration — if real media has appeared, swap it in for that page before building further.
5. **Slate & Pearl:** presented as the in-family design/coordinating/rentals brand with its own page under the Long Pond site ("ELEGANCE. REFINED." positioning). Link out to her Instagram. Do not touch her separate Wix site.
6. **Woodys Coffee:** one page — story, menu highlights, hours ("limited hours around wedding season — check Facebook"), location, note that Grace & Co. candles are sold in-store. No online ordering.
7. **Catering:** "available upon request" mention on the Packages page only. No dedicated page in v1.

## OPEN QUESTIONS — do not guess, do not block

Featured-wedding permissions, domain cutover, and logo refresh (brief §9) are unresolved. Build around them: Gallery uses placeholder featured weddings labeled "PENDING PERMISSION — Hiers wedding" etc.; keep the current watercolor logo. Log anything needing a client answer in `CLIENT-QUESTIONS.md` as you hit it, and keep moving.

---

## PHASE 0 — Design tokens (do this ONCE, before any page)

1. Invoke the `frontend-design` skill (per CLAUDE.md — this is mandatory before any frontend code).
2. Study the reference screenshots in `temporary screenshots/` (screenshot-2 through 6 = White Magnolia; 1, 7, 8 = old Long Pond; 9 = Slate & Pearl).
3. Check `brand_assets/` for the client logo and any early media.
4. Create `tokens.css` (or a shared inline `<style>` block template — consistent with the single-file-HTML rule, a shared copy-paste token block is fine) defining:
   - **Palette**, adapted from White Magnolia + Long Pond's sage/blush watercolor logo: white base, warm beige band `#F2EFED`, charcoal `#282626`, muted sage-gray `rgb(128,154,145)`, gold stars, blush accent. NO default Tailwind palette values anywhere.
   - **Type system**: Playfair Display (Google Fonts) for all-caps letterspaced headings (3–6px tracking); a light geometric sans (Jost or Montserrat Light as the free stand-in for Brandon Grotesque) for nav/body; Georgia for long-form About text; a calligraphy script (e.g. Pinyon Script or similar — pick ONE and use it everywhere) for emotional accent lines.
   - Spacing tokens, shadow recipe (layered color-tinted), image overlay recipe (gradient + blend), surface layering system — per CLAUDE.md anti-generic guardrails.
5. Build a throwaway `tokens-preview.html` swatch/type-specimen page, screenshot it, eyeball it against the WM screenshots, fix, delete or keep in a `_dev/` folder. Commit: `chore: design tokens`.

## PHASE 1 — Per-page build loop

**Page order (venue first, sisters after):**

1. `index.html` — Home (clone the WM homepage formula from brief §7, incl. the photo tile grid the client specifically loves; tiles: WEDDINGS / GALLERY / PACKAGES / SLATE & PEARL / GRACE & CO. / WOODYS COFFEE / ABOUT / CONTACT)
2. `weddings.html` — Weddings/Venue (WM weddings formula: hero title over photo, positioning line, property highlights grids — Event Barn / Chapel / Bridal Suite / Groom Suite / Tea Room / Historic Home / Marsh Sunset Lawn)
3. `gallery.html` — Galleries (script header, full-width category banners: FEATURED WEDDINGS / STYLED SHOOTS / THE PROPERTY)
4. `packages.html` — Packages & Pricing (open pricing per locked decision #3; bordered pricing/schedule boxes in the WM style; catering mention)
5. `about.html` — About (editorial family photo slot + justified Georgia text on beige; Stacey & Clint's story; the umbrella-family story)
6. `contact.html` — Contact (WM "SAY HELLO" pattern with blush watercolor accent; the full lead-qualification form from brief §7 adapted to Long Pond; form can POST to a Formspree/placeholder endpoint for now, log the endpoint decision in CLIENT-QUESTIONS.md)
7. `slate-and-pearl.html`
8. `grace-and-co.html`
9. `woodys-coffee.html`
10. `vendors.html` — Preferred vendors (brief §6) + FAQ section on the same page

**The loop, for EVERY page — no exceptions, no shortcuts:**

```
a. Check brand_assets/ — swap any newly arrived real media into scope for this page
b. Build the page (single-file HTML, Tailwind CDN, shared token block, mobile-first)
c. node serve.mjs   (localhost:3000 — NEVER screenshot file:///)
d. node screenshot.mjs http://localhost:3000/<page>.html <page>-r1
e. READ the screenshot PNG. Open the matching White Magnolia reference PNG. Compare
   side by side: layout, spacing rhythm, type scale, letterspacing, section order,
   photo-grid proportions. List concrete deltas.
f. Fix every delta. Re-screenshot as <page>-r2. Compare again.
g. Repeat until the page holds up next to the reference — MINIMUM 2 full
   compare rounds per page. One screenshot pass is never done.
h. Mobile check: screenshot at 390px width. Fix mobile breaks. Re-screenshot.
i. Commit: "feat: <page> (r<N> vs WM reference)". Move to next page.
```

**Guardrails in force for every page (from CLAUDE.md, non-negotiable):** no default Tailwind palette; layered color-tinted shadows; serif+sans pairing with tight heading tracking; layered radial gradients + grain; transform/opacity animations only; hover/focus-visible/active states on ALL interactive elements; gradient+blend overlays on images; deliberate spacing tokens; surface layering. Match the reference — do not invent uninvited sections.

## PHASE 2 — Cross-page pass

1. Nav + footer identical across all 10 pages (extract once, verify by diff or careful read).
2. Click-through link check: every nav item, every CTA, every footer link resolves. No dead hrefs, no `#`.
3. Full mobile screenshot sweep — every page at 390px.
4. Consistency screenshot sweep — every page at desktop, read them in sequence, flag any page that looks like it belongs to a different site, fix.
5. Commit: `chore: cross-page consistency pass`.

## PHASE 3 — Deploy & handoff

1. Push to `main` (`treyfish/Long-Pond-Plantation`).
2. Deploy to Vercel (integration already connected). Get the preview URL.
3. Write `CLIENT-REVIEW.md`: preview URL, what's placeholder vs final, the pricing-gating option note (locked decision #3), and the contents of `CLIENT-QUESTIONS.md`.
4. Stop. Trey reviews before anything goes to the client.

## PHASE 4 — Media swap pass (runs whenever the client package lands in brand_assets/)

1. Inventory every file in `brand_assets/` → map each asset to its page/slot (hero video → home hero; per-space photos → weddings highlights; product shots → Grace & Co.; etc.).
2. Swap placeholders page by page, re-running the Phase 1 loop (screenshot → compare → fix) for every touched page. Real photos change layout balance — do not skip the compare rounds.
3. Compress/resize for web (hero video needs a 30–60s cut — if only the 4:30 Maudie Lucas file arrives, trim it or use a poster frame + link, and log it in CLIENT-QUESTIONS.md).
4. Redeploy. Update CLIENT-REVIEW.md.

---

## STOP CONDITIONS

Stop and surface to Trey (don't improvise) only if: the repo/serve/screenshot tooling is broken and can't be fixed in-loop; a locked scope decision turns out to be technically impossible; or Vercel deploy fails repeatedly. Everything else: make the reasonable call, log it, keep building.
