'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var MarionetteifyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
        this.bowerInstall();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic Marionetteify generator.'));

    var prompts = [
      {
        name: "appName",
        message: "Whats the name of your app?"
      },    
      {
        name: 'appRootVar',
        message: 'Whats the global var for your app (ex. App)?',
      }
    ];

    this.prompt(prompts, function (props) {
      this.appRootVar = props.appRootVar;
      this.appName    = props.appName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/css');
    this.mkdir('src/js');
    this.mkdir('src/js/apps');
    this.mkdir('src/js/config');
    this.mkdir('src/js/entities');
    this.mkdir('src/js/lib');
    this.mkdir('src/js/lib/components');
    this.mkdir('src/js/lib/concerns');
    this.mkdir('src/js/lib/controllers');
    this.mkdir('src/js/lib/entities');
    this.mkdir('src/js/lib/utilities');
    this.mkdir('src/js/lib/views');
    this.mkdir('src/assets');
    this.mkdir('src/assets/images');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_.bowerrc', '.bowerrc');
    this.copy('_Gulpfile.js', 'Gulpfile.js');
    this.copy('_Gulpfile.coffee', 'Gulpfile.coffee');

    this.template('_app.md', 'src/js/app.coffee');
    this.template('_index.html.md', 'src/index.html');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = MarionetteifyGenerator;