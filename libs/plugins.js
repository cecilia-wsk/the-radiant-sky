/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a, b) {
    function G(a) {
        var b = F[a] = {};
        return p.each(a.split(s), function(a, c) { b[c] = !0 }), b }

    function J(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(I, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try { d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d } catch (f) {}
                p.data(a, c, d) } else d = b }
        return d }

    function K(a) {
        var b;
        for (b in a) {
            if (b === "data" && p.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1 }
        return !0 }

    function ba() {
        return !1 }

    function bb() {
        return !0 }

    function bh(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11 }

    function bi(a, b) { do a = a[b]; while (a && a.nodeType !== 1);
        return a }

    function bj(a, b, c) { b = b || 0;
        if (p.isFunction(b)) return p.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c });
        if (b.nodeType) return p.grep(a, function(a, d) {
            return a === b === c });
        if (typeof b == "string") {
            var d = p.grep(a, function(a) {
                return a.nodeType === 1 });
            if (be.test(b)) return p.filter(b, d, !c);
            b = p.filter(b, d) }
        return p.grep(a, function(a, d) {
            return p.inArray(a, b) >= 0 === c }) }

    function bk(a) {
        var b = bl.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c }

    function bC(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b)) }

    function bD(a, b) {
        if (b.nodeType !== 1 || !p.hasData(a)) return;
        var c, d, e, f = p._data(a),
            g = p._data(b, f),
            h = f.events;
        if (h) { delete g.handle, g.events = {};
            for (c in h)
                for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d]) }
        g.data && (g.data = p.extend({}, g.data)) }

    function bE(a, b) {
        var c;
        if (b.nodeType !== 1) return;
        b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando) }

    function bF(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : [] }

    function bG(a) { bv.test(a.type) && (a.defaultChecked = a.checked) }

    function bY(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = bW.length;
        while (e--) { b = bW[e] + c;
            if (b in a) return b }
        return d }

    function bZ(a, b) {
        return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a) }

    function b$(a, b) {
        var c, d, e = [],
            f = 0,
            g = a.length;
        for (; f < g; f++) { c = a[f];
            if (!c.style) continue;
            e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d)) }
        for (f = 0; f < g; f++) { c = a[f];
            if (!c.style) continue;
            if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none" }
        return a }

    function b_(a, b, c) {
        var d = bP.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function ca(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
            f = 0;
        for (; e < 4; e += 2) c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
        return f }

    function cb(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = !0,
            f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null) { d = bH(a, b);
            if (d < 0 || d == null) d = a.style[b];
            if (bQ.test(d)) return d;
            e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0 }
        return d + ca(a, b, c || (f ? "border" : "content"), e) + "px" }

    function cc(a) {
        if (bS[a]) return bS[a];
        var b = p("<" + a + ">").appendTo(e.body),
            c = b.css("display");
        b.remove();
        if (c === "none" || c === "") { bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 }));
            if (!bJ || !bI.createElement) bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close();
            b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI) }
        return bS[a] = c, c }

    function ci(a, b, c, d) {
        var e;
        if (p.isArray(b)) p.each(b, function(b, e) { c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d) });
        else if (!c && p.type(b) === "object")
            for (e in b) ci(a + "[" + e + "]", b[e], c, d);
        else d(a, b) }

    function cz(a) {
        return function(b, c) { typeof b != "string" && (c = b, b = "*");
            var d, e, f, g = b.toLowerCase().split(s),
                h = 0,
                i = g.length;
            if (p.isFunction(c))
                for (; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c) } }

    function cA(a, c, d, e, f, g) { f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h, i = a[f],
            j = 0,
            k = i ? i.length : 0,
            l = a === cv;
        for (; j < k && (l || !h); j++) h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h }

    function cB(a, c) {
        var d, e, f = p.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && p.extend(!0, a, e) }

    function cC(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        while (j[0] === "*") j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) { j.unshift(f);
                    break }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) { g = f;
                    break }
                h || (h = f) }
            g = g || h }
        if (g) return g !== j[0] && j.unshift(g), d[g] }

    function cD(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(),
            h = g[0],
            i = {},
            j = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1])
            for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
        for (; e = g[++j];)
            if (e !== "*") {
                if (h !== "*" && h !== e) { c = i[h + " " + e] || i["* " + e];
                    if (!c)
                        for (d in i) { f = d.split(" ");
                            if (f[1] === e) { c = i[h + " " + f[0]] || i["* " + f[0]];
                                if (c) { c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
                                    break } } }
                    if (c !== !0)
                        if (c && a["throws"]) b = c(b);
                        else try { b = c(b) } catch (k) {
                            return { state: "parsererror", error: c ? k : "No conversion from " + h + " to " + e } } }
                h = e }
        return { state: "success", data: b } }

    function cL() {
        try {
            return new a.XMLHttpRequest } catch (b) {} }

    function cM() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }

    function cU() {
        return setTimeout(function() { cN = b }, 0), cN = p.now() }

    function cV(a, b) { p.each(b, function(b, c) {
            var d = (cT[b] || []).concat(cT["*"]),
                e = 0,
                f = d.length;
            for (; e < f; e++)
                if (d[e].call(a, b, c)) return }) }

    function cW(a, b, c) {
        var d, e = 0,
            f = 0,
            g = cS.length,
            h = p.Deferred().always(function() { delete i.elem }),
            i = function() {
                var b = cN || cU(),
                    c = Math.max(0, j.startTime + j.duration - b),
                    d = 1 - (c / j.duration || 0),
                    e = 0,
                    f = j.tweens.length;
                for (; e < f; e++) j.tweens[e].run(d);
                return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: p.extend({}, b), opts: p.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: cN || cU(), duration: c.duration, tweens: [], createTween: function(b, c, d) {
                    var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(e), e }, stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    for (; c < d; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }),
            k = j.props;
        cX(k, j.opts.specialEasing);
        for (; e < g; e++) { d = cS[e].call(j, a, k, j.opts);
            if (d) return d }
        return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, { anim: j, queue: j.opts.queue, elem: a })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }

    function cX(a, b) {
        var c, d, e, f, g;
        for (c in a) { d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
            if (g && "expand" in g) { f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } }

    function cY(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = a.style,
            n = {},
            o = [],
            q = a.nodeType && bZ(a);
        c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() { j.unqueued || k() }), j.unqueued++, l.always(function() { l.always(function() { j.unqueued--, p.queue(a, "fx").length || j.empty.fire() }) })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function() { m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2] }));
        for (d in b) { f = b[d];
            if (cP.exec(f)) { delete b[d];
                if (f === (q ? "hide" : "show")) continue;
                o.push(d) } }
        g = o.length;
        if (g) { h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function() { p(a).hide() }), l.done(function() {
                var b;
                p.removeData(a, "fxshow", !0);
                for (b in n) p.style(a, b, n[b]) });
            for (d = 0; d < g; d++) e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0)) } }

    function cZ(a, b, c, d, e) {
        return new cZ.prototype.init(a, b, c, d, e) }

    function c$(a, b) {
        var c, d = { height: a },
            e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b) c = bV[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d }

    function da(a) {
        return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1 }
    var c, d, e = a.document,
        f = a.location,
        g = a.navigator,
        h = a.jQuery,
        i = a.$,
        j = Array.prototype.push,
        k = Array.prototype.slice,
        l = Array.prototype.indexOf,
        m = Object.prototype.toString,
        n = Object.prototype.hasOwnProperty,
        o = String.prototype.trim,
        p = function(a, b) {
            return new p.fn.init(a, b, c) },
        q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        r = /\S/,
        s = /\s+/,
        t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        A = /^-ms-/,
        B = /-([\da-z])/gi,
        C = function(a, b) {
            return (b + "").toUpperCase() },
        D = function() { e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready()) },
        E = {};
    p.fn = p.prototype = { constructor: p, init: function(a, c, d) {
            var f, g, h, i;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if (typeof a == "string") { a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
                if (f && (f[1] || !c)) {
                    if (f[1]) return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a);
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2]) return d.find(a);
                        this.length = 1, this[0] = g }
                    return this.context = e, this.selector = a, this }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a) }
            return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this)) }, selector: "", jquery: "1.8.2", length: 0, size: function() {
            return this.length }, toArray: function() {
            return k.call(this) }, get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a] }, pushStack: function(a, b, c) {
            var d = p.merge(this.constructor(), a);
            return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d }, each: function(a, b) {
            return p.each(this, a, b) }, ready: function(a) {
            return p.ready.promise().done(a), this }, eq: function(a) {
            return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, slice: function() {
            return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(",")) }, map: function(a) {
            return this.pushStack(p.map(this, function(b, c) {
                return a.call(b, c, b) })) }, end: function() {
            return this.prevObject || this.constructor(null) }, push: j, sort: [].sort, splice: [].splice }, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++)
            if ((a = arguments[i]) != null)
                for (c in a) { d = h[c], e = a[c];
                    if (h === e) continue;
                    k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e) }
            return h }, p.extend({ noConflict: function(b) {
            return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p }, isReady: !1, readyWait: 1, holdReady: function(a) { a ? p.readyWait++ : p.ready(!0) }, ready: function(a) {
            if (a === !0 ? --p.readyWait : p.isReady) return;
            if (!e.body) return setTimeout(p.ready, 1);
            p.isReady = !0;
            if (a !== !0 && --p.readyWait > 0) return;
            d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready") }, isFunction: function(a) {
            return p.type(a) === "function" }, isArray: Array.isArray || function(a) {
            return p.type(a) === "array" }, isWindow: function(a) {
            return a != null && a == a.window }, isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a) }, type: function(a) {
            return a == null ? String(a) : E[m.call(a)] || "object" }, isPlainObject: function(a) {
            if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return !1;
            try {
                if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) {
                return !1 }
            var d;
            for (d in a);
            return d === b || n.call(a, d) }, isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0 }, error: function(a) {
            throw new Error(a) }, parseHTML: function(a, b, c) {
            var d;
            return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes))) }, parseJSON: function(b) {
            if (!b || typeof b != "string") return null;
            b = p.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return (new Function("return " + b))();
            p.error("Invalid JSON: " + b) }, parseXML: function(c) {
            var d, e;
            if (!c || typeof c != "string") return null;
            try { a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c)) } catch (f) { d = b }
            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d }, noop: function() {}, globalEval: function(b) { b && r.test(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) {
            return a.replace(A, "ms-").replace(B, C) }, nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, c, d) {
            var e, f = 0,
                g = a.length,
                h = g === b || p.isFunction(a);
            if (d) {
                if (h) {
                    for (e in a)
                        if (c.apply(a[e], d) === !1) break } else
                    for (; f < g;)
                        if (c.apply(a[f++], d) === !1) break } else if (h) {
                for (e in a)
                    if (c.call(a[e], e, a[e]) === !1) break } else
                for (; f < g;)
                    if (c.call(a[f], f, a[f++]) === !1) break; return a }, trim: o && !o.call("ï»¿Â ") ? function(a) {
            return a == null ? "" : o.call(a) } : function(a) {
            return a == null ? "" : (a + "").replace(t, "") }, makeArray: function(a, b) {
            var c, d = b || [];
            return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d }, inArray: function(a, b, c) {
            var d;
            if (b) {
                if (l) return l.call(b, a, c);
                d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)
                    if (c in b && b[c] === a) return c }
            return -1 }, merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if (typeof d == "number")
                for (; f < d; f++) a[e++] = c[f];
            else
                while (c[f] !== b) a[e++] = c[f++];
            return a.length = e, a }, grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            c = !!c;
            for (; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e }, map: function(a, c, d) {
            var e, f, g = [],
                h = 0,
                i = a.length,
                j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
            if (j)
                for (; h < i; h++) e = c(a[h], h, d), e != null && (g[g.length] = e);
            else
                for (f in a) e = c(a[f], f, d), e != null && (g[g.length] = e);
            return g.concat.apply([], g) }, guid: 1, proxy: function(a, c) {
            var d, e, f;
            return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function() {
                return a.apply(c, e.concat(k.call(arguments))) }, f.guid = a.guid = a.guid || p.guid++, f) : b }, access: function(a, c, d, e, f, g, h) {
            var i, j = d == null,
                k = 0,
                l = a.length;
            if (d && typeof d == "object") {
                for (k in d) p.access(a, c, k, d[k], 1, g, e);
                f = 1 } else if (e !== b) { i = h === b && p.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
                    return i.call(p(a), c) }) : (c.call(a, e), c = null));
                if (c)
                    for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
                f = 1 }
            return f ? a : j ? c.call(a) : l ? c(a[0], d) : g }, now: function() {
            return (new Date).getTime() } }), p.ready.promise = function(b) {
        if (!d) { d = p.Deferred();
            if (e.readyState === "complete") setTimeout(p.ready, 1);
            else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1);
            else { e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
                var c = !1;
                try { c = a.frameElement == null && e.documentElement } catch (f) {}
                c && c.doScroll && function g() {
                    if (!p.isReady) {
                        try { c.doScroll("left") } catch (a) {
                            return setTimeout(g, 50) }
                        p.ready() } }() } }
        return d.promise(b) }, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) { E["[object " + b + "]"] = b.toLowerCase() }), c = p(e);
    var F = {};
    p.Callbacks = function(a) { a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
        var c, d, e, f, g, h, i = [],
            j = !a.once && [],
            k = function(b) { c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
                for (; i && h < g; h++)
                    if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) { c = !1;
                        break }
                e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable()) },
            l = { add: function() {
                    if (i) {
                        var b = i.length;
                        (function d(b) { p.each(b, function(b, c) {
                                var e = p.type(c);
                                e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c) }) })(arguments), e ? g = i.length : c && (f = b, k(c)) }
                    return this }, remove: function() {
                    return i && p.each(arguments, function(a, b) {
                        var c;
                        while ((c = p.inArray(b, i, c)) > -1) i.splice(c, 1), e && (c <= g && g--, c <= h && h--) }), this }, has: function(a) {
                    return p.inArray(a, i) > -1 }, empty: function() {
                    return i = [], this }, disable: function() {
                    return i = j = c = b, this }, disabled: function() {
                    return !i }, lock: function() {
                    return j = b, c || l.disable(), this }, locked: function() {
                    return !j }, fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this }, fire: function() {
                    return l.fireWith(this, arguments), this }, fired: function() {
                    return !!d } };
        return l }, p.extend({ Deferred: function(a) {
            var b = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() {
                        return c }, always: function() {
                        return e.done(arguments).fail(arguments), this }, then: function() {
                        var a = arguments;
                        return p.Deferred(function(c) { p.each(b, function(b, d) {
                                var f = d[0],
                                    g = a[b];
                                e[d[1]](p.isFunction(g) ? function() {
                                    var a = g.apply(this, arguments);
                                    a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a]) } : c[f]) }), a = null }).promise() }, promise: function(a) {
                        return a != null ? p.extend(a, d) : d } },
                e = {};
            return d.pipe = d.then, p.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) {
            var b = 0,
                c = k.call(arguments),
                d = c.length,
                e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
                f = e === 1 ? a : p.Deferred(),
                g = function(a, b, c) {
                    return function(d) { b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c) } },
                h, i, j;
            if (d > 1) { h = new Array(d), i = new Array(d), j = new Array(d);
                for (; b < d; b++) c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e }
            return e || f.resolveWith(j, c), f.promise() } }), p.support = function() {
        var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
        n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
        if (!c || !c.length) return {};
        f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = { leadingWhitespace: n.firstChild.nodeType === 3, tbody: !n.getElementsByTagName("tbody").length, htmlSerialize: !!n.getElementsByTagName("link").length, style: /top/.test(d.getAttribute("style")), hrefNormalized: d.getAttribute("href") === "/a", opacity: /^0.5/.test(d.style.opacity), cssFloat: !!d.style.cssFloat, checkOn: h.value === "on", optSelected: g.selected, getSetAttribute: n.className !== "t", enctype: !!e.createElement("form").enctype, html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", boxModel: e.compatMode === "CSS1Compat", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
        try { delete n.test } catch (o) { b.deleteExpando = !1 }!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() { b.noCloneEvent = !1 }), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
        if (n.attachEvent)
            for (k in { submit: !0, change: !0, focusin: !0 }) j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l;
        return p(function() {
            var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                i = e.getElementsByTagName("body")[0];
            if (!i) return;
            c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || { width: "4px" }).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null }), i.removeChild(n), c = d = f = g = h = i = n = null, b }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    p.extend({ cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(a) {
            return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a) }, data: function(a, c, d, e) {
            if (!p.acceptData(a)) return;
            var f, g, h = p.expando,
                i = typeof c == "string",
                j = a.nodeType,
                k = j ? p.cache : a,
                l = j ? a[h] : a[h] && h;
            if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
            l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
            if (typeof c == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
            return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g }, removeData: function(a, b, c) {
            if (!p.acceptData(a)) return;
            var d, e, f, g = a.nodeType,
                h = g ? p.cache : a,
                i = g ? a[p.expando] : p.expando;
            if (!h[i]) return;
            if (b) { d = c ? h[i] : h[i].data;
                if (d) { p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                    for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
                    if (!(c ? K : p.isEmptyObject)(d)) return } }
            if (!c) { delete h[i].data;
                if (!K(h[i])) return }
            g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null }, _data: function(a, b, c) {
            return p.data(a, b, c, !0) }, acceptData: function(a) {
            var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b } }), p.fn.extend({ data: function(a, c) {
            var d, e, f, g, h, i = this[0],
                j = 0,
                k = null;
            if (a === b) {
                if (this.length) { k = p.data(i);
                    if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) { f = i.attributes;
                        for (h = f.length; j < h; j++) g = f[j].name, g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
                        p._data(i, "parsedAttrs", !0) } }
                return k }
            return typeof a == "object" ? this.each(function() { p.data(this, a) }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function(c) {
                if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k;
                d[1] = c, this.each(function() {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d) }) }, null, c, arguments.length > 1, null, !1)) }, removeData: function(a) {
            return this.each(function() { p.removeData(this, a) }) } }), p.extend({ queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || [] }, dequeue: function(a, b) { b = b || "fx";
            var c = p.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = p._queueHooks(a, b),
                g = function() { p.dequeue(a, b) };
            e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return p._data(a, c) || p._data(a, c, { empty: p.Callbacks("once memory").add(function() { p.removeData(a, b + "queue", !0), p.removeData(a, c, !0) }) }) } }), p.fn.extend({ queue: function(a, c) {
            var d = 2;
            return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a) }) }, dequeue: function(a) {
            return this.each(function() { p.dequeue(this, a) }) }, delay: function(a, b) {
            return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) } }) }, clearQueue: function(a) {
            return this.queue(a || "fx", []) }, promise: function(a, c) {
            var d, e = 1,
                f = p.Deferred(),
                g = this,
                h = this.length,
                i = function() {--e || f.resolveWith(g, [g]) };
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            while (h--) d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c) } });
    var L, M, N, O = /[\t\r\n]/g,
        P = /\r/g,
        Q = /^(?:button|input)$/i,
        R = /^(?:button|input|object|select|textarea)$/i,
        S = /^a(?:rea|)$/i,
        T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        U = p.support.getSetAttribute;
    p.fn.extend({ attr: function(a, b) {
            return p.access(this, p.attr, a, b, arguments.length > 1) }, removeAttr: function(a) {
            return this.each(function() { p.removeAttr(this, a) }) }, prop: function(a, b) {
            return p.access(this, p.prop, a, b, arguments.length > 1) }, removeProp: function(a) {
            return a = p.propFix[a] || a, this.each(function() {
                try { this[a] = b, delete this[a] } catch (c) {} }) }, addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (p.isFunction(a)) return this.each(function(b) { p(this).addClass(a.call(this, b, this.className)) });
            if (a && typeof a == "string") { b = a.split(s);
                for (c = 0, d = this.length; c < d; c++) { e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else { f = " " + e.className + " ";
                            for (g = 0, h = b.length; g < h; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                            e.className = p.trim(f) } } }
            return this }, removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (p.isFunction(a)) return this.each(function(b) { p(this).removeClass(a.call(this, b, this.className)) });
            if (a && typeof a == "string" || a === b) { c = (a || "").split(s);
                for (h = 0, i = this.length; h < i; h++) { e = this[h];
                    if (e.nodeType === 1 && e.className) { d = (" " + e.className + " ").replace(O, " ");
                        for (f = 0, g = c.length; f < g; f++)
                            while (d.indexOf(" " + c[f] + " ") >= 0) d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? p.trim(d) : "" } } }
            return this }, toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            return p.isFunction(a) ? this.each(function(c) { p(this).toggleClass(a.call(this, c, this.className, b), b) }) : this.each(function() {
                if (c === "string") {
                    var e, f = 0,
                        g = p(this),
                        h = b,
                        i = a.split(s);
                    while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e) } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || "" }) }, hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) return !0;
            return !1 }, val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d);
                return }
            return e = p.isFunction(a), this.each(function(d) {
                var f, g = p(this);
                if (this.nodeType !== 1) return;
                e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
                    return a == null ? "" : a + "" })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f }) } }), p.extend({ valHooks: { option: { get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text } }, select: { get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = a.type === "select-one";
                    if (f < 0) return null;
                    c = i ? f : 0, d = i ? f + 1 : h.length;
                    for (; c < d; c++) { e = h[c];
                        if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) { b = p(e).val();
                            if (i) return b;
                            g.push(b) } }
                    return i && !g.length && h.length ? p(h[f]).val() : g }, set: function(a, b) {
                    var c = p.makeArray(b);
                    return p(a).find("option").each(function() { this.selected = p.inArray(p(this).val(), c) >= 0 }), c.length || (a.selectedIndex = -1), c } } }, attrFn: {}, attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2) return;
            if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
            if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
            h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
            if (d !== b) {
                if (d === null) { p.removeAttr(a, c);
                    return }
                return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) }
            return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f) }, removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) { d = b.split(s);
                for (; g < d.length; g++) e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1)) } }, attrHooks: { type: { set: function(a, b) {
                    if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");
                    else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b } } }, value: { get: function(a, b) {
                    return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null }, set: function(a, b, c) {
                    if (L && p.nodeName(a, "button")) return L.set(a, b, c);
                    a.value = b } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (!a || h === 3 || h === 8 || h === 2) return;
            return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c] }, propHooks: { tabIndex: { get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b } } } }), M = { get: function(a, c) {
            var d, e = p.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b }, set: function(a, b, c) {
            var d;
            return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c } }, U || (N = { name: !0, id: !0, coords: !0 }, L = p.valHooks.button = { get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b }, set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + "" } }, p.each(["width", "height"], function(a, b) { p.attrHooks[b] = p.extend(p.attrHooks[b], { set: function(a, c) {
                if (c === "") return a.setAttribute(b, "auto"), c } }) }), p.attrHooks.contenteditable = { get: L.get, set: function(a, b, c) { b === "" && (b = "false"), L.set(a, b, c) } }), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) { p.attrHooks[c] = p.extend(p.attrHooks[c], { get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d } }) }), p.support.style || (p.attrHooks.style = { get: function(a) {
            return a.style.cssText.toLowerCase() || b }, set: function(a, b) {
            return a.style.cssText = b + "" } }), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, { get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } })), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function() { p.valHooks[this] = { get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value } } }), p.each(["radio", "checkbox"], function() { p.valHooks[this] = p.extend(p.valHooks[this], { set: function(a, b) {
                if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0 } }) });
    var V = /^(?:textarea|input|select)$/i,
        W = /^([^\.]*|)(?:\.(.+)|)$/,
        X = /(?:^|\s)hover(\.\S+|)\b/,
        Y = /^key/,
        Z = /^(?:mouse|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = function(a) {
            return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1") };
    p.event = { add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, q, r;
                if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
                d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                    return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b }, h.elem = a), c = p.trim(_(c)).split(" ");
                for (j = 0; j < c.length; j++) { k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({ type: l, origType: k[1], data: e, handler: d, guid: d.guid, selector: f, needsContext: f && p.expr.match.needsContext.test(f), namespace: m.join(".") }, o), q = i[l];
                    if (!q) { q = i[l] = [], q.delegateCount = 0;
                        if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h) }
                    r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0 }
                a = null }, global: {}, remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
                if (!r || !(m = r.events)) return;
                b = p.trim(_(b || "")).split(" ");
                for (f = 0; f < b.length; f++) { g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
                    if (!h) {
                        for (h in m) p.event.remove(a, h + b[f], c, d, !0);
                        continue }
                    n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (l = 0; l < o.length; l++) q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
                    o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h]) }
                p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0)) }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function(c, d, f, g) {
                if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                    var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
                        t = [];
                    if ($.test(s + p.event.triggered)) return;
                    s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
                    if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
                    c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
                    if (!f) { h = p.cache;
                        for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
                        return }
                    c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
                    if (n.trigger && n.trigger.apply(f, d) === !1) return;
                    q = [
                        [f, n.bindType || s]
                    ];
                    if (!g && !n.noBubble && !p.isWindow(f)) { r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
                        for (l = f; k; k = k.parentNode) q.push([k, r]), l = k;
                        l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r]) }
                    for (j = 0; j < q.length && !c.isPropagationStopped(); j++) k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault();
                    return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result }
                return }, dispatch: function(c) { c = p.event.fix(c || a.event);
                var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
                    q = o.delegateCount,
                    r = k.call(arguments),
                    s = !c.exclusive && !c.namespace,
                    t = p.event.special[c.type] || {},
                    u = [];
                r[0] = c, c.delegateTarget = this;
                if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
                if (q && (!c.button || c.type !== "click"))
                    for (f = c.target; f != this; f = f.parentNode || this)
                        if (f.disabled !== !0 || c.type !== "click") { h = {}, j = [];
                            for (d = 0; d < q; d++) l = o[d], m = l.selector, h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length), h[m] && j.push(l);
                            j.length && u.push({ elem: f, matches: j }) }
                o.length > q && u.push({ elem: this, matches: o.slice(q) });
                for (d = 0; d < u.length && !c.isPropagationStopped(); d++) { i = u[d], c.currentTarget = i.elem;
                    for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) { l = i.matches[e];
                        if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) c.data = l.data, c.handleObj = l, g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())) } }
                return t.postDispatch && t.postDispatch.call(this, c), c.result }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) {
                    return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, c) {
                    var d, f, g, h = c.button,
                        i = c.fromElement;
                    return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a } }, fix: function(a) {
                if (a[p.expando]) return a;
                var b, c, d = a,
                    f = p.event.fixHooks[a.type] || {},
                    g = f.props ? this.props.concat(f.props) : this.props;
                a = p.Event(d);
                for (b = g.length; b;) c = g[--b], a[c] = d[c];
                return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a }, special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(a, b, c) { p.isWindow(this) && (this.onbeforeunload = c) }, teardown: function(a, b) { this.onbeforeunload === b && (this.onbeforeunload = null) } } }, simulate: function(a, b, c, d) {
                var e = p.extend(new p.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
                d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c)) }, p.Event = function(a, b) {
            if (this instanceof p.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0;
            else return new p.Event(a, b) }, p.Event.prototype = { preventDefault: function() { this.isDefaultPrevented = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1 }, stopPropagation: function() { this.isPropagationStopped = bb;
                var a = this.originalEvent;
                if (!a) return;
                a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0 }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = bb, this.stopPropagation() }, isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba }, p.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) { p.event.special[a] = { delegateType: b, bindType: b, handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj,
                        g = f.selector;
                    if (!e || e !== d && !p.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
                    return c } } }), p.support.submitBubbles || (p.event.special.submit = { setup: function() {
                if (p.nodeName(this, "form")) return !1;
                p.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
                    d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) { a._submit_bubble = !0 }), p._data(d, "_submit_attached", !0)) }) }, postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function() {
                if (p.nodeName(this, "form")) return !1;
                p.event.remove(this, "._submit") } }), p.support.changeBubbles || (p.event.special.change = { setup: function() {
                if (V.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(a) { a.originalEvent.propertyName === "checked" && (this._just_changed = !0) }), p.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0) });
                    return !1 }
                p.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) { this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0) }), p._data(b, "_change_attached", !0)) }) }, handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments) }, teardown: function() {
                return p.event.remove(this, "._change"), !V.test(this.nodeName) } }), p.support.focusinBubbles || p.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
            var c = 0,
                d = function(a) { p.event.simulate(b, a.target, p.event.fix(a), !0) };
            p.event.special[b] = { setup: function() { c++ === 0 && e.addEventListener(a, d, !0) }, teardown: function() {--c === 0 && e.removeEventListener(a, d, !0) } } }), p.fn.extend({ on: function(a, c, d, e, f) {
                var g, h;
                if (typeof a == "object") { typeof c != "string" && (d = d || c, c = b);
                    for (h in a) this.on(h, c, d, a[h], f);
                    return this }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) e = ba;
                else if (!e) return this;
                return f === 1 && (g = e, e = function(a) {
                    return p().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = p.guid++)), this.each(function() { p.event.add(this, a, e, d, c) }) }, one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1) }, off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if (typeof a == "object") {
                    for (f in a) this.off(f, c, a[f]);
                    return this }
                if (c === !1 || typeof c == "function") d = c, c = b;
                return d === !1 && (d = ba), this.each(function() { p.event.remove(this, a, d, c) }) }, bind: function(a, b, c) {
                return this.on(a, null, b, c) }, unbind: function(a, b) {
                return this.off(a, null, b) }, live: function(a, b, c) {
                return p(this.context).on(a, this.selector, b, c), this }, die: function(a, b) {
                return p(this.context).off(a, this.selector || "**", b), this }, delegate: function(a, b, c, d) {
                return this.on(b, a, c, d) }, undelegate: function(a, b, c) {
                return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c) }, trigger: function(a, b) {
                return this.each(function() { p.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) {
                if (this[0]) return p.event.trigger(a, b, this[0], !0) }, toggle: function(a) {
                var b = arguments,
                    c = a.guid || p.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
                        return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1 };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e) }, hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a) } }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { p.fn[b] = function(a, c) {
                return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) }, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks) }),
        function(a, b) {
            function bc(a, b, c, d) { c = c || [], b = b || r;
                var e, f, i, j, k = b.nodeType;
                if (!a || typeof a != "string") return c;
                if (k !== 1 && k !== 9) return [];
                i = g(b);
                if (!i && !d)
                    if (e = P.exec(a))
                        if (j = e[1]) {
                            if (k === 9) { f = b.getElementById(j);
                                if (!f || !f.parentNode) return c;
                                if (f.id === j) return c.push(f), c } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) return c.push(f), c } else {
                            if (e[2]) return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c;
                            if ((j = e[3]) && _ && b.getElementsByClassName) return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c }
                return bp(a.replace(L, "$1"), b, c, d, i) }

            function bd(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return c === "input" && b.type === a } }

            function be(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return (c === "input" || c === "button") && b.type === a } }

            function bf(a) {
                return z(function(b) {
                    return b = +b, z(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function bg(a, b, c) {
                if (a === b) return c;
                var d = a.nextSibling;
                while (d) {
                    if (d === b) return -1;
                    d = d.nextSibling }
                return 1 }

            function bh(a, b) {
                var c, d, f, g, h, i, j, k = C[o][a];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = e.preFilter;
                while (h) {
                    if (!c || (d = M.exec(h))) d && (h = h.slice(d[0].length)), i.push(f = []);
                    c = !1;
                    if (d = N.exec(h)) f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = d[0].replace(L, " ");
                    for (g in e.filter)(d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d);
                    if (!c) break }
                return b ? h.length : h ? bc.error(a) : C(a, i).slice(0) }

            function bi(a, b, d) {
                var e = b.dir,
                    f = d && b.dir === "parentNode",
                    g = u++;
                return b.first ? function(b, c, d) {
                    while (b = b[e])
                        if (f || b.nodeType === 1) return a(b, c, d) } : function(b, d, h) {
                    if (!h) {
                        var i, j = t + " " + g + " ",
                            k = j + c;
                        while (b = b[e])
                            if (f || b.nodeType === 1) {
                                if ((i = b[o]) === k) return b.sizset;
                                if (typeof i == "string" && i.indexOf(j) === 0) {
                                    if (b.sizset) return b } else { b[o] = k;
                                    if (a(b, d, h)) return b.sizset = !0, b;
                                    b.sizset = !1 } } } else
                        while (b = b[e])
                            if (f || b.nodeType === 1)
                                if (a(b, d, h)) return b } }

            function bj(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0 } : a[0] }

            function bk(a, b, c, d, e) {
                var f, g = [],
                    h = 0,
                    i = a.length,
                    j = b != null;
                for (; h < i; h++)
                    if (f = a[h])
                        if (!c || c(f, d, e)) g.push(f), j && b.push(h);
                return g }

            function bl(a, b, c, d, e, f) {
                return d && !d[o] && (d = bl(d)), e && !e[o] && (e = bl(e, f)), z(function(f, g, h, i) {
                    if (f && e) return;
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
                        q = a && (f || !b) ? bk(p, m, a, h, i) : p,
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    c && c(q, r, h, i);
                    if (d) { l = bk(r, n), d(l, [], h, i), j = l.length;
                        while (j--)
                            if (k = l[j]) r[n[j]] = !(q[n[j]] = k) }
                    if (f) { j = a && r.length;
                        while (j--)
                            if (k = r[j]) f[m[j]] = !(g[m[j]] = k) } else r = bk(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : w.apply(g, r) }) }

            function bm(a) {
                var b, c, d, f = a.length,
                    g = e.relative[a[0].type],
                    h = g || e.relative[" "],
                    i = g ? 1 : 0,
                    j = bi(function(a) {
                        return a === b }, h, !0),
                    k = bi(function(a) {
                        return y.call(b, a) > -1 }, h, !0),
                    m = [function(a, c, d) {
                        return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d)) }];
                for (; i < f; i++)
                    if (c = e.relative[a[i].type]) m = [bi(bj(m), c)];
                    else { c = e.filter[a[i].type].apply(null, a[i].matches);
                        if (c[o]) { d = ++i;
                            for (; d < f; d++)
                                if (e.relative[a[d].type]) break;
                            return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join("")) }
                        m.push(c) }
                return bj(m) }

            function bn(a, b) {
                var d = b.length > 0,
                    f = a.length > 0,
                    g = function(h, i, j, k, m) {
                        var n, o, p, q = [],
                            s = 0,
                            u = "0",
                            x = h && [],
                            y = m != null,
                            z = l,
                            A = h || f && e.find.TAG("*", m && i.parentNode || i),
                            B = t += z == null ? 1 : Math.E;
                        y && (l = i !== r && i, c = g.el);
                        for (;
                            (n = A[u]) != null; u++) {
                            if (f && n) {
                                for (o = 0; p = a[o]; o++)
                                    if (p(n, i, j)) { k.push(n);
                                        break }
                                y && (t = B, c = ++g.el) }
                            d && ((n = !p && n) && s--, h && x.push(n)) }
                        s += u;
                        if (d && u !== s) {
                            for (o = 0; p = b[o]; o++) p(x, q, i, j);
                            if (h) {
                                if (s > 0)
                                    while (u--) !x[u] && !q[u] && (q[u] = v.call(k));
                                q = bk(q) }
                            w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k) }
                        return y && (t = B, l = z), x };
                return g.el = 0, d ? z(g) : g }

            function bo(a, b, c, d) {
                var e = 0,
                    f = b.length;
                for (; e < f; e++) bc(a, b[e], c, d);
                return c }

            function bp(a, b, c, d, f) {
                var g, h, j, k, l, m = bh(a),
                    n = m.length;
                if (!d && m.length === 1) { h = m[0] = m[0].slice(0);
                    if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) { b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
                        if (!b) return c;
                        a = a.slice(h.shift().length) }
                    for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) { j = h[g];
                        if (e.relative[k = j.type]) break;
                        if (l = e.find[k])
                            if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) { h.splice(g, 1), a = d.length && h.join("");
                                if (!a) return w.apply(c, x.call(d, 0)), c;
                                break } } }
                return i(a, m)(d, b, f, c, R.test(a)), c }

            function bq() {}
            var c, d, e, f, g, h, i, j, k, l, m = !0,
                n = "undefined",
                o = ("sizcache" + Math.random()).replace(".", ""),
                q = String,
                r = a.document,
                s = r.documentElement,
                t = 0,
                u = 0,
                v = [].pop,
                w = [].push,
                x = [].slice,
                y = [].indexOf || function(a) {
                    var b = 0,
                        c = this.length;
                    for (; b < c; b++)
                        if (this[b] === a) return b;
                    return -1 },
                z = function(a, b) {
                    return a[o] = b == null || b, a },
                A = function() {
                    var a = {},
                        b = [];
                    return z(function(c, d) {
                        return b.push(c) > e.cacheLength && delete a[b.shift()], a[c] = d }, a) },
                B = A(),
                C = A(),
                D = A(),
                E = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                G = F.replace("w", "w#"),
                H = "([*^$|!~]?=)",
                I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]",
                J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)",
                K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)",
                L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                M = new RegExp("^" + E + "*," + E + "*"),
                N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
                O = new RegExp(J),
                P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                Q = /^:not/,
                R = /[\x20\t\r\n\f]*[+~]/,
                S = /:not\($/,
                T = /h\d/i,
                U = /input|select|textarea|button/i,
                V = /\\(?!\\)/g,
                W = { ID: new RegExp("^#(" + F + ")"), CLASS: new RegExp("^\\.(" + F + ")"), NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"), TAG: new RegExp("^(" + F.replace("w", "w*") + ")"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + J), POS: new RegExp(K, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"), needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i") },
                X = function(a) {
                    var b = r.createElement("div");
                    try {
                        return a(b) } catch (c) {
                        return !1 } finally { b = null } },
                Y = X(function(a) {
                    return a.appendChild(r.createComment("")), !a.getElementsByTagName("*").length }),
                Z = X(function(a) {
                    return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#" }),
                $ = X(function(a) { a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return b !== "boolean" && b !== "string" }),
                _ = X(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2) }),
                ba = X(function(a) { a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", s.insertBefore(a, s.firstChild);
                    var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
                    return d = !r.getElementById(o), s.removeChild(a), b });
            try { x.call(s.childNodes, 0)[0].nodeType } catch (bb) { x = function(a) {
                    var b, c = [];
                    for (; b = this[a]; a++) c.push(b);
                    return c } }
            bc.matches = function(a, b) {
                return bc(a, null, null, b) }, bc.matchesSelector = function(a, b) {
                return bc(b, null, null, [a]).length > 0 }, f = bc.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (e === 1 || e === 9 || e === 11) {
                        if (typeof a.textContent == "string") return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += f(a) } else if (e === 3 || e === 4) return a.nodeValue } else
                    for (; b = a[d]; d++) c += f(b);
                return c }, g = bc.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? b.nodeName !== "HTML" : !1 }, h = bc.contains = s.contains ? function(a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d)) } : s.compareDocumentPosition ? function(a, b) {
                return b && !!(a.compareDocumentPosition(b) & 16) } : function(a, b) {
                while (b = b.parentNode)
                    if (b === a) return !0;
                return !1 }, bc.attr = function(a, b) {
                var c, d = g(a);
                return d || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null) }, e = bc.selectors = { cacheLength: 50, createPseudo: z, match: W, attrHandle: Z ? {} : { href: function(a) {
                        return a.getAttribute("href", 2) }, type: function(a) {
                        return a.getAttribute("type") } }, find: { ID: d ? function(a, b, c) {
                        if (typeof b.getElementById !== n && !c) {
                            var d = b.getElementById(a);
                            return d && d.parentNode ? [d] : [] } } : function(a, c, d) {
                        if (typeof c.getElementById !== n && !d) {
                            var e = c.getElementById(a);
                            return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : [] } }, TAG: Y ? function(a, b) {
                        if (typeof b.getElementsByTagName !== n) return b.getElementsByTagName(a) } : function(a, b) {
                        var c = b.getElementsByTagName(a);
                        if (a === "*") {
                            var d, e = [],
                                f = 0;
                            for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
                            return e }
                        return c }, NAME: ba && function(a, b) {
                        if (typeof b.getElementsByName !== n) return b.getElementsByName(name) }, CLASS: _ && function(a, b, c) {
                        if (typeof b.getElementsByClassName !== n && !c) return b.getElementsByClassName(a) } }, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) {
                        return a[1] = a[1].replace(V, ""), a[3] = (a[4] || a[5] || "").replace(V, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]), a }, PSEUDO: function(a) {
                        var b, c;
                        if (W.CHILD.test(a[0])) return null;
                        if (a[3]) a[2] = a[3];
                        else if (b = a[4]) O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b;
                        return a.slice(0, 3) } }, filter: { ID: d ? function(a) {
                        return a = a.replace(V, ""),
                            function(b) {
                                return b.getAttribute("id") === a } } : function(a) {
                        return a = a.replace(V, ""),
                            function(b) {
                                var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
                                return c && c.value === a } }, TAG: function(a) {
                        return a === "*" ? function() {
                            return !0 } : (a = a.replace(V, "").toLowerCase(), function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a }) }, CLASS: function(a) {
                        var b = B[o][a];
                        return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
                            function(a) {
                                return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "") } }, ATTR: function(a, b, c) {
                        return function(d, e) {
                            var f = bc.attr(d, a);
                            return f == null ? b === "!=" : b ? (f += "", b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d) {
                        return a === "nth" ? function(a) {
                            var b, e, f = a.parentNode;
                            if (c === 1 && d === 0) return !0;
                            if (f) { e = 0;
                                for (b = f.firstChild; b; b = b.nextSibling)
                                    if (b.nodeType === 1) { e++;
                                        if (a === b) break } }
                            return e -= d, e === c || e % c === 0 && e / c >= 0 } : function(b) {
                            var c = b;
                            switch (a) {
                                case "only":
                                case "first":
                                    while (c = c.previousSibling)
                                        if (c.nodeType === 1) return !1;
                                    if (a === "first") return !0;
                                    c = b;
                                case "last":
                                    while (c = c.nextSibling)
                                        if (c.nodeType === 1) return !1;
                                    return !0 } } }, PSEUDO: function(a, b) {
                        var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
                        return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function(a, c) {
                            var e, f = d(a, b),
                                g = f.length;
                            while (g--) e = y.call(a, f[g]), a[e] = !(c[e] = f[g]) }) : function(a) {
                            return d(a, 0, c) }) : d } }, pseudos: { not: z(function(a) {
                        var b = [],
                            c = [],
                            d = i(a.replace(L, "$1"));
                        return d[o] ? z(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)
                                if (f = g[h]) a[h] = !(b[h] = f) }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop() } }), has: z(function(a) {
                        return function(b) {
                            return bc(a, b).length > 0 } }), contains: z(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || f(b)).indexOf(a) > -1 } }), enabled: function(a) {
                        return a.disabled === !1 }, disabled: function(a) {
                        return a.disabled === !0 }, checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && !!a.checked || b === "option" && !!a.selected }, selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, parent: function(a) {
                        return !e.pseudos.empty(a) }, empty: function(a) {
                        var b;
                        a = a.firstChild;
                        while (a) {
                            if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
                            a = a.nextSibling }
                        return !0 }, header: function(a) {
                        return T.test(a.nodeName) }, text: function(a) {
                        var b, c;
                        return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b) }, radio: bd("radio"), checkbox: bd("checkbox"), file: bd("file"), password: bd("password"), image: bd("image"), submit: be("submit"), reset: be("reset"), button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && a.type === "button" || b === "button" }, input: function(a) {
                        return U.test(a.nodeName) }, focus: function(a) {
                        var b = a.ownerDocument;
                        return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href) }, active: function(a) {
                        return a === a.ownerDocument.activeElement }, first: bf(function(a, b, c) {
                        return [0] }), last: bf(function(a, b, c) {
                        return [b - 1] }), eq: bf(function(a, b, c) {
                        return [c < 0 ? c + b : c] }), even: bf(function(a, b, c) {
                        for (var d = 0; d < b; d += 2) a.push(d);
                        return a }), odd: bf(function(a, b, c) {
                        for (var d = 1; d < b; d += 2) a.push(d);
                        return a }), lt: bf(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                        return a }), gt: bf(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a }) } }, j = s.compareDocumentPosition ? function(a, b) {
                return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1 } : function(a, b) {
                if (a === b) return k = !0, 0;
                if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                var c, d, e = [],
                    f = [],
                    g = a.parentNode,
                    h = b.parentNode,
                    i = g;
                if (g === h) return bg(a, b);
                if (!g) return -1;
                if (!h) return 1;
                while (i) e.unshift(i), i = i.parentNode;
                i = h;
                while (i) f.unshift(i), i = i.parentNode;
                c = e.length, d = f.length;
                for (var j = 0; j < c && j < d; j++)
                    if (e[j] !== f[j]) return bg(e[j], f[j]);
                return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1) }, [0, 0].sort(j), m = !k, bc.uniqueSort = function(a) {
                var b, c = 1;
                k = m, a.sort(j);
                if (k)
                    for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
                return a }, bc.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a) }, i = bc.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = D[o][a];
                if (!f) { b || (b = bh(a)), c = b.length;
                    while (c--) f = bm(b[c]), f[o] ? d.push(f) : e.push(f);
                    f = D(a, bn(e, d)) }
                return f }, r.querySelectorAll && function() {
                var a, b = bp,
                    c = /'|\\/g,
                    d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    e = [":focus"],
                    f = [":active", ":focus"],
                    h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
                X(function(a) { a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked") }), X(function(a) { a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled") }), e = new RegExp(e.join("|")), bp = function(a, d, f, g, h) {
                    if (!g && !h && (!e || !e.test(a))) {
                        var i, j, k = !0,
                            l = o,
                            m = d,
                            n = d.nodeType === 9 && a;
                        if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") { i = bh(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length;
                            while (j--) i[j] = l + i[j].join("");
                            m = R.test(a) && d.parentNode || d, n = i.join(",") }
                        if (n) try {
                            return w.apply(f, x.call(m.querySelectorAll(n), 0)), f } catch (p) {} finally { k || d.removeAttribute("id") } }
                    return b(a, d, f, g, h) }, h && (X(function(b) { a = h.call(b, "div");
                    try { h.call(b, "[test!='']:sizzle"), f.push("!=", J) } catch (c) {} }), f = new RegExp(f.join("|")), bc.matchesSelector = function(b, c) { c = c.replace(d, "='$1']");
                    if (!g(b) && !f.test(c) && (!e || !e.test(c))) try {
                        var i = h.call(b, c);
                        if (i || a || b.document && b.document.nodeType !== 11) return i } catch (j) {}
                    return bc(c, null, null, [b]).length > 0 }) }(), e.pseudos.nth = e.pseudos.eq, e.filters = bq.prototype = e.pseudos, e.setFilters = new bq, bc.attr = p.attr, p.find = bc, p.expr = bc.selectors, p.expr[":"] = p.expr.pseudos, p.unique = bc.uniqueSort, p.text = bc.getText, p.isXMLDoc = bc.isXML, p.contains = bc.contains }(a);
    var bc = /Until$/,
        bd = /^(?:parents|prev(?:Until|All))/,
        be = /^.[^:#\[\.,]*$/,
        bf = p.expr.match.needsContext,
        bg = { children: !0, contents: !0, next: !0, prev: !0 };
    p.fn.extend({ find: function(a) {
            var b, c, d, e, f, g, h = this;
            if (typeof a != "string") return p(a).filter(function() {
                for (b = 0, c = h.length; b < c; b++)
                    if (p.contains(h[b], this)) return !0 });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) { d = g.length, p.find(a, this[b], g);
                if (b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; f < d; f++)
                            if (g[f] === g[e]) { g.splice(e--, 1);
                                break } }
            return g }, has: function(a) {
            var b, c = p(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (p.contains(this, c[b])) return !0 }) }, not: function(a) {
            return this.pushStack(bj(this, a, !1), "not", a) }, filter: function(a) {
            return this.pushStack(bj(this, a, !0), "filter", a) }, is: function(a) {
            return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0) }, closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
            for (; d < e; d++) { c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) { f.push(c);
                        break }
                    c = c.parentNode } }
            return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a) }, index: function(a) {
            return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 }, add: function(a, b) {
            var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
                d = p.merge(this.get(), c);
            return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d)) }, addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a)) } }), p.fn.andSelf = p.fn.addBack, p.each({ parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null }, parents: function(a) {
            return p.dir(a, "parentNode") }, parentsUntil: function(a, b, c) {
            return p.dir(a, "parentNode", c) }, next: function(a) {
            return bi(a, "nextSibling") }, prev: function(a) {
            return bi(a, "previousSibling") }, nextAll: function(a) {
            return p.dir(a, "nextSibling") }, prevAll: function(a) {
            return p.dir(a, "previousSibling") }, nextUntil: function(a, b, c) {
            return p.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) {
            return p.dir(a, "previousSibling", c) }, siblings: function(a) {
            return p.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) {
            return p.sibling(a.firstChild) }, contents: function(a) {
            return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes) } }, function(a, b) { p.fn[a] = function(c, d) {
            var e = p.map(this, b, c);
            return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(",")) } }), p.extend({ filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b) }, dir: function(a, c, d) {
            var e = [],
                f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
            return e }, sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c } });
    var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        bm = / jQuery\d+="(?:null|\d+)"/g,
        bn = /^\s+/,
        bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bp = /<([\w:]+)/,
        bq = /<tbody/i,
        br = /<|&#?\w+;/,
        bs = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
        bv = /^(?:checkbox|radio)$/,
        bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bx = /\/(java|ecma)script/i,
        by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        bz = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
        bA = bk(e),
        bB = bA.appendChild(e.createElement("div"));
    bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({ text: function(a) {
                return p.access(this, function(a) {
                    return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a)) }, null, a, arguments.length) }, wrapAll: function(a) {
                if (p.isFunction(a)) return this.each(function(b) { p(this).wrapAll(a.call(this, b)) });
                if (this[0]) {
                    var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                        return a }).append(this) }
                return this }, wrapInner: function(a) {
                return p.isFunction(a) ? this.each(function(b) { p(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                    var b = p(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) {
                var b = p.isFunction(a);
                return this.each(function(c) { p(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() {
                return this.parent().each(function() { p.nodeName(this, "body") || p(this).replaceWith(this.childNodes) }).end() }, append: function() {
                return this.domManip(arguments, !0, function(a) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a) }) }, prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild) }) }, before: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this) });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(a, this), "before", this.selector) } }, after: function() {
                if (!bh(this[0])) return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this.nextSibling) });
                if (arguments.length) {
                    var a = p.clean(arguments);
                    return this.pushStack(p.merge(this, a), "after", this.selector) } }, remove: function(a, b) {
                var c, d = 0;
                for (;
                    (c = this[d]) != null; d++)
                    if (!a || p.filter(a, [c]).length) !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
                return this }, empty: function() {
                var a, b = 0;
                for (;
                    (a = this[b]) != null; b++) { a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
                    while (a.firstChild) a.removeChild(a.firstChild) }
                return this }, clone: function(a, b) {
                return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
                    return p.clone(this, a, b) }) }, html: function(a) {
                return p.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
                    if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(bo, "<$1></$2>");
                        try {
                            for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                            c = 0 } catch (f) {} }
                    c && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function(a) {
                return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
                    var c = p(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d)) }) : (typeof a != "string" && (a = p(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    p(this).remove(), b ? p(b).before(a) : p(c).append(a) })) }, detach: function(a) {
                return this.remove(a, !0) }, domManip: function(a, c, d) { a = [].concat.apply([], a);
                var e, f, g, h, i = 0,
                    j = a[0],
                    k = [],
                    l = this.length;
                if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) return this.each(function() { p(this).domManip(a, c, d) });
                if (p.isFunction(j)) return this.each(function(e) {
                    var f = p(this);
                    a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d) });
                if (this[0]) { e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
                    if (f) { c = c && p.nodeName(f, "tr");
                        for (h = e.cacheable || l - 1; i < l; i++) d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0)) }
                    g = f = null, k.length && p.each(k, function(a, b) { b.src ? p.ajax ? p.ajax({ url: b.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b) }) }
                return this } }), p.buildFragment = function(a, c, d) {
            var f, g, h, i = a[0];
            return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), { fragment: f, cacheable: g } }, p.fragments = {}, p.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { p.fn[a] = function(c) {
                var d, e = 0,
                    f = [],
                    g = p(c),
                    h = g.length,
                    i = this.length === 1 && this[0].parentNode;
                if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;
                for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d);
                return this.pushStack(f, a, g.selector) } }), p.extend({ clone: function(a, b, c) {
                var d, e, f, g;
                p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
                if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) { bE(a, g), d = bF(a), e = bF(g);
                    for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f]) }
                if (b) { bD(a, g);
                    if (c) { d = bF(a), e = bF(g);
                        for (f = 0; d[f]; ++f) bD(d[f], e[f]) } }
                return d = e = null, g }, clean: function(a, b, c, d) {
                var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA,
                    t = [];
                if (!b || typeof b.createDocumentFragment == "undefined") b = e;
                for (f = 0;
                    (h = a[f]) != null; f++) { typeof h == "number" && (h += "");
                    if (!h) continue;
                    if (typeof h == "string")
                        if (!br.test(h)) h = b.createTextNode(h);
                        else { s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
                            while (k--) l = l.lastChild;
                            if (!p.support.tbody) { m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
                                for (g = n.length - 1; g >= 0; --g) p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g]) }!p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l) }
                    h.nodeType ? t.push(h) : p.merge(t, h) }
                l && (h = l = s = null);
                if (!p.support.appendChecked)
                    for (f = 0;
                        (h = t[f]) != null; f++) p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
                if (c) { q = function(a) {
                        if (!a.type || bx.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) };
                    for (f = 0;
                        (h = t[f]) != null; f++)
                        if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length) }
                return t }, cleanData: function(a, b) {
                var c, d, e, f, g = 0,
                    h = p.expando,
                    i = p.cache,
                    j = p.support.deleteExpando,
                    k = p.event.special;
                for (;
                    (e = a[g]) != null; g++)
                    if (b || p.acceptData(e)) { d = e[h], c = d && i[d];
                        if (c) {
                            if (c.events)
                                for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
                            i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d)) } } } }),
        function() {
            var a, b;
            p.uaMatch = function(a) { a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return { browser: b[1] || "", version: b[2] || "0" } }, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function() {
                function a(b, c) {
                    return new a.fn.init(b, c) }
                p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
                    return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b) }, a.fn.init.prototype = a.fn;
                var b = a(e);
                return a } }();
    var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
        bL = /opacity=([^)]*)/,
        bM = /^(top|right|bottom|left)$/,
        bN = /^(none|table(?!-c[ea]).+)/,
        bO = /^margin/,
        bP = new RegExp("^(" + q + ")(.*)$", "i"),
        bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
        bR = new RegExp("^([-+])=(" + q + ")", "i"),
        bS = {},
        bT = { position: "absolute", visibility: "hidden", display: "block" },
        bU = { letterSpacing: 0, fontWeight: 400 },
        bV = ["Top", "Right", "Bottom", "Left"],
        bW = ["Webkit", "O", "Moz", "ms"],
        bX = p.fn.toggle;
    p.fn.extend({ css: function(a, c) {
            return p.access(this, function(a, c, d) {
                return d !== b ? p.style(a, c, d) : p.css(a, c) }, a, c, arguments.length > 1) }, show: function() {
            return b$(this, !0) }, hide: function() {
            return b$(this) }, toggle: function(a, b) {
            var c = typeof a == "boolean";
            return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function() {
                (c ? a : bZ(this)) ? p(this).show(): p(this).hide() }) } }), p.extend({ cssHooks: { opacity: { get: function(a, b) {
                    if (b) {
                        var c = bH(a, "opacity");
                        return c === "" ? "1" : c } } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": p.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
            var f, g, h, i = p.camelCase(c),
                j = a.style;
            c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
            if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
            g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
            if (d == null || g === "number" && isNaN(d)) return;
            g === "number" && !p.cssNumber[i] && (d += "px");
            if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try { j[c] = d } catch (k) {} }, css: function(a, c, d, e) {
            var f, g, h, i = p.camelCase(c);
            return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f }, swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b) a.style[e] = f[e];
            return d } }), a.getComputedStyle ? bH = function(b, c) {
        var d, e, f, g, h = a.getComputedStyle(b, null),
            i = b.style;
        return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d } : e.documentElement.currentStyle && (bH = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b],
            f = a.style;
        return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e }), p.each(["height", "width"], function(a, b) { p.cssHooks[b] = { get: function(a, c, d) {
                if (c) return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function() {
                    return cb(a, b, d) }) : cb(a, b, d) }, set: function(a, c, d) {
                return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0) } } }), p.support.opacity || (p.cssHooks.opacity = { get: function(a, b) {
            return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) { c.removeAttribute("filter");
                if (d && !d.filter) return }
            c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e } }), p(function() { p.support.reliableMarginRight || (p.cssHooks.marginRight = { get: function(a, b) {
                return p.swap(a, { display: "inline-block" }, function() {
                    if (b) return bH(a, "marginRight") }) } }), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) { p.cssHooks[b] = { get: function(a, c) {
                    if (c) {
                        var d = bH(a, b);
                        return bQ.test(d) ? p(a).position()[b] + "px" : d } } } }) }), p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none" }, p.expr.filters.visible = function(a) {
        return !p.expr.filters.hidden(a) }), p.each({ margin: "", padding: "", border: "Width" }, function(a, b) { p.cssHooks[a + b] = { expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
                return f } }, bO.test(a) || (p.cssHooks[a + b].set = b_) });
    var cd = /%20/g,
        ce = /\[\]$/,
        cf = /\r?\n/g,
        cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        ch = /^(?:select|textarea)/i;
    p.fn.extend({ serialize: function() {
            return p.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                return this.elements ? p.makeArray(this.elements) : this }).filter(function() {
                return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type)) }).map(function(a, b) {
                var c = p(this).val();
                return c == null ? null : p.isArray(c) ? p.map(c, function(a, c) {
                    return { name: b.name, value: a.replace(cf, "\r\n") } }) : { name: b.name, value: c.replace(cf, "\r\n") } }).get() } }), p.param = function(a, c) {
        var d, e = [],
            f = function(a, b) { b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a, function() { f(this.name, this.value) });
        else
            for (d in a) ci(d, a[d], c, f);
        return e.join("&").replace(cd, "+") };
    var cj, ck, cl = /#.*$/,
        cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        co = /^(?:GET|HEAD)$/,
        cp = /^\/\//,
        cq = /\?/,
        cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        cs = /([?&])_=[^&]*/,
        ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        cu = p.fn.load,
        cv = {},
        cw = {},
        cx = ["*/"] + ["*"];
    try { ck = f.href } catch (cy) { ck = e.createElement("a"), ck.href = "", ck = ck.href }
    cj = ct.exec(ck.toLowerCase()) || [], p.fn.load = function(a, c, d) {
        if (typeof a != "string" && cu) return cu.apply(this, arguments);
        if (!this.length) return this;
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({ url: a, type: f, dataType: "html", data: c, complete: function(a, b) { d && h.each(d, g || [a.responseText, b, a]) } }).done(function(a) { g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a) }), this }, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) { p.fn[b] = function(a) {
            return this.on(b, a) } }), p.each(["get", "post"], function(a, c) { p[c] = function(a, d, e, f) {
            return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({ type: c, url: a, data: d, success: e, dataType: f }) } }), p.extend({ getScript: function(a, c) {
            return p.get(a, b, c, "script") }, getJSON: function(a, b, c) {
            return p.get(a, b, c, "json") }, ajaxSetup: function(a, b) {
            return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a }, ajaxSettings: { url: ck, isLocal: cn.test(cj[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": cx }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: cz(cv), ajaxTransport: cz(cw), ajax: function(a, c) {
            function y(a, c, f, i) {
                var k, s, t, u, w, y = c;
                if (v === 2) return;
                v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
                if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t);
                else { t = y;
                    if (!y || a) y = "error", a < 0 && (a = 0) }
                x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop")) }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
                m = l.context || l,
                n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
                o = p.Deferred(),
                q = p.Callbacks("once memory"),
                r = l.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = { readyState: 0, setRequestHeader: function(a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = u[c] = u[c] || a, t[a] = b }
                        return this }, getAllResponseHeaders: function() {
                        return v === 2 ? e : null }, getResponseHeader: function(a) {
                        var c;
                        if (v === 2) {
                            if (!f) { f = {};
                                while (c = cm.exec(e)) f[c[1].toLowerCase()] = c[2] }
                            c = f[a.toLowerCase()] }
                        return c === b ? null : c }, overrideMimeType: function(a) {
                        return v || (l.mimeType = a), this }, abort: function(a) {
                        return a = a || w, g && g.abort(a), y(0, a), this } };
            o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function(a) {
                if (a) {
                    var b;
                    if (v < 2)
                        for (b in a) r[b] = [r[b], a[b]];
                    else b = a[x.status], x.always(b) }
                return this }, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
            if (v === 2) return x;
            j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
            if (!l.hasContent) { l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
                if (l.cache === !1) {
                    var z = p.now(),
                        A = l.url.replace(cs, "$1_=" + z);
                    l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "") } }(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
            if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) { w = "abort";
                for (k in { success: 1, error: 1, complete: 1 }) x[k](l[k]);
                g = cA(cw, l, c, x);
                if (!g) y(-1, "No Transport");
                else { x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function() { x.abort("timeout") }, l.timeout));
                    try { v = 1, g.send(t, y) } catch (B) {
                        if (v < 2) y(-1, B);
                        else throw B } }
                return x }
            return x.abort() }, active: 0, lastModified: {}, etag: {} });
    var cE = [],
        cF = /\?/,
        cG = /(=)\?(?=&|$)|\?\?/,
        cH = p.now();
    p.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var a = cE.pop() || p.expando + "_" + cH++;
            return this[a] = !0, a } }), p.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.data,
            j = c.url,
            k = c.jsonp !== !1,
            l = k && cG.test(j),
            m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
        if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || p.error(f + " was not called"), h[0] }, c.dataTypes[0] = "json", a[f] = function() { h = arguments }, e.always(function() { a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b }), "script" }), p.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(a) {
                return p.globalEval(a), a } } }), p.ajaxPrefilter("script", function(a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), p.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return { send: function(f, g) { c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success") }, d.insertBefore(c, d.firstChild) }, abort: function() { c && c.onload(0, 1) } } } });
    var cI, cJ = a.ActiveXObject ? function() {
            for (var a in cI) cI[a](0, 1) } : !1,
        cK = 0;
    p.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && cL() || cM() } : cL,
        function(a) { p.extend(p.support, { ajax: !!a, cors: !!a && "withCredentials" in a }) }(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function(c) {
            if (!c.crossDomain || p.support.cors) {
                var d;
                return { send: function(e, f) {
                        var g, h, i = c.xhr();
                        c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h]) } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || i.readyState === 4)) { d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
                                    if (e) i.readyState !== 4 && i.abort();
                                    else { h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                        try { l.text = i.responseText } catch (a) {}
                                        try { j = i.statusText } catch (n) { j = "" }!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204) } } } catch (o) { e || f(-1, o) }
                            l && f(h, j, l, k) }, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d() }, abort: function() { d && d(0, 1) } } } });
    var cN, cO, cP = /^(?:toggle|show|hide)$/,
        cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
        cR = /queueHooks$/,
        cS = [cY],
        cT = { "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = cQ.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) { c = +f[2], d = f[3] || (p.cssNumber[a] ? "" : "px");
                    if (d !== "px" && h) { h = p.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h = h / i, p.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && i !== 1 && --j) }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c }
                return e }] };
    p.Animation = p.extend(cW, { tweener: function(a, b) { p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0,
                e = a.length;
            for (; d < e; d++) c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b) }, prefilter: function(a, b) { b ? cS.unshift(a) : cS.push(a) } }), p.Tween = cZ, cZ.prototype = { constructor: cZ, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px") }, cur: function() {
            var a = cZ.propHooks[this.prop];
            return a && a.get ? a.get(this) : cZ.propHooks._default.get(this) }, run: function(a) {
            var b, c = cZ.propHooks[this.prop];
            return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this } }, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = { _default: { get: function(a) {
                var b;
                return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop] }, set: function(a) { p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, p.each(["toggle", "show", "hide"], function(a, b) {
        var c = p.fn[b];
        p.fn[b] = function(d, e, f) {
            return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f) } }), p.fn.extend({ fadeTo: function(a, b, c, d) {
            return this.filter(bZ).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) {
            var e = p.isEmptyObject(a),
                f = p.speed(b, c, d),
                g = function() {
                    var b = cW(this, p.extend({}, a), f);
                    e && b.stop(!0) };
            return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d) };
            return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = a != null && a + "queueHooks",
                    f = p.timers,
                    g = p._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && p.dequeue(this, a) }) } }), p.each({ slideDown: c$("show"), slideUp: c$("hide"), slideToggle: c$("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { p.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d) } }), p.speed = function(a, b, c) {
        var d = a && typeof a == "object" ? p.extend({}, a) : { complete: c || !c && b || p.isFunction(a) && a, duration: a, easing: c && b || b && !p.isFunction(b) && b };
        d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = "fx";
        return d.old = d.complete, d.complete = function() { p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue) }, d }, p.easing = { linear: function(a) {
            return a }, swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2 } }, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function() {
        var a, b = p.timers,
            c = 0;
        for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || p.fx.stop() }, p.fx.timer = function(a) { a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval)) }, p.fx.interval = 13, p.fx.stop = function() { clearInterval(cO), cO = null }, p.fx.speeds = { slow: 600, fast: 200, _default: 400 }, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
        return p.grep(p.timers, function(b) {
            return a === b.elem }).length });
    var c_ = /^(?:body|html)$/i;
    p.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) { p.offset.setOffset(this, a, b) });
        var c, d, e, f, g, h, i, j = { top: 0, left: 0 },
            k = this[0],
            l = k && k.ownerDocument;
        if (!l) return;
        return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, { top: j.top + h - f, left: j.left + i - g }) : j) }, p.offset = { bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), { top: b, left: c } }, setOffset: function(a, b, c) {
            var d = p.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = p(a),
                f = e.offset(),
                g = p.css(a, "top"),
                h = p.css(a, "left"),
                i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
                j = {},
                k = {},
                l, m;
            i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j) } }, p.fn.extend({ position: function() {
            if (!this[0]) return;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = c_.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
            return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, { top: c.top - d.top, left: c.left - d.left } }, offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || e.body;
                while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") a = a.offsetParent;
                return a || e.body }) } }), p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function(e) {
            return p.access(this, function(a, e, f) {
                var g = da(a);
                if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f }, a, e, arguments.length, null) } }), p.each({ Height: "height", Width: "width" }, function(a, c) { p.each({ padding: "inner" + a, content: c, "": "outer" + a }, function(d, e) { p.fn[e] = function(e, f) {
                var g = arguments.length && (d || typeof e != "boolean"),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return p.access(this, function(c, d, e) {
                    var f;
                    return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h) }, c, g ? e : b, g, null) } }) }), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return p }) })(window);

// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” \\
// â”‚ RaphaÃ«l 2.1.0 - JavaScript Vector Library                          â”‚ \\
// â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ \\
// â”‚ Copyright Â© 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    â”‚ \\
// â”‚ Copyright Â© 2008-2012 Sencha Labs (http://sencha.com)              â”‚ \\
// â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ \\
// â”‚ Licensed under the MIT (http://raphaeljs.com/license.html) license.â”‚ \\
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ \\

(function(a) {
    var b = "0.3.4",
        c = "hasOwnProperty",
        d = /[\.\/]/,
        e = "*",
        f = function() {},
        g = function(a, b) {
            return a - b },
        h, i, j = { n: {} },
        k = function(a, b) {
            var c = j,
                d = i,
                e = Array.prototype.slice.call(arguments, 2),
                f = k.listeners(a),
                l = 0,
                m = !1,
                n, o = [],
                p = {},
                q = [],
                r = h,
                s = [];
            h = a, i = 0;
            for (var t = 0, u = f.length; t < u; t++) "zIndex" in f[t] && (o.push(f[t].zIndex), f[t].zIndex < 0 && (p[f[t].zIndex] = f[t]));
            o.sort(g);
            while (o[l] < 0) { n = p[o[l++]], q.push(n.apply(b, e));
                if (i) { i = d;
                    return q } }
            for (t = 0; t < u; t++) { n = f[t];
                if ("zIndex" in n)
                    if (n.zIndex == o[l]) { q.push(n.apply(b, e));
                        if (i) break;
                        do { l++, n = p[o[l]], n && q.push(n.apply(b, e));
                            if (i) break } while (n) } else p[n.zIndex] = n;
                else { q.push(n.apply(b, e));
                    if (i) break } }
            i = d, h = r;
            return q.length ? q : null };
    k.listeners = function(a) {
        var b = a.split(d),
            c = j,
            f, g, h, i, k, l, m, n, o = [c],
            p = [];
        for (i = 0, k = b.length; i < k; i++) { n = [];
            for (l = 0, m = o.length; l < m; l++) { c = o[l].n, g = [c[b[i]], c[e]], h = 2;
                while (h--) f = g[h], f && (n.push(f), p = p.concat(f.f || [])) }
            o = n }
        return p }, k.on = function(a, b) {
        var c = a.split(d),
            e = j;
        for (var g = 0, h = c.length; g < h; g++) e = e.n, !e[c[g]] && (e[c[g]] = { n: {} }), e = e[c[g]];
        e.f = e.f || [];
        for (g = 0, h = e.f.length; g < h; g++)
            if (e.f[g] == b) return f;
        e.f.push(b);
        return function(a) {+a == +a && (b.zIndex = +a) } }, k.stop = function() { i = 1 }, k.nt = function(a) {
        if (a) return (new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)")).test(h);
        return h }, k.off = k.unbind = function(a, b) {
        var f = a.split(d),
            g, h, i, k, l, m, n, o = [j];
        for (k = 0, l = f.length; k < l; k++)
            for (m = 0; m < o.length; m += i.length - 2) { i = [m, 1], g = o[m].n;
                if (f[k] != e) g[f[k]] && i.push(g[f[k]]);
                else
                    for (h in g) g[c](h) && i.push(g[h]);
                o.splice.apply(o, i) }
        for (k = 0, l = o.length; k < l; k++) { g = o[k];
            while (g.n) {
                if (b) {
                    if (g.f) {
                        for (m = 0, n = g.f.length; m < n; m++)
                            if (g.f[m] == b) { g.f.splice(m, 1);
                                break }!g.f.length && delete g.f }
                    for (h in g.n)
                        if (g.n[c](h) && g.n[h].f) {
                            var p = g.n[h].f;
                            for (m = 0, n = p.length; m < n; m++)
                                if (p[m] == b) { p.splice(m, 1);
                                    break }!p.length && delete g.n[h].f } } else { delete g.f;
                    for (h in g.n) g.n[c](h) && g.n[h].f && delete g.n[h].f }
                g = g.n } } }, k.once = function(a, b) {
        var c = function() {
            var d = b.apply(this, arguments);
            k.unbind(a, c);
            return d };
        return k.on(a, c) }, k.version = b, k.toString = function() {
        return "You are running Eve " + b }, typeof module != "undefined" && module.exports ? module.exports = k : typeof define != "undefined" ? define("eve", [], function() {
        return k }) : a.eve = k })(this),
