describe("accountController", function() {
    var accountController;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($controller){
        accountController = $controller('accountController');
    }));
    
    it("exist", function() {
    expect(accountController == null).toBe(false);
    });
});