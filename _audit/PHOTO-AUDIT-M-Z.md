# PHOTO AUDIT — assets/img/ files M–Z
Auditor pass: every file opened and visually inspected. Descriptions are literal only.
Scope: 38 files in `/assets/img/` beginning with m–z.

Note on file layout: `assets/img/g/<name>.jpg` are resized duplicates of the root-level
files used by `gallery.html`. Spot-checked (sweetheart-table, wedding-cake,
wedding-party-cheer, moment-couple) — the `g/` copies are the SAME photographs at lower
resolution, so every verdict below applies to both copies.

Note on v3: the v3 React source (`data.ts`, `pages/**`) is not present in this repository.
v3 captions are taken from USAGE-MANIFEST.md as given and audited against the pixels.

---

### makeup-fireplace.jpg
SEEN: Interior room with a tan stacked-stone fireplace and a gold/bronze magnolia-leaf wreath hung above it; a groom in a black tuxedo feeding something to a laughing bride in a white satin halter gown with a long cathedral veil; at left a tiered gold stand of frosted cupcakes, a glass drink dispenser of orange punch, plastic cups, and a small plate with two berry tarts on a cream pedestal table; a brass lantern with a pillar candle on the right hearth; terrazzo/crazy-paved tile floor. No text or signage visible.
CLIENT SECTION: not listed in USAGE-MANIFEST.md.
OUR USAGE: none found — `grep` for `makeup-fireplace.jpg` across all .html returns no hits. Unused asset.
VERDICT: OK (unused). Advisory: the fireplace, wreath and terrazzo floor are identical to `tea-room.jpg` and `sitting-room.jpg`, so this is the TEA ROOM, not a makeup/bridal-suite space. The filename "makeup-" is misleading — no makeup is being applied anywhere in the frame. If it is ever put into use, caption it as the tea room (e.g. "A first bite by the tea room fireplace") and never as a getting-ready or bridal-suite photo.

### marsh-birds.jpg
SEEN: Aerial/drone view of a shallow marsh — open water at left reflecting clouds, lily-pad and vegetation mats at right, tree line on the horizon; roughly ten white egrets in flight and two standing in the shallows. 16:9 frame (film still). No text.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 weddings.html "Birds over Long Pond"; v1 gallery.html (section "The Grounds") "Birds over Long Pond".
VERDICT: OK.

### moment-bride-oak.jpg
SEEN: A bride in a white satin high-neck halter gown holding her skirt, walking toward camera down a narrow, brightly lit WHITE INTERIOR HALLWAY; a man in a black tuxedo with bow tie stands blurred against the wall behind her right shoulder. No oak trees, no outdoors, no text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html (section "Moments at Long Pond") "Heading to the ceremony"; v3 data.ts "On her way | The bride heading to the ceremony".
VERDICT: OK — the captions make no location claim and are consistent with what is shown. Advisory: the filename `-oak` is wrong (this is an interior corridor); do not let the filename drive any future caption such as "beneath the oaks".

### moment-bridesmaids.jpg
SEEN: Six women in hot-pink/fuchsia gowns (one in a pink floral print) flanking a bride in a white lace fit-and-flare gown with veil; two raise pink-and-white bouquets overhead; setting is a lawn beneath large live oaks with Spanish moss and palmetto undergrowth. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html "Bridesmaids in pink"; v3 data.ts "The bridesmaids | Bridesmaids in pink beneath the oaks".
VERDICT: OK — literally accurate on both counts (pink, oaks).

### moment-bw-kiss.jpg
SEEN: Black-and-white. A bride and groom kissing while standing on a checkerboard outdoor dance floor laid on grass; behind them a lawn beneath enormous moss-draped live oaks, a crystal chandelier hanging from a branch, a set of chairs/tables at left, a bench and a parked car far right. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html "A kiss beneath the oaks"; v3 data.ts "Beneath the oaks | A kiss beneath the live oaks, in black and white".
VERDICT: OK.

### moment-car.jpg
SEEN: A bride in a lace-and-tulle gown and a groom in a black tuxedo with mirrored sunglasses posed leaning against the front of a blue vintage sedan (round quad headlights, chrome grille); haze/fog effect drifting at ground level; live oaks with Spanish moss and palmetto behind. A blue-and-white bouquet rests on the hood. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html "The vintage car"; v3 data.ts "The send-off | The vintage car send-off".
VERDICT: MISMATCH (minor) — "send-off" is not supported. Nobody is departing, no guests, no sparklers, doors closed, the couple is posed for a portrait with a fog machine running. Suggested caption: "The vintage car" or "A portrait with the vintage car". Keep the v1 wording; change the v3 title/alt.

