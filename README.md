# React Boilerplate
This is a react build boilerplate that is currently work in progress. [View Demo](http://react.mattderrick.co.uk).

## Tasks

### `grunt build`
Run this task and open the index.html in the `dist` directory.

### `grunt server`
Run development server.

### `grunt server:prod`
Build and run production server.

### `grunt heroku`
This task is is ran when pushing this repo to [Dokku](https://github.com/progrium/dokku) or [Heroku](http://heroku.com) using the [Grunt Buildpack](https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git). It runs bower `install` on commit and then `grunt:build`.

## Made with
[React](http://facebook.github.io/react/)
[React Router](https://github.com/rackt/react-router/)
[RequireJS](http://requirejs.org/)
[RequireJS JSX PLugin](https://github.com/philix/jsx-requirejs-plugin)
