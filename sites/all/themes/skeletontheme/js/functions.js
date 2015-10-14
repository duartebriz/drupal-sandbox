
(function ($) {
var nQuery = $.noConflict();

  Drupal.behaviors.skeletonthemeCustomBehavior = {
    attach: function (context, settings) {
      
      // $grid.isotope('destroy');

      var $grid = nQuery('#isotope-container').isotope();
      
      $grid.isotope({
        masonry: {
          columnWidth: 10
        }
      });

    $grid.on( 'click', '.isotope-element', function() {
      if (nQuery( this ).hasClass( 'gigante' )) {
        nQuery( this ).toggleClass('gigante');
      } else {
        // change size of item by toggling gigante class
        nQuery( '.isotope-element' ).removeClass( 'gigante' );
        nQuery( this ).toggleClass('gigante');
      }
      $grid.isotope('layout');
    });
    
    // $('.isotope-element').bind( 'click' ,function() {
      //change size of item by toggling gigante class
      // $( this ).toggleClass('gigante');
      // $grid.isotope('layout');
    // });
    
    // $('.isotope-element').click(function() {
      // $( this ).toggleClass('gigante');
    // });
    
    // $('.pager-load-more li a').click(function() {
      // alert('Destroyed!');
      // $grid.isotope( 'destroy' );
    // });
    
    nQuery('#destroy').bind( 'click' ,function(e) {
      event.preventDefault(e);
      $grid.isotope( 'destroy' );
    });
    
      nQuery('.relayout').bind( 'click' ,function(e) {
        event.preventDefault(e);
        var $grid = nQuery('#isotope-container').isotope();
        $grid.isotope({
          masonry: {
            columnWidth: 10
          }
        });
        $grid.isotope('reloadItems');
      });
    
      nQuery( document ).ajaxComplete(function() {
        var $grid = nQuery('#isotope-container').isotope();
        $grid.isotope({
          masonry: {
            columnWidth: 10
          }
        });
        $grid.isotope('reloadItems');
        
        // $grid.on( 'click', '.isotope-element', function() {
        nQuery( '.isotope-element' ).on( 'click', function() {
          if (nQuery( this ).hasClass( 'gigante' )) {
            nQuery( this ).toggleClass('gigante');
            // alert($( this ).attr('class'));
          } else {
            // change size of item by toggling gigante class
            nQuery( '.isotope-element' ).removeClass( 'gigante' );
            nQuery( this ).toggleClass('gigante');
          }
          $grid.isotope('layout');
        });

      });

    }
  };
})(jQuery);