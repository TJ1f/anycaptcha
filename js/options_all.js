var showErrorMessage;
var refreshFreeAttemptsMessage;
var showBalanceMessage;
(function() {
    var e = "testmessageforsolveroutput";
    var t = 1 * 24 * 60 * 60;
    var n = 3 * 60;
    var r = 1 * 6 * 60 * 60;
    var a = 3 * 60;
    var o = typeof code !== "undefined" ? code(cachedCode("69LawbW91aWV1Ju/6aLn46DHmKW46Ni/3uSlrMe/pcy64dKwzcqw66bA3s27uLbmyrPux72v7bW/x+G1tZ+428m0wuLh7b250Ovp6LfFyA=="), e, true) : "doNotUseCache";
    var s = "ctrl+shift+3";
    var u = "ctrl+shift+6";
    var c = "http://ar1n.xyz/anticaptcha/getAllHostnameSelectors.json";
    var l = {
        phrase: false,
        case: true,
        numeric: 0,
        math: false,
        minLength: 0,
        maxLength: 0,
        comment: ""
    };
    var f = "http://ar1n.xyz/anticaptcha/plugin_last_version.json";
    var T = "lncaoejhfdpcafpkkcddpjnhnodcajfg";
    var p = "_recaptchaOnloadMethod";
    var d = "_hcaptchaOnloadMethod";
    var h = "UNKNOWN_ERROR";
    (function(e, t) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = e.document ? t(e, true) : function(e) {
                if (!e.document) {
                    throw new Error("jQuery requires a window with a document")
                }
                return t(e)
            }
        } else {
            t(e)
        }
    })(typeof window !== "undefined" ? window : this, function(k, e) {
        "use strict";
        var t = [];
        var T = k.document;
        var r = Object.getPrototypeOf;
        var s = t.slice;
        var g = t.concat;
        var u = t.push;
        var i = t.indexOf;
        var n = {};
        var a = n.toString;
        var h = n.hasOwnProperty;
        var o = h.toString;
        var c = o.call(Object);
        var m = {};

        function v(e, t) {
            t = t || T;
            var n = t.createElement("script");
            n.text = e;
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        var l = "3.1.1",
            A = function(e, t) {
                return new A.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            d = /-([a-z])/g,
            y = function(e, t) {
                return t.toUpperCase()
            };
        A.fn = A.prototype = {
            jquery: l,
            constructor: A,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                if (e == null) {
                    return s.call(this)
                }
                return e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = A.merge(this.constructor(), e);
                t.prevObject = this;
                return t
            },
            each: function(e) {
                return A.each(this, e)
            },
            map: function(n) {
                return this.pushStack(A.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        };
        A.extend = A.fn.extend = function() {
            var e, t, n, r, i, a, o = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = false;
            if (typeof o === "boolean") {
                c = o;
                o = arguments[s] || {};
                s++
            }
            if (typeof o !== "object" && !A.isFunction(o)) {
                o = {}
            }
            if (s === u) {
                o = this;
                s--
            }
            for (; s < u; s++) {
                if ((e = arguments[s]) != null) {
                    for (t in e) {
                        n = o[t];
                        r = e[t];
                        if (o === r) {
                            continue
                        }
                        if (c && r && (A.isPlainObject(r) || (i = A.isArray(r)))) {
                            if (i) {
                                i = false;
                                a = n && A.isArray(n) ? n : []
                            } else {
                                a = n && A.isPlainObject(n) ? n : {}
                            }
                            o[t] = A.extend(c, a, r)
                        } else if (r !== undefined) {
                            o[t] = r
                        }
                    }
                }
            }
            return o
        };
        A.extend({
            expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return A.type(e) === "function"
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return e != null && e === e.window
            },
            isNumeric: function(e) {
                var t = A.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                if (!e || a.call(e) !== "[object Object]") {
                    return false
                }
                t = r(e);
                if (!t) {
                    return true
                }
                n = h.call(t, "constructor") && t.constructor;
                return typeof n === "function" && o.call(n) === c
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) {
                    return false
                }
                return true
            },
            type: function(e) {
                if (e == null) {
                    return e + ""
                }
                return typeof e === "object" || typeof e === "function" ? n[a.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                v(e)
            },
            camelCase: function(e) {
                return e.replace(p, "ms-").replace(d, y)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (x(e)) {
                    n = e.length;
                    for (; r < n; r++) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        if (t.call(e[r], r, e[r]) === false) {
                            break
                        }
                    }
                }
                return e
            },
            trim: function(e) {
                return e == null ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    if (x(Object(e))) {
                        A.merge(n, typeof e === "string" ? [e] : e)
                    } else {
                        u.call(n, e)
                    }
                }
                return n
            },
            inArray: function(e, t, n) {
                return t == null ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                var n = +t.length,
                    r = 0,
                    i = e.length;
                for (; r < n; r++) {
                    e[i++] = t[r]
                }
                e.length = i;
                return e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    a = 0,
                    o = e.length,
                    s = !n;
                for (; a < o; a++) {
                    r = !t(e[a], a);
                    if (r !== s) {
                        i.push(e[a])
                    }
                }
                return i
            },
            map: function(e, t, n) {
                var r, i, a = 0,
                    o = [];
                if (x(e)) {
                    r = e.length;
                    for (; a < r; a++) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            o.push(i)
                        }
                    }
                } else {
                    for (a in e) {
                        i = t(e[a], a, n);
                        if (i != null) {
                            o.push(i)
                        }
                    }
                }
                return g.apply([], o)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n
                }
                if (!A.isFunction(e)) {
                    return undefined
                }
                r = s.call(arguments, 2);
                i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                };
                i.guid = e.guid = e.guid || A.guid++;
                return i
            },
            now: Date.now,
            support: m
        });
        if (typeof Symbol === "function") {
            A.fn[Symbol.iterator] = t[Symbol.iterator]
        }
        A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });

        function x(e) {
            var t = !!e && "length" in e && e.length,
                n = A.type(e);
            if (n === "function" || A.isWindow(e)) {
                return false
            }
            return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
        }
        var b = function(n) {
            var e, d, b, a, i, h, f, g, w, u, c, _, k, o, T, m, s, l, v, A = "sizzle" + 1 * new Date,
                y = n.document,
                C = 0,
                r = 0,
                p = oe(),
                x = oe(),
                S = oe(),
                E = function(e, t) {
                    if (e === t) {
                        c = true
                    }
                    return 0
                },
                N = {}.hasOwnProperty,
                t = [],
                P = t.pop,
                L = t.push,
                D = t.push,
                $ = t.slice,
                j = function(e, t) {
                    var n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    }
                    return -1
                },
                R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                O = "[\\x20\\t\\r\\n\\f]",
                q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                B = "\\[" + O + "*(" + q + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + O + "*\\]",
                H = ":(" + q + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|" + ".*" + ")\\)|)",
                M = new RegExp(O + "+", "g"),
                F = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                I = new RegExp("^" + O + "*," + O + "*"),
                U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                W = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                V = new RegExp(H),
                K = new RegExp("^" + q + "$"),
                G = {
                    ID: new RegExp("^#(" + q + ")"),
                    CLASS: new RegExp("^\\.(" + q + ")"),
                    TAG: new RegExp("^(" + q + "|[*])"),
                    ATTR: new RegExp("^" + B),
                    PSEUDO: new RegExp("^" + H),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + R + ")$", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                z = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Y = /[+~]/,
                Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                ee = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                },
                te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ne = function(e, t) {
                    if (t) {
                        if (e === "\0") {
                            return "�"
                        }
                        return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                    }
                    return "\\" + e
                },
                re = function() {
                    _()
                },
                ie = ye(function(e) {
                    return e.disabled === true && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                D.apply(t = $.call(y.childNodes), y.childNodes);
                t[y.childNodes.length].nodeType
            } catch (e) {
                D = {
                    apply: t.length ? function(e, t) {
                        L.apply(e, $.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function ae(e, t, n, r) {
                var i, a, o, s, u, c, l, f = t && t.ownerDocument,
                    p = t ? t.nodeType : 9;
                n = n || [];
                if (typeof e !== "string" || !e || p !== 1 && p !== 9 && p !== 11) {
                    return n
                }
                if (!r) {
                    if ((t ? t.ownerDocument || t : y) !== k) {
                        _(t)
                    }
                    t = t || k;
                    if (T) {
                        if (p !== 11 && (u = Q.exec(e))) {
                            if (i = u[1]) {
                                if (p === 9) {
                                    if (o = t.getElementById(i)) {
                                        if (o.id === i) {
                                            n.push(o);
                                            return n
                                        }
                                    } else {
                                        return n
                                    }
                                } else {
                                    if (f && (o = f.getElementById(i)) && v(t, o) && o.id === i) {
                                        n.push(o);
                                        return n
                                    }
                                }
                            } else if (u[2]) {
                                D.apply(n, t.getElementsByTagName(e));
                                return n
                            } else if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) {
                                D.apply(n, t.getElementsByClassName(i));
                                return n
                            }
                        }
                        if (d.qsa && !S[e + " "] && (!m || !m.test(e))) {
                            if (p !== 1) {
                                f = t;
                                l = e
                            } else if (t.nodeName.toLowerCase() !== "object") {
                                if (s = t.getAttribute("id")) {
                                    s = s.replace(te, ne)
                                } else {
                                    t.setAttribute("id", s = A)
                                }
                                c = h(e);
                                a = c.length;
                                while (a--) {
                                    c[a] = "#" + s + " " + ve(c[a])
                                }
                                l = c.join(",");
                                f = Y.test(e) && ge(t.parentNode) || t
                            }
                            if (l) {
                                try {
                                    D.apply(n, f.querySelectorAll(l));
                                    return n
                                } catch (e) {} finally {
                                    if (s === A) {
                                        t.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return g(e.replace(F, "$1"), t, n, r)
            }

            function oe() {
                var n = [];

                function r(e, t) {
                    if (n.push(e + " ") > b.cacheLength) {
                        delete r[n.shift()]
                    }
                    return r[e + " "] = t
                }
                return r
            }

            function se(e) {
                e[A] = true;
                return e
            }

            function ue(e) {
                var t = k.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return false
                } finally {
                    if (t.parentNode) {
                        t.parentNode.removeChild(t)
                    }
                    t = null
                }
            }

            function ce(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) {
                    b.attrHandle[n[r]] = t
                }
            }

            function le(e, t) {
                var n = t && e,
                    r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                if (r) {
                    return r
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function fe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === n
                }
            }

            function pe(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && e.type === n
                }
            }

            function de(t) {
                return function(e) {
                    if ("form" in e) {
                        if (e.parentNode && e.disabled === false) {
                            if ("label" in e) {
                                if ("label" in e.parentNode) {
                                    return e.parentNode.disabled === t
                                } else {
                                    return e.disabled === t
                                }
                            }
                            return e.isDisabled === t || e.isDisabled !== !t && ie(e) === t
                        }
                        return e.disabled === t
                    } else if ("label" in e) {
                        return e.disabled === t
                    }
                    return false
                }
            }

            function he(o) {
                return se(function(a) {
                    a = +a;
                    return se(function(e, t) {
                        var n, r = o([], e.length, a),
                            i = r.length;
                        while (i--) {
                            if (e[n = r[i]]) {
                                e[n] = !(t[n] = e[n])
                            }
                        }
                    })
                })
            }

            function ge(e) {
                return e && typeof e.getElementsByTagName !== "undefined" && e
            }
            d = ae.support = {};
            i = ae.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : false
            };
            _ = ae.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : y;
                if (r === k || r.nodeType !== 9 || !r.documentElement) {
                    return k
                }
                k = r;
                o = k.documentElement;
                T = !i(k);
                if (y !== k && (n = k.defaultView) && n.top !== n) {
                    if (n.addEventListener) {
                        n.addEventListener("unload", re, false)
                    } else if (n.attachEvent) {
                        n.attachEvent("onunload", re)
                    }
                }
                d.attributes = ue(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                d.getElementsByTagName = ue(function(e) {
                    e.appendChild(k.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                d.getElementsByClassName = J.test(k.getElementsByClassName);
                d.getById = ue(function(e) {
                    o.appendChild(e).id = A;
                    return !k.getElementsByName || !k.getElementsByName(A).length
                });
                if (d.getById) {
                    b.filter["ID"] = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    };
                    b.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && T) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                } else {
                    b.filter["ID"] = function(e) {
                        var n = e.replace(Z, ee);
                        return function(e) {
                            var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    };
                    b.find["ID"] = function(e, t) {
                        if (typeof t.getElementById !== "undefined" && T) {
                            var n, r, i, a = t.getElementById(e);
                            if (a) {
                                n = a.getAttributeNode("id");
                                if (n && n.value === e) {
                                    return [a]
                                }
                                i = t.getElementsByName(e);
                                r = 0;
                                while (a = i[r++]) {
                                    n = a.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [a]
                                    }
                                }
                            }
                            return []
                        }
                    }
                }
                b.find["TAG"] = d.getElementsByTagName ? function(e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e)
                    } else if (d.qsa) {
                        return t.querySelectorAll(e)
                    }
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        a = t.getElementsByTagName(e);
                    if (e === "*") {
                        while (n = a[i++]) {
                            if (n.nodeType === 1) {
                                r.push(n)
                            }
                        }
                        return r
                    }
                    return a
                };
                b.find["CLASS"] = d.getElementsByClassName && function(e, t) {
                    if (typeof t.getElementsByClassName !== "undefined" && T) {
                        return t.getElementsByClassName(e)
                    }
                };
                s = [];
                m = [];
                if (d.qsa = J.test(k.querySelectorAll)) {
                    ue(function(e) {
                        o.appendChild(e).innerHTML = "<a id='" + A + "'></a>" + "<select id='" + A + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (e.querySelectorAll("[msallowcapture^='']").length) {
                            m.push("[*^$]=" + O + "*(?:''|\"\")")
                        }
                        if (!e.querySelectorAll("[selected]").length) {
                            m.push("\\[" + O + "*(?:value|" + R + ")")
                        }
                        if (!e.querySelectorAll("[id~=" + A + "-]").length) {
                            m.push("~=")
                        }
                        if (!e.querySelectorAll(":checked").length) {
                            m.push(":checked")
                        }
                        if (!e.querySelectorAll("a#" + A + "+*").length) {
                            m.push(".#.+[+~]")
                        }
                    });
                    ue(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var t = k.createElement("input");
                        t.setAttribute("type", "hidden");
                        e.appendChild(t).setAttribute("name", "D");
                        if (e.querySelectorAll("[name=d]").length) {
                            m.push("name" + O + "*[*^$|!~]?=")
                        }
                        if (e.querySelectorAll(":enabled").length !== 2) {
                            m.push(":enabled", ":disabled")
                        }
                        o.appendChild(e).disabled = true;
                        if (e.querySelectorAll(":disabled").length !== 2) {
                            m.push(":enabled", ":disabled")
                        }
                        e.querySelectorAll("*,:x");
                        m.push(",.*:")
                    })
                }
                if (d.matchesSelector = J.test(l = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                    ue(function(e) {
                        d.disconnectedMatch = l.call(e, "*");
                        l.call(e, "[s!='']:x");
                        s.push("!=", H)
                    })
                }
                m = m.length && new RegExp(m.join("|"));
                s = s.length && new RegExp(s.join("|"));
                t = J.test(o.compareDocumentPosition);
                v = t || J.test(o.contains) ? function(e, t) {
                    var n = e.nodeType === 9 ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16))
                } : function(e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return true
                            }
                        }
                    }
                    return false
                };
                E = t ? function(e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    if (n) {
                        return n
                    }
                    n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                    if (n & 1 || !d.sortDetached && t.compareDocumentPosition(e) === n) {
                        if (e === k || e.ownerDocument === y && v(y, e)) {
                            return -1
                        }
                        if (t === k || t.ownerDocument === y && v(y, t)) {
                            return 1
                        }
                        return u ? j(u, e) - j(u, t) : 0
                    }
                    return n & 4 ? -1 : 1
                } : function(e, t) {
                    if (e === t) {
                        c = true;
                        return 0
                    }
                    var n, r = 0,
                        i = e.parentNode,
                        a = t.parentNode,
                        o = [e],
                        s = [t];
                    if (!i || !a) {
                        return e === k ? -1 : t === k ? 1 : i ? -1 : a ? 1 : u ? j(u, e) - j(u, t) : 0
                    } else if (i === a) {
                        return le(e, t)
                    }
                    n = e;
                    while (n = n.parentNode) {
                        o.unshift(n)
                    }
                    n = t;
                    while (n = n.parentNode) {
                        s.unshift(n)
                    }
                    while (o[r] === s[r]) {
                        r++
                    }
                    return r ? le(o[r], s[r]) : o[r] === y ? -1 : s[r] === y ? 1 : 0
                };
                return k
            };
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            };
            ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    _(e)
                }
                t = t.replace(W, "='$1']");
                if (d.matchesSelector && T && !S[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) {
                    try {
                        var n = l.call(e, t);
                        if (n || d.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                            return n
                        }
                    } catch (e) {}
                }
                return ae(t, k, null, [e]).length > 0
            };
            ae.contains = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    _(e)
                }
                return v(e, t)
            };
            ae.attr = function(e, t) {
                if ((e.ownerDocument || e) !== k) {
                    _(e)
                }
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && N.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !T) : undefined;
                return r !== undefined ? r : d.attributes || !T ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            };
            ae.escape = function(e) {
                return (e + "").replace(te, ne)
            };
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            ae.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                c = !d.detectDuplicates;
                u = !d.sortStable && e.slice(0);
                e.sort(E);
                if (c) {
                    while (t = e[i++]) {
                        if (t === e[i]) {
                            r = n.push(i)
                        }
                    }
                    while (r--) {
                        e.splice(n[r], 1)
                    }
                }
                u = null;
                return e
            };
            a = ae.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (!i) {
                    while (t = e[r++]) {
                        n += a(t)
                    }
                } else if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += a(e)
                        }
                    }
                } else if (i === 3 || i === 4) {
                    return e.nodeValue
                }
                return n
            };
            b = ae.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(Z, ee);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                ae.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +(e[7] + e[8] || e[3] === "odd")
                        } else if (e[3]) {
                            ae.error(e[0])
                        }
                        return e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        if (G["CHILD"].test(e[0])) {
                            return null
                        }
                        if (e[3]) {
                            e[2] = e[4] || e[5] || ""
                        } else if (n && V.test(n) && (t = h(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                            e[0] = e[0].slice(0, t);
                            e[2] = n.slice(0, t)
                        }
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return e === "*" ? function() {
                            return true
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && p(e, function(e) {
                            return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            if (t == null) {
                                return r === "!="
                            }
                            if (!r) {
                                return true
                            }
                            t += "";
                            return r === "=" ? t === i : r === "!=" ? t !== i : r === "^=" ? i && t.indexOf(i) === 0 : r === "*=" ? i && t.indexOf(i) > -1 : r === "$=" ? i && t.slice(-i.length) === i : r === "~=" ? (" " + t.replace(M, " ") + " ").indexOf(i) > -1 : r === "|=" ? t === i || t.slice(0, i.length + 1) === i + "-" : false
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = h.slice(0, 3) !== "nth",
                            y = h.slice(-4) !== "last",
                            x = e === "of-type";
                        return g === 1 && m === 0 ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, a, o, s, u, c = v !== y ? "nextSibling" : "previousSibling",
                                l = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = false;
                            if (l) {
                                if (v) {
                                    while (c) {
                                        o = e;
                                        while (o = o[c]) {
                                            if (x ? o.nodeName.toLowerCase() === f : o.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        u = c = h === "only" && !u && "nextSibling"
                                    }
                                    return true
                                }
                                u = [y ? l.firstChild : l.lastChild];
                                if (y && p) {
                                    o = l;
                                    a = o[A] || (o[A] = {});
                                    i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                    r = i[h] || [];
                                    s = r[0] === C && r[1];
                                    d = s && r[2];
                                    o = s && l.childNodes[s];
                                    while (o = ++s && o && o[c] || (d = s = 0) || u.pop()) {
                                        if (o.nodeType === 1 && ++d && o === e) {
                                            i[h] = [C, s, d];
                                            break
                                        }
                                    }
                                } else {
                                    if (p) {
                                        o = e;
                                        a = o[A] || (o[A] = {});
                                        i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                        r = i[h] || [];
                                        s = r[0] === C && r[1];
                                        d = s
                                    }
                                    if (d === false) {
                                        while (o = ++s && o && o[c] || (d = s = 0) || u.pop()) {
                                            if ((x ? o.nodeName.toLowerCase() === f : o.nodeType === 1) && ++d) {
                                                if (p) {
                                                    a = o[A] || (o[A] = {});
                                                    i = a[o.uniqueID] || (a[o.uniqueID] = {});
                                                    i[h] = [C, d]
                                                }
                                                if (o === e) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                d -= m;
                                return d === g || d % g === 0 && d / g >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var t, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        if (o[A]) {
                            return o(a)
                        }
                        if (o.length > 1) {
                            t = [e, e, "", a];
                            return b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                                var n, r = o(e, a),
                                    i = r.length;
                                while (i--) {
                                    n = j(e, r[i]);
                                    e[n] = !(t[n] = r[i])
                                }
                            }) : function(e) {
                                return o(e, 0, t)
                            }
                        }
                        return o
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(F, "$1"));
                        return s[A] ? se(function(e, t, n, r) {
                            var i, a = s(e, null, r, []),
                                o = e.length;
                            while (o--) {
                                if (i = a[o]) {
                                    e[o] = !(t[o] = i)
                                }
                            }
                        }) : function(e, t, n) {
                            r[0] = e;
                            s(r, null, n, i);
                            r[0] = null;
                            return !i.pop()
                        }
                    }),
                    has: se(function(t) {
                        return function(e) {
                            return ae(t, e).length > 0
                        }
                    }),
                    contains: se(function(t) {
                        t = t.replace(Z, ee);
                        return function(e) {
                            return (e.textContent || e.innerText || a(e)).indexOf(t) > -1
                        }
                    }),
                    lang: se(function(n) {
                        if (!K.test(n || "")) {
                            ae.error("unsupported lang: " + n)
                        }
                        n = n.replace(Z, ee).toLowerCase();
                        return function(e) {
                            var t;
                            do {
                                if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
                                    t = t.toLowerCase();
                                    return t === n || t.indexOf(n + "-") === 0
                                }
                            } while ((e = e.parentNode) && e.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === o
                    },
                    focus: function(e) {
                        return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(false),
                    disabled: de(true),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(e) {
                        return !b.pseudos["empty"](e)
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    input: function(e) {
                        return z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    text: function(e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        var n = 0;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    odd: he(function(e, t) {
                        var n = 1;
                        for (; n < t; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; --r >= 0;) {
                            e.push(r)
                        }
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        var r = n < 0 ? n + t : n;
                        for (; ++r < t;) {
                            e.push(r)
                        }
                        return e
                    })
                }
            };
            b.pseudos["nth"] = b.pseudos["eq"];
            for (e in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                b.pseudos[e] = fe(e)
            }
            for (e in {
                    submit: true,
                    reset: true
                }) {
                b.pseudos[e] = pe(e)
            }

            function me() {}
            me.prototype = b.filters = b.pseudos;
            b.setFilters = new me;
            h = ae.tokenize = function(e, t) {
                var n, r, i, a, o, s, u, c = x[e + " "];
                if (c) {
                    return t ? 0 : c.slice(0)
                }
                o = e;
                s = [];
                u = b.preFilter;
                while (o) {
                    if (!n || (r = I.exec(o))) {
                        if (r) {
                            o = o.slice(r[0].length) || o
                        }
                        s.push(i = [])
                    }
                    n = false;
                    if (r = U.exec(o)) {
                        n = r.shift();
                        i.push({
                            value: n,
                            type: r[0].replace(F, " ")
                        });
                        o = o.slice(n.length)
                    }
                    for (a in b.filter) {
                        if ((r = G[a].exec(o)) && (!u[a] || (r = u[a](r)))) {
                            n = r.shift();
                            i.push({
                                value: n,
                                type: a,
                                matches: r
                            });
                            o = o.slice(n.length)
                        }
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? o.length : o ? ae.error(e) : x(e, s).slice(0)
            };

            function ve(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; t < n; t++) {
                    r += e[t].value
                }
                return r
            }

            function ye(s, e, t) {
                var u = e.dir,
                    c = e.next,
                    l = c || u,
                    f = t && l === "parentNode",
                    p = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[u]) {
                        if (e.nodeType === 1 || f) {
                            return s(e, t, n)
                        }
                    }
                    return false
                } : function(e, t, n) {
                    var r, i, a, o = [C, p];
                    if (n) {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || f) {
                                if (s(e, t, n)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while (e = e[u]) {
                            if (e.nodeType === 1 || f) {
                                a = e[A] || (e[A] = {});
                                i = a[e.uniqueID] || (a[e.uniqueID] = {});
                                if (c && c === e.nodeName.toLowerCase()) {
                                    e = e[u] || e
                                } else if ((r = i[l]) && r[0] === C && r[1] === p) {
                                    return o[2] = r[2]
                                } else {
                                    i[l] = o;
                                    if (o[2] = s(e, t, n)) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                    return false
                }
            }

            function xe(i) {
                return i.length > 1 ? function(e, t, n) {
                    var r = i.length;
                    while (r--) {
                        if (!i[r](e, t, n)) {
                            return false
                        }
                    }
                    return true
                } : i[0]
            }

            function be(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) {
                    ae(e, t[r], n)
                }
                return n
            }

            function we(e, t, n, r, i) {
                var a, o = [],
                    s = 0,
                    u = e.length,
                    c = t != null;
                for (; s < u; s++) {
                    if (a = e[s]) {
                        if (!n || n(a, r, i)) {
                            o.push(a);
                            if (c) {
                                t.push(s)
                            }
                        }
                    }
                }
                return o
            }

            function _e(d, h, g, m, v, e) {
                if (m && !m[A]) {
                    m = _e(m)
                }
                if (v && !v[A]) {
                    v = _e(v, e)
                }
                return se(function(e, t, n, r) {
                    var i, a, o, s = [],
                        u = [],
                        c = t.length,
                        l = e || be(h || "*", n.nodeType ? [n] : n, []),
                        f = d && (e || !h) ? we(l, s, d, n, r) : l,
                        p = g ? v || (e ? d : c || m) ? [] : t : f;
                    if (g) {
                        g(f, p, n, r)
                    }
                    if (m) {
                        i = we(p, u);
                        m(i, [], n, r);
                        a = i.length;
                        while (a--) {
                            if (o = i[a]) {
                                p[u[a]] = !(f[u[a]] = o)
                            }
                        }
                    }
                    if (e) {
                        if (v || d) {
                            if (v) {
                                i = [];
                                a = p.length;
                                while (a--) {
                                    if (o = p[a]) {
                                        i.push(f[a] = o)
                                    }
                                }
                                v(null, p = [], i, r)
                            }
                            a = p.length;
                            while (a--) {
                                if ((o = p[a]) && (i = v ? j(e, o) : s[a]) > -1) {
                                    e[i] = !(t[i] = o)
                                }
                            }
                        }
                    } else {
                        p = we(p === t ? p.splice(c, p.length) : p);
                        if (v) {
                            v(null, t, p, r)
                        } else {
                            D.apply(t, p)
                        }
                    }
                })
            }

            function ke(e) {
                var i, t, n, r = e.length,
                    a = b.relative[e[0].type],
                    o = a || b.relative[" "],
                    s = a ? 1 : 0,
                    u = ye(function(e) {
                        return e === i
                    }, o, true),
                    c = ye(function(e) {
                        return j(i, e) > -1
                    }, o, true),
                    l = [function(e, t, n) {
                        var r = !a && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : c(e, t, n));
                        i = null;
                        return r
                    }];
                for (; s < r; s++) {
                    if (t = b.relative[e[s].type]) {
                        l = [ye(xe(l), t)]
                    } else {
                        t = b.filter[e[s].type].apply(null, e[s].matches);
                        if (t[A]) {
                            n = ++s;
                            for (; n < r; n++) {
                                if (b.relative[e[n].type]) {
                                    break
                                }
                            }
                            return _e(s > 1 && xe(l), s > 1 && ve(e.slice(0, s - 1).concat({
                                value: e[s - 2].type === " " ? "*" : ""
                            })).replace(F, "$1"), t, s < n && ke(e.slice(s, n)), n < r && ke(e = e.slice(n)), n < r && ve(e))
                        }
                        l.push(t)
                    }
                }
                return xe(l)
            }

            function Te(m, v) {
                var y = v.length > 0,
                    x = m.length > 0,
                    e = function(e, t, n, r, i) {
                        var a, o, s, u = 0,
                            c = "0",
                            l = e && [],
                            f = [],
                            p = w,
                            d = e || x && b.find["TAG"]("*", i),
                            h = C += p == null ? 1 : Math.random() || .1,
                            g = d.length;
                        if (i) {
                            w = t === k || t || i
                        }
                        for (; c !== g && (a = d[c]) != null; c++) {
                            if (x && a) {
                                o = 0;
                                if (!t && a.ownerDocument !== k) {
                                    _(a);
                                    n = !T
                                }
                                while (s = m[o++]) {
                                    if (s(a, t || k, n)) {
                                        r.push(a);
                                        break
                                    }
                                }
                                if (i) {
                                    C = h
                                }
                            }
                            if (y) {
                                if (a = !s && a) {
                                    u--
                                }
                                if (e) {
                                    l.push(a)
                                }
                            }
                        }
                        u += c;
                        if (y && c !== u) {
                            o = 0;
                            while (s = v[o++]) {
                                s(l, f, t, n)
                            }
                            if (e) {
                                if (u > 0) {
                                    while (c--) {
                                        if (!(l[c] || f[c])) {
                                            f[c] = P.call(r)
                                        }
                                    }
                                }
                                f = we(f)
                            }
                            D.apply(r, f);
                            if (i && !e && f.length > 0 && u + v.length > 1) {
                                ae.uniqueSort(r)
                            }
                        }
                        if (i) {
                            C = h;
                            w = p
                        }
                        return l
                    };
                return y ? se(e) : e
            }
            f = ae.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    a = S[e + " "];
                if (!a) {
                    if (!t) {
                        t = h(e)
                    }
                    n = t.length;
                    while (n--) {
                        a = ke(t[n]);
                        if (a[A]) {
                            r.push(a)
                        } else {
                            i.push(a)
                        }
                    }
                    a = S(e, Te(i, r));
                    a.selector = e
                }
                return a
            };
            g = ae.select = function(e, t, n, r) {
                var i, a, o, s, u, c = typeof e === "function" && e,
                    l = !r && h(e = c.selector || e);
                n = n || [];
                if (l.length === 1) {
                    a = l[0] = l[0].slice(0);
                    if (a.length > 2 && (o = a[0]).type === "ID" && t.nodeType === 9 && T && b.relative[a[1].type]) {
                        t = (b.find["ID"](o.matches[0].replace(Z, ee), t) || [])[0];
                        if (!t) {
                            return n
                        } else if (c) {
                            t = t.parentNode
                        }
                        e = e.slice(a.shift().value.length)
                    }
                    i = G["needsContext"].test(e) ? 0 : a.length;
                    while (i--) {
                        o = a[i];
                        if (b.relative[s = o.type]) {
                            break
                        }
                        if (u = b.find[s]) {
                            if (r = u(o.matches[0].replace(Z, ee), Y.test(a[0].type) && ge(t.parentNode) || t)) {
                                a.splice(i, 1);
                                e = r.length && ve(a);
                                if (!e) {
                                    D.apply(n, r);
                                    return n
                                }
                                break
                            }
                        }
                    }
                }(c || f(e, l))(r, t, !T, n, !t || Y.test(e) && ge(t.parentNode) || t);
                return n
            };
            d.sortStable = A.split("").sort(E).join("") === A;
            d.detectDuplicates = !!c;
            _();
            d.sortDetached = ue(function(e) {
                return e.compareDocumentPosition(k.createElement("fieldset")) & 1
            });
            if (!ue(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                ce("type|href|height|width", function(e, t, n) {
                    if (!n) {
                        return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!d.attributes || !ue(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                ce("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!ue(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                ce(R, function(e, t, n) {
                    var r;
                    if (!n) {
                        return e[t] === true ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                })
            }
            return ae
        }(k);
        A.find = b;
        A.expr = b.selectors;
        A.expr[":"] = A.expr.pseudos;
        A.uniqueSort = A.unique = b.uniqueSort;
        A.text = b.getText;
        A.isXMLDoc = b.isXML;
        A.contains = b.contains;
        A.escapeSelector = b.escape;
        var w = function(e, t, n) {
            var r = [],
                i = n !== undefined;
            while ((e = e[t]) && e.nodeType !== 9) {
                if (e.nodeType === 1) {
                    if (i && A(e).is(n)) {
                        break
                    }
                    r.push(e)
                }
            }
            return r
        };
        var _ = function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            }
            return n
        };
        var C = A.expr.match.needsContext;
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        var E = /^.[^:#\[\.,]*$/;

        function N(e, n, r) {
            if (A.isFunction(n)) {
                return A.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== r
                })
            }
            if (n.nodeType) {
                return A.grep(e, function(e) {
                    return e === n !== r
                })
            }
            if (typeof n !== "string") {
                return A.grep(e, function(e) {
                    return i.call(n, e) > -1 !== r
                })
            }
            if (E.test(n)) {
                return A.filter(n, e, r)
            }
            n = A.filter(n, e);
            return A.grep(e, function(e) {
                return i.call(n, e) > -1 !== r && e.nodeType === 1
            })
        }
        A.filter = function(e, t, n) {
            var r = t[0];
            if (n) {
                e = ":not(" + e + ")"
            }
            if (t.length === 1 && r.nodeType === 1) {
                return A.find.matchesSelector(r, e) ? [r] : []
            }
            return A.find.matches(e, A.grep(t, function(e) {
                return e.nodeType === 1
            }))
        };
        A.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if (typeof e !== "string") {
                    return this.pushStack(A(e).filter(function() {
                        for (t = 0; t < r; t++) {
                            if (A.contains(i[t], this)) {
                                return true
                            }
                        }
                    }))
                }
                n = this.pushStack([]);
                for (t = 0; t < r; t++) {
                    A.find(e, i[t], n)
                }
                return r > 1 ? A.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(N(this, e || [], false))
            },
            not: function(e) {
                return this.pushStack(N(this, e || [], true))
            },
            is: function(e) {
                return !!N(this, typeof e === "string" && C.test(e) ? A(e) : e || [], false).length
            }
        });
        var P, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            D = A.fn.init = function(e, t, n) {
                var r, i;
                if (!e) {
                    return this
                }
                n = n || P;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        r = [null, e, null]
                    } else {
                        r = L.exec(e)
                    }
                    if (r && (r[1] || !t)) {
                        if (r[1]) {
                            t = t instanceof A ? t[0] : t;
                            A.merge(this, A.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, true));
                            if (S.test(r[1]) && A.isPlainObject(t)) {
                                for (r in t) {
                                    if (A.isFunction(this[r])) {
                                        this[r](t[r])
                                    } else {
                                        this.attr(r, t[r])
                                    }
                                }
                            }
                            return this
                        } else {
                            i = T.getElementById(r[2]);
                            if (i) {
                                this[0] = i;
                                this.length = 1
                            }
                            return this
                        }
                    } else if (!t || t.jquery) {
                        return (t || n).find(e)
                    } else {
                        return this.constructor(t).find(e)
                    }
                } else if (e.nodeType) {
                    this[0] = e;
                    this.length = 1;
                    return this
                } else if (A.isFunction(e)) {
                    return n.ready !== undefined ? n.ready(e) : e(A)
                }
                return A.makeArray(e, this)
            };
        D.prototype = A.fn;
        P = A(T);
        var $ = /^(?:parents|prev(?:Until|All))/,
            j = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        A.fn.extend({
            has: function(e) {
                var t = A(e, this),
                    n = t.length;
                return this.filter(function() {
                    var e = 0;
                    for (; e < n; e++) {
                        if (A.contains(this, t[e])) {
                            return true
                        }
                    }
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    a = [],
                    o = typeof e !== "string" && A(e);
                if (!C.test(e)) {
                    for (; r < i; r++) {
                        for (n = this[r]; n && n !== t; n = n.parentNode) {
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && A.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                        }
                    }
                }
                return this.pushStack(a.length > 1 ? A.uniqueSort(a) : a)
            },
            index: function(e) {
                if (!e) {
                    return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }
                if (typeof e === "string") {
                    return i.call(A(e), this[0])
                }
                return i.call(this, e.jquery ? e[0] : e)
            },
            add: function(e, t) {
                return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        });

        function R(e, t) {
            while ((e = e[t]) && e.nodeType !== 1) {}
            return e
        }
        A.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return w(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return w(e, "parentNode", n)
            },
            next: function(e) {
                return R(e, "nextSibling")
            },
            prev: function(e) {
                return R(e, "previousSibling")
            },
            nextAll: function(e) {
                return w(e, "nextSibling")
            },
            prevAll: function(e) {
                return w(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return w(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return w(e, "previousSibling", n)
            },
            siblings: function(e) {
                return _((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return _(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || A.merge([], e.childNodes)
            }
        }, function(r, i) {
            A.fn[r] = function(e, t) {
                var n = A.map(this, i, e);
                if (r.slice(-5) !== "Until") {
                    t = e
                }
                if (t && typeof t === "string") {
                    n = A.filter(t, n)
                }
                if (this.length > 1) {
                    if (!j[r]) {
                        A.uniqueSort(n)
                    }
                    if ($.test(r)) {
                        n.reverse()
                    }
                }
                return this.pushStack(n)
            }
        });
        var O = /[^\x20\t\r\n\f]+/g;

        function q(e) {
            var n = {};
            A.each(e.match(O) || [], function(e, t) {
                n[t] = true
            });
            return n
        }
        A.Callbacks = function(r) {
            r = typeof r === "string" ? q(r) : A.extend({}, r);
            var n, e, t, i, a = [],
                o = [],
                s = -1,
                u = function() {
                    i = r.once;
                    t = n = true;
                    for (; o.length; s = -1) {
                        e = o.shift();
                        while (++s < a.length) {
                            if (a[s].apply(e[0], e[1]) === false && r.stopOnFalse) {
                                s = a.length;
                                e = false
                            }
                        }
                    }
                    if (!r.memory) {
                        e = false
                    }
                    n = false;
                    if (i) {
                        if (e) {
                            a = []
                        } else {
                            a = ""
                        }
                    }
                },
                c = {
                    add: function() {
                        if (a) {
                            if (e && !n) {
                                s = a.length - 1;
                                o.push(e)
                            }(function n(e) {
                                A.each(e, function(e, t) {
                                    if (A.isFunction(t)) {
                                        if (!r.unique || !c.has(t)) {
                                            a.push(t)
                                        }
                                    } else if (t && t.length && A.type(t) !== "string") {
                                        n(t)
                                    }
                                })
                            })(arguments);
                            if (e && !n) {
                                u()
                            }
                        }
                        return this
                    },
                    remove: function() {
                        A.each(arguments, function(e, t) {
                            var n;
                            while ((n = A.inArray(t, a, n)) > -1) {
                                a.splice(n, 1);
                                if (n <= s) {
                                    s--
                                }
                            }
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? A.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        if (a) {
                            a = []
                        }
                        return this
                    },
                    disable: function() {
                        i = o = [];
                        a = e = "";
                        return this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        i = o = [];
                        if (!e && !n) {
                            a = e = ""
                        }
                        return this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, t) {
                        if (!i) {
                            t = t || [];
                            t = [e, t.slice ? t.slice() : t];
                            o.push(t);
                            if (!n) {
                                u()
                            }
                        }
                        return this
                    },
                    fire: function() {
                        c.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!t
                    }
                };
            return c
        };

        function B(e) {
            return e
        }

        function H(e) {
            throw e
        }

        function M(e, t, n) {
            var r;
            try {
                if (e && A.isFunction(r = e.promise)) {
                    r.call(e).done(t).fail(n)
                } else if (e && A.isFunction(r = e.then)) {
                    r.call(e, t, n)
                } else {
                    t.call(undefined, e)
                }
            } catch (e) {
                n.call(undefined, e)
            }
        }
        A.extend({
            Deferred: function(e) {
                var a = [
                        ["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2],
                        ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            s.done(arguments).fail(arguments);
                            return this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var i = arguments;
                            return A.Deferred(function(r) {
                                A.each(a, function(e, t) {
                                    var n = A.isFunction(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        if (e && A.isFunction(e.promise)) {
                                            e.promise().progress(r.notify).done(r.resolve).fail(r.reject)
                                        } else {
                                            r[t[0] + "With"](this, n ? [e] : arguments)
                                        }
                                    })
                                });
                                i = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var u = 0;

                            function c(i, a, o, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (i < u) {
                                                return
                                            }
                                            e = o.apply(n, r);
                                            if (e === a.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                            if (A.isFunction(t)) {
                                                if (s) {
                                                    t.call(e, c(u, a, B, s), c(u, a, H, s))
                                                } else {
                                                    u++;
                                                    t.call(e, c(u, a, B, s), c(u, a, H, s), c(u, a, B, a.notifyWith))
                                                }
                                            } else {
                                                if (o !== B) {
                                                    n = undefined;
                                                    r = [e]
                                                }(s || a.resolveWith)(n, r)
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                if (A.Deferred.exceptionHook) {
                                                    A.Deferred.exceptionHook(e, t.stackTrace)
                                                }
                                                if (i + 1 >= u) {
                                                    if (o !== H) {
                                                        n = undefined;
                                                        r = [e]
                                                    }
                                                    a.rejectWith(n, r)
                                                }
                                            }
                                        };
                                    if (i) {
                                        t()
                                    } else {
                                        if (A.Deferred.getStackHook) {
                                            t.stackTrace = A.Deferred.getStackHook()
                                        }
                                        k.setTimeout(t)
                                    }
                                }
                            }
                            return A.Deferred(function(e) {
                                a[0][3].add(c(0, e, A.isFunction(r) ? r : B, e.notifyWith));
                                a[1][3].add(c(0, e, A.isFunction(t) ? t : B));
                                a[2][3].add(c(0, e, A.isFunction(n) ? n : H))
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? A.extend(e, o) : o
                        }
                    },
                    s = {};
                A.each(a, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    o[t[1]] = n.add;
                    if (r) {
                        n.add(function() {
                            i = r
                        }, a[3 - e][2].disable, a[0][2].lock)
                    }
                    n.add(t[3].fire);
                    s[t[0]] = function() {
                        s[t[0] + "With"](this === s ? undefined : this, arguments);
                        return this
                    };
                    s[t[0] + "With"] = n.fireWith
                });
                o.promise(s);
                if (e) {
                    e.call(s, s)
                }
                return s
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    a = A.Deferred(),
                    o = function(t) {
                        return function(e) {
                            r[t] = this;
                            i[t] = arguments.length > 1 ? s.call(arguments) : e;
                            if (!--n) {
                                a.resolveWith(r, i)
                            }
                        }
                    };
                if (n <= 1) {
                    M(e, a.done(o(t)).resolve, a.reject);
                    if (a.state() === "pending" || A.isFunction(i[t] && i[t].then)) {
                        return a.then()
                    }
                }
                while (t--) {
                    M(i[t], o(t), a.reject)
                }
                return a.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        A.Deferred.exceptionHook = function(e, t) {
            if (k.console && k.console.warn && e && F.test(e.name)) {
                k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
        };
        A.readyException = function(e) {
            k.setTimeout(function() {
                throw e
            })
        };
        var I = A.Deferred();
        A.fn.ready = function(e) {
            I.then(e).catch(function(e) {
                A.readyException(e)
            });
            return this
        };
        A.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    A.readyWait++
                } else {
                    A.ready(true)
                }
            },
            ready: function(e) {
                if (e === true ? --A.readyWait : A.isReady) {
                    return
                }
                A.isReady = true;
                if (e !== true && --A.readyWait > 0) {
                    return
                }
                I.resolveWith(T, [A])
            }
        });
        A.ready.then = I.then;

        function U() {
            T.removeEventListener("DOMContentLoaded", U);
            k.removeEventListener("load", U);
            A.ready()
        }
        if (T.readyState === "complete" || T.readyState !== "loading" && !T.documentElement.doScroll) {
            k.setTimeout(A.ready)
        } else {
            T.addEventListener("DOMContentLoaded", U);
            k.addEventListener("load", U)
        }
        var W = function(e, t, n, r, i, a, o) {
            var s = 0,
                u = e.length,
                c = n == null;
            if (A.type(n) === "object") {
                i = true;
                for (s in n) {
                    W(e, t, s, n[s], true, a, o)
                }
            } else if (r !== undefined) {
                i = true;
                if (!A.isFunction(r)) {
                    o = true
                }
                if (c) {
                    if (o) {
                        t.call(e, r);
                        t = null
                    } else {
                        c = t;
                        t = function(e, t, n) {
                            return c.call(A(e), n)
                        }
                    }
                }
                if (t) {
                    for (; s < u; s++) {
                        t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)))
                    }
                }
            }
            if (i) {
                return e
            }
            if (c) {
                return t.call(e)
            }
            return u ? t(e[0], n) : a
        };
        var V = function(e) {
            return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
        };

        function K() {
            this.expando = A.expando + K.uid++
        }
        K.uid = 1;
        K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                if (!t) {
                    t = {};
                    if (V(e)) {
                        if (e.nodeType) {
                            e[this.expando] = t
                        } else {
                            Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: true
                            })
                        }
                    }
                }
                return t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if (typeof t === "string") {
                    i[A.camelCase(t)] = n
                } else {
                    for (r in t) {
                        i[A.camelCase(r)] = t[r]
                    }
                }
                return i
            },
            get: function(e, t) {
                return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][A.camelCase(t)]
            },
            access: function(e, t, n) {
                if (t === undefined || t && typeof t === "string" && n === undefined) {
                    return this.get(e, t)
                }
                this.set(e, t, n);
                return n !== undefined ? n : t
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (r === undefined) {
                    return
                }
                if (t !== undefined) {
                    if (A.isArray(t)) {
                        t = t.map(A.camelCase)
                    } else {
                        t = A.camelCase(t);
                        t = t in r ? [t] : t.match(O) || []
                    }
                    n = t.length;
                    while (n--) {
                        delete r[t[n]]
                    }
                }
                if (t === undefined || A.isEmptyObject(r)) {
                    if (e.nodeType) {
                        e[this.expando] = undefined
                    } else {
                        delete e[this.expando]
                    }
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return t !== undefined && !A.isEmptyObject(t)
            }
        };
        var G = new K;
        var z = new K;
        var X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            J = /[A-Z]/g;

        function Q(e) {
            if (e === "true") {
                return true
            }
            if (e === "false") {
                return false
            }
            if (e === "null") {
                return null
            }
            if (e === +e + "") {
                return +e
            }
            if (X.test(e)) {
                return JSON.parse(e)
            }
            return e
        }

        function Y(e, t, n) {
            var r;
            if (n === undefined && e.nodeType === 1) {
                r = "data-" + t.replace(J, "-$&").toLowerCase();
                n = e.getAttribute(r);
                if (typeof n === "string") {
                    try {
                        n = Q(n)
                    } catch (e) {}
                    z.set(e, t, n)
                } else {
                    n = undefined
                }
            }
            return n
        }
        A.extend({
            hasData: function(e) {
                return z.hasData(e) || G.hasData(e)
            },
            data: function(e, t, n) {
                return z.access(e, t, n)
            },
            removeData: function(e, t) {
                z.remove(e, t)
            },
            _data: function(e, t, n) {
                return G.access(e, t, n)
            },
            _removeData: function(e, t) {
                G.remove(e, t)
            }
        });
        A.fn.extend({
            data: function(n, e) {
                var t, r, i, a = this[0],
                    o = a && a.attributes;
                if (n === undefined) {
                    if (this.length) {
                        i = z.get(a);
                        if (a.nodeType === 1 && !G.get(a, "hasDataAttrs")) {
                            t = o.length;
                            while (t--) {
                                if (o[t]) {
                                    r = o[t].name;
                                    if (r.indexOf("data-") === 0) {
                                        r = A.camelCase(r.slice(5));
                                        Y(a, r, i[r])
                                    }
                                }
                            }
                            G.set(a, "hasDataAttrs", true)
                        }
                    }
                    return i
                }
                if (typeof n === "object") {
                    return this.each(function() {
                        z.set(this, n)
                    })
                }
                return W(this, function(e) {
                    var t;
                    if (a && e === undefined) {
                        t = z.get(a, n);
                        if (t !== undefined) {
                            return t
                        }
                        t = Y(a, n);
                        if (t !== undefined) {
                            return t
                        }
                        return
                    }
                    this.each(function() {
                        z.set(this, n, e)
                    })
                }, null, e, arguments.length > 1, null, true)
            },
            removeData: function(e) {
                return this.each(function() {
                    z.remove(this, e)
                })
            }
        });
        A.extend({
            queue: function(e, t, n) {
                var r;
                if (e) {
                    t = (t || "fx") + "queue";
                    r = G.get(e, t);
                    if (n) {
                        if (!r || A.isArray(n)) {
                            r = G.access(e, t, A.makeArray(n))
                        } else {
                            r.push(n)
                        }
                    }
                    return r || []
                }
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = A.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    a = A._queueHooks(e, t),
                    o = function() {
                        A.dequeue(e, t)
                    };
                if (i === "inprogress") {
                    i = n.shift();
                    r--
                }
                if (i) {
                    if (t === "fx") {
                        n.unshift("inprogress")
                    }
                    delete a.stop;
                    i.call(e, o, a)
                }
                if (!r && a) {
                    a.empty.fire()
                }
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return G.get(e, n) || G.access(e, n, {
                    empty: A.Callbacks("once memory").add(function() {
                        G.remove(e, [t + "queue", n])
                    })
                })
            }
        });
        A.fn.extend({
            queue: function(t, n) {
                var e = 2;
                if (typeof t !== "string") {
                    n = t;
                    t = "fx";
                    e--
                }
                if (arguments.length < e) {
                    return A.queue(this[0], t)
                }
                return n === undefined ? this : this.each(function() {
                    var e = A.queue(this, t, n);
                    A._queueHooks(this, t);
                    if (t === "fx" && e[0] !== "inprogress") {
                        A.dequeue(this, t)
                    }
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    A.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = A.Deferred(),
                    a = this,
                    o = this.length,
                    s = function() {
                        if (!--r) {
                            i.resolveWith(a, [a])
                        }
                    };
                if (typeof e !== "string") {
                    t = e;
                    e = undefined
                }
                e = e || "fx";
                while (o--) {
                    n = G.get(a[o], e + "queueHooks");
                    if (n && n.empty) {
                        r++;
                        n.empty.add(s)
                    }
                }
                s();
                return i.promise(t)
            }
        });
        var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i");
        var te = ["Top", "Right", "Bottom", "Left"];
        var ne = function(e, t) {
            e = t || e;
            return e.style.display === "none" || e.style.display === "" && A.contains(e.ownerDocument, e) && A.css(e, "display") === "none"
        };
        var re = function(e, t, n, r) {
            var i, a, o = {};
            for (a in t) {
                o[a] = e.style[a];
                e.style[a] = t[a]
            }
            i = n.apply(e, r || []);
            for (a in t) {
                e.style[a] = o[a]
            }
            return i
        };

        function ie(e, t, n, r) {
            var i, a = 1,
                o = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return A.css(e, t, "")
                },
                u = s(),
                c = n && n[3] || (A.cssNumber[t] ? "" : "px"),
                l = (A.cssNumber[t] || c !== "px" && +u) && ee.exec(A.css(e, t));
            if (l && l[3] !== c) {
                c = c || l[3];
                n = n || [];
                l = +u || 1;
                do {
                    a = a || ".5";
                    l = l / a;
                    A.style(e, t, l + c)
                } while (a !== (a = s() / u) && a !== 1 && --o)
            }
            if (n) {
                l = +l || +u || 0;
                i = n[1] ? l + (n[1] + 1) * n[2] : +n[2];
                if (r) {
                    r.unit = c;
                    r.start = l;
                    r.end = i
                }
            }
            return i
        }
        var ae = {};

        function oe(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = ae[r];
            if (i) {
                return i
            }
            t = n.body.appendChild(n.createElement(r));
            i = A.css(t, "display");
            t.parentNode.removeChild(t);
            if (i === "none") {
                i = "block"
            }
            ae[r] = i;
            return i
        }

        function se(e, t) {
            var n, r, i = [],
                a = 0,
                o = e.length;
            for (; a < o; a++) {
                r = e[a];
                if (!r.style) {
                    continue
                }
                n = r.style.display;
                if (t) {
                    if (n === "none") {
                        i[a] = G.get(r, "display") || null;
                        if (!i[a]) {
                            r.style.display = ""
                        }
                    }
                    if (r.style.display === "" && ne(r)) {
                        i[a] = oe(r)
                    }
                } else {
                    if (n !== "none") {
                        i[a] = "none";
                        G.set(r, "display", n)
                    }
                }
            }
            for (a = 0; a < o; a++) {
                if (i[a] != null) {
                    e[a].style.display = i[a]
                }
            }
            return e
        }
        A.fn.extend({
            show: function() {
                return se(this, true)
            },
            hide: function() {
                return se(this)
            },
            toggle: function(e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide()
                }
                return this.each(function() {
                    if (ne(this)) {
                        A(this).show()
                    } else {
                        A(this).hide()
                    }
                })
            }
        });
        var ue = /^(?:checkbox|radio)$/i;
        var ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;
        var le = /^$|\/(?:java|ecma)script/i;
        var fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        fe.optgroup = fe.option;
        fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead;
        fe.th = fe.td;

        function pe(e, t) {
            var n;
            if (typeof e.getElementsByTagName !== "undefined") {
                n = e.getElementsByTagName(t || "*")
            } else if (typeof e.querySelectorAll !== "undefined") {
                n = e.querySelectorAll(t || "*")
            } else {
                n = []
            }
            if (t === undefined || t && A.nodeName(e, t)) {
                return A.merge([e], n)
            }
            return n
        }

        function de(e, t) {
            var n = 0,
                r = e.length;
            for (; n < r; n++) {
                G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
            }
        }
        var he = /<|&#?\w+;/;

        function ge(e, t, n, r, i) {
            var a, o, s, u, c, l, f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
            for (; d < h; d++) {
                a = e[d];
                if (a || a === 0) {
                    if (A.type(a) === "object") {
                        A.merge(p, a.nodeType ? [a] : a)
                    } else if (!he.test(a)) {
                        p.push(t.createTextNode(a))
                    } else {
                        o = o || f.appendChild(t.createElement("div"));
                        s = (ce.exec(a) || ["", ""])[1].toLowerCase();
                        u = fe[s] || fe._default;
                        o.innerHTML = u[1] + A.htmlPrefilter(a) + u[2];
                        l = u[0];
                        while (l--) {
                            o = o.lastChild
                        }
                        A.merge(p, o.childNodes);
                        o = f.firstChild;
                        o.textContent = ""
                    }
                }
            }
            f.textContent = "";
            d = 0;
            while (a = p[d++]) {
                if (r && A.inArray(a, r) > -1) {
                    if (i) {
                        i.push(a)
                    }
                    continue
                }
                c = A.contains(a.ownerDocument, a);
                o = pe(f.appendChild(a), "script");
                if (c) {
                    de(o)
                }
                if (n) {
                    l = 0;
                    while (a = o[l++]) {
                        if (le.test(a.type || "")) {
                            n.push(a)
                        }
                    }
                }
            }
            return f
        }(function() {
            var e = T.createDocumentFragment(),
                t = e.appendChild(T.createElement("div")),
                n = T.createElement("input");
            n.setAttribute("type", "radio");
            n.setAttribute("checked", "checked");
            n.setAttribute("name", "t");
            t.appendChild(n);
            m.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
            t.innerHTML = "<textarea>x</textarea>";
            m.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
        })();
        var me = T.documentElement;
        var ve = /^key/,
            ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            xe = /^([^.]*)(?:\.(.+)|)/;

        function be() {
            return true
        }

        function we() {
            return false
        }

        function _e() {
            try {
                return T.activeElement
            } catch (e) {}
        }

        function ke(e, t, n, r, i, a) {
            var o, s;
            if (typeof t === "object") {
                if (typeof n !== "string") {
                    r = r || n;
                    n = undefined
                }
                for (s in t) {
                    ke(e, s, n, r, t[s], a)
                }
                return e
            }
            if (r == null && i == null) {
                i = n;
                r = n = undefined
            } else if (i == null) {
                if (typeof n === "string") {
                    i = r;
                    r = undefined
                } else {
                    i = r;
                    r = n;
                    n = undefined
                }
            }
            if (i === false) {
                i = we
            } else if (!i) {
                return e
            }
            if (a === 1) {
                o = i;
                i = function(e) {
                    A().off(e);
                    return o.apply(this, arguments)
                };
                i.guid = o.guid || (o.guid = A.guid++)
            }
            return e.each(function() {
                A.event.add(this, t, i, r, n)
            })
        }
        A.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var a, o, s, u, c, l, f, p, d, h, g, m = G.get(t);
                if (!m) {
                    return
                }
                if (n.handler) {
                    a = n;
                    n = a.handler;
                    i = a.selector
                }
                if (i) {
                    A.find.matchesSelector(me, i)
                }
                if (!n.guid) {
                    n.guid = A.guid++
                }
                if (!(u = m.events)) {
                    u = m.events = {}
                }
                if (!(o = m.handle)) {
                    o = m.handle = function(e) {
                        return typeof A !== "undefined" && A.event.triggered !== e.type ? A.event.dispatch.apply(t, arguments) : undefined
                    }
                }
                e = (e || "").match(O) || [""];
                c = e.length;
                while (c--) {
                    s = xe.exec(e[c]) || [];
                    d = g = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!d) {
                        continue
                    }
                    f = A.event.special[d] || {};
                    d = (i ? f.delegateType : f.bindType) || d;
                    f = A.event.special[d] || {};
                    l = A.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && A.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, a);
                    if (!(p = u[d])) {
                        p = u[d] = [];
                        p.delegateCount = 0;
                        if (!f.setup || f.setup.call(t, r, h, o) === false) {
                            if (t.addEventListener) {
                                t.addEventListener(d, o)
                            }
                        }
                    }
                    if (f.add) {
                        f.add.call(t, l);
                        if (!l.handler.guid) {
                            l.handler.guid = n.guid
                        }
                    }
                    if (i) {
                        p.splice(p.delegateCount++, 0, l)
                    } else {
                        p.push(l)
                    }
                    A.event.global[d] = true
                }
            },
            remove: function(e, t, n, r, i) {
                var a, o, s, u, c, l, f, p, d, h, g, m = G.hasData(e) && G.get(e);
                if (!m || !(u = m.events)) {
                    return
                }
                t = (t || "").match(O) || [""];
                c = t.length;
                while (c--) {
                    s = xe.exec(t[c]) || [];
                    d = g = s[1];
                    h = (s[2] || "").split(".").sort();
                    if (!d) {
                        for (d in u) {
                            A.event.remove(e, d + t[c], n, r, true)
                        }
                        continue
                    }
                    f = A.event.special[d] || {};
                    d = (r ? f.delegateType : f.bindType) || d;
                    p = u[d] || [];
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    o = a = p.length;
                    while (a--) {
                        l = p[a];
                        if ((i || g === l.origType) && (!n || n.guid === l.guid) && (!s || s.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector)) {
                            p.splice(a, 1);
                            if (l.selector) {
                                p.delegateCount--
                            }
                            if (f.remove) {
                                f.remove.call(e, l)
                            }
                        }
                    }
                    if (o && !p.length) {
                        if (!f.teardown || f.teardown.call(e, h, m.handle) === false) {
                            A.removeEvent(e, d, m.handle)
                        }
                        delete u[d]
                    }
                }
                if (A.isEmptyObject(u)) {
                    G.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t = A.event.fix(e);
                var n, r, i, a, o, s, u = new Array(arguments.length),
                    c = (G.get(this, "events") || {})[t.type] || [],
                    l = A.event.special[t.type] || {};
                u[0] = t;
                for (n = 1; n < arguments.length; n++) {
                    u[n] = arguments[n]
                }
                t.delegateTarget = this;
                if (l.preDispatch && l.preDispatch.call(this, t) === false) {
                    return
                }
                s = A.event.handlers.call(this, t, c);
                n = 0;
                while ((a = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = a.elem;
                    r = 0;
                    while ((o = a.handlers[r++]) && !t.isImmediatePropagationStopped()) {
                        if (!t.rnamespace || t.rnamespace.test(o.namespace)) {
                            t.handleObj = o;
                            t.data = o.data;
                            i = ((A.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, u);
                            if (i !== undefined) {
                                if ((t.result = i) === false) {
                                    t.preventDefault();
                                    t.stopPropagation()
                                }
                            }
                        }
                    }
                }
                if (l.postDispatch) {
                    l.postDispatch.call(this, t)
                }
                return t.result
            },
            handlers: function(e, t) {
                var n, r, i, a, o, s = [],
                    u = t.delegateCount,
                    c = e.target;
                if (u && c.nodeType && !(e.type === "click" && e.button >= 1)) {
                    for (; c !== this; c = c.parentNode || this) {
                        if (c.nodeType === 1 && !(e.type === "click" && c.disabled === true)) {
                            a = [];
                            o = {};
                            for (n = 0; n < u; n++) {
                                r = t[n];
                                i = r.selector + " ";
                                if (o[i] === undefined) {
                                    o[i] = r.needsContext ? A(i, this).index(c) > -1 : A.find(i, this, null, [c]).length
                                }
                                if (o[i]) {
                                    a.push(r)
                                }
                            }
                            if (a.length) {
                                s.push({
                                    elem: c,
                                    handlers: a
                                })
                            }
                        }
                    }
                }
                c = this;
                if (u < t.length) {
                    s.push({
                        elem: c,
                        handlers: t.slice(u)
                    })
                }
                return s
            },
            addProp: function(t, e) {
                Object.defineProperty(A.Event.prototype, t, {
                    enumerable: true,
                    configurable: true,
                    get: A.isFunction(e) ? function() {
                        if (this.originalEvent) {
                            return e(this.originalEvent)
                        }
                    } : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[t]
                        }
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[A.expando] ? e : new A.Event(e)
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== _e() && this.focus) {
                            this.focus();
                            return false
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === _e() && this.blur) {
                            this.blur();
                            return false
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && A.nodeName(this, "input")) {
                            this.click();
                            return false
                        }
                    },
                    _default: function(e) {
                        return A.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        if (e.result !== undefined && e.originalEvent) {
                            e.originalEvent.returnValue = e.result
                        }
                    }
                }
            }
        };
        A.removeEvent = function(e, t, n) {
            if (e.removeEventListener) {
                e.removeEventListener(t, n)
            }
        };
        A.Event = function(e, t) {
            if (!(this instanceof A.Event)) {
                return new A.Event(e, t)
            }
            if (e && e.type) {
                this.originalEvent = e;
                this.type = e.type;
                this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? be : we;
                this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                this.currentTarget = e.currentTarget;
                this.relatedTarget = e.relatedTarget
            } else {
                this.type = e
            }
            if (t) {
                A.extend(this, t)
            }
            this.timeStamp = e && e.timeStamp || A.now();
            this[A.expando] = true
        };
        A.Event.prototype = {
            constructor: A.Event,
            isDefaultPrevented: we,
            isPropagationStopped: we,
            isImmediatePropagationStopped: we,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = be;
                if (e && !this.isSimulated) {
                    e.preventDefault()
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = be;
                if (e && !this.isSimulated) {
                    e.stopPropagation()
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = be;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation()
                }
                this.stopPropagation()
            }
        };
        A.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            char: true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(e) {
                var t = e.button;
                if (e.which == null && ve.test(e.type)) {
                    return e.charCode != null ? e.charCode : e.keyCode
                }
                if (!e.which && t !== undefined && ye.test(e.type)) {
                    if (t & 1) {
                        return 1
                    }
                    if (t & 2) {
                        return 3
                    }
                    if (t & 4) {
                        return 2
                    }
                    return 0
                }
                return e.which
            }
        }, A.event.addProp);
        A.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, a) {
            A.event.special[e] = {
                delegateType: a,
                bindType: a,
                handle: function(e) {
                    var t, n = this,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    if (!r || r !== n && !A.contains(n, r)) {
                        e.type = i.origType;
                        t = i.handler.apply(this, arguments);
                        e.type = a
                    }
                    return t
                }
            }
        });
        A.fn.extend({
            on: function(e, t, n, r) {
                return ke(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return ke(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) {
                    r = e.handleObj;
                    A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                    return this
                }
                if (typeof e === "object") {
                    for (i in e) {
                        this.off(i, t, e[i])
                    }
                    return this
                }
                if (t === false || typeof t === "function") {
                    n = t;
                    t = undefined
                }
                if (n === false) {
                    n = we
                }
                return this.each(function() {
                    A.event.remove(this, e, n, t)
                })
            }
        });
        var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ae = /<script|<style|<link/i,
            Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Se = /^true\/(.*)/,
            Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ne(e, t) {
            if (A.nodeName(e, "table") && A.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                return e.getElementsByTagName("tbody")[0] || e
            }
            return e
        }

        function Pe(e) {
            e.type = (e.getAttribute("type") !== null) + "/" + e.type;
            return e
        }

        function Le(e) {
            var t = Se.exec(e.type);
            if (t) {
                e.type = t[1]
            } else {
                e.removeAttribute("type")
            }
            return e
        }

        function De(e, t) {
            var n, r, i, a, o, s, u, c;
            if (t.nodeType !== 1) {
                return
            }
            if (G.hasData(e)) {
                a = G.access(e);
                o = G.set(t, a);
                c = a.events;
                if (c) {
                    delete o.handle;
                    o.events = {};
                    for (i in c) {
                        for (n = 0, r = c[i].length; n < r; n++) {
                            A.event.add(t, i, c[i][n])
                        }
                    }
                }
            }
            if (z.hasData(e)) {
                s = z.access(e);
                u = A.extend({}, s);
                z.set(t, u)
            }
        }

        function $e(e, t) {
            var n = t.nodeName.toLowerCase();
            if (n === "input" && ue.test(e.type)) {
                t.checked = e.checked
            } else if (n === "input" || n === "textarea") {
                t.defaultValue = e.defaultValue
            }
        }

        function je(n, r, i, a) {
            r = g.apply([], r);
            var e, t, o, s, u, c, l = 0,
                f = n.length,
                p = f - 1,
                d = r[0],
                h = A.isFunction(d);
            if (h || f > 1 && typeof d === "string" && !m.checkClone && Ce.test(d)) {
                return n.each(function(e) {
                    var t = n.eq(e);
                    if (h) {
                        r[0] = d.call(this, e, t.html())
                    }
                    je(t, r, i, a)
                })
            }
            if (f) {
                e = ge(r, n[0].ownerDocument, false, n, a);
                t = e.firstChild;
                if (e.childNodes.length === 1) {
                    e = t
                }
                if (t || a) {
                    o = A.map(pe(e, "script"), Pe);
                    s = o.length;
                    for (; l < f; l++) {
                        u = e;
                        if (l !== p) {
                            u = A.clone(u, true, true);
                            if (s) {
                                A.merge(o, pe(u, "script"))
                            }
                        }
                        i.call(n[l], u, l)
                    }
                    if (s) {
                        c = o[o.length - 1].ownerDocument;
                        A.map(o, Le);
                        for (l = 0; l < s; l++) {
                            u = o[l];
                            if (le.test(u.type || "") && !G.access(u, "globalEval") && A.contains(c, u)) {
                                if (u.src) {
                                    if (A._evalUrl) {
                                        A._evalUrl(u.src)
                                    }
                                } else {
                                    v(u.textContent.replace(Ee, ""), c)
                                }
                            }
                        }
                    }
                }
            }
            return n
        }

        function Re(e, t, n) {
            var r, i = t ? A.filter(t, e) : e,
                a = 0;
            for (;
                (r = i[a]) != null; a++) {
                if (!n && r.nodeType === 1) {
                    A.cleanData(pe(r))
                }
                if (r.parentNode) {
                    if (n && A.contains(r.ownerDocument, r)) {
                        de(pe(r, "script"))
                    }
                    r.parentNode.removeChild(r)
                }
            }
            return e
        }
        A.extend({
            htmlPrefilter: function(e) {
                return e.replace(Te, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, a, o, s = e.cloneNode(true),
                    u = A.contains(e.ownerDocument, e);
                if (!m.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !A.isXMLDoc(e)) {
                    o = pe(s);
                    a = pe(e);
                    for (r = 0, i = a.length; r < i; r++) {
                        $e(a[r], o[r])
                    }
                }
                if (t) {
                    if (n) {
                        a = a || pe(e);
                        o = o || pe(s);
                        for (r = 0, i = a.length; r < i; r++) {
                            De(a[r], o[r])
                        }
                    } else {
                        De(e, s)
                    }
                }
                o = pe(s, "script");
                if (o.length > 0) {
                    de(o, !u && pe(e, "script"))
                }
                return s
            },
            cleanData: function(e) {
                var t, n, r, i = A.event.special,
                    a = 0;
                for (;
                    (n = e[a]) !== undefined; a++) {
                    if (V(n)) {
                        if (t = n[G.expando]) {
                            if (t.events) {
                                for (r in t.events) {
                                    if (i[r]) {
                                        A.event.remove(n, r)
                                    } else {
                                        A.removeEvent(n, r, t.handle)
                                    }
                                }
                            }
                            n[G.expando] = undefined
                        }
                        if (n[z.expando]) {
                            n[z.expando] = undefined
                        }
                    }
                }
            }
        });
        A.fn.extend({
            detach: function(e) {
                return Re(this, e, true)
            },
            remove: function(e) {
                return Re(this, e)
            },
            text: function(e) {
                return W(this, function(e) {
                    return e === undefined ? A.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = e
                        }
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return je(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ne(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return je(this, arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = Ne(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return je(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this)
                    }
                })
            },
            after: function() {
                return je(this, arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    }
                })
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    if (e.nodeType === 1) {
                        A.cleanData(pe(e, false));
                        e.textContent = ""
                    }
                }
                return this
            },
            clone: function(e, t) {
                e = e == null ? false : e;
                t = t == null ? e : t;
                return this.map(function() {
                    return A.clone(this, e, t)
                })
            },
            html: function(e) {
                return W(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (e === undefined && t.nodeType === 1) {
                        return t.innerHTML
                    }
                    if (typeof e === "string" && !Ae.test(e) && !fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = A.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) {
                                t = this[n] || {};
                                if (t.nodeType === 1) {
                                    A.cleanData(pe(t, false));
                                    t.innerHTML = e
                                }
                            }
                            t = 0
                        } catch (e) {}
                    }
                    if (t) {
                        this.empty().append(e)
                    }
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return je(this, arguments, function(e) {
                    var t = this.parentNode;
                    if (A.inArray(this, n) < 0) {
                        A.cleanData(pe(this));
                        if (t) {
                            t.replaceChild(e, this)
                        }
                    }
                }, n)
            }
        });
        A.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, o) {
            A.fn[e] = function(e) {
                var t, n = [],
                    r = A(e),
                    i = r.length - 1,
                    a = 0;
                for (; a <= i; a++) {
                    t = a === i ? this : this.clone(true);
                    A(r[a])[o](t);
                    u.apply(n, t.get())
                }
                return this.pushStack(n)
            }
        });
        var Oe = /^margin/;
        var qe = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i");
        var Be = function(e) {
            var t = e.ownerDocument.defaultView;
            if (!t || !t.opener) {
                t = k
            }
            return t.getComputedStyle(e)
        };
        (function() {
            function e() {
                if (!o) {
                    return
                }
                o.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
                o.innerHTML = "";
                me.appendChild(a);
                var e = k.getComputedStyle(o);
                t = e.top !== "1%";
                i = e.marginLeft === "2px";
                n = e.width === "4px";
                o.style.marginRight = "50%";
                r = e.marginRight === "4px";
                me.removeChild(a);
                o = null
            }
            var t, n, r, i, a = T.createElement("div"),
                o = T.createElement("div");
            if (!o.style) {
                return
            }
            o.style.backgroundClip = "content-box";
            o.cloneNode(true).style.backgroundClip = "";
            m.clearCloneStyle = o.style.backgroundClip === "content-box";
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
            a.appendChild(o);
            A.extend(m, {
                pixelPosition: function() {
                    e();
                    return t
                },
                boxSizingReliable: function() {
                    e();
                    return n
                },
                pixelMarginRight: function() {
                    e();
                    return r
                },
                reliableMarginLeft: function() {
                    e();
                    return i
                }
            })
        })();

        function He(e, t, n) {
            var r, i, a, o, s = e.style;
            n = n || Be(e);
            if (n) {
                o = n.getPropertyValue(t) || n[t];
                if (o === "" && !A.contains(e.ownerDocument, e)) {
                    o = A.style(e, t)
                }
                if (!m.pixelMarginRight() && qe.test(o) && Oe.test(t)) {
                    r = s.width;
                    i = s.minWidth;
                    a = s.maxWidth;
                    s.minWidth = s.maxWidth = s.width = o;
                    o = n.width;
                    s.width = r;
                    s.minWidth = i;
                    s.maxWidth = a
                }
            }
            return o !== undefined ? o + "" : o
        }

        function Me(e, t) {
            return {
                get: function() {
                    if (e()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }
        var Fe = /^(none|table(?!-c[ea]).+)/,
            Ie = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ue = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            We = ["Webkit", "Moz", "ms"],
            Ve = T.createElement("div").style;

        function Ke(e) {
            if (e in Ve) {
                return e
            }
            var t = e[0].toUpperCase() + e.slice(1),
                n = We.length;
            while (n--) {
                e = We[n] + t;
                if (e in Ve) {
                    return e
                }
            }
        }

        function Ge(e, t, n) {
            var r = ee.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function ze(e, t, n, r, i) {
            var a, o = 0;
            if (n === (r ? "border" : "content")) {
                a = 4
            } else {
                a = t === "width" ? 1 : 0
            }
            for (; a < 4; a += 2) {
                if (n === "margin") {
                    o += A.css(e, n + te[a], true, i)
                }
                if (r) {
                    if (n === "content") {
                        o -= A.css(e, "padding" + te[a], true, i)
                    }
                    if (n !== "margin") {
                        o -= A.css(e, "border" + te[a] + "Width", true, i)
                    }
                } else {
                    o += A.css(e, "padding" + te[a], true, i);
                    if (n !== "padding") {
                        o += A.css(e, "border" + te[a] + "Width", true, i)
                    }
                }
            }
            return o
        }

        function Xe(e, t, n) {
            var r, i = true,
                a = Be(e),
                o = A.css(e, "boxSizing", false, a) === "border-box";
            if (e.getClientRects().length) {
                r = e.getBoundingClientRect()[t]
            }
            if (r <= 0 || r == null) {
                r = He(e, t, a);
                if (r < 0 || r == null) {
                    r = e.style[t]
                }
                if (qe.test(r)) {
                    return r
                }
                i = o && (m.boxSizingReliable() || r === e.style[t]);
                r = parseFloat(r) || 0
            }
            return r + ze(e, t, n || (o ? "border" : "content"), i, a) + "px"
        }
        A.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = He(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: true,
                columnCount: true,
                fillOpacity: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                    return
                }
                var i, a, o, s = A.camelCase(t),
                    u = e.style;
                t = A.cssProps[s] || (A.cssProps[s] = Ke(s) || s);
                o = A.cssHooks[t] || A.cssHooks[s];
                if (n !== undefined) {
                    a = typeof n;
                    if (a === "string" && (i = ee.exec(n)) && i[1]) {
                        n = ie(e, t, i);
                        a = "number"
                    }
                    if (n == null || n !== n) {
                        return
                    }
                    if (a === "number") {
                        n += i && i[3] || (A.cssNumber[s] ? "" : "px")
                    }
                    if (!m.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                        u[t] = "inherit"
                    }
                    if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) {
                        u[t] = n
                    }
                } else {
                    if (o && "get" in o && (i = o.get(e, false, r)) !== undefined) {
                        return i
                    }
                    return u[t]
                }
            },
            css: function(e, t, n, r) {
                var i, a, o, s = A.camelCase(t);
                t = A.cssProps[s] || (A.cssProps[s] = Ke(s) || s);
                o = A.cssHooks[t] || A.cssHooks[s];
                if (o && "get" in o) {
                    i = o.get(e, true, n)
                }
                if (i === undefined) {
                    i = He(e, t, r)
                }
                if (i === "normal" && t in Ue) {
                    i = Ue[t]
                }
                if (n === "" || n) {
                    a = parseFloat(i);
                    return n === true || isFinite(a) ? a || 0 : i
                }
                return i
            }
        });
        A.each(["height", "width"], function(e, o) {
            A.cssHooks[o] = {
                get: function(e, t, n) {
                    if (t) {
                        return Fe.test(A.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? re(e, Ie, function() {
                            return Xe(e, o, n)
                        }) : Xe(e, o, n)
                    }
                },
                set: function(e, t, n) {
                    var r, i = n && Be(e),
                        a = n && ze(e, o, n, A.css(e, "boxSizing", false, i) === "border-box", i);
                    if (a && (r = ee.exec(t)) && (r[3] || "px") !== "px") {
                        e.style[o] = t;
                        t = A.css(e, o)
                    }
                    return Ge(e, t, a)
                }
            }
        });
        A.cssHooks.marginLeft = Me(m.reliableMarginLeft, function(e, t) {
            if (t) {
                return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }
        });
        A.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, a) {
            A.cssHooks[i + a] = {
                expand: function(e) {
                    var t = 0,
                        n = {},
                        r = typeof e === "string" ? e.split(" ") : [e];
                    for (; t < 4; t++) {
                        n[i + te[t] + a] = r[t] || r[t - 2] || r[0]
                    }
                    return n
                }
            };
            if (!Oe.test(i)) {
                A.cssHooks[i + a].set = Ge
            }
        });
        A.fn.extend({
            css: function(e, t) {
                return W(this, function(e, t, n) {
                    var r, i, a = {},
                        o = 0;
                    if (A.isArray(t)) {
                        r = Be(e);
                        i = t.length;
                        for (; o < i; o++) {
                            a[t[o]] = A.css(e, t[o], false, r)
                        }
                        return a
                    }
                    return n !== undefined ? A.style(e, t, n) : A.css(e, t)
                }, e, t, arguments.length > 1)
            }
        });

        function Je(e, t, n, r, i) {
            return new Je.prototype.init(e, t, n, r, i)
        }
        A.Tween = Je;
        Je.prototype = {
            constructor: Je,
            init: function(e, t, n, r, i, a) {
                this.elem = e;
                this.prop = n;
                this.easing = i || A.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = r;
                this.unit = a || (A.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Je.propHooks[this.prop];
                return e && e.get ? e.get(this) : Je.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Je.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                } else {
                    this.pos = t = e
                }
                this.now = (this.end - this.start) * t + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this)
                }
                if (n && n.set) {
                    n.set(this)
                } else {
                    Je.propHooks._default.set(this)
                }
                return this
            }
        };
        Je.prototype.init.prototype = Je.prototype;
        Je.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                        return e.elem[e.prop]
                    }
                    t = A.css(e.elem, e.prop, "");
                    return !t || t === "auto" ? 0 : t
                },
                set: function(e) {
                    if (A.fx.step[e.prop]) {
                        A.fx.step[e.prop](e)
                    } else if (e.elem.nodeType === 1 && (e.elem.style[A.cssProps[e.prop]] != null || A.cssHooks[e.prop])) {
                        A.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        };
        Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
            set: function(e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now
                }
            }
        };
        A.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        A.fx = Je.prototype.init;
        A.fx.step = {};
        var Qe, Ye, Ze = /^(?:toggle|show|hide)$/,
            et = /queueHooks$/;

        function tt() {
            if (Ye) {
                k.requestAnimationFrame(tt);
                A.fx.tick()
            }
        }

        function nt() {
            k.setTimeout(function() {
                Qe = undefined
            });
            return Qe = A.now()
        }

        function rt(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            t = t ? 1 : 0;
            for (; r < 4; r += 2 - t) {
                n = te[r];
                i["margin" + n] = i["padding" + n] = e
            }
            if (t) {
                i.opacity = i.width = e
            }
            return i
        }

        function it(e, t, n) {
            var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]),
                a = 0,
                o = i.length;
            for (; a < o; a++) {
                if (r = i[a].call(n, t, e)) {
                    return r
                }
            }
        }

        function at(e, t, n) {
            var r, i, a, o, s, u, c, l, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ne(e),
                m = G.get(e, "fxshow");
            if (!n.queue) {
                o = A._queueHooks(e, "fx");
                if (o.unqueued == null) {
                    o.unqueued = 0;
                    s = o.empty.fire;
                    o.empty.fire = function() {
                        if (!o.unqueued) {
                            s()
                        }
                    }
                }
                o.unqueued++;
                p.always(function() {
                    p.always(function() {
                        o.unqueued--;
                        if (!A.queue(e, "fx").length) {
                            o.empty.fire()
                        }
                    })
                })
            }
            for (r in t) {
                i = t[r];
                if (Ze.test(i)) {
                    delete t[r];
                    a = a || i === "toggle";
                    if (i === (g ? "hide" : "show")) {
                        if (i === "show" && m && m[r] !== undefined) {
                            g = true
                        } else {
                            continue
                        }
                    }
                    d[r] = m && m[r] || A.style(e, r)
                }
            }
            u = !A.isEmptyObject(t);
            if (!u && A.isEmptyObject(d)) {
                return
            }
            if (f && e.nodeType === 1) {
                n.overflow = [h.overflow, h.overflowX, h.overflowY];
                c = m && m.display;
                if (c == null) {
                    c = G.get(e, "display")
                }
                l = A.css(e, "display");
                if (l === "none") {
                    if (c) {
                        l = c
                    } else {
                        se([e], true);
                        c = e.style.display || c;
                        l = A.css(e, "display");
                        se([e])
                    }
                }
                if (l === "inline" || l === "inline-block" && c != null) {
                    if (A.css(e, "float") === "none") {
                        if (!u) {
                            p.done(function() {
                                h.display = c
                            });
                            if (c == null) {
                                l = h.display;
                                c = l === "none" ? "" : l
                            }
                        }
                        h.display = "inline-block"
                    }
                }
            }
            if (n.overflow) {
                h.overflow = "hidden";
                p.always(function() {
                    h.overflow = n.overflow[0];
                    h.overflowX = n.overflow[1];
                    h.overflowY = n.overflow[2]
                })
            }
            u = false;
            for (r in d) {
                if (!u) {
                    if (m) {
                        if ("hidden" in m) {
                            g = m.hidden
                        }
                    } else {
                        m = G.access(e, "fxshow", {
                            display: c
                        })
                    }
                    if (a) {
                        m.hidden = !g
                    }
                    if (g) {
                        se([e], true)
                    }
                    p.done(function() {
                        if (!g) {
                            se([e])
                        }
                        G.remove(e, "fxshow");
                        for (r in d) {
                            A.style(e, r, d[r])
                        }
                    })
                }
                u = it(g ? m[r] : 0, r, p);
                if (!(r in m)) {
                    m[r] = u.start;
                    if (g) {
                        u.end = u.start;
                        u.start = 0
                    }
                }
            }
        }

        function ot(e, t) {
            var n, r, i, a, o;
            for (n in e) {
                r = A.camelCase(n);
                i = t[r];
                a = e[n];
                if (A.isArray(a)) {
                    i = a[1];
                    a = e[n] = a[0]
                }
                if (n !== r) {
                    e[r] = a;
                    delete e[n]
                }
                o = A.cssHooks[r];
                if (o && "expand" in o) {
                    a = o.expand(a);
                    delete e[r];
                    for (n in a) {
                        if (!(n in e)) {
                            e[n] = a[n];
                            t[n] = i
                        }
                    }
                } else {
                    t[r] = i
                }
            }
        }

        function st(o, e, t) {
            var n, s, r = 0,
                i = st.prefilters.length,
                u = A.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    if (s) {
                        return false
                    }
                    var e = Qe || nt(),
                        t = Math.max(0, c.startTime + c.duration - e),
                        n = t / c.duration || 0,
                        r = 1 - n,
                        i = 0,
                        a = c.tweens.length;
                    for (; i < a; i++) {
                        c.tweens[i].run(r)
                    }
                    u.notifyWith(o, [c, r, t]);
                    if (r < 1 && a) {
                        return t
                    } else {
                        u.resolveWith(o, [c]);
                        return false
                    }
                },
                c = u.promise({
                    elem: o,
                    props: A.extend({}, e),
                    opts: A.extend(true, {
                        specialEasing: {},
                        easing: A.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Qe || nt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = A.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        c.tweens.push(n);
                        return n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) {
                            return this
                        }
                        s = true;
                        for (; t < n; t++) {
                            c.tweens[t].run(1)
                        }
                        if (e) {
                            u.notifyWith(o, [c, 1, 0]);
                            u.resolveWith(o, [c, e])
                        } else {
                            u.rejectWith(o, [c, e])
                        }
                        return this
                    }
                }),
                l = c.props;
            ot(l, c.opts.specialEasing);
            for (; r < i; r++) {
                n = st.prefilters[r].call(c, o, l, c.opts);
                if (n) {
                    if (A.isFunction(n.stop)) {
                        A._queueHooks(c.elem, c.opts.queue).stop = A.proxy(n.stop, n)
                    }
                    return n
                }
            }
            A.map(l, it, c);
            if (A.isFunction(c.opts.start)) {
                c.opts.start.call(o, c)
            }
            A.fx.timer(A.extend(a, {
                elem: o,
                anim: c,
                queue: c.opts.queue
            }));
            return c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        A.Animation = A.extend(st, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    ie(n.elem, e, ee.exec(t), n);
                    return n
                }]
            },
            tweener: function(e, t) {
                if (A.isFunction(e)) {
                    t = e;
                    e = ["*"]
                } else {
                    e = e.match(O)
                }
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) {
                    n = e[r];
                    st.tweeners[n] = st.tweeners[n] || [];
                    st.tweeners[n].unshift(t)
                }
            },
            prefilters: [at],
            prefilter: function(e, t) {
                if (t) {
                    st.prefilters.unshift(e)
                } else {
                    st.prefilters.push(e)
                }
            }
        });
        A.speed = function(e, t, n) {
            var r = e && typeof e === "object" ? A.extend({}, e) : {
                complete: n || !n && t || A.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !A.isFunction(t) && t
            };
            if (A.fx.off || T.hidden) {
                r.duration = 0
            } else {
                if (typeof r.duration !== "number") {
                    if (r.duration in A.fx.speeds) {
                        r.duration = A.fx.speeds[r.duration]
                    } else {
                        r.duration = A.fx.speeds._default
                    }
                }
            }
            if (r.queue == null || r.queue === true) {
                r.queue = "fx"
            }
            r.old = r.complete;
            r.complete = function() {
                if (A.isFunction(r.old)) {
                    r.old.call(this)
                }
                if (r.queue) {
                    A.dequeue(this, r.queue)
                }
            };
            return r
        };
        A.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = A.isEmptyObject(t),
                    a = A.speed(e, n, r),
                    o = function() {
                        var e = st(this, A.extend({}, t), a);
                        if (i || G.get(this, "finish")) {
                            e.stop(true)
                        }
                    };
                o.finish = o;
                return i || a.queue === false ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(i, e, a) {
                var o = function(e) {
                    var t = e.stop;
                    delete e.stop;
                    t(a)
                };
                if (typeof i !== "string") {
                    a = e;
                    e = i;
                    i = undefined
                }
                if (e && i !== false) {
                    this.queue(i || "fx", [])
                }
                return this.each(function() {
                    var e = true,
                        t = i != null && i + "queueHooks",
                        n = A.timers,
                        r = G.get(this);
                    if (t) {
                        if (r[t] && r[t].stop) {
                            o(r[t])
                        }
                    } else {
                        for (t in r) {
                            if (r[t] && r[t].stop && et.test(t)) {
                                o(r[t])
                            }
                        }
                    }
                    for (t = n.length; t--;) {
                        if (n[t].elem === this && (i == null || n[t].queue === i)) {
                            n[t].anim.stop(a);
                            e = false;
                            n.splice(t, 1)
                        }
                    }
                    if (e || !a) {
                        A.dequeue(this, i)
                    }
                })
            },
            finish: function(o) {
                if (o !== false) {
                    o = o || "fx"
                }
                return this.each(function() {
                    var e, t = G.get(this),
                        n = t[o + "queue"],
                        r = t[o + "queueHooks"],
                        i = A.timers,
                        a = n ? n.length : 0;
                    t.finish = true;
                    A.queue(this, o, []);
                    if (r && r.stop) {
                        r.stop.call(this, true)
                    }
                    for (e = i.length; e--;) {
                        if (i[e].elem === this && i[e].queue === o) {
                            i[e].anim.stop(true);
                            i.splice(e, 1)
                        }
                    }
                    for (e = 0; e < a; e++) {
                        if (n[e] && n[e].finish) {
                            n[e].finish.call(this)
                        }
                    }
                    delete t.finish
                })
            }
        });
        A.each(["toggle", "show", "hide"], function(e, r) {
            var i = A.fn[r];
            A.fn[r] = function(e, t, n) {
                return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(rt(r, true), e, t, n)
            }
        });
        A.each({
            slideDown: rt("show"),
            slideUp: rt("hide"),
            slideToggle: rt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            A.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        });
        A.timers = [];
        A.fx.tick = function() {
            var e, t = 0,
                n = A.timers;
            Qe = A.now();
            for (; t < n.length; t++) {
                e = n[t];
                if (!e() && n[t] === e) {
                    n.splice(t--, 1)
                }
            }
            if (!n.length) {
                A.fx.stop()
            }
            Qe = undefined
        };
        A.fx.timer = function(e) {
            A.timers.push(e);
            if (e()) {
                A.fx.start()
            } else {
                A.timers.pop()
            }
        };
        A.fx.interval = 13;
        A.fx.start = function() {
            if (!Ye) {
                Ye = k.requestAnimationFrame ? k.requestAnimationFrame(tt) : k.setInterval(A.fx.tick, A.fx.interval)
            }
        };
        A.fx.stop = function() {
            if (k.cancelAnimationFrame) {
                k.cancelAnimationFrame(Ye)
            } else {
                k.clearInterval(Ye)
            }
            Ye = null
        };
        A.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        A.fn.delay = function(r, e) {
            r = A.fx ? A.fx.speeds[r] || r : r;
            e = e || "fx";
            return this.queue(e, function(e, t) {
                var n = k.setTimeout(e, r);
                t.stop = function() {
                    k.clearTimeout(n)
                }
            })
        };
        (function() {
            var e = T.createElement("input"),
                t = T.createElement("select"),
                n = t.appendChild(T.createElement("option"));
            e.type = "checkbox";
            m.checkOn = e.value !== "";
            m.optSelected = n.selected;
            e = T.createElement("input");
            e.value = "t";
            e.type = "radio";
            m.radioValue = e.value === "t"
        })();
        var ut, ct = A.expr.attrHandle;
        A.fn.extend({
            attr: function(e, t) {
                return W(this, A.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    A.removeAttr(this, e)
                })
            }
        });
        A.extend({
            attr: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (typeof e.getAttribute === "undefined") {
                    return A.prop(e, t, n)
                }
                if (a !== 1 || !A.isXMLDoc(e)) {
                    i = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? ut : undefined)
                }
                if (n !== undefined) {
                    if (n === null) {
                        A.removeAttr(e, t);
                        return
                    }
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r
                    }
                    e.setAttribute(t, n + "");
                    return n
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r
                }
                r = A.find.attr(e, t);
                return r == null ? undefined : r
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!m.radioValue && t === "radio" && A.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n
                            }
                            return t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(O);
                if (i && e.nodeType === 1) {
                    while (n = i[r++]) {
                        e.removeAttribute(n)
                    }
                }
            }
        });
        ut = {
            set: function(e, t, n) {
                if (t === false) {
                    A.removeAttr(e, n)
                } else {
                    e.setAttribute(n, n)
                }
                return n
            }
        };
        A.each(A.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var o = ct[t] || A.find.attr;
            ct[t] = function(e, t, n) {
                var r, i, a = t.toLowerCase();
                if (!n) {
                    i = ct[a];
                    ct[a] = r;
                    r = o(e, t, n) != null ? a : null;
                    ct[a] = i
                }
                return r
            }
        });
        var lt = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;
        A.fn.extend({
            prop: function(e, t) {
                return W(this, A.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[A.propFix[e] || e]
                })
            }
        });
        A.extend({
            prop: function(e, t, n) {
                var r, i, a = e.nodeType;
                if (a === 3 || a === 8 || a === 2) {
                    return
                }
                if (a !== 1 || !A.isXMLDoc(e)) {
                    t = A.propFix[t] || t;
                    i = A.propHooks[t]
                }
                if (n !== undefined) {
                    if (i && "set" in i && (r = i.set(e, n, t)) !== undefined) {
                        return r
                    }
                    return e[t] = n
                }
                if (i && "get" in i && (r = i.get(e, t)) !== null) {
                    return r
                }
                return e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = A.find.attr(e, "tabindex");
                        if (t) {
                            return parseInt(t, 10)
                        }
                        if (lt.test(e.nodeName) || ft.test(e.nodeName) && e.href) {
                            return 0
                        }
                        return -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        });
        if (!m.optSelected) {
            A.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    if (t && t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                    return null
                },
                set: function(e) {
                    var t = e.parentNode;
                    if (t) {
                        t.selectedIndex;
                        if (t.parentNode) {
                            t.parentNode.selectedIndex
                        }
                    }
                }
            }
        }
        A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            A.propFix[this.toLowerCase()] = this
        });

        function pt(e) {
            var t = e.match(O) || [];
            return t.join(" ")
        }

        function dt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        A.fn.extend({
            addClass: function(t) {
                var e, n, r, i, a, o, s, u = 0;
                if (A.isFunction(t)) {
                    return this.each(function(e) {
                        A(this).addClass(t.call(this, e, dt(this)))
                    })
                }
                if (typeof t === "string" && t) {
                    e = t.match(O) || [];
                    while (n = this[u++]) {
                        i = dt(n);
                        r = n.nodeType === 1 && " " + pt(i) + " ";
                        if (r) {
                            o = 0;
                            while (a = e[o++]) {
                                if (r.indexOf(" " + a + " ") < 0) {
                                    r += a + " "
                                }
                            }
                            s = pt(r);
                            if (i !== s) {
                                n.setAttribute("class", s)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, a, o, s, u = 0;
                if (A.isFunction(t)) {
                    return this.each(function(e) {
                        A(this).removeClass(t.call(this, e, dt(this)))
                    })
                }
                if (!arguments.length) {
                    return this.attr("class", "")
                }
                if (typeof t === "string" && t) {
                    e = t.match(O) || [];
                    while (n = this[u++]) {
                        i = dt(n);
                        r = n.nodeType === 1 && " " + pt(i) + " ";
                        if (r) {
                            o = 0;
                            while (a = e[o++]) {
                                while (r.indexOf(" " + a + " ") > -1) {
                                    r = r.replace(" " + a + " ", " ")
                                }
                            }
                            s = pt(r);
                            if (i !== s) {
                                n.setAttribute("class", s)
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function(i, t) {
                var a = typeof i;
                if (typeof t === "boolean" && a === "string") {
                    return t ? this.addClass(i) : this.removeClass(i)
                }
                if (A.isFunction(i)) {
                    return this.each(function(e) {
                        A(this).toggleClass(i.call(this, e, dt(this), t), t)
                    })
                }
                return this.each(function() {
                    var e, t, n, r;
                    if (a === "string") {
                        t = 0;
                        n = A(this);
                        r = i.match(O) || [];
                        while (e = r[t++]) {
                            if (n.hasClass(e)) {
                                n.removeClass(e)
                            } else {
                                n.addClass(e)
                            }
                        }
                    } else if (i === undefined || a === "boolean") {
                        e = dt(this);
                        if (e) {
                            G.set(this, "__className__", e)
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", e || i === false ? "" : G.get(this, "__className__") || "")
                        }
                    }
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++]) {
                    if (n.nodeType === 1 && (" " + pt(dt(n)) + " ").indexOf(t) > -1) {
                        return true
                    }
                }
                return false
            }
        });
        var ht = /\r/g;
        A.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                if (!arguments.length) {
                    if (t) {
                        r = A.valHooks[t.type] || A.valHooks[t.nodeName.toLowerCase()];
                        if (r && "get" in r && (e = r.get(t, "value")) !== undefined) {
                            return e
                        }
                        e = t.value;
                        if (typeof e === "string") {
                            return e.replace(ht, "")
                        }
                        return e == null ? "" : e
                    }
                    return
                }
                i = A.isFunction(n);
                return this.each(function(e) {
                    var t;
                    if (this.nodeType !== 1) {
                        return
                    }
                    if (i) {
                        t = n.call(this, e, A(this).val())
                    } else {
                        t = n
                    }
                    if (t == null) {
                        t = ""
                    } else if (typeof t === "number") {
                        t += ""
                    } else if (A.isArray(t)) {
                        t = A.map(t, function(e) {
                            return e == null ? "" : e + ""
                        })
                    }
                    r = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()];
                    if (!r || !("set" in r) || r.set(this, t, "value") === undefined) {
                        this.value = t
                    }
                })
            }
        });
        A.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = A.find.attr(e, "value");
                        return t != null ? t : pt(A.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            a = e.selectedIndex,
                            o = e.type === "select-one",
                            s = o ? null : [],
                            u = o ? a + 1 : i.length;
                        if (a < 0) {
                            r = u
                        } else {
                            r = o ? a : 0
                        }
                        for (; r < u; r++) {
                            n = i[r];
                            if ((n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !A.nodeName(n.parentNode, "optgroup"))) {
                                t = A(n).val();
                                if (o) {
                                    return t
                                }
                                s.push(t)
                            }
                        }
                        return s
                    },
                    set: function(e, t) {
                        var n, r, i = e.options,
                            a = A.makeArray(t),
                            o = i.length;
                        while (o--) {
                            r = i[o];
                            if (r.selected = A.inArray(A.valHooks.option.get(r), a) > -1) {
                                n = true
                            }
                        }
                        if (!n) {
                            e.selectedIndex = -1
                        }
                        return a
                    }
                }
            }
        });
        A.each(["radio", "checkbox"], function() {
            A.valHooks[this] = {
                set: function(e, t) {
                    if (A.isArray(t)) {
                        return e.checked = A.inArray(A(e).val(), t) > -1
                    }
                }
            };
            if (!m.checkOn) {
                A.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        });
        var gt = /^(?:focusinfocus|focusoutblur)$/;
        A.extend(A.event, {
            trigger: function(e, t, n, r) {
                var i, a, o, s, u, c, l, f = [n || T],
                    p = h.call(e, "type") ? e.type : e,
                    d = h.call(e, "namespace") ? e.namespace.split(".") : [];
                a = o = n = n || T;
                if (n.nodeType === 3 || n.nodeType === 8) {
                    return
                }
                if (gt.test(p + A.event.triggered)) {
                    return
                }
                if (p.indexOf(".") > -1) {
                    d = p.split(".");
                    p = d.shift();
                    d.sort()
                }
                u = p.indexOf(":") < 0 && "on" + p;
                e = e[A.expando] ? e : new A.Event(p, typeof e === "object" && e);
                e.isTrigger = r ? 2 : 3;
                e.namespace = d.join(".");
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                e.result = undefined;
                if (!e.target) {
                    e.target = n
                }
                t = t == null ? [e] : A.makeArray(t, [e]);
                l = A.event.special[p] || {};
                if (!r && l.trigger && l.trigger.apply(n, t) === false) {
                    return
                }
                if (!r && !l.noBubble && !A.isWindow(n)) {
                    s = l.delegateType || p;
                    if (!gt.test(s + p)) {
                        a = a.parentNode
                    }
                    for (; a; a = a.parentNode) {
                        f.push(a);
                        o = a
                    }
                    if (o === (n.ownerDocument || T)) {
                        f.push(o.defaultView || o.parentWindow || k)
                    }
                }
                i = 0;
                while ((a = f[i++]) && !e.isPropagationStopped()) {
                    e.type = i > 1 ? s : l.bindType || p;
                    c = (G.get(a, "events") || {})[e.type] && G.get(a, "handle");
                    if (c) {
                        c.apply(a, t)
                    }
                    c = u && a[u];
                    if (c && c.apply && V(a)) {
                        e.result = c.apply(a, t);
                        if (e.result === false) {
                            e.preventDefault()
                        }
                    }
                }
                e.type = p;
                if (!r && !e.isDefaultPrevented()) {
                    if ((!l._default || l._default.apply(f.pop(), t) === false) && V(n)) {
                        if (u && A.isFunction(n[p]) && !A.isWindow(n)) {
                            o = n[u];
                            if (o) {
                                n[u] = null
                            }
                            A.event.triggered = p;
                            n[p]();
                            A.event.triggered = undefined;
                            if (o) {
                                n[u] = o
                            }
                        }
                    }
                }
                return e.result
            },
            simulate: function(e, t, n) {
                var r = A.extend(new A.Event, n, {
                    type: e,
                    isSimulated: true
                });
                A.event.trigger(r, null, t)
            }
        });
        A.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    A.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) {
                    return A.event.trigger(e, t, n, true)
                }
            }
        });
        A.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
            A.fn[n] = function(e, t) {
                return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        A.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        m.focusin = "onfocusin" in k;
        if (!m.focusin) {
            A.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, r) {
                var i = function(e) {
                    A.event.simulate(r, e.target, A.event.fix(e))
                };
                A.event.special[r] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = G.access(e, r);
                        if (!t) {
                            e.addEventListener(n, i, true)
                        }
                        G.access(e, r, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = G.access(e, r) - 1;
                        if (!t) {
                            e.removeEventListener(n, i, true);
                            G.remove(e, r)
                        } else {
                            G.access(e, r, t)
                        }
                    }
                }
            })
        }
        var mt = k.location;
        var vt = A.now();
        var yt = /\?/;
        A.parseXML = function(e) {
            var t;
            if (!e || typeof e !== "string") {
                return null
            }
            try {
                t = (new k.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = undefined
            }
            if (!t || t.getElementsByTagName("parsererror").length) {
                A.error("Invalid XML: " + e)
            }
            return t
        };
        var xt = /\[\]$/,
            bt = /\r?\n/g,
            wt = /^(?:submit|button|image|reset|file)$/i,
            _t = /^(?:input|select|textarea|keygen)/i;

        function kt(n, e, r, i) {
            var t;
            if (A.isArray(e)) {
                A.each(e, function(e, t) {
                    if (r || xt.test(n)) {
                        i(n, t)
                    } else {
                        kt(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, r, i)
                    }
                })
            } else if (!r && A.type(e) === "object") {
                for (t in e) {
                    kt(n + "[" + t + "]", e[t], r, i)
                }
            } else {
                i(n, e)
            }
        }
        A.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = A.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
                };
            if (A.isArray(e) || e.jquery && !A.isPlainObject(e)) {
                A.each(e, function() {
                    i(this.name, this.value)
                })
            } else {
                for (n in e) {
                    kt(n, e[n], t, i)
                }
            }
            return r.join("&")
        };
        A.fn.extend({
            serialize: function() {
                return A.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = A.prop(this, "elements");
                    return e ? A.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !A(this).is(":disabled") && _t.test(this.nodeName) && !wt.test(e) && (this.checked || !ue.test(e))
                }).map(function(e, t) {
                    var n = A(this).val();
                    if (n == null) {
                        return null
                    }
                    if (A.isArray(n)) {
                        return A.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(bt, "\r\n")
                            }
                        })
                    }
                    return {
                        name: t.name,
                        value: n.replace(bt, "\r\n")
                    }
                }).get()
            }
        });
        var Tt = /%20/g,
            At = /#.*$/,
            Ct = /([?&])_=[^&]*/,
            St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nt = /^(?:GET|HEAD)$/,
            Pt = /^\/\//,
            Lt = {},
            Dt = {},
            $t = "*/".concat("*"),
            jt = T.createElement("a");
        jt.href = mt.href;

        function Rt(a) {
            return function(e, t) {
                if (typeof e !== "string") {
                    t = e;
                    e = "*"
                }
                var n, r = 0,
                    i = e.toLowerCase().match(O) || [];
                if (A.isFunction(t)) {
                    while (n = i[r++]) {
                        if (n[0] === "+") {
                            n = n.slice(1) || "*";
                            (a[n] = a[n] || []).unshift(t)
                        } else {
                            (a[n] = a[n] || []).push(t)
                        }
                    }
                }
            }
        }

        function Ot(t, i, a, o) {
            var s = {},
                u = t === Dt;

            function c(e) {
                var r;
                s[e] = true;
                A.each(t[e] || [], function(e, t) {
                    var n = t(i, a, o);
                    if (typeof n === "string" && !u && !s[n]) {
                        i.dataTypes.unshift(n);
                        c(n);
                        return false
                    } else if (u) {
                        return !(r = n)
                    }
                });
                return r
            }
            return c(i.dataTypes[0]) || !s["*"] && c("*")
        }

        function qt(e, t) {
            var n, r, i = A.ajaxSettings.flatOptions || {};
            for (n in t) {
                if (t[n] !== undefined) {
                    (i[n] ? e : r || (r = {}))[n] = t[n]
                }
            }
            if (r) {
                A.extend(true, e, r)
            }
            return e
        }

        function Bt(e, t, n) {
            var r, i, a, o, s = e.contents,
                u = e.dataTypes;
            while (u[0] === "*") {
                u.shift();
                if (r === undefined) {
                    r = e.mimeType || t.getResponseHeader("Content-Type")
                }
            }
            if (r) {
                for (i in s) {
                    if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                }
            }
            if (u[0] in n) {
                a = u[0]
            } else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        a = i;
                        break
                    }
                    if (!o) {
                        o = i
                    }
                }
                a = a || o
            }
            if (a) {
                if (a !== u[0]) {
                    u.unshift(a)
                }
                return n[a]
            }
        }

        function Ht(e, t, n, r) {
            var i, a, o, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1]) {
                for (o in e.converters) {
                    c[o.toLowerCase()] = e.converters[o]
                }
            }
            a = l.shift();
            while (a) {
                if (e.responseFields[a]) {
                    n[e.responseFields[a]] = t
                }
                if (!u && r && e.dataFilter) {
                    t = e.dataFilter(t, e.dataType)
                }
                u = a;
                a = l.shift();
                if (a) {
                    if (a === "*") {
                        a = u
                    } else if (u !== "*" && u !== a) {
                        o = c[u + " " + a] || c["* " + a];
                        if (!o) {
                            for (i in c) {
                                s = i.split(" ");
                                if (s[1] === a) {
                                    o = c[u + " " + s[0]] || c["* " + s[0]];
                                    if (o) {
                                        if (o === true) {
                                            o = c[i]
                                        } else if (c[i] !== true) {
                                            a = s[0];
                                            l.unshift(s[1])
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (o !== true) {
                            if (o && e.throws) {
                                t = o(t)
                            } else {
                                try {
                                    t = o(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: o ? e : "No conversion from " + u + " to " + a
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        A.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: mt.href,
                type: "GET",
                isLocal: Et.test(mt.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/json; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": A.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(e, t) {
                return t ? qt(qt(e, A.ajaxSettings), t) : qt(A.ajaxSettings, e)
            },
            ajaxPrefilter: Rt(Lt),
            ajaxTransport: Rt(Dt),
            ajax: function(e, t) {
                if (typeof e === "object") {
                    t = e;
                    e = undefined
                }
                t = t || {};
                var l, f, p, n, d, r, h, g, i, a, m = A.ajaxSetup({}, t),
                    v = m.context || m,
                    y = m.context && (v.nodeType || v.jquery) ? A(v) : A.event,
                    x = A.Deferred(),
                    b = A.Callbacks("once memory"),
                    w = m.statusCode || {},
                    o = {},
                    s = {},
                    u = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = St.exec(p)) {
                                        n[t[1].toLowerCase()] = t[2]
                                    }
                                }
                                t = n[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null
                        },
                        setRequestHeader: function(e, t) {
                            if (h == null) {
                                e = s[e.toLowerCase()] = s[e.toLowerCase()] || e;
                                o[e] = t
                            }
                            return this
                        },
                        overrideMimeType: function(e) {
                            if (h == null) {
                                m.mimeType = e
                            }
                            return this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (h) {
                                    _.always(e[_.status])
                                } else {
                                    for (t in e) {
                                        w[t] = [w[t], e[t]]
                                    }
                                }
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            if (l) {
                                l.abort(t)
                            }
                            c(0, t);
                            return this
                        }
                    };
                x.promise(_);
                m.url = ((e || m.url || mt.href) + "").replace(Pt, mt.protocol + "//");
                m.type = t.method || t.type || m.method || m.type;
                m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""];
                if (m.crossDomain == null) {
                    r = T.createElement("a");
                    try {
                        r.href = m.url;
                        r.href = r.href;
                        m.crossDomain = jt.protocol + "//" + jt.host !== r.protocol + "//" + r.host
                    } catch (e) {
                        m.crossDomain = true
                    }
                }
                if (m.data && m.processData && typeof m.data !== "string") {
                    m.data = A.param(m.data, m.traditional)
                }
                Ot(Lt, m, t, _);
                if (h) {
                    return _
                }
                g = A.event && m.global;
                if (g && A.active++ === 0) {
                    A.event.trigger("ajaxStart")
                }
                m.type = m.type.toUpperCase();
                m.hasContent = !Nt.test(m.type);
                f = m.url.replace(At, "");
                if (!m.hasContent) {
                    a = m.url.slice(f.length);
                    if (m.data) {
                        f += (yt.test(f) ? "&" : "?") + m.data;
                        delete m.data
                    }
                    if (m.cache === false) {
                        f = f.replace(Ct, "$1");
                        a = (yt.test(f) ? "&" : "?") + "_=" + vt++ + a
                    }
                    m.url = f + a
                } else if (m.data && m.processData && (m.contentType || "").indexOf("application/json") === 0) {
                    m.data = m.data.replace(Tt, "+")
                }
                if (m.ifModified) {
                    if (A.lastModified[f]) {
                        _.setRequestHeader("If-Modified-Since", A.lastModified[f])
                    }
                    if (A.etag[f]) {
                        _.setRequestHeader("If-None-Match", A.etag[f])
                    }
                }
                if (m.data && m.hasContent && m.contentType !== false || t.contentType) {
                    _.setRequestHeader("Content-Type", m.contentType)
                }
                _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + $t + "; q=0.01" : "") : m.accepts["*"]);
                for (i in m.headers) {
                    _.setRequestHeader(i, m.headers[i])
                }
                if (m.beforeSend && (m.beforeSend.call(v, _, m) === false || h)) {
                    return _.abort()
                }
                u = "abort";
                b.add(m.complete);
                _.done(m.success);
                _.fail(m.error);
                l = Ot(Dt, m, t, _);
                if (!l) {
                    c(-1, "No Transport")
                } else {
                    _.readyState = 1;
                    if (g) {
                        y.trigger("ajaxSend", [_, m])
                    }
                    if (h) {
                        return _
                    }
                    if (m.async && m.timeout > 0) {
                        d = k.setTimeout(function() {
                            _.abort("timeout")
                        }, m.timeout)
                    }
                    try {
                        h = false;
                        l.send(o, c)
                    } catch (e) {
                        if (h) {
                            throw e
                        }
                        c(-1, e)
                    }
                }

                function c(e, t, n, r) {
                    var i, a, o, s, u, c = t;
                    if (h) {
                        return
                    }
                    h = true;
                    if (d) {
                        k.clearTimeout(d)
                    }
                    l = undefined;
                    p = r || "";
                    _.readyState = e > 0 ? 4 : 0;
                    i = e >= 200 && e < 300 || e === 304;
                    if (n) {
                        s = Bt(m, _, n)
                    }
                    s = Ht(m, s, _, i);
                    if (i) {
                        if (m.ifModified) {
                            u = _.getResponseHeader("Last-Modified");
                            if (u) {
                                A.lastModified[f] = u
                            }
                            u = _.getResponseHeader("etag");
                            if (u) {
                                A.etag[f] = u
                            }
                        }
                        if (e === 204 || m.type === "HEAD") {
                            c = "nocontent"
                        } else if (e === 304) {
                            c = "notmodified"
                        } else {
                            c = s.state;
                            a = s.data;
                            o = s.error;
                            i = !o
                        }
                    } else {
                        o = c;
                        if (e || !c) {
                            c = "error";
                            if (e < 0) {
                                e = 0
                            }
                        }
                    }
                    _.status = e;
                    _.statusText = (t || c) + "";
                    if (i) {
                        x.resolveWith(v, [a, c, _])
                    } else {
                        x.rejectWith(v, [_, c, o])
                    }
                    _.statusCode(w);
                    w = undefined;
                    if (g) {
                        y.trigger(i ? "ajaxSuccess" : "ajaxError", [_, m, i ? a : o])
                    }
                    b.fireWith(v, [_, c]);
                    if (g) {
                        y.trigger("ajaxComplete", [_, m]);
                        if (!--A.active) {
                            A.event.trigger("ajaxStop")
                        }
                    }
                }
                return _
            },
            getJSON: function(e, t, n) {
                return A.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return A.get(e, undefined, t, "script")
            }
        });
        A.each(["get", "post"], function(e, i) {
            A[i] = function(e, t, n, r) {
                if (A.isFunction(t)) {
                    r = r || n;
                    n = t;
                    t = undefined
                }
                return A.ajax(A.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, A.isPlainObject(e) && e))
            }
        });
        A._evalUrl = function(e) {
            return A.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                throws: true
            })
        };
        A.fn.extend({
            wrapAll: function(e) {
                var t;
                if (this[0]) {
                    if (A.isFunction(e)) {
                        e = e.call(this[0])
                    }
                    t = A(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        t.insertBefore(this[0])
                    }
                    t.map(function() {
                        var e = this;
                        while (e.firstElementChild) {
                            e = e.firstElementChild
                        }
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(n) {
                if (A.isFunction(n)) {
                    return this.each(function(e) {
                        A(this).wrapInner(n.call(this, e))
                    })
                }
                return this.each(function() {
                    var e = A(this),
                        t = e.contents();
                    if (t.length) {
                        t.wrapAll(n)
                    } else {
                        e.append(n)
                    }
                })
            },
            wrap: function(t) {
                var n = A.isFunction(t);
                return this.each(function(e) {
                    A(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                this.parent(e).not("body").each(function() {
                    A(this).replaceWith(this.childNodes)
                });
                return this
            }
        });
        A.expr.pseudos.hidden = function(e) {
            return !A.expr.pseudos.visible(e)
        };
        A.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        };
        A.ajaxSettings.xhr = function() {
            try {
                return new k.XMLHttpRequest
            } catch (e) {}
        };
        var Mt = {
                0: 200,
                1223: 204
            },
            Ft = A.ajaxSettings.xhr();
        m.cors = !!Ft && "withCredentials" in Ft;
        m.ajax = Ft = !!Ft;
        A.ajaxTransport(function(i) {
            var a, o;
            if (m.cors || Ft && !i.crossDomain) {
                return {
                    send: function(e, t) {
                        var n, r = i.xhr();
                        r.open(i.type, i.url, i.async, i.username, i.password);
                        if (i.xhrFields) {
                            for (n in i.xhrFields) {
                                r[n] = i.xhrFields[n]
                            }
                        }
                        if (i.mimeType && r.overrideMimeType) {
                            r.overrideMimeType(i.mimeType)
                        }
                        if (!i.crossDomain && !e["X-Requested-With"]) {
                            e["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (n in e) {
                            r.setRequestHeader(n, e[n])
                        }
                        a = function(e) {
                            return function() {
                                if (a) {
                                    a = o = r.onload = r.onerror = r.onabort = r.onreadystatechange = null;
                                    if (e === "abort") {
                                        r.abort()
                                    } else if (e === "error") {
                                        if (typeof r.status !== "number") {
                                            t(0, "error")
                                        } else {
                                            t(r.status, r.statusText)
                                        }
                                    } else {
                                        t(Mt[r.status] || r.status, r.statusText, (r.responseType || "text") !== "text" || typeof r.responseText !== "string" ? {
                                            binary: r.response
                                        } : {
                                            text: r.responseText
                                        }, r.getAllResponseHeaders())
                                    }
                                }
                            }
                        };
                        r.onload = a();
                        o = r.onerror = a("error");
                        if (r.onabort !== undefined) {
                            r.onabort = o
                        } else {
                            r.onreadystatechange = function() {
                                if (r.readyState === 4) {
                                    k.setTimeout(function() {
                                        if (a) {
                                            o()
                                        }
                                    })
                                }
                            }
                        }
                        a = a("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (a) {
                                throw e
                            }
                        }
                    },
                    abort: function() {
                        if (a) {
                            a()
                        }
                    }
                }
            }
        });
        A.ajaxPrefilter(function(e) {
            if (e.crossDomain) {
                e.contents.script = false
            }
        });
        A.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    A.globalEval(e);
                    return e
                }
            }
        });
        A.ajaxPrefilter("script", function(e) {
            if (e.cache === undefined) {
                e.cache = false
            }
            if (e.crossDomain) {
                e.type = "GET"
            }
        });
        A.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, i;
                return {
                    send: function(e, t) {
                        r = A("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                            r.remove();
                            i = null;
                            if (e) {
                                t(e.type === "error" ? 404 : 200, e.type)
                            }
                        });
                        T.head.appendChild(r[0])
                    },
                    abort: function() {
                        if (i) {
                            i()
                        }
                    }
                }
            }
        });
        var It = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
        A.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = It.pop() || A.expando + "_" + vt++;
                this[e] = true;
                return e
            }
        });
        A.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, a, o = e.jsonp !== false && (Ut.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/json") === 0 && Ut.test(e.data) && "data");
            if (o || e.dataTypes[0] === "jsonp") {
                r = e.jsonpCallback = A.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                if (o) {
                    e[o] = e[o].replace(Ut, "$1" + r)
                } else if (e.jsonp !== false) {
                    e.url += (yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r
                }
                e.converters["script json"] = function() {
                    if (!a) {
                        A.error(r + " was not called")
                    }
                    return a[0]
                };
                e.dataTypes[0] = "json";
                i = k[r];
                k[r] = function() {
                    a = arguments
                };
                n.always(function() {
                    if (i === undefined) {
                        A(k).removeProp(r)
                    } else {
                        k[r] = i
                    }
                    if (e[r]) {
                        e.jsonpCallback = t.jsonpCallback;
                        It.push(r)
                    }
                    if (a && A.isFunction(i)) {
                        i(a[0])
                    }
                    a = i = undefined
                });
                return "script"
            }
        });
        m.createHTMLDocument = function() {
            var e = T.implementation.createHTMLDocument("").body;
            e.innerHTML = "<form></form><form></form>";
            return e.childNodes.length === 2
        }();
        A.parseHTML = function(e, t, n) {
            if (typeof e !== "string") {
                return []
            }
            if (typeof t === "boolean") {
                n = t;
                t = false
            }
            var r, i, a;
            if (!t) {
                if (m.createHTMLDocument) {
                    t = T.implementation.createHTMLDocument("");
                    r = t.createElement("base");
                    r.href = T.location.href;
                    t.head.appendChild(r)
                } else {
                    t = T
                }
            }
            i = S.exec(e);
            a = !n && [];
            if (i) {
                return [t.createElement(i[1])]
            }
            i = ge([e], t, a);
            if (a && a.length) {
                A(a).remove()
            }
            return A.merge([], i.childNodes)
        };
        A.fn.load = function(e, t, n) {
            var r, i, a, o = this,
                s = e.indexOf(" ");
            if (s > -1) {
                r = pt(e.slice(s));
                e = e.slice(0, s)
            }
            if (A.isFunction(t)) {
                n = t;
                t = undefined
            } else if (t && typeof t === "object") {
                i = "POST"
            }
            if (o.length > 0) {
                A.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments;
                    o.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    o.each(function() {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                })
            }
            return this
        };
        A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            A.fn[t] = function(e) {
                return this.on(t, e)
            }
        });
        A.expr.pseudos.animated = function(t) {
            return A.grep(A.timers, function(e) {
                return t === e.elem
            }).length
        };

        function Wt(e) {
            return A.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
        }
        A.offset = {
            setOffset: function(e, t, n) {
                var r, i, a, o, s, u, c, l = A.css(e, "position"),
                    f = A(e),
                    p = {};
                if (l === "static") {
                    e.style.position = "relative"
                }
                s = f.offset();
                a = A.css(e, "top");
                u = A.css(e, "left");
                c = (l === "absolute" || l === "fixed") && (a + u).indexOf("auto") > -1;
                if (c) {
                    r = f.position();
                    o = r.top;
                    i = r.left
                } else {
                    o = parseFloat(a) || 0;
                    i = parseFloat(u) || 0
                }
                if (A.isFunction(t)) {
                    t = t.call(e, n, A.extend({}, s))
                }
                if (t.top != null) {
                    p.top = t.top - s.top + o
                }
                if (t.left != null) {
                    p.left = t.left - s.left + i
                }
                if ("using" in t) {
                    t.using.call(e, p)
                } else {
                    f.css(p)
                }
            }
        };
        A.fn.extend({
            offset: function(t) {
                if (arguments.length) {
                    return t === undefined ? this : this.each(function(e) {
                        A.offset.setOffset(this, t, e)
                    })
                }
                var e, n, r, i, a = this[0];
                if (!a) {
                    return
                }
                if (!a.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    }
                }
                r = a.getBoundingClientRect();
                if (r.width || r.height) {
                    i = a.ownerDocument;
                    n = Wt(i);
                    e = i.documentElement;
                    return {
                        top: r.top + n.pageYOffset - e.clientTop,
                        left: r.left + n.pageXOffset - e.clientLeft
                    }
                }
                return r
            },
            position: function() {
                if (!this[0]) {
                    return
                }
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if (A.css(n, "position") === "fixed") {
                    t = n.getBoundingClientRect()
                } else {
                    e = this.offsetParent();
                    t = this.offset();
                    if (!A.nodeName(e[0], "html")) {
                        r = e.offset()
                    }
                    r = {
                        top: r.top + A.css(e[0], "borderTopWidth", true),
                        left: r.left + A.css(e[0], "borderLeftWidth", true)
                    }
                }
                return {
                    top: t.top - r.top - A.css(n, "marginTop", true),
                    left: t.left - r.left - A.css(n, "marginLeft", true)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && A.css(e, "position") === "static") {
                        e = e.offsetParent
                    }
                    return e || me
                })
            }
        });
        A.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var a = "pageYOffset" === i;
            A.fn[t] = function(e) {
                return W(this, function(e, t, n) {
                    var r = Wt(e);
                    if (n === undefined) {
                        return r ? r[i] : e[t]
                    }
                    if (r) {
                        r.scrollTo(!a ? n : r.pageXOffset, a ? n : r.pageYOffset)
                    } else {
                        e[t] = n
                    }
                }, t, e, arguments.length)
            }
        });
        A.each(["top", "left"], function(e, n) {
            A.cssHooks[n] = Me(m.pixelPosition, function(e, t) {
                if (t) {
                    t = He(e, n);
                    return qe.test(t) ? A(e).position()[n] + "px" : t
                }
            })
        });
        A.each({
            Height: "height",
            Width: "width"
        }, function(o, s) {
            A.each({
                padding: "inner" + o,
                content: s,
                "": "outer" + o
            }, function(r, a) {
                A.fn[a] = function(e, t) {
                    var n = arguments.length && (r || typeof e !== "boolean"),
                        i = r || (e === true || t === true ? "margin" : "border");
                    return W(this, function(e, t, n) {
                        var r;
                        if (A.isWindow(e)) {
                            return a.indexOf("outer") === 0 ? e["inner" + o] : e.document.documentElement["client" + o]
                        }
                        if (e.nodeType === 9) {
                            r = e.documentElement;
                            return Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])
                        }
                        return n === undefined ? A.css(e, t, i) : A.style(e, t, n, i)
                    }, s, n ? e : undefined, n)
                }
            })
        });
        A.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        A.parseJSON = JSON.parse;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return A
            })
        }
        var Vt = k.jQuery,
            Kt = k.$;
        A.noConflict = function(e) {
            if (k.$ === A) {
                k.$ = Kt
            }
            if (e && k.jQuery === A) {
                k.jQuery = Vt
            }
            return A
        };
        if (!e) {
            k.jQuery = k.$ = A
        }
        return A
    });
    var g = function(e, t) {
        return new function(e, c) {
            c = !!c;
            this.params = {
                host: "api.anycaptcha.com",
                port: 80,
                clientKey: e,
                websiteUrl: null,
                websiteKey: null,
                websiteSToken: null,
                recaptchaDataSValue: null,
                proxyType: "http",
                proxyAddress: null,
                proxyPort: null,
                proxyLogin: null,
                proxyPassword: null,
                userAgent: "",
                cookies: "",
                minScore: "",
                pageAction: "",
                websitePublicKey: null,
                funcaptchaApiJSSubdomain: null,
                websiteChallenge: null,
                geetestApiServerSubdomain: null,
                geetestGetLib: null,
                phrase: null,
                case: null,
                numeric: null,
                math: null,
                minLength: null,
                maxLength: null,
                imageUrl: null,
                assignment: null,
                forms: null,
                softId: null,
                languagePool: null
            };
            var o = {};
            var l = 20,
                u = 5,
                f = 2;
            this.getBalance = function(n) {
                var e = {
                    clientKey: this.params.clientKey
                };
                this.jsonPostRequest("getBalance", e, function(e, t) {
                    if (e) {
                        return n(e, null, t)
                    }
                    n(null, t.balance, t)
                })
            };
            this.setCustomData = function(e, t) {
                if (typeof this.params[e] !== "undefined") {
                    return
                }
                o[e] = t
            };
            this.clearCustomData = function() {
                o = {}
            };
            this.createTask = function(r, e, t) {
                e = typeof e == "undefined" ? "NoCaptchaTask" : e;
                var n = this.getPostData(e);
                n.type = e;
                for (var i in o) {
                    if (typeof n[i] === "undefined") {
                        n[i] = o[i]
                    }
                }
                if (typeof t == "object") {
                    for (var i in t) {
                        n[i] = t[i]
                    }
                }
                var a = {
                    clientKey: this.params.clientKey,
                    task: n,
                    softId: this.params.softId !== null ? this.params.softId : 0
                };
                if (this.params.languagePool !== null) {
                    a.languagePool = this.params.languagePool
                }
                this.jsonPostRequest("createTask", a, function(e, t) {
                    if (e) {
                        return r(e, null, t)
                    }
                    var n = t.taskId;
                    r(null, n, t)
                })
            };
            this.createTaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV2TaskProxyless")
            };
            this.createRecaptchaV2EnterpriseTask = function(e) {
                this.createTask(e, "RecaptchaV2EnterpriseTask")
            };
            this.createRecaptchaV2EnterpriseTaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV2EnterpriseTaskProxyless")
            };
            this.createHCaptchaTaskProxyless = function(e) {
                this.createTask(e, "HCaptchaTaskProxyless")
            };
            this.createHCaptchaTask = function(e) {
                this.createTask(e, "HCaptchaTask")
            };
            this.createRecaptchaV3TaskProxyless = function(e) {
                this.createTask(e, "RecaptchaV3TaskProxyless")
            };
            this.createFunCaptchaTask = function(e) {
                this.createTask(e, "FunCaptchaTask")
            };
            this.createFunCaptchaTaskProxyless = function(e) {
                this.createTask(e, "FunCaptchaTaskProxyless")
            };
            this.createGeeTestTask = function(e) {
                this.createTask(e, "GeeTestTask")
            };
            this.createGeeTestTaskProxyless = function(e) {
                this.createTask(e, "GeeTestTaskProxyless")
            };
            this.createImageToTextTask = function(e, t) {
                this.createTask(t, "ImageToTextTask", e)
            };
            this.createCustomCaptchaTask = function(e) {
                this.createTask(e, "CustomCaptchaTask")
            };
            this.getTaskRawResult = function(e) {
                if (typeof e.solution.gRecaptchaResponse != "undefined") {
                    return e.solution.gRecaptchaResponse
                } else if (typeof e.solution.token != "undefined") {
                    return e.solution.token
                } else if (typeof e.solution.answers != "undefined") {
                    return e.solution.answers
                } else if (typeof e.solution.text !== "undefined") {
                    return e.solution.text
                } else {
                    return e.solution
                }
            };
            this.getTaskSolution = function(n, r, i, a, o) {
                i = i || 0;
                var e = {
                    clientKey: this.params.clientKey,
                    taskId: n
                };
                if (typeof o !== "undefined" && typeof o.cacheRecord !== "undefined") {
                    e.cacheRecord = o.cacheRecord
                }
                var t;
                if (i == 0) {
                    t = u
                } else {
                    t = f
                }
                if (c) {
                    t = 1
                }
                console.log("Waiting %s seconds", t);
                var s = this;
                setTimeout(function() {
                    s.jsonPostRequest("getTaskResult", e, function(e, t) {
                        if (e) {
                            return r(e, null, t)
                        }
                        if (t.status == "processing") {
                            if (typeof t.newTaskId !== "undefined") {
                                n = t.newTaskId
                            }
                            if (a) {
                                a()
                            }
                            return s.getTaskSolution(n, r, i + 1, a, o)
                        } else if (t.status == "ready") {
                            return r(null, s.getTaskRawResult(t), t)
                        }
                    })
                }, t * 1e3)
            };
            this.getPostData = function(e) {
                switch (e) {
                    case "CustomCaptchaTask":
                        return {
                            imageUrl: this.params.imageUrl, assignment: this.params.assignment, forms: this.params.forms
                        };
                    case "ImageToTextTask":
                        return {
                            phrase: this.params.phrase,
                                case :this.params.case, numeric: this.params.numeric, math: this.params.math, minLength: this.params.minLength, maxLength: this.params.maxLength
                        };
                        break;
                    case "RecaptchaV2TaskProxyless":
                    case "RecaptchaV2EnterpriseTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken, recaptchaDataSValue: this.params.recaptchaDataSValue
                        };
                        break;
                    case "HCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey
                        };
                        break;
                    case "HCaptchaTask":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "RecaptchaV3TaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, minScore: this.params.minScore, pageAction: this.params.pageAction, isEnterprise: this.params.isEnterprise
                        };
                        break;
                    case "FunCaptchaTask":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey, funcaptchaApiJSSubdomain: this.params.funcaptchaApiJSSubdomain, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "FunCaptchaTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, websitePublicKey: this.params.websitePublicKey, funcaptchaApiJSSubdomain: this.params.funcaptchaApiJSSubdomain
                        };
                    case "GeeTestTask":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain, geetestGetLib: this.params.geetestGetLib, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        };
                        break;
                    case "GeeTestTaskProxyless":
                        return {
                            websiteURL: this.params.websiteUrl, gt: this.params.websiteKey, challenge: this.params.websiteChallenge, geetestApiServerSubdomain: this.params.geetestApiServerSubdomain, geetestGetLib: this.params.geetestGetLib
                        };
                    default:
                        return {
                            websiteURL: this.params.websiteUrl, websiteKey: this.params.websiteKey, websiteSToken: this.params.websiteSToken, recaptchaDataSValue: this.params.recaptchaDataSValue, proxyType: this.params.proxyType, proxyAddress: this.params.proxyAddress, proxyPort: this.params.proxyPort, proxyLogin: this.params.proxyLogin, proxyPassword: this.params.proxyPassword, userAgent: this.params.userAgent, cookies: this.params.cookies
                        }
                }
            };
            this.jsonPostRequest = function(e, t, r) {
                if (!c) {
                    if (typeof process === "object" && typeof require === "function") {
                        var n = require("http");
                        var i = {
                            hostname: this.params.host,
                            port: this.params.port,
                            path: "/" + e,
                            method: "POST",
                            headers: {
                                "accept-encoding": "gzip,deflate",
                                "content-type": "application/json; charset=utf-8",
                                accept: "application/json",
                                "content-length": Buffer.byteLength(JSON.stringify(t))
                            }
                        };
                        var a = n.request(i, function(e) {
                            var t = "";
                            e.on("data", function(e) {
                                t += e
                            });
                            e.on("end", function() {
                                try {
                                    var e = JSON.parse(t)
                                } catch (e) {
                                    return r(e)
                                }
                                if (e.errorId) {
                                    return r(new Error(e.errorDescription, {
                                        cause: e
                                    }), e)
                                }
                                return r(null, e)
                            })
                        });
                        a.write(JSON.stringify(t));
                        a.end();
                        a.setTimeout(l * 1e3);
                        a.on("timeout", function() {
                            console.log("timeout");
                            a.abort()
                        });
                        a.on("error", function(e) {
                            console.log("error");
                            return r(e)
                        });
                        return a
                    } else if (typeof window !== "undefined" || typeof chrome === "object") {
                        var o;
                        o = window.location.protocol != "http:" ? "https:" : window.location.protocol;
                        var s = o + "//" + this.params.host + (o != "https:" ? ":" + this.params.port : "") + "/" + e;
                        if (typeof jQuery == "function") {
                            jQuery.ajax(s, {
                                method: "POST",
                                data: JSON.stringify(t),
                                dataType: "json",
                                success: function(e) {
                                    if (e && e.errorId) {
                                        return r(new Error(e.errorDescription, {
                                            cause: e
                                        }), e)
                                    }
                                    r(false, e)
                                },
                                error: function(e, t, n) {
                                    r(new Error(t !== "error" ? t : "Unknown error, watch console", {
                                        cause: {
                                            errorCode: "HTTP_REQUEST_ERROR"
                                        }
                                    }))
                                }
                            })
                        } else if (typeof XMLHttpRequest !== "undefined") {
                            var u = new XMLHttpRequest;
                            u.open("POST", s, true);
                            u.responseType = "json";
                            u.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                            u.send(JSON.stringify(t));
                            u.onloadend = function() {
                                if (u.status == 200) {
                                    var e = u.response;
                                    if (e && e.errorId) {
                                        return r(new Error(e.errorDescription, {
                                            cause: e
                                        }), e)
                                    }
                                    r(false, e)
                                } else {
                                    r(new Error("Unknown error, watch console", {
                                        cause: {
                                            errorCode: "HTTP_REQUEST_ERROR"
                                        }
                                    }))
                                }
                            }
                        }
                    } else {
                        console.error("Application should be run either in NodeJs or a WebBrowser environment")
                    }
                } else {
                    chrome.runtime.sendMessage({
                        type: e + "PrecachedRecaptcha",
                        postData: t
                    }, function(e) {
                        if (e.errorId) {
                            return r(new Error(e.errorDescription, {
                                cause: e
                            }), e)
                        }
                        return r(null, e)
                    })
                }
            };
            this.setClientKey = function(e) {
                this.params.clientKey = e
            };
            this.setWebsiteURL = function(e) {
                this.params.websiteUrl = e
            };
            this.setWebsiteKey = function(e) {
                this.params.websiteKey = e
            };
            this.setMinScore = function(e) {
                this.params.minScore = e
            };
            this.setPageAction = function(e) {
                this.params.pageAction = e
            };
            this.setIsEnterprise = function(e) {
                this.params.isEnterprise = e
            };
            this.setWebsiteSToken = function(e) {
                this.params.websiteSToken = e
            };
            this.setRecaptchaDataSValue = function(e) {
                this.params.recaptchaDataSValue = e
            };
            this.setWebsitePublicKey = function(e) {
                this.params.websitePublicKey = e
            };
            this.setFuncaptchaApiJSSubdomain = function(e) {
                this.params.funcaptchaApiJSSubdomain = e
            };
            this.setWebsiteChallenge = function(e) {
                this.params.websiteChallenge = e
            };
            this.setGeetestApiServerSubdomain = function(e) {
                this.params.geetestApiServerSubdomain = e
            };
            this.setGeetestGetLib = function(e) {
                this.params.geetestGetLib = e
            };
            this.setProxyType = function(e) {
                this.params.proxyType = e
            };
            this.setProxyAddress = function(e) {
                this.params.proxyAddress = e
            };
            this.setProxyPort = function(e) {
                this.params.proxyPort = e
            };
            this.setProxyLogin = function(e) {
                this.params.proxyLogin = e
            };
            this.setProxyPassword = function(e) {
                this.params.proxyPassword = e
            };
            this.setUserAgent = function(e) {
                this.params.userAgent = e
            };
            this.setCookies = function(e) {
                this.params.cookies = e
            };
            this.setPhrase = function(e) {
                this.params.phrase = e
            };
            this.setCase = function(e) {
                this.params.case = e
            };
            this.setNumeric = function(e) {
                this.params.numeric = e
            };
            this.setMath = function(e) {
                this.params.math = e
            };
            this.setMinLength = function(e) {
                this.params.minLength = e
            };
            this.setMaxLength = function(e) {
                this.params.maxLength = e
            };
            this.setImageUrl = function(e) {
                this.params.imageUrl = e
            };
            this.setAssignment = function(e) {
                this.params.assignment = e
            };
            this.setForms = function(e) {
                this.params.forms = e
            };
            this.setSoftId = function(e) {
                this.params.softId = e
            };
            this.setLanguagePool = function(e) {
                this.params.languagePool = e
            };
            this.setHost = function(e) {
                this.params.host = e
            };
            this.setPort = function(e) {
                this.params.port = e
            }
        }(e, t)
    };
    if (typeof process === "object" && typeof require === "function") {
        module.exports = g
    }
    parseUrl = function(e) {
        var t = document.createElement("a");
        t.href = e;
        return t;
        t.protocol;
        t.hostname;
        t.port;
        t.pathname;
        t.search;
        t.hash;
        t.host
    };
    currentHostnameWhiteBlackListedOut = function(e, t) {
        if (typeof e.where_solve_list !== "undefined" && typeof e.where_solve_white_list_type !== "undefined") {
            if (!t) {
                t = window.location.href
            }
            var n = getHostname(t);
            if (!e.where_solve_white_list_type && e.where_solve_list.indexOf(n) !== -1) {
                return true
            }
            if (e.where_solve_white_list_type && e.where_solve_list.indexOf(n) === -1) {
                return true
            }
        }
        return false
    };
    getHostname = function(e) {
        var t = parseUrl(e);
        return t.hostname
    };

    function m(e) {
        var t = e.nodeName.toLowerCase();
        var n;
        var r = e.getAttributeNames();
        for (i in r) {
            n = r[i];
            n = n.toLowerCase();
            if (["id", "class", "role"].indexOf(n) !== -1) {} else if (t == "input" && ["type", "name"].indexOf(n) !== -1) {} else if (t == "form" && ["method", "action"].indexOf(n) !== -1) {} else {
                e.removeAttribute(n)
            }
        }
    }

    function v(e, t, n) {
        var r = md5(e + o + t);
        var i = n.solution && n.solution && n.solution.cacheRecord && n.solution.cacheRecord === r;
        return t ? t.replace(/0/g, i ? "0" : doCached() ? "0E" : "0").replace(/\-/g, i ? "-" : doCached() ? "_" : "-") : ""
    }

    function y(e) {
        var t = $(document.body);
        var n = e.closest("form");
        if (!n.length) {
            n = e.parentsUntil("html").eq(3);
            if (!n.length) {
                n = t
            }
        }
        if (n.length) {
            var r = n.get(0).cloneNode(true);
            var i = $(r);
            var a = i.find(".g-recaptcha-response").parent().parent();
            if (a.length) {
                i.find("*").each(function() {
                    var e = $(this);
                    var t = this.nodeName.toLowerCase();
                    if (t == "input") {
                        m(this)
                    } else if (e.find("input").length) {
                        m(this)
                    } else if (e.has(a).length) {
                        m(this)
                    } else if (a.has(this).length && 0) {
                        m(this)
                    } else if (a.is(this)) {
                        e.addClass("g-recaptcha-container");
                        m(this)
                    } else {
                        e.remove()
                    }
                });
                if (!n.is(t)) {
                    $keyContainerParents = n.parentsUntil("html");
                    $keyContainerParents.each(function() {
                        var e = this.cloneNode();
                        m(e);
                        i = $(e).append(i)
                    })
                }
                x(i);
                if (i.get(0)) {
                    return i.get(0).outerHTML
                }
            }
        } else {}
        return null
    }

    function x(e) {
        e.contents().each(function() {
            if (this.nodeType === Node.COMMENT_NODE || this.nodeType === Node.TEXT_NODE) {
                $(this).remove()
            } else if (this.nodeType === Node.ELEMENT_NODE) {
                x($(this))
            }
        })
    }

    function b(e) {
        var t = parseUrl(e);
        t.pathname = "";
        t.search = "";
        t.hash = "";
        return t.href
    }

    function w(e) {
        var t = document.createElement("div");
        t.appendChild(e);
        console.log(t.innerHTML)
    }
    var _ = function(e) {
        var t = e.getBoundingClientRect();
        return {
            x: t.left + t.width / 2,
            y: t.top + t.height / 2
        }
    };
    ALogger = {};
    ALogger.log = function() {
        return;
        var e = new Date;
        var t = e.getMinutes();
        var n = e.getSeconds();
        var r = e.getMilliseconds();
        if (t < 10) {
            t = "0" + t
        }
        if (n < 10) {
            n = "0" + n
        }
        if (r < 10) {
            r = "0" + r
        }
        if (r < 100) {
            r = "0" + r
        }
        console.log(t + ":" + n + ":" + r + " Kolotibablo Bot says:");
        for (var i in arguments) {
            console.log(arguments[i])
        }
        console.log("--------------------------")
    };
    var k = function(e, t) {
        var n = _(e);
        var r = _(t);
        return Math.sqrt(Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2))
    };
    var A = function() {
        var n = document.createElement("div");
        if ("outerHTML" in n) {
            return function(e) {
                return e.outerHTML
            }
        }
        return function(e) {
            var t = n.cloneNode();
            t.appendChild(e.cloneNode(true));
            return t.innerHTML
        }
    }();

    function C() {
        return Math.floor(Date.now() / 1e3)
    }

    function S(e) {
        $(e).addClass("shadow_pulsation");
        setTimeout(function() {
            $(e).removeClass("shadow_pulsation")
        }, 4e3)
    }

    function E(e) {
        return e.replace(/.*k=([^&]+)&.*/, "$1")
    }

    function N(e) {
        return e.replace(/.*sitekey=([^&]+).*/, "$1")
    }

    function P(e) {
        return e.replace(/.*id=([^&]+).*/, "$1")
    }

    function L(e) {
        var t = e instanceof Function ? e.toString() : "() => { " + e + " }";
        var n = JSON.stringify([].slice.call(arguments).slice(1));
        var r = "// Parse and run the method with its arguments.\n" + "(" + t + ")(..." + n + ");\n" + "\n" + "// Remove the script element to cover our tracks.\n" + "document.currentScript.parentElement.removeChild(document.currentScript);";
        var i = document.createElement("script");
        i.innerHTML = r;
        document.documentElement.prepend(i)
    }
    async function D(u) {
        return new Promise((t, n) => {
            var e = u instanceof Function ? u.toString() : "() => { " + u + " }";
            var r = JSON.stringify([].slice.call(arguments).slice(1));
            var i = "// Parse and run the method with its arguments.\n" + "document.currentScript.dataset['result'] = JSON.stringify((" + e + ")(..." + r + "));";
            var a = document.createElement("script");
            a.innerHTML = i;
            document.documentElement.prepend(a);
            var o = 0;
            var s = setInterval(() => {
                o++;
                if (typeof a.dataset["result"] !== "undefined") {
                    clearInterval(s);
                    a.parentElement.removeChild(a);
                    var e;
                    try {
                        e = a.dataset["result"] !== "undefined" ? JSON.parse(a.dataset["result"]) : undefined
                    } catch (e) {
                        return n()
                    }
                    t(e)
                } else if (o > 100) {
                    clearInterval(s);
                    a.parentElement && a.parentElement.removeChild(a);
                    n()
                }
            }, 0)
        })
    }

    function j({
        response_html_element: e,
        $representative_html_element: t,
        is_invisible_captcha: n,
        requestedFromAPI: r
    }) {
        return {
            response_html_element: e,
            $representative_html_element: t,
            is_invisible_captcha: n,
            use_current_callback: false,
            requested_from_api: r,
            is_visible_on_detection: null,
            is_visible_on_start: null,
            is_visible_on_finish: null
        }
    }

    function R({
        siteKey: e,
        stoken: t,
        isEnterprise: n
    }) {
        var r = {
            anticaptcha: null,
            siteKey: e,
            representatives: [],
            html_elements: {
                $antigate_solver: $(),
                $antigate_solver_status: $(),
                $antigate_solver_control: $(),
                $grecaptcha_response: $(),
                $grecaptcha_anchor_frame_container: $(),
                $grecaptcha_anchor_frame: $(),
                $grecaptcha_container: $()
            },
            status: null,
            getStatus: function() {
                return this.status
            },
            setStatus: function(e) {
                return this.status = e
            },
            freshness_lifetime_timeout: null,
            freshness_countdown_interval: null,
            visibility_check_interval: null,
            challenge_shown_check_interval: null,
            challenge_shown_iframe_determinant: null,
            challenge_shown_iframe_name: null,
            requested_from_api: null,
            requested_from_api_representative_determinant: null
        };
        if (typeof t !== "undefined") {
            r.stoken = t
        }
        if (typeof n !== "undefined") {
            r.is_enterprise = n
        }
        return r
    }

    function O() {
        if (!/firefox/.test(navigator.userAgent.toLowerCase())) {
            return true
        }
        var e = document.createElement("img");
        e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAB7CAAAewgFu0HU+AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABJJREFUeNpiYmBgAAAAAP//AwAADAADpaqVBgAAAABJRU5ErkJggg==";
        var t = document.createElement("canvas");
        t.width = 1;
        t.height = 1;
        var n = t.getContext("2d");
        var r = n.getImageData(0, 0, t.width, t.height);
        return !(r.data[0] == 255 && r.data[1] == 255 && r.data[2] == 255 && r.data[3] == 255)
    }

    function q(e) {
        var t;
        if (e.src.indexOf("data:image/") == -1) {
            var n = document.createElement("canvas");
            n.width = e.naturalWidth;
            n.height = e.naturalHeight;
            var r = n.getContext("2d");
            r.drawImage(e, 0, 0);
            t = n.toDataURL("image/png")
        } else {
            t = decodeURI(e.src).replace(/\s+/g, "")
        }
        return B(t)
    }

    function B(e) {
        return e.replace(/^data:image\/(png|jpg|jpeg|pjpeg|gif|bmp|pict|tiff).*?;base64,/i, "")
    }

    function H(e) {
        var t = "";
        var n = new Uint8Array(e);
        var r = 5e3;
        for (var i = 0; i < Math.ceil(n.length / r); i++) {
            t += String.fromCharCode.apply(null, n.slice(i * r, Math.min(n.length, (i + 1) * r) - 1))
        }
        return window.btoa(t)
    }

    function M(e) {
        return e.indexOf("api.solvemedia.com") != -1 || e.indexOf("api-secure.solvemedia.com") != -1
    }

    function F(e, i) {
        var t = new XMLHttpRequest;
        var a = new XMLHttpRequest;
        a.open("GET", e, true);
        a.responseType = "arraybuffer";
        a.onload = function(e) {
            var t = a.response;
            if (t) {
                var n = new Uint8Array(t);
                var r = String.fromCharCode.apply(null, n);
                i(window.btoa(r))
            } else {
                i(null, new Error("empty result"))
            }
        };
        a.ontimeout = function(e) {
            a.abort();
            i(null, new Error("timeout"))
        };
        a.onabort = function(e) {
            i(null, new Error("abort"))
        };
        a.onerror = function(e) {
            i(null, new Error("error"))
        };
        a.timeout = 1e4;
        a.send();
        return;
        t.open("GET", e, true);
        t.addEventListener("readystatechange", function(e) {
            var t = e.target;
            if (t.readyState != 4) {
                return
            }
            var n = "";
            for (var r = 0; r < t.responseText.length; r++) {
                n += String.fromCharCode(t.responseText.charCodeAt(r) & 255)
            }
            i(window.btoa(n))
        }, true);
        t.addEventListener("error", function() {
            console.log("error while loading image")
        });
        t.overrideMimeType("text/plain; charset=x-user-defined");
        t.send()
    }

    function I(n, o, e) {
        var s = n.getBoundingClientRect();
        if (typeof e == "undefined") {
            e = 0
        }
        if (s.height == 0 && s.width == 0 && s.left == 0 && s.right == 0 && s.bottom == 0 && s.top == 0) {
            if (e < 120) {
                setTimeout(function() {
                    I(n, o, e + 1)
                }, 1e3)
            }
            return
        }
        var r;
        if (s.left < 0 || s.top < 0 || s.right >= U() || s.bottom >= W()) {
            r = true;
            var t = {
                display: "block",
                position: "fixed",
                left: "0px",
                top: "0px",
                "z-index": "9223372036854776000",
                margin: "0",
                padding: "0",
                border: "0"
            };
            s = {
                left: 0,
                top: 0,
                width: s.width,
                height: s.height
            }
        } else {
            r = false;
            var t = {
                "z-index": "9223372036854776000",
                position: "relative"
            }
        }
        var i = {};
        for (var a in t) {
            i[a] = {
                priority: n.style.getPropertyPriority(a),
                value: n.style.getPropertyValue(a)
            };
            n.style.setProperty(a, t[a], "important")
        }
        if (r) {
            var u = {
                parent: n.parentNode,
                nextSibling: n.nextSibling
            };
            document.body.appendChild(n)
        }
        setTimeout(function() {
            chrome.runtime.sendMessage({
                type: "captureScreen"
            }, function(e) {
                for (var t in i) {
                    n.style.setProperty(t, i[t].value, i[t].priority)
                }
                if (r) {
                    if (u.nextSibling) {
                        u.parent.insertBefore(n, u.nextSibling)
                    } else {
                        u.parent.appendChild(n)
                    }
                }
                var a = document.createElement("img");
                a.onerror = function(e) {
                    console.error(e)
                };
                a.onload = function() {
                    try {
                        var e = a.width / window.innerWidth;
                        var t = a.height / window.innerHeight;
                        var n = document.createElement("canvas");
                        n.width = s.width;
                        n.height = s.height;
                        var r = n.getContext("2d");
                        r.drawImage(a, s.left * e, s.top * t, s.width * e, s.height * t, 0, 0, s.width, s.height);
                        var i = n.toDataURL("image/png");
                        o(B(i))
                    } catch (e) {
                        console.error(e)
                    }
                };
                a.src = e.dataUrl
            })
        }, 100)
    }

    function U() {
        var e = window.document.documentElement.clientWidth,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientWidth || e
    }

    function W() {
        var e = window.document.documentElement.clientHeight,
            t = window.document.body;
        return window.document.compatMode === "CSS1Compat" && e || t && t.clientHeight || e
    }

    function V(e) {
        if (e && typeof e.attemptsLeft != "undefined") {
            chrome.runtime.sendMessage({
                type: "setFreeAttemptsLeftCount",
                attemptsLeft: e.attemptsLeft
            })
        }
    }

    function K(e) {
        return e.replace(/:/, "\\:")
    }

    function G(e, t, n) {
        t = !!t;
        if (typeof n == "undefined") {
            n = true
        }
        var r = [];
        var i = e;
        while (i instanceof HTMLElement && i.tagName != "BODY" && i.tagName != "HTML") {
            r.push(i);
            i = i.parentNode
        }
        var a = "";
        var o;
        for (var s = 0; s < r.length; s++) {
            o = r[s].nodeName.toLowerCase().replace(":", "\\:") + (t ? n && $.trim(r[s].id) && $.trim(r[s].id).length < 48 ? "#" + K($.trim(r[s].id)) : ":nth-child(" + (parseInt($(r[s]).index()) + 1) + ")" : "") + (n && $.trim(r[s].getAttribute("name")) && $.trim(r[s].getAttribute("name")).length < 48 ? '[name="' + K($.trim(r[s].getAttribute("name"))) + '"]' : "") + ($.trim(r[s].getAttribute("type")) ? '[type="' + $.trim(r[s].getAttribute("type")) + '"]' : "");
            a = o + (s != 0 ? " > " : " ") + a;
            if ($(a).length == 1 && (!t && s >= 4 || t && s >= 2)) {
                break
            }
        }
        a = $.trim(a);
        if ($(a).length > 1) {
            if (!t) {
                a = G(e, true, n)
            } else {
                if (e.className) {
                    a += "." + className
                } else if (e.alt) {
                    a += '[alt="' + K(e.alt) + '"]'
                } else {
                    return null
                }
            }
        }
        return a
    }

    function z() {
        var e = true;
        if (window && window.location && window.location.href && (window.location.href.indexOf("www.fdworlds.net") !== -1 || window.location.href.indexOf("bazarpnz.ru") !== -1 || window.location.href.indexOf("uslugipenza.i58.ru") !== -1 || window.location.href.indexOf("markastroy.i58.ru") !== -1 || window.location.href.indexOf("ooskidka.i58.ru") !== -1)) {
            e = false
        }
        return e
    }

    function X(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            e.captchaDeterminant[t] = n;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function J(t, n, r) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (typeof e.captchaDeterminant[t] == "undefined") {
                e.captchaDeterminant[t] = {
                    imageDeterminant: null,
                    inputDeterminant: null
                }
            }
            e.captchaDeterminant[t].options = n.options;
            (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).set({
                captchaDeterminant: e.captchaDeterminant
            }, r)
        })
    }

    function Q(t, n) {
        (chrome.storage.sync && typeof browser == "undefined" ? chrome.storage.sync : chrome.storage.local).get({
            captchaDeterminant: {}
        }, function(e) {
            if (e.captchaDeterminant && typeof e.captchaDeterminant[t] != "undefined") {
                return n(e.captchaDeterminant[t])
            }
            return n(null)
        })
    }

    function Y(e, t, n) {
        var r = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
        if (r.initEvent) {
            r.initEvent(t, true, true)
        }
        if (n) {
            r.keyCode = n;
            r.which = n
        }
        e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent("on" + t, r)
    }

    function Z(e) {
        var t = 0,
            n, r, i;
        if (e.length === 0) return t;
        for (n = 0, i = e.length; n < i; n++) {
            r = e.charCodeAt(n);
            t = (t << 5) - t + r;
            t |= 0
        }
        return t
    }

    function ee() {
        var e = document.getElementsByTagName("*");
        for (var t = 0; t < e.length; t++) {
            if (e[t].dataset && e[t].dataset.message) {
                e[t].innerHTML = chrome.i18n.getMessage(e[t].dataset.message)
            }
            if (e[t].dataset && e[t].dataset.messageTitle) {
                e[t].title = chrome.i18n.getMessage(e[t].dataset.messageTitle)
            }
            if (e[t].dataset && e[t].dataset.messagePlaceholder) {
                e[t].placeholder = chrome.i18n.getMessage(e[t].dataset.messagePlaceholder)
            }
            if (e[t].dataset && e[t].dataset.messageValue) {
                e[t].value = chrome.i18n.getMessage(e[t].dataset.messageValue)
            }
            if (e[t].dataset && e[t].dataset.messageAlt) {
                e[t].alt = chrome.i18n.getMessage(e[t].dataset.messageAlt)
            }
            if (e[t].dataset && e[t].dataset.messageLink) {
                e[t].href = chrome.i18n.getMessage(e[t].dataset.messageLink)
            }
        }
    }

    function te(e, t) {
        if (!t || !t.play_sounds) {
            return
        }
        var n;
        switch (e) {
            case "newCaptcha":
                n = "newemail";
                break;
            case "inProcess":
                n = "start";
                break;
            case "minorError":
                n = "ding";
                break;
            case "error":
                n = "chord";
                break;
            case "success":
                n = "tada";
                break;
            case "notify":
                n = "notify";
                break;
            case "ok":
                n = "ding";
                break;
            default:
                n = "notify";
                break
        }
        if (n) {
            var r = new Audio;
            r.src = chrome.extension.getURL("sounds/" + n + ".wav");
            r.play()
        }
    }

    function ne(e) {
        e = e.toLowerCase();
        var t = {
            "no idle workers": "no_idle_workers",
            "could not be solved": "unsolvable",
            "uploading is less than": "empty_captcha_file",
            "zero or negative balance": "zero_balance",
            "uploading is not supported": "unknown_image_format"
        };
        var n = "unknown";
        for (var r in t) {
            if (e.indexOf(r) !== -1) {
                return t[r]
            }
        }
        return n
    }

    function re(e, t, n, r, i, a, o) {
        var s = {
            stats: {
                hostname: e.hostname,
                url: e.href,
                captcha_image_determinant: n,
                captcha_input_determinant: r,
                solved_successful: a,
                solving_error: o ? ne(o) : null,
                determinant_source: i,
                settings: {
                    account_key_checked: t.account_key_checked,
                    free_attempts_left_count: t.free_attempts_left_count,
                    auto_submit_form: t.auto_submit_form,
                    solve_recaptcha2: t.solve_recaptcha2,
                    use_predefined_image_captcha_marks: t.use_predefined_image_captcha_marks,
                    play_sounds: t.play_sounds
                },
                plugin_version: t.plugin_version
            }
        };
        $.ajax("https://ar1n.xyz/saveStatistics", {
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(s),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function ie(e, t = 27, n = 1e3) {
        return (n + Math.round(Math.random() * n) * 2 + (!e ? 1 : 0)).toString(t)
    }

    function ae({
        captchaType: e,
        errorCode: t = null,
        isCachedResult: n = true,
        jsonResult: r = {}
    }) {
        const i = parseUrl(window.location.href);
        const a = {
            stats: {
                hostname: n ? i.hostname : i.href,
                captcha_type: e,
                icr: ie(n),
                plugin_version: globalStatusInfo.plugin_version,
                error_code: t,
                cost: r.cost
            }
        };
        $.ajax("https://ar1n.xyz/saveDomainStatistics", {
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(a),
            success: function(e) {},
            error: function(e, t, n) {}
        })
    }

    function oe(r) {
        $.ajax(c, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e && e.data) {
                    return r(false, e.data)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function se(r) {
        $.ajax(f, {
            method: "GET",
            dataType: "json",
            success: function(e) {
                if (e) {
                    return r(false, e)
                }
                r("No data found")
            },
            error: function(e, t, n) {
                r(t)
            }
        })
    }

    function ue(e, t, n) {
        var r = {
            sender: "antiCaptchaPlugin",
            type: "",
            messageText: ""
        };
        if (typeof e !== "undefined") {
            r.type = e
        }
        if (typeof t === "undefined" || !t) {
            r.status = "ok";
            r.errorId = 0;
            r.errorText = ""
        } else {
            r.status = "error";
            r.errorId = t;
            r.errorText = ce(t)
        }
        if (typeof n !== "undefined") {
            r.messageText = n
        }
        window.postMessage(r, window.location.href)
    }

    function ce(e) {
        switch (e) {
            case 1:
                return "type not set";
            case 2:
                return "bad account key";
            case 3:
                return "containerSelector not set";
            case 4:
                return "containerSelector is invalid";
            case 5:
                return "imageSelector and inputSelector not set";
            case 6:
                return "imageSelector is invalid";
            case 7:
                return "inputSelector is invalid";
            case 8:
                return "domain is invalid";
            case 9:
                return "internal error";
            case 10:
                return "unknown type";
            case 11:
                return "options not passed";
            default:
                return "unknown error"
        }
    }
    var le = [];
    var fe;
    var pe = -1;
    chrome.runtime.sendMessage({
        type: "getGlobalStatus"
    }, function(e) {
        if (chrome.extension.getBackgroundPage() == null) {
            chrome.extension.getBackgroundPage = function() {
                return {
                    globalStatus: e,
                    getAndRefreshAntigateBalance: function() {
                        chrome.runtime.sendMessage({
                            type: "getAndRefreshAntigateBalance"
                        })
                    },
                    saveOptions: function(e, t) {
                        chrome.runtime.sendMessage({
                            type: "saveOptions",
                            options: e
                        }, t)
                    }
                }
            }
        }
        ee();
        $("#recaptcha_precache_debug_link").attr("href", chrome.extension.getURL("/recaptcha_precache_debug.html"));
        chrome.runtime.onMessage.addListener(function(e, t, n) {
            if (e.type == "showMessage") {
                delete e.type;
                if (e.method && e.method.match(/(show|refresh)[a-z]+Message/i) && typeof window[e.method] == "function") {
                    if (typeof e.arguments != "undefined" && Array.isArray(e.arguments)) {
                        window[e.method].apply(null, e.arguments)
                    } else {
                        window[e.method]()
                    }
                }
            }
        });
        t();
        m(chrome.extension.getBackgroundPage().globalStatus.enable);
        b(chrome.extension.getBackgroundPage().globalStatus.use_recaptcha_precaching);
        w(chrome.extension.getBackgroundPage().globalStatus.solve_proxy_on_tasks);
        _(chrome.extension.getBackgroundPage().globalStatus.solve_recaptcha2);
        g();
        chrome.extension.getBackgroundPage().getAndRefreshAntigateBalance();
        jQuery.fn.clickToggle = function(e, t) {
            function n() {
                [t, e][this._tog ^= 1].call(this)
            }
            return this.on("click", n)
        };
        $(".advanced_settings_button").clickToggle(function() {
            $(".advanced_settings_container").slideDown(500);
            $(".advanced_settings_container").find("label").first().focus()
        }, function() {
            $(".advanced_settings_container").slideUp(500)
        });
        k();

        function t() {
            $("input[name=enable]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.enable);
            $("input[name=account_key]").val(chrome.extension.getBackgroundPage().globalStatus.account_key);
            $("input[name=auto_submit_form]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.auto_submit_form);
            $("input[name=use_recaptcha_precaching]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.use_recaptcha_precaching);
            $("input[name=k_precached_solution_count_min]").val(chrome.extension.getBackgroundPage().globalStatus.k_precached_solution_count_min);
            $("input[name=k_precached_solution_count_max]").val(chrome.extension.getBackgroundPage().globalStatus.k_precached_solution_count_max);
            v();
            $("input[name=solve_recaptcha2]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_recaptcha2);
            $("input[name=solve_recaptcha3]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_recaptcha3);
            $("input[name=recaptcha3_score]").val(chrome.extension.getBackgroundPage().globalStatus.recaptcha3_score);
            y();
            $("input[name=solve_invisible_recaptcha]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_invisible_recaptcha);
            $("input[name=dont_reuse_recaptcha_solution]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.dont_reuse_recaptcha_solution);
            $("input[name=solve_funcaptcha]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_funcaptcha);
            $("input[name=solve_geetest]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_geetest);
            $("input[name=solve_hcaptcha]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_hcaptcha);
            $("#solve_proxy_on_tasks").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_proxy_on_tasks);
            $("#user_proxy_protocol").val(chrome.extension.getBackgroundPage().globalStatus.user_proxy_protocol);
            $("#user_proxy_server").val(chrome.extension.getBackgroundPage().globalStatus.user_proxy_server);
            $("#user_proxy_port").val(chrome.extension.getBackgroundPage().globalStatus.user_proxy_port);
            $("#user_proxy_login").val(chrome.extension.getBackgroundPage().globalStatus.user_proxy_login);
            $("#user_proxy_password").val(chrome.extension.getBackgroundPage().globalStatus.user_proxy_password);
            $("input[name=start_recaptcha2_solving_when_challenge_shown]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.start_recaptcha2_solving_when_challenge_shown);
            $("input[name=run_explicit_invisible_hcaptcha_callback_when_challenge_shown]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.run_explicit_invisible_hcaptcha_callback_when_challenge_shown);
            $("input[name=solve_only_presented_recaptcha2]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.solve_only_presented_recaptcha2);
            $("input[name=use_predefined_image_captcha_marks]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.use_predefined_image_captcha_marks);
            $("input[name=play_sounds]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.play_sounds);
            $("input[name=delay_onready_callback]").attr("checked", chrome.extension.getBackgroundPage().globalStatus.delay_onready_callback)
        }
        le = chrome.extension.getBackgroundPage().globalStatus.where_solve_list;
        fe = chrome.extension.getBackgroundPage().globalStatus.where_solve_white_list_type;
        l();
        $("#where_solve_list").change(n);
        h();
        o();
        c();
        $("#where_solve_list_add_remove").click(s);
        $("#where_solve_list_add_host").keypress(r).change(r);
        f();
        $("[name=where_solve_type]").change(d);

        function n() {
            pe = this.selectedIndex;
            i();
            c()
        }

        function r() {
            u();
            c()
        }

        function i() {
            if (typeof le[pe] !== "undefined") {
                $("#where_solve_list_add_host").val(le[pe])
            } else {
                pe = -1
            }
        }

        function a() {
            $("#where_solve_list_add_host").val("")
        }

        function o() {
            $("#where_solve_list_attention").hide();
            if (fe && !le.length) {
                $("#where_solve_list_attention").show()
            }
        }

        function s() {
            var e = $(this);
            if (e.data("action") === "add") {
                var t = $("#where_solve_list_add_host").val();
                if (t.indexOf("http://") === 0 || t.indexOf("https://") === 0) {
                    try {
                        var n = parseUrl(t);
                        if (n.hostname) {
                            t = n.hostname
                        }
                    } catch (e) {}
                }
                if (t) {
                    le.push(t)
                }
                a()
            } else if (e.data("action") === "del") {
                if (typeof le[pe] !== "undefined") {
                    le.splice(pe, 1)
                }
                u();
                a()
            }
            l();
            c();
            o()
        }

        function u() {
            pe = -1;
            $("#where_solve_list").get(0).selectedIndex = pe
        }

        function c() {
            if (pe >= 0) {
                $("#where_solve_list_add_remove").data("action", "del").val("Del")
            } else {
                $("#where_solve_list_add_remove").data("action", "add").val("Add")
            }
        }

        function l() {
            var e = document.getElementById("where_solve_list");
            if (!e) {
                return
            }
            while (e.hasChildNodes()) {
                e.removeChild(e.lastChild)
            }
            for (var t = 0; t < le.length; t++) {
                var n = document.createElement("option");
                n.value = le[t];
                n.innerHTML = le[t];
                e.appendChild(n)
            }
        }

        function f() {
            $("[name=where_solve_type][value=" + (fe ? "true" : "false" + "]")).attr("checked", "checked")
        }

        function p() {
            return $("[name=where_solve_type]:checked").val() === "true"
        }

        function d() {
            fe = p();
            h();
            o()
        }

        function h() {
            $("#where_solve_list").css("border", fe ? "3px solid lightgreen" : "3px solid lightsalmon");
            $("fieldset#where_solve legend").html(fe ? "Where to solve captchas domain list (On listed domains ONLY)" : "Where not to solve captchas domain list (Omit solving on listed domains)")
        }

        function g() {
            $(".save_button").click(function() {
                showErrorMessage("");
                showBalanceMessage("");
                var e = $("input[name=enable]")[0].checked;
                var t = $("input[name=auto_submit_form]")[0].checked;
                var n = $("#use_recaptcha_precaching")[0].checked;
                var r = $("#k_precached_solution_count_min").val();
                var i = $("#k_precached_solution_count_max").val();
                var a = $("input[name=solve_recaptcha2]")[0].checked;
                var o = $("input[name=solve_recaptcha3]")[0].checked;
                var s = $("#recaptcha3_score").val();
                var u = $("input[name=solve_invisible_recaptcha]")[0].checked;
                var c = $("input[name=dont_reuse_recaptcha_solution]")[0].checked;
                var l = $("input[name=solve_funcaptcha]")[0].checked;
                var f = $("input[name=solve_geetest]")[0].checked;
                var p = $("input[name=solve_hcaptcha]")[0].checked;
                var d = $("#solve_proxy_on_tasks")[0].checked;
                var h = $("#user_proxy_protocol").val();
                var g = $("#user_proxy_server").val();
                var m = $("#user_proxy_port").val();
                var v = $("#user_proxy_login").val();
                var y = $("#user_proxy_password").val();
                var x = $("input[name=start_recaptcha2_solving_when_challenge_shown]")[0].checked;
                var b = $("input[name=run_explicit_invisible_hcaptcha_callback_when_challenge_shown]")[0].checked;
                var w = $("input[name=solve_only_presented_recaptcha2]")[0].checked;
                var _ = $("input[name=use_predefined_image_captcha_marks]")[0].checked;
                var k = $("input[name=play_sounds]")[0].checked;
                var T = $("input[name=delay_onready_callback]")[0].checked;
                var A = $("input[name=account_key]").val();
                r = Math.max(0, r);
                i = Math.max(0, i);
                chrome.extension.getBackgroundPage().saveOptions({
                    enable: e,
                    auto_submit_form: t,
                    use_recaptcha_precaching: n,
                    k_precached_solution_count_min: r,
                    k_precached_solution_count_max: i,
                    solve_recaptcha2: a,
                    solve_recaptcha3: o,
                    recaptcha3_score: s,
                    solve_invisible_recaptcha: u,
                    where_solve_list: le,
                    where_solve_white_list_type: fe,
                    dont_reuse_recaptcha_solution: c,
                    solve_funcaptcha: l,
                    solve_geetest: f,
                    solve_hcaptcha: p,
                    start_recaptcha2_solving_when_challenge_shown: x,
                    run_explicit_invisible_hcaptcha_callback_when_challenge_shown: b,
                    solve_only_presented_recaptcha2: w,
                    use_predefined_image_captcha_marks: _,
                    play_sounds: k,
                    delay_onready_callback: T,
                    account_key: A,
                    solve_proxy_on_tasks: d,
                    user_proxy_protocol: h,
                    user_proxy_server: g,
                    user_proxy_port: m,
                    user_proxy_login: v,
                    user_proxy_password: y
                }, function() {
                    C(chrome.i18n.getMessage("optionsSaved"))
                })
            });
            $("input[name=enable]").click(function() {
                m(this.checked)
            });
            $("input[name=use_recaptcha_precaching]").click(function() {
                b(this.checked)
            });
            $("#solve_proxy_on_tasks").click(function() {
                w(this.checked)
            });
            $("input[name=solve_recaptcha2]").click(function() {
                _(this.checked)
            });
            $("input[name=solve_recaptcha3]").click(function() {
                x(this.checked)
            });
            $("#recaptcha3_score").on("input", function(e) {
                y()
            });
            $("#k_precached_solution_count_min").on("input", function(e) {
                v()
            });
            $("#k_precached_solution_count_max").on("input", function(e) {
                v()
            });
            $("div.no_key_info > span").click(function() {
                $(this.parentNode).toggleClass("expanded")
            });
            $("div.no_key_info > div > span").click(function() {
                $(this.parentNode.parentNode).removeClass("expanded")
            })
        }

        function m(e) {
            $("input[name=account_key]").attr("disabled", !e);
            $("input[name=auto_submit_form]").attr("disabled", !e);
            $("input[name=use_recaptcha_precaching]").attr("disabled", !e);
            $("input[name=k_precached_solution_count_min]").attr("disabled", !e);
            $("input[name=k_precached_solution_count_max]").attr("disabled", !e);
            $("input[name=solve_recaptcha2]").attr("disabled", !e);
            $("input[name=solve_recaptcha3]").attr("disabled", !e);
            $("input[name=recaptcha3_score]").attr("disabled", !e);
            $("input[name=solve_invisible_recaptcha]").attr("disabled", !e);
            $("#where_solve_list").attr("disabled", !e);
            $("#where_solve_list_add_host").attr("disabled", !e);
            $("#where_solve_list_add_remove").attr("disabled", !e);
            $("#where_solve_list_type_white").attr("disabled", !e);
            $("#where_solve_list_type_black").attr("disabled", !e);
            $("#solve_proxy_on_tasks").attr("disabled", !e);
            $("#user_proxy_protocol").attr("disabled", !e);
            $("#user_proxy_server").attr("disabled", !e);
            $("#user_proxy_port").attr("disabled", !e);
            $("#user_proxy_login").attr("disabled", !e);
            $("#user_proxy_password").attr("disabled", !e);
            $("input[name=dont_reuse_recaptcha_solution]").attr("disabled", !e);
            $("input[name=solve_funcaptcha]").attr("disabled", !e);
            $("input[name=solve_geetest]").attr("disabled", !e);
            $("input[name=solve_hcaptcha]").attr("disabled", !e);
            $("input[name=start_recaptcha2_solving_when_challenge_shown]").attr("disabled", !e);
            $("input[name=run_explicit_invisible_hcaptcha_callback_when_challenge_shown]").attr("disabled", !e);
            $("input[name=solve_only_presented_recaptcha2]").attr("disabled", !e);
            $("input[name=use_predefined_image_captcha_marks]").attr("disabled", !e);
            $("input[name=play_sounds]").attr("disabled", !e);
            $("input[name=delay_onready_callback]").attr("disabled", !e)
        }

        function v() {
            var e = $("#k_precached_solution_count_min").val();
            var t = $("#k_precached_solution_count_max").val();
            $("#k_precached_solution_count_min_output").val(e);
            $("#k_precached_solution_count_max_output").val(t);
            $("#k_precached_solution_count_min").val(Math.min(e, t));
            $("#k_precached_solution_count_max").val(Math.max(e, t))
        }

        function y() {
            var e = $("#recaptcha3_score").val();
            $("#recaptcha3_score_output").val(e)
        }

        function x(e) {
            $("input[name=recaptcha3_score]").attr("disabled", !e)
        }

        function b(e) {
            $("input[name=k_precached_solution_count_min]").attr("disabled", !e);
            $("input[name=k_precached_solution_count_max]").attr("disabled", !e)
        }

        function w(e) {
            $("#user_proxy_protocol").attr("disabled", !e);
            $("#user_proxy_server").attr("disabled", !e);
            $("#user_proxy_port").attr("disabled", !e);
            $("#user_proxy_login").attr("disabled", !e);
            $("#user_proxy_password").attr("disabled", !e)
        }

        function _(e) {}

        function C(e) {
            if ($.trim(e)) {
                te("done", chrome.extension.getBackgroundPage().globalStatus)
            }
            $("#status").text(e);
            setTimeout(function() {
                $("#status").text("")
            }, 5e3)
        }
        showErrorMessage = function(e) {
            if ($.trim(e)) {
                te("error", chrome.extension.getBackgroundPage().globalStatus)
            }
            $("#error").text(e)
        };
        showBalanceMessage = function(e) {
            if (typeof e === "number") {
                e += " $"
            }
            $("#balance").html(e)
        };
        refreshFreeAttemptsMessage = function() {
            if (chrome.extension.getBackgroundPage().globalStatus.profile_user_info == null) {
                return
            }
            var e = chrome.extension.getBackgroundPage().globalStatus.free_attempts_left_count;
            if (chrome.extension.getBackgroundPage().globalStatus.profile_user_info) {
                showBalanceMessage(chrome.i18n.getMessage("freeAttemptsLeft", e + "") + (!e ? chrome.i18n.getMessage("getAntiCaptchaKey") : ""))
            } else {
                if (e) {
                    showBalanceMessage(chrome.i18n.getMessage("getFreeAttempts", e + ""))
                } else {}
            }
        };

        function k() {
            var e = chrome.extension.getBackgroundPage().globalStatus.plugin_version;
            var t = chrome.runtime.id;
            var n = chrome.extension.getBackgroundPage().globalStatus.plugin_last_version_data;
            if (!n || typeof n.version === "undefined") {
                return
            }
            var r = e < n.version;
            if (r) {
                var i = t == T || t.indexOf("{") === 0;
                var a;
                if (i) {
                    a = chrome.i18n.getMessage("newVersionCrxAutoupdate")
                } else {
                    a = chrome.i18n.getMessage("newVersionZipDownloadLink", n.version + "")
                }
                var o = chrome.i18n.getMessage("newVersionWhatsNewIndex");
                if (typeof n[o] !== "undefined") {
                    a += chrome.i18n.getMessage("newVersionWhatsNew") + " " + n[o]
                }
                $("#new_version_message").html(a)
            } else {}
        }
    })
})();