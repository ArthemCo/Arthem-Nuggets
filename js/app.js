/* Arthem Co.
 * Boilerplate JavaScript
 *
 * Michael Hemingway 2016 */

/*global console*/

(function () {
	'use strict';

	/*  Event fires when dom tree is constructed, but not necessarily when images/iframes are downloaded. Useful for preloaders, UI logic. */
	document.addEventListener('DOMContentLoaded', function (event) {});

	/*  Event fires when all images, iframes and content is loaded and rendered/renderable. This is useful to trigger the release of a preloader  and run functions that manipulate images / content. */
	window.addEventListener("load", function (event) {



		// Our company signature :P
		var t = "color: #bada55; background: #222";
		console.log("%c  █████╗ ██████╗ ████████╗██╗  ██╗███████╗███╗   ███╗     ██████╗ ██████╗    ", t);
		console.log("%c ██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██╔════╝████╗ ████║    ██╔════╝██╔═══██╗   ", t);
		console.log("%c ███████║██████╔╝   ██║   ███████║█████╗  ██╔████╔██║    ██║     ██║   ██║   ", t);
		console.log("%c ██╔══██║██╔══██╗   ██║   ██╔══██║██╔══╝  ██║╚██╔╝██║    ██║     ██║   ██║   ", t);
		console.log("%c ██║  ██║██║  ██║   ██║   ██║  ██║███████╗██║ ╚═╝ ██║    ╚██████╗╚██████╔╝██╗", t);
		console.log("%c ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝     ╚═════╝ ╚═════╝ ╚═╝", t);
		console.log("Site developed with love by Arthem.");
		console.log("https://arthem.co/ ❤");
	});
}()); // End self-invoking function (closure)
