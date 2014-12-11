/** @jsx React.DOM */
define([
    'react',
    'react-router',
    'jsx!./layout/layout',
    'jsx!./layout/index/index',
    'jsx!./layout/about/about'
], function (React, Router, Layout, Index, About) {

    var routes = (
        <Router.Route handler={Layout} path='/'>
            <Router.Route handler={About} path='about' />
            <Router.DefaultRoute handler={Index} />
        </Router.Route>
    );

    var app = {
        start: function() {
            Router.run(routes, Router.HistoryLocation, function (Handler) {
                React.render(<Handler/>, document.body);
            });
        }
    };

    return app;
});