$('.divProduto').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.produtos'
});
$('.produtos').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.divProduto',
  dots: true,
  centerMode: false,
  infinite: false,
  focusOnSelect: true
});