((): void => {
    angular.module("app")
        .run(run);

    function run($rootScope: any,
        //$state doesn't have a go() typing? ugh...
        $state: any,
        $stateParams: angular.ui.IStateParamsService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        
    }

})();