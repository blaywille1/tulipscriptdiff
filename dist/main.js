(() => {
    "use strict";

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
    }

    function e(t, e) {
        for (var r = 0; r < e.length; r++) {
            var o = e[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, n(o.key), o)
        }
    }

    function n(e) {
        var n = function (e) {
            if ("object" != t(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" != t(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
        }(e);
        return "symbol" == t(n) ? n : n + ""
    }

    const r = function () {
        return t = function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }, n = [{
            key: "render", value: function (t, e) {
                var n = document.createElement("table");
                n.border = "1";
                var r = document.createElement("tr");
                ["Name", "Age", "Job"].forEach((function (t) {
                    var e = document.createElement("th");
                    e.textContent = t, r.appendChild(e)
                })), n.appendChild(r), e.forEach((function (t) {
                    var e = document.createElement("tr");
                    Object.values(t).forEach((function (t) {
                        var n = document.createElement("td");
                        n.textContent = t, e.appendChild(n)
                    })), n.appendChild(e)
                })), t.appendChild(n)
            }
        }], null && e(t.prototype, null), n && e(t, n), Object.defineProperty(t, "prototype", {writable: !1}), t;
        var t, n
    }();

    function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, a(r.key), r)
        }
    }

    function a(t) {
        var e = function (t) {
            if ("object" != o(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != o(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(t)
        }(t);
        return "symbol" == o(e) ? e : e + ""
    }

    var u = function () {
        return t = function t(e) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.data = e
        }, (e = [{
            key: "getTableData", value: function () {
                return this.data.map((function (t) {
                    return {name: t.name, age: t.age, job: t.job}
                }))
            }
        }]) && i(t.prototype, e), Object.defineProperty(t, "prototype", {writable: !1}), t;
        var t, e
    }();
    fetch("/data.json").then((function (t) {
        return t.json()
    })).then((function (t) {
        var e = new u(t).getTableData(), n = document.getElementById("app");
        r.render(n, e)
    })).catch((function (t) {
        console.error("Ошибка загрузки данных:", t)
    }))
})();