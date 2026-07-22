    <!-- ======= SAY HELLO (WM contact pattern, blush watercolor swash) ======= -->
    <section class="text-center px-6 pt-[clamp(3rem,6vw,5rem)]">
      <h1 class="swash rise rise-1"><span class="h-serif text-3xl md:text-4xl px-6 py-2 inline-block">Say Hello</span></h1>
      <p class="font-sans font-light text-[15px] tracking-bodywide leading-[1.8] max-w-xl mx-auto mt-8">Tell us about your day and we'll be in touch to walk the grounds with you. There is still time to reserve your 2027 wedding date.</p>
    </section>

    <!-- ======= LEAD-QUALIFICATION FORM ======= -->
    <!-- Form endpoint is a placeholder — see CLIENT-QUESTIONS.md (Formspree / serverless decision pending) -->
    <section class="px-6 py-[clamp(3rem,6vw,5rem)]">
      <form class="max-w-xl mx-auto space-y-7" action="#" method="post" onsubmit="event.preventDefault(); this.querySelector('[data-sent]').classList.remove('hidden');">

        <div class="grid md:grid-cols-2 gap-7">
          <div>
            <label for="first-name" class="label-cap block mb-2">First name *</label>
            <input id="first-name" name="first-name" type="text" required autocomplete="given-name" class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage" />
          </div>
          <div>
            <label for="last-name" class="label-cap block mb-2">Last name *</label>
            <input id="last-name" name="last-name" type="text" required autocomplete="family-name" class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage" />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-7">
          <div>
            <label for="phone" class="label-cap block mb-2">Phone *</label>
            <input id="phone" name="phone" type="tel" required autocomplete="tel" class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage" />
          </div>
          <div>
            <label for="email" class="label-cap block mb-2">Email *</label>
            <input id="email" name="email" type="email" required autocomplete="email" class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage" />
          </div>
        </div>

        <fieldset>
          <legend class="label-cap mb-3">Preferred method of contact *</legend>
          <div class="flex gap-8">
            <label class="flex items-center gap-2 font-sans font-light text-[15px]"><input type="radio" name="contact-method" value="phone" required class="accent-[#809A91]" /> phone</label>
            <label class="flex items-center gap-2 font-sans font-light text-[15px]"><input type="radio" name="contact-method" value="email" class="accent-[#809A91]" /> email</label>
          </div>
        </fieldset>

        <div class="grid md:grid-cols-2 gap-7">
          <div>
            <label for="event-type" class="label-cap block mb-2">Event type *</label>
            <select id="event-type" name="event-type" required class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage">
              <option value="">Select…</option>
              <option>Wedding</option>
              <option>Corporate event</option>
              <option>Shower or luncheon</option>
              <option>Reunion</option>
              <option>Holiday party</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label for="tour-ready" class="label-cap block mb-2">Ready to schedule your private tour? *</label>
            <select id="tour-ready" name="tour-ready" required class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage">
              <option value="">Select…</option>
              <option>Yes — let's pick a date!</option>
              <option>Not yet, just gathering info</option>
            </select>
          </div>
        </div>

        <div>
          <label for="event-date" class="label-cap block mb-2">Event date (or best guess)</label>
          <input id="event-date" name="event-date" type="date" class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage" />
        </div>

        <fieldset>
          <legend class="label-cap mb-3">What made you decide to contact us today? (choose all that apply)</legend>
          <div class="space-y-2">
            <label class="flex items-center gap-3 font-sans font-light text-[15px]"><input type="checkbox" name="source" value="facebook" class="accent-[#809A91]" /> I saw a Facebook post or ad</label>
            <label class="flex items-center gap-3 font-sans font-light text-[15px]"><input type="checkbox" name="source" value="instagram" class="accent-[#809A91]" /> I saw an Instagram post or ad</label>
            <label class="flex items-center gap-3 font-sans font-light text-[15px]"><input type="checkbox" name="source" value="google" class="accent-[#809A91]" /> I found you on Google</label>
            <label class="flex items-center gap-3 font-sans font-light text-[15px]"><input type="checkbox" name="source" value="recommended" class="accent-[#809A91]" /> Someone recommended Long Pond</label>
            <label class="flex items-center gap-3 font-sans font-light text-[15px]"><input type="checkbox" name="source" value="attended" class="accent-[#809A91]" /> I attended an event at Long Pond</label>
          </div>
        </fieldset>

        <div class="grid md:grid-cols-2 gap-7">
          <div>
            <label for="zip" class="label-cap block mb-2">Current zip code</label>
            <input id="zip" name="zip" type="text" inputmode="numeric" autocomplete="postal-code" class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage" />
          </div>
          <div>
            <label for="city" class="label-cap block mb-2">Current city</label>
            <input id="city" name="city" type="text" autocomplete="address-level2" class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage" />
          </div>
        </div>

        <div>
          <label for="message" class="label-cap block mb-2">Message *</label>
          <textarea id="message" name="message" rows="5" required class="w-full border border-lp-ink/30 bg-lp-white px-4 py-3 font-sans font-light text-[15px] focus:border-lp-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage"></textarea>
        </div>

        <label class="flex items-start gap-3 font-sans font-light text-[13px] leading-[1.7] text-lp-soft">
          <input type="checkbox" name="sms-consent" class="mt-1 accent-[#809A91]" />
          I agree to receive text messages from Long Pond Plantation about pricing and event reminders. Message and data rates may apply. Reply STOP to opt out.
        </label>

        <button type="submit" class="w-full bg-lp-rose text-lp-white font-sans font-light text-[13px] tracking-label uppercase px-10 py-4 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lp-sage">Submit</button>
        <p data-sent class="hidden text-center label-cap text-lp-sagedeep">Thank you — we'll be in touch soon! (Demo only: form endpoint pending)</p>
      </form>
    </section>

    <!-- ======= ADDRESS BLOCK ======= -->
    <section class="band-cream grain px-6 py-[clamp(3.5rem,7vw,6rem)]">
      <div class="max-w-site mx-auto grid md:grid-cols-2 gap-10 text-center relative z-10">
        <div class="space-y-2">
          <h2 class="h-serif text-lg">Long Pond Plantation</h2>
          <p class="font-sans font-light text-[14px] tracking-bodywide leading-[1.7]">Chiefland, Florida 32626<br/><a href="mailto:longpondplantationevents@gmail.com" class="hover:opacity-60 transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage">longpondplantationevents@gmail.com</a></p>
        </div>
        <div class="space-y-2">
          <h2 class="h-serif text-lg">Woodys Coffee Co.</h2>
          <p class="font-sans font-light text-[14px] tracking-bodywide leading-[1.7]">On the Long Pond property · Chiefland, FL<br/><a href="woodys-coffee.html" class="hover:opacity-60 transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-sage">Hours &amp; menu</a></p>
        </div>
      </div>
    </section>
