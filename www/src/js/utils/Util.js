define([
    "jquery", 
    "underscore", 
    "backbone"], 
    function(
        $, 
        _, 
        Backbone) {

    "use strict";
    var util = {};
    
	//A function to add two numbers;
	util.add = function(a,b){
		return a + b;
	};    
    return util;

});
