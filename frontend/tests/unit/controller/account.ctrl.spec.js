describe("accountController", function() {
    var $controller;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    it("exist", function() {
        var controller = $controller('accountController');

        expect(controller).toBeDefined();
    });
    
    it("calls accountService method", function() {
        var $q;
        var controller;
        
        inject(function(_$q_){
            $q = _$q_; 
        });
        
        var accountService = jasmine.createSpyObj('accountService', ['getAccounts']);
        
        accountService.getAccounts.and.returnValue($q.when({}));
        
        controller = $controller('accountController', {
            accountService: accountService 
        });

        expect(accountService.getAccounts).toHaveBeenCalled();
    });        
});
