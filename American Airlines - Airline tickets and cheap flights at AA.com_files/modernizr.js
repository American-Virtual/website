/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-cookies-eventlistener-forcetouch-geolocation-hiddenscroll-history-input-inputtypes-intl-performance-queryselector-serviceworker-svg-templatestrings-touchevents-websockets-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(window,document,undefined){var tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(test,cb){var self=this;setTimeout(function(){cb(self[test])},0)},addTest:function(name,fn,options){tests.push({name:name,fn:fn,options:options})},addAsyncTest:function(fn){tests.push({name:null,fn:fn})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[];function is(obj,type){return typeof obj===type}function testRunner(){var featureNames,feature,aliasIdx,result,nameIdx,featureNameSplit;for(var featureIdx in tests)if(tests.hasOwnProperty(featureIdx)){if(featureNames=[],(feature=tests[featureIdx]).name&&(featureNames.push(feature.name.toLowerCase()),feature.options&&feature.options.aliases&&feature.options.aliases.length))for(aliasIdx=0;aliasIdx<feature.options.aliases.length;aliasIdx++)featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());for(result=is(feature.fn,"function")?feature.fn():feature.fn,nameIdx=0;nameIdx<featureNames.length;nameIdx++)1===(featureNameSplit=featureNames[nameIdx].split(".")).length?Modernizr[featureNameSplit[0]]=result:(!Modernizr[featureNameSplit[0]]||Modernizr[featureNameSplit[0]]instanceof Boolean||(Modernizr[featureNameSplit[0]]=new Boolean(Modernizr[featureNameSplit[0]])),Modernizr[featureNameSplit[0]][featureNameSplit[1]]=result),classes.push((result?"":"no-")+featureNameSplit.join("-"))}}var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase();function setClasses(classes){var className=docElement.className,classPrefix=Modernizr._config.classPrefix||"";if(isSVG&&(className=className.baseVal),Modernizr._config.enableJSClass){var reJS=new RegExp("(^|\\s)"+classPrefix+"no-js(\\s|$)");className=className.replace(reJS,"$1"+classPrefix+"js$2")}Modernizr._config.enableClasses&&(className+=" "+classPrefix+classes.join(" "+classPrefix),isSVG?docElement.className.baseVal=className:docElement.className=className)}var omPrefixes="Moz O ms Webkit",domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""],hasOwnProp,_hasOwnProperty;function addTest(feature,test){if("object"==typeof feature)for(var key in feature)hasOwnProp(feature,key)&&addTest(key,feature[key]);else{var featureNameSplit=(feature=feature.toLowerCase()).split("."),last=Modernizr[featureNameSplit[0]];if(2==featureNameSplit.length&&(last=last[featureNameSplit[1]]),void 0!==last)return Modernizr;test="function"==typeof test?test():test,1==featureNameSplit.length?Modernizr[featureNameSplit[0]]=test:(!Modernizr[featureNameSplit[0]]||Modernizr[featureNameSplit[0]]instanceof Boolean||(Modernizr[featureNameSplit[0]]=new Boolean(Modernizr[featureNameSplit[0]])),Modernizr[featureNameSplit[0]][featureNameSplit[1]]=test),setClasses([(test&&0!=test?"":"no-")+featureNameSplit.join("-")]),Modernizr._trigger(feature,test)}return Modernizr}ModernizrProto._prefixes=prefixes,_hasOwnProperty={}.hasOwnProperty,hasOwnProp=is(_hasOwnProperty,"undefined")||is(_hasOwnProperty.call,"undefined")?function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}:function(object,property){return _hasOwnProperty.call(object,property)},ModernizrProto._l={},ModernizrProto.on=function(feature,cb){this._l[feature]||(this._l[feature]=[]),this._l[feature].push(cb),Modernizr.hasOwnProperty(feature)&&setTimeout(function(){Modernizr._trigger(feature,Modernizr[feature])},0)},ModernizrProto._trigger=function(feature,res){if(this._l[feature]){var cbs=this._l[feature];setTimeout(function(){var i;for(i=0;i<cbs.length;i++)(0,cbs[i])(res)},0),delete this._l[feature]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(prop){var rule,length=prefixes.length,cssrule=window.CSSRule;if(void 0===cssrule)return undefined;if(!prop)return!1;if((rule=(prop=prop.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in cssrule)return"@"+prop;for(var i=0;i<length;i++){var prefix=prefixes[i];if(prefix.toUpperCase()+"_"+rule in cssrule)return"@-"+prefix.toLowerCase()+"-"+prop}return!1};function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}ModernizrProto.atRule=atRule;var hasEvent=(needsFallback=!("onblur"in document.documentElement),function(eventName,element){var isSupported;return!!eventName&&(element&&"string"!=typeof element||(element=createElement(element||"div")),!(isSupported=(eventName="on"+eventName)in element)&&needsFallback&&(element.setAttribute||(element=createElement("div")),element.setAttribute(eventName,""),isSupported="function"==typeof element[eventName],element[eventName]!==undefined&&(element[eventName]=undefined),element.removeAttribute(eventName)),isSupported)}),needsFallback;function getBody(){var body=document.body;return body||((body=createElement(isSVG?"svg":"body")).fake=!0),body}function injectElementWithStyles(rule,callback,nodes,testnames){var style,ret,node,docOverflow,mod="modernizr",div=createElement("div"),body=getBody();if(parseInt(nodes,10))for(;nodes--;)(node=createElement("div")).id=testnames?testnames[nodes]:mod+(nodes+1),div.appendChild(node);return(style=createElement("style")).type="text/css",style.id="s"+mod,(body.fake?body:div).appendChild(style),body.appendChild(div),style.styleSheet?style.styleSheet.cssText=rule:style.appendChild(document.createTextNode(rule)),div.id=mod,body.fake&&(body.style.background="",body.style.overflow="hidden",docOverflow=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(body)),ret=callback(div,rule),body.fake?(body.parentNode.removeChild(body),docElement.style.overflow=docOverflow,docElement.offsetHeight):div.parentNode.removeChild(div),!!ret}ModernizrProto.hasEvent=hasEvent;var mq=(matchMedia=window.matchMedia||window.msMatchMedia,matchMedia?function(mq){var mql=matchMedia(mq);return mql&&mql.matches||!1}:function(mq){var bool=!1;return injectElementWithStyles("@media "+mq+" { #modernizr { position: absolute; } }",function(node){bool="absolute"==(window.getComputedStyle?window.getComputedStyle(node,null):node.currentStyle).position}),bool}),matchMedia;function contains(str,substr){return!!~(""+str).indexOf(substr)}ModernizrProto.mq=mq;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};function domToCSS(name){return name.replace(/([A-Z])/g,function(str,m1){return"-"+m1.toLowerCase()}).replace(/^ms-/,"-ms-")}function computedStyle(elem,pseudo,prop){var result;if("getComputedStyle"in window){result=getComputedStyle.call(window,elem,pseudo);var console=window.console;if(null!==result)prop&&(result=result.getPropertyValue(prop));else if(console)console[console.error?"error":"log"].call(console,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else result=!pseudo&&elem.currentStyle&&elem.currentStyle[prop];return result}function nativeTestProps(props,value){var i=props.length;if("CSS"in window&&"supports"in window.CSS){for(;i--;)if(window.CSS.supports(domToCSS(props[i]),value))return!0;return!1}if("CSSSupportsRule"in window){for(var conditionText=[];i--;)conditionText.push("("+domToCSS(props[i])+":"+value+")");return injectElementWithStyles("@supports ("+(conditionText=conditionText.join(" or "))+") { #modernizr { position: absolute; } }",function(node){return"absolute"==computedStyle(node,null,"position")})}return undefined}function cssToDOM(name){return name.replace(/([a-z])-([a-z])/g,function(str,m1,m2){return m1+m2.toUpperCase()}).replace(/^-/,"")}function testProps(props,prefixed,value,skipValueTest){if(skipValueTest=!is(skipValueTest,"undefined")&&skipValueTest,!is(value,"undefined")){var result=nativeTestProps(props,value);if(!is(result,"undefined"))return result}for(var afterInit,i,propsLength,prop,before,elems=["modernizr","tspan","samp"];!mStyle.style&&elems.length;)afterInit=!0,mStyle.modElem=createElement(elems.shift()),mStyle.style=mStyle.modElem.style;function cleanElems(){afterInit&&(delete mStyle.style,delete mStyle.modElem)}for(propsLength=props.length,i=0;i<propsLength;i++)if(prop=props[i],before=mStyle.style[prop],contains(prop,"-")&&(prop=cssToDOM(prop)),mStyle.style[prop]!==undefined){if(skipValueTest||is(value,"undefined"))return cleanElems(),"pfx"!=prefixed||prop;try{mStyle.style[prop]=value}catch(e){}if(mStyle.style[prop]!=before)return cleanElems(),"pfx"!=prefixed||prop}return cleanElems(),!1}function fnBind(fn,that){return function(){return fn.apply(that,arguments)}}function testDOMProps(props,obj,elem){var item;for(var i in props)if(props[i]in obj)return!1===elem?props[i]:is(item=obj[props[i]],"function")?fnBind(item,elem||obj):item;return!1}function testPropsAll(prop,prefixed,elem,value,skipValueTest){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");return is(prefixed,"string")||is(prefixed,"undefined")?testProps(props,prefixed,value,skipValueTest):testDOMProps(props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" "),prefixed,elem)}Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(prop,obj,elem){return 0===prop.indexOf("@")?atRule(prop):(-1!=prop.indexOf("-")&&(prop=cssToDOM(prop)),obj?testPropsAll(prop,obj,elem):testPropsAll(prop,"pfx"))},prefixedCSS=ModernizrProto.prefixedCSS=function(prop){var prefixedProp=prefixed(prop);return prefixedProp&&domToCSS(prefixedProp)},prefixedCSSValue=function(prop,value){var result=!1,style=createElement("div").style;if(prop in style){var i=domPrefixes.length;for(style[prop]=value,result=style[prop];i--&&!result;)style[prop]="-"+domPrefixes[i]+"-"+value,result=style[prop]}return""===result&&(result=!1),result};function testAllProps(prop,value,skipValueTest){return testPropsAll(prop,undefined,undefined,value,skipValueTest)}ModernizrProto.prefixedCSSValue=prefixedCSSValue,ModernizrProto.testAllProps=testAllProps;var testProp=ModernizrProto.testProp=function(prop,value,useValue){return testProps([prop],undefined,value,useValue)},testStyles=ModernizrProto.testStyles=injectElementWithStyles,html5;isSVG||function(window,document){var supportsHtml5Styles,supportsUnknownElements,options=window.html5||{},reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,expando="_html5shiv",expanID=0,expandoData={};function getElements(){var elements=html5.elements;return"string"==typeof elements?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];return data||(data={},expanID++,ownerDocument[expando]=expanID,expandoData[expanID]=data),data}function createElement(nodeName,ownerDocument,data){return ownerDocument||(ownerDocument=document),supportsUnknownElements?ownerDocument.createElement(nodeName):(data||(data=getExpandoData(ownerDocument)),!(node=data.cache[nodeName]?data.cache[nodeName].cloneNode():saveClones.test(nodeName)?(data.cache[nodeName]=data.createElem(nodeName)).cloneNode():data.createElem(nodeName)).canHaveChildren||reSkip.test(nodeName)||node.tagUrn?node:data.frag.appendChild(node));var node}function shivDocument(ownerDocument){ownerDocument||(ownerDocument=document);var data=getExpandoData(ownerDocument);return!html5.shivCSS||supportsHtml5Styles||data.hasCSS||(data.hasCSS=!!function(ownerDocument,cssText){var p=ownerDocument.createElement("p"),parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;return p.innerHTML="x<style>"+cssText+"</style>",parent.insertBefore(p.lastChild,parent.firstChild)}(ownerDocument,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),supportsUnknownElements||function(ownerDocument,data){data.cache||(data.cache={},data.createElem=ownerDocument.createElement,data.createFrag=ownerDocument.createDocumentFragment,data.frag=data.createFrag()),ownerDocument.createElement=function(nodeName){return html5.shivMethods?createElement(nodeName,ownerDocument,data):data.createElem(nodeName)},ownerDocument.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+getElements().join().replace(/[\w\-:]+/g,function(nodeName){return data.createElem(nodeName),data.frag.createElement(nodeName),'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}(ownerDocument,data),ownerDocument}!function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>",supportsHtml5Styles="hidden"in a,supportsUnknownElements=1==a.childNodes.length||function(){document.createElement("a");var frag=document.createDocumentFragment();return void 0===frag.cloneNode||void 0===frag.createDocumentFragment||void 0===frag.createElement}()}catch(e){supportsUnknownElements=supportsHtml5Styles=!0}}();var html5={elements:options.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==options.shivCSS,supportsUnknownElements:supportsUnknownElements,shivMethods:!1!==options.shivMethods,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:function(ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createDocumentFragment();for(var clone=(data=data||getExpandoData(ownerDocument)).frag.cloneNode(),i=0,elems=getElements(),l=elems.length;i<l;i++)clone.createElement(elems[i]);return clone},addElements:function(newElements,ownerDocument){var elements=html5.elements;"string"!=typeof elements&&(elements=elements.join(" ")),"string"!=typeof newElements&&(newElements=newElements.join(" ")),html5.elements=elements+" "+newElements,shivDocument(ownerDocument)}};window.html5=html5,shivDocument(document),"object"==typeof module&&module.exports&&(module.exports=html5)}(void 0!==window?window:this,document),
/*!
{
  "name": "Cookies",
  "property": "cookies",
  "tags": ["storage"],
  "authors": ["tauren"]
}
!*/
Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var ret=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",ret}catch(e){return!1}}),
/*!
{
  "name": "Event Listener",
  "property": "eventlistener",
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
  }],
  "polyfills": ["eventlistener"]
}
!*/
Modernizr.addTest("eventlistener","addEventListener"in window),
/*!
{
  "name": "Force Touch Events",
  "property": "forcetouch",
  "authors": ["Kraig Walker"],
  "notes": [{
    "name": "Responding to Force Touch Events from JavaScript",
    "href": "https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/RespondingtoForceTouchEventsfromJavaScript.html"
  }]
}
!*/
Modernizr.addTest("forcetouch",function(){return!!hasEvent(prefixed("mouseforcewillbegin",window,!1),window)&&(MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)}),
/*!
{
  "name": "Geolocation API",
  "property": "geolocation",
  "caniuse": "geolocation",
  "tags": ["media"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
  }],
  "polyfills": [
    "joshuabell-polyfill",
    "webshims",
    "geo-location-javascript",
    "geolocation-api-polyfill"
  ]
}
!*/
Modernizr.addTest("geolocation","geolocation"in navigator),
/*!
{
  "name": "Hidden Scrollbar",
  "property": "hiddenscroll",
  "authors": ["Oleg Korsunsky"],
  "tags": ["overlay"],
  "notes": [{
    "name": "Overlay Scrollbar description",
    "href": "https://developer.apple.com/library/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_7.html#//apple_ref/doc/uid/TP40010355-SW39"
  },{
    "name": "Video example of overlay scrollbars",
    "href": "https://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
  }]
}
!*/
Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(elem){return elem.offsetWidth===elem.clientWidth})}),
/*!
{
  "name": "History API",
  "property": "history",
  "caniuse": "history",
  "tags": ["history"],
  "authors": ["Hay Kranen", "Alexander Farkas"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
  }],
  "polyfills": ["historyjs", "html5historyapi"]
}
!*/
Modernizr.addTest("history",function(){var ua=navigator.userAgent;return(-1===ua.indexOf("Android 2.")&&-1===ua.indexOf("Android 4.0")||-1===ua.indexOf("Mobile Safari")||-1!==ua.indexOf("Chrome")||-1!==ua.indexOf("Windows Phone")||"file:"===location.protocol)&&(window.history&&"pushState"in window.history)});var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};
/*!
{
  "name": "Input attributes",
  "property": "input",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "notes": [{
    "name": "WHATWG spec",
    "href": "https://html.spec.whatwg.org/multipage/forms.html#input-type-attr-summary"
  }],
  "knownBugs": ["Some blackberry devices report false positive for input.multiple"]
}
!*/Modernizr.input=function(props){for(var i=0,len=props.length;i<len;i++)attrs[props[i]]=!!(props[i]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs);
/*!
{
  "name": "Form input types",
  "property": "inputtypes",
  "caniuse": "forms",
  "tags": ["forms"],
  "authors": ["Mike Taylor"],
  "polyfills": [
    "jquerytools",
    "webshims",
    "h5f",
    "webforms2",
    "nwxforms",
    "fdslider",
    "html5slider",
    "galleryhtml5forms",
    "jscolor",
    "html5formshim",
    "selectedoptionsjs",
    "formvalidationjs"
  ]
}
!*/
var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(props){for(var inputElemType,defaultView,bool,len=props.length,i=0;i<len;i++)inputElem.setAttribute("type",inputElemType=props[i]),(bool="text"!==inputElem.type&&"style"in inputElem)&&(inputElem.value="1)",inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),bool=(defaultView=document.defaultView).getComputedStyle&&"textfield"!==defaultView.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(inputElemType)||(bool=/^(url|email)$/.test(inputElemType)?inputElem.checkValidity&&!1===inputElem.checkValidity():"1)"!=inputElem.value)),inputs[props[i]]=!!bool;return inputs}(inputtypes),
/*!
 {
 "name": "Internationalization API",
 "property": "intl",
 "notes": [{
 "name": "MDN documentation",
 "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
 },{
 "name": "ECMAScript spec",
 "href": "http://www.ecma-international.org/ecma-402/1.0/"
 }]
 }
 !*/
