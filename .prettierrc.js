/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 240,
  tabWidth: 2,
  tabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' }, },],
};