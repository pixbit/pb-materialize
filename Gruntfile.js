module.exports = function(grunt) {

grunt.initConfig({
  watch: {
    styles: {
      files: 'build/**/*.scss',
      tasks: ['styles']
    }
  },
  sass: {
    dist: {
      files: {
        'dist/pb-materialize.css' : 'dist/pb-materialize.scss'
      },
      options: {
        sourcemap: 'none',
        noCache: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['watch']);
grunt.registerTask('styles', ['sass:dist']);

};
