
describe("dialogService", function() {
    var $dialogService;

    beforeEach(module('app'));
    
    beforeEach(inject(function(dialogService){
        $dialogService = dialogService;
    }));
    
    it("dialogService existanse", function(){
        expect($dialogService == null).toBe(false);
    });
});