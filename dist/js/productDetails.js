
//商品详情轮播图
$(".swiper-container").swiper({
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});
$(document).on('click','#create-actions', function () {
      var content= [
        {
          text: '<div><p>尺码</p><div><span>M</span><span>L</span><span>XL</span><span>2XL</span></div></div>',
           bold: true,
           onClick: function() {
            $.alert("你选择了“M“");
          }
        },
         {
          text: '<div><p>主要颜色</p><div><span>黑色</span><span>酒红色</span></div></div>',
          bold: true,
          onClick: function() {
            $.alert("你选择了“黑色“");
          }
          
        },
        {
          text: '<div><p>购买数量</p><div><a> <span class="btn reduce" min="1">-</span></a><input type="number" min="1" value="1"><span class="btn plus" max="1366">+</span></div></div>',
          bold: true,
           onClick: function() {
            $.alert("你选择了“1“");
          }
        }
      ];
      var buttons2 = [	
        {
          text: '加入购物车'
        }
      ];
      var groups = [content, buttons2];
      $.actions(groups);
  });