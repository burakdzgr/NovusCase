if($(".product-left").length){
    var productSlider = new Swiper('.product-slider', {
        spaceBetween: 0,
        centeredSlides: false,
        loop:true,
        lazy: true,
        direction: 'horizontal',
        loopedSlides: 5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        resizeObserver:true,
    });
    var productThumbs = new Swiper('.product-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        lazy: true,
        loop: true,
        slideToClickedSlide: true,
        direction: 'horizontal',
        slidesPerView: 5,
        loopedSlides: 5,
    });
    productSlider.controller.control = productThumbs;
    productThumbs.controller.control = productSlider;
}
/* 	product swiper end */

/* Changing the slider images when clicking on the product color */

$("#color-variant :radio").change(function(){
    var color = $(this).val()
    $(".color-image-variant img").each(function(a, i){
        var image = $(this).attr("src").replace(/blue|white|gray/g, color)
        $(this).attr("src",image)
    })
});

/* Adding disabled to input value when product size is clicked*/
$("#size-variant :radio").change(function(){
    $("#color-variant input").prop("disabled", false)
    var colorBox = $(".color-checkbox").length
    var color = Math.floor(Math.random() * colorBox) 
    $("#color-variant input:eq("+color+")").prop("disabled", true)
})