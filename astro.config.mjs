import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://stellular-zuccutto-0a57a2.netlify.app",
  integrations: [preact()]
});