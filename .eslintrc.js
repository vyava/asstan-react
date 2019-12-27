module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    // prettier 
    "prettier",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  rules: {
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/ban-ts-ignore":0
  },
  // ts import/no-unresolved
  settings: {
    "import/resolver": {
      "webpack": {
        "config": "build/webpack.base.config.js"
      }
    }
  },
  overrides: [
    {
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": 0,
      }
    },
    {
      "files": ["*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": 0,
        "react/prop-types": 0
      }
    }
  ]
};
