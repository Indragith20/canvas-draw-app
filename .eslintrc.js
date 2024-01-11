module.exports = {
  extends: ["@remix-run/eslint-config"],
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "comma-dangle": 0,
    "indent": ["error", 2, { "SwitchCase": 1 }]
  }
};
