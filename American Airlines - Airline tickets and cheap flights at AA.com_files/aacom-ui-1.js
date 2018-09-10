"use strict";/**
*  UI-REFACTORED
*    FROM --> ./legacy-web/src/main/js/js/aa/common/aacom-ui-1.0.0.js
*    TO   --> ./webapps/shared-web/src/main/assets/js/common/aacom-ui-1.0.0.js
**//*
 * Sandbox for the aa.com application
 * Following sandbox pattern by Stoyan Stefanov
 * AAcom will contruct the sandbox (AAUI) for our application
 */function AAcom(){// Turn arguments into an array
var args=Array.prototype.slice.call(arguments),// The last argument is the callback
callback=args.pop(),// Required modules can be passed as an array or as individual parameters
modules=args[0]&&typeof args[0]==="string"?args:args[0],i;// Make sure AAcom is called as a constructor
if(!(this instanceof AAcom)){return new AAcom(modules,callback)}// Add modules to the core 'this' object - no modules or "*" both mean "use
// all modules"
if(!modules||modules=="*"){modules=[];for(i in AAcom.modules){if(AAcom.modules.hasOwnProperty(i)){modules.push(i)}}}// Initialize the required modules
for(i=0;i<modules.length;i+=1){AAcom.modules[modules[i]](this)}callback(this)}// Add properties to the prototype as needed
AAcom.prototype={// private fields
_name:"AACom Sandbox",_version:"1.0.0",_vars:{},// public API
getName:function getName(){return this._name},getVersion:function getVersion(){return this._version},getProperty:function getProperty(key){return this._vars[key]},setProperty:function setProperty(obj){for(var key in obj){if(!(key in this._vars)){this._vars[key]=obj[key]}}}};// Static property of AAcom to contain our modules
AAcom.modules={};
//# sourceMappingURL=aacom-ui-1.0.0.min.js.map
