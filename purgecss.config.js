module.exports = {
  content: ['src/**/*.js'],
  css: ['src/styles/tailwind.css'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
}
