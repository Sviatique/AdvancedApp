
describe("services", function() {
    var $accountService, $dialogService;

    beforeEach(module('app'));
    
    beforeEach(inject(function(accountService, dialogService){
        $accountService = accountService;
        $dialogService = dialogService;
        
    }));
    
    it("accountService existanse", function(){
        expect($accountService == null).toBe(false);
    });
    
    it("dialogService existanse", function(){
        expect($dialogService == null).toBe(false);
    });
});