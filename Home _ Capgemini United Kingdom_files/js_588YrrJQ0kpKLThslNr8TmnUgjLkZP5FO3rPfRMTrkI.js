/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
/**
 * @file
 * JavaScript file for Blog Article pages.
 */

(function ($) {
  
  Drupal.behaviors.blogArticle = {
    attach: function (context, settings) {
     // Bind click event on about-the-author-anchor anchor.
     // This must be done because the megamenu hide the beginning of the anchor,
     // so we add a negative offset.
     $('section.blog-the-author div.blog-author-desc a').click(function(e) {
      e.stopPropagation();
      e.preventDefault;
      var anchorElement = $("section#about-the-author-anchor");
      var anchorPosition = parseFloat(anchorElement.offset().top);
      var anchorOffset = parseFloat(200);
      $('html,body').animate({scrollTop: anchorPosition - anchorOffset}, 'slow');
      });
     }
   }
  
})(jQuery);;
(function($) {
  $(function() {
     var node_type = Drupal.settings.cap_google_analytics.node_type;
     var not_set = 'Not Set';
     if(typeof(node_type) != "undefined" && node_type != null) {
       var node_id = Drupal.settings.cap_google_analytics.node_id;
       var country_language = Drupal.settings.cap_google_analytics.country_language;
       
    if(typeof(country_language) != "undefined" && country_language != null && (country_language == 'en' || country_language == 'en-in' || country_language == 'en-gb' || country_language == 'en-se' || country_language == 'en-fi' || country_language == 'no' || country_language == 'en-pt' || country_language == 'es' || country_language == 'ja' ) ) {
          ga('set', 'dimension1', 'Main section');
          ga('Global.set', 'dimension1', 'Main section');
          ga('set', 'dimension2', 'Sub section');
          ga('Global.set', 'dimension2', 'Sub section');
          var sub_menu = getSubMenuItem (node_id);
        }
        else {
            var galaxy = $("#block-cap-navigation-top-menu .level-2 li .active").text();
            var menu_items = $("#block-cap-navigation-sub-menu .level-1 li.active a").text();
       
            if(typeof(galaxy) != "undefined" && galaxy != null && galaxy != "") {
              var galaxy_title_only = $.trim(galaxy);
              ga('set', 'dimension1', galaxy_title_only);
              ga('Global.set', 'dimension1', galaxy_title_only);
           }
           else {
             ga('set', 'dimension1', not_set);
             ga('Global.set', 'dimension1', not_set);
           }
       
           var sub_menu = not_set;       
           if(typeof(menu_items) != "undefined" && menu_items != null && menu_items != "") {
             var menu_items_title_only = $.trim(menu_items);
             ga('set', 'dimension2', menu_items_title_only);
             ga('Global.set', 'dimension2', menu_items_title_only);
            var sub_menu = getSubMenuItem (node_id);
           }
           else {
             ga('set', 'dimension2', not_set);
             ga('Global.set', 'dimension2', not_set);
            }
        } 
        ga('set', 'dimension3', node_type);
        ga('Global.set', 'dimension3', node_type);
      
        var service_level = Drupal.settings.cap_google_analytics.service_level;
        ga('set', 'dimension4', service_level);
        ga('Global.set', 'dimension4', service_level);
      
      if(typeof(sub_menu) != "undefined" && sub_menu != null && sub_menu != "") {
        ga('set', 'dimension5', sub_menu);
        ga('Global.set', 'dimension5', sub_menu);
      }            
     }
     ga('send', 'pageview');
     ga('Global.send', 'pageview'); 
  });
})(jQuery);


