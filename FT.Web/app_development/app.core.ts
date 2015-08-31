((): void => {

    "use strict";

    angular.module("app.core", [
        //Core Angular
        "ngRoute"
        ,"ngResource"
        ,"ngAnimate"

        //Third Party
        , "ui.router"
        , "angularSpinners"
        , "ui.bootstrap"

        //TODO: confirm if necessary
        , "ui.bootstrap.showErrors"

    ]);

})();

