((): void => {
    angular.module("app")
        .run(run);

    function run($rootScope: ng.IRootScopeService,
        //$state doesn't have a go() typing? ugh...
        $state: any) {
        $state.go("home");
    }
        
    


})();