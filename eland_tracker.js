var sNew=document.createElement("script"),blackList=["chinatimes"],loadName="eland_tracker_load.js",domain=document.domain;blackList.forEach(function(a){-1!==domain.indexOf(a)&&(loadName="eland_tracker_load_nofp.js")});sNew.src="https://cdn.jsdelivr.net/gh/yEchKgnaHWFO/eland-tracker@1.1.3/"+loadName;var s0=document.getElementsByTagName("script")[0];s0.parentNode.insertBefore(sNew,s0);var ElandTracker=ElandTracker||{},count=0;
ElandTracker.Track=function(a){"undefined"===typeof ElandTracker.isAllReady?50<count||(count++,setTimeout(ElandTracker.Track,100,a)):ElandTracker.Track(a)};