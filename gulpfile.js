var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('node_modules/hammerjs/hammer.min.js', 'public/js');
    mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js');
    mix.copy('node_modules/jquery/dist/jquery.min.map', 'public/js');

    mix.sass([
        'main.scss'
    ], 'public/css/main.css');

    mix.scripts([
        // App
        'source/lib',
        'source/app',
        'source/modules',
        'source/vendor',
        'source/init.js'
    ], 'public/js/main.js')

});
