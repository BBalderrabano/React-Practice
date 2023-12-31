module.exports = {
  extends: ["next", "turbo", "airbnb", "airbnb-typescript", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key":"off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export":"off",
    "import/prefer-default-export":"warn",
    "react/jsx-props-no-spreading": "off"
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
