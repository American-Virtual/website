"use strict";/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/apps/common/js/jquery/aacom/plugins/aaCookie.js
*    TO   --> ./webapps/shared-web/src/main/assets/js/legacy/plugins/aa-cookie.js
**//*
 * aaCookie.js
 */jQuery.aaCookie=new function(){this.set=function(paramName,paramValue,paramDays,paramPath,paramDomain,paramSecure){if(paramName){document.cookie=paramName+"="+escape(paramValue)+";"+(paramDays?"expires="+new Date(new Date+paramDays*8640000).toGMTString()+";":"")+(paramPath?"path="+paramPath+";":"")+(paramDomain?"domain="+paramDomain+";":"")+(paramSecure?"secure;":"")}};this.get=function(paramName){if(paramName){var value=document.cookie.match("(^|;) ?"+paramName+"=([^;]*)(;|$)");return value?unescape(value[2]):null}};this.del=function(paramName){// "deletes" the cookie by setting its expiration date in the past
if(paramName){document.cookie=paramName+"=; expires="+new Date(new Date-1).toGMTString()}};this.enabled=function(){var TEST_COOKIE="test_cookie";this.set(TEST_COOKIE,true);if(this.get(TEST_COOKIE)){this.del(TEST_COOKIE);return true}else{return false}}};
//# sourceMappingURL=aa-cookie.min.js.map
