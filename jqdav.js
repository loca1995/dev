$(document).ready(function () {


    $('.btn').click(function (e) {
        const fronttext = $('.active');
        const nexttext = fronttext.next();
        if (nexttext.length) {
            fronttext.removeClass('active').addClass('disable')
            nexttext.removeClass('disable').addClass('active')
        }

        if (nexttext.length == 0) {
            const newstart = $(".list-group-item")[0]
            fronttext.removeClass('active').addClass('disable')
            newstart.removeClass('disable').addClass("active");

        }
    })







});





