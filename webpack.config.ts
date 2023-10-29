import path from "path";
import webpack from "webpack";
import { buildConfig, BuildPaths } from "./config/webpack";

const paths: BuildPaths = {
  build: path.resolve(__dirname, "dist"),
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";

const config: webpack.Configuration = buildConfig({
  mode,
  paths,
});

export default config;
