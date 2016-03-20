module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		responsive_images: {
			options: {
				engine: 'im',
				sizes: [
					{
						name: 'quarter',
						width: '25%'
					},
					{
						name: 'half',
						width: '50%'
					},
					{
						name: 'origin',
						width: '100%'
					}
				]
			},
			meta_png: {
				options: {
					aspectRatio: false,
					gravity: 'East',
					sizes: [
						{
							name: '720',
							height: '416px',
							width: '720px'
						}
					]
				},
				files: [{
					expand: true,
					src: ['images/meta.png'],
					dest: ''
				}]
			},
			general: {
				files: [{
					expand: true,
					src: ['images/*.png'],
					dest: 'dest'
				}]
			}
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					src: ['index.html', 'css/*.css', 'js/*.js', 'icons/*'],
					dest: 'dest'
				}]
			}
		},

		clean: {
			build: {
				src: ['dest', 'images/meta-720.png']
			}
		}
	});

	grunt.registerTask('default', ['copy', 'responsive_images']);
};
