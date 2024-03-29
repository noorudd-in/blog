import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.noorudd.in",
  integrations: [tailwind(), expressiveCode()]
});