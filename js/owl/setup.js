$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.play').click(function() {
    $('.popup').show();
})

$('.close').click(function() {
    $('.popup').hide();
    $('.video, .video-embed').find('iframe').remove();
    $('.video-embed').html('<iframe width="600" height="315" src="https://www.youtube.com/embed/YMRhXeiANiA?start=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})