### moment-couple.jpg
SEEN: A bride in a white lace gown with cathedral veil and a coral/pink rose bouquet standing back-to-back (her shoulder against his) with a bearded, greying man, roughly 40s–50s, in a navy three-piece suit with a hot-pink bow tie and brown boots, hands in pockets, looking away from her. Behind them: lawn, oaks, and the white barn with an arched glass door. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html (section "Moments at Long Pond") "Together beneath the trees"; v3 data.ts "Together | A quiet moment beneath the trees".
VERDICT: AMBIGUOUS — flag for client confirmation. The pose (back-to-back, not touching, groom-figure facing away, bride holding a bouquet and about to tap his shoulder) is the standard FIRST-LOOK setup, and the man's pink bow tie matches the bridesmaids' fuchsia in `moment-bridesmaids.jpg`. He may be the groom or he may be the father/stepfather. Our captions ("Together", "A quiet moment") read romantically. If he is not the groom, this is a real misrepresentation on a bride-facing page. Recommend a neutral caption until confirmed: "Before the first look".

### moment-dip-kiss.jpg
SEEN: A groom in a black tuxedo dipping a bride in a lace-and-tulle gown into a kiss beneath a rustic wooden cross-beam arbor dressed with white roses, hydrangea and eucalyptus at the top and both posts; live oaks with Spanish moss and palmetto behind; grass underfoot. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html "The dip kiss"; v3 data.ts "The dip kiss | A dip kiss at the ceremony arbor".
VERDICT: OK.

### moment-first-look.jpg
SEEN: A bride, seen from behind in a white floral-appliqué gown with a long veil, holding a coral/pink bouquet, reaching around a wooden porch post; facing her, an elderly man with white hair and wire glasses in a navy suit with a red tie, smiling. Covered concrete porch of a white board-and-batten building; a galvanised urn of pink and white flowers, farm chairs and a signing table at left. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html "Father's first look"; v3 data.ts "The first look | A father sees his daughter for the first time".
VERDICT: OK — the age difference and the reveal-around-a-post staging support the "father" reading. (Note this is a DIFFERENT man from the one in `moment-couple.jpg`; the two photos are from different weddings.)

### moment-golden.jpg
SEEN: A groom in a black tuxedo holding an open champagne bottle spraying foam, arm around a laughing bride in a lace-bodice tulle gown; both standing on a checkerboard outdoor dance floor on the lawn; backlit golden sun through moss-draped live oaks, a crystal chandelier hanging from a branch, string lights, a wooden arbor in the far background. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html "Champagne pop"; v3 data.ts "The champagne pop | A champagne pop on the dance floor".
VERDICT: OK — it is genuinely a dance floor (the outdoor checkerboard floor), so the caption holds.

### moment-sunset-arch.jpg
SEEN: A white painted pointed-gable arch/gate set into a white four-rail fence line at the edge of an open marsh field; a bearded man in a tan/cream blazer and dark trousers leaning against the left post, and a bride in a strapless lace mermaid gown holding a pampas/dried bouquet standing at the right post, both looking toward the low sun on the right horizon. No officiant, no guests, no chairs. No text.
CLIENT SECTION: old site → Grounds.
OUR USAGE: v1 gallery.html (section "Moments at Long Pond") "Sunset vows"; v3 data.ts "Sunset vows | Sunset vows at the arbor".
VERDICT: MISMATCH (moderate) — "Sunset vows" claims a ceremony. There is no ceremony here: no officiant, no witnesses, no seating, and the two are not facing each other or holding hands. It is a posed sunset portrait at the field gate. It also is not an "arbor" — it is a gate/arch in the pasture fence. Suggested caption: "Sunset at the field gate" or "Golden hour by the marsh fence".

### moment-together.jpg
SEEN: A bride in a white satin high-neck gown with a very long veil and a groom in a black tuxedo standing ON TOP OF A BED (dark wood sleigh bed, white bedding) inside a pale bedroom, holding both hands and facing each other; gold-and-glass ceiling flush-mount fixture throwing a starburst on the ceiling; sheer-curtained window at right. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html (section "Moments at Long Pond") "A quiet moment".
VERDICT: OK — caption is vague enough to be true. Advisory: the room is a bedroom (almost certainly the bridal suite), so if the caption is ever made more specific, tie it to the suite, not to the barn or grounds.

### moment-walk.jpg
SEEN: Rear view of a bride in a low-back lace gown holding a dried/pampas bouquet, hand in hand with a bearded man in a tan blazer, white shirt, blue jeans and brown boots, walking away across a mown lawn toward open marsh and a distant tree line. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 gallery.html "Hand in hand"; v3 data.ts "Hand in hand | Walking the grounds hand in hand".
VERDICT: OK.

