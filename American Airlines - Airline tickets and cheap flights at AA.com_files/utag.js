//tealium universal tag - utag.260 ut4.0.201708250304, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.escapefn=function(obj){var escape=window.encodeURIComponent||window.escape;for(property in obj){if(obj.hasOwnProperty(property)){obj[property]=escape(obj[property]);}}
return obj;};u.ev={"view":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={"page_name":"act.page_name,cp.page_name","channel":"act.channel,cp.channel","site_indicator":"act.site_indicator,cp.site_indicator","site_language":"act.site_language,cp.site_language","site_country":"act.site_country,cp.site_country","tealium_environment":"act.environment,cp.environment","versa_region":"act.site_region,cp.site_region","preferences_profile_process":"act.profile_path,cp.profile_path","aaction":"act.citibank_cards","email_subscription_types":"act.eml_opt_in","email_unsubscribe_types":"act.eml_opt_out","login_status":"act.login_status","time_stamp_date":"act.time_stamp_date","time_stamp_time":"act.time_stamp_time","cp.utag_main_loytir":"act.loyalty_tier"};u.extend=[function(a,b){if(window.location.href.indexOf("i18n/travelInformation/destinationInformation/auckland")>-1){b.page_name=jQuery("title").text();}
if(window.location.href.indexOf("i18n/urls/moreasia.jsp")>-1){b.page_name=jQuery("title").text();}
if(window.location.href.indexOf("i18n/promo/upgraded-travel.jsp")>-1){b.page_name=jQuery("title").text();}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"id":"4308","sync":0,"dispType":"js","ptcl":document.location.protocol==="https:"?"https":"http","bsUrl":"bs.serving-sys.com/BurstingPipe","mobile":0,"activityParams":{},"retargetParams":{},"dynamicRetargetParams":{},"conditionalParams":{},"base_url":(document.location.protocol=="https:"?"https://secure-":"http://")+"ds.serving-sys.com/SemiCachedScripts/ebOneTag.js","Session":b["cp.utag_main_ses_id"],"ActivityID":"","url":b["dom.url"],"order_id":"","product_id":[],"product_name":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("rtp.")===0){u.data.retargetParams[e[f].substr(4)]=b[d];}else if(e[f].indexOf("drtp.")===0){u.data.dynamicRetargetParams[e[f].substr(5)]=b[d];}else if(e[f].indexOf("cp.")===0){u.data.conditionalParams[e[f].substr(3)]=b[d];}else if(e[f].indexOf("act.")===0){u.data.activityParams[e[f].substr(4)]=b[d];}else{u.data[e[f]]=b[d];}}}}
u.data.order_id=u.data.orderId||u.data.order_id||b._corder||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.activityParams.Session=u.data.Session;u.data.activityParams.ActivityID=u.data.ActivityID;if(u.data.order_id){u.data.activityParams.OrderID=u.data.order_id;}
if(u.data.product_unit_price.length>0){u.data.activityParams.Value=u.data.product_unit_price.join("|");}
if(u.data.product_id.length>0){u.data.activityParams.productid=u.data.product_id.join("|");}
if(u.data.product_name.length>0){u.data.activityParams.productinfo=u.data.product_name.join("|");}
if(u.data.product_quantity.length>0){u.data.activityParams.Quantity=u.data.product_quantity.join("|");}
if(!/^https?:\/\//i.test(u.data.url)){u.data.url=u.data.ptcl+"://"+u.data.url;}
u.data.activityParams=u.escapefn(u.data.activityParams);u.data.retargetParams=u.escapefn(u.data.retargetParams);u.data.dynamicRetargetParams=u.escapefn(u.data.dynamicRetargetParams);u.data.conditionalParams=u.escapefn(u.data.conditionalParams);u.loader_cb=function(a,b){var d,vt=window.versaTagObj;if('view'===a){vt._oneTagObj.id=u.data.id||vt._oneTagObj.id;vt._oneTagObj.sync=u.data.sync||vt._oneTagObj.sync;vt._oneTagObj.dispType=u.data.dispType||vt._oneTagObj.dispType;vt._oneTagObj.ptcl=u.data.ptcl||vt._oneTagObj.ptcl;vt._oneTagObj.bsUrl=u.data.bsUrl||vt._oneTagObj.bsUrl;vt._oneTagObj.mobile=u.data.mobile||vt._oneTagObj.mobile;}
vt.clearActivityParam();for(d in utag.loader.GV(u.data.activityParams)){vt.setActivityParam(d,u.data.activityParams[d]);}
vt.clearRetargetParam();for(d in utag.loader.GV(u.data.retargetParams)){vt.setRetargetParam(d,u.data.retargetParams[d]);}
vt.clearDynamicRetargetParam();for(d in utag.loader.GV(u.data.dynamicRetargetParams)){vt.setDynamicRetargetParam(d,u.data.dynamicRetargetParams[d]);}
vt.clearConditionalParam();for(d in utag.loader.GV(u.data.conditionalParams)){vt.setConditionalParam(d,u.data.conditionalParams[d]);}
vt.generateRequest(u.data.url);};u.callBack=function(){u.initialized=true;var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b);}};if(u.initialized){u.loader_cb(a,b);}else{u.queue.push({"data":u.data,"a":a,"b":b});if(!u.scriptrequested){u.scriptrequested=true;u.queue.shift();window.versaTag={"id":u.data.id,"sync":u.data.sync,"dispType":u.data.dispType,"ptcl":u.data.ptcl,"bsUrl":u.data.bsUrl,"mobile":u.data.mobile,"activityParams":u.data.activityParams,"retargetParams":u.data.retargetParams,"dynamicRetargetParams":u.data.dynamicRetargetParams,"conditionalParams":u.data.conditionalParams};utag.ut.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"ebOneTagUrlId"});}}
}};utag.o[loader].loader.LOAD(id);}("260","aa.main"));}catch(error){utag.DB(error);}