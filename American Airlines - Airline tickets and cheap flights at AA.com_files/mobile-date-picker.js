'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/js/aa/modules/mobileDatePicker.js
*    TO   --> ./webapps/shared-web/src/main/assets/js/modules/mobile-date-picker.js
**//* global noBounce: true *//**
 * Mobile Date Picker
 */AAcom.modules.aaMobileDatePicker=function(AAUI){'use strict';var module,$datePicker,$aaDialog,currentDate,onSelect,settings,$target,$start,$end,dateRange={start:null,end:null};// Call 'beforeShow' for inline Datepicker to stop showing today's date from calendar
$j.extend($j.datepicker,{// Reference the original function so we can override it and call it later
_inlineDatepicker2:$j.datepicker._inlineDatepicker,// Override the _inlineDatepicker method
_inlineDatepicker:function _inlineDatepicker(target,inst){// Call the original
this._inlineDatepicker2(target,inst);var beforeShow=$j.datepicker._get(inst,'beforeShow');if(beforeShow){beforeShow.apply(target,[target,inst])}}});/**
     * Save selected date to the field
     * @param {string} selector
     */var _altField=function _altField(selector){$target=$j(selector);return this};/**
     * Close calendar
     */var _hide=function _hide(){$aaDialog.closeDialog()};/**
     * Get selected date
     */var _getDate=function _getDate(){return currentDate};/**
     * Set call back method after selecting a date
     */var _onSelectHandler=function _onSelectHandler(onSelectFunc){onSelect=onSelectFunc;return this};/**
     * Open calendar
     */var _show=function _show(){$aaDialog.openDialog();// Scroll calendar to selected month
if($target.val()||$start.val()||$end.val()){var offset;if($target.prop('id')==$start.prop('id')&&$start.val()===''&&$end.val()!==''){// User selected a return date and now picking a departure date,
// show 42 days (6 weeks) before return date
offset=$j('td.ui-date-range').offset()}else{offset=$j('a.ui-state-active').closest('div.ui-datepicker-group').offset()}if(offset){$j(document).scrollTop(offset.top-41)}}};/**
     * Set datepicker date
     */var _setDate=function _setDate(date){// Show the date on calendar
var format,value,currentDateValue=$datePicker.datepicker('getDate');if(date){format=$datePicker.datepicker('option','dateFormat');try{value=$j.datepicker.parseDate(format,date);if(value&&value.getTime()!==currentDateValue.getTime()){$datePicker.datepicker('setDate',date)}}catch(ex){// locale date parsing exception
}}else{// Cannot override Datepicker plugin setting it today day when date was set to null.
// Remove today's date styling treatment by jQuery removeClass
// $datePicker.datepicker('setDate', null);
$datePicker.find('a.ui-state-active').removeClass('ui-state-highlight ui-state-active ui-state-hover');$datePicker.find('td.ui-datepicker-current-day').removeClass('ui-datepicker-current-day')}};/**
     * Set date range
     * @param (object) start and end dates to display
     */var _setRange=function _setRange(range){$j.extend(dateRange,range);return this};/**
     * Set dialog title
     * @param {string} title of the dialog
     */var _setTitle=function _setTitle(title){if(typeof title==='string'){$j('#datePickerDialog').dialog('option','title',title)}return this};/**
     * Check date if its between depart and return
     * @param {object} Date object
     */var beforeShowDay=function beforeShowDay(date){if(dateRange.start===null&&dateRange.end===null||date===null){return[true,'']}var css='',currentDateTime=date.getTime(),startDateTime=dateRange.start?dateRange.start.getTime():null,endDateTime=dateRange.end?dateRange.end.getTime():null;// Don't process dates beyond the return date
if(endDateTime&&currentDateTime>endDateTime){return[true,'']}// Datepicker can only show one selected date
// Add selected css to depart and return dates
if(startDateTime===currentDateTime){css='ui-date-selected';// show the span highlight
// except for same date
if(endDateTime&&endDateTime!==startDateTime){css+=' -start'}return[true,css]}if(endDateTime===currentDateTime){css='ui-date-selected';// don't show span highlight when start and end are same
if(startDateTime&&startDateTime!==endDateTime){css+=' -end'}return[true,css]}// Show span hightlight for dates between depart-return
if(startDateTime&&endDateTime&&currentDateTime>startDateTime&&currentDateTime<endDateTime){return[true,'ui-date-include']}// add
if(endDateTime&&currentDateTime<endDateTime&&endDateTime-3628800000==currentDateTime){css=' ui-date-range'}return[true,css]};/**
     * Check date range rule
     */var validateDateRange=function validateDateRange(){// Reset return date when user selected
// a depart date later than return date
var departDate=dateRange.start,returnDate=dateRange.end;if(returnDate&&departDate&&departDate>returnDate){dateRange.end=null;$end.val('');updateMinDate()}};/**
     * Get HTML element jQuery selectors from the option passed to
     * mobile date picker
     * @param {object} object with 'start' and 'end' property with text input selector
     * @return {string} comma separated element selector
     */var getElemSelector=function getElemSelector(rangeOption){var elemSelector='';if((typeof rangeOption==='undefined'?'undefined':_typeof(rangeOption))==='object'&&rangeOption.start&&rangeOption.end){elemSelector=rangeOption.start+','+rangeOption.end}return elemSelector};/**
     * Get correct jQuery id format
     * @param {string} elem id
     * @return {string} element id in correct format
     */var getId=function getId(elemId){return'#'+elemId.replace(/(:|\.|\[|\]|,)/g,'\\$1')};/**
     * Datepicker is set to work with departure and return date
     * @return {boolean} true when
     */var isDateRange=function isDateRange(){return $start&&$end};/**
     * Set date of text input
     * @param {string} string date in locale format, e.g. US = mm/dd/yyyy
     * @param {object} Datepicker plugin instance
     */var onSelectDate=function onSelectDate(dateText,inst){$target.val(dateText);currentDate=$datePicker.datepicker('getDate');if(isDateRange()){updateDateRange()}// Call onSelect call back handler
if(onSelect){onSelect.apply($target,[dateText,inst])}_hide();$j(window).scrollTop($target.offset().top-100)};/**
     * Set start and end date
     */var setDateRange=function setDateRange(){try{var value,format=$datePicker.datepicker('option','dateFormat');value=$start.val();dateRange.start=value?$j.datepicker.parseDate(format,value):null;value=$end.val();dateRange.end=value?$j.datepicker.parseDate(format,value):null}catch(ex){dateRange.start=null;dateRange.end=null;$start.val('');$end.val('')}};/**
     * Bind start and end date input
     * @param {object} object with 'start' and 'end' property with text input selector
     */var setupDateRange=function setupDateRange(rangeOption){if((typeof rangeOption==='undefined'?'undefined':_typeof(rangeOption))!=='object'){return}if(rangeOption.start){$start=$j(rangeOption.start)}if(rangeOption.end){$end=$j(rangeOption.end)}setDateRange()};/**
     * Process date range changes
     * - update start/end date
     * - run date range rules
     */var updateDateRange=function updateDateRange(){setDateRange();validateDateRange();updateMinDate()};/**
     * Disable date before departure date
     * only when return date is selected
     */var updateMinDate=function updateMinDate(){$datePicker.datepicker('option','minDate',settings.minDate);$datePicker.datepicker('option','numberOfMonths',settings.numberOfMonths);// Set minimum date to departure date
// when return date is also selected.
var minDate=$datePicker.datepicker('option','minDate'),maxDate=$datePicker.datepicker('option','maxDate'),numberOfMonths=settings.numberOfMonths;// When user already selected a return and dept date:
// - Minimum selectable date cannot be before the dept date
if(dateRange.start&&$target.prop('id')===$end.prop('id')){// Reset min date to depart date
if(minDate===0||minDate.getTime()!=dateRange.start.getTime()){$datePicker.datepicker('option','minDate',dateRange.start);if(maxDate===0){var startDateMonth=dateRange.start.getMonth();$datePicker.datepicker('option','numberOfMonths',numberOfMonths-startDateMonth)}}return}// Departure date is selected. User can select date from today's to +331days
//		 if (min) {
//		 	$datePicker.datepicker('option', 'minDate', 0);
//		 }
};/**
     * Initialize mobile date picker
     * @param {string} element selector
     * @param {object} options
     */var init=function init(selector,options){var rangeOptions={start:'',end:''};if((typeof selector==='undefined'?'undefined':_typeof(selector))==='object'){// Using date range mode
// Parse start and end date input
$j.extend(rangeOptions,selector.dateRange);// require start and end date fields
if(!rangeOptions.start||!rangeOptions.end){return}// Get jQuery elem selector
selector=getElemSelector(rangeOptions)}var $selector=$j(selector);// Check if elem exist
if(!$selector.length){return}// Check if dialog exist on the page
if(!$j('#datePickerDialog').length){return}// Dialog setup
var aaUtil=new aa_Utilities,$mainSection=$j('#main');$aaDialog=aaUtil.aaDialog('datePicker',{modal:false,width:'100%',hide:500,toggleScroll:true,resizable:false,aaPosition:{vertical:'top',horizontal:null,of:window},cssClass:'aa-ui-dialog',draggable:false,onOpen:function onOpen(){$mainSection.hide();stickyTitleBar()},onBeforeClose:function onBeforeClose(){$mainSection.show()}});// changes position value of titlebar on momentum scrolling.
var stickyTitleBar=function stickyTitleBar(){var $ui_dialog_titlebar=$j('#datePickerDialog').siblings('.ui-dialog-titlebar'),$ui_dialog_titlebar_pos=$ui_dialog_titlebar.position().top;$j(window).on('scroll',function(){if($j(window).scrollTop()>=$ui_dialog_titlebar_pos)$ui_dialog_titlebar.css('position','fixed');else $ui_dialog_titlebar.css('position','absolute')})};// jQuery datepicker plugin setup
$datePicker=$j('#inlineCalendar');// console.info($aaDialog);
settings={inline:true,minDate:0,maxDate:'+331d',numberOfMonths:12,showButtonPanel:false,onSelect:onSelectDate,beforeShowDay:beforeShowDay,beforeShow:function beforeShow(input,inst){// Remove today's date highlight
inst.dpDiv.find('a.ui-state-active').removeClass('ui-state-highlight ui-state-active ui-state-hover');inst.dpDiv.find('td.ui-datepicker-current-day').removeClass('ui-datepicker-current-day')}};// Initialize date picker
$j.extend(settings,options);$datePicker.datepicker(settings);// Bind dept and return date field
setupDateRange(rangeOptions);// Date field on focus event handler
$j(selector).on('focus',function(){$target=$j(this);// Blur input field to remove bugged overlay
$target.blur();// Set dialog title
_setTitle($target.data('title'));// Highlight the date from the date input
// Don't remove selected date when on date range mode
if(isDateRange()){updateMinDate()}_setDate($target.val());_show();return false});// Add calendar icon and set on click event handler
$j.each($selector,function(index){// Create calendar icon
// - set altfield to id of date input
// - css is ui-datepicker-trigger (calendar icon)
var calendarIcon=$j('<button />').attr({'type':'button','data-altfield':this.id,'class':'ui-datepicker-trigger'}).append('<span class=\'hidden-accessible\'>'+AAUI.getProperty('calendar.hiddenText')+'</span>');// Bind on click event. Set the date input from altfield attribute
calendarIcon.on('click',function(){var $this=$j(this);// Get the button's target date field and save it
// for date picker
var altField=$this.data('altfield');// Datepicker onSelect will put the date selected on targetId textbox
var targetId=getId(altField);_altField(targetId);// Set dialog title
var $dateInput=$j(targetId);_setTitle($dateInput.data('title'));// When on date range move, don't remove selected date
if(isDateRange()){updateMinDate()}_setDate($dateInput.val());_show();return false});// Append to date input the new calendar icon
$j(this).after(calendarIcon)})};AAUI.initMobileDatePicker=function(selector,options){init(selector,options);module={altField:_altField,getDate:_getDate,hide:_hide,onSelect:_onSelectHandler,setRange:_setRange,setTitle:_setTitle,show:_show};return module}};
//# sourceMappingURL=mobile-date-picker.min.js.map
