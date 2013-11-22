define([      
    "jquery",
    "libs/chai/chai",
    "libs/chai-jquery/chai-jquery",
    "libs/chai-datetime/chai-datetime",
    "libs/sinon-chai/sinon-chai",
    // declare module-specific test suites
    "test/main-test-suites"

], function(
    $,
    chai,
    chaiJquery,
    chaiDatetime,
    chaiSinon
){
    "use strict";

    chai.Assertion.includeStack = true;

    // http://chaijs.com/api/bdd/
    window.expect = chai.expect;

    chai.use(chaiJquery);
    chai.use(chaiDatetime);
    chai.use(chaiSinon);

  
     // Disable jQuery animations which were slowing down many tests.  No need to
    // test that animations are happening, since jQuery tests themselves already
    // cover this...
    $.fx.off = true;
    
    // after each test, clean up the sandbox element, and reset mn.context to prevent
    // artifacts from being shared between tests, and to encourage tests that depend
    // on mn.context to create their own from scratch...
    afterEach(function() {
        $("#sandbox-fixture").empty();
    });
    
    return {
        start: function() {    
            // Once dependencies have been loaded using RequireJS, go ahead and run the tests...
            mocha.run();
        }
    };

});