### place-setting.jpg
SEEN: Close-up of a dressed farm table — white plates on clear chargers with gold beaded rims, stemmed water goblets, a eucalyptus garland runner, pillar candles, cutlery; wooden cross-back chairs and more set tables receding out of focus; white vertical wall panelling behind. 16:9 frame (film still). No text.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 index.html "Styled place setting"; v1 gallery.html (section "Styled Details") "Place setting detail"; v3 data.ts "The place setting | A place setting detail".
VERDICT: OK.

### reception-flowers.jpg
SEEN: A tall martini-style glass vase of peach roses, spray roses, white lisianthus and baby's breath in the foreground; behind it, out of focus, a crowd of guests in a modern banquet room with MAGENTA/PINK UPLIT panelled walls, white chair covers with folded white napkins, and a teal-lit bar edge at right. 16:9 frame. No text.
CLIENT SECTION: not listed in USAGE-MANIFEST.md.
OUR USAGE: none found — `grep` for `reception-flowers.jpg` across all .html returns no hits. Unused asset.
VERDICT: OK (unused) — but FLAG FOR REMOVAL. This is not Long Pond Plantation. The pink-uplit panelled interior, white spandex chair covers, modern bar and generic crowd match nothing else in the library and match none of the client's six sections; it reads as licensed stock. It must never be published under a Long Pond caption. Recommend deleting the file so it cannot be picked up by mistake.

### settee.jpg
SEEN: An ornate carved white-and-gold Rococo-style two-seat settee against a white wall below a two-pane window; to its right a slim gold-frame pedestal table holding a low arrangement of white ranunculus, roses and daisies; pale blonde wood-plank floor; live oak trunks visible through the window and through a second opening at right. No text.
CLIENT SECTION: old site → Details.
OUR USAGE: v1 slate-and-pearl.html "Rentals and decor"; v1 gallery.html (section "Styled Details") "The rental settee"; v3 data.ts "The settee | The rental settee".
VERDICT: OK (with one caveat) — the object and setting are described accurately. "Rental" and the Slate & Pearl attribution are not verifiable from the photo or from the client's own gallery (they file it under Details with no vendor credit). Low risk; consider "The settee" alone unless the client confirms the vendor.

### sitting-room.jpg
SEEN: A large, bright, near-empty room: a mint-green leather sofa and a cream-and-walnut French armchair on a pale blonde floor, a small carved gold-leg side table with a low white/yellow floral arrangement, a drum-shade pendant, a full-height window wall at left looking onto live oaks, and at right the same tan stacked-stone chimney breast with the gold magnolia wreath and open hearth seen in `tea-room.jpg`. A doorway and hall lead off centre. No text.
CLIENT SECTION: old site → Tea Room.
OUR USAGE: v1 weddings.html "The sitting area"; v1 gallery.html (section "The Tea Room") "The sitting area"; v3 data.ts "The sitting room | The sitting area of the historic home".
VERDICT: MISMATCH (minor) — the v3 alt "the sitting area of the HISTORIC HOME" adds a building claim the client's own gallery does not make; they file this photo under Tea Room, and the fireplace/wreath prove it is the same structure as `tea-room.jpg`. Nothing in the frame identifies a historic home. Suggested v3 alt: "The sitting area off the tea room". The v1 captions are fine as-is.

### sp-bar-cart.jpg
SEEN: An open lawn under moss-draped live oaks and pines; a curved wooden bar with a tufted brown-leather front, a bartender in a black polo pouring a drink, bottles of tequila/whiskey and a small framed drinks menu on the bar top, champagne flutes; at right a groom in a black tuxedo and a bride in a tulle gown holding a blue-and-white bouquet walking toward the bar; potted plants and a green-tiered fountain at far right. Menu text not legible.
CLIENT SECTION: old site → Grounds.
OUR USAGE: v1 index.html "Slate and Pearl styled outdoor bar"; v1 about.html "Slate and Pearl Events styled decor"; v1 slate-and-pearl.html "Styled tablescape by Slate and Pearl Events"; v1 gallery.html (section "The Grounds") "The outdoor bar".
VERDICT: MISMATCH (moderate) — two problems.
(a) `slate-and-pearl.html` calls it a "styled TABLESCAPE". There is no tablescape in this photo: no dining table, no place settings, no centrepiece. It is a portable bar being staffed. Suggested: "Styled outdoor bar by Slate and Pearl Events".
(b) The Slate & Pearl attribution on three pages is unverifiable — the client's own gallery files this under Grounds with no vendor credit, and no Slate & Pearl branding appears in the frame. Have the client confirm the credit or drop it; the gallery caption "The outdoor bar" is the only one that is safe as written.

