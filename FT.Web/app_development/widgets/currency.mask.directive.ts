module app.widgets {

    class CurencyMaskDirective implements ng.IDirective {
        static instance(): ng.IDirective {
            return new CurencyMaskDirective;
        }

        restrict = "A";
        require = "ngModel";

        link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModelController: ng.INgModelController) {
            var numberWithCommas = (value, addExtraZero) => {
                if (addExtraZero == undefined)
                    addExtraZero = false;
                value = value.toString();
                value = value.replace(/[^0-9\.]/g, "");
                var parts = value.split('.');
                parts[0] = parts[0].replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");
                if (parts[1] && parts[1].length > 2) {
                    parts[1] = parts[1].substring(0, 2);
                }
                if (addExtraZero && parts[1] && (parts[1].length === 1)) {
                    parts[1] = parts[1] + "0";
                }
                return parts.join(".");
            };
            var applyFormatting = () => {
                var value = element.val();
                var original = value;
                if (!value || value.length === 0) { return }
                value = numberWithCommas(value, false);
                if (value !== original) {
                    element.val(value);
                    element.triggerHandler("input");
                }
            };
            element.bind("keyup", e => {
                var keycode = e.keyCode;
                var isTextInputKey =
                    (keycode > 47 && keycode < 58) || // number keys
                        keycode === 32 || keycode === 8 || // spacebar or backspace
                        (keycode > 64 && keycode < 91) || // letter keys
                        (keycode > 95 && keycode < 112) || // numpad keys
                        (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
                        (keycode > 218 && keycode < 223);   // [\]' (in order)
                if (isTextInputKey) {
                    applyFormatting();
                }
            });
            ngModelController.$parsers.push(value => {
                if (!value || value.length === 0) {
                    return value;
                }
                value = value.toString();
                value = value.replace(/[^0-9\.]/g, "");
                return value;
            });
            ngModelController.$formatters.push(value => {
                if (!value || value.length === 0) {
                    return value;
                }
                value = numberWithCommas(value, true);
                return value;
            });
        }

    }

    angular
        .module("app.widgets")
        .directive("currencyMask", CurencyMaskDirective.instance);

}


