module.exports = function () {

    var deploymentPath = "./app_deploy/";
    var devPath = "./app_development/";
    var appJsDev = devPath + "**/*.js";
    var bowerJson = require("./bower.json");

    var config = {
        appJavaScriptFiles:
        [
            //Gulp Files
            "./gulp.config.js", "./gulpfile.js",
            //Angular Files
            appJsDev
        ],

        tsTypingDefinitions: "./typings/**/*.d.ts",

        appTypeScriptFiles: [
            devPath + "**/*.ts"
        ],

        appTsDev: devPath + "**/*.ts",
        appJsDev: appJsDev,
        appJsDepolyment: deploymentPath + "**/*.js",

        appDeployFolder: deploymentPath,
        appDevFolder: devPath,

        js: [
            devPath + "**/*.module.js",
            devPath + "**/*.js",
            "!" + devPath + "**/*.spec.js"
        ],

        bower: {
            json: bowerJson,
            directory: "./bower_components/",
            ignorePath: "../.."
        }

    };

    config.getWiredepOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    }

    return config;
};
