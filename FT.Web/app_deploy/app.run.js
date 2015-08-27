(function () {
    angular.module("app")
        .run(run);
    function run($rootScope, $state) {
        $state.go("home");
    }
})();
