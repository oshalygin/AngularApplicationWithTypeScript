((): void => {

    angular.module("app.widgets")
        .filter("highlight", () => (text, search, caseSensitive) => {

            if (text && (search || angular.isNumber(search))) {
                text = text.toString();
                search = search.toString();
                if (caseSensitive) {
                    return text.split(search).join("<span class='ui-match'>" + search + "</span>");
                } else {
                    return text.replace(new RegExp(search, "gi"), "<span class='ui-match'>$&</span>");
                }
            } else {
                return text;
            }
        });
});

