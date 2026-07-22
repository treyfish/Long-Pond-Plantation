# Long Pond Plantation — v1 Build Review (placeholder stage)

Built 2026-07-21 per LOOP-PROMPT.md. **For Trey's review only — not yet client-facing.**

## Preview URLs

- **Public review link:** https://long-pond-plantation.vercel.app
- Authenticated preview: https://long-pond-plantation-5gn3k0bcc-treyholland1117-2813s-projects.vercel.app (requires Vercel login)
- Note: the Vercel CLI's first deploy landed on the production target unintentionally, which is why the public alias exists. Content is identical to the preview and the project is brand-new, so exposure is nil — but if you want it unpublished until launch: `vercel rm long-pond-plantation` or delete the project in the Vercel dashboard, then redeploy previews only.
- Repo: https://github.com/treyfish/Long-Pond-Plantation (all work committed to `main`, page-by-page)

## What's built (10 pages, White Magnolia system adapted to Long Pond)

index (home) · weddings · gallery · packages · about · contact · slate-and-pearl · grace-and-co · woodys-coffee · vendors (+FAQ)

Design system: Playfair Display letterspaced serif caps + Jost light sans + Great Vibes script + Georgia long-form; white/cream/charcoal palette with sage, blush, and gold accents drawn from the LP watercolor logo; WM patterns throughout (tile grid home, property-highlight collages, SAY HELLO lead-qual form, script accents, cream testimonial band).

## Placeholder vs final

**Everything visual is placeholder** (placehold.co, labeled per slot) — swaps happen in Phase 4 when the client media package lands in `brand_assets/`. Specifically pending:
- Hero video (Maudie Lucas original file) + all photography
- Watercolor logo asset (text lockup used meanwhile)
- Package pricing ($X,XXX boxes), phone number, street address
- Third testimonial; featured-wedding photos (permissions pending)
- Contact form endpoint (currently demo-only, no submission backend)

## Decision queued for the client (per locked decision #3)

Pricing is currently **published openly** on packages.html. *Option for later:* gate pricing behind a "Request Pricing Guide" email capture (the White Magnolia pattern) — turns the packages page into a lead-gen machine. Client's call.

## Open questions (full list in CLIENT-QUESTIONS.md)

Phone number · street address · third testimonial · form endpoint choice + SMS-consent language · featured-wedding permissions · original hero video file · Instagram URL confirmation · watercolor illustration commission · real package tiers & rates

## Verification done

Every page: ≥2 desktop screenshot-compare rounds vs the White Magnolia references + a 390px mobile pass (see `temporary screenshots/`). Cross-page pass: header/footer byte-identical on all 10 pages, correct nav active states, zero dead links, gallery anchors verified.
