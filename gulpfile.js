var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');
require('laravel-elixir-stylus');


elixir(function(mix) {
    mix
    .browserify('app.js');

});