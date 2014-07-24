/**
 * Eighties JavaScript
 *
 * The main JavaScript file for Eighties. Sets up
 * the navigation and sidebar toggles.
*/
( function( $ ) {
	/**
	 * Register fitvids with a custom selector.
	 * Possibly add more selectors later, if needed.
	*/
	$( 'body' ).fitVids({
		customSelector: "iframe[src*='rd.io'], iframe[src*='rdio.com']",
	});

	// Custom event for loading fitvids when using infinite scroll.
	$( document.body ).on( 'post-load', function() {
		$( '.post' ).fitVids({
			customSelector: "iframe[src*='rd.io'], iframe[src*='rdio.com']",
		});
	});

	/**
	 * If we've made it this far, JavaScript is working.
	 * We should set the main navigation css to display
	 * block. Don't worry, if JavaScript is not working
	 * the menu is handled a bit differently, as the
	 * toggle functionality would not work anyway.
	*/
	$( '#site-navigation, #secondary' ).css( 'display', 'block' );

	/**
	 * Set up the main navigation toggle. This sets
	 * up a toggle for navitaion to overlay the window.
	*/
	$( '.main-navigation-toggle, #mobile-menu-close' ).on( 'click', function( event ) {
		event.preventDefault();

		$( 'html' ).toggleClass( 'disable-scroll' );
		$( 'body' ).toggleClass( 'main-navigation-open' );
	});

	/**
	 * Set up the widget area toggle. This sets
	 * up a toggle for sidebar to overlay the window.
	*/
	$( '.widget-area-toggle' ).on( 'click', function( event ) {
		event.preventDefault();

		$( 'html' ).toggleClass( 'disable-scroll' );
		$( 'body' ).toggleClass( 'widget-area-open' );
	});

	/**
	 * Closes the main navigation or sidebar when
	 * the esc key is pressed.
	*/
	$( document ).keyup( function( event ) {
		if ( event.keyCode == 27 ) {
			if ( $( 'body' ).hasClass( 'main-navigation-open' ) ) {
				$( 'html' ).removeClass( 'disable-scroll' );
				$( 'body' ).removeClass( 'main-navigation-open' );
			} else if ( $( 'body' ).hasClass( 'widget-area-open' ) ) {
				$( 'html' ).removeClass( 'disable-scroll' );
				$( 'body' ).removeClass( 'widget-area-open' );
			}
		}
	});
} )( jQuery );

/**
 * Set up a bariable to check for if we are on a
 * mobile device, because skrollr does not work
 * well on mobile.
*/
var eighties_is_mobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return ( eighties_is_mobile.Android() || eighties_is_mobile.BlackBerry() || eighties_is_mobile.iOS() || eighties_is_mobile.Opera() || eighties_is_mobile.Windows() );
	}
};