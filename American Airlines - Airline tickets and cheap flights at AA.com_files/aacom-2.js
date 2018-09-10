'use strict';/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/apps/common/js/aacom-2.0.js
*    TO   --> ./webapps/shared-web/src/main/assets/js/common/aacom-2.0.js
**/(function($){$.fn.aaExpander=function(params){var self=this,defaults={expandText:'More',collapseText:'Less',triggerTemplate:$('<a class="icon-expand" href="#"></a>')},settings=$.extend({},defaults,params);return this.each(function(){var expander=$(this),expanderTrigger=settings.triggerTemplate.clone(),expanderContent=expander.children(':eq(0)');expander.data(settings);if(expander.attr('data-expander-expandText')){expander.data('expandText',expander.attr('data-expander-expandText'))}if(expander.attr('data-expander-collapseText')){expander.data('collapseText',expander.attr('data-expander-collapseText'))}expander.prepend(expanderTrigger.html('&nbsp;'+expander.data('expandText')));expanderContent.hide();expanderTrigger.on('click',function(e){e.preventDefault();if(expander.hasClass('is-open')){expanderContent.hide();expanderTrigger.html('&nbsp;'+expander.data('expandText')).removeClass('icon-collapse').addClass('icon-expand');expander.removeClass('is-open')}else{expanderTrigger.html('&nbsp;'+expander.data('collapseText')).removeClass('icon-expand').addClass('icon-collapse');expanderContent.show();expander.addClass('is-open')}})})}})(jQuery);/*------------------------------------*\
 $ aaToggle
 \*------------------------------------*/(function($){$.fn.aaToggle=function(){var self=this;var onClick=function onClick(ev){var trigger=$(this);var defaults={expandText:'Expand',collapseText:'Collapse',animation:true,preventdefault:false};var settings=$.extend({},defaults,trigger.data());var href=trigger.attr('href');var triggerHref=href!==undefined&&href!=='#'?href:trigger.attr('data-toggle-href');var toggleBg=trigger.data('toggleBg');if(toggleBg){trigger.toggleClass(toggleBg)}var target=$(triggerHref);if(target.length>0){trigger.find('[class*="icon-"]').toggleClass('icon-expand').toggleClass('icon-collapse');trigger.find('.hidden-accessible').text(trigger.find('.hidden-accessible').text()==settings.expandText?settings.collapseText:settings.expandText);target.each(function(index,element){if(settings.animation){$j(element).stop().animate({height:'toggle'},500)}else{$j(element).toggle()}})}if(settings.preventdefault){ev.preventDefault();return true}else{ev.stopPropagation();ev.stopImmediatePropagation();return false}};$(document).on('click',this.selector,onClick)}})(jQuery);jQuery(window).load(function(){jQuery('[data-behavior*="expander"]').aaExpander();jQuery('[data-behavior=toggle]').aaToggle()});/*------------------------------------*\
 $ aaTooltip
 \*------------------------------------*//**********************************************************************
 ? METADATA:
 Filename: aaTooltip.js
 Location: /content/js/jquery/misc/
 License: Copyright 2013, AA.com
 Created on: 02/15/13
 Version: 1.0.0
 UX: David Perez, Oscar Perez. (To be modified only by UX)
 Description: Creation of one baseline file for aa tooltps.
 **********************************************************************/var aaTooltips={};//Global Array for Tooltip Instances
