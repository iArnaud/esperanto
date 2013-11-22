define([
    "jquery", 
    "underscore", 
    "backbone", 
    "marionette", 
    "geppetto",
    "text!src/js/templates/HomeViewTemplate.html",
    "src/js/controller/ApplicationContext"], 
    function(
        $, 
        _, 
        Backbone, 
        Marionette, 
        Geppetto,
        HomeViewTemplate,
        ApplicationContext) 
{

    "use strict";

    return Marionette.ItemView.extend({
        template : HomeViewTemplate,
        initialize : function() {
            _.bindAll.apply(_, [this].concat(_.functions(this)));
            //create a Geppetto context
            Geppetto.bindContext({
                view : this,
                context : ApplicationContext
            });
        }
    });

});
