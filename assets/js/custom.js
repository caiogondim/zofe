/*-----------------------------------------------------------------------------------
 Smooth Scrolling
-----------------------------------------------------------------------------------*/
/*!
 * Smooth Scroll - v1.4.5 - 2012-07-21
 *
 * Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL
 * https://github.com/kswedberg/jquery-smooth-scroll
 *
 *
*/
(function(a){function f(a){return a.replace(/(:|\.)/g,"\\$1")}var b="1.4.5",c={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},d=function(b){var c=[],d=!1,e=b.dir&&b.dir=="left"?"scrollLeft":"scrollTop";return this.each(function(){if(this==document||this==window)return;var b=a(this);b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,b[e](0),d&&c.push(this))}),b.el==="first"&&c.length&&(c=[c[0]]),c},e="ontouchend"in document;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b){b=b||{};var c=a.extend({},a.fn.smoothScroll.defaults,b),d=a.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(b){var e=this,g=a(this),h=c.exclude,i=c.excludeWithin,j=0,k=0,l=!0,m={},n=location.hostname===e.hostname||!e.hostname,o=c.scrollTarget||(a.smoothScroll.filterPath(e.pathname)||d)===d,p=f(e.hash);if(!c.scrollTarget&&(!n||!o||!p))l=!1;else{while(l&&j<h.length)g.is(f(h[j++]))&&(l=!1);while(l&&k<i.length)g.closest(i[k++]).length&&(l=!1)}l&&(b.preventDefault(),a.extend(m,c,{scrollTarget:c.scrollTarget||p,link:e}),a.smoothScroll(m))}),this}}),a.smoothScroll=function(b,c){var d,f,g,h,i=0,j="offset",k="scrollTop",l={},m=!1,n=[];typeof b=="number"?(d=a.fn.smoothScroll.defaults,g=b):(d=a.extend({},a.fn.smoothScroll.defaults,b||{}),d.scrollElement&&(j="position",d.scrollElement.css("position")=="static"&&d.scrollElement.css("position","relative")),g=c||a(d.scrollTarget)[j]()&&a(d.scrollTarget)[j]()[d.direction]||0),d=a.extend({link:null},d),k=d.direction=="left"?"scrollLeft":k,d.scrollElement?(f=d.scrollElement,i=f[k]()):(f=a("html, body").firstScrollable(),m=e&&"scrollTo"in window),l[k]=g+i+d.offset,d.beforeScroll.call(f,d),m?(n=d.direction=="left"?[l[k],0]:[0,l[k]],window.scrollTo.apply(window,n),d.afterScroll.call(d.link,d)):(h=d.speed,h==="auto"&&(h=l[k]||f.scrollTop(),h=h/d.autoCoefficent),f.stop().animate(l,{duration:h,easing:d.easing,complete:function(){d.afterScroll.call(d.link,d)}}))},a.smoothScroll.version=b,a.smoothScroll.filterPath=function(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=c})(jQuery);

 jQuery(document).ready(function() {
  jQuery('a.top').smoothScroll();

    jQuery('a.share-btn').click(function() {
    jQuery.smoothScroll({
    scrollElement: jQuery('.share'),
    scrollTarget: '#'
    });
    return false;
  });

});

 if (document.documentElement.clientWidth > 1025) {
 jQuery(document).ready(function() {
  jQuery('a.site-nav-btn').smoothScroll();
});
}


/*---------------------------------------------------------------------------------------------
  Flexible width for embedded videos (see https://github.com/davatron5000/FitVids.js/)
----------------------------------------------------------------------------------------------*/
  jQuery(document).ready(function(){
    jQuery('#content').fitVids();
    jQuery('.widget').fitVids();
  });

/*---------------------------------------------------------------------------------------------
  Support Placeholder input text in IE (see https://github.com/danielstocks/jQuery-Placeholder)
----------------------------------------------------------------------------------------------*/
  jQuery(document).ready(function(){
    jQuery('input[placeholder], textarea[placeholder]').placeholder();
  });

/*--------------------------------------------------------------------------------------------
  Show/Hide effect site navigation and share-btn on mobile
----------------------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
      jQuery('#site-nav').hide();

    jQuery('a#mobile-menu-btn').click(function () {
       jQuery(this).next('#site-nav').slideToggle('200');
    });
});

jQuery(document).ready(function(){
      jQuery('.share').hide();

    jQuery('a.share-btn').click(function () {
       jQuery(this).next('.share').slideToggle('fast');
    });
});
