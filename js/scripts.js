$(function() {

    //Hamburger menu toggle
    $('.nav-toggle').on('click', function(){
        $('.main-nav, .nav-list, .hamburger').toggleClass('is-open');
    });

    //Hover effect for creation image 
    var $creationImages = $('.creation__image-container a');

    $creationImages.hover(function () {
        
        $(this).css({
            'filter' : 'contrast(50%) brightness(160%)'
        });

        $(this).next().css({
            'color' :  'black'
        });


    },function () {

        $(this).css({
            'filter' : 'none'
        });

        $(this).next().css({
            'color' : 'white'
        })

    });

    //change image src to toggle between desktop and mobile images when scree size change
    function changeImages() {
        var screenWidth = $(window).width();
            if (screenWidth >= 1000) {
                $('#deepEarth').attr('src', 'images/desktop/image-deep-earth.jpg');
                $('#nightArcade').attr('src', 'images/desktop/image-night-arcade.jpg');
                $('#soccerTeam').attr('src', 'images/desktop/image-soccer-team.jpg');
                $('#theGrid').attr('src', 'images/desktop/image-grid.jpg');
                $('#upAbove').attr('src', 'images/desktop/image-from-above.jpg');
                $('#pocketBorealis').attr('src', 'images/desktop/image-pocket-borealis.jpg');
                $('#theCuriosity').attr('src', 'images/desktop/image-curiosity.jpg');
                $('#fisheye').attr('src', 'images/desktop/image-fisheye.jpg');
            } else {
                $('#deepEarth').attr('src', 'images/mobile/image-deep-earth.jpg');
                $('#nightArcade').attr('src', 'images/mobile/image-night-arcade.jpg');
                $('#soccerTeam').attr('src', 'images/mobile/image-soccer-team.jpg');
                $('#theGrid').attr('src', 'images/mobile/image-grid.jpg');
                $('#upAbove').attr('src', 'images/mobile/image-from-above.jpg');
                $('#pocketBorealis').attr('src', 'images/mobile/image-pocket-borealis.jpg');
                $('#theCuriosity').attr('src', 'images/mobile/image-curiosity.jpg');
                $('#fisheye').attr('src', 'images/mobile/image-fisheye.jpg');
            };

            if (screenWidth >= 800) {
                $('.intro__img').attr('src', 'images/desktop/image-interactive.jpg')
            } else {
                $('.intro__img').attr('src', 'images/mobile/image-interactive.jpg')
            }

    }

    // call the function on page load and window resize
    $(window).on('load resize', changeImages);

});