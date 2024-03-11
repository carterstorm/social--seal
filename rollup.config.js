import scss from "rollup-plugin-scss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    scss({
      output: "dist/styles.css",
    }),
  ],
};
