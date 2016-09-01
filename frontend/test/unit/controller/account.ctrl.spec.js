describe("accountController", function() {
    var $controller,
        accountService;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
        accountService = {
            getAccounts : function(){return {then: function(){return {data: "account list"}}}}
        };
        
    }));
    
    it("exist", function() {
        var $scope = {};
        console.log(accountService)
        var controller = $controller('accountController', 
        {
            $scope: $scope,
            accountService: accountService
        });
        
        console.log(controller)
        expect(controller).toBe(false);
    });
    
    it("calls service method", function() {
        
    });
});