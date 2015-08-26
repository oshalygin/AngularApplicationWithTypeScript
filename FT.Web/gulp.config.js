module.exports = function () {

    var deploymentPath = "./app_deploy/";
    var devPath = "./app_development/";

    var config = {
        allJavascriptFilesInSolution:
        [
            //Gulp Files
            "./gulp.config.js", "./gulpfile.js"
            //Angular Files
        ],

        appTsDev: devPath + "**/*.ts",
        appJsDev: devPath + "**/*.js",
        appJsDepolyment: deploymentPath + "**/*.js",

        appDeployFolder: deploymentPath
        
};

    return config;
};
