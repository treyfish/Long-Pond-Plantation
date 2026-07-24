# COPY AUDIT — Long Pond Plantation rebuild vs. the client's real site

**Rule applied:** the client's own website is the only source of truth. Anything we assert that
cannot be traced to their site, their package PDFs, or their coffee menu is flagged.

## Sources of truth consulted

| Source | What it is |
|---|---|
| `_audit/oldsite-home.html` → live `/` | Home / Our Venue |
| `_audit/oldsite-gallery.html` → live `/about` | Gallery (section names only, no prose) |
| `_audit/oldsite-packages.html` → live `/services-4` | **Slate & Pearl Events page** (not the packages page) |
| `_audit/oldsite-menu.html` → live `/menu` | Coffee menu |
| live `/photography-sessions` | **The real Packages page** — Estate / Mansion / Everything But The Dress |
| live `/general-7` | **The real Woodys Coffee page** |
| live `/online-ordering` | Online ordering + pickup address |
| live `/maps` | Maps / Contact Us |
| live `/blog` + `/blog-feed.xml` | 14 blog posts |
| `brand_assets/interim/pdf1–3.pdf` | Mansion / Everything But The Dress / Estate pricing sheets |
| `slateandpearlevents.com` (linked from their site) | Slate & Pearl story + services |

**The client's entire site is 9 pages** (from `pages-sitemap.xml`):
`/`, `/about`, `/menu`, `/online-ordering`, `/services-4`, `/general-7`, `/maps`,
`/photography-sessions`, `/blog`. There is **no** Grace & Co. page, **no** vendors page,
**no** FAQ page.

---

# VERIFIED

## Numbers

| Our claim | Client's exact words | Where |
|---|---|---|
| Sixteen acres / "16 ACRES" | "Set on a **16 acre** marsh front in beautiful Levy County lies Long Pond Plantation owned by Beauchamp Acres." | Home, ABOUT US |
| 3,000 sq ft historic home | "this unique **3,000 sq ft home** has all amenities you will need" | Home, ABOUT US |
| 2,800 sq ft White Barn | "with **over 2800sq ft** of space in our event barn" | Home, HAVE AN EVENT TO REMEMBER? |
| Built early 1960s / "EST. EARLY 1960s" | "Originally constructed in the **early 60s**" | Home, ABOUT US |
| Levy County | "in beautiful **Levy County**" | Home |
| 13-hour venue access (all three packages) | "**13 HOUR VENUE ACCESS**" | pdf1, pdf2, pdf3 (first bullet of each) |
| Estate $6,000 Sat / $5,000 Fri-Sun / $4,000 weekdays | "$6,000.00 SATURDAY · $5,000.00 FRIDAY/SUNDAY · $4,000.00 WEEKDAYS" | pdf3 (Estate) |
| Mansion $10,000 / $9,000 / $8,000 | "$10,000.00 SATURDAY · $9,000.00 FRIDAY/SUNDAY · $8,000.00 WEEKDAYS" | pdf1 (Mansion) |
| Everything But The Dress $16,500 / $15,500 / $14,500 | "$16,500.00 SATURDAY · $15,500.00 FRIDAY/SUNDAY · $14,500.00 WEEKDAYS" | pdf2 |
| "FROM $4,000 / $8,000 / $14,500" (v3 home Packages) | "ESTATE PACKAGE Starting at $4,000.00 · MANSION PACKAGE Starting at $8,000.00 · EVERYTHING BUT THE DRESS PACKAGE Starting at $14,500.00" | `/photography-sessions` |
| Coffee: Hot 12oz $6, Iced 20oz $7, Blended 24oz $8, Bottled $5 | "Hot - 12oz $6 / Iced - 20oz $7 / Blended - 24oz $8 / Bottled $5" | Coffee Menu |
| Croffles $3.50 | "Small Bites \| Croffles — topped with honey … $3.50" | Coffee Menu |
| Coffee served daily 8:00am–1:00pm | "**Served Daily between 8:00am-1:00pm**" | Coffee Menu + `/online-ordering` |
| Phone (352) 356-1112 | `"telephone":"352-356-1112"` | Home page JSON-LD |
| Chiefland, FL 32626 | "Beauchamp Acres, LLC. **Chiefland, FL. 32626**" | Footer, every page |
| longpondplantationevents@gmail.com | same | Footer, every page |
| 15×15 black & white dance floor | "15X15 BLACK AND WHITE DANCE FLOOR" | pdf1, pdf2 |

