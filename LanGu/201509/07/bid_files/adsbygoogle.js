(function(){var p=this,fa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ga=function(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length},ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,
c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,arguments)};var ka=(new Date).getTime();var la={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4};var t=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ma=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},na=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},oa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,pa=function(a,b){if(!a)return b;var c=a.match(oa);return c?c[0]:b};var qa=t("0.15"),xa=t("0.0"),ya=ma("101",-1),za=ma("10",0),Aa=t("0.05"),Ba=t("0.001"),Ca=t("0"),Da=t(""),Ea=t("0.001"),Fa=t("0.001"),Ga=
t("0.2"),Ha=na("true",!0),Ia=t(""),Ja=t("0.001");var Ka=na("false",!1),La=na("false",!1),Ma=La||!Ka;var Na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,kb=/'/g,lb=/\x00/g,mb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},nb={"'":"\\'"},ob=function(a,b){return a<b?-1:a>b?1:0};var x=function(a){x[" "](a);return a};x[" "]=function(){};var B=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{x(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},pb=function(){var a=window;return B(a.top)?a.top:null},qb=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},D=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=rb(window),a[Math.floor(c*a.length)]}return null},rb=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},
sb=/^([0-9.]+)px$/,tb=/^(-?[0-9.]{1,30})$/,ub=function(a){return tb.test(a)&&(a=Number(a),!isNaN(a))?a:null},vb=function(a){return(a=sb.exec(a))?+a[1]:null};var wb=document,E=window;var xb=function(a,b){return a===b};var H;a:{var yb=p.navigator;if(yb){var zb=yb.userAgent;if(zb){H=zb;break a}}H=""}var I=function(a){return-1!=H.indexOf(a)};var Ab=I("Opera")||I("OPR"),J=I("Trident")||I("MSIE"),Bb=I("Edge"),Cb=I("Gecko")&&!(-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Db=-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge"),Eb=function(){var a=H;if(Cb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Bb)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Db)return/WebKit\/(\S+)/.exec(a)},Fb=function(){var a=p.document;return a?a.documentMode:void 0},Gb=function(){if(Ab&&
p.opera){var a=p.opera.version;return"function"==fa(a)?a():a}var a="",b=Eb();b&&(a=b?b[1]:"");return J&&(b=Fb(),b>parseFloat(a))?String(b):a}(),Hb={},Ib=function(a){if(!Hb[a]){for(var b=0,c=Na(String(Gb)).split("."),d=Na(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",n=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var w=n.exec(g)||["","",""],k=l.exec(h)||["","",""];if(0==w[0].length&&0==k[0].length)break;b=ob(0==w[1].length?0:parseInt(w[1],
10),0==k[1].length?0:parseInt(k[1],10))||ob(0==w[2].length,0==k[2].length)||ob(w[2],k[2])}while(0==b)}Hb[a]=0<=b}},Jb=p.document,Kb=Jb&&J?Fb()||("CSS1Compat"==Jb.compatMode?parseInt(Gb,10):5):void 0;var Lb;if(!(Lb=!Cb&&!J)){var Mb;if(Mb=J)Mb=9<=Kb;Lb=Mb}Lb||Cb&&Ib("1.9.1");J&&Ib("9");var Nb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b};var K=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},N=function(a){return!!a&&"function"==typeof a&&!!a.call},Ob=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},O=function(a,b){if(a.indexOf){var c=a.indexOf(b);return!(-1===c||!1===c)}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Pb=function(a){var b=document;b.addEventListener?b.addEventListener("DOMContentLoaded",a,!1):b.attachEvent&&b.attachEvent("onDOMContentLoaded",
a)},Qb=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=1},Rb=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},Sb=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Tb=/(^| )adsbygoogle($| )/;var Ub=!!window.google_async_iframe_id,uc=function(a,b,c){var d=["<iframe"],f;for(f in a)a.hasOwnProperty(f)&&Ob(d,f+"="+a[f]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var vc=Math.random(),wc={},xc={},P=function(a,b,c,d,f){var e,g=!0;try{e=c()}catch(h){try{var n=Nb(h);c="";h.fileName&&(c=h.fileName);var l=-1;h.lineNumber&&(l=h.lineNumber);g=b(a,n,c,l,d)}catch(w){yc("pAR",w)}if(!g)throw h;}finally{if(f)try{f()}catch(k){}}return e},Q=function(a,b,c,d,f,e){var g={};if(f)try{f(g)}catch(h){}g.context=a;g.msg=b.substring(0,512);c&&(g.file=c);0<d&&(g.line=d.toString());g.url=wb.URL.substring(0,512);g.ref=wb.referrer.substring(0,512);zc(g);Ac("jserror",g,e);return!0},Ac=
function(a,b,c){try{if(("jserror"==a?Math.random():vc)<(c||.01)){var d="/pagead/gen_204?id="+a+Bc(b),f="http"+("http:"==E.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+d,f=f.substring(0,2E3);E.google_image_requests||(E.google_image_requests=[]);var e=E.document.createElement("img");e.src=f;E.google_image_requests.push(e)}}catch(g){}},yc=function(a,b){try{var c=Nb(b),d="";b.fileName&&(d=b.fileName);var f=-1;b.lineNumber&&(f=b.lineNumber);Q(a,c,d,f,void 0,void 0)}catch(e){Ac("jserror",
{context:"mRE",msg:e.toString()+"\n"+(e.stack||"")},void 0)}},zc=function(a){var b=a||{};K(wc,function(a,d){b[d]=a});K(xc,function(a,d){null!=E[a]&&(b[d]=E[a])})},Cc=function(a,b){return function(){var c=arguments;return P(a,Q,function(){return b.apply(void 0,c)},void 0,void 0)}},Dc=function(a,b){return Cc(a,b)},Ec=function(a){return Cc("aa:reactiveTag",a)},Bc=function(a){var b="";K(a,function(a,d){if(0===a||a){var f=String(a);b+="&"+d+"="+("function"==typeof encodeURIComponent?encodeURIComponent(f):
escape(f))}});return b};var Fc=null,Gc=function(){if(!Fc){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,B(a))b=a;else break;Fc=b}return Fc};var T={V:{j:"17415661",i:"17415662"},sa:{j:"453848100",i:"453848101"},ea:{j:"828064124",i:"828064125"},da:{j:"828064127",i:"828064128"},fa:{j:"828064170",i:"828064171"},X:{j:"453848130",i:"453848131",qa:"453848132",ra:"453848133"},ia:{j:"24819308",i:"24819309",W:"24819320"},ha:{j:"24819330",i:"24819331"},Y:{ba:"828064119"},ka:{j:"828064162",i:"828064163"},ja:{j:"828064164",i:"828064165",$:"828064166"},ca:{j:"828064190",i:"828064191"},ma:{j:"10573503",i:"10573504"},C:{j:"10573593",i:"10573594"},pa:{j:"10573511",
i:"10573512"},u:{j:"10573581",i:"10573582"},aa:{j:"10573521",i:"10573522"},A:{j:"10573571",i:"10573572"},na:{j:"10573531",i:"10573532"},D:{j:"10573561",i:"10573562"},oa:{j:"10573551",i:"10573552"},ga:{j:24819400,i:24819401},la:{j:"312815000",i:"312815001"},B:{j:"312815100",i:"312815101"},Z:{j:"26835101",i:"26835102"}};var Hc=function(){},Jc=function(a,b,c){switch(typeof b){case "string":Ic(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),Jc(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ic(f,
c),c.push(":"),Jc(a,e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Kc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Lc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ic=function(a,b){b.push('"');b.push(a.replace(Lc,function(a){if(a in Kc)return Kc[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return Kc[a]=f+b.toString(16)}));
b.push('"')};var Mc=null,Nc=Cb||Db||Ab||"function"==typeof p.atob;var Oc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Pc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];K(a,function(a,d){if(null!=a){var f;try{var e=[];Jc(new Hc,a,e);f=e.join("")}catch(g){}f&&(f=f.replace(/\//g,"\\$&"),Ob(b,d,"=",f,";"))}});return b.join("")};var U=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var Qc=function(a,b,c){P("files::getSrc",Q,function(){if("https:"==E.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Rc=function(a,b,c){c||(c=Ma?"https":"http");return Qc(a,b,c)};var V=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Sc=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Tc=null;var Uc=function(a){this.s=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:q(this.T,this)});this.P=a.google_iframe_oncopy},Vc;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(Oa,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(Pa,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(Qa,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(Ra,"&quot;")),-1!=W.indexOf("'")&&(W=W.replace(kb,"&#39;")),-1!=W.indexOf("\x00")&&(W=W.replace(lb,"&#0;")));Vc=W;Uc.prototype.set=function(a,b){this.P.handlers[a]=b;this.s.addEventListener&&this.s.addEventListener("load",q(this.L,this,a),!1)};
Uc.prototype.L=function(a){a=this.s.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};Uc.prototype.T=function(a,b){var c=Wc("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Wc=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var Xc=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Yc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Zc="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),$c=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var X,Y=function(a){this.w=[];this.s=a||window;this.o=0;this.v=null;this.K=0},ad=function(a,b){this.M=a;this.U=b};Y.prototype.enqueue=function(a,b){0!=this.o||0!=this.w.length||b&&b!=window?this.G(a,b):(this.o=2,this.I(new ad(a,window)))};Y.prototype.G=function(a,b){this.w.push(new ad(a,b||this.s));bd(this)};Y.prototype.N=function(a){this.o=1;if(a){var b=Dc("sjr::timeout",q(this.H,this,!0));this.v=this.s.setTimeout(b,a)}};
Y.prototype.H=function(a){a&&++this.K;1==this.o&&(null!=this.v&&(this.s.clearTimeout(this.v),this.v=null),this.o=0);bd(this)};Y.prototype.O=function(){return!(!window||!Array)};Y.prototype.R=function(){return this.K};Y.prototype.nq=Y.prototype.enqueue;Y.prototype.nqa=Y.prototype.G;Y.prototype.al=Y.prototype.N;Y.prototype.rl=Y.prototype.H;Y.prototype.sz=Y.prototype.O;Y.prototype.tc=Y.prototype.R;var bd=function(a){var b=Dc("sjr::tryrun",q(a.S,a));a.s.setTimeout(b,0)};
Y.prototype.S=function(){if(0==this.o&&this.w.length){var a=this.w.shift();this.o=2;var b=Dc("sjr::run",q(this.I,this,a));a.U.setTimeout(b,0);bd(this)}};Y.prototype.I=function(a){this.o=0;a.M()};
var cd=function(a){try{return a.sz()}catch(b){return!1}},dd=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&cd(a)&&N(a.nq)&&N(a.nqa)&&N(a.al)&&N(a.rl)},ed=function(){if(X&&cd(X))return X;var a=Gc(),b=a.google_jobrunner;return dd(b)?X=b:a.google_jobrunner=X=new Y(a)},fd=function(a,b){ed().nq(a,b)},gd=function(a,b){ed().nqa(a,b)};var hd=Ub?1==Rb(E):!Rb(E),id=function(){var a=La?"https":"http",b=x("script"),c;c=pa("","pagead2.googlesyndication.com");return["<",b,' src="',Rc(c,"/pagead/js/r20150901/r20150820/show_ads_impl.js",a),'"></',b,">"].join("")},jd=function(a,b,c,d){return function(){var f=!1;d&&ed().al(3E4);var e=a.document.getElementById(b);e&&!B(e.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var g=a.document.getElementById(b).contentWindow;if(B(g)){var h=a.document.getElementById(b).contentWindow,n=h.document;n.body&&n.body.firstChild||(n.open(),h.google_async_iframe_close=!0,n.write(c))}else{var l=a.document.getElementById(b).contentWindow,w;e=c;e=String(e);if(e.quote)w=e.quote();else{g=['"'];for(h=0;h<e.length;h++){var k=e.charAt(h),m=k.charCodeAt(0),n=g,r=h+1,u;if(!(u=mb[k])){var v;if(31<m&&127>m)v=k;else{var y=k;if(y in nb)v=
nb[y];else if(y in mb)v=nb[y]=mb[y];else{var z=y,F=y.charCodeAt(0);if(31<F&&127>F)z=y;else{if(256>F){if(z="\\x",16>F||256<F)z+="0"}else z="\\u",4096>F&&(z+="0");z+=F.toString(16).toUpperCase()}v=nb[y]=z}}u=v}n[r]=u}g.push('"');w=g.join("")}l.location.replace("javascript:"+w)}f=!0}catch(Z){l=Gc().google_jobrunner,dd(l)&&l.rl()}f&&(f=Wc("google_async_rrc",c),(new Uc(a)).set(b,jd(a,b,f,!1)))}},kd=function(a){var b=["<iframe"];K(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");
return b.join("")},md=function(a,b,c){ld(a,b,c,function(a,b,e){a=a.document;for(var g=b.id,h=0;!g||a.getElementById(g);)g="aswift_"+h++;b.id=g;b.name=g;g=Number(e.google_ad_width);h=Number(e.google_ad_height);16==e.google_reactive_ad_format?(e=a.createElement("div"),e.innerHTML=uc(b,g,h),c.appendChild(e.firstChild)):c.innerHTML=uc(b,g,h);return b.id})},ld=function(a,b,c,d){var f=x("script"),e,g;a:{try{var h=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof h){g=h;break a}h=D(["C","E"],
Ia)||null;a.top.google_pubvars_reuse_experiment=h;if(a.top.google_pubvars_reuse_experiment===h){g=h;break a}}catch(n){}g=null}if("E"===g){var l=null!=b.google_ad_client,w=null!=b.google_ad_width,k=null!=b.google_ad_height,m=$c(a);if(m){for(var r=0;r<Zc.length;r++){var u=Zc[r];null!=b[u]&&(m[u]=b[u])}var v=$c(a);if(v){var y=v.google_ad_width,z=v.google_ad_height,F=v.google_ad_format;if(y&&z&&F){var Z,Sa=F&&F.match(/(\d+)x(\d+)/);Z=Sa?{width:Sa[1],height:Sa[2]}:null;!Z||Z.width==y&&Z.height==z||delete v.google_ad_format}}}var Ta=
$c(a);if(Ta)for(var Ua=0;Ua<Zc.length;Ua++){var ra=Zc[Ua];null==b[ra]&&null!=Ta[ra]&&(b[ra]=Ta[ra])}var Od=null!=b.google_ad_client,Pd=null!=b.google_ad_width,Qd=null!=b.google_ad_height;e=[l?"c2":Od?"c1":"c0",w?"w2":Pd?"w1":"w0",k?"h2":Qd?"h1":"h0"].join()}var C={},Rd=b.google_ad_height;C.width='"'+b.google_ad_width+'"';C.height='"'+Rd+'"';C.frameborder='"0"';C.marginwidth='"0"';C.marginheight='"0"';C.vspace='"0"';C.hspace='"0"';C.allowtransparency='"true"';C.scrolling='"no"';C.allowfullscreen='"true"';
C.onload='"'+Vc+'"';var Va=d(a,C,b),sa;sa=nd(b)?D(["c","e"],Ga):null;var Vb=b.google_ad_output,L=b.google_ad_format;L||"html"!=Vb&&null!=Vb||(L=b.google_ad_width+"x"+b.google_ad_height,"e"==sa&&(L+="_as"));var Sd=!b.google_ad_slot||nd(b),L=L&&Sd?L.toLowerCase():"";b.google_ad_format=L;for(var Wb=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height],Xb,Yb=[],Zb=0,aa=c;aa&&25>Zb;aa=aa.parentNode,++Zb)Yb.push(9!=aa.nodeType&&aa.id||"");(Xb=Yb.join())&&Wb.push(Xb);
b.google_ad_unit_key=Sb(Wb.join(":")).toString();var $b=a.google_adk2_experiment=a.google_adk2_experiment||D(["C","E"],Fa)||"N";if("E"==$b){for(var A=c,ac=[],bc=0;A&&25>bc;++bc){var ta="",ta=(ta=9!=A.nodeType&&A.id)?"/"+ta:"",Wa;a:{if(A&&A.nodeName&&A.parentElement)for(var Td=A.nodeName.toString().toLowerCase(),cc=A.parentElement.childNodes,dc=0,Xa=0;Xa<cc.length;++Xa){var Ya=cc[Xa];if(Ya.nodeName&&Ya.nodeName.toString().toLowerCase()==Td){if(A==Ya){Wa="."+dc;break a}++dc}}Wa=""}ac.push((A.nodeName&&
A.nodeName.toString().toLowerCase())+ta+Wa);A=A.parentElement}var Ud=ac.join()+":",R=a,ec=[];if(R)try{for(var ba=R.parent,fc=0;ba&&ba!=R&&25>fc;++fc){for(var gc=ba.frames,ua=0;ua<gc.length;++ua)if(R==gc[ua]){ec.push(ua);break}R=ba;ba=R.parent}}catch(ke){}b.google_ad_unit_key_2=Sb(Ud+ec.join()).toString()}else"C"==$b&&(b.google_ad_unit_key_2="ctrl");var Vd=Pc(b),S=null,Za=D(["C","E"],Ja);if("E"==Za){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var $a=encodeURIComponent(window.JSON.stringify(b)),
ab;if(Nc)ab=p.btoa($a);else{for(var G=[],hc=0,bb=0;bb<$a.length;bb++){for(var ca=$a.charCodeAt(bb);255<ca;)G[hc++]=ca&255,ca>>=8;G[hc++]=ca}if(!ga(G))throw Error("encodeByteArray takes an array as a parameter");if(!Mc){Mc={};for(var va=0;65>va;va++)Mc[va]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(va)}for(var wa=Mc,ic=[],M=0;M<G.length;M+=3){var jc=G[M],kc=M+1<G.length,lc=kc?G[M+1]:0,mc=M+2<G.length,nc=mc?G[M+2]:0,Wd=jc>>2,Xd=(jc&3)<<4|lc>>4,oc=(lc&15)<<2|nc>>6,pc=
nc&63;mc||(pc=64,kc||(oc=64));ic.push(wa[Wd],wa[Xd],wa[oc],wa[pc])}ab=ic.join("")}S=ab;break a}Ac("sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0})}catch(Yd){yc("sblob",Yd)}S=""}S||(S="{X}")}else"C"==Za&&(S="{C}");var cb;var Zd=b.google_ad_client,db;if(db=hd){if(!Tc)b:{for(var eb=[E.top],fb=[],$d=0,da;da=eb[$d++];){fb.push(da);try{if(da.frames)for(var ae=da.frames.length,gb=0;gb<ae&&1024>eb.length;++gb)eb.push(da.frames[gb])}catch(le){}}for(var hb=0;hb<fb.length;hb++)try{var qc=fb[hb].frames.google_esf;
if(qc){Tc=qc;break b}}catch(me){}Tc=null}db=!Tc}if(db){var ea={style:"display:none"};ea["data-ad-client"]=Xc(Zd);ea.id="google_esf";ea.name="google_esf";ea.src=Rc(pa("","googleads.g.doubleclick.net"),"/pagead/html/r20150901/r20150820/zrt_lookup.html");cb=kd(ea)}else cb="";var ib=ka,rc=(new Date).getTime(),sc=a.google_top_experiment,jb=a.google_async_for_oa_experiment;jb&&(a.google_async_for_oa_experiment=
void 0);var tc=a.google_always_use_delayed_impressions_experiment,be=["<!doctype html><html><body>",cb,"<",f,">",Vd,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',Va,'";google_start_time=',ib,";",Za?'google_pub_vars = "'+S+'";':"",e?'google_pubvars_reuse_experiment_result = "'+e+'";':"",sc?'google_top_experiment="'+sc+'";':"",jb?'google_async_for_oa_experiment="'+jb+'";':"",tc?'google_always_use_delayed_impressions_experiment="'+tc+'";':"",sa?'google_append_as_for_format_override="'+
sa+'";':"","google_bpp=",rc>ib?rc-ib:1,";google_async_rrc=0;</",f,">",id(),"</body></html>"].join("");(a.document.getElementById(Va)?fd:gd)(jd(a,Va,be,!0))},od=Math.floor(1E6*Math.random()),pd=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var f=c[d].indexOf("=");-1!=f&&(b[c[d].substr(0,f)]=c[d].substr(f+1))}}catch(e){}c=b[3];if(b[1]==od&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=
0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},nd=function(a){return a.google_override_format||!Yc[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},qd=function(a,b){var c=navigator;if(Ha&&a&&b&&c){var d=a.document,c=d.createElement("script"),f=Xc(b);c.async=!0;c.type="text/javascript";c.src=Rc("pagead2.googlesyndication.com","/pub-config/"+f+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,
d)}};var rd=function(){return I("iPad")||I("Android")&&!I("Mobile")||I("Silk")};var sd=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var f="google_ad_"+c[d];if(!b.hasOwnProperty(f)){var e;e=vb(a[c[d]]);e=null===e?null:Math.round(e);null!=e&&(b[f]=e)}}},td=function(a,b){try{var c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(f){return null}};var ud={rectangle:1,horizontal:2,vertical:4,autorelaxed:1},vd=[{width:970,height:90,format:2},{width:728,height:90,format:2},{width:468,height:60,format:2},{width:336,height:280,format:1},{width:320,height:100,format:2},{width:320,height:50,format:2},{width:300,height:600,format:4},{width:300,height:250,format:1},{width:250,height:250,format:1},{width:234,height:60,format:2},{width:200,height:200,format:1},{width:180,height:150,format:1},{width:160,height:600,format:4},{width:125,height:125,format:1},
{width:120,height:600,format:4},{width:120,height:240,format:4},{width:301,height:300,format:8},{width:120,height:600,format:8}];var wd=[{l:[3,0,0],m:[6,12,14,0,1,3,2,4,13,5,7,8,9,10,11,15]},{l:[3,0,1],m:[6,15,0,1,2,3,4,13,5,7,8,9,10,11,12,14]},{l:[3,0,2],m:[6,15,0,1,2,3,4,7,8,9,10,13,5,11,12,14]},{l:[3,1,0],m:[6,12,15,0,1,3,4,13,2,5,7,8,9,10,11,14]},{l:[3,1,1],m:[6,15,0,1,7,8,11,2,3,4,5,9,10,12,13,14]},{l:[3,1,2],m:[6,15,0,1,2,3,4,7,9,11,5,8,10,12,13,14]},{l:[3,2,0],m:[0,6,12,15,1,2,3,4,13,5,7,8,9,10,11,14]},{l:[3,2,1],m:[0,6,12,14,1,2,3,4,13,5,7,8,9,10,11,15]},{l:[3,2,2],m:[0,15,1,2,3,4,13,9,5,6,7,8,10,11,12,14]},{l:[2,0,
0],m:[6,15,0,1,3,2,7,8,10,13,9,4,5,11,12,14]},{l:[2,0,1],m:[6,15,0,1,2,3,7,8,4,10,9,13,5,11,12,14]},{l:[2,0,2],m:[0,15,1,2,3,4,7,8,13,5,6,9,10,11,12,14]},{l:[4,0,0],m:[6,12,14,15,0,1,7,2,8,11,9,3,4,5,10,13]},{l:[4,0,1],m:[6,12,14,0,1,2,3,4,7,8,11,13,5,9,10,15]},{l:[4,0,2],m:[6,15,0,1,2,3,5,7,8,13,9,4,10,11,12,14]}],xd=function(a,b){if(!b)return 0;var c=b.y;switch(a){case 2:return 285>c?0:1396>c?1:2;case 4:return 275>c?0:1057>c?1:2;default:return 216>c?0:838>c?1:2}};var yd=function(a){var b=Infinity;do{var c;a:{if(a&&a.style&&a.style.height&&(c=/^(\d+)px$/.exec(a.style.height))){c=+c[1];break a}c=null}c&&(b=Math.min(b,c))}while(a=a.parentNode);return b},Ad=function(a,b,c){if("auto"==c)return c=U(a).clientWidth,c=Math.min(1200,c),b/=c,zd(a)&&!(488>U(a).clientWidth)&&.6<b?2:.25>=b?4:3;if(O(V(a),T.B.i)&&"autorelaxed"==c)return 8;a=0;for(var d in ud)-1!=c.indexOf(d)&&(a|=ud[d]);return a},Cd=function(a,b,c,d,f){var e;if(zd(d)){b:{e=!rd()&&(I("iPod")||I("iPhone")||
I("Android")||I("IEMobile"))?2:rd()?4:3;var g=td(f,d);e=[e,g&&3==e?83>g.x?0:265>g.x?1:2:0,xd(e,g)];for(g=0;g<wd.length;++g){var h=wd[g],n;c:{n=e;var l=h.l;if(ga(n)&&ga(l)&&n.length==l.length){for(var w=n.length,k=xb,m=0;m<w;m++)if(!k(n[m],l[m])){n=!1;break c}n=!0}else n=!1}if(n){e=h.m;break b}}throw Error("No format for "+e);}g=[];for(h=0;h<e.length;++h)g.push(vd[e[h]]);e=g}else e=vd.slice(0).sort(Bd);if(O(V(d),T.u.i)){g=e.length;h=[];for(n=0;n<g;++n)l=Math.floor(Math.random()*(n+1)),h[n]=h[l],h[l]=
e[n];e=h}if(h=g=488>U(d).clientWidth)h=Math.min(U(d).clientHeight,16*U(d).clientWidth/9),d=td(f,d),h=(d?d.y:0)<h-100;d=h;for(f=0;f<e.length;f++)if(h=e[f],h.width<=a&&h.height<=b&&h.format&c&&!(320==h.width&&(g&&50==h.height||!g&&100==h.height)||d&&250<=h.height))return h;return null},Bd=function(a,b){return b.width-a.width||b.height-a.height},zd=function(a){return O(V(a),T.C.i)||Dd(a)},Dd=function(a){var b=T.D;return"LE"==a.google_responsive_override_logs_experiment||O(V(a),b.i)};var Ed=function(a,b){b&&a.push(b);return b},Fd=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:D([c,d],b)},Gd=function(a,b,c,d){a=a.google_active_plles=a.google_active_plles||[];return O(V(b),c)?(a.push(c),c):O(V(b),d)?(a.push(d),d):null};var Hd=function(a){return Tb.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},Jd=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");Id(a,b,c)},Id=function(a,b,c){Kd(a,b,c);if(!Ld(a,b,c)){if(b.google_reactive_ads_config){if(Md)throw Error("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");Md=!0}Qb(c);1==Rb(c)&&qd(c,b.google_ad_client);K(Oc,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&
"html"!=d)throw Error("adsbygoogle.push() error: No support for google_ad_output="+d);P("aa::load",Q,function(){md(c,b,a)})}},Ld=function(a,b,c){var d=b.google_reactive_ads_config;if(d)var f=d.page_level_pubvars,e=(ha(f)?f:{}).google_tag_origin;var g=b.google_ad_slot,f=c.google_ad_modifications;!f||Sc(f.ad_whitelist,g,e||b.google_tag_origin)?f=null:(e=f.space_collapsing||"none",f=(g=Sc(f.ad_blacklist,g))?{F:!0,J:g.space_collapsing||e}:f.remove_ads_by_default?{F:!0,J:e}:null);return f&&f.F&&"on"!=
b.google_adtest?("slot"==f.J&&(null!==ub(a.getAttribute("width"))&&a.setAttribute("width",0),null!==ub(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0):!(f=qb(a,c))||"none"!=f.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||d?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},Nd=function(a,b){var c=a.getBoundingClientRect();if(c&&0==c.left&&0==
c.right&&0==c.width&&0==c.height)return!1;var d=qb(a,b);if(!d)return!1;c=vb(d.width);d=vb(d.height);return null==c||null==d||Yc[c+"x"+d]?!1:!0},Kd=function(a,b,c){for(var d=a.attributes,f=d.length,e=0;e<f;e++){var g=d[e];if(/data-/.test(g.name)){var h=g.name.replace("data","google").replace(/-/g,"_");if(!b.hasOwnProperty(h)){var g=g.value,n={google_reactive_ad_format:ma,google_allow_expandable_ads:na},g=n.hasOwnProperty(h)?n[h](g,null):g;null===g||(b[h]=g)}}}d=c.google_ad_modifications=c.google_ad_modifications||
{};if(!d.plle){d.plle=!0;var d=d.loeids=d.loeids||[],e=T.C,l;f=e.j;e=e.i;if(c.location&&c.location.hash=="#google_plle_"+e)l=e;else{b:{try{l=parseInt(c.localStorage.getItem("google_experiment_mod"),10)}catch(w){l=null;break b}0<=l&&1E3>l||(l=Math.floor(1E3*rb(c)),c.localStorage.setItem("google_experiment_mod",""+l))}l=null===l||l<ya||l>=ya+za?null:l&1?e:f}Ed(d,l)||(e=T.B,Ed(d,Fd(c,Aa,e.j,e.i)));e=T.u;Ed(d,Fd(c,Ba,e.j,e.i));e=T.A;Ed(d,Fd(c,Ca,e.j,e.i));e=T.D;Ed(d,Fd(c,Da,e.j,e.i))}if(b.google_enable_content_recommendations&&
1==b.google_reactive_ad_format)b.google_ad_width=U(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=U(c).clientWidth||0,b.google_ad_height=U(c).clientHeight||0,a.style.display="none";else if(9==b.google_reactive_ad_format)b.google_ad_width=U(c).clientWidth||0,b.google_ad_height=U(c).clientHeight||0,a.style.display="none";else if(l=
b.google_ad_format,(l="auto"==l||/^((^|,) *(horizontal|vertical|rectangle|autorelaxed) *)+$/.test(l))||(Nd(a,c)?(l=T.D,Gd(b,c,l.j,l.i)!==l.i?l=!1:(b.google_ad_format="auto",l=!0)):l=!1),l){var k=T.C;Gd(b,c,k.j,k.i);k=T.u;Gd(b,c,k.j,k.i);k=T.A;Gd(b,c,k.j,k.i);"autorelaxed"==b.google_ad_format&&(k=T.B,Gd(b,c,k.j,k.i));var k=a.offsetWidth,m=O(V(c),T.A.i)||zd(c)||O(V(c),T.u.i)?yd(a):void 0,r=b.google_ad_format,u="number"==typeof m?m:Infinity,v=Ad(c,k,r);b&&(b.google_responsive_formats=v);c=Dd(c)?Cd(k,
u,v,c,a)||Cd(k,u,7,c,a):Cd(k,u,v,c,a);if(!c)throw Error("adsbygoogle.push() error: Cannot find a responsive size for a container of width="+k+"px and height="+m+"px data-ad-format="+r);b.google_ad_width=300<k&&300<c.height?c.width:1200<k?1200:Math.round(k);b.google_ad_height=c.height;a.style.height=c.height+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else{l=Nd(a,c)?(l=D(["LC","LE"],Ea))?"LE"==(b.google_responsive_override_logs_experiment=l):!1:!1;if(l)try{m=
a.offsetWidth,r=Ad(c,m,"auto"),v=yd(a),k=(u=Cd(m,v,r,c,a)||Cd(m,v,7,c,a))?{width:300<m&&300<u.height?u.width:1200<m?1200:Math.round(m),height:u.height,format:u.format}:null,b.google_ember_w=k?k.width:"x",b.google_ember_h=k?k.height:"x"}catch(y){b.google_ember_w=b.google_ember_h="e"}!tb.test(b.google_ad_width)&&!sb.test(a.style.width)||!tb.test(b.google_ad_height)&&!sb.test(a.style.height)?(k=qb(a,c),a.style.width=k.width,a.style.height=k.height,sd(k,b),b.google_loader_features_used=256):(sd(a.style,
b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(k=a.style.width,a.style.width="100%",m=a.offsetWidth,a.style.width=k,b.google_available_width=m));m=b.google_ad_width;k=b.google_ad_height;m&&k&&!Yc[m+"x"+k]&&(k=D("CD ED CA EA CW EW".split(" "),xa))&&("CD"==k?b.google_overflowing_ads_experiment=k:((m=/W$/.test(k)&&728>m)||(m=/^E/.test(k),r=U(c),a&&a.getBoundingClientRect&&r&&r.getBoundingClientRect?(c=a.getBoundingClientRect(),r=r.getBoundingClientRect(),
c=Math.min(c.right,r.right)-Math.max(c.left,r.left),c=Math.round(Math.max(0,c))):c=0,160>c||15>b.google_ad_width-c?a=!1:(r=a.style.width||"",a.style.width="100%",u=a.offsetWidth,160>u||0>c-u?(a.style.width=r,a=!1):(m?(b.google_ad_width=c,a.style.width=c+"px"):a.style.width=r,a=!0)),m=!a&&"ED"!=k),m||(b.google_overflowing_ads_experiment=k)))}},ce=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(Hd(d)&&(!a||d.id==a))return d;return null},Md=!1,de=function(a){var b=
{};K(la,function(c,f){a.hasOwnProperty(f)&&(b[f]=a[f])});ha(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=document.createElement("ins");c.className="adsbygoogle";c.style.display="none";document.body.appendChild(c);Jd(c,{google_reactive_ads_config:b,google_ad_client:a.google_ad_client})},ee=function(a){if(!pb())throw Error("adsbygoogle.push() error: Page-level tag must be placed in top window.");document.body?de(a):Pb(Ec(function(){de(a)}))},fe=function(a,b,c,d,f,e){if(-1<
b.indexOf("adsbygoogle.push() error: ")){c={};zc(c);if(f)try{f(c)}catch(g){}c.context=a;c.msg=b.substring(0,512);c.url=wb.URL.substring(0,512);c.ref=wb.referrer.substring(0,512);Ac("puberror",c,e||.01);return!1}return Q(a,b,c,d,f,e)},he=function(a){var b={};P("aa::hqe",fe,function(){ge(a,b)},function(c){c.client=c.client||b.google_ad_client||a.google_ad_client;c.slotname=c.slotname||b.google_ad_slot;c.tag_origin=c.tag_origin||b.google_tag_origin})},ge=function(a,b){ka=(new Date).getTime();var c;a:{if(a.enable_page_level_ads){if("string"==
typeof a.google_ad_client){c=!0;break a}throw Error("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");}c=!1}if(c)ee(a);else{c=a.element;var d=a.params;d&&K(d,function(a,c){b[c]=a});if(c){if(!Hd(c)&&(c=c.id?ce(c.id):null,!c))throw Error("adsbygoogle.push() error: 'element' has already been filled.");if(!("innerHTML"in c))throw Error("adsbygoogle.push() error: 'element' is not a good DOM element.");}else if(c=ce(),!c)throw Error("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");
Jd(c,b)}},ie=function(){P("aa::main",fe,function(){if(!window.google_top_experiment&&!window.google_top_js_status){var a=window;if(2!==(a.top==a?0:B(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var b;try{b=E.top.frames.google_top_static_frame?!0:!1}catch(c){b=!1}if(b){if(window.google_top_experiment=D(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],qa),"jp_c"!==window.google_top_experiment){a=window;a.addEventListener?a.addEventListener("message",pd,!1):a.attachEvent&&a.attachEvent("onmessage",
pd);window.google_top_js_status=3;a={0:"google_loc_request",1:od};b=[];for(var d in a)b.push(d+"="+a[d]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}if((d=window.adsbygoogle)&&d.shift)for(b=20;(a=d.shift())&&0<b--;)try{he(a)}catch(f){throw window.setTimeout(ie,0),f;}if(!d||!d.loaded){window.adsbygoogle={push:he,loaded:!0};d&&je(d.onload);try{Object.defineProperty(window.adsbygoogle,"onload",{set:je})}catch(e){}}})},je=function(a){N(a)&&
window.setTimeout(a,0)};ie();}).call(this);