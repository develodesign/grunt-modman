# Grunt Modman

> For use with Magento, this plugin will install modman extensions from a list into a magento installation.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install Grunt Modman --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-modman');
```

## The "modman" task

### Overview
In your project's Gruntfile, add a section named `modman` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  modman: {
    install: {
      plugins: [{
        name: 'Plugin name',
        command: 'clone', // checkout|clone|hgclone depending on what version control your plugin uses.
        path: 'https://path/to/repo',
        options: '' // Any options to be passed through when cloning a repo. Ie -b 'branch name'
      }]
    }
  },
})
```

Depending on how many extensions you have you might want to keep the plugin data in a json file.
For example:
```modman.json```
```js
[
  {
    "command":  "clone",
    "name":     "Extension One",
    "options":  "-b 'branchname'",
    "path":     "https://path/to/repo"
  },
  {
    "command":  "checkout",
    "name":     "Extension Two",
    "options":  "",
    "path":     "https://path/to/repo"
  }
]
```
```Gruntfile.js```
```
grunt.initConfig({
  modmanPlugins: grunt.file.readJSON( 'modman.json' ),
  modman: {
    install: {
      plugins: '<%= modmanPlugins %>'
    }
  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 Initial release.

## License
Copyright (c) 2015: Develo // Design. Licensed under the MIT license.
