module.exports = function(grunt){
//configuration
grunt.initConfig({
    "babel": {
        options: {
            sourceMap: false
        },
        compile: {
            "expand": true,
            "src": 'src/*.js',
            "flatten": true,
            "dest": 'dist/'
        }
    }
});
//load plugin
grunt.loadNpmTasks('grunt-babel');
//define tasks
 /*
 grunt.registerTask('hello', function(){
        console.log('hello world');
    });
 */
grunt.registerTask('default',['babel']);

};