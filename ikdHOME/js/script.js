$(function(){(new WOW).init(),setTimeout(function(){$("body").addClass("loaded")},1e3);var n=function(){var n=$("#nav-arrows"),t=$("#nav-dots > span"),i=$("#slider").slitslider({onBeforeChange:function(n,i){t.removeClass("nav-dot-current"),t.eq(i).addClass("nav-dot-current")}}),r=function(){e()},e=function(){n.children(":last").on("click",function(){return i.next(),!1}),n.children(":first").on("click",function(){return i.previous(),!1}),t.each(function(n){$(this).on("click",function(r){var e=$(this);return i.isActive()||(t.removeClass("nav-dot-current"),e.addClass("nav-dot-current")),i.jump(n+1),!1})})};return{init:r}}();n.init()});