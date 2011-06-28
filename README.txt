============================================================================
Konami Code For jQuery
8BIT, http://8bit.io, @8BIT
marek-saji, http://github.com/marek-saji
============================================================================

ABOUT

Using the Konami code, easily configure and Easter Egg for your page
or any element on the page.

-------------------------------------------

PARAMETERS

cheat         function
The callback function to fire once the cheat code has been entered.

-------------------------------------------

INSTRUCTIONS

Include the plugin in the header of your page:

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>
  <script src="jquery.konami.js" type="text/javascript"></script>

Apply the plugin to the window to capture keypresses:

  $(window).konami();

Specify a callback to fire once the code has been entered:

	$(window).konami(function() {
		alert('Cheat code activated!');
	});

-------------------------------------------

CONTACT

Web:      http://github.com/marek-saji
Twitter:  @saji_

============================================================================

MIT license:
http://www.opensource.org/licenses/mit-license.php
