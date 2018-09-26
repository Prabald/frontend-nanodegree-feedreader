/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // This test  loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

        it('URL are defined', function(){
           allFeeds.forEach(function(item){
            expect(item.url).toBeDefined();
            expect(item.url.length).toBeGreaterThan(0);

           })
        });

        // This test loops through each feed in the allFeeds object and ensures it has a name definedand that the name is not empty.
         
         it('names are defined', function(){
           allFeeds.forEach(function(item){
            expect(item.name).toBeDefined();
            expect(item.name.length).toBeGreaterThan(0);

           })
        });

    });


    

    describe('menu',function(){
         // TODO: This test ensures that the menu element is hidden by default. 
        
        it('menu is hidden',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
            
            
        });
        
         //This test ensures that the menu changes visibility when the menu icon is clicked.
        
        it('menu changes visibilty',function(){
            let menuIcon=$('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
            
        });
    });
    
      describe("Initial Entries",function(){
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        //This test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
         
        it('has atleast one entry',function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            
        });
        
        
    });
        
       
    describe('News Feed Selection',function(){
        
        //This test ensures when a new feed is loaded by the loadFeed function that the content actually changes.
                  
        let feed1,feed2;
          beforeEach(function(done) {
            loadFeed(0,function() {
                feed1= $('.feed').children().text();
                loadFeed(1,function(){
                
                feed2=$('.feed').children().text();
                
                done();
            });
                     
                 });

             });
        it('the content changes when new feed is loaded',function(done){

            expect(feed1).not.toBe(feed2); 
            done();
        });

        
        
    });
        
  
       
}());
