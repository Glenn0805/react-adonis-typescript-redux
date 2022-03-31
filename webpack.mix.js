const mix = require('laravel-mix')

/**
 * By default, AdonisJS public path for static assets is on the `./public` directory.
 *
 * If you want to change Laravel Mix public path, change the AdonisJS public path config first!
 * See: https://docs.adonisjs.com/guides/static-assets#the-default-directory
 */
mix
  .webpackConfig(require('./webpack.config.js'))
  .setPublicPath('public')
  .tsx('resources/js/app.tsx', 'public/dist/')
  .react()
  .sass('resources/sass/app.scss', 'public/sass/')

// Add your assets here