function getSubMenuItem(node_id) {  
  var sub_menu;
  jQuery.ajax({
    url: '/google-dimensions-sub-menu/' + node_id,
    type: "POST", 
    async: false,
    success: function(data) {
     sub_menu = data;
    }
  });
  return sub_menu
};
!function(t){Drupal.behaviors.cap_twitter_ticker={},Drupal.behaviors.cap_twitter_ticker.attach=function(e){function i(){t(".baseline").html(Drupal.settings.follow_us_label_short),t(".link-action img").attr("src",function(t,e){return e.replace("right","left")}),t("#cap-ticker-social").removeClass("wide"),t("#cap-ticker-social").addClass("small"),t("#cap-ticker-social").animate({right:"-450px"},"fast")}function r(){t(".baseline").html(Drupal.settings.follow_us_label_complete),t(".link-action img").attr("src",function(t,e){return e.replace("left","right")}),t("#cap-ticker-social").removeClass("small"),t("#cap-ticker-social").addClass("wide"),t("#cap-ticker-social").animate({right:"30px"},"fast")}function a(){t("#cap-ticker-tweets").jcarousel({vertical:!0,scroll:1,start:1,wrap:"circular",buttonNextHTML:null,buttonPrevHTML:null,auto:5,initCallback:c})}function c(e){$twitter_carousel_stopped=!1,$twitter_carousel=e,t(window).unbind("resize.jcarousel",e.funcResize),clearTimeout(e.resizeTimer),e.funcResize=function(){},t(".cap-ticker-cross").click(function(){$twitter_carousel.stopAuto(),$twitter_carousel.remove()}),t(window).resize(function(){t(".container").width()<768&&!$twitter_carousel_stopped&&($twitter_carousel.stopAuto(),$twitter_carousel.remove(),t(".cookie-authorization").css("margin-bottom","0"),$twitter_carousel_stopped=!0),t(".container").width()>=768&&$twitter_carousel_stopped&&$twitter_carousel.startAuto()})}t(".link-action").click(function(e){return t(this).hasClass("close")?(e.preventDefault(),i(),t(this).removeClass("close")):(e.preventDefault(),r(),t(this).addClass("close")),!1}),t(".container").width()>=1008&&a(),t(".cap-ticker-cross").click(function(e){return e.preventDefault(),t(".cookie-authorization").css("margin-bottom","18px"),t(".ticker-closed").css("display","block"),t(".main-ticker").animate({top:"50px"},"fast","linear",function(){t(".main-ticker").css("display","none")}),t(".ticker-wrapper").animate({height:"18px"},"fast","linear"),!1}),t(".cap-ticker-open").click(function(e){return e.preventDefault(),t(".cookie-authorization").css("margin-bottom","53px"),t(".ticker-wrapper").css("height","53px"),t(".main-ticker").css("top","0"),t(".main-ticker").css("display","block"),$twitter_carousel.startAuto(),!1})}}(jQuery);;
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
;
(function($) {
   $(".form-submit").click(
      function() {
        var form_id = $(this).closest('form').attr("id");
        if (form_id == 'comment-form') {
          var category = 'BlogComments';
          var action = 'Comments';
          var title_full = $(this).closest('article.node-blog-article').find(
              'h2.hentry-title').text();
          var label = $.trim(title_full);
        } else if (form_id == 'comment-form--2') {
          var category = 'BlogComments';
          var action = 'Comments';
          var title_full = $(this).closest('article.node-blog-article').find(
              'h2.hentry-title').text();
          var label = $.trim(title_full);
        } else {
          var category = 'WebForm';
          var action = 'WebFormSubmit';
          var title_full = $(this).closest('.node-webform').find(
              'h1.header-title').text();
          var label = $.trim(title_full);
        }
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });   
   
  $(".voverlay").click(function() {
    var title_full = $(this).attr('title');
    var title_only = $.trim(title_full);
    var category = 'Video';
    var action = 'Play';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });    
  });
  $("article.node-resource-cap_push_header_medium_block-media a").click(
      function() {
        var title_full = $(this).find('.information h1').text();
        var title_only = $.trim(title_full);
        var category = 'Video';
        var action = 'Play';
        var label = title_only;
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });        
      });

  $(".push-block-attached-file").click(function() {
    var title_parts = $(this).attr('title').split("-");
    var title_only = $.trim(title_parts['0']);
    var category = 'Download';
    var action = 'PDF';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
  });

  $(".doc-link a").click(
      function() {
        var title_full = $(this).closest('article.view-mode-teaser_simplified')
            .find('a.link-title').text();
        var label = $.trim(title_full);
        var category = 'Download';
        var action = 'PDF';
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $(".similar-job-offer a").click(function() {
    var container_inners = $(this).find('.job-title').text();
    var title_only = $.trim(container_inners);
    var category = 'TrackLink';
    var action = 'JobLink';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
  });
  $(".rss-feed-button").click(function() {
    var title_full = $(this).closest('.node-section').find(
    'h2.resuts-title').text();
    var title_only = $.trim(title_full);
    var category = 'RSS Feeds';
    var action = 'RSS Feeds';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
  });
  
  $(".feed-icon").click(function() {
    var title_full = $(this).closest('.node-section').find(
    'h2.blog-title-cat').text();
    var title_only = $.trim(title_full);
    var category = 'Blog RSS Feeds';
    var action = 'Blog RSS Feeds';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
  });

  $(".tile-job-offer a").click(function() {
    var container_inners = $(this).find('.job-title').text();
    var title_only = $.trim(container_inners);
    var category = 'TrackLink';
    var action = 'JobLink';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
  });

  $(".job-offer-apply a").click(
      function() {
        var category = 'TrackLink';
        var action = 'JobApply';
        var title_full = $(this).closest('article.node-job-offer').find(
            'h1.job-offer-title').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $("ul.file-buttons li.file-type-pdf a").live(
      'click',
      function() {
        var category = 'Download';
        var action = 'PDF';
        var title_full = $(this).closest('.node-resource-full-document').find(
            'header.resource-header div.span10 h1').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $("div.file-buttons li.file-type-pdf a").live(
      'click',
      function() {
        var category = 'Download';
        var action = 'PDF';
        var title_full = $(this).closest('.view-mode-carousel_full_content')
            .find('.style13').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $("ul.file-buttons li.file-type-epub a").live(
      'click',
      function() {
        var category = 'Download';
        var action = 'ePub';
        var title_full = $(this).closest('.node-resource-full-document').find(
            'header.resource-header div.span10 h1').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $("div.file-buttons li.file-type-epub a").live(
      'click',
      function() {
        var category = 'Download';
        var action = 'ePub';
        var title_full = $(this).closest('.view-mode-carousel_full_content')
            .find('.style13').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $("ul.file-buttons li.file-type-mobi a").live(
      'click',
      function() {
        var category = 'Download';
        var action = 'mobi';
        var title_full = $(this).closest('.node-resource-full-document').find(
            'header.resource-header div.span10 h1').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $("div.file-buttons li.file-type-mobi a").live(
      'click',
      function() {
        var category = 'Download';
        var action = 'mobi';
        var title_full = $(this).closest('.view-mode-carousel_full_content')
            .find('.style13').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

  $("aside.node-resource-cap_push_header_gigantic_bloc-media").click(
      function() {
        var title_full = $(this).find('p.style04').text();
        var title_only = $.trim(title_full);
        var category = 'Video';
        var action = 'Play';
        var label = title_only;
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });

   $("article.node-resource-cap_push_header_big_bloc-media").click(function() {
    var title_full = $(this).find('div.information').text();
    var title_only = $.trim(title_full);
    var category = 'Video';
    var action = 'Play';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
  });

  $("article.node-resource-teaser_simplified-media a").click(function() {
    var title_full = $(this).text();
    var title_only = $.trim(title_full);
    var category = 'Video';
    var action = 'Play';
    var label = title_only;
    ga('send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
    
    ga('Global.send', {
      'hitType': 'event',         
      'eventCategory': category, 
      'eventAction': action,    
      'eventLabel': label,
    });
  });


// Added GA Event Tracking code in job offer page
  
  $(".job-offer-apply-linkedin a").click(
      function() {
        var category = 'TrackJobLink';
        var action = 'Apply for this job now';
        var title_full = $(this).closest('article.node-job-offer').find(
            'h1.job-offer-title').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });
    
  $(".linkedin-job-offer a").click(
      function() {
        var category = 'TrackJobLink';
        var action = 'Apply with linkedin';
        var title_full = $(this).closest('article.node-job-offer').find(
            'h1.job-offer-title').text();
        var label = $.trim(title_full);
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
      });
  // The following are "Sharethis" buttons.
  
  $(".addthis_button_twitter").click(function() {
    ga('send', 'event', 'ShareThis', 'Twitter', 'ShareThis');
    ga('Global.send', 'event', 'ShareThis', 'Twitter', 'ShareThis');
  });
  $(".addthis_button_facebook").click(function() {
    ga('send', 'event', 'ShareThis', 'Facebook', 'ShareThis');
    ga('Global.send', 'event', 'ShareThis', 'Facebook', 'ShareThis');
  });
  $(".addthis_button_linkedin").click(function() {
    ga('send', 'event', 'ShareThis', 'LinkedIn', 'ShareThis');
    ga('Global.send', 'event', 'ShareThis', 'LinkedIn', 'ShareThis');
  });
  $(".addthis_button_google_plusone_share").click(function() {
    ga('send', 'event', 'ShareThis', 'Google Plus', 'ShareThis');
    ga('Global.send', 'event', 'ShareThis', 'Google Plus', 'ShareThis');
  });
  
  $(".addthis_button_compact").click(function() {
    ga('send', 'event', 'ShareThis', 'Compact', 'ShareThis');
    ga('Global.send', 'event', 'ShareThis', 'Compact', 'ShareThis');
  });
  
  $(".addthis_button_email").click(function() {
    ga('send', 'event', 'ShareThis', 'Email', 'ShareThis');
    ga('Global.send', 'event', 'ShareThis', 'Email', 'ShareThis');
  });
  
//The following are "Sharethis" buttons.
  
  $(".ga-track-follow-fb").click(function() {
    ga('send', 'event','Follow Us', 'Facebook', 'Follow Us');
    ga('Global.send', 'event','Follow Us', 'Facebook', 'Follow Us');
  });
  $(".ga-track-follow-tw").click(function() {
     ga('send', 'event','Follow', 'Twitter', 'Follow');
     ga('Global.send', 'event','Follow', 'Twitter', 'Follow');
  });
  $(".ga-track-follow-gg").click(function() {
     ga('send', 'event', 'Follow Us','Google+', 'Follow Us');
     ga('Global.send', 'event','Follow Us', 'Google+', 'Follow Us');
  });
  $(".ga-track-follow-li").click(function() {
     ga('send', 'event','Follow Us', 'LinkedIn', 'Follow Us');
     ga('Global.send', 'event', 'Follow Us', 'LinkedIn', 'Follow Us');
  });
  $(".ga-track-follow-yt").click(function() {
     ga('send', 'event','Follow Us', 'YouTube', 'Follow Us');
     ga('Global.send', 'event','Follow Us', 'YouTube', 'Follow Us');
  });
  $(".ga-track-follow-ss").click(function() {
     ga('send', 'event', 'Follow Us', 'SlideShare', 'Follow Us');
     ga('Global.send', 'event', 'Follow Us', 'SlideShare', 'Follow Us');
  });

  // Adding functionality to track the event of clicking the "Connect with me" button on Blog Article Pages.
  $(".connect-with-me-button-for-blogauthorprofile").click(function() {
    var category = 'TrackBlogAuthorProfileLinks';
    var label = 'Connect with me button on Blog article pages';

    var blog_author_name = $(this).closest('section.about-the-author').find('span.author-name').text();
    blog_author_name = $.trim(blog_author_name);

    var blog_author_link = $(this).attr("href");
    blog_author_link = $.trim(blog_author_link);

    var action = '"Connect with me" button clicked for Blog Article Author - '+blog_author_name+': '+blog_author_link;

    ga('send', {
      'hitType': 'event',
      'eventCategory': category,
      'eventAction': action,
      'eventLabel': label,
    });

    ga('Global.send', {
      'hitType': 'event',
      'eventCategory': category,
      'eventAction': action,
      'eventLabel': label,
    });
 });
 
 // Adding functionality to track the event of clicking the Dismiss" button on Survey page.
 $("#survey_popup_page a").click(
      function() {
        var title_full = 'Dismiss Survey';
        var title_only = $.trim(title_full);
        var category = 'Survey';
        var action = 'OnClick';
        var label = title_only;
        ga('send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });
        
        ga('Global.send', {
          'hitType': 'event',         
          'eventCategory': category, 
          'eventAction': action,    
          'eventLabel': label,
        });        
      });

})(jQuery);;
/**
 * @file
 * A JavaScript file for the remote control system.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
(function($) {
  Drupal.behaviors.campaign_anchor = {};
  Drupal.behaviors.campaign_anchor.attach = function(context, settings) {
     $('#campaign-list-experts').find('a').click(function(e){
      e.preventDefault();
      var anchor = $(this).attr('rel');
      // Get header's height:
      var header_height = ($('#zone-header-second').size()>0) ? $('#zone-header-second').height() : 0;
      // Add arrow height:
      header_height += ($('#zone-header-second #header-comma').size()>0) ? $('#zone-header-second #header-comma').outerHeight() : 0;
      // If header is not sticky, add again to header_height to ensure never overlap title,
      // even after if header be sticky on scroll:
      header_height += (!$('#zone-header-second').hasClass('sticky')) ? $('#zone-header-second').height() : 0;
      // Start animation:
      $('html,body').stop().animate({
        'scrollTop': $("#" + anchor).offset().top - header_height
      }, settings.scrollDelay);
    });
     
     $(document).ready(function(){
       var anchor = window.location.hash.substring(1);
       // Get header's height:
       var header_height = ($('#zone-header-second').size()>0) ? $('#zone-header-second').height() : 0;
       if (header_height == 0) {
         header_height = 94;
       }
       // Add arrow height:
       header_height += ($('#zone-header-second #header-comma').size()>0) ? $('#zone-header-second #header-comma').outerHeight() : 0;
       // If header is not sticky, add again to header_height to ensure never overlap title,
       // even after if header be sticky on scroll:
       header_height += (!$('#zone-header-second').hasClass('sticky')) ? $('#zone-header-second').height() : 0;
       //Start animation
       if (anchor != '') {
         $('html,body').stop().animate({
           'scrollTop': $("#" + anchor).offset().top - header_height
         }, settings.scrollDelay);
       }
     });
  }
})(jQuery);;
