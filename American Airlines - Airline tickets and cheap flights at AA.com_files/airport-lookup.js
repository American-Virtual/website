"use strict";/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/js/aa/modules/airportLookup.js
*    TO   --> ./webapps/shared-web/src/main/assets/js/modules/airport-lookup.js
**//* Airport lookup */AAcom.modules.airportLookup=function(AAUI){"use strict";var UNITED_STATES="US",CANADA="CA",target="",selectedCountry,selectedState,dialog={},locale=AAUI.getProperty("user.locale"),aaUtil=new aa_Utilities;var $airportsSection,$stateProvinceSection,$stateLabelText,$airportLookupError,$countryCode,$stateCode,$airportList;function hasStateOrProvince(country){return country===UNITED_STATES||country===CANADA}function render(){if($countryCode.val()===""){$airportsSection.hide()}if($stateCode.children("option").length>0){$stateProvinceSection.show()}else{$stateProvinceSection.hide()}if($airportList.children("tr").length>0){$airportsSection.show()}else{$airportsSection.hide()}dialog.resizeDialog()}function showStateOrProvince(country){$stateCode.empty();$airportList.empty();if(country===UNITED_STATES){// state
$stateLabelText.text(AAUI.getProperty("airportLookup.state"));$stateCode.append("<option value=''>"+AAUI.getProperty("airportLookup.selectState")+"</option>")}else{// province
$stateLabelText.text(AAUI.getProperty("airportLookup.province"));$stateCode.append("<option value=''>"+AAUI.getProperty("airportLookup.selectProvince")+"</option>")}$j.ajax({url:"/airport/states",data:{countryCode:country,locale:locale},dataType:"json",async:false,success:setStateOrProvince,error:error});render()}function setupCountries(data){$j.each(data,function(index){$countryCode.append("<option value='"+data[index].code+"'>"+AAUI.toPascalCase(data[index].name)+"</option>")})}function processCountryChange(){var self=this;var countrySelected=self.options[self.selectedIndex].value;if(countrySelected===""){$airportList.empty();$stateCode.empty();render();return}if(hasStateOrProvince(countrySelected)){showStateOrProvince(countrySelected)}else{$stateCode.empty();showAirports(this.value)}}function setStateOrProvince(data){$j.each(data,function(index){$stateCode.append("<option value='"+data[index].code+"'>"+data[index].name+"</option>")})}function error(data){$airportLookupError.show();resetAirportLookup()}function isAirportLoaded(countryCode,stateCode){if(!AA.browser.mozilla)return;var isLoaded=selectedCountry===countryCode;if(hasStateOrProvince(countryCode)){isLoaded=selectedState===stateCode}return isLoaded}function showAirports(country,stateOrProvinceValue){if(isAirportLoaded(country,stateOrProvinceValue)){return}$airportList.empty();$j.ajax({url:"/airport/airports",data:{countryCode:country,stateCode:stateOrProvinceValue},dataType:"json",async:false,success:function success(data){$airportList.empty();if(data.length===0){$airportList.append("<tr class=\"no-border\"><td colspan=\"3\">"+AAUI.getProperty("airportLookup.noSearchResult")+"</td></tr>");return}$j.each(data,function(index){var city=AAUI.toPascalCase(data[index].city);var name=data[index].name;var code=data[index].code;$airportList.append("<tr><td class='airport-city'>"+AAUI.toPascalCase(city)+"</td><td class='airport-name'>"+name+"</td><td class='airport-code'><a id='airport_"+code+"' href='javascript:void(0)' class='text-underline'><span class='airport-code'>"+code+"</span><span class='hidden-accessible'>, "+AAUI.getProperty("airportLookup.select")+" "+name+"</span></a></td></tr>");AAUI.onClick("#airport_"+code,function(){$j(target).val($j(this).find("span.airport-code").text());dialog.closeDialog()})});selectedCountry=country;selectedState=stateOrProvinceValue},error:error});render()}function resetAirportLookup(){var countryList=$countryCode[0];countryList.selectedIndex=0;var stateList=$stateCode[0];stateList.selectedIndex=0;$stateCode.empty();$airportList.empty();selectedCountry="";selectedState="";render()}function updateAirport(){if(this.value===""){$airportList.empty();selectedState="";render();return}if(isAirportLoaded($countryCode.val(),$stateCode.val())){return}var country=$countryCode[0];var countryValue="";if(typeof country!=="undefined"){countryValue=country.options[country.selectedIndex].value}showAirports(countryValue,this.value)}// init section
function initDialog(options){var buttonsList=[];buttonsList[0]={name:AAUI.getProperty("button.close"),cssClass:"btn",callback:function callback(){dialog.closeDialog()},closeDialog:true};// default settings
var settings=$j.extend({modal:true,toggleScroll:true,width:600,buttons:buttonsList},options);dialog=aaUtil.aaDialog("airportLookup",settings);// Cache references to elements
$airportsSection=$j("#airportsSection");$airportLookupError=$j("#airportLookupError");$stateProvinceSection=$j("#stateProvinceSection");$stateLabelText=$j("#stateLabelText");$countryCode=$j("#countryCode");$stateCode=$j("#stateCode");$airportList=$j("#airportList")}function initCountryOptions(){$j.ajax({url:"/airport/countries",data:{locale:locale},dataType:"json",success:setupCountries,error:error});AA.browser.mozilla?AAUI.onKeyChange("#countryCode",processCountryChange):AAUI.onChange("#countryCode",processCountryChange)}function initStateOrProvinceOptions(){AA.browser.mozilla?AAUI.onKeyChange("#stateCode",updateAirport):AAUI.onChange("#stateCode",updateAirport)}// main initialization
AAUI.initAirportLookup=function(selector,options){initDialog(options);initCountryOptions();initStateOrProvinceOptions();// Show airport lookup dialog after clicking on search icon
AAUI.onClick(selector,function(){target=$j(this).data("for");target="#"+target.replace(/\./g,"\\.").replace(/\[/g,"\\[").replace(/\]/g,"\\]");resetAirportLookup();dialog.openDialog()})}};
//# sourceMappingURL=airport-lookup.min.js.map
