module.exports = {
  content: ['src/**/*.js', 'public/index.html'],
  css: ['public/styles/index.css'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
}
