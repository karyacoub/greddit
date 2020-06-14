module.exports = {
  verbose: true,
  preset: "react-native",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./src/jestSetup.ts",
    "jest-extended"
  ],
};