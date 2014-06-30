module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  // 1. concat Task laden

  grunt.initConfig({
    // 2. concat Task konfigurieren

    connect: {
      livereload: {
        options: {
          hostname: '*',
          livereload: true,
          open: true,
          base: 'app',
        }
      }
    },

    less: {
      styles: {
        src: ['app/styles/main.less'],
        dest: 'app/styles/main.css'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['app/*.html']
      },
      less: {
        options: {
          livereload: false
        },
        files: ['app/styles/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['app/styles/main.css']
      },
      // 3. JavaScript Dateien überwachen
    }
  });

  // 4. concat Task hinzufügen
  grunt.registerTask('default', ['connect', 'less', 'watch']);

};
