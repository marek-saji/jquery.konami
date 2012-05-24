/**
 * Konami Code jQuery plugin
 * =========================
 * A jQuery Plugin for easily integrating an easter egg in your project
 * to be triggered via the [Konami code].
 *
 *
 * - Copyright 2011 8BIT, http://8bit.io
 * - Copyright 2011 Marek `saji` Augustynowicz, http://github.com/marek-saji
 *
 * Released under the [MIT License].
 *
 *
 * Typical usage
 * -------------
 *
 *     $.konami(function() {
 *     	// do something amazing
 *     });
 *
 *
 * [Konami code]: http://en.wikipedia.org/wiki/Konami_Code
 * [MIT License]: http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

	"use strict";

	var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
		konamiCodeLength = konamiCode.length
	;



	$.konami = function (cheat) {
		$(window).konami(cheat);
	};


	$.fn.konami = function (cheat) {

		return this.each(function () {

			// matched keys counter, index for konamiCode array
			var idx = 0;

			$(this).keyup(function (evt) {

				var code = evt.keyCode || evt.which;

				if (code === konamiCode[idx]) {
					// matched a key
					idx += 1;
				} else {
					// failure, start counting from begining
					idx = 0;
				}

				// matched all keys
				if (idx === konamiCodeLength) {
					cheat();
					idx = 0;
				}

			}); // $(this).keyup

		}); // return this.each

	}; // $.fn.konami

}(jQuery));

