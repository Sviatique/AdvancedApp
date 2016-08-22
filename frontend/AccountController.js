function AccountController($scope) {
   $scope.clock = {
        now: new Date()
    };
    const updateClock = () => {
        $scope.clock.now = new Date()
    };
    setInterval(() => {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();

};
