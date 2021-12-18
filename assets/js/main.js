function mobilMenu() {
    $(".menu-close").click(() => {
        $(".nav-menu").css("left", "-20rem");
    })
    $(".nav-mobilmenu").click(() => {
        $(".nav-menu").css("left", "0");
    })
}
$(".hizmetler-title p").click(function() {
    $(".hizmetler-title .active").removeClass("active");
    $(this).addClass("active");
})

window.addEventListener("load", () => {
    mobilMenu();
})

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '.hizmetler-wrapper', {
        perPage: 3,
        gap    : '2rem',
        breakpoints: {
          640: {
            perPage: 2,
            gap    : '.7rem'
          },
          480: {
            perPage: 1,
            gap    : '.7rem'
          },
        },
      } );
      
      splide.mount();
});
