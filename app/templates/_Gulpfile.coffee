var gulp    = require("gulp")
var plugins = require("gulp-load-plugins")()
var color   = plugins.util.colors

# ----------------------------------------------------------------------------
# Tasks config
# ----------------------------------------------------------------------------
config =
  serverPort: 3000
  livereloadPort: 35729
  paths:
    tmp: "./.tmp/"
    dist: "./dist/"
    distImages: "./dist/images/"
    index: "./src/index.html"
    images: "./src/images/**/*"
    appStyleFile: "./src/styles/app.scss"
    appScriptFile: "./src/javascript.coffee"
    testScriptFile: "./test/test.coffee"
    styles: "./src/styles/**/*"
    scripts: "./src/**/*.coffee"
    tests: "./test/**/*"
    hbs: "./src/app/**/*.hbs"