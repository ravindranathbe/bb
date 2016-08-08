var app = app || {};

app.singleFlower = Backbone.Model.extend({
	defaults: {
		color: 'pink',
		img: 'img/placeholder.jpg'
	},
	initialize: function() {
		console.log('Initialized singleFlower');
	}
});