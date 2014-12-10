require.config({
    paths: {
        'jsx': './../bower_components/jsx-requirejs-plugin/js/jsx',
        'JSXTransformer': './../bower_components/jsx-requirejs-plugin/js/JSXTransformer',
        'react': './../bower_components/react/react',
        'text': './../bower_components/requirejs-text/text',
        'react-router': './../bower_components/react-router/dist/react-router'
    },
    jsx: {
        fileExtension: '.jsx'
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