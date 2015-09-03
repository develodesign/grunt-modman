/*
 * Grunt Modman
 * https://github.com/develodesign/grunt-modman.git
 *
 * Copyright (c) 2015 :Paul Bill
 * Licensed under the MIT license.
 */

'use strict';

var shell = require('shelljs');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('modman', 'For use with Magento, this plugin will install modman extensions from a list into a magento installation.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      plugins: []
    });

    // Need to check modman is installed
    if( ! shell.which( 'modman' ) ){

      grunt.log.error( 'Modman is not installed. (which modman)' )
      return false;
    }

    grunt.log.writeln( 'Modman installed attempting to install modules.' );

    var plugins = options.plugins;

    for( var i = 0; i < plugins.length; i++ ){

      var plugin = plugins[i];

      grunt.log.writeln( 'Installing plugin:' + ( i + 1 ) + ' ' + plugin.name );

      //shell.exec( 'modman ' + plugin.command + ' ' + plugin.path + ' ' + plugin.options );
      grunt.log.writeln( 'modman ' + plugin.command + ' ' + plugin.path + ' ' + plugin.options );
    }

  });

};
