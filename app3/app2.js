var bookModel;
(function() {
	var proxiedSync = Backbone.sync;

	Backbone.sync = function(method, model, options) {
		options || (options = {});
		if (!options.crossDomain) {
			options.crossDomain = true;
		}
		if (!options.xhrFields) {
			options.xhrFields = {withCredentials:true};
		}
		return proxiedSync(method, model, options);
	};

	var BookModel = Backbone.Model.extend({
		initialize: function() {
			console.log('Initialized Book Model');
		},
		defaults: {
			id: '',
			title: '',
			author: '',
			isbn: ''
		},
		url: function() {
			// return "http://lumen.local/api/v1/book";
			// return "book.json";
			return "book.php";
		},
		parse: function(response) {
			console.log("Parse response: ");
			console.log(response);

			return response;
		}
	});

	// var bookModel = new BookModel();
	bookModel = new BookModel();
	bookModel.fetch({
		success: function() {
			console.log("Data coming from fetch success: ");
			console.log(bookModel.toJSON());
		},
		error: function() {
			console.log("Some error triggered while accessing data service api.");
		}
	});


})();