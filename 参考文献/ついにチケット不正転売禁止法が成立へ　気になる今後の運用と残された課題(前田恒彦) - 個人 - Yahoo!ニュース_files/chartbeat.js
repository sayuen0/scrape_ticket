(function(){var g=void 0,h=true,i=null,j=false,k,o=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function ba(a,b){function c(){}c.prototype=b.prototype;a.X=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ca(){}
function da(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==i){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),da(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],typeof f!="function"&&(c.push(d),ea(e,c),c.push(":"),da(a,f,c),d=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var fa={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},ga=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function ea(a,b){b.push('"',a.replace(ga,function(a){if(a in fa)return fa[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return fa[a]=e+b.toString(16)}),'"')};var ha={scroll:5E3,keydown:5E3,mousemove:5E3,resize:5E3,mousedown:5E3,focus:5E3,pageload:5E3},ia={scroll:2E4,keydown:5E3,mousemove:5E3,resize:5E3,mousedown:5E3,focus:5E3,pageload:5E3};function ja(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function ka(a,b){var c="",d=la(encodeURIComponent(a));d.splice(b||5,d.length);p(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function la(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,l=3285377520,n=[],m,s,x,D,F,S=Math.ceil((a.length/4+2)/16),P=[S],y=0,v;y<S;y++){P[y]=[];for(m=0;m<16;m++)P[y][m]=a.charCodeAt(y*64+m*4)<<24|a.charCodeAt(y*64+m*4+1)<<16|a.charCodeAt(y*64+m*4+2)<<8|a.charCodeAt(y*64+m*4+3)}y=(a.length-1)*8;a=S-1;P[a][14]=Math.floor(y/Math.pow(2,32));P[a][15]=y&4294967295;for(y=0;y<S;y++){for(v=0;v<16;v++)n[v]=P[y][v];
for(v=16;v<80;v++)n[v]=(n[v-3]^n[v-8]^n[v-14]^n[v-16])<<1|(n[v-3]^n[v-8]^n[v-14]^n[v-16])>>>31;a=c;m=d;s=e;x=f;D=l;for(v=0;v<80;v++)F=Math.floor(v/20),F=(a<<5|a>>>27)+(F==0?m&s^~m&x:F==1?m^s^x:F==2?m&s^m&x^s&x:m^s^x)+D+b[F]+n[v]&4294967295,D=x,x=s,s=m<<30|m>>>2,m=a,a=F;c=c+a&4294967295;d=d+m&4294967295;e=e+s&4294967295;f=f+x&4294967295;l=l+D&4294967295}return[c,d,e,f,l]}
function ma(a){var b=o.navigator,c=o.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];p(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=o.performance;d=d.concat([b&&b.now?b.now():"",document.title,o.location.href,q(),ja()]);return d.concat(a||[]).join()}function r(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}
function t(a){return typeof a!=="undefined"}function u(a){return a.replace(/^www\./,"")}var na=/^((https?\:)?(\/\/))/i;function oa(a){return a.replace(na,"")}var pa=/^((https?\:)?(\/\/))?[^\/]*/;function qa(a){return a.replace(pa,"")}var ra=/\#.*/;function sa(a){return a.replace(ra,"")}var ta=/\?[^\#]*/;function ua(a){return a.toLowerCase()}var va=/\/+((\?|\#).*)?$/;function wa(a){return a.replace(va,"$1")}function xa(a){return a.replace(ta,"")}
function ya(a){var b=a.match(/\?(.*)$/ig)?a.match(/\?(.*)$/ig)[0].slice(1).replace(/#(.*)?/ig,"").split("&"):[],c=a.match(/#(.*)$/ig)?a.match(/#(.*)$/ig)[0]:"",a=a.match(/[#|\?](.*)?/ig)?a.slice(0,a.search(/[#|\?](.*)?/ig)):a,b=za(b,function(a){return a.search("utm")!==0});b.length>0&&(a+="?"+b.join("&"));return a+c}function Aa(a,b){if(a===b)return 0;var c=i;p([ua,wa,oa,qa,sa,xa],function(d,e){a=d(a);b=d(b);if(a===b)return c=e+1,j});return c}
function w(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function Ba(a,b){var c=o;c.removeEventListener?c.removeEventListener(a,b,j):c.detachEvent&&c.detachEvent("on"+a,b)}function Ca(a){return typeof a==="number"}function z(a){return typeof a==="string"}function Da(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function q(){return(new Date).getTime()}function Ea(){return o.location.protocol==="http:"?"http:":"https:"}
function Fa(a){return!!a&&a.constructor===Object}function p(a,b){if(Fa(a)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===j)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===j)break}}function Ga(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}function za(a,b){var c=[];p(a,function(a){b(a)&&c.push(a)});return c}
function Ha(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var f=0,l=a.length;f<=l;f++)c[0][f]=f;for(var n,m,s,d=1;d<=e;d++)for(f=1;f<=l;f++)n=d-1,m=f-1,s=c[n][m],b.charAt(n)==a.charAt(m)?c[d][f]=s:(m=c[d][m]+1,n=c[n][f]+1,s+=2,c[d][f]=Math.min(m,n,s));return c[b.length][a.length]}var Ia,Ja=o.setInterval,Ka=o.clearInterval,La=o.setTimeout,Ma=o.clearTimeout;
function Na(a){switch(a){case g:return"undefined";case "":return"empty";default:return a}};function Oa(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace(/\+/g," "),p(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function Pa(a,b){var c="",d=o.location.href.match(/[^?]+[?]([^#]+).*/);if(d){var d=Oa(d[1]),e=b||a;d[e]&&(c=d[e])}return encodeURIComponent(c)}function Qa(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function Ra(a){var b=[];p(Sa,function(c){var d=a[c];t(d)&&(Object.prototype.toString.call(d)==="[object Array]"?p(d,function(a){b.push(c+"="+a)}):Fa(d)?p(d,function(a,c){b.push(c+"="+a)}):((d+"").length||c=="r")&&b.push(c+"="+d))});b.push("_");return b.join("&")}
function Ta(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=o.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0&&a.indexOf("app:")<0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=Qa(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",f);a=f===-1?
"/"+a:e.substr(0,f)+"/"+a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(Qa(b.protocol,b.port)||b.port==="0")b.port="";return b}
function Ua(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function Va(a,b,c,d){b=b||"*";c=c||document;if("querySelectorAll"in c)return c.querySelectorAll(b+"["+(a+(d?'="'+d+'"':""))+"]");for(var e=[],b=c.getElementsByTagName(b),c=b.length,f="";c--;)(f=b[c].getAttribute(a))&&(!d||f===d)&&e.push(b[c]);return e}function Wa(a,b,c){c=c||"";if(a===g)a=j;else{var d;if(!(d=c===""&&a.getAttribute(b)))if(d=a.getAttribute(b))d=a.getAttribute(b)===c;a=d?a:a===document.body?j:Wa(a.parentNode,b,c)}return a}
function Xa(a,b,c){a="page"+a+"Offset";b="scroll"+b;if(c&&(c=Va("data-cb-scroll-element"))&&c.length)return c[0][b];if(Ca(o[a]))return o[a];else if(document.body&&document.body[b])return document.body[b];else if(document.documentElement[b])return document.documentElement[b];return 0}function Ya(a){var b=document,b=b[b.compatMode==="CSS1Compat"?"documentElement":"body"]["client"+a]||0;window["inner"+a]&&(b=Math.min(window["inner"+a],b));return b}
function Za(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function $a(a,b,c){a.ownerDocument||(a=a.correspondingUseElement);if(!a||!a.ownerDocument)return i;var d=a.ownerDocument.documentElement,e=0,f=t(c)?c+1:-1;z(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return i}
function ab(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function bb(a){a=a||window.event;return!a?i:$a(a.target||a.srcElement,ab,10)}function cb(a,b){var c=document.createElement(a);p(b,function(a,b){c.setAttribute(b,a)});return c};function db(){this.G={};this.bb=1}function A(a,b,c,d){a.bb++;a.G[b]=a.G[b]||{};a.G[b][a.bb]=[c,d];return a.bb}function eb(a,b){if(z(b))a.G[b]=g,delete a.G[b];else if(Ca(b)){var c=h;p(a.G,function(a){p(a,function(e,f){if(parseInt(f,10)===b)return a[f]=g,delete a[f],c=j});return c})}}db.prototype.P=function(a,b){if(this.G[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];p(this.G[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};
db.prototype.addEventListener=function(a,b){var c=A(this,a,b);b._cbEventId=c};db.prototype.removeEventListener=function(a,b){this.G[a]&&this.G[a][b._cbEventId]&&this.G[a][b._cbEventId][0]===b&&eb(this,b._cbEventId)};var B=new db,fb="a";var C={};
C.B=function(){C.Oa?C.xa("pageload"):(C.Eb=[{target:o,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:o,event:"resize"},{target:document.body,event:"mousedown"}],C.Ea=i,C.Y=i,C.Na={},C.Ma={},C.pb={},C.Fa={},p(C.Eb,function(a){var b=a.event;w(a.target,b,function(a){C.xa.call(C,b,a)})}),A(B,"f",function(){C.xa("focus")}),C.xa("pageload"),w(document.body,"click",function(a){(a=bb(a))&&B.P("c",a)},h),w(document.body,"contextmenu",function(a){(a=bb(a))&&
B.P("r",a)}),C.Oa=h)};C.Lb=function(){var a,b=C.pb.keydown;if(b===g)return j;b=q()-b;return b<=(a||15E3)&&b>=0};C.ja=function(a,b){var c=C.Fa[a];if(!c)return"";var b=b||q(),d,e=0;p(c,function(a){d=Math.floor((b-a)/1E3);d>=0&&d<16&&(e|=1<<d)});c=("0000"+e.toString(16)).slice(-4);return c=="0000"?"":c};C.oc=function(){C.Fa={}};C.gb=100;
C.xa=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}C.wc(a);if(C.Ea===i)C.zb(a);else if(!C.Y||ha[C.Y]<ha[a]||ia[C.Y]<ia[a])C.Y=a};C.wc=function(a){var b=q();C.pb[a]=b;var c=C.Fa[a];c?c.length<2?c.push(b):c[c.length-2]>b-1E3?c[c.length-1]=b:c.push(b):c=[b];c.length>32&&c.shift();C.Fa[a]=c};C.zb=function(a){C.Ea=La(C.Qb,C.gb);B.P(fb);C.Na[a]!==i&&Ma(C.Na[a]);C.Ma[a]!==i&&Ma(C.Ma[a]);C.xb(a,C.Na,ha,"i");C.xb(a,C.Ma,ia,"j")};
C.xb=function(a,b,c,d){b[a]=La(function(){Ma(b[a]);delete b[a];var c=j;p(b,function(){c=h;return j});c||B.P(d)},c[a]+C.gb)};C.Qb=function(){Ma(C.Ea);C.Ea=i;if(C.Y)C.zb(C.Y),C.Y=i};var gb,hb,ib,jb,kb;(function(){var a,b;p(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof o.document[a]==="boolean")return b=c,j});b!==g&&(jb=a,kb=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),ib=b+"visibilitychange")})();var E=j;function lb(){E=kb&&o.document[kb]==="prerender"?h:j}function mb(){hb=h;B.P("f")}function nb(){hb=j;B.P("b")}
function ob(a,b,c){o.addEventListener?o.addEventListener(a,c,j):o.document.attachEvent&&o.document.attachEvent(b,c)}function pb(){var a=h;o.document.hasFocus&&(a=o.document.hasFocus());var b=j;jb&&(b=o.document[jb]);return a&&!b}function qb(){pb()?mb():nb()}function rb(a){lb();if(E){var b=j,c=function(){b||(lb(),E||(b=h,a(),o.window.setTimeout(function(){o.document.removeEventListener(ib,c,j)},100)))};o.document.addEventListener(ib,c,j)}else a()};function G(){this.a=o._sf_async_config||{};this.kb=r(this.tb,this)}G.prototype.B=function(){this.ub=0};G.prototype.tb=function(){};G.prototype.Ba=function(a){if(!E){var b=this.kb,c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}};G.prototype.ha=function(){this.kb=i};var H="path",I="domain",sb="useCanonical",tb="useCanonicalDomain",J="title",ub="virtualReferrer";function K(a,b,c){a[b]=a[b]||c}function vb(a,b){for(var c=o[a]||[];c.length;)b(c.shift());o[a]={push:b}}function wb(a){p(document.getElementsByTagName("script"),function(b){if(typeof b.src==="string"&&b.src.match(/chartbeat.js/))return b=Oa(b.src.split("?")[1]),K(a,"uid",b.uid),K(a,I,b.domain),j})}function xb(a,b){return a[b]?encodeURIComponent(a[b]):""}
function yb(a){var b={};p(a,function(a,d){d.charAt(0)=="_"&&(b[d]=a)});return b};var L={};L.Ob=function(a){try{L.create("_cb_test","1",1,a);var b=L.k("_cb_test");L.remove("_cb_test",a);return b==="1"}catch(c){return j}};L.k=function(a){a+="=";var b="";p(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),j});return b};
L.create=function(a,b,c,d){var e=o._sf_async_config;if(e&&e.noCookies)return"";e=new Date;e.setTime(q()+c*1E3);a=a+"="+b+("; expires="+e.toGMTString())+("; path="+d);return document.cookie=a};L.remove=function(a,b){return L.k(a)?L.create(a,"",-86400,b):""};var M={};M.D=function(a){var b=o._sf_async_config;if(!a&&b&&b.noCookies)return i;if(M.D.Ja!==g)return M.D.Ja;var a=q()+"",c,d;try{if((d=o.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return M.D.Ja=d}catch(e){}return M.D.Ja=i};M.k=function(a){var b=M.D();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&q()>c)?(M.remove(a),""):b.getItem(a)||""};
M.create=function(a,b,c){var d=M.D();if(d){var e=new Date;e.setTime(q()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};M.remove=function(a){var b=M.D();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function zb(a,b){this.Aa=a||"";this.Q=b||"/";this.Rb=M.D()!==i||L.Ob(this.Q);this.ab=j;Ab(this)}k=zb.prototype;k.isSupported=function(){return this.Rb};
function Ab(a){if(!L.k("_cb_ls")){var b=M.D()!==i,c=L.k("_SUPERFLY_lockout");c&&p(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_lockout",c,600,h)});var d=L.k("_chartbeat3");d&&(a.create("_v__chartbeat3",d,34128E3,h),L.remove("_chartbeat3",a.Q));b&&((b=L.k("_chartbeat2"))&&a.create("_chartbeat2",b,34128E3,h),(b=L.k("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));L.create("_cb_ls","1",34128E3,a.Q)}}
k.create=function(a,b,c,d){a=d?a:this.Aa+a;(M.D()?M:L).create(a,b,c,this.Q);M.D()&&L.create(a,b,c,this.Q)};k.update=function(a,b,c,d,e,f,l){a=d?a:this.Aa+a;e=z(e)?e:"::";d=(d=this.k(a,h))?d.split(e):[];if(l&&d.length){var n=l(b),m=Ga(d,function(a){return l(a)===n});m!==-1&&d.splice(m,1)}d.push(b);for(Ca(f)&&d.length>f&&d.splice(0,d.length-f);d.length>1&&d.join(e).length>4E3;)d.shift();this.create(a,d.join(e),c,h)};
k.k=function(a,b){var a=b?a:this.Aa+a,c=(M.D()?M:L).k(a);if(!c&&M.D()&&(c=L.k(a))&&L.k("_cb_ls")){this.ab=h;var d;switch(a){case "_SUPERFLY_lockout":d=600;break;case "_chartbeat4":d=60;break;case "_cb_cp":d=60;break;case "_chartbeat3":d=34128E3;break;default:d=34128E3}M.create(a,c,d)}return c};k.remove=function(a,b){a=b?a:this.Aa+a;(M.D()?M:L).remove(a,this.Q);M.D()&&L.remove(a,this.Q)};function Bb(a){var b=i;if(a&&(b=Cb(),b=!b?b:N(b.pathname)+b.search+b.hash))return b;var c=o.location,b=N(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));return b+a}function Db(a){return a&&(a=Cb(),a=!a?a:a.hostname)?a:o.location.hostname}function Cb(){var a=Eb();return!a?a:Ta(a.href)}
function Eb(){var a=i;p(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return a=b,j});return a}for(var Fb={},Gb=0;Gb<81;Gb++)Fb["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Gb)]=h;function Hb(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return Fb[c]?String.fromCharCode(c):"%"+b.toUpperCase()}
function N(a){if(!z(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Hb);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};function O(a,b){var c=Q();return t(b)&&!t(c[a])?b:c[a]}function Q(){t(o._cb_shared)||(o._cb_shared={});return o._cb_shared};var R={Hb:{IDLE:0,Gb:1,Fb:2,Ga:3},Ib:{IDLE:0,Gb:1,Fb:2,Ga:3},J:0,M:0};R.B=function(){if(!R.Oa)A(B,fb,R.Yb,R),A(B,"i",R.bc,R),A(B,"f",R.$b,R),A(B,"b",R.Zb,R),A(B,"j",R.ac,R),R.Oa=h};R.Vb=function(){return R.J};R.Wb=function(){return R.M};R.Yb=function(){R.J===1?R.U(3):R.J===0&&R.U(2);R.M===1?R.T(3):R.M===0&&R.T(2)};R.bc=function(){R.J===3?R.U(1):R.J===2&&R.U(0)};R.ac=function(){R.M===3?R.T(1):R.M===2&&R.T(0)};R.$b=function(){(R.J===0||R.J===2)&&R.U(3);(R.M===0||R.M===2)&&R.T(3)};
R.Zb=function(){R.J===3?R.U(2):R.J===1&&R.U(0);R.M===3?R.T(2):R.M===1&&R.T(0)};R.U=function(a){R.J=a;B.P("s",a)};R.T=function(a){R.M=a;B.P("x",a)};function Ib(a,b){this.La=a||g;this.Ta=b||g;this.ba=this.O=0;this.nb=r(this.ec,this);this.$a=this.N=i}k=Ib.prototype;k.B=function(){this.ba=this.O=0;this.N=i;this.$a=A(B,"s",this.ka,this);this.ka(R.Vb())};k.ka=function(a){Ka(this.N);this.N=i;if(a===R.Hb.Ga)this.N=Ja(this.nb,1E3)};k.ec=function(){if(this.La===g||this.La())this.O++,this.ba++,this.Ta&&this.Ta()};k.terminate=function(){Ka(this.N);this.N=i;eb(B,this.$a)};k.ha=function(){this.terminate();this.Ta=this.La=g};function Jb(a,b){Ib.call(this,a,b)}ba(Jb,Ib);Jb.prototype.B=function(){this.ba=this.O=0;this.N=i;this.$a=A(B,"x",this.ka,this);this.ka(R.Wb())};Jb.prototype.ka=function(a){Ka(this.N);this.N=i;if(a===R.Ib.Ga)this.N=Ja(this.nb,1E3)};function T(){G.call(this);this.$=[];this.q=new zb(this.sc,this.a.cookiePath||"/");this.q.remove("_SUPERFLY_nosample");this.F=new Ib;this.Z=new Jb;this.Ua=r(this.za,this);w(o,"unload",this.Ua);rb(r(this.B,this));this.Pa=j}ba(T,G);k=T.prototype;k.Ya=h;
k.B=function(){T.X.B.call(this);this.ua=this.ca=0;this.ga=q();this.Xa=ka(Kb(this));this.Wa=h;this.Qa=72E5;if(this.Ya){var a=+this.a.sessionLength;if(!isNaN(a))this.Qa=a*6E4}a=O("d");if(!a){var a=[],b=this.q.k("_chartbeat2",h);b.length>0&&(a=b.split("."));a.length>5&&(a=[]);var b=q(),c=this.q.k("_cb",h);c.length>0?a[1]=a[1]||b:c=a[0];a[0]="";var d=b-+(a[1]||0),e=b-+(a[2]||0);Q().n=c&&d>18E5&&e<2592E6?0:1;d=a[4];if(!(e=e>18E5))if(Lb(this))e=j;else{var e=U(this),e=decodeURIComponent(e),e=Mb(e)||e,f;
f=Nb(this);f=decodeURIComponent(f);f=Mb(f)||f;e=e!==f}if(!d||e)d=ka(Kb(this)),a[4]=d,this.q.remove("_cb_svref",h);e="1";f=a&&+a[2];d=a&&a[3];if(a&&f&&d)if(e=Math.abs((Da(b)-Da(f))/864E5)){e=Math.min(e,16)-1;for(f="";e--;)f+=0;e=(d+f+"1").slice(-16)}else e=d;d=e;c||(c=this.a.utoken||ka(Kb(this),3),a[1]=b);a[2]=b;a[3]=d;this.a.utoken=this.ra;this.q.create("_cb",c,34128E3,h);this.q.create("_chartbeat2",a.join("."),34128E3,h);a[0]=c;Q().d=a}this.Ic=a.join(".");var l;c=+a[1];d=+a[2];if((b=a[3])&&c&&d)l=
(Math.min((Math.abs((Da(d)-Da(c))/864E5)||0)+1,16,b.length)-1).toString(16),l+=("0000"+parseInt(b,2).toString(16)).slice(-4);this.mb=l;this.hc=O("n",1);this.ra=a[0];this.rc=a[4];this.qc=Nb(this);this.q.create("_cb_svref",Nb(this)||"null",1800,h);this.F.B();this.Z.B();R.B();C.B();gb||(hb=pb(),ib&&o.document.addEventListener&&o.document.addEventListener(ib,qb,j),ob("focus","onfocusin",mb),ob("blur","onfocusout",nb),hb&&mb(),gb=h);this.ma=0;this.Kb=A(B,fb,this.jc,this)};
function Ob(a){if(!a.q.k("_SUPERFLY_lockout")&&!E)a.fc?a.Ca():(a.fc=h,!o._sf_async_config&&!o._cbq?(a.ya=r(a.Ca,a),w(o,"load",a.ya)):a.Ca())}k.Ca=function(){this.Va=Pb();C.B();var a=r(this.na,this);this.ob=Ja(a,15E3);this.na()};
k.na=function(){var a=this.F.ba,a=this.a.reading&&+this.a.reading||a>0;if(this.ua<this.ca&&!a)this.ua++;else{var b;if(Ia===g)b=o.navigator.userAgent,Ia=b.indexOf("AppleWebKit")>0&&b.indexOf("FBIOS")>0;b=Ia;b&&!a?this.ua++:(a?this.ca=0:Qb(this),this.ua=0,this.$.push(0),this.$.length>18&&this.$.shift(),this.Ya&&q()-this.ga>=this.Qa?this.terminate():this.pa())}};
k.tb=function(){this.$.push(1);var a=0;p(this.$,function(b){a+=b});a<3?(this.Wa=h,Qb(this)):(this.terminate(),this.q.create("_SUPERFLY_lockout","1",600))};k.za=function(){};k.jc=function(){var a=Rb(this);this.ma=Math.max(this.ma,a)};function Rb(a){return Math.floor(Xa("Y","Top",!!a.a.scrollElement))}function Qb(a){var b=a.ca,b=b?Math.min(b*2,16):1;a.ca=b}k.ta=function(){this.za();this.terminate()};k.Ab=function(){this.Pa=h;this.B();Ob(this)};
function Lb(a){if(a.a[ub])return h;if(Sb(a))return j;a=document.referrer.indexOf("://"+o.location.hostname+"/");return a!=-1&&a<9}function Sb(a){var b=a.a.referrerOverrideQueryParam,c="";p(window.location.search.substr(1).split("&"),function(a){a=a.split("=");if(a.length==2&&a[0]==b&&a[1])return c=decodeURIComponent(a[1]).replace(/\+/g," "),j});c&&c.indexOf("::")==-1&&(c="external::"+c);return c}
function U(a){a=a.a[ub]||Sb(a);if(!a&&(a=document.referrer||"")&&!/^(android-)?app:/.test(a)){var b=Ta(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=N(b.pathname),a=Ua(b)}return encodeURIComponent(a)}function Tb(a){a=a.a[J].slice(0,100);return encodeURIComponent(a)}function Kb(a){a=[U(a),Za("Width"),Za("Height")];return ma(a)}function Ub(a){var b=[],c=a.q.k("_chartbeat4");c&&(p(c.split("::"),function(a){b.push(encodeURIComponent(a))}),a.q.remove("_chartbeat4"));return b}
function Nb(a){a=a.q.k("_cb_svref",h)||U(a)||"null";a==="null"&&(a="");return a}function Mb(a){a=a.match(/^https?:\/\/([^\/]*)/);return!a?i:a[1]}function Pb(){var a=o.performance&&o.performance.timing;if(!a||a.navigationStart==0)return-1;var b=a.navigationStart,a=a.loadEventStart;return Ca(b)&&b?Ca(a)&&a>b?a-b:q()-b:-1}k.terminate=function(){this.F.terminate();this.Z.terminate();eb(B,this.Kb);this.ya!==g&&Ba("load",this.ya);Ka(this.ob);Q().d=g;Q().n=g};
k.ha=function(){this.terminate();Ba("unload",this.Ua);this.Ua=this.ya=this.q=this.$=this.a=i;this.F.ha();this.F=i;this.Z.ha();this.Z=i;T.X.ha.call(this)};function Vb(a){for(var b=O("m")||[];b.length;)a(b.shift());a={push:a};Q().m=a};function Wb(a,b,c){var d=a.offsetLeft,e=a.offsetTop,f=Xb(a);d+=f.x;e+=f.y;for(var l=j,n=c?0:Math.floor(Xa("X","Left",g)),m=c?0:Math.floor(Xa("Y","Top",g)),f=a.offsetParent;a&&a!==b&&a!==document.body;){if(a===f)f=Xb(a),d+=a.offsetLeft+f.x,e+=a.offsetTop+f.y,f=a.offsetParent;c||(d-=a.scrollLeft,e-=a.scrollTop);if(Yb(a,["position"]).position==="fixed"){l=h;break}a=a.parentElement}c||(d-=b?b.scrollLeft:n,e-=b?b.scrollTop:m);l&&(d+=n,e+=m);return{x:d,y:e}}
function Yb(a,b){var c={},d,e;o.getComputedStyle?d=o.getComputedStyle(a,i):a.currentStyle?e="currentStyle":a.style&&(e="style");p(b,function(b){c[b]=d?d[b]||d.getPropertyValue(b):a[e][b]});return c}var Zb=/matrix(3d)?\((.*)\)/;function Xb(a){var b={x:0,y:0},a=Yb(a,["transform"]).transform;if(!z(a))return b;var c=a.match(Zb);if(!c)return b;var a=c[2].split(", "),d;t(c[1])?(c=12,d=13):(c=4,d=5);b.x=parseInt(a[c],10);b.y=parseInt(a[d],10);return b};function $b(){var a=o.location.href,a=a.replace(/-{2,}/g,"-"),a=Ta(a);a.pathname=N(a.pathname);return a}
function ac(a){var b=L.k("_chartbeat6");if(!b)return i;var b=b.split("::"),c,d;if(b.length===1)c=b[0].split(","),d=0;else{var e,f=$b(),l=Ua(f);p(b,function(a,b){var f=a.split(","),m=Ha(l,decodeURIComponent(f[0]));if(m===0)return c=f,d=b,j;if(e===g||m<e)e=m,c=f,d=b})}b.splice(d,1);a="_chartbeat6="+b.join("::")+bc(a);document.cookie=a;var a=[],b=decodeURIComponent(c[0]),f=decodeURIComponent(c[1]),n=c[2];c.splice(0,3);for(var m=c.length/3,s=0;s<m;s++){var x=s*3+2;a.push({Gc:b,origin:f,da:n,fa:x<c.length?
c[x]:"",Sb:c[s*3],xc:c[s*3+1]})}return a}function bc(a){var b="",c;if(!Fa(a))return b;a.rb&&(c=new Date,c.setTime(c.getTime()+a.rb),b+="; expires="+c.toGMTString());a.domain&&(b+="; domain="+a.domain);a.path&&(b+="; path="+a.path);return b}function cc(a){var b=a.topStorageDomain,a=a[I],c=o.location.hostname;return b?b:dc(c,a)?a:c.replace(/^www\./,"")}
function dc(a,b){if(a===b)return h;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return j;if(c.pop()!==d.pop())return j}return h}function ec(a,b,c,d,e){this.Ub=a;this.Tb=b;this.yc=c;this.da=d;this.fa=e}function fc(a){var b=a.d,c=i;if(b!==i){var d={};b.s&&p(b.s,function(a,b){d[b]=typeof a==="string"?{ib:a,fa:""}:{ib:a.chosenVariant,fa:a.specificLocation}});c={yb:d,da:b.g,qb:b.m}}return{status:a.s,data:c,code:a.c,message:a.m}};function gc(a,b){for(var c=b||document.documentElement,d=[],e=i,f=a,l,n,m,s,x,D;f&&f!==c;){l=f.nodeName.toLowerCase();e=f;n=e.nodeName;if((f=f.parentNode)&&f!==document.documentElement){m=f.children;s=0;for(x=0,D=m.length;x<D;x++){if(e===m[x]){l+="["+(1+x-s)+"]";break}m[x].nodeName!==n&&s++}}d.unshift(l)}return d.join("/")};function V(){this.sc="_t_";T.call(this)}ba(V,T);k=V.prototype;
k.B=function(){V.X.B.call(this);wb(this.a);var a=!!this.a[sb],b=Db(!!this.a[tb]&&a);K(this.a,"mabServer","mabping.chartbeat.net");K(this.a,J,document.title);K(this.a,I,b);this.a[H]=this.a[H]?N(this.a[H]):Bb(a);this.la=u(b);this.a[I]=u(this.a[I]);this.vc=cc(this.a);this.ia=this.va=j;this.lb=[];var c=this,a=ac({domain:"."+this.vc,rb:6E4,path:"/"});if(a!==i)this.va=h,p(a,function(a){c.lb.push(new ec(a.origin,a.Sb,a.xc,a.da,a.fa))});this.sb=0;this.Da=i;Vb(r(this.dc,this))};
k.pa=function(){var a=this.F.O,b=hc(this),c,d=this;this.va&&p(this.lb,function(e){c=b+"&x="+e.Tb+"&v="+e.yc+"&ml="+e.da+"&xo="+e.Ub+"&e="+a+"&sl="+e.fa;d.Ba(c)});!this.ia&&this.Da&&ic(this,this.Da);this.ia=h};k.Ca=function(){this.Va=Pb();C.B();if(this.va){var a=r(this.na,this);this.ob=Ja(a,500)}this.na()};k.na=function(){var a,b;this.ia?(a=this.F.O,b=this.sb*15,a-b>=15&&(this.pa(),this.sb+=1),a>=45&&this.terminate()):this.pa()};
function hc(a){var b=a.a;return Ea()+"//"+b.mabServer+"/ping/mab?h="+encodeURIComponent(b[I])+"&p="+encodeURIComponent(b[H])+"&d="+encodeURIComponent(a.la)+"&u="+a.ra+"&c="+Math.round((q()-a.ga)/600)/100}k.za=function(){};k.tc=function(a){a=fc(a);this.ia?ic(this,a):this.Da=a};
function ic(a,b){var c=hc(a),d=b.status,e=b.data;if(d=="s"&&e!==i){var f=r(a.Ba,a);Fa(e.yb)&&p(e.yb,function(a,b){f(c+"&x="+b+"&v="+a.ib+"&ml="+e.da+"&sl="+a.fa+"&e=-1")});Object.prototype.toString.call(e.qb)==="[object Array]"&&p(e.qb,function(a){f(c+"&me=3&ml="+e.da+"&x="+a)})}else d=="e"&&a.Ba(c+"&me="+b.code)}k.dc=function(a,b){for(var c=0,d=arguments.length;c<d;c++){var a=arguments[c],e=a.shift();e==="t"?this.tc.apply(this,a):e==="v"&&this.pc.apply(this,a)}};
k.ta=function(){Q().m=[];t(this.cb)&&this.cb();V.X.ta.call(this)};k.pc=function(a){this.cb=a};k.terminate=function(){this.cb=this.Hc=g;this.Da=i;this.ia=this.va=g;V.X.terminate.call(this)};if(!o.pSUPERFLY_mab){var jc=new V,kc={};kc.evps=r(jc.ta,jc);kc.svps=r(jc.Ab,jc);o.pSUPERFLY_mab=kc;Ob(jc)};var lc="engagedSeconds",mc={Ec:"id",Dc:lc,Ac:"campaignId",Bc:"creativeId",Fc:"placementId",Cc:"element"};var nc,oc,W;
function pc(a){if(a.origin==="https://chartbeat.com"&&(a=String(a.data),a.indexOf("_cb_hud_version=")===0)){var b=a.substr(16);qc();if(b!=="NONE")b=b.indexOf("HUD2.")===0?b.substr(5):"OLD",a="https://static.chartbeat.com/js/inpage.js",b!=="OLD"&&(a="https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-"+b+".js"),b=t(g)?g:{},b.src=a,a=cb("script",b),a.setAttribute("type","text/javascript"),b=document.head||document.getElementsByTagName("head")[0],t(g)?g.appendChild(a):b&&b.appendChild(a)}}
function qc(){Ma(oc);oc=g;Ba("message",pc);W&&W.parentNode&&W.parentNode.removeChild(W);W=g};function rc(){var a=o._sf_async_config&&o._sf_async_config.domain;if(a&&!nc){nc=h;a="https://chartbeat.com/publishing/hud2/versioninfo/?host="+encodeURIComponent(a);w(o,"message",pc);oc=La(qc,1E4);var b=t(g)?g:{};b.src=a;a=cb("iframe",b);a.style.display="none";t(g)?g.appendChild(a):document.body&&document.body.appendChild(a);W=a}}
function sc(a){if(/[\/.]chartbeat\.com$/.test(a.origin)){var b=M.D(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),rc(),Ba("message",sc))}};function tc(a,b){this.Db=b;this.Cb=a[sb];this.Bb=a[tb];this.S=a[H];this.uc=a[J];this.jb=a[I];this.zc=a[ub];this.hb=(this.H=Cb())?this.H.hostname:"";this.sa=this.H?N(this.H.pathname)+this.H.search+this.H.hash:"";this.wb=Bb(j);this.mc=Db(j);var c=Va("property","meta",i,"og:url");this.oa=(this.ea=c&&c.length?Ta(c[0].content):i)?N(this.ea.pathname)+this.ea.search+this.ea.hash:"";this.ic=this.ea?this.ea.hostname:"";this.Ka=document.title||"";var d;if((c=Va("property","meta",i,"og:title"))&&c.length)d=
c[0].content;this.wa=d;var e;if((d=Va("property","meta",i,"twitter:title"))&&d.length)e=d[0].content;this.qa=e;e=!!this.Cb;d=this.Cb!==g;var c=!!this.Bb,f=this.Bb!==g,l=!!this.H,n;n=u(this.hb);var m=u(this.mc);n=n===m;var m=!!this.oa,s=!this.H?j:this.sa===this.oa,x=this.sa===this.wb,D;D=this.sa;var F=xa(this.wb);D=D===F;var F=!!this.Ka,S=!!this.wa,P=!!this.qa,y=this.Ka===this.wa,v=!this.qa?j:this.Ka===this.qa,Bc=!this.wa||!this.qa?j:this.wa===this.qa,Cc=!!this.uc,Dc=!!this.S,Ec=this.S?this.S.charAt(0)!==
"/":j,Fc=!this.H?j:this.S===this.sa,Gc=!this.oa?j:this.S===this.oa,Hc=!this.H?j:this.jb===u(this.hb),Ic=!this.oa?j:this.jb===u(this.ic),Jc=!!this.Db,Kc=this.Db?j:!!this.zc,Lc=Ea()==="https:",Mc=!!XMLHttpRequest,Z;this.S?(Z=ya(this.S),Z=Z!==xa(Z)):Z=j;e=[e,d,c,f,l,n,m,s,x,D,F,S,P,y,v,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Z];d=1;for(f=c=0;f<e.length;f++)c|=e[f]&&d,d<<=1;this.Pb=("00000000"+c.toString(16)).slice(-8)};function X(){"postMessage"in window&&w(o,"message",r(this.cc,this));T.call(this);vb("_cbq",r(this.vb,this))}ba(X,T);
X.prototype.B=function(){X.X.B.call(this);var a=this.ra;Q().u=a;a=this.Xa;Q().t=a;this.gc=new tc(this.a,this.Pa);this.Ia=i;wb(this.a);var a=!!this.a[sb],b=Db(!!this.a[tb]&&a);K(this.a,"pingServer","ping.chartbeat.net");K(this.a,J,document.title);K(this.a,I,b);this.a[H]=this.a[H]?N(this.a[H]):Bb(a);this.la=u(b);this.a[I]=u(this.a[I]);this.Mb=A(B,"c",this.kc,this);this.Nb=A(B,"r",this.lc,this);this.aa=i};X.prototype.Jb=function(a){this.Ia=a};
X.prototype.za=function(){this.q.update("_chartbeat4",["t="+this.Xa,"E="+this.F.O,"EE="+this.Z.O,"x="+Rb(this),"c="+Math.round((q()-this.ga)/600)/100,"y="+Za("Height"),"w="+Ya("Height")].join("&"),60,g,g,1)};var Sa="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,eS,eM,eD,eK,eR,EE,sv,sr,im".split(",");k=X.prototype;
k.pa=function(a){this.ub++;var b={};b.g=this.a.uid;b.g0=xb(this.a,"sections");b.g1=xb(this.a,"authors");b.g2=xb(this.a,"zone");b.g3=xb(this.a,"sponsorName");b.g4=xb(this.a,"type");!this.a.noCookies&&this.q.isSupported()?b.n=this.hc:b.nc=1;b.c=Math.round((q()-this.ga)/600)/100;b.E=this.F.O;b.EE=this.Z.O;var c=Rb(this);this.ma=Math.max(this.ma,c);b.x=c;b.m=this.ma;b.y=Za("Height");b.o=Za("Width");b.w=Ya("Height");b.b=this.Va>0?this.Va:"";if(this.mb)b.f=this.mb;b[""]=yb(this.a);b.t=this.Xa;b.V=102;b.tz=
(new Date).getTimezoneOffset();b.sn=this.ub;b.sv=this.rc;b.sr=this.qc;c=this.F.ba;b.h=encodeURIComponent(this.a[I]);b.p=encodeURIComponent(this.a[H]);b.u=this.ra;b.d=encodeURIComponent(this.la);b.j=Math.round((this.ca+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;var d=b.c*6E4+this.ga;b.eD=C.ja("mousedown",d);b.eM=C.ja("mousemove",d);b.eK=C.ja("keydown",d);b.eR=C.ja("resize",d);b.eS=C.ja("scroll",d);C.oc();C.Lb()?b.W=1:this.a.reading&&+this.a.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=Lb(this);if(this.Wa){this.Wa=
j;if(c)this.aa=uc(this);b.i=Tb(this);d=this.a.hudTrackable;d!==g&&(b.L=d?"1":"0");this.a.alias&&(b.PA=encodeURIComponent(this.a.alias))}if(c){if(this.aa){if(b.v=encodeURIComponent(this.aa.path),b.K=vc(this.aa),this.aa.Sa>1)b.l1=this.aa.Sa}else b.v=U(this);this.Pa&&(b.vp=1)}else b.r=U(this);c=Na(b.v);Q().v=c;c=Na(b.r);Q().r=c;b.A=this.Ia?this.Ia:"";b._c=Pa("utm_campaign",this.a.campaignTag);b._m=Pa("utm_medium",this.a.mediumTag);b._x=Pa("utm_source",this.a.sourceTag);b._y=Pa("utm_content",this.a.contentTag);
b._z=Pa("utm_term",this.a.termTag);b.im=this.gc.Pb;this.a.idSync?(c=[],da(new ca,this.a.idSync,c),c=encodeURIComponent(c.join(""))):c="";b._s=c;b.z=Ub(this);b.C=this.a.mobileApp?1:"";b.KK=a?vc(a):"";a=this.q;c=a.ab;a.ab=j;b.l=c?1:"";this.F.ba=0;this.Ba(Ea()+"//"+this.a.pingServer+"/ping?"+Ra(b))};
k.cc=function(a){var b=this.a,c=b.playerdomain||this.la;if(oa(a.origin)===oa(c))if(c=a.data,z(c)&&c.indexOf("cbqpush::")===0)a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.vb(a));else if(c=="cbdata?"){var c="&u="+O("u"),d="&t="+O("t"),e="&v="+O("v"),f="&r="+O("r"),b="domain="+encodeURIComponent(b[I])+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b[H])+"&title="+Tb(this)+"&referrer="+U(this)+"&internal="+(Lb(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.la)+
c+d+e+f+"&utoken="+this.ra;a.source.postMessage(b,"*")}};k.vb=function(a){a[0]==="_demo"&&this.a._demo?this.a._demo=this.a._demo+"%2C"+a[1]:this.a[a[0]]=a[1];this.ca=0};function wc(a){a=a.replace(/-{2,}/g,"-");a=Ta(a);a.pathname=N(a.pathname);return a}k.kc=function(a){xc(this,a,"c")};k.lc=function(a){xc(this,a,"r")};
function xc(a,b,c){if(a.Ya&&q()-a.ga>=a.Qa)a.terminate();else{var d=b.href||"",d=wc(d);if(d.protocol.indexOf("http")===0){var e=d.hostname!==o.location.hostname,d=Ua(d),f=$a(b,function(a){return a.id}),l=gc(b,f),n="";a.a.moduleAttribute&&(n=(n=Wa(b,a.a.moduleAttribute))?n.getAttribute(a.a.moduleAttribute):"",n=n.replace(/::/g,"-").substr(0,40));f?(l&&(l="/"+l),l="*[@id='"+f.id+"']"+l,f=gc(b)):f=l;l=ka(l);f=ka(f);b=Wb(b,g,h);c={left:b.x,top:b.y,path:a.a[H],href:d,fb:l,Ha:f,eb:"",Za:c,Sa:0,Xb:a.a[I],
Ra:n};a.pa(c);e||a.q.update("_chartbeat5",yc(c),60,j,g,3,function(a){a=a.split(",");return a[2]+","+a[3]})}}}function vc(a){return[a.left,a.top,a.fb,encodeURIComponent(a.eb),a.Za,encodeURIComponent(a.href),a.Ha,a.Ra].join("::")}function yc(a){var b=encodeURIComponent(a.eb),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.fb,b,a.Za,a.Ha,encodeURIComponent(a.Xb),a.Ra].join(",")}
function uc(a){var b=a.q.k("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,d,e=i,f,l=wc(o.location.href),n=Ua(l);p(c,function(a,b){var c=a.split(","),l=Aa(n,decodeURIComponent(c[3]));if(l===0)return d=c,e=b,j;else if(l===i)return h;if(f===g||l<f)f=l,d=c,e=b});if(e===i)return i;c.splice(e,1);a.q.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),href:decodeURIComponent(d[3]),fb:d[4]||
"",eb:"",Ha:d.length>7?d[7]:"",Za:d.length>6?d[6]:"c",Sa:b,Ra:d[9]?d[9]:""}}k.terminate=function(){eb(B,this.Mb);eb(B,this.Nb);X.X.terminate.call(this)};function zc(a,b){return function(c,d){if(!E){a();var e=o._sf_async_config,f="",l=e[H],l=oa(l);/^\//.test(l)&&(f=u(o.location.hostname));e[ub]=Ea()+"//"+f+l;if(z(c))e[H]=N(c),d&&(e[J]=d);else if(Fa(c)){var n=["authors","sections",J,H];p(c,function(a,b){if(Ga(n,function(a){return a===b})!==-1||b.indexOf("_")===0)e[b]=b===H?N(a):a})}b()}}};if(!o.pSUPERFLY){var Ac=new X,Y={};o.pSUPERFLY=Y;var Nc=o.pSUPERFLY_mab,$=o.pSUPERFLY_pub,Oc=[];Nc&&Oc.push(Nc);if($)Oc.push($),$.addEngagedAdFilter&&(Y.addEngagedAdFilter=$.addEngagedAdFilter),$.refreshAd&&(Y.refreshAd=$.refreshAd),$.registerGptSlot&&(Y.registerGptSlot=$.registerGptSlot),vb("_cba",function(a){a()});Y.virtualPage=zc(function(){Ac.ta();p(Oc,function(a){a.evps()})},function(){Ac.Ab();p(Oc,function(a){a.svps()})});Y.activity=r(Ac.Jb,Ac);Ob(Ac);var Pc=M.D(h);if(!Pc?0:Pc.getItem("_cb_ip")){var Qc=
o.location;(!/^(.+[.])?chartbeat\.com$/.test(Qc.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(Qc.pathname))||rc()}else w(o,"message",sc)};})();
 