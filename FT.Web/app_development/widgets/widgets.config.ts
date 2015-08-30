((): void => {
    "use strict";

    angular
        .module("app.widgets")
        .config(configuration);

    configuration.$inject = ["showErrorsConfigProvider"];

    function configuration(showErrorsConfigProvider) {
        showErrorsConfigProvider.showSuccess(true);
    }

})();