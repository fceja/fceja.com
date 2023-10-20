import type { Config } from "@jest/types";

const projectRoot = "<rootDir>../..";

const config: Config.InitialOptions = {
  roots: [`${projectRoot}`], // project root
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  testTimeout: 15000,
  moduleFileExtensions: ["ts", "js", "tsx"],
  verbose: true,
  moduleNameMapper: {
    "^@/(.*)$": `${projectRoot}/src/$1`,
    "^@common/(.*)$": `${projectRoot}/src/ts/common/$1`,
    "^@components/(.*)$": `${projectRoot}/src/ts/components/$1`,
    "^@pages/(.*)$": `${projectRoot}/src/ts/pages/$1`,
    "^@styles/(.*)$": "identity-obj-proxy", // Handle SCSS imports with identity-obj-proxy
    "^@appTypes/(.*)$": `${projectRoot}/src/ts/types/$1`,
    "^@utils/(.*)$": `${projectRoot}/src/ts/utils/$1`,
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      { tsconfig: "tsconfig.json", diagnostics: false },
    ],
  },
};

export default config;
