'use strict';/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/apps/common/js/jquery/aacom/plugins/aaFooterAds.js
*    TO   --> ./webapps/shared-web/src/main/assets/js/legacy/plugins/aa-footer-ads.js
**//*
 * aaFooterAds.js
 */jQuery.aaFooterAds=function(source){var self=this;self.init=function(){jQuery(source).each(function(i,item){var adLink=jQuery('#'+item.id+' a'),temp=null;if(item.isFlash){if(!jQuery.flash.available){adLink.append('<img src="'+item.imgSrc+'" alt="'+item.altText+'" />')}else{jQuery(adLink).flash({swf:item.flashSrc,height:item.height,width:item.width,expressInstall:true})}}adLink.attr('title',item.altText);if(item.openInNewWin=='Y'){temp=function temp(){window.open(this.href,'','scrollbars=yes,toolbar=yes,resizable=yes,status=yes,location=no,menubar=no,width=700,height=480,top=1,left=385');return false};item.isFlash?adLink.mouseup(temp):adLink.click(temp)}else{if(item.isFlash)adLink.mouseup(function(){location.href=this.href})}})};self.init()};
//# sourceMappingURL=aa-footer-ads.min.js.map
