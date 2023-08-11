import { defineComponent as ce, computed as x, ref as j, watch as ht, nextTick as Kt, watchEffect as Xe, openBlock as F, createElementBlock as X, normalizeClass as xe, normalizeStyle as Nt, withModifiers as me, createElementVNode as N, renderSlot as we, createBlock as De, resolveDynamicComponent as Jt, withCtx as he, Fragment as Le, createCommentVNode as er, renderList as He, toDisplayString as ne, resolveComponent as de, createTextVNode as Ae, withDirectives as pe, mergeProps as tr, vModelText as rr, vShow as Ce, createVNode as We, pushScopeId as ar, popScopeId as nr, unref as pt } from "vue";
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
    return typeof a;
  } : function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, z(e);
}
function C(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var a = Number(e);
  return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
}
function h(e, a) {
  if (a.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + a.length + " present");
}
function m(e) {
  h(1, arguments);
  var a = Object.prototype.toString.call(e);
  return e instanceof Date || z(e) === "object" && a === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || a === "[object Number]" ? new Date(e) : ((typeof e == "string" || a === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ir(e, a) {
  h(2, arguments);
  var r = m(e), n = C(a);
  return isNaN(n) ? /* @__PURE__ */ new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function tt(e, a) {
  h(2, arguments);
  var r = m(e), n = C(a);
  if (isNaN(n))
    return /* @__PURE__ */ new Date(NaN);
  if (!n)
    return r;
  var t = r.getDate(), o = new Date(r.getTime());
  o.setMonth(r.getMonth() + n + 1, 0);
  var i = o.getDate();
  return t >= i ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), t), r);
}
function or(e, a) {
  h(2, arguments);
  var r = m(e).getTime(), n = C(a);
  return new Date(r + n);
}
var ur = {};
function oe() {
  return ur;
}
function lr(e, a) {
  var r, n, t, o, i, u, l, s;
  h(1, arguments);
  var d = oe(), c = C((r = (n = (t = (o = a == null ? void 0 : a.weekStartsOn) !== null && o !== void 0 ? o : a == null || (i = a.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && t !== void 0 ? t : d.weekStartsOn) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = m(e), p = g.getDay(), w = (p < c ? 7 : 0) + p - c;
  return g.setDate(g.getDate() - w), g.setHours(0, 0, 0, 0), g;
}
function Yt(e) {
  var a = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return a.setUTCFullYear(e.getFullYear()), e.getTime() - a.getTime();
}
function Ze(e) {
  h(1, arguments);
  var a = m(e);
  return a.setHours(0, 0, 0, 0), a;
}
function rt(e, a) {
  h(2, arguments);
  var r = C(a);
  return tt(e, r * 12);
}
function sr(e) {
  h(1, arguments);
  var a;
  if (e && typeof e.forEach == "function")
    a = e;
  else if (z(e) === "object" && e !== null)
    a = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var r;
  return a.forEach(function(n) {
    var t = m(n);
    (r === void 0 || r < t || isNaN(Number(t))) && (r = t);
  }), r || /* @__PURE__ */ new Date(NaN);
}
function dr(e) {
  h(1, arguments);
  var a;
  if (e && typeof e.forEach == "function")
    a = e;
  else if (z(e) === "object" && e !== null)
    a = Array.prototype.slice.call(e);
  else
    return /* @__PURE__ */ new Date(NaN);
  var r;
  return a.forEach(function(n) {
    var t = m(n);
    (r === void 0 || r > t || isNaN(t.getDate())) && (r = t);
  }), r || /* @__PURE__ */ new Date(NaN);
}
var cr = 6e4, vr = 36e5, fr = 1e3;
function ze(e, a) {
  h(2, arguments);
  var r = Ze(e), n = Ze(a);
  return r.getTime() === n.getTime();
}
function mr(e) {
  return h(1, arguments), e instanceof Date || z(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function B(e) {
  if (h(1, arguments), !mr(e) && typeof e != "number")
    return !1;
  var a = m(e);
  return !isNaN(Number(a));
}
function hr(e) {
  h(1, arguments);
  var a = m(e);
  return a.setHours(23, 59, 59, 999), a;
}
function Et(e) {
  h(1, arguments);
  var a = m(e), r = a.getMonth();
  return a.setFullYear(a.getFullYear(), r + 1, 0), a.setHours(23, 59, 59, 999), a;
}
function pr(e, a) {
  var r;
  h(1, arguments);
  var n = e || {}, t = m(n.start), o = m(n.end), i = o.getTime();
  if (!(t.getTime() <= i))
    throw new RangeError("Invalid interval");
  var u = [], l = t;
  l.setHours(0, 0, 0, 0);
  var s = Number((r = a == null ? void 0 : a.step) !== null && r !== void 0 ? r : 1);
  if (s < 1 || isNaN(s))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; l.getTime() <= i; )
    u.push(m(l)), l.setDate(l.getDate() + s), l.setHours(0, 0, 0, 0);
  return u;
}
function gt(e) {
  h(1, arguments);
  var a = m(e);
  return a.setSeconds(0, 0), a;
}
function gr(e) {
  h(1, arguments);
  var a = e || {}, r = m(a.start), n = m(a.end), t = n.getTime(), o = [];
  if (!(r.getTime() <= t))
    throw new RangeError("Invalid interval");
  var i = r;
  for (i.setHours(0, 0, 0, 0), i.setDate(1); i.getTime() <= t; )
    o.push(m(i)), i.setMonth(i.getMonth() + 1);
  return o;
}
function Ut(e) {
  h(1, arguments);
  var a = m(e);
  return a.setDate(1), a.setHours(0, 0, 0, 0), a;
}
function wr(e) {
  h(1, arguments);
  var a = m(e), r = a.getFullYear();
  return a.setFullYear(r + 1, 0, 0), a.setHours(23, 59, 59, 999), a;
}
function br(e) {
  h(1, arguments);
  var a = m(e), r = /* @__PURE__ */ new Date(0);
  return r.setFullYear(a.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function yr(e) {
  h(1, arguments);
  var a = e || {}, r = m(a.start), n = m(a.end), t = n.getTime();
  if (!(r.getTime() <= t))
    throw new RangeError("Invalid interval");
  var o = [], i = r;
  for (i.setHours(0, 0, 0, 0), i.setMonth(0, 1); i.getTime() <= t; )
    o.push(m(i)), i.setFullYear(i.getFullYear() + 1);
  return o;
}
function Dr(e) {
  h(1, arguments);
  var a = m(e), r = a.getFullYear(), n = 9 + Math.floor(r / 10) * 10;
  return a.setFullYear(n, 11, 31), a.setHours(23, 59, 59, 999), a;
}
function Tr(e, a) {
  var r, n, t, o, i, u, l, s;
  h(1, arguments);
  var d = oe(), c = C((r = (n = (t = (o = a == null ? void 0 : a.weekStartsOn) !== null && o !== void 0 ? o : a == null || (i = a.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && t !== void 0 ? t : d.weekStartsOn) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = m(e), p = g.getDay(), w = (p < c ? -7 : 0) + 6 - (p - c);
  return g.setDate(g.getDate() + w), g.setHours(23, 59, 59, 999), g;
}
function $t(e, a) {
  h(2, arguments);
  var r = C(a);
  return or(e, -r);
}
var kr = 864e5;
function _r(e) {
  h(1, arguments);
  var a = m(e), r = a.getTime();
  a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  var n = a.getTime(), t = r - n;
  return Math.floor(t / kr) + 1;
}
function ye(e) {
  h(1, arguments);
  var a = 1, r = m(e), n = r.getUTCDay(), t = (n < a ? 7 : 0) + n - a;
  return r.setUTCDate(r.getUTCDate() - t), r.setUTCHours(0, 0, 0, 0), r;
}
function Wt(e) {
  h(1, arguments);
  var a = m(e), r = a.getUTCFullYear(), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var t = ye(n), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = ye(o);
  return a.getTime() >= t.getTime() ? r + 1 : a.getTime() >= i.getTime() ? r : r - 1;
}
function Pr(e) {
  h(1, arguments);
  var a = Wt(e), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(a, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = ye(r);
  return n;
}
var Or = 6048e5;
function St(e) {
  h(1, arguments);
  var a = m(e), r = ye(a).getTime() - Pr(a).getTime();
  return Math.round(r / Or) + 1;
}
function ie(e, a) {
  var r, n, t, o, i, u, l, s;
  h(1, arguments);
  var d = oe(), c = C((r = (n = (t = (o = a == null ? void 0 : a.weekStartsOn) !== null && o !== void 0 ? o : a == null || (i = a.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && t !== void 0 ? t : d.weekStartsOn) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(c >= 0 && c <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = m(e), p = g.getUTCDay(), w = (p < c ? 7 : 0) + p - c;
  return g.setUTCDate(g.getUTCDate() - w), g.setUTCHours(0, 0, 0, 0), g;
}
function at(e, a) {
  var r, n, t, o, i, u, l, s;
  h(1, arguments);
  var d = m(e), c = d.getUTCFullYear(), g = oe(), p = C((r = (n = (t = (o = a == null ? void 0 : a.firstWeekContainsDate) !== null && o !== void 0 ? o : a == null || (i = a.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && t !== void 0 ? t : g.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = g.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setUTCFullYear(c + 1, 0, p), w.setUTCHours(0, 0, 0, 0);
  var b = ie(w, a), M = /* @__PURE__ */ new Date(0);
  M.setUTCFullYear(c, 0, p), M.setUTCHours(0, 0, 0, 0);
  var S = ie(M, a);
  return d.getTime() >= b.getTime() ? c + 1 : d.getTime() >= S.getTime() ? c : c - 1;
}
function Cr(e, a) {
  var r, n, t, o, i, u, l, s;
  h(1, arguments);
  var d = oe(), c = C((r = (n = (t = (o = a == null ? void 0 : a.firstWeekContainsDate) !== null && o !== void 0 ? o : a == null || (i = a.locale) === null || i === void 0 || (u = i.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && t !== void 0 ? t : d.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = d.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), g = at(e, a), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(g, 0, c), p.setUTCHours(0, 0, 0, 0);
  var w = ie(p, a);
  return w;
}
var Mr = 6048e5;
function qt(e, a) {
  h(1, arguments);
  var r = m(e), n = ie(r, a).getTime() - Cr(r, a).getTime();
  return Math.round(n / Mr) + 1;
}
function O(e, a) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < a; )
    n = "0" + n;
  return r + n;
}
var xr = {
  // Year
  y: function(a, r) {
    var n = a.getUTCFullYear(), t = n > 0 ? n : 1 - n;
    return O(r === "yy" ? t % 100 : t, r.length);
  },
  // Month
  M: function(a, r) {
    var n = a.getUTCMonth();
    return r === "M" ? String(n + 1) : O(n + 1, 2);
  },
  // Day of the month
  d: function(a, r) {
    return O(a.getUTCDate(), r.length);
  },
  // AM or PM
  a: function(a, r) {
    var n = a.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(a, r) {
    return O(a.getUTCHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H: function(a, r) {
    return O(a.getUTCHours(), r.length);
  },
  // Minute
  m: function(a, r) {
    return O(a.getUTCMinutes(), r.length);
  },
  // Second
  s: function(a, r) {
    return O(a.getUTCSeconds(), r.length);
  },
  // Fraction of second
  S: function(a, r) {
    var n = r.length, t = a.getUTCMilliseconds(), o = Math.floor(t * Math.pow(10, n - 3));
    return O(o, r.length);
  }
};
const se = xr;
var ge = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Lr = {
  // Era
  G: function(a, r, n) {
    var t = a.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(t, {
          width: "abbreviated"
        });
      case "GGGGG":
        return n.era(t, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return n.era(t, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(a, r, n) {
    if (r === "yo") {
      var t = a.getUTCFullYear(), o = t > 0 ? t : 1 - t;
      return n.ordinalNumber(o, {
        unit: "year"
      });
    }
    return se.y(a, r);
  },
  // Local week-numbering year
  Y: function(a, r, n, t) {
    var o = at(a, t), i = o > 0 ? o : 1 - o;
    if (r === "YY") {
      var u = i % 100;
      return O(u, 2);
    }
    return r === "Yo" ? n.ordinalNumber(i, {
      unit: "year"
    }) : O(i, r.length);
  },
  // ISO week-numbering year
  R: function(a, r) {
    var n = Wt(a);
    return O(n, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(a, r) {
    var n = a.getUTCFullYear();
    return O(n, r.length);
  },
  // Quarter
  Q: function(a, r, n) {
    var t = Math.ceil((a.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(t);
      case "QQ":
        return O(t, 2);
      case "Qo":
        return n.ordinalNumber(t, {
          unit: "quarter"
        });
      case "QQQ":
        return n.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(a, r, n) {
    var t = Math.ceil((a.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(t);
      case "qq":
        return O(t, 2);
      case "qo":
        return n.ordinalNumber(t, {
          unit: "quarter"
        });
      case "qqq":
        return n.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(a, r, n) {
    var t = a.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return se.M(a, r);
      case "Mo":
        return n.ordinalNumber(t + 1, {
          unit: "month"
        });
      case "MMM":
        return n.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(a, r, n) {
    var t = a.getUTCMonth();
    switch (r) {
      case "L":
        return String(t + 1);
      case "LL":
        return O(t + 1, 2);
      case "Lo":
        return n.ordinalNumber(t + 1, {
          unit: "month"
        });
      case "LLL":
        return n.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(a, r, n, t) {
    var o = qt(a, t);
    return r === "wo" ? n.ordinalNumber(o, {
      unit: "week"
    }) : O(o, r.length);
  },
  // ISO week of year
  I: function(a, r, n) {
    var t = St(a);
    return r === "Io" ? n.ordinalNumber(t, {
      unit: "week"
    }) : O(t, r.length);
  },
  // Day of the month
  d: function(a, r, n) {
    return r === "do" ? n.ordinalNumber(a.getUTCDate(), {
      unit: "date"
    }) : se.d(a, r);
  },
  // Day of year
  D: function(a, r, n) {
    var t = _r(a);
    return r === "Do" ? n.ordinalNumber(t, {
      unit: "dayOfYear"
    }) : O(t, r.length);
  },
  // Day of week
  E: function(a, r, n) {
    var t = a.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(t, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(a, r, n, t) {
    var o = a.getUTCDay(), i = (o - t.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(i);
      case "ee":
        return O(i, 2);
      case "eo":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(a, r, n, t) {
    var o = a.getUTCDay(), i = (o - t.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(i);
      case "cc":
        return O(i, r.length);
      case "co":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(a, r, n) {
    var t = a.getUTCDay(), o = t === 0 ? 7 : t;
    switch (r) {
      case "i":
        return String(o);
      case "ii":
        return O(o, r.length);
      case "io":
        return n.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return n.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(t, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(a, r, n) {
    var t = a.getUTCHours(), o = t / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(a, r, n) {
    var t = a.getUTCHours(), o;
    switch (t === 12 ? o = ge.noon : t === 0 ? o = ge.midnight : o = t / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(a, r, n) {
    var t = a.getUTCHours(), o;
    switch (t >= 17 ? o = ge.evening : t >= 12 ? o = ge.afternoon : t >= 4 ? o = ge.morning : o = ge.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(a, r, n) {
    if (r === "ho") {
      var t = a.getUTCHours() % 12;
      return t === 0 && (t = 12), n.ordinalNumber(t, {
        unit: "hour"
      });
    }
    return se.h(a, r);
  },
  // Hour [0-23]
  H: function(a, r, n) {
    return r === "Ho" ? n.ordinalNumber(a.getUTCHours(), {
      unit: "hour"
    }) : se.H(a, r);
  },
  // Hour [0-11]
  K: function(a, r, n) {
    var t = a.getUTCHours() % 12;
    return r === "Ko" ? n.ordinalNumber(t, {
      unit: "hour"
    }) : O(t, r.length);
  },
  // Hour [1-24]
  k: function(a, r, n) {
    var t = a.getUTCHours();
    return t === 0 && (t = 24), r === "ko" ? n.ordinalNumber(t, {
      unit: "hour"
    }) : O(t, r.length);
  },
  // Minute
  m: function(a, r, n) {
    return r === "mo" ? n.ordinalNumber(a.getUTCMinutes(), {
      unit: "minute"
    }) : se.m(a, r);
  },
  // Second
  s: function(a, r, n) {
    return r === "so" ? n.ordinalNumber(a.getUTCSeconds(), {
      unit: "second"
    }) : se.s(a, r);
  },
  // Fraction of second
  S: function(a, r) {
    return se.S(a, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(a, r, n, t) {
    var o = t._originalDate || a, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (r) {
      case "X":
        return bt(i);
      case "XXXX":
      case "XX":
        return fe(i);
      case "XXXXX":
      case "XXX":
      default:
        return fe(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(a, r, n, t) {
    var o = t._originalDate || a, i = o.getTimezoneOffset();
    switch (r) {
      case "x":
        return bt(i);
      case "xxxx":
      case "xx":
        return fe(i);
      case "xxxxx":
      case "xxx":
      default:
        return fe(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(a, r, n, t) {
    var o = t._originalDate || a, i = o.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wt(i, ":");
      case "OOOO":
      default:
        return "GMT" + fe(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(a, r, n, t) {
    var o = t._originalDate || a, i = o.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wt(i, ":");
      case "zzzz":
      default:
        return "GMT" + fe(i, ":");
    }
  },
  // Seconds timestamp
  t: function(a, r, n, t) {
    var o = t._originalDate || a, i = Math.floor(o.getTime() / 1e3);
    return O(i, r.length);
  },
  // Milliseconds timestamp
  T: function(a, r, n, t) {
    var o = t._originalDate || a, i = o.getTime();
    return O(i, r.length);
  }
};
function wt(e, a) {
  var r = e > 0 ? "-" : "+", n = Math.abs(e), t = Math.floor(n / 60), o = n % 60;
  if (o === 0)
    return r + String(t);
  var i = a || "";
  return r + String(t) + i + O(o, 2);
}
function bt(e, a) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + O(Math.abs(e) / 60, 2);
  }
  return fe(e, a);
}
function fe(e, a) {
  var r = a || "", n = e > 0 ? "-" : "+", t = Math.abs(e), o = O(Math.floor(t / 60), 2), i = O(t % 60, 2);
  return n + o + r + i;
}
const Nr = Lr;
var yt = function(a, r) {
  switch (a) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, Ht = function(a, r) {
  switch (a) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, Yr = function(a, r) {
  var n = a.match(/(P+)(p+)?/) || [], t = n[1], o = n[2];
  if (!o)
    return yt(a, r);
  var i;
  switch (t) {
    case "P":
      i = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = r.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", yt(t, r)).replace("{{time}}", Ht(o, r));
}, Er = {
  p: Ht,
  P: Yr
};
const Ke = Er;
var Ur = ["D", "DD"], $r = ["YY", "YYYY"];
function Ft(e) {
  return Ur.indexOf(e) !== -1;
}
function It(e) {
  return $r.indexOf(e) !== -1;
}
function Fe(e, a, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Wr = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Sr = function(a, r, n) {
  var t, o = Wr[a];
  return typeof o == "string" ? t = o : r === 1 ? t = o.one : t = o.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + t : t + " ago" : t;
};
const qr = Sr;
function be(e) {
  return function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = a.width ? String(a.width) : e.defaultWidth, n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var Hr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Fr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ir = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Rr = {
  date: be({
    formats: Hr,
    defaultWidth: "full"
  }),
  time: be({
    formats: Fr,
    defaultWidth: "full"
  }),
  dateTime: be({
    formats: Ir,
    defaultWidth: "full"
  })
};
const Gr = Rr;
var Ar = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Vr = function(a, r, n, t) {
  return Ar[a];
};
const Br = Vr;
function J(e) {
  return function(a, r) {
    var n = r != null && r.context ? String(r.context) : "standalone", t;
    if (n === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, i = r != null && r.width ? String(r.width) : o;
      t = e.formattingValues[i] || e.formattingValues[o];
    } else {
      var u = e.defaultWidth, l = r != null && r.width ? String(r.width) : e.defaultWidth;
      t = e.values[l] || e.values[u];
    }
    var s = e.argumentCallback ? e.argumentCallback(a) : a;
    return t[s];
  };
}
var Qr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, jr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Xr = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, zr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Zr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Kr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Jr = function(a, r) {
  var n = Number(a), t = n % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, ea = {
  ordinalNumber: Jr,
  era: J({
    values: Qr,
    defaultWidth: "wide"
  }),
  quarter: J({
    values: jr,
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return a - 1;
    }
  }),
  month: J({
    values: Xr,
    defaultWidth: "wide"
  }),
  day: J({
    values: zr,
    defaultWidth: "wide"
  }),
  dayPeriod: J({
    values: Zr,
    defaultWidth: "wide",
    formattingValues: Kr,
    defaultFormattingWidth: "wide"
  })
};
const ta = ea;
function ee(e) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, t = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], o = a.match(t);
    if (!o)
      return null;
    var i = o[0], u = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(u) ? aa(u, function(c) {
      return c.test(i);
    }) : ra(u, function(c) {
      return c.test(i);
    }), s;
    s = e.valueCallback ? e.valueCallback(l) : l, s = r.valueCallback ? r.valueCallback(s) : s;
    var d = a.slice(i.length);
    return {
      value: s,
      rest: d
    };
  };
}
function ra(e, a) {
  for (var r in e)
    if (e.hasOwnProperty(r) && a(e[r]))
      return r;
}
function aa(e, a) {
  for (var r = 0; r < e.length; r++)
    if (a(e[r]))
      return r;
}
function Rt(e) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.match(e.matchPattern);
    if (!n)
      return null;
    var t = n[0], o = a.match(e.parsePattern);
    if (!o)
      return null;
    var i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    var u = a.slice(t.length);
    return {
      value: i,
      rest: u
    };
  };
}
var na = /^(\d+)(th|st|nd|rd)?/i, ia = /\d+/i, oa = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ua = {
  any: [/^b/i, /^(a|c)/i]
}, la = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, sa = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, da = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ca = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, va = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, fa = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ma = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ha = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, pa = {
  ordinalNumber: Rt({
    matchPattern: na,
    parsePattern: ia,
    valueCallback: function(a) {
      return parseInt(a, 10);
    }
  }),
  era: ee({
    matchPatterns: oa,
    defaultMatchWidth: "wide",
    parsePatterns: ua,
    defaultParseWidth: "any"
  }),
  quarter: ee({
    matchPatterns: la,
    defaultMatchWidth: "wide",
    parsePatterns: sa,
    defaultParseWidth: "any",
    valueCallback: function(a) {
      return a + 1;
    }
  }),
  month: ee({
    matchPatterns: da,
    defaultMatchWidth: "wide",
    parsePatterns: ca,
    defaultParseWidth: "any"
  }),
  day: ee({
    matchPatterns: va,
    defaultMatchWidth: "wide",
    parsePatterns: fa,
    defaultParseWidth: "any"
  }),
  dayPeriod: ee({
    matchPatterns: ma,
    defaultMatchWidth: "any",
    parsePatterns: ha,
    defaultParseWidth: "any"
  })
};
const ga = pa;
var wa = {
  code: "en-US",
  formatDistance: qr,
  formatLong: Gr,
  formatRelative: Br,
  localize: ta,
  match: ga,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Gt = wa;
var ba = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ya = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Da = /^'([^]*?)'?$/, Ta = /''/g, ka = /[a-zA-Z]/;
function Ie(e, a, r) {
  var n, t, o, i, u, l, s, d, c, g, p, w, b, M, S, q, A, y;
  h(2, arguments);
  var R = String(a), W = oe(), K = (n = (t = r == null ? void 0 : r.locale) !== null && t !== void 0 ? t : W.locale) !== null && n !== void 0 ? n : Gt, ae = C((o = (i = (u = (l = r == null ? void 0 : r.firstWeekContainsDate) !== null && l !== void 0 ? l : r == null || (s = r.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && u !== void 0 ? u : W.firstWeekContainsDate) !== null && i !== void 0 ? i : (c = W.locale) === null || c === void 0 || (g = c.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(ae >= 1 && ae <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ue = C((p = (w = (b = (M = r == null ? void 0 : r.weekStartsOn) !== null && M !== void 0 ? M : r == null || (S = r.locale) === null || S === void 0 || (q = S.options) === null || q === void 0 ? void 0 : q.weekStartsOn) !== null && b !== void 0 ? b : W.weekStartsOn) !== null && w !== void 0 ? w : (A = W.locale) === null || A === void 0 || (y = A.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(ue >= 0 && ue <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!K.localize)
    throw new RangeError("locale must contain localize property");
  if (!K.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var le = m(e);
  if (!B(le))
    throw new RangeError("Invalid time value");
  var ke = Yt(le), _e = $t(le, ke), Pe = {
    firstWeekContainsDate: ae,
    weekStartsOn: ue,
    locale: K,
    _originalDate: le
  }, Be = R.match(ya).map(function(I) {
    var V = I[0];
    if (V === "p" || V === "P") {
      var ve = Ke[V];
      return ve(I, K.formatLong);
    }
    return I;
  }).join("").match(ba).map(function(I) {
    if (I === "''")
      return "'";
    var V = I[0];
    if (V === "'")
      return _a(I);
    var ve = Nr[V];
    if (ve)
      return !(r != null && r.useAdditionalWeekYearTokens) && It(I) && Fe(I, a, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && Ft(I) && Fe(I, a, String(e)), ve(_e, I, K.localize, Pe);
    if (V.match(ka))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + V + "`");
    return I;
  }).join("");
  return Be;
}
function _a(e) {
  var a = e.match(Da);
  return a ? a[1].replace(Ta, "'") : e;
}
function Pa(e, a) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in a)
    Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
  return e;
}
function Oa(e) {
  h(1, arguments);
  var a = m(e), r = a.getFullYear(), n = a.getMonth(), t = /* @__PURE__ */ new Date(0);
  return t.setFullYear(r, n + 1, 0), t.setHours(0, 0, 0, 0), t.getDate();
}
function Se(e) {
  h(1, arguments);
  var a = m(e), r = a.getFullYear(), n = Math.floor(r / 10) * 10;
  return n;
}
function Z(e) {
  return h(1, arguments), m(e).getFullYear();
}
function Ne(e, a) {
  h(2, arguments);
  var r = m(e), n = m(a);
  return r.getTime() > n.getTime();
}
function Ye(e, a) {
  h(2, arguments);
  var r = m(e), n = m(a);
  return r.getTime() < n.getTime();
}
function Dt(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var r = 0, n = new Array(a); r < a; r++)
    n[r] = e[r];
  return n;
}
function Ca(e, a) {
  if (e) {
    if (typeof e == "string")
      return Dt(e, a);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Dt(e, a);
  }
}
function Tt(e, a) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Ca(e)) || a && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, t = function() {
      };
      return {
        s: t,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          };
        },
        e: function(s) {
          throw s;
        },
        f: t
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, u;
  return {
    s: function() {
      r = r.call(e);
    },
    n: function() {
      var s = r.next();
      return o = s.done, s;
    },
    e: function(s) {
      i = !0, u = s;
    },
    f: function() {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (i)
          throw u;
      }
    }
  };
}
function f(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Je(e, a) {
  return Je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, t) {
    return n.__proto__ = t, n;
  }, Je(e, a);
}
function k(e, a) {
  if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(a && a.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), a && Je(e, a);
}
function Re(e) {
  return Re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Re(e);
}
function Ma() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xa(e, a) {
  if (a && (z(a) === "object" || typeof a == "function"))
    return a;
  if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return f(e);
}
function _(e) {
  var a = Ma();
  return function() {
    var n = Re(e), t;
    if (a) {
      var o = Re(this).constructor;
      t = Reflect.construct(n, arguments, o);
    } else
      t = n.apply(this, arguments);
    return xa(this, t);
  };
}
function D(e, a) {
  if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
function La(e, a) {
  if (z(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, a || "default");
    if (z(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(e);
}
function At(e) {
  var a = La(e, "string");
  return z(a) === "symbol" ? a : String(a);
}
function kt(e, a) {
  for (var r = 0; r < a.length; r++) {
    var n = a[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, At(n.key), n);
  }
}
function T(e, a, r) {
  return a && kt(e.prototype, a), r && kt(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function v(e, a, r) {
  return a = At(a), a in e ? Object.defineProperty(e, a, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[a] = r, e;
}
var Na = 10, Vt = /* @__PURE__ */ function() {
  function e() {
    D(this, e), v(this, "priority", void 0), v(this, "subPriority", 0);
  }
  return T(e, [{
    key: "validate",
    value: function(r, n) {
      return !0;
    }
  }]), e;
}(), Ya = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r(n, t, o, i, u) {
    var l;
    return D(this, r), l = a.call(this), l.value = n, l.validateValue = t, l.setValue = o, l.priority = i, u && (l.subPriority = u), l;
  }
  return T(r, [{
    key: "validate",
    value: function(t, o) {
      return this.validateValue(t, this.value, o);
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return this.setValue(t, o, this.value, i);
    }
  }]), r;
}(Vt), Ea = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", Na), v(f(n), "subPriority", -1), n;
  }
  return T(r, [{
    key: "set",
    value: function(t, o) {
      if (o.timestampIsSet)
        return t;
      var i = /* @__PURE__ */ new Date(0);
      return i.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()), i.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()), i;
    }
  }]), r;
}(Vt), P = /* @__PURE__ */ function() {
  function e() {
    D(this, e), v(this, "incompatibleTokens", void 0), v(this, "priority", void 0), v(this, "subPriority", void 0);
  }
  return T(e, [{
    key: "run",
    value: function(r, n, t, o) {
      var i = this.parse(r, n, t, o);
      return i ? {
        setter: new Ya(i.value, this.validate, this.set, this.priority, this.subPriority),
        rest: i.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(r, n, t) {
      return !0;
    }
  }]), e;
}(), Ua = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 140), v(f(n), "incompatibleTokens", ["R", "u", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "G":
        case "GG":
        case "GGG":
          return i.era(t, {
            width: "abbreviated"
          }) || i.era(t, {
            width: "narrow"
          });
        case "GGGGG":
          return i.era(t, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return i.era(t, {
            width: "wide"
          }) || i.era(t, {
            width: "abbreviated"
          }) || i.era(t, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return o.era = i, t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), U = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, te = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function $(e, a) {
  return e && {
    value: a(e.value),
    rest: e.rest
  };
}
function Y(e, a) {
  var r = a.match(e);
  return r ? {
    value: parseInt(r[0], 10),
    rest: a.slice(r[0].length)
  } : null;
}
function re(e, a) {
  var r = a.match(e);
  if (!r)
    return null;
  if (r[0] === "Z")
    return {
      value: 0,
      rest: a.slice(1)
    };
  var n = r[1] === "+" ? 1 : -1, t = r[2] ? parseInt(r[2], 10) : 0, o = r[3] ? parseInt(r[3], 10) : 0, i = r[5] ? parseInt(r[5], 10) : 0;
  return {
    value: n * (t * vr + o * cr + i * fr),
    rest: a.slice(r[0].length)
  };
}
function Bt(e) {
  return Y(U.anyDigitsSigned, e);
}
function E(e, a) {
  switch (e) {
    case 1:
      return Y(U.singleDigit, a);
    case 2:
      return Y(U.twoDigits, a);
    case 3:
      return Y(U.threeDigits, a);
    case 4:
      return Y(U.fourDigits, a);
    default:
      return Y(new RegExp("^\\d{1," + e + "}"), a);
  }
}
function Ge(e, a) {
  switch (e) {
    case 1:
      return Y(U.singleDigitSigned, a);
    case 2:
      return Y(U.twoDigitsSigned, a);
    case 3:
      return Y(U.threeDigitsSigned, a);
    case 4:
      return Y(U.fourDigitsSigned, a);
    default:
      return Y(new RegExp("^-?\\d{1," + e + "}"), a);
  }
}
function nt(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Qt(e, a) {
  var r = a > 0, n = r ? a : 1 - a, t;
  if (n <= 50)
    t = e || 100;
  else {
    var o = n + 50, i = Math.floor(o / 100) * 100, u = e >= o % 100;
    t = e + i - (u ? 100 : 0);
  }
  return r ? t : 1 - t;
}
function jt(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
var $a = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 130), v(f(n), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return $(E(4, t), u);
        case "yo":
          return $(i.ordinalNumber(t, {
            unit: "year"
          }), u);
        default:
          return $(E(o.length, t), u);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      var u = t.getUTCFullYear();
      if (i.isTwoDigitYear) {
        var l = Qt(i.year, u);
        return t.setUTCFullYear(l, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
      }
      var s = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return t.setUTCFullYear(s, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), Wa = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 130), v(f(n), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return $(E(4, t), u);
        case "Yo":
          return $(i.ordinalNumber(t, {
            unit: "year"
          }), u);
        default:
          return $(E(o.length, t), u);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(t, o, i, u) {
      var l = at(t, u);
      if (i.isTwoDigitYear) {
        var s = Qt(i.year, l);
        return t.setUTCFullYear(s, 0, u.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), ie(t, u);
      }
      var d = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return t.setUTCFullYear(d, 0, u.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), ie(t, u);
    }
  }]), r;
}(P), Sa = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 130), v(f(n), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o) {
      return Ge(o === "R" ? 4 : o.length, t);
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      var u = /* @__PURE__ */ new Date(0);
      return u.setUTCFullYear(i, 0, 4), u.setUTCHours(0, 0, 0, 0), ye(u);
    }
  }]), r;
}(P), qa = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 130), v(f(n), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o) {
      return Ge(o === "u" ? 4 : o.length, t);
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), Ha = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 120), v(f(n), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "Q":
        case "QQ":
          return E(o.length, t);
        case "Qo":
          return i.ordinalNumber(t, {
            unit: "quarter"
          });
        case "QQQ":
          return i.quarter(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(t, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return i.quarter(t, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return i.quarter(t, {
            width: "wide",
            context: "formatting"
          }) || i.quarter(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(t, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCMonth((i - 1) * 3, 1), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), Fa = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 120), v(f(n), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "q":
        case "qq":
          return E(o.length, t);
        case "qo":
          return i.ordinalNumber(t, {
            unit: "quarter"
          });
        case "qqq":
          return i.quarter(t, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(t, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return i.quarter(t, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return i.quarter(t, {
            width: "wide",
            context: "standalone"
          }) || i.quarter(t, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(t, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCMonth((i - 1) * 3, 1), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), Ia = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), v(f(n), "priority", 110), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      var u = function(s) {
        return s - 1;
      };
      switch (o) {
        case "M":
          return $(Y(U.month, t), u);
        case "MM":
          return $(E(2, t), u);
        case "Mo":
          return $(i.ordinalNumber(t, {
            unit: "month"
          }), u);
        case "MMM":
          return i.month(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(t, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return i.month(t, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return i.month(t, {
            width: "wide",
            context: "formatting"
          }) || i.month(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(t, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCMonth(i, 1), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), Ra = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 110), v(f(n), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      var u = function(s) {
        return s - 1;
      };
      switch (o) {
        case "L":
          return $(Y(U.month, t), u);
        case "LL":
          return $(E(2, t), u);
        case "Lo":
          return $(i.ordinalNumber(t, {
            unit: "month"
          }), u);
        case "LLL":
          return i.month(t, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(t, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return i.month(t, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return i.month(t, {
            width: "wide",
            context: "standalone"
          }) || i.month(t, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(t, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCMonth(i, 1), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P);
function Ga(e, a, r) {
  h(2, arguments);
  var n = m(e), t = C(a), o = qt(n, r) - t;
  return n.setUTCDate(n.getUTCDate() - o * 7), n;
}
var Aa = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 100), v(f(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "w":
          return Y(U.week, t);
        case "wo":
          return i.ordinalNumber(t, {
            unit: "week"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(t, o, i, u) {
      return ie(Ga(t, i, u), u);
    }
  }]), r;
}(P);
function Va(e, a) {
  h(2, arguments);
  var r = m(e), n = C(a), t = St(r) - n;
  return r.setUTCDate(r.getUTCDate() - t * 7), r;
}
var Ba = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 100), v(f(n), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "I":
          return Y(U.week, t);
        case "Io":
          return i.ordinalNumber(t, {
            unit: "week"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return ye(Va(t, i));
    }
  }]), r;
}(P), Qa = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ja = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Xa = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 90), v(f(n), "subPriority", 1), v(f(n), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "d":
          return Y(U.date, t);
        case "do":
          return i.ordinalNumber(t, {
            unit: "date"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      var i = t.getUTCFullYear(), u = jt(i), l = t.getUTCMonth();
      return u ? o >= 1 && o <= ja[l] : o >= 1 && o <= Qa[l];
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCDate(i), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), za = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 90), v(f(n), "subpriority", 1), v(f(n), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "D":
        case "DD":
          return Y(U.dayOfYear, t);
        case "Do":
          return i.ordinalNumber(t, {
            unit: "date"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      var i = t.getUTCFullYear(), u = jt(i);
      return u ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCMonth(0, i), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P);
function it(e, a, r) {
  var n, t, o, i, u, l, s, d;
  h(2, arguments);
  var c = oe(), g = C((n = (t = (o = (i = r == null ? void 0 : r.weekStartsOn) !== null && i !== void 0 ? i : r == null || (u = r.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : c.weekStartsOn) !== null && t !== void 0 ? t : (s = c.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = m(e), w = C(a), b = p.getUTCDay(), M = w % 7, S = (M + 7) % 7, q = (S < g ? 7 : 0) + w - b;
  return p.setUTCDate(p.getUTCDate() + q), p;
}
var Za = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 90), v(f(n), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "E":
        case "EE":
        case "EEE":
          return i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return i.day(t, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return i.day(t, {
            width: "wide",
            context: "formatting"
          }) || i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(t, o, i, u) {
      return t = it(t, i, u), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), Ka = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 90), v(f(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i, u) {
      var l = function(d) {
        var c = Math.floor((d - 1) / 7) * 7;
        return (d + u.weekStartsOn + 6) % 7 + c;
      };
      switch (o) {
        case "e":
        case "ee":
          return $(E(o.length, t), l);
        case "eo":
          return $(i.ordinalNumber(t, {
            unit: "day"
          }), l);
        case "eee":
          return i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return i.day(t, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return i.day(t, {
            width: "wide",
            context: "formatting"
          }) || i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(t, o, i, u) {
      return t = it(t, i, u), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), Ja = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 90), v(f(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i, u) {
      var l = function(d) {
        var c = Math.floor((d - 1) / 7) * 7;
        return (d + u.weekStartsOn + 6) % 7 + c;
      };
      switch (o) {
        case "c":
        case "cc":
          return $(E(o.length, t), l);
        case "co":
          return $(i.ordinalNumber(t, {
            unit: "day"
          }), l);
        case "ccc":
          return i.day(t, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(t, {
            width: "short",
            context: "standalone"
          }) || i.day(t, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return i.day(t, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return i.day(t, {
            width: "short",
            context: "standalone"
          }) || i.day(t, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return i.day(t, {
            width: "wide",
            context: "standalone"
          }) || i.day(t, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(t, {
            width: "short",
            context: "standalone"
          }) || i.day(t, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(t, o, i, u) {
      return t = it(t, i, u), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P);
function en(e, a) {
  h(2, arguments);
  var r = C(a);
  r % 7 === 0 && (r = r - 7);
  var n = 1, t = m(e), o = t.getUTCDay(), i = r % 7, u = (i + 7) % 7, l = (u < n ? 7 : 0) + r - o;
  return t.setUTCDate(t.getUTCDate() + l), t;
}
var tn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 90), v(f(n), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      var u = function(s) {
        return s === 0 ? 7 : s;
      };
      switch (o) {
        case "i":
        case "ii":
          return E(o.length, t);
        case "io":
          return i.ordinalNumber(t, {
            unit: "day"
          });
        case "iii":
          return $(i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiii":
          return $(i.day(t, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return $(i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return $(i.day(t, {
            width: "wide",
            context: "formatting"
          }) || i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          }), u);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 1 && o <= 7;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t = en(t, i), t.setUTCHours(0, 0, 0, 0), t;
    }
  }]), r;
}(P), rn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 80), v(f(n), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "a":
        case "aa":
        case "aaa":
          return i.dayPeriod(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return i.dayPeriod(t, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCHours(nt(i), 0, 0, 0), t;
    }
  }]), r;
}(P), an = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 80), v(f(n), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "b":
        case "bb":
        case "bbb":
          return i.dayPeriod(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return i.dayPeriod(t, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCHours(nt(i), 0, 0, 0), t;
    }
  }]), r;
}(P), nn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 80), v(f(n), "incompatibleTokens", ["a", "b", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "B":
        case "BB":
        case "BBB":
          return i.dayPeriod(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return i.dayPeriod(t, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(t, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCHours(nt(i), 0, 0, 0), t;
    }
  }]), r;
}(P), on = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 70), v(f(n), "incompatibleTokens", ["H", "K", "k", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "h":
          return Y(U.hour12h, t);
        case "ho":
          return i.ordinalNumber(t, {
            unit: "hour"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 1 && o <= 12;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      var u = t.getUTCHours() >= 12;
      return u && i < 12 ? t.setUTCHours(i + 12, 0, 0, 0) : !u && i === 12 ? t.setUTCHours(0, 0, 0, 0) : t.setUTCHours(i, 0, 0, 0), t;
    }
  }]), r;
}(P), un = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 70), v(f(n), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "H":
          return Y(U.hour23h, t);
        case "Ho":
          return i.ordinalNumber(t, {
            unit: "hour"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 23;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCHours(i, 0, 0, 0), t;
    }
  }]), r;
}(P), ln = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 70), v(f(n), "incompatibleTokens", ["h", "H", "k", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "K":
          return Y(U.hour11h, t);
        case "Ko":
          return i.ordinalNumber(t, {
            unit: "hour"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      var u = t.getUTCHours() >= 12;
      return u && i < 12 ? t.setUTCHours(i + 12, 0, 0, 0) : t.setUTCHours(i, 0, 0, 0), t;
    }
  }]), r;
}(P), sn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 70), v(f(n), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "k":
          return Y(U.hour24h, t);
        case "ko":
          return i.ordinalNumber(t, {
            unit: "hour"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 1 && o <= 24;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      var u = i <= 24 ? i % 24 : i;
      return t.setUTCHours(u, 0, 0, 0), t;
    }
  }]), r;
}(P), dn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 60), v(f(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "m":
          return Y(U.minute, t);
        case "mo":
          return i.ordinalNumber(t, {
            unit: "minute"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCMinutes(i, 0, 0), t;
    }
  }]), r;
}(P), cn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 50), v(f(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o, i) {
      switch (o) {
        case "s":
          return Y(U.second, t);
        case "so":
          return i.ordinalNumber(t, {
            unit: "second"
          });
        default:
          return E(o.length, t);
      }
    }
  }, {
    key: "validate",
    value: function(t, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCSeconds(i, 0), t;
    }
  }]), r;
}(P), vn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 30), v(f(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o) {
      var i = function(l) {
        return Math.floor(l * Math.pow(10, -o.length + 3));
      };
      return $(E(o.length, t), i);
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return t.setUTCMilliseconds(i), t;
    }
  }]), r;
}(P), fn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 10), v(f(n), "incompatibleTokens", ["t", "T", "x"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o) {
      switch (o) {
        case "X":
          return re(te.basicOptionalMinutes, t);
        case "XX":
          return re(te.basic, t);
        case "XXXX":
          return re(te.basicOptionalSeconds, t);
        case "XXXXX":
          return re(te.extendedOptionalSeconds, t);
        case "XXX":
        default:
          return re(te.extended, t);
      }
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return o.timestampIsSet ? t : new Date(t.getTime() - i);
    }
  }]), r;
}(P), mn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 10), v(f(n), "incompatibleTokens", ["t", "T", "X"]), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t, o) {
      switch (o) {
        case "x":
          return re(te.basicOptionalMinutes, t);
        case "xx":
          return re(te.basic, t);
        case "xxxx":
          return re(te.basicOptionalSeconds, t);
        case "xxxxx":
          return re(te.extendedOptionalSeconds, t);
        case "xxx":
        default:
          return re(te.extended, t);
      }
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return o.timestampIsSet ? t : new Date(t.getTime() - i);
    }
  }]), r;
}(P), hn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 40), v(f(n), "incompatibleTokens", "*"), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t) {
      return Bt(t);
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return [new Date(i * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(P), pn = /* @__PURE__ */ function(e) {
  k(r, e);
  var a = _(r);
  function r() {
    var n;
    D(this, r);
    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
      o[i] = arguments[i];
    return n = a.call.apply(a, [this].concat(o)), v(f(n), "priority", 20), v(f(n), "incompatibleTokens", "*"), n;
  }
  return T(r, [{
    key: "parse",
    value: function(t) {
      return Bt(t);
    }
  }, {
    key: "set",
    value: function(t, o, i) {
      return [new Date(i), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(P), gn = {
  G: new Ua(),
  y: new $a(),
  Y: new Wa(),
  R: new Sa(),
  u: new qa(),
  Q: new Ha(),
  q: new Fa(),
  M: new Ia(),
  L: new Ra(),
  w: new Aa(),
  I: new Ba(),
  d: new Xa(),
  D: new za(),
  E: new Za(),
  e: new Ka(),
  c: new Ja(),
  i: new tn(),
  a: new rn(),
  b: new an(),
  B: new nn(),
  h: new on(),
  H: new un(),
  K: new ln(),
  k: new sn(),
  m: new dn(),
  s: new cn(),
  S: new vn(),
  X: new fn(),
  x: new mn(),
  t: new hn(),
  T: new pn()
}, wn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, bn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yn = /^'([^]*?)'?$/, Dn = /''/g, Tn = /\S/, kn = /[a-zA-Z]/;
function _t(e, a, r, n) {
  var t, o, i, u, l, s, d, c, g, p, w, b, M, S, q, A, y, R;
  h(3, arguments);
  var W = String(e), K = String(a), ae = oe(), ue = (t = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : ae.locale) !== null && t !== void 0 ? t : Gt;
  if (!ue.match)
    throw new RangeError("locale must contain match property");
  var le = C((i = (u = (l = (s = n == null ? void 0 : n.firstWeekContainsDate) !== null && s !== void 0 ? s : n == null || (d = n.locale) === null || d === void 0 || (c = d.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && l !== void 0 ? l : ae.firstWeekContainsDate) !== null && u !== void 0 ? u : (g = ae.locale) === null || g === void 0 || (p = g.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(le >= 1 && le <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ke = C((w = (b = (M = (S = n == null ? void 0 : n.weekStartsOn) !== null && S !== void 0 ? S : n == null || (q = n.locale) === null || q === void 0 || (A = q.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && M !== void 0 ? M : ae.weekStartsOn) !== null && b !== void 0 ? b : (y = ae.locale) === null || y === void 0 || (R = y.options) === null || R === void 0 ? void 0 : R.weekStartsOn) !== null && w !== void 0 ? w : 0);
  if (!(ke >= 0 && ke <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (K === "")
    return W === "" ? m(r) : /* @__PURE__ */ new Date(NaN);
  var _e = {
    firstWeekContainsDate: le,
    weekStartsOn: ke,
    locale: ue
  }, Pe = [new Ea()], Be = K.match(bn).map(function(H) {
    var L = H[0];
    if (L in Ke) {
      var Q = Ke[L];
      return Q(H, ue.formatLong);
    }
    return H;
  }).join("").match(wn), I = [], V = Tt(Be), ve;
  try {
    var zt = function() {
      var L = ve.value;
      !(n != null && n.useAdditionalWeekYearTokens) && It(L) && Fe(L, K, e), !(n != null && n.useAdditionalDayOfYearTokens) && Ft(L) && Fe(L, K, e);
      var Q = L[0], $e = gn[Q];
      if ($e) {
        var vt = $e.incompatibleTokens;
        if (Array.isArray(vt)) {
          var ft = I.find(function(mt) {
            return vt.includes(mt.token) || mt.token === Q;
          });
          if (ft)
            throw new RangeError("The format string mustn't contain `".concat(ft.fullToken, "` and `").concat(L, "` at the same time"));
        } else if ($e.incompatibleTokens === "*" && I.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(L, "` and any other token at the same time"));
        I.push({
          token: Q,
          fullToken: L
        });
        var je = $e.run(W, L, ue.match, _e);
        if (!je)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        Pe.push(je.setter), W = je.rest;
      } else {
        if (Q.match(kn))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Q + "`");
        if (L === "''" ? L = "'" : Q === "'" && (L = _n(L)), W.indexOf(L) === 0)
          W = W.slice(L.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (V.s(); !(ve = V.n()).done; ) {
      var lt = zt();
      if (z(lt) === "object")
        return lt.v;
    }
  } catch (H) {
    V.e(H);
  } finally {
    V.f();
  }
  if (W.length > 0 && Tn.test(W))
    return /* @__PURE__ */ new Date(NaN);
  var Zt = Pe.map(function(H) {
    return H.priority;
  }).sort(function(H, L) {
    return L - H;
  }).filter(function(H, L, Q) {
    return Q.indexOf(H) === L;
  }).map(function(H) {
    return Pe.filter(function(L) {
      return L.priority === H;
    }).sort(function(L, Q) {
      return Q.subPriority - L.subPriority;
    });
  }).map(function(H) {
    return H[0];
  }), Qe = m(r);
  if (isNaN(Qe.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var Oe = $t(Qe, Yt(Qe)), st = {}, Ee = Tt(Zt), dt;
  try {
    for (Ee.s(); !(dt = Ee.n()).done; ) {
      var ct = dt.value;
      if (!ct.validate(Oe, _e))
        return /* @__PURE__ */ new Date(NaN);
      var Ue = ct.set(Oe, st, _e);
      Array.isArray(Ue) ? (Oe = Ue[0], Pa(st, Ue[1])) : Oe = Ue;
    }
  } catch (H) {
    Ee.e(H);
  } finally {
    Ee.f();
  }
  return Oe;
}
function _n(e) {
  return e.match(yn)[1].replace(Dn, "'");
}
function Pt(e) {
  h(1, arguments);
  var a = m(e);
  return a.setMinutes(0, 0, 0), a;
}
function Pn(e, a) {
  h(2, arguments);
  var r = Pt(e), n = Pt(a);
  return r.getTime() === n.getTime();
}
function On(e, a) {
  h(2, arguments);
  var r = gt(e), n = gt(a);
  return r.getTime() === n.getTime();
}
function et(e, a) {
  h(2, arguments);
  var r = m(e), n = m(a);
  return r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth();
}
function Ot(e, a) {
  h(2, arguments);
  var r = m(e), n = m(a);
  return r.getFullYear() === n.getFullYear();
}
function Cn(e, a) {
  h(2, arguments);
  var r = m(e).getTime(), n = m(a.start).getTime(), t = m(a.end).getTime();
  if (!(n <= t))
    throw new RangeError("Invalid interval");
  return r >= n && r <= t;
}
function Mn(e, a) {
  h(2, arguments);
  var r = m(e), n = C(a), t = r.getFullYear(), o = r.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(t, n, 15), i.setHours(0, 0, 0, 0);
  var u = Oa(i);
  return r.setMonth(n, Math.min(o, u)), r;
}
function Ct(e, a) {
  if (h(2, arguments), z(a) !== "object" || a === null)
    throw new RangeError("values parameter must be an object");
  var r = m(e);
  return isNaN(r.getTime()) ? /* @__PURE__ */ new Date(NaN) : (a.year != null && r.setFullYear(a.year), a.month != null && (r = Mn(r, a.month)), a.date != null && r.setDate(C(a.date)), a.hours != null && r.setHours(C(a.hours)), a.minutes != null && r.setMinutes(C(a.minutes)), a.seconds != null && r.setSeconds(C(a.seconds)), a.milliseconds != null && r.setMilliseconds(C(a.milliseconds)), r);
}
function xn(e, a, r) {
  var n, t, o, i, u, l, s, d;
  h(2, arguments);
  var c = oe(), g = C((n = (t = (o = (i = r == null ? void 0 : r.weekStartsOn) !== null && i !== void 0 ? i : r == null || (u = r.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : c.weekStartsOn) !== null && t !== void 0 ? t : (s = c.locale) === null || s === void 0 || (d = s.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = m(e), w = C(a), b = p.getDay(), M = w % 7, S = (M + 7) % 7, q = 7 - g, A = w < 0 || w > 6 ? w - (b + q) % 7 : (S + q) % 7 - (b + q) % 7;
  return ir(p, A);
}
function Ln(e) {
  h(1, arguments);
  var a = m(e), r = a.getFullYear(), n = Math.floor(r / 10) * 10;
  return a.setFullYear(n, 0, 1), a.setHours(0, 0, 0, 0), a;
}
function Nn(e, a) {
  h(2, arguments);
  var r = C(a);
  return tt(e, -r);
}
function Xt(e, a) {
  h(2, arguments);
  var r = C(a);
  return rt(e, -r);
}
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".v3dp__popout[data-v-65eb861b]{z-index:10;position:absolute;text-align:center;width:17.5em;background-color:var(--popout-bg-color);box-shadow:var(--box-shadow);border-radius:var(--border-radius);padding:8px 0 1em;color:var(--text-color)}.v3dp__popout *[data-v-65eb861b]{color:inherit;font-size:inherit;font-weight:inherit}.v3dp__popout[data-v-65eb861b] button{background:none;border:none;outline:none}.v3dp__popout[data-v-65eb861b] button:not(:disabled){cursor:pointer}.v3dp__heading[data-v-65eb861b]{width:100%;display:flex;height:var(--heading-size);line-height:var(--heading-size);font-weight:var(--heading-weight)}.v3dp__heading__button[data-v-65eb861b]{background:none;border:none;padding:0;display:flex;justify-content:center;align-items:center;width:var(--heading-size)}button.v3dp__heading__center[data-v-65eb861b]:hover,.v3dp__heading__button[data-v-65eb861b]:not(:disabled):hover{background-color:var(--heading-hover-color)}.v3dp__heading__center[data-v-65eb861b]{flex:1}.v3dp__heading__icon[data-v-65eb861b]{height:12px;stroke:var(--arrow-color)}.v3dp__heading__button:disabled .v3dp__heading__icon[data-v-65eb861b]{stroke:var(--elem-disabled-color)}.v3dp__subheading[data-v-65eb861b],.v3dp__elements[data-v-65eb861b]{display:grid;grid-template-columns:var(--popout-column-definition);font-size:var(--elem-font-size)}.v3dp__subheading[data-v-65eb861b]{margin-top:1em}.v3dp__divider[data-v-65eb861b]{border:1px solid var(--divider-color);border-radius:3px}.v3dp__elements[data-v-65eb861b] button:disabled{color:var(--elem-disabled-color)}.v3dp__elements[data-v-65eb861b] button{padding:.3em .6em}.v3dp__elements[data-v-65eb861b] button span{display:block;line-height:1.9em;height:1.8em;border-radius:var(--elem-border-radius)}.v3dp__elements[data-v-65eb861b] button:not(:disabled):hover span{background-color:var(--elem-hover-bg-color);color:var(--elem-hover-color)}.v3dp__elements[data-v-65eb861b] button.selected span{background-color:var(--elem-selected-bg-color);color:var(--elem-selected-color)}.v3dp__elements[data-v-65eb861b] button.current span{font-weight:var(--elem-current-font-weight);outline:1px solid var(--elem-current-outline-color)}.v3dp__column[data-v-81ac698d]{display:flex;flex-direction:column;overflow-y:auto;height:190px}.v3dp__datepicker{--popout-bg-color: var(--vdp-bg-color, #fff);--box-shadow: var( --vdp-box-shadow, 0 4px 10px 0 rgba(128, 144, 160, .1), 0 0 1px 0 rgba(128, 144, 160, .81) );--text-color: var(--vdp-text-color, #000000);--border-radius: var(--vdp-border-radius, 3px);--heading-size: var(--vdp-heading-size, 2.5em);--heading-weight: var(--vdp-heading-weight, bold);--heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);--arrow-color: var(--vdp-arrow-color, currentColor);--elem-color: var(--vdp-elem-color, currentColor);--elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);--elem-hover-color: var(--vdp-hover-color, #fff);--elem-hover-bg-color: var(--vdp-hover-bg-color, #0baf74);--elem-selected-color: var(--vdp-selected-color, #fff);--elem-selected-bg-color: var(--vdp-selected-bg-color, #0baf74);--elem-current-outline-color: var(--vdp-current-date-outline-color, #888);--elem-current-font-weight: var(--vdp-current-date-font-weight, bold);--elem-font-size: var(--vdp-elem-font-size, .8em);--elem-border-radius: var(--vdp-elem-border-radius, 3px);--divider-color: var(--vdp-divider-color, var(--elem-disabled-color));position:relative}.v3dp__clearable{display:inline;position:relative;left:-15px;cursor:pointer}")), document.head.appendChild(e);
    }
  } catch (a) {
    console.error("vite-plugin-css-injected-by-js", a);
  }
})();
const Yn = ["year", "month", "day", "time", "custom"], En = ce({
  emits: {
    elementClick: (e) => B(e),
    left: () => !0,
    right: () => !0,
    heading: () => !0
  },
  props: {
    headingClickable: {
      type: Boolean,
      default: !1
    },
    leftDisabled: {
      type: Boolean,
      default: !1
    },
    rightDisabled: {
      type: Boolean,
      default: !1
    },
    columnCount: {
      type: Number,
      default: 7
    },
    items: {
      type: Array,
      default: () => []
    },
    viewMode: {
      type: String,
      required: !0,
      validate: (e) => typeof e == "string" && Yn.includes(e)
    }
  }
}), Te = (e, a) => {
  const r = e.__vccOpts || e;
  for (const [n, t] of a)
    r[n] = t;
  return r;
}, ot = (e) => (ar("data-v-65eb861b"), e = e(), nr(), e), Un = { class: "v3dp__heading" }, $n = ["disabled"], Wn = /* @__PURE__ */ ot(() => /* @__PURE__ */ N("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /* @__PURE__ */ N("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ N("path", {
      stroke: "none",
      d: "M-9 16V-8h24v24z"
    }),
    /* @__PURE__ */ N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 0L1 4l4 4"
    })
  ])
], -1)), Sn = ["disabled"], qn = /* @__PURE__ */ ot(() => /* @__PURE__ */ N("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /* @__PURE__ */ N("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ N("path", {
      stroke: "none",
      d: "M15-8v24H-9V-8z"
    }),
    /* @__PURE__ */ N("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1 8l4-4-4-4"
    })
  ])
], -1)), Hn = { class: "v3dp__body" }, Fn = { class: "v3dp__subheading" }, In = /* @__PURE__ */ ot(() => /* @__PURE__ */ N("hr", { class: "v3dp__divider" }, null, -1)), Rn = { class: "v3dp__elements" }, Gn = ["disabled", "onClick"];
function An(e, a, r, n, t, o) {
  return F(), X("div", {
    class: xe(["v3dp__popout", `v3dp__popout-${e.viewMode}`]),
    style: Nt({ "--popout-column-definition": `repeat(${e.columnCount}, 1fr)` }),
    onMousedown: a[3] || (a[3] = me(() => {
    }, ["prevent"]))
  }, [
    N("div", Un, [
      N("button", {
        class: "v3dp__heading__button v3dp__heading__button__left",
        disabled: e.leftDisabled,
        onClick: a[0] || (a[0] = me((i) => e.$emit("left"), ["stop", "prevent"]))
      }, [
        we(e.$slots, "arrow-left", {}, () => [
          Wn
        ], !0)
      ], 8, $n),
      (F(), De(Jt(e.headingClickable ? "button" : "span"), {
        class: "v3dp__heading__center",
        onClick: a[1] || (a[1] = me((i) => e.$emit("heading"), ["stop", "prevent"]))
      }, {
        default: he(() => [
          we(e.$slots, "heading", {}, void 0, !0)
        ]),
        _: 3
      })),
      N("button", {
        class: "v3dp__heading__button v3dp__heading__button__right",
        disabled: e.rightDisabled,
        onClick: a[2] || (a[2] = me((i) => e.$emit("right"), ["stop", "prevent"]))
      }, [
        we(e.$slots, "arrow-right", {}, () => [
          qn
        ], !0)
      ], 8, Sn)
    ]),
    N("div", Hn, [
      "subheading" in e.$slots ? (F(), X(Le, { key: 0 }, [
        N("div", Fn, [
          we(e.$slots, "subheading", {}, void 0, !0)
        ]),
        In
      ], 64)) : er("", !0),
      N("div", Rn, [
        we(e.$slots, "body", {}, () => [
          (F(!0), X(Le, null, He(e.items, (i) => (F(), X("button", {
            key: i.key,
            disabled: i.disabled,
            class: xe([
              {
                selected: i.selected,
                current: i.current
              },
              `v3dp__element__button__${e.viewMode}`
            ]),
            onClick: me((u) => e.$emit("elementClick", i.value), ["stop", "prevent"])
          }, [
            N("span", null, ne(i.display), 1)
          ], 10, Gn))), 128))
        ], !0)
      ])
    ])
  ], 38);
}
const Ve = /* @__PURE__ */ Te(En, [["render", An], ["__scopeId", "data-v-65eb861b"]]), Vn = ce({
  components: {
    PickerPopup: Ve
  },
  emits: {
    "update:pageDate": (e) => B(e),
    select: (e) => B(e)
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    }
  },
  setup(e, { emit: a }) {
    const r = x(() => Ln(e.pageDate)), n = x(() => Dr(e.pageDate)), t = (s, d, c) => !d && !c ? !0 : !(d && Z(s) < Z(d) || c && Z(s) > Z(c)), o = x(
      () => yr({
        start: r.value,
        end: n.value
      }).map(
        (s) => ({
          value: s,
          key: String(Z(s)),
          display: Z(s),
          selected: !!e.selected && Z(s) === Z(e.selected),
          disabled: !t(s, e.lowerLimit, e.upperLimit)
        })
      )
    ), i = x(() => {
      const s = Z(r.value), d = Z(n.value);
      return `${s} - ${d}`;
    }), u = x(
      () => e.lowerLimit && (Se(e.lowerLimit) === Se(e.pageDate) || Ye(e.pageDate, e.lowerLimit))
    ), l = x(
      () => e.upperLimit && (Se(e.upperLimit) === Se(e.pageDate) || Ne(e.pageDate, e.upperLimit))
    );
    return {
      years: o,
      heading: i,
      leftDisabled: u,
      rightDisabled: l,
      previousPage: () => a("update:pageDate", Xt(e.pageDate, 10)),
      nextPage: () => a("update:pageDate", rt(e.pageDate, 10))
    };
  }
});
function Bn(e, a, r, n, t, o) {
  const i = de("picker-popup");
  return F(), De(i, {
    columnCount: 3,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.years,
    viewMode: "year",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onElementClick: a[0] || (a[0] = (u) => e.$emit("select", u))
  }, {
    heading: he(() => [
      Ae(ne(e.heading), 1)
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const Qn = /* @__PURE__ */ Te(Vn, [["render", Bn]]), jn = ce({
  components: {
    PickerPopup: Ve
  },
  emits: {
    "update:pageDate": (e) => B(e),
    select: (e) => B(e),
    back: () => !0
  },
  props: {
    /**
     * Currently selected date, needed for highlighting
     */
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    format: {
      type: String,
      required: !1,
      default: "LLL"
    },
    locale: {
      type: Object,
      required: !1
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    }
  },
  setup(e, { emit: a }) {
    const r = x(() => br(e.pageDate)), n = x(() => wr(e.pageDate)), t = x(
      () => (d) => Ie(d, e.format, {
        locale: e.locale
      })
    ), o = (d, c, g) => !c && !g ? !0 : !(c && Ye(d, Ut(c)) || g && Ne(d, Et(g))), i = x(
      () => gr({
        start: r.value,
        end: n.value
      }).map(
        (d) => ({
          value: d,
          display: t.value(d),
          key: t.value(d),
          selected: !!e.selected && et(e.selected, d),
          disabled: !o(d, e.lowerLimit, e.upperLimit)
        })
      )
    ), u = x(() => Z(r.value)), l = x(
      () => e.lowerLimit && (Ot(e.lowerLimit, e.pageDate) || Ye(e.pageDate, e.lowerLimit))
    ), s = x(
      () => e.upperLimit && (Ot(e.upperLimit, e.pageDate) || Ne(e.pageDate, e.upperLimit))
    );
    return {
      months: i,
      heading: u,
      leftDisabled: l,
      rightDisabled: s,
      previousPage: () => a("update:pageDate", Xt(e.pageDate, 1)),
      nextPage: () => a("update:pageDate", rt(e.pageDate, 1))
    };
  }
});
function Xn(e, a, r, n, t, o) {
  const i = de("picker-popup");
  return F(), De(i, {
    headingClickable: "",
    columnCount: 3,
    items: e.months,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    viewMode: "month",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: a[0] || (a[0] = (u) => e.$emit("back")),
    onElementClick: a[1] || (a[1] = (u) => e.$emit("select", u))
  }, {
    heading: he(() => [
      Ae(ne(e.heading), 1)
    ]),
    _: 1
  }, 8, ["items", "leftDisabled", "rightDisabled", "onLeft", "onRight"]);
}
const zn = /* @__PURE__ */ Te(jn, [["render", Xn]]), Zn = ce({
  components: {
    PickerPopup: Ve
  },
  emits: {
    "update:pageDate": (e) => B(e),
    select: (e) => B(e),
    back: () => !0
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    format: {
      type: String,
      required: !1,
      default: "dd"
    },
    headingFormat: {
      type: String,
      required: !1,
      default: "LLLL yyyy"
    },
    weekdayFormat: {
      type: String,
      required: !1,
      default: "EE"
    },
    locale: {
      type: Object,
      required: !1
    },
    weekStartsOn: {
      type: Number,
      required: !1,
      default: 1,
      validator: (e) => typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 6
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    },
    disabledDates: {
      type: Object,
      required: !1
    },
    allowOutsideInterval: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e, { emit: a }) {
    const r = x(
      () => (p) => (w) => Ie(w, p, {
        locale: e.locale,
        weekStartsOn: e.weekStartsOn
      })
    ), n = x(() => Ut(e.pageDate)), t = x(() => Et(e.pageDate)), o = x(() => ({
      start: n.value,
      end: t.value
    })), i = x(() => ({
      start: lr(n.value, {
        weekStartsOn: e.weekStartsOn
      }),
      end: Tr(t.value, {
        weekStartsOn: e.weekStartsOn
      })
    })), u = x(() => {
      const p = e.weekStartsOn, w = r.value(e.weekdayFormat);
      return Array.from(Array(7)).map((b, M) => (p + M) % 7).map(
        (b) => xn(/* @__PURE__ */ new Date(), b, {
          weekStartsOn: e.weekStartsOn
        })
      ).map(w);
    }), l = (p, w, b, M) => {
      var S, q;
      return (S = M == null ? void 0 : M.dates) != null && S.some((A) => ze(p, A)) || (q = M == null ? void 0 : M.predicate) != null && q.call(M, p) ? !1 : !w && !b ? !0 : !(w && Ye(p, Ze(w)) || b && Ne(p, hr(b)));
    }, s = x(() => {
      const p = /* @__PURE__ */ new Date(), w = r.value(e.format);
      return pr(i.value).map(
        (b) => ({
          value: b,
          display: w(b),
          selected: !!e.selected && ze(e.selected, b),
          current: ze(p, b),
          disabled: !e.allowOutsideInterval && !Cn(b, o.value) || !l(
            b,
            e.lowerLimit,
            e.upperLimit,
            e.disabledDates
          ),
          key: r.value("yyyy-MM-dd")(b)
        })
      );
    }), d = x(
      () => r.value(e.headingFormat)(e.pageDate)
    ), c = x(
      () => e.lowerLimit && (et(e.lowerLimit, e.pageDate) || Ye(e.pageDate, e.lowerLimit))
    ), g = x(
      () => e.upperLimit && (et(e.upperLimit, e.pageDate) || Ne(e.pageDate, e.upperLimit))
    );
    return {
      weekDays: u,
      days: s,
      heading: d,
      leftDisabled: c,
      rightDisabled: g,
      previousPage: () => a("update:pageDate", Nn(e.pageDate, 1)),
      nextPage: () => a("update:pageDate", tt(e.pageDate, 1))
    };
  }
});
function Kn(e, a, r, n, t, o) {
  const i = de("picker-popup");
  return F(), De(i, {
    headingClickable: "",
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.days,
    viewMode: "day",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: a[0] || (a[0] = (u) => e.$emit("back")),
    onElementClick: a[1] || (a[1] = (u) => e.$emit("select", u))
  }, {
    heading: he(() => [
      Ae(ne(e.heading), 1)
    ]),
    subheading: he(() => [
      (F(!0), X(Le, null, He(e.weekDays, (u, l) => (F(), X("span", {
        key: u,
        class: xe(`v3dp__subheading__weekday__${l}`)
      }, ne(u), 3))), 128))
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const Jn = /* @__PURE__ */ Te(Zn, [["render", Kn]]);
function Mt(e, a) {
  const r = e.getBoundingClientRect(), n = {
    height: e.clientHeight,
    width: e.clientWidth
  }, t = a.getBoundingClientRect();
  if (!(t.top >= r.top && t.bottom <= r.top + n.height)) {
    const o = t.top - r.top, i = t.bottom - r.bottom;
    Math.abs(o) < Math.abs(i) ? e.scrollTop += o : e.scrollTop += i;
  }
}
const ei = ce({
  components: {
    PickerPopup: Ve
  },
  emits: {
    select: (e) => B(e),
    back: () => !0
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    visible: {
      type: Boolean,
      required: !0
    },
    disabledTime: {
      type: Object,
      required: !1
    }
  },
  setup(e, { emit: a }) {
    const r = j(null), n = j(null), t = x(() => e.pageDate ?? e.selected), o = j(t.value.getHours()), i = j(t.value.getMinutes());
    ht(
      () => e.selected,
      (c) => {
        let g = 0, p = 0;
        c && (g = c.getHours(), p = c.getMinutes()), o.value = g, i.value = p;
      }
    );
    const u = x(
      () => [...Array(24).keys()].map(
        (c) => ({
          value: c,
          date: Ct(new Date(t.value.getTime()), {
            hours: c,
            minutes: i.value,
            seconds: 0
          }),
          selected: o.value === c,
          ref: j(null)
        })
      )
    ), l = x(
      () => [...Array(60).keys()].map((c) => ({
        value: c,
        date: Ct(new Date(t.value.getTime()), {
          hours: o.value,
          minutes: c,
          seconds: 0
        }),
        selected: i.value === c,
        ref: j(null)
      }))
    ), s = (c) => {
      i.value = c.value, a("select", c.date);
    }, d = () => {
      const c = u.value.find(
        (p) => {
          var w, b;
          return ((b = (w = p.ref.value) == null ? void 0 : w.classList) == null ? void 0 : b.contains("selected")) ?? !1;
        }
      ), g = l.value.find(
        (p) => {
          var w, b;
          return ((b = (w = p.ref.value) == null ? void 0 : w.classList) == null ? void 0 : b.contains("selected")) ?? !1;
        }
      );
      c && g && (Mt(r.value, c.ref.value), Mt(n.value, g.ref.value));
    };
    return ht(
      () => e.visible,
      (c) => {
        c && Kt(d);
      }
    ), {
      hoursListRef: r,
      minutesListRef: n,
      hours: o,
      minutes: i,
      hoursList: u,
      minutesList: l,
      padStartZero: (c) => `0${c}`.substr(-2),
      selectMinutes: s,
      isEnabled: (c) => {
        var g, p, w, b;
        return !((p = (g = e.disabledTime) == null ? void 0 : g.dates) != null && p.some(
          (M) => Pn(c, M) && On(c, M)
        ) || (b = (w = e.disabledTime) == null ? void 0 : w.predicate) != null && b.call(w, c));
      },
      scroll: d
    };
  }
}), ti = {
  ref: "hoursListRef",
  class: "v3dp__column"
}, ri = ["disabled", "onClick"], ai = {
  ref: "minutesListRef",
  class: "v3dp__column"
}, ni = ["disabled", "onClick"];
function ii(e, a, r, n, t, o) {
  const i = de("picker-popup");
  return F(), De(i, {
    headingClickable: "",
    columnCount: 2,
    leftDisabled: !0,
    rightDisabled: !0,
    viewMode: "time",
    onHeading: a[0] || (a[0] = (u) => e.$emit("back"))
  }, {
    heading: he(() => [
      Ae(ne(e.padStartZero(e.hours)) + ":" + ne(e.padStartZero(e.minutes)), 1)
    ]),
    body: he(() => [
      N("div", ti, [
        (F(!0), X(Le, null, He(e.hoursList, (u) => (F(), X("button", {
          key: u.value,
          ref_for: !0,
          ref: u.ref,
          class: xe([{ selected: u.selected }, "v3dp__element_button__hour"]),
          disabled: !e.isEnabled(u.date),
          onClick: me((l) => e.hours = u.value, ["stop", "prevent"])
        }, [
          N("span", null, ne(e.padStartZero(u.value)), 1)
        ], 10, ri))), 128))
      ], 512),
      N("div", ai, [
        (F(!0), X(Le, null, He(e.minutesList, (u) => (F(), X("button", {
          key: u.value,
          ref_for: !0,
          ref: u.ref,
          class: xe([{ selected: u.selected }, "v3dp__element_button__minute"]),
          disabled: !e.isEnabled(u.date),
          onClick: me((l) => e.selectMinutes(u), ["stop", "prevent"])
        }, [
          N("span", null, ne(e.padStartZero(u.value)), 1)
        ], 10, ni))), 128))
      ], 512)
    ]),
    _: 1
  });
}
const oi = /* @__PURE__ */ Te(ei, [["render", ii], ["__scopeId", "data-v-81ac698d"]]), qe = ["time", "day", "month", "year"], ui = (e, a, r = void 0) => {
  let n = r || /* @__PURE__ */ new Date();
  return e && (n = sr([e, n])), a && (n = dr([a, n])), n;
}, li = ce({
  components: {
    YearPicker: Qn,
    MonthPicker: zn,
    DayPicker: Jn,
    TimePicker: oi
  },
  inheritAttrs: !1,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * `v-model` for selected date
     */
    modelValue: {
      type: Date,
      required: !1
    },
    /**
     * Dates not available for picking
     */
    disabledDates: {
      type: Object,
      required: !1
    },
    allowOutsideInterval: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Time not available for picking
     */
    disabledTime: {
      type: Object,
      required: !1
    },
    /**
     * Upper limit for available dates for picking
     */
    upperLimit: {
      type: Date,
      required: !1
    },
    /**
     * Lower limit for available dates for picking
     */
    lowerLimit: {
      type: Date,
      required: !1
    },
    /**
     * View on which the date picker should open. Can be either `year`, `month`, `day` or `time`
     */
    startingView: {
      type: String,
      required: !1,
      default: "day",
      validate: (e) => typeof e == "string" && qe.includes(e)
    },
    /**
     * Date which should be the "center" of the initial view.
     * When an empty datepicker opens, it focuses on the month/year
     * that contains this date
     */
    startingViewDate: {
      type: Date,
      required: !1,
      default: () => /* @__PURE__ */ new Date()
    },
    /**
     * `date-fns`-type formatting for a month view heading
     */
    dayPickerHeadingFormat: {
      type: String,
      required: !1,
      default: "LLLL yyyy"
    },
    /**
     * `date-fns`-type formatting for the month picker view
     */
    monthListFormat: {
      type: String,
      required: !1,
      default: "LLL"
    },
    /**
     * `date-fns`-type formatting for a line of weekdays on day view
     */
    weekdayFormat: {
      type: String,
      required: !1,
      default: "EE"
    },
    /**
     * `date-fns`-type formatting for the day picker view
     */
    dayFormat: {
      type: String,
      required: !1,
      default: "dd"
    },
    /**
     * `date-fns`-type format in which the string in the input should be both
     * parsed and displayed
     */
    inputFormat: {
      type: String,
      required: !1,
      default: "yyyy-MM-dd"
    },
    /**
     * [`date-fns` locale object](https://date-fns.org/v2.16.1/docs/I18n#usage).
     * Used in string formatting (see default `dayPickerHeadingFormat`)
     */
    locale: {
      type: Object,
      required: !1
    },
    /**
     * Day on which the week should start.
     *
     * Number from 0 to 6, where 0 is Sunday and 6 is Saturday.
     * Week starts with a Monday (1) by default
     */
    weekStartsOn: {
      type: Number,
      required: !1,
      default: 1,
      validator: (e) => [0, 1, 2, 3, 4, 5, 6].includes(e)
    },
    /**
     * Disables datepicker and prevents it's opening
     */
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Clears selected date
     */
    clearable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /*
     * Allows user to input date manually
     */
    typeable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * If set, lower-level views won't show
     */
    minimumView: {
      type: String,
      required: !1,
      default: "day",
      validate: (e) => typeof e == "string" && qe.includes(e)
    }
  },
  emits: {
    "update:modelValue": (e) => e == null || B(e),
    decadePageChanged: (e) => !0,
    yearPageChanged: (e) => !0,
    monthPageChanged: (e) => !0,
    opened: () => !0,
    closed: () => !0
  },
  setup(e, { emit: a, attrs: r }) {
    const n = j("none"), t = j(e.startingViewDate), o = j(null), i = j(!1), u = j("");
    Xe(() => {
      const y = _t(u.value, e.inputFormat, /* @__PURE__ */ new Date(), {
        locale: e.locale
      });
      B(y) && (t.value = y);
    }), Xe(
      () => u.value = e.modelValue && B(e.modelValue) ? Ie(e.modelValue, e.inputFormat, {
        locale: e.locale
      }) : ""
    );
    const l = (y = "none") => {
      e.disabled || (y !== "none" && n.value === "none" && (t.value = e.modelValue || ui(e.lowerLimit, e.upperLimit, t.value)), n.value = y, a(y !== "none" ? "opened" : "closed"));
    };
    Xe(() => {
      e.disabled && (n.value = "none");
    });
    const s = (y, R) => {
      t.value = R, y === "year" ? a("decadePageChanged", R) : y === "month" ? a("yearPageChanged", R) : y === "day" && a("monthPageChanged", R);
    }, d = (y) => {
      t.value = y, e.minimumView === "year" ? (l("none"), a("update:modelValue", y)) : n.value = "month";
    }, c = (y) => {
      t.value = y, e.minimumView === "month" ? (l("none"), a("update:modelValue", y)) : n.value = "day";
    }, g = (y) => {
      t.value = y, e.minimumView === "day" ? (l("none"), a("update:modelValue", y)) : n.value = "time";
    }, p = (y) => {
      l("none"), a("update:modelValue", y);
    }, w = () => {
      e.clearable && (l("none"), a("update:modelValue", null), t.value = e.startingViewDate);
    }, b = () => i.value = !0, M = () => l(A.value), S = () => {
      i.value = !1, l();
    }, q = (y) => {
      const R = y.keyCode ? y.keyCode : y.which;
      if ([
        27,
        // escape
        13
        // enter
      ].includes(R) && o.value.blur(), e.typeable) {
        const W = _t(
          o.value.value,
          e.inputFormat,
          /* @__PURE__ */ new Date(),
          { locale: e.locale }
        );
        B(W) && u.value === Ie(W, e.inputFormat, { locale: e.locale }) && (u.value = o.value.value, a("update:modelValue", W));
      }
    }, A = x(() => {
      const y = qe.indexOf(e.startingView), R = qe.indexOf(e.minimumView);
      return y < R ? e.minimumView : e.startingView;
    });
    return {
      blur: S,
      focus: M,
      click: b,
      input: u,
      inputRef: o,
      pageDate: t,
      renderView: l,
      updatePageDate: s,
      selectYear: d,
      selectMonth: c,
      selectDay: g,
      selectTime: p,
      keyUp: q,
      viewShown: n,
      goBackFromTimepicker: () => e.startingView === "time" && e.minimumView === "time" ? null : n.value = "day",
      clearModelValue: w,
      initialView: A,
      log: (y) => /* @__PURE__ */ console.log(y),
      variables: (y) => Object.fromEntries(
        Object.entries(y ?? {}).filter(([R, W]) => R.startsWith("--"))
      )
    };
  }
}), si = { class: "v3dp__input_wrapper" }, di = ["readonly", "placeholder", "disabled", "tabindex"], ci = { class: "v3dp__clearable" };
function vi(e, a, r, n, t, o) {
  const i = de("year-picker"), u = de("month-picker"), l = de("day-picker"), s = de("time-picker");
  return F(), X("div", {
    class: "v3dp__datepicker",
    style: Nt(e.variables(e.$attrs.style))
  }, [
    N("div", si, [
      pe(N("input", tr({
        type: "text",
        ref: "inputRef",
        readonly: !e.typeable,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => e.input = d)
      }, e.$attrs, {
        placeholder: e.placeholder,
        disabled: e.disabled,
        tabindex: e.disabled ? -1 : 0,
        onKeyup: a[1] || (a[1] = (...d) => e.keyUp && e.keyUp(...d)),
        onBlur: a[2] || (a[2] = (...d) => e.blur && e.blur(...d)),
        onFocus: a[3] || (a[3] = (...d) => e.focus && e.focus(...d)),
        onClick: a[4] || (a[4] = (...d) => e.click && e.click(...d))
      }), null, 16, di), [
        [rr, e.input]
      ]),
      pe(N("div", ci, [
        we(e.$slots, "clear", { onClear: e.clearModelValue }, () => [
          N("i", {
            onClick: a[5] || (a[5] = (d) => e.clearModelValue())
          }, "x")
        ])
      ], 512), [
        [Ce, e.clearable && e.modelValue]
      ])
    ]),
    pe(We(i, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": a[6] || (a[6] = (d) => e.updatePageDate("year", d)),
      selected: e.modelValue,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      onSelect: e.selectYear
    }, null, 8, ["pageDate", "selected", "lowerLimit", "upperLimit", "onSelect"]), [
      [Ce, e.viewShown === "year"]
    ]),
    pe(We(u, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": a[7] || (a[7] = (d) => e.updatePageDate("month", d)),
      selected: e.modelValue,
      onSelect: e.selectMonth,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      format: e.monthListFormat,
      locale: e.locale,
      onBack: a[8] || (a[8] = (d) => e.viewShown = "year")
    }, null, 8, ["pageDate", "selected", "onSelect", "lowerLimit", "upperLimit", "format", "locale"]), [
      [Ce, e.viewShown === "month"]
    ]),
    pe(We(l, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": a[9] || (a[9] = (d) => e.updatePageDate("day", d)),
      selected: e.modelValue,
      weekStartsOn: e.weekStartsOn,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      headingFormat: e.dayPickerHeadingFormat,
      disabledDates: e.disabledDates,
      locale: e.locale,
      weekdayFormat: e.weekdayFormat,
      "allow-outside-interval": e.allowOutsideInterval,
      format: e.dayFormat,
      onSelect: e.selectDay,
      onBack: a[10] || (a[10] = (d) => e.viewShown = "month")
    }, null, 8, ["pageDate", "selected", "weekStartsOn", "lowerLimit", "upperLimit", "headingFormat", "disabledDates", "locale", "weekdayFormat", "allow-outside-interval", "format", "onSelect"]), [
      [Ce, e.viewShown === "day"]
    ]),
    pe(We(s, {
      pageDate: e.pageDate,
      visible: e.viewShown === "time",
      selected: e.modelValue,
      disabledTime: e.disabledTime,
      onSelect: e.selectTime,
      onBack: e.goBackFromTimepicker
    }, null, 8, ["pageDate", "visible", "selected", "disabledTime", "onSelect", "onBack"]), [
      [Ce, e.viewShown === "time"]
    ])
  ], 4);
}
const fi = /* @__PURE__ */ Te(li, [["render", vi]]);
function xt(e, a, r) {
  h(2, arguments);
  var n = ie(e, r), t = ie(a, r);
  return n.getTime() === t.getTime();
}
function Me(e, a) {
  if (e.one !== void 0 && a === 1)
    return e.one;
  var r = a % 10, n = a % 100;
  return r === 1 && n !== 11 ? e.singularNominative.replace("{{count}}", String(a)) : r >= 2 && r <= 4 && (n < 10 || n > 20) ? e.singularGenitive.replace("{{count}}", String(a)) : e.pluralGenitive.replace("{{count}}", String(a));
}
function G(e) {
  return function(a, r) {
    return r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? e.future ? Me(e.future, a) : "через " + Me(e.regular, a) : e.past ? Me(e.past, a) : Me(e.regular, a) + " назад" : Me(e.regular, a);
  };
}
var mi = {
  lessThanXSeconds: G({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: G({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: function(a, r) {
    return r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты";
  },
  lessThanXMinutes: G({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: G({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: G({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: G({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: G({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: G({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: G({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: G({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: G({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: G({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: G({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: G({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: G({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
}, hi = function(a, r, n) {
  return mi[a](r, n);
};
const pi = hi;
var gi = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
}, wi = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, bi = {
  any: "{{date}}, {{time}}"
}, yi = {
  date: be({
    formats: gi,
    defaultWidth: "full"
  }),
  time: be({
    formats: wi,
    defaultWidth: "full"
  }),
  dateTime: be({
    formats: bi,
    defaultWidth: "any"
  })
};
const Di = yi;
var ut = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];
function Ti(e) {
  var a = ut[e];
  switch (e) {
    case 0:
      return "'в прошлое " + a + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + a + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + a + " в' p";
  }
}
function Lt(e) {
  var a = ut[e];
  return e === 2 ? "'во " + a + " в' p" : "'в " + a + " в' p";
}
function ki(e) {
  var a = ut[e];
  switch (e) {
    case 0:
      return "'в следующее " + a + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + a + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + a + " в' p";
  }
}
var _i = {
  lastWeek: function(a, r, n) {
    var t = a.getUTCDay();
    return xt(a, r, n) ? Lt(t) : Ti(t);
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: function(a, r, n) {
    var t = a.getUTCDay();
    return xt(a, r, n) ? Lt(t) : ki(t);
  },
  other: "P"
}, Pi = function(a, r, n, t) {
  var o = _i[a];
  return typeof o == "function" ? o(r, n, t) : o;
};
const Oi = Pi;
var Ci = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
}, Mi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, xi = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
  wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
}, Li = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
  wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
}, Ni = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
}, Yi = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
}, Ei = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
}, Ui = function(a, r) {
  var n = Number(a), t = r == null ? void 0 : r.unit, o;
  return t === "date" ? o = "-е" : t === "week" || t === "minute" || t === "second" ? o = "-я" : o = "-й", n + o;
}, $i = {
  ordinalNumber: Ui,
  era: J({
    values: Ci,
    defaultWidth: "wide"
  }),
  quarter: J({
    values: Mi,
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return a - 1;
    }
  }),
  month: J({
    values: xi,
    defaultWidth: "wide",
    formattingValues: Li,
    defaultFormattingWidth: "wide"
  }),
  day: J({
    values: Ni,
    defaultWidth: "wide"
  }),
  dayPeriod: J({
    values: Yi,
    defaultWidth: "any",
    formattingValues: Ei,
    defaultFormattingWidth: "wide"
  })
};
const Wi = $i;
var Si = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, qi = /\d+/i, Hi = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
}, Fi = {
  any: [/^д/i, /^н/i]
}, Ii = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
}, Ri = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gi = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}, Ai = {
  narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
  any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
}, Vi = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}, Bi = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
}, Qi = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
}, ji = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, Xi = {
  ordinalNumber: Rt({
    matchPattern: Si,
    parsePattern: qi,
    valueCallback: function(a) {
      return parseInt(a, 10);
    }
  }),
  era: ee({
    matchPatterns: Hi,
    defaultMatchWidth: "wide",
    parsePatterns: Fi,
    defaultParseWidth: "any"
  }),
  quarter: ee({
    matchPatterns: Ii,
    defaultMatchWidth: "wide",
    parsePatterns: Ri,
    defaultParseWidth: "any",
    valueCallback: function(a) {
      return a + 1;
    }
  }),
  month: ee({
    matchPatterns: Gi,
    defaultMatchWidth: "wide",
    parsePatterns: Ai,
    defaultParseWidth: "any"
  }),
  day: ee({
    matchPatterns: Vi,
    defaultMatchWidth: "wide",
    parsePatterns: Bi,
    defaultParseWidth: "any"
  }),
  dayPeriod: ee({
    matchPatterns: Qi,
    defaultMatchWidth: "wide",
    parsePatterns: ji,
    defaultParseWidth: "any"
  })
};
const zi = Xi;
var Zi = {
  code: "ru",
  formatDistance: pi,
  formatLong: Di,
  formatRelative: Oi,
  localize: Wi,
  match: zi,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Ki = Zi, ro = /* @__PURE__ */ ce({
  __name: "ChamomileDatepicker",
  props: {
    disabledDates: {},
    startingView: {},
    id: {},
    name: {},
    isDisabled: { type: Boolean }
  },
  setup(e) {
    const a = j(/* @__PURE__ */ new Date());
    return (r, n) => (F(), De(pt(fi), {
      modelValue: a.value,
      "onUpdate:modelValue": n[0] || (n[0] = (t) => a.value = t),
      locale: pt(Ki),
      weekStartsOn: 1,
      disabledDates: r.disabledDates,
      startingView: r.startingView
    }, null, 8, ["modelValue", "locale", "disabledDates", "startingView"]));
  }
}), Ji = { class: "input__label" }, eo = ["type", "disabled", "name"], ao = /* @__PURE__ */ ce({
  __name: "ChamomileInput",
  props: {
    type: {},
    id: {},
    name: {},
    isDisabled: { type: Boolean }
  },
  setup(e) {
    return (a, r) => (F(), X("label", Ji, [
      N("input", {
        type: a.type,
        disabled: a.isDisabled,
        name: a.name
      }, null, 8, eo)
    ]));
  }
});
export {
  ro as ChamomileDatepicker,
  ao as ChamomileInput
};
//# sourceMappingURL=index.js.map
