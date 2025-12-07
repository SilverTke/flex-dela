import { presetWind3 } from "lume/deps/unocss.ts";
import { presetWebFonts } from "npm:unocss";
import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";

const site = lume();

site.use(unocss({
  reset: "tailwind",
  cssFile: "assets/css/utils.css",
  options: {
    presets: [
      presetWind3(),
      () =>
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Raleway",
          },
        }),
    ],
  },
}));
site.add("/assets");
export default site;
