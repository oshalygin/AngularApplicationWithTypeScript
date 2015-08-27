(function () {
    angular.module("app")
        .run(run);
    function run($rootScope, 
        //$state doesn't have a go() typing? ugh...
        $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
})();
//# sourceMappingURL=app.run.js.map