function() {
    function cF(a) {
        for (var b = 0; b < cy.length; b++) cy[b].el.paper == a && cy.splice(b--, 1) }

    function cE(b, d, e, f, h, i) { e = Q(e);
        var j, k, l, m = [],
            o, p, q, t = b.ms,
            u = {},
            v = {},
            w = {};
        if (f)
            for (y = 0, z = cy.length; y < z; y++) {
                var x = cy[y];
                if (x.el.id == d.id && x.anim == b) { x.percent != e ? (cy.splice(y, 1), l = 1) : k = x, d.attr(x.totalOrigin);
                    break } } else f = +v;
        for (var y = 0, z = b.percents.length; y < z; y++) {
            if (b.percents[y] == e || b.percents[y] > f * b.top) { e = b.percents[y], p = b.percents[y - 1] || 0, t = t / b.top * (e - p), o = b.percents[y + 1], j = b.anim[e];
                break }
            f && d.attr(b.anim[b.percents[y]]) }
        if (!!j) {
            if (!k) {
                for (var A in j)
                    if (j[g](A))
                        if (U[g](A) || d.paper.customAttributes[g](A)) { u[A] = d.attr(A), u[A] == null && (u[A] = T[A]), v[A] = j[A];
                            switch (U[A]) {
                                case C:
                                    w[A] = (v[A] - u[A]) / t;
                                    break;
                                case "colour":
                                    u[A] = a.getRGB(u[A]);
                                    var B = a.getRGB(v[A]);
                                    w[A] = { r: (B.r - u[A].r) / t, g: (B.g - u[A].g) / t, b: (B.b - u[A].b) / t };
                                    break;
                                case "path":
                                    var D = bR(u[A], v[A]),
                                        E = D[1];
                                    u[A] = D[0], w[A] = [];
                                    for (y = 0, z = u[A].length; y < z; y++) { w[A][y] = [0];
                                        for (var F = 1, G = u[A][y].length; F < G; F++) w[A][y][F] = (E[y][F] - u[A][y][F]) / t }
                                    break;
                                case "transform":
                                    var H = d._,
                                        I = ca(H[A], v[A]);
                                    if (I) { u[A] = I.from, v[A] = I.to, w[A] = [], w[A].real = !0;
                                        for (y = 0, z = u[A].length; y < z; y++) { w[A][y] = [u[A][y][0]];
                                            for (F = 1, G = u[A][y].length; F < G; F++) w[A][y][F] = (v[A][y][F] - u[A][y][F]) / t } } else {
                                        var J = d.matrix || new cb,
                                            K = { _: { transform: H.transform }, getBBox: function() {
                                                    return d.getBBox(1) } };
                                        u[A] = [J.a, J.b, J.c, J.d, J.e, J.f], b$(K, v[A]), v[A] = K._.transform, w[A] = [(K.matrix.a - J.a) / t, (K.matrix.b - J.b) / t, (K.matrix.c - J.c) / t, (K.matrix.d - J.d) / t, (K.matrix.e - J.e) / t, (K.matrix.f - J.f) / t] }
                                    break;
                                case "csv":
                                    var L = r(j[A])[s](c),
                                        M = r(u[A])[s](c);
                                    if (A == "clip-rect") { u[A] = M, w[A] = [], y = M.length;
                                        while (y--) w[A][y] = (L[y] - u[A][y]) / t }
                                    v[A] = L;
                                    break;
                                default:
                                    L = [][n](j[A]), M = [][n](u[A]), w[A] = [], y = d.paper.customAttributes[A].length;
                                    while (y--) w[A][y] = ((L[y] || 0) - (M[y] || 0)) / t } }
                var O = j.easing,
                    P = a.easing_formulas[O];
                if (!P) { P = r(O).match(N);
                    if (P && P.length == 5) {
                        var R = P;
                        P = function(a) {
                            return cC(a, +R[1], +R[2], +R[3], +R[4], t) } } else P = bf }
                q = j.start || b.start || +(new Date), x = { anim: b, percent: e, timestamp: q, start: q + (b.del || 0), status: 0, initstatus: f || 0, stop: !1, ms: t, easing: P, from: u, diff: w, to: v, el: d, callback: j.callback, prev: p, next: o, repeat: i || b.times, origin: d.attr(), totalOrigin: h }, cy.push(x);
                if (f && !k && !l) { x.stop = !0, x.start = new Date - t * f;
                    if (cy.length == 1) return cA() }
                l && (x.start = new Date - x.ms * f), cy.length == 1 && cz(cA) } else k.initstatus = f, k.start = new Date - k.ms * f;
            eve("raphael.anim.start." + d.id, d, b) } }

    function cD(a, b) {
        var c = [],
            d = {};
        this.ms = b, this.times = 1;
        if (a) {
            for (var e in a) a[g](e) && (d[Q(e)] = a[e], c.push(Q(e)));
            c.sort(bd) }
        this.anim = d, this.top = c[c.length - 1], this.percents = c }

    function cC(a, b, c, d, e, f) {
        function o(a, b) {
            var c, d, e, f, j, k;
            for (e = a, k = 0; k < 8; k++) { f = m(e) - a;
                if (z(f) < b) return e;
                j = (3 * i * e + 2 * h) * e + g;
                if (z(j) < 1e-6) break;
                e = e - f / j }
            c = 0, d = 1, e = a;
            if (e < c) return c;
            if (e > d) return d;
            while (c < d) { f = m(e);
                if (z(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c }
            return e }

        function n(a, b) {
            var c = o(a, b);
            return ((l * c + k) * c + j) * c }

        function m(a) {
            return ((i * a + h) * a + g) * a }
        var g = 3 * b,
            h = 3 * (d - b) - g,
            i = 1 - g - h,
            j = 3 * c,
            k = 3 * (e - c) - j,
            l = 1 - j - k;
        return n(a, 1 / (200 * f)) }

    function cq() {
        return this.x + q + this.y + q + this.width + " Ã— " + this.height }

    function cp() {
        return this.x + q + this.y }

    function cb(a, b, c, d, e, f) { a != null ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) }

    function bH(b, c, d) { b = a._path2curve(b), c = a._path2curve(c);
        var e, f, g, h, i, j, k, l, m, n, o = d ? 0 : [];
        for (var p = 0, q = b.length; p < q; p++) {
            var r = b[p];
            if (r[0] == "M") e = i = r[1], f = j = r[2];
            else { r[0] == "C" ? (m = [e, f].concat(r.slice(1)), e = m[6], f = m[7]) : (m = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var s = 0, t = c.length; s < t; s++) {
                    var u = c[s];
                    if (u[0] == "M") g = k = u[1], h = l = u[2];
                    else { u[0] == "C" ? (n = [g, h].concat(u.slice(1)), g = n[6], h = n[7]) : (n = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var v = bG(m, n, d);
                        if (d) o += v;
                        else {
                            for (var w = 0, x = v.length; w < x; w++) v[w].segment1 = p, v[w].segment2 = s, v[w].bez1 = m, v[w].bez2 = n;
                            o = o.concat(v) } } } } }
        return o }

    function bG(b, c, d) {
        var e = a.bezierBBox(b),
            f = a.bezierBBox(c);
        if (!a.isBBoxIntersect(e, f)) return d ? 0 : [];
        var g = bB.apply(0, b),
            h = bB.apply(0, c),
            i = ~~(g / 5),
            j = ~~(h / 5),
            k = [],
            l = [],
            m = {},
            n = d ? 0 : [];
        for (var o = 0; o < i + 1; o++) {
            var p = a.findDotsAtSegment.apply(a, b.concat(o / i));
            k.push({ x: p.x, y: p.y, t: o / i }) }
        for (o = 0; o < j + 1; o++) p = a.findDotsAtSegment.apply(a, c.concat(o / j)), l.push({ x: p.x, y: p.y, t: o / j });
        for (o = 0; o < i; o++)
            for (var q = 0; q < j; q++) {
                var r = k[o],
                    s = k[o + 1],
                    t = l[q],
                    u = l[q + 1],
                    v = z(s.x - r.x) < .001 ? "y" : "x",
                    w = z(u.x - t.x) < .001 ? "y" : "x",
                    x = bD(r.x, r.y, s.x, s.y, t.x, t.y, u.x, u.y);
                if (x) {
                    if (m[x.x.toFixed(4)] == x.y.toFixed(4)) continue;
                    m[x.x.toFixed(4)] = x.y.toFixed(4);
                    var y = r.t + z((x[v] - r[v]) / (s[v] - r[v])) * (s.t - r.t),
                        A = t.t + z((x[w] - t[w]) / (u[w] - t[w])) * (u.t - t.t);
                    y >= 0 && y <= 1 && A >= 0 && A <= 1 && (d ? n++ : n.push({ x: x.x, y: x.y, t1: y, t2: A })) } }
        return n }

    function bF(a, b) {
        return bG(a, b, 1) }

    function bE(a, b) {
        return bG(a, b) }

    function bD(a, b, c, d, e, f, g, h) {
        if (!(x(a, c) < y(e, g) || y(a, c) > x(e, g) || x(b, d) < y(f, h) || y(b, d) > x(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g);
            if (!k) return;
            var l = i / k,
                m = j / k,
                n = +l.toFixed(2),
                o = +m.toFixed(2);
            if (n < +y(a, c).toFixed(2) || n > +x(a, c).toFixed(2) || n < +y(e, g).toFixed(2) || n > +x(e, g).toFixed(2) || o < +y(b, d).toFixed(2) || o > +x(b, d).toFixed(2) || o < +y(f, h).toFixed(2) || o > +x(f, h).toFixed(2)) return;
            return { x: l, y: m } } }

    function bC(a, b, c, d, e, f, g, h, i) {
        if (!(i < 0 || bB(a, b, c, d, e, f, g, h) < i)) {
            var j = 1,
                k = j / 2,
                l = j - k,
                m, n = .01;
            m = bB(a, b, c, d, e, f, g, h, l);
            while (z(m - i) > n) k /= 2, l += (m < i ? 1 : -1) * k, m = bB(a, b, c, d, e, f, g, h, l);
            return l } }

    function bB(a, b, c, d, e, f, g, h, i) { i == null && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i;
        var j = i / 2,
            k = 12,
            l = [-0.1252, .1252, -0.3678, .3678, -0.5873, .5873, -0.7699, .7699, -0.9041, .9041, -0.9816, .9816],
            m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
            n = 0;
        for (var o = 0; o < k; o++) {
            var p = j * l[o] + j,
                q = bA(p, a, c, e, g),
                r = bA(p, b, d, f, h),
                s = q * q + r * r;
            n += m[o] * w.sqrt(s) }
        return j * n }

    function bA(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c }

    function by(a, b) {
        var c = [];
        for (var d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{ x: +a[d - 2], y: +a[d - 1] }, { x: +a[d], y: +a[d + 1] }, { x: +a[d + 2], y: +a[d + 3] }, { x: +a[d + 4], y: +a[d + 5] }];
            b ? d ? e - 4 == d ? f[3] = { x: +a[0], y: +a[1] } : e - 2 == d && (f[2] = { x: +a[0], y: +a[1] }, f[3] = { x: +a[2], y: +a[3] }) : f[0] = { x: +a[e - 2], y: +a[e - 1] } : e - 4 == d ? f[3] = f[2] : d || (f[0] = { x: +a[d], y: +a[d + 1] }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]) }
        return c }

    function bx() {
        return this.hex }

    function bv(a, b, c) {
        function d() {
            var e = Array.prototype.slice.call(arguments, 0),
                f = e.join("â€"),
                h = d.cache = d.cache || {},
                i = d.count = d.count || [];
            if (h[g](f)) { bu(i, f);
                return c ? c(h[f]) : h[f] }
            i.length >= 1e3 && delete h[i.shift()], i.push(f), h[f] = a[m](b, e);
            return c ? c(h[f]) : h[f] }
        return d }

    function bu(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b) return a.push(a.splice(c, 1)[0]) }

    function bm(a) {
        if (Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[g](c) && (b[c] = bm(a[c]));
        return b }

    function a(c) {
        if (a.is(c, "function")) return b ? c() : eve.on("raphael.DOMload", c);
        if (a.is(c, E)) return a._engine.create[m](a, c.splice(0, 3 + a.is(c[0], C))).add(c);
        var d = Array.prototype.slice.call(arguments, 0);
        if (a.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return b ? e.call(a._engine.create[m](a, d)) : eve.on("raphael.DOMload", function() { e.call(a._engine.create[m](a, d)) }) }
        return a._engine.create[m](a, arguments) }
    a.version = "2.1.0", a.eve = eve;
    var b, c = /[, ]+/,
        d = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
        e = /\{(\d+)\}/g,
        f = "prototype",
        g = "hasOwnProperty",
        h = { doc: document, win: window },
        i = { was: Object.prototype[g].call(h.win, "Raphael"), is: h.win.Raphael },
        j = function() { this.ca = this.customAttributes = {} },
        k, l = "appendChild",
        m = "apply",
        n = "concat",
        o = "createTouch" in h.doc,
        p = "",
        q = " ",
        r = String,
        s = "split",
        t = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [s](q),
        u = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" },
        v = r.prototype.toLowerCase,
        w = Math,
        x = w.max,
        y = w.min,
        z = w.abs,
        A = w.pow,
        B = w.PI,
        C = "number",
        D = "string",
        E = "array",
        F = "toString",
        G = "fill",
        H = Object.prototype.toString,
        I = {},
        J = "push",
        K = a._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        L = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        M = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        N = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        O = w.round,
        P = "setAttribute",
        Q = parseFloat,
        R = parseInt,
        S = r.prototype.toUpperCase,
        T = a._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0 },
        U = a._availableAnimAttrs = { blur: C, "clip-rect": "csv", cx: C, cy: C, fill: "colour", "fill-opacity": C, "font-size": C, height: C, opacity: C, path: "path", r: C, rx: C, ry: C, stroke: "colour", "stroke-opacity": C, "stroke-width": C, transform: "transform", width: C, x: C, y: C },
        V = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
        W = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        X = { hs: 1, rg: 1 },
        Y = /,?([achlmqrstvxz]),?/gi,
        Z = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        $ = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        _ = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
        ba = a._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
        bb = {},
        bc = function(a, b) {
            return a.key - b.key },
        bd = function(a, b) {
            return Q(a) - Q(b) },
        be = function() {},
        bf = function(a) {
            return a },
        bg = a._rectPath = function(a, b, c, d, e) {
            if (e) return [
                ["M", a + e, b],
                ["l", c - e * 2, 0],
                ["a", e, e, 0, 0, 1, e, e],
                ["l", 0, d - e * 2],
                ["a", e, e, 0, 0, 1, -e, e],
                ["l", e * 2 - c, 0],
                ["a", e, e, 0, 0, 1, -e, -e],
                ["l", 0, e * 2 - d],
                ["a", e, e, 0, 0, 1, e, -e],
                ["z"]
            ];
            return [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ] },
        bh = function(a, b, c, d) { d == null && (d = c);
            return [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ] },
        bi = a._getPath = { path: function(a) {
                return a.attr("path") }, circle: function(a) {
                var b = a.attrs;
                return bh(b.cx, b.cy, b.r) }, ellipse: function(a) {
                var b = a.attrs;
                return bh(b.cx, b.cy, b.rx, b.ry) }, rect: function(a) {
                var b = a.attrs;
                return bg(b.x, b.y, b.width, b.height, b.r) }, image: function(a) {
                var b = a.attrs;
                return bg(b.x, b.y, b.width, b.height) }, text: function(a) {
                var b = a._getBBox();
                return bg(b.x, b.y, b.width, b.height) } },
        bj = a.mapPath = function(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            a = bR(a);
            for (e = 0, g = a.length; e < g; e++) { i = a[e];
                for (f = 1, h = i.length; f < h; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d }
            return a };
    a._g = h, a.type = h.win.SVGAngle || h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (a.type == "VML") {
        var bk = h.doc.createElement("div"),
            bl;
        bk.innerHTML = '<v:shape adj="1"/>', bl = bk.firstChild, bl.style.behavior = "url(#default#VML)";
        if (!bl || typeof bl.adj != "object") return a.type = p;
        bk = null }
    a.svg = !(a.vml = a.type == "VML"), a._Paper = j, a.fn = k = j.prototype = a.prototype, a._id = 0, a._oid = 0, a.is = function(a, b) { b = v.call(b);
        if (b == "finite") return !M[g](+a);
        if (b == "array") return a instanceof Array;
        return b == "null" && a === null || b == typeof a && a !== null || b == "object" && a === Object(a) || b == "array" && Array.isArray && Array.isArray(a) || H.call(a).slice(8, -1).toLowerCase() == b }, a.angle = function(b, c, d, e, f, g) {
        if (f == null) {
            var h = b - d,
                i = c - e;
            if (!h && !i) return 0;
            return (180 + w.atan2(-i, -h) * 180 / B + 360) % 360 }
        return a.angle(b, c, f, g) - a.angle(d, e, f, g) }, a.rad = function(a) {
        return a % 360 * B / 180 }, a.deg = function(a) {
        return a * 180 / B % 360 }, a.snapTo = function(b, c, d) { d = a.is(d, "finite") ? d : 10;
        if (a.is(b, E)) {
            var e = b.length;
            while (e--)
                if (z(b[e] - c) <= d) return b[e] } else { b = +b;
            var f = c % b;
            if (f < d) return c - f;
            if (f > b - d) return c - f + b }
        return c };
    var bn = a.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase() } }(/[xy]/g, function(a) {
        var b = w.random() * 16 | 0,
            c = a == "x" ? b : b & 3 | 8;
        return c.toString(16) });
    a.setWindow = function(b) { eve("raphael.setWindow", a, h.win, b), h.win = b, h.doc = h.win.document, a._engine.initWin && a._engine.initWin(h.win) };
    var bo = function(b) {
            if (a.vml) {
                var c = /^\s+|\s+$/g,
                    d;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), d = e.body } catch (f) { d = createPopup().document.body }
                var g = d.createTextRange();
                bo = bv(function(a) {
                    try { d.style.color = r(a).replace(c, p);
                        var b = g.queryCommandValue("ForeColor");
                        b = (b & 255) << 16 | b & 65280 | (b & 16711680) >>> 16;
                        return "#" + ("000000" + b.toString(16)).slice(-6) } catch (e) {
                        return "none" } }) } else {
                var i = h.doc.createElement("i");
                i.title = "RaphaÃ«l Colour Picker", i.style.display = "none", h.doc.body.appendChild(i), bo = bv(function(a) { i.style.color = a;
                    return h.doc.defaultView.getComputedStyle(i, p).getPropertyValue("color") }) }
            return bo(b) },
        bp = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")" },
        bq = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")" },
        br = function() {
            return this.hex },
        bs = function(b, c, d) { c == null && a.is(b, "object") && "r" in b && "g" in b && "b" in b && (d = b.b, c = b.g, b = b.r);
            if (c == null && a.is(b, D)) {
                var e = a.getRGB(b);
                b = e.r, c = e.g, d = e.b }
            if (b > 1 || c > 1 || d > 1) b /= 255, c /= 255, d /= 255;
            return [b, c, d] },
        bt = function(b, c, d, e) { b *= 255, c *= 255, d *= 255;
            var f = { r: b, g: c, b: d, hex: a.rgb(b, c, d), toString: br };
            a.is(e, "finite") && (f.opacity = e);
            return f };
    a.color = function(b) {
        var c;
        a.is(b, "object") && "h" in b && "s" in b && "b" in b ? (c = a.hsb2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : a.is(b, "object") && "h" in b && "s" in b && "l" in b ? (c = a.hsl2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : (a.is(b, "string") && (b = a.getRGB(b)), a.is(b, "object") && "r" in b && "g" in b && "b" in b ? (c = a.rgb2hsl(b), b.h = c.h, b.s = c.s, b.l = c.l, c = a.rgb2hsb(b), b.v = c.b) : (b = { hex: "none" }, b.r = b.g = b.b = b.h = b.s = b.v = b.l = -1)), b.toString = br;
        return b }, a.hsb2rgb = function(a, b, c, d) { this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
        var e, f, g, h, i;
        a = a % 360 / 60, i = c * b, h = i * (1 - z(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
        return bt(e, f, g, d) }, a.hsl2rgb = function(a, b, c, d) { this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h);
        if (a > 1 || b > 1 || c > 1) a /= 360, b /= 100, c /= 100;
        a *= 360;
        var e, f, g, h, i;
        a = a % 360 / 60, i = 2 * b * (c < .5 ? c : 1 - c), h = i * (1 - z(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
        return bt(e, f, g, d) }, a.rgb2hsb = function(a, b, c) { c = bs(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        f = x(a, b, c), g = f - y(a, b, c), d = g == 0 ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = g == 0 ? 0 : g / f;
        return { h: d, s: e, b: f, toString: bp } }, a.rgb2hsl = function(a, b, c) { c = bs(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        g = x(a, b, c), h = y(a, b, c), i = g - h, d = i == 0 ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = i == 0 ? 0 : f < .5 ? i / (2 * f) : i / (2 - 2 * f);
        return { h: d, s: e, l: f, toString: bq } }, a._path2string = function() {
        return this.join(",").replace(Y, "$1") };
    var bw = a._preload = function(a, b) {
        var c = h.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() { b.call(this), this.onload = null, h.doc.body.removeChild(this) }, c.onerror = function() { h.doc.body.removeChild(this) }, h.doc.body.appendChild(c), c.src = a };
    a.getRGB = bv(function(b) {
        if (!b || !!((b = r(b)).indexOf("-") + 1)) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: bx };
        if (b == "none") return { r: -1, g: -1, b: -1, hex: "none", toString: bx };!X[g](b.toLowerCase().substring(0, 2)) && b.charAt() != "#" && (b = bo(b));
        var c, d, e, f, h, i, j, k = b.match(L);
        if (k) { k[2] && (f = R(k[2].substring(5), 16), e = R(k[2].substring(3, 5), 16), d = R(k[2].substring(1, 3), 16)), k[3] && (f = R((i = k[3].charAt(3)) + i, 16), e = R((i = k[3].charAt(2)) + i, 16), d = R((i = k[3].charAt(1)) + i, 16)), k[4] && (j = k[4][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), k[1].toLowerCase().slice(0, 4) == "rgba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100));
            if (k[5]) { j = k[5][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "Â°") && (d /= 360), k[1].toLowerCase().slice(0, 4) == "hsba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100);
                return a.hsb2rgb(d, e, f, h) }
            if (k[6]) { j = k[6][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "Â°") && (d /= 360), k[1].toLowerCase().slice(0, 4) == "hsla" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100);
                return a.hsl2rgb(d, e, f, h) }
            k = { r: d, g: e, b: f, toString: bx }, k.hex = "#" + (16777216 | f | e << 8 | d << 16).toString(16).slice(1), a.is(h, "finite") && (k.opacity = h);
            return k }
        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: bx } }, a), a.hsb = bv(function(b, c, d) {
        return a.hsb2rgb(b, c, d).hex }), a.hsl = bv(function(b, c, d) {
        return a.hsl2rgb(b, c, d).hex }), a.rgb = bv(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1) }), a.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: a || .75 },
            c = this.hsb2rgb(b.h, b.s, b.b);
        b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: b.b }));
        return c.hex }, a.getColor.reset = function() { delete this.start }, a.parsePathString = function(b) {
        if (!b) return null;
        var c = bz(b);
        if (c.arr) return bJ(c.arr);
        var d = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
            e = [];
        a.is(b, E) && a.is(b[0], E) && (e = bJ(b)), e.length || r(b).replace(Z, function(a, b, c) {
            var f = [],
                g = b.toLowerCase();
            c.replace(_, function(a, b) { b && f.push(+b) }), g == "m" && f.length > 2 && (e.push([b][n](f.splice(0, 2))), g = "l", b = b == "m" ? "l" : "L");
            if (g == "r") e.push([b][n](f));
            else
                while (f.length >= d[g]) { e.push([b][n](f.splice(0, d[g])));
                    if (!d[g]) break } }), e.toString = a._path2string, c.arr = bJ(e);
        return e }, a.parseTransformString = bv(function(b) {
        if (!b) return null;
        var c = { r: 3, s: 4, t: 2, m: 6 },
            d = [];
        a.is(b, E) && a.is(b[0], E) && (d = bJ(b)), d.length || r(b).replace($, function(a, b, c) {
            var e = [],
                f = v.call(b);
            c.replace(_, function(a, b) { b && e.push(+b) }), d.push([b][n](e)) }), d.toString = a._path2string;
        return d });
    var bz = function(a) {
        var b = bz.ps = bz.ps || {};
        b[a] ? b[a].sleep = 100 : b[a] = { sleep: 100 }, setTimeout(function() {
            for (var c in b) b[g](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]) });
        return b[a] };
    a.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = A(j, 3),
            l = A(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + l * 3 * i * c + j * 3 * i * i * e + n * g,
            p = k * b + l * 3 * i * d + j * 3 * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            x = j * e + i * g,
            y = j * f + i * h,
            z = 90 - w.atan2(q - s, r - t) * 180 / B;
        (q > s || r < t) && (z += 180);
        return { x: o, y: p, m: { x: q, y: r }, n: { x: s, y: t }, start: { x: u, y: v }, end: { x: x, y: y }, alpha: z } }, a.bezierBBox = function(b, c, d, e, f, g, h, i) { a.is(b, "array") || (b = [b, c, d, e, f, g, h, i]);
        var j = bQ.apply(null, b);
        return { x: j.min.x, y: j.min.y, x2: j.max.x, y2: j.max.y, width: j.max.x - j.min.x, height: j.max.y - j.min.y } }, a.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2 }, a.isBBoxIntersect = function(b, c) {
        var d = a.isPointInsideBBox;
        return d(c, b.x, b.y) || d(c, b.x2, b.y) || d(c, b.x, b.y2) || d(c, b.x2, b.y2) || d(b, c.x, c.y) || d(b, c.x2, c.y) || d(b, c.x, c.y2) || d(b, c.x2, c.y2) || (b.x < c.x2 && b.x > c.x || c.x < b.x2 && c.x > b.x) && (b.y < c.y2 && b.y > c.y || c.y < b.y2 && c.y > b.y) }, a.pathIntersection = function(a, b) {
        return bH(a, b) }, a.pathIntersectionNumber = function(a, b) {
        return bH(a, b, 1) }, a.isPointInsidePath = function(b, c, d) {
        var e = a.pathBBox(b);
        return a.isPointInsideBBox(e, c, d) && bH(b, [
            ["M", c, d],
            ["H", e.x2 + 10]
        ], 1) % 2 == 1 }, a._removedFactory = function(a) {
        return function() { eve("raphael.log", null, "RaphaÃ«l: you are calling to method â€œ" + a + "â€ of removed object", a) } };
    var bI = a.pathBBox = function(a) {
            var b = bz(a);
            if (b.bbox) return b.bbox;
            if (!a) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
            a = bR(a);
            var c = 0,
                d = 0,
                e = [],
                f = [],
                g;
            for (var h = 0, i = a.length; h < i; h++) { g = a[h];
                if (g[0] == "M") c = g[1], d = g[2], e.push(c), f.push(d);
                else {
                    var j = bQ(c, d, g[1], g[2], g[3], g[4], g[5], g[6]);
                    e = e[n](j.min.x, j.max.x), f = f[n](j.min.y, j.max.y), c = g[5], d = g[6] } }
            var k = y[m](0, e),
                l = y[m](0, f),
                o = x[m](0, e),
                p = x[m](0, f),
                q = { x: k, y: l, x2: o, y2: p, width: o - k, height: p - l };
            b.bbox = bm(q);
            return q },
        bJ = function(b) {
            var c = bm(b);
            c.toString = a._path2string;
            return c },
        bK = a._pathToRelative = function(b) {
            var c = bz(b);
            if (c.rel) return bJ(c.rel);
            if (!a.is(b, E) || !a.is(b && b[0], E)) b = a.parsePathString(b);
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            b[0][0] == "M" && (e = b[0][1], f = b[0][2], g = e, h = f, i++, d.push(["M", e, f]));
            for (var j = i, k = b.length; j < k; j++) {
                var l = d[j] = [],
                    m = b[j];
                if (m[0] != v.call(m[0])) { l[0] = v.call(m[0]);
                    switch (l[0]) {
                        case "a":
                            l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                            break;
                        case "v":
                            l[1] = +(m[1] - f).toFixed(3);
                            break;
                        case "m":
                            g = m[1], h = m[2];
                        default:
                            for (var n = 1, o = m.length; n < o; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3) } } else { l = d[j] = [], m[0] == "m" && (g = m[1] + e, h = m[2] + f);
                    for (var p = 0, q = m.length; p < q; p++) d[j][p] = m[p] }
                var r = d[j].length;
                switch (d[j][0]) {
                    case "z":
                        e = g, f = h;
                        break;
                    case "h":
                        e += +d[j][r - 1];
                        break;
                    case "v":
                        f += +d[j][r - 1];
                        break;
                    default:
                        e += +d[j][r - 2], f += +d[j][r - 1] } }
            d.toString = a._path2string, c.rel = bJ(d);
            return d },
        bL = a._pathToAbsolute = function(b) {
            var c = bz(b);
            if (c.abs) return bJ(c.abs);
            if (!a.is(b, E) || !a.is(b && b[0], E)) b = a.parsePathString(b);
            if (!b || !b.length) return [
                ["M", 0, 0]
            ];
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            b[0][0] == "M" && (e = +b[0][1], f = +b[0][2], g = e, h = f, i++, d[0] = ["M", e, f]);
            var j = b.length == 3 && b[0][0] == "M" && b[1][0].toUpperCase() == "R" && b[2][0].toUpperCase() == "Z";
            for (var k, l, m = i, o = b.length; m < o; m++) { d.push(k = []), l = b[m];
                if (l[0] != S.call(l[0])) { k[0] = S.call(l[0]);
                    switch (k[0]) {
                        case "A":
                            k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                            break;
                        case "V":
                            k[1] = +l[1] + f;
                            break;
                        case "H":
                            k[1] = +l[1] + e;
                            break;
                        case "R":
                            var p = [e, f][n](l.slice(1));
                            for (var q = 2, r = p.length; q < r; q++) p[q] = +p[q] + e, p[++q] = +p[q] + f;
                            d.pop(), d = d[n](by(p, j));
                            break;
                        case "M":
                            g = +l[1] + e, h = +l[2] + f;
                        default:
                            for (q = 1, r = l.length; q < r; q++) k[q] = +l[q] + (q % 2 ? e : f) } } else if (l[0] == "R") p = [e, f][n](l.slice(1)), d.pop(), d = d[n](by(p, j)), k = ["R"][n](l.slice(-2));
                else
                    for (var s = 0, t = l.length; s < t; s++) k[s] = l[s];
                switch (k[0]) {
                    case "Z":
                        e = g, f = h;
                        break;
                    case "H":
                        e = k[1];
                        break;
                    case "V":
                        f = k[1];
                        break;
                    case "M":
                        g = k[k.length - 2], h = k[k.length - 1];
                    default:
                        e = k[k.length - 2], f = k[k.length - 1] } }
            d.toString = a._path2string, c.abs = bJ(d);
            return d },
        bM = function(a, b, c, d) {
            return [a, b, c, d, c, d] },
        bN = function(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f] },
        bO = function(a, b, c, d, e, f, g, h, i, j) {
            var k = B * 120 / 180,
                l = B / 180 * (+e || 0),
                m = [],
                o, p = bv(function(a, b, c) {
                    var d = a * w.cos(c) - b * w.sin(c),
                        e = a * w.sin(c) + b * w.cos(c);
                    return { x: d, y: e } });
            if (!j) { o = p(a, b, -l), a = o.x, b = o.y, o = p(h, i, -l), h = o.x, i = o.y;
                var q = w.cos(B / 180 * e),
                    r = w.sin(B / 180 * e),
                    t = (a - h) / 2,
                    u = (b - i) / 2,
                    v = t * t / (c * c) + u * u / (d * d);
                v > 1 && (v = w.sqrt(v), c = v * c, d = v * d);
                var x = c * c,
                    y = d * d,
                    A = (f == g ? -1 : 1) * w.sqrt(z((x * y - x * u * u - y * t * t) / (x * u * u + y * t * t))),
                    C = A * c * u / d + (a + h) / 2,
                    D = A * -d * t / c + (b + i) / 2,
                    E = w.asin(((b - D) / d).toFixed(9)),
                    F = w.asin(((i - D) / d).toFixed(9));
                E = a < C ? B - E : E, F = h < C ? B - F : F, E < 0 && (E = B * 2 + E), F < 0 && (F = B * 2 + F), g && E > F && (E = E - B * 2), !g && F > E && (F = F - B * 2) } else E = j[0], F = j[1], C = j[2], D = j[3];
            var G = F - E;
            if (z(G) > k) {
                var H = F,
                    I = h,
                    J = i;
                F = E + k * (g && F > E ? 1 : -1), h = C + c * w.cos(F), i = D + d * w.sin(F), m = bO(h, i, c, d, e, 0, g, I, J, [F, H, C, D]) }
            G = F - E;
            var K = w.cos(E),
                L = w.sin(E),
                M = w.cos(F),
                N = w.sin(F),
                O = w.tan(G / 4),
                P = 4 / 3 * c * O,
                Q = 4 / 3 * d * O,
                R = [a, b],
                S = [a + P * L, b - Q * K],
                T = [h + P * N, i - Q * M],
                U = [h, i];
            S[0] = 2 * R[0] - S[0], S[1] = 2 * R[1] - S[1];
            if (j) return [S, T, U][n](m);
            m = [S, T, U][n](m).join()[s](",");
            var V = [];
            for (var W = 0, X = m.length; W < X; W++) V[W] = W % 2 ? p(m[W - 1], m[W], l).y : p(m[W], m[W + 1], l).x;
            return V },
        bP = function(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i;
            return { x: A(j, 3) * a + A(j, 2) * 3 * i * c + j * 3 * i * i * e + A(i, 3) * g, y: A(j, 3) * b + A(j, 2) * 3 * i * d + j * 3 * i * i * f + A(i, 3) * h } },
        bQ = bv(function(a, b, c, d, e, f, g, h) {
            var i = e - 2 * c + a - (g - 2 * e + c),
                j = 2 * (c - a) - 2 * (e - c),
                k = a - c,
                l = (-j + w.sqrt(j * j - 4 * i * k)) / 2 / i,
                n = (-j - w.sqrt(j * j - 4 * i * k)) / 2 / i,
                o = [b, h],
                p = [a, g],
                q;
            z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bP(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bP(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y)), i = f - 2 * d + b - (h - 2 * f + d), j = 2 * (d - b) - 2 * (f - d), k = b - d, l = (-j + w.sqrt(j * j - 4 * i * k)) / 2 / i, n = (-j - w.sqrt(j * j - 4 * i * k)) / 2 / i, z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bP(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bP(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y));
            return { min: { x: y[m](0, p), y: y[m](0, o) }, max: { x: x[m](0, p), y: x[m](0, o) } } }),
        bR = a._path2curve = bv(function(a, b) {
            var c = !b && bz(a);
            if (!b && c.curve) return bJ(c.curve);
            var d = bL(a),
                e = b && bL(b),
                f = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                g = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                h = function(a, b) {
                    var c, d;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];!(a[0] in { T: 1, Q: 1 }) && (b.qx = b.qy = null);
                    switch (a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"][n](bO[m](0, [b.x, b.y][n](a.slice(1))));
                            break;
                        case "S":
                            c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d][n](a.slice(1));
                            break;
                        case "T":
                            b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"][n](bN(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"][n](bN(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"][n](bM(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"][n](bM(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"][n](bM(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"][n](bM(b.x, b.y, b.X, b.Y)) }
                    return a },
                i = function(a, b) {
                    if (a[b].length > 7) { a[b].shift();
                        var c = a[b];
                        while (c.length) a.splice(b++, 0, ["C"][n](c.splice(0, 6)));
                        a.splice(b, 1), l = x(d.length, e && e.length || 0) } },
                j = function(a, b, c, f, g) { a && b && a[g][0] == "M" && b[g][0] != "M" && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = x(d.length, e && e.length || 0)) };
            for (var k = 0, l = x(d.length, e && e.length || 0); k < l; k++) { d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
                var o = d[k],
                    p = e && e[k],
                    q = o.length,
                    r = e && p.length;
                f.x = o[q - 2], f.y = o[q - 1], f.bx = Q(o[q - 4]) || f.x, f.by = Q(o[q - 3]) || f.y, g.bx = e && (Q(p[r - 4]) || g.x), g.by = e && (Q(p[r - 3]) || g.y), g.x = e && p[r - 2], g.y = e && p[r - 1] }
            e || (c.curve = bJ(d));
            return e ? [d, e] : d }, null, bJ),
        bS = a._parseDots = bv(function(b) {
            var c = [];
            for (var d = 0, e = b.length; d < e; d++) {
                var f = {},
                    g = b[d].match(/^([^:]*):?([\d\.]*)/);
                f.color = a.getRGB(g[1]);
                if (f.color.error) return null;
                f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), c.push(f) }
            for (d = 1, e = c.length - 1; d < e; d++)
                if (!c[d].offset) {
                    var h = Q(c[d - 1].offset || 0),
                        i = 0;
                    for (var j = d + 1; j < e; j++)
                        if (c[j].offset) { i = c[j].offset;
                            break }
                    i || (i = 100, j = e), i = Q(i);
                    var k = (i - h) / (j - d + 1);
                    for (; d < j; d++) h += k, c[d].offset = h + "%" }
            return c }),
        bT = a._tear = function(a, b) { a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next) },
        bU = a._tofront = function(a, b) { b.top !== a && (bT(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a) },
        bV = a._toback = function(a, b) { b.bottom !== a && (bT(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a) },
        bW = a._insertafter = function(a, b, c) { bT(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a },
        bX = a._insertbefore = function(a, b, c) { bT(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b },
        bY = a.toMatrix = function(a, b) {
            var c = bI(a),
                d = { _: { transform: p }, getBBox: function() {
                        return c } };
            b$(d, b);
            return d.matrix },
        bZ = a.transformPath = function(a, b) {
            return bj(a, bY(a, b)) },
        b$ = a._extractTransform = function(b, c) {
            if (c == null) return b._.transform;
            c = r(c).replace(/\.{3}|\u2026/g, b._.transform || p);
            var d = a.parseTransformString(c),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = b._,
                k = new cb;
            j.transform = d || [];
            if (d)
                for (var l = 0, m = d.length; l < m; l++) {
                    var n = d[l],
                        o = n.length,
                        q = r(n[0]).toLowerCase(),
                        s = n[0] != q,
                        t = s ? k.invert() : 0,
                        u, v, w, x, y;
                    q == "t" && o == 3 ? s ? (u = t.x(0, 0), v = t.y(0, 0), w = t.x(n[1], n[2]), x = t.y(n[1], n[2]), k.translate(w - u, x - v)) : k.translate(n[1], n[2]) : q == "r" ? o == 2 ? (y = y || b.getBBox(1), k.rotate(n[1], y.x + y.width / 2, y.y + y.height / 2), e += n[1]) : o == 4 && (s ? (w = t.x(n[2], n[3]), x = t.y(n[2], n[3]), k.rotate(n[1], w, x)) : k.rotate(n[1], n[2], n[3]), e += n[1]) : q == "s" ? o == 2 || o == 3 ? (y = y || b.getBBox(1), k.scale(n[1], n[o - 1], y.x + y.width / 2, y.y + y.height / 2), h *= n[1], i *= n[o - 1]) : o == 5 && (s ? (w = t.x(n[3], n[4]), x = t.y(n[3], n[4]), k.scale(n[1], n[2], w, x)) : k.scale(n[1], n[2], n[3], n[4]), h *= n[1], i *= n[2]) : q == "m" && o == 7 && k.add(n[1], n[2], n[3], n[4], n[5], n[6]), j.dirtyT = 1, b.matrix = k }
            b.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, h == 1 && i == 1 && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1 },
        b_ = function(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return a.length == 4 ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return a.length == 5 ? [b, 1, 1, a[3], a[4]] : a.length == 3 ? [b, 1, 1] : [b, 1] } },
        ca = a._equaliseTransform = function(b, c) { c = r(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
            var d = x(b.length, c.length),
                e = [],
                f = [],
                g = 0,
                h, i, j, k;
            for (; g < d; g++) { j = b[g] || b_(c[g]), k = c[g] || b_(j);
                if (j[0] != k[0] || j[0].toLowerCase() == "r" && (j[2] != k[2] || j[3] != k[3]) || j[0].toLowerCase() == "s" && (j[3] != k[3] || j[4] != k[4])) return;
                e[g] = [], f[g] = [];
                for (h = 0, i = x(j.length, k.length); h < i; h++) h in j && (e[g][h] = j[h]), h in k && (f[g][h] = k[h]) }
            return { from: e, to: f } };
    a._getContainer = function(b, c, d, e) {
            var f;
            f = e == null && !a.is(b, "object") ? h.doc.getElementById(b) : b;
            if (f != null) {
                if (f.tagName) return c == null ? { container: f, width: f.style.pixelWidth || f.offsetWidth, height: f.style.pixelHeight || f.offsetHeight } : { container: f, width: c, height: d };
                return { container: 1, x: b, y: c, width: d, height: e } } }, a.pathToRelative = bK, a._engine = {}, a.path2curve = bR, a.matrix = function(a, b, c, d, e, f) {
            return new cb(a, b, c, d, e, f) },
        function(b) {
            function d(a) {
                var b = w.sqrt(c(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b) }

            function c(a) {
                return a[0] * a[0] + a[1] * a[1] }
            b.add = function(a, b, c, d, e, f) {
                var g = [
                        [],
                        [],
                        []
                    ],
                    h = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    i = [
                        [a, c, e],
                        [b, d, f],
                        [0, 0, 1]
                    ],
                    j, k, l, m;
                a && a instanceof cb && (i = [
                    [a.a, a.c, a.e],
                    [a.b, a.d, a.f],
                    [0, 0, 1]
                ]);
                for (j = 0; j < 3; j++)
                    for (k = 0; k < 3; k++) { m = 0;
                        for (l = 0; l < 3; l++) m += h[j][l] * i[l][k];
                        g[j][k] = m }
                this.a = g[0][0], this.b = g[1][0], this.c = g[0][1], this.d = g[1][1], this.e = g[0][2], this.f = g[1][2] }, b.invert = function() {
                var a = this,
                    b = a.a * a.d - a.b * a.c;
                return new cb(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b) }, b.clone = function() {
                return new cb(this.a, this.b, this.c, this.d, this.e, this.f) }, b.translate = function(a, b) { this.add(1, 0, 0, 1, a, b) }, b.scale = function(a, b, c, d) { b == null && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d) }, b.rotate = function(b, c, d) { b = a.rad(b), c = c || 0, d = d || 0;
                var e = +w.cos(b).toFixed(9),
                    f = +w.sin(b).toFixed(9);
                this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d) }, b.x = function(a, b) {
                return a * this.a + b * this.c + this.e }, b.y = function(a, b) {
                return a * this.b + b * this.d + this.f }, b.get = function(a) {
                return +this[r.fromCharCode(97 + a)].toFixed(4) }, b.toString = function() {
                return a.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join() }, b.toFilter = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')" }, b.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)] }, b.split = function() {
                var b = {};
                b.dx = this.e, b.dy = this.f;
                var e = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                b.scalex = w.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = w.sqrt(c(e[1])), d(e[1]), b.shear /= b.scaley;
                var f = -e[0][1],
                    g = e[1][1];
                g < 0 ? (b.rotate = a.deg(w.acos(g)), f < 0 && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(w.asin(f)), b.isSimple = !+b.shear.toFixed(9) && (b.scalex.toFixed(9) == b.scaley.toFixed(9) || !b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate;
                return b }, b.toTransformString = function(a) {
                var b = a || this[s]();
                if (b.isSimple) { b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4);
                    return (b.dx || b.dy ? "t" + [b.dx, b.dy] : p) + (b.scalex != 1 || b.scaley != 1 ? "s" + [b.scalex, b.scaley, 0, 0] : p) + (b.rotate ? "r" + [b.rotate, 0, 0] : p) }
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] } }(cb.prototype);
    var cc = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    navigator.vendor == "Apple Computer, Inc." && (cc && cc[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && cc && cc[1] < 8 ? k.safari = function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({ stroke: "none" });
        setTimeout(function() { a.remove() }) } : k.safari = be;
    var cd = function() { this.returnValue = !1 },
        ce = function() {
            return this.originalEvent.preventDefault() },
        cf = function() { this.cancelBubble = !0 },
        cg = function() {
            return this.originalEvent.stopPropagation() },
        ch = function() {
            if (h.doc.addEventListener) return function(a, b, c, d) {
                var e = o && u[b] ? u[b] : b,
                    f = function(e) {
                        var f = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                            i = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
                            j = e.clientX + i,
                            k = e.clientY + f;
                        if (o && u[g](b))
                            for (var l = 0, m = e.targetTouches && e.targetTouches.length; l < m; l++)
                                if (e.targetTouches[l].target == a) {
                                    var n = e;
                                    e = e.targetTouches[l], e.originalEvent = n, e.preventDefault = ce, e.stopPropagation = cg;
                                    break }
                        return c.call(d, e, j, k) };
                a.addEventListener(e, f, !1);
                return function() { a.removeEventListener(e, f, !1);
                    return !0 } };
            if (h.doc.attachEvent) return function(a, b, c, d) {
                var e = function(a) { a = a || h.win.event;
                    var b = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                        e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
                        f = a.clientX + e,
                        g = a.clientY + b;
                    a.preventDefault = a.preventDefault || cd, a.stopPropagation = a.stopPropagation || cf;
                    return c.call(d, a, f, g) };
                a.attachEvent("on" + b, e);
                var f = function() { a.detachEvent("on" + b, e);
                    return !0 };
                return f } }(),
        ci = [],
        cj = function(a) {
            var b = a.clientX,
                c = a.clientY,
                d = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
                f, g = ci.length;
            while (g--) { f = ci[g];
                if (o) {
                    var i = a.touches.length,
                        j;
                    while (i--) { j = a.touches[i];
                        if (j.identifier == f.el._drag.id) { b = j.clientX, c = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                            break } } } else a.preventDefault();
                var k = f.el.node,
                    l, m = k.nextSibling,
                    n = k.parentNode,
                    p = k.style.display;
                h.win.opera && n.removeChild(k), k.style.display = "none", l = f.el.paper.getElementByPoint(b, c), k.style.display = p, h.win.opera && (m ? n.insertBefore(k, m) : n.appendChild(k)), l && eve("raphael.drag.over." + f.el.id, f.el, l), b += e, c += d, eve("raphael.drag.move." + f.el.id, f.move_scope || f.el, b - f.el._drag.x, c - f.el._drag.y, b, c, a) } },
        ck = function(b) { a.unmousemove(cj).unmouseup(ck);
            var c = ci.length,
                d;
            while (c--) d = ci[c], d.el._drag = {}, eve("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, b);
            ci = [] },
        cl = a.el = {};
    for (var cm = t.length; cm--;)(function(b) { a[b] = cl[b] = function(c, d) { a.is(c, "function") && (this.events = this.events || [], this.events.push({ name: b, f: c, unbind: ch(this.shape || this.node || h.doc, b, c, d || this) }));
            return this }, a["un" + b] = cl["un" + b] = function(a) {
            var c = this.events || [],
                d = c.length;
            while (d--)
                if (c[d].name == b && c[d].f == a) { c[d].unbind(), c.splice(d, 1), !c.length && delete this.events;
                    return this }
            return this } })(t[cm]);
    cl.data = function(b, c) {
        var d = bb[this.id] = bb[this.id] || {};
        if (arguments.length == 1) {
            if (a.is(b, "object")) {
                for (var e in b) b[g](e) && this.data(e, b[e]);
                return this }
            eve("raphael.data.get." + this.id, this, d[b], b);
            return d[b] }
        d[b] = c, eve("raphael.data.set." + this.id, this, c, b);
        return this }, cl.removeData = function(a) { a == null ? bb[this.id] = {} : bb[this.id] && delete bb[this.id][a];
        return this }, cl.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c) }, cl.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b) };
    var cn = [];
    cl.drag = function(b, c, d, e, f, g) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                k = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft;
            this._drag.x = i.clientX + k, this._drag.y = i.clientY + j, this._drag.id = i.identifier, !ci.length && a.mousemove(cj).mouseup(ck), ci.push({ el: this, move_scope: e, start_scope: f, end_scope: g }), c && eve.on("raphael.drag.start." + this.id, c), b && eve.on("raphael.drag.move." + this.id, b), d && eve.on("raphael.drag.end." + this.id, d), eve("raphael.drag.start." + this.id, f || e || this, i.clientX + k, i.clientY + j, i) }
        this._drag = {}, cn.push({ el: this, start: i }), this.mousedown(i);
        return this }, cl.onDragOver = function(a) { a ? eve.on("raphael.drag.over." + this.id, a) : eve.unbind("raphael.drag.over." + this.id) }, cl.undrag = function() {
        var b = cn.length;
        while (b--) cn[b].el == this && (this.unmousedown(cn[b].start), cn.splice(b, 1), eve.unbind("raphael.drag.*." + this.id));!cn.length && a.unmousemove(cj).unmouseup(ck) }, k.circle = function(b, c, d) {
        var e = a._engine.circle(this, b || 0, c || 0, d || 0);
        this.__set__ && this.__set__.push(e);
        return e }, k.rect = function(b, c, d, e, f) {
        var g = a._engine.rect(this, b || 0, c || 0, d || 0, e || 0, f || 0);
        this.__set__ && this.__set__.push(g);
        return g }, k.ellipse = function(b, c, d, e) {
        var f = a._engine.ellipse(this, b || 0, c || 0, d || 0, e || 0);
        this.__set__ && this.__set__.push(f);
        return f }, k.path = function(b) { b && !a.is(b, D) && !a.is(b[0], E) && (b += p);
        var c = a._engine.path(a.format[m](a, arguments), this);
        this.__set__ && this.__set__.push(c);
        return c }, k.image = function(b, c, d, e, f) {
        var g = a._engine.image(this, b || "about:blank", c || 0, d || 0, e || 0, f || 0);
        this.__set__ && this.__set__.push(g);
        return g }, k.text = function(b, c, d) {
        var e = a._engine.text(this, b || 0, c || 0, r(d));
        this.__set__ && this.__set__.push(e);
        return e }, k.set = function(b) {!a.is(b, "array") && (b = Array.prototype.splice.call(arguments, 0, arguments.length));
        var c = new cG(b);
        this.__set__ && this.__set__.push(c);
        return c }, k.setStart = function(a) { this.__set__ = a || this.set() }, k.setFinish = function(a) {
        var b = this.__set__;
        delete this.__set__;
        return b }, k.setSize = function(b, c) {
        return a._engine.setSize.call(this, b, c) }, k.setViewBox = function(b, c, d, e, f) {
        return a._engine.setViewBox.call(this, b, c, d, e, f) }, k.top = k.bottom = null, k.raphael = a;
    var co = function(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            i = b.top + (h.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            j = b.left + (h.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return { y: i, x: j } };
    k.getElementByPoint = function(a, b) {
        var c = this,
            d = c.canvas,
            e = h.doc.elementFromPoint(a, b);
        if (h.win.opera && e.tagName == "svg") {
            var f = co(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var i = d.getIntersectionList(g, null);
            i.length && (e = i[i.length - 1]) }
        if (!e) return null;
        while (e.parentNode && e != d.parentNode && !e.raphael) e = e.parentNode;
        e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null;
        return e }, k.getById = function(a) {
        var b = this.bottom;
        while (b) {
            if (b.id == a) return b;
            b = b.next }
        return null }, k.forEach = function(a, b) {
        var c = this.bottom;
        while (c) {
            if (a.call(b, c) === !1) return this;
            c = c.next }
        return this }, k.getElementsByPoint = function(a, b) {
        var c = this.set();
        this.forEach(function(d) { d.isPointInside(a, b) && c.push(d) });
        return c }, cl.isPointInside = function(b, c) {
        var d = this.realPath = this.realPath || bi[this.type](this);
        return a.isPointInsidePath(d, b, c) }, cl.getBBox = function(a) {
        if (this.removed) return {};
        var b = this._;
        if (a) {
            if (b.dirty || !b.bboxwt) this.realPath = bi[this.type](this), b.bboxwt = bI(this.realPath), b.bboxwt.toString = cq, b.dirty = 0;
            return b.bboxwt }
        if (b.dirty || b.dirtyT || !b.bbox) {
            if (b.dirty || !this.realPath) b.bboxwt = 0, this.realPath = bi[this.type](this);
            b.bbox = bI(bj(this.realPath, this.matrix)), b.bbox.toString = cq, b.dirty = b.dirtyT = 0 }
        return b.bbox }, cl.clone = function() {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(a);
        return a }, cl.glow = function(a) {
        if (this.type == "text") return null;
        a = a || {};
        var b = { width: (a.width || 10) + (+this.attr("stroke-width") || 1), fill: a.fill || !1, opacity: a.opacity || .5, offsetx: a.offsetx || 0, offsety: a.offsety || 0, color: a.color || "#000" },
            c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || bi[this.type](this);
        f = this.matrix ? bj(f, this.matrix) : f;
        for (var g = 1; g < c + 1; g++) e.push(d.path(f).attr({ stroke: b.color, fill: b.fill ? b.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(b.width / c * g).toFixed(3), opacity: +(b.opacity / c).toFixed(3) }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety) };
    var cr = {},
        cs = function(b, c, d, e, f, g, h, i, j) {
            return j == null ? bB(b, c, d, e, f, g, h, i) : a.findDotsAtSegment(b, c, d, e, f, g, h, i, bC(b, c, d, e, f, g, h, i, j)) },
        ct = function(b, c) {
            return function(d, e, f) { d = bR(d);
                var g, h, i, j, k = "",
                    l = {},
                    m, n = 0;
                for (var o = 0, p = d.length; o < p; o++) { i = d[o];
                    if (i[0] == "M") g = +i[1], h = +i[2];
                    else { j = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6]);
                        if (n + j > e) {
                            if (c && !l.start) { m = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), k += ["C" + m.start.x, m.start.y, m.m.x, m.m.y, m.x, m.y];
                                if (f) return k;
                                l.start = k, k = ["M" + m.x, m.y + "C" + m.n.x, m.n.y, m.end.x, m.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                                continue }
                            if (!b && !c) { m = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n);
                                return { x: m.x, y: m.y, alpha: m.alpha } } }
                        n += j, g = +i[5], h = +i[6] }
                    k += i.shift() + i }
                l.end = k, m = b ? n : c ? l : a.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), m.alpha && (m = { x: m.x, y: m.y, alpha: m.alpha });
                return m } },
        cu = ct(1),
        cv = ct(),
        cw = ct(0, 1);
    a.getTotalLength = cu, a.getPointAtLength = cv, a.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return cw(a, b).end;
        var d = cw(a, c, 1);
        return b ? cw(d, b).end : d }, cl.getTotalLength = function() {
        if (this.type == "path") {
            if (this.node.getTotalLength) return this.node.getTotalLength();
            return cu(this.attrs.path) } }, cl.getPointAtLength = function(a) {
        if (this.type == "path") return cv(this.attrs.path, a) }, cl.getSubpath = function(b, c) {
        if (this.type == "path") return a.getSubpath(this.attrs.path, b, c) };
    var cx = a.easing_formulas = { linear: function(a) {
            return a }, "<": function(a) {
            return A(a, 1.7) }, ">": function(a) {
            return A(a, .48) }, "<>": function(a) {
            var b = .48 - a / 1.04,
                c = w.sqrt(.1734 + b * b),
                d = c - b,
                e = A(z(d), 1 / 3) * (d < 0 ? -1 : 1),
                f = -c - b,
                g = A(z(f), 1 / 3) * (f < 0 ? -1 : 1),
                h = e + g + .5;
            return (1 - h) * 3 * h * h + h * h * h }, backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b) }, backOut: function(a) { a = a - 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1 }, elastic: function(a) {
            if (a == !!a) return a;
            return A(2, -10 * a) * w.sin((a - .075) * 2 * B / .3) + 1 }, bounce: function(a) {
            var b = 7.5625,
                c = 2.75,
                d;
            a < 1 / c ? d = b * a * a : a < 2 / c ? (a -= 1.5 / c, d = b * a * a + .75) : a < 2.5 / c ? (a -= 2.25 / c, d = b * a * a + .9375) : (a -= 2.625 / c, d = b * a * a + .984375);
            return d } };
    cx.easeIn = cx["ease-in"] = cx["<"], cx.easeOut = cx["ease-out"] = cx[">"], cx.easeInOut = cx["ease-in-out"] = cx["<>"], cx["back-in"] = cx.backIn, cx["back-out"] = cx.backOut;
    var cy = [],
        cz = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { setTimeout(a, 16) },
        cA = function() {
            var b = +(new Date),
                c = 0;
            for (; c < cy.length; c++) {
                var d = cy[c];
                if (d.el.removed || d.paused) continue;
                var e = b - d.start,
                    f = d.ms,
                    h = d.easing,
                    i = d.from,
                    j = d.diff,
                    k = d.to,
                    l = d.t,
                    m = d.el,
                    o = {},
                    p, r = {},
                    s;
                d.initstatus ? (e = (d.initstatus * d.anim.top - d.prev) / (d.percent - d.prev) * f, d.status = d.initstatus, delete d.initstatus, d.stop && cy.splice(c--, 1)) : d.status = (d.prev + (d.percent - d.prev) * (e / f)) / d.anim.top;
                if (e < 0) continue;
                if (e < f) {
                    var t = h(e / f);
                    for (var u in i)
                        if (i[g](u)) {
                            switch (U[u]) {
                                case C:
                                    p = +i[u] + t * f * j[u];
                                    break;
                                case "colour":
                                    p = "rgb(" + [cB(O(i[u].r + t * f * j[u].r)), cB(O(i[u].g + t * f * j[u].g)), cB(O(i[u].b + t * f * j[u].b))].join(",") + ")";
                                    break;
                                case "path":
                                    p = [];
                                    for (var v = 0, w = i[u].length; v < w; v++) { p[v] = [i[u][v][0]];
                                        for (var x = 1, y = i[u][v].length; x < y; x++) p[v][x] = +i[u][v][x] + t * f * j[u][v][x];
                                        p[v] = p[v].join(q) }
                                    p = p.join(q);
                                    break;
                                case "transform":
                                    if (j[u].real) { p = [];
                                        for (v = 0, w = i[u].length; v < w; v++) { p[v] = [i[u][v][0]];
                                            for (x = 1, y = i[u][v].length; x < y; x++) p[v][x] = i[u][v][x] + t * f * j[u][v][x] } } else {
                                        var z = function(a) {
                                            return +i[u][a] + t * f * j[u][a] };
                                        p = [
                                            ["m", z(0), z(1), z(2), z(3), z(4), z(5)]
                                        ] }
                                    break;
                                case "csv":
                                    if (u == "clip-rect") { p = [], v = 4;
                                        while (v--) p[v] = +i[u][v] + t * f * j[u][v] }
                                    break;
                                default:
                                    var A = [][n](i[u]);
                                    p = [], v = m.paper.customAttributes[u].length;
                                    while (v--) p[v] = +A[v] + t * f * j[u][v] }
                            o[u] = p }
                    m.attr(o),
                        function(a, b, c) { setTimeout(function() { eve("raphael.anim.frame." + a, b, c) }) }(m.id, m, d.anim) } else {
                    (function(b, c, d) { setTimeout(function() { eve("raphael.anim.frame." + c.id, c, d), eve("raphael.anim.finish." + c.id, c, d), a.is(b, "function") && b.call(c) }) })(d.callback, m, d.anim), m.attr(k), cy.splice(c--, 1);
                    if (d.repeat > 1 && !d.next) {
                        for (s in k) k[g](s) && (r[s] = d.totalOrigin[s]);
                        d.el.attr(r), cE(d.anim, d.el, d.anim.percents[0], null, d.totalOrigin, d.repeat - 1) }
                    d.next && !d.stop && cE(d.anim, d.el, d.next, null, d.totalOrigin, d.repeat) } }
            a.svg && m && m.paper && m.paper.safari(), cy.length && cz(cA) },
        cB = function(a) {
            return a > 255 ? 255 : a < 0 ? 0 : a };
    cl.animateWith = function(b, c, d, e, f, g) {
        var h = this;
        if (h.removed) { g && g.call(h);
            return h }
        var i = d instanceof cD ? d : a.animation(d, e, f, g),
            j, k;
        cE(i, h, i.percents[0], null, h.attr());
        for (var l = 0, m = cy.length; l < m; l++)
            if (cy[l].anim == c && cy[l].el == b) { cy[m - 1].start = cy[l].start;
                break }
        return h }, cl.onAnimation = function(a) { a ? eve.on("raphael.anim.frame." + this.id, a) : eve.unbind("raphael.anim.frame." + this.id);
        return this }, cD.prototype.delay = function(a) {
        var b = new cD(this.anim, this.ms);
        b.times = this.times, b.del = +a || 0;
        return b }, cD.prototype.repeat = function(a) {
        var b = new cD(this.anim, this.ms);
        b.del = this.del, b.times = w.floor(x(a, 0)) || 1;
        return b }, a.animation = function(b, c, d, e) {
        if (b instanceof cD) return b;
        if (a.is(d, "function") || !d) e = e || d || null, d = null;
        b = Object(b), c = +c || 0;
        var f = {},
            h, i;
        for (i in b) b[g](i) && Q(i) != i && Q(i) + "%" != i && (h = !0, f[i] = b[i]);
        if (!h) return new cD(b, c);
        d && (f.easing = d), e && (f.callback = e);
        return new cD({ 100: f }, c) }, cl.animate = function(b, c, d, e) {
        var f = this;
        if (f.removed) { e && e.call(f);
            return f }
        var g = b instanceof cD ? b : a.animation(b, c, d, e);
        cE(g, f, g.percents[0], null, f.attr());
        return f }, cl.setTime = function(a, b) { a && b != null && this.status(a, y(b, a.ms) / a.ms);
        return this }, cl.status = function(a, b) {
        var c = [],
            d = 0,
            e, f;
        if (b != null) { cE(a, this, -1, y(b, 1));
            return this }
        e = cy.length;
        for (; d < e; d++) { f = cy[d];
            if (f.el.id == this.id && (!a || f.anim == a)) {
                if (a) return f.status;
                c.push({ anim: f.anim, status: f.status }) } }
        if (a) return 0;
        return c }, cl.pause = function(a) {
        for (var b = 0; b < cy.length; b++) cy[b].el.id == this.id && (!a || cy[b].anim == a) && eve("raphael.anim.pause." + this.id, this, cy[b].anim) !== !1 && (cy[b].paused = !0);
        return this }, cl.resume = function(a) {
        for (var b = 0; b < cy.length; b++)
            if (cy[b].el.id == this.id && (!a || cy[b].anim == a)) {
                var c = cy[b];
                eve("raphael.anim.resume." + this.id, this, c.anim) !== !1 && (delete c.paused, this.status(c.anim, c.status)) }
        return this }, cl.stop = function(a) {
        for (var b = 0; b < cy.length; b++) cy[b].el.id == this.id && (!a || cy[b].anim == a) && eve("raphael.anim.stop." + this.id, this, cy[b].anim) !== !1 && cy.splice(b--, 1);
        return this }, eve.on("raphael.remove", cF), eve.on("raphael.clear", cF), cl.toString = function() {
        return "RaphaÃ«lâ€™s object" };
    var cG = function(a) { this.items = [], this.length = 0, this.type = "set";
            if (a)
                for (var b = 0, c = a.length; b < c; b++) a[b] && (a[b].constructor == cl.constructor || a[b].constructor == cG) && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++) },
        cH = cG.prototype;
    cH.push = function() {
        var a, b;
        for (var c = 0, d = arguments.length; c < d; c++) a = arguments[c], a && (a.constructor == cl.constructor || a.constructor == cG) && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this }, cH.pop = function() { this.length && delete this[this.length--];
        return this.items.pop() }, cH.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; c < d; c++)
            if (a.call(b, this.items[c], c) === !1) return this;
        return this };
    for (var cI in cl) cl[g](cI) && (cH[cI] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) { c[a][m](c, b) }) } }(cI));
    cH.attr = function(b, c) {
            if (b && a.is(b, E) && a.is(b[0], "object"))
                for (var d = 0, e = b.length; d < e; d++) this.items[d].attr(b[d]);
            else
                for (var f = 0, g = this.items.length; f < g; f++) this.items[f].attr(b, c);
            return this }, cH.clear = function() {
            while (this.length) this.pop() }, cH.splice = function(a, b, c) { a = a < 0 ? x(this.length + a, 0) : a, b = x(0, y(this.length - a, b));
            var d = [],
                e = [],
                f = [],
                g;
            for (g = 2; g < arguments.length; g++) f.push(arguments[g]);
            for (g = 0; g < b; g++) e.push(this[a + g]);
            for (; g < this.length - a; g++) d.push(this[a + g]);
            var h = f.length;
            for (g = 0; g < h + d.length; g++) this.items[a + g] = this[a + g] = g < h ? f[g] : d[g - h];
            g = this.items.length = this.length -= b - h;
            while (this[g]) delete this[g++];
            return new cG(e) }, cH.exclude = function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (this[b] == a) { this.splice(b, 1);
                    return !0 } }, cH.animate = function(b, c, d, e) {
            (a.is(d, "function") || !d) && (e = d || null);
            var f = this.items.length,
                g = f,
                h, i = this,
                j;
            if (!f) return this;
            e && (j = function() {!--f && e.call(i) }), d = a.is(d, D) ? d : j;
            var k = a.animation(b, c, d, j);
            h = this.items[--g].animate(k);
            while (g--) this.items[g] && !this.items[g].removed && this.items[g].animateWith(h, k, k);
            return this }, cH.insertAfter = function(a) {
            var b = this.items.length;
            while (b--) this.items[b].insertAfter(a);
            return this }, cH.getBBox = function() {
            var a = [],
                b = [],
                c = [],
                d = [];
            for (var e = this.items.length; e--;)
                if (!this.items[e].removed) {
                    var f = this.items[e].getBBox();
                    a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height) }
            a = y[m](0, a), b = y[m](0, b), c = x[m](0, c), d = x[m](0, d);
            return { x: a, y: b, x2: c, y2: d, width: c - a, height: d - b } }, cH.clone = function(a) { a = new cG;
            for (var b = 0, c = this.items.length; b < c; b++) a.push(this.items[b].clone());
            return a }, cH.toString = function() {
            return "RaphaÃ«lâ€˜s set" }, a.registerFont = function(a) {
            if (!a.face) return a;
            this.fonts = this.fonts || {};
            var b = { w: a.w, face: {}, glyphs: {} },
                c = a.face["font-family"];
            for (var d in a.face) a.face[g](d) && (b.face[d] = a.face[d]);
            this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b];
            if (!a.svg) { b.face["units-per-em"] = R(a.face["units-per-em"], 10);
                for (var e in a.glyphs)
                    if (a.glyphs[g](e)) {
                        var f = a.glyphs[e];
                        b.glyphs[e] = { w: f.w, k: {}, d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                                return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[a] || "M" }) + "z" };
                        if (f.k)
                            for (var h in f.k) f[g](h) && (b.glyphs[e].k[h] = f.k[h]) } }
            return a }, k.getFont = function(b, c, d, e) { e = e || "normal", d = d || "normal", c = +c || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[c] || 400;
            if (!!a.fonts) {
                var f = a.fonts[b];
                if (!f) {
                    var h = new RegExp("(^|\\s)" + b.replace(/[^\w\d\s+!~.:_-]/g, p) + "(\\s|$)", "i");
                    for (var i in a.fonts)
                        if (a.fonts[g](i) && h.test(i)) { f = a.fonts[i];
                            break } }
                var j;
                if (f)
                    for (var k = 0, l = f.length; k < l; k++) { j = f[k];
                        if (j.face["font-weight"] == c && (j.face["font-style"] == d || !j.face["font-style"]) && j.face["font-stretch"] == e) break }
                return j } }, k.print = function(b, d, e, f, g, h, i) { h = h || "middle", i = x(y(i || 0, 1), -1);
            var j = r(e)[s](p),
                k = 0,
                l = 0,
                m = p,
                n;
            a.is(f, e) && (f = this.getFont(f));
            if (f) { n = (g || 16) / f.face["units-per-em"];
                var o = f.face.bbox[s](c),
                    q = +o[0],
                    t = o[3] - o[1],
                    u = 0,
                    v = +o[1] + (h == "baseline" ? t + +f.face.descent : t / 2);
                for (var w = 0, z = j.length; w < z; w++) {
                    if (j[w] == "\n") k = 0, B = 0, l = 0, u += t;
                    else {
                        var A = l && f.glyphs[j[w - 1]] || {},
                            B = f.glyphs[j[w]];
                        k += l ? (A.w || f.w) + (A.k && A.k[j[w]] || 0) + f.w * i : 0, l = 1 }
                    B && B.d && (m += a.transformPath(B.d, ["t", k * n, u * n, "s", n, n, q, v, "t", (b - q) / n, (d - v) / n])) } }
            return this.path(m).attr({ fill: "#000", stroke: "none" }) }, k.add = function(b) {
            if (a.is(b, "array")) {
                var c = this.set(),
                    e = 0,
                    f = b.length,
                    h;
                for (; e < f; e++) h = b[e] || {}, d[g](h.type) && c.push(this[h.type]().attr(h)) }
            return c }, a.format = function(b, c) {
            var d = a.is(c, E) ? [0][n](c) : arguments;
            b && a.is(b, D) && d.length - 1 && (b = b.replace(e, function(a, b) {
                return d[++b] == null ? p : d[b] }));
            return b || p }, a.fullfill = function() {
            var a = /\{([^\}]+)\}/g,
                b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                c = function(a, c, d) {
                    var e = d;
                    c.replace(b, function(a, b, c, d, f) { b = b || d, e && (b in e && (e = e[b]), typeof e == "function" && f && (e = e())) }), e = (e == null || e == d ? a : e) + "";
                    return e };
            return function(b, d) {
                return String(b).replace(a, function(a, b) {
                    return c(a, b, d) }) } }(), a.ninja = function() { i.was ? h.win.Raphael = i.is : delete Raphael;
            return a }, a.st = cH,
        function(b, c, d) {
            function e() { /in/.test(b.readyState) ? setTimeout(e, 9) : a.eve("raphael.DOMload") }
            b.readyState == null && b.addEventListener && (b.addEventListener(c, d = function() { b.removeEventListener(c, d, !1), b.readyState = "complete" }, !1), b.readyState = "loading"), e() }(document, "DOMContentLoaded"), i.was ? h.win.Raphael = a : Raphael = a, eve.on("raphael.DOMload", function() { b = !0 }) }(), window.Raphael.svg && function(a) {
    var b = "hasOwnProperty",
        c = String,
        d = parseFloat,
        e = parseInt,
        f = Math,
        g = f.max,
        h = f.abs,
        i = f.pow,
        j = /[, ]+/,
        k = a.eve,
        l = "",
        m = " ",
        n = "http://www.w3.org/1999/xlink",
        o = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" },
        p = {};
    a.toString = function() {
        return "Your browser supports SVG.\nYou are running RaphaÃ«l " + this.version };
    var q = function(d, e) {
            if (e) { typeof d == "string" && (d = q(d));
                for (var f in e) e[b](f) && (f.substring(0, 6) == "xlink:" ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f]))) } else d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
            return d },
        r = function(b, e) {
            var j = "linear",
                k = b.id + e,
                m = .5,
                n = .5,
                o = b.node,
                p = b.paper,
                r = o.style,
                s = a._g.doc.getElementById(k);
            if (!s) { e = c(e).replace(a._radial_gradient, function(a, b, c) { j = "radial";
                    if (b && c) { m = d(b), n = d(c);
                        var e = (n > .5) * 2 - 1;
                        i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && n != .5 && (n = n.toFixed(5) - 1e-5 * e) }
                    return l }), e = e.split(/\s*\-\s*/);
                if (j == "linear") {
                    var t = e.shift();
                    t = -d(t);
                    if (isNaN(t)) return null;
                    var u = [0, 0, f.cos(a.rad(t)), f.sin(a.rad(t))],
                        v = 1 / (g(h(u[2]), h(u[3])) || 1);
                    u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0) }
                var w = a._parseDots(e);
                if (!w) return null;
                k = k.replace(/[\(\)\s,\xb0#]/g, "_"), b.gradient && k != b.gradient.id && (p.defs.removeChild(b.gradient), delete b.gradient);
                if (!b.gradient) { s = q(j + "Gradient", { id: k }), b.gradient = s, q(s, j == "radial" ? { fx: m, fy: n } : { x1: u[0], y1: u[1], x2: u[2], y2: u[3], gradientTransform: b.matrix.invert() }), p.defs.appendChild(s);
                    for (var x = 0, y = w.length; x < y; x++) s.appendChild(q("stop", { offset: w[x].offset ? w[x].offset : x ? "100%" : "0%", "stop-color": w[x].color || "#fff" })) } }
            q(o, { fill: "url(#" + k + ")", opacity: 1, "fill-opacity": 1 }), r.fill = l, r.opacity = 1, r.fillOpacity = 1;
            return 1 },
        s = function(a) {
            var b = a.getBBox(1);
            q(a.pattern, { patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")" }) },
        t = function(d, e, f) {
            if (d.type == "path") {
                var g = c(e).toLowerCase().split("-"),
                    h = d.paper,
                    i = f ? "end" : "start",
                    j = d.node,
                    k = d.attrs,
                    m = k["stroke-width"],
                    n = g.length,
                    r = "classic",
                    s, t, u, v, w, x = 3,
                    y = 3,
                    z = 5;
                while (n--) switch (g[n]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        r = g[n];
                        break;
                    case "wide":
                        y = 5;
                        break;
                    case "narrow":
                        y = 2;
                        break;
                    case "long":
                        x = 5;
                        break;
                    case "short":
                        x = 2 }
                r == "open" ? (x += 2, y += 2, z += 2, u = 1, v = f ? 4 : 1, w = { fill: "none", stroke: k.stroke }) : (v = u = x / 2, w = { fill: k.stroke, stroke: "none" }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {};
                if (r != "none") {
                    var A = "raphael-marker-" + r,
                        B = "raphael-marker-" + i + r + x + y;
                    a._g.doc.getElementById(A) ? p[A]++ : (h.defs.appendChild(q(q("path"), { "stroke-linecap": "round", d: o[r], id: A })), p[A] = 1);
                    var C = a._g.doc.getElementById(B),
                        D;
                    C ? (p[B]++, D = C.getElementsByTagName("use")[0]) : (C = q(q("marker"), { id: B, markerHeight: y, markerWidth: x, orient: "auto", refX: v, refY: y / 2 }), D = q(q("use"), { "xlink:href": "#" + A, transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")", "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4) }), C.appendChild(D), h.defs.appendChild(C), p[B] = 1), q(D, w);
                    var F = u * (r != "diamond" && r != "oval");
                    f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - F * m) : (s = F * m, t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), w = {}, w["marker-" + i] = "url(#" + B + ")";
                    if (t || s) w.d = Raphael.getSubpath(k.path, s, t);
                    q(j, w), d._.arrows[i + "Path"] = A, d._.arrows[i + "Marker"] = B, d._.arrows[i + "dx"] = F, d._.arrows[i + "Type"] = r, d._.arrows[i + "String"] = e } else f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - s) : (s = 0, t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), d._.arrows[i + "Path"] && q(j, { d: Raphael.getSubpath(k.path, s, t) }), delete d._.arrows[i + "Path"], delete d._.arrows[i + "Marker"], delete d._.arrows[i + "dx"], delete d._.arrows[i + "Type"], delete d._.arrows[i + "String"];
                for (w in p)
                    if (p[b](w) && !p[w]) {
                        var G = a._g.doc.getElementById(w);
                        G && G.parentNode.removeChild(G) } } },
        u = { "": [0], none: [0], "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] },
        v = function(a, b, d) { b = u[c(b).toLowerCase()];
            if (b) {
                var e = a.attrs["stroke-width"] || "1",
                    f = { round: e, square: e, butt: 0 }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0,
                    g = [],
                    h = b.length;
                while (h--) g[h] = b[h] * e + (h % 2 ? 1 : -1) * f;
                q(a.node, { "stroke-dasharray": g.join(",") }) } },
        w = function(d, f) {
            var i = d.node,
                k = d.attrs,
                m = i.style.visibility;
            i.style.visibility = "hidden";
            for (var o in f)
                if (f[b](o)) {
                    if (!a._availableAttrs[b](o)) continue;
                    var p = f[o];
                    k[o] = p;
                    switch (o) {
                        case "blur":
                            d.blur(p);
                            break;
                        case "href":
                        case "title":
                        case "target":
                            var u = i.parentNode;
                            if (u.tagName.toLowerCase() != "a") {
                                var w = q("a");
                                u.insertBefore(w, i), w.appendChild(i), u = w }
                            o == "target" ? u.setAttributeNS(n, "show", p == "blank" ? "new" : p) : u.setAttributeNS(n, o, p);
                            break;
                        case "cursor":
                            i.style.cursor = p;
                            break;
                        case "transform":
                            d.transform(p);
                            break;
                        case "arrow-start":
                            t(d, p);
                            break;
                        case "arrow-end":
                            t(d, p, 1);
                            break;
                        case "clip-rect":
                            var x = c(p).split(j);
                            if (x.length == 4) { d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                var z = q("clipPath"),
                                    A = q("rect");
                                z.id = a.createUUID(), q(A, { x: x[0], y: x[1], width: x[2], height: x[3] }), z.appendChild(A), d.paper.defs.appendChild(z), q(i, { "clip-path": "url(#" + z.id + ")" }), d.clip = A }
                            if (!p) {
                                var B = i.getAttribute("clip-path");
                                if (B) {
                                    var C = a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g, l));
                                    C && C.parentNode.removeChild(C), q(i, { "clip-path": l }), delete d.clip } }
                            break;
                        case "path":
                            d.type == "path" && (q(i, { d: p ? k.path = a._pathToAbsolute(p) : "M0,0" }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                            break;
                        case "width":
                            i.setAttribute(o, p), d._.dirty = 1;
                            if (k.fx) o = "x", p = k.x;
                            else break;
                        case "x":
                            k.fx && (p = -k.x - (k.width || 0));
                        case "rx":
                            if (o == "rx" && d.type == "rect") break;
                        case "cx":
                            i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                            break;
                        case "height":
                            i.setAttribute(o, p), d._.dirty = 1;
                            if (k.fy) o = "y", p = k.y;
                            else break;
                        case "y":
                            k.fy && (p = -k.y - (k.height || 0));
                        case "ry":
                            if (o == "ry" && d.type == "rect") break;
                        case "cy":
                            i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                            break;
                        case "r":
                            d.type == "rect" ? q(i, { rx: p, ry: p }) : i.setAttribute(o, p), d._.dirty = 1;
                            break;
                        case "src":
                            d.type == "image" && i.setAttributeNS(n, "href", p);
                            break;
                        case "stroke-width":
                            if (d._.sx != 1 || d._.sy != 1) p /= g(h(d._.sx), h(d._.sy)) || 1;
                            d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                            break;
                        case "stroke-dasharray":
                            v(d, p, f);
                            break;
                        case "fill":
                            var D = c(p).match(a._ISURL);
                            if (D) { z = q("pattern");
                                var F = q("image");
                                z.id = a.createUUID(), q(z, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), q(F, { x: 0, y: 0, "xlink:href": D[1] }), z.appendChild(F),
                                    function(b) { a._preload(D[1], function() {
                                            var a = this.offsetWidth,
                                                c = this.offsetHeight;
                                            q(b, { width: a, height: c }), q(F, { width: a, height: c }), d.paper.safari() }) }(z), d.paper.defs.appendChild(z), q(i, { fill: "url(#" + z.id + ")" }), d.pattern = z, d.pattern && s(d);
                                break }
                            var G = a.getRGB(p);
                            if (!G.error) delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, { opacity: k.opacity }), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, { "fill-opacity": k["fill-opacity"] });
                            else if ((d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && r(d, p)) {
                                if ("opacity" in k || "fill-opacity" in k) {
                                    var H = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                    if (H) {
                                        var I = H.getElementsByTagName("stop");
                                        q(I[I.length - 1], { "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1) }) } }
                                k.gradient = p, k.fill = "none";
                                break }
                            G[b]("opacity") && q(i, { "fill-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity });
                        case "stroke":
                            G = a.getRGB(p), i.setAttribute(o, G.hex), o == "stroke" && G[b]("opacity") && q(i, { "stroke-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity }), o == "stroke" && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                            break;
                        case "gradient":
                            (d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && r(d, p);
                            break;
                        case "opacity":
                            k.gradient && !k[b]("stroke-opacity") && q(i, { "stroke-opacity": p > 1 ? p / 100 : p });
                        case "fill-opacity":
                            if (k.gradient) { H = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), H && (I = H.getElementsByTagName("stop"), q(I[I.length - 1], { "stop-opacity": p }));
                                break };
                        default:
                            o == "font-size" && (p = e(p, 10) + "px");
                            var J = o.replace(/(\-.)/g, function(a) {
                                return a.substring(1).toUpperCase() });
                            i.style[J] = p, d._.dirty = 1, i.setAttribute(o, p) } }
            y(d, f), i.style.visibility = m },
        x = 1.2,
        y = function(d, f) {
            if (d.type == "text" && !!(f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) {
                var g = d.attrs,
                    h = d.node,
                    i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                if (f[b]("text")) { g.text = f.text;
                    while (h.firstChild) h.removeChild(h.firstChild);
                    var j = c(f.text).split("\n"),
                        k = [],
                        m;
                    for (var n = 0, o = j.length; n < o; n++) m = q("tspan"), n && q(m, { dy: i * x, x: g.x }), m.appendChild(a._g.doc.createTextNode(j[n])), h.appendChild(m), k[n] = m } else { k = h.getElementsByTagName("tspan");
                    for (n = 0, o = k.length; n < o; n++) n ? q(k[n], { dy: i * x, x: g.x }) : q(k[0], { dy: 0 }) }
                q(h, { x: g.x, y: g.y }), d._.dirty = 1;
                var p = d._getBBox(),
                    r = g.y - (p.y + p.height / 2);
                r && a.is(r, "finite") && q(k[0], { dy: r }) } },
        z = function(b, c) {
            var d = 0,
                e = 0;
            this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null },
        A = a.el;
    z.prototype = A, A.constructor = z, a._engine.path = function(a, b) {
        var c = q("path");
        b.canvas && b.canvas.appendChild(c);
        var d = new z(c, b);
        d.type = "path", w(d, { fill: "none", stroke: "#000", path: a });
        return d }, A.rotate = function(a, b, e) {
        if (this.removed) return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
        if (b == null || e == null) {
            var f = this.getBBox(1);
            b = f.x + f.width / 2, e = f.y + f.height / 2 }
        this.transform(this._.transform.concat([
            ["r", a, b, e]
        ]));
        return this }, A.scale = function(a, b, e, f) {
        if (this.removed) return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), b == null && (b = a), f == null && (e = f);
        if (e == null || f == null) var g = this.getBBox(1);
        e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
            ["s", a, b, e, f]
        ]));
        return this }, A.translate = function(a, b) {
        if (this.removed) return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this.transform(this._.transform.concat([
            ["t", a, b]
        ]));
        return this }, A.transform = function(c) {
        var d = this._;
        if (c == null) return d.transform;
        a._extractTransform(this, c), this.clip && q(this.clip, { transform: this.matrix.invert() }), this.pattern && s(this), this.node && q(this.node, { transform: this.matrix });
        if (d.sx != 1 || d.sy != 1) {
            var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({ "stroke-width": e }) }
        return this }, A.hide = function() {!this.removed && this.paper.safari(this.node.style.display = "none");
        return this }, A.show = function() {!this.removed && this.paper.safari(this.node.style.display = "");
        return this }, A.remove = function() {
        if (!this.removed && !!this.node.parentNode) {
            var b = this.paper;
            b.__set__ && b.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && b.defs.removeChild(this.gradient), a._tear(this, b), this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var c in this) this[c] = typeof this[c] == "function" ? a._removedFactory(c) : null;
            this.removed = !0 } }, A._getBBox = function() {
        if (this.node.style.display == "none") { this.show();
            var a = !0 }
        var b = {};
        try { b = this.node.getBBox() } catch (c) {} finally { b = b || {} }
        a && this.hide();
        return b }, A.attr = function(c, d) {
        if (this.removed) return this;
        if (c == null) {
            var e = {};
            for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e }
        if (d == null && a.is(c, "string")) {
            if (c == "fill" && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
            if (c == "transform") return this._.transform;
            var g = c.split(j),
                h = {};
            for (var i = 0, l = g.length; i < l; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return l - 1 ? h : h[g[0]] }
        if (d == null && a.is(c, "array")) { h = {};
            for (i = 0, l = c.length; i < l; i++) h[c[i]] = this.attr(c[i]);
            return h }
        if (d != null) {
            var m = {};
            m[c] = d } else c != null && a.is(c, "object") && (m = c);
        for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
        for (n in this.paper.customAttributes)
            if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
                var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                this.attrs[n] = m[n];
                for (var p in o) o[b](p) && (m[p] = o[p]) }
        w(this, m);
        return this }, A.toFront = function() {
        if (this.removed) return this;
        this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var b = this.paper;
        b.top != this && a._tofront(this, b);
        return this }, A.toBack = function() {
        if (this.removed) return this;
        var b = this.node.parentNode;
        b.tagName.toLowerCase() == "a" ? b.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : b.firstChild != this.node && b.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper);
        var c = this.paper;
        return this }, A.insertAfter = function(b) {
        if (this.removed) return this;
        var c = b.node || b[b.length - 1].node;
        c.nextSibling ? c.parentNode.insertBefore(this.node, c.nextSibling) : c.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
        return this }, A.insertBefore = function(b) {
        if (this.removed) return this;
        var c = b.node || b[0].node;
        c.parentNode.insertBefore(this.node, c), a._insertbefore(this, b, this.paper);
        return this }, A.blur = function(b) {
        var c = this;
        if (+b !== 0) {
            var d = q("filter"),
                e = q("feGaussianBlur");
            c.attrs.blur = b, d.id = a.createUUID(), q(e, { stdDeviation: +b || 1.5 }), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, { filter: "url(#" + d.id + ")" }) } else c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), c.node.removeAttribute("filter") }, a._engine.circle = function(a, b, c, d) {
        var e = q("circle");
        a.canvas && a.canvas.appendChild(e);
        var f = new z(e, a);
        f.attrs = { cx: b, cy: c, r: d, fill: "none", stroke: "#000" }, f.type = "circle", q(e, f.attrs);
        return f }, a._engine.rect = function(a, b, c, d, e, f) {
        var g = q("rect");
        a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = { x: b, y: c, width: d, height: e, r: f || 0, rx: f || 0, ry: f || 0, fill: "none", stroke: "#000" }, h.type = "rect", q(g, h.attrs);
        return h }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = q("ellipse");
        a.canvas && a.canvas.appendChild(f);
        var g = new z(f, a);
        g.attrs = { cx: b, cy: c, rx: d, ry: e, fill: "none", stroke: "#000" }, g.type = "ellipse", q(f, g.attrs);
        return g }, a._engine.image = function(a, b, c, d, e, f) {
        var g = q("image");
        q(g, { x: c, y: d, width: e, height: f, preserveAspectRatio: "none" }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = { x: c, y: d, width: e, height: f, src: b }, h.type = "image";
        return h }, a._engine.text = function(b, c, d, e) {
        var f = q("text");
        b.canvas && b.canvas.appendChild(f);
        var g = new z(f, b);
        g.attrs = { x: c, y: d, "text-anchor": "middle", text: e, font: a._availableAttrs.font, stroke: "none", fill: "#000" }, g.type = "text", w(g, g.attrs);
        return g }, a._engine.setSize = function(a, b) { this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox);
        return this }, a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments),
            c = b && b.container,
            d = b.x,
            e = b.y,
            f = b.width,
            g = b.height;
        if (!c) throw new Error("SVG container not found.");
        var h = q("svg"),
            i = "overflow:hidden;",
            j;
        d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(h, { height: g, version: 1.1, width: f, xmlns: "http://www.w3.org/2000/svg" }), c == 1 ? (h.style.cssText = i + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(h), j = 1) : (h.style.cssText = i + "position:relative", c.firstChild ? c.insertBefore(h, c.firstChild) : c.appendChild(h)), c = new a._Paper, c.width = f, c.height = g, c.canvas = h, c.clear(), c._left = c._top = 0, j && (c.renderfix = function() {}), c.renderfix();
        return c }, a._engine.setViewBox = function(a, b, c, d, e) { k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
        var f = g(c / this.width, d / this.height),
            h = this.top,
            i = e ? "meet" : "xMinYMin",
            j, l;
        a == null ? (this._vbSize && (f = 1), delete this._vbSize, j = "0 0 " + this.width + m + this.height) : (this._vbSize = f, j = a + m + b + m + c + m + d), q(this.canvas, { viewBox: j, preserveAspectRatio: i });
        while (f && h) l = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({ "stroke-width": l }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
        this._viewBox = [a, b, c, d, !!e];
        return this }, a.prototype.renderfix = function() {
        var a = this.canvas,
            b = a.style,
            c;
        try { c = a.getScreenCTM() || a.createSVGMatrix() } catch (d) { c = a.createSVGMatrix() }
        var e = -c.e % 1,
            f = -c.f % 1;
        if (e || f) e && (this._left = (this._left + e) % 1, b.left = this._left + "px"), f && (this._top = (this._top + f) % 1, b.top = this._top + "px") }, a.prototype.clear = function() { a.eve("raphael.clear", this);
        var b = this.canvas;
        while (b.firstChild) b.removeChild(b.firstChild);
        this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with RaphaÃ«l " + a.version)), b.appendChild(this.desc), b.appendChild(this.defs = q("defs")) }, a.prototype.remove = function() { k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this) this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null };
    var B = a.st;
    for (var C in A) A[b](C) && !B[b](C) && (B[C] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) { c[a].apply(c, b) }) } }(C)) }(window.Raphael), window.Raphael.vml && function(a) {
    var b = "hasOwnProperty",
        c = String,
        d = parseFloat,
        e = Math,
        f = e.round,
        g = e.max,
        h = e.min,
        i = e.abs,
        j = "fill",
        k = /[, ]+/,
        l = a.eve,
        m = " progid:DXImageTransform.Microsoft",
        n = " ",
        o = "",
        p = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" },
        q = /([clmz]),?([^clmz]*)/gi,
        r = / progid:\S+Blur\([^\)]+\)/g,
        s = /-?[^,\s-]+/g,
        t = "position:absolute;left:0;top:0;width:1px;height:1px",
        u = 21600,
        v = { path: 1, rect: 1, image: 1 },
        w = { circle: 1, ellipse: 1 },
        x = function(b) {
            var d = /[ahqstv]/ig,
                e = a._pathToAbsolute;
            c(b).match(d) && (e = a._path2curve), d = /[clmz]/g;
            if (e == a._pathToAbsolute && !c(b).match(d)) {
                var g = c(b).replace(q, function(a, b, c) {
                    var d = [],
                        e = b.toLowerCase() == "m",
                        g = p[b];
                    c.replace(s, function(a) { e && d.length == 2 && (g += d + p[b == "m" ? "l" : "L"], d = []), d.push(f(a * u)) });
                    return g + d });
                return g }
            var h = e(b),
                i, j;
            g = [];
            for (var k = 0, l = h.length; k < l; k++) { i = h[k], j = h[k][0].toLowerCase(), j == "z" && (j = "x");
                for (var m = 1, r = i.length; m < r; m++) j += f(i[m] * u) + (m != r - 1 ? "," : o);
                g.push(j) }
            return g.join(n) },
        y = function(b, c, d) {
            var e = a.matrix();
            e.rotate(-b, .5, .5);
            return { dx: e.x(c, d), dy: e.y(c, d) } },
        z = function(a, b, c, d, e, f) {
            var g = a._,
                h = a.matrix,
                k = g.fillpos,
                l = a.node,
                m = l.style,
                o = 1,
                p = "",
                q, r = u / b,
                s = u / c;
            m.visibility = "hidden";
            if (!!b && !!c) { l.coordsize = i(r) + n + i(s), m.rotation = f * (b * c < 0 ? -1 : 1);
                if (f) {
                    var t = y(f, d, e);
                    d = t.dx, e = t.dy }
                b < 0 && (p += "x"), c < 0 && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -r + n + e * -s;
                if (k || g.fillsize) {
                    var v = l.getElementsByTagName(j);
                    v = v && v[0], l.removeChild(v), k && (t = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), v.position = t.dx * o + n + t.dy * o), g.fillsize && (v.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(v) }
                m.visibility = "visible" } };
    a.toString = function() {
        return "Your browser doesnâ€™t support SVG. Falling down to VML.\nYou are running RaphaÃ«l " + this.version };
    var A = function(a, b, d) {
            var e = c(b).toLowerCase().split("-"),
                f = d ? "end" : "start",
                g = e.length,
                h = "classic",
                i = "medium",
                j = "medium";
            while (g--) switch (e[g]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                    h = e[g];
                    break;
                case "wide":
                case "narrow":
                    j = e[g];
                    break;
                case "long":
                case "short":
                    i = e[g] }
            var k = a.node.getElementsByTagName("stroke")[0];
            k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j },
        B = function(e, i) { e.attrs = e.attrs || {};
            var l = e.node,
                m = e.attrs,
                p = l.style,
                q, r = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                s = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                t = e;
            for (var y in i) i[b](y) && (m[y] = i[y]);
            r && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur);
            if (i.path && e.type == "path" || r) l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), e.type == "image" && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0)); "transform" in i && e.transform(i.transform);
            if (s) {
                var B = +m.cx,
                    D = +m.cy,
                    E = +m.rx || +m.r || 0,
                    G = +m.ry || +m.r || 0;
                l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((B - E) * u), f((D - G) * u), f((B + E) * u), f((D + G) * u), f(B * u)) }
            if ("clip-rect" in i) {
                var H = c(i["clip-rect"]).split(k);
                if (H.length == 4) { H[2] = +H[2] + +H[0], H[3] = +H[3] + +H[1];
                    var I = l.clipRect || a._g.doc.createElement("div"),
                        J = I.style;
                    J.clip = a.format("rect({1}px {2}px {3}px {0}px)", H), l.clipRect || (J.position = "absolute", J.top = 0, J.left = 0, J.width = e.paper.width + "px", J.height = e.paper.height + "px", l.parentNode.insertBefore(I, l), I.appendChild(l), l.clipRect = I) }
                i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto") }
            if (e.textpath) {
                var K = e.textpath.style;
                i.font && (K.font = i.font), i["font-family"] && (K.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (K.fontSize = i["font-size"]), i["font-weight"] && (K.fontWeight = i["font-weight"]), i["font-style"] && (K.fontStyle = i["font-style"]) } "arrow-start" in i && A(t, i["arrow-start"]), "arrow-end" in i && A(t, i["arrow-end"], 1);
            if (i.opacity != null || i["stroke-width"] != null || i.fill != null || i.src != null || i.stroke != null || i["stroke-width"] != null || i["stroke-opacity"] != null || i["fill-opacity"] != null || i["stroke-dasharray"] != null || i["stroke-miterlimit"] != null || i["stroke-linejoin"] != null || i["stroke-linecap"] != null) {
                var L = l.getElementsByTagName(j),
                    M = !1;
                L = L && L[0], !L && (M = L = F(j)), e.type == "image" && i.src && (L.src = i.src), i.fill && (L.on = !0);
                if (L.on == null || i.fill == "none" || i.fill === null) L.on = !1;
                if (L.on && i.fill) {
                    var N = c(i.fill).match(a._ISURL);
                    if (N) { L.parentNode == l && l.removeChild(L), L.rotate = !0, L.src = N[1], L.type = "tile";
                        var O = e.getBBox(1);
                        L.position = O.x + n + O.y, e._.fillpos = [O.x, O.y], a._preload(N[1], function() { e._.fillsize = [this.offsetWidth, this.offsetHeight] }) } else L.color = a.getRGB(i.fill).hex, L.src = o, L.type = "solid", a.getRGB(i.fill).error && (t.type in { circle: 1, ellipse: 1 } || c(i.fill).charAt() != "r") && C(t, i.fill, L) && (m.fill = "none", m.gradient = i.fill, L.rotate = !1) }
                if ("fill-opacity" in i || "opacity" in i) {
                    var P = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+a.getRGB(i.fill).o + 1 || 2) - 1);
                    P = h(g(P, 0), 1), L.opacity = P, L.src && (L.color = "none") }
                l.appendChild(L);
                var Q = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                    T = !1;!Q && (T = Q = F("stroke"));
                if (i.stroke && i.stroke != "none" || i["stroke-width"] || i["stroke-opacity"] != null || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) Q.on = !0;
                (i.stroke == "none" || i.stroke === null || Q.on == null || i.stroke == 0 || i["stroke-width"] == 0) && (Q.on = !1);
                var U = a.getRGB(i.stroke);
                Q.on && i.stroke && (Q.color = U.hex), P = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+U.o + 1 || 2) - 1);
                var V = (d(i["stroke-width"]) || 1) * .75;
                P = h(g(P, 0), 1), i["stroke-width"] == null && (V = m["stroke-width"]), i["stroke-width"] && (Q.weight = V), V && V < 1 && (P *= V) && (Q.weight = 1), Q.opacity = P, i["stroke-linejoin"] && (Q.joinstyle = i["stroke-linejoin"] || "miter"), Q.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (Q.endcap = i["stroke-linecap"] == "butt" ? "flat" : i["stroke-linecap"] == "square" ? "square" : "round");
                if (i["stroke-dasharray"]) {
                    var W = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
                    Q.dashstyle = W[b](i["stroke-dasharray"]) ? W[i["stroke-dasharray"]] : o }
                T && l.appendChild(Q) }
            if (t.type == "text") { t.paper.canvas.style.display = o;
                var X = t.paper.span,
                    Y = 100,
                    Z = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                p = X.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), Z = d(m["font-size"] || Z && Z[0]) || 10, p.fontSize = Z * Y + "px", t.textpath.string && (X.innerHTML = c(t.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                var $ = X.getBoundingClientRect();
                t.W = m.w = ($.right - $.left) / Y, t.H = m.h = ($.bottom - $.top) / Y, t.X = m.x, t.Y = m.y + t.H / 2, ("x" in i || "y" in i) && (t.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                var _ = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
                for (var ba = 0, bb = _.length; ba < bb; ba++)
                    if (_[ba] in i) { t._.dirty = 1;
                        break }
                switch (m["text-anchor"]) {
                    case "start":
                        t.textpath.style["v-text-align"] = "left", t.bbx = t.W / 2;
                        break;
                    case "end":
                        t.textpath.style["v-text-align"] = "right", t.bbx = -t.W / 2;
                        break;
                    default:
                        t.textpath.style["v-text-align"] = "center", t.bbx = 0 }
                t.textpath.style["v-text-kern"] = !0 } },
        C = function(b, f, g) { b.attrs = b.attrs || {};
            var h = b.attrs,
                i = Math.pow,
                j, k, l = "linear",
                m = ".5 .5";
            b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) { l = "radial", b && c && (b = d(b), c = d(c), i(b - .5, 2) + i(c - .5, 2) > .25 && (c = e.sqrt(.25 - i(b - .5, 2)) * ((c > .5) * 2 - 1) + .5), m = b + n + c);
                return o }), f = f.split(/\s*\-\s*/);
            if (l == "linear") {
                var p = f.shift();
                p = -d(p);
                if (isNaN(p)) return null }
            var q = a._parseDots(f);
            if (!q) return null;
            b = b.shape || b.node;
            if (q.length) { b.removeChild(g), g.on = !0, g.method = "none", g.color = q[0].color, g.color2 = q[q.length - 1].color;
                var r = [];
                for (var s = 0, t = q.length; s < t; s++) q[s].offset && r.push(q[s].offset + n + q[s].color);
                g.colors = r.length ? r.join() : "0% " + g.color, l == "radial" ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = m, g.angle = 0) : (g.type = "gradient", g.angle = (270 - p) % 360), b.appendChild(g) }
            return 1 },
        D = function(b, c) { this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null },
        E = a.el;
    D.prototype = E, E.constructor = D, E.transform = function(b) {
        if (b == null) return this._.transform;
        var d = this.paper._viewBoxShift,
            e = d ? "s" + [d.scale, d.scale] + "-1-1t" + [d.dx, d.dy] : o,
            f;
        d && (f = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)), a._extractTransform(this, e + b);
        var g = this.matrix.clone(),
            h = this.skew,
            i = this.node,
            j, k = ~c(this.attrs.fill).indexOf("-"),
            l = !c(this.attrs.fill).indexOf("url(");
        g.translate(-0.5, -0.5);
        if (l || k || this.type == "image") { h.matrix = "1 0 0 1", h.offset = "0 0", j = g.split();
            if (k && j.noRotation || !j.isSimple) { i.style.filter = g.toFilter();
                var m = this.getBBox(),
                    p = this.getBBox(1),
                    q = m.x - p.x,
                    r = m.y - p.y;
                i.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0) } else i.style.filter = o, z(this, j.scalex, j.scaley, j.dx, j.dy, j.rotate) } else i.style.filter = o, h.matrix = c(g), h.offset = g.offset();
        f && (this._.transform = f);
        return this }, E.rotate = function(a, b, e) {
        if (this.removed) return this;
        if (a != null) { a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
            if (b == null || e == null) {
                var f = this.getBBox(1);
                b = f.x + f.width / 2, e = f.y + f.height / 2 }
            this._.dirtyT = 1, this.transform(this._.transform.concat([
                ["r", a, b, e]
            ]));
            return this } }, E.translate = function(a, b) {
        if (this.removed) return this;
        a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([
            ["t", a, b]
        ]));
        return this }, E.scale = function(a, b, e, f) {
        if (this.removed) return this;
        a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), b == null && (b = a), f == null && (e = f);
        if (e == null || f == null) var g = this.getBBox(1);
        e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([
            ["s", a, b, e, f]
        ])), this._.dirtyT = 1;
        return this }, E.hide = function() {!this.removed && (this.node.style.display = "none");
        return this }, E.show = function() {!this.removed && (this.node.style.display = o);
        return this }, E._getBBox = function() {
        if (this.removed) return {};
        return { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H } }, E.remove = function() {
        if (!this.removed && !!this.node.parentNode) { this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var b in this) this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null;
            this.removed = !0 } }, E.attr = function(c, d) {
        if (this.removed) return this;
        if (c == null) {
            var e = {};
            for (var f in this.attrs) this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e }
        if (d == null && a.is(c, "string")) {
            if (c == j && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
            var g = c.split(k),
                h = {};
            for (var i = 0, m = g.length; i < m; i++) c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return m - 1 ? h : h[g[0]] }
        if (this.attrs && d == null && a.is(c, "array")) { h = {};
            for (i = 0, m = c.length; i < m; i++) h[c[i]] = this.attr(c[i]);
            return h }
        var n;
        d != null && (n = {}, n[c] = d), d == null && a.is(c, "object") && (n = c);
        for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
        if (n) {
            for (o in this.paper.customAttributes)
                if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
                    var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                    this.attrs[o] = n[o];
                    for (var q in p) p[b](q) && (n[q] = p[q]) }
            n.text && this.type == "text" && (this.textpath.string = n.text), B(this, n) }
        return this }, E.toFront = function() {!this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper);
        return this }, E.toBack = function() {
        if (this.removed) return this;
        this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper));
        return this }, E.insertAfter = function(b) {
        if (this.removed) return this;
        b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
        return this }, E.insertBefore = function(b) {
        if (this.removed) return this;
        b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper);
        return this }, E.blur = function(b) {
        var c = this.node.runtimeStyle,
            d = c.filter;
        d = d.replace(r, o), +b !== 0 ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + (+b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f(+b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur) }, a._engine.path = function(a, b) {
        var c = F("shape");
        c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
        var d = new D(c, b),
            e = { fill: "none", stroke: "#000" };
        a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
        var f = F("skew");
        f.on = !0, c.appendChild(f), d.skew = f, d.transform(o);
        return d }, a._engine.rect = function(b, c, d, e, f, g) {
        var h = a._rectPath(c, d, e, f, g),
            i = b.path(h),
            j = i.attrs;
        i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect";
        return i }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = a.path(),
            g = f.attrs;
        f.X = b - d, f.Y = c - e, f.W = d * 2, f.H = e * 2, f.type = "ellipse", B(f, { cx: b, cy: c, rx: d, ry: e });
        return f }, a._engine.circle = function(a, b, c, d) {
        var e = a.path(),
            f = e.attrs;
        e.X = b - d, e.Y = c - d, e.W = e.H = d * 2, e.type = "circle", B(e, { cx: b, cy: c, r: d });
        return e }, a._engine.image = function(b, c, d, e, f, g) {
        var h = a._rectPath(d, e, f, g),
            i = b.path(h).attr({ stroke: "none" }),
            k = i.attrs,
            l = i.node,
            m = l.getElementsByTagName(j)[0];
        k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = c, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0);
        return i }, a._engine.text = function(b, d, e, g) {
        var h = F("shape"),
            i = F("path"),
            j = F("textpath");
        d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = c(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
        var k = new D(h, b),
            l = { fill: "#000", stroke: "none", font: a._availableAttrs.font, text: g };
        k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), b.canvas.appendChild(h);
        var m = F("skew");
        m.on = !0, h.appendChild(m), k.skew = m, k.transform(o);
        return k }, a._engine.setSize = function(b, c) {
        var d = this.canvas.style;
        this.width = b, this.height = c, b == +b && (b += "px"), c == +c && (c += "px"), d.width = b, d.height = c, d.clip = "rect(0 " + b + " " + c + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox);
        return this }, a._engine.setViewBox = function(b, c, d, e, f) { a.eve("raphael.setViewBox", this, this._viewBox, [b, c, d, e, f]);
        var h = this.width,
            i = this.height,
            j = 1 / g(d / h, e / i),
            k, l;
        f && (k = i / e, l = h / d, d * k < h && (b -= (h - d * k) / 2 / k), e * l < i && (c -= (i - e * l) / 2 / l)), this._viewBox = [b, c, d, e, !!f], this._viewBoxShift = { dx: -b, dy: -c, scale: j }, this.forEach(function(a) { a.transform("...") });
        return this };
    var F;
    a._engine.initWin = function(a) {
        var b = a.document;
        b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {!b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                return b.createElement("<rvml:" + a + ' class="rvml">') } } catch (c) { F = function(a) {
                return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } }, a._engine.initWin(a._g.win), a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments),
            c = b.container,
            d = b.height,
            e, f = b.width,
            g = b.x,
            h = b.y;
        if (!c) throw new Error("VML container not found.");
        var i = new a._Paper,
            j = i.canvas = a._g.doc.createElement("div"),
            k = j.style;
        g = g || 0, h = h || 0, f = f || 512, d = d || 342, i.width = f, i.height = d, f == +f && (f += "px"), d == +d && (d += "px"), i.coordsize = u * 1e3 + n + u * 1e3, i.coordorigin = "0 0", i.span = a._g.doc.createElement("span"), i.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", j.appendChild(i.span), k.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", f, d), c == 1 ? (a._g.doc.body.appendChild(j), k.left = g + "px", k.top = h + "px", k.position = "absolute") : c.firstChild ? c.insertBefore(j, c.firstChild) : c.appendChild(j), i.renderfix = function() {};
        return i }, a.prototype.clear = function() { a.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null }, a.prototype.remove = function() { a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this) this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null;
        return !0 };
    var G = a.st;
    for (var H in E) E[b](H) && !G[b](H) && (G[H] = function(a) {
        return function() {
            var b = arguments;
            return this.forEach(function(c) { c[a].apply(c, b) }) } }(H)) }(window.Raphael)
