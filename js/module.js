/* {{Title}} - Module pattern
 *
 * {{Credits}}
 * (MIT) Michael Hemingway @ Arthem. Mtl
 */

var Module = (function () {
	'use strict';

	// ==============================================

	// Module defaults.
	var settings = {
			canvas: document.getElementById('canvas')
		},
		ctx;

	// update settings with object passed by end user.
	function setup(options) {
		var option;
		options = options || {};
		for (option in settings) {
			if (settings.hasOwnProperty(option) && !options.hasOwnProperty(option)) {
				options[option] = settings[option];
			}
		}

		// updates global scope
		settings = options;

		// fix dependent variables
		ctx = settings.canvas.getContext('2d');
	}

	// ==============================================

	// _Helpers

	// ==============================================

	// _Classes
	function Dot() {

		// define properties
		this.dotY = 10;

		// define methods
		this.drawDot = function () {
			this.dotX += this.dotVX;
		};
	}

	// ==============================================

	// Public Methods after argument validation
	function run() {

		function preRun() {
			var i; // declare variables at top of fn to be Crockfordian

			for (i = 0; i < 10; i++) {}
		}
		preRun();

		function draw(event) {
			window.requestAnimationFrame(draw);
		}
		window.requestAnimationFrame(draw);
	}

	// ==============================================

	// return public methods
	return {
		setup: setup,
		start: run
	};
}());
