module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "plugins": ["react", "react-native"],
  "extends": ["plugin:@typescript-eslint/recommended", "plugin:react/recommended"],
  "rules": {
    "quotes": 1,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
  }
};
