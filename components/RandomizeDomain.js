'use client';
import { useEffect } from 'react';
import SharePrompt from './SharePromptOnWhatsup';

const RandomizeDomain = () => {
  const domains = [
    'https://tangerine-peony-0ad7c0.netlify.app',
    'https://stalwart-gecko-9da6bc.netlify.app/',
    'https://astonishing-pegasus-549491.netlify.app/',
    'https://polite-sable-2af85e.netlify.app/',
    'https://endearing-quokka-8f93a2.netlify.app/',
    'https://lustrous-kashata-4a246d.netlify.app/',
    'cartoon-delta.vercel.app',
    'https://cartoon-pi.vercel.app/',
    'https://cartoon-gdcz.vercel.app/',
    'https://cartoon-ochre.vercel.app/',
    'https://cartoon-orpin-three.vercel.app/',
    'https://cartoon-sable.vercel.app/',
    'https://cartoonz.netlify.app/',
    'https://cartoon-ruddy.vercel.app/',
    'https://cartoon-beryl.vercel.app/',
    'https://cartoon-nine.vercel.app/',
    'https://sparkly-cascaron-efe95b.netlify.app/',
    'https://stellular-sunflower-758784.netlify.app/',
    'https://cartoon-navy.vercel.app/',
    'https://cartoon-pied.vercel.app/',
    'https://storied-kangaroo-bfa38a.netlify.app/',
    'https://cartoon-drab.vercel.app/',
    'https://glittering-cajeta-43dc3e.netlify.app/',
    'https://resplendent-donut-eb62a0.netlify.app/',
    'https://cartoon-iota-bice.vercel.app/',
    'https://cartoon-kappa.vercel.app/',
    'https://cartoon-red.vercel.app/',
    'https://cartoon-cloudflare.pages.dev/',
    'https://cartoon-cloudflare-repo2-brs.pages.dev/',
    'https://cartoon-cloudflare-repo3.pages.dev/',
    'https://cartoon-cloudflare-repo4.pages.dev/',
    'https://cartoon-cloudflare-repo5.pages.dev/',
    'https://cartoon-cloudflare-repo6.pages.dev/',
    'https://cartoon-cloudflare-repo7.pages.dev/',
    'https://cartoon-cloudflare-repo8.pages.dev/',
    'https://cartoon-cloudflare-repo9.pages.dev/',
    'https://cartoon-cloudflare-repo10.pages.dev/',
    'https://cartoon-cloudflare-repo11.pages.dev/',
    'https://cartoon-cloudflare-repo12.pages.dev/',
    'https://cartoon-cloudflare-repo13.pages.dev/',
    'https://cartoon-cloudflare-repo14.pages.dev/',
    'https://cartoon-cloudflare-repo15.pages.dev/',
    'https://cartoon-cloudflare-repo16.pages.dev/',
    'https://cartoon-cloudflare-repo17.pages.dev/',
    'https://cartoon-cloudflare-repo18.pages.dev/',
    'https://cartoon-cloudflare-repo19.pages.dev/',
    'https://cartoon-cloudflare-repo20.pages.dev/',
    'https://cartoon-cloudflare-repo21.pages.dev/',
    'https://cartoon-cloudflare-repo22.pages.dev/',
    'https://cartoon-cloudflare-repo23.pages.dev/',
    'https://cartoon-cloudflare-repo24.pages.dev/',
    'https://cartoon-cloudflare-repo25.pages.dev/',
    'https://cartoon-cloudflare-repo26.pages.dev/',
    'https://cartoon-cloudflare-repo27.pages.dev/',
    'https://cartoon-cloudflare-repo28.pages.dev/',
    'https://cartoon-cloudflare-repo29.pages.dev/',
    'https://cartoon-cloudflare-repo30.pages.dev/',
    'https://cartoon-cloudflare-repo31.pages.dev/',
    'https://cartoon-cloudflare-repo32.pages.dev/',
    'https://cartoon-cloudflare-repo33.pages.dev/',
    'https://cartoon-cloudflare-repo34.pages.dev/',
    'https://cartoon-cloudflare-repo35.pages.dev/',
    'https://cartoon-cloudflare-repo36.pages.dev/',
    'https://cartoon-cloudflare-repo37.pages.dev/',
    'https://cartoon-cloudflare-repo38.pages.dev/',
    'https://cartoon-cloudflare-repo39.pages.dev/',
    'https://cartoon-cloudflare-repo40.pages.dev/',
    'https://cartoon-cloudflare-repo41.pages.dev/',
    'https://cartoon-cloudflare-repo42.pages.dev/',
    'https://cartoon-cloudflare-repo43.pages.dev/',
    'https://cartoon-cloudflare-repo44.pages.dev/',
    'https://cartoon-cloudflare-repo45.pages.dev/',
    'https://cartoon-cloudflare-repo46.pages.dev/',
    'https://cartoon-cloudflare-repo47.pages.dev/',
    'https://cartoon-cloudflare-repo48.pages.dev/',
    'https://cartoon-cloudflare-repo49.pages.dev/',
    'https://cartoon-cloudflare-repo50.pages.dev/',
    'https://cartoon-cloudflare-repo51.pages.dev/',
    'https://cartoon-cloudflare-repo52.pages.dev/',
    'https://cartoon-cloudflare-repo53.pages.dev/',
    'https://cartoon-cloudflare-repo54.pages.dev/',
    'https://cartoon-cloudflare-repo55.pages.dev/',
    'https://cartoon-cloudflare-repo56.pages.dev/',
    'https://cartoon-cloudflare-repo57.pages.dev/',
    'https://cartoon-cloudflare-repo58.pages.dev/',
    'https://cartoon-cloudflare-repo59.pages.dev/',
    'https://cartoon-cloudflare-repo60.pages.dev/',
    'https://cartoon-cloudflare-repo61.pages.dev/',
    'https://cartoon-cloudflare-repo62.pages.dev/',
    'https://cartoon-cloudflare-repo63.pages.dev/',
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * domains.length);
    const randomDomain = domains[randomIndex];
    if (window.location.origin !== randomDomain) {
      window.location.href = randomDomain;
    }
  }, []);

  return null;
};

export default RandomizeDomain;
