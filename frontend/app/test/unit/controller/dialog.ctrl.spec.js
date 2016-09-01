describe("dialogController", function() {
    var dialogController;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($controller){
        dialogController = $controller('dialogController');
    }));
    
    it("exist", function() {
        expect(dialogController == null).toBe(false);
    });
});