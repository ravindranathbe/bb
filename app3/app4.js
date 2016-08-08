var Wine = Backbone.Model.extend();

/* firstWine = new Wine({
	name: 'Wine1'
}); */

var Wines = Backbone.Collection.extend({
	Model: Wine,
	url: '#'
});

var wines = new Wines([
	{name: 'Wine1'},
	{name: 'Wine2'}
]);

/* wines.each(function(m) {
	console.log(m.get('name'));
}); */

var ListView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function() {
		// this.render();
		this.template = _.template($('#item-container').html());
	},
	render: function() {
		this.$el.empty();
		this.$el.append('<li>Item 1</li>');
		this.$el.append('<li>Item 2</li>');
		return this;
	}
});

var HomeView = Backbone.View.extend({
	el: 'body',
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.empty();
		this.$el.append('<h1>Home</h1>');

		this.listView = new ListView();
		this.$el.append(this.listView.render().el);

		return this;
	}
});

var WineApp = new HomeView();

