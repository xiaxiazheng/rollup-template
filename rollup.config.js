import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import jsx from "acorn-jsx";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  input: "src/index.ts",
  acornInjectPlugins: [jsx()],
  external: ["react", "react-dom"],
  plugins: [
    postcss({
      plugins: [autoprefixer, cssnano],
      extensions: [".less", ".css"],
      use: ["less"],
      extract: "style.css",
    }),
    resolve(),
    commonjs(),
    typescript(),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
    }),
  ],
  output: {
    file: "dist/bundle.js",
    format: "esm",
    plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
  },
};
