module.exports = function () {

    var deploymentPath = "./app_deploy/";
    var devPath = "./app_development/";
    var appJsDev = devPath + "**/*.js";

    var config = {
        appJavaScriptFiles:
        [
            //Gulp Files
            "./gulp.config.js", "./gulpfile.js",
            //Angular Files
            appJsDev
        ],

        tsTypingDefinitions: "./typings/**/*.d.ts",

        appTypeScriptFiles:[
            devPath + "**/*.ts"
        ],

        appTsDev: devPath + "**/*.ts",
        appJsDev: appJsDev,
        appJsDepolyment: deploymentPath + "**/*.js",

        appDeployFolder: deploymentPath,
        appDevFolder: devPath


};

    return config;
};
