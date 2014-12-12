define([
	'react',
	'jsx!./item',
	'react-router'
], function (React, Item, Router) {

	return React.createClass({
		mixins: [Router.State],
		getInitialState: function() {
			return {
				items: [{
					key: 'red',
					color: 'red'
				}, {
					key: 'blue',
					color: 'blue'
				}, {
					key: 'yellow',
					color: 'yellow'
				}, {
					key: 'green',
					color:  'green'
				}]
			};
		},

		render: function () {
			var colorNodes = this.state.items.map(function (item) {
				return (
					<Item data={item}></Item>
				);
			}),
			activeItem = this.getParams().color;

			return (
				<div>
					<h2>Index</h2>
					<ul>
						{colorNodes}
					</ul>
					<div>Currently active: {activeItem}</div>
				</div>
			)
		}

	});

});