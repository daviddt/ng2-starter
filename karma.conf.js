module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    /*
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [ ],

    /*
     * list of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [ { pattern: './spec-bundle.js', watched: false } ],

    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { './spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

    // Webpack Config at ./webpack.test.js
    webpack: {
      resolve: {
        root: './src',
        extensions: ['', '.ts', '.js', '.json'],
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          // typescript loaders
          {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            query: {
              compilerOptions: {

                // Remove TypeScript helpers to be injected
                // below by DefinePlugin
                removeComments: true

              }
            },
            exclude: [/\.e2e\.ts$/]
          },
          // css loaders
          {
            test: /\.css$/,
            loaders: ['to-string-loader', 'css-loader']
          },
          // html loaders
          {
            test: /\.html$/,
            loader: 'raw'
          }
        ]
      },
    },

    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },

    /*
     * test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: [ 'mocha', 'coverage' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    /*
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'Chrome'
    ],

    /*
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: true
  });

};