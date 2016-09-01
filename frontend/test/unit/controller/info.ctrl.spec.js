describe("infoController", function() {
    var infoController;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($controller){
        infoController = $controller('infoController');
    }));
    
    it("exist", function() {
        expect(infoController == null).toBe(false);
    });
});