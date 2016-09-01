describe("accountService", function() {
    var $accountService;

    beforeEach(module('app'));
    
    beforeEach(inject(function(accountService){
        $accountService = accountService;
    }));
    
    it("accountService existanse", function(){
        expect($accountService == null).toBe(false);
    });
    
});