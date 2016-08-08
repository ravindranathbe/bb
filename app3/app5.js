var Song = Backbone.Model.extend({
	defaults: {
		name: 'No song',
		artist: 'No artist',
		year: '1900'
		// , singer: ''
	},
	initialize: function() {
		console.log('Song model initialized');
	},
	validate: function(attrs) {
		/* if(attrs.singer == '') {
			return 'Singer should be set';
		} */
	},
	f1: function() {
		console.log('Called f1 from Song');
	}
});

var SongExt = Song.extend({
	f1: function() {
		console.log('Called f1 from SongExt');
	}
});

var SongCollection = Backbone.Collection.extend({
	model: Song
});

var song1 = new Song();
song1.set({
	name: 'I am happy',
	artist: 'Ravi',
	year: '2016'
	// ,
	// singer: 'Ravi'
});

var song2 = new Song({
	name: 'I am Cool',
	artist: 'Ravi',
	year: '2015'
});

var songCollection = new SongCollection();
songCollection.add(song1);
songCollection.add(song2);

// var song2 = new SongExt();

/* songCollection.each(function(song) {
	$('#table-body').append('<tr>' +
		'<td>' + song.get('name') + '</td>' +
		'<td>' + song.get('artist') + '</td>' +
		'<td>' + song.get('year') + '</td>' +
		'</tr>'
	);
}); */

var SongsView = Backbone.View.extend({
	el: '#table-body',
	initialize: function() {
		console.log('Songs View initialized');
		this.render();
	},
	render: function() {
		this.$el.html('');

		songCollection.each(function(model) {
			var songView = new SongView({
				model: model
			})

			this.$el.append(songView.render().el);
		}.bind(this));

		return this;
	}
});

var SongView = Backbone.View.extend({
	tagName: 'tr',
	template: _.template($('#song-template').html()),
	initialize: function() {
		console.log('Song View initialized');
		// this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

var app = new SongsView;
