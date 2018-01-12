// 页面rem初始化
(function () {
  let width = $(window).width();
  let fontSize = (width > 640 ? 640 : width)*100 / 375;
  $("html").css({fontSize: fontSize + "px"});
  document.documentElement.style.height = window.innerHeight + 'px';
})();