### sp-logo.jpg
SEEN: A black-on-white logo mark: an interlocked serif "S" and "P" monogram with the words "SLATE & PEARL" letterspaced across the middle. Visible text: "SLATE & PEARL".
CLIENT SECTION: not on their site — film still / supplied asset.
OUR USAGE: v1 slate-and-pearl.html "Slate &amp; Pearl Events monogram".
VERDICT: OK — the wordmark reads "SLATE & PEARL" exactly as captioned. (The word "Events" is not part of the mark, but the caption is describing the company, not quoting the logo.)

### stacey-portrait.jpg
SEEN: A studio-lit portrait of a smiling woman with long brown hair in a coral/pink ruffled blouse and a pearl necklace, both forearms on a granite kitchen counter, holding a green-and-white ceramic mug; behind her a residential interior — a window onto greenery, a dark leather sofa with a pillow, and a wrought-iron staircase balustrade; at right on the counter a white cake stand of streusel-topped muffins and a black wire caddy holding a dark amber SPRAY BOTTLE with a green-and-white label. I cropped and enlarged the bottle: the label is legible only as a partial "...ON" and cannot be attributed to a brand. No other text visible; the woman is not named anywhere in the frame.
CLIENT SECTION: old site (unsectioned).
OUR USAGE: v1 about.html "Stacey Beauchamp at Long Pond Plantation"; v1 slate-and-pearl.html "The Slate and Pearl founder".
VERDICT: MISMATCH (moderate) — two problems.
(a) "at Long Pond Plantation" is a location claim the photo does not support. The setting is a private residential kitchen with a granite counter and an iron-rail staircase; it matches no space in the client's Tea Room / Bridal Suite / Guys Lounge / Grounds / White Barn imagery. Suggested alt: "Stacey Beauchamp" (drop the location).
(b) The same photo is used to assert two different identities/roles on two pages, and the client's own site files it with no section and no caption to corroborate either. The photo contains no name, no badge, no branding. Both identity claims need the client's written confirmation before publication; a home-goods spray bottle is the only product cue in frame and it points, if anything, toward the Grace and Co. side of the family businesses rather than Slate & Pearl.

### sunset-arch-oaks.jpg
SEEN: Golden-hour lawn under two huge moss-draped live oaks with the sun flaring low through the trunks and water/marsh on the horizon; roughly a dozen backless wooden benches in two blocks facing left toward a rustic wooden cross-frame arbor draped with white fabric and pink/white florals; at right a freestanding white door and a white frame flanked by ferns in whiskey barrels; string lights overhead. No text.
CLIENT SECTION: old site → Grounds.
OUR USAGE: v1 weddings.html "Ceremony arbor beneath the oaks at sunset"; v1 gallery.html (section "The Grounds") "The arbor at sunset"; v3 data.ts "The arbor at sunset | The arbor at sunset".
VERDICT: OK — the arbor, the oaks and the sunset are all genuinely present.

### sunset-benches-arch.jpg
SEEN: Elevated view down a grass aisle between two blocks of about ten backless wooden benches, facing a small draped wooden arbor with floral posts; enormous moss-draped live oaks left and right, café string lights strung between them, the sun setting through the tree line over open water/marsh; a white fence and a white gable arch visible far left. No text.
CLIENT SECTION: old site → Grounds.
OUR USAGE: v1 weddings.html "Sunset over the ceremony site"; v1 gallery.html (section "The Grounds") "Golden hour at the ceremony site".
VERDICT: OK.

### sunset-dance.jpg
SEEN: A bride in a strapless ivory ballgown and a bearded man in a dark suit STANDING STILL, holding one hand between them, beside a white painted gable arch in a white four-rail fence at the edge of a marsh field; pink and mauve sunset cloud, a cabbage palm and rose bushes. Both are standing flat-footed on grass; there is no dance floor, no music setup, no motion. 16:9 frame (film still). No text.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v3 data.ts "The sunset dance | Dancing as the sun goes down".
VERDICT: MISMATCH (moderate) — nobody is dancing and there is no dance floor. This is the same white field gate as `moment-sunset-arch.jpg`, with a couple posed hand-in-hand at sunset. Suggested caption: "Sunset at the gate" or "Golden hour by the marsh". If a genuine dancing image is wanted here, `moment-golden.jpg` or `moment-bw-kiss.jpg` are actually on the dance floor.

