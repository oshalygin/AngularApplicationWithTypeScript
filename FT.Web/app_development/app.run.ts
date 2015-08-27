module app.common {
    export interface IRootScope extends angular.IRootScopeService {
        $state: angular.ui.IStateProvider;
        $stateParams: angular.ui.IStateParamsService;
    }
}

((): void => {
    angular.module("app")
        .run(run);

 

    function run($rootScope: app.common.IRootScope,
        $state: angular.ui.IStateProvider,
        $stateParams: angular.ui.IStateParamsService) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();