var aaTooltip=function aaTooltip(elements,options){return new function(){// Variables declaration
var self=this;var _animate,_mouseEnter,_mouseLeave,_clickEvent,_fade,_ua,_jversion,_HTML;var _tooltipCloseText=AAcom.prototype.getProperty('tooltip.closeText');/**
         * called when function is instantiated
         * initialize tooltip with options
         */self.initTooltip=function(){//Get Target
self.target=jQuery(elements);self.selector=self.target.selector;self.length=self.target.length;self.source=jQuery();self.isvisible=false;self.refresh=function(){self.target=jQuery(self.selector);self.length=self.target.length};// Merge options with defaults
self.settings=jQuery.extend({name:'',trigger:'click',title:'',subtitle:'',text:'',html:'',htmlref:'',cssClass:'',width:'',height:'',position:'auto',zIndex:9999,showTitle:true,showClose:true,showArrow:true,animation:true,closeOnEscape:true,touchDevice:false,mobile:false,visible:true,onOpen:function onOpen(){},onClose:function onClose(){},onBeforeOpen:function onBeforeOpen(){},onBeforeClose:function onBeforeClose(){}},options||{});//Initialize Variables
_HTML='<div class="aa-tooltip" role="tooltip" aria-labelledby="tooltipTitle" aria-describedby="tooltipWrapper">'+'<div class="tooltip-wrapper" id="tooltipWrapper" aria-atomic="true">'+'<h5 class="tooltip-title" id="tooltipTitle"></h5>'+'<p class="tooltip-subtitle"></p>'+'<div class="tooltip-content"></div>'+'</div>'+'<div class="tooltip-arrow"><div class="tooltip-arrow-inner"></div></div>'+'<a id="closeTooltip" href="#" class="tooltip-close"><span class="icon-close icon-medium" aria-hidden="true"></span><span class="hidden-accessible">'+_tooltipCloseText+'</span></a>'+'</div>';self.tooltip=jQuery(_HTML);self.name=self.settings.name!=''?self.settings.name:_getSize(aaTooltips).toString();_ua=AA.browser;_ua.version=document.documentMode||_ua.version;_jversion=jQuery.map(jQuery.fn.jquery.split('.'),function(i){return('0'+i).slice(-2)}).join('.');_mouseEnter=_jversion<'01.04'?'mouseover':'mouseenter';_mouseLeave=_jversion<'01.04'?'mouseout':'mouseleave';_clickEvent=self.settings.touchDevice?'touchstart':'click';_fade=!(_ua.msie&&_ua.version<=8);_animate=true;if(self.settings.width==''){self.settings.width='300'}//removed to enable ajax support;
//if (self.target.length == 0 || self.selector == '') return false; //Safe Exit
//Initialize Events
_bindOpenEvent();_bindDocumentEvent();_bindKeydownEvent();if(self.settings.touchDevice){_bindOrientationChangeEvent()}else{_bindResizeEvent()}};/**
         * opens tooltip and fires onOpen events
         */self.openTooltip=function(source){self.refresh();if(self.target.length==0)return false;if(!_settings('visible'))return false;if(source==undefined){//animate = false;
source=self.target.filter(':first')}self.removeTooltip();//Remove Tooltip if visible
self.source=jQuery(source).filter(':first');//Local Variables
var _title=_settings('title');var _subtitle=_settings('subtitle');var _text=_settings('text');var _htmlref=_settings('htmlref');_htmlref=_htmlref!==''?_htmlref:self.source.attr('href')||'';var _html=_htmlref!=''&&jQuery(_htmlref).length>0?jQuery(_htmlref).html():self.settings.html;var _content=_html!=''?_html:_text;if(_title==''&&_subtitle==''&&_content=='')return false;//Tooltip Settings
self.tooltip=jQuery(_HTML);self.tooltip.removeAttr('style');self.tooltip.find('*').removeAttr('style');if(!_settings('showTitle')||_title=='')self.tooltip.find('.tooltip-title').remove();if(_subtitle=='')self.tooltip.find('.tooltip-subtitle').remove();if(_content=='')self.tooltip.find('.tooltip-content').remove();if(!_settings('showClose'))self.tooltip.find('.tooltip-close').remove();if(!_settings('showArrow'))self.tooltip.find('.tooltip-arrow').remove();if(_settings('cssClass')!='')self.tooltip.addClass(_settings('cssClass'));if(_settings('width')!='')self.tooltip.css('width',_settings('width'));if(_settings('height')!='')self.tooltip.css('height',_settings('height'));if(_settings('zIndex')>0)self.tooltip.css('z-index',_settings('zIndex'));if(_fade)self.tooltip.css('opacity',0);self.tooltip.find('.tooltip-title').html(_title);self.tooltip.find('.tooltip-subtitle').html(_subtitle);self.tooltip.find('.tooltip-content').html(_content);self.tooltip.find('.tooltip-text').html(_text);self.tooltip.find('.tooltip-title').attr('id','tooltipTitle');//OnBeforeOpen Callback
var _result=self.settings.onBeforeOpen(self);if(_result==false)return _result;self.tooltip.insertAfter(self.source);//Render Tooltip
_renderTooltip(self.source);// Bind Events
_bindHoverEvent();_bindClickEvent();//OnOpen Callback
self.settings.onOpen(self);self.tooltip.attr('tabindex','0').focus()};/**
         * close tooltip and fires onClose events
         */self.closeTooltip=function(){if(self.target.length==0)return false;if(!self.tooltip.is(':visible'))return false;var _result=self.settings.onBeforeClose(self);if(_result==false)return _result;if(_settings('animation')){var _top=self.tooltip.hasClass('top')?'+=10':'-=10';_animateTooltip(_top,0,200,function(){jQuery(this).remove()})}else{self.tooltip.remove()}self.settings.onClose(self);var _tooltipHasFocus=self.tooltip.filter(':focus').length>0||self.tooltip.find('*:focus').length>0;if(_tooltipHasFocus){self.source.focus()}self.source=jQuery();self.isvisible=false};/**
         * removes tooltip from DOM
         */self.removeTooltip=function(){if(self.target.length==0)return false;if(!self.tooltip.is(':visible'))return false;self.tooltip.remove();self.source=jQuery();self.isvisible=false};/*******************************
         * Private Methods/Functions
         *******************************//**
         * called by openTooltip
         * gets tooltip settings from source or options
         */var _settings=function _settings(name){var _s=self.settings[name];var _v=self.source.attr('data-tooltip-'+name)||_s;if(typeof _s=='boolean')_v=String(_v).toLowerCase()=='true';if(typeof _s=='number')_v=parseInt(_v);return _v};/**
         * called by initTooltip
         * binds tooltip trigger event
         */var _bindOpenEvent=function _bindOpenEvent(){if(self.settings.trigger=='hover'||self.settings.trigger=='click'){var triggerEvent=self.settings.trigger=='hover'?_mouseEnter:self.settings.trigger;self.target.on(triggerEvent,function(){self.openTooltip(this)})}};/**
         * called by initTooltip
         * removes tooltip when document is clicked
         */var _bindDocumentEvent=function _bindDocumentEvent(){if(self.settings.trigger=='click'){self.target.on(_clickEvent,function(ev){return _stopEventPropagation(ev)})}jQuery(document).bind(_clickEvent,function(e){self.closeTooltip()})};/**
         * called by initTooltip
         * removes tooltip when Esc Key is pressed
         */var _bindKeydownEvent=function _bindKeydownEvent(){if(self.settings.closeOnEscape){var escKey=27;jQuery(document).bind('keydown',function(ev){if(ev.keyCode==escKey){self.closeTooltip()}})}};/**
         * called by initTooltip
         * removes tooltip when window is resize
         */var _bindResizeEvent=function _bindResizeEvent(){jQuery(window).bind('resize',function(e){self.closeTooltip()})};/**
         * called by initTooltip
         * removes tooltip when orientation changes
         */var _bindOrientationChangeEvent=function _bindOrientationChangeEvent(){jQuery(window).bind('orientationchange',function(){self.removeTooltip()})};/**
         * called by bindClickEvent and _bindDocumentEvent
         * stops click event from reaching document
         */var _stopEventPropagation=function _stopEventPropagation(ev){ev.stopPropagation();ev.stopImmediatePropagation();if(self.settings.touchDevice){return}return false};/**
         * called by openTooltip
         * binds tooltip hover event
         */var _bindHoverEvent=function _bindHoverEvent(){if(self.settings.trigger=='hover'){self.tooltip.find('.tooltip-close').hide();self.target.on(_mouseLeave,function(){self.closeTooltip()})}};/**
         * called by openTooltip
         * binds close/tooltip click event
         */var _bindClickEvent=function _bindClickEvent(){if(self.settings.trigger=='click'){self.tooltip.find('.tooltip-title').css({'paddingRight':'20px'});self.tooltip.find('.tooltip-close').show();self.tooltip.find('.tooltip-close').bind('click',function(ev){self.closeTooltip();return false});self.tooltip.bind(_clickEvent,function(ev){return _stopEventPropagation(ev)})}};/**
         * called by openTooltip
         * renders tooltip based on target's position
         */var _renderTooltip=function _renderTooltip(target){if(self.target.length==0)return false;var pos_left=target.position().left+target.outerWidth()/2-self.tooltip.outerWidth()/2;var pos_top=target.offset().top-self.tooltip.outerHeight()-25;var browserWidth=jQuery(window).width();var maxWidth=self.tooltip.outerWidth()+self.tooltip.outerWidth()/2;var smallWindow=maxWidth>browserWidth;//Position Tooltip
pos_left=_initializePositionLeft(pos_left,smallWindow,target);pos_left=_initializePositionRight(pos_left,browserWidth,target);pos_top=_initializePositionTop(pos_top,target);if(smallWindow){var arrow_posLeft=self.tooltip.hasClass('right')?target.position().left-pos_left-3:target.offset().left-pos_left+5;self.tooltip.find('.tooltip-arrow').css('left',arrow_posLeft)}else{self.tooltip.find('.tooltip-arrow').css('left','')}//Display Tooltip
self.tooltip.css({'left':pos_left,'top':pos_top});if(_settings('animation')&&_animate){var _top=self.tooltip.hasClass('top')?'-=10':'+=10';_animateTooltip(_top,1,300)}else{var _top=self.tooltip.hasClass('top')?pos_top-10:pos_top+10;self.tooltip.css({'top':_top});if(_fade){self.tooltip.css({'opacity':1})}self.tooltip.show()}_animate=true;self.isvisible=true};/**
         * called by renderTooltip and closeTooltip
         * hides/shows tooltips with animation
         */var _animateTooltip=function _animateTooltip(_top,_opacity,_delay,_callback){if(_callback==undefined)_callback=function _callback(){};if(_fade){self.tooltip.stop(true).animate({'top':_top,'opacity':_opacity},_delay,_callback)}else{self.tooltip.stop(true).animate({'top':_top},_delay,_callback)}};/**
         * called by renderTooltip
         * add/removes Tooltip class 'left' for left positioning of arrow
         * returns the 'x' coordinate of the Tooltip
         */var _initializePositionLeft=function _initializePositionLeft(pos_left,smallWindow,target){if(pos_left<0){if(!smallWindow){pos_left=target.position().left+target.outerWidth()/2-14;self.tooltip.addClass('left')}else{pos_left=7}}else{self.tooltip.removeClass('left')}return pos_left};/**
         * called by renderTooltip
         * add/removes Tooltip class 'right' for right positioning of arrow
         * returns the 'x' coordinate of the Tooltip
         */var _initializePositionRight=function _initializePositionRight(pos_left,browserWidth,target){if(pos_left+self.tooltip.outerWidth()>browserWidth){pos_left=target.position().left-self.tooltip.outerWidth()+target.outerWidth()/2+10;if(pos_left<0){pos_left=5}self.tooltip.addClass('right')}else{self.tooltip.removeClass('right')}return pos_left};/**
         * called by renderTooltip
         * add/removes Tooltip class 'top' for top positioning of arrow
         * returns the 'y' coordinate of the Tooltip
         */var _initializePositionTop=function _initializePositionTop(pos_top,target){var belowTarget=false;if(_settings('position')==''||_settings('position')=='auto'){if(pos_top<0||pos_top<_getScrollTop()){belowTarget=true}}else if(_settings('position')=='below'){belowTarget=true}if(belowTarget){pos_top=_getPosTop(target)+target.outerHeight()+25;self.tooltip.addClass('top')}else{pos_top=_getPosTop(target)-self.tooltip.outerHeight()-25;self.tooltip.removeClass('top')}return pos_top};/**
         * called by getScrollTop
         * Finds the scrolltop position of the document
         * Fixes jQuery IE issue (jQuery 1.4 or lower)
         */var _getScrollTop=function _getScrollTop(){var _scrolltop=jQuery(document).scrollTop();if(_ua.msie&&_ua.version<=8&&_jversion<='01.04'){_scrolltop=jQuery(document.documentElement).scrollTop()}return _scrolltop};/**
         * called by getPosTop
         * Finds the y position of an element
         * Fixes jQuery IE issue (jQuery 1.4 or lower)
         */var _getPosTop=function _getPosTop(target){var _top=target.position().top;if(_ua.msie&&_ua.version<=8&&_jversion<='01.04'){_top+=jQuery(document.documentElement).scrollTop()}return _top};/**
         * called by initTooltip
         * finds the size of an object to support all browsers
         */var _getSize=function _getSize(object){var size=0;for(var x in object){size++}return size};// Default Initialization
self.initTooltip()}};/**
 * Add aaTooltip plugin to jQuery Library
 */(function($){$.fn.aaTooltip=function(options){var tooltip=aaTooltip(this,options);if(aaTooltips!=undefined&&tooltip.name!=undefined&&tooltip.name!=''){aaTooltips[tooltip.name]=tooltip}return tooltip}})(jQuery);/**
 * Setup Default Tooltips
 * This will run after all other document.ready scripts
 * have completely finished AND all page elements are fully loaded.
 */jQuery(document).ready(function(){jQuery(window).load(function(){jQuery('[data-behavior=tooltip]').aaTooltip({name:'default'});jQuery('[data-behavior=tooltip-auto]').aaTooltip({name:'default-auto',width:'auto'});jQuery('[data-behavior=tooltip-warning]').aaTooltip({name:'default-warning',cssClass:'warning',title:'Warning'});jQuery('[data-behavior=tooltip-error]').aaTooltip({name:'default-error',cssClass:'error'});jQuery('[data-behavior=tooltip-success]').aaTooltip({name:'default-success',cssClass:'success'})});// Custom initializer for pre-existing tooltips in booking path
jQuery('[data-behavior=popover]').each(function(){var toolTipId=jQuery(this).attr('id');var toolTiphref=jQuery(this).attr('href');jQuery('#'+toolTipId).aaTooltip({name:toolTipId,trigger:'click',html:jQuery(toolTiphref).html(),onBeforeOpen:function onBeforeOpen(){jQuery('.aa-tooltip').remove()},onOpen:function onOpen(){jQuery('.aa-tooltip a.aa-pop-win-med').aaGenericPopup('MEDIUM')}})})});/*------------------------------------*\
 aaBusy
 \*------------------------------------*/(function($){$.fn.aaBusy=function(options){var self={},defaults={message:'',showlogo:true,position:undefined,form:''};self.settings=$.extend({},defaults,options);self.source=this;self.start=function(){var message,$this=$(self.source).filter(':first'),$module=$this.find('> .aa-busy-module'),$form=$(self.settings.form),condition=$this.length>0&&$module.length===0,$obj;if(typeof $device!=='undefined'&&$device.mobileApp){$obj=$('<div class="aa-busy-module"><div class="aa-busy-bg"></div><div class="aa-busy-img"><div><img alt="American Airlines" src="/content/images/chrome/rebrand/icon_aa_spinner.png"></div><p><span class="aa-busy-text"></span></p><span class="aa-busy-spinner-app" aria-hidden="true"></span></div></div>')}else{$obj=$('<div class="aa-busy-module"><div class="aa-busy-bg"></div><div class="aa-busy-img"><div><img alt="American Airlines" class="aa-busy-logo" src="/content/images/chrome/rebrand/aa-flight-icon.png"></div><p><span class="aa-busy-text"></span></p><span class="aa-busy-spinner" aria-hidden="true"></span></div></div>')}if(condition){$this.addClass('aa-busy');$this.addClass('is-busy');//set message
message=$this.attr('data-busy-message')||self.settings.message;if(message!==''){$obj.find('.aa-busy-text').html(message)}else{$obj.find('.aa-busy-text').remove()}//set logo
if(!self.settings.showlogo){$obj.find('.aa-busy-logo').remove()}//add module
$this.append($obj);//set position
var a=$this.find('.aa-busy-module').outerHeight(),b=$this.find('.aa-busy-img').outerHeight(),calc=(a-b)/(2*a)*100,pos=$this.data('busy-position')||self.settings.position||calc+'%';$this.find('.aa-busy-img').css('top',pos);$this.find('.aa-busy-text').attr('tabindex',-1).focus();//delay form submit: helps preloading images and on safari
if($form.length>0){setTimeout(function(){$form.submit()},500);$(window).unload(function(){});//disables bfcache for safari
}}return condition};self.stop=function(){var $this=$(self.source).filter(':first'),$module=$this.find('> .aa-busy-module'),condition=$this.length>0&&$module.length>0;if(condition){$module.animate({opacity:'hide'},500,function(){$module.remove();$this.removeClass('aa-busy');$this.removeClass('is-busy');if($('*:focus').length===0&&$this.hasClass('ui-dialog')){$this.find('h2').focus()}})}return condition};return self}})(jQuery);/*--------------------------------*\
 Format Form elements as JSON
 \*--------------------------------*/jQuery.fn.serializeObject=function(){var o={};var a=this.serializeArray();jQuery.each(a,function(){if(o[this.name]){if(!o[this.name].push){o[this.name]=[o[this.name]]}o[this.name].push(this.value||'')}else{o[this.name]=this.value||''}});return o};/*--------------------------------------*\
Link to first error from errorSummary.tag
\*--------------------------------------*/var errorSummaryFocusFirstError=function errorSummaryFocusFirstError(){jQuery(':input, label').each(function(i,element){var $element=jQuery(element);if($element.is('[class*=\'-error\']')&&$element.is(':visible')){var topPosition=$element.parent().offset().top-100;$j('html,body').animate({scrollTop:topPosition});$element.focus();return false}})};
//# sourceMappingURL=aacom-2.0.min.js.map