## Space names — all six are the client's own

Their gallery page (`/about`) groups every photo under exactly these headings:
**Tea Room · Bridal Suite · Guys Lounge · Details · Grounds · The White Barn.**
Home page adds "**elite bridal & groom suite, tea room, kitchen**". PDFs add "**HISTORIC HOME, THE WHITE BARN**".

- The White Barn ✓ · The Tea Room ✓ · The Bridal Suite ✓ · The Guys Lounge ✓ · The Grounds ✓
- "Styled Details" (our gallery) maps to their "Details" ✓
- **No "chapel" anywhere in our build** — correct; the word appears nowhere on their site either.

## Package inclusions (verified verbatim against the PDFs)

Estate — all six of our bullets are exact: 13-hour access; "HISTORIC HOME, THE WHITE BARN, CHOICE OF
CEREMONY SITE"; "WOODEN CROSSBACK CHAIRS, SIGNATURE WOODEN TABLES"; "CEREMONY BENCHES + ARBOR";
"ONSITE PARKING AND PARKING ATTENDANT"; "DAY OF STAFF (TAKE CARE OF RESTROOM/TRASH)".

Mansion adds — "WEDDING PLANNER + DAY OF COORDINATOR"; "FULL DECORATING PACKAGE BY SLATE & PEARL";
"WEDDING FLORALS, TABLE DECOR + LINENS"; "PREMIUM RENTAL INCLUDING: ARBORS, BAR FRONTS, FARMHOUSE
TABLES, FURNITURE GROUPING, 15X15 BLACK AND WHITE DANCE FLOOR, CHAMPAGNE WALL, PICTURE WALL,
CORNHOLE BOARDS"; "SET UP / BREAKDOWN". ✓ All present and correctly scoped.

Everything But The Dress adds — "CLASSIC CATERING/BAR SERVICE"; "DJ ENTERTAINMENT"; "PHOTOGRAPHY";
"CUSTOM WEDDING CAKE". ✓

Our "Everything in the Estate Package / Everything in Mansion, plus:" framing is accurate — the
PDFs do repeat all lower-tier bullets in the higher tiers.

**v3 `SlateAndPearl.tsx`:** "Slate & Pearl styling is included in The Mansion Package and above." ✓
Correct — "FULL DECORATING PACKAGE BY SLATE & PEARL" appears in pdf1 and pdf2 only.

## Prose we lifted correctly

| Ours | Theirs |
|---|---|
| "Where past and present meet" | "**WHERE PAST AND PRESENT MEET**" (home section heading) |
| "a photographer's dream" | "This adequate space is a **photographers dream**." |
| "mature live oaks draped in Spanish moss… perfect balance of shade and light" | "mature live oaks covered in Spanish moss, overhanging across the event space making it a **perfect balance of shade & light**" |
| "sunsets that melt the sky in pinks and yellows" | "sunsets fill the sky **melting in pinks and yellows**" |
| "Words don't do justice to how beautiful it is here" (gallery CTA) | verbatim from home page |
| "We would love for you to see it for yourself" (about CTA) | verbatim from home page |
| "Don't settle for a dull party… we'll help tailor the space to fit your event" | "**Don't settle for a dull party**, book a tour and come on by as we will help tailor to your event to help fit your needs" |
| Corporate events + reunions | "We offer an idyllic backdrop for weddings, **corporate events, reunions** and a variety of other gatherings" |
| Small gatherings in the tea room | "to **small gatherings in our tea room**" |
| "owned by Beauchamp Acres" | verbatim |
| Booking via Square | `https://app.squareup.com/appointments/book/yvodeqjpykfqr5/…` — real, on every page ("Click to Book a Tour") |

