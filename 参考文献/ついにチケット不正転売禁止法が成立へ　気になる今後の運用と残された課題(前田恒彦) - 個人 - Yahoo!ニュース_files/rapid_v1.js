if(typeof YAHOO==="undefined"){YAHOO={}}if(typeof YAHOO.JP==="undefined"){YAHOO.JP={}}if(typeof YAHOO.JP.bylines==="undefined"){YAHOO.JP.bylines={}}(function(){YAHOO.JP.bylines.SendClickLog={_CUSTOM:{},init:function(a){var b=this;b._CUSTOM.pageParam={rpdprop:"roupeiro"};b._CUSTOM.pageParam.nonepv="1";b._CUSTOM.pageParam.device=a.device;if(typeof a.vtestid!=="undefined"&&a.vtestid!==""){b._CUSTOM.pageParam.vtestid=a.vtestid}if(typeof a.vPkjp!=="undefined"&&a.vPkjp!==""){b._CUSTOM.pageParam.v_pkjp=a.vPkjp}b._CUSTOM.linkParam=[{name:a.sec,sec:a.sec,_links:[{slk:a.slk}]}];if(typeof a.pos!=="undefined"||a.pos!==""){b._CUSTOM.linkParam[0]["sec"],b._CUSTOM.linkParam[0]["_links"][0]["slk"].pos=a.pos}b._CUSTOM.spaceId=a.spaceId;b.send()},send:function(){var b=this;var a=(new YAHOO.i13n.JP.simpleRapid({keys:b._CUSTOM.pageParam,spaceid:b._CUSTOM.spaceId,https:true})).setModule(["msthd"]).setService("news").setPagetype("detail").setApptype("web").setOpttype(b._CUSTOM.pageParam.device).initRapid();a.beaconClick(b._CUSTOM.linkParam[0]["sec"],b._CUSTOM.linkParam[0]["_links"][0]["slk"])}}})();(function(){YAHOO.JP.bylines.MoreArticleManager={_CUSTOM:{},init:function(b){var d=this;d._CUSTOM=b;var c=$(".articleBody").height();var a=d._CUSTOM.heightPx;if(c>a+300){$("div.articleBody").addClass("onhidden");$("div.articleBody.onhidden").css("height",a);$("div.articleBody .readMoreModule").css("display","inline")}$(d._CUSTOM.className).on("click",function(){d.viewArticleFull($(this))})},viewArticleFull:function(a){var b=this;a.hide();a.parent(".articleBody").removeClass("onhidden");a.parent(".articleBody").css("height","");YAHOO.JP.bylines.SendClickLog.init(b._CUSTOM)}}})();(function(){YAHOO.JP.bylines.fixedMenu={_CUSTOM:{},init:function(a){var b=this;b._CUSTOM=a;$(b._CUSTOM.id).on("click",function(c){b._CUSTOM.slk=c.target.className;b.sendClickLog($(this))})},sendClickLog:function(a){var b=this;YAHOO.JP.bylines.SendClickLog.init(b._CUSTOM)}}})();(function(){YAHOO.JP.bylines.LineShareBtnManager={_CUSTOM:{},init:function(a){var b=this;b._CUSTOM=a;$(b._CUSTOM.className_hasChar).on("click",function(){b.sendClickLog($(this))});$(b._CUSTOM.className_noChar).on("click",function(){b.sendClickLog($(this))})},sendClickLog:function(b){var c=this;var a=b.attr("ult_pos");if(typeof a!=="undefined"||a!==""){c._CUSTOM.pos=a}YAHOO.JP.bylines.SendClickLog.init(c._CUSTOM)}}})();