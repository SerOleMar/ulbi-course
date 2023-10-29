export type BuildMode = "production" | "development";
export type BuildPort = number;

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: BuildPort;
}

export interface BuildEnv {
  mode: BuildMode;
  port: BuildPort;
}
