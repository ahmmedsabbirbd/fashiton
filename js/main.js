$('documnet').ready(function() {

  new WOW().init(); /*wow start*/
  
  $('.navbar-toggler').sidr({
        name: 'asidr-main',
        source: '#asidr',
        displace: false,
        renaming: false,
    });

    $('.sidr-close').on('click', function(){
        $.sidr('close', 'asidr-main');
    });

    $('body').swipe( {
        //Single swipe handler for left swipes
        swipeLeft: function () {
            $.sidr('close', 'asidr-main');
        },
        swipeRight: function () {
            $.sidr('open', 'asidr-main');
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 45
    });

    $('.navbar-toggler').on('click',function(){
        $('.show-overly').addClass('active');
    })

    $('.sidr-close').on('click',function(){
        $('.show-overly').removeClass('active');
    })

    $('.search-triger').on('click',function(){
        $('.search-bar').addClass('active');
    })

    $('.search-close').on('click',function(){
        $('.search-bar, .show-overly').removeClass('active');
    })

    $('.search-triger').on('click',function(){
        $('.show-overly').addClass('active');
    }) 
    
    $('.product-list').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.single-item',
      percentPosition: true,
      masonry: { 
      }
    })

});