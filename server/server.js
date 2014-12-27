var express = require('express'),
    app = express(),
    path = require('path'),
    colors = require('colors'),
    requirejs = require('requirejs'),
    cons = require('consolidate'),
    handlebars = require('handlebars');

app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './views'));

app.set('port', process.env.PORT || 9001);

requirejs.config({
    nodeRequire: require,
    baseUrl: './www/app',
    paths: {
        'jsx': './../bower_components/jsx-requirejs-plugin/js/jsx',
        'JSXTransformer': './../bower_components/jsx-requirejs-plugin/js/JSXTransformer',
        'react': './../bower_components/react/react-with-addons',
        'text': './../bower_components/requirejs-text/text',
        'react-router': './../bower_components/react-router/dist/react-router'
    },
    jsx: {
        fileExtension: '.jsx'
    }
});

global.React = require('react');
var jsApp = requirejs('jsx!app'),
    Router = require('react-router');

app.use('/', express.static(path.join(__dirname, '../www')));
app.use(function(req, res) {
    'use strict';
    jsApp.start(function(html) {
        res.render('index', {
            content: html
        });
    }, req.path);
});

app.listen(app.get('port'), function() {
    'use strict';
    console.log('Server started: '.cyan +
        'http://localhost:' + app.get('port'));
    console.log('Press \'ctrl + c\' to terminate server'.grey);
});