### sunset-field-couple.jpg
SEEN: High/drone-angle view of a groom in a black tuxedo with a white boutonnière leading a bride in a strapless ivory ballgown (she is lifting her skirt) across a wide mown lawn toward the camera; behind them scrub, cabbage palms and a tree line with the sun setting directly behind. 16:9 frame (film still). No text.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 index.html "Couple at sunset over the marsh field"; v1 weddings.html "Couple at sunset over the marsh field"; v1 gallery.html (section "Moments at Long Pond") "Sunset over the marsh field"; v3 data.ts "Into the sunset | The couple walking the marsh field at sunset".
VERDICT: OK.

### sunset-roses-column.jpg
SEEN: A freestanding rustic wooden cross-beam arbor on a lawn, its left post and right post dressed with clusters of white roses, hydrangea and eucalyptus, with a length of ivory gauze fabric draped over the top beam and down the right post; pine and live-oak trunks behind, open field and a distant tree line, FLAT OVERCAST WHITE DAYLIGHT — no sun, no warm colour, no shadows. 16:9 frame (film still). No text.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 gallery.html (section "Styled Details") "Floral-draped arbor"; v3 data.ts "The florals | A floral-draped column at sunset".
VERDICT: MISMATCH (minor–moderate) — the v3 alt is wrong twice. (a) "at sunset": the light is flat, cool, overcast midday; there is no sunset anywhere in the frame. (b) "column": it is a two-post timber arbor, not a column. Suggested v3 alt: "A floral-draped arbor". The v1 caption "Floral-draped arbor" is already correct.

### sweetheart-table.jpg
SEEN: A CATERING BUFFET LINE under an open-sided timber pavilion. A woman in a black work polo with a name-badge-style logo leans in holding a white plate of pulled pork; a boy in a grey ball cap and black polo (with a round logo on the chest) stands behind the chafing dishes wearing food-service gloves; a row of stainless chafing dishes with domed lids holds pulled pork and glazed meat; a grey insulated food-transport cabinet and orange bags of charcoal/bread sit at right; two more hands reach in from the left holding plates. In the background: a white bar with two staff behind it, a marquee-letter "R" light, a chandelier, seated guests, and parked cars/trees outside. There is NO sweetheart table, no couple, no place settings for two. 16:9 frame (film still). Logos on the polos are not legible.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 packages.html "Sweetheart table in the event barn" (full-bleed hero-scale image); v1 gallery.html (section "Styled Details") "The sweetheart table"; v3 data.ts "The sweetheart table | The sweetheart table".
VERDICT: **MISMATCH (SEVERE)** — the photograph is a buffet/catering service line and is captioned as a sweetheart table in three places, including a large image on the packages page. A bride reading "Sweetheart table" and seeing a chafing-dish buffet is a direct credibility hit. Suggested caption: "The buffet line" / "Dinner service under the pavilion", or swap the image for an actual two-top. Note also that this is a covered outdoor pavilion, not the interior of the event barn, so "in the event barn" is a second error in the packages.html alt.

### tea-bride-mug-2.jpg
SEEN: Shot through a window with reflections: a bride's torso and arms in a white satin high-neck halter gown with a long tulle veil, seated at a small round wooden pedestal table; a white gold-rimmed coffee cup on a matching saucer in front of her; a lit taper candle in a tall glass hurricane at left; a dark sleeve (a second person) entering the frame at lower left; more café tables, cups and candles behind. Her face is out of frame. No text.
CLIENT SECTION: old site → Tea Room.
OUR USAGE: v1 gallery.html (section "The Tea Room") "Coffee before the ceremony".
VERDICT: OK.

### tea-bride-mug.jpg
SEEN: The same scene as above, wider and with her face included: a smiling bride in a white satin high-neck halter gown with a long veil, seated at a small round wooden table with a gold-rimmed cup and saucer, shot through a window that reflects the tree canopy and a brick/stone chimney; a lit taper candle in a hurricane at left; a table with cups behind her right shoulder. No text.
CLIENT SECTION: old site → Tea Room.
OUR USAGE: v1 weddings.html "Bride with her morning coffee in the tea room"; v1 gallery.html "Morning coffee"; v3 data.ts "Morning coffee | Coffee in the tea room before the day begins".
VERDICT: OK — the round café tables, the gold-rimmed cups and the candle hurricanes match `tea-room.jpg` and `tea-window-tables.jpg`, so the tea-room claim holds.

### tea-couple-woodwall.jpg
SEEN: A bearded man in a navy suit with an open-collar white shirt standing beside a smiling blonde bride in a long-sleeved lace-appliqué gown, their hands joined at waist height; behind them the tan stacked-STONE chimney breast (not a wood wall) with the bottom edge of the gold magnolia wreath at the top of the frame and a wooden hearth cabinet door at right; a white teapot and cup on a table at lower left. No text.
CLIENT SECTION: old site → Tea Room.
OUR USAGE: v1 weddings.html "Couple in the tea room"; v1 gallery.html (section "The Tea Room") "A moment in the tea room"; v3 data.ts "A moment inside | A couple in the tea room".
VERDICT: OK — the stone chimney and gold wreath are the tea room's, so the room claim is correct. Advisory only: the filename says "woodwall" but the backdrop is stacked stone; do not let that filename generate a future caption.

