$(document).ready(function() {
    $('#video-button').click(function() {
        let video = $('#video')[0]; // Ambil elemen video
        let icon = $(this).find('i'); // Ambil ikon dalam tombol

        if (video.paused) {
            video.play(); // Memulai video
            icon.removeClass('fa-play').addClass('fa-pause'); // Ganti ikon menjadi pause
        } else {
            video.pause(); // Hentikan video
            icon.removeClass('fa-pause').addClass('fa-play'); // Ganti ikon menjadi play
        }
    });
})

$('.owl-client').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsEach: true,
    margin:16,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        720: {
            items:2
        },
        1124:{
            items:3
        }
    }
})

$('.owl-about').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    dotsEach: true,
    margin:16,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        540:{
            items:2
        },
        840: {
            items:3
        },
        1124:{
            items:4
        }
    }
})