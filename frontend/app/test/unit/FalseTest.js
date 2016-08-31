
describe("account service", function() {
    var $controllerConstructor;
    var scope;
    
    beforeEach(angular.module('app'));
    
    
    it("contains spec with an expectation", function(){
        var ctrl = $controllerConstructor('accountController', {$scope: scope});
        
        expect(true).toBe(false);
    });
});