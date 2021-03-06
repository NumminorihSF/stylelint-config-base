module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    '@saritasa/stylelint-config-order'
  ],
  rules: {
    'selector-max-compound-selectors': 5,
    'declaration-block-no-duplicate-properties': true,
    'no-duplicate-selectors': true,
    'no-unknown-animations': true,
    'color-named': 'never',
    'function-url-scheme-blacklist': 'data',
    'property-no-vendor-prefix': true,
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,
    'selector-no-qualifying-type': [ true, { ignore: ['attribute'] } ],
    'selector-no-vendor-prefix': true,
    'max-nesting-depth': 2,
    'color-hex-length': 'short',
    'font-family-name-quotes': 'always-unless-keyword',
    'number-leading-zero': 'always',
    'string-quotes': 'single',
    'selector-pseudo-element-colon-notation': 'double',
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'selector-list-comma-newline-after': 'always',
    'block-no-empty': true,
    'number-max-precision': 2,

    'sh-waqar/declaration-use-variable': '/color/',
    'order/properties-alphabetical-order': null
  },
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-use-variable'
  ]
};
