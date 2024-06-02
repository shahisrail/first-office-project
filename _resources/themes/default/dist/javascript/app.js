(() => {
    var n, e = {
            725: () => {
                var n;
                jQuery.noConflict(), (n = jQuery)(document).ready((function() {
                    function e() {
                        var e = n(".announcement-banner");
                        e && 0 !== e.length && "none" !== n(e).css("display") ? n(".c-header").css("top", "55px") : n(".c-header").css("top", "0px")
                    }
                    n(".js-narrow-column").find(".row").addClass("justify-content-md-center").find(".col").addClass("col-md-8"), n(".announcement-banner__close").click((function() {
                        e()
                    })), e()
                }))
            },
            359: () => {},
            932: () => {},
            925: () => {}
        },
        r = {};

    function o(n) {
        var t = r[n];
        if (void 0 !== t) return t.exports;
        var a = r[n] = {
            exports: {}
        };
        return e[n](a, a.exports, o), a.exports
    }
    o.m = e, n = [], o.O = (e, r, t, a) => {
        if (!r) {
            var i = 1 / 0;
            for (d = 0; d < n.length; d++) {
                for (var [r, t, a] = n[d], c = !0, s = 0; s < r.length; s++)(!1 & a || i >= a) && Object.keys(o.O).every((n => o.O[n](r[s]))) ? r.splice(s--, 1) : (c = !1, a < i && (i = a));
                if (c) {
                    n.splice(d--, 1);
                    var l = t();
                    void 0 !== l && (e = l)
                }
            }
            return e
        }
        a = a || 0;
        for (var d = n.length; d > 0 && n[d - 1][2] > a; d--) n[d] = n[d - 1];
        n[d] = [r, t, a]
    }, o.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), (() => {
        var n = {
            565: 0,
            298: 0,
            590: 0,
            738: 0
        };
        o.O.j = e => 0 === n[e];
        var e = (e, r) => {
                var t, a, [i, c, s] = r,
                    l = 0;
                if (i.some((e => 0 !== n[e]))) {
                    for (t in c) o.o(c, t) && (o.m[t] = c[t]);
                    if (s) var d = s(o)
                }
                for (e && e(r); l < i.length; l++) a = i[l], o.o(n, a) && n[a] && n[a][0](), n[a] = 0;
                return o.O(d)
            },
            r = self.webpackChunkMint_Design_Boilerplate = self.webpackChunkMint_Design_Boilerplate || [];
        r.forEach(e.bind(null, 0)), r.push = e.bind(null, r.push.bind(r))
    })(), o.O(void 0, [298, 590, 738], (() => o(725))), o.O(void 0, [298, 590, 738], (() => o(359))), o.O(void 0, [298, 590, 738], (() => o(932)));
    var t = o.O(void 0, [298, 590, 738], (() => o(925)));
    t = o.O(t)
})();