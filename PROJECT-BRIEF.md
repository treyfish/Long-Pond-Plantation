# Long Pond Plantation — Website Rebuild: Full Discovery Brief

Compiled 2026-07-21 by Claude Code from live review of the client's current site, the reference site, Facebook pages (via Trey's logged-in session), Etsy, and Slate & Pearl's website. Purpose: source material for writing a build **loop** (iterative agent workflow), not a one-shot prompt.

---

## 1. Project Setup (already done)

- **Repo:** `treyfish/Long-Pond-Plantation` (GitHub, public, `main` branch), cloned to `~/Downloads/Cromis Digital/Clients/Long Pond Plantation`
- **Scaffold committed & pushed:** `serve.mjs` (localhost:3000 static server), `screenshot.mjs` (Puppeteer full-page screenshots → `temporary screenshots/screenshot-N-label.png`), `brand_assets/` (empty — client media pending), `.gitignore`, `README.md`. Puppeteer installed locally.
- **Hosting decision:** Vercel (integration already connected in Claude Code session)
- **Scope decision:** Multi-page static site — single HTML pages, Tailwind CSS via CDN, mobile-first (per Trey's CLAUDE.md defaults)
- **Status:** Build is ON HOLD until Trey provides a loop prompt + client media package
- **Reference screenshots saved** in `temporary screenshots/`: screenshot-1 (LP home), 2 (WM home), 3 (WM weddings), 4 (WM about), 5 (WM galleries), 6 (WM contact), 7 (LP services), 8 (LP about), 9 (S&P home)

## 2. The Client & The Ask

- **Client:** Long Pond Plantation Events — wedding venue in Chiefland, FL (Levy County), owned by Beauchamp Acres LLC. Family-owned: Stacey & Clint Beauchamp. 16-acre marsh-front property.
- **Current site:** https://www.longpondplantationevents.com (Wix)
- **The ask:** Client "absolutely loves" **https://www.thewhitemagnolia.net** and essentially wants a clone of it adapted to Long Pond. She specifically loved **how the pictures were laid out** on White Magnolia.
- **Critical context:** Long Pond is an **umbrella brand** — venue + candles + decor/coordinating + coffee + light catering. The old site hid most of this. The new site must surface the whole family (exactly what White Magnolia's architecture does for its own multi-business setup).
- Client is sending a **large media package** (photos + video). Do not use FB-compressed rips for finals.

## 3. The Umbrella Brand Family

| Business | What it is | Current web presence | Notes |
|---|---|---|---|
| **Long Pond Plantation Events** | The venue (anchor brand) | Wix site + FB (3.4K followers) | Historic 1960s 3,000 sq ft home, bridal & groom suites, tea room, kitchen; 2,800 sq ft event barn; open-air chapel w/ chandelier; live oaks + Spanish moss; marsh-front sunsets |
| **Slate & Pearl Events** | Wedding design, coordinating, rentals | slateandpearlevents.com (half-finished Wix) + IG @SlateandPearlEvents | "ELEGANCE. REFINED." / SP monogram. Owner IS the Long Pond owner (20 yrs experience, "own my own venue" in her story; same "© by K. Reed" credit on both sites). Was buried on old LP site — must be surfaced |
| **Grace & Co.** | Stacey's soy candle line | FB only (417 followers); "Shop now" → DEAD Etsy (empty since 2017) | Wood-wick jars + wax melts. Scents incl. "Long Pond Sunset" (pomegranate/davana/peppercorn, cedar/amber/musk), Winter Sangria, Toasted Pumpkin, Blueberry Cheesecake, Apple. Strong product photos on FB. "The Candle Pour" signage → possible candle-pour experience/workshop angle. **New site = their first working sales channel** |
| **Woodys Coffee Co.** | Coffee shop | FB only (590 followers) | Logo: "Long Pond Plantation / Woodys Coffee Co." — sage green + coral palms, matches venue brand. ~8350 NW Hwy 19, Chiefland. Limited/pop-up hours around wedding season. Latte-of-the-day, branded bottled iced coffee, pastries. Sells Grace & Co candles in-store |
| **Catering** | "kinda cater" (per Trey) | none | Scope TBD with client |

## 4. Content Inventory From Current Site (carry over)

- **Positioning copy:** "Where past and present meet" / Old Florida views / idyllic backdrop for weddings, corporate events, reunions
- **About:** 16-acre marsh front in Levy County; 1960s 3,000 sq ft home, elite bridal & groom suite, tea room, kitchen; "a photographer's dream"; mature live oaks w/ Spanish moss over the event space; pink-and-yellow sunset backdrop
- **Event pitch:** 2,800 sq ft event barn down to small tea-room gatherings
- **Testimonials:** Michael ("Stacey and Clint truly shined… best people, best place") and Jessica Hiers ("dream come true… elegant but rustic charm… 10/10")
- **Contact:** longpondplantationevents@gmail.com, Chiefland FL 32626
- **Old nav:** Our Venue / Gallery / Packages / Woodys Coffee / Maps-Contact. Packages page just pointed to Slate & Pearl. Site is © "K. Reed" (also built S&P site)

## 5. Media Notes

- **The hero video:** facebook.com/reel/1048114211025395 — 4:30 cinematic film by **Maudie Lucas Photography** (posted July 2026). Contents: drone over marsh w/ script "Long Pond Plantation" title card → aerial of chapel + ceremony lawn → historic house under mossy oaks → styled welcome-table details → fully dressed reception barn (chandelier, string lights, cross-back chairs, lavender linens, gold-stand florals). Slate & Pearl collab. **Request the ORIGINAL file (and ideally a 30–60s hero cut) from Maudie Lucas via the client.**
- Maudie Lucas also shot a 9:02 full wedding film (Danielle & Blake) — featured-wedding page candidate.
- "Cheers to the Hiers" wedding video connects to the Jessica Hiers testimonial — another featured-wedding candidate.
- Other FB content hooks: sunset ceremonies (~6pm golden hour), bridal suite reveals, Christmas parties in the historic home, groom skeet-shooting tradition ("might just be our favorite groom tradition yet").
- Current marketing CTA: "There is still time to reserve your 2027 wedding date! … Schedule a tour today."

## 6. Preferred Vendors (from FB — for a Vendors page, a White Magnolia pattern)

- Alachua Flowers and Tuxedo Rentals — flowers/tuxedos
- New Beginnings Entertainment — DJ
- Toma Sue Davis — cakes
- Slate & Pearl Events — rentals & decor (in-family)
- Maudie Lucas Photography — photo/video

## 7. The Reference: White Magnolia Design System (what "clone" means)

Site: https://www.thewhitemagnolia.net (Wix; venue + lodging, Kentwood, LA; ~90 pages across two venues — Long Pond needs only the core subset).

**Typography**
- Headings: Playfair Display (serif), ALL-CAPS with wide letterspacing (3–6px)
- Nav/body: Brandon Grotesque Light / Avenir Light (light geometric sans)
- Long-form body: Georgia (justified on About page)
- Accent: handwritten calligraphy script for emotional lines ("your forever starts here", "Galleries", "Where it all began", "What are you waiting for?")

**Palette**
- White base; warm beige section bands (#F2EFED); near-black charcoal (#282626) buttons/footer; black text; muted sage-gray accents (~rgb(128,154,145)); gold review stars; blush watercolor swash accents (contact "SAY HELLO" header, dusty-rose submit button)

**Homepage formula (the part the client loves)**
1. Centered script logo + small letterspaced tagline ("WEDDING VENUE + LODGING")
2. Thin all-caps nav bar
3. Full-bleed hero video/photo (couple at golden hour)
4. "WELCOME TO…" letterspaced serif heading + script subline
5. Black CTA button → pricing guide
6. **Photo tile grid** — 2 rows × 4 cards, each = photo + white label bar (ABOUT / WEDDINGS / EXPERIENCES / CATERING / LODGING / AMENITIES / CORPORATE / BLOG). This is the umbrella-brand solution.
7. Beige testimonial band: "WHAT OUR GUESTS ARE SAYING", 3 columns, quoted headline + 5 gold stars + body + attribution
8. Footer: FOLLOW + social icons, gallery thumb strip, phone + address

**Weddings page formula**
- Page title overlaid on full-width venue photo
- One-line positioning tagline ("Southern countryside wedding venue full of romantic European vibes just like in the movies")
- Aerial property photo → **watercolor illustration of the venue** (distinctive touch)
- Script section headers between blocks
- "PROPERTY HIGHLIGHTS": per-space photo grids (Bridal Suite / Groom Suite / Chapel / Cottages / Courtyard-Pool)
- "THE [X] WEDDING PACKAGE — WHAT'S INCLUDED" panel + bordered pricing/schedule boxes
- CTA between every major section

**Other page patterns**
- About: editorial family photo + justified Georgia text on beige; personal founder story
- Galleries: script "Galleries" header; full-width category banners with vertical letterspaced labels (FEATURED WEDDINGS / STYLED SHOOTS) linking to sub-galleries; per-wedding feature pages
- Contact: "SAY HELLO" over blush watercolor; long qualifying form (first/last name, phone, preferred contact method, email, event type, "ready to schedule your private tour?" dropdown, event date, "what made you decide to contact us" checkboxes, zip, city, message, SMS consent) — it's a lead-qualification machine
- Also has: FAQ, Vendors, Catering menu, Lodging, pricing-guide request landing page (email capture)

**Long Pond adaptation mapping**
| White Magnolia | Long Pond |
|---|---|
| The venue + chapel + suites | Venue, event barn, chapel, bridal/groom suites, tea room |
| Magnolia Catering | Long Pond catering (scope TBD) |
| Magnolia Sips | Woodys Coffee Co. |
| Experiences / styled decor | Slate & Pearl (design, coordinating, rentals) |
| Lodging/cottages | (no equivalent — omit) |
| — | Grace & Co. candles (needs shop/showcase page) |

## 8. Build Rules Already In Force (Trey's CLAUDE.md)

- Invoke `frontend-design` skill before writing any frontend code
- Single-file HTML pages, inline styles, Tailwind via CDN, mobile-first
- Check `brand_assets/` before designing; use real assets when present, placehold.co otherwise
- Serve on localhost:3000 (`node serve.mjs`); never screenshot `file:///`
- Screenshot workflow: `node screenshot.mjs http://localhost:3000 [label]` → read PNG → compare vs reference → fix → re-screenshot; minimum 2 comparison rounds
- Anti-generic guardrails: no default Tailwind palette, layered color-tinted shadows, serif+sans pairing with tight tracking on headings, layered radial gradients + grain, only transform/opacity animations, hover/focus-visible/active on all interactive elements, gradient+blend overlays on images, deliberate spacing tokens, surface layering system
- Match reference designs exactly; don't add uninvited sections; don't stop after one screenshot pass

## 9. Open Questions (client or Trey to answer before/during build)

1. **Candles:** showcase page vs real e-commerce (cart/checkout)? E-commerce changes technical scope (static site → needs Stripe/Shopify/Wix-commerce embed or similar).
2. **Slate & Pearl:** presented as sister brand with its own page, or absorbed under Long Pond branding? Does her separate site stay live?
3. **Woodys Coffee:** menu + hours page only, or online ordering carryover?
4. **Catering:** real menu offering or "available upon request" mention?
5. **Pricing:** publish package pricing (WM gates it behind a "request pricing guide" email capture — good lead-gen) or show openly?
6. **Domain:** keep longpondplantationevents.com pointed at the new Vercel site?
7. **Logo:** keep current watercolor circular logo (its floral sage/blush palette actually matches the WM aesthetic) or refresh?
8. **Featured weddings:** which real weddings can be featured (Hiers? Danielle & Blake?) and do we have photographer permission?

## 10. Suggested Loop Shape (raw material for the loop prompt)

A build loop for this project naturally iterates: **per-page** (build → serve → screenshot → compare to White Magnolia reference → fix → re-screenshot ≥2 rounds → commit → next page), with an outer sequence roughly:

1. Inventory `brand_assets/` media as it arrives → map assets to pages
2. Design tokens first (palette from brand assets + WM system, font pairing, spacing) → shared across all pages
3. Page order: Home → Weddings/Venue → Gallery → Slate & Pearl → Grace & Co. → Woodys → Packages/Pricing → About → Contact → FAQ/Vendors
4. Each page: build vs the corresponding WM reference screenshot (already saved), respecting CLAUDE.md guardrails
5. Cross-page pass: shared nav/footer consistency, mobile viewport screenshots, link check
6. Deploy preview to Vercel → client review → revision loop
