"use strict";AAcom.modules.nearestAirportLookup=function(AAUI){AAUI.initNearestAirportLookup=function(selector){AAUI.onClick(selector,function(){var inputField=$j(this).data("input-field").replace(/(:|\.|\[|\])/g,"\\$1");if(navigator.geolocation){navigator.geolocation.getCurrentPosition(getNearestAirport,undefined,{timeout:10000})}function getNearestAirport(pos){$j.ajax({url:"/airport/nearestAirport",data:{latitude:pos.coords.latitude,longitude:pos.coords.longitude},dataType:"json",timeout:5000,success:function success(airport){$j("#"+inputField).val(airport.code)}})}})}};
//# sourceMappingURL=nearest-airport-lookup.min.js.map
