module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 1. LESS Task laden

  grunt.initConfig({
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

    // 2. LESS konfigurieren

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['app/*.html']
      }
      // 3. LESS Dateien überwachen und neu kompilieren
      //    (Browser noch nicht neu laden lassen)

      // 4. Kompilierte CSS Datei überwachen und live neuladen
    }
  });
  // 5. LESS Task registieren
  grunt.registerTask('default', ['connect', 'watch']);

};
