$(document).ready(function () {

    $('.toggle-btn').on('click', function (e) {
        e.preventDefault();

        $('.menu .nav-links').toggleClass('show');
    });

    $('.go-up').on('click', function () {

        $('html').animate({
            scrollTop: 0
        }, 1000);


    });

    AOS.init();

    
var slideIndex = 1;

showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}







});


/*
var numbersofitems = $('#loop .container').length;
var limitperpage = 100;
$("#loop .container:gt(" + (limitperpage - 1) + ")").hide();
var totalpage = Math.round(numbersofitems / limitperpage);
console.log("broj strana" + totalpage)
$('.pagination').append("<a class='current-page active' href='javascript:void(0)'>" + 1 + "</a>");

for (var i = 2; i <= totalpage; i++) {
    $('.pagination').append(" <a class='current-page' href='javascript:void(0)'>" + i + "</a>");
}

$('.pagination .current-page').on('click', function () {
    if ($(this).hasClass("active")) {
        return false;
    } else {
        $(".pagination a").removeClass("active");

        var currentPage = $(this).index();
        $(this).addClass('active');

        var grandTotal = limitperpage * currentPage;
        $("#loop .container").hide();

        for (var i = grandTotal - limitperpage; i < grandTotal; i++) {
            $("#loop .container:eq(" + i + ")").show();
        }

    }
});
$(".pagination").append("<a id='next-page' href='javascript:void(0)'>&raquo;</a>");

$(".pagination #next-page").on('click', function () {

    var currentPage = $(".pagination .active").index();
    console.log(currentPage);

    if (currentPage === totalpage) {
        return false;
    } else {
        currentPage++;
        $(".pagination a").removeClass("active");
        $("#loop .container").hide();

        var grandTotal = limitperpage * currentPage;
        for (var i = grandTotal - limitperpage; i < grandTotal; i++) {
            $("#loop .container:eq(" + i + ")").show();
        }
        $(".pagination a.curent-page:eq(" + (currentPage) + ")").addClass('active');
    }
});

$(".pagination #prepend-page").on('click', function () {

    var currentPage = $('.pagination .active').index();
    console.log(currentPage);
    if (currentPage === 1) {
        return false;
    } else {
        currentPage--;
        $(".pagination a").removeClass("active");
        $("#loop .container").hide();

        var grandTotal = limitperpage * currentPage;
        for (var i = grandTotal - limitperpage; i < grandTotal; i++) {
            $("#loop .container:eq(" + i + ")").show();
        }
        $(".pagination a.curent-page:eq(" + (currentPage) + ")").addClass('active');
    }


});
*/












