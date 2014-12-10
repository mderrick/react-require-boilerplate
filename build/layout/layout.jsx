define([
	'react',
	'react-router'
], function (React, Router) {

	return React.createClass({

		render: function () {
			return (
				<div>
					<ul>
						<li><Router.Link to="/">Index</Router.Link></li>
						<li><Router.Link to="/about">About</Router.Link></li>
					</ul>
					<Router.RouteHandler/>
				</div>
			)
		}

	});

});