/****** FILE: /container/application/public/_resources/vendor/mint-design/blocks-faq-group/dist/javascript/script.js *****/
"use strict";
jQuery.noConflict(),
    function() {}(jQuery);

/****** FILE: /container/application/public/_resources/vendor/mint-design/blocks-form/dist/javascript/script.js *****/
"use strict";
jQuery(document).ready((function() {
    jQuery("form.userform, form.c-form__form").on("submit", (function(t) {
        var r = jQuery(this),
            n = r.find(".Actions .action, .c-form__button button");
        n.attr("disabled", !0), setTimeout((function() {
            0 === r.find("span.error").length ? n.is("input") ? n.val("Busy...") : n.text("Busy...") : n.attr("disabled", !1)
        }), 10)
    }))
}));
/****** FILE: /container/application/public/_resources/vendor/mint-design/blocks-gallery/dist/javascript/script.js *****/
"use strict";
jQuery.noConflict(),
    function(e) {
        if (e(".b-gallery__slider--size-solo").length > 0 && e(".b-gallery__slider--size-solo").each((function() {
                var s = e(this).data("id");
                e('.b-gallery__slider--size-solo[data-id="' + s + '"]').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    fade: !0,
                    asNavFor: '.b-gallery__slider--sync-true[data-id="' + s + '"]',
                    adaptiveHeight: !0
                }), e('.b-gallery__slider--sync-true[data-id="' + s + '"]').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: !1,
                    fade: !1,
                    dots: !1,
                    autoplaySpeed: 3e3,
                    asNavFor: '.b-gallery__slider--size-solo[data-id="' + s + '"]',
                    focusOnSelect: !0,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3
                        }
                    }]
                })
            })), e(".b-gallery__slider--sync-false").length > 0) {
            var s = function e(s) {
                s.stopPropagation(), s.preventDefault(), window.removeEventListener("click", e, !0)
            };
            e(".b-gallery__slider--sync-false").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !1,
                fade: !1,
                dots: !1,
                autoplaySpeed: 3e3,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
            var l = !1;
            e(".b-gallery__slider--sync-false a").mousedown((function() {
                l = !1
            })).mousemove((function() {
                l = !0
            })).mouseup((function() {
                return !!l && window.addEventListener("click", s, !0)
            }))
        }
        e().fancybox({
            selector: ".slick-slide:not(.slick-cloned) .b-gallery__slider-lightbox",
            toolbar: !0,
            animationEffect: "fade",
            loop: !0,
            hash: !1,
            buttons: ["zoom", "close"]
        }), e(".b-gallery__slider-button").on("click", (function(s) {
            s.preventDefault(), s.stopPropagation(), e(this).closest(".b-gallery__box").find(".b-gallery__slider").slick(e(this).data("direction"))
        }))
    }(jQuery);
