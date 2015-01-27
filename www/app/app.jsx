/** @jsx React.DOM */
define([
    'react',
    'react-router',
    'jsx!./components/layout/layout',
    'jsx!./components/layout/index/index',
    'jsx!./components/layout/about/about'
], function (React, Router, Layout, Index, About) {

    var app = {
        routes: (
            <Router.Route name="layout" handler={Layout} path='/'>
                <Router.Route name="about" handler={About} path='about' />
                <Router.DefaultRoute name="index" handler={Index} />
            </Router.Route>
        ),

        /**
         * Starts the app form the client and the server
         * @param  {Function} cb    The callback to send HTML from server
         * @param  {String}   route The path requested
         */
        start: function(cb, route) {
            if (typeof window === 'undefined') {
                // Serverside start routes
                Router.run(this.routes, route, function (Handler, state) {
                    var html = React.renderToString(React.createElement(Handler));
                    cb(html);
                });
            } else {
                // Clientside start routes
                Router.run(this.routes, Router.HistoryLocation, function (Handler) {
                    React.render(<Handler/>, document.body);
                });
            }
        }
    };

    return app;
});