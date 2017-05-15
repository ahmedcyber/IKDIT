$(function() {
    (new WOW).init();
   
    var n = function() {
        var n = $("#nav-arrows"),
            t = $("#nav-dots > span"),
            i = $("#slider").slitslider({
                onBeforeChange: function(n, i) {
                    t.removeClass("nav-dot-current"), t.eq(i).addClass("nav-dot-current")
                }
            }),
            r = function() {
                e()
            },
            e = function() {
                n.children(":last").on("click", function() {
                    return i.next(), !1
                }), n.children(":first").on("click", function() {
                    return i.previous(), !1
                }), t.each(function(n) {
                    $(this).on("click", function(r) {
                        var e = $(this);
                        return i.isActive() || (t.removeClass("nav-dot-current"), e.addClass("nav-dot-current")), i.jump(n + 1), !1
                    })
                })
            };
        return {
            init: r
        }
    }();
    n.init();

        var Menu = (function() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('.menu');
        var menuList = document.querySelector('.menu__list');
        var brand = document.querySelector('.menu__brand');
        var menuItems = document.querySelectorAll('.menu__item');
        var logo = document.querySelector('.menu__brand img');

        var active = false;
        
        var toggleMenu = function() {
        if (!active) {
            menu.classList.add('menu--active');
            menuList.classList.add('menu__list--active');
            brand.classList.add('menu__brand--active');
            logo.classList.add('active');
            burger.classList.add('burger--close');
            for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.add('menu__item--active');
            }
            
            active = true;
        } else {
            menu.classList.remove('menu--active');
            menuList.classList.remove('menu__list--active');
            brand.classList.remove('menu__brand--active');
            logo.classList.remove('active');
            burger.classList.remove('burger--close');
            for (var i = 0, ii = menuItems.length; i < ii; i++) {
            menuItems[i].classList.remove('menu__item--active');
            }
            
            active = false;
        }
        };
        
        var bindActions = function() {
            burger.addEventListener('click', toggleMenu, false);
        };
        
        var init = function() {
        bindActions();
        };
        
        return {
        init: init
        };
        
    }());
    
    Menu.init();

    $(".progress-btn").on("click", function() {
    var progressBtn = $(this);
    
    if (!progressBtn.hasClass("active")) {
      progressBtn.addClass("active");
      setTimeout(function() {
        progressBtn.removeClass("active");
      }, 10000);
    }

  });

});