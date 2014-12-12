/** @jsx React.DOM */
define([
    'react',
    'react-router',
    'jsx!./layout/layout',
    'jsx!./layout/index/index',
    'jsx!./layout/about/about'
], function (React, Router, Layout, Index, About) {

    var app = {
        routes: (
            <Router.Route handler={Layout} path='/'>
                <Router.Route handler={About} path='about' />
                <Router.Route name="color" handler={Index} path='/:color' />
                <Router.DefaultRoute handler={Index} />
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