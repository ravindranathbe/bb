var userModel;
(function() {
	var UserModel = Backbone.Model.extend({
		initialize: function() {
			console.log('Initialized User Model');
		},
		defaults: {
			id: '1',
			userName: 'admin',
			userFirstname: 'Administrator',
			userLastname: 'User'
		}
	});

	// var userModel = new UserModel();
	userModel = new UserModel();
	// console.log(userModel.get('userName'));
	userModel.set('userAge', '20');
	// console.log(userModel);

})();