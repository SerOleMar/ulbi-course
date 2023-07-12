export type BuildMode = "production" | "development";
export type BuildPort = number;
export type BuildIsDev = boolean;

export interface BuildEnv {
  mode: BuildMode;
  port: BuildPort;
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  isDev: BuildIsDev;
  paths: BuildPaths;
  port: BuildPort;
}
