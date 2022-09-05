module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    // 'stylelint-prettier/recommended',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true,
  },
  ignoreFiles: ['**/node_modules/**'],
};
