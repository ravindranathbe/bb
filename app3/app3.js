(function() {
	var photoModel = Backbone.Model.extend({
		/*
		defaults: {
			// title: 'No title',
			location: 'No location'
		},
		*/
		validate: function(attribs) {
			console.log(attribs.location);
			if(attribs.location === undefined) {
				return 'Please set location';
			}
		},
		initialize: function() {
			console.log('Photo model initialized');
			this.on('change:title', function() {
				console.log('Title changed');
			});
			this.on('error', function(model, error) {
				console.log(error);
			});
		}
	});

	var myPhoto = new photoModel({ title: 'My awesome photo'});
	myPhoto.on('error', function(m, e) {
		console.log(error);
	});
	// console.log(myPhoto.get('title'));
	myPhoto.set('title', 'My awesome photo - updated');
	// console.log(myPhoto.get('title'));

	// var myPhoto2 = new photoModel();
	// myPhoto.set('title', 'My awesome photo 2');
})();