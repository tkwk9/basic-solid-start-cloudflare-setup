import autoprefixer from "autoprefixer";
import postcssScoped from "postcss-scoped";
import tailwindcss from "tailwindcss";

export default {
  plugins: [
    autoprefixer,
    // TODO: Maybe remove
    postcssScoped,
    tailwindcss,
  ],
};
