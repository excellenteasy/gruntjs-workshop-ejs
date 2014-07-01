module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    bump: {
      options: {
        commitMessage: 'chore(release): v%VERSION%',
        files: ['package.json', 'bower.json'],
        commitFiles: ['package.json', 'bower.json'],
        pushTo: 'origin master'
      }
    },

    clean: {
      src: 'build/*'
    },

    concat: {
      js: {
        src: ['app/scripts/*.js'],
        dest: 'build/scripts/main.js'
      }
    },

    connect: {
      options: {
        hostname: '*',
        open: true,
        base: 'build'
      },
      livereload: {
        options: {
          livereload: true
        }
      },
      dist: {
        options: {
          useAvailablePort: true,
          keepalive: true
        }
      }
    },

    copy: {
      html: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: ['*.html'],
          dest: 'build/'
        }],
      }
    },

    githooks: {
      all: {
        'pre-commit': 'jshint'
      }
    },

    jshint: {
      files: '<%= concat.js.src %>',
      options: {
        jshintrc: true
      }
    },

    less: {
      build: {
        src: ['app/styles/main.less'],
        dest: 'build/styles/main.css'
      },
      dist: {
        src: '<%= less.build.src %>',
        dest: '<%= less.build.dest %>',
        options: {
          compress: true,
          cleancss: true,
          sourceMap: true,
          sourceMapURL: 'main.less.map',
          sourceMapFilename: 'build/styles/main.less.map',
          outputSourceFiles: true
        }
      }
    },

    uglify: {
      dist: {
        src: '<%= concat.js.src %>',
        dest: '<%= concat.js.dest %>',
        options: {
          sourceMap: true,
          sourceMapIncludeSources: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        files: ['app/*.html'],
        tasks: ['copy']
      },
      less: {
        options: {
          livereload: false
        },
        files: ['app/styles/*.less'],
        tasks: ['less']
      },
      css: {
        files: '<%= less.build.dest %>'
      },
      js: {
        files: '<%= concat.js.src %>',
        tasks: ['concat'],
      }
    }

  });

  grunt.registerTask('dev', [
    'clean',
    'githooks',
    'copy',
    'concat',
    'less:build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'clean',
    'copy',
    'uglify',
    'less:dist'
  ]);

  grunt.registerTask('default', ['dist', 'connect:dist']);

  grunt.registerTask('version', 'prints npm version', function() {
    var pkg = grunt.file.readJSON('package.json');
    grunt.log.writeln('version: ' + pkg.version);
  });

};
