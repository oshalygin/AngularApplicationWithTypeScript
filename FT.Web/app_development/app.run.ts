((): void => {
    angular.module("app")
        .run(run);

    function run($rootScope: any,
        $state: angular.ui.IStateProvider,
        $stateParams: angular.ui.IStateParamsService) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();