## Testimonials

**Michael** — ours is a faithful trim of theirs. Theirs, in full:
> "My wife and I celebrated our wedding at Long Pond Plantation, where Stacey and Clint truly
> shined. We fell in love with the breathtaking beauty of the venue. We wholeheartedly recommend it
> for any event you're planning. The best people, the best place." — *Michael*

Our pull-quote headline "The best people, the best place" is the quote's own last line. ✓
Attribution "Michael" ✓.

**Jessica Hiers** — attribution ✓, headline "A dream come true" comes from her own first line
("This venue was a dream come true for me!"). ✓ (See CONTRADICTED for the tense edit.)

## Sister brands — what the client actually says

**Slate & Pearl Events** — their `/services-4` page says, in full:
> "Our Services / Coordinating | Rentals | Decor / Looking for services outside of our venue, click
> the link below to see what all Slate & Pearl has to offer for your event! / slateandpearlevents.com"

`slateandpearlevents.com` confirms: tagline "**ELEGANCE. REFINED.**"; "a true romantic at heart";
"**20 years**", began "designing in customers' homes"; services **Wedding Design, Coordinating,
Rentals**; Instagram **@SlateandPearlEvents**. Our v1 `slate-and-pearl.html` copy tracks this
closely and correctly avoids naming the founder. ✓

**Woodys Coffee** — their `/general-7` page says, in full:
> "Woodys Coffee Company / Long Pond Plantation has its very own coffee shop, Woodys, ready to
> serve your entire bridal party on the morning of your big day! / Sip, smile and savor every
> moment with complimentary coffee when you book with us. Its our treat to kick off your
> celebration the right way, fresh, local and full of love. / Hosting an event and need coffee?
> Contact / Not a Bride? Woodys still welcomes you, stop by Prescription Outdoors today to pick up
> a bag of our freshly ground coffee!"

So these of ours **are** verified: Woodys is Long Pond's own coffee shop ✓; it serves the bridal
party on the wedding morning ✓; "our treat" / complimentary is the client's own phrasing ✓.
All ten drink names and their descriptors on our Woodys pages match the client's menu verbatim
(White Barn, Plantation Fog, Tuxedo, Pondview Mocha, Oak Canopy, First Toast, Sweet I Do, Shotgun
Breve, Blushing Bride, Honeymoon Glow) ✓, as does "Cold Foam Included" ✓.

## Blog (v1 `blog.html`)

All 14 titles listed in v1 match the client's `blog-feed.xml` one-for-one. ✓ (Minor: we lowercase
"Your"/"You" mid-title; theirs are title-case.)

---

# CONTRADICTED

*Ordered by severity.*

### C1 — Woodys hours: we say the bar may be closed; they say "Served Daily"

- **Ours (v1 `woodys-coffee.html`, Hours & Location):** "The coffee menu is served daily from 8:00am
  to 1:00pm — **but during peak wedding season the bar sometimes rests, so check our Facebook page
  for this week's schedule before you drive out.**"
- **Ours (v3 `pages/family/WoodysCoffee.tsx:521`):** same claim.
- **They say:** "**Served Daily between 8:00am-1:00pm**" (coffee menu + online-ordering page). No
  seasonal-closure caveat exists anywhere on their site.
- **Fix:** delete the "sometimes rests" sentence, or get the client to confirm it in writing. As
  written we are telling customers the business is unreliable on the client's behalf.

### C2 — Woodys off-property retail: we point people to the property, they point people to Prescription Outdoors

