var ElandTracker=ElandTracker||{};ElandTracker.commonBooleanSwitcher={useTestingEnvironment:!1,isTixcraftTracker:!1,attachIframeToBody:!1,useJsdelivrToLoadJS:!0};ElandTracker.jsVersions={eland_fingerprint:"?version\x3d1.0.19",eland_tracker_utils:"?version\x3d1.0.19"};
ElandTracker.apiGateways=ElandTracker.commonBooleanSwitcher.useTestingEnvironment?{elandTracker:"//cdn.jsdelivr.net/gh/yEchKgnaHWFO/eland-tracker@latest/",elandReceiver:"//dmp.eland-tech.com/receivertesting/",elandReceiverProfile:"//dmp.eland-tech.com/profile_receiver/profile_receiver?",elandReceiverView:"//dmp.eland-tech.com/receivertesting/viewreceiver?",elandReceiverClick:"//dmp.eland-tech.com/receivertesting/clickreceiver?",elandReceiverDataFlush:"//dmp.eland-tech.com/receivertesting/dataflush"}:
{elandTracker:"//cdn.jsdelivr.net/gh/yEchKgnaHWFO/eland-tracker@latest/",elandReceiver:"//dmp.eland-tech.com/dmpreceiver/",elandReceiverProfile:"//dmp.eland-tech.com/profile_receiver/profile_receiver?",elandReceiverView:"//dmp.eland-tech.com/dmpreceiver/viewreceiver?",elandReceiverClick:"//dmp.eland-tech.com/dmpreceiver/clickreceiver?",elandReceiverDataFlush:"//dmp.eland-tech.com/dmpreceiver/dataflush"};"undefined"===typeof ElandTracker.DelayCallbackList&&(ElandTracker.DelayCallbackList=[]);
ElandTracker.delay=function(b,a){ElandTracker.DelayCallbackList.push([b,a])};ElandTracker.ready=function(){if(ElandTracker.DelayCallbackList&&0<ElandTracker.DelayCallbackList.length){do{var b=ElandTracker.DelayCallbackList.shift();b&&setTimeout(function(a){a[0].call(this,a[1])},100,b)}while(0<ElandTracker.DelayCallbackList.length)}};ElandTracker.isAllReady=function(){return document.body&&ElandTracker.Track&&ElandTracker.getFingerPrintV4&&ElandTracker.SendData&&ElandTracker.SendError?!0:!1};
ElandTracker.onErrorLoadJsFromCDN=function(){ElandTracker.commonBooleanSwitcher.useJsdelivrToLoadJS=!1;ElandTracker.getFingerPrintV4||ElandTracker.loadjsfile("eland_fingerprint.js");ElandTracker.SendData||ElandTracker.loadjsfile("eland_tracker_utils.js")};
ElandTracker.loadjsfile=function(b){var a;a=document.createElement("script");a.setAttribute("type","text/javascript");ElandTracker.commonBooleanSwitcher.useJsdelivrToLoadJS?(a.setAttribute("src",ElandTracker.apiGateways.elandTracker+b),a.setAttribute("onerror","ElandTracker.onErrorLoadJsFromCDN()")):a.setAttribute("src",ElandTracker.apiGateways.elandReceiver+b);if(void 0!==a){var c=a.getAttribute("src");switch(b){case "eland_fingerprint.js":ElandTracker.getFingerPrintV4||(a.setAttribute("src",c+ElandTracker.jsVersions.eland_fingerprint),
document.getElementsByTagName("head")[0].appendChild(a));break;case "eland_tracker_utils.js":ElandTracker.SendData||(a.setAttribute("src",c+ElandTracker.jsVersions.eland_tracker_utils),document.getElementsByTagName("head")[0].appendChild(a));break;default:document.getElementsByTagName("head")[0].appendChild(a)}}};ElandTracker.loadjsfile("eland_fingerprint.js");ElandTracker.loadjsfile("eland_tracker_utils.js");
ElandTracker.Track=function(b){if("undefined"===typeof b)ElandTracker.SendError("Didn't send data due to undefined trackingJson.");else{if("undefined"===typeof b.retriedTimes)b.retriedTimes=1;else if(b.retriedTimes+=1,100<b.retriedTimes){ElandTracker.SendError("Didn't send data due to the retried times being greater than the limit.");return}if(ElandTracker.isAllReady())try{ElandTracker.SendData(b)}catch(a){"undefined"!==typeof a.message&&ElandTracker.SendError(a.message)}else ElandTracker.delay(ElandTracker.Track,
b),setTimeout(ElandTracker.ready,1E3)}};