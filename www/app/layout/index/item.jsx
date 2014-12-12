define([
	'react',
	'react-router'
], function (React, Router) {

	return React.createClass({

		render: function () {
			return (
				<li><Router.Link to='color' params={{color: this.props.data.key}}>{this.props.data.color}</Router.Link></li>
			)
		}

	});

});