### tea-room.jpg
SEEN: Interior of a long room with a stained tongue-and-groove wood ceiling and exposed beams; a tan stacked-stone chimney breast at left with a gold magnolia wreath, an open brick firebox, a candelabra and a white teapot/cup set on a cream pedestal table beside it; a black-and-gold lantern-cage chandelier hanging centre; four round wooden café tables with wooden cross-back chairs, each set with white cups and glass hurricanes; a wall of windows at right looking onto lawn, live oaks and marsh; terrazzo/crazy-paved tile floor. No text.
CLIENT SECTION: old site → Tea Room.
OUR USAGE: v1 packages.html "Tea room set for a luncheon"; v1 weddings.html "The tea room with fireplace"; v1 gallery.html (section "The Tea Room") "The tea room fireplace"; v3 data.ts "The fireplace | The tea room fireplace".
VERDICT: OK.

### tea-window-tables.jpg
SEEN: Interior view from a dim room toward a bright window wall: a round wooden café table with two wooden cross-back chairs, set with two white cups on patterned saucers and two ivory taper candles in brass holders; a leafy potted shrub on the sill and a fiddle-leaf fig leaf top right; through the glass, a lawn under moss-draped live oaks with a white fringed patio umbrella, string lights, a white fence and a white gable arch in the distance, and open marsh beyond. No text.
CLIENT SECTION: old site → Tea Room.
OUR USAGE: v1 weddings.html "Tea room tables by the window"; v1 gallery.html (section "The Tea Room") "Tables by the window"; v3 data.ts "By the window | Tea room tables by the window".
VERDICT: OK.

### wedding-cake.jpg
SEEN: A groom in a dark suit with a white boutonnière and a bride in a strapless pale-ivory/sage ballgown holding hands and walking across an open grass field, the bride fanning her skirt out; pink-and-gold sunset sky, low sun on the horizon, scrub and cabbage palms behind. There is NO cake, no dessert table, no food of any kind. 16:9 frame (film still). No text.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 gallery.html (section "Styled Details") "Custom wedding cake"; v3 data.ts "The cake | The custom wedding cake".
VERDICT: **MISMATCH (SEVERE)** — the file is captioned "Custom wedding cake" in the gallery's Styled Details grid and there is no cake in the photograph. A bride scanning the details section for cake/dessert inspiration hits a sunset couple portrait. Suggested caption: "Sunset in the field" — or better, remove it from Styled Details entirely (it duplicates the sunset-couple content already in the Moments section) and source a genuine cake photo.

### wedding-party-cheer.jpg
SEEN: A bride in a long-sleeved ivory gown with a fingertip veil and a bearded groom in a black suit with a white boutonnière, kissing beneath a rustic timber arbor dressed with white roses, hydrangea, eucalyptus and ivory draped gauze; open lawn, palms and marsh behind; a black object (a videographer's rig or guest's arm) intrudes at the right edge. It is the CEREMONY KISS — the couple ALONE. There is no wedding party, no group, no raised glasses, no cheering. 16:9 frame (film still). No text.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 about.html "Events and catering"; v1 gallery.html (section "Moments at Long Pond") "The wedding party celebrates"; v3 data.ts "The wedding party | The wedding party celebrating after the ceremony".
VERDICT: **MISMATCH (SEVERE)** — two distinct errors on the same file.
(a) "The wedding party celebrates" / "The wedding party celebrating after the ceremony" describes a group of bridesmaids and groomsmen that simply is not in the frame. It is a two-person first-kiss photo. Suggested caption: "The first kiss" / "Sealed at the arbor".
(b) `about.html` uses this same first-kiss photo as the illustration for **"Events and catering"**. A ceremony kiss is not a catering image; if the About page has a catering block it needs a food/service photo (the buffet frame currently mislabelled as `sweetheart-table.jpg` would actually be correct there).

### welcome-sign.jpg
SEEN: A long horizontal walnut-stained wood plank sign mounted high on a white interior wall, above a doorway/opening that looks through to a stained wood-beam ceiling and a hanging light fixture, with window tops below. Visible text on the sign, in a cream script: **"Long Pond Plantation"** and, at the lower right, **"Est. 2024"**. 16:9 frame (film still).
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 gallery.html (section "Styled Details") "Welcome sign"; v3 data.ts "Welcome | Custom welcome signage".
VERDICT: MISMATCH (minor) — this is the VENUE'S OWN permanent branded name sign reading "Long Pond Plantation / Est. 2024", not a wedding welcome sign and not "custom" signage made for a couple. Sitting in a "Styled Details" grid next to `always-you-sign.jpg` and `detail-signage.jpg`, it implies bespoke event signage. Suggested caption: "The Long Pond Plantation sign" or "Est. 2024". Also worth confirming with the client that "Est. 2024" is the date they want publicly foregrounded.

