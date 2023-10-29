import path from "path";
import webpack from "webpack";
import buildConfig, { BuildEnv, BuildPaths } from "./config/webpack";

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env?.mode || "development";
  const port = env?.port || 3000;

  return buildConfig({
    mode,
    paths,
    port,
  });
};
