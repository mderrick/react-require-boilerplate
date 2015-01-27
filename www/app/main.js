require.config({
    paths: {
        'jsx': './../bower_components/jsx-requirejs-plugin/js/jsx',
        'JSXTransformer': './../bower_components/jsx-requirejs-plugin/js/JSXTransformer',
        'react': './../bower_components/react/react-with-addons',
        'text': './../bower_components/requirejs-text/text',
        'react-router': './../bower_components/react-router/dist/react-router',
        'dispatcher': './../bower_components/flux-dispatcher/Dispatcher'
    },
    jsx: {
        fileExtension: '.jsx'
    },
    shim: {
        'react-router': {
            deps: ['react'],
            exports: 'ReactRouter'
        }
    }
});

require(['react'], function(React) {
    // React router requires react be on the window
    window.React = React;
});

require(['jsx!app'], function(app) {
    // Start the app!
    app.start();
});