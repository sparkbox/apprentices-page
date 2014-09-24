module.exports = function(grunt) {
  grunt.config("compass", {
    dev: {
      options: {
        environment: 'dev',
        sassDir: 'scss',
        cssDir: 'dist/static/css',
        imageDir: 'dist/static/img',
        outputStyle: 'expanded',
        noLineComments: true
      }
    },
    dist: {
      options: {
        environment: 'production',
        sassDir: 'scss',
        cssDir: 'dist/static/css',
        imageDir: 'dist/static/img',
        outputStyle: 'compact'
      }
    }
  });
  return grunt.loadNpmTasks('grunt-contrib-compass');
};
