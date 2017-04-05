jQuery(document).ready(function() {
  App.init();
  CirclesMaster.initCirclesMaster1();
  OwlCarousel.initOwlCarousel({
    autoPlay : false,
		stopOnHover : false,
    slideSpeed : 200
  });
  OwlRecentWorks.initOwlRecentWorksV3();
  StyleSwitcher.initStyleSwitcher();
});
