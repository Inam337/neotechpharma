/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 23-11-2015
 */!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";function b(a){void 0===a&&(a=window.navigator.userAgent),a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(iemobile)[\/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(windows phone)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[],d={},e={browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""};if(e.browser&&(d[e.browser]=!0,d.version=e.version,d.versionNumber=parseInt(e.versionNumber,10)),e.platform&&(d[e.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.iemobile){var f="msie";e.browser=f,d[f]=!0}if(d.edge){delete d.edge;var g="msedge";e.browser=g,d[g]=!0}if(d.safari&&d.blackberry){var h="blackberry";e.browser=h,d[h]=!0}if(d.safari&&d.playbook){var i="playbook";e.browser=i,d[i]=!0}if(d.bb){var j="blackberry";e.browser=j,d[j]=!0}if(d.opr){var k="opera";e.browser=k,d[k]=!0}if(d.safari&&d.android){var l="android";e.browser=l,d[l]=!0}if(d.safari&&d.kindle){var m="kindle";e.browser=m,d[m]=!0}if(d.safari&&d.silk){var n="silk";e.browser=n,d[n]=!0}return d.name=e.browser,d.platform=e.platform,d}return window.jQBrowser=b(window.navigator.userAgent),window.jQBrowser.uaMatch=b,a&&(a.browser=window.jQBrowser),window.jQBrowser});

/* ----------------------------------------------------------------- */

var android 	= $.browser.android;
var blackberry 	= $.browser.blackberry;
var cros 		= $.browser.cros;
var ipad		= $.browser.ipad;
var iphone 		= $.browser.iphone;
var ipod		= $.browser.ipod;
var kindle		= $.browser.kindle;
var linux 		= $.browser.linux;
var mac 		= $.browser.mac;
var msedge		= $.browser.msedge;
var playbook	= $.browser.playbook;
var silk		= $.browser.silk;
var win 		= $.browser.win;
var windowsphone = $.browser["windows phone"];
			
var userversion     = $.browser.versionNumber; //detected user browser

/* ----------------------------------------------------------------- */
			
if (android == true) { 
	
	$("html").addClass("android"); 
			
	
} else if (blackberry == true) {
	
	$("html").addClass("blackberry"); 
	
} else if (cros == true) {
	
	$("html").addClass("cros");
	
} else if (ipad == true) {
	
	$("html").addClass("ipad");
	
} else if (iphone == true) {
	
	$("html").addClass("iphone");
	
} else if (ipod == true) {
	
	$("html").addClass("ipod");
	
} else if (kindle == true) {
	
	$("html").addClass("kindle");
	
} else if (linux == true) {
	
	$("html").addClass("linux");
	
} else if (mac == true) {
	
	$("html").addClass("mac");
	
} else if (msedge == true) {
	
	$("html").addClass("msedge");
	
} else if (playbook == true) {
	
	$("html").addClass("playbook");
	
} else if (silk == true) {
	
	$("html").addClass("silk");
	
} else if (win == true) {
	
	$("html").addClass("win");
	
} else if (windowsphone == true) {
	
	$("html").addClass("windowsphone");
	
} else {}

$("html").addClass("" + "v-" + userversion + "");

// EXTENDED FOR BROWSER NAME

(function(name, definition) {

  if (typeof define === 'function' && define.amd) { // AMD
    define(name,[],definition);
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = definition();
  } else { // Browser
    var theModule = definition(),
      global = this,
      old = global[name];
    theModule.noConflict = function() {
      global[name] = old;
      return theModule;
    };
    global[name] = theModule;
  }
})('browserDetection', function() {

  "use strict";

  return function(options) {

    var data = {};
    var browser = null;
    var version = null;
    var os = null;
    var webkit = null;

    parseUserAgent();

    // exception rules
    renameOsx();
    cutSafariVersion();

    prepareData();
    processOptions();

    return data;

    function parseUserAgent() {
      var userAgent = navigator.userAgent.toLowerCase(),
        browserParts = /(ie|firefox|chrome|safari|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent),
        osParts = /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(userAgent);

      if ( !! userAgent.match(/trident\/7\./)) {
        browser = "ie";
        version = 11;
      } else if (browserParts && browserParts.length > 2) {
        browser = browserParts[1];
        version = browserParts[2];
      }

      if (osParts && osParts.length > 1) {
        os = osParts[1];
      }

      webkit = navigator.userAgent.toLowerCase().match(/webkit\/(\d+)\.(\d+)\.(\d+)/);
    }

    function prepareData() {
      data.browser = browser;
      data.version = parseInt(version, 10) || null;
      data.os = os;
      if (webkit && webkit.length >= 3) {
        data.webkit = {
          major: parseInt(webkit[1], 10),
          minor: parseInt(webkit[2], 10),
          patch: webkit[3] ? parseInt(webkit[3], 10) : undefined
        };
      }
    }

    function renameOsx() {
      if (os === 'mac') {
        os = 'osx';
      }
    }

    function cutSafariVersion() {
      if (os === 'safari') {
        version = version.substring(0, 1);
      }
    }

    function processOptions() {
      options = options || {};

      if (options.addClasses && data.os && data.browser && data.version) {
        document.body.parentNode.className += ' ' + data.os + ' ' + data.browser + ' ' + data.browser + '-' + data.version;
      }
    }

  };

});

var browserdata = browserDetection();

$('html').addClass(browserdata.browser);