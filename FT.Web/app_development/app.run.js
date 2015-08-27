(function () {
    angular.module("app")
        .run(run);
    function run($rootScope, 
        //$state doesn't have a go() typing? ugh...
        $state) {
        $state.go("home");
    }
})();
//# sourceMappingURL=app.run.js.map