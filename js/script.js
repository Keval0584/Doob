$(document).ready(function(){

    $('.dark_logo').hide();
    $('.dark_theme').hide();
    $('.my_switcher').click(function(){
        $('.light_logo').hide();
        $('.dark_logo').show();
        $('.light_theme').hide();
        $('.dark_theme').show();
    })

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 300) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $('.header_menu li > a').click(function() {
        $('.header_menu li > a').removeClass('active');
        $($(this).addClass('active'));
    });

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.single_project_item',
        percentPosition: true,
        layoutMode: 'fitRows',
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('button').removeClass('active');
        $(this).addClass('active');
    });

    $('#s1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:5,
        dots:false,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']
    })
    
    $('#s2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:true,
        smartSpeed:1100,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']
    })

// start backtotop

    var btn = $('.rainbow_back_top');
    btn.hide();
    $($(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btn.fadeIn();
        } else {
            btn.fadeOut();
        }
    }));

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    })
    
// end backtotop

// start aos animation

    AOS.init();

// end aos animation

});