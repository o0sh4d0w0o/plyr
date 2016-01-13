!function(e,t){"use strict";"function"==typeof define&&define.amd?define(null,t):"object"==typeof module?module.exports=t():e.plyr=t()}(this,function(){"use strict";function e(){var e=['<div class="plyr__controls">','<div class="plyr__progress">','<label for="seek{id}" class="plyr__sr-only">Seek</label>','<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.5" value="0" data-plyr="seek">','<progress class="plyr__progress--played" max="100" value="0">',"<span>0</span>% "+S.i18n.played,"</progress>",'<progress class="plyr__progress--buffer" max="100" value="0">',"<span>0</span>% "+S.i18n.buffered,"</progress>","</div>",'<span class="plyr__controls--left">'];return a(S.controls,"restart")&&e.push('<button type="button" data-plyr="restart">','<svg><use xlink:href="#'+S.iconPrefix+'-restart" /></svg>','<span class="plyr__sr-only">'+S.i18n.restart+"</span>","</button>"),a(S.controls,"rewind")&&e.push('<button type="button" data-plyr="rewind">','<svg><use xlink:href="#'+S.iconPrefix+'-rewind" /></svg>','<span class="plyr__sr-only">'+S.i18n.rewind+"</span>","</button>"),a(S.controls,"play")&&e.push('<button type="button" data-plyr="play">','<svg><use xlink:href="#'+S.iconPrefix+'-play" /></svg>','<span class="plyr__sr-only">'+S.i18n.play+"</span>","</button>",'<button type="button" data-plyr="pause">','<svg><use xlink:href="#'+S.iconPrefix+'-pause" /></svg>','<span class="plyr__sr-only">'+S.i18n.pause+"</span>","</button>"),a(S.controls,"fast-forward")&&e.push('<button type="button" data-plyr="fast-forward">','<svg><use xlink:href="#'+S.iconPrefix+'-fast-forward" /></svg>','<span class="plyr__sr-only">'+S.i18n.forward+"</span>","</button>"),a(S.controls,"current-time")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+S.i18n.currentTime+"</span>",'<span class="plyr__time--current">00:00</span>',"</span>"),a(S.controls,"duration")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+S.i18n.duration+"</span>",'<span class="plyr__time--duration">00:00</span>',"</span>"),e.push("</span>",'<span class="plyr__controls--right">'),a(S.controls,"mute")&&e.push('<button type="button" data-plyr="mute">','<svg class="icon--muted"><use xlink:href="#'+S.iconPrefix+'-muted" /></svg>','<svg><use xlink:href="#'+S.iconPrefix+'-volume" /></svg>','<span class="plyr__sr-only">'+S.i18n.toggleMute+"</span>","</button>"),a(S.controls,"volume")&&e.push('<label for="volume{id}" class="plyr__sr-only">'+S.i18n.volume+"</label>",'<input id="volume{id}" class="plyr__volume" type="range" min="0" max="10" value="5" data-plyr="volume">'),a(S.controls,"captions")&&e.push('<button type="button" data-plyr="captions">','<svg class="icon--captions-on"><use xlink:href="#'+S.iconPrefix+'-captions-on" /></svg>','<svg><use xlink:href="#'+S.iconPrefix+'-captions-off" /></svg>','<span class="plyr__sr-only">'+S.i18n.toggleCaptions+"</span>","</button>"),a(S.controls,"fullscreen")&&e.push('<button type="button" data-plyr="fullscreen">','<svg class="icon--exit-fullscreen"><use xlink:href="#'+S.iconPrefix+'-exit-fullscreen" /></svg>','<svg><use xlink:href="#'+S.iconPrefix+'-enter-fullscreen" /></svg>','<span class="plyr__sr-only">'+S.i18n.toggleFullscreen+"</span>","</button>"),e.push("</span>","</div>"),e.join("")}function t(e,t){S.debug&&window.console&&console[t?"error":"log"](e)}function n(){var e,t,n,r=navigator.userAgent,o=navigator.appName,a=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(o="IE",a="11;"):-1!==(t=r.indexOf("MSIE"))?(o="IE",a=r.substring(t+5)):-1!==(t=r.indexOf("Chrome"))?(o="Chrome",a=r.substring(t+7)):-1!==(t=r.indexOf("Safari"))?(o="Safari",a=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(a=r.substring(t+8))):-1!==(t=r.indexOf("Firefox"))?(o="Firefox",a=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(o=r.substring(e,t),a=r.substring(t+1),o.toLowerCase()==o.toUpperCase()&&(o=navigator.appName)),-1!==(n=a.indexOf(";"))&&(a=a.substring(0,n)),-1!==(n=a.indexOf(" "))&&(a=a.substring(0,n)),s=parseInt(""+a,10),isNaN(s)&&(a=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10)),{name:o,version:s,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform),touch:"ontouchstart"in document.documentElement}}function r(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function o(e){if(!document.querySelectorAll('script[src="'+e+'"]').length){var t=document.createElement("script");t.src=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}function a(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function s(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function i(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,o=e[n],a=o.parentNode,s=o.nextSibling;r.appendChild(o),s?a.insertBefore(r,s):a.appendChild(r)}}function l(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function u(e){e.parentNode.removeChild(e)}function c(e,t){e.insertBefore(t,e.firstChild)}function p(e,t){for(var n in t)e.setAttribute(n,"boolean"==typeof t[n]&&t[n]?"":t[n])}function d(e,t,n){var r=document.createElement(e);p(r,n),c(t,r)}function m(e){return e.replace(".","")}function f(e,t,n){e&&e.classList[n?"add":"remove"](t)}function y(e,t){return e?e.classList.contains(t):!1}function b(e,t,n,r){var o=t.split(" ");if(e instanceof NodeList)for(var a=0;a<e.length;a++)e[a]instanceof Node&&b(e[a],arguments[1],arguments[2],arguments[3]);else for(var s=0;s<o.length;s++)e[r?"addEventListener":"removeEventListener"](o[s],n,!1)}function v(e,t,n){e&&b(e,t,n,!0)}function g(e,t,n){e&&b(e,t,n,!1)}function h(e,t){if(e&&t){var n=document.createEvent("MouseEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}}function w(e,t){return e?(t="boolean"==typeof t?t:!e.getAttribute("aria-pressed"),e.setAttribute("aria-pressed",t),t):void 0}function k(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function T(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},T(e[n],t[n])):e[n]=t[n];return e}function x(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++){if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=document.body),this.prefix){case"":return document.fullscreenElement==e;case"moz":return document.mozFullScreenElement==e;default:return document[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return"undefined"==typeof e&&(e=document.body),""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]()},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),e}function _(){var e={supported:function(){if(!("localStorage"in window))return!1;try{window.localStorage.setItem("___test","OK");var e=window.localStorage.getItem("___test");return window.localStorage.removeItem("___test"),"OK"===e}catch(t){return!1}return!1}()};return e}function F(T){function F(e){if(!he.usingTextTracks&&"video"===he.type&&he.supported.full&&(he.subcount=0,e="number"==typeof e?e:he.media.currentTime,he.captions[he.subcount])){for(;P(he.captions[he.subcount][0])<e.toFixed(1);)if(he.subcount++,he.subcount>he.captions.length-1){he.subcount=he.captions.length-1;break}if(he.media.currentTime.toFixed(1)>=N(he.captions[he.subcount][0])&&he.media.currentTime.toFixed(1)<=P(he.captions[he.subcount][0])){he.currentCaption=he.captions[he.subcount][1];var t=he.currentCaption.trim();he.captionsContainer.innerHTML!=t&&(he.captionsContainer.innerHTML="",he.captionsContainer.innerHTML=t)}else he.captionsContainer.innerHTML=""}}function I(){he.buttons.captions&&(f(he.container,S.classes.captions.enabled,!0),S.captions.defaultActive&&(f(he.container,S.classes.captions.active,!0),w(he.buttons.captions,!0)))}function N(e){var t=[];return t=e.split(" --> "),M(t[0])}function P(e){var t=[];return t=e.split(" --> "),M(t[1])}function M(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function L(e){return he.container.querySelectorAll(e)}function O(e){return L(e)[0]}function V(){try{return window.self!==window.top}catch(e){return!0}}function q(){var n=S.html;t("Injecting custom controls."),n||(n=e()),n=s(n,"{seektime}",S.seekTime),n=s(n,"{id}",Math.floor(1e4*Math.random()));var r;if(null!==S.selectors.controls.container&&(r=S.selectors.controls.container,"string"==typeof selector&&(r=document.querySelector(r))),r instanceof HTMLElement||(r=he.container),r.insertAdjacentHTML("beforeend",n),S.tooltips)for(var o=L(S.selectors.labels),a=o.length-1;a>=0;a--){var i=o[a];f(i,S.classes.hidden,!1),f(i,S.classes.tooltip,!0)}}function H(){try{return he.controls=O(S.selectors.controls.wrapper),he.buttons={},he.buttons.seek=O(S.selectors.buttons.seek),he.buttons.play=O(S.selectors.buttons.play),he.buttons.pause=O(S.selectors.buttons.pause),he.buttons.restart=O(S.selectors.buttons.restart),he.buttons.rewind=O(S.selectors.buttons.rewind),he.buttons.forward=O(S.selectors.buttons.forward),he.buttons.fullscreen=O(S.selectors.buttons.fullscreen),he.buttons.volume=O(S.selectors.buttons.volume),he.buttons.mute=O(S.selectors.buttons.mute),he.buttons.captions=O(S.selectors.buttons.captions),he.checkboxes=L('[type="checkbox"]'),he.progress={},he.progress.container=O(S.selectors.progress.container),he.progress.buffer={},he.progress.buffer.bar=O(S.selectors.progress.buffer),he.progress.buffer.text=he.progress.buffer.bar&&he.progress.buffer.bar.getElementsByTagName("span")[0],he.progress.played={},he.progress.played.bar=O(S.selectors.progress.played),he.progress.played.text=he.progress.played.bar&&he.progress.played.bar.getElementsByTagName("span")[0],he.volume=O(S.selectors.buttons.volume),he.duration=O(S.selectors.duration),he.currentTime=O(S.selectors.currentTime),he.seekTime=L(S.selectors.seekTime),!0}catch(e){return t("It looks like there's a problem with your controls html. Bailing.",!0),he.media.setAttribute("controls",""),!1}}function R(e){var t=S.i18n.play;"undefined"!=typeof S.title&&S.title.length&&(t+=", "+S.title),he.buttons.play&&he.buttons.play.setAttribute("aria-label",t),e instanceof HTMLElement&&e.setAttribute("title",S.i18n.frameTitle.replace("{title}",S.title))}function j(){if(!he.media)return t("No audio or video element found!",!0),!1;if(he.supported.full&&(he.media.removeAttribute("controls"),f(he.container,S.classes.type.replace("{0}",he.type),!0),f(he.container,S.classes.stopped,S.autoplay),f(he.container,S.classes.isIos,he.browser.ios),f(he.container,S.classes.isTouch,he.browser.touch),"video"===he.type)){var e=document.createElement("div");e.setAttribute("class",S.classes.videoWrapper),i(he.media,e),he.videoContainer=e}a(S.types.embed,he.type)?(D(),he.embedId=null):S.autoplay&&U()}function D(){for(var e=document.createElement("div"),t=he.embedId,n=he.type+"-"+Math.floor(1e4*Math.random()),r=L('[id^="'+he.type+'-"]'),a=r.length-1;a>=0;a--)u(r[a]);if(f(he.media,S.classes.videoWrapper,!0),f(he.media,S.classes.embedWrapper,!0),"youtube"===he.type)he.media.appendChild(e),e.setAttribute("id",n),"object"==typeof YT?Y(t,e):(o(S.urls.youtube.api),window.onYouTubeReadyCallbacks=window.onYouTubeReadyCallbacks||[],window.onYouTubeReadyCallbacks.push(function(){Y(t,e)}),window.onYouTubeIframeAPIReady=function(){window.onYouTubeReadyCallbacks.forEach(function(e){e()})});else if("vimeo"===he.type){var s=document.createElement("iframe");s.loaded=!1,v(s,"load",function(){s.loaded=!0}),p(s,{src:"https://player.vimeo.com/video/"+t+"?player_id="+n+"&api=1&badge=0&byline=0&portrait=0&title=0",id:n,webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",frameborder:0}),e.appendChild(s),he.media.appendChild(e),"$f"in window||o(S.urls.vimeo.api);var i=window.setInterval(function(){"$f"in window&&s.loaded&&(window.clearInterval(i),W.call(s))},50)}}function B(){he.supported.full&&(he.container.querySelectorAll(S.selectors.controls.wrapper).length||ve()),R(O("iframe")),re(),oe()}function Y(e,t){"timer"in he||(he.timer={}),he.embed=new YT.Player(t.id,{videoId:e,playerVars:{autoplay:S.autoplay?1:0,controls:he.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:S.captions.defaultActive?1:0,cc_lang_pref:"en",wmode:"transparent",modestbranding:1,disablekb:1,origin:"*"},events:{onReady:function(e){var t=e.target;he.media.play=function(){t.playVideo(),he.media.paused=!1},he.media.pause=function(){t.pauseVideo(),he.media.paused=!0},he.media.stop=function(){t.stopVideo(),he.media.paused=!0},he.media.duration=t.getDuration(),he.media.paused=!S.autoplay,he.media.currentTime=t.getCurrentTime(),he.media.muted=t.isMuted(),h(he.media,"timeupdate"),window.clearInterval(he.timer.buffering),he.timer.buffering=window.setInterval(function(){he.media.buffered=t.getVideoLoadedFraction(),h(he.media,"progress"),1===he.media.buffered&&window.clearInterval(he.timer.buffering)},200),B(),S.displayDuration&&ue()},onStateChange:function(e){var t=e.target;switch(window.clearInterval(he.timer.playing),e.data){case 0:he.media.paused=!0,h(he.media,"ended");break;case 1:he.media.paused=!1,h(he.media,"play"),he.timer.playing=window.setInterval(function(){he.media.currentTime=t.getCurrentTime(),h(he.media,"timeupdate")},200);break;case 2:he.media.paused=!0,h(he.media,"pause")}}}})}function W(){he.embed=$f(this),he.embed.addEvent("ready",function(){he.media.play=function(){he.embed.api("play"),he.media.paused=!1},he.media.pause=function(){he.embed.api("pause"),he.media.paused=!0},he.media.stop=function(){he.embed.api("stop"),he.media.paused=!0},he.media.paused=!S.autoplay,he.media.currentTime=0,B(),he.embed.api("getCurrentTime",function(e){he.media.currentTime=e,h(he.media,"timeupdate")}),he.embed.api("getDuration",function(e){he.media.duration=e,he.supported.full&&S.displayDuration&&ue()}),he.embed.addEvent("play",function(){he.media.paused=!1,h(he.media,"play")}),he.embed.addEvent("pause",function(){he.media.paused=!0,h(he.media,"pause")}),he.embed.addEvent("playProgress",function(e){he.media.currentTime=e.seconds,h(he.media,"timeupdate")}),he.embed.addEvent("loadProgress",function(e){he.media.buffered=e.percent,h(he.media,"progress")}),he.embed.addEvent("finish",function(){he.media.paused=!0,h(he.media,"ended")})})}function $(){if("video"===he.type){O(S.selectors.captions)||he.videoContainer.insertAdjacentHTML("afterbegin",'<div class="'+m(S.selectors.captions)+'"><span></span></div>'),he.captionsContainer=O(S.selectors.captions).querySelector("span"),he.usingTextTracks=!1,he.media.textTracks&&(he.usingTextTracks=!0);for(var e,n="",r=he.media.childNodes,o=0;o<r.length;o++)"track"===r[o].nodeName.toLowerCase()&&(e=r[o].kind,("captions"===e||"subtitles"===e)&&(n=r[o].getAttribute("src")));if(he.captionExists=!0,""===n?(he.captionExists=!1,t("No caption track found.")):t("Caption track found; URI: "+n),he.captionExists){for(var a=he.media.textTracks,s=0;s<a.length;s++)a[s].mode="hidden";if(I(he),("IE"===he.browser.name&&he.browser.version>=10||"Firefox"===he.browser.name&&he.browser.version>=31||"Chrome"===he.browser.name&&he.browser.version>=43||"Safari"===he.browser.name&&he.browser.version>=7)&&(t("Detected unsupported browser for HTML5 captions. Using fallback."),he.usingTextTracks=!1),he.usingTextTracks){t("TextTracks supported.");for(var i=0;i<a.length;i++){var l=a[i];("captions"===l.kind||"subtitles"===l.kind)&&v(l,"cuechange",function(){he.captionsContainer.innerHTML="",this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&he.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML().trim())})}}else if(t("TextTracks not supported so rendering captions manually."),he.currentCaption="",he.captions=[],""!==n){var u=new XMLHttpRequest;u.onreadystatechange=function(){if(4===u.readyState)if(200===u.status){var e,n=[],r=u.responseText;n=r.split("\n\n");for(var o=0;o<n.length;o++)e=n[o],he.captions[o]=[],he.captions[o]=e.split("\n");he.captions.shift(),t("Successfully loaded the caption file via AJAX.")}else t("There was a problem loading the caption file via AJAX.",!0)},u.open("get",n,!0),u.send()}if("Safari"===he.browser.name&&he.browser.version>=7){t("Safari 7+ detected; removing track from DOM."),a=he.media.getElementsByTagName("track");for(var c=0;c<a.length;c++)he.media.removeChild(a[c])}}else f(he.container,S.classes.captions.enabled)}}function z(){if(("audio"!=he.type||S.fullscreen.allowAudio)&&S.fullscreen.enabled){var e=C.supportsFullScreen;e||S.fullscreen.fallback&&!V()?(t((e?"Native":"Fallback")+" fullscreen enabled."),f(he.container,S.classes.fullscreen.enabled,!0)):t("Fullscreen not supported and fallback disabled."),w(he.buttons.fullscreen,!1),S.fullscreen.hideControls&&f(he.container,S.classes.fullscreen.hideControls,!0)}}function U(){"play"in he.media&&he.media.play()}function X(){"pause"in he.media&&he.media.pause()}function J(e){e===!0?U():e===!1?X():he.media[he.media.paused?"play":"pause"]()}function K(e){"number"!=typeof e&&(e=S.seekTime),Q(he.media.currentTime-e)}function G(e){"number"!=typeof e&&(e=S.seekTime),Q(he.media.currentTime+e)}function Q(e){var n=0,r=he.media.paused;"number"==typeof e?n=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(n=e.target.value/e.target.max*he.media.duration),0>n?n=0:n>he.media.duration&&(n=he.media.duration);try{he.media.currentTime=n.toFixed(1)}catch(o){}"embed"in he&&("youtube"===he.type&&he.embed.seekTo(n),"vimeo"===he.type&&he.embed.api("seekTo",n),h(he.media,"timeupdate"),r&&X()),t("Seeking to "+he.media.currentTime+" seconds"),F(n)}function Z(){f(he.container,S.classes.playing,!he.media.paused),f(he.container,S.classes.stopped,he.media.paused)}function ee(e){function t(){f(he.container,S.classes.hover,!0),window.clearTimeout(o),a||(o=window.setTimeout(function(){f(he.container,S.classes.hover,!1)},2e3))}function n(e){a="mouseenter"===e.type}var r=C.supportsFullScreen;e&&e.type===C.fullScreenEventName?he.isFullscreen=C.isFullScreen(he.container):r?(C.isFullScreen(he.container)?C.cancelFullScreen():C.requestFullScreen(he.container),he.isFullscreen=C.isFullScreen(he.container)):(he.isFullscreen=!he.isFullscreen,he.isFullscreen?(v(document,"keyup",te),document.body.style.overflow="hidden"):(g(document,"keyup",te),document.body.style.overflow="")),f(he.container,S.classes.fullscreen.active,he.isFullscreen),w(he.buttons.fullscreen,he.isFullscreen);var o,a=!1;S.fullscreen.hideControls&&(f(he.controls,S.classes.hover,!1),b(he.controls,"mouseenter mouseleave",n,he.isFullscreen),b(he.container,"mousemove",t,he.isFullscreen))}function te(e){27===(e.which||e.charCode||e.keyCode)&&he.isFullscreen&&ee()}function ne(e){"boolean"!=typeof e&&(e=!he.media.muted),w(he.buttons.mute,e),he.media.muted=e,"youtube"===he.type&&(he.embed[he.media.muted?"mute":"unMute"](),h(he.media,"volumechange")),"vimeo"===he.type&&(he.media.muted?he.embed.api("setVolume",0):he.embed.api("setVolume",parseFloat(S.volume/10)),h(he.media,"volumechange"))}function re(e){"undefined"==typeof e&&(e=S.storage.enabled&&_().supported?window.localStorage[S.storage.key]||S.volume:S.volume),e>10&&(e=10),0>e&&(e=0),he.media.volume=parseFloat(e/10),S.volume=e,"youtube"===he.type&&he.embed.setVolume(100*he.media.volume),"vimeo"===he.type&&he.embed.api("setVolume",he.media.volume),"embed"in he&&h(he.media,"volumechange"),he.media.muted&&e>0&&ne()}function oe(){var e=he.media.muted?0:10*he.media.volume;he.supported.full&&he.volume&&(he.volume.value=e),S.storage.enabled&&_().supported&&window.localStorage.setItem(S.storage.key,e),f(he.container,S.classes.muted,0===e),he.supported.full&&he.buttons.mute&&w(he.buttons.mute,0===e)}function ae(e){he.supported.full&&he.buttons.captions&&("boolean"!=typeof e&&(e=-1===he.container.className.indexOf(S.classes.captions.active)),he.captionsEnabled=e,w(he.buttons.captions,he.captionsEnabled),f(he.container,S.classes.captions.active,he.captionsEnabled))}function se(e){var t="waiting"===e.type;clearTimeout(he.loadingTimer),he.loadingTimer=setTimeout(function(){f(he.container,S.classes.loading,t)},t?250:0)}function ie(e){var t=he.progress.played.bar,n=he.progress.played.text,r=0;if(e)switch(e.type){case"timeupdate":case"seeking":r=k(he.media.currentTime,he.media.duration),"timeupdate"==e.type&&he.buttons.seek&&(he.buttons.seek.value=r);break;case"change":case"input":r=e.target.value;break;case"playing":case"progress":t=he.progress.buffer.bar,n=he.progress.buffer.text,r=function(){var e=he.media.buffered;return e&&e.length?k(e.end(0),he.media.duration):"number"==typeof e?100*e:0}()}t&&(t.value=r),n&&(n.innerHTML=r)}function le(e,t){if(t){isNaN(e)&&(e=0),he.secs=parseInt(e%60),he.mins=parseInt(e/60%60),he.hours=parseInt(e/60/60%60);var n=parseInt(he.media.duration/60/60%60)>0;he.secs=("0"+he.secs).slice(-2),he.mins=("0"+he.mins).slice(-2),t.innerHTML=(n?he.hours+":":"")+he.mins+":"+he.secs}}function ue(){var e=he.media.duration||0;!he.duration&&S.displayDuration&&he.media.paused&&le(e,he.currentTime),he.duration&&le(e,he.duration)}function ce(e){le(he.media.currentTime,he.currentTime),ie(e)}function pe(e,t){if("string"==typeof t)d(e,he.media,{src:t});else if(t.constructor===Array)for(var n=t.length-1;n>=0;n--)d(e,he.media,t[n])}function de(e){if(!("undefined"!=typeof e&&"sources"in e&&e.sources.length))return void t("Invalid source format",!0);if(X(),"youtube"===he.type?(he.embed.destroy(),window.clearInterval(he.timer.buffering),window.clearInterval(he.timer.playing)):"video"===he.type&&u(he.videoContainer),u(he.media),"type"in e&&(he.type=e.type,"video"===he.type)){var n=e.sources[0];"type"in n&&a(S.types.embed,n.type)&&(he.type=n.type)}switch(he.type){case"video":he.media=document.createElement("video");break;case"audio":he.media=document.createElement("audio");break;case"youtube":case"vimeo":he.media=document.createElement("div"),he.embedId=e.sources[0].src}c(he.container,he.media),a(S.types.html5,he.type)&&(S.crossorigin&&he.media.setAttribute("crossorigin",""),S.autoplay&&he.media.setAttribute("autoplay",""),"poster"in e&&he.media.setAttribute("poster",e.poster),S.loop&&he.media.setAttribute("loop","")),he.container.className=he.originalClassName,f(he.container,S.classes.fullscreen.active,he.isFullscreen),f(he.container,S.classes.captions.active,he.captionsEnabled),S.autoplay=e.autoplay||S.autoplay,a(S.types.html5,he.type)&&pe("source",e.sources),j(),ge(),a(S.types.html5,he.type)&&(re(),oe(),he.supported.full&&(ce(),Z()),"tracks"in e&&(pe("track",e.tracks),$()),he.media.load(),S.autoplay&&U()),"title"in e&&(S.title=e.title,R())}function me(e){"video"===he.type&&he.media.setAttribute("poster",e)}function fe(){function e(e){e?U():X();var t=he.buttons[e?"play":"pause"],n=he.buttons[e?"pause":"play"];if(n){var r=y(t,S.classes.tabFocus);setTimeout(function(){n.focus(),r&&(f(t,S.classes.tabFocus,!1),f(n,S.classes.tabFocus,!0))},100)}}function t(){var e=document.activeElement;e&&e!=document.body?document.querySelector&&(e=document.querySelector(":focus")):e=null;for(var t in he.buttons){var n=he.buttons[t];f(n,S.classes.tabFocus,n===e)}}var n="IE"==he.browser.name?"change":"input";v(window,"keyup",function(e){var n=e.keyCode?e.keyCode:e.which;9==n&&t()}),v(document.body,"click",t),v(he.buttons.play,"click",function(){e(!0)}),v(he.buttons.pause,"click",function(){e()}),v(he.buttons.restart,"click",Q),v(he.buttons.rewind,"click",K),v(he.buttons.forward,"click",G),v(he.buttons.seek,n,Q),v(he.volume,n,function(){re(this.value)}),v(he.buttons.mute,"click",ne),v(he.buttons.fullscreen,"click",ee),C.supportsFullScreen&&v(document,C.fullScreenEventName,ee),v(he.media,"timeupdate seeking",ce),v(he.media,"timeupdate",F),v(he.media,"loadedmetadata",ue),v(he.buttons.captions,"click",ae),v(he.media,"ended",function(){"video"===he.type&&(he.captionsContainer.innerHTML=""),Z()}),v(he.media,"progress playing",ie),v(he.media,"volumechange",oe),v(he.media,"play pause",Z),v(he.media,"waiting canplay seeked",se),"video"===he.type&&S.click&&v(he.videoContainer,"click",function(){he.media.paused?U():he.media.ended?(Q(),U()):X()})}function ye(){if(!he.init)return null;if(he.container.setAttribute("class",m(S.selectors.container)),he.init=!1,u(O(S.selectors.controls.wrapper)),"youtube"===he.type)return void he.embed.destroy();"video"===he.type&&(u(O(S.selectors.captions)),l(he.videoContainer)),he.media.setAttribute("controls","");var e=he.media.cloneNode(!0);he.media.parentNode.replaceChild(e,he.media)}function be(){if(he.init)return null;C=x(),he.browser=n(),he.media=he.container.querySelectorAll("audio, video, div")[0],f(he.container,A.selectors.container.replace(".",""),!0),he.originalClassName=he.container.className;var e=he.media.tagName.toLowerCase();if("div"===e?(he.type=he.media.getAttribute("data-type"),he.embedId=he.media.getAttribute("data-video-id"),he.media.removeAttribute("data-type"),he.media.removeAttribute("data-video-id")):(he.type=e,S.crossorigin=null!==he.media.getAttribute("crossorigin"),S.autoplay=S.autoplay||null!==he.media.getAttribute("autoplay"),S.loop=S.loop||null!==he.media.getAttribute("loop")),he.supported=E.supported(he.type),!he.supported.basic)return!1;if(t(he.browser.name+" "+he.browser.version),j(),"video"==he.type||"audio"==he.type){if(!he.supported.full)return void(he.init=!0);ve(),S.displayDuration&&ue(),R()}he.init=!0}function ve(){return q(),H()?($(),ge(),re(),void oe()):!1}function ge(){z(),fe()}var he=this;return he.container=T,be(),he.init?{media:he.media,play:U,pause:X,restart:Q,rewind:K,forward:G,seek:Q,source:de,poster:me,setVolume:re,togglePlay:J,toggleMute:ne,toggleCaptions:ae,toggleFullscreen:ee,isFullscreen:function(){return he.isFullscreen||!1},support:function(e){return r(he,e)},destroy:ye,restore:be}:{}}var C,S,E={},A={enabled:!0,debug:!1,autoplay:!1,loop:!1,seekTime:10,volume:5,click:!0,tooltips:!1,displayDuration:!0,iconPrefix:"icon",selectors:{container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr] .sr-only, label .sr-only",buttons:{seek:'[data-plyr="seek"]',play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',forward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',volume:'[data-plyr="volume"]',captions:'[data-plyr="captions"]',fullscreen:'[data-plyr="fullscreen"]'},progress:{container:".plyr__progress",buffer:".plyr__progress--buffer",played:".plyr__progress--played"},captions:".plyr__captions",currentTime:".plyr__time--current",duration:".plyr__time--duration"},classes:{videoWrapper:"plyr__video-wrapper",embedWrapper:"plyr__video-embed",type:"plyr--{0}",stopped:"plyr--stopped",playing:"plyr--playing",muted:"plyr--muted",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",hidden:"plyr__sr-only",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",active:"plyr--fullscreen-active",hideControls:"plyr--fullscreen--hide-controls"},tabFocus:"tab-focus"},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,hideControls:!0,allowAudio:!1},storage:{enabled:!0,key:"plyr_volume"},controls:["restart","rewind","play","fast-forward","current-time","duration","mute","volume","captions","fullscreen"],i18n:{restart:"Restart",rewind:"Rewind {seektime} secs",play:"Play",pause:"Pause",forward:"Forward {seektime} secs",played:"played",buffered:"buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",toggleMute:"Toggle Mute",toggleCaptions:"Toggle Captions",toggleFullscreen:"Toggle Fullscreen",frameTitle:"Player for {title}"},types:{embed:["youtube","vimeo"],html5:["video","audio"]},urls:{vimeo:{api:"http://cdn.plyr.io/froogaloop/1.0.0/plyr.froogaloop.js"},youtube:{api:"https://www.youtube.com/iframe_api"}}};return E.supported=function(e){var t,r,o=n(),a="IE"===o.name&&o.version<=9,s=/iPhone|iPod/i.test(navigator.userAgent),i=!!document.createElement("audio").canPlayType,l=!!document.createElement("video").canPlayType;switch(e){case"video":t=l,r=t&&!a&&!s;break;case"audio":t=i,r=t&&!a;break;case"vimeo":case"youtube":t=!0,r=!a&&!s;break;default:t=i&&l,r=t&&!a}return{basic:t,full:r}},E.setup=function(e,t){var n=[];if("string"==typeof e?e=document.querySelectorAll(e):e instanceof HTMLElement?e=[e]:e instanceof NodeList||"string"==typeof e||("undefined"==typeof t&&"object"==typeof e&&(t=e),e=document.querySelectorAll(A.selectors.container)),S=T(A,t),!S.enabled||!E.supported().basic||!e.length)return!1;for(var r=e.length-1;r>=0;r--){var o=e[r];if("undefined"==typeof o.plyr){var a=new F(o);o.plyr=Object.keys(a).length?a:!1,"function"==typeof S.onSetup&&S.onSetup.apply(o.plyr)}n.push(o.plyr)}return n},E});