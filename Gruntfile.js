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

    less: {
      styles: {
        src: ['app/styles/main.less'],
        dest: 'build/styles/main.css'
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

  grunt.registerTask('default', ['clean', 'concat', 'connect', 'copy', 'less', 'watch']);

};
