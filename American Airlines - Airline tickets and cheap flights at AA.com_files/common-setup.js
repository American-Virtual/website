"use strict";/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/js/aa/modules/commonSetup.js
*    TO   --> ./webapps/shared-web/src/main/assets/js/modules/common-setup.js
**//*
* This is the stuff that has to happen on every page
*/AAcom.modules.commonsetup=function(AAUI){var $browserAlertsContainer=$j("#browserAlertsContainer"),$cookieAlertsContainer=$j("#cookieAlertsContainer");if(AAUI.isUnsupportedBrowser()===true){$j.get("/i18n/fragments/homePage/browserSupportAlert.jsp",function(data){$j("#browserAlertsMessage").append(data);$browserAlertsContainer.show()})}else if(AAUI.isIeAndCompatibilityMode()===true){$j.get("/i18n/fragments/homePage/ieCompatibilityViewAlert.jsp",function(data){$j("#browserAlertsMessage").append(data);$browserAlertsContainer.show()})}if(!$j.aaCookie.enabled()){$j.get("/i18n/fragments/homePage/cookieSupportAlert.jsp?locale="+AAUI.getProperty("user.locale"),function(data){$j("#cookieAlertsMessage").append(data);$cookieAlertsContainer.show()})}};
//# sourceMappingURL=common-setup.min.js.map
