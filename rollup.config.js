import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import jsx from "acorn-jsx";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  acornInjectPlugins: [jsx()],
  external: ["react", "react-dom"],
  plugins: [
    postcss({ // 处理 less
      plugins: [autoprefixer, cssnano],
      extensions: [".less", ".css"],
      use: ["less"],
      extract: "style.css",
    }),
    resolve(), // 处理 npm 包的相关引入依赖
    commonjs(), // 将 commonjs 语法转化成 es module 语法
    typescript(), // 处理 TS 语法
    babel({
      presets: ["@babel/preset-env", "@babel/preset-react"], // 处理 es 和 react 语法
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
    }),
    terser(), // 压缩代码
  ],
  output: {
    // file: "dist/bundle.js",
    format: "esm",
    dir: "dist",
    // sourcemap: true,
    entryFileNames: "[name].js",
  },
};
