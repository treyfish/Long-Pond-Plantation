# Client Questions — logged during build (per LOOP-PROMPT.md)

- ~~**Phone number:**~~ **RESOLVED 2026-07-23:** (352) 356-1112 (from Trey) — now in footer + contact page as tel: links.
- **Street address:** Current site only shows "Chiefland, FL 32626". Woodys FB suggests ~8350 NW Hwy 19 — confirm the address to publish for the venue itself.
- **Third testimonial:** Only two written testimonials exist (Michael, Jessica Hiers). Homepage testimonial band has a third slot marked placeholder — need one more quote (the FB reviews video may have candidates).
- **Contact form endpoint:** Form posts to a placeholder (no backend). Tour booking now goes through Square (per Trey) — decide whether the qualification form should also send somewhere (Formspree/serverless) or be trimmed since Square captures bookings. SMS-consent checkbox included WM-style — confirm language.
- **Featured wedding permissions:** Gallery placeholders reference the Hiers wedding and Danielle & Blake (Maudie Lucas films) — need photographer + couple permission before real photos go up.
- **Hero video:** Need the original Maudie Lucas 4:30 film (and ideally a 30–60s hero cut) — Facebook rip is too compressed for the homepage hero.
- **Instagram handle:** Footer links to facebook.com/profile.php?id=61559171769389 and IG "longpondplantationevents" (seen on FB intro) — confirm IG URL.
- **Watercolor venue illustration:** The White Magnolia weddings page features a commissioned watercolor of the venue — a placeholder slot exists on weddings.html. Does the client want one commissioned (their logo artist may be a fit)?
- ~~**Package tiers & rates:**~~ **RESOLVED 2026-07-21:** Found the three "Pricing & Amenities" PDFs on the old site (Estate $6k/$5k/$4k · Mansion $10k/$9k/$8k · Everything But The Dress $16.5k/$15.5k/$14.5k). packages.html now shows all three with real inclusions. Client should confirm rates are current for 2027 bookings. (PDFs saved in brand_assets/interim/.)
- **Interim media notice:** Video + photos currently on the site were pulled from the client's public Facebook and old Wix site as stand-ins. Confirm the client is happy using them (they own them, but flag it) and still request originals from Maudie Lucas for final quality.
- **Family portrait:** About page currently uses Stacey's solo portrait from the old site — a proper family/couple portrait would be better.
- **Blog migration:** blog.html currently links to the 14 posts on the old Wix blog. At domain cutover those URLs die — posts need migrating (export from Wix or rewrite) before the old site is retired.
- **Square:** tours/bookings/payments confirmed through Square (book.squareup.com/appointments/yvodeqjpykfqr5). All tour CTAs now link there.
- **'A Day at Long Pond' captions:** The new weddings-page scroll story says Woodys Coffee pours for the bridal party in the morning (softened from the prototype's 'our treat'). Confirm with the client that morning coffee for the bridal party is actually offered, and that the 7AM/4PM/7:30PM/10PM scene times feel right.

---
## From the 2026-07-24 forensic audit (3 agents: 2 photo, 1 copy)

**Answered by the client's own site — no action needed:** all pricing/inclusions, 16 acres, 3,000 & 2,800 sq ft, early-60s build, phone, zip, email, all ten coffee drinks + prices, both testimonials, all six space names. No "chapel" claim anywhere (correct — the word is not on their site).

**NEEDS CLIENT ANSWER — content we cannot source from longpondplantationevents.com:**
1. **Grace & Co. is not on their website at all.** Our candle page is sourced from their own Facebook page (facebook.com/graceanco — "Long Pond Sunset" scent + notes) and their Etsy shop text (soy wax, "long, even and nearly soot free"). Scents Winter Sangria / Toasted Pumpkin / Blueberry Cheesecake / Crisp Apple come from FB posts and FB reviews. CONFIRM these are current, and confirm "poured on-site / sold in-store at Woodys."
2. **Grace & Co. prices** — v1 shows hidden `$XX` slots. Need real prices or keep prices off.
3. **"Reserve your 2027 dates"** — from their Facebook, not their site. Still accurate?
4. **Surname "Beauchamp"** for Stacey & Clint, and **Stacey named as Slate & Pearl's founder** — inferred from Beauchamp Acres LLC + the S&P story page. Confirm both.
5. **Preferred vendor list** (Alachua Flowers, New Beginnings, Toma Sue Davis, Maudie Lucas) — taken from their Facebook posts; get vendor permission before publishing.
6. **Woodys beans** — their site directs non-wedding customers to Prescription Outdoors for beans. Should we add that?
7. **Photos naming real couples/dates** are in the library (Savannah & James 11/8/2025; Rebecca & Brian 5/16/2026) — publishing rights?
8. **moment-couple.jpg** shows the bride back-to-back with an older man in a navy suit — is that a father first-look or the groom? Caption now says "a back-to-back first look."
9. **Two reception structures:** the property has an open gothic-arch pavilion AND an enclosed metal barn; their site files both under "The White Barn." Do they have separate names?

**FIXED in this pass (both v1 and v3):** Sweet-16 party no longer sold as "wedding design"; fountain no longer captioned "It was always you"; framed engagement portrait no longer captioned "the ceremony lawn"; buffet line no longer "the sweetheart table"; sunset field walk no longer "custom wedding cake"; first-kiss photo no longer "the wedding party"; "starlight wall" claim removed; placeholder third testimonial deleted; SMS marketing consent removed (no evidence of such a program); catering claim narrowed to what their packages actually include; Woodys hours aligned to their "Served Daily 8–1"; v3's 14 FABRICATED journal articles (several signed "FROM STACEY"/"FROM CLINT") replaced with their 14 real posts; stock-looking banquet-hall photo deleted from the library.
