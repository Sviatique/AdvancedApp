describe("accountController", function() {
    var $controller;
    var scope;
    beforeEach(module('app'));
    
    beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        scope = $rootScope.$new();
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
        
        controller = $controller('accountController as vm', {
            accountService: accountService,
            $scope: scope
        });

        expect(accountService.getAccounts).toHaveBeenCalled();
    });
    
    it("doesn't store any info on init", function() {
        var controller;
        
        controller = $controller('accountController as vm', {
            $scope: scope
        });

        expect(scope.vm.accounts).toBeUndefined();
    });
    
    it("stores data from service after it is returned", function() {
        var $q;
        var controller;
        
        inject(function(_$q_){
            $q = _$q_; 
        });
        
        var accountService = jasmine.createSpyObj('accountService', ['getAccounts']);
        
        accountService.getAccounts.and.returnValue($q.when({
            data: 'data'
        }));
        
        controller = $controller('accountController as vm', {
            accountService: accountService,
            $scope: scope
        });
        
        scope.$apply();
        expect(scope.vm.accounts).toBe('data');
    });
    
    
});
