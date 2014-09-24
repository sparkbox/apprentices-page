module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require("./package.json")
  });
  grunt.loadTasks("grunt");
  grunt.registerTask("server", ["connect", "watch"]);
  // Default task
  return grunt.registerTask("default", "server")
};