- **Ours:** "Find us on the Long Pond Plantation property, Chiefland, Florida." (v1) /
  "Woodys sits right on the Long Pond property in Chiefland." (v3)
- **They say:** "Not a Bride? Woodys still welcomes you, **stop by Prescription Outdoors** today to
  pick up a bag of our freshly ground coffee!" and their online-order pickup address is
  "**8350 U.S. 19, Chiefland, FL 32626**".
- **Fix:** add the Prescription Outdoors retail line and/or the 8350 U.S. 19 address; do not imply
  walk-up service at the venue is the only or default option.

### C3 — Facebook URL is wrong in v3

- **Ours (v3 `Footer.tsx`, `contact/VisitUs.tsx`):** `https://www.facebook.com/longpondplantationevents`
- **Theirs (on every page of their site):** `https://www.facebook.com/profile.php?id=61559171769389`
- v1 uses the correct URL. **Fix:** change v3 to the `profile.php?id=61559171769389` URL.

### C4 — v3 sends Grace & Co. and Woodys enquiries to the wrong Facebook page

- **v3 `family/GraceAndCo.tsx:16` and `family/WoodysCoffee.tsx:15`** both set
  `FACEBOOK_URL = profile.php?id=61559171769389` — that is the **Long Pond Plantation** page.
  The "Message us to order" candle CTA therefore messages the venue, not Grace & Co.
- v1 uses the brand-specific pages (`facebook.com/graceanco`,
  `facebook.com/p/Woodyscoffeeco-61569357114199/`). **Fix:** align v3 with v1.

### C5 — Jessica Hiers quote is edited beyond trimming

- **Ours:** "From start to finish, Stacey and her family **worked** so hard to make a bride's vision
  come true — and it exceeded expectations! It has an elegant but rustic **charm** that would be
  perfect for any event. 10/10!"
- **Hers:** "From start to finish, Stacey and her family **have worked** so hard to make a brides
  vision come true and it exceeded expectations! … It has an elegant but rustic **charm feel** that
  would be perfect for any event. … 10/10!"
- Tense changed, "charm feel" → "charm", ellipses not marked. **Fix:** restore verbatim wording and
  mark elisions with "…", or drop to a shorter exact excerpt.

### C6 — Copyright/authorship line

- **Ours:** "© 2026 Long Pond Plantation · Beauchamp Acres, LLC"
- **Theirs:** "© 2035 by K. Reed"
- Theirs is an unedited Wix template placeholder, so ours is almost certainly the *correct* intent —
  but it is a change of record. Confirm with the client rather than assuming.

---

# UNVERIFIABLE — not found on the client's site

*Ordered by severity: pricing & inclusions → services → amenities → brands → flavor text.*

## Tier 1 — Services and inclusions we claim on the client's behalf

### U1 — Catering availability (HIGH)
- **Claim:** "**Light catering is available upon request, and our kitchen supports outside
  caterers** — ask us about options when you book your tour."
- **Where:** v1 `vendors.html` FAQ ("Is catering available?"); v3 `pages/weddings/Faq.tsx:848`
  ("Light catering on request, and our kitchen happily supports outside caterers.")
- **Client's site:** the word "catering" appears **only** in pdf2, as an inclusion of the Everything
  But The Dress package: "CLASSIC CATERING/BAR SERVICE". Nothing about light catering, nothing about
  an outside-caterer policy. The home page mentions a "kitchen" as a room, not as a service.
- **Rewrite:** "Catering and bar service are included in our Everything But The Dress package. For
  other packages, ask us about options when you book your tour." — or remove the FAQ entirely.

### U2 — "Ask us about catering and bar service options" on the packages page (HIGH)
- **Where:** v1 `packages.html`, "Events of Every Size" block.
- Same problem as U1 for non-wedding events. **Rewrite:** remove, or "Tell us what you need and
  we'll talk through options on your tour."

