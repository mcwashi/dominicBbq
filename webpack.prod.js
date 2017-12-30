var webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const JavaScriptObfuscator = require('webpack-obfuscator');


module.exports = merge(common, {
	devtool: 'source-map',
 	plugins: [
		new UglifyJSPlugin({
		 sourceMap: true
		}),

		// Option descriptions found: https://github.com/javascript-obfuscator/javascript-obfuscator
		new JavaScriptObfuscator ({
			compact: true, // true
	    controlFlowFlattening: false,
	    controlFlowFlatteningThreshold: 0.75,
	    deadCodeInjection: false,
	    deadCodeInjectionThreshold: 0.4,
	    debugProtection: false, // false
	    debugProtectionInterval: false,
	    disableConsoleOutput: false, // false
	    domainLock: [],
	    log: false,
	    mangle: true, // false
	    renameGlobals: false,
	    reservedNames: [],
	    rotateStringArray: true,
	    seed: 0,
	    selfDefending: true, // false
	    stringArray: true,
	    stringArrayEncoding: false,
	    stringArrayThreshold: 0.75,
	    target: 'browser',
	    unicodeEscapeSequence: false
		}, []),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
})
