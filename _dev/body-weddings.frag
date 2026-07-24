    <!-- ======= PAGE HERO: title over full-width photo ======= -->
    <section class="relative h-[54vh] min-h-[380px] overflow-hidden">
      <!-- MEDIA SLOT: wide exterior of the event barn under the oaks -->
      <img src="assets/img/barn-exterior-day.jpg" alt="The Long Pond event barn beneath the live oaks" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20"></div>
      <div class="absolute inset-0 bg-lp-sage mix-blend-multiply opacity-20"></div>
      <h1 class="absolute inset-x-0 top-16 text-center font-display uppercase tracking-hero text-white text-2xl md:text-4xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] rise rise-1">Long Pond Weddings</h1>
    </section>

    <!-- ======= POSITIONING LINE ======= -->
    <section class="text-center px-6 pt-[clamp(3rem,6vw,5rem)] pb-[clamp(2rem,4vw,3.5rem)]">
      <p class="font-display text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">Old-Florida marsh-front wedding venue where mossy live oaks meet timeless Southern elegance</p>
    </section>


    <!-- ======= A DAY AT LONG POND — scroll-pinned story (per design handoff, 6 scenes) ======= -->
    <style>
      #day { position: relative; height: 700vh; background: #0e110b; }
      #day .sticky { position: sticky; top: 0; height: 100vh; overflow: hidden; }
      #day .scene { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity .25s linear; }
      #day .scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(14,17,11,.62) 0%, rgba(14,17,11,.12) 40%, rgba(14,17,11,.78) 100%); }
      #day .eyebrow { position: absolute; top: 96px; left: clamp(20px,5vw,72px); display: flex; align-items: center; gap: 16px; }
      #day .eyebrow span.bar { width: 56px; height: 1px; background: #c2a069; display: inline-block; }
      #day .eyebrow span.txt { font-family: 'Karla', sans-serif; font-size: 11.5px; letter-spacing: .45em; color: #e0c48f; font-weight: 500; }
      #day .caption { position: absolute; left: clamp(20px,5vw,72px); right: clamp(20px,5vw,72px); bottom: clamp(48px,9vh,92px); }
      #day .time { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(18px,1.8vw,24px); color: #e8cf9c; margin-bottom: 10px; }
      #day .title { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: clamp(36px,5vw,72px); line-height: 1.05; max-width: 14ch; text-wrap: balance; color: #f2ede2; }
      #day .cap { font-family: 'Karla', sans-serif; font-size: 14px; letter-spacing: .06em; color: rgba(242,237,226,.75); font-weight: 300; margin-top: 14px; max-width: 52ch; line-height: 1.7; }
      #day .track { margin-top: 28px; height: 1px; background: rgba(242,237,226,.18); position: relative; }
      #day .fill { position: absolute; left: 0; top: 0; bottom: 0; width: 0%; background: #c2a069; transition: width .2s linear; }
      #day .labels { display: flex; justify-content: space-between; margin-top: 10px; font-family: 'Karla', sans-serif; font-size: 9.5px; letter-spacing: .3em; color: rgba(242,237,226,.45); }
      @media (max-width: 640px) { #day .labels span:nth-child(even) { display: none; } }
      @media (prefers-reduced-motion: reduce) {
        #day { height: 100vh; }
        #day .scene { transition: none; }
        #day .scene[data-i="5"] { opacity: 1 !important; }
      }
    </style>
    <section id="day">
      <div class="sticky">
        <img class="scene" data-i="0" src="assets/img/woodys-espresso.jpg" alt="Espresso pouring at Woodys Coffee" />
        <img class="scene" data-i="1" src="assets/img/day-ready.jpg" alt="Bride in the light-filled bridal suite" />
        <img class="scene" data-i="2" src="assets/img/day-vows.jpg" alt="Vows at the arbor beneath the oaks" />
        <img class="scene" data-i="3" src="assets/img/day-dinner.jpg" alt="Farm tables set for dinner in the White Barn" />
        <img class="scene" data-i="4" src="assets/img/day-golden.jpg" alt="Golden hour over the marsh" />
        <img class="scene" data-i="5" src="assets/img/day-night.jpg" alt="Celebrating in the White Barn" />
        <div class="scrim"></div>
        <div class="eyebrow"><span class="bar"></span><span class="txt">A DAY AT LONG POND</span></div>
        <div class="caption">
          <div class="time" id="d-time">7:00 AM</div>
          <div class="title" id="d-title">First light, first pour</div>
          <div class="cap" id="d-cap">Woodys Coffee pulls the first shots of the day while the bridal party settles in.</div>
          <div class="track"><div class="fill" id="d-fill"></div></div>
          <div class="labels"><span>MORNING</span><span>GETTING READY</span><span>CEREMONY</span><span>DINNER</span><span>GOLDEN HOUR</span><span>CELEBRATE</span></div>
        </div>
      </div>
    </section>
    <script>
      (function () {
        var section = document.getElementById('day');
        var imgs = Array.prototype.slice.call(section.querySelectorAll('.scene'));
        var elTime = document.getElementById('d-time');
        var elTitle = document.getElementById('d-title');
        var elCap = document.getElementById('d-cap');
        var elFill = document.getElementById('d-fill');
        var scenes = [
          { t: '7:00 AM',  title: 'First light, first pour',  cap: 'Woodys Coffee pulls the first shots of the day while the bridal party settles in.' },
          { t: '10:00 AM', title: 'Getting ready',            cap: 'Soft light in the bridal suite \u2014 and a pool game already underway in the guys lounge.' },
          { t: '4:00 PM',  title: 'Vows under the oaks',      cap: 'Spanish moss overhead, a perfect balance of shade and light at the arbor.' },
          { t: '6:30 PM',  title: 'Dinner in the White Barn', cap: 'Chandelier light over 2,800 square feet of long farm tables.' },
          { t: '7:30 PM',  title: 'Golden hour',              cap: 'The sky melts into pinks and golds over Long Pond \u2014 portraits your photographer will frame forever.' },
          { t: '10:00 PM', title: 'Celebrate',                cap: 'Glow sticks up, the barn humming late into the night.' }
        ];
        var N = scenes.length;
        var lastP = -1, lastAct = -1;
        var clamp = function (v, lo, hi) { return Math.max(lo, Math.min(hi, v)); };
        function render() {
          var r = section.getBoundingClientRect();
          var total = r.height - window.innerHeight;
          var p = total > 0 ? clamp(-r.top / total, 0, 1) : 0;
          if (Math.abs(p - lastP) < 0.002) return;
          lastP = p;
          var seg = p * N;
          var act = clamp(Math.floor(seg), 0, N - 1);
          imgs.forEach(function (img, i) {
            img.style.opacity = clamp(1 - Math.max(0, Math.abs(seg - (i + 0.5)) - 0.35) * 4, 0, 1);
          });
          elFill.style.width = (p * 100).toFixed(1) + '%';
          if (act !== lastAct) {
            lastAct = act;
            elTime.textContent = scenes[act].t;
            elTitle.textContent = scenes[act].title;
            elCap.textContent = scenes[act].cap;
          }
        }
        var ticking = false;
        function onScroll() {
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(function () { render(); ticking = false; });
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', function () { lastP = -1; render(); }, { passive: true });
        render();
      })();
    </script>


    <!-- ======= WHERE IT ALL BEGAN ======= -->
    <section class="text-center px-6 py-[clamp(3.5rem,7vw,6rem)]">
      <h2 class="font-script text-4xl md:text-5xl">Where it all began</h2>
      <p class="font-sans font-light text-[15px] tracking-bodywide leading-[1.8] max-w-2xl mx-auto mt-8">Set on a sixteen-acre marsh front in beautiful Levy County lies Long Pond Plantation, owned by Beauchamp Acres. Originally constructed in the early sixties, the unique three-thousand square-foot home holds an elite bridal &amp; groom suite, tea room, and kitchen — a photographer's dream. Beneath mature live oaks draped in Spanish moss, the event space rests in a perfect balance of shade and light, while sunsets melt the sky in pinks and yellows behind your ceremony.</p>
    </section>

    <!-- ======= WATERCOLOR ILLUSTRATION ======= -->
    <section class="max-w-2xl mx-auto px-6 pb-[clamp(3.5rem,7vw,6rem)] text-center">
      <!-- MEDIA SLOT: commissioned watercolor illustration of the venue (see CLIENT-QUESTIONS.md) -->
      <img src="https://placehold.co/1200x800/F2EFED/809A91?text=WATERCOLOR+ILLUSTRATION+of+the+venue" alt="Watercolor illustration of Long Pond Plantation" class="w-full" />
    </section>

    <!-- ======= THE EXPERIENCE ======= -->
    <section class="band-cream grain px-6 py-[clamp(3.5rem,7vw,6rem)]">
      <div class="max-w-2xl mx-auto text-center relative z-10">
        <h2 class="font-script text-4xl md:text-5xl">the experience</h2>
        <p class="font-georgia text-[16px] leading-[1.8] text-justify mt-8">From the first walk beneath the oaks to the final sparkler send-off, our family hosts yours. Ceremony, reception, and getting ready all happen in one place — the chandelier-lit White Barn with 2,800 square feet of celebration space, and the historic home's bridal suite and guys lounge. Our team, alongside the design eye of Slate &amp; Pearl Events, tailors every detail so your day feels effortless, private, and unmistakably yours.</p>
        <div class="mt-10">
          <a href="packages.html" class="btn-dark">Click here for pricing guide</a>
        </div>
      </div>
    </section>

    <!-- ======= PROPERTY HIGHLIGHTS ======= -->
    <section class="px-6 py-[clamp(4rem,9vw,7.5rem)]">
      <h2 class="h-serif text-2xl md:text-3xl text-center">Property Highlights</h2>
      <div class="w-16 h-px bg-lp-ink/40 mx-auto mt-6"></div>

      <div class="max-w-site mx-auto space-y-16 mt-14">

        <div>
          <h3 class="label-cap text-center mb-6">The White Barn</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img class="w-full md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full object-cover shadow-card" src="assets/img/chapel-cross.jpg" alt="The White Barn set for a ceremony, cross and chandelier" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/barn-tables-wide.jpg" alt="The White Barn dressed for a reception" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/chapel-arches-interior.jpg" alt="Arched openings of the White Barn" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/barn-table-runners.jpg" alt="Farm tables with runners" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/barn-at-night.jpg" alt="The White Barn glowing at night" />
          </div>
        </div>

        <div>
          <h3 class="label-cap text-center mb-6">The Tea Room</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img class="w-full md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full object-cover shadow-card" src="assets/img/tea-room.jpg" alt="The tea room with fireplace" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/sitting-room.jpg" alt="The sitting area" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/tea-bride-mug.jpg" alt="Bride with her morning coffee in the tea room" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/tea-window-tables.jpg" alt="Tea room tables by the window" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/tea-couple-woodwall.jpg" alt="Couple in the tea room" />
          </div>
        </div>

        <div>
          <h3 class="label-cap text-center mb-6">The Bridal Suite</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img class="w-full md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full object-cover shadow-card" src="assets/img/bride-suite-editorial.jpg" alt="Bride in the bridal suite" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/bridal-suite-vanity.jpg" alt="Vanity mirrors in the bridal suite" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/bride-earring.jpg" alt="Finishing touches" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/bride-gold-mirror.jpg" alt="A guest in the bridal suite" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/bride-robe.jpg" alt="Getting ready by the window" />
          </div>
        </div>

        <div>
          <h3 class="label-cap text-center mb-6">The Guys Lounge</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img class="w-full md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full object-cover shadow-card" src="assets/img/groom-pool.jpg" alt="Groom at the pool table in the guys lounge" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/groom-bowtie.jpg" alt="Adjusting the bow tie" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/lounge-cue.jpg" alt="Lining up the shot" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/lounge-groomsmen.jpg" alt="Groomsmen around the pool table" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/firepit-lawn.jpg" alt="The grounds from above" />
          </div>
        </div>

        <div>
          <h3 class="label-cap text-center mb-6">The Grounds</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img class="w-full md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full object-cover shadow-card" src="assets/img/sunset-arch-oaks.jpg" alt="Ceremony arbor beneath the oaks at sunset" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/ceremony-crowd-oaks.jpg" alt="Ceremony under the live oaks" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/fountain-golden.jpg" alt="The fountain at golden hour" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/benches-sunset.jpg" alt="Ceremony benches at sunset" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/grounds-chairs-oaks.jpg" alt="Ceremony chairs beneath the oaks" />
          </div>
        </div>

        <div>
          <h3 class="label-cap text-center mb-6">The Marsh &amp; Historic Home</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img class="w-full md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:h-full object-cover shadow-card" src="assets/img/historic-home-aerial.jpg" alt="The historic home beneath the oaks" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/fountain-golden.jpg" alt="The fountain at golden hour" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/sunset-field-couple.jpg" alt="Couple at sunset over the marsh field" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/marsh-birds.jpg" alt="Birds over Long Pond" />
            <img class="w-full aspect-square object-cover shadow-card" src="assets/img/sunset-benches-arch.jpg" alt="Sunset over the ceremony site" />
          </div>
        </div>

      </div>
    </section>

    <!-- ======= CLOSING CTA ======= -->
    <section class="band-cream grain text-center px-6 py-[clamp(3.5rem,7vw,6rem)]">
      <p class="font-script text-4xl md:text-5xl relative z-10">What are you waiting for?</p>
      <p class="label-cap mt-5 relative z-10">Reserve your 2027 wedding date — tours available now</p>
      <div class="mt-8 relative z-10">
        <a href="https://book.squareup.com/appointments/yvodeqjpykfqr5/location/LNQT4940CN97Y/services" target="_blank" rel="noopener" class="btn-dark">Schedule a tour</a>
      </div>
    </section>
