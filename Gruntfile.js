module.exports = function(grunt) {
  'use strict';

  grunt.registerTask('hello', function() {
    grunt.log
      .ok()
      .write('Alles funktioniert wie es soll.');
  });
};
