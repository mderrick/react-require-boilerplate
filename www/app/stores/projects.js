define([
	'./../dispatcher/dispatcher'
], function(dispatcher) {

	var ProjectStore = {
		_projects: []
	};

	dispatcher.register(function(payload) {
		var action = payload.action;
		console.log(action);
	});

	return ProjectStore;
	
});