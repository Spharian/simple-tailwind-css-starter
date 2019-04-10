let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .sass('src/sass/app.scss', 'dist/')
  .options({
    postCss: [
      tailwindcss('tailwind.js'),
    ],
    processCssUrls: false,
  });
