"use strict";
require.config({	
    paths : {
        "libs"  : "libs/js",
        "jquery" : "libs/js/jquery/jquery",
        "jqueryui" : "libs/js/jquery-ui/jquery-ui",
        "underscore" : "libs/js/underscore/underscore",
        "backbone" : "libs/js/backbone/backbone",
        "marionette":'libs/js/marionette/backbone.marionette',
        "geppetto" : "libs/js/backbone.geppetto/backbone.geppetto",
        "text" : "libs/js/text/text",
        "handlebars" : "libs/js/handlebars/index",
        "mockJSON": "libs/js/mockJSON/jquery.mockjson",
        "Backbone.ModelBinder" : "libs/js/Backbone.ModelBinder/Backbone.ModelBinder",
        "hammer" : "libs/js/hammerjs/hammer",
        "backbone.wreqr":'libs/js/backbone.wreqr/backbone.wreqr',
        "backbone.babysitter":'libs/js/backbone.babysitter/backbone.babysitter'
    },
   // urlArgs: "bust=" + (new Date()).getTime(),
    shim : {
        "jquery" : {
            exports : "$"
        },
        "jqueryui" : {
            deps : ["jquery"]
        },
        "underscore" : {
            exports : "_"
        },
        "backbone" : {
            deps : ["underscore", "jquery"],
            exports : "Backbone"
        },     
        "Backbone.ModelBinder" :{
            deps : ["backbone"]
        },
        "mockJSON" : {
        	deps : ["jquery"]
        },
        "hammer" : {
        	deps : ["jquery"]
        }
		
    }

});

define([
    "jquery",
    "jqueryui",
    "underscore",
    "backbone",
    "marionette",
    "geppetto",
    "src/js/app/MainApplication",
    "Backbone.ModelBinder",
    "handlebars",
    "hammer",    
    "mockJSON"
], function(
    $,
    jqueryUI,
    _,
    Backbone,
    Marionette,
    Geppetto,
    MainApplication) {	


	$(function() {

		Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
			return Handlebars.compile(rawTemplate);
		};

		$.noConflict(true);
		_.noConflict();
		Backbone.noConflict();
		
		return MainApplication.start();
	});
});
