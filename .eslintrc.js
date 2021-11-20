module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react/destructuring-assignment": "warn",
    "arrow-body-style": "warn",
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "object-shorthand": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        "newlines-between": "always",
      },
    ],
  },
};
