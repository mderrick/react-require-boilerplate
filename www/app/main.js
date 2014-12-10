require.config({
    paths: {
        'jsx': './../bower_components/jsx-requirejs-plugin/js/jsx',
        'JSXTransformer': './../bower_components/jsx-requirejs-plugin/js/JSXTransformer',
        'react': './../bower_components/react/react',
        'text': './../bower_components/requirejs-text/text'
    },
    jsx: {
        fileExtension: '.jsx'
    }
});

require(['react', 'jsx!app'], function(React, App) {
    React.render(App(), document.body);
});