### U3 — "Tours, bookings & payments are handled securely through Square" (MEDIUM-HIGH)
- **Where:** v1 `contact.html`.
- Their Square link is an **appointments/booking** link only. Nothing on their site indicates
  payments are collected through Square. **Rewrite:** "Tours are booked through Square."

### U4 — SMS marketing consent language (MEDIUM-HIGH — compliance, not just copy)
- **Claim:** "I agree to receive text messages from Long Pond Plantation about pricing and event
  reminders. Message and data rates may apply. Reply STOP to opt out."
- **Where:** v1 `contact.html`; equivalent fields in v3 `contact/InquiryForm.tsx`.
- The client runs no SMS program that their site discloses. Do not ship an opt-in for a program
  that does not exist. **Fix:** remove until the client confirms an SMS provider and policy.

### U5 — Two named ceremony sites (MEDIUM)
- **Claim:** "Ceremony Site No. 1 — BENEATH THE OAKS" / "Ceremony Site No. 2 — UNDER THE CHANDELIER"
  (v3 `pages/weddings/CeremonySites.tsx`); "your choice of ceremony site — **beneath the oaks or
  under the barn's chandelier**" (v1 `packages.html`, Estate bullet).
- **Client's site:** the PDFs say only "**CHOICE OF CEREMONY SITE**" — the number of sites is never
  stated and neither site is named. The word "chandelier" appears **nowhere** on their site or in
  their PDFs.
- **Rewrite:** "Your choice of ceremony site." Ask the client to name and count the sites before we
  present two as canonical.

### U6 — Preferred Vendors page names six third-party businesses (MEDIUM-HIGH)
- **Claim:** Alachua Flowers and Tuxedo Rentals; New Beginnings Entertainment; Toma Sue Davis
  (cakes); Maudie Lucas Photography; Slate & Pearl; Woodys.
- **Where:** v1 `vendors.html`.
- **Client's site:** has **no vendors page**; none of these four outside businesses is named
  anywhere on it. Publishing a "preferred vendor" endorsement list is a commercial statement the
  client has to authorise.
- **Fix:** hold the page until the client supplies and approves the list in writing.

### U7 — Tour logistics (LOW-MEDIUM)
- "Tours are **free, private, and pressure-free**" (v3 `contact/Contact.tsx`)
- "Tours **typically run about an hour**" (v3 `contact/VisitUs.tsx:207`)
- "**Tours take about an hour**, the marsh does most of the talking" (v3 Journal)
- **Client's site:** says "Schedule a tour", "Click to Book a Tour" — no duration, no price, no
  format. **Rewrite:** drop the specifics, or confirm with the client.

## Tier 2 — Availability and date claims

