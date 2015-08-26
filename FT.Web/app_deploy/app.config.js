(function () {
    angular.module("app")
        .config(configuration);
    configuration.$inject = ["$locationProvider"];
    function configuration($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcudHMiXSwibmFtZXMiOlsiY29uZmlndXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUVHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2hCLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUzQixhQUFhLENBQUMsT0FBTyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM5Qyx1QkFBdUIsaUJBQXVDO1FBQzFEQSxpQkFBaUJBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ3RDQSxDQUFDQTtBQUVMLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiYXBwLmNvbmZpZy5qcyJ9