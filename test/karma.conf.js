// Karma configuration
// Generated on Thu Aug 15 2019 19:02:56 GMT+0200 (hora de verano de Europa central)

module.exports = function(config) {
  config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['jasmine'],


	// list of files / patterns to load in the browser
	files: [

		'../vendor/angular-1.7.8/angular.min.js',
		'../vendor/angular-1.7.8/angular-mocks.js',

		'../vendor/angular-local-storage_dist/angular-local-storage.min.js',
		'../vendor/angular-1.7.8/angular-route.min.js',
		'../vendor/jquery-3.1.1/jquery-3.1.1.min.js',

		'../*App/**/*.js',

		// Imagenes de test     
		//{pattern: "specs/images/*.jpg", watched: false, included: false, served: true}
	],


	// list of files / patterns to exclude
	exclude: [
	],

	// web server port
	port: 9876,

	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,
	//autoWatch: false,


	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	// browsers: ['Chrome', 'Firefox', 'Safari', 'IE', 'Opera'],
	browsers: ['Chrome', 'PhantomJS'],
	//browsers: ['PhantomJS'],


	plugins: [
		'karma-chrome-launcher',
		'karma-phantomjs-launcher',
		'karma-jasmine',
		'karma-coverage',
		'karma-junit-reporter',
		'karma-jasmine-diff-reporter'
	],


	// test results reporter to use
	// possible values: 'dots', 'progress', 'junit'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['junit', 'coverage', 'jasmine-diff', 'progress'],
	//reporters: ['spec'],	

	junitReporter: {
		outputFile: '../test_reports/junit/junit.xml',
		suite: 'unit'
	},


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		'../**/app.js': ['coverage'],
		'../**/*.html': ['coverage'],
		/*'../filters/*.js': ['coverage'],
		'../services/*.js': ['coverage'],*/
	},

	jasmineDiffReporter: {
    	
    	color: {
	        expectedBg: 'bgRed',
	        expectedWhitespaceBg: 'bgRed',
	        expectedFg: 'white',
	 
	        actualBg: 'bgGreen',
	        actualWhitespaceBg: 'bgGreen',
	        actualFg: 'white',
	 
	        warningBg: 'bgYellow',
	        warningWhitespaceBg: 'bgYellow',
	        warningFg: 'white',
	 
	        defaultBg: '',
	        defaultFg: ''
    	},
    	
    	pretty: false,
    	multiline: false,
    	verbose: true,
    	matchers: {
    		toLookTheSameAs: {
    			pattern: /Expected ([\S\s]*) to look the same as ([\S\s]*)\./,
    			reverse: true,
    			format: 'complex'
    		}
    	}
    },


	coverageReporter: {
		dir: 'test_reports/coverage',
		reporters: [
			{ type: 'lcov', subdir: '.' },
			{ type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
		]
	},

	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: false,
	//singleRun: true,

	// Concurrency level
	// how many browser should be started simultaneous
	concurrency: Infinity
  })
}