/****** FILE: /container/application/public/_resources/vendor/mint-design/blocks-virtual/dist/javascript/script.js *****/
"use strict";
jQuery(document).ready((function() {
    function t(t, e) {
        t.forEach((function(t) {
            var r = t && t.split(":");
            r[1] && e.css(r[0].trim(), r[1].trim())
        }))
    }
    jQuery(".dnadesign__elementalvirtual__model__elementvirtual").each((function() {
        var e = jQuery(this).attr("overlay-styles").split(";"),
            r = jQuery(this).attr("padding-styles").split(";"),
            s = jQuery(this).attr("background-styles").trim(),
            o = jQuery(this).attr("background-colour").trim(),
            i = jQuery(this).find(".block-overlay"),
            l = jQuery(this).find(".with-overlay");
        o && !i.length && (i = jQuery('<div class="block-overlay"></div>')).prependTo(l), i.length ? t(e, i) : l.length && t(e, l), l.length && (s && l.removeClass("u-bgposition-center").removeClass("u-bgposition-top").removeClass("u-bgposition-bottom").addClass(s), t(r, l)), jQuery(this).removeAttr("overlay-styles padding-styles background-styles background-colour")
    }))
}));
/****** FILE: /container/application/public/_resources/vendor/mint-design/headers-basic/dist/javascript/script.js *****/
/*! For license information please see script.js.LICENSE.txt */
! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var s = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) n.d(o, s, function(e) {
                return t[e]
            }.bind(null, s));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 1)
}([function(t, e, n) {
    var o, s, i;

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    i = function() {
        "use strict";

        function t() {
            return "undefined" != typeof window
        }

        function e(t) {
            return (i = t) && i.document && function(t) {
                return 9 === t.nodeType
            }(i.document) ? (n = (e = t).document, o = n.body, s = n.documentElement, {
                scrollHeight: function() {
                    return Math.max(o.scrollHeight, s.scrollHeight, o.offsetHeight, s.offsetHeight, o.clientHeight, s.clientHeight)
                },
                height: function() {
                    return e.innerHeight || s.clientHeight || o.clientHeight
                },
                scrollY: function() {
                    return void 0 !== e.pageYOffset ? e.pageYOffset : (s || o.parentNode || o).scrollTop
                }
            }) : function(t) {
                return {
                    scrollHeight: function() {
                        return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
                    },
                    height: function() {
                        return Math.max(t.offsetHeight, t.clientHeight)
                    },
                    scrollY: function() {
                        return t.scrollTop
                    }
                }
            }(t);
            var e, n, o, s, i
        }

        function n(t, n, o) {
            var s, i = function() {
                    var t = !1;
                    try {
                        var e = {
                            get passive() {
                                t = !0
                            }
                        };
                        window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
                    } catch (e) {
                        t = !1
                    }
                    return t
                }(),
                r = !1,
                a = e(t),
                l = a.scrollY(),
                c = a.scrollY(),
                u = {};

            function h() {
                var t = Math.round(a.scrollY()),
                    e = a.height(),
                    s = a.scrollHeight(),
                    i = Math.abs(t - l),
                    h = t > c ? "down" : "up",
                    d = i > n.tolerance[h];
                c = t, d ? (u.scrollY = t, u.lastScrollY = l, u.direction = t > l ? "down" : "up", u.distance = Math.abs(t - l), u.isOutOfBounds = t < 0 || t + e > s, u.top = t <= n.offset[u.direction] - n.tolerance[u.direction], u.bottom = t + e >= s, u.toleranceExceeded = u.distance > n.tolerance[u.direction], o(u), l = t, r = !1) : r = !1
            }

            function d() {
                r || (r = !0, s = requestAnimationFrame(h))
            }
            var f = !!i && {
                passive: !0,
                capture: !1
            };
            return t.addEventListener("scroll", d, f), h(), {
                destroy: function() {
                    cancelAnimationFrame(s), t.removeEventListener("scroll", d, f)
                }
            }
        }

        function o(t) {
            return t === Object(t) ? t : {
                down: t,
                up: t
            }
        }

        function s(t, e) {
            e = e || {}, Object.assign(this, s.options, e), this.classes = Object.assign({}, s.options.classes, e.classes), this.elem = t, this.tolerance = o(this.tolerance), this.offset = o(this.offset), this.initialised = !1, this.frozen = !1
        }
        return s.prototype = {
            constructor: s,
            init: function() {
                return s.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout((function(t) {
                    t.scrollTracker = n(t.scroller, {
                        offset: t.offset,
                        tolerance: t.tolerance
                    }, t.update.bind(t))
                }), 100, this)), this
            },
            destroy: function() {
                this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy()
            },
            unpin: function() {
                !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this))
            },
            pin: function() {
                this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this))
            },
            freeze: function() {
                this.frozen = !0, this.addClass("frozen")
            },
            unfreeze: function() {
                this.frozen = !1, this.removeClass("frozen")
            },
            top: function() {
                this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this))
            },
            notTop: function() {
                this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this))
            },
            bottom: function() {
                this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this))
            },
            notBottom: function() {
                this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this))
            },
            shouldUnpin: function(t) {
                return "down" === t.direction && !t.top && t.toleranceExceeded
            },
            shouldPin: function(t) {
                return "up" === t.direction && t.toleranceExceeded || t.top
            },
            addClass: function(t) {
                this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" "))
            },
            removeClass: function(t) {
                this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" "))
            },
            hasClass: function(t) {
                return this.classes[t].split(" ").every((function(t) {
                    return this.classList.contains(t)
                }), this.elem)
            },
            update: function(t) {
                t.isOutOfBounds || !0 !== this.frozen && (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin())
            }
        }, s.options = {
            tolerance: {
                up: 0,
                down: 0
            },
            offset: 0,
            scroller: t() ? window : null,
            classes: {
                frozen: "headroom--frozen",
                pinned: "headroom--pinned",
                unpinned: "headroom--unpinned",
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                initial: "headroom"
            }
        }, s.cutsTheMustard = !!(t() && function() {}.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), s
    }, "object" === r(e) && void 0 !== t ? t.exports = i() : void 0 === (s = "function" == typeof(o = i) ? o.call(e, n, e, t) : o) || (t.exports = s)
}, function(t, e, n) {
    n(2), t.exports = n(3)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(0),
        s = n.n(o);
    n(0), jQuery.noConflict(),
        function(t) {
            var e = t(".c-header__scrolling-logo").attr("src"),
                n = t(".c-header__logo-image").attr("src");
            t(window).scroll((function() {
                t(".headroom--not-top .c-header__logo-image").attr("src", e), t(".headroom--top .c-header__logo-image").attr("src", n)
            }));
            var o = window.pageYOffset;
            t(document).ready((function() {
                o > 300 && t("#mainHeader").addClass("headroom--not-top")
            }));
            var i = document.getElementById("mainHeader");
            i && new s.a(i, {
                offset: 50,
                tolerance: 5
            }).init();

            function r() {
                return document.documentElement.clientWidth
            }

            function a(e, n) {
                e.preventDefault(), e.stopPropagation(), t(n).toggleClass("is-active"), t(n).closest(".c-menu__list").find(".js-childmenu").slideToggle(200, (function() {
                    t(n).css({
                        height: "auto"
                    })
                }))
            }
            t("#menu-control").on("click", (function(e) {
                t(this).toggleClass("is-active"), t("#mainHeader, .js-header__menu, body").toggleClass("is-active")
            })), t(".c-menu__link-icon").on("click", (function(e) {
                r() <= 991 && a(e, t(this))
            })), t(".js-menu__link").on("click", (function(e) {
                var n = t(e.target).hasClass("c-menu__link-icon"),
                    o = t(e.target).closest("a").hasClass("js-menu__link--disabled-desktop");
                r() <= 991 ? !1 === t(this).hasClass("c-childmenu__link") && (n || o) && a(e, t(this)) : jQuery(this).hasClass("js-menu__link--disabled-desktop") && (e.preventDefault(), e.stopPropagation())
            })), t(window).on("resize", (function() {
                r() > 991 && (t(".js-childmenu").removeAttr("style"), t(".js-menu__link, #mainHeader, #menu-control, .js-header__menu, body").removeClass("is-active"))
            }))
        }(jQuery)
}, function(t, e) {}]);
/****** FILE: /container/application/public/_resources/vendor/mint-design/homepage-hero/dist/javascript/script.js *****/
"use strict";
jQuery.noConflict(),
    function(e) {
        function t() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return parseInt(e[1], 10)
            }
            return 0
        }
        e(window).on("load", (function() {
            (t() > 9 || 0 == t()) && (e(".js-basic-hero__video").addClass("is-active"), e(".js-basic-hero__video-overlay").removeClass("is-active")), e(".js-basic-hero__video-holder").on("touchend", (function() {
                (t() > 9 || 0 == t()) && e(".js-basic-hero__video").get(0).play()
            }))
        }));
        var o = e(".js-basic-hero__video"),
            i = o.data("mobile-src"),
            a = o.data("src"),
            r = document.createElement("source");
        o.length && (e(window).width() < 768 && i ? r.setAttribute("src", i) : r.setAttribute("src", a), o[0].appendChild(r), o[0].play())
    }(jQuery);
/****** FILE: /container/application/public/_resources/vendor/mint-design/newsletter-sign-up/dist/javascript/script.js *****/
"use strict";
jQuery(document).ready((function() {
    var e = document.getElementById("newsletter-done");
    e && setTimeout((function() {
        e.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        })
    }), 100)
}));