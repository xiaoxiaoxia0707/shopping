
//商品详情轮播图
$(".swiper-container").swiper({
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});

$(document).on('click','#specBtn', function () {
  $.popup('.popup-about');
});

