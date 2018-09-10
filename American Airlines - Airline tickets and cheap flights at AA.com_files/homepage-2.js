'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};/**
 *  UI-REFACTORED
 *    FROM --> ./legacy-web/src/main/js/js/aa/home/homepage-2.0.0.js
 *    TO   --> ./webapps/homepage-web/src/main/assets/js/home/homepage-2.0.0.js
 **//* global dynMoreOptionsRoundTrip:true *//* global dynMoreOptionsOneWay:true *//* global dynAavDeepLinkURL:true *//* global dynUserLocale:true *//* global onMessage:true *//* global captureExtLink:true *//* global aaHeroSlides:true *//*
 * Scripts used by the homepage
 */AAcom('browserdetect','utilities','commonsetup','ajax','aaDatePicker','aaAutoComplete','travelDates','nearestAirportLookup','airportLookup','aaMobileDatePicker',function(AAUI){var $fhServiceClass=$j('#reservationFlightSearchForm label[for="fhServiceClass"]'),$returningFromLabel=$j('#reservationFlightSearchForm label[for="aa-returningFrom"]'),$advBookingSearch=$j('#advBookingSearch'),$aairPassParent=$j('#flightSearchForm\\.tripType\\.aairPass').parent(),$aairPass=$j('#flightSearchForm\\.tripType\\.aairPass'),$tripLinkParent=$j('#flightSearchForm\\.tripType\\.tripLink').parent(),$tripLink=$j('#flightSearchForm\\.tripType\\.tripLink'),$redeemMilesParent=$j('#flightSearchForm\\.tripType\\.redeemMiles').parent(),$redeemMiles=$j('#flightSearchForm\\.tripType\\.redeemMiles'),$bookingCheckboxContainer=$j('#bookingCheckboxContainer'),$defaultSubmit=$j('#flightSearchForm\\.button\\.reSubmit'),$vacationSubmit=$j('#flightSearchForm\\.button\\.vacationSubmit'),$departingDateField=$device.mobile&&$device.viewport()!=='desktop'?$j('#departDate'):$j('#aa-leavingOn'),$returningDateField=$device.mobile&&$device.viewport()!=='desktop'?$j('#returnDate'):$j('#aa-returningFrom'),$flightSearchSubmitButton=$j('#flightSearchFormSubmitButton'),userSelectedDate=false,previousDepartDate=new Date,previousReturnDate=new Date,defaultWasSetOnRoundTripHotel=false,returningDateFieldIsDirty=false,departingDateFieldIsDirty=false,handlebarWorker;var _getSelectedFindFlightType=function _getSelectedFindFlightType(){if($j('#round-trip-hotel').prop('checked')){return'roundTripHotel'}if($j('#flightSearchForm\\.tripType\\.oneWay').prop('checked')){return'oneWay'}return'roundTrip'};var _showRoundTrip=function _showRoundTrip(){$fhServiceClass.hide();$returningFromLabel.removeClass('is-hidden');$advBookingSearch.show();$bookingCheckboxContainer.show();$defaultSubmit.show();$vacationSubmit.hide();$flightSearchSubmitButton.removeClass('offset4 offset8');_setMinDates(new Date)};var _showOneWay=function _showOneWay(){$fhServiceClass.hide();$returningFromLabel.addClass('is-hidden');$advBookingSearch.show();$bookingCheckboxContainer.show();$defaultSubmit.show();$vacationSubmit.hide();$flightSearchSubmitButton.removeClass('offset8').addClass('offset4');_setMinDates(new Date)};var _showRoundTripHotel=function _showRoundTripHotel(){var minDate=new Date;$fhServiceClass.show();$returningFromLabel.removeClass('is-hidden');$advBookingSearch.hide();$bookingCheckboxContainer.hide();$defaultSubmit.hide();$vacationSubmit.show();$j('#reservationFlightSearchForm input[type=checkbox]').prop('checked',false).trigger('change');$flightSearchSubmitButton.removeClass('offset4').addClass('offset8');minDate.setDate(minDate.getDate()+2);var departDate=_getDateFromDatePicker('aa-leavingOn');var returnDate=_getDateFromDatePicker('aa-returningFrom');if(_getDateDifferenceInDaysFromToday(departDate)<=1){previousDepartDate=departDate;previousReturnDate=returnDate;defaultWasSetOnRoundTripHotel=true;_setDateDefaultsForRoundTripHotel()}_setMinDates(minDate)};var _setMinDates=function _setMinDates(departDate){$departingDateField.datepicker('option','minDate',departDate);if(_getSelectedFindFlightType()==='oneWay'){$returningDateField.datepicker('setDate','')}else{$returningDateField.datepicker('option','minDate',departDate)}AAUI.initDatepickerA11Y()};var _getDateDifferenceInDaysFromToday=function _getDateDifferenceInDaysFromToday(date){var TIME_TO_DAY_FACTOR=1000*60*60*24;var today=new Date;var todayDate=Date.UTC(today.getFullYear(),today.getMonth(),today.getDate());var otherDate=Date.UTC(date.getFullYear(),date.getMonth(),date.getDate());return Math.floor((otherDate-todayDate)/TIME_TO_DAY_FACTOR)};var _getDateFromDatePicker=function _getDateFromDatePicker(datepickerId){return $j('#'+datepickerId).datepicker('getDate')};var _setDateDefaultsForRoundTripHotel=function _setDateDefaultsForRoundTripHotel(){var roundTripHotelDepartDate=new Date;var roundTripHotelReturnDate=new Date;roundTripHotelDepartDate.setDate(roundTripHotelDepartDate.getDate()+2);$departingDateField.datepicker('setDate',roundTripHotelDepartDate);var returnDate=_getDateFromDatePicker('aa-returningFrom');var altReturnDate=$returningDateField.attr('data-historicReturnDate')===''?'':new Date($returningDateField.attr('data-historicReturnDate'));if(altReturnDate||returningDateFieldIsDirty){if(!returningDateFieldIsDirty&&returnDate.getMonth()!==altReturnDate.getMonth()&&returnDate.getDate()!==altReturnDate.getDate()&&returnDate.getYear()!==altReturnDate.getYear()){roundTripHotelReturnDate.setDate(roundTripHotelReturnDate.getDate()+9);$returningDateField.datepicker('setDate',roundTripHotelReturnDate)}}else{roundTripHotelReturnDate.setDate(roundTripHotelReturnDate.getDate()+9);$returningDateField.datepicker('setDate',roundTripHotelReturnDate)}};var _setDateDefaultsForFlightOnly=function _setDateDefaultsForFlightOnly(){var searchDate=new Date;var futureDate=new Date;$departingDateField.datepicker('setDate',searchDate);_setMinDates(searchDate);futureDate.setDate(futureDate.getDate()+7);$returningDateField.datepicker('setDate',futureDate)};var _updateFindFlightsView=function _updateFindFlightsView(view){switch(view){case'roundTrip':_showRoundTrip();break;case'oneWay':_showOneWay();break;case'roundTripHotel':_showRoundTripHotel();break;}if(view!=='roundTripHotel'){if(defaultWasSetOnRoundTripHotel){$departingDateField.datepicker('setDate',previousDepartDate);$returningDateField.datepicker('setDate',previousReturnDate);defaultWasSetOnRoundTripHotel=false}}};var _toggleRedeemMiles=function _toggleRedeemMiles(isRedeemMiles){if(isRedeemMiles){$tripLink.prop('disabled',true);$aairPass.prop('disabled',true)}else{$tripLink.prop('disabled',false);$aairPass.prop('disabled',false)}};var _toggleTripLink=function _toggleTripLink(isTripLink){if(isTripLink){$redeemMiles.prop('disabled',true);$aairPass.prop('disabled',true)}else{$redeemMiles.prop('disabled',false);$aairPass.prop('disabled',false)}};var _toggleAirpass=function _toggleAirpass(isAirpass){if(isAirpass){$redeemMiles.prop('disabled',true);$tripLink.prop('disabled',true)}else{$redeemMiles.prop('disabled',false);$tripLink.prop('disabled',false)}};var _setToSession=function _setToSession(isTripLink){// Business rule:
// If the user unchecks the triplink checkbox, 
// do not default it to checked again during the session
AAUI.ajaxRequest({url:'/home/ajax/triplinkSelection',type:'GET',data:{'tripLink':isTripLink},dataType:'JSON',timeout:5000,showBusy:false})};var getDateInUSFormat=function getDateInUSFormat(inputDateId){var dateFromDatePicker=_getDateFromDatePicker(inputDateId);if(dateFromDatePicker===null){return''}return dateFromDatePicker.getMonth()+1+'/'+dateFromDatePicker.getDate()+'/'+dateFromDatePicker.getFullYear()};var _initBookingForm=function _initBookingForm(){var isRedeemMiles=$redeemMiles.prop('checked'),isAirpass=$aairPass.prop('checked'),isTripLink=$tripLink.prop('checked');_toggleRedeemMiles(isRedeemMiles);_toggleAirpass(isAirpass);_toggleTripLink(isTripLink);AAUI.onChange('#reservationFlightSearchForm input[type=radio]',function(){$j(this).parent().attr('aria-checked','true');$j(this).parent().siblings().attr('aria-checked','false');_updateFindFlightsView(this.value)});AAUI.onChange('#reservationFlightSearchForm input[type=checkbox]',function(e){switch(this.id){case'flightSearchForm.tripType.redeemMiles':_toggleRedeemMiles(this.checked);break;case'flightSearchForm.tripType.aairPass':_toggleAirpass(this.checked);break;case'flightSearchForm.tripType.tripLink':_toggleTripLink(this.checked);_setToSession(this.checked);break;}});AAUI.onClick('#flightSearchForm\\.button\\.vacationSubmit',function(e){e.preventDefault();var $dataLink=$j(this).data('link'),localeParam='?ADID=AACM-DEP-ALL-09-01';if(dynUserLocale=='en_CA'){localeParam='?ADID=AACA-DEP-ALL-14-31'}else if(dynUserLocale=='es_MX'){localeParam='?ADID=AAMX-DEP-ALL-14-31'}var flightHotelURL=dynAavDeepLinkURL+localeParam+'&searchType=matrix&'+'adults='+$j('#flightSearchForm\\.adultOrSeniorPassengerCount').val()+'&';flightHotelURL+='rooms=1'+'&'+'serviceclass='+$j('#fhServiceClass').val()+'&';flightHotelURL+='from_date='+getDateInUSFormat('aa-leavingOn')+'&'+'to_date='+getDateInUSFormat('aa-returningFrom')+'&';flightHotelURL+='from_city_code='+$j('#reservationFlightSearchForm\\.originAirport').val()+'&'+'to_city_code='+$j('#reservationFlightSearchForm\\.destinationAirport').val()+'&'+'to_time=0&'+'from_time=0';captureExtLink(dynAavDeepLinkURL+localeParam,document.location);if(typeof interimMessages!=='undefined'){interimMessages().showInterimMessage({url:flightHotelURL,dialogName:$dataLink})}else{window.open(flightHotelURL,'aavacations')}});$j('#advBookingSearch').on('click',function(e){e.preventDefault();$j('#showMoreOptions').val(true);$j('#reservationFlightSearchForm').submit()});$j('#flightSearchForm\\.button\\.reSubmit').on('click',function(e){if(!document.getElementById('flightSearchForm.tripType.redeemMiles').checked){$j('body').aaBusy({message:AAUI.getProperty('loadingTxt'),form:this}).start()}$j('#showMoreOptions').val(false)})};var _initDatePicker=function _initDatePicker(){AAUI.initDatePicker('.aaDatePicker',{beforeShowDay:_highlightSelectDates,onSelect:_handleDateSelect});if($j.trim($returningDateField.val()).length===0){_setDateDefaultsForFlightOnly()}};var _initMobileDatePicker=function _initMobileDatePicker(options){AAUI.initMobileDatePicker(options)};var _handleDateSelect=function _handleDateSelect(selectedDate,event){var instance=$j(this).data('datepicker'),date=$j.datepicker.parseDate(instance.settings.dateFormat||$j.datepicker._defaults.dateFormat,selectedDate,instance.settings);userSelectedDate=true;switch(event.id){case'aa-leavingOn':if($returningDateField.datepicker('getDate')<$departingDateField.datepicker('getDate')){$returningDateField.datepicker('setDate','')}$returningDateField.datepicker('option','minDate',date);AAUI.initDatepickerA11Y();$j('.aaDatePicker').datepicker('refresh');departingDateFieldIsDirty=true;break;case'aa-returningFrom':returningDateFieldIsDirty=true;$j('.aaDatePicker').datepicker('refresh');break;}if(_getSelectedFindFlightType()==='roundTripHotel'){defaultWasSetOnRoundTripHotel=false}};var _highlightSelectDates=function _highlightSelectDates(date){try{var date1=$j.datepicker.parseDate($j.datepicker._defaults.dateFormat,$departingDateField.val());var date2=$j.datepicker.parseDate($j.datepicker._defaults.dateFormat,$returningDateField.val());return[true,date1&&(date.getTime()==date1.getTime()||date2&&date>=date1&&date<=date2)?'aa-highlight':'']}catch(error){return[true,'']}};var _viewReservationList=function _viewReservationList(){if(AAUI.getProperty('account.isSecure')==='true'){AAUI.ajaxRequest({url:'/home/ajax/mytrips',type:'GET',dataType:'json',busyContainer:$j('#aa-viewReservations').parent(),busyMessage:AAUI.getProperty('loadingTxt'),timeout:50000,onSuccess:function onSuccess(jsonResponse,textStatus){if(jsonResponse&&textStatus=='success'){if(jsonResponse.errorCode){$j('#aa-viewReservationsSecure').empty().html('<p><span class="message-error" aria-hidden="true"></span><span>'+jsonResponse.errorMessage+'</span></p>')}else{jsonResponse.visibleReservations=jsonResponse.reservations.slice(0,5);handlebarWorker.postMessage({action:'parseTemplate',key:'viewReservations',data:jsonResponse,templateContainer:'aa-viewReservationsSecure'})}}else{$j('#aa-viewReservationsSecure').empty().html('<p><span class="message-error" aria-hidden="true"></span><span>'+AAUI.getProperty('global.error')+'</span></p>')}},onError:function onError(){$j('#aa-viewReservationsSecure').empty().html('<p><span class="message-error" aria-hidden="true"></span><span>'+AAUI.getProperty('global.error')+'</span></p>')},onComplete:function onComplete(){$j('#aa-viewReservationsSecure *:first').attr('tabindex','-1').attr('aria-live','polite').focus();$j('html, body').animate({scrollTop:$j('#jq-myTripsCheckIn').height()+$j('.mobile-tab-container').offset().top+1},500)}})}};var _initAccordion=function _initAccordion(){var accordion=$j('.mobile-tab-container').accordion({active:false,collapsible:true,header:'h2',icons:false,heightStyle:'content',beforeActivate:function beforeActivate(event,ui){if(ui.newHeader.length>0){if(ui.newHeader[0].id==='jq-myTripsCheckIn'){_viewReservationList()}ui.newHeader.find('[class*="icon-"]').removeClass('icon-expand').addClass('icon-collapse');$j('.mobile-tab-container').addClass('expanded');var topOfContainer=$j('.mobile-tab-container').offset().top+1;var index=$j('.acc-tab').index(ui.newHeader);$j('html, body').animate({scrollTop:index*$j('.acc-tab').first().height()+topOfContainer},500)}if(ui.oldHeader.length>0){ui.oldHeader.find('[class*="icon-"]').removeClass('icon-collapse').addClass('icon-expand');//to handle accessibility bug in jQueryUI 1.10.4
ui.oldHeader.attr('aria-expanded',false);if(ui.newHeader.length===0){$j('.mobile-tab-container').removeClass('expanded')}}}})};function setActiveTab(){var activeTab=AAUI.getQueryStringParameterByName('activeTab');if(activeTab&&activeTab>0&&activeTab<3){$j('#booking-module-tabs').tabs('option','active',activeTab)}}function captureActiveTab(ui){var $moduleTabs=$j('#booking-module-tabs'),loginFormActiveTab=$j('#loginForm\\.activeTab')[0];// Save the tab the user is currently viewing (find flights/checkin/flight status)
// and switch to correct view after login
if(loginFormActiveTab&&$moduleTabs.length){loginFormActiveTab.value=$moduleTabs.tabs('option','active')}}var _initPage=function _initPage(pageLoad){pageLoad=pageLoad||false;if(pageLoad){_updateFindFlightsView(_getSelectedFindFlightType());if(typeof $device!=='undefined'&&$device.mobile&&$device.viewport()!=='desktop'){bookingForm({tripType:AAcom.prototype.getProperty('tripType'),dateFormat:AAcom.prototype.getProperty('dateFormat').replace(/MM/g,'mm').replace(/yy/g,'y'),bookingType:AAcom.prototype.getProperty('awardBooking')?'awardBooking':'revenueBooking',refundable:AAcom.prototype.getProperty('refundable'),cabinType:AAcom.prototype.getProperty('cabinType')},$j.fn.aaRecentSearch({originAirportInputId:'#segments0.origin',destinationAirportInputId:'#segments0.destination',departDateInputId:'#departDate',returnDateInputId:'#returnDate'}),_initMobileDatePicker)}else{_initBookingForm()}AAUI.initAutoComplete('.aaAutoComplete',false,{position:{collision:'flip'}});AAUI.initAirportLookup('.aaAirportLookup');AAUI.initNearestAirportLookup('.current-location-btn');_initDatePicker();if(!$device.mobile&&(typeof aaHeroSlides==='undefined'?'undefined':_typeof(aaHeroSlides))!==(typeof undefined==='undefined'?'undefined':_typeof(undefined))&&aaHeroSlides.length>0){$j('#aa-hp-ad-hero').aaHeroAds(aaHeroSlides)}else{_initAccordion()}AAUI.populateSpecificFlightSearchDateDropdown($j('#travelDate'),true,$j('#clientLocalTime'));setActiveTab();if('serviceWorker'in navigator){navigator.serviceWorker.register('service-worker.js')}}};/* Moving from document ready because tabs need to be initialized at the earliest to allow user interaction */$j('#booking-module-tabs').tabs({activate:function activate(event,ui){captureActiveTab();if(ui.newTab.attr('id')=='aa-tab-viewReservations'){_viewReservationList()}}});if(window.Worker){handlebarWorker=new Worker('assets/js/webworker/handlebar-worker.min.js');handlebarWorker.onmessage=function(e){switch(e.data.key){case'viewReservations':$j('#'+e.data.templateContainer).empty().html(e.data.html);$j('#aa-viewReservationsSecure *:first').attr('tabindex','-1').focus();break;default:$j('#'+e.data.templateContainer).empty().html(e.data.html);break;}};handlebarWorker.postMessage({action:'addTemplate',key:'viewReservations',data:$j('#viewReservations-template').html()})}else{$j.getScript('assets/js/webworker/handlebar-no-worker.min.js',function(data,textStatus,jqxhr){handlebarWorker={postMessage:onMessage};handlebarWorker.postMessage({action:'addTemplate',key:'viewReservations',data:$j('#viewReservations-template').html()})})}$j(document).ready(function(){_initPage(true);if(AAUI.getProperty('account.isSecure')=='false'){AAUI.sessionTimeOutDialog.stopTimers()}});AAUI.populateBagInputs=function(){var searchBy=$j('#searchBy').find('option:selected').val();var recordLocInput=$j('#recordLocNum');if(searchBy=='bagTagNumber'){recordLocInput.hide();AAUI.initClearInput('#recordLoc');$j('#bagTagNum').show()}else{recordLocInput.show();AAUI.initClearInput('#bagTagNum');$j('#bagTagNum').hide()}};AAUI.initBagTrackerSearchBy=function(){AAUI.populateBagInputs();AAUI.onChange('select[name="searchBy"]',function(){AAUI.populateBagInputs()})};AAUI.initCollapse=function(){var bags=$j('.historyTableLink');if(bags.length){bags.each(function(index,bag){AAUI.collapse({selector:'#'+bag.id,target:$j(bag).data('href'),collapsed:true,accessibleText:{hide:AAUI.getProperty('bagTrackerHide'),show:AAUI.getProperty('bagTrackerShow')}}).init()})}};AAUI.initClearInput=function(input){AAUI.resetFormFields(input);AAUI.clearFormErrors(input)};$j(document).ready(function(){AAUI.initBagTrackerSearchBy();AAUI.initCollapse()})});
//# sourceMappingURL=homepage-2.0.0.min.js.map
