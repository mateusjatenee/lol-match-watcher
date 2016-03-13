var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');
require('laravel-elixir-stylus');


elixir(function(mix) {
    mix
    .stylus([
    	'skeleton.styl',
    	'normalize.styl',
    	'app.styl'
    	])
    .browserify('app.js');

});