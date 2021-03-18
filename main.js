$(function () {
    //გაქრობა და ჩვენება სეტტიმეოუტტან ერთად
    $(".h").click(function (e) {
        $(".first1").hide("1000").show("1000");
        setTimeout(() => {
            $(".first1").hide("1000").show("1000");
        }, 2000);
    });

    //აკეცვა და დაშვება დაბლა
    $("#loca").slideUp("1000").delay(1000).slideDown("1000");

    //გაქრობა
    // $('.first2').fadeOut('1000').delay(500).fadeIn('1000')

    //  ertmanetis msgavsia orive ertnairad aketebs

    // $('.first2').fadeToggle('1000').fadeToggle('1000')

    //esec msgavsia bolomde ar aqrobs
    $(".first2").toggle("1000").toggle("1000");

    //click
    $("#loca").on("click", function () {
        $(".first2").toggle("1000");
    });

    //roca gvaqvs bevri ertnairi elementi magalitad li shegvidzlia indexit movdzebnot
    // $('li').eq(0) gamoitans pirvel elements, eq(1) meores da ash..
});