### U8 — "Reserve your 2027 wedding date" (MEDIUM)
- **Where:** v1 `index.html`, `contact.html`, `packages.html`, `weddings.html`; v3 `CTABanner.tsx`,
  `Footer.tsx` ("2027 DATES AVAILABLE"), `gallery/YourWeddingHere.tsx` ("2027 dates are open — but
  not for long."), `contact/Contact.tsx` ("2027 dates are open now and **prime Saturdays go
  first**"), v3 Journal ("Why 2027 Dates Are Booking Now").
- **Client's site:** "2027" appears **zero times**. Availability, scarcity, and which days book
  first are all our invention.
- **Rewrite:** "Dates are booking now — schedule a tour." Remove scarcity framing until the client
  confirms their calendar.

## Tier 3 — Grace & Co. (an entire brand the client's website never mentions)

### U9 — Grace & Co. is absent from the client's site entirely (HIGHEST VOLUME OF UNSOURCED COPY)
The strings "Grace", "candle", and "soy" appear **nowhere** in any of the four page snapshots or in
any of the 9 pages in their sitemap. A Facebook page named "Grace & Co." does exist
(`facebook.com/graceanco`) but publishes no scent list, no descriptions, and no prices we could
read. Everything below is therefore unsourced:

| Claim | Where |
|---|---|
| "American-grown soy wax, a carefully tested wick that burns long, even, and nearly soot-free" | v1 `grace-and-co.html`; v3 `family/GraceAndCo.tsx:271-277` |
| "Hand-poured in small batches right here at Long Pond" | both |
| Badges "AMERICAN-GROWN SOY / SMALL BATCH / LONG, EVEN BURN" | v3 `GraceAndCo.tsx:186` |
| **Scent names**: Long Pond Sunset, Winter Sangria, Toasted Pumpkin, Blueberry Cheesecake, Crisp Apple, Seasonal Pours | both |
| **Fragrance notes**: "Pomegranate, davana & peppercorn over cedar, amber, patchouli & musk" etc. | both |
| "the one burning by the pastry case at Woodys… in the original amber jar" | v3 `:314` |
| "returns every November, while the batch lasts" | v3 `:321` |
| "The scent guests ask about most" | v3 `:335` |
| "we'll arrange delivery" | v3 `:626` |
| "Grace & Co. candles are **also sold in-store at Woodys Coffee Co.**" | v3 `:704` |
| "Grace & Co. candles are **poured on-site and sold in-store**" | v1 `woodys-coffee.html` |
| "Grace & Co. candles **on the shelf** to take home" | v1 `woodys-coffee.html` |
| "Smell something wonderful at the coffee bar? That's Grace & Co., burning by…" | v3 `WoodysCoffee.tsx:757` |
| "Her **search for the perfect candle** became Grace & Co." | v3 `family/Family.tsx:412` |
| Price placeholders "$XX" ×6 | v1 `grace-and-co.html` — **must not ship** |

- **Fix:** treat the whole Grace & Co. page as client-input-pending. Get from the client, in
  writing: the real scent list, whether it is soy, whether it is poured on the property, whether it
  is stocked at Woodys, and prices. Until then either unpublish the page or reduce it to what the
  Facebook page supports (the brand exists, message to order).

## Tier 4 — People, attribution and origin stories

### U10 — Surname "Beauchamp" attached to Stacey and Clint (MEDIUM)
- **Claim:** "STACEY & CLINT BEAUCHAMP" (v3 `about/About.tsx:460`); "the Beauchamp family of
  Beauchamp Acres" (v1 `about.html`, v3 `About.tsx:205`); "Owned and operated by the **Beauchamps**"
  (v3 `About.tsx:503`); "Your hosts **Stacey and Clint Beauchamp**" (image alt).
- **Client's site:** names "**Stacey and Clint**" only inside guest testimonials, and names
  "**Beauchamp Acres, LLC**" as the owning entity. It never connects the two, and never says
  "owned and operated by" a family.
- **Rewrite:** "Stacey and Clint" without the surname, and "owned by Beauchamp Acres" (their exact
  phrasing) until confirmed.

### U11 — Stacey named as founder of Slate & Pearl (MEDIUM)
- **Claim:** "**Founder Stacey Beauchamp** has spent twenty years bringing wedding dreams to life"
  (v3 `family/SlateAndPearl.tsx:199`).
- **Source says:** slateandpearlevents.com describes an unnamed "true romantic at heart" with 20
  years' experience; its own copyright reads "K. Reed" (a Wix placeholder). No page names Stacey as
  founder. v1 correctly writes "**our founder**" with no name.
- **Rewrite:** match v1 — "our founder".

### U12 — Fabricated family origin story (MEDIUM)
- **Claim:** "What began as a family property became a place where celebrations come to life.
  Stacey's twenty years of design experience became Slate & Pearl Events. Her search for the perfect
  candle became Grace & Co. And because no wedding morning should start without a great latte,
  Woodys Coffee Co. opened its window right on the property."
- **Where:** v3 `family/Family.tsx:410-414`, section titled "How It Grew — FROM ONE DREAM, FOUR."
- **Client's site:** contains no history of how any of the ventures started.
- **Rewrite:** describe what each brand *is* (all verifiable) and drop the causal narrative.

### U13 — "Stacey and Clint pour their hearts into every event" stated by the venue (LOW-MEDIUM)
- **Where:** v1 `about.html`; v3 `about/About.tsx:464`.
- This is a paraphrase of guest praise, restated in the venue's own voice as fact. Softer fix:
  present it as a quote, or "our guests will tell you…" only.

### U14 — Featured-wedding couple names (LOW-MEDIUM)
- **Claim:** "Cheers to the Hiers"; "**Danielle & Blake**"; "Filmed by **Maudie Lucas Photography**".
- **Where:** v1 `gallery.html`; v3 `gallery/data.ts`.
- "Hiers" is traceable to the testimonial signature "Jessica Hiers" ✓, but "Danielle & Blake" and
  the Maudie Lucas credit appear nowhere on the client's site. (Maudie Lucas *does* appear as a
  supplied asset filename, `brand_assets/interim/maudie-lucas-film.mp4`, so the credit is likely
  right — but get written confirmation, and get the couples' consent to be named.)

## Tier 5 — The v3 Journal (14 fabricated articles)

### U15 — v3 `pages/journal/Journal.tsx` invents an entire blog (HIGH)
The client has a **real blog with 14 real posts** (verified via `blog-feed.xml`). v1's `blog.html`
lists those real titles correctly. **v3 replaces them with 14 newly written articles**, of which
only three titles overlap with anything real, and all bodies are invented — several signed as if
the owners wrote them ("FROM STACEY", "FROM CLINT", "FROM THE FAMILY").

Specific unsourced factual assertions inside them:

| Claim | Line |
|---|---|
| "start vows about **ninety minutes before sunset** in spring and fall, **two hours in winter**… **We keep a season-by-season chart** for our couples" (signed FROM CLINT) | Golden Hour article |
| "Our answer has become **a genuine Long Pond tradition: a round of skeet**, a proper latte from Woodys, and a game of pool in the guys lounge" — "skeet" appears nowhere on the client's site | The Groom article |
| "Our Everything package exists **because we got tired of watching couples stitch together twelve contracts** for one afternoon" | All-Inclusive article |
| "**We have run hundreds of these** — we will run yours" (sparkler send-offs) | Sparkler article |
| "the answer to the first two is **a thirteen-hour day**…" — 13h ✓ but presented inside invented editorial | `:39` |
| "**Why 2027 Dates Are Booking Now**… routinely claimed eighteen to twenty-four months out" | see U8 |

- **Fix:** either replace the Journal with the client's 14 real posts (as v1 does), or clearly mark
  these as new content the client must review and approve before publication. Do **not** ship
  owner-signed articles the owners did not write.

### U16 — "the 7 AM first pour is a Long Pond tradition" (MEDIUM)
- **Where:** v3 `family/WoodysCoffee.tsx:573`; v1 `weddings.html` timeline scene 1
  ("**7:00 AM** — First light, first pour").
- **Partly verified:** the client *does* say Woodys is "ready to serve your entire bridal party on
  the morning of your big day" and that it is "our treat". The **7 AM time** and the word
  "**tradition**" are ours.
- **Rewrite:** "Woodys serves your bridal party on the morning of your wedding — complimentary when
  you book with us" (this is stronger *and* fully sourced).

## Tier 6 — Amenity and flavor text without a source

| Claim | Where | Note |
|---|---|---|
| "**chandelier-lit** White Barn", "under the barn's chandelier", "Chandelier light over the farm tables" | v1 `weddings.html`, `packages.html`, `vendors.html`; v3 `Experience.tsx`, `Spaces.tsx`, `DayTimeline.tsx`, `CeremonySites.tsx`, gallery captions | "chandelier" is never used on the client's site. Likely true from their photos — confirm, or soften to "warm overhead light". |
| "**arched openings** to the marsh" | v1 `about.html`; v3 `About.tsx:344`, `CeremonySites.tsx` | Same — image-derived, not stated. |
| "a **pool table**" in the guys lounge | v3 `Spaces.tsx`, Journal, gallery captions | Visible in their Guys Lounge gallery photos; not in their text. Low risk. |
| "**Floral china, lace**" (tea room) | v3 `Spaces.tsx` | Image-derived. |
| "**Brick**" (guys lounge) | v3 `Spaces.tsx` | Image-derived. |
| "the **serene waters of Long Pond itself**" | v1 `about.html`; v3 `About.tsx:212` | Their site says "marsh front"; a pond named Long Pond is implied by the name only. |
| "**bridal showers**, luncheons, **holiday parties**" | v1 `packages.html`, `vendors.html`; v3 `Faq.tsx`, `contact/Contact.tsx`, InquiryForm event types | Client says only "weddings, corporate events, reunions and a variety of other gatherings, both professional and personal". These specific event types are ours. Low risk but unsourced. |
| "**Golden hour**… in **January, about 6:00 PM**" | v1 `vendors.html` FAQ; v3 `Faq.tsx:846` | A specific, checkable time we made up. Remove or confirm. |
| "you simply **cannot take a bad picture here**", "Couples and photographers alike tell us the same thing" | v3 `gallery/PhotographersNote.tsx` | Escalation of "This adequate space is a photographers dream." |
| "**Latte of the Day** — past favorites include **Chocolate Covered Strawberry**" | v1 `woodys-coffee.html` | Not on their menu at all. |
| "**Bottled** grab-and-go bottles **with the Woodys label**" | v1 `woodys-coffee.html` | Menu lists a "Bottled $5" size only; branding claim is ours. |
| "**Pastries & Treats** — fresh-baked sweets" | v1 `woodys-coffee.html`; v3 hero "fresh pastries" | Their menu lists **croffles only**. Their /general-7 page mentions ground coffee beans. "Pastries" is a generalisation. |
| "**croissant-waffles**" (definition of croffle) | v3 `WoodysCoffee.tsx:309` | Generally true, but an addition to their menu text. |
| "the **estate** coffee bar", "**MADE AT LONG POND**" | v3 `Family.tsx` | Reasonable, unsourced framing. |
| "Tuxedo — **mocha, caramel drizzle**" (v3 drops "Rich") | v3 `WoodysCoffee.tsx:164` | Trivial. |
| "**Placeholder — third guest quote to be provided by the client**" (third testimonial slot) | v1 `index.html` | Explicitly a placeholder. **Must not ship.** v3 correctly ships only the two real testimonials. |
| "Long Pond Plantation logo" / Instagram `@longpondplantationevents` | v1 + v3 | Instagram handle ✓ verified from their site. |

---

# SUMMARY OF REQUIRED CLIENT QUESTIONS

1. Grace & Co. — is it soy? poured on the property? sold at Woodys? real scent list and prices?
2. Is Woodys open every day, or does it close in peak wedding season?
3. Do you want the Prescription Outdoors pickup and/or the 8350 U.S. 19 address on the site?
4. Catering: is light catering available outside the Everything But The Dress package? Are outside
   caterers permitted?
5. How many ceremony sites are there, and what do you call them?
6. Confirm the preferred-vendor list (and that each vendor consents to being listed).
7. Confirm Stacey and Clint's surname, and whether Stacey is the named founder of Slate & Pearl.
8. Are 2027 dates the right thing to advertise? What is actually open?
9. Tour length/price/format — anything you want us to state?
10. Do you run an SMS program? If not, the consent checkbox comes off the form.
11. Approve or replace the 14 v3 Journal articles (the client's real 14 posts are available and
    already used in v1).
12. Names/consent for the featured couples ("Danielle & Blake") and the Maudie Lucas credit.
