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
  }
};
