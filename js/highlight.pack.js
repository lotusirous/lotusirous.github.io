/*! highlight.js v9.13.1 | BSD3 License | git.io/hljslicense */
!(function (e) { var n = typeof window === 'object' && window || typeof self === 'object' && self; typeof exports !== 'undefined' ? e(exports) : n && (n.hljs = e({}), typeof define === 'function' && define.amd && define([], function () { return n.hljs; })); }(function (e) {
	function n(e) { return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); } function t(e) { return e.nodeName.toLowerCase(); } function r(e, n) { var t = e && e.exec(n); return t && t.index === 0; } function a(e) { return k.test(e); } function i(e) { var n; var t; var r; var i; var o = e.className + ' '; if (o += e.parentNode ? e.parentNode.className : '', t = M.exec(o)) return w(t[1]) ? t[1] : 'no-highlight'; for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++) if (i = o[n], a(i) || w(i)) return i; } function o(e) { var n; var t = {}; var r = Array.prototype.slice.call(arguments, 1); for (n in e)t[n] = e[n]; return r.forEach(function (e) { for (n in e)t[n] = e[n]; }), t; } function c(e) { var n = []; return (function r(e, a) { for (var i = e.firstChild; i; i = i.nextSibling)i.nodeType === 3 ? a += i.nodeValue.length : i.nodeType === 1 && (n.push({ event: 'start', offset: a, node: i }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({ event: 'stop', offset: a, node: i })); return a; }(e, 0)), n; } function u(e, r, a) { function i() { return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : r[0].event === 'start' ? e : r : e.length ? e : r; } function o(e) { function r(e) { return ' ' + e.nodeName + '="' + n(e.value).replace('"', '&quot;') + '"'; }l += '<' + t(e) + E.map.call(e.attributes, r).join('') + '>'; } function c(e) { l += '</' + t(e) + '>'; } function u(e) { (e.event === 'start' ? o : c)(e.node); } for (var s = 0, l = '', f = []; e.length || r.length;) { var g = i(); if (l += n(a.substring(s, g[0].offset)), s = g[0].offset, g === e) { f.reverse().forEach(c); do u(g.splice(0, 1)[0]), g = i(); while (g === e && g.length && g[0].offset === s);f.reverse().forEach(o); } else g[0].event === 'start' ? f.push(g[0].node) : f.pop(), u(g.splice(0, 1)[0]); } return l + n(a.substr(s)); } function s(e) { return e.v && !e.cached_variants && (e.cached_variants = e.v.map(function (n) { return o(e, { v: null }, n); })), e.cached_variants || e.eW && [o(e)] || [e]; } function l(e) { function n(e) { return e && e.source || e; } function t(t, r) { return new RegExp(n(t), 'm' + (e.cI ? 'i' : '') + (r ? 'g' : '')); } function r(a, i) { if (!a.compiled) { if (a.compiled = !0, a.k = a.k || a.bK, a.k) { var o = {}; var c = function (n, t) { e.cI && (t = t.toLowerCase()), t.split(' ').forEach(function (e) { var t = e.split('|'); o[t[0]] = [n, t[1] ? Number(t[1]) : 1]; }); }; typeof a.k === 'string' ? c('keyword', a.k) : B(a.k).forEach(function (e) { c(e, a.k[e]); }), a.k = o; }a.lR = t(a.l || /\w+/, !0), i && (a.bK && (a.b = '\\b(' + a.bK.split(' ').join('|') + ')\\b'), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.endSameAsBegin && (a.e = a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || '', a.eW && i.tE && (a.tE += (a.e ? '|' : '') + i.tE)), a.i && (a.iR = t(a.i)), a.r == null && (a.r = 1), a.c || (a.c = []), a.c = Array.prototype.concat.apply([], a.c.map(function (e) { return s(e === 'self' ? a : e); })), a.c.forEach(function (e) { r(e, a); }), a.starts && r(a.starts, i); var u = a.c.map(function (e) { return e.bK ? '\\.?(' + e.b + ')\\.?' : e.b; }).concat([a.tE, a.i]).map(n).filter(Boolean); a.t = u.length ? t(u.join('|'), !0) : { exec: function () { return null; } }; } }r(e); } function f(e, t, a, i) {
		function o(e) { return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm'); } function c(e, n) { var t; var a; for (t = 0, a = n.c.length; a > t; t++) if (r(n.c[t].bR, e)) return n.c[t].endSameAsBegin && (n.c[t].eR = o(n.c[t].bR.exec(e)[0])), n.c[t]; } function u(e, n) { if (r(e.eR, n)) { for (;e.endsParent && e.parent;)e = e.parent; return e; } return e.eW ? u(e.parent, n) : void 0; } function s(e, n) { return !a && r(n.iR, e); } function p(e, n) { var t = R.cI ? n[0].toLowerCase() : n[0]; return e.k.hasOwnProperty(t) && e.k[t]; } function d(e, n, t, r) { var a = r ? '' : j.classPrefix; var i = '<span class="' + a; var o = t ? '' : I; return i += e + '">', i + n + o; } function h() { var e; var t; var r; var a; if (!E.k) return n(k); for (a = '', t = 0, E.lR.lastIndex = 0, r = E.lR.exec(k); r;)a += n(k.substring(t, r.index)), e = p(E, r), e ? (M += e[1], a += d(e[0], n(r[0]))) : a += n(r[0]), t = E.lR.lastIndex, r = E.lR.exec(k); return a + n(k.substr(t)); } function b() { var e = typeof E.sL === 'string'; if (e && !L[E.sL]) return n(k); var t = e ? f(E.sL, k, !0, B[E.sL]) : g(k, E.sL.length ? E.sL : void 0); return E.r > 0 && (M += t.r), e && (B[E.sL] = t.top), d(t.language, t.value, !1, !0); } function v() { y += E.sL != null ? b() : h(), k = ''; } function m(e) { y += e.cN ? d(e.cN, '', !0) : '', E = Object.create(e, { parent: { value: E } }); } function N(e, n) { if (k += e, n == null) return v(), 0; var t = c(n, E); if (t) return t.skip ? k += n : (t.eB && (k += n), v(), t.rB || t.eB || (k = n)), m(t, n), t.rB ? 0 : n.length; var r = u(E, n); if (r) { var a = E; a.skip ? k += n : (a.rE || a.eE || (k += n), v(), a.eE && (k = n)); do E.cN && (y += I), E.skip || E.sL || (M += E.r), E = E.parent; while (E !== r.parent);return r.starts && (r.endSameAsBegin && (r.starts.eR = r.eR), m(r.starts, '')), a.rE ? 0 : n.length; } if (s(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || '<unnamed>') + '"'); return k += n, n.length || 1; } var R = w(e); if (!R) throw new Error('Unknown language: "' + e + '"'); l(R); var x; var E = i || R; var B = {}; var y = ''; for (x = E; x !== R; x = x.parent)x.cN && (y = d(x.cN, '', !0) + y); var k = ''; var M = 0; try {
			for (var C, A, S = 0; ;) { if (E.t.lastIndex = S, C = E.t.exec(t), !C) break; A = N(t.substring(S, C.index), C[0]), S = C.index + A; } for (N(t.substr(S)), x = E; x.parent; x = x.parent)x.cN && (y += I); return {
				r: M, value: y, language: e, top: E
			};
		} catch (O) { if (O.message && O.message.indexOf('Illegal') !== -1) return { r: 0, value: n(t) }; throw O; }
	} function g(e, t) { t = t || j.languages || B(L); var r = { r: 0, value: n(e) }; var a = r; return t.filter(w).filter(x).forEach(function (n) { var t = f(n, e, !1); t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t); }), a.language && (r.second_best = a), r; } function p(e) { return j.tabReplace || j.useBR ? e.replace(C, function (e, n) { return j.useBR && e === '\n' ? '<br>' : j.tabReplace ? n.replace(/\t/g, j.tabReplace) : ''; }) : e; } function d(e, n, t) { var r = n ? y[n] : t; var a = [e.trim()]; return e.match(/\bhljs\b/) || a.push('hljs'), e.indexOf(r) === -1 && a.push(r), a.join(' ').trim(); } function h(e) { var n; var t; var r; var o; var s; var l = i(e); a(l) || (j.useBR ? (n = document.createElementNS('http://www.w3.org/1999/xhtml', 'div'), n.innerHTML = e.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n')) : n = e, s = n.textContent, r = l ? f(l, s, !0) : g(s), t = c(n), t.length && (o = document.createElementNS('http://www.w3.org/1999/xhtml', 'div'), o.innerHTML = r.value, r.value = u(t, c(o), s)), r.value = p(r.value), e.innerHTML = r.value, e.className = d(e.className, l, r.language), e.result = { language: r.language, re: r.r }, r.second_best && (e.second_best = { language: r.second_best.language, re: r.second_best.r })); } function b(e) { j = o(j, e); } function v() { if (!v.called) { v.called = !0; var e = document.querySelectorAll('pre code'); E.forEach.call(e, h); } } function m() { addEventListener('DOMContentLoaded', v, !1), addEventListener('load', v, !1); } function N(n, t) { var r = L[n] = t(e); r.aliases && r.aliases.forEach(function (e) { y[e] = n; }); } function R() { return B(L); } function w(e) { return e = (e || '').toLowerCase(), L[e] || L[y[e]]; } function x(e) { var n = w(e); return n && !n.disableAutodetect; } var E = []; var B = Object.keys; var L = {}; var y = {}; var k = /^(no-?highlight|plain|text)$/i; var M = /\blang(?:uage)?-([\w-]+)\b/i; var C = /((^(<[^>]+>|\t|)+|(?:\n)))/gm; var I = '</span>'; var j = {
		classPrefix: 'hljs-', tabReplace: null, useBR: !1, languages: void 0
	}; return e.highlight = f, e.highlightAuto = g, e.fixMarkup = p, e.highlightBlock = h, e.configure = b, e.initHighlighting = v, e.initHighlightingOnLoad = m, e.registerLanguage = N, e.listLanguages = R, e.getLanguage = w, e.autoDetection = x, e.inherit = o, e.IR = '[a-zA-Z]\\w*', e.UIR = '[a-zA-Z_]\\w*', e.NR = '\\b\\d+(\\.\\d+)?', e.CNR = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)', e.BNR = '\\b(0b[01]+)', e.RSR = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~', e.BE = { b: '\\\\[\\s\\S]', r: 0 }, e.ASM = {
		cN: 'string', b: "'", e: "'", i: '\\n', c: [e.BE]
	}, e.QSM = {
		cN: 'string', b: '"', e: '"', i: '\\n', c: [e.BE]
	}, e.PWM = { b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, e.C = function (n, t, r) {
		var a = e.inherit({
			cN: 'comment', b: n, e: t, c: []
		}, r || {}); return a.c.push(e.PWM), a.c.push({ cN: 'doctag', b: '(?:TODO|FIXME|NOTE|BUG|XXX):', r: 0 }), a;
	}, e.CLCM = e.C('//', '$'), e.CBCM = e.C('/\\*', '\\*/'), e.HCM = e.C('#', '$'), e.NM = { cN: 'number', b: e.NR, r: 0 }, e.CNM = { cN: 'number', b: e.CNR, r: 0 }, e.BNM = { cN: 'number', b: e.BNR, r: 0 }, e.CSSNM = { cN: 'number', b: e.NR + '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?', r: 0 }, e.RM = {
		cN: 'regexp',
		b: /\//,
		e: /\/[gimuy]*/,
		i: /\n/,
		c: [e.BE, {
			b: /\[/, e: /\]/, r: 0, c: [e.BE]
		}]
	}, e.TM = { cN: 'title', b: e.IR, r: 0 }, e.UTM = { cN: 'title', b: e.UIR, r: 0 }, e.METHOD_GUARD = { b: '\\.\\s*' + e.UIR, r: 0 }, e;
})); hljs.registerLanguage('json', function (e) {
	var i = { literal: 'true false null' }; var n = [e.QSM, e.CNM]; var r = {
		e: ',', eW: !0, eE: !0, c: n, k: i
	}; var t = {
		b: '{',
		e: '}',
		c: [{
			cN: 'attr', b: /"/, e: /"/, c: [e.BE], i: '\\n'
		}, e.inherit(r, { b: /:/ })],
		i: '\\S'
	}; var c = {
		b: '\\[', e: '\\]', c: [e.inherit(r)], i: '\\S'
	}; return n.splice(n.length, 0, t, c), { c: n, k: i, i: '\\S' };
}); hljs.registerLanguage('properties', function (r) {
	var t = '[ \\t\\f]*'; var e = '[ \\t\\f]+'; var s = '(' + t + '[:=]' + t + '|' + e + ')'; var n = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+'; var a = '([^\\\\:= \\t\\f\\n]|\\\\.)+'; var c = {
		e: s,
		r: 0,
		starts: {
			cN: 'string', e: /$/, r: 0, c: [{ b: '\\\\\\n' }]
		}
	}; return {
		cI: !0,
		i: /\S/,
		c: [r.C('^\\s*[!#]', '$'), {
			b: n + s,
			rB: !0,
			c: [{
				cN: 'attr', b: n, endsParent: !0, r: 0
			}],
			starts: c
		}, {
			b: a + s,
			rB: !0,
			r: 0,
			c: [{
				cN: 'meta', b: a, endsParent: !0, r: 0
			}],
			starts: c
		}, { cN: 'attr', r: 0, b: a + t + '$' }]
	};
}); hljs.registerLanguage('typescript', function (e) {
	var r = '[A-Za-z$_][0-9A-Za-z$_]*'; var t = { keyword: 'in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await', literal: 'true false null undefined NaN Infinity', built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise' }; var n = { cN: 'meta', b: '@' + r }; var a = {
		b: '\\(', e: /\)/, k: t, c: ['self', e.QSM, e.ASM, e.NM]
	}; var o = {
		cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: [e.CLCM, e.CBCM, n, a]
	}; return {
		aliases: ['ts'],
		k: t,
		c: [{ cN: 'meta', b: /^\s*['"]use strict['"]/ }, e.ASM, e.QSM, {
			cN: 'string', b: '`', e: '`', c: [e.BE, { cN: 'subst', b: '\\$\\{', e: '\\}' }]
		}, e.CLCM, e.CBCM, { cN: 'number', v: [{ b: '\\b(0[bB][01]+)' }, { b: '\\b(0[oO][0-7]+)' }, { b: e.CNR }], r: 0 }, {
			b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
			k: 'return throw case',
			c: [e.CLCM, e.CBCM, e.RM, {
				cN: 'function',
				b: '(\\(.*?\\)|' + e.IR + ')\\s*=>',
				rB: !0,
				e: '\\s*=>',
				c: [{
					cN: 'params',
					v: [{ b: e.IR }, { b: /\(\s*\)/ }, {
						b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: ['self', e.CLCM, e.CBCM]
					}]
				}]
			}],
			r: 0
		}, {
			cN: 'function', b: 'function', e: /[\{;]/, eE: !0, k: t, c: ['self', e.inherit(e.TM, { b: r }), o], i: /%/, r: 0
		}, {
			bK: 'constructor', e: /\{/, eE: !0, c: ['self', o]
		}, { b: /module\./, k: { built_in: 'module' }, r: 0 }, { bK: 'module', e: /\{/, eE: !0 }, {
			bK: 'interface', e: /\{/, eE: !0, k: 'interface extends'
		}, { b: /\$[(.]/ }, { b: '\\.' + e.IR, r: 0 }, n, a]
	};
}); hljs.registerLanguage('xml', function (s) {
	var e = '[A-Za-z0-9\\._:-]+'; var t = {
		eW: !0, i: /</, r: 0, c: [{ cN: 'attr', b: e, r: 0 }, { b: /=\s*/, r: 0, c: [{ cN: 'string', endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }] }]
	}; return {
		aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
		cI: !0,
		c: [{
			cN: 'meta', b: '<!DOCTYPE', e: '>', r: 10, c: [{ b: '\\[', e: '\\]' }]
		}, s.C('<!--', '-->', { r: 10 }), { b: '<\\!\\[CDATA\\[', e: '\\]\\]>', r: 10 }, {
			cN: 'meta', b: /<\?xml/, e: /\?>/, r: 10
		}, {
			b: /<\?(php)?/,
			e: /\?>/,
			sL: 'php',
			c: [{ b: '/\\*', e: '\\*/', skip: !0 }, { b: 'b"', e: '"', skip: !0 }, { b: "b'", e: "'", skip: !0 }, s.inherit(s.ASM, {
				i: null, cN: null, c: null, skip: !0
			}), s.inherit(s.QSM, {
				i: null, cN: null, c: null, skip: !0
			})]
		}, {
			cN: 'tag', b: '<style(?=\\s|>|$)', e: '>', k: { name: 'style' }, c: [t], starts: { e: '</style>', rE: !0, sL: ['css', 'xml'] }
		}, {
			cN: 'tag', b: '<script(?=\\s|>|$)', e: '>', k: { name: 'script' }, c: [t], starts: { e: '</script>', rE: !0, sL: ['actionscript', 'javascript', 'handlebars', 'xml'] }
		}, {
			cN: 'tag', b: '</?', e: '/?>', c: [{ cN: 'name', b: /[^\/><\s]+/, r: 0 }, t]
		}]
	};
}); hljs.registerLanguage('django', function (e) {
	var t = { b: /\|[A-Za-z]+:?/, k: { name: 'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone' }, c: [e.QSM, e.ASM] }; return {
		aliases: ['jinja'],
		cI: !0,
		sL: 'xml',
		c: [e.C(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), e.C(/\{#/, /#}/), {
			cN: 'template-tag',
			b: /\{%/,
			e: /%}/,
			c: [{
				cN: 'name',
				b: /\w+/,
				k: { name: 'comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim' },
				starts: {
					eW: !0, k: 'in by as', c: [t], r: 0
				}
			}]
		}, {
			cN: 'template-variable', b: /\{\{/, e: /}}/, c: [t]
		}]
	};
}); hljs.registerLanguage('http', function (e) {
	var t = 'HTTP/[0-9\\.]+'; return {
		aliases: ['https'],
		i: '\\S',
		c: [{ b: '^' + t, e: '$', c: [{ cN: 'number', b: '\\b\\d{3}\\b' }] }, {
			b: '^[A-Z]+ (.*?) ' + t + '$',
			rB: !0,
			e: '$',
			c: [{
				cN: 'string', b: ' ', e: ' ', eB: !0, eE: !0
			}, { b: t }, { cN: 'keyword', b: '[A-Z]+' }]
		}, {
			cN: 'attribute', b: '^\\w', e: ': ', eE: !0, i: '\\n|\\s|=', starts: { e: '$', r: 0 }
		}, { b: '\\n\\n', starts: { sL: [], eW: !0 } }]
	};
}); hljs.registerLanguage('thrift', function (e) {
	var t = 'bool byte i16 i32 i64 double string binary'; return {
		k: { keyword: 'namespace const typedef struct enum service exception void oneway set list map required optional', built_in: t, literal: 'true false' },
		c: [e.QSM, e.NM, e.CLCM, e.CBCM, {
			cN: 'class', bK: 'struct enum service exception', e: /\{/, i: /\n/, c: [e.inherit(e.TM, { starts: { eW: !0, eE: !0 } })]
		}, {
			b: '\\b(set|list|map)\\s*<', e: '>', k: t, c: ['self']
		}]
	};
}); hljs.registerLanguage('perl', function (e) {
	var t = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when'; var r = {
		cN: 'subst', b: '[$@]\\{', e: '\\}', k: t
	}; var s = { b: '->{', e: '}' }; var n = { v: [{ b: /\$\d/ }, { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ }, { b: /[\$%@][^\s\w{]/, r: 0 }] }; var i = [e.BE, r, n]; var o = [n, e.HCM, e.C('^\\=\\w', '\\=cut', { eW: !0 }), s, { cN: 'string', c: i, v: [{ b: 'q[qwxr]?\\s*\\(', e: '\\)', r: 5 }, { b: 'q[qwxr]?\\s*\\[', e: '\\]', r: 5 }, { b: 'q[qwxr]?\\s*\\{', e: '\\}', r: 5 }, { b: 'q[qwxr]?\\s*\\|', e: '\\|', r: 5 }, { b: 'q[qwxr]?\\s*\\<', e: '\\>', r: 5 }, { b: 'qw\\s+q', e: 'q', r: 5 }, { b: "'", e: "'", c: [e.BE] }, { b: '"', e: '"' }, { b: '`', e: '`', c: [e.BE] }, { b: '{\\w+}', c: [], r: 0 }, { b: '-?\\w+\\s*\\=\\>', c: [], r: 0 }] }, { cN: 'number', b: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b', r: 0 }, {
		b: '(\\/\\/|' + e.RSR + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
		k: 'split return print reverse grep',
		r: 0,
		c: [e.HCM, { cN: 'regexp', b: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*', r: 10 }, {
			cN: 'regexp', b: '(m|qr)?/', e: '/[a-z]*', c: [e.BE], r: 0
		}]
	}, {
		cN: 'function', bK: 'sub', e: '(\\s*\\(.*?\\))?[;{]', eE: !0, r: 5, c: [e.TM]
	}, { b: '-\\w\\b', r: 0 }, {
		b: '^__DATA__$', e: '^__END__$', sL: 'mojolicious', c: [{ b: '^@@.*', e: '$', cN: 'comment' }]
	}]; return r.c = o, s.c = o, {
		aliases: ['pl', 'pm'], l: /[\w\.]+/, k: t, c: o
	};
}); hljs.registerLanguage('stylus', function (e) {
	var t = { cN: 'variable', b: '\\$' + e.IR }; var o = { cN: 'number', b: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})' }; var i = ['charset', 'css', 'debug', 'extend', 'font-face', 'for', 'import', 'include', 'media', 'mixin', 'page', 'warn', 'while']; var r = ['after', 'before', 'first-letter', 'first-line', 'active', 'first-child', 'focus', 'hover', 'lang', 'link', 'visited']; var n = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'mark', 'menu', 'nav', 'object', 'ol', 'p', 'q', 'quote', 'samp', 'section', 'span', 'strong', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'ul', 'var', 'video']; var a = '[\\.\\s\\n\\[\\:,]'; var l = ['align-content', 'align-items', 'align-self', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'auto', 'backface-visibility', 'background', 'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'clear', 'clip', 'clip-path', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-variant-ligatures', 'font-weight', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'ime-mode', 'inherit', 'initial', 'justify-content', 'left', 'letter-spacing', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'mask', 'max-height', 'max-width', 'min-height', 'min-width', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'none', 'normal', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-overflow', 'text-rendering', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'z-index']; var d = ['\\?', '(\\bReturn\\b)', '(\\bEnd\\b)', '(\\bend\\b)', '(\\bdef\\b)', ';', '#\\s', '\\*\\s', '===\\s', '\\|', '%']; return {
		aliases: ['styl'],
		cI: !1,
		k: 'if else for in',
		i: '(' + d.join('|') + ')',
		c: [e.QSM, e.ASM, e.CLCM, e.CBCM, o, { b: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + a, rB: !0, c: [{ cN: 'selector-class', b: '\\.[a-zA-Z][a-zA-Z0-9_-]*' }] }, { b: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + a, rB: !0, c: [{ cN: 'selector-id', b: '\\#[a-zA-Z][a-zA-Z0-9_-]*' }] }, { b: '\\b(' + n.join('|') + ')' + a, rB: !0, c: [{ cN: 'selector-tag', b: '\\b[a-zA-Z][a-zA-Z0-9_-]*' }] }, { b: '&?:?:\\b(' + r.join('|') + ')' + a }, { b: '@(' + i.join('|') + ')\\b' }, t, e.CSSNM, e.NM, {
			cN: 'function',
			b: '^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)',
			i: '[\\n]',
			rB: !0,
			c: [{ cN: 'title', b: '\\b[a-zA-Z][a-zA-Z0-9_-]*' }, {
				cN: 'params', b: /\(/, e: /\)/, c: [o, t, e.ASM, e.CSSNM, e.NM, e.QSM]
			}]
		}, {
			cN: 'attribute',
			b: '\\b(' + l.reverse().join('|') + ')\\b',
			starts: {
				e: /;|$/, c: [o, t, e.ASM, e.QSM, e.CSSNM, e.NM, e.CBCM], i: /\./, r: 0
			}
		}]
	};
}); hljs.registerLanguage('apache', function (e) {
	var r = { cN: 'number', b: '[\\$%]\\d+' }; return {
		aliases: ['apacheconf'],
		cI: !0,
		c: [e.HCM, { cN: 'section', b: '</?', e: '>' }, {
			cN: 'attribute',
			b: /\w+/,
			r: 0,
			k: { nomarkup: 'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername' },
			starts: {
				e: /$/,
				r: 0,
				k: { literal: 'on off all' },
				c: [{ cN: 'meta', b: '\\s\\[', e: '\\]$' }, {
					cN: 'variable', b: '[\\$%]\\{', e: '\\}', c: ['self', r]
				}, r, e.QSM]
			}
		}],
		i: /\S/
	};
}); hljs.registerLanguage('cmake', function (e) {
	return {
		aliases: ['cmake.in'], cI: !0, k: { keyword: 'break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined' }, c: [{ cN: 'variable', b: '\\${', e: '}' }, e.HCM, e.QSM, e.NM]
	};
}); hljs.registerLanguage('markdown', function (e) {
	return {
		aliases: ['md', 'mkdown', 'mkd'],
		c: [{ cN: 'section', v: [{ b: '^#{1,6}', e: '$' }, { b: '^.+?\\n[=-]{2,}$' }] }, {
			b: '<', e: '>', sL: 'xml', r: 0
		}, { cN: 'bullet', b: '^([*+-]|(\\d+\\.))\\s+' }, { cN: 'strong', b: '[*_]{2}.+?[*_]{2}' }, { cN: 'emphasis', v: [{ b: '\\*.+?\\*' }, { b: '_.+?_', r: 0 }] }, { cN: 'quote', b: '^>\\s+', e: '$' }, { cN: 'code', v: [{ b: '^```w*s*$', e: '^```s*$' }, { b: '`.+?`' }, { b: '^( {4}|	)', e: '$', r: 0 }] }, { b: '^[-\\*]{3,}', e: '$' }, {
			b: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
			rB: !0,
			c: [{
				cN: 'string', b: '\\[', e: '\\]', eB: !0, rE: !0, r: 0
			}, {
				cN: 'link', b: '\\]\\(', e: '\\)', eB: !0, eE: !0
			}, {
				cN: 'symbol', b: '\\]\\[', e: '\\]', eB: !0, eE: !0
			}],
			r: 10
		}, {
			b: /^\[[^\n]+\]:/,
			rB: !0,
			c: [{
				cN: 'symbol', b: /\[/, e: /\]/, eB: !0, eE: !0
			}, {
				cN: 'link', b: /:\s*/, e: /$/, eB: !0
			}]
		}]
	};
}); hljs.registerLanguage('diff', function (e) { return { aliases: ['patch'], c: [{ cN: 'meta', r: 10, v: [{ b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ }, { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }] }, { cN: 'comment', v: [{ b: /Index: /, e: /$/ }, { b: /={3,}/, e: /$/ }, { b: /^\-{3}/, e: /$/ }, { b: /^\*{3} /, e: /$/ }, { b: /^\+{3}/, e: /$/ }, { b: /\*{5}/, e: /\*{5}$/ }] }, { cN: 'addition', b: '^\\+', e: '$' }, { cN: 'deletion', b: '^\\-', e: '$' }, { cN: 'addition', b: '^\\!', e: '$' }] }; }); hljs.registerLanguage('java', function (e) {
	var a = '[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*'; var t = a + '(<' + a + '(\\s*,\\s*' + a + ')*>)?'; var r = 'false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do'; var s = '\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?'; var c = { cN: 'number', b: s, r: 0 }; return {
		aliases: ['jsp'],
		k: r,
		i: /<\/|#/,
		c: [e.C('/\\*\\*', '\\*/', { r: 0, c: [{ b: /\w+@/, r: 0 }, { cN: 'doctag', b: '@[A-Za-z]+' }] }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
			cN: 'class', bK: 'class interface', e: /[{;=]/, eE: !0, k: 'class interface', i: /[:"\[\]]/, c: [{ bK: 'extends implements' }, e.UTM]
		}, { bK: 'new throw return else', r: 0 }, {
			cN: 'function',
			b: '(' + t + '\\s+)+' + e.UIR + '\\s*\\(',
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: r,
			c: [{
				b: e.UIR + '\\s*\\(', rB: !0, r: 0, c: [e.UTM]
			}, {
				cN: 'params', b: /\(/, e: /\)/, k: r, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM]
			}, e.CLCM, e.CBCM]
		}, c, { cN: 'meta', b: '@[A-Za-z]+' }]
	};
}); hljs.registerLanguage('sql', function (e) {
	var t = e.C('--', '$'); return {
		cI: !0,
		i: /[<>{}*]/,
		c: [{
			bK: 'begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment with',
			e: /;/,
			eW: !0,
			l: /[\w\.]+/,
			k: { keyword: 'as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek', literal: 'true false null unknown', built_in: 'array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp varchar varying void' },
			c: [{
				cN: 'string', b: "'", e: "'", c: [e.BE, { b: "''" }]
			}, {
				cN: 'string', b: '"', e: '"', c: [e.BE, { b: '""' }]
			}, {
				cN: 'string', b: '`', e: '`', c: [e.BE]
			}, e.CNM, e.CBCM, t, e.HCM]
		}, e.CBCM, t, e.HCM]
	};
}); hljs.registerLanguage('go', function (e) {
	var t = { keyword: 'break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune', literal: 'true false iota nil', built_in: 'append cap close complex copy imag len make new panic print println real recover delete' }; return {
		aliases: ['golang'],
		k: t,
		i: '</',
		c: [e.CLCM, e.CBCM, { cN: 'string', v: [e.QSM, { b: "'", e: "[^\\\\]'" }, { b: '`', e: '`' }] }, { cN: 'number', v: [{ b: e.CNR + '[dflsi]', r: 1 }, e.CNM] }, { b: /:=/ }, {
			cN: 'function',
			bK: 'func',
			e: /\s*\{/,
			eE: !0,
			c: [e.TM, {
				cN: 'params', b: /\(/, e: /\)/, k: t, i: /["']/
			}]
		}]
	};
}); hljs.registerLanguage('pgsql', function (E) {
	var T = E.C('--', '$'); var N = '[a-zA-Z_][a-zA-Z_0-9$]*'; var A = '\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$'; var R = '<<\\s*' + N + '\\s*>>'; var I = 'ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY '; var O = 'SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS '; var _ = 'ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN '; var S = 'BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 '; var L = S.trim().split(' ').map(function (E) { return E.split('|')[0]; }).join('|'); var C = 'CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC '; var D = 'FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 '; var M = 'SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED '; var U = 'ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAPLEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILYINET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST '; var P = U.trim().split(' ').map(function (E) { return E.split('|')[0]; }).join('|'); return {
		aliases: ['postgres', 'postgresql'],
		cI: !0,
		k: { keyword: I + _ + O, built_in: C + D + M },
		i: /:==|\W\s*\(\*|(^|\s)\$[a-z]|{{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
		c: [{ cN: 'keyword', v: [{ b: /\bTEXT\s*SEARCH\b/ }, { b: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/ }, { b: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/ }, { b: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/ }, { b: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/ }, { b: /\bNULLS\s+(FIRST|LAST)\b/ }, { b: /\bEVENT\s+TRIGGER\b/ }, { b: /\b(MAPPING|OR)\s+REPLACE\b/ }, { b: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/ }, { b: /\b(SHARE|EXCLUSIVE)\s+MODE\b/ }, { b: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/ }, { b: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/ }, { b: /\bPRESERVE\s+ROWS\b/ }, { b: /\bDISCARD\s+PLANS\b/ }, { b: /\bREFERENCING\s+(OLD|NEW)\b/ }, { b: /\bSKIP\s+LOCKED\b/ }, { b: /\bGROUPING\s+SETS\b/ }, { b: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/ }, { b: /\b(WITH|WITHOUT)\s+HOLD\b/ }, { b: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/ }, { b: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/ }, { b: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/ }, { b: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/ }, { b: /\bIS\s+(NOT\s+)?UNKNOWN\b/ }, { b: /\bSECURITY\s+LABEL\b/ }, { b: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/ }, { b: /\bWITH\s+(NO\s+)?DATA\b/ }, { b: /\b(FOREIGN|SET)\s+DATA\b/ }, { b: /\bSET\s+(CATALOG|CONSTRAINTS)\b/ }, { b: /\b(WITH|FOR)\s+ORDINALITY\b/ }, { b: /\bIS\s+(NOT\s+)?DOCUMENT\b/ }, { b: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/ }, { b: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/ }, { b: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/ }, { b: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/ }, { b: /\bAT\s+TIME\s+ZONE\b/ }, { b: /\bGRANTED\s+BY\b/ }, { b: /\bRETURN\s+(QUERY|NEXT)\b/ }, { b: /\b(ATTACH|DETACH)\s+PARTITION\b/ }, { b: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/ }, { b: /\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/ }, { b: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/ }] }, { b: /\b(FORMAT|FAMILY|VERSION)\s*\(/ }, { b: /\bINCLUDE\s*\(/, k: 'INCLUDE' }, { b: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/ }, { b: /\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/ }, { b: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/, r: 10 }, {
			b: /\bEXTRACT\s*\(/, e: /\bFROM\b/, rE: !0, k: { type: 'CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR' }
		}, { b: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/, k: { keyword: 'NAME' } }, { b: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/, k: { keyword: 'DOCUMENT CONTENT' } }, {
			bK: 'CACHE INCREMENT MAXVALUE MINVALUE', e: E.CNR, rE: !0, k: 'BY CACHE INCREMENT MAXVALUE MINVALUE'
		}, { cN: 'type', b: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/ }, { cN: 'type', b: /\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/ }, { b: /\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/, k: { keyword: 'RETURNS', type: 'LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER' } }, { b: '\\b(' + P + ')\\s*\\(' }, { b: '\\.(' + L + ')\\b' }, { b: '\\b(' + L + ')\\s+PATH\\b', k: { keyword: 'PATH', type: S.replace('PATH ', '') } }, { cN: 'type', b: '\\b(' + L + ')\\b' }, {
			cN: 'string', b: "'", e: "'", c: [{ b: "''" }]
		}, {
			cN: 'string', b: "(e|E|u&|U&)'", e: "'", c: [{ b: '\\\\.' }], r: 10
		}, { b: A, endSameAsBegin: !0, c: [{ sL: ['pgsql', 'perl', 'python', 'tcl', 'r', 'lua', 'java', 'php', 'ruby', 'bash', 'scheme', 'xml', 'json'], eW: !0 }] }, { b: '"', e: '"', c: [{ b: '""' }] }, E.CNM, E.CBCM, T, { cN: 'meta', v: [{ b: '%(ROW)?TYPE', r: 10 }, { b: '\\$\\d+' }, { b: '^#\\w', e: '$' }] }, { cN: 'symbol', b: R, r: 10 }]
	};
}); hljs.registerLanguage('php', function (e) {
	var c = { b: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*' }; var i = { cN: 'meta', b: /<\?(php)?|\?>/ }; var t = { cN: 'string', c: [e.BE, i], v: [{ b: 'b"', e: '"' }, { b: "b'", e: "'" }, e.inherit(e.ASM, { i: null }), e.inherit(e.QSM, { i: null })] }; var a = { v: [e.BNM, e.CNM] }; return {
		aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
		cI: !0,
		k: 'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
		c: [e.HCM, e.C('//', '$', { c: [i] }), e.C('/\\*', '\\*/', { c: [{ cN: 'doctag', b: '@[A-Za-z]+' }] }), e.C('__halt_compiler.+?;', !1, { eW: !0, k: '__halt_compiler', l: e.UIR }), {
			cN: 'string', b: /<<<['"]?\w+['"]?$/, e: /^\w+;?$/, c: [e.BE, { cN: 'subst', v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] }]
		}, i, { cN: 'keyword', b: /\$this\b/ }, c, { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ }, {
			cN: 'function',
			bK: 'function',
			e: /[;{]/,
			eE: !0,
			i: '\\$|\\[|%',
			c: [e.UTM, {
				cN: 'params', b: '\\(', e: '\\)', c: ['self', c, e.CBCM, t, a]
			}]
		}, {
			cN: 'class', bK: 'class interface', e: '{', eE: !0, i: /[:\(\$"]/, c: [{ bK: 'extends implements' }, e.UTM]
		}, {
			bK: 'namespace', e: ';', i: /[\.']/, c: [e.UTM]
		}, { bK: 'use', e: ';', c: [e.UTM] }, { b: '=>' }, t, a]
	};
}); hljs.registerLanguage('bash', function (e) {
	var t = { cN: 'variable', v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] }; var s = {
		cN: 'string',
		b: /"/,
		e: /"/,
		c: [e.BE, t, {
			cN: 'variable', b: /\$\(/, e: /\)/, c: [e.BE]
		}]
	}; var a = { cN: 'string', b: /'/, e: /'/ }; return {
		aliases: ['sh', 'zsh'],
		l: /\b-?[a-z\._]+\b/,
		k: {
			keyword: 'if then else elif fi for while in do done case esac function', literal: 'true false', built_in: 'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp', _: '-ne -eq -lt -gt -f -d -e -s -l -a'
		},
		c: [{ cN: 'meta', b: /^#![^\n]+sh\s*$/, r: 10 }, {
			cN: 'function', b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0
		}, e.HCM, s, a, t]
	};
}); hljs.registerLanguage('shell', function (s) { return { aliases: ['console'], c: [{ cN: 'meta', b: '^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]', starts: { e: '$', sL: 'bash' } }] }; }); hljs.registerLanguage('css', function (e) {
	var c = '[a-zA-Z-][a-zA-Z0-9_-]*'; var t = {
		b: /[A-Z\_\.\-]+\s*:/,
		rB: !0,
		e: ';',
		eW: !0,
		c: [{
			cN: 'attribute', b: /\S/, e: ':', eE: !0, starts: { eW: !0, eE: !0, c: [{ b: /[\w-]+\(/, rB: !0, c: [{ cN: 'built_in', b: /[\w-]+/ }, { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] }] }, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: 'number', b: '#[0-9A-Fa-f]+' }, { cN: 'meta', b: '!important' }] }
		}]
	}; return {
		cI: !0,
		i: /[=\/|'\$]/,
		c: [e.CBCM, { cN: 'selector-id', b: /#[A-Za-z0-9_-]+/ }, { cN: 'selector-class', b: /\.[A-Za-z0-9_-]+/ }, {
			cN: 'selector-attr', b: /\[/, e: /\]/, i: '$'
		}, { cN: 'selector-pseudo', b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ }, { b: '@(font-face|page)', l: '[a-z-]+', k: 'font-face page' }, {
			b: '@',
			e: '[{;]',
			i: /:/,
			c: [{ cN: 'keyword', b: /\w+/ }, {
				b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]
			}]
		}, { cN: 'selector-tag', b: c, r: 0 }, {
			b: '{', e: '}', i: /\S/, c: [e.CBCM, t]
		}]
	};
}); hljs.registerLanguage('ruby', function (e) {
	var b = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?'; var r = { keyword: 'and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor', literal: 'true false nil' }; var c = { cN: 'doctag', b: '@[A-Za-z]+' }; var a = { b: '#<', e: '>' }; var s = [e.C('#', '$', { c: [c] }), e.C('^\\=begin', '^\\=end', { c: [c], r: 10 }), e.C('^__END__', '\\n$')]; var n = {
		cN: 'subst', b: '#\\{', e: '}', k: r
	}; var t = { cN: 'string', c: [e.BE, n], v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /`/, e: /`/ }, { b: '%[qQwWx]?\\(', e: '\\)' }, { b: '%[qQwWx]?\\[', e: '\\]' }, { b: '%[qQwWx]?{', e: '}' }, { b: '%[qQwWx]?<', e: '>' }, { b: '%[qQwWx]?/', e: '/' }, { b: '%[qQwWx]?%', e: '%' }, { b: '%[qQwWx]?-', e: '-' }, { b: '%[qQwWx]?\\|', e: '\\|' }, { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ }, { b: /<<(-?)\w+$/, e: /^\s*\w+$/ }] }; var i = {
		cN: 'params', b: '\\(', e: '\\)', endsParent: !0, k: r
	}; var d = [t, a, {
		cN: 'class', bK: 'class module', e: '$|;', i: /=/, c: [e.inherit(e.TM, { b: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?' }), { b: '<\\s*', c: [{ b: '(' + e.IR + '::)?' + e.IR }] }].concat(s)
	}, {
		cN: 'function', bK: 'def', e: '$|;', c: [e.inherit(e.TM, { b: b }), i].concat(s)
	}, { b: e.IR + '::' }, { cN: 'symbol', b: e.UIR + '(\\!|\\?)?:', r: 0 }, {
		cN: 'symbol', b: ':(?!\\s)', c: [t, { b: b }], r: 0
	}, { cN: 'number', b: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b', r: 0 }, { b: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' }, {
		cN: 'params', b: /\|/, e: /\|/, k: r
	}, {
		b: '(' + e.RSR + '|unless)\\s*',
		k: 'unless',
		c: [a, {
			cN: 'regexp', c: [e.BE, n], i: /\n/, v: [{ b: '/', e: '/[a-z]*' }, { b: '%r{', e: '}[a-z]*' }, { b: '%r\\(', e: '\\)[a-z]*' }, { b: '%r!', e: '![a-z]*' }, { b: '%r\\[', e: '\\][a-z]*' }]
		}].concat(s),
		r: 0
	}].concat(s); n.c = d, i.c = d; var l = '[>?]>'; var o = '[\\w#]+\\(\\w+\\):\\d+:\\d+>'; var u = '(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>'; var w = [{ b: /^\s*=>/, starts: { e: '$', c: d } }, { cN: 'meta', b: '^(' + l + '|' + o + '|' + u + ')', starts: { e: '$', c: d } }]; return {
		aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'], k: r, i: /\/\*/, c: s.concat(w).concat(d)
	};
}); hljs.registerLanguage('yaml', function (e) {
	var b = 'true false yes no null'; var a = '^[ \\-]*'; var r = '[a-zA-Z_][\\w\\-]*'; var t = { cN: 'attr', v: [{ b: a + r + ':' }, { b: a + '"' + r + '":' }, { b: a + "'" + r + "':" }] }; var c = { cN: 'template-variable', v: [{ b: '{{', e: '}}' }, { b: '%{', e: '}' }] }; var l = {
		cN: 'string', r: 0, v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /\S+/ }], c: [e.BE, c]
	}; return {
		cI: !0,
		aliases: ['yml', 'YAML', 'yaml'],
		c: [t, { cN: 'meta', b: '^---s*$', r: 10 }, {
			cN: 'string', b: '[\\|>] *$', rE: !0, c: l.c, e: t.v[0].b
		}, {
			b: '<%[%=-]?', e: '[%-]?%>', sL: 'ruby', eB: !0, eE: !0, r: 0
		}, { cN: 'type', b: '!' + e.UIR }, { cN: 'type', b: '!!' + e.UIR }, { cN: 'meta', b: '&' + e.UIR + '$' }, { cN: 'meta', b: '\\*' + e.UIR + '$' }, { cN: 'bullet', b: '^ *-', r: 0 }, e.HCM, { bK: b, k: { literal: b } }, e.CNM, l]
	};
}); hljs.registerLanguage('lua', function (e) {
	var t = '\\[=*\\['; var a = '\\]=*\\]'; var r = { b: t, e: a, c: ['self'] }; var n = [e.C('--(?!' + t + ')', '$'), e.C('--' + t, a, { c: [r], r: 10 })]; return {
		l: e.UIR,
		k: { literal: 'true false nil', keyword: 'and break do else elseif end for goto if in local not or repeat return then until while', built_in: '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove' },
		c: n.concat([{
			cN: 'function',
			bK: 'function',
			e: '\\)',
			c: [e.inherit(e.TM, { b: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*' }), {
				cN: 'params', b: '\\(', eW: !0, c: n
			}].concat(n)
		}, e.CNM, e.ASM, e.QSM, {
			cN: 'string', b: t, e: a, c: [r], r: 5
		}])
	};
}); hljs.registerLanguage('nginx', function (e) {
	var r = { cN: 'variable', v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: '[\\$\\@]' + e.UIR }] }; var b = {
		eW: !0,
		l: '[a-z/_]+',
		k: { literal: 'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll' },
		r: 0,
		i: '=>',
		c: [e.HCM, { cN: 'string', c: [e.BE, r], v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }] }, {
			b: '([a-z]+):/', e: '\\s', eW: !0, eE: !0, c: [r]
		}, { cN: 'regexp', c: [e.BE, r], v: [{ b: '\\s\\^', e: '\\s|{|;', rE: !0 }, { b: '~\\*?\\s+', e: '\\s|{|;', rE: !0 }, { b: '\\*(\\.[a-z\\-]+)+' }, { b: '([a-z\\-]+\\.)+\\*' }] }, { cN: 'number', b: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b' }, { cN: 'number', b: '\\b\\d+[kKmMgGdshdwy]*\\b', r: 0 }, r]
	}; return {
		aliases: ['nginxconf'],
		c: [e.HCM, {
			b: e.UIR + '\\s+{', rB: !0, e: '{', c: [{ cN: 'section', b: e.UIR }], r: 0
		}, {
			b: e.UIR + '\\s', e: ';|{', rB: !0, c: [{ cN: 'attribute', b: e.UIR, starts: b }], r: 0
		}],
		i: '[^\\s\\}]'
	};
}); hljs.registerLanguage('makefile', function (e) {
	var i = { cN: 'variable', v: [{ b: '\\$\\(' + e.UIR + '\\)', c: [e.BE] }, { b: /\$[@%<?\^\+\*]/ }] }; var r = {
		cN: 'string', b: /"/, e: /"/, c: [e.BE, i]
	}; var a = {
		cN: 'variable', b: /\$\([\w-]+\s/, e: /\)/, k: { built_in: 'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value' }, c: [i]
	}; var n = {
		b: '^' + e.UIR + '\\s*[:+?]?=', i: '\\n', rB: !0, c: [{ b: '^' + e.UIR, e: '[:+?]?=', eE: !0 }]
	}; var t = {
		cN: 'meta', b: /^\.PHONY:/, e: /$/, k: { 'meta-keyword': '.PHONY' }, l: /[\.\w]+/
	}; var l = {
		cN: 'section', b: /^[^\s]+:/, e: /$/, c: [i]
	}; return {
		aliases: ['mk', 'mak'], k: 'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath', l: /[\w-]+/, c: [e.HCM, i, r, a, n, t, l]
	};
}); hljs.registerLanguage('cpp', function (t) {
	var e = { cN: 'keyword', b: '\\b[a-z\\d_]*_t\\b' }; var r = {
		cN: 'string',
		v: [{
			b: '(u8?|U|L)?"', e: '"', i: '\\n', c: [t.BE]
		}, { b: '(u8?|U|L)?R"\\(', e: '\\)"' }, { b: "'\\\\?.", e: "'", i: '.' }]
	}; var s = { cN: 'number', v: [{ b: "\\b(0b[01']+)" }, { b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" }, { b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }], r: 0 }; var i = {
		cN: 'meta',
		b: /#\s*[a-z]+\b/,
		e: /$/,
		k: { 'meta-keyword': 'if else elif endif define undef warning error line pragma ifdef ifndef include' },
		c: [{ b: /\\\n/, r: 0 }, t.inherit(r, { cN: 'meta-string' }), {
			cN: 'meta-string', b: /<[^\n>]*>/, e: /$/, i: '\\n'
		}, t.CLCM, t.CBCM]
	}; var a = t.IR + '\\s*\\('; var c = { keyword: 'int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not', built_in: 'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr', literal: 'true false nullptr NULL' }; var n = [e, t.CLCM, t.CBCM, s, r]; return {
		aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
		k: c,
		i: '</',
		c: n.concat([i, {
			b: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', e: '>', k: c, c: ['self', e]
		}, { b: t.IR + '::', k: c }, {
			v: [{ b: /=/, e: /;/ }, { b: /\(/, e: /\)/ }, { bK: 'new throw return else', e: /;/ }],
			k: c,
			c: n.concat([{
				b: /\(/, e: /\)/, k: c, c: n.concat(['self']), r: 0
			}]),
			r: 0
		}, {
			cN: 'function',
			b: '(' + t.IR + '[\\*&\\s]+)+' + a,
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: c,
			i: /[^\w\s\*&]/,
			c: [{
				b: a, rB: !0, c: [t.TM], r: 0
			}, {
				cN: 'params',
				b: /\(/,
				e: /\)/,
				k: c,
				r: 0,
				c: [t.CLCM, t.CBCM, r, s, e, {
					b: /\(/, e: /\)/, k: c, r: 0, c: ['self', t.CLCM, t.CBCM, r, s, e]
				}]
			}, t.CLCM, t.CBCM, i]
		}, {
			cN: 'class', bK: 'class struct', e: /[{;:]/, c: [{ b: /</, e: />/, c: ['self'] }, t.TM]
		}]),
		exports: { preprocessor: i, strings: r, k: c }
	};
}); hljs.registerLanguage('ini', function (e) {
	var b = { cN: 'string', c: [e.BE], v: [{ b: "'''", e: "'''", r: 10 }, { b: '"""', e: '"""', r: 10 }, { b: '"', e: '"' }, { b: "'", e: "'" }] }; return {
		aliases: ['toml'],
		cI: !0,
		i: /\S/,
		c: [e.C(';', '$'), e.HCM, { cN: 'section', b: /^\s*\[+/, e: /\]+/ }, {
			b: /^[a-z0-9\[\]_-]+\s*=\s*/,
			e: '$',
			rB: !0,
			c: [{ cN: 'attr', b: /[a-z0-9\[\]_-]+/ }, {
				b: /=/, eW: !0, r: 0, c: [{ cN: 'literal', b: /\bon|off|true|false|yes|no\b/ }, { cN: 'variable', v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] }, b, { cN: 'number', b: /([\+\-]+)?[\d]+_[\d_]+/ }, e.NM]
			}]
		}]
	};
}); hljs.registerLanguage('tex', function (c) {
	var e = {
		cN: 'tag',
		b: /\\/,
		r: 0,
		c: [{
			cN: 'name',
			v: [{ b: /[a-zA-Zа-яА-я]+[*]?/ }, { b: /[^a-zA-Zа-яА-я0-9]/ }],
			starts: {
				eW: !0,
				r: 0,
				c: [{ cN: 'string', v: [{ b: /\[/, e: /\]/ }, { b: /\{/, e: /\}/ }] }, {
					b: /\s*=\s*/, eW: !0, r: 0, c: [{ cN: 'number', b: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/ }]
				}]
			}
		}]
	}; return {
		c: [e, {
			cN: 'formula', c: [e], r: 0, v: [{ b: /\$\$/, e: /\$\$/ }, { b: /\$/, e: /\$/ }]
		}, c.C('%', '$', { r: 0 })]
	};
}); hljs.registerLanguage('protobuf', function (e) {
	return {
		k: { keyword: 'package import option optional required repeated group oneof', built_in: 'double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes', literal: 'true false' },
		c: [e.QSM, e.NM, e.CLCM, {
			cN: 'class', bK: 'message enum service', e: /\{/, i: /\n/, c: [e.inherit(e.TM, { starts: { eW: !0, eE: !0 } })]
		}, {
			cN: 'function', bK: 'rpc', e: /;/, eE: !0, k: 'rpc returns'
		}, { b: /^\s*[A-Z_]+/, e: /\s*=/, eE: !0 }]
	};
}); hljs.registerLanguage('plaintext', function (e) { return { disableAutodetect: !0 }; }); hljs.registerLanguage('python', function (e) {
	var r = { keyword: 'and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False', built_in: 'Ellipsis NotImplemented' }; var b = { cN: 'meta', b: /^(>>>|\.\.\.) / }; var c = {
		cN: 'subst', b: /\{/, e: /\}/, k: r, i: /#/
	}; var a = {
		cN: 'string',
		c: [e.BE],
		v: [{
			b: /(u|b)?r?'''/, e: /'''/, c: [e.BE, b], r: 10
		}, {
			b: /(u|b)?r?"""/, e: /"""/, c: [e.BE, b], r: 10
		}, { b: /(fr|rf|f)'''/, e: /'''/, c: [e.BE, b, c] }, { b: /(fr|rf|f)"""/, e: /"""/, c: [e.BE, b, c] }, { b: /(u|r|ur)'/, e: /'/, r: 10 }, { b: /(u|r|ur)"/, e: /"/, r: 10 }, { b: /(b|br)'/, e: /'/ }, { b: /(b|br)"/, e: /"/ }, { b: /(fr|rf|f)'/, e: /'/, c: [e.BE, c] }, { b: /(fr|rf|f)"/, e: /"/, c: [e.BE, c] }, e.ASM, e.QSM]
	}; var s = { cN: 'number', r: 0, v: [{ b: e.BNR + '[lLjJ]?' }, { b: '\\b(0o[0-7]+)[lLjJ]?' }, { b: e.CNR + '[lLjJ]?' }] }; var i = {
		cN: 'params', b: /\(/, e: /\)/, c: ['self', b, s, a]
	}; return c.c = [a, s, b], {
		aliases: ['py', 'gyp'],
		k: r,
		i: /(<\/|->|\?)|=>/,
		c: [b, s, a, e.HCM, {
			v: [{ cN: 'function', bK: 'def' }, { cN: 'class', bK: 'class' }], e: /:/, i: /[${=;\n,]/, c: [e.UTM, i, { b: /->/, eW: !0, k: 'None' }]
		}, { cN: 'meta', b: /^[\t ]*@/, e: /$/ }, { b: /\b(print|exec)\(/ }]
	};
}); hljs.registerLanguage('javascript', function (e) {
	var r = '[A-Za-z$_][0-9A-Za-z$_]*'; var t = { keyword: 'in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as', literal: 'true false null undefined NaN Infinity', built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise' }; var a = { cN: 'number', v: [{ b: '\\b(0[bB][01]+)' }, { b: '\\b(0[oO][0-7]+)' }, { b: e.CNR }], r: 0 }; var n = {
		cN: 'subst', b: '\\$\\{', e: '\\}', k: t, c: []
	}; var c = {
		cN: 'string', b: '`', e: '`', c: [e.BE, n]
	}; n.c = [e.ASM, e.QSM, c, a, e.RM]; var s = n.c.concat([e.CBCM, e.CLCM]); return {
		aliases: ['js', 'jsx'],
		k: t,
		c: [{ cN: 'meta', r: 10, b: /^\s*['"]use (strict|asm)['"]/ }, { cN: 'meta', b: /^#!/, e: /$/ }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, a, {
			b: /[{,]\s*/,
			r: 0,
			c: [{
				b: r + '\\s*:', rB: !0, r: 0, c: [{ cN: 'attr', b: r, r: 0 }]
			}]
		}, {
			b: '(' + e.RSR + '|\\b(case|return|throw)\\b)\\s*',
			k: 'return throw case',
			c: [e.CLCM, e.CBCM, e.RM, {
				cN: 'function',
				b: '(\\(.*?\\)|' + r + ')\\s*=>',
				rB: !0,
				e: '\\s*=>',
				c: [{
					cN: 'params',
					v: [{ b: r }, { b: /\(\s*\)/ }, {
						b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: s
					}]
				}]
			}, {
				b: /</,
				e: /(\/\w+|\w+\/)>/,
				sL: 'xml',
				c: [{ b: /<\w+\s*\/>/, skip: !0 }, {
					b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: [{ b: /<\w+\s*\/>/, skip: !0 }, 'self']
				}]
			}],
			r: 0
		}, {
			cN: 'function',
			bK: 'function',
			e: /\{/,
			eE: !0,
			c: [e.inherit(e.TM, { b: r }), {
				cN: 'params', b: /\(/, e: /\)/, eB: !0, eE: !0, c: s
			}],
			i: /\[|%/
		}, { b: /\$[(.]/ }, e.METHOD_GUARD, {
			cN: 'class', bK: 'class', e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [{ bK: 'extends' }, e.UTM]
		}, { bK: 'constructor', e: /\{/, eE: !0 }],
		i: /#(?!!)/
	};
}); hljs.registerLanguage('dos', function (e) {
	var r = e.C(/^\s*@?rem\b/, /$/, { r: 10 }); var t = { cN: 'symbol', b: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)', r: 0 }; return {
		aliases: ['bat', 'cmd'],
		cI: !0,
		i: /\/\*/,
		k: { keyword: 'if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq', built_in: 'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del' },
		c: [{ cN: 'variable', b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/ }, {
			cN: 'function', b: t.b, e: 'goto:eof', c: [e.inherit(e.TM, { b: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*' }), r]
		}, { cN: 'number', b: '\\b\\d+', r: 0 }, r]
	};
}); hljs.registerLanguage('dockerfile', function (e) {
	return {
		aliases: ['docker'], cI: !0, k: 'from maintainer expose env arg user onbuild stopsignal', c: [e.HCM, e.ASM, e.QSM, e.NM, { bK: 'run cmd entrypoint volume add copy workdir label healthcheck shell', starts: { e: /[^\\]\n/, sL: 'bash' } }], i: '</'
	};
}); hljs.registerLanguage('r', function (e) {
	var r = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*'; return {
		c: [e.HCM, {
			b: r, l: r, k: { keyword: 'function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...', literal: 'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10' }, r: 0
		}, { cN: 'number', b: '0[xX][0-9a-fA-F]+[Li]?\\b', r: 0 }, { cN: 'number', b: '\\d+(?:[eE][+\\-]?\\d*)?L\\b', r: 0 }, { cN: 'number', b: '\\d+\\.(?!\\d)(?:i\\b)?', r: 0 }, { cN: 'number', b: '\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b', r: 0 }, { cN: 'number', b: '\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b', r: 0 }, { b: '`', e: '`', r: 0 }, { cN: 'string', c: [e.BE], v: [{ b: '"', e: '"' }, { b: "'", e: "'" }] }]
	};
}); hljs.registerLanguage('accesslog', function (T) {
	return {
		c: [{ cN: 'number', b: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b' }, { cN: 'number', b: '\\b\\d+\\b', r: 0 }, {
			cN: 'string', b: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)', e: '"', k: 'GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE', i: '\\n', r: 10
		}, {
			cN: 'string', b: /\[/, e: /\]/, i: '\\n'
		}, {
			cN: 'string', b: '"', e: '"', i: '\\n'
		}]
	};
}); hljs.registerLanguage('dns', function (d) { return { aliases: ['bind', 'zone'], k: { keyword: 'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT' }, c: [d.C(';', '$', { r: 0 }), { cN: 'meta', b: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/ }, { cN: 'number', b: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b' }, { cN: 'number', b: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b' }, d.inherit(d.NM, { b: /\b\d+[dhwm]?/ })] }; }); hljs.registerLanguage('scss', function (e) {
	var t = '[a-zA-Z-][a-zA-Z0-9_-]*'; var i = { cN: 'variable', b: '(\\$' + t + ')\\b' }; var r = { cN: 'number', b: '#[0-9A-Fa-f]+' }; ({
		cN: 'attribute', b: '[A-Z\\_\\.\\-]+', e: ':', eE: !0, i: '[^\\s]', starts: { eW: !0, eE: !0, c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: 'meta', b: '!important' }] }
	}); return {
		cI: !0,
		i: "[=/|']",
		c: [e.CLCM, e.CBCM, { cN: 'selector-id', b: '\\#[A-Za-z0-9_-]+', r: 0 }, { cN: 'selector-class', b: '\\.[A-Za-z0-9_-]+', r: 0 }, {
			cN: 'selector-attr', b: '\\[', e: '\\]', i: '$'
		}, { cN: 'selector-tag', b: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b', r: 0 }, { b: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)' }, { b: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)' }, i, { cN: 'attribute', b: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b', i: '[^\\s]' }, { b: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b' }, { b: ':', e: ';', c: [i, r, e.CSSNM, e.QSM, e.ASM, { cN: 'meta', b: '!important' }] }, {
			b: '@', e: '[{;]', k: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn', c: [i, e.QSM, e.ASM, r, e.CSSNM, { b: '\\s[A-Za-z0-9_.-]+', r: 0 }]
		}]
	};
});
