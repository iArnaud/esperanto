define([
    "jquery", 
    "underscore", 
    "backbone", 
    "marionette", 
    "geppetto",
    "src/js/views/HomeView"], 
    function(
        $, 
        _, 
        Backbone, 
        Marionette, 
        Geppetto,
        HomeView) 
{

    "use strict";
    
    var app = new Marionette.Application();

    app.addInitializer(function(options) {
		
		var homeViewModel = new Backbone.Model({
			"description" : "Hello !!!"
		});
		var homeViewInstance = new HomeView({
			model : homeViewModel
		}); 
				
        $("#mainShell").append(homeViewInstance.render().$el);        

    });

    return app;

});
