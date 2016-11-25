module.exports = function(grunt){

	//lancement de toutes les tâches sans avoir à les lister
    require('load-grunt-tasks')(grunt);

	//création des tâches
	grunt.initConfig({	//initialisation de l'ensemble des tâches
         sass: {
            dev: {
                    files: {
                        'style/style.css': 'style/app.scss'
                },
                    options: {
                    update: true,
                    style: 'expanded'

                }
            }
         },

    	watch: {
            options: {},
            sass : {
                files: ['style/**/*.scss'],
                tasks: ['sass:dev'],
                options: { }
            },
            grunt: {
                files: ['Gruntfile.js']
            },
        }
    });

    //lanceur de tâche
    grunt.registerTask(
        'default',
        ['watch']
    );

    //Inliner
    grunt.registerTask(
        'export',
        ['sass:dev']
    );
}
