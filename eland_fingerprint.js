(function(n){function u(){var b,c,a;a=c=b=null;try{b=navigator.userAgent.toLowerCase();if(/edge[\/\s](\d+)/.test(b))a="Edge",c=Number(RegExp.$1),a=a+"-"+c;else if(/iemobile[\/\s](\d+)/.test(b))a="IEMobile",c=Number(RegExp.$1),a=a+"-"+c;else if(/msie[\/\s](\d+)/.test(b))c=Number(RegExp.$1),a="Internet Explorer-"+c;else if(-1<b.indexOf("trident/7"))a="Internet Explorer-11";else if(/puffin[\/\s](\d+)/.test(b))c=Number(RegExp.$1),a="Puffin",a=a+"-"+c;else if(/ucbrowser[\/\s](\d+)/.test(b))c=Number(RegExp.$1),
a="UCBrowser",a=a+"-"+c;else if(/opera mini[\/\s](\d+)/.test(b))c=Number(RegExp.$1),a="Opera Mini",a=a+"-"+c;else if(/opera mobi[\/\s]([\da-z]+)/.test(b))c=Number(RegExp.$1),a="Opera Mobi",/version[\/\s](\d+)/.test(b)&&(c=Number(RegExp.$1),a=a+"-"+c);else if(/opera[\/\s](\d+)/.test(b))c=Number(RegExp.$1),a="Opera",a=a+"-"+c;else if(/firefox[\/\s](\d)/.test(b))c=Number(RegExp.$1),a="Firefox",a=a+"-"+c;else if(/vivaldi[\/\s](\d+)/.test(b))c=Number(RegExp.$1),a="Vivaldi",a=a+"-"+c;else if(/android[\/\s](\d+)/.test(b)){if(c=
Number(RegExp.$1),a="Android",a=a+"-"+c,/;([^;]*?build.*?)\)/.test(b)){var d=RegExp.$1.trim();a=a+"-"+d}}else/blackberry/.test(b)?(c=Number(RegExp.$1),a="BlackBerry",/version[\/\s](\d+)/.test(b)&&(c=Number(RegExp.$1),a=a+"-"+c)):/dolfin[\/\s](\d+)/.test(b)?(c=Number(RegExp.$1),a="Dolfin",a=a+"-"+c):/chrome[\/\s](\d)/.test(b)?(c=Number(RegExp.$1),a="Chrome",a=a+"-"+c):/crios[\/\s](\d)/.test(b)?(c=Number(RegExp.$1),a="Chrome",a=a+"-"+c):/safari[\/\s]/.test(b)?(a="Safari",/version[\/\s](\d+)/.test(b)&&
(c=Number(RegExp.$1),a=a+"-"+c)):a="Others";return a}catch(e){return"Error"}}function v(){var b,c;c=b=null;try{return(b=window.screen)&&(c=b.colorDepth+"|"+b.width+"|"+b.height+"|"+b.availWidth+"|"+b.availHeight),c}catch(a){return"Error"}}function w(){var b,c,a,d,e;e=d=a=c=b=null;try{return c=typeof navigator.language,a=typeof navigator.browserLanguage,d=typeof navigator.systemLanguage,e=typeof navigator.userLanguage,b="undefined"!==c?"lang\x3d"+navigator.language+"|":"undefined"!==a?"lang\x3d"+navigator.browserLanguage+
"|":"lang\x3d|",b="undefined"!==d?b+("syslang\x3d"+navigator.systemLanguage+"|"):b+"syslang\x3d|",b="undefined"!==e?b+("userlang\x3d"+navigator.userLanguage):b+"userlang\x3d"}catch(g){return"Error"}}function x(){var b,c,a,d;d=a=c=b=null;try{b=navigator.userAgent.toLowerCase();if(b.match(/windows nt 10.(\d)/i))a="Windows 10-"+RegExp.$1;else if(-1!==b.indexOf("windows nt 10")||-1!==b.indexOf("wm 10"))a="Windows 10";else if(-1!==b.indexOf("windows nt 6.3"))a="Windows 8.1";else if(-1!==b.indexOf("windows nt 6.2"))a=
"Windows 8";else if(-1!==b.indexOf("windows nt 6.1"))a="Windows 7";else if(-1!==b.indexOf("windows nt 6.0"))a="Windows Vista/Windows Server 2008";else if(-1!==b.indexOf("windows nt 5.2"))a="Windows XP x64/Windows Server 2003";else if(-1!==b.indexOf("windows nt 5.1"))a="Windows XP";else if(-1!==b.indexOf("windows nt 5.01"))a="Windows 2000, Service Pack 1 (SP1)";else if(-1!==b.indexOf("windows xp"))a="Windows XP";else if(-1!==b.indexOf("windows 2000"))a="Windows 2000";else if(-1!==b.indexOf("windows nt 5.0"))a=
"Windows 2000";else if(-1!==b.indexOf("windows nt 4.0"))a="Windows NT 4.0";else if(-1!==b.indexOf("windows nt"))a="Windows NT 4.0";else if(-1!==b.indexOf("winnt4.0"))a="Windows NT 4.0";else if(-1!==b.indexOf("winnt"))a="Windows NT 4.0";else if(-1!==b.indexOf("windows me"))a="Windows ME";else if(-1!==b.indexOf("win 9x 4.90"))a="Windows ME";else if(-1!==b.indexOf("windows 98"))a="Windows 98";else if(-1!==b.indexOf("win98"))a="Windows 98";else if(-1!==b.indexOf("windows 95"))a="Windows 95";else if(-1!==
b.indexOf("windows_95"))a="Windows 95";else if(-1!==b.indexOf("win95"))a="Windows 95";else if(-1!==b.indexOf("ce"))a="Windows CE";else if(-1!==b.indexOf("win16"))a="Windows 3.11";else if(-1!==b.indexOf("iemobile"))a="Windows Phone";else if(-1!==b.indexOf("wm5 pie"))a="Windows Phone";else if(-1!==b.indexOf("windows"))a="Windows (Unknown Version)";else if(-1!==b.indexOf("ipad"))a="iOS (iPad)",b.match(/mobile\/([\da-z]+?)\s/i)&&(a="iOS (iPad) - "+RegExp.$1);else if(-1!==b.indexOf("ipod"))a="iOS (iTouch)",
b.match(/mobile\/([\da-z]+?)\s/i)&&(a="iOS (iTouch) - "+RegExp.$1);else if(-1!==b.indexOf("iphone"))a="iOS (iPhone)",b.match(/mobile\/([\da-z]+?)\s/i)&&(a="iOS (iPhone) - "+RegExp.$1);else if(-1!==b.indexOf("mac os x beta"))a="Mac OSX Beta (Kodiak)";else if(b.match(/mac os x 10.0/i))a="Mac OSX Cheetah";else if(b.match(/mac os x 10.1/i))a="Mac OSX Puma";else if(b.match(/mac os x 10.2/i))a="Mac OSX Jaguar";else if(b.match(/mac os x 10.3/i))a="Mac OSX Panther";else if(b.match(/mac os x 10.4/i))a="Mac OSX Tiger";
else if(b.match(/mac os x 10.5/i))a="Mac OSX Leopard";else if(b.match(/mac os x 10.6/i))a="Mac OSX Snow Leopard";else if(b.match(/mac os x 10.7/i))a="Mac OSX Lion";else if(b.match(/mac os x 10.8/i))a="Mac OSX Mountain Lion";else if(b.match(/mac os x 10.9/i))a="Mac OSX Mavericks";else if(b.match(/mac os x 10.10/i))a="Mac OSX Yosemite";else if(b.match(/mac os x 10.11/i))a="Mac OSX El Capitan";else if(b.match(/mac os x 10.12/i))a="Mac OSX El Sierra";else if(b.match(/mac os x (\d+.\d+)/i))a="Mac OSX ("+
RegExp.$1+")";else if(b.match(/mac os x/i))a="Mac OSX (Version Unknown)";else if(b.match(/mac os (\w+? \d+.\d+)/i))a="Mac OS ("+RegExp.$1+")";else if(-1!==b.indexOf("mac_68000"))a="Mac OS Classic (68000)";else if(-1!==b.indexOf("68K"))a="Mac OS Classic (68000)";else if(-1!==b.indexOf("intel mac"))a="Mac OS Classic (IntelPC)";else if(-1!==b.indexOf("mac_powerpc"))a="Mac OS Classic (PowerPC)";else if(-1!==b.indexOf("ppc mac"))a="Mac OS Classic (PowerPC)";else if(-1!==b.indexOf("macintosh"))a="Mac OS Classic";
else if(-1!==b.indexOf("fennec"))a="Android (Nokia)";else if(-1!==b.indexOf("googletv"))a="Android (GoogleTV)";else if(-1!==b.indexOf("xoom"))a="Android (Xoom)";else if(-1!==b.indexOf("htc_flyer"))a="Android (HTC Flyer)";else if(b.match(/puffin/i))a=b.match(/puffin.*?ip/i)?"Puffin (iPhone)":b.match(/puffin.*?it/i)?"Puffin (iPad)":b.match(/puffin.*?ap/i)?"Puffin (Android Phone)":b.match(/puffin.*?at/i)?"Puffin (Android Tablet)":b.match(/puffin.*?wp/i)?"Puffin (Windows Phone)":b.match(/puffin.*?wt/i)?
"Puffin (Windows Tablet)":b.match(/puffin\/(\d+)\.\d+([a-z]+)/i)?"Puffin ("+RegExp.$1+"-"+RegExp.$2+")":"Puffin (Others)";else if(-1!==b.indexOf("cros"))a="ChromeOS";else if(-1!==b.indexOf("ubuntu"))a="Ubuntu";else if(-1!==b.indexOf("android")&&-1===b.indexOf("mobile")){if(a="Android-Tablet",/;([^;]*?build.*?)\)/.test(b)){var e=RegExp.$1.trim();a=a+"-"+e}}else-1!==b.indexOf("android")?(a="Android",/;([^;]*?build.*?)\)/.test(b)&&(e=RegExp.$1.trim(),a=a+"-"+e)):-1!==b.indexOf("firefox")?(a="FirefoxOS",
-1!==b.indexOf("mobile")?a+="-Mobile":-1!==b.indexOf("tablet")?a+="-Tablet":-1!==b.indexOf("tv")&&(a+="-TV")):a=-1!==b.indexOf("linux")?"Linux":b.match(/mozilla\/\d\.\d \((.*?)\)/i)?RegExp.$1:"Others";c=navigator.platform.toLowerCase();d=-1!==c.indexOf("x64")?"64 bits":-1!==c.indexOf("wow64")?"64 bits":-1!==c.indexOf("win64")?"64 bits":-1!==c.indexOf("win32")?"32 bits":-1!==c.indexOf("x64")?"64 bits":-1!==c.indexOf("x32")?"32 bits":-1!==c.indexOf("x86")?"32 bits*":-1!==c.indexOf("ppc")?"64 bits":
-1!==c.indexOf("alpha")?"64 bits":-1!==c.indexOf("68k")?"64 bits":-1!==c.indexOf("iphone")?"32 bits":-1!==c.indexOf("android")?"32 bits":-1!==c.indexOf("armv8l")?"64 bits":"Unknown";return a+"|"+d}catch(g){return"Error"}}function y(){for(var b="",c=0;c<navigator.plugins.length;c++)b=c==navigator.plugins.length-1?b+(navigator.plugins[c].name+"-"+navigator.plugins[c].filename):b+(navigator.plugins[c].name+"-"+navigator.plugins[c].filename+",");return b}function z(){var b,c,a;a=c=b=null;try{return b=
new Date,c=b.getTimezoneOffset(),a=c/60*-1,"GMT:"+a}catch(d){return"Error"}}function A(){var b,c;c=b="false";try{document.createEvent("TouchEvent")&&(b="true");c="true";try{null!=navigator.maxTouchPoints&&(c+=navigator.maxTouchPoints)}catch(a){}return c}catch(d){return b}}function B(b){var c,a,d;d=a=c=null;try{return c=document.createElement("canvas"),a=c.getContext("2d"),a.textBaseline="top",a.font="14px 'Arial'",a.textBaseline="alphabetic",a.fillStyle="#f60",a.fillRect(125,1,62,20),a.fillStyle=
"#069",a.fillText(b,2,15),a.fillStyle="rgba(102, 204, 0, 0.7)",a.fillText(b,4,17),d=c.toDataURL().replace("data:image/png;base64,","")}catch(e){return"Error"}}function C(){var b=null,c=null,a=null;try{var c=document.createElement("canvas"),b=c.getContext("webgl")||c.getContext("experimental-webgl"),d=b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(b.VERSION)+"-"+b.getParameter(b.VENDOR)+"-"+b.getParameter(b.RENDERER)+"-"+b.getParameter(b.DEPTH_BITS);null!=d&&(a+=" - "+b.getParameter(d.UNMASKED_RENDERER_WEBGL),
a+=" - "+b.getParameter(d.UNMASKED_VENDOR_WEBGL));return a}catch(e){return"Error"}}function D(){try{if(null!=navigator.hardwareConcurrency)return navigator.hardwareConcurrency}catch(b){return"Error"}return""}void 0===n.ElandTracker&&(n.ElandTracker={});n.ElandTracker.getFingerPrint=function(){var b=u(),c=x(),a=v(),d;var e,g,h,k,l,m,q,p,r,t,s;q=g=e=null;h=0;r=p=s=m=k=null;try{e="position: absolute; visibility: hidden; display: block !important";g="Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Aharoni;Andalus;Angsana New;AngsanaUPC;Aparajita;Arab;Arabic Transparent;Arabic Typesetting;Arial Baltic;Arial Black;Arial CE;Arial CYR;Arial Greek;Arial TUR;Arial;Batang;BatangChe;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Browallia New;BrowalliaUPC;Calibri Light;Calibri;Californian FB;Cambria Math;Cambria;Candara;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Comic Sans MS;Consolas;Constantia;Copperplate Gothic Light;Corbel;Cordia New;CordiaUPC;Courier New Baltic;Courier New CE;Courier New CYR;Courier New Greek;Courier New TUR;Courier New;DFKai-SB;DaunPenh;David;DejaVu LGC Sans Mono;Desdemona;DilleniaUPC;DokChampa;Dotum;DotumChe;Ebrima;Engravers MT;Eras Bold ITC;Estrangelo Edessa;EucrosiaUPC;Euphemia;Eurostile;FangSong;Forte;FrankRuehl;Franklin Gothic Heavy;Franklin Gothic Medium;FreesiaUPC;French Script MT;Gabriola;Gautami;Georgia;Gigi;Gisha;Goudy Old Style;Gulim;GulimChe;GungSeo;Gungsuh;GungsuhChe;Haettenschweiler;Harrington;Hei S;HeiT;Heisei Kaku Gothic;Hiragino Sans GB;Impact;Informal Roman;IrisUPC;Iskoola Pota;JasmineUPC;KacstOne;KaiTi;Kalinga;Kartika;Khmer UI;Kino MT;KodchiangUPC;Kokila;Kozuka Gothic Pr6N;Lao UI;Latha;Leelawadee;Levenim MT;LilyUPC;Lohit Gujarati;Loma;Lucida Bright;Lucida Console;Lucida Fax;Lucida Sans Unicode;MS Gothic;MS Mincho;MS PGothic;MS PMincho;MS Reference Sans Serif;MS UI Gothic;MV Boli;Magneto;Malgun Gothic;Mangal;Marlett;Matura MT Script Capitals;Meiryo UI;Meiryo;Menlo;Microsoft Himalaya;Microsoft JhengHei;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Sans Serif;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft Yi Baiti;MingLiU;MingLiU-ExtB;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;Miriam Fixed;Miriam;Mongolian Baiti;MoolBoran;NSimSun;Narkisim;News Gothic MT;Niagara Solid;Nyala;PMingLiU;PMingLiU-ExtB;Palace Script MT;Palatino Linotype;Papyrus;Perpetua;Plantagenet Cherokee;Playbill;Prelude Bold;Prelude Condensed Bold;Prelude Condensed Medium;Prelude Medium;PreludeCompressedWGL Black;PreludeCompressedWGL Bold;PreludeCompressedWGL Light;PreludeCompressedWGL Medium;PreludeCondensedWGL Black;PreludeCondensedWGL Bold;PreludeCondensedWGL Light;PreludeCondensedWGL Medium;PreludeWGL Black;PreludeWGL Bold;PreludeWGL Light;PreludeWGL Medium;Raavi;Rachana;Rockwell;Rod;Sakkal Majalla;Sawasdee;Script MT Bold;Segoe Print;Segoe Script;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Segoe UI;Shonar Bangla;Showcard Gothic;Shruti;SimHei;SimSun;SimSun-ExtB;Simplified Arabic Fixed;Simplified Arabic;Snap ITC;Sylfaen;Symbol;Tahoma;Times New Roman Baltic;Times New Roman CE;Times New Roman CYR;Times New Roman Greek;Times New Roman TUR;Times New Roman;TlwgMono;Traditional Arabic;Trebuchet MS;Tunga;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Utsaah;Vani;Verdana;Vijaya;Vladimir Script;Vrinda;Webdings;Wide Latin;Wingdings".split(";");
h=g.length;k="\x3cb style\x3d\"display:inline !important; width:auto !important; font:normal 10px/1 'X',sans-serif !important\"\x3eww\x3c/b\x3e\x3cb style\x3d\"display:inline !important; width:auto !important; font:normal 10px/1 'X',monospace !important\"\x3eww\x3c/b\x3e";l=document.createDocumentFragment();m=[];for(var f=0;f<h;f+=1)q=g[f],p=document.createElement("div"),q=q.replace(/['"<>]/g,""),p.innerHTML=k.replace(/X/g,q),p.style.cssText=e,l.appendChild(p),m.push(p);r=document.body;r.insertBefore(l,
r.firstChild);t=[];for(f=0;f<h;f+=1)s=m[f].getElementsByTagName("b"),s[0].offsetWidth===s[1].offsetWidth&&t.push(g[f]);for(f=0;f<h;f+=1)r.removeChild(m[f]);d=t.join("|")}catch(E){d="Error"}e=w();g=z();h=A();k=y();l=D();m=C();return n.ElandTracker.md5(B(b+c+a+d+e+g+h+k+l+m)+b+c+a+d+e+g+h+k+l+m)};n.ElandTracker.getFingerPrintV2=function(){var b=u(),c=x(),a=v(),d=w(),e=z(),g=A(),h=y(),k=D(),l=C();return n.ElandTracker.md5(B(b+c+a+d+e+g+h+k+l)+b+c+a+d+e+g+h+k+l)}})(this);ElandTracker.ready&&ElandTracker.ready();