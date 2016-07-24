/**
 * Main JS file for Paperleaf behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
  "use strict";

  var $document = $(document);

  $document.ready(function () {

    /**
     * FitVids.js for responsive videos
     */
    var $postContent = $(".post-content");
    $postContent.fitVids();

    /**
     * Masonry grid
     */
    var $grid = $('.js-grid').imagesLoaded( function() {
      $grid.masonry({
        itemSelector       : '.post',
        percentPosition    : true,
        transitionDuration : '0.25s'
      });
      $.force_appear();
    });

    /**
     * Add class to elements that appear in viewport
     */
    $('.post--grid').appear();
    $('.post--grid').on('appear', function(event, $all_appeared_elements) {
      $(this).addClass('animate');
    });

    /**
     * Preloader
     */
    $('body').imagesLoaded( function() {
      $('.js-loader').fadeOut(250);
    });

    $('.search-field').ghostHunter({
      results   : '.content-area',
      info_template   : '<h1 class="page-title mt0">Number of posts found: {{amount}}</h1>',
      result_template: '<article class="animate border-box post--grid"><div class="p3 bg-white box-shadow"><header class="post-header"><h2 class="post-title mt0 mb0 break-word"><a class="black" href="{{link}}">{{title}}</a></h2></header></div></article>'
    });

  });

})(jQuery);
