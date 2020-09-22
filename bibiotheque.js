!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e() }(this, function () { "use strict"; function r(t) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } function a(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function o(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } function c(t, e, n) { return e && o(t.prototype, e), n && o(t, n), t } function s() { return (s = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]) } return t }).apply(this, arguments) } function u(t) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } function l(t, e) { return (l = Object.setPrototypeOf || function (t, e) { return t.__proto__ = e, t })(t, e) } function d() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0 } catch (t) { return !1 } } function i(t, e, n) { return (i = d() ? Reflect.construct : function (t, e, n) { var o = [null]; o.push.apply(o, e); var i = new (Function.bind.apply(t, o)); return n && l(i, n.prototype), i }).apply(null, arguments) } function p(t, e) { return !e || "object" != typeof e && "function" != typeof e ? function (t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e } function f(t, e, n) { return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) { var o = function (t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t));); return t }(t, e); if (o) { var i = Object.getOwnPropertyDescriptor(o, e); return i.get ? i.get.call(n) : i.value } })(t, e, n || t) } function m(e) { return Object.keys(e).map(function (t) { return e[t] }) } function h(t) { return Array.prototype.slice.call(t) } function g(t, e) { var n; n = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === Z.indexOf(n) && (Z.push(n), K(n)) } function v(t) { return t && "function" == typeof t.toPromise } function y(t) { return v(t) ? t.toPromise() : Promise.resolve(t) } function b(t) { return t && Promise.resolve(t) === t } function w(t) { return t instanceof Element || "object" === r(e = t) && e.jquery; var e } function t(t) { var e = {}; for (var n in t) e[t[n]] = "swal2-" + t[n]; return e } function C() { return document.body.querySelector(".".concat(J.container)) } function k(t) { var e = C(); return e ? e.querySelector(t) : null } function e(t) { return k(".".concat(t)) } function x() { return e(J.popup) } function n() { var t = x(); return h(t.querySelectorAll(".".concat(J.icon))) } function B() { var t = n().filter(function (t) { return wt(t) }); return t.length ? t[0] : null } function P() { return e(J.title) } function A() { return e(J.content) } function S() { return e(J.image) } function E() { return e(J["progress-steps"]) } function O() { return e(J["validation-message"]) } function T() { return k(".".concat(J.actions, " .").concat(J.confirm)) } function L() { return k(".".concat(J.actions, " .").concat(J.deny)) } function D() { return k(".".concat(J.loader)) } function q() { return k(".".concat(J.actions, " .").concat(J.cancel)) } function j() { return e(J.actions) } function I() { return e(J.header) } function M() { return e(J.footer) } function V() { return e(J["timer-progress-bar"]) } function R() { return e(J.close) } function H() { var t = h(x().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) { return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0 }), e = h(x().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) { return "-1" !== t.getAttribute("tabindex") }); return function (t) { for (var e = [], n = 0; n < t.length; n++)-1 === e.indexOf(t[n]) && e.push(t[n]); return e }(t.concat(e)).filter(function (t) { return wt(t) }) } function N() { return !G() && !document.body.classList.contains(J["no-backdrop"]) } function U() { return x().hasAttribute("data-loading") } function _(e, t) { var n; e.textContent = "", t && (n = (new DOMParser).parseFromString(t, "text/html"), h(n.querySelector("head").childNodes).forEach(function (t) { e.appendChild(t) }), h(n.querySelector("body").childNodes).forEach(function (t) { e.appendChild(t) })) } function F(t, e) { if (e) { for (var n = e.split(/\s+/), o = 0; o < n.length; o++)if (!t.classList.contains(n[o])) return; return 1 } } function z(t, e, n) { var o, i; if (i = e, h((o = t).classList).forEach(function (t) { -1 === m(J).indexOf(t) && -1 === m(X).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t) }), e.customClass && e.customClass[n]) { if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return K("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"')); vt(t, e.customClass[n]) } } var W = "SweetAlert2:", K = function (t) { console.warn("".concat(W, " ").concat(t)) }, Y = function (t) { console.error("".concat(W, " ").concat(t)) }, Z = [], Q = function (t) { return "function" == typeof t ? t() : t }, $ = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }), J = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]), X = t(["success", "warning", "info", "question", "error"]), G = function () { return document.body.classList.contains(J["toast-shown"]) }, tt = { previousBodyPadding: null }; function et(t, e) { if (!e) return null; switch (e) { case "select": case "textarea": case "file": return bt(t, J[e]); case "checkbox": return t.querySelector(".".concat(J.checkbox, " input")); case "radio": return t.querySelector(".".concat(J.radio, " input:checked")) || t.querySelector(".".concat(J.radio, " input:first-child")); case "range": return t.querySelector(".".concat(J.range, " input")); default: return bt(t, J.input) } } function nt(t) { var e; t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e) } function ot(t, e, n) { t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function (e) { t.forEach ? t.forEach(function (t) { n ? t.classList.add(e) : t.classList.remove(e) }) : n ? t.classList.add(e) : t.classList.remove(e) })) } function it(t, e, n) { n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e) } function rt(t, e) { var n = 1 < arguments.length && void 0 !== e ? e : "flex"; t.style.opacity = "", t.style.display = n } function at(t) { t.style.opacity = "", t.style.display = "none" } function ct(t, e, n, o) { var i = t.querySelector(e); i && (i.style[n] = o) } function st(t, e, n) { e ? rt(t, n) : at(t) } function ut(t) { return !!(t.scrollHeight > t.clientHeight) } function lt(t) { var e = window.getComputedStyle(t), n = parseFloat(e.getPropertyValue("animation-duration") || "0"), o = parseFloat(e.getPropertyValue("transition-duration") || "0"); return 0 < n || 0 < o } function dt(t, e) { var n = 1 < arguments.length && void 0 !== e && e, o = V(); wt(o) && (n && (o.style.transition = "none", o.style.width = "100%"), setTimeout(function () { o.style.transition = "width ".concat(t / 1e3, "s linear"), o.style.width = "0%" }, 10)) } function pt() { return "undefined" == typeof window || "undefined" == typeof document } function ft(t) { bn.isVisible() &>!== t.target.value && bn.resetValidationMessage(), gt = t.target.value } function mt(t, e) { t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? xt(t, e) : t && _(e, t) } function ht(t, e) { var n = j(), o = D(), i = T(), r = L(), a = q(); e.showConfirmButton || e.showDenyButton || e.showCancelButton || at(n), z(n, e, "actions"), At(i, "confirm", e), At(r, "deny", e), At(a, "cancel", e), o.innerHTML = e.loaderHtml, e.buttonsStyling ? function (t, e, n, o) { vt([t, e, n], J.styled), o.confirmButtonColor && (t.style.backgroundColor = o.confirmButtonColor); o.denyButtonColor && (e.style.backgroundColor = o.denyButtonColor); o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor); { var i; U() || (i = window.getComputedStyle(t).getPropertyValue("background-color"), t.style.borderLeftColor = i, t.style.borderRightColor = i) } }(i, r, a, e) : yt([i, r, a], J.styled), e.reverseButtons && (n.insertBefore(a, o), n.insertBefore(r, o), n.insertBefore(i, o)) } var gt, vt = function (t, e) { ot(t, e, !0) }, yt = function (t, e) { ot(t, e, !1) }, bt = function (t, e) { for (var n = 0; n < t.childNodes.length; n++)if (F(t.childNodes[n], e)) return t.childNodes[n] }, wt = function (t) { return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)) }, Ct = '\n <div aria-labelledby="'.concat(J.title, '" aria-describedby="').concat(J.content, '" class="').concat(J.popup, '" tabindex="-1">\n   <div class="').concat(J.header, '">\n     <ul class="').concat(J["progress-steps"], '"></ul>\n     <div class="').concat(J.icon, " ").concat(X.error, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.question, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.warning, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.info, '"></div>\n     <div class="').concat(J.icon, " ").concat(X.success, '"></div>\n     <img class="').concat(J.image, '" />\n     <h2 class="').concat(J.title, '" id="').concat(J.title, '"></h2>\n     <button type="button" class="').concat(J.close, '"></button>\n   </div>\n   <div class="').concat(J.content, '">\n     <div id="').concat(J.content, '" class="').concat(J["html-container"], '"></div>\n     <input class="').concat(J.input, '" />\n     <input type="file" class="').concat(J.file, '" />\n     <div class="').concat(J.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(J.select, '"></select>\n     <div class="').concat(J.radio, '"></div>\n     <label for="').concat(J.checkbox, '" class="').concat(J.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(J.label, '"></span>\n     </label>\n     <textarea class="').concat(J.textarea, '">