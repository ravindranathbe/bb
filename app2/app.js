// app.js
var App = {
	Models: {},
	Collections: {},
	Routers: {},
	start() {
		// Initialize all available routes
		_.each(_.values(this.Routers), function(Router) {
			new Router();
		});

		// Create a global router to enable sub-applications to
		// redirect to other urls
		App.router = new DefaultRouter();
		Backbone.history.start();
	},
	// Only a subapplication can be running at once, destroy any
	// current running subapplication and start the asked one
	startSubApplication(SubApplication) {
		// Do not run the same subapplication twice
		if (this.currentSubapp && this.currentSubapp instanceof SubApplication) {
			return this.currentSubapp;
		}

		// Destroy any previous subapplication if we can
		if (this.currentSubapp && this.currentSubapp.destroy) {
			this.currentSubapp.destroy();
		}

		// Run subapplication
		this.currentSubapp = new SubApplication({
			region: App.mainRegion
		});

		return this.currentSubapp;
	},
}