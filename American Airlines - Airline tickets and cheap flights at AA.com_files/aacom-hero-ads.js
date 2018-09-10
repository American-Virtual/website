'use strict';/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/apps/common/js/jquery/aacom/plugins/aacomHeroAds.js
*    TO   --> ./webapps/homepage-web/src/main/assets/js/plugins/aacom-hero-ads.js
**/function aaHeroAds(slideshowContainer,source,params){//	Requires the jquery.cycle plugin & jquery swfobject plugin for flash objects
var self=this,slideshow=slideshowContainer,//jquery.cycle options
defaults={fit:1,height:594,width:1100,slideExpr:'div',speed:1000,timeout:8000,pager:'#hero-pager',next:'#hero-next',prev:'#hero-prev',pause:1,hideControls:0,before:function before(currSlideElement,nextSlideElement,options,forwardFlag){var nSlide=jQuery(source)[options.nextSlide];if(nSlide.isFlash){if(options.nextSlide!=options.currSlide){self.flashActions(nSlide,'rewind')}}},after:function after(currSlideElement,nextSlideElement,options,forwardFlag){var cSlide=jQuery(source)[options.currSlide];if(cSlide.isFlash){self.flashActions(cSlide,'play')}}},settings=jQuery.extend({},defaults,params);//	Apply changed properties to the defaults
//	Initialize the jquery.cycle object
self.init=function(){self.parseSlides();if(jQuery(source).length>1){jQuery(slideshow).find('div:first').fadeIn(1000,function(){jQuery(slideshow).cycle(settings)});$j('#aa-hero-ad-ctrl').show();self.initControls()}};self.initControls=function(){// Bind arrow keys to advance/rewind carousel
jQuery('#aa-hero-ad-frame').keydown(function(e){if(e.keyCode===37||e.keyCode===38){// If left or up arrow
e.preventDefault();e.stopPropagation();jQuery(slideshow).cycle('prev');// Focus the current slide
jQuery('#aa-hp-ad-hero').find('> div').eq(jQuery(slideshow).data('cycle.opts').currSlide).children().first().focus();self.pauseSlideshow()}else if(e.keyCode===39||e.keyCode===40){// If right or down arrow
e.preventDefault();e.stopPropagation();jQuery(slideshow).cycle('next');// Focus the current slide
jQuery('#aa-hp-ad-hero').find('> div').eq(jQuery(slideshow).data('cycle.opts').currSlide).children().first().focus();self.pauseSlideshow()}else if(e.keyCode===13||e.keyCode===32){// If enter or space
if(e.target.id==='hero-pause'){e.preventDefault();e.stopPropagation();jQuery('#hero-pause').mousedown()}}else{return}});var isPauseButtonClicked=false;// Add ability to pause the slideshow
jQuery('#hero-pause').mousedown(function(e){isPauseButtonClicked=true;if(jQuery('#hero-pause').hasClass('pause')){jQuery(slideshow).cycle('pause');jQuery('#hero-pause').find('img').prop('alt',AAcom.prototype.getProperty('carousel.play'))}else{jQuery(slideshow).cycle('resume');jQuery('#hero-pause').find('img').prop('alt',AAcom.prototype.getProperty('carousel.pause'))}jQuery('#hero-pause').toggleClass('pause');jQuery('#aa-hp-ad-hero').removeClass('autoPaused')});$j(document).on('focus','#aa-hero-ad-frame *',function(e){e.stopImmediatePropagation();if(e.target.id==='hero-pause'&&isPauseButtonClicked){isPauseButtonClicked=false;return}if(jQuery('#hero-pause').hasClass('pause')){jQuery('#aa-hp-ad-hero').addClass('autoPaused');self.pauseSlideshow()}}).on('blur','#aa-hero-ad-frame *',function(e){e.stopImmediatePropagation();isPauseButtonClicked=false;if(jQuery('#aa-hp-ad-hero').hasClass('autoPaused')){jQuery(slideshow).cycle('resume');jQuery('#hero-pause').find('img').prop('alt',AAcom.prototype.getProperty('carousel.pause'));jQuery('#hero-pause').addClass('pause');jQuery('#aa-hp-ad-hero').removeClass('autoPaused')}})};self.pauseSlideshow=function(){// Ensure slideshow is now paused
jQuery(slideshow).cycle('pause');jQuery('#hero-pause').find('img').prop('alt',AAcom.prototype.getProperty('carousel.play'));jQuery('#hero-pause').removeClass('pause')};self.parseSlides=function(){if(jQuery(source).length>0){jQuery('div',slideshow).remove();jQuery(source).each(function(i,item){var slide=jQuery('<div></div>');var adLink=jQuery('<a id="heroSlide'+item.index+'"></a>');if(item.isFlash&&jQuery.flash.available){jQuery(adLink).flash({swf:item.flashSrc,height:210,width:529})}else{adLink.append('<img src="'+item.imgSrc+'" alt="'+item.altText+'" />')}adLink.attr('class',item.className);if(self.isExternalLink(item.target)){adLink.attr('href',item.target)}else{adLink.attr('href',item.target+(item.target.indexOf('?')!=-1?'&':'?')+'anchorLocation='+item.anchorLocation+'&reportedTitle='+item.altText+'&reportedPosition='+item.index+'&url='+self.getUrlParam(item.target)+'&_locale='+item.locale+'&repositoryName='+item.repositoryName+'&repositoryId='+item.repositoryId)}if(item.openInNewWin=='Y'){var temp=function temp(){window.open(this.href);return false};item.isFlash?adLink.mouseup(temp):adLink.click(temp)}else{if(item.isFlash){adLink.mouseup(function(){location.href=this.href})}}slide.append(adLink);if(item.restrictionsApply=='Y'){var rLink='<a href="'+item.target+'&restrictionsAnchor=true#restrictions">'+item.restrictionsLink+'</a>';var rSpan=jQuery('<span>'+item.restrictionsText+' '+rLink+'</span>');rSpan.attr('id','aa-hero-faresale-terms');slide.append(rSpan)}slide.appendTo(slideshow)});if(jQuery(source).length>1&&settings.hideControls===0){jQuery('#aa-hero-ad-ctrl').fadeIn()}}};self.flashActions=function(slide,action){var flashMovie=jQuery('#heroSlide'+slide.index);flashMovie.flash(function(){try{if(action=='play'){this.Play()}if(action=='rewind'){this.Rewind()}}catch(e){}})};self.getUrlParam=function(name,url){var results=new RegExp('[\\?&]'+name+'=([^&#]*)').exec(url);return results===null?encodeURIComponent(url):results[1]};self.isExternalLink=function(link){if(link.indexOf('http')===0){if(link.indexOf('www.aa.com')!=1){return true}}return false};self.getTargetNoParams=function(url){var symbols=new Array('?',';','#');var targetNoParams=url;var index=-1;for(var i=0;i<symbols.length;++i){index=targetNoParams.indexOf(symbols[i]);if(index!=-1){targetNoParams=targetNoParams.substring(0,targetNoParams.indexOf(symbols[i]))}}return targetNoParams};self.getReportedTarget=function(url){var fileName=self.getUrlParam('fN',url);if(fileName.length>0){return fileName}else{return self.getTargetNoParams(url)}};self.init()}// ----------------------------------------------------------------------------------------------------------------------------------
// Register with jQuery as a plugin
// ----------------------------------------------------------------------------------------------------------------------------------
jQuery.fn.aaHeroAds=function(source,params){var i=0,obj;for(i;i<this.length;i++){obj=new aaHeroAds(this[i],source,params)}};
//# sourceMappingURL=aacom-hero-ads.min.js.map