Modernizr.addTest("intl",!!prefixed("Intl",window)),
/*!
{
  "name": "Navigation Timing API",
  "property": "performance",
  "caniuse": "nav-timing",
  "tags": ["performance"],
  "authors": ["Scott Murphy (@uxder)"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/navigation-timing/"
  },{
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
  }],
  "polyfills": ["perfnow"]
}
!*/
Modernizr.addTest("performance",!!prefixed("performance",window)),
/*!
{
  "name": "QuerySelector",
  "property": "queryselector",
  "caniuse": "queryselector",
  "tags": ["queryselector"],
  "authors": ["Andrew Betts (@triblondon)"],
  "notes": [{
    "name" : "W3C Selectors reference",
    "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
  }],
  "polyfills": ["css-selector-engine"]
}
!*/
Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),
/*!
{
  "name": "ServiceWorker API",
  "property": "serviceworker",
  "notes": [{
    "name": "ServiceWorkers Explained",
    "href": "https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md"
  }]
}
!*/
Modernizr.addTest("serviceworker","serviceWorker"in navigator),
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),
/*!
{
  "name": "Template strings",
  "property": "templatestrings",
  "notes": [{
    "name": "MDN Reference",
    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility"
  }]
}
!*/
Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),
/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/
Modernizr.addTest("touchevents",function(){var bool;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)bool=!0;else{var query=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(query,function(node){bool=9===node.offsetTop})}return bool});
/*!
{
  "name": "WebSockets Support",
  "property": "websockets",
  "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
  "caniuse": "websockets",
  "tags": ["html5"],
  "warnings": [
    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
  ],
  "notes": [{
    "name": "CLOSING State and Spec",
    "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
  }],
  "polyfills": [
    "sockjs",
    "socketio",
    "kaazing-websocket-gateway",
    "websocketjs",
    "atmosphere",
    "graceful-websocket",
    "portal",
    "datachannel"
  ]
}
!*/
var supports=!1;try{supports="WebSocket"in window&&2===window.WebSocket.CLOSING}catch(e){}Modernizr.addTest("websockets",supports),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);