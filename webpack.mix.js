let mix = require('laravel-mix');

mix
  .js('src/Custom.js', '/')
  .sass('src/Custom.scss', '/')
  .setPublicPath('assets');
