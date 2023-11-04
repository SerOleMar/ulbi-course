import webpack from "webpack";
import { BuildOptions } from "../types/config";
import { plugins } from "./plugins";
import { loaders } from "./loaders";
import { resolvers } from "./resolvers";
import { devServer } from "./devServer";

export function buildConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  const isDev = mode === "development";

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].bundle.js",
      path: paths.build,
      clean: true,
    },
    plugins: plugins(options),
    module: {
      rules: loaders(options),
    },
    resolve: resolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? devServer(options) : undefined,
  };
}
