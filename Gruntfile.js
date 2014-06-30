module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      src: 'build/*'
    },

    concat: {
      js: {
        src: ['app/scripts/*.js'],
        dest: 'build/scripts/main.js'
      }
    },


    // 1. Einen zweiten Webserver aufsetzen
    connect: {
      livereload: {
        options: {
          hostname: '*',
          livereload: true,
          open: true,
          base: 'build',
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

    // 2. CSS Dateien minifizieren und Sourcemaps generieren
    less: {
      styles: {
        src: ['app/styles/main.less'],
        dest: 'build/styles/main.css'
      }
    },

    // 3. JavaScript minifizieren und Sourcemaps generieren

    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      html: {
        files: '<%= copy.html.files[0].src %>',
        tasks: ['copy']
      },
      less: {
        options: {
          livereload: false
        },
        files: '<%= less.styles.src %>',
        tasks: ['less']
      },
      css: {
        files: '<%= less.styles.dest %>'
      },
      js: {
        files: '<%= concat.js.src %>',
        tasks: ['concat'],
      }
    }
  });

  // 4. Tasks in 'dev' und 'dist' ausdifferenzieren
  grunt.registerTask('default', ['clean', 'concat', 'connect', 'copy', 'less', 'watch']);

};
