module.exports = function(grunt) {
  grunt.config("sass", {
    dist: {
      files: {
        'dist/css/mqs.css' : 'scss/mqs.scss',
        'dist/css/no-mqs.css' : 'scss/no-mqs.scss'
      }
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-sass');
};