### woodys-bottle-card.jpg
SEEN: A hand holding a clear plastic bottle of pale-orange iced coffee with visible caramel/syrup swirls, capped in white; a dark-green wraparound label reading **"LONG POND PLANTATION"** (arched), **"Woodys"** in script over a starburst, and **"COFFEE CO."**; behind it, out of focus, the same round dark-green Woodys logo sign on a light wood surface. This is a tighter crop of the same photograph as `woodys-bottle.jpg`.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 woodys-coffee.html "Bottled iced coffee".
VERDICT: OK.

### woodys-bottle.jpg
SEEN: The same photograph, framed wider and taller: a hand holding the bottled Woodys iced coffee, with the full round green wall/sign behind it legible as **"LONG POND PLANTATION"** around the rim, **"Woodys"** in script, **"COFFEE CO."** below.
CLIENT SECTION: not listed in USAGE-MANIFEST.md.
OUR USAGE: none found — `grep` for `woodys-bottle.jpg` across all .html returns no hits. Unused duplicate of `woodys-bottle-card.jpg`.
VERDICT: OK (unused). No factual issue; it is simply a redundant crop.

### woodys-espresso.jpg
SEEN: Extreme close-up of a naked/bottomless portafilter on a chrome espresso machine, a single stream of crema-coloured espresso falling into a white cup at the bottom edge of the frame; blurred stainless and a milk jug behind. NO Woodys branding, no logo, no room detail, nothing that identifies the location. 16:9 frame.
CLIENT SECTION: old site (unsectioned).
OUR USAGE: v1 index.html "Espresso pour at Woodys Coffee"; v1 about.html "Woodys Coffee Co."; v1 weddings.html "Espresso pouring at Woodys Coffee"; v1 woodys-coffee.html "Latte of the day".
VERDICT: MISMATCH (minor) — `woodys-coffee.html` labels it **"Latte of the day"**. The image is a bare espresso extraction: no milk, no cup of finished drink, no latte art. Suggested alt: "Espresso pouring". Separate advisory: nothing in this frame identifies Woodys or Long Pond; it is a generic espresso close-up that could be stock. Low risk as long as the caption stays generic, but it should not be the hero for a "Woodys Coffee" section on its own.

### woodys-latte.jpg
SEEN: A clear plastic cup of iced latte with a chocolate-drizzled foam top, sitting on a polished round wooden table; the cup carries the dark-green Woodys wrap reading **"LONG POND PLANTATION / Woodys / COFFEE CO."**; behind it, out of focus, a wooden chair back at left and a bright green lawn with what appears to be a covered structure at the top edge. No building or venue landmark is clearly identifiable.
CLIENT SECTION: not on their site — film still.
OUR USAGE: v1 woodys-coffee.html "Woodys Coffee latte with the venue behind".
VERDICT: OK (with a note) — the drink and branding are exactly as captioned. "with the venue behind" slightly overstates it: the background is an unfocused lawn and a partial roofline, not a recognisable view of the venue. Harmless, but "Woodys Coffee latte" alone would be safer.

---

## SUMMARY OF MISMATCHES
Most severe first. "Severe" = a bride would be factually misled about what she is looking at.

1. **sweetheart-table.jpg — SEVERE. A catering buffet line is captioned "The sweetheart table."**
   Chafing dishes, gloved servers, guests holding plates of pulled pork. Used in `gallery.html` Styled Details ("The sweetheart table"), `packages.html` as a large hero ("Sweetheart table in the event barn") and v3 `data.ts`. The packages alt is doubly wrong: it is a covered outdoor pavilion, not the interior of the event barn. → Recaption "Dinner service under the pavilion" or replace with a real two-top.

2. **wedding-cake.jpg — SEVERE. A sunset couple portrait is captioned "Custom wedding cake."**
   No cake, no dessert, no food anywhere in the frame. Sits in the gallery's Styled Details grid and in v3 `data.ts` as "The cake". → Recaption "Sunset in the field" or pull it from Styled Details and source an actual cake photo.

