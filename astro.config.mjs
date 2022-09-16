import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import tailwind from "@astrojs/tailwind";

const tailwindOptions = {
  config: {
    applyBaseStyles: false
  }
}


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()]
});