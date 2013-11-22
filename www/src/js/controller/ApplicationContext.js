define([
    'backbone', 
    'geppetto'
    ], 
    function(
        Backbone, 
        Geppetto) 
        {

            "use strict";
            //return a geppetto context
            return Geppetto.Context.extend({
                //setup an initialize function
                initialize : function() {
                    this.model = new Backbone.Model({
                        paths : []
                    });
                    // map commands here
                }
            });

});
