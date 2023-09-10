module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'character',
        'platform',
        'user'
      ]
    ],
    "type-enum": [2, "always", ["feat", "fix", "docs", "chore", "wip", "style"]],
    "scope-case": [2, "always", "kebab-case"]
  },
};