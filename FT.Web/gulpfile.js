/// <binding />
//gulpfile.js

    var gulp = require("gulp");
    var config = require("./gulp.config")();
    var $ = require("gulp-load-plugins")({ lazy: true });
    var del = require("del");



    gulp.task("help", $.taskListing);
    gulp.task("default", ["help"]);

    gulp.task("jshint", function() {
        log("** JSHint Check **");
        return gulp
            .src(config.appJavaScriptFiles)
            .pipe($.jshint())
            .pipe($.jshint.reporter("jshint-stylish", { verbose: true }))
            //todo:  Step necessary to stop the build process in case of JSHint blows up
            .pipe($.jshint.reporter("fail"));

    });

    gulp.task("tslint", function() {
        log("** TSLint Check **");

        return gulp
            .src(config.appTsDev)
            .pipe($.tslint())
            .pipe($.tslint.report("verbose"));

    });

    gulp.task("clean-js", function(done) {
        var delConfig = [].concat(config.appJsDepolyment);
        clean(delConfig, done);
    });

    gulp.task("transpile", ["clean-js"], function() {
        log("** Transpiling TypeScript Files **");

        var typescriptOptions = {
            removeComments: true,
            target: "ES5",
            noImplicitAny: true
        };
        //todo: fix sourcemaps destination
        return gulp
            .src([config.appTsDev, config.tsTypingDefinitions])
            //.pipe($.sourcemaps.init({loadMaps: true}))
            .pipe($.typescript(typescriptOptions))
            //.pipe($.sourcemaps.write({includeContent: false}))
            .pipe(gulp.dest(config.appDeployFolder));
    });

    gulp.task("typescript-watcher", function() {
        log("*** Watching TypeScript files for changes **");

        gulp.watch([config.appTsDev], ["transpile"])
                .on("change", function (event) {
                changedEvent(event);
            });

    });

//todo add gulp-inject to populate the cshtml file...
//todo add uglify/minification
    
    function clean(path, done) {
        log("Cleaning " + $.util.colors.red(path));
        del(path, done);

    }

    function changedEvent(event) {
        var srcPattern = new RegExp("/.*(?=/" + config.source + ")/");
        var message = "File: " + event.path.replace(srcPattern, "") + " was " + event.type;
        $.util.log($.util.colors.green(message));
    }

    function log(msg) {
        if (typeof (msg) === "object") {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    $.util.log($.util.colors.blue(msg[item]));
                }
            }
        } else {
            $.util.log($.util.colors.blue(msg));
        }
    }
