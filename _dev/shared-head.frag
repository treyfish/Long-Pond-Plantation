<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Long Pond Plantation | Weddings &amp; Events | Chiefland, FL</title>
<meta name="description" content="Long Pond Plantation is a historic marsh-front wedding and event venue in Chiefland, Florida — the chandelier-lit White Barn, bridal suite, guys lounge, and Old-Florida live oaks." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&family=Great+Vibes&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          lp: {
            white: '#FFFFFF', cream: '#F2EFED', linen: '#F8F6F4',
            charcoal: '#282626', ink: '#2B2929', soft: '#5B5757',
            sage: '#809A91', sagedeep: '#5C7268',
            blush: '#EBC8BE', rose: '#DFA398', gold: '#C2A14A',
          },
        },
        fontFamily: {
          display: ['"Playfair Display"', 'serif'],
          sans: ['Jost', 'Avenir', 'sans-serif'],
          georgia: ['Georgia', 'serif'],
          script: ['"Great Vibes"', 'cursive'],
        },
        letterSpacing: { hero: '0.22em', label: '0.32em', bodywide: '0.05em' },
        boxShadow: {
          card: '0 1px 2px rgba(40,38,38,0.06), 0 8px 24px rgba(128,154,145,0.14), 0 20px 48px rgba(40,38,38,0.10)',
          float: '0 2px 4px rgba(40,38,38,0.08), 0 16px 40px rgba(128,154,145,0.20), 0 32px 80px rgba(40,38,38,0.14)',
        },
        maxWidth: { site: '1200px' },
      },
    },
  };
</script>
<style type="text/tailwindcss">
  @layer base {
    html { scroll-behavior: smooth; }
    body { @apply font-sans font-light text-lp-ink bg-lp-white antialiased; }
  }
  @layer components {
    .btn-dark {
      @apply inline-block bg-lp-charcoal text-lp-white font-sans font-light text-[13px] tracking-label uppercase px-10 py-4
             transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
             hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 active:opacity-100
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lp-sage;
    }
    .btn-ghost {
      @apply inline-block border border-lp-charcoal text-lp-ink font-sans font-light text-[13px] tracking-label uppercase px-10 py-4
             transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
             hover:-translate-y-0.5 hover:opacity-80 active:translate-y-0
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lp-sage;
    }
    .h-serif   { @apply font-display uppercase tracking-hero text-lp-ink; }
    .label-cap { @apply font-sans font-light uppercase tracking-label text-[12px] text-lp-soft; }
    .nav-link  {
      @apply font-sans font-light uppercase tracking-label text-[12px] text-lp-ink whitespace-nowrap
             transition-opacity duration-300 hover:opacity-60 focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-4 focus-visible:outline-lp-sage;
    }
    .nav-link[aria-current="page"] { @apply text-lp-sage; }
    .tile { @apply relative overflow-hidden block bg-lp-cream shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lp-sage; }
    .tile img { @apply w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]; }
    .tile:hover img, .tile:focus-visible img { transform: scale(1.05); }
    .tile-veil::after { content:''; @apply absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none; }
    .tile-tint::before { content:''; @apply absolute inset-0 bg-lp-sage mix-blend-multiply opacity-20 pointer-events-none z-10; }
    .tile-bar { @apply absolute bottom-0 left-0 w-full z-20 bg-white/95 px-8 py-3 font-display uppercase tracking-hero text-[13px] text-lp-ink text-center; }
    .stars { @apply text-lp-gold text-[15px] tracking-[0.3em]; }
    .grain::before {
      content:''; position:absolute; inset:0; pointer-events:none; opacity:.04; z-index:1;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E");
    }
    .band-cream { @apply relative bg-lp-cream; background-image: radial-gradient(60% 80% at 20% 0%, rgba(128,154,145,0.07), transparent 60%), radial-gradient(50% 70% at 90% 100%, rgba(235,200,190,0.10), transparent 60%); }
    .swash { @apply relative inline-block; }
    .swash::before { content:''; position:absolute; inset:-18% -10%; z-index:-1; background: radial-gradient(55% 70% at 50% 55%, rgba(235,200,190,0.55), rgba(235,200,190,0.22) 60%, transparent 75%); filter: blur(2px); border-radius: 999px; }
    @keyframes rise { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
    .rise { animation: rise .8s cubic-bezier(0.22,1,0.36,1) both; }
    .rise-1 { animation-delay:.08s } .rise-2 { animation-delay:.2s } .rise-3 { animation-delay:.34s } .rise-4 { animation-delay:.5s }
  }
</style>
</head>