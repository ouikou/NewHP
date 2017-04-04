var ContactPage = function () {

    return {

    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,
        lat: 35.662919,
        lng: 139.756533,
        zoom: 17
			  });

			  var marker = map.addMarker({
          lat: 35.662919,
          lng: 139.756533,
          animation: google.maps.Animation.DROP,
          title: 'ShineSoft Co.,Ltd.',
          infoWindow: {
            content: "東京都港区新橋5-12-6 ウェルディ新橋4F"
          }
		      });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
            lat: 35.662919,
            lng: 139.756533
		      });
		    });
		}

    };
}();