3. **wedding-party-cheer.jpg — SEVERE. The couple's first kiss, alone at the arbor, is captioned "The wedding party celebrates."**
   No bridesmaids, no groomsmen, no group, no toast. In `gallery.html` Moments and v3 `data.ts` ("The wedding party celebrating after the ceremony"). Compounding this, `about.html` uses the same ceremony-kiss photo to illustrate **"Events and catering."** → Recaption "The first kiss"; give the About catering block an actual food/service image.

4. **moment-couple.jpg — SEVERE IF UNCONFIRMED. Possible father-and-bride first-look sold as a romantic couple.**
   Bride stands back-to-back with a bearded, greying man in a navy suit and pink bow tie in the classic first-look setup; captioned "Together beneath the trees" / "A quiet moment beneath the trees." If he is her father and not the groom, this is a misidentification on a bride-facing gallery. → Confirm with the client; use "Before the first look" until then.

5. **stacey-portrait.jpg — MODERATE. Location and identity both asserted without support.**
   Studio portrait in a private residential kitchen (granite counter, iron staircase), captioned "Stacey Beauchamp **at Long Pond Plantation**" on `about.html` and "The Slate and Pearl founder" on `slate-and-pearl.html`. Nothing in the frame identifies the person, the company or the venue, and the client's own site files it unsectioned. → Drop "at Long Pond Plantation"; get both identity claims confirmed in writing.

6. **sunset-dance.jpg — MODERATE. "Dancing as the sun goes down" — nobody is dancing.**
   Couple standing still, holding one hand, beside a white gate in a pasture fence. No dance floor, no music setup. → "Sunset at the gate"; if a dancing shot is wanted, use `moment-golden.jpg` or `moment-bw-kiss.jpg`, which are genuinely on the dance floor.

7. **moment-sunset-arch.jpg — MODERATE. "Sunset vows" — there is no ceremony.**
   No officiant, no guests, no seating; the two are not even facing each other. Also called an "arbor" when it is a gate in the fence line. → "Sunset at the field gate".

8. **sp-bar-cart.jpg — MODERATE. "Styled tablescape by Slate and Pearl Events" — it is a bar, not a tablescape.**
   No table, no place settings, no centrepiece; a bartender is pouring at a leather-front portable bar. The Slate & Pearl credit on three pages is also unverifiable (client files it under Grounds, uncredited). → "Styled outdoor bar"; confirm or drop the vendor credit.

9. **sunset-roses-column.jpg — MINOR/MODERATE. "A floral-draped column at sunset" — flat overcast daylight, and it is an arbor, not a column.**
   → Use the v1 wording, "Floral-draped arbor", everywhere.

10. **welcome-sign.jpg — MINOR. The venue's own permanent name sign presented as bespoke wedding signage.**
    Reads "Long Pond Plantation / Est. 2024". Captioned "Welcome sign" / "Custom welcome signage" inside the Styled Details grid alongside genuine couple signage. → "The Long Pond Plantation sign". Also confirm the client wants "Est. 2024" prominent.

11. **woodys-espresso.jpg — MINOR. "Latte of the day" on `woodys-coffee.html` shows a bare espresso extraction** (no milk, no finished drink). The frame also contains zero Woodys/Long Pond identification. → "Espresso pouring"; do not use it as the sole hero for the Woodys section.

12. **sitting-room.jpg — MINOR. v3 alt says "the sitting area of the historic home"**, a building claim the client's own gallery does not make — they file this photo under **Tea Room**, and the stone chimney and gold wreath prove it is the same structure as `tea-room.jpg`. → "The sitting area off the tea room".

13. **moment-car.jpg — MINOR. "The vintage car send-off"** — a posed portrait with a fog machine, not a departure. → "The vintage car".

14. **woodys-latte.jpg — MINOR. "with the venue behind"** — the background is an unfocused lawn and a partial roofline; nothing recognisable. → "Woodys Coffee latte".

### Library hygiene (not caption errors, but act on these)
- **reception-flowers.jpg — DELETE.** A pink-uplit modern banquet hall with white spandex chair covers and a generic crowd. It is not Long Pond Plantation and matches none of the client's six sections; it reads as licensed stock. Currently unused — remove it so it cannot be published by accident.
- **makeup-fireplace.jpg — misleading filename.** Unused. It is the TEA ROOM (same stone fireplace, gold magnolia wreath and terrazzo floor as `tea-room.jpg`), and nobody is doing makeup. Never caption it as a getting-ready or bridal-suite photo.
- **moment-bride-oak.jpg — misleading filename.** In use and correctly captioned, but the photo is a white interior hallway with no oak in it. Do not let the filename generate an "oaks" caption later.
- **tea-couple-woodwall.jpg — misleading filename.** The backdrop is stacked stone, not a wood wall. Current captions are fine.
- **woodys-bottle.jpg** is an unused, wider duplicate of `woodys-bottle-card.jpg`.
