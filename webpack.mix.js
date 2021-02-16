const mix = require('laravel-mix');

mix.js('node_modules/jquery/dist/jquery.js', 'public/js/')
mix.js('node_modules/popper.js/dist/popper.js', 'public/js/')
mix.js('node_modules/bootstrap/dist/js/bootstrap.js', 'public/js/app.js')
    .sass('node_modules/bootstrap/scss/bootstrap.scss', 'public/css/app.css')
