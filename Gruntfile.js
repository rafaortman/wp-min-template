module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      '_compiled/style-human.css': '_sass/style.scss'
		    }
		  },
		  dist: {
		    options: {
		      style: 'compressed',
		      sourcemap: 'none',
		    },
		    files: {
		      '_compiled/style.css': '_sass/style.scss'
		    }
		  }
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			multiple_files: {
				expand: true,
				flatten: true,
				src: '_compiled/*.css',
				dest: ''
			}
		},

	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','autoprefixer'],
			    options: {
    			livereload: true,
    		},
			},
			html: {
        files: ['*.html','**/*.css'],
        options: {
            livereload: true
        }
      },
      php: {
        files: ['**/*.php','**/*.css'],
        options: {
            livereload: true
        }
      },
      scripts: {
		    files: ['**/*.js'],
		    options: {
		      spawn: false,
		      livereload: true
		    },
		  },
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}