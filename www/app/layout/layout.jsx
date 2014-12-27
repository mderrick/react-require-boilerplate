define([
	'react',
	'react-router'
], function (React, Router) {

	return React.createClass({

		classes: React.addons.classSet({
			layout: true
		}),

		render: function () {
			return (
				<div className={this.classes}>
					<h1>React Boilerplate</h1>
					<ul>
						<li><Router.Link to="/">Index</Router.Link></li>
						<li><Router.Link to="/about">About</Router.Link></li>
					</ul>
					<Router.RouteHandler/>
					<p>made by <a href="http://mattderrick.co.uk">mattderrick.co.uk</a></p>
				</div>
			)
		}

	});

});