module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require("./package.json")
  });
  grunt.loadTasks("grunt");
  grunt.registerTask("compile", ["sass", "copy", "grunticon"])
  grunt.registerTask("dev", ["compile", "connect", "watch"])
  grunt.registerTask("buildProduction", ["compile", "validation"]);
  // Default task
  return grunt.registerTask("default", "dev")
};
