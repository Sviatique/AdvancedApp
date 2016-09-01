describe("dialogController", function() {
    var dialogController;
    var accData;
    var mode;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($controller, $rootScope){
        accData = {};
        dialogController = $controller('dialogController', 
           {
                $scope: $rootScope,
                accData: accData,
                mode: mode
           });
    }));
    
    it("exist", function() {
        expect(dialogController == null).toBe(false);
    });
    
    it("calls service method", function(){
        
    });
});