/*
 * Konami Code For jQuery Plugin
 * Using the Konami code, easily configure and Easter Egg for your page
 * or any element on the page.
 *
 * Copyright 2011 8BIT, http://8bit.io
 * Released under the MIT License
 */

(function($) {
	
	$.fn.konami = function(options) {

		var opts = $.extend({}, $.fn.konami.defaults, options);
		return this.each(function() {
		
			var masterKey = [38,38,40,40,37,39,37,39,66,65];
			var controllerCode = [];
			$(window).keyup(function(evt) {

				var code = evt.keyCode ? evt.keyCode : evt.which;
				controllerCode.push(code);
				if(controllerCode.length === 10) {
					
					var bIsValid = true;
					for(var i = 0, l = masterKey.length; i < l; i++) {
						if(masterKey[i] !== controllerCode[i]) {
							bIsValid = false;
						} // end if
					} // end for
					
					if(bIsValid) {
						opts.cheat();
					} // end if
					
					controllerCode = [];

				} // end if
				
			}); // keyup
			
		}); // each
		
	}; // opts
	
	$.fn.konami.defaults = {
		cheat: null
	};
	
})(jQuery);