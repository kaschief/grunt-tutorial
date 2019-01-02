//establish Gruntfile
// export file function that accepts grunt (package)

//individual tasks with grunt.registerTask....
//access via terminal with "$grunt speak" etc\

//default runs with just $grunt

module.exports = function(grunt) {
  // grunt.registerTask('speak', function() {
  //   console.log("I'm speaking");
  // });

  // grunt.registerTask('yell', function() {
  //   console.log("I'm yelling");
  // });

  // grunt.registerTask('both', ['speak', 'yell']);

  // grunt.registerTask('default', ['speak', 'yell']);

  grunt.initConfig({
    concat: {
      dist: {
        src: ['js/1.js', 'js/2.js'],
        dest: 'build/script.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
