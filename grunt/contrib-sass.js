module.exports = function(grunt) {
  grunt.config("sass", {
    dist: {
      files: {
        'css/mqs.css' : 'scss/mqs.scss'
      }
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-sass');
};
