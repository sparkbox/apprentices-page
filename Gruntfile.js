module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require("./package.json")
  });
  grunt.loadTasks("grunt");
  grunt.registerTask("compile", ["sass", "copy"])
  grunt.registerTask("dev", ["compile", "copy", "connect", "watch"])
  grunt.registerTask("buildProduction", ["compile", "validation"]);
  // Default task
  return grunt.registerTask("default", "dev")
};
