import webpack from "webpack";
import { BuildOptions } from "../types/config";
import { plugins } from "./plugins";
import { loaders } from "./loaders";
import { resolvers } from "./resolvers";

export function buildConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

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
      rules: loaders(),
    },
    resolve: resolvers(),
  };
}
