(function(config) {
	var ba = navigator.userAgent.toLowerCase(),
		ca = window,
		fa = document,
		ga = fa.documentElement;

	function ma(a) {
		return -1 !== ba.indexOf(a)
	}
	var na = /([a-z0-9]*\d+[a-z0-9]*)/;

	function pa() {
		var a = qa;
		if (!a) return null;
		var a = a.toLowerCase(),
			b = null;
		if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
		a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
		if (0 <= a.indexOf("intel")) {
			b = ["Intel"];
			0 <= a.indexOf("mobile") && b.push("Mobile");
			(0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
			if (0 <= a.indexOf("haswell")) b.push("Haswell");
			else if (0 <= a.indexOf("ivy")) b.push("HD 4000");
			else if (0 <= a.indexOf("sandy")) b.push("HD 3000");
			else if (0 <= a.indexOf("ironlake")) b.push("HD");
			else {
				0 <= a.indexOf("hd") && b.push("HD");
				var c = a.match(na);
				c && c[1] && b.push(c[1].toUpperCase())
			}
			return b = b.join(" ")
		}
		return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf(
				"nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf(
				"quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push(
					"ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ?
				b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ?
				b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(na)) && c[1] && b.push(c[1]
					.toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf(
					"ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <=
			a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a
				.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a
				.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a
				.indexOf("hd") &&
				b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(na)) && c[1] && b.push(c[1].toUpperCase()
					.replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
	}
	var ra =
		"microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965"
		.split(";"),
		sa = "ActiveXObject" in ca,
		va = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || sa && "matchMedia" in ca && ca.matchMedia(
			"(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
		wa = ma("windows nt"),
		xa = -1 !== ba.search(/windows nt [1-5]\./),
		ya = -1 !== ba.search(/windows nt 5\.[12]/),
		za = xa && !ya;
	ma("windows nt 10");
	var Da = ma("windows phone"),
		Ea = ma("macintosh"),
		Fa = ma("Mb2345Browser"),
		Ga = ma("ipad;") || ma("ipad "),
		Ja = Ga && va,
		Ka = ma("ipod touch;"),
		La = ma("iphone;") || ma("iphone "),
		Ma = La || Ga || Ka,
		Na = Ma && -1 !== ba.search(/ os [456]_/);
	Ma && ba.search(/ os [4-8]_/);
	Ma && ba.search(/ os [78]_/);
	Ma && ma("os 8_");
	var Qa = Ma && ma("os 10_"),
		Ra = ma("android"),
		Sa = 0;
	Ra && (Sa = parseInt(ba.split("android ")[1]) || 0);
	var Ta = Ra && 4 > Sa;
	Ra && 5 <= Sa || ba.search(/android 4.4/);
	var Ua = Ra ? "android" : Ma ? "ios" : wa ? "windows" : Ea ? "mac" : "other",
		Va = sa && !ca.XMLHttpRequest,
		Wa = sa && !fa.querySelector,
		Xa = sa && !fa.addEventListener,
		Ya = sa && ma("msie 9"),
		Za = sa && ma("msie 10"),
		$a = sa && ma("rv:11"),
		ab = Xa || Ya,
		bb = ma("edge"),
		cb = ma("qtweb"),
		db = ma("ucbrowser"),
		eb = ma("alipay") || Ra && db,
		fb = ma("miuibrowser"),
		gb = ma("micromessenger"),
		hb = ma("mqqbrowser"),
		ib = ma("baidubrowser"),
		chrome = (ma("chrome") || ma("crios")) && !gb && !ib && !hb && !bb && !fb,
		jb = chrome && ma("chromium"),
		kb = chrome && !jb && (30 < parseInt(ba.split("chrome/")[1]) ||
			30 < parseInt(ba.split("crios/")[1])),
		lb = ma("firefox"),
		mb = lb && 27 < parseInt(ba.split("firefox/")[1]),
		nb = (Ea || Ma) && ma("safari") && ma("version/"),
		ob = Ea && nb && 7 < parseInt(ba.split("version/")[1]),
		pb = Ma && ma("aliapp"),
		qb = Ma && (!hb && !db && !gb && !chrome && !lb && !nb || pb && !db),
		rb = Ra || Ma || Da || ma("mobile"),
		sb = "ontouchstart" in fa,
		tb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
		ub = ca.navigator && !!ca.navigator.maxTouchPoints,
		vb = !sb && (ub || tb),
		wb = sb || vb,
		xb = function() {
			if (!rb) return ca.devicePixelRatio ||
				1;
			var a = document.getElementsByTagName("meta");
			if (window.parent && window.parent !== window) try {
				if (window.parent.location.origin === window.location.origin) a = window.parent.document
					.getElementsByTagName("meta");
				else return 1
			} catch (b) {
				return 1
			}
			for (var c = a.length - 1; 0 <= c; c -= 1)
				if ("viewport" === a[c].name) {
					var c = a[c].content,
						d; - 1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
					a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
					c = -1 !== c.indexOf("maximum-scale") ?
						parseFloat(c.split("maximum-scale=")[1]) : Infinity;
					if (d) {
						if (c >= a) return d > c ? c : d < a ? a : d
					} else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
					console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
					return null
				}
		}(),
		yb = va && (!rb || !!xb && 1 <= xb),
		zb = sa && "transition" in ga.style,
		Ab = !!fa.createElementNS && !!fa.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
		Bb = fa.createElement("canvas"),
		Cb = !(!Bb || !Bb.getContext),
		Db = window.URL || window.webkitURL,
		Eb = !0 !== window.disableWorker && !sa && !bb && !(db &&
			Ra) && window.Worker && Db && Db.createObjectURL && window.Blob,
		Fb = "",
		qa = "",
		Gb = 0,
		Jb = window.forceWebGL ? {
			alpha: !0,
			antialias: !0,
			depth: !0
		} : {
			alpha: !0,
			antialias: !0,
			depth: !0,
			failIfMajorPerformanceCaveat: !0,
			preserveDrawingBuffer: !0,
			stencil: !0
		},
		Kb = function() {
			if (!window.forceWebGL && (!Cb || !Eb || qb && pb && !db)) return !1;
			for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
				try {
					b = Bb.getContext(a[c], Jb)
				} catch (d) {}
				if (b) {
					if (b.drawingBufferWidth !== Bb.width || b.drawingBufferHeight !== Bb.height) break;
					if (window.forceWebGL) return Fb =
						a[c], Gb = Infinity, !0;
					if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break;
					Gb = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
					var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
					if (!e) break;
					Gb = Math.min(Gb, e[0], e[1]);
					nb && "mac" === Ua && (Gb = Math.min(Gb, 4096));
					e = Math.max(screen.width, screen.height);
					yb && (e *= Math.min(2, window.devicePixelRatio || 1));
					if (e > Gb) break;
					if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(
							35633, 36338).precision) break;
					qa = b.getExtension("WEBGL_debug_renderer_info") ?
						b.getParameter(37446) : null;
					if ((b = pa()) && -1 !== ra.indexOf(b)) break;
					Fb = a[c];
					return !0
				}
			}
			return !1
		}(),
		Lb = Kb && (kb || mb || ob) && ("mac" === Ua || "windows" === Ua) && !rb,
		Mb = !window.Uint8Array || !Cb || cb || Da || rb && lb || Ya || Na || Ja || Ka || Ta || ma("gt-n710") || za,
		Nb = !Mb && !Lb,
		Ob = Lb ? "vw" : Mb ? "d" : Nb ? "dv" : "v",
		Pb = ma("webkit"),
		Qb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix,
		Rb = "MozPerspective" in ga.style,
		Sb = "OTransition" in ga.style,
		Tb = zb || Qb || Rb || Sb,
		Ub = void 0 !== config[8] ? config[8] : !0,
		Vb = void 0 !== config[9] ? config[9] : !0,
		Wb =
		void 0 !== config[10] ? config[10] : !0,
		Xb = void 0 !== config[11] ? config[11] : !0,
		Yb = void 0 !== config[12] ? config[12] : null,
		Zb = !Ab && rb && Cb,
		$b = !0;
	try {
		if ("undefined" === typeof ca.localStorage) $b = !1;
		else {
			var ac = (new Date).getTime() + "";
			ca.localStorage.setItem("_test", ac);
			ca.localStorage.getItem("_test") !== ac && ($b = !1);
			ca.localStorage.removeItem("_test")
		}
	} catch (bc) {
		$b = !1
	}
	var cc = parseInt(ba.split("chrome/")[1]),
		dc = Ub && Cb;
	config.l = {
		Sra: Ga,
		Tra: La,
		size: La ? 100 : Ra ? 200 : 500,
		nz: Ea,
		Zza: wa,
		ED: Ma,
		eFa: Qa,
		Xl: Ra,
		bma: Ta,
		K3: eb,
		Dz: Ua,
		VH: ib,
		dwa: hb,
		AE: nb,
		B$: gb,
		Ds: sa,
		zi: Va,
		rv: Wa,
		i5: Ya,
		h5: Za,
		Ue: Xa,
		k5: ab,
		Wra: $a,
		rpa: bb,
		Zra: sa && !$a,
		Wta: Fa,
		Fv: $b,
		Ni: dc && $b && Xb && !rb && chrome,
		lf: Yb,
		geolocation: rb || sa && !Xa || bb,
		nza: db,
		pL: db && !chrome,
		chrome: chrome,
		i3: !0,
		aR: lb,
		ba: rb,
		iua: rb && Pb,
		F6: rb && Qb,
		hua: rb && ca.opera,
		Jc: va,
		xL: xb,
		ja: yb,
		Tf: wb,
		H6: tb,
		ET: ub,
		O7: vb,
		rna: chrome && 57 <= cc,
		sna: !rb && chrome && 64 <= cc,
		A$: Pb,
		Xra: zb,
		BL: Qb,
		iqa: Rb,
		ava: Sb,
		RH: Tb,
		En: Ab,
		il: Cb,
		FS: Eb,
		jA: Wb,
		Mf: Lb,
		x$: Fb,
		y$: Jb,
		SR: qa,
		Uta: Gb,
		zAa: !1,
		Wp: Ub && !Mb,
		S1: Ub ? Ob : "d",
		o2: Ub ? Kb : !1,
		aL: dc,
		pp: Ub && Kb,
		qFa: Ub && (!Mb || Kb),
		vq: Vb && !!ca.WebSocket && !ib,
		bGa: Zb,
		jva: Cb || Zb ? "c" : "d"
	};
	var ec = config;
	config = void 0;
	var fc = {
		overlay: ["style"],
		"AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
		"AMap.IndoorMap3D": ["Map3D"],
		"AMap.MarkerList": ["AMap.TplUtils"],
		Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer", "rbush"],
		"AMap.Heatmap": ["AMap.CustomLayer"],
		"AMap.DistrictLayer": ["MVT"],
		vectorForeign: ["gridmap", "MVT"],
		"AMap.GltfLoader": ["AMap.CustomLayer", "Map3D"],
		"AMap.LabelsLayer": ["rbush", "promise"]
	};
	window.AMap ? (window.AMap.version = "1622082392611", window.AMap.tL = {
		uM: function(a) {
			a(ec)
		}
	}) : window.AMap = {
		version: "1622082392611",
		tL: {
			uM: function(a) {
				a(ec)
			}
		}
	};
	ec.Dk = "1622082392611";
	ec.Qu = fc;
	for (var gc = document.head || document.getElementsByTagName("head")[0], hc =
			'.vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layers canvas{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:77px;height:16px;bottom:0;padding-bottom:3px;font-size:11px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:1px;left:1px;z-index:160;height:20px}.amap-logo img{width:73px!important;height:20px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 1px 2px rgba(0,0,0,0.1);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left}.amap-menu-outer:hover{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-contentContainer:hover .amap-info-outer{box-shadow:0 1px 2px rgba(0,0,0,0.3)}.amap-info-content{position:relative;background:#fff;padding:10px 18px 10px 10px;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp-old{overflow:hidden;position:absolute;background-image:url(http://webapi.amap.com/images/arrows.png)}.bottom-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:center 12px;top:100%;margin-top:-9px;left:50%;margin-left:-10px}.bottom-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -46px;top:100%;margin-top:-9px}.bottom-right .amap-info-sharp-old{height:12px;width:13px;top:-1px;background-position:-56px -46px;left:100%;margin-left:-13px;top:100%;margin-top:-9px}.middle-left .amap-info-sharp-old{height:20px;width:12px;background-position:left;top:50%;margin-top:-10px;margin-left:-11px}.center .amap-info-sharp-old{display:none}.middle-right .amap-info-sharp-old{height:20px;margin-right:0;width:12px;background-position:right;left:100%;margin-left:-9px;top:50%;margin-top:-10px}.top-center .amap-info-sharp-old{height:12px;margin:0 auto;width:20px;background-position:top;top:0;margin-top:-3px;left:50%;margin-left:-10px}.top-left .amap-info-sharp-old{height:12px;width:13px;background-position:-16px -3px;top:0;margin-top:-3px}.top-right .amap-info-sharp-old{height:12px;width:13px;background-position:-56px -3px;left:100%;margin-left:-13px;top:0;margin-top:-3px}.amap-info-sharp{position:absolute}.bottom-center .amap-info-sharp{bottom:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}.bottom-center .amap-info-sharp:after{position:absolute;content:"";margin-left:-8px;margin-top:-7px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid rgba(0,0,0,0.3);filter:blur(2px);z-index:-1}.amap-info-contentContainer:hover.bottom-center .amap-info-sharp:after{border-top:8px solid rgba(0,0,0,0.5)}.bottom-left .amap-info-sharp{border-color:transparent #fff;border-width:0 0 10px 10px;border-style:solid}.bottom-left .amap-info-sharp:after{position:absolute;content:"";margin-left:-10px;border-color:transparent rgba(0,0,0,0.3);border-width:0 0 10px 10px;border-style:solid;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-left .amap-info-sharp:after{border-color:transparent rgba(0,0,0,0.5)}.bottom-left .amap-info-content{border-radius:2px 2px 2px 0}.bottom-right .amap-info-sharp{right:0;border-top:10px solid #fff;border-left:10px solid transparent}.bottom-right .amap-info-sharp:after{position:absolute;margin-top:-9px;margin-left:-10px;content:"";border-top:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.bottom-right .amap-info-sharp:after{border-top:10px solid rgba(0,0,0,0.5)}.bottom-right .amap-info-content{border-radius:2px 2px 0 2px}.top-center .amap-info-sharp{top:0;left:50%;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff}.top-center .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid rgba(0,0,0,0.3);filter:blur(1px);z-index:-1}.top-left .amap-info-sharp{left:0;top:0;border-bottom:10px solid #fff;border-right:10px solid transparent}.top-left .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:0;border-bottom:10px solid rgba(0,0,0,0.3);border-right:10px solid transparent;filter:blur(1px);z-index:-1}.top-right .amap-info-sharp{right:0;top:0;border-bottom:10px solid #fff;border-left:10px solid transparent}.top-right .amap-info-sharp:after{position:absolute;content:"";margin-top:0;margin-left:-10px;border-bottom:10px solid rgba(0,0,0,0.3);border-left:10px solid transparent;filter:blur(1px);z-index:-1}.middle-right .amap-info-sharp{right:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-left:8px solid #fff;border-bottom:8px solid transparent}.middle-right .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:-8px;border-top:8px solid transparent;border-left:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-right .amap-info-sharp:after{border-left:8px solid rgba(0,0,0,0.5)}.middle-left .amap-info-sharp{left:0;top:50%;margin-top:-8px;border-top:8px solid transparent;border-right:8px solid #fff;border-bottom:8px solid transparent}.middle-left .amap-info-sharp:after{position:absolute;content:"";margin-top:-8px;margin-left:0;border-top:8px solid transparent;border-right:8px solid rgba(0,0,0,0.3);border-bottom:8px solid transparent;filter:blur(1px);z-index:-1}.amap-info-contentContainer:hover.middle-left .amap-info-sharp:after{border-right:8px solid rgba(0,0,0,0.5)}.amap-info-contentContainer.top-left,.amap-info-contentContainer.top-center,.amap-info-contentContainer.top-right{padding-top:8px}.amap-info-contentContainer.bottom-left,.amap-info-contentContainer.bottom-center,.amap-info-contentContainer.bottom-right{padding-bottom:8px}.amap-info-contentContainer.middle-right{padding-right:8px}.amap-info-contentContainer.middle-left{padding-left:8px}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}.amap-info-content-ie8{border:1px solid #9c9c9c}'
			.replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" +
				ec[2].split(",")[0] + "/"), ic = null, jc = 0, kc = gc.childNodes.length; jc < kc; jc++)
		if (1 === gc.childNodes[jc].nodeType) {
			ic = gc.childNodes[jc];
			break
		} if (hc)
		if (gc) {
			var lc = document.createElement("style");
			lc.setAttribute("type", "text/css");
			lc.setAttribute("class", "AMap.style");
			lc.styleSheet ? lc.styleSheet.cssText = hc : lc.innerHTML = hc;
			ic ? gc.insertBefore(lc, ic) : gc.appendChild(lc)
		} else document.write("<style type='text/css'>" + hc + "</style>");
	var g = g || {
			Da: {
				Je: 0,
				jr: [],
				Fj: {}
			}
		},
		z = {
			o: {},
			control: {},
			B: {}
		};
	g.NDa = function(a) {
		var b = Function;
		return function() {
			return (new b("return " + a))()
		}
	}();
	g.CLASS_NAME = "AMap";
	g.c = g.BuryPoint = {};
	g.c.add = g.BuryPoint.add = function(a, b, c) {
		a.v5 || a.C || !(a = a.CLASS_NAME) || (a = a.replace("AMap.", ""), g.zA.kp(a, b, c))
	};
	var mc = {
		lang: 1,
		baseRender: 1,
		overlayRender: 1,
		viewMode: 1
	};
	g.c.ya = g.BuryPoint.addOptions = function(a, b) {
		if (!a.cva)
			if (b && (b.innerLayer || b.innerOverlay)) a.v5 = !0;
			else {
				a.cva = !0;
				var c = a.CLASS_NAME;
				if (c) {
					c = c.replace("AMap.", "");
					g.zA.kp(c);
					b = b || {};
					for (var d in b) b.hasOwnProperty(d) && ("Map" === c && d in mc ? g.zA.kp(c, d, b[d]) : g.zA
						.kp(c, d))
				}
			}
	};
	g.da = function() {};
	g.da.extend = g.da.extend = function(a) {
		function b() {}

		function c() {
			var a = this.initialize || this.A;
			a && a.apply(this, arguments);
			if (!d && this.Mi) {
				a = document.createElement("style");
				a.setAttribute("type", "text/css");
				this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
				this.Mi = this.Mi.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + g.r.Gb + "/");
				a.styleSheet ? a.styleSheet.cssText = this.Mi : a.innerHTML = this.Mi;
				for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, f = b
						.childNodes.length; e < f; e++)
					if (1 ===
						b.childNodes[e].nodeType) {
						c = b.childNodes[e];
						break
					} c ? b.insertBefore(a, c) : b.appendChild(a)
			}
			d = !0
		}
		var d = !1;
		b.prototype = this.prototype;
		var e = new b;
		e.constructor = c;
		c.prototype = e;
		c.prototype.Ch = c.prototype["super"] = function(a) {
			return a.callee.ma.apply(this, a)
		};
		for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
		a.s9 && (g.extend(c, a.s9), a.s9 = null);
		a.ka && (g.extend.apply(null, [e].concat(a.ka)), a.ka = null);
		a.w && e.w && (a.w = g.extend({}, e.w, a.w));
		var h = e.constructor.vsa,
			k = {};
		if (void 0 !== h)
			for (f in h) h.hasOwnProperty(f) &&
				(k[h[f]] = f);
		for (f in a)
			if (Object.prototype.hasOwnProperty.call(a, f)) {
				var l = f,
					m = f;
				h && k[f] && (m = k[f]);
				"function" === typeof a[l] && "function" === typeof e[m] && (a[l].ma = e[m])
			} g.extend(e, a);
		a.toString && (e.toString = a.toString);
		c.bd = this.prototype;
		return c
	};
	g.da.Hb = g.da.include = function(a) {
		g.extend(this.prototype, a)
	};
	g.extend = function(a) {
		var b = Array.prototype.slice.call(arguments, 1),
			c, d, e, f;
		d = 0;
		for (e = b.length; d < e; d += 1)
			if (f = b[d] || {}, Object.assign) Object.assign(a, f);
			else
				for (c in f) Object.prototype.hasOwnProperty.call(f, c) && (a[c] = f[c]);
		return a
	};
	g.da.Xb = function(a) {
		for (var b in a)
			if (a.hasOwnProperty(b)) {
				var c = a[b];
				if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]);
				else
					for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this
						.prototype[b])
			}
	};
	g.zA = {
		Fj: {},
		getKey: function(a, b) {
			a = a || "";
			return void 0 !== b && a ? a + "@" + b : a
		},
		kp: function(a, b, c) {
			this.Fj[a] || (this.Fj[a] = {});
			b = this.getKey(b, c);
			void 0 == this.Fj[a][b] && (this.Fj[a][b] = 0)
		},
		send: function() {
			var a = [],
				b;
			for (b in this.Fj)
				if (this.Fj.hasOwnProperty(b)) {
					var c = this.Fj[b],
						d = [],
						e;
					for (e in c) c.hasOwnProperty(e) && 0 == c[e] && (d.push(e), c[e] = 1);
					d.length && a.push(b + "~" + d.join(","))
				} a.length && (a = ["type=nfl", "k=" + g.r.key, "m=" + (g.l.ba ? 1 : 0), "pf=" + g.l.Dz,
					"v=" + g.r.ln, "branch=JSAPI", "log=" + a.join("!")
				], a = g.r.tc + "://webapi.amap.com/count?" +
				a.join("&"), new g.jb.zb(a))
		}
	};
	setInterval(function() {
		g.zA.send()
	}, 1E4);
	g.va = {
		h: function(a, b, c, d, e) {
			if (this.ve(a, b, c || this)) return this;
			var f = this.mf = this.mf || {};
			f[a] = f[a] || [];
			e ? f[a].unshift({
				xb: b,
				bf: c || this,
				Cj: d
			}) : f[a].push({
				xb: b,
				bf: c || this,
				Cj: d
			});
			return this
		},
		ve: function(a, b, c) {
			var d = this.mf;
			if (b && c) {
				if (d && a in d && d[a])
					for (var e = 0; e < d[a].length; e += 1)
						if (d[a][e].xb === b && d[a][e].bf === c) return !0;
				return !1
			}
			return d && a in d && d[a] && 0 < d[a].length
		},
		G: function(a, b, c) {
			if (!this.ve(a)) return this;
			var d = this.mf;
			if (d && d[a])
				for (var e = 0; e < d[a].length; e += 1)
					if (!(d[a][e].xb !== b && "mv" !==
							b || c && d[a][e].bf !== c)) {
						d[a].splice(e, 1);
						d[a].length || (d[a] = null);
						break
					} return this
		},
		bK: function(a, b) {
			if (!this.ve(a)) return this;
			var c = this.mf;
			if (c && c[a])
				for (var d = 0; d < c[a].length; d += 1)
					if (!b || c[a][d].bf === b) {
						c[a].splice(d, 1);
						c[a].length || (c[a] = null);
						break
					} return this
		},
		q: function(a, b) {
			if (!this.ve(a)) return this;
			var c = {
				type: a
			};
			void 0 !== b && (b instanceof Array ? (c = b.slice(0), c.type = a) : "string" === typeof b ||
				"number" === typeof b || "boolean" === typeof b ? c.value = b : g.a.DJ(b) ? c.value =
				b : c = g.extend(c, b));
			for (var d = [].concat(this.mf[a]), e = 0; e < d.length; e += 1) d[e].xb && (d[e].xb.call(d[e]
				.bf || this, c), d[e] && d[e].Cj && this.mf[a] && this.mf[a].splice(e, 1));
			return this
		},
		ti: function(a) {
			a ? this.mf && this.mf[a] && (this.mf[a] = null) : this.mf = null;
			return this
		}
	};
	g.va.on || (g.va.on = g.va.h);
	g.va.off || (g.va.off = g.va.G);
	g.va.emit || (g.va.emit = g.va.q);
	g.Ze = {
		set: function(a, b, c) {
			var d = this.Hl;
			if (d && d[a]) {
				var d = d[a],
					e = "set" + this.H4(a);
				if (d[e]) {
					var f = !1;
					!0 == d.C ? f = !0 : d.C = !0;
					d[e](b, c);
					f || (d.C = !1);
					c || this.AK(a, b)
				} else d.set(a, b, c)
			} else(this.Ce = this.Ce || {})[a] = b, c || this.AK(a, b)
		},
		H4: function() {
			var a = {};
			return function(b) {
				a[b] || (a[b] = b.charAt(0).toUpperCase() + b.substr(1));
				return a[b]
			}
		}(),
		get: function(a, b, c) {
			var d, e = this.Hl;
			d = "get" + this.H4(a);
			if (e && e[a]) return c = e[a], c[d] ? (a = !1, !0 == c.C ? a = !0 : c.C = !0, b = c[d](b), a ||
				(c.C = !1), b) : c.get(a, b);
			if (!c && this[d]) return a =
			 !1, !0 == this.C ? a = !0 : this.C = !0, b = this[d](b), a || (
				this.C = !1), b;
			if (this.Ce && this.Ce.hasOwnProperty(a)) return this.Ce[a]
		},
		X: function(a, b, c) {
			this.Hl || (this.Hl = {});
			this.Hl[a] !== b && (b.h(a, function(b) {
				this.AK(a, b)
			}, this), this.Hl[a] = b, c || this.AK(a))
		},
		af: function(a, b, c) {
			for (var d = 0; d < a.length; d += 1) this.X(a[d], b, !c)
		},
		xl: function(a) {
			this.Hl && this.Hl[a] && (this.Hl[a].G(a, "mv", this), this.Hl[a] = void 0)
		},
		yl: function() {
			if (this.Hl)
				for (var a in this.Hl) this.Hl.hasOwnProperty(a) && this.xl(a)
		},
		AK: function(a, b) {
			var c = a + "Changed";
			if (this[c]) this[c](b);
			this.q(a, b)
		},
		uFa: function(a, b, c) {
			var d = new(g.da.extend({
				ka: [g.va, g.Ze]
			}));
			d.aQ = function() {
				for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
				b && (d.yl(), c())
			};
			for (var e = 0; e < a.length; e += 1) d.X(a[e], b)
		},
		jf: function(a, b) {
			var c, d;
			for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
		}
	};
	g.r = {
		localStorage: !0,
		QH: 500,
		Ae: !0,
		De: {
			dark: "#202020",
			blue_night: "#090d20",
			test: "#033447",
			mapv: "#000001",
			techblue: "#000b11",
			insight: "#19212a",
			"default": "#fcf9f2"
		},
		cK: {
			normal: "normal",
			dark: "dark",
			light: "light",
			fresh: "fresh",
			test: "blue",
			blue_night: "blue",
			mapv: "darkblue",
			insight: "grey"
		},
		key: "2cb080ea12bbc0492419b74763f9aa1a",
		tc: "http",
		Rd: [109.00741,34.283077],
		Zd: "http://restapi.amap.com",
		Gb: "http://webapi.amap.com",
		nK: "http://gaode.com",
		Hv: "http://m.amap.com",
		OD: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
		RJ: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
		wU: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
		NK: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
		OK: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
		TE: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
		vL: "http://vector.amap.com",
		uL: "vdata.amap.com",
		dAa: "ws",
		SI: "http://a.amap.com/jsapi/static/image/",
		Vn: 0
	};

	function nc(a) {
		g.da.Qu = a.Qu;
		g.l = a.l;
		g.Pva = a[7];
		a.l = null;
		g.r.Gb = a[2].split(",")[0];
		g.r.Dk = a.Dk;
		g.r.LJ = a.LJ;
		var b = g.r.tc = g.r.Gb.split(":")[0];
		"https" === b && (g.r.dAa = "wss", g.r.Zd = g.r.Zd.replace("http", "https"), g.r.OD = g.r.OD.replace("http",
				"https"), g.r.RJ = g.r.RJ.replace("http", "https"), g.r.wU = g.r.wU.replace("http", "https"), g
			.r.NK = g.r.NK.replace("http", "https"), g.r.OK = g.r.OK.replace("http", "https"), g.r.TE = g.r.TE
			.replace("http", "https"), g.r.vL = g.r.vL.replace("http", "https"), g.r.SI = g.r.SI.replace("http",
				"https"));
		var c = window.location.href;
		0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href); -
		1 != c.indexOf("?") && (c = c.substr(0, c.indexOf("?")));
		g.r.bqa = c;
		c = encodeURIComponent(c);
		g.r.Tp = c;
		g.r.Hi = g.r.Gb + "/theme/v1.3/markers/" + (g.l.Jc ? "b" : "n");
		var d = document.createElement("style");
		d.type = "text/css";
		g.r.Aoa = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
		var e = ".amap-container{cursor:" + g.r.Aoa + ";}.amap-drag{cursor:url(" + b +
			"://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
		d.styleSheet ? (b = function() {
			try {
				d.styleSheet.cssText = e
			} catch (a) {}
		}, d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
		(document.head || document.getElementsByTagName("head")[0]).appendChild(d);
		g.r.mode = Number(a[3]);
		g.r.Rd = a[1];
		g.r.key = a[0];
		g.r.ln = a[4];
		g.r.Mc = a[5];
		g.r.Mla = a[6];
		g.r.QQ = a[13];
		oc()
	}

	function oc() {
		try {
			if (window.localStorage)
				for (var a = window.localStorage.length; 0 <= a; a -= 1) {
					var b = window.localStorage.key(a);
					if (b && "_AMap_" === b.slice(0, 6)) {
						var c = window.localStorage.getItem(b),
							c = JSON.parse(c || {});
						"_AMap_anole" === b ? c.version !== g.l.lf && window.localStorage.removeItem(b) :
							"_AMap_data.tileKeys" === b ? c.vdataVer === g.l.lf && c.apiVer === g.r.Dk || window
							.localStorage.removeItem(b) : c.version !== g.r.Dk && window.localStorage.removeItem(b)
					}
				}
		} catch (d) {}
	}
	window.AMap && window.AMap.tL && window.AMap.tL.uM && window.AMap.tL.uM(nc);
	g.Lm = {
		Ou: Math.PI / 180,
		hwa: 180 / Math.PI,
		OQ: 6378137
	};
	(function() {
		function a(a) {
			return "undefined" === typeof a ? "" : a
		}
		g.$h = {
			dra: function(b) {
				b.name = a(b.name);
				var c = [b.y, b.x, b.name];
				if (g.l.ba) {
					var d = [g.r.Hv + "/callAPP?", "src=jsapi_q"];
					d.push("&ios=" + encodeURIComponent(
						"viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
						b.y + "&lon=" + b.x));
					d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(
						",") + "&sourceApplication=jsapi_q"));
					d.push("&wp=" + encodeURIComponent(
						"viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
						b.y + "&lon=" + b.x));
					d.push("&mo=" + encodeURIComponent(g.r.Hv + "?q=" + c.join(",") +
						"&callapp=0&sourceApplication=jsapi_q"));
					return d.join("")
				}
				return g.r.nK + "?q=" + c.join(",") + "&src=jsapi_q"
			},
			t4: function(b) {
				b.name = a(b.name);
				b.address = a(b.address);
				b.x = a(b.x);
				b.y = a(b.y);
				var c = [b.id, b.y, b.x, b.name, b.address];
				if (g.l.ba) {
					var d = [g.r.Hv + "/callAPP?", "src=jsapi_p"];
					d.push("&ios=" + encodeURIComponent(
						"multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name,
							b.address, b.id
						].join() + "&title=" + b.name));
					d.push("&android=" +
						encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") +
							"&sourceApplication=jsapi_p"));
					d.push("&wp=" + encodeURIComponent(
						"multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name,
							b.address, b.id
						].join() + "&title=" + b.name));
					return d.join("")
				}
				return g.r.nK + "?p=" + c.join(",") + "&src=jsapi_p"
			},
			r4: function(b) {
				if (g.l.ba) {
					var c = [g.r.Hv + "/callAPP?", "src=jsapi_detail"];
					c.push("&ios=" + encodeURIComponent(
						"viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
					b.name = a(b.name);
					b.x = a(b.x);
					b.y =
						a(b.y);
					c.push("&android=" + encodeURIComponent(
						"androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id +
						"&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y +
						"&sourceApplication=jsapi_detail"));
					c.push("&wp=" + encodeURIComponent(
						"viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
					c.push("&mo=" + encodeURIComponent(g.r.Hv + "/detail/index/poiid=" + b.id +
						"&sourceApplication=jsapi_detail"));
					return c.join("")
				}
				return g.r.nK + "/detail/" + b.id + "?src=jsapi_detail"
			},
			JR: function(b) {
				b.sname = a(b.sname);
				"" === b.sname &&
					(b.sname = "\u8d77\u70b9");
				b.dname = a(b.dname);
				"" === b.dname && (b.dname = "\u7ec8\u70b9");
				b.mcount = a(b.mcount);
				b.my = a(b.my);
				b.mx = a(b.mx);
				b.mname = a(b.mname);
				var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b
					.mname
				];
				if (g.l.ba) {
					var d = [g.r.Hv + "/callAPP?", "src=jsapi_r_" + b.t];
					d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t +
						"&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname +
						"&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m +
						"&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
					var e = b.t;
					0 === b.t ? e = 2 : 2 === b.t && (e = 4);
					d.push("&android=" + encodeURIComponent(
						"androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b
						.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy +
						"&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
					d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t +
						"&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname +
						"&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m +
						"&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
					d.push("&mo=" + encodeURIComponent(g.r.Hv +
						"/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
					return d.join("")
				}
				return g.r.nK + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
			},
			lt: function(a) {
				g.l.ba ? window.location.href = a : window.open(a)
			}
		}
	})();
	"function" !== typeof Object.keys && (Object.keys = function(a) {
		var b = [],
			c;
		for (c in a) a.hasOwnProperty(c) && b.push(c);
		return b
	});
	g.a = {
		CLASS_NAME: "AMap.Util",
		bL: [],
		Fa: 268435456,
		ap: [215440491, 106744817],
		Aw: function() {
			var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
			return function(b, c) {
				var d = [],
					e;
				c = c || a.length;
				if (b)
					for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c];
				else {
					var f;
					d[8] = d[13] = d[18] = d[23] = "-";
					d[14] = "4";
					for (e = 0; 36 > e; e++) d[e] || (f = 0 | 16 * Math.random(), d[e] = a[19 === e ?
						f & 3 | 8 : f])
				}
				return d.join("")
			}
		}(),
		hR: {
			start: function(a) {
				a.startTime = new Date;
				a.jt = [];
				var b = (new Date).getTime();
				a.id = requestAnimationFrame(function d() {
					var e =
						(new Date).getTime();
					a.jt.push(e - b);
					b = e;
					a.id = requestAnimationFrame(d)
				})
			},
			cancel: function(a) {
				a.id && cancelAnimationFrame(a.id)
			},
			stop: function(a) {
				a.foa = new Date - a.startTime;
				this.cancel(a);
				a.hR = Math.round(1E3 / (a.foa / (a.jt.length + 1)))
			}
		},
		E4: function(a, b, c) {
			var d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !1;
			if (a === b) return b;
			switch (3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "linear") {
				case "ease":
					c = g.Jw.EI(0.25, 0.1, 0.25, 1)(c);
					break;
				case "ease-in":
					c = g.Jw.EI(0.42, 0, 1, 1)(c);
					break;
				case "ease-out":
					c =
						g.Jw.EI(0, 0, 0.58, 1)(c);
					break;
				case "ease-in-out":
					c = g.Jw.EI(0.42, 0, 0.58, 1)(c)
			}
			var e = a + (b - a) * c;
			d && (e >>= 0);
			return e
		},
		createObjectURL: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] :
				"text/javascript; charset=utf-8",
				c = null;
			try {
				c = (window.URL || window.webkitURL).createObjectURL(new Blob([a], {
					type: b
				}))
			} catch (d) {
				c = null
			}
			return c
		},
		revokeObjectURL: function(a) {
			(window.URL || window.webkitURL).revokeObjectURL(a)
		},
		KCa: function(a) {
			for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = c;
			return b
		},
		mD: function(a) {
			var b = {};
			if (g.a.jk(a, "object"))
				for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
			return b
		},
		Of: function(a, b) {
			for (var c = 0, d = b.length; c < d; c += 1) a.push(b[c])
		},
		create: "function" === typeof Object.create ? Object.create : function(a, b) {
			function c() {}
			c.prototype = a;
			var d = new c,
				e;
			for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
			return d
		},
		cb: function(a) {
			if ("object" === typeof a && null !== a) {
				if (a.U6 || this.jk(a, "Float32Array") || this.jk(a, "Uint16Array")) return a;
				var b = this.isArray(a) ? [] : {},
					c;
				for (c in a) a.hasOwnProperty(c) && (b[c] = g.a.cb(a[c]));
				return b
			}
			return a
		},
		I5: function(a) {
			return (a | 0) === a
		},
		Dxa: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function(a, b) {
			for (var c in b) a[c] = b[c]
		},
		Ph: function(a) {
			return "function" === typeof a
		},
		fma: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "webgl";
			if (!a) return a;
			for (var c = [], d = 0, e = a.length; d < e; d += 2) {
				var f = parseInt(a.substr(d, 2), 16);
				if ("webgl" === b || "rgba" === b && 0 === d) f = this.wb(f / 255, 3);
				c.push(f)
			}
			c.push(c.shift());
			return c
		},
		Qs: function() {},
		keys: "function" === typeof Object.keys ?
			Object.keys : function(a) {
				var b = [],
					c;
				for (c in a) a.hasOwnProperty(c) && b.push(c);
				return b
			},
		map: function(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
				d = [];
			if (a && a.length) g.a.Tb(a, function() {
				for (var e = arguments.length, f = Array(e), h = 0; h < e; h++) f[h] = arguments[h];
				d[f[1]] = b.apply(c || a, f)
			});
			else return a;
			return d
		},
		forEach: function(a, b) {
			if (a && a.length) {
				var c = a.length;
				if (0 < c && (b(a[0], 0), 1 < c)) {
					b(a[1], 1);
					for (var d = 2; d < c; d++) b(a[d], d)
				}
			}
		},
		Tb: function(a, b) {
			var c = 2 < arguments.length && void 0 !==
				arguments[2] ? arguments[2] : null;
			if (a && a.length)
				for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
		},
		find: function(a, b) {
			for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a
					.length; d < e; d++)
				if ("function" === typeof b) {
					if (b.call(c, a[d], d, a)) return a[d]
				} else if (a[d] === b) return a[d];
			return null
		},
		DJ: function(a) {
			return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" ===
				typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
		},
		ww: function(a, b) {
			var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
				d, e;
			"v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
			var f, h, k, l, m;
			h = [];
			k = NaN;
			l = 0;
			for (m = a.length; l < m; l++) f = a[l], f = c.indexOf(f), isNaN(k) ? k = f * d : (h.push(k +
				f - e), k = NaN);
			return h
		},
		mxa: function(a, b) {
			for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math
					.ceil(b.length / c), e = 0; e < d; e += 1) {
				var f = c * e,
					h = f + c;
				h > b.length && (h = b.length);
				for (; f < h; f += 1) a(b[f])
			}
		},
		iDa: function(a) {
			if (/^rgba\(/.test(a)) return this.Wv(a);
			var b = a = this.lI(a);
			"#" === a[0] && (a = a.substring(1), 3 === a.length && (a =
				a.replace(/./g, function(a) {
					return a + a
				})), b = this.Qr(8 === a.length ? a : "ff" + a));
			return this.Wv(b)
		},
		lI: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
				a = a.toLowerCase(),
				b = {
					aliceblue: "#f0f8ff",
					antiquewhite: "#faebd7",
					aqua: "#00ffff",
					aquamarine: "#7fffd4",
					azure: "#f0ffff",
					beige: "#f5f5dc",
					bisque: "#ffe4c4",
					black: "#000000",
					blanchedalmond: "#ffebcd",
					blue: "#0000ff",
					blueviolet: "#8a2be2",
					brown: "#a52a2a",
					burlywood: "#deb887",
					cadetblue: "#5f9ea0",
					chartreuse: "#7fff00",
					chocolate: "#d2691e",
					coral: "#ff7f50",
					cornflowerblue: "#6495ed",
					cornsilk: "#fff8dc",
					crimson: "#dc143c",
					cyan: "#00ffff",
					darkblue: "#00008b",
					darkcyan: "#008b8b",
					darkgoldenrod: "#b8860b",
					darkgray: "#a9a9a9",
					darkgreen: "#006400",
					darkkhaki: "#bdb76b",
					darkmagenta: "#8b008b",
					darkolivegreen: "#556b2f",
					darkorange: "#ff8c00",
					darkorchid: "#9932cc",
					darkred: "#8b0000",
					darksalmon: "#e9967a",
					darkseagreen: "#8fbc8f",
					darkslateblue: "#483d8b",
					darkslategray: "#2f4f4f",
					darkturquoise: "#00ced1",
					darkviolet: "#9400d3",
					deeppink: "#ff1493",
					deepskyblue: "#00bfff",
					dimgray: "#696969",
					dodgerblue: "#1e90ff",
					firebrick: "#b22222",
					floralwhite: "#fffaf0",
					forestgreen: "#228b22",
					fuchsia: "#ff00ff",
					gainsboro: "#dcdcdc",
					ghostwhite: "#f8f8ff",
					gold: "#ffd700",
					goldenrod: "#daa520",
					gray: "#808080",
					green: "#008000",
					greenyellow: "#adff2f",
					honeydew: "#f0fff0",
					hotpink: "#ff69b4",
					indianred: "#cd5c5c",
					indigo: "#4b0082",
					ivory: "#fffff0",
					khaki: "#f0e68c",
					lavender: "#e6e6fa",
					lavenderblush: "#fff0f5",
					lawngreen: "#7cfc00",
					lemonchiffon: "#fffacd",
					lightblue: "#add8e6",
					lightcoral: "#f08080",
					lightcyan: "#e0ffff",
					lightgoldenrodyellow: "#fafad2",
					lightgrey: "#d3d3d3",
					lightgreen: "#90ee90",
					lightpink: "#ffb6c1",
					lightsalmon: "#ffa07a",
					lightseagreen: "#20b2aa",
					lightskyblue: "#87cefa",
					lightslategray: "#778899",
					lightsteelblue: "#b0c4de",
					lightyellow: "#ffffe0",
					lime: "#00ff00",
					limegreen: "#32cd32",
					linen: "#faf0e6",
					magenta: "#ff00ff",
					maroon: "#800000",
					mediumaquamarine: "#66cdaa",
					mediumblue: "#0000cd",
					mediumorchid: "#ba55d3",
					mediumpurple: "#9370d8",
					mediumseagreen: "#3cb371",
					mediumslateblue: "#7b68ee",
					mediumspringgreen: "#00fa9a",
					mediumturquoise: "#48d1cc",
					mediumvioletred: "#c71585",
					midnightblue: "#191970",
					mintcream: "#f5fffa",
					mistyrose: "#ffe4e1",
					moccasin: "#ffe4b5",
					navajowhite: "#ffdead",
					navy: "#000080",
					oldlace: "#fdf5e6",
					olive: "#808000",
					olivedrab: "#6b8e23",
					orange: "#ffa500",
					orangered: "#ff4500",
					orchid: "#da70d6",
					palegoldenrod: "#eee8aa",
					palegreen: "#98fb98",
					paleturquoise: "#afeeee",
					palevioletred: "#d87093",
					papayawhip: "#ffefd5",
					peachpuff: "#ffdab9",
					peru: "#cd853f",
					pink: "#ffc0cb",
					plum: "#dda0dd",
					powderblue: "#b0e0e6",
					purple: "#800080",
					rebeccapurple: "#663399",
					red: "#ff0000",
					rosybrown: "#bc8f8f",
					royalblue: "#4169e1",
					saddlebrown: "#8b4513",
					salmon: "#fa8072",
					sandybrown: "#f4a460",
					seagreen: "#2e8b57",
					seashell: "#fff5ee",
					sienna: "#a0522d",
					silver: "#c0c0c0",
					skyblue: "#87ceeb",
					slateblue: "#6a5acd",
					slategray: "#708090",
					snow: "#fffafa",
					springgreen: "#00ff7f",
					steelblue: "#4682b4",
					tan: "#d2b48c",
					teal: "#008080",
					thistle: "#d8bfd8",
					tomato: "#ff6347",
					turquoise: "#40e0d0",
					violet: "#ee82ee",
					wheat: "#f5deb3",
					white: "#ffffff",
					whitesmoke: "#f5f5f5",
					yellow: "#ffff00",
					yellowgreen: "#9acd32"
				};
			return "string" === typeof a ? b[a.toLowerCase()] ?
				b[a.toLowerCase()] : a : a
		},
		FI: function(a, b, c) {
			var d, e;
			d = Math.floor(c / 2);
			e = c - d;
			d = (1 << d) - 1 << e;
			e = (1 << e) - 1;
			return [c, a & d | b & e, b & d | a & e]
		},
		GI: function(a) {
			return a ? encodeURIComponent(a) : ""
		},
		Zc: function(a, b, c, d) {
			c = a[b].i[c];
			if ("undefined" === typeof c) return null;
			a = a[b].s;
			if ("number" === typeof c) return a[c];
			for (;
				"undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
			d = c[d.toString()];
			return "number" === typeof d ? a[d] : null
		},
		Wv: function(a) {
			a = a.split(",");
			a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
			a[1] = parseFloat(a[1]) / 255;
			a[2] = parseFloat(a[2]) / 255;
			a[3] = parseFloat(a[3]);
			return a
		},
		$wa: function(a) {
			a = a.split(",");
			a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
			a[1] = parseFloat(a[1]) / 255;
			a[2] = parseFloat(a[2]) / 255;
			return a
		},
		rU: function(a) {
			return "rgba(" + 255 * a[0] + "," + 255 * a[1] + "," + 255 * a[2] + "," + a[3] + ")"
		},
		Nna: function(a) {
			return this.rU(this.Zl(a))
		},
		Zl: function(a) {
			if (a instanceof Array) return 3 == a.length && a.push(1), a;
			a = this.lI(a);
			if (0 == a.indexOf("#")) {
				if (4 === a.length) return a = a.substr(1).replace(/./g, function(a) {
					return a + a
				}), this.np(a);
				if (7 == a.length) return this.np(a.substr(1));
				if (9 == a.length) return a = a.substr(1), this.Xk(a.substr(6) + a.substr(0, 6))
			} else {
				if (0 == a.indexOf("rgb(")) return a = this.$wa(a), a.push(1), a;
				if (0 == a.indexOf("rgba(")) return this.Wv(a)
			}
		},
		A8: function(a) {
			return g.a.Qr("ff" + a)
		},
		Qr: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
			b.push((b.shift() / 255).toFixed(2));
			return "rgba(" + b.join(",") + ")"
		},
		np: function(a) {
			return g.a.Xk("ff" + a)
		},
		Xk: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c,
				2), 16) / 255);
			b.push(b.shift());
			return b
		},
		uh: function(a) {
			for (var b in a)
				if (a.hasOwnProperty(b)) return !1;
			return !0
		},
		Fo: function(a, b) {
			0 <= b && a.splice(b, 1);
			return a
		},
		$xa: function(a, b) {
			return a.startsWith ? a.startsWith(b) : a.substr(0, b.length) === b
		},
		zy: function(a, b) {
			var c = g.a.indexOf(a, b);
			return g.a.Fo(a, c)
		},
		filter: function(a, b, c) {
			var d = [];
			g.a.Tb(a, function(a, f) {
				b.call(c, a, f) && d.push(a)
			});
			return d
		},
		indexOf: function(a, b) {
			if (!a || !a.length) return -1;
			if (a.indexOf) return a.indexOf(b);
			for (var c = 0; c < a.length; c += 1)
				if (a[c] ===
					b) return c;
			return -1
		},
		cD: function(a, b) {
			return a.endsWith ? a.endsWith(b) : a.length < b.length ? !1 : a.substr(a.length - b.length) ==
				b ? !0 : !1
		},
		bind: function() {
			var a = !1;
			Function.prototype.bind && (a = !0);
			return function(b, c) {
				var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
				return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function() {
					return b.apply(c, d || arguments)
				}
			}
		}(),
		ub: function(a, b) {
			b = b || {};
			a.w = g.extend({}, a.w, b);
			return a.w
		},
		Ena: function(a, b, c) {
			return "function" == typeof b ? this.JP(a, !0, this.zma(b,
				c, 1)) : this.JP(a, !0)
		},
		JP: function(a, b, c, d, e, f, h) {
			var k;
			c && (k = e ? c(a, d, e) : c(a));
			if (void 0 !== k) return k;
			if (!this.N5(a)) return a;
			if (d = this.isArray(a)) {
				if (k = this.msa(a), !b) return this.hma(a, k)
			} else {
				var l = Object.prototype.toString.call(a),
					m = "[object Function]" == l;
				if ("[object Object]" == l || "[object Arguments]" == l || m && !e) {
					if (k = this.nsa(m ? {} : a), !b) return this.qma(k, a)
				} else return e ? a : {}
			}
			f || (f = []);
			h || (h = []);
			for (e = f.length; e--;)
				if (f[e] == a) return h[e];
			f.push(a);
			h.push(k);
			(d ? this.ima : this.vma)(a, function(d, e) {
				k[e] =
					g.a.JP(d, b, c, e, a, f, h)
			});
			return k
		},
		qma: function(a, b) {
			return null == b ? a : this.tma(b, Object.keys(b), a)
		},
		N5: function(a) {
			var b = typeof a;
			return !!a && ("object" == b || "function" == b)
		},
		nFa: function(a) {
			return !!a && "object" == typeof a
		},
		lFa: function(a) {
			return "number" == typeof a && -1 < a && 0 == a % 1 && 9007199254740991 >= a
		},
		msa: function(a) {
			var b = a.length,
				c = new a.constructor(b);
			b && "string" == typeof a[0] && Object.hasOwnProperty.call(a, "index") && (c.index = a.index, c
				.input = a.input);
			return c
		},
		hma: function(a, b) {
			var c = -1,
				d = a.length;
			for (b ||
				(b = Array(d)); ++c < d;) b[c] = a[c];
			return b
		},
		nsa: function(a) {
			a = a.constructor;
			"function" == typeof a && a instanceof a || (a = Object);
			return new a
		},
		zma: function(a, b, c) {
			if ("function" != typeof a) return this.qv;
			if (void 0 === b) return a;
			switch (c) {
				case 1:
					return function(c) {
						return a.call(b, c)
					};
				case 3:
					return function(c, e, f) {
						return a.call(b, c, e, f)
					};
				case 4:
					return function(c, e, f, h) {
						return a.call(b, c, e, f, h)
					};
				case 5:
					return function(c, e, f, h, k) {
						return a.call(b, c, e, f, h, k)
					}
			}
			return function() {
				return a.apply(b, arguments)
			}
		},
		ima: function(a,
			b) {
			for (var c = -1, d = a.length; ++c < d && !1 !== b(a[c], c, a););
			return a
		},
		qv: function(a) {
			return a
		},
		goa: function(a) {
			return function(b, c, d) {
				var e = g.a.Aya(b);
				d = d(b);
				for (var f = d.length, h = a ? f : -1; a ? h-- : ++h < f;) {
					var k = d[h];
					if (!1 === c(e[k], k, e)) break
				}
				return b
			}
		},
		vma: function(a, b) {
			return g.a.goa()(a, b, Object.keys)
		},
		Aya: function(a) {
			return g.a.N5(a) ? a : Object(a)
		},
		tma: function(a, b, c) {
			c || (c = {});
			for (var d = -1, e = b.length; ++d < e;) {
				var f = b[d];
				c[f] = a[f]
			}
			return c
		},
		w3: function() {
			return !1
		},
		join: function(a, b) {
			if (a.join) return a.join(b);
			var c = [],
				d;
			for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
			return c.join(b)
		},
		e4: function(a, b) {
			return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
		},
		yb: function() {
			var a = 0;
			return function(b) {
				b._amap_id || (a += 1, b._amap_id = a);
				return b._amap_id
			}
		}(),
		vpa: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		dg: Date.now ? function() {
			return Date.now()
		} : function() {
			return (new Date).getTime()
		},
		LD: function(a, b, c, d) {
			var e;
			if (d) {
				var f = 0,
					h, k = this.dg;
				e = function() {
					h = k();
					if (h - f < b) return !1;
					f = h;
					a.apply(c,
						arguments)
				}
			} else {
				var l, m, n;
				n = function() {
					l = !1;
					m && (e.apply(c, m), m = !1)
				};
				e = function() {
					l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
				}
			}
			return e
		},
		wb: function(a, b) {
			if (a === a << 0) return a;
			var c = Math.pow(10, b || 0);
			return Math.round(parseFloat(a) * c) / c
		},
		isArray: Array.isArray ? Array.isArray : function(a) {
			return this.jk(a, "array")
		},
		jk: function(a, b) {
			return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b
				.toLowerCase()
		},
		ka: "function" === typeof Array.prototype.ka ? function(a, b) {
			return a.ka(b)
		} : function(a, b) {
			return -1 !== this.indexOf(a, b)
		},
		w9: function(a) {
			var b = 0;
			if (0 === a.length) return b;
			for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &=
				b;
			return b
		},
		vDa: function(a, b) {
			b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
			for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) -
				256 - b + 65535) % 65535);
			return c
		},
		Doa: function(a, b) {
			var c = (a + "").slice(-2),
				d = (b + "").slice(-2);
			a = a.slice(0, -2);
			b = b.slice(0, -2);
			var e = parseInt((d + c).slice(1)),
				f = Math.ceil(e / 250) % 2 ? 1 : -1,
				d = parseInt("1" +
					d) / 3E3;
			a -= parseInt("1" + c) / 3E3 * f;
			b -= d * (1 < e / 500 ? 1 : -1);
			return new g.U(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
		},
		Z6: function(a) {
			return "undefined" !== typeof JSON && JSON.stringify ? g.a.w9(JSON.stringify(a)) : null
		},
		DHa: function(a, b) {
			if (b || !a.hasOwnProperty("_amap_hash")) {
				var c = g.a.Z6(a);
				c && (a._amap_hash = c)
			}
			return a._amap_hash
		},
		iepngFix: function(a) {
			function b() {
				for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
				d.DS = !0
			}
			this.L7 || (this.L7 = [], this.DS = !1);
			var c = this.L7,
				d = this;
			if ("img" === a.tagName.toLowerCase()) c.push(a);
			else {
				a = a.getElementsByTagName("*");
				for (var e = 0; e < a.length; e += 1) c.push(a[e])
			}
			window.DD_belatedPNG && this.DS ? setTimeout(function() {
				b()
			}, 100) : this.DS || g.tb.load("AMap.FixPng", b)
		},
		Ka: function(a) {
			if (g.a.isArray(a))
				if (g.a.isArray(a[0]))
					for (var b = 0; b < a.length; b += 1) a[b] = g.a.Ka(a[b]);
				else if (b = typeof a[0], "string" === b || "number" === b) return new g.U(a[0], a[1]);
			return a
		},
		fAa: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c += 1) b[c] = [a[c].x, a[c].y];
			return b
		},
		Kq: function(a) {
			return g.a.isArray(a) ? new g.xd(a[0], a[1]) :
				a
		},
		CP: function(a) {
			var b = a.type,
				c = a.TU,
				d = a.error;
			a = new g.jb.XMLHttpRequest(a.url, {
				Ed: void 0 === b ? "GET" : b,
				N2: a.data,
				oU: "text/plain"
			});
			a.h("complete", function(a) {
				a = JSON.parse(a.data);
				c && c(a)
			}, this);
			a.h("error", function() {
				var a = {
					errmsg: "REQUEST_FAILED"
				};
				d && d(a)
			}, this)
		}
	};
	(function() {
		function a(a) {
			window.clearTimeout(a)
		}

		function b(a) {
			var b, c, d = ["webkit", "moz", "o", "ms"];
			for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
			return c
		}

		function c(a) {
			var b = +new Date,
				c = Math.max(0, (g.l.Xl ? 50 : 20) - (b - d));
			d = b + c;
			return window.setTimeout(a, c)
		}
		var d = 0,
			e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
			f = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") ||
			a;
		g.a.Wc = function(a, b, c, d) {
			if (c) b ? g.a.bind(a, b).call(b, d) : a();
			else return e(function() {
				b ?
					g.a.bind(a, b).call(b, d) : a()
			})
		};
		g.a.ri = function(a) {
			a && f.call(window, a)
		}
	})();
	g.a.pU = window.requestIdleCallback ? function(a, b) {
		return window.requestIdleCallback(a, b)
	} : function(a) {
		var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
			c = g.a.dg();
		return setTimeout(function() {
			a({
				didTimeout: !1,
				timeRemaining: function() {
					return Math.max(0, 70 - (g.a.dg() - c))
				}
			})
		}, b.timeout || 0)
	};
	g.a.ZP = window.cancelIdleCallback ? function(a) {
		return window.cancelIdleCallback(a)
	} : function(a) {
		clearTimeout(a)
	};
	(function(a) {
		var b = 1,
			c = {};
		a.a.Bxa = function(a, b) {
			if (c[a]) {
				var f = c[a];
				f.GE = 1;
				f.result = b;
				if (f.nn) {
					for (var h = f.nn, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
					f.nn = null
				}
			}
		};
		a.a.Ana = function(a) {
			c[a] = null
		};
		a.a.Pza = function(a, b) {
			if (c[a]) {
				var f = c[a];
				0 < f.GE ? b(null, f.result) : (f.nn || (f.nn = []), f.nn.push(b))
			} else b(null, a)
		};
		a.a.DR = function(d, e) {
			var f = navigator.geolocation;
			if (!a.l.ED || "https:" === document.location.protocol) return d(null, f);
			var h;
			e && e.Qza && (h = "f" + b++, c[h] = {
				GE: 0
			});
			var k = null,
				l = !1;
			e && e.timeout && (k = setTimeout(function() {
				k =
					void 0;
				d({
					code: 3,
					info: "TIME_OUT",
					message: "Get geolocation time out."
				});
				l = !0
			}, e.timeout));
			f.getCurrentPosition(function() {
				l || (clearTimeout(k), k = void 0, d(null, f))
			}, function(b) {
				l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf(
					"permission") ? a.tb.load("AMap.GeoRemoteLoc", function() {
					d(null, a.paa, h)
				}) : d(null, f))
			}, {
				timeout: 1E3
			});
			return h
		}
	})(g);
	(function(a) {
		var b = a.da.extend({
			ka: [a.va],
			A: function() {}
		});
		a.Lj = new b
	})(g);
	(function(a) {
		var b = a.da.extend({
			ka: [a.va],
			A: function() {
				this.lga()
			},
			lga: function() {
				a.Lj && a.Lj.h("vecTileParsed.buildings", this.Sfa, this)
			},
			G5: function(a) {
				return a.map.EZ
			},
			Qqa: function(a) {
				return this.G5(a) ? a.map.ON : null
			},
			yxa: function(a, b) {
				if (b) {
					var e = b.map;
					e && (e.ON ? e.ON.toString() : "") !== (a ? a.toString() : "") && (e.ON = a ||
					[], e.set("display", 0))
				}
			},
			V8: function(a, b) {
				if (b) {
					var e = b.map;
					e && e.EZ !== a && (e.EZ = a, e.set("display", 0))
				}
			},
			OBa: function() {},
			AZ: function(a, b) {
				if (a)
					for (var e = 0, f = a.length; e < f; e++) a[e] && 0 > b.indexOf(a[e]) &&
						b.push(a[e])
			},
			A3: function(b) {
				if (!b) return null;
				b = b.map.la;
				for (var d = 0, e = b.length; d < e; d++)
					if (a.o.ei && b[d] instanceof a.o.ei && b[d].ga && b[d].ga.length && (-1 !== b[
							d].ga.indexOf("building") || -1 !== b[d].ga.indexOf("poilabel")) && b[d]
						.Ra) {
						var f = b[d].S.get("tiles", null, !0);
						if (f && f.length) return b[d]
					} return null
			},
			nqa: function(a) {
				if (a = this.A3(a)) {
					if (a = a.S.get("tiles", null, !0)) a = a[0];
					else return null;
					if (!a || !a.length) return null;
					for (var b = [], e = 0, f = a.length; e < f; e++) {
						var h = a[e];
						h.pe && h.pe.tf && this.AZ(h.pe.tf, b)
					}
					return b
				}
			},
			Sfa: function(a) {
				if (a.qp && a.qp.pe) {
					var b = a.qp.pe.tf;
					if (b) {
						var e = [];
						this.AZ(b, e);
						this.q("vecTileParsed.builds.found", {
							l2: e,
							qp: a.qp
						})
					}
				}
			}
		});
		a.Mj = new b
	})(g);
	(function(a) {
		function b() {
			return {
				checkup: function() {
					var a = Array.prototype.slice.call(arguments, 0);
					a.pop()(null, a)
				}
			}
		}

		function c(a) {
			return {
				injectCode: function(b, c) {
					var d = null,
						e = null;
					try {
						d = (new Function("self", b))(a)
					} catch (f) {
						console.error("error", e), e = f.toString()
					}
					c(e, d)
				}
			}
		}

		function d(a) {
			function b(c, d) {
				function e(a, b, c) {
					a = {
						$z: Date.now(),
						Oz: h,
						error: a,
						result: b,
						Gq: !1,
						cl: !1
					};
					if (c)
						for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f]);
					d(a)
				}
				var f = c.fS,
					h = c.Oz,
					l = c.kQ,
					m = c.BC,
					n = c.gma || [],
					p = a._wkHandlers[f];
				p ? p[l] ? m ?
					p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e(
						"Can not find handler for: " + f)
			}
			var c = [],
				d = null,
				e = null;
			for (d in this._wkHandlers) - 1 !== d.indexOf("_def_") && (e = this._wkHandlers.XFa = d);
			"function" === typeof this._wkHandlers[e].A && this._wkHandlers[e].A.call(this._wkHandlers[e]);
			a.xu = function(a) {
				c.push.apply(c, a)
			};
			a.addEventListener("message", function(d) {
				function e(b) {
					if (t) {
						t.push(b);
						var d = !!b.Gq;
						d || n++;
						b = n >= h || b.cl;
						if (d || b) {
							d = 1 < t.length ? {
								Uwa: t
							} : t[0];
							d.$z = Date.now();
							d.lHa = p;
							if (c.length) {
								try {
									a.postMessage(d,
										c)
								} catch (f) {
									a.postMessage(d), console.error(f)
								}
								c.length = 0
							} else a.postMessage(d);
							t.length = 0;
							b && (e = t = null)
						}
					} else console.error("Seemed callback already sent!!", b, b.result.lc)
				}
				var f = d.data;
				d = f.Swa || [f];
				for (var h = d.length, n = 0, p = Date.now() - f.$z, t = [], f = 0; f < h; f++) b(d[f],
					e)
			}, !1)
		}

		function e(d, h) {
			this.w = a.extend({
				batchSend: !0,
				lazy: !1,
				libPolyfills: null
			}, h);
			this.Pp = [];
			this.WA = this.w.clientId || "w" + f++;
			this.w.onReady && this.kT(this.w.onReady);
			this.mG = this.Vea();
			if ("function" === typeof d) {
				var m = {};
				m[this.mG] = d;
				d = m
			}
			d[e.RR] =
				c;
			d[this.IY()] = b;
			this.CG = d;
			this.PB(null);
			this.w.lazy || this.jy();
			a.Gra || !1 === this.w.hostWorker || (a.Gra = this);
			this.lo && this.lo.A && this.lo.A.call(this.lo)
		}
		var f = 1,
			h = 1;
		a.extend(e, {
			RR: "_g_",
			Mxa: function(a) {
				if (!a.bca) {
					var b = [];
					a.addEventListener("message", function(a) {
						a = a.data;
						a = a.Uwa || [a];
						for (var c = 0, d = a.length; c < d; c++) {
							var e = a[c],
								f;
							a: {
								f = e.Oz;
								for (var h = !e.cl, k = 0, v = b.length; k < v; k++) {
									var w = b[k];
									if (f === w.Oz) {
										h || b.splice(k, 1);
										f = w;
										break a
									}
								}
								f = void 0
							}
							f && f.BC(e.error, e.result, !0)
						}
					}, !1);
					a.Qba = b;
					a.bca = !0
				}
			}
		});
		a.extend(e.prototype, {
			Vea: function() {
				return "_def_" + this.WA
			},
			IY: function() {
				return "_cln_" + this.WA
			},
			ika: function() {
				var a = Array.prototype.slice.call(arguments, 0);
				this.y0 = a;
				if (this.Px) {
					for (var b = 0, c = this.Px.length; b < c; b++) this.Px[b].apply(null, a);
					this.Px.length = 0
				}
			},
			xu: function(a) {
				this.$ja && this.Pp.push.apply(this.Pp, a)
			},
			kT: function(a) {
				this.y0 ? a.apply(null, this.y0) : (this.Px || (this.Px = []), this.Px.push(a))
			},
			jy: function(b) {
				var c = this;
				if (!c.FX) {
					c.FX = !0;
					var d = function(d, e) {
						d && a.l.FS && console.warn(d);
						c.ika.call(c, d, e);
						b && b(d, e)
					};
					a.l.FS ? this.Wja(function(a, b) {
						b ? this.sga(b, function(a, c) {
							a ? d(a) : (this.PB(c), this.yP = c, this.Pp.length = 0,
								this.lo = null, d(null, {
									xma: b,
									aAa: c
								}))
						}) : d("Worker start failed!")
					}) : d("Worker not supported!")
				}
			},
			wf: function(b, c) {
				var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.Qs,
					f = this;
				b = b || f.mG;
				var h = {};
				if (a.a.jk(c, "object")) {
					var q = "return {",
						r;
					for (r in c)
						if (c.hasOwnProperty(r)) var s = c[r],
							q = "function" === typeof s ? q + ("\n\t" + r + ": " + s
							.toString() + ",") : "object" === typeof s ? q + ("\n\t" + r +
								": " + JSON.stringify(s) +
								",") : q + ("\n\t" + r + ': "' + s + '",');
					c = new Function(q + "\n}")
				}
				f.kX(b, c, h);
				f.PB(null, h);
				f.kT(function(a) {
					a ? d(a) : f.yP ? (a = f.PY(c, f.AN(f.WA, b), !0), f.yP.sendMessage(e
						.RR + ":injectCode", a,
						function(a, b) {
							a || f.PB(f.yP, h);
							d(a, b)
						})) : d("Worker msger missing!!")
				})
			},
			AN: function(a, b) {
				if (!a || !b) throw Error("clientId or ns missing!!");
				return a + "_" + b
			},
			sfa: function(a, b, c) {
				function d() {
					var b = Array.prototype.slice.call(arguments, 0);
					c.sendMessage.apply(c, [a].concat(b))
				}
				var e = this;
				if (!c) return function() {
					var a = b.apply(e.lo, arguments);
					e.FX || "untilCall" === e.w.lazy && e.jy();
					return a
				};
				d._proxy2Worker = !0;
				return d
			},
			Uca: function(a) {
				var b = {},
					c;
				for (c in a) a.hasOwnProperty(c) && this.kX(c, a[c], b);
				return b
			},
			kX: function(a, b, c) {
				b = b.call(null, !1);
				for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.mG && (c[
					d] = b[d]))
			},
			PB: function(a, b) {
				if (!b) this.lo || (this.lo = this.Uca(this.CG)), b = this.lo;
				else if (this.lo)
					for (var c in b) b.hasOwnProperty(c) && (this.lo[c] = b[c]);
				for (c in b)
					if (b.hasOwnProperty(c)) {
						var d = b[c];
						"function" === typeof d && (this[c] = this.sfa(c,
							d, a))
					} this.$ja = !!a
			},
			PY: function(a, b) {
				var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
					d = a.toString(),
					e, d = d.replace(/^function([^\(]*)\(/, function() {
						e = "_prep_h" + h++;
						return "function " + e + "("
					});
				return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !
					c + ") {\n\t\t\t\t\tthrow new Error('" + b +
					" already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c +
					" && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e +
					".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" +
					b +
					"'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" +
					b +
					"'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" +
					b + "'] = " + e +
					".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e +
					" = null;\n\t\t\t" : (console.error("No function match!!"), !1)
			},
			Wja: function(a) {
				var b = this.WA,
					c = [],
					d;
				for (d in this.CG)
					if (this.CG.hasOwnProperty(d)) {
						var f = this.PY(this.CG[d], this.AN(b, d));
						f && c.push(f)
					} b = this.w.libPolyfills || [];
				d = 0;
				for (f = b.length; d < f; d++) b[d] = "(" + b[d].toString() + ")(self);";
				var h = b.join(";\n") + ";\n" + c.join(";\n"),
					c = this.w.hostWorker,
					r = this;
				c && c !== r ? c.kT(function(b, c) {
					b ? a.call(r, b) : c.aAa.sendMessage(e.RR + ":injectCode", h, function(
						b) {
						b ? a.call(r, b) : a.call(r, null, c.xma)
					})
				}) : a.call(r, null, r.mla(h))
			},
			mla: function(b) {
				b = ["self._wkHandlers={};", b, "(" + d.toString() + ")(self)"].join("");
				var c;
				try {
					var e =
						a.a.createObjectURL(b);
					c = new Worker(e);
					setTimeout(function() {
						a.a.revokeObjectURL(e);
						e = null
					}, 5E3)
				} catch (f) {
					return
				}
				return c
			},
			Nda: function(b) {
				var c = 1,
					d = b.Qba,
					e = this,
					f = !!e.w.batchSend;
				return function(h) {
					var r = Array.prototype.slice.call(arguments, 1),
						s = "function" === typeof r[r.length - 1] ? r.pop() : null,
						u = e.WA,
						v = h.split(":"),
						w = e.mG;
					1 < v.length && (h = v[1], w = v[0]);
					r = {
						$z: a.a.dg(),
						fS: e.AN(u, w),
						BC: !!s,
						Oz: u + "_" + c++,
						kQ: h,
						gma: r
					};
					s && d.push({
						kQ: r.kQ,
						fS: r.fS,
						$z: r.$z,
						Oz: r.Oz,
						BC: s
					});
					f ? e.wca(b, r) : e.Nx(b, r)
				}
			},
			Nx: function(a, b) {
				if (this.Pp.length) {
					try {
						a.postMessage(b,
							this.Pp)
					} catch (c) {
						a.postMessage(b), console.error(c)
					}
					this.Pp.length = 0
				} else a.postMessage(b)
			},
			wca: function(b, c) {
				b.uO || (b.uO = []);
				b.uO.push(c);
				if (!b.p0) {
					var d = this;
					b.p0 = setTimeout(function() {
						b.p0 = null;
						var c = b.uO;
						c.length && (d.Nx(b, 1 === c.length ? c[0] : {
							$z: a.a.dg(),
							Swa: c
						}), c.length = 0)
					}, 0)
				}
			},
			dla: function(a) {
				var b = this;
				a.addEventListener("error", function(a) {
					console.error(a);
					b.PB(null)
				}, !1);
				e.Mxa(a)
			},
			sga: function(a, b) {
				var c = this;
				c.dla(a);
				var d = this.Nda(a);
				if (e.sda) b.call(c, null, {
					sendMessage: d
				});
				else {
					e.sda = !0;
					var f = [c.IY() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 *
						Math.random()), !1, function(a, e) {
						var h = !0;
						if (a || !e || e.length !== f.length - 2) h = !1;
						else
							for (var k = 0, v = e.length; k < v; k++)
								if (e[k] !== f[k + 1]) {
									h = !1;
									break
								} h ? b.call(c, null, {
							sendMessage: d
						}) : (console.error(a), b.call(c, "Self checkup failed!!"))
					}];
					d.apply(c, f)
				}
			}
		});
		a.IA = e
	})(g);
	(function() {
		if (!g.SL) {
			g.SL = {
				nba: {},
				BD: {}
			};
			var a = g.SL,
				b = g.SL.nba,
				c = g.a,
				d = g.r;
			b.start = function(b) {
				a.BD[b.id] = {
					K: b.K,
					time: {
						t5: c.dg()
					},
					Wma: function() {
						return c.dg() - this.time.t5
					}
				}
			};
			b.end = function(b) {
				var d = a.BD[b.id],
					e = d.time,
					d = c.bind(d.Wma, d),
					l = b.index,
					m = b.key;
				"function" !== typeof b.Mc && (b.Mc = function() {});
				if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d());
				else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d();
				else return b.Mc(Error("Duplicate Invoke"));
				b.Mc(null)
			};
			b.push = function(b) {
				var c = a.BD[b.id].time,
					d = b.key,
					e = b.Jg;
				"function" !== typeof b.Mc && (b.Mc = function() {});
				if (void 0 === c[d]) c[d] = e;
				else return b.Mc(Error("Duplicate Invoke"));
				b.Mc(null)
			};
			b.send = function(b) {
				var c = d.tc + "://webapi.amap.com/count?",
					k = g.extend(e({
						K: a.BD[b.id].K
					}), b.params || {}),
					l = g.a;
				b.params && b.params.rs && !b.params.type && (b = a.BD[b.id].time, delete b.t5, k = g
					.extend(k, b));
				b = [];
				for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]]
					.join("="));
				b.push("jl=" + (d.LJ ? 1 : 0));
				if (l.jk(window.performance, "performance") &&
					l.jk(window.performance.getEntriesByType, "function")) {
					var n = 0,
						p = ["webapi.amap.com", "jsapi-test.amap.test", "localhost"],
						q = ["/maps", "/css"];
					l.Tb(window.performance.getEntriesByType("resource"), function(a) {
						var b = void 0,
							c = void 0;
						a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
						a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
						b && c && l.ka(p, b) && l.ka(q, c) && (n += parseInt(a.responseEnd - a
							.startTime))
					});
					0 !== n && b.push("sd=" + n)
				}
				new g.jb.zb(c + b.join("&"))
			};
			var e = function(a) {
				var b = g.l;
				a = g.f.R3(a.K);
				return {
					type: "q",
					resolution: a.width + "*" + a.height,
					k: d.key,
					u: d.Tp,
					iw: b.Mf ? 1 : 0,
					cw: b.o2 ? 1 : 0,
					gc: b.SR,
					m: b.ba ? 1 : 0,
					cv: b.Wp ? 1 : 0,
					pf: b.Dz,
					dpr: window.devicePixelRatio,
					screenwidth: screen.width,
					scale: b.xL || 0,
					detect: b.ja ? 1 : 0,
					v: d.ln
				}
			}
		}
	})();
	(function() {
		if (!g.GL) {
			var a = g.a.mD({
				r: "Conf",
				extend: "extend",
				l: "Browser",
				ww: "uncodeCoords"
			});
			g.GL = function() {
				var b = new g.IA(function() {
					return {
						A: function() {
							this.ox = {
								ok: 0,
								mE: 0
							};
							this.Rk = {};
							this.qo = [];
							this.Op = {};
							this.Vj = {};
							this.Qt = 0;
							this.c_ = 500
						},
						xh: function(a, b) {
							var e = a.Md,
								f = a.Ie,
								h = "building" === a.ga[0];
							(f && e !== this.ox.mE && this.ox.mE || !f && !h && e !== this.ox
								.ok && this.ox.ok) && this.Kla(!!f);
							f ? this.ox.mE = e : h || (this.ox.ok = e);
							this.pta(a, b)
						},
						Kla: function(a) {
							if (a) this.fX();
							else if (!a && Object.keys(this.Rk).length)
								for (var b in this.Rk) this.Rk.hasOwnProperty(b) &&
									(a = this.Rk[b], a.Lt || a.abort())
						},
						Jya: function() {
							this.Qt > this.c_ && this.aU(Object.keys(this.Vj).slice(0, Math
								.floor(this.c_ / 2)))
						},
						aU: function(a) {
							for (var b = 0, e = a.length; b < e; b++) delete this.Vj[a[b]];
							this.Qt -= a.length
						},
						NC: function(a) {
							var b = a.ga;
							a = a.Ie;
							var e = new XMLHttpRequest;
							e.Mq = "";
							e.yE = [(new Date).getTime() + "_" + Math.random(), a ? 1 : 0, b
								.join("|")
							].join("-");
							return e
						},
						Y4: function(a, b, e) {
							var f = this,
								h = a.Ib,
								k = a.Ie,
								l = [],
								m = h.filter(function(a) {
									var b = f.Vj[a.key];
									if (b) {
										if (b.VZ) return !0;
										l.push(a.key)
									}
									return !1
								}),
								n = !1;
							if (m.length && ((n = m.length === h.length) || "function" !==
									typeof b || b(a, m), !k)) {
								var p = [];
								m.forEach(function(a) {
									a = a.key;
									p.push.apply(p, f.Vj[a]);
									delete f.Vj[a]
								});
								this.Qt -= m.length;
								this.Ts(this.extend({}, a, {
									dF: p,
									Md: a.Md,
									Cn: n
								}), e)
							}!k && l.length && this.aU(l);
							this.Jya();
							return n
						},
						pta: function(a, b) {
							function e(e, f) {
								var m = 2 < arguments.length && void 0 !== arguments[2] ?
									arguments[2] : !1;
								if (p.Rk[q.yE] || p.hga(q)) {
									var n = e.split("|");
									f && (n[0] = f + n[0]);
									var t = n,
										x = "";
									n[n.length - 1] && (x = n[n.length - 1], t = n.splice(0, n
										.length - 1));
									if (k)
										for (var n =
												0, y = t.length; n < y; n++) {
											if (t[n]) {
												var E = JSON.parse(t[n]);
												if (E.length) {
													var C = E[0].split("-").slice(0, -1).join(
														"/");
													p.Vj[C] ? p.Vj[C].push(E) : (p.Vj[C] = [E],
														p.Qt++);
													m && (p.Vj[C].VZ = !0)
												}
											}
										} else p.Ts(p.extend({}, a, {
											dF: t,
											Md: h,
											Cn: m,
											xS: !0
										}), b);
									return x
								}
								r || (p.Ll(l, b), r = !0)
							}
							var f = this,
								h = a.Md,
								k = a.Ie,
								l = a.Ib,
								m = a.url;
							if (!this.Y4(a, function(a, b) {
									var c = a.Ib,
										d = a.url,
										e = d.match(/&t=([^&]+)/)[1].split(";");
									b.reverse().forEach(function(a) {
										a = c.indexOf(a); - 1 !== a && e.splice(a,
											1)
									});
									a.url = d.replace(/&t=[^&]+/, "&t=" + e.join(";"))
								}, b)) {
								if (this.bC() &&
									(this.fX(), k)) {
									this.Ll(l, b);
									return
								}
								var n = 0,
									p = this,
									q = this.NC(a);
								k ? this.qo.push(q) : (this.Rk[q.yE] = q, q.Ib = l, q.Mc = b);
								var r = !1;
								q.onreadystatechange = function() {
									if (4 === q.readyState && 0 === q.status) q.Lt || (q
										.Lt = !0, f.Ll(l, b), q.onreadystatechange =
										null, k ? f.D0(q) : delete f.Rk[q.yE]), q = null;
									else if (!q.Lt)
										if (3 === q.readyState) {
											var h = q.responseText.substring(n);
											q.Mq = e(h, q.Mq);
											n = q.responseText.length
										} else 4 === q.readyState && (h = q.responseText
											.substring(n), a.Ci && (h += "|"), e(h, q
												.Mq, !0), q.Mq = "", k ? f.D0(q) :
											delete f.Rk[q.yE],
											q = null)
								};
								q.onerror = function() {};
								q.open("GET", m, !0);
								q.send();
								k && (q.S9 = l.map(function(a) {
									return a.key
								}))
							}
						},
						$D: function(a) {
							function b(d, p, r) {
								var s = [r, d, p].join("/");
								d = e.filter(function(a) {
									return a.key === s
								})[0];
								18 < k && !n && (s += "/" + k);
								if (d && "loaded" !== d.status && -1 !== m.indexOf(t))
									if ("limg" === t) p = h[1], d.qd = p, "string" === typeof p
										.b && (p.b = w.aB(p.b)), r = "", (r = "object" ===
											typeof p.u ? p.u.url : p.u) && (p.u = {
											url: r,
											Bk: "limg-" + d.key + "-" + f
										});
									else {
										p = {
											Hg: d.ta,
											Oi: s,
											Oa: h,
											Ed: t,
											hy: a.Cu,
											FD: "building" === t,
											Bi: "poilabel" === t || "roadlabel" ===
												t || "building" === t && q
										};
										if ("poilabel" === t || "roadlabel" === t) p.qd = d.qd;
										t === m[m.length - 1] && (d.status = "loaded");
										l.push(p)
									}
							}
							var e = a.Ib,
								f = a.KS,
								h = a.PC,
								k = a.Md,
								l = a.Oc,
								m = a.ga,
								n = a.Mf,
								p = a.VR,
								q = a.Ae,
								r = h[0].split("-"),
								s = parseInt(r[1]),
								u = parseInt(r[2]),
								v = parseInt(r[0]),
								w = this,
								t = r[3],
								r = Math.pow(2, v);
							10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
							b(s, u, v)
						},
						D0: function(a) {
							for (var b = this.qo.length - 1; 0 <= b; b--) this.qo[b] === a &&
								this.qo.splice(b, 1)
						},
						hga: function(a) {
							for (var b = 0, e = this.qo.length; b < e; b++)
								if (this.qo[b] === a) return !0;
							return !1
						},
						bC: function() {
							return Object.keys(this.Rk).length ? !0 : !1
						},
						fX: function() {
							if (this.qo.length) {
								for (var a = this.qo.length - 1; 0 <= a; a--) {
									var b = this.qo[a];
									b.Lt || b.abort();
									b.S9 && this.aU(b.S9)
								}
								this.qo.length = 0
							}
						},
						Ll: function(a, b) {
							b(null, {
								Ib: a,
								O5: !0,
								disabled: this.disabled
							}, {
								cl: !0
							})
						}
					}
				}, {
					batchSend: !1
				});
				b.wf(null, new Function("\n     return {\n      " + a.Conf + ": " + JSON.stringify(g.r) +
					",\n      " + a.extend + ": " + g.extend.toString() + ",\n      " + a.Browser +
					": " + JSON.stringify(g.l) + ",\n      " + a.uncodeCoords + ": " +
					g.a.ww.toString() + "\n     }"));
				return b
			}
		}
	})();
	g.f = {
		CLASS_NAME: "DomUtil",
		get: function(a) {
			return "string" === typeof a ? document.getElementById(a) : a
		},
		HD: function(a, b, c) {
			return a.parentNode == b ? !0 : a.parentNode && a.parentNode !== document.body && !g.f.zn(a
				.parentNode, c) ? g.f.HD(a.parentNode, b) : !1
		},
		Ko: function(a) {
			if (!a) return [0, 0];
			var b = a.offsetWidth,
				c = a.offsetHeight;
			b && c || !a.childNodes[0] || (b = b || a.childNodes[0].offsetWidth, c = c || a.childNodes[0]
				.offsetHeight);
			window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0]
				.scrollHeight));
			return [b, c]
		},
		IFa: function(a, b) {
			var c = document.head || document.getElementsByTagName("head")[0];
			if (c) {
				var d = document.createElement("link");
				d.setAttribute("rel", "stylesheet");
				d.setAttribute("type", "text/css");
				d.setAttribute("href", a);
				b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
			} else document.write("<link rel='stylesheet' href='" + a + "'/>")
		},
		Zc: function(a, b) {
			var c = a.style[b];
			!c && a.currentStyle && (c = a.currentStyle[b]);
			c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a,
				null)) ? c[b] : null);
			c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
			c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
			return "auto" === c ? null : c
		},
		lJ: function(a) {
			if (a) return new g.xd(a.clientWidth || document.body.clientWidth, a.clientHeight || (g.l.Ds ?
				"CSS1Compat" === document.compatMode ? document.documentElement.clientHeight :
				document.body.clientHeight : document.body.clientHeight), !0)
		},
		R3: function(a) {
			return new g.xd(a.clientWidth, a.clientHeight)
		},
		QR: function(a) {
			var b = 0,
				c = 0,
				d = a,
				e = document.body,
				f = document.documentElement,
				h, k = g.l.rv;
			do {
				b += d.offsetTop || 0;
				c += d.offsetLeft || 0;
				b += parseInt(g.f.Zc(d, "borderTopWidth"), 10) || 0;
				c += parseInt(g.f.Zc(d, "borderLeftWidth"), 10) || 0;
				h = g.f.Zc(d, "position");
				if (d.offsetParent === e && "absolute" === h) break;
				if ("fixed" === h) {
					b += e.scrollTop || f.scrollTop || 0;
					c += e.scrollLeft || f.scrollLeft || 0;
					break
				}
				d = d.offsetParent
			} while (d);
			d = a;
			do {
				if (d === e) break;
				b -= d.scrollTop || 0;
				c -= d.scrollLeft || 0;
				g.f.Woa() || !g.l.A$ && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== g.f.Zc(
						d, "overflow-y") && "hidden" !== g.f.Zc(d, "overflow") &&
					(c += 17));
				d = d.parentNode
			} while (d);
			return new g.H(c, b)
		},
		Woa: function() {
			g.f.gea || (g.f.gea = !0, g.f.fea = "ltr" === g.f.Zc(document.body, "direction"));
			return g.f.fea
		},
		create: function(a, b, c, d) {
			a = document.createElement(a);
			c && (a.className = c);
			b && (d && "before" === d ? b.insertBefore(a, b.firstChild) : b.appendChild(a));
			return a
		},
		a3: function() {
			document.selection && document.selection.empty && document.selection.empty();
			this.cja || (this.cja = document.onselectstart, document.onselectstart = g.a.w3)
		},
		n3: function() {},
		Cya: function(a,
			b, c) {
			c ? this.Wa(a, b) : this.eb(a, b)
		},
		zn: function(a, b) {
			if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
		},
		Wa: function(a, b) {
			a && b && (a.classList && a.classList.add ? a.classList.add(b) : g.f.zn(a, b) || (a.className +=
				(a.className ? " " : "") + b))
		},
		rxa: function(a, b) {
			a && (a.className = b || "")
		},
		eb: function(a, b) {
			function c(a, c) {
				return c === b ? "" : a
			}
			a && b && (a.classList && a.classList.remove ? a.classList.remove(b) : a.className = a.className
				.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
		},
		o4: function(a,
			b) {
			return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ?
				"-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" :
				"filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
		},
		Wq: function(a, b) {
			if (a.style)
				if ("opacity" in a.style) a.style.opacity = b;
				else if ("filter" in a.style) {
				var c = Math.round(100 * b);
				a.style.filter = "";
				100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c +
					")")
			}
		},
		XU: function(a) {
			for (var b = document.documentElement.style, c = 0; c < a.length; c +=
				1)
				if (a[c] in b) return a[c];
			return !1
		},
		F4: function(a) {
			var b = g.l.BL;
			return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
		},
		GEa: function(a, b) {
			return g.f.F4(b.add(b.Nd(-1 * a))) + (" scale(" + a + ") ")
		},
		Z8: function(a, b, c) {
			a.aj = b;
			!c && g.l.RH ? (b = g.f.F4(b), c = a.style[g.f.pg].split("rotate"), 1 < c.length ? (c[0] = b, a
				.style[g.f.pg] = c.join("rotate")) : a.style[g.f.pg] = b, g.l.F6 && (a.style
				.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y +
				"px")
		},
		Ud: function(a) {
			a.aj || (a.aj = a.style.left ?
				new g.H(parseInt(a.style.left), parseInt(a.style.top)) : new g.H(0, 0));
			return a.aj
		},
		uHa: function(a, b) {
			a = a instanceof Array ? a : [a];
			for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
		},
		S8: function(a, b) {
			";" !== b[b.length - 1] && (b += ";");
			return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText =
				b, !0) : !1
		},
		$a: function(a, b) {
			a = a instanceof Array ? a : [a];
			for (var c = 0; c < a.length; c += 1)
				for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
			return this
		},
		Iz: function(a) {
			for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
		},
		remove: function(a) {
			a && a.parentNode && a.parentNode.removeChild(a)
		},
		rotate: function(a, b, c) {
			var d = g.f.pg;
			c = c || {
				x: a.clientWidth / 2,
				y: a.clientHeight / 2
			};
			d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[g.f.nt[d] + "-origin"] = c.x + "px " +
				c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style
				.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a
					.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y,
					a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
		},
		B4: function(a, b, c) {
			var d = g.f.pg;
			c = c || {
				x: a.clientWidth / 2,
				y: a.clientHeight / 2
			};
			return d ? g.f.nt[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (g.f.nt[d] + "-origin:" +
				c.x + "px " + c.y + "px") : ""
		},
		xm: function(a, b, c) {
			a.width = b;
			a.height = c
		},
		getElementsByClassName: function(a, b, c) {
			b = b || "*";
			c = c || document;
			if (c.getElementsByClassName) return c.getElementsByClassName(a);
			b = c.getElementsByTagName(b);
			a = RegExp("(^|\\s)" + a + "(\\s|$)");
			c = [];
			for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
			return c
		},
		fillText: function(a, b) {
			if (a) return void 0 !== a.textContent ?
				a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
		}
	};
	(function() {
		var a = g.f.XU(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
			b;
		g.extend(g.f, {
			a3: function() {
				g.F.h(window, "selectstart", g.F.preventDefault);
				if (a) {
					var c = document.documentElement.style;
					"none" !== c[a] && (b = c[a], c[a] = "none")
				}
			},
			n3: function() {
				g.F.G(window, "selectstart", g.F.preventDefault);
				a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
			},
			Ooa: function() {
				g.F.h(window, "dragstart", g.F.preventDefault)
			},
			xpa: function() {
				g.F.G(window, "dragstart", g.F.preventDefault)
			}
		})
	})();
	g.f.pg = g.f.XU(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
	g.f.nt = {
		transform: "transform",
		WebkitTransform: "-webkit-transform",
		OTransform: "-o-transform",
		MozTransform: "-moz-transform",
		msTransform: "-ms-transform"
	};
	g.f.JF = g.f.XU(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
	g.f.aBa = "webkitTransition" === g.f.JF || "OTransition" === g.f.JF ? g.f.JF + "End" : "transitionend";
	g.F = {
		h: function(a, b, c, d) {
			function e(b) {
				b = b || window.event;
				b.target = b.target || b.srcElement;
				return c.call(d || a, b, k)
			}
			var f = g.a.yb(a) + "_" + g.a.yb(c) + "_" + g.a.yb(d || a),
				h = b + f;
			if (a[h]) return this;
			var k = b;
			g.l.aR && "mousewheel" === b && (b = "DOMMouseScroll");
			if (g.l.Ds && ("mouseover" === b || "mouseout" === b)) {
				var l = e;
				b = "mouseover" === b ? "mouseenter" : "mouseleave";
				e = function(a) {
					l(a)
				}
			}
			if (g.l.O7 && 0 === b.indexOf("touch")) return a[h] = e, this.Sla(a, b, e, f);
			g.l.Tf && "dblclick" === b && this.Qla && this.Qla(a, e, f);
			"addEventListener" in a ? a.addEventListener(b,
				e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
			a[h] = e;
			return this
		},
		Cj: function(a, b, c, d) {
			var e = this;
			this.h(a, b, function h(k) {
				e.G(a, b, h, d);
				return c.call(d || a, k || window.event, b)
			}, d)
		},
		G: function(a, b, c, d) {
			c = g.a.yb(a) + "_" + g.a.yb(c) + "_" + g.a.yb(d || a);
			d = b + c;
			var e = a[d];
			g.l.aR && "mousewheel" === b && (b = "DOMMouseScroll");
			!g.l.Ds || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" :
				"mouseleave");
			g.l.O7 && -1 < b.indexOf("touch") ? this.ywa(a, b, c) : g.l.Tf && "dblclick" === b && this.uwa ?
				this.uwa(a, c) :
				"removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 ===
				b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
			a[d] = void 0;
			return this
		},
		AHa: function(a, b) {
			var c = document.createEvent("MouseEvents");
			c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !
				1, 0, null);
			b.target.dispatchEvent(c)
		},
		Xla: function(a) {
			a.$e = "info";
			g.l.Ue && g.F.stopPropagation(a)
		},
		stopPropagation: function(a) {
			a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
			return this
		},
		aya: function(a) {
			var b = g.F.Xla;
			g.l.Tf && (g.F.h(a, "touchstart", b, this), g.F.h(a, "touchmove", b, this), g.F.h(a, "touchend",
				b, this));
			g.l.ba || (g.F.h(a, "mousedown", b, this), g.F.h(a, "mouseup", b, this), g.F.h(a, "mousemove",
				b, this), g.F.h(a, "mousewheel", b, this));
			g.l.ET && (g.F.h(a, "pointerdown", b, this), g.F.h(a, "pointerup", b, this), g.F.h(a,
				"pointermove", b, this));
			g.l.H6 && (g.F.h(a, "MSPointerDown", b, this), g.F.h(a, "MSPointerUp", b, this), g.F.h(a,
				"MSPointerMove", b, this))
		},
		preventDefault: function(a) {
			a.preventDefault ? a.preventDefault() :
				a.returnValue = !1;
			return this
		},
		stop: function(a) {
			return g.F.preventDefault(a).stopPropagation(a)
		},
		qxa: function(a) {
			return a && a.getBoundingClientRect ? (a.qM = a.getBoundingClientRect(), a.RW = [a.clientLeft, a
				.clientTop
			], !0) : !1
		},
		rza: function(a) {
			a.qM && (a.qM = null, a.RW = null)
		},
		Mpa: function(a, b) {
			var c = b.qM || b.getBoundingClientRect(),
				d = b.RW || [b.clientLeft, b.clientTop];
			return new g.H(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
		},
		km: function(a, b) {
			if (b && b.getBoundingClientRect) return this.Mpa(a, b);
			var c = document.body,
				d = document.documentElement,
				c = new g.H(g.l.Tf ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), g.l.Tf ? a
					.pageY : a.clientY + (c.scrollTop || d.scrollTop));
			return b ? c.ab(g.f.QR(b)) : c
		},
		L5: function(a) {
			return 1 === a.which || 0 === a.button || 1 === a.button
		}
	};
	g.extend(g.F, {
		tO: [],
		g_: !1,
		Sla: function(a, b, c, d) {
			switch (b) {
				case "touchstart":
					return this.Vla(a, b, c, d);
				case "touchend":
					return this.Tla(a, b, c, d);
				case "touchmove":
					return this.Ula(a, b, c, d)
			}
		},
		Mo: function(a) {
			if (g.l.ET) return a;
			switch (a) {
				case "pointerdown":
					return "MSPointerDown";
				case "pointerup":
					return "MSPointerUp";
				case "pointercancel":
					return "MSPointerCancel";
				case "pointermove":
					return "MSPointerMove"
			}
		},
		Vla: function(a, b, c, d) {
			function e(a) {
				for (var b = !1, d = 0; d < f.length; d += 1)
					if (f[d].pointerId === a.pointerId) {
						b = !0;
						break
					} b || f.push(a);
				a.touches = f.slice();
				a.changedTouches = [a];
				c(a)
			}
			var f = this.tO;
			a["_amap_touchstart" + d] = e;
			a.addEventListener(this.Mo("pointerdown"), e, !1);
			this.g_ || (a = function(a) {
					for (var b = 0; b < f.length; b += 1)
						if (f[b].pointerId === a.pointerId) {
							f.splice(b, 1);
							break
						}
				}, document.documentElement.addEventListener(this.Mo("pointerup"), a, !1), document
				.documentElement.addEventListener(this.Mo("pointercancel"), a, !1), this.g_ = !0);
			return this
		},
		Ula: function(a, b, c, d) {
			function e(a) {
				if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE ||
					0 !== a.buttons) {
					for (var b = 0; b < f.length; b += 1)
						if (f[b].pointerId === a.pointerId) {
							f[b] = a;
							break
						} a.touches = f.slice();
					a.changedTouches = [a];
					c(a)
				}
			}
			var f = this.tO;
			a["_amap_touchmove" + d] = e;
			a.addEventListener(this.Mo("pointermove"), e, !1);
			return this
		},
		Tla: function(a, b, c, d) {
			function e(a) {
				for (var b = 0; b < f.length; b += 1)
					if (f[b].pointerId === a.pointerId) {
						f.splice(b, 1);
						break
					} a.touches = f.slice();
				a.changedTouches = [a];
				c(a)
			}
			var f = this.tO;
			a["_amap_touchend" + d] = e;
			a.addEventListener(this.Mo("pointerup"), e, !1);
			a.addEventListener(this.Mo("pointercancel"),
				e, !1);
			return this
		},
		ywa: function(a, b, c) {
			c = a["_amap_" + b + c];
			switch (b) {
				case "touchstart":
					a.removeEventListener(this.Mo("pointerdown"), c, !1);
					break;
				case "touchmove":
					a.removeEventListener(this.Mo("pointermove"), c, !1);
					break;
				case "touchend":
					a.removeEventListener(this.Mo("pointerup"), c, !1), a.removeEventListener(this.Mo(
						"pointercancel"), c, !1)
			}
			return this
		}
	});
	(function() {
		function a(a) {
			var b = a.target || a.srcElement;
			b.bX && f(b.bX);
			b.bX = e(function() {
				var c = b.Ap;
				if (c && c.zp)
					for (var d = 0; d < c.zp.length; d += 1) c.zp[d].call(c, a)
			})
		}

		function b() {
			var b = this.contentDocument.defaultView;
			b.Ap = this.$ba;
			b.addEventListener("resize", a);
			a.call(b, {
				target: b
			})
		}
		var c = document.attachEvent,
			d = navigator.userAgent.match(/(Trident|Edge)/),
			e = g.a.Wc,
			f = g.a.ri;
		g.extend(g.F, {
			Wla: function(e, f) {
				if (!e.zp)
					if (e.zp = [], c) e.Ap = e, e.attachEvent("onresize", a);
					else {
						"static" === window.getComputedStyle(e).position &&
							(e.style.position = "relative");
						var l = e.Ap = document.createElement("object");
						l.setAttribute("style",
							"display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"
							);
						l.$ba = e;
						l.onload = b;
						l.type = "text/html";
						d && e.appendChild(l);
						l.data = "about:blank";
						d || e.appendChild(l)
					} e.zp.push(f)
			},
			QGa: function(b, d) {
				b.zp.splice(b.zp.indexOf(d), 1);
				b.zp.length || (c ? b.detachEvent("onresize", a) : (b.Ap.contentDocument.defaultView
					.removeEventListener("resize",
						a), b.Ap = !b.removeChild(b.Ap)))
			},
			Bna: function(a) {
				a.zp = null;
				if (a.Ap) {
					var b = a.Ap;
					b.parentNode === a && b.parentNode.removeChild(b);
					a.Ap = null
				}
			}
		})
	})();
	g.tb = {
		jua: g.r.Gb + "/maps",
		Qu: g.da.Qu,
		WS: 0,
		Cz: [],
		Lu: {},
		Fg: function(a, b) {
			function c() {
				d += 1;
				d === e.length && b && b()
			}
			a.length || b();
			for (var d = 0, e = [], f = 0; f < a.length; f += 1) {
				var h = this.Qu[a[f]];
				if (h)
					for (var k = 0; k < h.length; k += 1) e.push(h[k]);
				e.push(a[f])
			}
			for (f = 0; f < e.length; f += 1) this.XQ(e[f], c)
		},
		ID: function(a) {
			for (var b = 0; b < a.length; b += 1)
				if (1 !== this.QC(a[b]).status) return !1;
			return !0
		},
		XQ: function(a, b) {
			var c = this.QC(a);
			if (1 === c.status) b && b();
			else {
				b && c.ky.push(b);
				try {
					if (g.l.Fv && window.localStorage) {
						var d = window.localStorage["_AMap_" +
							a];
						d && (d = JSON.parse(d), d.version === g.r.Dk ? (window._jsload_(a, d.script, !0), d
								.css && window._cssload_(a, d.css, !0)) : window.localStorage
							.removeItem("_AMap_" + a))
					}
				} catch (e) {}
				if (0 === c.status) {
					this.bwa(a);
					var f = this;
					f.WS || (f.WS = 1, window.setTimeout(function() {
						f.WS = 0;
						var a = f.jua + "/modules?v=" + g.r.ln + "&key=" + g.r.key + "&m=" + f
							.Cz.join(",") + "&vrs=" + g.r.Dk;
						g.tb.Ot(f.Cz.join(","));
						f.Cz = [];
						c.SK = f.Ata(a)
					}, 1));
					c.status = -1
				}
			}
		},
		Ot: function(a) {
			a = g.r.Zd + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + g.r.key, "m=" + a].join("&");
			new g.jb.zb(a, {
				callback: "callback"
			})
		},
		load: function(a, b) {
			var c = this.Qu[a];
			if (c) {
				for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
				d.push(a);
				for (var f = 0, c = function() {
						f += 1;
						f === d.length && b && b()
					}, e = 0; e < d.length; e += 1) this.XQ(d[e], c)
			} else this.XQ(a, b)
		},
		bwa: function(a) {
			for (var b = 0; b < this.Cz.length; b += 1)
				if (this.Cz[b] === a) return;
			this.Cz.push(a)
		},
		Nn: function(a, b) {
			var c = this.QC(a);
			try {
				eval(b)
			} catch (d) {
				return
			}
			c.status = 1;
			for (var e = 0, f = c.ky.length; e < f; e += 1) c.ky[e]();
			c.ky = []
		},
		pd: function(a, b) {
			var c = this;
			c.timeout = setTimeout(function() {
				1 !==
					c.Lu[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
			}, 5E3)
		},
		QC: function(a) {
			this.Lu[a] || (this.Lu[a] = {}, this.Lu[a].status = 0, this.Lu[a].ky = []);
			return this.Lu[a]
		},
		remove: function(a) {
			this.Lu[a] = null
		},
		Ata: function(a) {
			g.r.mode && (a += "&mode=" + g.r.mode);
			var b = document.createElement("script");
			b.charset = "utf-8";
			a && 0 === a.indexOf(g.r.Gb) && (b.crossOrigin = "Anonymous");
			b.src = a;
			document.body.appendChild(b);
			return b
		}
	};
	window._jsload_ = function(a, b, c) {
		var d = g.tb.QC(a);
		d.SK && 0 <= g.a.indexOf(document.body.childNodes, d.SK) && document.body.removeChild(d.SK);
		d.SK = null;
		try {
			if (!c && window.localStorage && b && "" !== b && g.l.Fv) {
				var e = window.localStorage["_AMap_" + a],
					e = e || "{}",
					e = JSON.parse(e);
				e.version !== g.r.Dk || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
					version: g.r.Dk,
					script: b
				})) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
					version: g.r.Dk,
					script: b,
					css: e.css
				}))
			}
		} catch (f) {}
		g.tb.Nn(a, b)
	};
	window._cssload_ = function(a, b, c) {
		try {
			!c && window.localStorage && b && "" !== b && g.l.Fv && window.localStorage.setItem("_AMap_" + a,
				JSON.stringify({
					css: b,
					version: g.r.Dk
				}))
		} catch (d) {}
		var e = document.createElement("style");
		e.type = "text/css"; - 1 === g.r.Gb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, g
			.r.Gb.split("://")[1]));
		"https" === g.r.tc && (b = b.replace(/http:/gi, "https:"));
		e.styleSheet ? (a = function() {
			try {
				e.styleSheet.cssText = b
			} catch (a) {}
		}, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
		a = document.head || document.getElementsByTagName("head")[0];
		2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
	};
	(function(a) {
		var b = g.l;
		if (!g.indexedDB && b.Ni) {
			var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
				d = a.IDBKeyRange || a.nIa || a.VFa || a.UFa;
			if (c) {
				var e = g.a,
					f = null;
				a = "amap-jsapi" + (a.BAa ? "-debug" : "");
				var h = g.extend({}, g.va),
					k;
				try {
					k = c.open(a), k.onsuccess = function() {
						f = this.result;
						h.q("dbReady", {
							status: "success"
						})
					}, k.onerror = function() {
						h.q("dbReady", {
							status: "error"
						})
					}, k.onblocked = function() {
						h.q("dbReady", {
							status: "blocked"
						})
					}, k.onupgradeneeded = function(a) {
						a.currentTarget.result.createObjectStore("tile", {
							keyPath: "tileKey"
						})
					}
				} catch (l) {
					b.Ni = !1
				} finally {
					if (!b.Ni) return
				}
				var b = function(a) {
						return function() {
							try {
								return a.apply(this, arguments)
							} catch (b) {
								var c = arguments[arguments.length - 1];
								"function" === typeof c && setTimeout(function() {
									c({
										code: 4,
										HI: b
									})
								}, 1)
							}
						}
					},
					m = b(function(a, b) {
						return null === f ? (setTimeout(function() {
							b && b({
								code: 3
							})
						}, 1), null) : f.transaction("tile", a).objectStore("tile")
					});
				g.indexedDB = {
					kC: function(a, b) {
						f ? "function" === typeof a && a() : h.h("dbReady", function(c) {
							"success" === c.status ? "function" === typeof a &&
								a() : "function" === typeof b && b({
									code: 3,
									status: status
								})
						})
					},
					count: b(function(a) {
						var b = this,
							c = arguments;
						this.kC(function() {
							b.Ot.apply(b, c)
						}, a)
					}),
					Ot: b(function(a) {
						var b = m("readonly", a).count();
						b.onsuccess = function() {
							a(null, b.result)
						};
						b.onerror = function() {
							a({
								code: 7
							})
						}
					}),
					get: b(function(a, b, c) {
						var d = this,
							e = setTimeout(function() {
								e && (e = null, c && c({
									code: 7
								}))
							}, b.timeout || 1E3);
						this.kC(function() {
							d.Iea.call(d, a, function(a, b) {
								e && (clearTimeout(e), e = null, c(a, b))
							})
						}, c)
					}),
					Iea: b(function(a, b) {
						var c = m("readonly", b);
						if (e.isArray(a)) {
							var d,
								f;
							(function() {
								function e(b) {
									var f = c.get(a[b]);
									f.onsuccess = function(a) {
										a.target.result && (d[b] = a.target.result);
										h()
									};
									f.onerror = h
								}

								function h() {
									f++;
									f === a.length && b(null, d)
								}
								d = [];
								for (var k = f = 0, l = a.length; k < l; k++) e(k)
							})()
						} else {
							var h = c.get(a);
							h.onsuccess = function(a) {
								b && b(null, a.target.result)
							};
							h.onerror = function() {
								b && b({
									code: 1
								})
							}
						}
					}),
					add: b(function(a, b) {
						var c = this,
							d = arguments;
						this.kC(function() {
							c.dca.apply(c, d)
						}, b)
					}),
					dca: b(function(a, b) {
						function c() {
							0 === --f && b(null)
						}
						e.isArray(a) || (a = [a]);
						var d = a.length,
							f =
							d,
							h = 0,
							k = Math.ceil(d / 5),
							l = setInterval(function() {
								if (h++ < k) {
									var e = 5 * h;
									e > d && (e = d);
									for (var f = m("readwrite", b), s = 5 * (h - 1); s <
										e; s++) {
										var E = f.put(a[s]);
										E.onsuccess = E.onerror = c
									}
								} else clearInterval(l)
							}, 32)
					}),
					remove: b(function(a, b) {
						var c = this,
							d = arguments;
						this.kC(function() {
							c.pka.apply(c, d)
						}, b)
					}),
					pka: b(function(a, b) {
						var c = m("readwrite", b);
						e.isArray(a) || (a = [a]);
						a = a.sort();
						c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
							if (c = c.target.result) {
								if (e.ka(c.value.tileKey, a)) c["delete"]();
								for (var d = -1,
										f = 0, h = a.length; f < h; f++)
									if (a[f] > c.value.tileKey) {
										d = f;
										break
									} c["continue"](a[d])
							} else b && b(null)
						}
					}),
					clear: b(function(a) {
						var b = this,
							c = arguments;
						this.kC(function() {
							b.bG.apply(b, c)
						}, a)
					}),
					bG: b(function(a) {
						var b = m("readwrite", a).clear();
						b.onsuccess = function() {
							a && a(null)
						};
						b.onerror = function() {
							a && a({
								code: 2
							})
						}
					})
				}
			} else b.Ni = !1
		}
	})(window);
	(function() {
		function a(a) {
			u.data.keys = u.data.keys.filter(function(b) {
				return !r.ka(a, b)
			}).concat(a)
		}

		function b(a) {
			var b = g.r.Dk + "|" + a.Oi.replace(/\//g, ",") + "|" + (a.Mf ? "w" : "v") + "|",
				c;
			c = a.ja;
			var d = a.Ae;
			c = [c ? 1 : 0, q.ba ? 1 : 0, d ? 1 : 0].join();
			return b + c + "|" + m(a.url)
		}

		function c() {
			u.data.keys.length >= u.UL && d()
		}

		function d() {
			var a = u.data.keys.length,
				b = Math.floor(a / 2);
			a > u.UL && (b = Math.floor(a - u.UL / 2));
			a = u.data.keys.slice(0, b);
			u.data.keys = u.data.keys.slice(b + 1);
			s.remove(a, function(a) {
				a && 3 === a.code && (q.Ni = !1)
			})
		}

		function e() {
			var a =
				0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.Qs;
			k();
			w.setItem(u.key, u.data, !0);
			f(a)
		}

		function f(a) {
			q.Ni && s && s.clear(function(b) {
				b && 3 === b.code && (q.Ni = !1);
				a()
			})
		}

		function h() {
			k();
			var a = w.getItem(u.key, !0);
			a && (a.vdataVer === u.data.vdataVer && a.apiVer === u.data.apiVer ? u.data = a : e())
		}

		function k() {
			u.data = {
				vdataVer: q.lf,
				apiVer: g.r.Dk,
				keys: [],
				config: {},
				fsTiles: {}
			};
			u.ot = {}
		}

		function l(a) {
			a && (u.data.vdataVer = a, q.lf = a)
		}

		function m(a) {
			var b = "limg";
			/flds=([^&]+)/.test(a) && (b = RegExp.$1);
			return b
		}

		function n(a) {
			if ("object" ===
				typeof a && null !== a) {
				var b = [];
				if (r.isArray(a))
					if (Object.keys(a).length == a.length) b = a.map(function(a) {
						return n(a)
					});
					else {
						b.push("__arrayObject");
						var c = {},
							d;
						for (d in a)(0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = n(
							a[d]));
						b.push(c);
						b.push(a.map(function(a) {
							return n(a)
						}))
					}
				else if (r.jk(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(
					a));
				else if (r.jk(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a));
				else
					for (d in b = {}, a) a.hasOwnProperty(d) &&
						(b[d] = n(a[d]));
				return b
			}
			return a
		}

		function p(a) {
			if ("object" === typeof a && null !== a) {
				var b = {};
				if (r.isArray(a))
					if ("__Float32Array" === a[0]) b = new Float32Array(a[1]);
					else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]);
				else if ("__arrayObject" === a[0]) {
					b = p(a[2]);
					a = a[1];
					for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
				} else b = a.map(function(a) {
					return p(a)
				});
				else
					for (c in a) a.hasOwnProperty(c) && (b[c] = p(a[c]));
				return b
			}
			return a
		}
		var q = g.l,
			r = g.a;
		if (!g.Nj && q.Ni) {
			var s = g.indexedDB,
				u = {
					UL: 1E3,
					key: "_AMap_data.tileKeys"
				},
				v = [],
				w = {
					getItem: function(a, b) {
						var c = localStorage.getItem(a);
						if (c && b) {
							var d;
							try {
								d = JSON.parse(c)
							} catch (e) {
								d = null
							}
							c = d
						}
						return c
					},
					setItem: function(a, b, c) {
						var d = b;
						c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.fqa)
							.length && (b.fqa = {}, d = JSON.stringify(b)));
						try {
							localStorage.setItem(a, d)
						} catch (f) {
							e()
						}
					}
				};
			g.Nj = {
				clear: e,
				get: function(c, d) {
					function f(a) {
						var b = {
							hS: l,
							E6: G,
							RFa: w,
							Tg: u.data.config
						};
						a && B.length && (/\|limg/.test(B[0]) ? b.k6 = a.map(function(a) {
							return JSON.parse(a.data)
						}).filter(function(a) {
							return a &&
								a.key
						}) : b.Oc = h(a));
						d && d(null, b);
						w.length && (l = [], G = [])
					}

					function h(a) {
						var b = [];
						m(c.url).split(",").forEach(function(c) {
							a.forEach(function(a) {
								if (a = JSON.parse(a.data[c])) {
									var d = a.Hg;
									a.Hg = new g.or(d.z, d.x, d.y);
									a.Hg.T = d.T;
									b.push(a)
								}
							})
						});
						return b
					}
					var k = "FS" === c.type;
					if (!q.Fv || !(k || q.Ni && 0 !== u.data.keys.length)) return d({
						code: 1
					});
					var l = [],
						w = [],
						B = [],
						G = [],
						H = [];
					c.uya.forEach(function(a) {
						var d = !1,
							e = b({
								Oi: a.key,
								url: c.url,
								Mf: c.Mf,
								ja: c.o.ja,
								Ae: c.Ae
							});
						k && (v.push(e), u.data.fsTiles[e] && (l.push(a), B.push(e), H.push({
							data: p(u.data.fsTiles[e]),
							tileKey: e
						}), d = !0));
						d || (q.Ni && r.ka(u.data.keys, e) ? (B.push(e), w.push(a)) : G.push(a))
					});
					if (k && 0 === w.length || 0 === B.length) return f(H);
					k && H.length && H.forEach(function(a) {
						a = r.indexOf(B, a.tileKey);
						B.splice(a, 1)
					});
					s.get(B, {
						timeout: c.timeout || 1E3
					}, function(b, c) {
						if (b || c.length !== B.length) b && 3 === b.code ? q.Ni = !1 : e(), G =
							w, w = [], f(null);
						else {
							if (k)
								for (var d = c.length - 1; 0 <= d; d--) {
									var h = c[d];
									h && h.data ? u.data.fsTiles[h.tileKey] = n(h.data) : G
										.push(w.splice(d, 1)[0])
								}
							l = w;
							w = [];
							f(c);
							a(B)
						}
					});
					(G.length || w.length) && f(H)
				},
				xw: function(a) {
					a.Ib.forEach(function(c) {
						c =
							b({
								Oi: c.key,
								url: a.url,
								Mf: a.Mf,
								ja: a.o.ja,
								Ae: a.Ae
							});
						u.ot[c] && delete u.ot[c]
					})
				},
				set: function(a, c) {
					a.lf && a.lf !== u.data.vdataVer && (l(a.lf), e(), c && c({
						code: 2
					}));
					!a.qd && a.Oc ? a.Oc.forEach(function(c) {
						var d = b({
							Oi: c.Oi,
							url: a.url,
							Mf: a.Mf,
							ja: a.o.ja,
							Ae: a.Ae
						});
						if (q.Ni || r.ka(v, d)) {
							var e = u.ot[d] || {};
							e[c.Ed] = c.Oa;
							u.ot[d] = e
						}
					}) : a.data && a.data.forEach(function(c) {
						var d = b({
							Oi: c.key,
							url: a.url,
							Mf: a.Mf,
							ja: a.o.ja,
							Ae: a.Ae
						});
						if (q.Ni || r.ka(v, d)) u.ot[d] = c.data
					});
					u.data.config = {
						"x-vd-v": a["x-vd-v"],
						tv: a.tv,
						bgc: a.bgc
					}
				},
				flush: function() {
					var a = !0;
					return function() {
						var b = this;
						if (a) {
							if (Object.keys(u.data.fsTiles).length)
								for (var c in u.data.fsTiles) u.data.fsTiles.hasOwnProperty(c) && !r
									.ka(v, c) && delete u.data.fsTiles[c];
							q.Ni ? s.count(function(a, c) {
								a || (c !== u.data.keys.length ? (u.data.keys.length && (u
									.data.keys = []), f(function() {
									b.rG(!0)
								})) : b.rG(!0))
							}) : b.rG(!0);
							a = !1
						} else b.rG()
					}
				}(),
				rG: function() {
					var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1,
						b = {},
						d = [],
						f = Object.keys(u.ot),
						h = [];
					f.length ? (f.forEach(function(a) {
						var c = u.ot[a];
						a.split("|").pop().split(",").every(function(a) {
							return "limg" ===
								a ? !0 : c && void 0 !== c[a]
						}) ? (r.ka(u.data.keys, a) || (h.push(a), d.push({
							tileKey: a,
							data: c
						})), r.ka(v, a) && void 0 === u.data.fsTiles[a] && (u.data
							.fsTiles[a] = c)) : b[a] = c
					}), d.length && (q.Ni ? s.add(d, function(a) {
						a ? 3 !== a.code ? e() : q.Ni = !1 : (u.data.keys = u.data.keys
							.concat(h), w.setItem(u.key, u.data, !0), c())
					}) : w.setItem(u.key, u.data, !0)), u.ot = b) : (a && w.setItem(u.key, u.data, !
						0), c())
				}
			};
			h()
		}
	})();
	g.U = g.da.extend({
		A: function(a, b, c) {
			var d = parseFloat(b),
				e = parseFloat(a);
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: LngLat(" + e + ", " + d + ")";
			!0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 ===
				e ? 180 : -180));
			this.Q = d;
			this.R = e;
			this.lng = Math.round(1E6 * e) / 1E6;
			this.lat = Math.round(1E6 * d) / 1E6
		},
		zR: function() {
			return g.a.wb(this.R, 6)
		},
		wR: function() {
			return g.a.wb(this.Q, 6)
		},
		add: function(a, b) {
			return new g.U(this.R + a.R, this.Q + a.Q, b)
		},
		ab: function(a, b) {
			return new g.U(this.R - a.R, this.Q - a.Q, b)
		},
		ld: function(a,
			b) {
			return new g.U(this.R / a, this.Q / a, b)
		},
		Nd: function(a, b) {
			return new g.U(this.R * a, this.Q * a, b)
		},
		Ge: function(a) {
			return g.Et.distance(this, a)
		},
		offset: function(a, b) {
			if (isNaN(a) || isNaN(b)) return !1;
			var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.Q * Math.PI /
				180)),
				c = this.R + 180 * c / Math.PI,
				d = 2 * Math.asin(Math.round(b) / 12756274);
			return new g.U(c, this.Q + 180 * d / Math.PI)
		},
		gb: function(a) {
			a = g.a.Ka(a);
			return a instanceof g.U ? 1E-9 >= Math.max(Math.abs(this.Q - a.Q), Math.abs(this.R - a.R)) :
				!1
		},
		toString: function() {
			return g.a.wb(this.R,
				6) + "," + g.a.wb(this.Q, 6)
		},
		wl: function() {
			return [this.R, this.Q]
		},
		cb: function() {
			var a = this.controlPoints,
				b = new g.U(this.R, this.Q);
			a && (b.controlPoints = [].concat(a));
			return b
		}
	});
	g.U.Mqa = function(a, b, c) {
		c = c + 1 || Math.round(Math.abs(a.R - b.R));
		if (!c || 0.001 > Math.abs(a.R - b.R)) return [];
		var d = [],
			e = Math.PI,
			f = g.Lm.Ou,
			h = g.Lm.hwa,
			k = Math.asin,
			l = Math.sqrt,
			m = Math.sin,
			n = Math.pow,
			p = Math.cos,
			q = Math.atan2,
			r = a.Q * f;
		a = a.R * f;
		var s = b.Q * f;
		b = b.R * f;
		for (var k = 2 * k(l(n(m((r - s) / 2), 2) + p(r) * p(s) * n(m((a - b) / 2), 2))), u, v, w, t, f = 1; f <
			c; f += 1) u = 1 / c * f, v = m((1 - u) * k) / m(k), w = m(u * k) / m(k), u = v * p(r) * p(a) + w *
			p(s) * p(b), t = v * p(r) * m(a) + w * p(s) * m(b), v = v * m(r) + w * m(s), v = q(v, l(n(u, 2) + n(
				t, 2))), u = q(t, u), b > a ? (u < a && (u += 2 * e), u > b && (u -= 2 * e)) :
			(u > a && (u -= 2 * e), u < b && (u += 2 * e)), d.push(new g.U(u * h, v * h, !0));
		return d
	};
	g.U.Xb({
		zR: "getLng",
		wR: "getLat",
		add: "add",
		ab: "subtract",
		ld: "divideBy",
		Nd: "multiplyBy",
		Ge: "distance",
		offset: "offset",
		gb: "equals",
		toString: "toString"
	});
	g.oe = g.da.extend({
		A: function() {
			this.CLASS_NAME = "AMap.Bounds";
			var a = null,
				b = null;
			if (1 === arguments.length && arguments[0] instanceof Array) a = new g.U(arguments[0][0],
				arguments[0][1], !0), b = new g.U(arguments[0][2], arguments[0][3], !0);
			else if (2 === arguments.length) a = g.a.Ka(arguments[0]), b = g.a.Ka(arguments[1]);
			else if (4 === arguments.length) a = new g.U(arguments[0], arguments[1]), b = new g.U(
				arguments[2], arguments[3]);
			else if (0 === arguments.length) a = new g.U(-180, -90), b = new g.U(180, 90);
			else throw "Invalid Object: Bounds(" +
				arguments.join(",") + ")";
			this.wc = a;
			this.nc = b
		},
		hv: function() {
			return this.wc
		},
		Py: function() {
			return this.nc
		},
		dk: function() {
			return new g.U(this.wc.R, this.nc.Q, !0)
		},
		No: function() {
			return new g.U(this.nc.R, this.wc.Q, !0)
		},
		contains: function(a) {
			var b = this.wc,
				c = this.nc,
				d;
			if (a instanceof g.sp) return this.cV().contains(a);
			a instanceof g.oe ? (d = a.wc, a = a.nc) : d = a = g.a.Ka(a);
			var e = d.R,
				f = b.R,
				h = a.R,
				k = c.R;
			f > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
			return d.Q >= b.Q && a.Q <= c.Q && e >= f && h <= k
		},
		Zg: function(a) {
			var b = this.wc,
				c = this.nc,
				d = a.wc;
			a = a.nc;
			var e = a.R >= b.R && d.R <= c.R;
			return a.Q >= b.Q && d.Q <= c.Q && e
		},
		xi: function() {
			return new g.U(this.wc.R > this.nc.R ? (this.wc.R + this.nc.R + 360) / 2 % 360 : (this.wc
				.R + this.nc.R) / 2, (this.wc.Q + this.nc.Q) / 2)
		},
		extend: function(a) {
			this.wc.R = Math.min(this.wc.R, a.R);
			this.wc.Q = Math.min(this.wc.Q, a.Q);
			this.nc.R = Math.max(this.nc.R, a.R);
			this.nc.Q = Math.max(this.nc.Q, a.Q);
			return this
		},
		qza: function(a) {
			return this.extend(a.wc).extend(a.nc)
		},
		toString: function() {
			return this.wc.toString() + ";" + this.nc.toString()
		},
		cb: function() {
			return new g.oe(this.wc.cb(),
				this.nc.cb())
		},
		gb: function(a) {
			return a instanceof g.oe ? this.wc.gb(a.wc) && this.nc.gb(a.nc) : !1
		},
		vj: function() {
			return Math.abs(this.nc.R - this.wc.R)
		},
		tj: function() {
			return Math.abs(this.wc.Q - this.nc.Q)
		},
		cV: function(a) {
			var b = [this.hv(), this.No(), this.Py(), this.dk()];
			a && b.push(this.hv());
			return new g.sp(b)
		},
		yya: function(a) {
			return new g.Wf(a.kc(this.dk(), 20), a.kc(this.No(), 20))
		},
		rR: function(a, b) {
			return this.cV(b).rR(a)
		},
		oR: function(a) {
			return this.yya(a).xi()
		}
	});
	g.oe.Xb({
		hv: "getSouthWest",
		Py: "getNorthEast",
		dk: "getNorthWest",
		No: "getSouthEast",
		contains: "contains",
		Zg: "intersects",
		xi: "getCenter",
		extend: "extend"
	});
	g.H = g.da.extend({
		A: function(a, b, c) {
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
			this.x = c ? Math.round(a) : Number(a);
			this.y = c ? Math.round(b) : Number(b)
		},
		vf: function() {
			return this.x
		},
		ue: function() {
			return this.y
		},
		add: function(a, b) {
			return new g.H(this.x + a.x, this.y + a.y, b)
		},
		ab: function(a, b) {
			return new g.H(this.x - a.x, this.y - a.y, b)
		},
		ld: function(a, b) {
			return new g.H(this.x / a, this.y / a, b)
		},
		Nd: function(a, b) {
			return new g.H(this.x * a, this.y * a, b)
		},
		Ge: function(a) {
			var b = a.x - this.x;
			a = a.y - this.y;
			return Math.sqrt(b *
				b + a * a)
		},
		floor: function() {
			return new g.H(Math.floor(this.x), Math.floor(this.y))
		},
		round: function() {
			return new g.H(this.x, this.y, !0)
		},
		gb: function(a) {
			return a instanceof g.H && this.x === a.x && this.y === a.y
		},
		cb: function(a) {
			return new g.H(this.x, this.y, a)
		},
		toString: function() {
			return this.x + "," + this.y
		},
		wl: function() {
			return [this.x, this.y]
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		direction: function() {
			var a = this.x,
				b = this.y;
			if (0 === a && 0 === b) return null;
			if (0 === a) return 0 < b ? 90 : 270;
			var c = 180 *
				Math.atan(b / a) / Math.PI;
			return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
		},
		Ku: function(a) {
			var b = this.length(),
				c = a.length();
			return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
		},
		toa: function(a) {
			var b = this.length(),
				c = a.length();
			return b && c ? (this.x * a.x + this.y * a.y) / c / b : null
		},
		toFixed: function(a) {
			this.x = g.a.wb(this.x, a);
			this.y = g.a.wb(this.y, a);
			return this
		}
	});
	g.H.Xb({
		vf: "getX",
		ue: "getY",
		add: "add",
		ab: "subtract",
		ld: "divideBy",
		Nd: "multiplyBy",
		Ge: "distance",
		gb: "equals",
		toString: "toString"
	});
	g.xd = g.da.extend({
		A: function(a, b, c) {
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
			this.width = c ? Math.round(a) : Number(a);
			this.height = c ? Math.round(b) : Number(b)
		},
		cb: function() {
			return new g.xd(this.width, this.height)
		},
		vj: function() {
			return this.width
		},
		tj: function() {
			return this.height
		},
		PE: function() {
			return new g.H(this.vj(), this.tj())
		},
		contains: function(a) {
			return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
		},
		gb: function(a) {
			return a instanceof g.xd && this.width ===
				a.width && this.height === a.height
		},
		toString: function() {
			return this.vj() + "," + this.tj()
		}
	});
	g.xd.Xb({
		vj: "getWidth",
		tj: "getHeight",
		toString: "toString"
	});
	g.sp = g.da.extend({
		A: function(a) {
			this.CLASS_NAME = "AMap.ArrayBounds";
			a = g.a.Ka(a);
			this.path = [];
			for (var b = 0; b < a.length; b += 1) this.path.push([a[b].R, a[b].Q]);
			this.bounds = this.Rd = a
		},
		contains: function(a, b) {
			if (a instanceof g.sp) return g.Et.isRingInRing(a.path, this.path);
			a instanceof g.H ? a = [a.x, a.y] : a instanceof g.U && (a = [a.R, a.Q]);
			return g.wd.Sd(a, this.path, b)
		},
		toBounds: function() {
			for (var a = new g.oe(180, 90, -180, -90), b = this.Rd.length - 1; 0 <= b; b -= 1) a.extend(
				this.Rd[b]);
			return a
		},
		rR: function(a) {
			for (var b = [], c = 0; c <
				this.path.length; c += 1) b[c] = a.kc(this.path[c], 20);
			return b
		},
		oR: function(a) {
			return this.toBounds().oR(a)
		},
		xi: function() {
			return this.toBounds().xi()
		},
		toString: function() {
			return this.path.join(";")
		}
	});
	g.sp.Xb({
		contains: "contains",
		xi: "getCenter"
	});
	g.caa = g.sp.extend({
		A: function(a) {
			this.CLASS_NAME = "AMap.CoordsBounds";
			this.path = a;
			if (a[0] instanceof g.H) {
				this.path = [];
				for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
			}
			this.bounds = this.Rd = a
		},
		toString: function() {
			return this.path.join(";")
		}
	});
	g.Wf = g.da.extend({
		A: function() {
			if (2 === arguments.length) this.hc = arguments[0], this.Vd = arguments[1];
			else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments
				.length) {
				var a = arguments[0] instanceof Array ? arguments[0] : arguments;
				this.hc = new g.H(a[0], a[1]);
				this.Vd = new g.H(a[2], a[3])
			} else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
		},
		xi: function(a) {
			return new g.H((this.hc.x + this.Vd.x) / 2, (this.hc.y + this.Vd.y) / 2, a)
		},
		contains: function(a) {
			var b;
			a instanceof g.Wf ? (b = a.hc, a = a.Vd) :
				b = a;
			return b.x > this.hc.x && a.x < this.Vd.x && b.y > this.hc.y && a.y < this.Vd.y
		},
		vj: function() {
			return this.Vd.x - this.hc.x
		},
		tj: function() {
			return this.Vd.y - this.hc.y
		},
		Zg: function(a, b) {
			b || 0 === b || (b = 20);
			var c = this.hc,
				d = this.Vd,
				e = a.hc,
				f = a.Vd,
				h = f.y >= c.y - b && e.y <= d.y + b;
			return f.x >= c.x - b && e.x <= d.x + b && h
		},
		toString: function() {
			return this.hc + ";" + this.Vd
		},
		cb: function() {
			return new g.Wf(this.hc.cb(), this.Vd.cb())
		}
	});
	g.I = {};
	g.I.PP = function(a) {
		for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) g.I.II(b,
			a[c]);
		return b
	};
	g.I.Z1 = function(a, b, c) {
		var d = Math.min.apply(null, a);
		a = Math.max.apply(null, a);
		var e = Math.min.apply(null, b);
		b = Math.max.apply(null, b);
		return g.I.poa(d, a, e, b, c)
	};
	g.I.buffer = function(a, b) {
		a[0] -= b;
		a[1] -= b;
		a[2] += b;
		a[3] += b
	};
	g.I.cb = function(a) {
		return a.slice()
	};
	g.I.Sd = function(a, b) {
		return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
	};
	g.I.M2 = function(a, b) {
		return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
	};
	g.I.nDa = function() {
		return [Infinity, Infinity, -Infinity, -Infinity]
	};
	g.I.poa = function(a, b, c, d, e) {
		return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
	};
	g.I.empty = function(a) {
		a[0] = a[1] = Infinity;
		a[2] = a[3] = -Infinity;
		return a
	};
	g.I.gb = function(a, b) {
		return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
	};
	g.I.extend = function(a, b) {
		b[0] < a[0] && (a[0] = b[0]);
		b[2] > a[2] && (a[2] = b[2]);
		b[1] < a[1] && (a[1] = b[1]);
		b[3] > a[3] && (a[3] = b[3])
	};
	g.I.II = function(a, b) {
		b[0] < a[0] && (a[0] = b[0]);
		b[0] > a[2] && (a[2] = b[0]);
		b[1] < a[1] && (a[1] = b[1]);
		b[1] > a[3] && (a[3] = b[1])
	};
	g.I.gEa = function(a) {
		return [a[0], a[1]]
	};
	g.I.hEa = function(a) {
		return [a[2], a[1]]
	};
	g.I.xi = function(a) {
		return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
	};
	g.I.tEa = function(a, b, c, d, e) {
		var f = b * d[0] / 2;
		d = b * d[1] / 2;
		b = Math.cos(c);
		c = Math.sin(c);
		f = [-f, -f, f, f];
		d = [-d, d, -d, d];
		var h, k, l;
		for (h = 0; 4 > h; h += 1) k = f[h], l = d[h], f[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
		return g.I.Z1(f, d, e)
	};
	g.I.tj = function(a) {
		return a[3] - a[1]
	};
	g.I.HEa = function(a) {
		return [a[2] - a[0], a[3] - a[1]]
	};
	g.I.MEa = function(a) {
		return [a[0], a[3]]
	};
	g.I.NEa = function(a) {
		return [a[2], a[3]]
	};
	g.I.vj = function(a) {
		return a[2] - a[0]
	};
	g.I.Zg = function(a, b) {
		return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
	};
	g.I.uh = function(a) {
		return a[2] < a[0] || a[3] < a[1]
	};
	g.I.normalize = function(a, b) {
		return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
	};
	g.I.oHa = function(a, b) {
		var c = (a[2] - a[0]) / 2 * (b - 1),
			d = (a[3] - a[1]) / 2 * (b - 1);
		a[0] -= c;
		a[2] += c;
		a[1] -= d;
		a[3] += d
	};
	g.I.touches = function(a, b) {
		return g.I.Zg(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
	};
	g.I.transform = function(a, b, c) {
		a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
		b(a, a, 2);
		return g.I.Z1([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
	};
	g.oe.Hb({
		A: function() {
			var a = g.oe.prototype.A;
			return function() {
				a.apply(this, arguments);
				this.southwest = this.wc;
				this.northeast = this.nc
			}
		}(),
		extend: function() {
			var a = g.oe.prototype.extend;
			return function() {
				a.apply(this, arguments);
				this.wc.lng = this.wc.R;
				this.wc.lat = this.wc.Q;
				this.nc.lng = this.nc.R;
				this.nc.lat = this.nc.Q;
				return this
			}
		}()
	});
	g.KF = g.da.extend({
		A: function(a, b, c, d) {
			this.dX = a;
			this.tX = b;
			this.HX = c;
			this.dY = d
		},
		transform: function(a, b) {
			return this.r1(a.cb(), b)
		},
		r1: function(a, b) {
			b = b || 1;
			a.x = b * (this.dX * a.x + this.tX);
			a.y = b * (this.HX * a.y + this.dY);
			return a
		},
		sza: function(a, b) {
			b = b || 1;
			return new g.H((a.x / b - this.tX) / this.dX, (a.y / b - this.dY) / this.HX)
		}
	});
	g.yp = g.da.extend({
		A: function(a) {
			this.TL = a.MAX_LATITUDE || 85.0511287798;
			a.project && a.unproject && (this.kc = a.project, this.Wh = a.unproject)
		}
	});
	g.yp.oW = {
		kc: function(a) {
			return new g.H(a.R, a.Q)
		},
		Wh: function(a, b) {
			return new g.U(a.x, a.y, b)
		}
	};
	g.yp.oba = new g.yp({
		MAX_LATITUDE: 85.0511287798,
		project: function(a) {
			var b = Math.PI / 180,
				c = this.TL,
				c = Math.max(Math.min(c, a.Q), -c);
			a = a.R * b;
			b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
			return new g.H(a, b, !1)
		},
		unproject: function(a, b) {
			var c = 180 / Math.PI;
			return new g.U(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
		}
	});
	g.yp.sW = {
		TL: 85.0840591556,
		fM: 6356752.3142,
		eM: 6378137,
		kc: function(a) {
			var b = Math.PI / 180,
				c = this.TL,
				d = Math.max(Math.min(c, a.Q), -c),
				e = this.eM,
				c = this.fM;
			a = a.R * b * e;
			b *= d;
			e = c / e;
			e = Math.sqrt(1 - e * e);
			d = e * Math.sin(b);
			d = Math.pow((1 - d) / (1 + d), 0.5 * e);
			b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
			b = -c * Math.log(b);
			return new g.H(a, b)
		},
		Wh: function(a, b) {
			for (var c = 180 / Math.PI, d = this.eM, e = this.fM, f = a.x * c / d, d = e / d, d = Math.sqrt(
						1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l =
					0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
				l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
			return new g.U(f, h * c, b)
		}
	};
	g.Zh = {};
	g.Zh.pF = {
		MD: function(a, b) {
			var c = this.Pf.kc(a),
				d = this.scale(b);
			return this.UE.r1(c, d)
		},
		lE: function(a, b, c) {
			b = this.scale(b);
			a = this.UE.sza(a, b);
			return this.Pf.Wh(a, c)
		},
		kc: function(a) {
			return this.Pf.kc(a)
		},
		scale: function(a) {
			return 256 << a
		},
		mq: function(a) {
			return 12756274 * Math.PI / (256 * Math.pow(2, a))
		}
	};
	g.Zh.HL = g.extend({}, g.Zh.pF, {
		code: "EPSG:3857",
		Pf: g.yp.oba,
		UE: new g.KF(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
		kc: function(a) {
			return this.Pf.kc(a).Nd(6378137)
		}
	});
	g.Zh.ZV = g.extend({}, g.Zh.pF, {
		code: "EPSG:3395",
		Pf: g.yp.sW,
		UE: function() {
			var a = g.yp.sW;
			return new g.KF(0.5 / (Math.PI * a.eM), 0.5, -0.5 / (Math.PI * a.fM), 0.5)
		}()
	});
	g.Zh.$V = g.extend({}, g.Zh.pF, {
		code: "EPSG:4326",
		Pf: g.yp.oW,
		UE: new g.KF(1 / 360, 0.5, -1 / 360, 0.25)
	});
	g.Zh.XAa = g.extend({}, g.Zh.pF, {
		Pf: g.yp.oW,
		UE: new g.KF(1, 0, 1, 0)
	});
	g.QJ = {
		kc: function(a, b) {
			a = g.a.Ka(a);
			return this.mj.MD(a, b || this.get("zoom"))
		},
		Wh: function(a, b, c) {
			return this.mj.lE(a, b || this.get("zoom"), c)
		},
		nta: function(a, b) {
			return this.kc(a, b)
		},
		dEa: function(a, b) {
			return this.Wh(a, b)
		},
		Zp: function(a, b, c) {
			g.c.add(this, "containerToLngLat");
			var d = this.get("size").PE().ld(2);
			if (a.gb(d) && !c) return this.get("center");
			a = this.yg(a, b, c);
			return this.Od(a)
		},
		Ks: function(a, b) {
			g.c.add(this, "lngLatToContainer");
			var c = 0;
			b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) :
				b);
			var d = this.Bb(a);
			return this.Xd(d, null, c)
		},
		Bb: function(a) {
			a = g.a.Ka(a);
			return this.kc(a, 20)
		},
		Od: function(a) {
			return a ? this.Wh(a, 20) : a
		},
		KJ: function(a) {
			a = g.a.Ka(a);
			return this.kc(a, 20).ab(g.a.dc)
		},
		l6: function(a, b) {
			b || (a = g.a.Ka(a));
			var c = [],
				d = !1;
			void 0 === a[0].length && (d = !0);
			for (var c = [], e = 0, f = a.length; e < f; e += 1)
				if (d) {
					var h = this.kc(a[e], 20).ab(g.a.dc);
					c[e] = [h.x, h.y]
				} else c[e] = this.l6(a[e], !0);
			return c
		},
		jqa: function(a) {
			return this.Wh(a.add(g.a.dc), 20)
		},
		eEa: function(a) {
			return this.Xd(a.add(g.a.dc))
		},
		mEa: function(a) {
			return a ?
				this.kc(this.get("center"), a) : this.get("centerPixel")
		},
		FBa: function(a) {
			return (new g.H(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).ld(0.14929107086948487)
		},
		s7: function(a) {
			return new g.H(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 -
				0.14929107086948487 * a.y)
		}
	};
	z.NF = g.da.extend({
		ka: [g.va, g.Ze],
		w: {
			center: new g.U(116.397128, 39.916527),
			zoom: 13,
			rotation: 0,
			crs: "EPSG3857"
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.View2D";
			g.c.ya(this, a);
			a = a || {};
			a.center && (a.center = g.a.Ka(a.center));
			this.w = a
		}
	});
	z.Rb = g.da.extend({
		ka: [g.va, g.Ze, g.QJ],
		w: {
			features: "all",
			showLabel: !0,
			dragEnable: !0,
			showIndoorMap: g.l.ba ? !1 : !0,
			lang: "zh_cn",
			keyboardEnable: !0,
			doubleClickZoom: !0,
			scrollWheel: !0,
			zoomEnable: !0,
			jogEnable: !0,
			continuousZoomEnable: !0,
			resizeEnable: !1,
			animateEnable: !0,
			rotateEnable: !1,
			labelzIndex: 99,
			showFog: !0,
			touchZoom: !0,
			zooms: [3, g.l.ba ? g.l.Jc ? 19 : 20 : 18],
			defaultCursor: "",
			limitBounds: null,
			logoUrl: g.r.Gb + "/theme/v1.3/logo@1x.png",
			logoUrlRetina: g.r.Gb + "/theme/v1.3/logo@2x.png",
			copyright: "\x3c!--v1.4.16--\x3e &copy " +
				(new Date).getFullYear() + " AutoNavi ",
			isHotspot: !g.l.ba,
			baseRender: g.l.S1,
			overlayRender: g.l.jva,
			mapStyle: "amap://styles/normal",
			showBuildingBlock: g.l.Mf,
			crs: "EPSG3857",
			rotation: 0,
			pitch: 0,
			yaw: 0,
			scale: 1,
			center: new g.U(116.397128, 39.916527),
			zoom: 13,
			detectRetina: !0,
			pitchEnable: !1,
			buildingAnimation: !1,
			maxPitch: 83,
			turboMode: !0,
			preloadMode: !1,
			workerMode: !0
		},
		poiOnAMAP: function(a) {
			g.c.add(this, "poiOnAMAP");
			var b = {},
				c = g.a.Ka(a.location);
			b.id = a.id;
			c && (b.y = c.Q, b.x = c.R);
			b.name = a.name;
			b.address = a.address;
			g.$h.lt(g.$h.t4(b))
		},
		detailOnAMAP: function(a) {
			g.c.add(this, "detailOnAMAP");
			var b = {},
				c = g.a.Ka(a.location);
			b.id = a.id;
			c && (b.y = c.Q, b.x = c.R);
			b.name = a.name;
			g.$h.lt(g.$h.r4(b))
		},
		setLabelzIndex: function(a) {
			g.c.add(this, "setLabelzIndex");
			return this.set("labelzIndex", a)
		},
		getLabelzIndex: function() {
			return this.get("labelzIndex", null, !0)
		},
		setVectorMapForeign: function(a) {
			if (g.l.Wp) {
				var b = this.Y6(a);
				a = b[0];
				var c = b[1];
				this.set("name_field", c, !0);
				this.set("vectorMapForeign", a, !0);
				var d = this,
					b = [];
				a && (b.push("gridmap"), b.push("MVT", "vectorForeign"),
					b.push("labelcanvas"));
				g.tb.Fg(b, function() {
					d.p6(function() {
						d.map && (d.map.Fi = !0, d.map.EG && d.map.EG(), d.map.Re && d
							.map.Re instanceof g.Rb.CF && d.map.Re.he && d.map.Re.he
							.S && (d.map.Re.he.S.dI(), d.map.Re.he.S.J6 = c, d.map
								.Re.he.S.reload()), d.set("display"))
					})
				})
			}
		},
		setMapStyle: function(a) {
			g.c.add(this, "setMapStyle");
			a = a || "normal"; - 1 === a.indexOf("amap://styles/") ? g.r.cK[a] ? this.set("styleUrl",
				"amap://styles/" + g.r.cK[a]) : this.set("styleUrl", "") : this.set("styleUrl", a);
			this.YS()
		},
		getMapStyle: function() {
			return this.get("styleUrl") ||
				this.get("mapStyle", null, !0)
		},
		getFeatures: function() {
			return this.get("features", null, !0)
		},
		setFeatures: function(a) {
			g.c.add(this, "setFeatures");
			this.set("features", a)
		},
		setLang: function(a) {
			g.c.add(this, "setLang", a);
			"en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.get("lang", null, !0) || (this
				.set("lang", a), this.hk && this.hk.y8(this))
		},
		getLang: function() {
			return this.get("lang", null, !0)
		},
		setCity: function(a, b) {
			g.c.add(this, "setCity");
			var c = this;
			(new g.jb.zb(g.r.Zd + "/v3/config/district?subdistrict=0&extensions=all&key=" +
				g.r.key + "&s=rsv3&output=json&keywords=" + a, {
					callback: "callback"
				})).h("complete", function(d) {
				var e = d.districts;
				if (e && e.length) {
					d = e[0];
					/[^\w]+/.test(a) && (e = g.a.find(e, function(b) {
						return b.name === a
					})) && e !== d && (d = e);
					try {
						var f = d.center.split(","),
							h;
						switch (d.level) {
							case "city":
								h = 10;
								break;
							case "province":
								h = 7;
								break;
							case "district":
								h = 12;
								break;
							case "country":
								h = 4;
								break;
							default:
								h = 12
						} - 1 !== d.name.indexOf("\u5e02") && (h = 10);
						c.C = !0;
						c.setZoomAndCenter(h, new g.U(f[0], f[1]), !0);
						c.C = !1;
						b && b.call(c, f, h)
					} catch (k) {}
				}
			}, this)
		},
		getScreenShot: function(a, b) {
			g.c.add(this, "getScreenShot");
			return this.map && g.l.il ? this.map.D4(a, b) : ""
		},
		getCity: function(a, b) {
			g.c.add(this, "getCity");
			var c = g.r.Zd + "/v3/geocode/regeo?&extensions=&&key=" + g.r.key +
				"&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
			(new g.jb.zb(c, {
				callback: "callback",
				fy: !0,
				Ed: "REGEO"
			})).h("complete", function(b) {
				b = b.regeocode.addressComponent;
				a({
					province: b.province,
					city: b.city instanceof Array ? "" : b.city,
					citycode: b.citycode instanceof Array ? "" : b.citycode,
					district: b.district instanceof
					Array ? "" : b.district
				})
			}, this)
		},
		A: function(a, b) {
			b = g.extend({}, b);
			this.id = g.a.yb(this);
			this.CLASS_NAME = "AMap.Map";
			g.c.ya(this, b);
			this.C = !0;
			b = b || {};
			b.mapStyle && g.r.cK[b.mapStyle] && (b.mapStyle = "amap://styles/" + g.r.cK[b.mapStyle]);
			b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") ? (b.styleUrl = b.mapStyle,
				delete b.mapStyle) : b.styleUrl = "amap://styles/normal";
			b.bgColor && g.extend(g.r.De, b.bgColor);
			b.maxPitch && (b.maxPitch = Math.min(this.w.maxPitch, Math.max(b.maxPitch, 0)));
			b.pitch && (b.pitch = Math.min(b.maxPitch ||
				this.w.maxPitch, Math.max(b.pitch, 0)));
			"3D" !== b.viewMode && (b.pitch = 0);
			g.r.Ur = b.buildingColor || null;
			b.mobile && (g.l.ba = !0);
			b.noPoi && (g.r.vua = !0);
			b.editEnable = g.r.QQ ? b.editEnable : !1;
			b.editEnable && (b.nolimg = !0, b.showIndoorMap = !1);
			void 0 !== b.nolimg && (b.nolimg_param = b.nolimg);
			"3D" === b.viewMode && g.l.pp && void 0 === b.showBuildingBlock && !0 === b
				.showBuildingBlock;
			this.vq = !!b.enableSocket;
			b.server && (g.r.Zd = b.server);
			b.vdataUrl && (g.r.uL = b.vdataUrl);
			if ("string" === typeof a) {
				if (a = this.K = document.getElementById(a), !a) return
			} else "DIV" ===
				a.tagName && (this.K = a);
			if (this.K.___amap___) {
				var c = this.K.___amap___;
				c.C = !0;
				c.destroy();
				c.C = !1
			}
			this.K.___amap___ = this;
			var c = this.w.zooms[1],
				d = this.w.zooms[0];
			b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = g.l.ba ? g
				.l.Jc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
			b.forceZooms && (b.zooms = b.forceZooms);
			b = this.hna(b);
			c = this.getSize(!0);
			b.center && (b.center = g.a.Ka(b.center));
			this.mj = this.qoa(b.crs || this.w.crs, b.center || this.w.center);
			this.mma(c, b);
			d = b.lang;
			"en" !== d &&
				"zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
			g.f.pg || (b.rotation = 0, b.pitch = 0, b.rotateEnable = !1);
			b.preloadMode = !1;
			g.l.FS ? !1 !== b.workerMode && (z.Rb.Ot ? (b.workerMode = !1, z.Rb.Ot++) : z.Rb.Ot = 1) : b
				.workerMode = !1;
			b.layers && (d = b.layers, delete b.layers, b.layers = d);
			b.baseRender = b.baseRender || g.l.S1;
			b.forceVector && (b.baseRender = g.l.Mf ? "vw" : "v");
			b.disableVector && (b.baseRender = "d");
			"dom" === b.renderer && (b.baseRender = "d", b.overlayRender = "d");
			c = Math.max(c.width, c.height);
			g.l.ja && (c *= Math.min(2, window.devicePixelRatio ||
				1));
			"vw" === b.baseRender && c > g.l.Uta && (b.baseRender = "dv");
			c = b.vectorMapForeign;
			"d" == b.baseRender && c && (b.vectorMapForeign = !1);
			c && !g.l.Wp && (b.vectorMapForeign = !1);
			c = this.Y6(b.vectorMapForeign);
			b.vectorMapForeign = c[0];
			b.name_field = c[1];
			b.turboMode = !1;
			g.a.ub(this, b);
			this.jf(this.w);
			"rotateEnable" in b || "3D" !== b.viewMode || !g.l.pp || this.set("rotateEnable", !0);
			"pitchEnable" in b || "3D" !== b.viewMode || !g.l.pp || this.set("pitchEnable", !0);
			c = this.get("zoom", null, !0);
			"3D" === this.get("viewMode") && g.l.pp || (c = Math.round(c));
			d = this.get("zooms");
			c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
			this.set("zoom", c);
			this.w.zoom = c;
			this.soa(this.w);
			this.bQ();
			var e = this;
			this.jf({
				overlays: [],
				infos: {},
				controls: {}
			});
			var f = [];
			b.vectorMapForeign && f.push("gridmap");
			b.vectorMapForeign && g.l.Wp && f.push("MVT", "vectorForeign");
			b.forceVector && (f.push("vectorlayer"), f.push("overlay"));
			"3D" === b.viewMode && g.l.pp && f.push("Map3D");
			g.l.il && (b.vectorMapForeign || b.mapStyle || b.nolimg) && f.push("labelcanvas");
			b.editEnable && f.push("edit");
			g.l.il && (f.push("AMap.IndoorMap"),
				-1 !== f.indexOf("Map3D") && f.push("AMap.IndoorMap3D"));
			this.ja = g.l.ja && this.get("detectRetina");
			this.s$(b);
			this.C = !1;
			e = this;
			this.Eta(function() {
				e.p6(function() {
					g.tb.Fg(f, function() {
						if (!e.get("destroy")) {
							var b = new g.Rb(a, e);
							if (g.Te) {
								var c = (g.Te[0] || g.Te).stylemaps["50001:1"]
									.browserStyle[0].split("&");
								b.VF = [c[0], c[4]]
							}
							b.af("zoom center centerCoords rotation yaw pitch resolution"
								.split(" "), e.view, !0);
							b.h("complete", function() {
								var a = {};
								b.J && "3D" == b.J.type && (a.canvas = b
									.J.xa, a.gl = b.J.ca);
								this.q("complete",
									a)
							}, e, !0);
							b.mj = e.mj;
							e.af(["zoomSlow", "panTo", "targetLevel", "render"],
								b);
							b.af(["size", "bounds"], e);
							e.loaded = !0;
							e.q("coreMapCreated");
							g.l.il && e.Ola();
							e.C = !0;
							"3D" === e.view.type && (e.AmbientLight || (e
								.AmbientLight = new g.Rw.OV([1, 1, 1],
									0.9)), e.DirectionLight || (e
								.DirectionLight = new g.Rw.YV([0, -1,
									1], [1, 1, 1], 0.1)));
							e.C = !1
						}
					})
				})
			})
		},
		Y6: function(a) {
			if (a) {
				if ("string" == typeof a && "style_" === a.substr(0, 6)) return [a];
				switch (a) {
					case !0:
					case "Chinese_Simplified":
						return ["style_zh_cn"];
					case "English":
						return ["style_en"];
					case "Local":
						return ["style_local"];
					case "Chinese_Traditional":
						return ["style_en", ["coalesce", "{name_zh-Hant}", "{name}"]];
					default:
						return ["style_zh_cn"]
				}
			} else return [!1]
		},
		p6: function(a) {
			try {
				var b = this.get("vectorMapForeign");
				if (b)
					if (g.OJ = 0, g.NJ = 0, "string" == typeof b && "style_" == b.substr(0, 6)) {
						var c = this,
							d, e = b.slice(6);
						32 == e.length ? (c.is = !0, g.r.$pa = g.r.SI + "style_local/", d = g.r.tc +
							"://restapi.amap.com/v4/sdk/map/styles?styleid=" + e + "&key=" + g.r
							.key + "&sdkType=abroad_js_json&s=rsv3", d +=
							"&platform=JS&logversion=2.0", d += "&appname=" + g.r.Tp, d +=
							"&csid=" +
							g.a.Aw(), d += "&sdkversion=" + g.r.ln) : (c.is = !1, g.r.$pa = g.r.SI +
							b + "/", d = g.r.Gb + "/styles/foreign/web_v8_" + b + ".json");
						var f = new g.jb.XMLHttpRequest(d, {
							oU: "application/json",
							responseType: "json"
						});
						f.h("complete", function(b) {
							if (b && b.data && !b.data.LDa) {
								if (b.data.style) b = b.data;
								else if ("string" === typeof b.data) b = JSON.parse(b.data);
								else {
									c.set("vectorMapForeign", !1);
									c.is = !1;
									a();
									return
								}
								var d = b.hole;
								if (d) {
									g.ny = [];
									for (var e = 0, f = d.length; e < f - 1; e += 2) {
										var h = c.kc([d[e + 1], d[e]], 16);
										g.ny.push([h.x >> 0, h.y >> 0])
									}
								}(d = b.style) &&
								d.layers && (g.Nta = d.layers, b.zoomlevel && (g.OJ = b
									.zoomlevel[0], g.NJ = b.zoomlevel[1]))
							} else c.is = !1, c.set("vectorMapForeign", !1);
							a()
						}, this);
						f.h("error", function() {
							c.is = !1;
							c.set("vectorMapForeign", !1);
							a()
						}, this)
					} else this.is = !1, this.set("vectorMapForeign", !1), a();
				else this.is = !1, this.set("vectorMapForeign", !1), a()
			} catch (h) {
				this.is = !1, this.set("vectorMapForeign", !1), a()
			}
		},
		Eta: function(a) {
			function b() {
				var a = AMap.anole,
					b = {},
					c = [],
					d = 0,
					e = void 0;
				if (a) {
					for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""),
							a = 0, f = e.length; a < f; a++) void 0 === b[e[a]] && (b[e[a]] = d++, c
						.push(e[a]));
					c.reverse();
					d = 0;
					for (a = e.length; d < a; d++) e[d] = c[b[e[d]]];
					a = e.join("");
					g.Te = eval(a);
					delete AMap.anole
				}
			}
			if (g.l.Ue || g.Te) a();
			else {
				var c = !0;
				if (window.__AMapStyleSource) c = !1;
				else try {
					var d = JSON.parse(localStorage.getItem("_AMap_anole"));
					d && d.version === g.l.lf && d.script && 100 < d.script.length ? eval(d
						.script) : c = !1
				} catch (e) {
					c = !1
				}
				if (c) b(), a();
				else {
					var f = document.createElement("script");
					f.pDa = "anonymous";
					f.id = "amap_anole_js";
					f.src = window.__AMapStyleSource ||
						g.r.tc + "://vdata.amap.com/style?v=" + g.r.ln + "&key=" + g.r.key +
						"&mapstyle=normal";
					c = document;
					(c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(f);
					f.onload = function() {
						if (!g.Te) {
							if (AMap.anole && !window.__AMapStyleSource && g.l.Fv) try {
								var c = {
									version: g.l.lf,
									script: "AMap['anole']=" + JSON.stringify(AMap.anole)
								};
								localStorage.setItem("_AMap_anole", JSON.stringify(c))
							} catch (d) {}
							b()
						}
						a();
						f.parentNode.removeChild(f)
					}
				}
			}
		},
		getViewMode_: function() {
			return this.view.type
		},
		pqa: function(a, b, c) {
			var d = new g.U(a[4],
				a[5]);
			if ((a = new g.oe(a[0], a[1], a[2], a[3])) && b && d) {
				for (var e = c[1]; e > c[0]; e -= 1) {
					var f = this.kc(a.wc, e),
						h = this.kc(a.nc, e);
					if (Math.abs(h.x - f.x) < b.width && Math.abs(f.y - h.y) < b.height) break
				}
				return [d, Math.min(e + 1, c[1])]
			}
			return null
		},
		mma: function(a, b) {
			if (!(b && b.center && b.zoom)) {
				var c = this.pqa(g.r.Rd, a, b.zooms);
				b.center = b.center || c && c[0];
				"number" !== typeof b.zoom && (b.zoom = c && c[1])
			}
		},
		qoa: function(a, b) {
			if (b instanceof g.U) {
				if ("string" === typeof a) {
					switch (a) {
						case "EPSG3395":
							return g.Zh.ZV;
						case "EPSG4326":
							return g.Zh.$V
					}
					return g.Zh.HL
				}
				if (a.pointToLngLat &&
					a.lngLatToPoint) return {
					lE: a.pointToLngLat,
					MD: a.lngLatToPoint,
					mq: a.getResolution
				};
				throw "illegal projection";
			}
			var c = this.get("zoom", null, !0);
			return {
				mq: function(a) {
					return Math.pow(2, c - a)
				},
				MD: function() {},
				lE: function() {}
			}
		},
		Kxa: function(a, b) {
			this.$w && this.$w.stop();
			var c = ["pitch", "rotation", "zoom", "center"],
				d = {},
				e = !1,
				f;
			for (f in a)
				if (a.hasOwnProperty(f) && -1 !== g.a.indexOf(c, f)) {
					var h = this.get(f);
					void 0 === h || h === a[f] || h.gb && h.gb(a[f]) || (d[f] = this.get(f), e = !0)
				} e && (this.$w = new g.Kj(d, a, null, 0), this.$w.transition =
				function(a, c, e) {
					e /= b || 300;
					if (1 <= e) return c;
					var f = {},
						h;
					for (h in d) d.hasOwnProperty(h) && (f[h] = "center" === h ? a[h].add(c[h].ab(a[
						h]).Nd(e)) : a[h] + (c[h] - a[h]) * e);
					return f
				}, this.$w.Iq = function(b) {
					b === a && (this.$w.stop(), this.Fd = null);
					for (var c in b) b.hasOwnProperty(c) && ("center" === c ? (this.C = !0, this
						.setCenter(b[c], !0), this.C = !1) : this.set(c, b[c]))
				}, this.$w.Nn(this))
		},
		soa: function(a) {
			"3D" === this.get("viewMode") && g.l.pp ? (this.set("baseRender", "vw"), this.view = new g
				.pM(this, a)) : this.view = new g.NF(this, a);
			this.n5()
		},
		n5: function() {
			this.Bi = "d" < this.get("baseRender") || "3D" === this.view.type
		},
		featuresChanged: function() {
			this.bQ()
		},
		YS: function() {
			this.bQ();
			this.JU()
		},
		JU: function() {
			if (this.qm) {
				var a = !0;
				this.C = !0;
				var b = this.getMapStyle();
				if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b)
					a = !1;
				for (var b = this.getLayers(), c = this.C = !1, d = 0, e = b.length; d < e; d += 1) {
					if (b.hasOwnProperty(d) && "AMap.IndoorMap" === b[d].CLASS_NAME && b[d] !== this
						.qm) {
						a = !1;
						break
					}
					b[d].uq && b[d].uq() && b[d].get("visible") && (c = !0)
				}(a = c &&
					a) && this.qm.getMap() !== this && this.qm.setMap(this);
				this.qm.set("visible", a)
			}
		},
		bQ: function() {
			this.s$();
			if (this.view && "3D" !== this.view.type) {
				var a = this.get("baseRender");
				if (a && !("dv" < a)) {
					var b = this.get("features", null, !0);
					this.C = !0;
					var c = this.getMapStyle();
					this.C = !1;
					var d = this.get("editEnable");
					b && c && (g.l.Wp && (d || "all" !== b || "normal" !== c &&
						"amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.tT =
						a) : this.tT && (this.set("baseRender", this.tT), this.tT = null));
					this.n5()
				}
			}
		},
		Ola: function() {
			var a = this;
			!a.qm &&
				a.K && (a.indoorMap = a.qm = new AMap.IndoorMap({
					innerLayer: !0
				}), a.JU(), g.a.Wc(function() {
					a.q("indoor_create", {
						target: a
					});
					a.set("display")
				}))
		},
		layersChanged: function() {
			this.C = !0;
			var a = this.getLayers();
			this.XJ = this.C = !1;
			for (var b = 0; b < a.length; b += 1) a[b].C = !0, a[b].getMap() !== this && a[b].setMap(
				this), a[b].C = !1, a[b].XJ && (this.XJ = !0);
			this.JU()
		},
		getMapNumber: function() {
			if (this.map) return this.map.tE()
		},
		getAdcode: function() {
			g.c.add(this, "getAdcode");
			return g.r.Mla
		},
		s$: function() {
			function a() {
				var a = !1;
				g.a.Tb(b.w.layers,
					function(b) {
						if (b.FG && b.constructor === z.o.rb) return a = !0, !1
					}, b);
				if (g.a.ka(["d", "dv"], b.get("baseRender")) || !g.a.ka(["normal",
						"amap://styles/normal"
					], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") ||
					"all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
				return a
			}
			if (!this.c8) {
				var b = this,
					c = a(),
					d = this.get("rasterLayer");
				if (d && !c) this.sk(d), this.set("rasterLayer", void 0);
				else if (!d && c && this.get("layers")) {
					d = new z.o.rb({
						innerLayer: !0,
						map: this,
						Rv: !0,
						zIndex: 0
					});
					d.Gsa = !0;
					if (this.w.layers) {
						var e =
							null;
						g.a.Tb(this.w.layers, function(a) {
							a instanceof z.o.rb && a.FG && (null === e || a.get("zIndex") > e
								.get("zIndex")) && (e = a)
						});
						e && d.af(["zIndex", "opacity", "zooms", "visible"], e)
					}
					this.set("rasterLayer", d, !0)
				}
			}
		},
		hna: function(a) {
			a || (a = {});
			if (a.hasOwnProperty("defaultLayer")) {
				a.layers = [a.defaultLayer];
				var b = a.defaultLayer;
				b.FP = !0;
				this.set("defaultLayer", b, !0)
			}
			a.layers && 0 !== a.layers.length ? this.set("defaultLayer", a.layers[0], !0) : (b = new z.o
				.rb({
					innerLayer: !0
				}), a.layers = [b], b.FP = !0, this.set("defaultLayer", b, !0));
			if (b = a.view) b.w.rotation && (a.rotation = b.w.rotation), b.w.center && (a.center = b.w
				.center), b.w.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.w
				.zoom))), b.w.crs && (a.crs = b.w.crs);
			a.level && !a.zoom && (a.zoom = a.level);
			return a
		},
		setLimitBounds: function(a) {
			g.c.add(this, "setLimitBounds");
			a instanceof g.sp && (a.C = !0, a = a.toBounds(), a.C = !1);
			a instanceof g.oe || (a = null);
			this.set("limitBounds", a)
		},
		clearLimitBounds: function() {
			g.c.add(this, "clearLimitBounds");
			this.set("limitBounds", null)
		},
		getLimitBounds: function() {
			g.c.add(this,
				"getLimitBounds");
			return this.get("limitBounds", null, !0)
		},
		PH: function(a) {
			var b = this.get("layers");
			if (!(0 <= g.a.indexOf(b, a)) && (b.push(a), this.set("layers", b), a.xB)) {
				a = a.getLayers();
				for (var b = -1, c = a.length; ++b < c;) {
					var d = a[b];
					d instanceof z.o.Yb || !d.setMap || d.setMap(this)
				}
			}
		},
		sC: function(a) {
			var b = this.get("overlays");
			0 <= g.a.indexOf(b, a) || (a instanceof z.B.Tn ? (this.get("overlays").push(a), this
				.qy instanceof z.B.Tn && (this.qy.C = !0, this.qy.close(), this.qy.C = !1), this
				.qy = a, this.set("contextmenu", a, !0)) : (a instanceof z.B.Ye && (this
				.rm instanceof z.B.Ye && this.Jz(this.rm), this.rm = a), this.get(
				"overlays").push(a)), this.q("overlays"))
		},
		sk: function(a) {
			var b = this.get("layers"),
				c = g.a.indexOf(b, a);
			if (-1 !== c) {
				if (a.xB)
					for (c = b.length; - 1 < --c;) {
						var d = b[c];
						d.YA !== a && d !== a || b.splice(c, 1)
					} else a.YA && a.YA.Ska(a), b = g.a.Fo(b, c);
				this.set("layers", b);
				if (a.xB)
					for (a = a.getLayers(), b = -1, c = a.length; ++b < c;) d = a[b], d instanceof z.o
						.Yb || !d.setMap || d.setMap()
			}
		},
		getZooms: function() {
			return this.get("zooms", null, !0)
		},
		setZooms: function(a) {
			return this.set("zooms",
				a, !0)
		},
		Jz: function(a) {
			var b = this.get("overlays");
			this.set("overlays", g.a.Fo(b, g.a.indexOf(b, a)))
		},
		getTileCoordByLngLat: function(a, b, c) {
			b = b || 256;
			this.C = !0;
			c = c || Math.round(this.getZoom());
			this.C = !1;
			a = this.kc(a, c);
			c = new g.or(c, Math.floor(a.x / b), Math.floor(a.y / b));
			c.aD = a.x % b;
			c.bD = a.y % b;
			return c
		},
		setZoom: function(a, b) {
			g.c.add(this, "setZoom");
			a = this.gD(a);
			var c = this.get("zooms");
			a > c[1] && (a = c[1]);
			a < c[0] && (a = c[0]);
			this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.q("zoomstart"),
				this.q("zoomchange"),
				this.q("zoomend")) : this.set("zoomSlow", a))
		},
		getZoom: function(a) {
			g.c.add(this, "getZoom");
			return a ? this.get("zoom", null, !0) : this.gD(this.get("targetLevel") || this.get("zoom",
				null, !0))
		},
		getCenter: function() {
			g.c.add(this, "getCenter");
			return this.get("center", null, !0)
		},
		setCenter: function(a, b) {
			g.c.add(this, "setCenter");
			a = g.a.Ka(a);
			b || !this.loaded ? (this.q("movestart"), this.set("center", a), this.q("mapmove"), this
				.map ? this.map.q("moveend") : this.q("moveend")) : (this.C = !0, this.panTo(a),
				this.C = !1)
		},
		getCoordsBound: function() {
			return this.view.jm()
		},
		getCoordsBoundByZoom: function(a) {
			return this.view.mqa(a)
		},
		setRotation: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			g.c.add(this, "setRotation");
			!g.l.Ue && this.get("rotateEnable") && this.set("rotation", a)
		},
		getRotation: function() {
			g.c.add(this, "getRotation");
			return this.get("rotation")
		},
		setPitch: function(a) {
			g.c.add(this, "setPitch");
			a = Math.min(this.get("maxPitch"), Math.max(a, 0));
			"3D" === this.view.type && this.get("pitchEnable") && this.set("pitch", a)
		},
		getPitch: function() {
			g.c.add(this,
				"getRotation");
			return "3D" === this.view.type ? this.get("pitch") : 0
		},
		getStatus: function() {
			g.c.add(this, "getStatus");
			for (var a =
					"isHotspot pitchEnable dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable"
					.split(" "), b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !
			0);
			return b
		},
		setStatus: function(a) {
			g.c.add(this, "setStatus");
			for (var b in a) a.hasOwnProperty(b) && -1 !==
				"isHotspot,pitchEnable,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom"
				.indexOf(b) &&
				this.set(b, a[b])
		},
		getResolution: function(a, b) {
			g.c.add(this, "getResolution");
			var c = (a = g.a.Ka(a)) ? a.Q : this.get("center", null, !0).Q;
			return this.mj.mq(b || this.get("zoom")) * Math.cos(c * Math.PI / 180)
		},
		getScale: function(a) {
			g.c.add(this, "getScale");
			this.C = !0;
			a = this.getResolution() * (a || 96) / 0.0254;
			this.C = !1;
			return a
		},
		getDefaultCursor: function() {
			g.c.add(this, "getDefaultCursor");
			return this.get("defaultCursor", null, !0) || "url(" + g.r.Gb +
				"/theme/v1.3/openhand.cur),default"
		},
		setDefaultCursor: function(a) {
			g.c.add(this,
				"setDefaultCursor");
			return this.set("defaultCursor", a, !0)
		},
		zoomIn: function(a) {
			g.c.add(this, "zoomIn");
			this.C = !0;
			this.setZoom(this.getZoom() + 1, a);
			this.C = !1
		},
		zoomOut: function(a) {
			g.c.add(this, "zoomOut");
			this.C = !0;
			this.setZoom(this.getZoom() - 1, a);
			this.C = !1
		},
		gD: function(a) {
			return this.view && "3D" === this.view.type ? g.a.wb(a, 4) : Math.round(a)
		},
		setZoomAndCenter: function(a, b, c) {
			g.c.add(this, "setZoomAndCenter");
			b = g.a.Ka(b);
			a = this.gD(a);
			var d = this.get("zooms");
			a > d[1] && (a = d[1]);
			a < d[0] && (a = d[0]);
			this.C = !0;
			this.loaded ?
				this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0));
			this.C = !1
		},
		clearMap: function() {
			g.c.add(this, "clearMap");
			for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
			this.set("overlays", []);
			if (this.map && this.map.la)
				for (a = this.map.la, b = a.length - 1; 0 <= b; b -= 1)
					if (a[b].S instanceof z.o.LL) {
						var c = a[b].S;
						c.C = !0;
						c.setMap(null);
						c.C = !1
					}
		},
		destroy: function() {
			g.c.add(this, "destroy");
			this.qm && (this.qm.setMap(), this.indoorMap = this.qm = null);
			this.set("overlays", []);
			this.set("defaultLayer",
				null);
			this.set("layers", []);
			var a = this.get("controls");
			a.remove = [];
			for (var b in a.Ld) a.Ld.hasOwnProperty(b) && a.remove.push(a.Ld[b]);
			a.Ld = [];
			a.add = [];
			this.set("controls", a);
			this.set("destroy", !0);
			this.Ra = !1;
			this.yl();
			this.w = this.K = null;
			this.Gc && this.Gc.yl();
			this.Gc = null;
			this.view && this.view.yl();
			this.view = null;
			this.ti();
			z.Rb.Ot--
		},
		addControl: function(a) {
			g.c.add(this, "addControl");
			var b = g.a.yb(a),
				c = this.get("controls") || {};
			c.Ld = c.Ld || {};
			c.Ld[b] || (c.Ld[b] = a);
			c.add = c.add || [];
			c.add.push(a);
			this.set("controls",
				c)
		},
		removeControl: function(a) {
			g.c.add(this, "removeControl");
			var b = g.a.yb(a),
				c = this.get("controls") || {};
			c.Ld = c.Ld || {};
			c.Ld[b] && delete c.Ld[b];
			c.remove = c.remove || [];
			c.remove.push(a);
			this.set("controls", c)
		},
		clearControl: function() {
			g.c.add(this, "clearControl");
			var a = this.get("controls") || {};
			a.remove = a.remove || [];
			a.Ld = a.Ld || {};
			for (var b in a.Ld) a.Ld.hasOwnProperty(b) && (a.remove.push(a.Ld[b]), delete a.Ld[b]);
			this.set("controls", a)
		},
		plugin: function(a, b) {
			g.c.add(this, "plugin");
			"string" === typeof a && (a = [a]);
			for (var c = [], d = 0; d < a.length; d += 1) {
				var e = a[d].split(".");
				2 < e.length || (2 == e.length ? "AMap" === e[0] && (window.AMap[e[1]] || c.push(a[
					d])) : c.push(a[d]))
			}
			if (0 === c.length) return b(), this;
			g.tb.Fg(c, b);
			return this
		},
		clearInfoWindow: function() {
			g.c.add(this, "clearInfoWindow");
			var a = this.get("overlays");
			a && 0 !== a.length && this.rm && (this.rm.C = !0, this.rm.close(), this.rm.C = !1)
		},
		remove: function(a) {
			g.c.add(this, "remove");
			a instanceof Array || (a = [a]);
			for (var b = 0; b < a.length; b += 1) {
				var c = a[b];
				c.C = !0;
				c.getMap && c.getMap() === this &&
					(c.close ? c.close() : c.setMap && c.setMap(null));
				c.C = !1
			}
		},
		add: function(a) {
			g.c.add(this, "add");
			a instanceof Array || (a = [a]);
			for (var b = 0; b < a.length; b += 1) {
				var c = a[b];
				c.C = !0;
				if (c.getMap && c.getMap() !== this)
					if (c.open) continue;
					else c.setMap && c.setMap(this);
				c.C = !1
			}
		},
		getAllOverlays: function(a, b) {
			g.c.add(this, "getAllOverlays");
			var c = this.get("overlays");
			if (a) {
				for (var d = "amap." + a.toLowerCase(), e = [], f = 0; f < c.length; f += 1) d !== c[f]
					.CLASS_NAME.toLowerCase() || !b && (c[f].Ca || c[f].isOfficial) || e.push(c[f]);
				return e
			}
			if (!b) {
				e = [];
				for (f = 0; f < c.length; f += 1) c[f].Ca || c[f].isOfficial || e.push(c[f]);
				c = e
			}
			d = this.get("layers");
			e = [];
			if (d)
				for (var f = 0, h = d.length; f < h; f += 1) d[f] instanceof z.o.LL && e.push(d[f]), d[
					f].kb && (e = e.concat(d[f].kb));
			return c.concat(e)
		},
		triggerResize: function() {
			this.map && this.map.VO()
		},
		refreshSize: function() {
			this.eG = this.V3()
		},
		V3: function() {
			return g.f.R3(this.K)
		},
		getSize: function() {
			g.c.add(this, "getSize");
			(!this.eG || 10 > this.eG.width * this.eG.height) && this.refreshSize();
			return this.eG
		},
		getContainer: function() {
			g.c.add(this,
				"getContainer");
			return this.K
		},
		panTo: function(a) {
			g.c.add(this, "panTo");
			a = g.a.Ka(a);
			this.loaded ? this.set("panTo", a) : (this.C = !0, this.setCenter(a), this.C = !1)
		},
		panBy: function(a, b, c) {
			g.c.add(this, "panBy");
			this.C = !0;
			var d = this.get("rotation") * Math.PI / 180,
				e = a * Math.cos(d) + Math.sin(d) * b;
			a = -Math.sin(d) * a + Math.cos(d) * b;
			b = this.loaded && this.map && this.map.Fd ? this.map.Fd.D9 : this.get("centerCoords");
			d = Math.pow(2, 20 - this.getZoom());
			e = b.add(new g.H(-e * d, -a * d));
			e = this.Od(e);
			!this.loaded || c ? this.setCenter(e, c) : this.set("panTo",
				e);
			this.C = !1
		},
		setFitView: function(a, b, c, d) {
			g.c.add(this, "setFitView");
			this.C = !0;
			var e = this.get("size"),
				f = e.height;
			if (!e.width || !f) return !0;
			if (a = this.p4(a)) {
				if (c = this.bJ(a, 0, new g.H(40, 40), c, d)) b = b || !this.getBounds().contains(a
					.xi()) || g.l.ba && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this
					.setZoomAndCenter(c[0], c[1], b);
				this.C = !1;
				return a
			}
		},
		p4: function(a) {
			if (a)
				if (a instanceof z.B.Eh) a = [a];
				else {
					if (!(a instanceof Array)) return null
				}
			else this.C = !0, a = this.getAllOverlays(), this.C = !1;
			if (a) {
				for (var b, c = 0; c <
					a.length; c += 1) {
					var d = a[c];
					if (d.get("visible") && !(d instanceof z.B.Ye || d instanceof z.B.Tn)) {
						d.C = !0;
						var e = d.getBounds();
						d.C = !1;
						e && (b = b ? b.qza(e) : e.cb())
					}
				}
				return b
			}
		},
		getBounds: function(a) {
			g.c.add(this, "getBounds");
			var b = this.view.Kd();
			return a && b.toBounds ? (b.C = !0, a = b.toBounds(), b.C = !1, a) : b
		},
		setBounds: function(a, b, c, d, e, f) {
			g.c.add(this, "setBounds");
			c = this.bJ(a, b, c, e, f);
			d = d || g.l.ba && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
			this.C = !0;
			this.setZoomAndCenter(c[0], c[1], d);
			this.C = !1;
			return a
		},
		b4: function(a,
			b, c, d, e) {
			a = this.p4(a);
			return this.bJ(a, b, c, d, e)
		},
		getCoordsBoundByZoomIn3D: function(a) {
			this.UH || (this.UH = new g.pM);
			this.C = !0;
			var b = this.getRotation(),
				c = this.getPitch(),
				d = this.getSize(!0).cb();
			this.C = !1;
			a = {
				size: d,
				zoom: a,
				rotation: b,
				pitch: c,
				centerCoords: this.get("centerCoords")
			};
			this.UH.jf(a, !0);
			this.UH.hr();
			return this.UH.jm()
		},
		bJ: function(a, b, c, d, e) {
			b = b ? Number(b) : 0;
			this.C = !0;
			var f = this.getRotation(),
				h = this.getPitch(),
				k = this.getSize(!0).cb(),
				l = this.view.type;
			this.C = !1;
			var m = a.oR(this);
			a = a.rR(this);
			this.wC ||
				(this.wC = "3D" === l ? new g.pM : new g.NF);
			this.wC.jf({
				size: k,
				zoom: 3,
				rotation: f,
				pitch: h,
				centerCoords: m
			}, !0);
			var n = h = 0;
			d ? (n = d[0], c = d[1], h = d[2], d = d[3], k.width -= h + d, k.height -= n + c, h = (h -
				d) / 2, n = (n - c) / 2) : c && (k.width -= 2 * c.x, k.height -= 2 * c.y);
			e = e || (g.l.ba ? 17 : 18);
			c = this.get("zooms");
			d = c[0];
			var p = Infinity,
				q = Infinity;
			do {
				this.wC.jf({
					zoom: d
				}, !0);
				"3D" === l && this.wC.hr();
				for (var q = p = Infinity, r = -Infinity, s = -Infinity, u = 0; u < a.length; u += 1)
					var v = this.wC.Xd(a[u]),
						p = Math.min(p, v.x),
						r = Math.max(r, v.x),
						q = Math.min(q, v.y),
						s = Math.max(s,
							v.y);
				p = r - p;
				q = s - q;
				if (p > k.width || q > k.height) {
					d -= 1;
					break
				}
				d += 1
			} while (d <= c[1]);
			d = Math.min(c[1], e, Math.max(c[0], d + b));
			d = Math.floor(d);
			b = Math.pow(2, 20 - d);
			e = f * Math.PI / 180;
			f = h * Math.cos(e) + Math.sin(e) * n;
			e = -Math.sin(e) * h + Math.cos(e) * n;
			m = m.ab(new g.H(f * b, e * b));
			m = this.Wh(m, 20);
			return [d, m]
		},
		setLayers: function(a) {
			g.c.add(this, "setLayers");
			for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
			this.set("layers", a)
		},
		getLayers: function() {
			g.c.add(this, "getLayers");
			var a = this.get("layers", null, !0),
				a = a.slice();
			if (this.C) {
				for (var b = [], c = -1, d = a.length; ++c < d;) {
					var e = a[c];
					if (e.xB)
						for (var e = e.getLayers(), f = -1, h = e.length; ++f < h;) {
							var k = e[f];
							k instanceof z.o.Yb && -1 === g.a.indexOf(a, k) && b.push(k)
						}
				}
				a = a.concat(b)
			} else
				for (b = a.length; - 1 < --b;) a[b].YA && a.splice(b, 1);
			return a
		},
		getDefaultLayer: function() {
			g.c.add(this, "getDefaultLayer");
			return this.get("defaultLayer", null, !0)
		},
		setDefaultLayer: function(a) {
			if (a) {
				g.c.add(this, "setDefaultLayer");
				this.C = !0;
				a.FP = !0;
				var b = this.get("defaultLayer"),
					c = this.get("layers");
				if (b) {
					if (a === b) {
						a.setMap(this);
						return
					}
					b.FP = !1;
					c = g.a.Fo(c, g.a.indexOf(c, b))
				}
				this.set("defaultLayer", a, !0);
				a.C = !0; - 1 === g.a.indexOf(c, a) && c.push(a);
				a.C = !1;
				this.setLayers(c);
				this.C = !1
			}
		},
		pixelToLngLat: function(a, b) {
			g.c.add(this, "pixelToLngLat");
			return this.Wh(a, b)
		},
		lnglatToPixel: function(a, b) {
			g.c.add(this, "lnglatToPixel");
			return this.kc(a, b)
		},
		drawPolyline: function(a) {
			g.c.add(this, "drawPolyline");
			this.set("draw", "polyline");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				pb: 0.9
			})
		},
		render: function(a) {
			g.c.add(this, "render");
			this.map && this.map.set("display",
				a ? 1 : 0)
		},
		setMask: function(a) {
			g.c.add(this, "setMask");
			this.set("mask", a);
			this.map && (this.map.TJ = !0, this.map.set("display"))
		},
		drawPolygon: function(a) {
			g.c.add(this, "drawPolygon");
			this.set("draw", "polygon");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				pb: 0.9,
				fillColor: "#FFAA00",
				le: 0.9
			})
		},
		drawCircle: function(a) {
			g.c.add(this, "drawCircle");
			this.set("draw", "circle");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				pb: 0.9,
				fillColor: "#006600",
				le: 0.9
			})
		},
		rD: function() {
			return this.view.rD()
		},
		getCameraState: function() {
			g.c.add(this,
				"getCameraState");
			if (this.view && "3D" == this.view.type) return this.view.Q3()
		},
		endDraw: function() {
			this.set("draw", null)
		},
		isGoogleTileVisible: function() {
			return this.map.isForeignMapVisible()
		},
		isForeignMapVisible: function() {
			if (this.get("gridForeignMap") || this.get("vectorForeignMap")) return this.map && this.map
				.wga()
		},
		Xd: function(a, b, c) {
			g.c.add(this, "p20ToContainer");
			return this.view.Xd(a, b, c)
		},
		yg: function(a, b, c) {
			g.c.add(this, "containerToP20");
			return this.view.yg(a, b, c)
		},
		getObject3DByContainerPos: function(a,
			b, c) {
			g.c.add(this, "getObject3DByContainerPos");
			if ("2D" === this.view.type || !this.map || !this.map.J) return null;
			this.C = !0;
			this.view.yg(a);
			var d = this.view.U3(a),
				e = this.map.J.NT,
				f = this.view.cc,
				h = this.get("zoom", null, !0),
				h = Math.pow(2, 20 - h);
			b = b || this.getLayers();
			this.C = !1;
			for (var k = [], l = 0; l < b.length; l += 1) {
				var m = b[l];
				m instanceof z.o.Nm && (m = m.jp(e, d, f, h, a)) && k.push(m)
			}
			return c ? k : k.length ? (k.sort(function(a, b) {
				return a.Td - b.Td
			}), {
				index: k[0].index,
				point: k[0].kE,
				distance: k[0].Td,
				object: k[0].object
			}) : null
		},
		eJ: function(a) {
			var b =
				this.get("layers", null, !0),
				b = b.slice();
			if (this.C) {
				for (var c = [], d = -1, e = b.length; ++d < e;) {
					var f = b[d];
					if (f.xB)
						for (var f = f.xEa(), h = -1, k = f.length; ++h < k;) {
							var l = f[h]; - 1 === g.a.indexOf(b, l) && c.push(l)
						}
				}
				b = b.concat(c)
			}
			return b.filter(function(b) {
				return b instanceof z.o.Nm && (a ? -1 < a.indexOf(b) : !0)
			})
		},
		queryObjectIndexFromFboByContainerPos: function(a, b) {
			g.c.add(this, "queryObjectIndexFromFboByContainerPos");
			if ("2D" === this.view.type || !this.map || !this.map.J) return null;
			var c = this.diffFilterLayers(b),
				d = this.eJ(b),
				e =
				this.getSize();
			if (c) this.YG = this.view.Le.cb(), this.XG = this.view.cc.cb();
			else if (this.YG && this.XG) {
				if (c = this.XG.Xu(this.view.cc), c = !(this.YG.Xu(this.view.Le) && c)) this.YG = this
					.view.Le.cb(), this.XG = this.view.cc.cb()
			} else this.YG = this.view.Le.cb(), this.XG = this.view.cc.cb();
			if (c) this.map.Oq(d);
			else {
				for (var f = 0; f < d.length; f += 1) {
					var h = d[f];
					if (h instanceof z.o.Nm && h.Nra()) {
						c = !0;
						break
					}
				}
				c && this.map.Oq(d)
			}
			return this.map.Oy().fwa(a, e)
		},
		diffFilterLayers: function(a) {
			a = a || [];
			if (!this.iu || this.iu.length !== a.length) return this.iu =
				a ? a.slice(0) : [], !0;
			for (var b = 0; b < this.iu.length;) {
				if (this.iu[b] !== a[b]) return this.iu = a ? a.slice(0) : [], !0;
				b++
			}
			this.iu = a ? a.slice(0) : []
		}
	});
	z.Rb.Xb({
		KJ: "lngLatToGeodeticCoord",
		jqa: "geodeticCoordToLngLat",
		bJ: "getFitZoomAndCenterByBounds",
		b4: "getFitZoomAndCenterByOverlays",
		Ks: "lnglatTocontainer",
		lnglatTocontainer: "lngLatToContainer",
		Zp: "containTolnglat",
		containTolnglat: "containerToLngLat",
		Bb: "lngLatToP20",
		Od: "p20ToLngLat",
		Xd: "p20ToContainer",
		yg: "containerToP20",
		kc: "project",
		Wh: "unproject",
		queryObjectIndexFromFboByContainerPos: "pickObject3DByContainerPos"
	});
	z.Rb.Hb({
		isHotspotChanged: function() {
			if ("undefined" !== typeof this.uD && (this.Hna(), this.get("isHotspot"))) {
				var a = this.get("layers", null, !0);
				a && a.length && !this.uD && this.XJ && this.Wua()
			}
		},
		Wua: function() {
			if (this.hk) this.b5();
			else {
				var a = this;
				this.C = !0;
				this.plugin("AMap.HotSpot", function() {
					if (!a.uD) {
						if (!a.hk) {
							var b = new g.bi;
							new z.B.Ye({
								innerOverlay: !0
							});
							a.hk = b
						}
						a.b5()
					}
				});
				this.C = !1
			}
		},
		Hna: function() {
			this.hk && this.Rra()
		},
		l7: function(a) {
			a.type = "hotspotover";
			a.isIndoorPOI = !1;
			this.q("hotspotover", a)
		},
		j7: function(a) {
			a.type =
				"hotspotclick";
			a.isIndoorPOI = !1;
			this.q("hotspotclick", a)
		},
		k7: function(a) {
			a.type = "hotspotout";
			a.isIndoorPOI = !1;
			this.q("hotspotout", a)
		},
		b5: function() {
			var a = this.hk;
			this.hk.C = !0;
			this.hk.setMap(this);
			this.hk.C = !1;
			a.h("mouseover", this.l7, this);
			a.h("click", this.j7, this);
			a.h("mouseout", this.k7, this)
		},
		Rra: function() {
			var a = this.hk;
			a.G("mouseover", this.l7, this);
			a.G("click", this.j7, this);
			a.G("mouseout", this.k7, this);
			this.hk.C = !0;
			this.hk.setMap(null);
			this.hk.C = !1;
			this.hk = null
		}
	});
	z.event = {
		Y: function(a, b, c, d) {
			g.F.h(a, b, c, d);
			return new g.sF(0, a, b, c, d)
		},
		Pla: function() {},
		addListener: function(a, b, c, d) {
			g.a.Ph(a.addListener) ? a.addListener(b, c, d) : (a.ve || (a.ve = g.va.ve), g.va.h.call(a, b, c,
				d));
			return new g.sF(1, a, b, c, d)
		},
		ay: function(a, b, c, d) {
			g.a.Ph(a.ay) ? a.ay(b, c, d) : (a.ve || (a.ve = g.va.ve), g.va.h.call(a, b, c, d, !0));
			return new g.sF(1, a, b, c, d)
		},
		kI: function(a) {
			g.a.Ph(a.kI) ? a.kI() : g.va.ti.call(a)
		},
		Gu: function(a, b) {
			g.a.Ph(a.Gu) ? a.Gu(b) : g.va.ti.call(a, b)
		},
		removeListener: function(a) {
			a instanceof
			g.sF && (g.a.Ph(a.Ai.removeListener) ? a.Ai.removeListener(a) : 0 === a.type ? g.F.G(a.Ai, a.UQ,
				a.bS, a.bf) : 1 === a.type && (a.Ai.ve || (a.Ai.ve = g.va.ve), g.va.G.call(a.Ai, a
				.UQ, a.bS, a.bf)))
		},
		O: function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			g.a.Ph(a.O) ? a.O.apply(a, c) : (a.ve || (a.ve = g.va.ve), g.va.q.apply(a, c))
		}
	};
	g.sF = g.da.extend({
		A: function(a, b, c, d, e) {
			this.type = a;
			this.Ai = b;
			this.UQ = c;
			this.bS = d;
			this.bf = e
		}
	});
	var pc = {
			Y: "addDomListener",
			Pla: "addDomListenerOnce",
			addListener: "addListener",
			ay: "addListenerOnce",
			kI: "clearInstanceListeners",
			Gu: "clearListeners",
			removeListener: "removeListener",
			O: "trigger"
		},
		qc;
	for (qc in pc) pc.hasOwnProperty(qc) && (z.event[pc[qc]] = z.event[qc]);
	g.event = z.event;
	z.o.Yb = g.da.extend({
		ka: [g.va, g.Ze],
		A: function(a) {
			(new Date).getTime();
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
			g.a.ub(this, a);
			this.w.map && (a = this.w.map, delete this.w.map, this.w.map = a);
			this.jf(this.w)
		},
		getContainer: function() {
			g.c.add(this, "getContainer");
			if (this.o && this.o.M) return this.o.M.uj()
		},
		getZooms: function() {
			return this.get("zooms", null, !0)
		},
		setOpacity: function(a) {
			g.c.add(this, "setOpacity");
			a !== this.get("opacity", null, !0) && this.set("opacity", a)
		},
		getOpacity: function() {
			return this.get("opacity",
				null, !0)
		},
		show: function() {
			g.c.add(this, "show");
			this.set("visible", !0);
			if (this.Fq) {
				var a = this.get("map", null, !0);
				a && a.set("layers", a.get("layers", null, !0))
			}
		},
		hide: function() {
			g.c.add(this, "hide");
			this.set("visible", !1);
			if (this.Fq) {
				var a = this.get("map", null, !0);
				a && a.set("layers", a.get("layers", null, !0))
			}
		},
		setMap: function(a) {
			g.c.add(this, "setMap");
			var b = this.get("map");
			if (a) b && a !== b && b.sk(this), this.set("map", a);
			else if (b && (b.sk(this), this.set("map", null, !0), this.qi = !1, this.gg && this.gg(),
					this.onRemove)) this.onRemove()
		},
		getMap: function() {
			g.c.add(this, "getMap");
			return this.get("map", null, !0)
		},
		mapChanged: function() {
			var a = this.get("map");
			a && a.PH(this)
		},
		setzIndex: function(a) {
			g.c.add(this, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			return this.get("zIndex", null, !0)
		}
	});
	z.o.rb = z.o.Yb.extend({
		w: {
			tileSize: 256,
			visible: !0,
			opacity: 1,
			zIndex: 0,
			noLimg: 1,
			zooms: [3, 20],
			getTileUrl: g.l.ba ? g.r.TE : g.r.OD,
			errorUrl: g.a.vpa,
			detectRetina: !0,
			className: "amap-layer",
			mapNumber: "",
			merge: !1,
			sort: !1,
			cacheSize: g.l.size
		},
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
			g.c.ya(this, a);
			(a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
			this.ona(a);
			var b = a.zooms;
			b && b[1] >= this.ol[0] ? (b[0] < this.ol[0] && (b[0] = this.ol[0]), b[1] > this.ol[1] && (
				b[1] = this.ol[1])) : a.zooms = [this.ol[0], this.ol[1]];
			arguments.callee.ma.call(this, a);
			a.Rv && (this.Rv = !0);
			this.FG = this.uq()
		},
		setTextIndex: function(a) {
			g.c.add(this, "setTextIndex");
			this.set("textIndex", a)
		},
		uq: function() {
			if (this.get("createTile")) return !1;
			var a = this.get("getTileUrl");
			return a && a !== g.r.OD && a !== g.r.TE ? !1 : !0
		},
		u2: function() {
			if (!this.uq()) return !1;
			var a = this.get("map");
			return a && a.Bi && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
		},
		x4: function(a) {
			var b = g.r.RJ;
			g.l.ja && this.get("detectRetina") && (b = g.r.RJ.replace("scl=1", "scl=2"));
			a && (b = b.replace("ltype=3",
				"ltype=11"));
			return b
		},
		bg: function(a) {
			var b = this.u2(),
				c = this.get("map");
			this.uq() && this.set("mapNumber", "GS(2019)6379");
			if (this.Rv) return new g.o.rb(this, a, this.xr(this.x4(!0)), this.w.maxDataZoom, !0);
			if (b)
				if (this.Fq = !0, g.o.ei) {
					if ("dv" === c.get("baseRender") && !this.get("watermark")) {
						var b = c.get("showBuildingBlock"),
							d = new g.o.rb(this, a, this.xr(this.x4(!b)), void 0, !0);
						b && (d.Hj = new g.o.od(new z.o.rb({
							zooms: [16, 20],
							innerLayer: !0
						}), a, ["building"]), d.Hj.type = "\u697c\u5757\u56fe\u5c42", d.Hj.af([
							"visible",
							"opacity", "zIndex"
						], d, !0), d.Hj.AC(c.get("mapStyle") || "normal"));
						d.type = "\u6805\u683c\u5e95\u56fe";
						return d
					}
					if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.D.view
						.type ? (c = new g.o.od(this, a, ["region", "road"]), c.type =
							"\u77e2\u91cf\u5e95\u56fe", b = new z.o.rb({
								zooms: [17, 20],
								zIndex: 50,
								innerLayer: !0
							}), c.Hj = new g.o.od(b, a, ["building"]), c.Hj.ff = 17, c.Hj.type =
							"\u697c\u5757\u56fe\u5c42", c.Hj.Yy = 1, c.Hj.af(["visible", "merge",
								"sort", "opacity"
							], c, !0), b.X("rejectMapMask", this, !0)) : (c = new g.o.od(this,
								a, ["region", "building", "road"]), c.type =
							"\u77e2\u91cf\u5e95\u56fe"), a.wma = c
				} else return ["vectorlayer", "overlay"];
			else return this.Fq = !1, new g.o.rb(this, a, null, this.w.maxDataZoom)
		},
		getTileUrlChanged: function() {
			var a = this.get("getTileUrl");
			if (a === g.r.OD || a === g.r.TE || a === g.r.NK) this.XJ = !0;
			"string" === typeof a && (a = this.xr(a));
			this.set("tileFun", a)
		},
		ona: function(a) {
			this.ol || (this.ol = [this.w.zooms[0], this.w.zooms[1]]);
			var b;
			a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
			g.l.ba && g.l.ja && this.w.detectRetina &&
				!b && (this.ol[1] -= 1)
		},
		getTiles: function() {
			g.c.add(this, "getTiles");
			var a = this.get("tiles", null, !0);
			if (a && a.length) a = a[0];
			else return [];
			for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b
				.push("" + c[1] + "," + c[2]));
			return b
		},
		reload: function() {
			g.c.add(this, "reload");
			this.set("reload", 1)
		},
		Zs: function() {
			this.C = !0;
			var a = this.get("map", null, !0);
			this.setMap(null);
			this.qi = !1;
			this.setMap(a);
			this.C = !1
		},
		setTileUrl: function(a) {
			g.c.add(this, "setTileUrl");
			this.u2() ? (this.set("getTileUrl", a), this.Zs()) :
				this.set("getTileUrl", a)
		},
		xr: function(a) {
			var b = this,
				c, d, e;
			return function(f, h, k) {
				f = (f + Math.pow(2, k)) % Math.pow(2, k);
				if ("number" !== typeof(f + h + k)) return null;
				var l = b.get("map"),
					m = "zh_cn";
				l && (m = l.get("lang") || "zh_cn");
				k = a.replace("[x]", f).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
				if (!c) {
					if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""),
						e = e.split(",");
					c = !0
				}
				e && e.length && (k = k.replace(d, e[Math.abs(f + h) % e.length]));
				return k
			}
		},
		getTileUrl: function(a, b, c) {
			g.c.add(this, "getTileUrl");
			return this.get("tileFun", null, !0)(a, b, c)
		},
		getZooms: function(a) {
			a || g.c.add(this, "getZooms");
			return this.get("zooms", null, !0)
		}
	});
	z.o.rb.DW = z.o.rb.extend({
		w: {
			getTileUrl: g.r.wU,
			zooms: [3, 20],
			zIndex: 2,
			maxDataZoom: 18,
			detectRetina: !1,
			mapNumber: "GS(2021)1328",
			className: "amap-layer amap-satellite",
			cacheSize: g.l.size
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.Satellite";
			g.c.ya(this, a);
			this.ol = [3, 20];
			arguments.callee.ma.apply(this, arguments)
		}
	});
	z.o.rb.zW = z.o.rb.extend({
		w: {
			getTileUrl: g.r.NK,
			zooms: [3, 20],
			zIndex: 3,
			type: "overlayer",
			maxDataZoom: 18,
			className: "amap-layer amap-roadnet",
			cacheSize: g.l.size
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.RoadNet";
			g.c.ya(this, a);
			this.ol = [3, 20];
			arguments.callee.ma.apply(this, arguments)
		},
		bg: function(a) {
			if (this.get("map").Bi) {
				this.Fq = !0;
				var b = g.r.OK;
				g.l.ja && this.get("detectRetina") && (b = g.r.OK.replace("scl=1", "scl=2"));
				a = new g.o.rb(this, a, this.xr(b), this.w.maxDataZoom)
			} else this.Fq = !1, a = new g.o.rb(this,
				a);
			return a
		}
	});
	z.o.rb.LW = z.o.rb.extend({
		w: {
			getTileUrl: function(a, b, c) {
				return g.r.tc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (
					17 - c) + "&x=" + a + "&y=" + b
			},
			zooms: [6, 20],
			zIndex: 4,
			type: "overlayer",
			autoRefresh: !1,
			interval: 180,
			maxDataZoom: 17,
			alwaysRender: !g.l.i3,
			className: "amap-layer amap-traffic",
			cacheSize: g.l.size
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.Traffic";
			g.c.ya(this, a);
			this.ol = [6, 20];
			arguments.callee.ma.apply(this, arguments);
			this.C = !0;
			this.startRefresh();
			this.C = !1
		},
		stopRefresh: function() {
			g.c.add(this,
				"stopRefresh");
			this.BK && (clearInterval(this.BK), this.BK = null)
		},
		startRefresh: function() {
			g.c.add(this, "startRefresh");
			if (this.get("autoRefresh") && !this.BK) {
				var a = this;
				this.BK = setInterval(function() {
					a.C = !0;
					a.reload();
					a.C = !1;
					a.q("refresh")
				}, Math.max(1E3 * (this.get("interval") || 180), 1E4))
			}
		},
		reload: function() {
			g.c.add(this, "reload");
			g.a.Wc(function() {
				this.set("reload")
			}, this)
		},
		gg: function() {
			this.C = !0;
			this.stopRefresh();
			this.get("map") && this.get("map").G("zoomstart", this.reload, this);
			this.C = !1
		},
		bg: function(a) {
			var b =
				this.get("map"),
				b = a.D;
			b.h("zoomstart", this.reload, this);
			return "d" !== b.get("baseRender") ? g.o.Zw ? a = new g.o.Zw(this, a) : ["vt"] : a = new g.o
				.rb(this, a, null, this.w.maxDataZoom)
		}
	});
	z.o.rb.yA = z.o.rb.extend({
		w: {
			zooms: [3, 20],
			zIndex: 12,
			detectRetina: !1,
			className: "amap-layer amap-flexible",
			cacheSize: g.l.size
		},
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
			g.c.ya(this, a);
			this.Hsa = !0;
			arguments.callee.ma.call(this, a)
		},
		setCreateTile: function(a) {
			g.c.add(this, "setCreateTile");
			"function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
		},
		getCreateTile: function() {
			return this.get("createTile", null, !0)
		}
	});
	z.o.rb.Gba = z.o.rb.yA.extend({
		w: {
			zooms: [3, 20],
			zIndex: 12,
			tileSize: 512,
			detectRetina: !1,
			className: "amap-layer amap-wms",
			cacheSize: g.l.size,
			url: "",
			params: ""
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.WMS";
			g.c.ya(this, a);
			arguments.callee.ma.call(this, a);
			this.yw();
			var b = this,
				c = this.get("tileSize");
			this.set("createTile", function(a, e, f, h, k) {
				var l = Math.pow(2, 20 - f) * c;
				f = new g.H(l * a, l * (e + 1));
				a = new g.H(l * (a + 1), l * e);
				e = g.QJ.s7(f);
				a = g.QJ.s7(a);
				var m = document.createElement("img");
				"3D" === b.Uf && (m.crossOrigin = "anonymous");
				g.F.h(m, "load", function() {
					h(m)
				});
				g.F.h(m, "error", function() {
					k(m)
				});
				m.src = this.url + "&BBOX=" + e + "," + a
			})
		},
		yw: function() {
			var a = this.get("url", null, !0),
				b = this.get("params", null, !0),
				c = this.get("tileSize");
			b.WIDTH = c;
			b.HEIGHT = c;
			b.CRS = b.CRS || "EPSG:3857";
			b.REQUEST = "GetMap";
			b.SERVICE = "WMS";
			b.FORMAT = b.FORMAT || "image/png";
			b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
			delete b.BBOX;
			this.url = a + "?" + g.a.join(b, "&");
			this.C = !0;
			this.reload();
			this.C = !1
		},
		setUrl: function(a) {
			g.c.add(this, "setUrl");
			this.set("url",
				a, !0);
			this.yw()
		},
		getUrl: function() {
			g.c.add(this, "getUrl");
			return this.get("url", null, !0)
		},
		setParams: function(a) {
			g.c.add(this, "setParams");
			g.extend(this.get("params", null, !0), a || {});
			this.yw()
		},
		getParams: function() {
			g.c.add(this, "getParams");
			return this.get("params", null, !0)
		}
	});
	z.o.rb.Hba = z.o.rb.yA.extend({
		w: {
			zooms: [3, 20],
			tileSize: 256,
			zIndex: 12,
			detectRetina: !1,
			className: "amap-layer amap-wmts",
			cacheSize: g.l.size
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.WMTS";
			g.c.ya(this, a);
			arguments.callee.ma.call(this, a);
			this.yw();
			var b = this;
			this.get("tileSize");
			this.set("createTile", function(a, d, e, f, h) {
				var k = document.createElement("img");
				"3D" === b.Uf && (k.crossOrigin = "anonymous");
				g.F.h(k, "load", function() {
					f(k)
				});
				g.F.h(k, "error", function() {
					h(k)
				});
				k.src = this.url + "&TileMatrix=" + e + "&TileRow=" +
					d + "&TileCol=" + a
			})
		},
		yw: function() {
			var a = this.get("url", null, !0),
				b = this.get("params", null, !0);
			b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
			b.Request = "GetTile";
			b.Service = "WMTS";
			b.Format = b.Format || "image/png";
			this.url = a + "?" + g.a.join(b, "&");
			this.C = !0;
			this.reload();
			this.C = !1
		},
		setUrl: function(a) {
			g.c.add(this, "setUrl");
			this.set("url", a, !0);
			this.yw()
		},
		getUrl: function() {
			g.c.add(this, "getUrl");
			return this.get("url", null, !0)
		},
		setParams: function(a) {
			g.c.add(this, "setParams");
			g.extend(this.get("params", null, !0),
				a || {});
			this.yw()
		},
		getParams: function() {
			g.c.add(this, "getParams");
			return this.get("params", null, !0)
		}
	});
	z.o.rb.KL = z.o.rb.yA.extend({
		w: {
			detectRetina: !0,
			zooms: [10, 18],
			zIndex: 2
		},
		A: function(a) {
			arguments.callee.ma.apply(this, arguments);
			var b = this;
			this.set("createTile", function(a, d, e, f, h) {
				var k = b.Ce.map.map;
				k.Re.NE(a, d, e, function(l) {
					if (l) h();
					else {
						var m = document.createElement("img");
						"3D" === b.Uf && (m.crossOrigin = "anonymous");
						g.F.h(m, "load", function() {
							f(m)
						});
						g.F.h(m, "error", function() {
							h(m)
						});
						m.src = function(a, c, d) {
							var e = "zh_cn";
							b && b.get && k && (e = k.get("lang") || "zh_cn");
							return g.r.tc + "://grid.amap.com/grid/" + d + "/" +
								a + "/" + c + "?src=jsapi&key=" + g.r.key +
								"&lang=" + e + "&dpiType=" + (g.l.Jc ? "wprd" :
									"webrd")
						}(a, d, e)
					}
				})
			})
		}
	});
	z.o.fd = z.o.Yb.extend({
		w: {
			visible: !0,
			zooms: [3, 25],
			type: "overlay",
			zIndex: 5,
			alwaysRender: !0
		},
		A: function(a) {
			this.v5 = !0;
			arguments.callee.ma.apply(this, arguments)
		},
		bg: function(a) {
			return new g.o.fd(this, a)
		}
	});
	z.o.V$ = z.o.Yb.extend({
		w: {
			zooms: [14, 20],
			zIndex: 8,
			visible: !0,
			merge: !0,
			sort: !1
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.Buildings";
			g.c.ya(this, a);
			a = a || {};
			a.zooms && (a.zooms[0] = Math.max(14, a.zooms[0]));
			arguments.callee.ma.apply(this, arguments)
		},
		uq: function() {
			return !1
		},
		bg: function(a) {
			if (g.l.Wp) return a = new g.o.Dba(this, a), a.Yy = this.get("heightFactor") || 1, a
		},
		setStyle: function(a) {
			this.set("customStyle", a);
			g.c.add(this, "setStyle")
		}
	});
	z.o.DL = z.o.Yb.extend({
		w: {
			visible: !0,
			zooms: [3, g.l.ba ? 20 : 18],
			opacity: 1,
			type: "overlay",
			zIndex: 6
		},
		A: function(a) {
			arguments.callee.ma.apply(this, arguments)
		},
		bg: function(a) {
			return g.o.BA ? new g.o.BA(this, a) : ["imagelayer"]
		},
		getMap: function() {
			g.c.add(this, "getMap");
			return this.Ce.map
		},
		show: function() {
			g.c.add(this, "show");
			this.set("visible", !0);
			this.q("options")
		},
		getOpacity: function() {
			g.c.add(this, "getOpacity");
			return this.get("opacity", null, !0)
		},
		setOpacity: function(a) {
			g.c.add(this, "setOpacity");
			this.set("opacity",
				a)
		},
		getBounds: function() {
			g.c.add(this, "getBounds");
			return this.get("bounds", null, !0).cb()
		},
		setBounds: function(a) {
			g.c.add(this, "setBounds");
			this.q("bounds", a);
			this.C = !0;
			this.setOptions({
				bounds: a
			});
			this.C = !1
		},
		hide: function() {
			g.c.add(this, "hide");
			this.set("visible", !1);
			this.q("options")
		},
		setOptions: function(a) {
			g.c.add(this, "setOptions");
			this.jf(a);
			this.q("options")
		},
		getOptions: function() {
			g.c.add(this, "getOptions");
			var a = {},
				b;
			for (b in this.w) this.w.hasOwnProperty(b) && (a[b] = this.get(b));
			return a
		},
		getElement: function() {
			return this.o.M ?
				this.o.M.Ob : this.o.Bf ? this.o.Bf.Ob : null
		}
	});
	z.o.BA = z.o.DL.extend({
		A: function(a) {
			this.CLASS_NAME = "AMap.ImageLayer";
			g.c.ya(this, a);
			a && a.url && (a.__source__ = a.url);
			arguments.callee.ma.apply(this, arguments)
		},
		getImageUrl: function() {
			g.c.add(this, "getImageUrl");
			return this.get("__source__")
		},
		setImageUrl: function(a) {
			g.c.add(this, "setImageUrl");
			return this.set("__source__", a)
		}
	});
	z.o.Fba = z.o.DL.extend({
		A: function(a) {
			this.CLASS_NAME = "AMap.VideoLayer";
			g.c.ya(this, a);
			a && a.url && (a.__source__ = a.url);
			arguments.callee.ma.apply(this, arguments)
		},
		play: function() {
			var a = this.getElement();
			a && a.play && a.play()
		},
		pause: function() {
			var a = this.getElement();
			a && a.pause && a.pause()
		},
		getVideoUrl: function() {
			g.c.add(this, "getVideoUrl");
			return this.get("__source__")
		},
		setVideoUrl: function(a) {
			g.c.add(this, "setVideoUrl");
			return this.set("__source__", a)
		}
	});
	z.o.X$ = z.o.DL.extend({
		A: function(a) {
			this.CLASS_NAME = "AMap.CanvasLayer";
			g.c.ya(this, a);
			a && a.canvas && (a.__source__ = a.canvas);
			arguments.callee.ma.apply(this, arguments)
		},
		getCanvas: function() {
			g.c.add(this, "getCanvas");
			return this.get("__source__")
		},
		setCanvas: function(a) {
			g.c.add(this, "setCanvas");
			return this.set("__source__", a)
		},
		reFresh: function() {
			this.o && (this.o.KE = !0, this.o.set("display"))
		}
	});
	z.o.Qaa = z.o.Yb.extend({
		w: {
			visible: !0,
			zooms: [3, 20],
			type: "overlay",
			zIndex: 5,
			cursor: "pointer",
			alwaysRender: !0,
			stable: !0,
			bubble: !0,
			rejectMapMask: !0,
			className: "amap-mass"
		},
		A: function(a, b) {
			this.CLASS_NAME = "AMap.MassMarks";
			g.c.ya(this, b);
			g.l.il && (this.zj = !0, b.size && (b.size = g.a.Kq(b.size)), this.C = !0, this.setData(a),
				g.a.ub(this, b), b.style ? (this.jf(this.w, !0), this.setStyle(b.style)) : this
				.setStyle(this.w), this.C = !1)
		},
		clear: function() {
			g.c.add(this, "clear");
			this.set("dataSources", "")
		},
		getStyle: function() {
			g.c.add(this,
				"getStyle");
			return this.Cm
		},
		setStyle: function(a) {
			g.c.add(this, "setStyle");
			if (a instanceof Array) {
				for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) /
					180, a[b].size = g.a.Kq(a[b].size), a.Af = Math.max(a.Af || 0, a[b].size.width + a[
						b].anchor.x), a.ig = Math.max(a.Af || 0, a[b].size.height + a[b].anchor.y);
				this.Cm = a
			} else a.size && (a.size = g.a.Kq(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180,
				this.jf(a, !0), this.Cm = {
					anchor: this.get("anchor"),
					url: this.get("url"),
					size: this.get("size"),
					rotation_: this.get("rotation_")
				},
				this.Cm.Af = this.Cm.size.width + this.Cm.anchor.x, this.Cm.ig = this.Cm.size.height +
				this.Cm.anchor.y;
			this.q("style")
		},
		setData: function(a) {
			g.c.add(this, "setData");
			this.set("dataSources", a)
		},
		getData: function() {
			g.c.add(this, "getData");
			return this.get("datas") || this.get("dataSources")
		},
		setMap: function(a) {
			g.c.add(this, "setMap");
			g.l.il && (a ? (this.get("map") && this.get("map").sk(this), this.set("map", a)) : this.get(
				"map") && (this.get("map").sk(this), this.set("map", null, !0), this.qi = !1,
				this.gg && this.gg()))
		},
		bg: function(a) {
			return g.tb.ID(["cvector"]) ?
				(a = new g.o.fd(this, a), this.X("datas", a), a) : ["cvector"]
		}
	});
	z.o.aaa = z.o.Yb.extend({
		A: function(a) {
			this.CLASS_NAME = "AMap.CompositeLayer";
			this.xB = !0;
			g.a.ub(this, a);
			this.Vm = [];
			this.jf(this.w)
		},
		opacityChanged: function() {
			for (var a = this.get("opacity", null, !0), b = -1, c = this.Vm.length; ++b < c;) this.Vm[b]
				.setOpacity(a)
		},
		addLayer: function(a) {
			if (!this.has(a)) {
				a.YA = this;
				var b = this.get("map");
				a.setMap(b);
				this.Vm.push(a)
			}
			return this
		},
		removeLayer: function(a) {
			this.has(a) && a.setMap(null);
			return this
		},
		Ska: function(a) {
			if (this.has(a)) {
				delete a.YA;
				var b = this.Vm;
				a = g.a.indexOf(b, a);
				g.a.Fo(b, a)
			}
		},
		has: function(a) {
			return -1 !== g.a.indexOf(this.Vm, a)
		},
		show: function() {
			for (var a = -1, b = this.Vm.length; ++a < b;) this.Vm[a].show()
		},
		hide: function() {
			for (var a = -1, b = this.Vm.length; ++a < b;) this.Vm[a].hide()
		},
		setzIndex: function(a, b) {
			g.c.add(this, "setzIndex");
			this.set("zIndex", a);
			var c = this.Vm;
			if ("undefined" === typeof b)
				for (var d = -1, e = c.length; ++d < e;) {
					var f = c[d];
					f.setzIndex(a)
				} else(f = c[b]) && f.setzIndex(a)
		},
		bg: function(a) {
			this.e = a
		},
		getLayers: function() {
			return this.Vm
		}
	});
	z.o.pr = z.o.Yb.extend({
		Eaa: {
			visible: !0,
			zIndex: 121,
			opacity: 1,
			zooms: [3, 20],
			collision: !0,
			animation: !0,
			alwaysRender: !0
		},
		w: {
			zooms: [3, 20]
		},
		nP: null,
		_markerBindArray: {},
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelsLayer";
			a = a || {};
			g.c.ya(this, a);
			arguments.callee.ma.apply(this, arguments);
			this.w = this.Eaa;
			g.a.ub(this, a);
			this.jf(this.w);
			this.Xf = [];
			this.kb = [];
			this.Nu = []
		},
		getCollision: function() {
			return this.get("collision", null, !0)
		},
		setCollision: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ?
				arguments[0] : !0;
			this.set("collision", a);
			this.w.collision = a;
			this.g && this.g.ub(this.w, this.Xf)
		},
		getOpacity: function() {
			return this.get("opacity", null, !0)
		},
		setOpacity: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
			this.set("opacity", a);
			this.w.opacity = a;
			this.g && this.g.ub(this.w, this.Xf)
		},
		getzIndex: function() {
			return this.get("zIndex", null, !0)
		},
		setzIndex: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 120;
			this.set("zIndex", a);
			this.w.zIndex = a;
			this.g && this.g.ub(this.w,
				this.Xf)
		},
		getAnimation: function() {
			return this.get("animation", null, !0)
		},
		setAnimation: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
			this.set("animation", a);
			this.w.animation = a;
			this.g && this.g.ub(this.w, this.Xf)
		},
		getZooms: function() {
			return this.get("zooms", null, !0)
		},
		setZooms: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [3, 20];
			this.set("zooms", a);
			this.w.zooms = a;
			this.g && this.g.ub(this.w, this.Xf)
		},
		add: function(a) {
			g.c.add(this, "add");
			if (a) {
				a = "[object Array]" !==
					Object.prototype.toString.apply(a) ? [a] : a;
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (c) {
						c.g = this;
						var d = c.w,
							e = {
								data: {
									id: c._LabelMarkerId || void 0,
									name: d.title || "",
									position: this.mfa(d.position) || void 0,
									rank: d.rank || void 0
								},
								opts: {
									zooms: d.zooms || void 0,
									opacity: "number" === typeof d.opacity ? d.opacity : 1,
									zIndex: "number" === typeof d.zIndex ? d.zIndex : 1,
									height: "number" === typeof d.height ? d.height : 0,
									icon: {},
									text: {}
								}
							};
						if (d.icon) {
							var f = d.icon,
								h = f.size,
								k = f.clipSize;
							h && (f.size = this.wG(h));
							k && (f.clipSize = this.wG(k));
							e.opts.icon =
								d.icon
						}
						d.text && (e.opts.text = d.text, d.text.content && (e.data.txt = d.text
							.content), (d = (d = e.opts.text.style) && d.padding) && (e.opts.text
								.style.padding = this.rha(d)));
						this.Xf.push(e);
						this.kb.push(c);
						this._markerBindArray[c._LabelMarkerId] = c
					}
				}
				this.Ho();
				b = a.length;
				for (c = 0; c < b; c++)(e = a[c]) && e.P8 && e.P8()
			}
		},
		getMarkers: function() {
			return this.kb
		},
		remove: function(a) {
			g.c.add(this, "remove");
			if (a) {
				var b = void 0,
					b = "[object Array]" !== Object.prototype.toString.apply(a) ? [a] : a;
				if (this.Xf) {
					for (a = 0; a < b.length; a++) {
						var c = this.vn(this.Xf,
							b[a]); - 1 !== c && (this.Xf.splice(c, 1), this.kb.splice(c, 1))
					}
					this.Ho()
				}
			}
		},
		clear: function() {
			g.c.add(this, "clear");
			this.g && this.g.clear();
			this.Xf = [];
			this.kb = []
		},
		setPosition: function() {},
		positionChanged: function() {},
		on: function(a) {
			g.c.add(this, "on");
			this.g ? (this.Ch(arguments), this.g.W1(a)) : this.Nu.push(arguments)
		},
		off: function(a) {
			g.c.add(this, "off");
			this.g && this.g.n$(a)
		},
		Ho: function() {
			this.g && this.g.Qz(this.Xf)
		},
		Qz: function(a) {
			this.V0(a)
		},
		HU: function(a, b) {
			var c = this.nP;
			a && (b ? (c && c._LabelMarkerId !== a._LabelMarkerId &&
				c.setTop(!1), this.nP = a) : this.nP = null)
		},
		vR: function(a) {
			if (this.g) return this.g.vR(a)
		},
		vn: function(a, b) {
			for (var c = b._LabelMarkerId || null, d = 0; d < a.length; d++)
				if (a[d].data.id === c) return d;
			return -1
		},
		removeItem: function() {},
		bg: function(a) {
			this.get("map") || this.set("map", a.D, !0);
			if (g.o.pr) {
				this.g = new g.o.pr(this, a);
				this.Xf && this.Ho();
				a = this.Nu;
				if (a.length) {
					for (var b = 0; b < a.length; b++) this.on.apply(this, a[b]);
					this.Nu = []
				}
				return this.g
			}
			return ["AMap.LabelsLayer"]
		},
		l4: function(a) {
			if (a) return this._markerBindArray[a] ||
				null
		},
		wZ: function() {
			var a = this;
			return g.a.LD(function(b) {
				var c = a.g;
				c ? c.Qz(b) : a.tD = b
			}, 100)
		},
		If: function(a) {
			return "undefined" === typeof a
		},
		PZ: function(a) {
			return "string" === typeof a
		},
		zga: function(a) {
			return "number" === typeof a
		},
		wG: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
			return this.If(a.width) || this.If(a.height) ? this.PZ(a) ? a.split(",") : this.zga(a) ? [a,
				a
			] : a : [a.width, a.height]
		},
		mfa: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
			return this.If(a.R) ||
				this.If(a.Q) ? this.PZ(a) ? a.split(",") : a : [a.R, a.Q]
		},
		rha: function(a) {
			"string" === typeof a && (a = a.trim(), a = a.split(" "));
			if ("[object Array]" === Object.prototype.toString.apply(a)) {
				for (var b = a.length, c = 0; c < b; c++) {
					var d = parseInt(a[c]);
					a[c] = isNaN(d) ? 3 : d
				}
				switch (b) {
					case 0:
						a = [3, 3, 3, 3];
						break;
					case 1:
						a = [a[0], a[0], a[0], a[0]];
						break;
					case 2:
						a = [a[0], a[1], a[0], a[1]];
						break;
					case 3:
						a = [a[0], a[1], a[2], a[1]]
				}
				return a
			}
			return [3, 3, 3, 3]
		}
	});
	z.o.LL = z.o.BA.extend({
		A: function(a, b, c) {
			this.CLASS_NAME = "AMap.GroundImage";
			g.c.ya(this, c);
			c = c || {};
			this.$g = !0;
			var d = parseFloat(c.opacity);
			isNaN(d) && (d = 1);
			arguments.callee.ma.call(this, {
				url: a,
				bounds: b,
				clickable: c.clickable,
				opacity: d,
				map: c.map,
				zooms: c.zooms || [3, 20]
			});
			this.CLASS_NAME = "AMap.GroundImage"
		},
		Mua: function(a) {
			this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("click", a))
		},
		Nua: function(a) {
			this.get("bounds").contains(a.lnglat) && (a.target = this, this.q("dblclick", a))
		},
		setMap: function(a) {
			g.c.add(this,
				"setMap");
			a ? (this.get("map") && (this.get("map").sk(this), this.E2 && z.event.removeListener(this
				.E2), this.V2 && z.event.removeListener(this.V2)), this.set("map", a)) : this.get(
				"map") && (this.get("map").sk(this), this.Ce.map = null)
		},
		mapChanged: function() {
			this.get("map") && (this.get("map").PH(this), this.get("clickable") && (this.E2 = z.event
				.addListener(this.get("map"), "click", this.Mua, this), this.V2 = z.event
				.addListener(this.get("map"), "dblclick", this.Nua, this)))
		}
	});
	z.B.Eh = g.da.extend({
		ka: [g.va, g.Ze, {
			Ka: g.a.Ka
		}],
		w: {
			extData: {},
			bubble: !1,
			clickable: !0,
			draggable: !1
		},
		A: function() {
			this.MG = g.a.yb(this)
		},
		wEa: function() {
			return this.MG
		},
		aDa: function() {
			this.C = !0;
			this.get("map", null, !0) && this.setMap(this.get("map"));
			this.C = !1
		},
		mapChanged: function() {
			this.get("map", null, !0) && this.get("map", null, !0).sC(this)
		},
		bR: function(a) {
			var b = 0;
			a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
			return b
		},
		setHeight: function(a) {
			this.height = a = a || 0;
			a = this.bR(a);
			this.set("altitude",
				a)
		},
		getHeight: function() {
			return this.height
		},
		show: function() {
			g.c.add(this, "show");
			!0 != this.get("visible", null, !0) && this.set("visible", !0)
		},
		hide: function() {
			g.c.add(this, "hide");
			!1 != this.get("visible", null, !0) && this.set("visible", !1)
		},
		setMap: function(a) {
			g.c.add(this, "setMap");
			a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null,
				!0).Jz(this), this.set("map", a)) : this.get("map", null, !0) && (this.get(
				"map", null, !0).Jz(this), this.set("map", null, !0)))
		},
		getMap: function() {
			g.c.add(this,
				"getMap");
			return this.get("map", null, !0)
		},
		setExtData: function(a) {
			g.c.add(this, "setExtData");
			this.set("extData", a)
		},
		positionChanged: function() {},
		getExtData: function() {
			g.c.add(this, "getExtData");
			return this.get("extData", null, !0)
		},
		getVisible: function() {
			return this.get("visible", null, !0)
		}
	});
	z.B.fd = z.B.Eh.extend({
		A: function(a) {
			z.B.fd.bd.A.apply(this, arguments)
		},
		show: function() {
			g.c.add(this, "show");
			!1 == this.get("visible", null, !0) && (this.set("visible", !0), this.q("show", {
				type: "show",
				target: this
			}))
		},
		hide: function() {
			g.c.add(this, "hide");
			!0 == this.get("visible", null, !0) && (this.set("visible", !1), this.q("hide", {
				type: "hide",
				target: this
			}))
		},
		getVisible: function() {
			g.c.add(this, "getVisible");
			return this.get("visible", null, !0)
		},
		getOptions: function() {
			g.c.add(this, "getOptions");
			var a = {},
				b =
				"map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable draggable"
				.split(" "),
				c =
				"isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir dirColor dirImg"
				.split(" "),
				d = ["fillColor", "fillOpacity", "path", "lineJoin", "texture"],
				e = ["center", "radius", "texture"],
				f = ["bounds", "texture"],
				h = [];
			this instanceof z.B.Zb && (h = b.concat(c));
			this instanceof z.B.Dc && (h = b.concat(d));
			this instanceof z.B.gh && (h = b.concat(e).concat(d));
			this instanceof z.B.Dt && (h = b.concat(e).concat(d));
			this instanceof z.B.Kt && (h = b.concat(d).concat(f));
			for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null,
				!0);
			return a
		},
		setOptions: function(a) {
			g.c.add(this, "setOptions");
			a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.Ka(a
				.path));
			a.center && (a.center = this.Ka(a.center));
			var b;
			a.hasOwnProperty("map") && (b = a.map, delete a.map);
			this.jf(a);
			void 0 !== b && (this.setMap(b), a.map = b);
			this.q("options");
			this.q("change", {
				type: "change",
				target: this
			})
		},
		setzIndex: function(a) {
			g.c.add(this, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			g.c.add(this, "getzIndex");
			return this.get("zIndex", null,
				!0)
		},
		setDraggable: function(a) {
			g.c.add(this, "setDraggable");
			this.set("draggable", a)
		}
	});
	z.B.cM = z.B.fd.extend({
		w: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			lineJoin: "miter",
			lineCap: "butt",
			path: []
		},
		A: function(a) {
			z.B.cM.bd.A.apply(this, arguments)
		},
		setPath: function(a, b) {
			g.c.add(this, "setPath");
			a && a.length || (a = []);
			a = this.Ka(a);
			this.B && this.B.get("deltaPos") && this.B.set("deltaPos", [0, 0], !0);
			this.set("path", a);
			this.q("change", {
				type: "change",
				target: this
			});
			b || this.q("setPath")
		},
		getPath: function() {
			g.c.add(this, "getPath");
			return this.K2()
		},
		reset: function() {
			var a = this.K2();
			this.B.set("deltaPos", [0, 0], !0);
			this.setPath(a)
		},
		K2: function() {
			var a = this.get("path", null, !0);
			this.B && this.B.get("deltaPos") && (a = this.B.Rt(a, this.B.get("deltaPos")));
			return a
		}
	});
	z.B.ci = g.da.extend({
		ka: [g.va, g.Ze],
		w: {
			size: new g.xd(36, 36),
			imageOffset: new g.H(0, 0),
			image: g.r.Gb + "/theme/v1.3/markers/0.png",
			imageSize: null
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.Icon";
			g.c.ya(this, a);
			a = a || {};
			a.size && (a.size = g.a.Kq(a.size));
			a.imageSize && (a.imageSize = g.a.Kq(a.imageSize));
			g.a.ub(this, a);
			this.jf(this.w)
		},
		setImageSize: function(a) {
			g.c.add(this, "setImageSize");
			a = g.a.Kq(a);
			this.set("imageSize", a)
		},
		getImageSize: function() {
			g.c.add(this, "getImageSize");
			return this.get("imageSize", null, !0)
		}
	});
	z.B.Oaa = g.da.extend({
		ka: [g.va, g.Ze],
		w: {
			coords: [],
			type: ""
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.MarkerShape";
			g.c.ya(this, a);
			g.a.ub(this, a);
			this.jf(this.w)
		}
	});
	z.B.vb = z.B.Eh.extend({
		w: {
			cursor: "pointer",
			visible: !0,
			zIndex: 100,
			angle: 0,
			textAlign: "left",
			verticalAlign: "top",
			autoRotation: !1,
			opacity: 1,
			offset: new g.H(-9, -31),
			size: new g.H(19, 33),
			raiseOnDrag: !1,
			topWhenClick: !1,
			topWhenMouseOver: !1,
			animation: "AMAP_ANIMATION_NONE"
		},
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Marker";
			g.c.ya(this, a);
			a = a || {};
			this.$g = !0;
			this.gha = g.a.yb(this);
			this.C = !0;
			a.position && (a.position = this.Ka(a.position));
			a.height && this.setHeight(a.height);
			g.a.ub(this, a);
			g.l.Ue && (this.w.angle =
				0);
			this.jf(this.w, !0);
			this.mapChanged();
			this.C = !1
		},
		getAnchor: function() {
			g.c.add(this, "getAnchor");
			return this.get("anchor", null, !0)
		},
		setAnchor: function(a) {
			g.c.add(this, "setAnchor");
			this.set("anchor", a)
		},
		getId: function() {
			g.c.add(this, "getId");
			return this.gha
		},
		setRaiseOnDrag: function(a) {
			g.c.add(this, "setRaiseOnDrag");
			this.set("raiseOnDrag", a)
		},
		setPosition: function(a, b) {
			g.c.add(this, "setPosition");
			a = this.Ka(a);
			void 0 !== b && (this.C = !0, this.setHeight(b), this.C = !1);
			this.set("position", a)
		},
		getPosition: function() {
			g.c.add(this,
				"getPosition");
			return this.get("position", null, !0)
		},
		getBounds: function() {
			var a = this.get("position", null, !0).cb();
			return new g.oe(a, a.cb())
		},
		mapChanged: function() {
			this.xl("zoom");
			var a = this.get("map", null, !0);
			a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.sC(this),
				this.X("zoom", a))
		},
		getZooms: function() {
			g.c.add(this, "getZooms");
			return this.get("zooms", null, !0)
		},
		zoomChanged: function() {
			var a = this.get("zooms", null, !0);
			if (a) {
				var b = this.get("zoom");
				b < a[0] || b > a[1] ? this.set("outOfZooms",
					!0) : this.set("outOfZooms", !1);
				this.B && this.B.iva()
			}
		},
		setIcon: function(a) {
			g.c.add(this, "setIcon");
			this.set("icon", a)
		},
		getIcon: function() {
			g.c.add(this, "getIcon");
			return this.get("icon", null, !0)
		},
		setContent: function(a) {
			g.c.add(this, "setContent");
			this.set("content", a)
		},
		getContent: function() {
			g.c.add(this, "getContent");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		hide: function() {
			g.c.add(this, "hide");
			!0 == this.get("visible", null, !0) && this.set("visible",
				!1)
		},
		show: function() {
			g.c.add(this, "show");
			!1 == this.get("visible", null, !0) && this.set("visible", !0)
		},
		setCursor: function(a) {
			g.c.add(this, "setCursor");
			this.set("cursor", a)
		},
		setRotation: function(a) {
			g.c.add(this, "setRotation");
			g.l.Ue || this.set("angle", a)
		},
		setAngle: function(a) {
			g.c.add(this, "setAngle");
			g.l.Ue || "number" !== typeof a || this.set("angle", a)
		},
		getAngle: function() {
			g.c.add(this, "getAngle");
			return this.get("angle", null, !0)
		},
		setOffset: function(a) {
			g.c.add(this, "setOffset");
			this.set("offset", a)
		},
		getOffset: function() {
			g.c.add(this,
				"getOffset");
			return this.get("offset", null, !0)
		},
		setTextAlign: function(a) {
			g.c.add(this, "setTextAlign");
			this.set("textAlign", a)
		},
		getTextAlign: function() {
			g.c.add(this, "getTextAlign");
			return this.get("textAlign", null, !0)
		},
		setVerticalAlign: function(a) {
			g.c.add(this, "setVerticalAlign");
			this.set("verticalAlign", a)
		},
		getVerticalAlign: function() {
			g.c.add(this, "getVerticalAlign");
			return this.get("verticalAlign", null, !0)
		},
		setzIndex: function(a) {
			g.c.add(this, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			g.c.add(this,
				"getzIndex");
			return this.get("zIndex", null, !0)
		},
		setOpacity: function(a) {
			g.c.add(this, "setOpacity");
			this.set("opacity", a)
		},
		setDraggable: function(a) {
			g.c.add(this, "setDraggable");
			this.set("draggable", a)
		},
		getDraggable: function() {
			g.c.add(this, "getDraggable");
			return this.get("draggable", null, !0)
		},
		moveTo: function(a, b, c) {
			g.c.add(this, "moveTo");
			a = this.Ka(a);
			this.set("move", {
				Nf: a,
				speed: b,
				xb: c
			})
		},
		moveAlong: function(a, b, c, d) {
			g.c.add(this, "moveAlong");
			if (!(2 > a.length)) {
				a = this.Ka(a);
				for (var e = [a[0]], f = a[0], h = 1; h <
					a.length; h += 1) f.gb(a[h]) || (e.push(a[h]), f = a[h]);
				this.set("move", {
					Nf: e,
					speed: b,
					xb: c,
					una: d
				})
			}
		},
		stopMove: function() {
			g.c.add(this, "stopMove");
			this.set("move", !1)
		},
		pauseMove: function() {
			g.c.add(this, "pauseMove");
			var a = this.get("move");
			if (!a) return !1;
			a.action = "pause";
			this.set("move", a);
			return !0
		},
		resumeMove: function() {
			g.c.add(this, "resumeMove");
			var a = this.get("move");
			if (!a) return !1;
			a.action = "resume";
			this.set("move", a);
			return !0
		},
		setShadow: function(a) {
			g.c.add(this, "setShadow");
			this.set("shadow", a)
		},
		getShadow: function() {
			g.c.add(this,
				"getShadow");
			return this.get("shadow", null, !0)
		},
		setClickable: function(a) {
			g.c.add(this, "setClickable");
			a !== this.get("clickable", null, !0) && this.set("clickable", a)
		},
		getClickable: function() {
			g.c.add(this, "getClickable");
			return this.get("clickable", null, !0)
		},
		setTitle: function(a, b) {
			g.c.add(this, "setTitle");
			"string" === typeof a && this.set("title", a, b)
		},
		getTitle: function() {
			g.c.add(this, "getTitle");
			return this.get("title", null, !0)
		},
		setLabel: function(a) {
			g.c.add(this, "setLabel");
			a && !g.a.uh(a) && (a = g.extend({}, this.get("label"),
				a));
			this.set("label", a)
		},
		getLabel: function() {
			g.c.add(this, "getLabel");
			return this.get("label", null, !0)
		},
		setTop: function(a, b) {
			g.c.add(this, "setTop");
			this.set("isTop", a, b)
		},
		getTop: function() {
			g.c.add(this, "getTop");
			return this.get("isTop", null, !0)
		},
		setShape: function(a, b) {
			g.c.add(this, "setShape");
			this.set("shape", a, b)
		},
		getShape: function() {
			g.c.add(this, "getShape");
			return this.get("shape", null, !0)
		},
		setAnimation: function(a, b) {
			g.c.add(this, "setAnimation");
			this.set("animation", a, b)
		},
		getAnimation: function() {
			g.c.add(this,
				"getAnimation");
			return this.get("animation", null, !0)
		},
		getMap: function() {
			g.c.add(this, "getMap");
			return this.get("map", null, !0)
		},
		markOnAMAP: function(a) {
			g.c.add(this, "markOnAMAP");
			a = a || {};
			var b = {};
			b.name = a.name || this.get("name", null, !0) || "";
			a = this.Ka(a.position) || this.get("position", null, !0);
			b.y = a.Q;
			b.x = a.R;
			g.$h.lt(g.$h.dra(b))
		}
	});
	z.B.Haa = z.B.Eh.extend({
		Saa: Math.pow(2, 31),
		w: {
			position: null,
			zooms: [3, 20],
			opacity: 1,
			visible: !0,
			zIndex: 1,
			rank: 1,
			extData: null
		},
		A: function(a) {
			a = a || {};
			this.CLASS_NAME = this.CLASS_NAME || "AMap.LabelMarker";
			g.c.ya(this, a);
			arguments.callee.ma.apply(this, arguments);
			this._LabelMarkerId = g.a.yb(this);
			g.a.ub(this, a);
			this.jf(this.w, !0);
			this.q3 = []
		},
		vn: function(a, b) {
			for (var c = b._LabelMarkerId || null, d = 0, e = a.length; d < e; d++)
				if (a[d].data.id === c) return d;
			return -1
		},
		P8: function() {
			var a = this.q3 || [];
			if (a.length) {
				for (var b = 0,
						c = a.length; b < c; b++) this.on.apply(this, a[b]);
				this.q3 = []
			}
		},
		hJ: function() {
			var a = this.g;
			if (!a) return null;
			var a = a.Xf || [],
				b = this.vn(a, this);
			return -1 !== b ? a[b] : null
		},
		getName: function() {
			g.c.add(this, "getName");
			return this.w.name
		},
		setName: function(a) {
			g.c.add(this, "setName");
			this.w.name = a;
			var b = this.hJ();
			b && (b.opts.title = a)
		},
		getBounds: function() {
			g.c.add(this, "getBounds");
			var a = this.get("position", null, !0);
			try {
				return "string" === typeof a ? a = new g.U(a.split(",")) : "[object Array]" == Object
					.prototype.toString.apply(a) &&
					(a = new g.U(a[0], a[1])), new g.oe(a, a.cb())
			} catch (b) {
				return null
			}
		},
		getPosition: function() {
			g.c.add(this, "getPosition");
			var a = this.g.Xf,
				b = this.vn(a, this);
			return -1 !== b ? a[b].data.position : null
		},
		setPosition: function(a) {
			g.c.add(this, "setPosition");
			this.w.position = a;
			var b = this.g;
			if (b) {
				var c = b.Xf,
					d = this.vn(c, this); - 1 !== d && (c[d].data.position = a, b.Ho())
			}
		},
		getZooms: function() {
			g.c.add(this, "getZooms");
			var a = this.g.Xf,
				b = this.vn(a, this);
			return -1 !== b ? a[b].opts.zooms : null
		},
		setZooms: function(a) {
			g.c.add(this, "setZooms");
			this.w.zooms = a;
			var b = this.g;
			if (b) {
				var c = b.Xf || [],
					d = this.vn(c, this); - 1 !== d && (c[d].opts.zooms = a, b.Ho())
			}
		},
		getOpacity: function() {
			g.c.add(this, "getOpacity");
			var a = this.g.Xf,
				b = this.vn(a, this);
			return -1 !== b ? a[b].opts.opacity : null
		},
		setOpacity: function(a) {
			g.c.add(this, "setOpacity");
			this.w.opacity = a;
			var b = this.g;
			if (b) {
				var c = b.Xf,
					d = this.vn(c, this); - 1 !== d && (c[d].opts.opacity = a, b.Ho())
			}
		},
		getzIndex: function() {
			g.c.add(this, "getzIndex");
			if (this.hJ()) return this.w.zIndex
		},
		setzIndex: function(a) {
			g.c.add(this, "setzIndex");
			this.w.zIndex = a;
			var b = this.hJ();
			b && (b.opts.zIndex = a, this.g.Ho())
		},
		getRank: function() {
			g.c.add(this, "getRank");
			return this.w.rank
		},
		setRank: function(a) {
			g.c.add(this, "setZIndex");
			var b = this.hJ();
			this.w.rank = a;
			b && (b.data.rank = a, this.g.Ho())
		},
		getIcon: function() {
			g.c.add(this, "getIcon");
			return this.w.icon
		},
		setIcon: function(a) {
			g.c.add(this, "setIcon");
			this.w.icon = this.w.icon ? g.extend({}, this.w.icon, a) : a;
			var b = this.g;
			if (b) {
				var b = b.Xf,
					c = this.vn(b, this);
				if (-1 !== c) {
					var d = a.size,
						e = a.clipSize;
					d && (a.size = this.g.wG(d));
					e && (a.clipSize = this.g.wG(e));
					b[c].opts.icon = g.extend({}, b[c].opts.icon, a);
					this.g.Ho()
				}
			}
		},
		getText: function() {
			g.c.add(this, "getText");
			return this.w.text
		},
		setText: function(a) {
			g.c.add(this, "setText");
			this.w.text = this.w.text ? g.extend({}, this.w.text, a) : a;
			var b = this.g;
			if (b) {
				var b = b.Xf,
					c = this.vn(b, this); - 1 !== c && (b[c].data.txt = void 0 == a.content ? b[c].data
					.txt : a.content, b[c].opts.text = g.extend({}, b[c].opts.text, a), a.style && (
						b[c].opts.text.style = g.extend({}, b[c].opts.text.style, a.style)), this.g
					.Ho())
			}
		},
		setTop: function() {
			var a =
				0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !0;
			g.c.add(this, "setTop");
			this.g && this.g.HU(this, a);
			a ? (this.xca = this.w.zIndex, this.setzIndex(this.Saa)) : this.setzIndex(this.xca || this.w
				.zIndex)
		},
		getVisible: function() {
			g.c.add(this, "getVisible");
			var a = this.w.visible;
			this.g && a && (a = !this.g.vR(this._LabelMarkerId));
			return a
		},
		getExtData: function() {
			g.c.add(this, "getExtData");
			return this.w.extData
		},
		setExtData: function(a) {
			g.c.add(this, "setExtData");
			this.w.extData = a
		},
		getOptions: function() {
			return this.w
		},
		show: function() {
			g.c.add(this, "show");
			this.w.visible = !0;
			this.g && this.g.add(this);
			return this
		},
		hide: function() {
			g.c.add(this, "hide");
			this.w.visible = !1;
			this.g && this.g.remove(this);
			return this
		}
	});
	z.B.Tn = z.B.Eh.extend({
		w: {
			visible: !1,
			items: []
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.ContextMenu";
			g.c.ya(this, a);
			this.$g = !0;
			g.a.ub(this, a);
			this.w.items = [];
			this.jf(this.w)
		},
		addItem: function(a, b, c) {
			g.c.add(this, "addItem");
			this.get("items").push({
				Qn: a,
				xb: b,
				iK: c
			});
			this.q("items")
		},
		removeItem: function(a, b) {
			g.c.add(this, "removeItem");
			var c = this.get("items"),
				d, e;
			for (e = 0; e < c.length; e += 1)
				if (d = c[e], d.Qn === a && d.xb === b) {
					c.splice(e, 1);
					break
				} this.q("items")
		},
		open: function(a, b) {
			g.c.add(this, "open");
			this.C = !0;
			b = g.a.Ka(b);
			this.set("position", b);
			this.map ? this.map && this.map !== a && (this.map.Jz(this), this.map = a, this.setMap(a)) :
				(this.map = a, this.setMap(a));
			this.q("open", {
				type: "open",
				target: this
			});
			this.C = !1
		},
		close: function() {
			g.c.add(this, "close");
			this.C = !0;
			this.setMap(null);
			this.map && (this.map = this.map.qy = null, this.q("close", {
				type: "close",
				target: this
			}));
			this.C = !1
		}
	});
	z.B.Ye = z.B.Eh.extend({
		w: {
			visible: !0,
			offset: new g.H(0, 0),
			showShadow: !1,
			closeWhenClickMap: !1,
			retainWhenClose: !0,
			autoMove: !0,
			altitude: 0,
			anchor: "bottom-center"
		},
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.InfoWindow";
			g.c.ya(this, a);
			a = a || {};
			this.$g = !0;
			a && a.size && (a.size = g.a.Kq(a.size));
			g.a.ub(this, a);
			this.jf(this.w);
			a.position && this.set("position", g.a.Ka(a.position), !0);
			a.height && this.set("altitude", this.bR(a.height), !0)
		},
		open: function(a, b, c) {
			g.c.add(this, "open");
			b = g.a.Ka(b);
			if (a && !this.gL && (b =
					b || this.get("position", null, !0))) {
				this.q("change", {
					type: "change",
					target: this
				});
				c = this.bR(c) || this.get("altitude");
				var d = this.get("map", null, !0);
				d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a
					.rm && a.rm.close(), this.set("position", b, !0), this.set("altitude", c, !0),
					this.C = !0, this.setMap(a), this.C = !1);
				this.q("open", {
					type: "open",
					target: this
				})
			}
		},
		close: function() {
			g.c.add(this, "close");
			this.B && this.B.map && (this.C = !0, this.setMap(null), this.map = null, this.q("change", {
					type: "change",
					target: this
				}),
				this.C = !1)
		},
		getAnchor: function() {
			g.c.add(this, "getAnchor");
			return this.get("anchor", null, !0)
		},
		setAnchor: function(a) {
			g.c.add(this, "setAnchor");
			this.set("anchor", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		setContent: function(a) {
			g.c.add(this, "setContent");
			this.set("content", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		getContentU: function() {
			g.c.add(this, "getContentU");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		getContent: function() {
			g.c.add(this,
				"getContent");
			return this.get("content", null, !0)
		},
		setPosition: function(a) {
			g.c.add(this, "setPosition");
			a = g.a.Ka(a);
			this.set("position", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		setOffset: function(a) {
			g.c.add(this, "setOffset");
			this.set("offset", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		getPosition: function() {
			g.c.add(this, "getPosition");
			return this.get("position", null, !0)
		},
		setSize: function(a) {
			g.c.add(this, "setSize");
			a = g.a.Kq(a);
			this.set("size", a);
			this.q("change", {
				type: "change",
				target: this
			})
		},
		getSize: function(a) {
			g.c.add(this, "getSize");
			var b = this.get("size", null, !0);
			if (b) return b;
			if (this.B && !a) return new g.xd(this.B.ph.offsetWidth, this.B.ph.offsetHeight)
		},
		getIsOpen: function() {
			g.c.add(this, "getIsOpen");
			return !!this.get("map")
		}
	});
	z.B.Zb = z.B.cM.extend({
		w: {
			isOutline: !1,
			outlineColor: "#000000",
			geodesic: !1,
			dirColor: "white",
			showDir: !1,
			borderWeight: 1
		},
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Polyline";
			g.c.ya(this, a);
			this.C = !0;
			z.B.Zb.bd.A.apply(this, arguments);
			this.$g = !0;
			a = a || {};
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
			a.path && (a.path = this.Ka(a.path));
			g.a.ub(this, a);
			this.setOptions(this.w);
			this.C = !1
		},
		getLength: function() {
			g.c.add(this, "getLength");
			for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].Ge(a[c +
				1]);
			return parseFloat(b.toFixed(2))
		},
		getBounds: function() {
			var a = this.get("path");
			if (!a || !a.length) return null;
			for (var b = new g.oe(180, 90, -180, -90), c = a.length - 1; 0 <= c; c -= 1) b.extend(a[c]);
			return b
		}
	});
	(function(a) {
		function b(a, b, c, d) {
			if (1 <= a) return d;
			var e = 1 - a;
			return e * e * b + 2 * e * a * c + a * a * d
		}

		function c(a, b, c, d, e) {
			if (1 <= a) return e;
			var f = 3 * (c[0] - b[0]),
				h = 3 * (d[0] - c[0]) - f,
				s = 3 * (c[1] - b[1]);
			c = 3 * (d[1] - c[1]) - s;
			return [(e[0] - b[0] - f - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + f * a + b[0], (e[1] - b[1] -
				s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
		}

		function d(a, c, d, e) {
			return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
		}

		function e(b, c) {
			c = a.a.Ka(c);
			return b.MD(c, 20).wl()
		}

		function f(b, c) {
			a.a.isArray(c) && (c = new a.H(c[0], c[1]));
			return b.lE(c,
				20)
		}

		function h(b, f, h, n, p, q) {
			var r = null;
			if (b && h && h.length) {
				b = [b];
				b.push.apply(b, h);
				b.push(f);
				h = 0;
				for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
				h = a.extend({
					tolerance: 4,
					interpolateNumLimit: [3, 300]
				}, q);
				q = h.tolerance;
				h = h.interpolateNumLimit;
				q = Math.max(2, q);
				for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var w = b[u],
					t = b[u + 1],
					r = r + Math.abs(t[0] - w[0]),
					s = s + Math.abs(t[1] - w[1]);
				a: {
					p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));q = null;
					switch (b.length) {
						case 3:
							q = d;
							break;
						case 4:
							q = c;
							break;
						default:
							r = null;
							break a
					}
					h = [];
					r = [0].concat(b);
					for (s = 1; s < p - 2; s++) r[0] = s / p,
					h.push(q.apply(null, r));h.push(b[b.length - 1]);r = h
				}
			}
			return r || [e(n, f)]
		}
		a.Jw = {
			KGa: d,
			qDa: c,
			EI: function() {
				function a(b, c, d) {
					return (((1 - 3 * d + 3 * c) * b + (3 * d - 6 * c)) * b + 3 * c) * b
				}

				function b(a) {
					return a
				}
				var c = {},
					d = "function" === typeof Float32Array;
				return function(e, f, h, s) {
					function u(b) {
						if (0 === b) b = 0;
						else if (1 === b) b = 1;
						else {
							for (var c = 0, d = 1; 10 !== d && w[d] <= b; ++d) c += 0.1;
							--d;
							var d = c + (b - w[d]) / (w[d + 1] - w[d]) * 0.1,
								l = 3 * (1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 *
								e;
							if (0.001 <= l) {
								for (c = 0; 4 > c; ++c) {
									l = 3 *
										(1 - 3 * h + 3 * e) * d * d + 2 * (3 * h - 6 * e) * d + 3 *
										e;
									if (0 === l) break;
									d -= (a(d, e, h) - b) / l
								}
								b = d
							} else if (0 === l) b = d;
							else {
								var d = c,
									c = c + 0.1,
									m, n = 0;
								do m = d + (c - d) / 2, l = a(m, e, h) - b, 0 < l ? c = m : d =
								m; while (1E-7 < Math.abs(l) && 10 > ++n);
								b = m
							}
							b = a(b, f, s)
						}
						return b
					}
					if (!(0 <= e && 1 >= e && 0 <= h && 1 >= h)) throw Error(
						"bezier x values must be in [0, 1] range");
					var v = arguments.toString();
					if (c[v]) return c[v];
					if (e === f && h === s) return b;
					for (var w = d ? new Float32Array(11) : Array(11), t = 0; 11 > t; ++t) w[t] = a(
						0.1 * t, e, h);
					return c[v] = u
				}
			}(),
			g4: function(a, b, c, d) {
				var e, f, r = [];
				e = 0;
				for (f =
					a.length; e < f; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c,
					d));
				return r
			},
			Rqa: function(a, b, c, d) {
				a = this.g4(a, b, c, d);
				c = [];
				d = 0;
				for (var e = a.length; d < e; d++) c.push(f(b, a[d]));
				return c
			}
		}
	})(g);
	z.B.sA = z.B.Zb.extend({
		w: {
			tolerance: 4,
			interpolateNumLimit: [3, 300]
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.BezierCurve";
			g.c.ya(this, a);
			z.B.sA.bd.A.apply(this, arguments)
		},
		getLength: function() {
			g.c.add(this, "getLength");
			this.get("map");
			this.C = !0;
			var a = this.getInterpolateLngLats();
			this.C = !1;
			return g.Et.distanceOfLine(a)
		},
		getInterpolateLngLats: function() {
			g.c.add(this, "getInterpolateLngLats");
			var a = this.get("map");
			return g.Jw.Rqa(this.get("path"), a && a.mj || g.Zh.HL, Math.pow(2, 2), this.w)
		},
		getSerializedPath: function() {
			g.c.add(this,
				"getSerializedPath");
			for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				if (e instanceof g.U) {
					var f = [];
					if (e.controlPoints)
						for (var h = 0, k = e.controlPoints.length; h < k; h++) f.push(e.controlPoints[
							h].zR()), f.push(e.controlPoints[h].wR());
					f.push(e.zR());
					f.push(e.wR());
					b.push(f)
				} else b.push(e)
			}
			return b
		},
		Ka: function(a) {
			var b = typeof a[0];
			if (g.a.isArray(a) && "object" === b) {
				for (b = 0; b < a.length; b += 1) a[b] = this.yja(a[b]);
				return a
			}
			return [this.pGa(a)]
		},
		yja: function(a) {
			var b;
			if (a instanceof g.U) b =
				a;
			else {
				b = typeof a[0];
				var c, d, e = [];
				if ("string" === b || "number" === b) {
					d = a.length;
					if (d % 2) throw Error("LngLat number should be even, now it's " + d);
					b = new g.U(a[d - 2], a[d - 1]);
					c = 0;
					for (d -= 2; c < d; c += 2) e.push(new g.U(a[c], a[c + 1]))
				} else if (g.a.isArray(a[0]))
					for (d = a.length, b = new g.U(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++)
						e.push(new g.U(a[c][0], a[c][1]));
				else throw Error("AMap.LngLat expected, now it's " + a);
				b && e.length && (b.controlPoints = g.a.Ka(e))
			}
			if (b.controlPoints && 2 < b.controlPoints.length) throw Error(
				"Control Points Number should be 1 or 2 !");
			return b
		}
	});
	z.B.Dc = z.B.cM.extend({
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Polygon";
			g.c.ya(this, a);
			this.C = !0;
			z.B.Dc.bd.A.apply(this, arguments);
			this.$g = !0;
			a = a || {};
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
			a.path && (a.path = this.Ka(a.path));
			g.a.ub(this, g.extend({
				fillColor: "#FFAA00",
				fillOpacity: 0.9
			}, a));
			this.setOptions(this.w);
			this.C = !1
		},
		v4: function(a) {
			var b = 6378137 * Math.PI / 180,
				c = 0,
				d = a.length;
			if (3 > d) return 0;
			for (var e = 0; e < d - 1; e += 1) var f = a[e],
				h = a[e + 1],
				k = f.R * b * Math.cos(f.Q * Math.PI / 180),
				f = f.Q * b,
				l = h.R *
				b * Math.cos(h.Q * Math.PI / 180),
				c = c + (k * h.Q * b - l * f);
			e = a[e];
			a = a[0];
			d = e.R * b * Math.cos(e.Q * Math.PI / 180);
			e = e.Q * b;
			h = a.R * b * Math.cos(a.Q * Math.PI / 180);
			c += d * a.Q * b - h * e;
			return 0.5 * Math.abs(c)
		},
		aK: function(a) {
			return a.length ? a[0] instanceof g.U ? [
				[a]
			] : a[0] instanceof Array && a[0][0] instanceof g.U ? [a] : a : a
		},
		getArea: function() {
			g.c.add(this, "getArea");
			for (var a = this.get("path", null, !0), a = this.aK(a), b = 0, c = 0, d = a.length; c <
				d; c += 1)
				for (var e = a[c], b = b + this.v4(e[0]), f = 1; f < e.length; f += 1) b -= this.v4(e[
					f]);
			return Number(b.toFixed(2))
		},
		toString: function() {
			g.c.add(this, "toString");
			for (var a = this.get("path"), a = this.aK(a), b = [], c = 0, d = a.length; c < d; c += 1) {
				for (var e = a[c], f = [], h = 0, k = e.length; h < k; h += 1) f.push(e[h].join(";"));
				b.push(f.join("|"))
			}
			return b.join("^")
		},
		getBounds: function() {
			var a = this.get("path");
			if (a && a.length) {
				for (var a = this.aK(a), b = new g.oe(180, 90, -180, -90), c = 0, d = a.length; c <
					d; c += 1)
					for (var e = a[c][0], f = e.length - 1; 0 <= f; f -= 1) b.extend(e[f]);
				return b
			}
			return null
		},
		contains: function(a) {
			g.c.add(this, "contains");
			a = g.a.Ka(a);
			var b = this.get("path"),
				b = this.aK(b);
			a = [a.R, a.Q];
			for (var c = 0, d = b.length; c < d; c += 1) {
				for (var e = b[c], f = !1, h = 0, k = e.length; h < k && (f = this.cna(e[h]), g.wd.tq(
						f) || f.reverse(), f = g.wd.Sd(a, f, 0 === h ? !0 : !1), 0 < h && (f = !f), f
						); h += 1);
				if (f) return !0
			}
			return !1
		},
		cna: function(a) {
			for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].R, a[c].Q]);
			return b
		}
	});
	z.B.gh = z.B.fd.extend({
		w: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			radius: 1E3,
			fillColor: "#006600",
			fillOpacity: 0.9,
			unit: "miter"
		},
		A: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
			g.c.ya(this, a);
			this.C = !0;
			z.B.gh.bd.A.apply(this, arguments);
			a = a || {};
			a.center && (a.center = g.a.Ka(a.center));
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
			g.a.jk(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a
				.radius);
			g.a.ub(this, a);
			this.$g = this.w.center ? !0 : !1;
			this.setOptions(this.w);
			this.C = !1
		},
		setCenter: function(a, b) {
			g.c.add(this, "setCenter");
			(a = g.a.Ka(a)) && a instanceof g.U && (this.B && this.B.get("deltaPos") && this.B.set(
					"deltaPos", [0, 0], !0), this.set("center", a), this.q("change", {
					type: "change",
					target: this
				}), this.$g || (this.$g = !0, this.get("map") && this.get("map").q("overlays")),
				b || this.q("setCenter"))
		},
		getCenter: function() {
			g.c.add(this, "getCenter");
			var a = this.get("center", null, !0);
			this.B && this.B.get("deltaPos") && (a =
				this.B.Rt([a], this.B.get("deltaPos"))[0]);
			return a
		},
		reset: function() {
			var a = this.get("center", null, !0);
			this.B && this.B.get("deltaPos") && (a = this.B.Rt([a], this.B.get("deltaPos"))[0], this.B
				.set("deltaPos", [0, 0], !0));
			this.set("center", a)
		},
		setRadius: function(a, b) {
			g.c.add(this, "setRadius");
			this.set("radius", a);
			this.q("change", {
				type: "change",
				target: this
			});
			b || this.q("setRadius")
		},
		getPath: function(a) {
			g.c.add(this, "getPath");
			a = a || 36;
			for (var b = this.get("center", null, !0), c = this.get("radius", null, !0), d = [], e =
				0; e <
				a; e += 1) {
				var f = Math.PI * e / a * 2,
					h = Math.cos(f) * c,
					f = Math.sin(f) * c;
				d.push(b.offset(h, f))
			}
			return d
		},
		getRadius: function() {
			g.c.add(this, "getRadius");
			return this.get("radius", null, !0)
		},
		getBounds: function() {
			var a = this.get("center"),
				b = this.get("radius");
			if (!a) return null;
			var c = a.offset(-b, -b),
				a = a.offset(b, b);
			return new g.oe(c, a)
		},
		contains: function(a) {
			g.c.add(this, "contains");
			return this.get("center").Ge(a) <= this.get("radius") ? !0 : !1
		}
	});
	z.B.UV = z.B.gh.extend({
		A: function(a) {
			this.CLASS_NAME = "AMap.CircleMarker";
			g.c.ya(this, a);
			a = a || {};
			a.unit = "px";
			void 0 === a.radius ? a.radius = 20 : g.a.jk(a.radius, "string") && (a.radius = parseFloat(a
				.radius), isNaN(a.radius) && (a.radius = 20));
			z.B.UV.bd.A.apply(this, arguments)
		},
		getBounds: function() {
			this.C = !0;
			var a = this.getCenter();
			this.C = !1;
			return new g.oe(a, a.cb())
		},
		contains: function(a) {
			g.c.add(this, "contains");
			this.C = !0;
			var b = this.getMap();
			this.C = !1;
			if (!b) return !1;
			var c = this.get("center");
			b.C = !0;
			var d = !1;
			c.Ge(a) <=
				this.get("radius") * b.getResolution(c) && (d = !0);
			b.C = !1;
			return d
		}
	});
	var rc = g.da.extend({
		A: function(a) {
			var b = Array(3),
				c;
			c = a instanceof Array ? a : a instanceof g.Fl || a instanceof g.Pa ? a.elements :
			arguments;
			b[0] = c[0] || 0;
			b[1] = c[1] || 0;
			b[2] = c[2] || 0;
			this.elements = b
		},
		length: function() {
			return Math.sqrt(this.j6())
		},
		j6: function() {
			var a = this.elements;
			return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
		},
		normalize: function() {
			var a = this.elements,
				b = a[0],
				c = a[1],
				d = a[2],
				e = Math.sqrt(b * b + c * c + d * d);
			if (e) {
				if (1 === e) return this
			} else return a[0] = 0, a[1] = 0, a[2] = 0, this;
			e = 1 / e;
			a[0] = b * e;
			a[1] = c * e;
			a[2] = d * e;
			return this
		},
		cb: function() {
			return new g.Pa(this)
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			return this
		},
		set: function(a, b, c) {
			var d = this.elements;
			d[0] = a;
			d[1] = b;
			d[2] = c
		},
		gb: function(a) {
			var b = this.elements;
			a = a.elements;
			return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
		},
		Kn: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[1] *= a;
			b[2] *= a;
			return this
		},
		add: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] += a[0];
			b[1] += a[1];
			b[2] += a[2];
			return this
		},
		Zla: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[0] + d[0];
			e[1] = c[1] + d[1];
			e[2] = c[2] + d[2];
			return this
		},
		sub: function(a) {
			a = a.elements;
			var b = this.elements;
			b[0] -= a[0];
			b[1] -= a[1];
			b[2] -= a[2];
			return this
		},
		Vz: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[0] - d[0];
			e[1] = c[1] - d[1];
			e[2] = c[2] - d[2];
			return this
		},
		gs: function(a) {
			a = a.elements;
			var b = this.elements;
			b[0] = b[1] * a[2] - b[2] * a[1];
			b[1] = b[2] * a[0] - b[0] * a[2];
			b[2] = b[0] * a[1] - b[1] * a[0];
			return this
		},
		vy: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[1] * d[2] -
				c[2] * d[1];
			e[1] = c[2] * d[0] - c[0] * d[2];
			e[2] = c[0] * d[1] - c[1] * d[0];
			return this
		},
		Lf: function(a) {
			a = a.elements;
			var b = this.elements;
			return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
		},
		Ge: function(a) {
			return Math.sqrt(this.c3(a))
		},
		c3: function(a) {
			var b = a.elements,
				c = this.elements;
			a = c[0] - b[0];
			var d = c[1] - b[1],
				b = c[2] - b[2];
			return a * a + d * d + b * b
		},
		sf: function(a) {
			var b = this.elements[0],
				c = this.elements[1],
				d = this.elements[2];
			a = a.elements;
			var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
			this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
			this.elements[1] =
				(a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
			this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
			return this
		}
	});
	g.Pa = rc;
	g.Pa.Xb({
		Lf: "dot",
		cb: "clone",
		add: "add",
		sub: "sub",
		Zla: "addVectors",
		Vz: "subVectors",
		vy: "crossVectors",
		normalize: "normalize",
		length: "length"
	});
	var sc = g.da.extend({
		A: function(a) {
			var b = Array(4),
				c;
			c = a instanceof Array ? a : arguments;
			b[0] = c[0];
			b[1] = c[1];
			b[2] = c[2];
			b[3] = c[3] || 1;
			this.elements = b
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			b[3] = void 0 !== a[3] ? a[3] : 1;
			return this
		},
		multiply: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[1] *= a;
			b[2] *= a;
			b[3] *= a
		},
		sf: function(a) {
			var b = this.elements[0],
				c = this.elements[1],
				d = this.elements[2],
				e = this.elements[3];
			a = a.elements;
			this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
			this.elements[1] =
				a[1] * b + a[5] * c + a[9] * d + a[13] * e;
			this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
			this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
			return this
		}
	});
	g.Fl = sc;

	function vc(a, b) {
		this.vz = void 0 !== a ? a : new g.Pa(1, 0, 0);
		this.KC = void 0 !== b ? b : 0
	}
	g.Uw = vc;
	vc.prototype = {
		set: function(a, b) {
			this.vz.copy(a);
			this.KC = b;
			return this
		},
		normalize: function() {
			var a = 1 / this.vz.length();
			this.vz.Kn(a);
			this.KC *= a;
			return this
		},
		xI: function(a) {
			return this.vz.Lf(a) + this.KC
		}
	};

	function wc(a, b, c, d, e) {
		a.vz.set(b, c, d);
		a.KC = e;
		return a
	};

	function xc(a, b, c, d, e, f) {
		this.iE = [void 0 !== a ? a : new g.Uw, void 0 !== b ? b : new g.Uw, void 0 !== c ? c : new g.Uw, void 0 !==
			d ? d : new g.Uw, void 0 !== e ? e : new g.Uw, void 0 !== f ? f : new g.Uw
		]
	}
	g.dW = xc;
	xc.prototype = {
		set: function(a, b, c, d, e, f) {
			var h = this.iE;
			h[0].copy(a);
			h[1].copy(b);
			h[2].copy(c);
			h[3].copy(d);
			h[4].copy(e);
			h[5].copy(f);
			return this
		},
		cb: function() {
			return (new g.dW).copy(this)
		},
		copy: function(a) {
			for (var b = this.iE, c = 0; 6 > c; c++) b[c].copy(a.iE[c]);
			return this
		},
		yJ: function() {
			var a = new g.Pa,
				b = new g.Pa,
				c = a.elements,
				d = b.elements;
			return function(e) {
				var f = this.iE,
					h = e.max.elements;
				e = e.min.elements;
				for (var k = 0; 6 > k; k++) {
					var l = f[k],
						m = l.vz.elements;
					c[0] = 0 < m[0] ? e[0] : h[0];
					d[0] = 0 < m[0] ? h[0] : e[0];
					c[1] = 0 < m[1] ?
						e[1] : h[1];
					d[1] = 0 < m[1] ? h[1] : e[1];
					c[2] = 0 < m[2] ? e[2] : h[2];
					d[2] = 0 < m[2] ? h[2] : e[2];
					m = l.xI(a);
					l = l.xI(b);
					if (0 > m && 0 > l) return !1
				}
				return !0
			}
		}()
	};
	(function(a) {
		function b(a) {
			this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
		}
		a.bM = function(a) {
			this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a
				.elements[6], a.elements[8], a.elements[9], a.elements[10]
			]
		};
		b.prototype.BU = function() {
			var a = this.elements;
			a[0] = 1;
			a[4] = 0;
			a[8] = 0;
			a[12] = 0;
			a[1] = 0;
			a[5] = 1;
			a[9] = 0;
			a[13] = 0;
			a[2] = 0;
			a[6] = 0;
			a[10] = 1;
			a[14] = 0;
			a[3] = 0;
			a[7] = 0;
			a[11] = 0;
			a[15] = 1
		};
		b.prototype.set = function(a) {
			if (a.elements !== this.elements) return this.elements = a.elements.slice(0),
				this
		};
		b.prototype.toFixed = function(b) {
			for (var d = this.elements, e = 0; 16 > e; ++e) 0 !== d[e] && (d[e] = a.a.wb(d[e], b));
			return this
		};
		b.prototype.concat = function(a) {
			var b, e, f, h, k, l, m;
			e = b = this.elements;
			f = a.elements;
			if (b === f)
				for (f = Array(16), a = 0; 16 > a; ++a) f[a] = b[a];
			for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * f[0] +
				k * f[1] + l * f[2] + m * f[3], b[a + 4] = h * f[4] + k * f[5] + l * f[6] + m * f[7], b[a +
					8] = h * f[8] + k * f[9] + l * f[10] + m * f[11], b[a + 12] = h * f[12] + k * f[13] +
				l * f[14] + m * f[15];
			return this
		};
		b.multiply = function(b, d) {
			var e = Array(16),
				f, h,
				k, l, m, n, p;
			k = h = b.elements;
			l = d.elements;
			if (h === l)
				for (f = 0; 16 > f; ++f) e[f] = h[f];
			for (f = 0; 4 > f; f++) h = k[f], m = k[f + 4], n = k[f + 8], p = k[f + 12], e[f] = h * l[0] +
				m * l[1] + n * l[2] + p * l[3], e[f + 4] = h * l[4] + m * l[5] + n * l[6] + p * l[7], e[f +
					8] = h * l[8] + m * l[9] + n * l[10] + p * l[11], e[f + 12] = h * l[12] + m * l[13] +
				n * l[14] + p * l[15];
			return new a.Cc(e)
		};
		b.prototype.multiply = b.prototype.concat;
		b.prototype.Ah = function(b) {
			var d = this.elements;
			b = b.elements;
			var e = new a.Fl,
				f = e.elements;
			f[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
			f[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] *
				d[13];
			f[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
			f[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
			return e
		};
		b.prototype.cA = function() {
			var a, b;
			a = this.elements;
			b = a[1];
			a[1] = a[4];
			a[4] = b;
			b = a[2];
			a[2] = a[8];
			a[8] = b;
			b = a[3];
			a[3] = a[12];
			a[12] = b;
			b = a[6];
			a[6] = a[9];
			a[9] = b;
			b = a[7];
			a[7] = a[13];
			a[13] = b;
			b = a[11];
			a[11] = a[14];
			a[14] = b;
			return this
		};
		b.prototype.zxa = function(a) {
			var b, e, f;
			b = a.elements;
			a = this.elements;
			e = [];
			e[0] = b[5] * (b[10] * b[15] - b[11] * b[14]) - b[9] * (b[6] * b[15] + b[7] * b[14]) + b[13] * (
				b[6] * b[11] - b[7] * b[10]);
			e[4] = -b[4] *
				(b[10] * b[15] - b[11] * b[14]) + b[8] * (b[6] * b[15] - b[7] * b[14]) - b[12] * (b[6] * b[
					11] - b[7] * b[10]);
			e[8] = b[4] * (b[9] * b[15] - b[11] * b[13]) - b[8] * (b[5] * b[15] - b[7] * b[13]) + b[12] * (
				b[5] * b[11] - b[7] * b[9]);
			e[12] = -b[4] * (b[9] * b[14] - b[10] * b[13]) + b[8] * (b[5] * b[14] - b[6] * b[13]) - b[12] *
				(b[5] * b[10] - b[6] * b[9]);
			e[1] = -b[1] * (b[10] * b[15] - b[11] * b[14]) + b[9] * (b[2] * b[15] - b[3] * b[14]) - b[13] *
				(b[2] * b[11] - b[3] * b[10]);
			e[5] = b[0] * (b[10] * b[15] - b[11] * b[14]) - b[8] * (b[2] * b[15] - b[3] * b[14]) + b[12] * (
				b[2] * b[11] - b[3] * b[10]);
			e[9] = -b[0] * (b[9] * b[15] - b[11] * b[13]) + b[8] *
				(b[1] * b[15] - b[3] * b[13]) - b[12] * (b[1] * b[11] - b[3] * b[9]);
			e[13] = b[0] * (b[9] * b[14] - b[10] * b[13]) - b[8] * (b[1] * b[14] - b[2] * b[13]) + b[12] * (
				b[1] * b[10] - b[2] * b[9]);
			e[2] = b[1] * (b[6] * b[15] - b[7] * b[14]) - b[5] * (b[2] * b[15] - b[3] * b[14]) + b[13] * (b[
				2] * b[7] - b[3] * b[6]);
			e[6] = -b[0] * (b[6] * b[15] - b[7] * b[14]) + b[4] * (b[2] * b[15] - b[3] * b[14]) - b[12] * (
				b[2] * b[7] - b[3] * b[6]);
			e[10] = b[0] * (b[5] * b[15] - b[7] * b[13]) - b[4] * (b[1] * b[15] - b[3] * b[13]) + b[12] * (
				b[1] * b[7] - b[3] * b[5]);
			e[14] = -b[0] * (b[5] * b[14] - b[6] * b[13]) + b[4] * (b[1] * b[14] - b[2] * b[13]) - b[12] * (
				b[1] * b[6] -
				b[2] * b[5]);
			e[3] = -b[1] * (b[6] * b[11] - b[7] * b[10]) + b[5] * (b[2] * b[11] - b[3] * b[10]) - b[9] * (b[
				2] * b[7] - b[3] * b[6]);
			e[7] = b[0] * (b[6] * b[11] - b[7] * b[10]) - b[4] * (b[2] * b[11] + b[3] * b[10]) + b[8] * (b[
				2] * b[7] - b[3] * b[6]);
			e[11] = -b[0] * (b[5] * b[11] + b[7] * b[9]) + b[4] * (b[1] * b[11] - b[3] * b[9]) - b[8] * (b[
				1] * b[7] + b[3] * b[5]);
			e[15] = b[0] * (b[5] * b[10] - b[6] * b[9]) - b[4] * (b[1] * b[10] + b[2] * b[9]) + b[8] * (b[
				1] * b[6] - b[2] * b[5]);
			f = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
			if (0 === f) return this;
			f = 1 / f;
			for (b = 0; 16 > b; b++) a[b] = e[b] * f;
			return this
		};
		b.prototype.Dg = function() {
			return (new b).zxa(this)
		};
		b.prototype.EU = function(a, b, e, f, h, k) {
			var l, m, n, p;
			if (a === b || e === f || h === k) throw "null frustum";
			m = 1 / (b - a);
			n = 1 / (f - e);
			p = 1 / (k - h);
			l = this.elements;
			l[0] = 2 * m;
			l[1] = 0;
			l[2] = 0;
			l[3] = 0;
			l[4] = 0;
			l[5] = 2 * n;
			l[6] = 0;
			l[7] = 0;
			l[8] = 0;
			l[9] = 0;
			l[10] = -2 * p;
			l[11] = 0;
			l[12] = -(b + a) * m;
			l[13] = -(f + e) * n;
			l[14] = -(k + h) * p;
			l[15] = 1;
			return this
		};
		b.prototype.gva = function(a, d, e, f, h, k) {
			return this.concat((new b).EU(a, d, e, f, h, k))
		};
		b.prototype.xxa = function(a, b, e, f, h, k) {
			var l, m, n, p;
			if (a === b || f === e || h === k) throw "null frustum";
			if (0 >= h) throw "near <= 0";
			if (0 >=
				k) throw "far <= 0";
			m = 1 / (b - a);
			n = 1 / (f - e);
			p = 1 / (k - h);
			l = this.elements;
			l[0] = 2 * h * m;
			l[1] = 0;
			l[2] = 0;
			l[3] = 0;
			l[4] = 0;
			l[5] = 2 * h * n;
			l[6] = 0;
			l[7] = 0;
			l[8] = (b + a) * m;
			l[9] = (f + e) * n;
			l[10] = -(k + h) * p;
			l[11] = -1;
			l[12] = 0;
			l[13] = 0;
			l[14] = -2 * h * k * p;
			l[15] = 0;
			return this
		};
		b.prototype.lR = function(a, d, e, f, h, k) {
			return this.concat((new b).xxa(a, d, e, f, h, k))
		};
		b.prototype.Y8 = function(a, b, e, f) {
			var h, k;
			if (e === f || 0 === b) throw "null frustum";
			if (0 >= e) throw "near <= 0";
			if (0 >= f) throw "far <= 0";
			a /= 2;
			k = Math.sin(a);
			if (0 === k) throw "null frustum";
			h = 1 / (f - e);
			k = Math.cos(a) /
				k;
			a = this.elements;
			a[0] = k / b;
			a[1] = 0;
			a[2] = 0;
			a[3] = 0;
			a[4] = 0;
			a[5] = k;
			a[6] = 0;
			a[7] = 0;
			a[8] = 0;
			a[9] = 0;
			a[10] = -(f + e) * h;
			a[11] = -1;
			a[12] = 0;
			a[13] = 0;
			a[14] = -2 * e * f * h;
			a[15] = 0;
			return this
		};
		b.prototype.perspective = function(a, d, e, f) {
			return this.concat((new b).Y8(a, d, e, f))
		};
		b.prototype.aw = function(a, b, e) {
			var f = this.elements;
			f[0] = a;
			f[4] = 0;
			f[8] = 0;
			f[12] = 0;
			f[1] = 0;
			f[5] = b;
			f[9] = 0;
			f[13] = 0;
			f[2] = 0;
			f[6] = 0;
			f[10] = e;
			f[14] = 0;
			f[3] = 0;
			f[7] = 0;
			f[11] = 0;
			f[15] = 1;
			return this
		};
		b.prototype.scale = function(a, b, e) {
			var f = this.elements;
			f[0] *= a;
			f[4] *= b;
			f[8] *= e;
			f[1] *= a;
			f[5] *= b;
			f[9] *= e;
			f[2] *= a;
			f[6] *= b;
			f[10] *= e;
			f[3] *= a;
			f[7] *= b;
			f[11] *= e;
			return this
		};
		b.prototype.b9 = function(a, b, e) {
			var f = this.elements;
			f[12] = a;
			f[13] = b;
			f[14] = e;
			return this
		};
		b.prototype.translate = function(a, b, e) {
			var f = this.elements;
			f[12] += f[0] * a + f[4] * b + f[8] * e;
			f[13] += f[1] * a + f[5] * b + f[9] * e;
			f[14] += f[2] * a + f[6] * b + f[10] * e;
			f[15] += f[3] * a + f[7] * b + f[11] * e;
			return this
		};
		b.prototype.Rz = function(a, b, e, f) {
			var h, k, l, m, n, p, q, r;
			a = Math.PI * a / 180;
			h = this.elements;
			k = Math.sin(a);
			a = Math.cos(a);
			0 !== b && 0 === e && 0 === f ?
				(0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k,
					h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) :
				0 === b && 0 !== e && 0 === f ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0,
					h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[
					3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== f ? (0 > f && (k = -k), h[
					0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] =
					0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b *
						b + e * e + f * f), 1 !== l && (l = 1 / l, b *= l, e *= l, f *= l), l = 1 - a, m =
					b * e, n = e * f, p = f * b, q = b * k,
					r = e * k, k *= f, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0,
					h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[
						9] = n * l - q, h[10] = f * f * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
			h[15] = 1;
			return this
		};
		b.prototype.rotate = function(a, d, e, f) {
			return this.concat((new b).Rz(a, d, e, f))
		};
		b.prototype.ct = function(a) {
			return this.rotate(a, 1, 0, 0)
		};
		b.prototype.dt = function(a) {
			return this.rotate(a, 0, 1, 0)
		};
		b.prototype.et = function(a) {
			return this.rotate(a, 0, 0, 1)
		};
		b.prototype.Xu = function(a) {
			for (var b = 0, e = this.elements.length; b < e; b++)
				if (this.elements[b] !==
					a.elements[b]) return !1;
			return !0
		};
		b.prototype.cb = function() {
			return new b(this.elements.slice(0))
		};
		a.Cc = b
	})(g);
	z.B.Dt = z.B.Dc.extend({
		w: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			radius: [1E3, 1E3],
			fillColor: "#006600",
			fillOpacity: 0.9
		},
		A: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			this.CLASS_NAME = "AMap.Ellipse";
			g.c.ya(this, b);
			var b = g.extend({}, this.w, b),
				c = this.Tr(b);
			b.path = c;
			z.B.Dt.bd.A.call(this, b);
			this.set("path", c);
			this.get("center") && this.get("map") || (this.$g = !1);
			this.on("movepoly", function(b) {
				var c =
					a.get("map");
				b = c.Od(c.Bb(a.get("center")).add(b.pK));
				"3D" === c.view.type && a.set("deltaPos", [0, 0], !0);
				a.set("center", b)
			})
		},
		Tr: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				b = [],
				c = a.center || this.get("center"),
				d = a.map || this.get("map");
			if (c && d)
				for (var c = g.a.Ka(c), e = a.radius || this.get("radius"), f = d.Bb(c), a = f.x, f = f
						.y, h = g.a.map(e, function(a) {
							return a / d.getResolution(c, 20)
						}), e = h[0], h = h[1], k = g.l.ba, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k =
						k ? 89 : 359; m <= k; m++) {
					var n = m * l,
						n = {
							x: a + e * Math.cos(n),
							y: f +
								h * Math.sin(n)
						};
					b.push(d.Od(n))
				}
			return b
		},
		mapChanged: function() {
			g.a.Ph(z.B.Dt.bd.mapChanged) && z.B.Dt.bd.mapChanged.apply(this);
			this.C = !0;
			this.setPath(this.Tr());
			this.C = !1;
			!this.$g && this.get("map") && (this.$g = !0, this.get("map").q("overlays"))
		},
		setCenter: function(a, b) {
			g.c.add(this, "setCenter");
			(a = g.a.Ka(a)) && a instanceof g.U && (this.B && this.B.get("deltaPos") && this.B.set(
					"deltaPos", [0, 0], !0), this.set("center", a), this.set("path", this.Tr()),
				this.$g || (this.$g = !0, this.get("map") && this.get("map").q("overlays")),
				b || (this.q("setCenter"), this.q("change", {
					type: "change",
					target: this
				})))
		},
		setRadius: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			g.c.add(this, "setRadius");
			a && 2 === a.length && (this.set("radius", a), this.set("path", this.Tr()), b || (this.q(
				"change", {
					type: "change",
					target: this
				}), this.q("setPath")))
		},
		setOptions: function(a) {
			z.B.Dt.bd.setOptions.call(this, a);
			this.C = !0;
			a.radius && this.setRadius(a.radius, !0);
			a.center && this.setCenter(a.center, !0);
			this.C = !1
		},
		getRadius: function() {
			g.c.add(this,
				"getRadius");
			return this.get("radius", null, !0)
		},
		getCenter: function() {
			g.c.add(this, "getCenter");
			var a = this.get("center", null, !0);
			this.B && this.B.get("deltaPos") && this.B.Rt([a], this.B.get("deltaPos"))[0];
			return a
		}
	});
	z.B.Kt = z.B.Dc.extend({
		w: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			fillColor: "#006600",
			fillOpacity: 0.9
		},
		A: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			this.CLASS_NAME = "AMap.Rectangle";
			g.c.ya(this, b);
			b = g.extend({}, this.w, b);
			this.C = !0;
			var c = this.Tr(b);
			b.path = c;
			z.B.Kt.bd.A.call(this, b);
			this.setPath(c);
			this.w.bounds && this.get("map") || (this.$g = !1);
			this.on("movepoly", function(b) {
				var c = a.get("map"),
					f = a.get("bounds"),
					h = c.Od(c.Bb(f.wc).add(b.pK));
				b = c.Od(c.Bb(f.nc).add(b.pK));
				"3D" === c.view.type && a.set("deltaPos", [0, 0]);
				a.set("bounds", new g.oe(h, b))
			});
			this.C = !1
		},
		Tr: function() {
			var a = [],
				b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this
				.get("bounds");
			if (b) {
				b.C = !0;
				var c = b.getSouthWest(),
					d = b.getNorthEast();
				b.C = !1;
				g.a.Tb([new g.U(c.R, c.Q, !0), new g.U(d.R, c.Q, !0), new g.U(d.R, d.Q, !0), new g.U(c
					.R, d.Q, !0)], function(b) {
					return a.push(b)
				})
			}
			return a
		},
		mapChanged: function() {
			g.a.Ph(z.B.Kt.bd.mapChanged) &&
				z.B.Kt.bd.mapChanged.apply(this);
			this.C = !0;
			this.setPath(this.Tr());
			this.C = !1;
			!this.$g && this.get("map") && (this.$g = !0, this.get("map").q("overlays"))
		},
		setOptions: function(a) {
			this.C = !0;
			z.B.Kt.bd.setOptions.call(this, a);
			a.bounds && this.setBounds(a.bounds, !0);
			this.C = !1
		},
		setBounds: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			g.c.add(this, "setBounds");
			a && a instanceof g.oe && (this.set("bounds", a), this.set("path", this.Tr()), this.$g || (
					this.$g = !0, this.get("map") && this.get("map").q("overlays")),
				b || (this.q("change", {
					type: "change",
					target: this
				}), this.q("setBounds")))
		},
		getBounds: function() {
			g.c.add(this, "getBounds");
			return this.get("bounds", null, !0)
		}
	});
	z.B.JW = z.B.vb.extend({
		w: {
			text: "",
			textAlign: "center",
			verticalAlign: "middle",
			offset: new g.H(0, 0)
		},
		A: function(a) {
			this.CLASS_NAME = "AMap.Text";
			g.c.ya(this, a);
			z.B.JW.bd.A.apply(this, arguments);
			this.kga();
			this.C = !0;
			this.setText(this.get("text"));
			this.setStyle(this.get("style"));
			this.C = !1
		},
		kga: function() {
			if (!this.jC) {
				var a = document.createElement("div");
				a.className = "amap-overlay-text-container";
				this.jC = a
			}
		},
		getText: function() {
			g.c.add(this, "getText");
			return this.get("text", null, !0)
		},
		setText: function(a) {
			g.c.add(this,
				"setText");
			a || 0 === a || (a = "");
			g.f.Cya(this.jC, "amap-overlay-text-empty", !a);
			g.c.add(this, "setText");
			this.set("text", a);
			this.jC.innerHTML = a;
			this.g8()
		},
		setStyle: function(a) {
			g.c.add(this, "setStyle");
			a = a || {};
			for (var b in a) a.hasOwnProperty(b) && (this.jC.style[b] = a[b]);
			this.g8()
		},
		g8: function() {
			this.C = !0;
			this.setContent(this.jC);
			this.setShadow(this.getShadow());
			this.C = !1
		}
	});
	g.gW = {
		find: function(a) {
			return g.a.find(this.ex || [], a)
		},
		XI: function() {
			return this.ex || []
		},
		Ld: function(a) {
			return null !== this.find(a)
		},
		add: function(a) {
			var b = this,
				c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Qs,
				d = this.ex || (this.ex = []);
			g.a.isArray(a) ? g.a.Tb(a, function(a) {
				b.add(a, c)
			}) : null === this.find(a) && (d.push(a), c(a));
			return this
		},
		remove: function(a) {
			var b = this,
				c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Qs,
				d = this.ex;
			if (d)
				if (g.a.isArray(a)) g.a.Tb(a, function(a) {
					b.remove(a,
						c)
				});
				else {
					var e = g.a.indexOf(d, a); - 1 !== e && (c(d[e]), d.splice(e, 1))
				} return this
		},
		clear: function() {
			this.Tb(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Qs);
			this.ex = [];
			return this
		},
		Tb: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : g.a.Qs,
				b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
			g.a.Tb(this.ex || [], function() {
				for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
				c = d[0];
				g.a.Ph(c.Tb) ? c.Tb(a, b) : a.apply(b || c, d)
			});
			return this
		},
		Ro: function(a) {
			for (var b =
					arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[
				d];
			this.Tb(function(b) {
				b && g.a.Ph(b[a]) && b[a].apply(b, c)
			});
			return this
		},
		h: function(a) {
			var b = arguments;
			this.Tb(function(a) {
				a.on.apply(a, b)
			});
			return this
		},
		G: function(a) {
			var b = arguments;
			this.Tb(function(a) {
				a.off.apply(a, b)
			});
			return this
		},
		addListener: function() {
			this.h.apply(this, arguments)
		},
		ay: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.a.Qs,
				c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			this.Tb(function(d) {
				d.on.call(d,
					event,
					function() {
						b();
						d.off(a)
					}, c)
			})
		},
		removeListener: function(a) {
			this.G(a.UQ, a.bS, a.bf)
		},
		O: function(a, b) {
			this.Tb(function(c) {
				c.emit(a, b)
			})
		}
	};
	z.B.Wn = z.B.Eh.extend({
		ka: [g.gW],
		A: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
			this.CLASS_NAME = "AMap.OverlayGroup";
			g.c.ya(this);
			z.B.Wn.bd.A.apply(this);
			this.map = null;
			this.add(a)
		},
		vc: function(a) {
			g.c.add(this, "setMap");
			this.Ro("setMap", a);
			this.Ro("setMap", a);
			this.set("map", a);
			this.map = a;
			return this
		},
		mapChanged: function() {},
		sC: function(a) {
			var b = this;
			g.c.add(this, "addOverlay");
			this.add(a, function(a) {
				b.map && (a.C = !0, a.setMap(b.map), a.C = !1)
			});
			return this
		},
		Jz: function(a) {
			var b =
				this;
			g.c.add(this, "removeOverlay");
			this.remove(a, function(a) {
				a.C = !0;
				a.getMap() === b.map && a.setMap(null);
				a.C = !1
			});
			return this
		},
		kd: function() {
			var a = this;
			g.c.add(this, "clearOverlays");
			this.clear(function(b) {
				b.C = !0;
				b.getMap() === a.map && b.setMap(null);
				b.C = !1
			});
			return this
		},
		Zy: function() {
			g.c.add(this, "hide");
			this.Ro("hide");
			return this
		},
		show: function() {
			g.c.add(this, "show");
			this.Ro("show");
			return this
		},
		ub: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			g.c.add(this, "setOptions");
			this.Ro("setOptions", a);
			return this
		}
	});
	z.B.Wn.Xb({
		find: "getOverlay",
		XI: "getOverlays",
		sC: ["addOverlay", "addOverlays"],
		Ld: "hasOverlay",
		Jz: ["removeOverlay", "removeOverlays"],
		kd: "clearOverlays",
		Tb: "eachOverlay",
		vc: "setMap",
		ub: "setOptions",
		show: "show",
		Zy: "hide",
		h: "on",
		G: "off"
	});
	(function(a, b) {
		function c(a, b) {
			if (!a.length) return !1;
			for (var c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e
					.properties._isAmap) return !1
			}
			return !0
		}

		function d(a) {
			for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
			return b
		}

		function e(a) {
			if (!a || !a.length) return [];
			a = b.a.Ka(a);
			for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].wl();
			a[a.length - 1].gb(a[0]) || c.push(a[0].wl());
			return c
		}

		function f(a) {
			if (!a) return [];
			a = b.a.Ka(a);
			b.a.isArray(a[0]) ||
				(a = [a]);
			for (var c = [], d = 0, f = a.length; d < f; d++) c[d] = e(a[d]);
			return c
		}
		a.B.eW = a.B.Wn.extend({
			A: function(c) {
				this.CLASS_NAME = "AMap.GeoJSON";
				b.c.ya(this, c);
				a.B.eW.bd.A.call(this, []);
				this.C = !0;
				this.w = b.extend({
					getMarker: function(b, c) {
						return new a.B.vb({
							innerOverlay: !0,
							position: c
						})
					},
					getPolyline: function(b, c) {
						return new a.B.Zb({
							path: c,
							innerOverlay: !0
						})
					},
					getPolygon: function(b, c) {
						return new a.B.Dc({
							path: c,
							innerOverlay: !0
						})
					},
					coordsToLatLng: function(a) {
						return a
					}
				}, c);
				if (!this.w.coordsToLatLngs) {
					var d = this.w.coordsToLatLng;
					this.w.coordsToLatLngs = function(a) {
						for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[
							c]));
						return b
					}
				}
				this.importData(this.w.geoJSON);
				this.C = !1
			},
			importData: function(a) {
				b.c.add(this, "importData");
				if (a && (a = this.fga(a), a.length)) {
					this.clearOverlays();
					this.sC(a);
					var c = this.w.map;
					if (c)
						for (var d = 0, e = a.length; d < e; d++) a[d].C = !0, a[d].setMap(c), a[d]
							.C = !1
				}
			},
			toGeoJSON: function() {
				b.c.add(this, "toGeoJSON");
				for (var a = this.XI(), c = [], d = 0, e = a.length; d < e; d++) a[d].C = !0, c[d] =
					a[d].toGeoJSON(), a[d].C = !1;
				return c
			},
			fga: function(a) {
				if (a) {
					b.a.isArray(a) || (a = [a]);
					for (var c = [], d = 0, e = a.length; d < e; d++) {
						var f = this.gga(a[d]);
						f && c.push(f)
					}
					return c
				}
			},
			CX: function(a) {
				var b = "Feature" === a.type ? a.geometry : a,
					b = this.w.coordsToLatLng(b ? b.coordinates : null),
					b = this.w.getMarker(a, b);
				this.Kr(a, b);
				return b
			},
			Xca: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null,
						e = [], f = 0, n = d.length; f < n; f++) e.push(this.CX(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_pointIndex: f,
						_parentProperities: c.properties
					},
					geometry: {
						type: "Point",
						coordinates: d[f]
					}
				})));
				d = new a.B.Wn(e);
				this.Kr(c, d);
				return d
			},
			BX: function(a) {
				var b = "Feature" === a.type ? a.geometry : a,
					b = this.w.coordsToLatLngs(b ? b.coordinates : null),
					b = this.w.getPolyline(a, b);
				this.Kr(a, b);
				return b
			},
			Wca: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null,
						e = [], f = 0, n = d.length; f < n; f++) e.push(this.BX(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_lineStringIndex: f,
						_parentProperities: c.properties
					},
					geometry: {
						type: "LineString",
						coordinates: d[f]
					}
				})));
				d = new a.B.Wn(e);
				this.Kr(c, d);
				return d
			},
			DX: function(a) {
				for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null,
						c = [], d = 0, e = b.length; d < e; d++) c.push(this.w.coordsToLatLngs(b[
					d]));
				b = this.w.getPolygon(a, c);
				this.Kr(a, b);
				return b
			},
			Yca: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null,
						e = [], f = 0, n = d.length; f < n; f++) e.push(this.DX(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_polygonIndex: f,
						_parentProperities: c.properties
					},
					geometry: {
						type: "Polygon",
						coordinates: d[f]
					}
				})));
				d = new a.B.Wn(e);
				this.Kr(c, d);
				return d
			},
			Qca: function(c) {
				for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], f = 0, n =
						d.length; f < n; f++) e.push(this.LN(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_geometryIndex: f,
						_parentProperities: c.properties
					},
					geometry: d[f]
				})));
				d = new a.B.Wn(e);
				this.Kr(c, d);
				return d
			},
			gga: function(b) {
				if (b) switch (b.type) {
					case "Feature":
						return this.LN(b);
					case "FeatureCollection":
						for (var c = b.features, d = [], e = 0, f = c.length; e < f; e++) {
							var p = this.LN(c[e]);
							p && d.push(p)
						}
						c = new a.B.Wn(d);
						this.Kr(b, c);
						return c;
					default:
						throw Error("Invalid GeoJSON object." + b.type);
				}
			},
			Kr: function(a, c) {
				c && a.properties && c.setExtData && (c.C = !0, c.setExtData(b.extend({}, c
					.getExtData() || {}, {
						_geoJsonProperties: a.properties
					})), c.C = !1)
			},
			LN: function(a) {
				var b = "Feature" === a.type ? a.geometry : a;
				if (!(b && b.coordinates || b)) return null;
				switch (b.type) {
					case "Point":
						return this.CX(a);
					case "MultiPoint":
						return this.Xca(a);
					case "LineString":
						return this.BX(a);
					case "MultiLineString":
						return this.Wca(a);
					case "Polygon":
						return this.DX(a);
					case "MultiPolygon":
						return this.Yca(a);
					case "GeometryCollection":
						return this.Qca(a);
					default:
						throw Error("Invalid GeoJSON geometry." + b.type);
				}
			}
		});
		a.B.Wn.Hb({
			toGeoJSON: function(a) {
				b.c.add(this, "toGeoJSON");
				a = a || this.XI();
				for (var e = [], f = 0, m = a.length; f < m; f++) a[f].toGeoJSON && (a[f].C = !0, e[
					f] = a[f].toGeoJSON(), a[f].C = !1);
				this.C = !0;
				a = this.getExtData() || {};
				this.C = !1;
				if (c(e, "Point")) e = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiPoint",
						coordinates: d(e)
					}
				};
				else if (c(e, "LineString")) e = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiLineString",
						coordinates: d(e)
					}
				};
				else if (c(e, "Polygon")) e = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiPolygon",
						coordinates: d(e)
					}
				};
				else if (c(e, "*")) {
					a = a._geoJsonProperties || {};
					for (var f = [], m = 0, n = e.length; m < n; m++) f.push(e[m].geometry);
					e = {
						type: "Feature",
						properties: a,
						geometry: {
							type: "GeometryCollection",
							geometries: f
						}
					}
				} else e = {
					type: "FeatureCollection",
					properties: a._geoJsonProperties || {},
					features: e
				};
				return e
			}
		});
		a.B.vb.Hb({
			toGeoJSON: function() {
				b.c.add(this,
					"toGeoJSON");
				this.C = !0;
				var a = this.getExtData() || {},
					c = this.getPosition().wl();
				this.C = !1;
				return {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "Point",
						coordinates: c
					}
				}
			}
		});
		a.B.Zb.Hb({
			toGeoJSON: function() {
				b.c.add(this, "toGeoJSON");
				this.C = !0;
				var a = this.getExtData() || {},
					c = this.getPath();
				this.C = !1;
				return {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "LineString",
						coordinates: e(c)
					}
				}
			}
		});
		a.B.Dc.Hb({
			toGeoJSON: function() {
				b.c.add(this, "toGeoJSON");
				this.C = !0;
				var a = this.getExtData() || {},
					c = this.getPath();
				this.C = !1;
				if (b.a.isArray(c[0]) && b.a.isArray(c[0][0])) {
					for (var d = [], e = 0; e < c.length; e += 1) d.push(f(c[e]));
					return {
						type: "Feature",
						properties: a._geoJsonProperties || {},
						geometry: {
							type: "MultiPolygon",
							coordinates: d
						}
					}
				}
				return {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "Polygon",
						coordinates: f(c)
					}
				}
			}
		})
	})(z, g);
	z.o.QL = z.o.Yb.extend({
		ka: [g.gW],
		A: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
			this.CLASS_NAME = "AMap.LayerGroup";
			g.c.ya(this, b);
			z.o.QL.bd.A.call(this, b);
			this.map = null;
			this.add(a)
		},
		vc: function(a) {
			g.c.add(this, "setMap");
			this.Ro("setMap", a);
			this.set("map", a);
			this.map = a;
			return this
		},
		mapChanged: function() {},
		PH: function(a) {
			var b = this;
			g.c.add(this, "addLayer");
			this.add(a, function(a) {
				b.map && (a.C = !0, a.setMap(b.map), a.C = !1)
			});
			return this
		},
		sk: function(a) {
			var b = this;
			g.c.add(this,
				"removeLayer");
			this.remove(a, function(a) {
				a.C = !0;
				a.getMap() === b.map && a.setMap(null);
				a.C = !1
			});
			return this
		},
		zna: function() {
			var a = this;
			g.c.add(this, "clearLayers");
			this.clear(function(b) {
				b.C = !0;
				b.getMap() === a.map && b.setMap(null);
				b.C = !1
			});
			return this
		},
		Zy: function() {
			g.c.add(this, "hide");
			this.Ro("hide");
			return this
		},
		show: function() {
			g.c.add(this, "show");
			this.Ro("show");
			return this
		},
		reload: function() {
			this.Ro("reload");
			return this
		},
		ub: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
			g.c.add(this, "setOptions");
			var c = g.a.keys(b);
			g.a.Tb(c, function(c) {
				a.Ro("set", c, b[c])
			});
			return this
		}
	});
	z.o.QL.Xb({
		find: "getLayer",
		XI: "getLayers",
		PH: ["addLayer", "addLayers"],
		Ld: "hasLayer",
		sk: ["removeLayer", "removeLayers"],
		zna: "clearLayers",
		Tb: "eachLayer",
		vc: "setMap",
		ub: "setOptions",
		show: "show",
		Zy: "hide",
		reload: "reload",
		h: "on",
		G: "off"
	});
	g.Yaa = z.Rb.extend({
		A: function(a, b) {
			b && (b.center = b.position, b.zoom = 11);
			arguments.callee.ma.apply(this, arguments);
			window.console && window.console.log && window.console.log(
				"\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002"
				)
		}
	});
	g.Zaa = z.B.vb.extend({
		A: function(a) {
			arguments.callee.ma.apply(this, arguments)
		}
	});
	g.wd = {
		ls: function(a, b) {
			for (var c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e, e += 1) c = Math.min(c, g.wd
				.Vxa(a, [b[d], b[e]]));
			return Math.sqrt(c)
		},
		Vxa: function(a, b) {
			return this.$K(a, this.F2(a, b))
		},
		$K: function(a, b) {
			var c = a[0] - b[0],
				d = a[1] - b[1];
			return c * c + d * d
		},
		FGa: function(a, b, c, d) {
			d = d || 1E-6;
			if (c[0] === b[0]) {
				var e = Math.min(b[1], c[1]);
				b = Math.max(b[1], c[1]);
				return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
			}
			var e = Math.min(b[0], c[0]),
				f = Math.max(b[0], c[0]);
			return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d &&
				a[0] >= e && a[0] <= f
		},
		F2: function(a, b) {
			var c = a[0],
				d = a[1],
				e = b[0],
				f = b[1],
				h = e[0],
				e = e[1],
				k = f[0],
				f = f[1],
				l = k - h,
				m = f - e,
				c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
			0 >= c || (1 <= c ? (h = k, e = f) : (h += c * l, e += c * m));
			return [h, e]
		},
		tq: function(a) {
			for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, h, k = 0; k < b; k += 1) h =
				a[k], f = h[0], h = h[1], c += (f - e) * (h + d), e = f, d = h;
			return 0 < c
		},
		Sd: function(a, b, c) {
			var d = a[0];
			a = a[1];
			var e = !1,
				f, h, k, l, m = b.length,
				n = 0;
			for (l = m - 1; n < m; l = n, n += 1) {
				var p = !1;
				f = b[n][0];
				h = b[n][1];
				k = b[l][0];
				l = b[l][1];
				if (f === d && h === a || k ===
					d && l === a) return c ? !0 : !1;
				if (h < a === l >= a) {
					f = (k - f) * (a - h) / (l - h) + f;
					if (d === f) return c ? !0 : !1;
					p = d < f
				}
				p && (e = !e)
			}
			return e
		},
		P7: function(a, b) {
			function c(a, b, c, d) {
				var e = [a[0] - b[0], a[1] - b[1]],
					f = [c[0] - d[0], c[1] - d[1]];
				a = a[0] * b[1] - a[1] * b[0];
				c = c[0] * d[1] - c[1] * d[0];
				d = 1 / (e[0] * f[1] - e[1] * f[0]);
				return [(a * f[0] - c * e[0]) * d, (a * f[1] - c * e[1]) * d]
			}

			function d(a, b, c) {
				return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
			}
			var e, f, h, k, l = a;
			e = b[b.length - 2];
			for (var m = 0, n = b.length - 1; m < n; m++) {
				f = b[m];
				var p = l,
					l = [];
				h = p[p.length - 1];
				for (var q = 0, r =
						p.length; q < r; q++) k = p[q], d(k, e, f) ? (d(h, e, f) || l.push(c(e, f, h, k)), l
					.push(k)) : d(h, e, f) && l.push(c(e, f, h, k)), h = k;
				e = f
			}
			if (3 > l.length) return [];
			l.push(l[0]);
			return l
		}
	};
	(function(a) {
		function b(b, c) {
			var d;
			a: {
				switch (b) {
					case "EPSG3395":
						d = a.Zh.ZV;
						break a;
					case "EPSG4326":
						d = a.Zh.$V;
						break a
				}
				d = a.Zh.HL
			}
			return {
				project: function(b) {
					a.a.isArray(b) && (b = new a.U(b[0], b[1]));
					return d.MD(b, c).wl()
				},
				unproject: function(b) {
					a.a.isArray(b) && (b = new a.H(b[0], b[1]));
					return d.lE(b, c).wl()
				},
				normalizePoint: function(b) {
					return a.a.Ka(b)
				},
				distance: function(b, c) {
					c = this.normalizePoint(c);
					if (a.a.isArray(c)) return this.distanceToLine(b, c);
					b = this.normalizePoint(b);
					var d = a.Lm.Ou,
						e = Math.cos,
						f = b.Q * d,
						h =
						c.Q * d,
						k = 2 * a.Lm.OQ,
						d = c.R * d - b.R * d,
						e = (1 - e(h - f) + (1 - e(d)) * e(f) * e(h)) / 2;
					return k * Math.asin(Math.sqrt(e))
				},
				ringArea: function(b) {
					b = this.normalizeLine(b);
					var c = a.Lm.OQ * a.Lm.Ou,
						d = 0,
						e = b.length;
					if (3 > e) return 0;
					for (var f = 0; f < e - 1; f += 1) var h = b[f],
						k = b[f + 1],
						u = h.R * c * Math.cos(h.Q * a.Lm.Ou),
						h = h.Q * c,
						v = k.R * c * Math.cos(k.Q * a.Lm.Ou),
						d = d + (u * k.Q * c - v * h);
					f = b[f];
					b = b[0];
					e = f.R * c * Math.cos(f.Q * a.Lm.Ou);
					f = f.Q * c;
					k = b.R * c * Math.cos(b.Q * a.Lm.Ou);
					d += e * b.Q * c - k * f;
					return 0.5 * Math.abs(d)
				},
				sphericalCalotteArea: function(b) {
					var c = a.Lm.OQ;
					b = c - c *
						Math.cos(b / c);
					return 2 * Math.PI * c * b
				}
			}
		}

		function c() {
			return {
				normalizePoint: function(a) {
					return a && a.x && a.y ? [a.x, a.y] : a
				},
				distance: function(a, b) {
					var c = a[0] - b[0],
						d = a[1] - b[1];
					return Math.sqrt(c * c + d * d)
				},
				project: function(a) {
					return a
				},
				unproject: function(a) {
					return a
				},
				ringArea: function(a) {
					for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
						var q = a[p - 1],
							r = a[p];
						b[0] = e[0] - r[0];
						b[1] = e[1] - r[1];
						c[0] = e[0] - q[0];
						c[1] = e[1] - q[1];
						d += b[0] * c[1] - b[1] * c[0]
					}
					return d / 2
				}
			}
		}

		function d(a) {
			for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e =
				a[d],
				n = a[d + 1],
				b = b + (n[0] - e[0]) * (n[1] + e[1]);
			if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) *
				(n[1] + e[1]);
			return 0 >= b
		}

		function e(b) {
			this.CLASS_NAME = "AMap.GeometryUtil";
			this.Vb = a.extend({
				onSegmentTolerance: 5,
				crs: "EPSG3857",
				maxZoom: 20
			}, b);
			this.setCrs(this.Vb.crs)
		}
		a.extend(e.prototype, {
			clone: function(b) {
				return new e(a.extend({}, this.Vb, b))
			},
			isPoint: function(b) {
				return b && (b instanceof a.U || a.a.isArray(b) && !isNaN(b[0]))
			},
			normalizePoint: function(a) {
				return a
			},
			normalizeLine: function(a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
				return b
			},
			normalizeMultiLines: function(b) {
				a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
				for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
				return c
			},
			setCrs: function(d) {
				a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this
					.Vb.maxZoom))
			},
			distance: function() {
				throw Error("distance Not implemented!");
			},
			Ex: function(a, b) {
				a = this.normalizeLine(a);
				this.isPoint(a[0]) || (a = a[0]);
				for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
				!0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(
					c), c.reverse());
				return c
			},
			cka: function(a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
				return b
			},
			closestOnSegment: function(b, c, d) {
				b = a.wd.F2(this.project(b), this.Ex([c, d]));
				return this.unproject(b)
			},
			closestOnLine: function(a, b) {
				b = this.normalizeLine(b);
				for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
					var p = this.closestOnSegment(a, b[e], b[e + 1]),
						q = this.distance(a, p);
					q < c && (c = q, d = p)
				}
				return d
			},
			distanceToSegment: function(a,
				b, c) {
				return this.distanceToLine(a, [b, c])
			},
			distanceToLine: function(a, b) {
				b = this.normalizeLine(b);
				this.isPoint(b[0]) || (b = b[0]);
				for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this
					.closestOnSegment(a, b[d], b[d + 1]),
					c = Math.min(c, this.distance(a, n));
				return c
			},
			distanceToPolygon: function(a, b) {
				return this.isPointInRing(a, b) ? 0 : this.distanceToLine(a, b)
			},
			isPointOnSegment: function(a, b, c, d) {
				if (!d && 0 !== d || 0 > d) d = this.Vb.onSegmentTolerance;
				return this.distanceToSegment(a, b, c) <= d
			},
			isPointOnLine: function(a, b, c) {
				b = this.normalizeLine(b);
				for (var d = 0, e = b.length; d < e - 1; d++)
					if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
				return !1
			},
			isPointOnRing: function(a, b, c) {
				b = this.normalizeLine(b);
				for (var d = 0, e = b.length; d < e; d++)
					if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
				return !1
			},
			isPointOnPolygon: function(a, b, c) {
				b = this.normalizeMultiLines(b);
				for (var d = 0, e = b.length; d < e; d++)
					if (this.isPointOnRing(a, b[d], c)) return !0;
				return !1
			},
			makesureClockwise: function(a) {
				d(a) || (a = [].concat(a), a.reverse());
				return a
			},
			makesureAntiClockwise: function(a) {
				d(a) &&
					(a = [].concat(a), a.reverse());
				return a
			},
			isPointInRing: function(b, c, d) {
				d || (c = this.normalizeLine(c));
				c = this.Ex(c, !0);
				return a.wd.Sd(this.project(b), c, !1)
			},
			isRingInRing: function(a, b, c) {
				for (var d = 0, e = a.length; d < e; d++)
					if (!this.isPointInRing(a[d], b, c)) return !1;
				d = 0;
				for (e = b.length; d < e; d++)
					if (this.isPointInRing(b[d], a, c)) return !1;
				return !0
			},
			isPointInPolygon: function(a, b) {
				b = this.normalizeMultiLines(b);
				for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d &&
						(c = !c), c); d += 1);
				return c
			},
			doesSegmentsIntersect: function(a,
				b, c, d, e) {
				e = e ? [a, b, c, d] : this.Ex([a, b, c, d]);
				a = e[0];
				b = e[1];
				c = e[2];
				d = e[3];
				e = !1;
				var n = (d[0] - c[0]) * (a[1] - c[1]) - (d[1] - c[1]) * (a[0] - c[0]),
					p = (b[0] - a[0]) * (a[1] - c[1]) - (b[1] - a[1]) * (a[0] - c[0]);
				a = (d[1] - c[1]) * (b[0] - a[0]) - (d[0] - c[0]) * (b[1] - a[1]);
				0 !== a && (b = n / a, a = p / a, 0 <= b && 1 >= b && 0 <= a && 1 >= a && (e = !0));
				return e
			},
			doesSegmentLineIntersect: function(a, b, c) {
				c = this.normalizeLine(c);
				for (var d = 0, e = c.length; d < e - 1; d++)
					if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
				return !1
			},
			doesSegmentRingIntersect: function(a, b, c, d) {
				d ||
					(c = this.normalizeLine(c));
				for (var e = 0, n = c.length; e < n; e++)
					if (this.doesSegmentsIntersect(a, b, c[e], c[e === n - 1 ? 0 : e + 1], d))
						return !0;
				return !1
			},
			doesSegmentPolygonIntersect: function(a, b, c) {
				c = this.normalizeMultiLines(c);
				for (var d = 0, e = c.length; d < e; d++)
					if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
				return !1
			},
			doesLineLineIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d - 1; c++)
					if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
				return !1
			},
			doesLineRingIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d - 1; c++)
					if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0;
				return !1
			},
			doesPolygonPolygonIntersect: function(a, b) {
				return this.doesRingRingIntersect(b, a) || this.isRingInRing(a, b) || this
					.isRingInRing(b, a) ? !0 : !1
			},
			doesPolygonContainsPolygon: function(a, b, c) {
				return this.isRingInRing(b, a, !0) || (c ? this.doesRingRingIntersect(b, a, !0) : !
					1)
			},
			doesRingRingIntersect: function(a, b, c) {
				c || (a = this.normalizeLine(a));
				for (var d = 0, e = a.length; d < e; d++)
					if (this.doesSegmentRingIntersect(a[d], a[d === e - 1 ?
							0 : d + 1], b, c)) return !0;
				return !1
			},
			DP: function(a, b) {
				for (var c = 0, d = 0; d < a.length - 1; d += 1) {
					var e = this.distance(a[d], a[d + 1]);
					if (e + c < b) c += e;
					else return c = (b - c) / e, [a[d][0] + c * (a[d + 1][0] - a[d][0]), a[d][1] +
						c * (a[d + 1][1] - a[d][1]), d
					]
				}
				return null
			},
			TX: function(a, b) {
				function c() {
					var a = [e[0] - n[0], e[1] - n[1]],
						b = [p[0] - q[0], p[1] - q[1]],
						d = e[0] * n[1] - e[1] * n[0],
						f = p[0] * q[1] - p[1] * q[0],
						h = 1 / (a[0] * b[1] - a[1] * b[0]);
					return [(d * b[0] - f * a[0]) * h, (d * b[1] - f * a[1]) * h]
				}

				function d(a) {
					return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
				}
				a = this.makesureAntiClockwise(a);
				b = this.makesureClockwise(b);
				var e, n, p, q, r = a;
				e = b[b.length - 1];
				for (var s = 0, u = b.length; s < u; s++) {
					n = b[s];
					var v = r,
						r = [];
					p = v[v.length - 1];
					for (var w = 0, t = v.length; w < t; w++) q = v[w], d(q) ? (d(p) || r.push(c()),
						r.push(q)) : d(p) && r.push(c()), p = q;
					e = n
				}
				return r
			},
			ringRingClip: function(a, b) {
				a = this.Ex(a);
				b = this.Ex(b);
				var c = this.TX(a, b);
				0 == c.length && (c = this.TX(b, a));
				return this.cka(c)
			},
			ringArea: function() {
				throw Error("distance Not implemented!");
			},
			distanceOfLine: function(a) {
				a = this.normalizeLine(a);
				for (var b = 0, c = 0, d = a.length; c <
					d - 1; c++) b += this.distance(a[c], a[c + 1]);
				return b
			},
			isClockwise: function(a) {
				a = this.Ex(a);
				return d(a)
			}
		});
		a.Et = new e;
		a.di = new e;
		a.di.setCrs("plane")
	})(g);
	g.JL = function() {
		var a = {};
		(function() {
			function b(a) {
				for (var b = 0, e = a.length, f = 0; f < e - 1; f++) var h = a[f],
					k = a[f + 1],
					b = b + (k[0] - h[0]) * (k[1] + h[1]);
				if (a[e - 1][0] !== a[0][0] || a[e - 1][1] !== a[0][1]) h = a[e - 1], k = a[0], b += (k[0] -
					h[0]) * (k[1] + h[1]);
				return 0 >= b
			}
			a.Mta = function(a) {
				b(a) && (a = [].concat(a), a.reverse());
				return a
			};
			a.C5 = b
		})();
		(function() {
			function b(a) {
				var b = a.length;
				2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
			}

			function c(a, b) {
				for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
			}
			a.Vh = function(a, e) {
				var f =
					2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
					h = arguments[3];
				e = e || [];
				var k = [],
					l = [];
				b(a);
				c(k, a);
				var m = a.length;
				e.forEach(b);
				for (var n = 0; n < e.length; n++) l.push(m), m += e[n].length, c(k, e[n]);
				l = (this.kL ? this.kL : g.Ec.kL)(k, l);
				if (h) {
					f = [];
					for (n = 0; n < l.length; n += 1) h = 2 * l[n], f.push([k[h], k[h + 1]]);
					return f
				}
				if (f)
					for (n = 0; n < l.length; n += 1) l[n] += f;
				return l
			}
		})();
		return a
	};
	(function(a) {
		a.rF = function() {
			function a(b, c, d, e, f) {
				for (var h, k = 0, l = c, n = d - e; l < d; l += e) k += (b[n] - b[l]) * (b[l + 1] + b[n +
					1]), n = l;
				if (f === 0 < k)
					for (f = c; f < d; f += e) h = r(f, b[f], b[f + 1], h);
				else
					for (f = d - e; f >= c; f -= e) h = r(f, b[f], b[f + 1], h);
				h && m(h, h.next) && (s(h), h = h.next);
				return h
			}

			function c(a, b) {
				if (!a) return a;
				b || (b = a);
				var c = a,
					d;
				do
					if (d = !1, c.t9 || !m(c, c.next) && 0 !== l(c.Ia, c, c.next)) c = c.next;
					else {
						s(c);
						c = b = c.Ia;
						if (c === c.next) break;
						d = !0
					} while (d || c !== b);
				return b
			}

			function d(a, b, e, f, r, u, C) {
				if (a) {
					if (!C && u) {
						var D = a,
							A = D;
						do null === A.z &&
							(A.z = h(A.x, A.y, f, r, u)), A.hp = A.Ia, A = A.nl = A.next; while (A !== D);
						A.hp.nl = null;
						A.hp = null;
						var D = A,
							B, G, H, I, P, L, M = 1;
						do {
							A = D;
							H = D = null;
							for (I = 0; A;) {
								I++;
								G = A;
								for (B = P = 0; B < M && (P++, G = G.nl, G); B++);
								for (L = M; 0 < P || 0 < L && G;) 0 !== P && (0 === L || !G || A.z <= G.z) ?
									(B = A, A = A.nl, P--) : (B = G, G = G.nl, L--), H ? H.nl = B : D = B, B
									.hp = H, H = B;
								A = G
							}
							H.nl = null;
							M *= 2
						} while (1 < I)
					}
					for (D = a; a.Ia !== a.next;) {
						A = a.Ia;
						G = a.next;
						if (u) a: if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1;
							else {
								P = h(H.x < a.x ? H.x < I.x ? H.x : I.x : a.x < I.x ? a.x : I.x, H.y < a.y ?
									H.y < I.y ? H.y : I.y : a.y < I.y ? a.y : I.y, f, r, u);
								M = h(H.x >
									a.x ? H.x > I.x ? H.x : I.x : a.x > I.x ? a.x : I.x, H.y > a.y ? H
									.y > I.y ? H.y : I.y : a.y > I.y ? a.y : I.y, f, r, u);
								for (B = a.nl; B && B.z <= M;) {
									if (B !== a.Ia && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B
											.y) && 0 <= l(B.Ia, B, B.next)) {
										H = !1;
										break a
									}
									B = B.nl
								}
								for (B = a.hp; B && B.z >= P;) {
									if (B !== a.Ia && B !== a.next && k(H.x, H.y, a.x, a.y, I.x, I.y, B.x, B
											.y) && 0 <= l(B.Ia, B, B.next)) {
										H = !1;
										break a
									}
									B = B.hp
								}
								H = !0
							}
						else a: if (H = a.Ia, I = a.next, 0 <= l(H, a, I)) H = !1;
							else {
								for (P = a.next.next; P !== a.Ia;) {
									if (k(H.x, H.y, a.x, a.y, I.x, I.y, P.x, P.y) && 0 <= l(P.Ia, P, P
										.next)) {
										H = !1;
										break a
									}
									P = P.next
								}
								H = !0
							} if (H) b.push(A.we /
							e), b.push(a.we / e), b.push(G.we / e), s(a), D = a = G.next;
						else if (a = G, a === D) {
							if (C)
								if (1 === C) {
									C = b;
									D = e;
									A = a;
									do G = A.Ia, H = A.next.next, !m(G, H) && n(G, A, A.next, H) && p(G,
										H) && p(H, G) && (C.push(G.we / D), C.push(A.we / D), C.push(H.we /
											D), s(A), s(A.next), A = a = H), A = A.next; while (A !== a);
									a = A;
									d(a, b, e, f, r, u, 2)
								} else {
									if (2 === C) a: {
										C = a;do {
											for (D = C.next.next; D !== C.Ia;) {
												if (A = C.we !== D.we)
													if (A = void 0, A = C.next.we !== D.we)
														if (A = void 0, A = C.Ia.we !== D.we) {
															A = A = void 0;
															b: {
																A = C;do {
																	if (A.we !== C.we && A.next
																		.we !== C.we && A.we !== D
																		.we && A.next.we !== D.we &&
																		n(A, A.next, C,
																			D)) {
																		A = !0;
																		break b
																	}
																	A = A.next
																} while (A !== C);A = !1
															}
															if (A = !A)
																if (A = void 0, A = p(C, D))
																	if (A = void 0, A = p(D, C)) {
																		A = C;
																		G = !1;
																		H = (C.x + D.x) / 2;
																		I = (C.y + D.y) / 2;
																		do A.y > I !== A.next.y > I && A
																			.next.y !== A.y && H < (A
																				.next.x - A.x) * (I - A
																				.y) / (A.next.y - A.y) +
																			A.x && (G = !G), A = A
																			.next; while (A !== C);
																		A = G
																	}
														} if (A) {
													a = q(C, D);
													C = c(C, C.next);
													a = c(a, a.next);
													d(C, b, e, f, r, u);
													d(a, b, e, f, r, u);
													break a
												}
												D = D.next
											}
											C = C.next
										} while (C !== a)
									}
								}
							else d(c(a), b, e, f, r, u, 1);
							break
						}
					}
				}
			}

			function e(a, b) {
				return a.x - b.x
			}

			function f(a, b) {
				var c = b,
					d = a.x,
					e = a.y,
					f = -Infinity,
					h;
				do {
					if (e <= c.y && e >= c.next.y &&
						c.next.y !== c.y) {
						var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
						if (l <= d && l > f) {
							f = l;
							if (l === d) {
								if (e === c.y) return c;
								if (e === c.next.y) return c.next
							}
							h = c.x < c.next.x ? c : c.next
						}
					}
					c = c.next
				} while (c !== b);
				if (!h) return null;
				if (d === f) return h.Ia;
				for (var l = h, m = h.x, n = h.y, r = Infinity, s, c = h.next; c !== l;) d >= c.x && c.x >=
					m && d !== c.x && k(e < n ? d : f, e, m, n, e < n ? f : d, e, c.x, c.y) && (s = Math
						.abs(e - c.y) / (d - c.x), (s < r || s === r && c.x > h.x) && p(c, a) && (h = c, r =
							s)), c = c.next;
				return h
			}

			function h(a, b, c, d, e) {
				a = 32767 * (a - c) * e;
				b = 32767 * (b - d) * e;
				a = (a | a << 8) & 16711935;
				a = (a | a << 4) & 252645135;
				a = (a | a << 2) & 858993459;
				b = (b | b << 8) & 16711935;
				b = (b | b << 4) & 252645135;
				b = (b | b << 2) & 858993459;
				return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
			}

			function k(a, b, c, d, e, f, h, k) {
				return 0 <= (e - h) * (b - k) - (a - h) * (f - k) && 0 <= (a - h) * (d - k) - (c - h) * (b -
					k) && 0 <= (c - h) * (f - k) - (e - h) * (d - k)
			}

			function l(a, b, c) {
				return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
			}

			function m(a, b) {
				return a.x === b.x && a.y === b.y
			}

			function n(a, b, c, d) {
				return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) &&
					0 < l(c, d, a) !== 0 < l(c, d, b)
			}

			function p(a,
				b) {
				return 0 > l(a.Ia, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.Ia, b) : 0 > l(a, b, a
					.Ia) || 0 > l(a, a.next, b)
			}

			function q(a, b) {
				var c = new u(a.we, a.x, a.y),
					d = new u(b.we, b.x, b.y),
					e = a.next,
					f = b.Ia;
				a.next = b;
				b.Ia = a;
				c.next = e;
				e.Ia = c;
				d.next = c;
				c.Ia = d;
				f.next = d;
				d.Ia = f;
				return d
			}

			function r(a, b, c, d) {
				a = new u(a, b, c);
				d ? (a.next = d.next, a.Ia = d, d.next.Ia = a, d.next = a) : (a.Ia = a, a.next = a);
				return a
			}

			function s(a) {
				a.next.Ia = a.Ia;
				a.Ia.next = a.next;
				a.hp && (a.hp.nl = a.nl);
				a.nl && (a.nl.hp = a.hp)
			}

			function u(a, b, c) {
				this.we = a;
				this.x = b;
				this.y = c;
				this.nl = this.hp =
					this.z = this.next = this.Ia = null;
				this.t9 = !1
			}
			return {
				kL: function(h, k, l) {
					l = l || 2;
					var m = k && k.length,
						n = m ? k[0] * l : h.length,
						p = a(h, 0, n, l, !0),
						r = [];
					if (!p) return r;
					var s, u, B, G;
					if (m) {
						var H = l,
							m = [],
							I, P, L;
						G = 0;
						for (I = k.length; G < I; G++) {
							P = k[G] * H;
							L = G < I - 1 ? k[G + 1] * H : h.length;
							P = a(h, P, L, H, !1);
							P === P.next && (P.t9 = !0);
							var M = L = P;
							do L.x < M.x && (M = L), L = L.next; while (L !== P);
							m.push(M)
						}
						m.sort(e);
						for (G = 0; G < m.length; G++) {
							k = m[G];
							H = p;
							if (H = f(k, H)) k = q(H, k), c(k, k.next);
							p = c(p, p.next)
						}
					}
					if (h.length > 80 * l) {
						s = B = h[0];
						u = m = h[1];
						for (H = l; H < n; H += l) G = h[H], k =
							h[H + 1], G < s && (s = G), k < u && (u = k), G > B && (B = G), k > m && (
								m = k);
						B = Math.max(B - s, m - u);
						B = 0 !== B ? 1 / B : 0
					}
					d(p, r, l, s, u, B);
					return r
				}
			}
		};
		a.eaa = a.rF()
	})(g);
	(function(a) {
		function b(a) {
			var b = a.length;
			2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
		}

		function c(a, b) {
			for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
		}
		a.Zn = {
			oi: function(a) {
				for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] -
					a[k][0] * a[h][1];
				return 0.5 * c
			},
			C5: function(b) {
				return 0 > a.Zn.oi(b)
			},
			normalize: function(b) {
				var c;
				if (b) {
					c = [];
					for (var f = 0, h = b.length; f < h; f += 1) c[f] = b[f] instanceof Array ? this
						.normalize(b[f]) : b[f] instanceof a.U ? [b[f].R, b[f].Q] : b[f] instanceof a
						.H ? [b[f].x, b[f].y] :
						b[f]
				}
				return c
			},
			Vh: function(d, e) {
				e = e || [];
				var f = [],
					h = [];
				b(d);
				c(f, d);
				var k = d.length;
				e.forEach(b);
				for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(f, e[l]);
				return a.eaa.kL(f, h)
			}
		}
	})(g);
	g.qI = function(a, b, c) {
		g.c.add({
			CLASS_NAME: "convertFrom"
		}, b);
		var d = g.r.Zd + "/v3/assistant/coordinate/convert";
		a = g.a.Ka(a);
		var e = [];
		if (a instanceof Array) {
			for (var f = 0, h = a.length; f < h; f += 1) e.push(a[f] + "");
			e = e.join(";")
		} else e = a + "";
		b = ["key=" + g.r.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
		d += 0 < b.length ? "?" + b.join("&") : "";
		d = new g.jb.zb(d, {
			callback: "callback"
		});
		d.h("complete", function(a) {
			if ("1" === a.status) {
				a = a.locations.split(";");
				for (var b = 0; b < a.length; b += 1) {
					var d = a[b].split(",");
					a[b] = new AMap.LngLat(d[0],
						d[1])
				}
				c && "function" === typeof c && c("complete", {
					info: "ok",
					locations: a
				})
			} else c && "function" === typeof c && c("error", a.info)
		}, this);
		d.h("error", function(a) {
			c && "function" === typeof c && c("error", a.info)
		}, this)
	};
	g.jb = g.jb || {};
	g.jb.hM = g.da.extend({
		ka: [g.va],
		A: function(a, b) {
			this.w = {
				callback: "cbk",
				type: "json",
				charset: "utf-8"
			};
			b = b || {};
			g.a.ub(this, b);
			this.url = a;
			this.send(a, b.Ed, b.N2, b.oU, b.responseType)
		},
		send: function(a) {
			var b = g.f.create("script");
			b.type = "text/javascript";
			b.charset = this.w.charset;
			var c = this;
			g.l.Ue ? b.onreadystatechange = function() {
				"loaded" !== this.readyState && "complete" !== this.readyState || c.q("complete")
			} : (b.onload = function() {
				c.q("complete")
			}, b.onerror = function() {
				c.q("error", {
					status: 0,
					info: "service error",
					url: a
				})
			});
			b.src = a;
			document.getElementsByTagName("head")[0].appendChild(b)
		}
	});
	g.jb.zb = g.jb.hM.extend({
		ina: function() {
			if (g.a.O8) return g.a.bL.push(this), !0
		},
		Wwa: function() {
			this.q("error", {
				info: "TIME_OUT_A"
			})
		},
		send: function(a, b, c, d) {
			function e() {
				window[f] = null;
				try {
					window[f] = null
				} catch (a) {}
				h.onerror = null;
				h.parentNode && h.parentNode.removeChild(h)
			}
			if (!this.w.fy || !this.ina()) {
				a = encodeURI(a);
				var f = this.w.fun;
				if (!f || window[f]) f = g.a.e4("jsonp_", 6) + "_";
				var h = document.createElement("script");
				h.type = "text/javascript";
				h.charset = "utf-8";
				h.async = !0;
				var k = this;
				g.l.Ue || (h.onerror = function() {
					e();
					k.q("error", {
						info: "REQUEST_FAILED",
						url: a
					})
				});
				window[f] = function(a) {
					e();
					if (k.w.callbackFunction) k.w.callbackFunction.call(k.w.context, a);
					else if (3E4 === a.errcode && a.data) g.a.O8 = !0, g.tb.load(
						"AMap.AntiCrabFrame",
						function() {
							g.a.fy || (g.a.fy = new g.Q$);
							g.a.bL.push(k);
							g.a.fy.open(k.w.Ed, a.data.host, k.fE || "", k.url)
						});
					else {
						if (a instanceof Array || "string" === typeof a) a = {
							data: a
						};
						a.cEa = f;
						k.q("complete", a)
					}
				};
				b = "?"; - 1 !== a.indexOf("?") && (b = "&");
				b = a + b + this.w.callback + "=" + f;
				if (-1 !== a.indexOf(g.r.Zd + "/v") || -1 !== a.indexOf(
					"yuntuapi.amap.com/datasearch") ||
					-1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + (
					"&appname=" + g.r.Tp), b += "&csid=" + g.a.Aw(), b += "&sdkversion=" + g.r.ln;
				if (c = this.w.GI) {
					var l = [],
						m;
					for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" +
						encodeURIComponent(c[m]));
					k.fE = l.join("&")
				}
				h.src = d ? b + "&rereq=true" : b;
				g.jb.zb.hea = document.getElementsByTagName("body")[0] || document.getElementsByTagName(
					"head")[0];
				g.jb.zb.hea.appendChild(h)
			}
		}
	});
	g.jb.XMLHttpRequest = g.jb.hM.extend({
		send: function(a, b, c, d, e) {
			var f = this;
			if ((g.l.Ue || g.l.i5) && window.XDomainRequest) {
				var h = this.J$ = new XDomainRequest;
				h.onerror = function(b) {
					f.q("error", {
						url: a,
						data: b
					})
				};
				h.onload = function() {
					f.q("complete", {
						url: a,
						data: h.responseText
					})
				};
				h.open(b || "GET", a);
				setTimeout(function() {
					h.send(c || void 0)
				}, 0)
			} else {
				var k = this.J$ = new XMLHttpRequest;
				k.onreadystatechange = function() {
					4 === k.readyState && 200 === k.status ? f.q("complete", {
						url: a,
						data: "arraybuffer" === k.responseType || "json" === k
							.responseType ?
							k.response : k.responseText
					}) : 404 === k.status && (k.abort(), f.q("error", {
						url: a,
						data: "404"
					}))
				};
				k.onerror = function(b) {
					k.abort();
					f.q("error", {
						url: a,
						data: b
					})
				};
				k.open(b || "GET", a);
				"POST" === b && k.setRequestHeader("Content-Type", d ||
					"application/x-www-form-urlencoded");
				e && (k.responseType = e);
				k.send(c || void 0)
			}
		},
		abort: function() {
			this.J$.abort()
		}
	});
	for (var $ = {
				v: "1.4.16",
				Pixel: g.H,
				LngLat: g.U,
				Size: g.xd,
				Bounds: g.oe,
				ArrayBounds: g.sp,
				PixelBounds: g.Wf,
				Panorama: g.Yaa,
				PanoramaMarker: g.Zaa,
				Map: z.Rb,
				View2D: z.NF,
				GroundImage: z.o.LL,
				Marker: z.B.vb,
				ImageMarker: z.B.FAa,
				Text: z.B.JW,
				Icon: z.B.ci,
				MarkerShape: z.B.Oaa,
				Polyline: z.B.Zb,
				BezierCurve: z.B.sA,
				Polygon: z.B.Dc,
				Circle: z.B.gh,
				CircleMarker: z.B.UV,
				Ellipse: z.B.Dt,
				Rectangle: z.B.Kt,
				ContextMenu: z.B.Tn,
				InfoWindow: z.B.Ye,
				Buildings: z.o.V$,
				TileLayer: z.o.rb,
				ImageLayer: z.o.BA,
				CanvasLayer: z.o.X$,
				VideoLayer: z.o.Fba,
				VectorLayer: z.o.fd,
				MassMarks: z.o.Qaa,
				CompositeLayer: z.o.aaa,
				LabelsLayer: z.o.pr,
				LabelMarker: z.B.Haa,
				LayerGroup: z.o.QL,
				OverlayGroup: z.B.Wn,
				GeoJSON: z.B.eW,
				CANVAS: "canvas",
				DOM: "dom",
				convertFrom: g.qI,
				Http: {
					JSONP: g.jb.zb
				},
				event: {
					CLASS_NAME: "AMap.event"
				}
			}, yc =
			"addDomListener addDomListenerOnce addListener addListenerOnce clearInstanceListeners clearListeners removeListener trigger"
			.split(" "), Ic = 0; Ic < yc.length; Ic += 1) $.event[yc[Ic]] = function() {
		var a = g.event[yc[Ic]],
			b = yc[Ic];
		return function() {
			g.c.ya($.event);
			g.c.add($.event,
				b);
			return a.apply(g.event, Array.prototype.slice.call(arguments))
		}
	}();
	$.GeometryUtil = {
		CLASS_NAME: "AMap.GeometryUtil"
	};
	for (var Jc =
			"distance ringArea isClockwise makesureClockwise makesureAntiClockwise distanceOfLine ringRingClip doesSegmentsIntersect doesSegmentLineIntersect doesSegmentRingIntersect doesSegmentPolygonIntersect doesLineLineIntersect doesLineRingIntersect doesPolygonPolygonIntersect doesRingRingIntersect isPointInRing isRingInRing isPointInPolygon isPointOnSegment isPointOnLine isPointOnRing isPointOnPolygon closestOnSegment closestOnLine distanceToSegment distanceToLine distanceToPolygon"
			.split(" "), Ic =
			0; Ic < Jc.length; Ic += 1) $.GeometryUtil[Jc[Ic]] = function() {
		var a = g.Et[Jc[Ic]],
			b = Jc[Ic];
		return function() {
			g.c.ya($.GeometryUtil);
			g.c.add($.GeometryUtil, b);
			return a.apply(g.Et, Array.prototype.slice.call(arguments))
		}
	}();
	$.GeometryUtil.triangulateShape = function(a, b) {
		g.c.ya($.GeometryUtil);
		g.c.add($.GeometryUtil, "triangulateShape");
		a = g.Zn.normalize(a);
		b = g.Zn.normalize(b);
		return g.Zn.Vh(a, b)
	};
	$.PlaneGeometryUtil = {
		CLASS_NAME: "AMap.PlaneGeometryUtil"
	};
	for (Ic = 0; Ic < Jc.length; Ic += 1) $.PlaneGeometryUtil[Jc[Ic]] = function() {
		var a = g.di[Jc[Ic]],
			b = Jc[Ic];
		return function() {
			g.c.ya($.PlaneGeometryUtil);
			g.c.add($.PlaneGeometryUtil, b);
			return a.apply(g.di, Array.prototype.slice.call(arguments))
		}
	}();
	$.PlaneGeometryUtil.triangulateShape = function(a, b) {
		g.c.ya($.PlaneGeometryUtil);
		g.c.add($.PlaneGeometryUtil, "triangulateShape");
		a = g.Zn.normalize(a);
		b = g.Zn.normalize(b);
		return g.Zn.Vh(a, b)
	};
	$.plugin = $.service = z.Rb.prototype.plugin;
	$.TileLayer.Satellite = z.o.rb.DW;
	$.TileLayer.RoadNet = z.o.rb.zW;
	$.TileLayer.google = z.o.rb.KL;
	$.TileLayer.Flexible = z.o.rb.yA;
	$.TileLayer.WMS = z.o.rb.Gba;
	$.TileLayer.WMTS = z.o.rb.Hba;
	$.TileLayer.Traffic = z.o.rb.LW;
	$.Panorama.Events = z.event;
	$.TileLayer.PanoramaLayer = z.o.rb.NAa;
	$.UA = {
		ie: g.l.Ds,
		ielt9: g.l.Ue,
		ielt11: g.l.Zra,
		mobile: g.l.ba,
		android: g.l.Xl,
		ios: g.l.ED
	};
	$.Browser = {
		ua: navigator.userAgent,
		mobile: g.l.ba,
		plat: g.l.Dz,
		mac: g.l.nz,
		windows: g.l.Zza,
		ios: g.l.ED,
		iPad: g.l.Sra,
		iPhone: g.l.Tra,
		android: g.l.Xl,
		android23: g.l.bma,
		chrome: g.l.chrome,
		firefox: g.l.aR,
		safari: g.l.AE,
		wechat: g.l.B$,
		uc: g.l.nza,
		qq: g.l.dwa,
		ie: g.l.Ds,
		ie6: g.l.zi,
		ie7: g.l.rv,
		ie8: g.l.Ue && !g.l.rv && !g.l.zi,
		ie9: g.l.i5,
		ie10: g.l.h5,
		ie11: g.l.Wra,
		edge: g.l.rpa,
		ielt9: g.l.Ue,
		baidu: g.l.VH,
		isLocalStorage: g.l.Fv,
		isGeolocation: !!navigator.geolocation,
		mobileWebkit: g.l.iua,
		mobileWebkit3d: g.l.F6,
		mobileOpera: !!g.l.hua,
		retina: g.l.Jc,
		touch: !!g.l.Tf,
		msPointer: !!g.l.H6,
		pointer: !!g.l.ET,
		webkit: g.l.A$,
		ie3d: g.l.Xra,
		webkit3d: g.l.BL,
		gecko3d: g.l.iqa,
		opera3d: g.l.ava,
		any3d: g.l.RH,
		isCanvas: g.l.il,
		isSvg: g.l.En,
		isVML: g.l.Ds,
		isWorker: !!window.Worker,
		isWebsocket: !!window.WebSocket,
		isWebGL: function() {
			for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"],
					c = null, d = 0; d < b.length; d += 1) {
				try {
					c = a.getContext(b[d])
				} catch (e) {}
				if (c)
					if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break;
					else return !0
			}
			return !1
		}
	};
	$.Util = {
		CLASS_NAME: "AMap.Util"
	};
	var Kc = {
		colorNameToHex: g.a.lI,
		rgbHex2Rgba: g.a.A8,
		argbHex2Rgba: g.a.Qr,
		isEmpty: g.a.uh,
		deleteItemFromArray: g.a.zy,
		deleteItemFromArrayByIndex: g.a.Fo,
		indexOf: g.a.indexOf,
		format: g.a.wb,
		isArray: g.a.isArray,
		isDOM: g.a.DJ,
		includes: g.a.ka,
		requestIdleCallback: g.a.pU,
		cancelIdleCallback: g.a.ZP,
		requestAnimFrame: g.a.Wc,
		cancelAnimFrame: g.a.ri,
		color2RgbaArray: g.a.Zl,
		color2Rgba: g.a.Nna
	};
	for (Ic in Kc) Kc.hasOwnProperty(Ic) && "function" == typeof Kc[Ic] && ($.Util[Ic] = function() {
		var a = Ic;
		return function() {
			g.c.ya($.Util);
			g.c.add($.Util, a);
			return Kc[a].apply(g.a, Array.prototype.slice.call(arguments))
		}
	}());
	$.DomUtil = {
		CLASS_NAME: "AMap.DomUtil"
	};
	var Lc = {
		getViewport: g.f.lJ,
		getViewportOffset: g.f.QR,
		create: g.f.create,
		setClass: g.f.rxa,
		hasClass: g.f.zn,
		addClass: g.f.Wa,
		removeClass: g.f.eb,
		setOpacity: g.f.Wq,
		rotate: g.f.rotate,
		setCss: g.f.$a,
		empty: g.f.Iz,
		remove: g.f.remove,
		TRANSFORM: g.f.pg,
		TRANSITION: g.f.JF
	};
	for (Ic in Lc) Lc.hasOwnProperty(Ic) && "function" == typeof Lc[Ic] && ($.DomUtil[Ic] = function() {
		var a = Ic;
		return function() {
			g.c.ya($.DomUtil);
			g.c.add($.DomUtil, a);
			return Lc[a].apply(g.f, Array.prototype.slice.call(arguments))
		}
	}());
	var Mc = g.r;
	$.User = {
		key: Mc.key
	};
	window.AMap = $;
	window.AMap.BuryPoint = g.BuryPoint;
	window.AMap.Class = g.da;
	g.Kj = g.da.extend({
		A: function(a, b, c, d) {
			this.start = a;
			this.end = b;
			this.transition = c;
			this.precision = d || 0;
			this.Yv = !1;
			this.update = g.a.bind(this.update, this);
			return this
		},
		Nn: function(a) {
			this.hh = this.startTime = +new Date;
			this.frames = 0;
			this.Yv = !0;
			this.yo = g.a.Wc(this.update);
			this.Pia = g.a.bind(this.Iq, a || this)
		},
		update: function() {
			this.frames += 1;
			var a = +new Date,
				b = a - this.startTime,
				b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this
				.hh) : null;
			"number" === typeof b && Math.abs(b - this.end) < this.precision ?
				(this.stop(), b = this.end) : this.yo = g.a.Wc(this.update);
			this.hh = a;
			this.Pia(b)
		},
		stop: function(a) {
			g.a.ri(this.yo);
			a && this.update();
			this.Yv = !1
		}
	});
	g.Kj.Easing = {
		Linear: {
			None: function(a) {
				return a
			}
		},
		Bounce: {
			In: function(a) {
				return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a +
					0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -=
						2.625 / 2.75) * a + 0.984375)
			},
			Out: function(a) {
				return g.Kj.Easing.Bounce.In(1 - a)
			}
		},
		Cubic: {
			In: function(a) {
				return 1 - a * a * a
			},
			Out: function(a) {
				a = 1 - a;
				return 1 - a * a * a
			}
		}
	};
	g.Rb = g.da.extend({
		ka: [g.va, g.Ze, g.QJ],
		A: function(a, b) {
			this.oc = g.a.bind(this.oc, this);
			this.D = b;
			this.mj = b.mj;
			this.Bm = "";
			this.rg = this.Jf = this.ej = !1;
			this.Tm = {};
			this.K = a;
			this.Uga();
			this.ssa();
			this.X("zooms", b, !0);
			this.X("size", b, !0);
			this.X("limitBounds", b);
			this.X("view", b);
			this.X("nolimg", b, !0);
			this.X("mapNumber", b, !0);
			this.X("lang", b, !0);
			this.X("features", b, !0);
			this.X("styleID", b, !0);
			this.X("forceBig", b, !0);
			this.X("mode", b, !0);
			this.X("showBuildingBlock", b, !0);
			this.X("mapStyle", b);
			var c = this.get("mapStyle");
			this.De = g.r.De[c] || g.r.De["default"];
			this.KH = "#a3ccff";
			this.nu = b.get("skyColor") || "#cce0ff";
			g.r.QQ && this.X("editEnable", b);
			g.r.QQ && this.Bd ? this.X("style", b, !0) : this.X("styleUrl", b);
			this.X("hightlight", b, !0);
			this.X("labelzIndex", b, !0);
			if (g.l.aL) {
				c = new z.o.rb({
					innerLayer: !0,
					zIndex: b.get("labelzIndex"),
					visible: !1
				});
				this.Gc = new g.o.Pj(c, this, ["point", "road"]);
				this.Gc.type = "\u77e2\u91cf\u6807\u6ce8";
				var d = this.D.get("defaultLayer");
				d && c.X("rejectMapMask", d, !0);
				b.labelsLayer = this.Gc.S;
				this.Gc.S.h("complete",
					this.Ar, this, !0);
				this.Gc.S.h("renderComplete", this.Ar, this);
				this.Gc.yB = this.Gc.Ci = !0
			}
			this.X("isHotspot", b, !0);
			this.X("layers", b);
			this.X("overlays", b);
			this.X("infos", b, !0);
			this.X("contextmenus", b, !0);
			this.X("controls", b);
			this.X("bounds", b);
			this.X("draw", b);
			this.af("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender vectorMapForeign"
				.split(" "), b);
			this.af("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom"
				.split(" "),
				b, !0);
			this.get("jogEnable") ? this.uv = !0 : this.uv = !1;
			this.jga();
			this.qga();
			this.EG && this.EG();
			this.X("resizeEnable", b);
			this.D.map = this;
			c = this.get("size");
			c = c.width * c.height / 65536;
			g.l.Jc && 3 < c && (this.WH = !0);
			this.V = {
				Ad: !1
			};
			this.KK()
		},
		editEnableChanged: function() {
			this.Bd = this.get("editEnable")
		},
		labelzIndexChanged: function() {
			this.Gc && this.Gc.set("zIndex", this.get("labelzIndex"))
		},
		styleChanged: function() {
			this.Fi = !0
		},
		mapStyleChanged: function() {
			if (this.D.Bi) {
				this.Bm && (this.set("style", ""), this.Mu = this.Bm = "");
				var a = this.get("mapStyle");
				this.Fi = !0;
				this.De = g.r.De[a] || g.r.De["default"];
				this.tE()
			}
		},
		styleUrlChanged: function() {
			if (this.D.Bi) {
				var a = this.get("styleUrl") || "";
				if (a !== this.Bm) {
					var b = -1 !== a.indexOf("?isPublic=true"),
						a = a.substr(0, 46),
						c = a.split("amap://styles/")[1];
					"normal" === c ? (this.Bm = "", this.set("nolimg", !!this.D.get("nolimg_param")),
						this.set("style", ""), this.Mu = "") : (this.hA = !0, this.set("nolimg", !
						0), b = new g.jb.zb(32 > c.length ? g.r.tc +
							"://webapi.amap.com/style2?name=" + c + "&key=" + g.r.key : g.r.tc +
							"://webapi.amap.com/v4/map/styles2?styleid=" +
							c + "&s=rsv3&key=" + g.r.key + (b ? "&ispublic=1" : ""), {
								callback: "callback"
							}), b.h("complete", function(a) {
							a.data && a.data.layer && this.set("layerStyle", JSON.parse(a.data
								.layer));
							a.data && a.data.content ? this.set("style", JSON.parse(a.data
								.content)) : this.set("style", "");
							this.hA = !1
						}, this), b.h("error", function() {
							this.hA = !1
						}, this), this.Bm = a, this.tE())
				}
			}
		},
		Q8: function(a) {
			this.K.style.background = a
		},
		kqa: function(a) {
			var b = this.get("center");
			if (a.contains(b)) return null;
			a = g.Et.closestOnLine(b, a.cV().path);
			return new g.U(a[0],
				a[1])
		},
		kna: function() {
			var a = this.get("limitBounds"),
				b = this.get("bounds");
			b.wc && b.wc.R > b.nc.R && (b.nc.R += 360);
			if (!a.contains(b)) {
				if (b instanceof g.sp) return this.kqa(a, b);
				var c = this.get("center").cb();
				a.vj() < b.vj() ? c.R = a.xi().R : (a.wc.R > b.wc.R && (c.R += a.wc.R - b.wc.R), a.nc
					.R < b.nc.R && (c.R += a.nc.R - b.nc.R));
				a.tj() < b.tj() ? c.Q = a.xi().Q : (a.wc.Q > b.wc.Q && (c.Q += a.wc.Q - b.wc.Q), a.nc
					.Q < b.nc.Q && (c.Q += a.nc.Q - b.nc.Q));
				return c
			}
		},
		VO: function() {
			var a = this.NU;
			this.D.refreshSize();
			var b = this.get("size");
			b && a && !b.gb(a) && (this.NU =
				b, this.gt = !0, this.set("display"), this.x8(b), this.get("resizeEnable") && this
				.qa("resize", {
					Bua: a,
					R6: b
				}))
		},
		l0: function() {
			var a = this;
			a.VO();
			a.PO = setTimeout(function() {
				a.l0()
			}, 200)
		},
		oda: function() {
			this.PO && (clearTimeout(this.PO), this.PO = null)
		},
		Uga: function() {
			this.D.C = !0;
			this.NU = this.D.getSize();
			this.D.C = !1;
			if (g.l.Ue || g.l.B$ && g.l.ED || g.l.Wta) this.l0();
			else {
				var a = this;
				g.F.Wla(this.K, function(b) {
					a.VO(b)
				})
			}
		},
		ssa: function() {
			var a = this.K;
			g.f.Wa(a, "amap-container");
			var b = {};
			b.$c = g.f.create("div", a, "amap-maps");
			this.Ml = g.f.create("div", a);
			this.Ml.style.display = "none";
			b.Wr = g.f.create("div", b.$c, "amap-drags");
			b.o = g.f.create("div", b.Wr, "amap-layers");
			b.B = g.f.create("div", b.Wr, "amap-overlays");
			b.controls = g.f.create("div", a, "amap-controls");
			b.XS = g.f.create("a", a, "amap-logo");
			g.f.create("img", b.XS).src = g.l.Jc ? this.D.w.logoUrlRetina : this.D.w.logoUrl;
			b.rn = g.f.create("div", a, "amap-copyright");
			b.rn.style.display = "none";
			350 < g.f.lJ(this.K).width && (b.rn.innerHTML = this.D.w.copyright, b.rn.u6 = g.f.create(
					"span", b.rn, "amap-mcode"),
				this.tE());
			this.Xa = b
		},
		tE: function() {
			var a = this.get("layers");
			if (a) {
				for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
					var e = a[d].get("mapNumber"),
						f = a[d].get("zIndex", null, !0);
					e && f > b && a[d].get("visible") && (c = e, b = f)
				}
				this.set("mapNumber", c);
				this.D.C = !0;
				a = this.D.getMapStyle();
				this.D.C = !1;
				"GS(2019)6379" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "",
					this.Xa.rn.style.visibility = "hidden");
				c && this.Xa.rn.u6 && (this.Xa.rn.u6.innerHTML = "- " + c + "\u53f7", this.Xa.rn.style
					.visibility = "visible");
				return c
			}
		},
		yY: function() {
			var a =
				0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
			g.Nj && (a ? g.Nj.flush() : this.E3 || (this.E3 = g.a.Wc(function() {
				g.Nj.flush();
				this.E3 = null
			}, this)))
		},
		bU: function(a) {
			var b = this,
				c = this.D.get("rasterLayer");
			c && (this.D.set("rasterLayer", void 0), this.D.c8 = !0, this.D.Rv = this.D.Ra, this.vi && (
				this.vi.vD = !1), c.o && (c.o.XD = !0), a || (this.cU = g.a.pU(function() {
				b.cU = null;
				b.D && b.D.sk(c)
			})));
			a && this.cU && g.a.ZP(this.cU)
		},
		Ar: function() {
			function a() {
				for (var a = d.get("layers"), b = d.get("zoom"), c = 0; c < a.length; c += 1) {
					var e =
						a[c].get("zooms");
					if (!(a[c].zj || a[c].Rv || a[c].r5 || !e || b > e[1] || b < e[0] || !a[c].get(
								"visible") || a[c].o && a[c].o.ga && 0 === a[c].o.ga.length || a[c].o &&
							a[c].o.XD || a[c].o && a[c].o.Ra)) return !1
				}
				a = d.D.get("features");
				return ("all" === a || g.a.ka(a, "point")) && d.Gc && d.Gc.get("visible") && 0 < d.Gc.ga
					.length && !d.Gc.Ra && !d.Gc.po ? !1 : !0
			}

			function b() {
				d.D && d.D.qm && d.D.qm.OB && d.D.qm.OB();
				d.D.V7 = 1;
				d.yY();
				d.set("display");
				d.MS = !0
			}

			function c() {
				g.a.Wc(function() {
					this.q("complete")
				}, d);
				d.D.Ra = !0;
				d.set("display")
			}
			if (!this.vI)
				if (this.MS) this.yY();
				else {
					var d = this,
						e = this.D.get("rasterLayer"),
						f = a();
					e ? (e.o && e.o.Ra && (this.D.Ra || c()), f && (this.D.Ra || c(), this.bU(), b())) :
						f && (this.D.Ra || c(), b(), this.D.c8 = !0)
				}
		},
		layersChanged: function() {
			this.la = this.la || [];
			for (var a = this.get("layers"), b = this.la.length - 1; 0 <= b; b -= 1) this.la[b] === this
				.td || this.la[b] === this.Ys || this.la[b].yB || this.la[b].S.yB || -1 !== g.a.indexOf(
					a, this.la[b].S) || (this.la[b].gg(), this.la[b].Hj && this.la[b].Hj.gg(), this.la[
					b].S.G("complete", this.Ar, this), this.la[b].S.G("renderComplete", this.Ar,
					this), this.la = g.a.Fo(this.la, b));
			for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1)
				if (!a[b].r5)
					if (a[b].qi) - 1 === g.a.indexOf(this.la, a[b].o) && this.la.push(a[b].o);
					else {
						var f = this.bg(a[b]);
						f && (this.la.push(f), a[b].qi = !0, a[b].o = f);
						a[b].h("complete", this.Ar, this, !0);
						a[b].h("renderComplete", this.Ar, this)
					} for (b = 0; b < this.la.length; b += 1) f = this.la[b].S, f.Fq && f.get(
				"visible") && (c = !0, !1 === f.get("detectRetina") && (d = !1), e = f.get(
					"textIndex") || e);
			this.Gc && (c || "3D" !== this.D.view.type ? this.Gc.po = !1 : (c =
				g.a.find(a, function(a) {
					if (z.o.Gt && a instanceof z.o.Gt && a.get("visible")) return !0
				}), this.Gc.po = c = !!c));
			a = g.a.indexOf(this.la, this.Gc);
			c && this.D.get("showLabel") ? (-1 === a && this.la.push(this.Gc), this.Gc.ja = d && g.l.ja,
				this.Gc.AC(this.get("mapStyle") || "normal"), this.Gc.set("zIndex", e), this.Gc.set(
					"visible", !0), this.D.uD = !0, this.D.get("isHotspot") ? this.Gc.Uua() : this
				.Gc.hQ()) : (this.Gc && (this.Gc.set("visible", !1), this.D.uD = !1, this.Gc.hQ()),
				this.D.uD = !1);
			this.D.isHotspotChanged();
			this.set("display", 0);
			this.tE()
		},
		isHotspotChanged: function() {
			this.layersChanged()
		},
		controlsChanged: function() {
			var a = this.get("controls"),
				b, c;
			if (a.add && 0 < a.add.length)
				for (; 0 < a.add.length;) b = a.add.shift(), (c = b.wu || b.addTo) && c.call(b, this.D,
					this.Xa.controls);
			else if (a.remove && a.remove.length)
				for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.Tv || b.removeFrom) && c.call(
					b, this.D, this.Xa.controls)
		},
		y1: function() {
			if (!this.vI) {
				var a = this;
				this.D1 = !1;
				a.td || (a.td = new g.o.fd(new z.o.fd, a), a.td.Af = 36, a.td.ig = 36, a.td.set(
						"zIndex", 120), a.la.push(a.td),
					a.td.WC = !0);
				for (var b = a.get("overlays"), c = [], d = 0; d < a.Vc.length; d += 1) - 1 === g.a
					.indexOf(b, a.Vc[d].Lb) && (a.Vc[d].Lb instanceof z.B.Ye || a.Vc[d].Lb instanceof z
						.B.Tn ? a.Vc[d].gg() : (a.td && a.Vc[d] instanceof g.B.vb ? (a.td.ah = g.a.zy(a
								.td.ah, a.Vc[d].L), a.td.j8([a.Vc[d].L])) : a.Ys && a.Ys.j8([a.Vc[d]
							.L]), a.Vc[d].L.fa ? (g.f.remove(a.Vc[d].L.fa), a.Vc[d].L.fa = null) : a.Vc[
								d].L.Ma && (g.f.remove(a.Vc[d].L.Ma.Oh), g.f.remove(a.Vc[d].L.Ma.Qc), g
								.f.remove(a.Vc[d].L.Ma.dir), a.Vc[d].L.Ma = null), a.Vc[d].Gn && a.Vc[d]
							.Gn.stop(), a.Vc[d].yh &&
							a.Vc[d].yh.stop(), a.Vc[d].Lb.qi = !1, a.Vc[d].Lb.yl(), a.Vc[d].Lb.B = null,
							a.Vc[d].Lb = null, a.Vc[d].L.Roa(), a.Vc[d].L = null, a.Vc[d].yl(), a.Vc[d]
							.Ce = null, a.Vc[d].ti(), a.Vc[d].map = null), c.push(a.Vc[d]));
				for (d = 0; d < c.length; d += 1) a.Vc = g.a.Fo(a.Vc, g.a.indexOf(a.Vc, c[d]));
				var e = [],
					f = [];
				g.a.mxa(function(b) {
					if (!b.qi && b.$g) {
						var c = b.B || a.Qma(b);
						c && (a.Vc.push(c), c instanceof g.B.Ye || c instanceof g.B.Tn ? c.Ss(
							a) : c instanceof g.B.vb ? e.push(c.L) : f.push(c.L), b.qi = !0)
					}
				}, b);
				e.length && a.td.$x(e);
				f.length && (a.Ys || (a.Ys = new g.o.fd(new z.o.fd,
					a), a.Ys.set("zIndex", 110), a.la.push(a.Ys)), a.Ys.$x(f));
				a.set("display", 0)
			}
		},
		overlaysChanged: function() {
			this.Vc = this.Vc || [];
			this.get("overlays") && 0 === this.get("overlays").length ? this.y1() : this.D1 || (g.a.Wc(
				this.y1, this), this.D1 = !0)
		},
		contextmenusChanged: function() {
			var a = this.get("contextmenu");
			if (a) {
				var b = this;
				g.tb.load("overlay", function() {
					b.qy = new g.B.Tn(a, b);
					b.set("display", 0)
				})
			}
		},
		infosChanged: function() {
			var a = this.get("infos");
			if (a) {
				this.rm = this.rm || {};
				var b, c = this;
				g.tb.load("overlay", function() {
					for (var d in a) a.hasOwnProperty(d) &&
						(b = a[d], c.rm[d] = c.rm[d] || new g.B.Ye(b, c))
				})
			}
		},
		Qma: function(a) {
			var b = null;
			if (a instanceof z.B.vb) b = new g.B.vb(a, this);
			else if (a instanceof z.B.Tn) b = new g.B.Tn(a, this);
			else if (a instanceof z.B.Ye) b = new g.B.Ye(a, this);
			else {
				var c = ["overlay"];
				"d" === this.get("overlayRender") ? (c.push("dvector"), g.l.En ? c.push("svg") : c.push(
					"vml")) : c.push("cvector");
				if (!this.Jza && !g.tb.ID(c)) {
					var d = this;
					g.tb.Fg(c, function() {
						this.Jza = !0;
						d.overlaysChanged()
					});
					return
				}
				a instanceof z.B.Dc ? b = new g.B.Dc(a, this) : a instanceof z.B.sA ?
					b = new g.B.sA(a, this) : a instanceof z.B.Zb ? b = new g.B.Zb(a, this) :
					a instanceof z.B.gh ? b = new g.B.gh(a, this) : a instanceof z.B.Dt ? b = new g.B
					.Dc(a, this) : a instanceof z.B.Kt && (b = new g.B.Dc(a, this))
			}
			return b
		},
		M3: function() {
			var a = this.De;
			this.Mu && (!this.Re || !this.Re.Gp || this.D && this.D.is) && (a = "function" ===
				typeof this.Mu ? this.Mu(this.vi.P.zoom) : this.Mu);
			return a
		},
		ICa: function() {
			function a() {}
			var b = new g.o.fd,
				c = [],
				d = new g.U(116.405467, 39.907761);
			new g.style.Ng.ci;
			for (var e = 0; 100 > e; e += 1)
				for (var f = 0; 100 > f; f += 1) {
					var h =
						new g.U(d.R + 0.02 * f, d.Q + 0.02 * e),
						h = new g.ai({
							name: "point" + (100 * e + f),
							map: this,
							W: new g.Aa.Mg(this.Bb(h))
						});
					c[100 * e + f] = h;
					h.h("hover", a, h)
				}
			b.$x(c);
			this.la.push(b)
		},
		mc: function() {},
		GCa: function(a) {
			var b = new g.o.fd,
				c = [],
				c = (new g.qaa({
					map: this
				})).QT(a);
			b.$x(c);
			this.la.push(b);
			this.set("display", 0)
		},
		bg: function(a) {
			var b = this;
			a = a.bg(this);
			if (!a) return null;
			if (a.length && "string" == typeof a[0]) g.tb.Fg(a, function() {
				b.layersChanged()
			});
			else return a;
			return null
		},
		BEa: function() {
			return this.Xa
		},
		RGa: function() {
			this.set("display",
				0)
		},
		displayChanged: function(a) {
			this.q1 || this.KK(a)
		},
		KK: function(a) {
			if (a)
				if (g.a.ri(this.xE), g.l.Xl) {
					var b = this;
					setTimeout(function() {
						b.oc()
					}, 0)
				} else this.oc();
			else this.Cw || (this.xE = g.a.Wc(this.oc), this.Cw = !0)
		},
		oc: function() {
			this.xE = null;
			if (!this.vI) {
				this.q("render");
				this.Cw = !1;
				var a = {};
				if (this.la && (a.size = this.D.get("size"), a.size.width && a.size.height)) {
					for (var b = this.D.view.type, c = [], d = 0, e = this.la.length; d < e; d += 1)
						this.la[d].Uf && this.la[d].Uf !== b ? this.la[d].Ra = !0 : (c.push(this.la[d]),
							this.la[d].Hj &&
							c.push(this.la[d].Hj));
					c.sort(function(a, b) {
						var c = a.get("zIndex"),
							d = b.get("zIndex");
						return c > d ? 1 : c === d ? a.cx > b.cx ? 1 : -1 : -1
					});
					a.la = c;
					c = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
					a.V1 = 15E5 < a.size.width * a.size.height * c * c;
					a.vD = !!this.D.get("rasterLayer");
					a.ba = g.l.ba;
					a.lang = this.get("lang");
					a.P = this.D.rD();
					a.Uf = b;
					this.D.C = !0;
					a.T = this.D.getResolution([0, 0]);
					a.Cq = this.D.get("mapStyle");
					a.Fi = this.Fi;
					this.D.C = !1;
					a.Ad = this.rg;
					a.Xoa = this.Tm;
					a.ge = this.ej;
					a.gf = this.Jf;
					a.SE = this.Jf && g.l.ba;
					a.iL = g.l.ba && this.ej;
					a.mt = g.l.ba && this.rg;
					this.mt = a.mt;
					b = this.get("targetLevel") || a.P.zoom;
					a.rp = a.P.zoom > b;
					a.Gf = a.P.zoom > b ? "zoomOut" : a.P.zoom < b ? "zoomIn" : "stable";
					a.qua = !0;
					a.WH = this.WH;
					for (var b = !1, f, c = !1, d = 0; d < this.la.length; d += 1) this.la[d].Di && this
						.la[d].S.get("visible") && a.P.zoom <= this.la[d].S.get("zooms")[1] && (a.gU = !
							0), this.la[d].me().Jc && (b = !0);
					for (d = 0; d < this.la.length; d += 1) this.la[d].S.MP && a.gU && (!this.ej && this
						.la[d].S.get("visible") && (f = this.la[d].S.MP(), f.jFa = 1, f.zoom = a.P
							.zoom), c = !0);
					this.nb = [];
					c && f && this.nb !==
						f && (this.nb = f);
					a.nb = this.nb;
					a.Jc = b;
					a.scale = Math.pow(2, a.P.zoom - a.P.ne);
					this.vi = a;
					this.Nc = this.D.get("mask");
					a.Nc = this.Nc;
					a.TJ = this.TJ;
					if (f = this.Oy()) f.oc(a), this.Fi = this.gR = this.TJ = !1
				}
			}
		},
		Oq: function(a) {
			if (!this.vI) {
				var b = {};
				if (this.la && (b.size = this.D.get("size"), b.size.width && b.size.height)) {
					for (var c = this.D.view.type, d = [], e = 0, f = this.la.length; e < f; e += 1)
						this.la[e].Uf && this.la[e].Uf !== c || !(this.la[e] instanceof g.o.Nm) || 0 > a
						.indexOf(this.la[e].S) || (d.push(this.la[e]), this.la[e].Hj && d.push(this.la[
							e].Hj));
					d.sort(function(a, b) {
						var c = a.get("zIndex"),
							d = b.get("zIndex");
						return c > d ? 1 : c === d ? a.cx > b.cx ? 1 : -1 : -1
					});
					b.la = d;
					a = g.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
					b.V1 = 15E5 < b.size.width * b.size.height * a * a;
					b.vD = !!this.D.get("rasterLayer");
					b.ba = g.l.ba;
					b.lang = this.get("lang");
					b.P = this.D.rD();
					b.Uf = c;
					this.D.C = !0;
					b.T = this.D.getResolution([0, 0]);
					b.Cq = this.D.get("mapStyle");
					b.Fi = this.Fi;
					this.D.C = !1;
					b.Ad = this.rg;
					b.Xoa = this.Tm;
					b.ge = this.ej;
					b.gf = this.Jf;
					b.SE = this.Jf && g.l.ba;
					b.iL = g.l.ba && this.ej;
					b.mt = g.l.ba && this.rg;
					this.mt = b.mt;
					c = this.get("targetLevel") || b.P.zoom;
					b.rp = b.P.zoom > c;
					b.Gf = b.P.zoom > c ? "zoomOut" : b.P.zoom < c ? "zoomIn" : "stable";
					b.qua = !0;
					b.WH = this.WH;
					c = !1;
					for (a = 0; a < this.la.length; a += 1) this.la[a].me().Jc && (c = !0);
					this.nb = [];
					b.nb = this.nb;
					b.Jc = c;
					b.scale = Math.pow(2, b.P.zoom - b.P.ne);
					this.vi = b;
					this.Nc = this.D.get("mask");
					b.Nc = this.Nc;
					(c = this.Oy()) && c.Oq(b)
				}
			}
		},
		Oy: function() {
			if (!this.J || this.J.type !== this.D.view.type || this.J.Lta)
				if (this.J = null, "3D" == this.D.view.type) {
					var a = this;
					g.tb.load("Map3D", function() {
						a.J || (a.J =
							new g.Ea.BF(a), a.set("display"))
					})
				} else this.J = new g.M.canvas.Rb(this);
			return this.J
		},
		vqa: function() {
			var a = [],
				b = this.get("controls").Ld,
				c;
			for (c in b) b[c].Qy && b[c].Qy() && a.push(b[c].Qy());
			return a
		},
		destroyChanged: function() {
			this.vI = 1;
			this.bU(!0);
			this.V = {};
			this.Gc && (this.Gc.S.G("complete", this.Ar, this), this.Gc.gg(), this.la = g.a.Fo(this.la,
				g.a.indexOf(this.la, this.Gc)));
			this.Re && this.Re.he && this.Re.he.S && this.Re.he.S.setMap();
			this.Nka && clearTimeout(this.Nka);
			this.rka();
			this.uha();
			this.yO && this.yO();
			this.xla();
			this.yl();
			this.D = this.D.map = null;
			this.K = this.K.___amap___ = null;
			this.ti();
			this.He && (this.He.stop(), this.He = null);
			this.Vf && (this.Vf.stop(), this.Vf = null);
			this.Fd && (this.Fd.stop(), this.Fd = null);
			this.J && this.J.Kf && this.J.Kf();
			this.J = null
		},
		xla: function() {
			var a = this.K;
			this.oda();
			g.F.Bna(a);
			g.f.Iz(a);
			this.Ml = null;
			g.f.eb(a, "amap-container");
			this.Xa = null
		},
		jogEnableChanged: function() {
			this.get("jogEnable") ? this.uv = !0 : this.uv = !1
		},
		drawChanged: function() {
			var a = this,
				b, c, d = this.get("draw");
			if (d) {
				this.sq || (this.sq = []);
				b = 0;
				for (c = this.sq.length; b < c; b += 1) this.sq[b].vwa();
				g.tb.load("interaction", function() {
					var b = new g.HAa({
						type: d,
						o: a.Ys
					}, a);
					a.sq.push(b);
					a.loaded = !0
				})
			} else if (this.sq)
				for (b = 0, c = this.sq.length; b < c; b += 1) this.sq[b].vwa(), this.sq[b].eDa(), this
					.G("click", this.sq[b].REa, this)
		},
		Xd: function(a, b, c) {
			return this.D.view.Xd(a, b, c)
		},
		yg: function(a, b, c) {
			return this.D.view.yg(a, b, c)
		},
		D4: function(a, b) {
			var c = this.get("size"),
				d = document.createElement("canvas");
			a = a || c.width;
			b = b || c.height;
			d.width = a;
			d.height = b;
			for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, f = d.getContext("2d"), h = this
					.Xa.o.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
			k.sort(function(a, b) {
				return a.style.zIndex - b.style.zIndex
			});
			for (l = 0; l < k.length; l += 1) {
				var m = k[l];
				if (g.f.zn(m, "amap-layer") || g.f.zn(m, "amap-e") || g.f.zn(m, "amap-labels"))
					if ("CANVAS" === m.tagName) {
						var h = c,
							n = e,
							p = parseFloat(m.style.width) || m.width,
							q = parseFloat(m.style.height) || m.height,
							r = 1;
						m.style.transform && (r = parseFloat(m.style.transform.split("(")[1]));
						f.drawImage(m, n, h, p * r, q * r)
					} else if ("DIV" ===
					m.tagName)
					for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m
							.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
						var v = r[u];
						if ("CANVAS" === v.tagName || "IMG" === v.tagName) h = parseFloat(v.style
							.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style
							.width) || v.width, q = parseFloat(v.style.height) || v.height, f.drawImage(
								v, n + m, h + s, p, q)
					}
			}
			return d.toDataURL()
		}
	});
	g.Rb.Hb({
		jga: function() {
			this.DB = !1;
			g.l.Tf && ("3D" === this.D.view.type ? this.Gca() : this.Eca());
			g.l.ba || this.Bca()
		},
		rka: function() {
			g.l.Tf && ("3D" === this.D.view.type ? this.zha() : this.yha());
			g.l.ba || (this.vha(), this.l_())
		},
		rotateEnableChanged: function() {
			this.cxa = this.get("rotateEnable");
			g.l.Tf && this.X1 && "3D" !== this.D.view.type && (this.cxa ? this.X1() : this.Aua())
		},
		zoomEnableChanged: function() {
			this.get("zoomEnable") ? (g.l.Tf && this.OP && "3D" !== this.D.view.type && this.OP(), g.l
				.ba || this.Dca()) : (g.l.Tf && this.gT && this.gT(),
				g.l.ba || this.l_())
		},
		mousewheelChanged: function() {},
		VS: function(a) {
			a && (this.DB = a.ru)
		},
		vw: function() {
			this.DB = !1
		},
		Li: function(a, b, c, d) {
			var e, f = {};
			a || (a = window.event);
			var h = g.F.km(a, this.Xa.$c);
			g.l.Tf && ("touchend" !== a.type ? this.V.Pga = h : h = this.V.Pga);
			f.Cb = h;
			f.Ta = this.yg(h);
			f.Ta && (f.Ta = f.Ta.toFixed(3));
			f.Nf = this.Od(f.Ta);
			c || (c = this.DB ? this.DB ? [this.DB] : null : this.$ea(f.Ta, d)) && 0 < c.length && c[0]
				.uo && (e = c[0].uo, f.ru = c[0]);
			e || "info" === a.$e || (e = this);
			f.hd = e;
			f.HBa = a.altKey;
			f.ctrlKey = a.ctrlKey;
			f.button = void 0 ===
				a.button ? 0 : a.button;
			f.uT = a;
			e && "AMap.LabelMarker" === e.CLASS_NAME && (f.lnglat = f.Nf, f.pixel = f.Cb, f.target = e,
				f.data = e.UW, f.originEvent = a);
			b || g.F.preventDefault(a);
			return f
		},
		WN: function(a) {
			return a && a !== this && a !== document
		},
		QO: function() {
			var a = this.V;
			a.fg && (a.ak.Cb.x === a.fg.x && a.ak.Cb.y === a.fg.y ? a.Jf = !1 : (a.Jf = !0, a.Dp || (a
					.iq.q("dragstart", a.hq), a.Dp = !0), a.iq.q("dragging", a.ak), a.fg = a.ak
				.Cb))
		},
		Txa: function(a) {
			for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
			return b
		},
		Nv: function(a, b, c) {
			return a &&
				b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
		},
		$ea: function(a, b) {
			var c = this.Oy();
			if (!c) return null;
			var d, e = this;
			this.la.sort(function(a, b) {
				return a.get("zIndex") > b.get("zIndex") ? -1 : 1
			});
			c.lq(a, this.la, function(a) {
				d = a;
				d = e.Txa(d)
			}, function() {
				d = []
			}, b);
			return d
		}
	});
	g.Rb.Hb({
		qga: function() {
			this.Tm = {};
			this.h("moveend", this.f7, this);
			g.l.Xl && (g.l.pL || g.l.VH) && this.h("zoomend", this.HV, this);
			this.h("movestart", this.g7, this);
			this.h("zoomstart", this.n7, this);
			this.h("zoomend", this.m7, this);
			this.FM();
			this.hB = 0;
			this.DY = {};
			"undefined" === typeof window.requestAnimationFrame && (this.hB = 2)
		},
		n7: function() {
			2 !== this.hB && 12 === this.get("zoom") && (this.hB = 1, g.a.hR.start(this.DY));
			this.ej = !0
		},
		m7: function() {
			1 === this.hB && 13 !== this.get("zoom") && (this.hB = 0, g.a.hR.cancel(this.DY));
			this.ej = !1;
			this.set("display")
		},
		U0: function(a, b) {
			this.Tm.left = 0 < a;
			this.Tm.right = 0 > a;
			this.Tm.bF = 0 < b;
			this.Tm.EQ = 0 > b
		},
		lu: function() {
			this.Tm.left = !1;
			this.Tm.right = !1;
			this.Tm.bF = !1;
			this.Tm.EQ = !1
		},
		uha: function() {
			this.G("moveend", this.f7, this);
			g.l.Xl && (g.l.pL || g.l.VH) && this.G("zoomend", this.HV, this);
			this.G("movestart", this.g7, this);
			this.G("zoomstart", this.n7, this);
			this.G("zoomend", this.m7, this);
			this.wha()
		},
		f7: function(a) {
			this.Jf = !1;
			this.lu();
			this.x8();
			!a.M5 && this.D.get("limitBounds", null, !0) ? (a = this.kna()) && !a.gb(this.get(
				"center")) ?
				this.UK(this.get("zoom"), a, !1, !0) : this.qa("moveend") : this.qa("moveend");
			this.set("display")
		},
		g7: function() {
			this.Jf = !0;
			this.lu()
		},
		dragEnableChanged: function() {
			(this.XC = this.get("dragEnable")) ? this.EM(): this.xO()
		},
		qa: function(a, b) {
			if (this.D.ve(a)) {
				var c;
				b && (c = b.R6 ? {
					type: a,
					newsize: b.R6,
					oldsize: b.Bua
				} : {
					type: a,
					pixel: b.Cb,
					target: this.D,
					lnglat: b.Nf,
					originEvent: b.uT
				});
				this.D.q(a, c)
			}
		},
		FM: function() {
			this.h("click", this.x_);
			this.h("dblclick", this.B_);
			g.l.Tf && this.vX();
			g.l.ba || this.Cca()
		},
		wha: function() {
			this.G("click",
				this.x_);
			this.G("dblclick", this.B_);
			g.l.Tf && this.m_();
			g.l.ba || this.xha()
		},
		cH: function(a, b) {
			var c = this.get("targetLevel") || this.get("zoom"),
				c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
				c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
			c === this.get("zoom") || this.Vf && this.Vf.Yv && c === this.Vf.end || this.qA(c, !1, a)
		},
		x_: function(a) {
			this.qa("click", a)
		},
		B_: function(a) {
			this.get("doubleClickZoom") && this.get("zoomEnable") && this.cH(a.Ta, 1);
			this.qa("dblclick", a)
		},
		oCa: function(a) {
			this.cH(a.JHa, a.G9);
			this.qa("touchend",
				a)
		},
		EM: function() {
			this.XC && ("3D" === this.D.view.type ? (this.h("dragstart", this.H_), this.h("dragging",
				this.D_), this.h("dragend", this.F_)) : (this.h("dragstart", this.G_), this.h(
				"dragging", this.C_), this.h("dragend", this.E_)))
		},
		xO: function() {
			this.XC || ("3D" === this.D.view.type ? (this.G("dragstart", this.H_), this.G("dragging",
				this.D_), this.G("dragend", this.F_)) : (this.G("dragstart", this.G_), this.G(
				"dragging", this.C_), this.G("dragend", this.E_)))
		},
		G_: function(a) {
			this.VS(a);
			this.lu();
			this.rg = !0;
			this.V.Ey = a.Cb.x;
			this.V.YC =
				a.Cb.y;
			this.He && (this.He.stop(), this.ss(!0));
			this.qa("dragstart");
			this.qa("movestart");
			this.q("movestart", a);
			this.Zxa()
		},
		C_: function() {
			var a = this.V,
				b = a.ak.Cb.x - a.Ey,
				c = a.ak.Cb.y - a.YC;
			if (c || b) {
				this.V.Jf = !0;
				this.U0(b, c);
				a.Ey = a.ak.Cb.x;
				a.YC = a.ak.Cb.y;
				var a = b,
					d = c,
					e = this.rotation;
				e && (e *= Math.PI / 180, a = b * Math.cos(e) + Math.sin(e) * c, d = -Math.sin(e) * b +
					Math.cos(e) * c);
				a = this.get("centerCoords").ab((new g.H(a, d)).Nd(this.T));
				(d = this.w2(a)) && (c = Math.round(this.Xd(d).ab(this.Xd(a)).y));
				this.Yo(this.Xa.Wr, b, c);
				a.x =
					(a.x + g.a.Fa) % g.a.Fa;
				this.set("centerCoords", a, !0);
				this.set("center", this.Od(a), !0);
				this.uv && (this.hh ? (a = new Date, this.Xt = 100 < a - this.hh ? new g.H(0, 0) : new g
					.H(b, c), this.hh = a) : this.hh = new Date);
				this.qa("dragging");
				this.qa("mapmove")
			} else this.V.Jf = !1, this.Xt = null, this.lu()
		},
		Yo: function(a, b, c) {
			if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
				var d = parseFloat(a.style.top) || 0,
					e = parseFloat(a.style.left) || 0,
					f = "";
				this.rotation && (f = g.f.nt[g.f.pg] + ":rotate(" + this.rotation +
					"deg);overflow:visible;");
				a.style.cssText = "position:absolute;top:" +
					(d + c) + "px;left:" + (e + b) + "px;" + f
			}
		},
		w2: function(a) {
			var b = this.D.view.YW(),
				c = this.NU.height * this.T / 2;
			return a.y < b.fc + c ? (a.y = b.fc + c, a) : a.y > b.sc - c ? (a.y = b.sc - c, a) : null
		},
		E_: function() {
			this.vw();
			100 < new Date - this.hh && (this.Xt = null);
			this.V.fg = null;
			this.rg = !1;
			this.lu();
			this.qa("dragend");
			if (this.uv && this.Xt)
				if (this.V.Jf) {
					var a = this.Xt,
						b = new g.H(0, 0);
					this.He = new g.Kj(a, b, function(a, b, e) {
						return 600 <= e ? b : a.Nd(1 - Math.pow(e / 600, 2)).floor()
					}, 1);
					this.He.Iq = function(a) {
						if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.He.stop(),
							this.q("moveend"), this.ss(), this.Xt = this.hh = null;
						else {
							var b = a.x,
								e = a.y,
								f = this.rotation;
							f && (f *= Math.PI / 180, b = a.x * Math.cos(f) + Math.sin(f) * a.y,
								e = -Math.sin(f) * a.x + Math.cos(f) * a.y);
							b = this.get("centerCoords").ab((new g.H(b, e)).Nd(this.T));
							e = this.w2(b);
							f = a.y;
							e && (f = Math.round(this.Xd(e).ab(this.Xd(b)).y));
							this.Yo(this.Xa.Wr, a.x, f);
							b.x = (b.x + g.a.Fa) % g.a.Fa;
							this.set("centerCoords", b, !0);
							this.set("center", this.Od(b), !0);
							this.qa("mapmove")
						}
					};
					this.He.Nn(this)
				} else this.q("moveend"), this.ss(!0), this.Xt = this.hh = null;
			else this.q("moveend"), this.ss(), this.Xt = this.hh = null
		},
		Zxa: function() {
			if (!this.V.refresh) {
				var a = this,
					b = null;
				this.V.refresh = setInterval(function() {
					b !== a.V.fg && (a.set("display", 0), b = a.V.fg)
				}, g.l.ba ? 400 : 100)
			}
		},
		HV: function() {
			if (g.l.Xl && (g.l.pL || g.l.VH)) {
				for (var a = this.Xa.o.childNodes, b = 0; b < a.length; b += 1) {
					var c = a[b];
					c instanceof HTMLCanvasElement && (c.width = 0);
					"amap-e" === c.className && (c.style.height = "0")
				}
				for (b = 0; b < this.la.length; b += 1) c = this.la[b], "undefined" !== typeof AMap
					.IndoorMap && c instanceof AMap.IndoorMap &&
					(c.tu && (c.tu.width = 0), c.Vx && (c.Vx.width = 0))
			}
		},
		ss: function(a) {
			this.V.refresh && (clearInterval(this.V.refresh), this.V.refresh = null);
			a || (this.HV(), this.set("display", 0))
		},
		x8: function(a) {
			this.set("refresh", a)
		}
	});
	g.Rb.Hb({
		setZoomSlow: function(a) {
			this.UK(a, null, !this.get("animateEnable"))
		},
		setPanTo: function(a) {
			this.UK(null, a, !this.get("animateEnable"))
		},
		zoomAndCenterChanged: function(a) {
			var b = a[0];
			b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
			b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
			this.UK(b, a[1], a[2] || !this.get("animateEnable"))
		},
		zoomChanged: function() {
			this.T = Math.pow(2, 20 - this.get("zoom"));
			this.q("closeOverlays");
			this.set("display")
		},
		rotationChanged: function(a) {
			this.rotation = this.get("rotation");
			this.D.q("rotate", {
				rotation: this.rotation || 0
			});
			!0 !== a && this.set("display", 0)
		},
		pitchChanged: function() {
			this.pitch = this.get("pitch");
			this.D.q("pitch", {
				pitch: this.pitch || 0
			});
			this.set("display", 0)
		},
		centerCoordsChanged: function() {
			this.q("closeOverlays");
			this.MBa ? this.KK(!0) : this.KK(!1)
		}
	});
	g.NW = g.da.extend({
		ka: [g.va, g.Ze],
		A: function(a, b) {
			this.type = "2D";
			this.jf(b, !0);
			a && this.Ama(a)
		},
		Ama: function(a) {
			this.map = a;
			this.af(["size", "refresh", "maxPitch"], a);
			this.centerChanged();
			a.af(["zoom", "center", "centerCoords", "rotation", "pitch"], this)
		},
		YW: function() {
			this.vM || this.Una();
			return this.vM
		},
		Una: function() {
			var a;
			if (this.get("center") instanceof g.U) {
				a = new g.oe(-180, -85, 180, 85);
				var b = this.map.Bb(a.dk());
				a = this.map.Bb(a.No());
				this.vM = {
					Ic: b.x,
					fc: b.y,
					Hc: a.x,
					sc: a.y
				}
			} else a = this.map.get("limitBounds",
				null, !0), this.vM = {
				Ic: a[0],
				fc: a[1],
				Hc: a[2],
				sc: a[3]
			}
		},
		rD: function() {
			var a = this.map,
				b = this.get("zoom");
			return {
				zoom: b,
				oh: this.get("center"),
				Ha: this.jm(),
				lb: this.get("centerCoords"),
				rotation: parseInt(this.get("rotation")),
				Pf: a.get("crs"),
				T: Math.pow(2, 20 - b),
				ne: Math.round(b),
				Gg: Math.pow(2, 20 - Math.round(this.get("zoom")))
			}
		},
		centerChanged: function() {
			this.set("centerCoords", this.map.Bb(this.get("center")).toFixed(3), !0)
		},
		centerCoordsChanged: function() {
			var a = this.map;
			a.C = !0;
			var b = this.YW(),
				c = this.get("centerCoords"),
				d = a.getSize();
			a.C = !1;
			var e = this.get("zoom", null, !0),
				a = this.get("center", null, !0),
				d = d.height * Math.pow(2, 20 - e) / 2;
			a instanceof g.U ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Hc && (
				c.x = b.Hc);
			c.y < b.fc + d ? c.y = b.fc + d : c.y > b.sc - d && (c.y = b.sc - d);
			this.set("center", this.map.Od(c), !0)
		}
	});
	g.NF = g.NW.extend({
		jm: function() {
			var a = this.get("size"),
				b = this.get("centerCoords"),
				c = parseInt(this.get("rotation")) % 360,
				d = this.get("zoom", null, !0),
				e = Math.pow(2, 20 - d),
				c = Math.PI * c / 180,
				a = new g.H((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (
					Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
				e = new g.Wf(b.ab(a.Nd(e)), b.add(a.Nd(e))),
				c = this.map.get("targetLevel");
			if (c > d - 1) {
				var f = Math.pow(2, 20 - c);
				e.M$ = new g.Wf(b.ab(a.Nd(f)), b.add(a.Nd(f)))
			}
			e.E9 = c || d;
			e.Ac = a;
			return e
		},
		mqa: function(a) {
			var b =
				this.get("size"),
				c = this.get("centerCoords"),
				d = parseInt(this.get("rotation")) % 360,
				d = Math.PI * d / 180,
				b = new g.H((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (
					Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
			a = Math.pow(2, 20 - a);
			return new g.Wf(c.ab(b.Nd(a)), c.add(b.Nd(a)))
		},
		Kd: function() {
			var a = this.jm(),
				b = a.Vd.x,
				c = a.hc.y,
				a = new g.H(a.hc.x, a.Vd.y),
				b = new g.H(b, c);
			return new g.oe(this.map.Od(a), this.map.Od(b))
		},
		zoomChanged: function() {},
		Xd: function(a, b) {
			this.get("size");
			var c =
				a.cb(),
				d = this.get("centerCoords"),
				e = c.ab(d);
			e.x < -g.a.Fa / 2 ? e.x += g.a.Fa : e.x > g.a.Fa / 2 && (e.x -= g.a.Fa);
			var c = this.get("size").PE().ld(2),
				f = this.get("rotation") * Math.PI / 180,
				d = e.x * Math.cos(f) - Math.sin(f) * e.y,
				e = Math.sin(f) * e.x + Math.cos(f) * e.y;
			return c.add((new g.H(d, e)).Nd(Math.pow(2, (b || this.get("zoom")) - 20)))
		},
		yg: function(a, b) {
			var c = this.get("size").PE().ld(2),
				d = a.ab(c),
				e = this.get("rotation") * Math.PI / 180,
				c = d.x * Math.cos(e) + Math.sin(e) * d.y,
				d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
				c = this.get("centerCoords").add((new g.H(c,
					d)).Nd(Math.pow(2, 20 - (b || this.get("zoom")))));
			c.x = (c.x + 268435456) % 268435456;
			return c
		}
	});
	g.pM = g.NW.extend({
		A: function(a, b) {
			this.Le = new g.Cc;
			this.cc = new g.Cc([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
			arguments.callee.ma.apply(this, arguments);
			this.scale = 1;
			this.type = "3D";
			this.mA = null;
			this.S7 = "";
			this.P = ["", 0, 0, "", 0];
			this.mA = {}
		},
		refreshChanged: function() {
			this.hr()
		},
		zoomChanged: function(a) {
			this.hr();
			this.P[4] = a
		},
		centerChanged: function(a) {
			arguments.callee.ma.apply(this, arguments);
			this.hr()
		},
		centerCoordsChanged: function(a) {
			arguments.callee.ma.apply(this, arguments);
			this.hr();
			this.P[0] = a.toString()
		},
		rotationChanged: function(a) {
			this.hr();
			this.P[2] = a
		},
		pitchChanged: function(a) {
			this.Ce.pitch = Math.min(this.get("maxPitch"), Math.max(a, 0));
			this.hr();
			this.P[1] = a
		},
		hr: function() {
			if (!this.Aza() && (this.rL(), this.Soa(), this.map)) {
				var a = this,
					b = function() {
						a.map.camera = a.Q3();
						a.map.q("camerachange", {
							map: a.map,
							camera: a.map.camera
						})
					};
				a.map.Ra ? b() : this.map.h("complete", b, this)
			}
		},
		Q3: function() {
			return {
				height: this.pn,
				fov: this.aqa,
				aspect: this.uC,
				near: this.sz,
				far: this.LI,
				position: this.Xma,
				rotation: this.Ce.rotation,
				pitch: this.Ce.pitch
			}
		},
		Soa: function() {
			this.Qga = g.a.dg()
		},
		To: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 300;
			return g.a.dg() - this.Qga > a
		},
		rL: function() {
			var a = this.get("centerCoords"),
				b = this.get("pitch"),
				c = this.get("rotation"),
				d = (new g.Cc).b9(-a.x + g.a.dc.x, -a.y + g.a.dc.y, 0);
			this.Xma = {
				x: a.x - g.a.dc.x,
				y: a.y - g.a.dc.y
			};
			a = (new g.Cc).Rz(180 - b, 1, 0, 0);
			this.H7 = (new g.Cc).set(a);
			c = (new g.Cc).Rz(c, 0, 0, 1);
			this.Sq = (new g.Cc).set(c);
			this.Zpa = d.Dg();
			this.cc = (new g.Cc).b9(0, 0, -this.pn).multiply(a.multiply(c.multiply(d))).toFixed(8);
			this.cc.df = this.cc.Dg()
		},
		Aza: function(a) {
			a = a || this.get("zoom");
			var b = this.get("size"),
				c = b.width,
				b = b.height;
			if (!c || !b) return !0;
			this.uC = c /= b;
			b = b / 2 * Math.pow(2, 20 - a);
			a = g.a.wb((56 - a) * Math.PI / 180, 2);
			var d = g.a.wb(b / Math.tan(a / 2), 0);
			2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
			this.aqa = a;
			this.pn = d;
			this.sz = this.pn / 10;
			this.LI = 50 * this.pn;
			this.Boa = (this.pn - this.sz) / (this.LI - this.sz);
			this.Le.Y8(a, c, this.sz, this.LI);
			this.Le.df = this.Le.Dg();
			a = this.Le;
			var c = new g.dW,
				b = c.iE,
				e = this.Le.elements,
				d = e[0],
				f = e[1],
				h = e[2],
				k = e[3],
				l =
				e[4],
				m = e[5],
				n = e[6],
				p = e[7],
				q = e[8],
				r = e[9],
				s = e[10],
				u = e[11],
				v = e[12],
				w = e[13],
				t = e[14],
				e = e[15];
			wc(b[0], k - d, p - l, u - q, e - v).normalize();
			wc(b[1], k + d, p + l, u + q, e + v).normalize();
			wc(b[2], k + f, p + m, u + r, e + w).normalize();
			wc(b[3], k - f, p - m, u - r, e - w).normalize();
			wc(b[4], k - h, p - n, u - s, e - t).normalize();
			wc(b[5], k + h, p + n, u + s, e + t).normalize();
			a.lR = c
		},
		rD: function() {
			var a = this.map;
			a.map.gt && (this.hr(), this.P[3] = a.get("size").toString());
			var b = this.P.toString();
			if (b !== this.S7) {
				var c = this.get("zoom"),
					d = this.mA;
				d.zoom = c;
				d.uC = this.uC;
				d.top =
					this.top;
				d.Ha = this.jm();
				d.lb = this.get("centerCoords");
				d.rotation = a.get("rotateEnable") && parseInt(this.get("rotation")) || 0;
				d.pitch = this.get("pitch") || 0;
				d.AIa = this.get("yaw");
				d.Pf = a.get("crs");
				d.T = Math.pow(2, 20 - c);
				d.ne = Math.round(c);
				d.p7 = Math.floor(c);
				d.Gg = Math.pow(2, 20 - d.ne);
				d.bva = Math.pow(2, 20 - d.p7);
				d.Le = this.Le;
				d.cc = this.cc;
				this.S7 = d.key = b
			}
			this.mA.oh = this.get("center");
			this.mA.fr = g.a.dg();
			this.mA.To = this.To();
			return this.mA
		},
		jm: function() {
			var a = this.get("size"),
				b = a.width,
				a = a.height;
			if (!b || !a) return null;
			var c, d;
			d = 0;
			var e = new g.H(0, d);
			c = this.yg(e, !0);
			if (55 < this.Ce.pitch || !c)
				for (; !c;) d += a / 40, e.y = d, c = this.yg(e, !0);
			this.top = d / a;
			e.x = b;
			d = this.yg(e, !0);
			var f = 0,
				h = this.Ce.zoom;
			50 <= this.Ce.pitch && 18 <= h && (f = 0);
			e.y = a + f;
			f = this.yg(e, !0);
			e.x = 0;
			h = this.yg(e, !0);
			c = [c.wl(), d.wl(), f.wl(), h.wl(), c.wl()];
			c = new g.caa(c);
			e.x = b / 2;
			e.y = a + 256;
			c.XP = this.yg(e, !0);
			return c
		},
		Kd: function() {
			var a = this.jm();
			if (a) {
				for (var b = [], c = 0; c < a.path.length; c += 1) {
					var d = this.map.Od(new g.H(a.path[c][0], a.path[c][1]));
					b.push(d)
				}
				return new g.sp(b)
			}
		},
		Xd: function(a, b, c) {
			a.z = c || 0;
			a = this.I6([a]);
			a = a[0];
			return new g.H(a.x, a.y)
		},
		U3: function(a) {
			var b = this.get("size");
			a = new g.Fl([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
			a.multiply(this.sz);
			return this.Le.df.Ah(a)
		},
		yg: function(a, b, c) {
			var d;
			this.map ? (this.map.C = !0, d = this.map.getSize(!0), this.map.C = !1) : d = this.get(
				"size");
			var e = a.x / d.width * 2 - 1;
			d = 1 - a.y / d.height * 2;
			a = new g.Fl([e, d, -1, 1]);
			a.multiply(this.sz);
			if (!this.Le.df) return null;
			a = this.Le.df.Ah(a);
			e = new g.Fl([e, d, 1, 1]);
			e.multiply(this.LI);
			d = this.Le.df.Ah(e);
			var f = this.cc.df,
				e = f.Ah(a).elements;
			a = f.Ah(d).elements;
			c = (e[2] - (-c || 0)) / (e[2] - a[2]);
			if (0 > a[2] || 0 > c || b && c > 2.5 * this.Boa) return null;
			b = e[0] - c * (e[0] - a[0]);
			c = e[1] - c * (e[1] - a[1]);
			return isNaN(b) || isNaN(c) ? null : (new g.H(b, c)).add(g.a.dc)
		},
		I6: function(a) {
			for (var b = this.get("centerCoords"), c = g.a.dc.x, d = g.a.dc.y, e = this.get("size"), f =
					g.a.Fa, h = b.x + f / 2, b = b.x - f / 2, k = [], l = new g.Fl([0, 0, 0, 1]), m = l
					.elements, n = new g.H(0, 0), p = g.Cc.multiply(this.Le, this.cc), q = 0, r = a
					.length; q < r; q++)
				if (a[q]) {
					a[q].concat ? (n.x = a[q][0], n.y = a[q][1],
						n.z = -a[q][2] || 0) : (n.x = a[q].x, n.y = a[q].y, n.z = -a[q].z || 0);
					h < n.x ? n.x -= f : b > n.x && (n.x += f);
					m[0] = n.x - c;
					m[1] = n.y - d;
					m[2] = n.z;
					var s = p.Ah(l);
					s.multiply(1 / s.elements[3]);
					k[q] = {
						x: (s.elements[0] + 1) / 2 * e.width,
						y: (-s.elements[1] + 1) / 2 * e.height,
						z: s.elements[2]
					}
				} return k
		},
		bAa: function(a) {
			var b = this.get("size");
			a = this.Le.Ah(this.cc.Ah((new g.Fl).copy(a)));
			a.multiply(1 / a.elements[3]);
			b = new g.H((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
			b.z = a.elements[2];
			return b
		}
	});
	g.a.dc = new g.H(215440491, 106744817);
	g.Rb.Hb({
		r2: function(a, b, c) {
			var d = this;
			d.iF ? (clearTimeout(d.iF), d.iF = null) : (d.qa("zoomstart", {
				zoom: a
			}), d.q("zoomstart"));
			d.iF = setTimeout(function() {
				d.iF = null;
				d.qa("zoomend", {
					zoom: a
				});
				d.qa("zoomchange", {
					zoom: a
				});
				d.q("zoomend")
			}, 150);
			a = g.a.wb(a, 2);
			d.qA(a, !0, b, c)
		},
		qA: function(a, b, c, d) {
			var e = this.get("zoom");
			if (e !== a) {
				var f = this.get("zooms");
				"3D" !== this.D.view.type && (g.l.ba || g.l.Ue) && (b = !0);
				a = a || e;
				a = Math.min(Math.max(a, f[0]), f[1]);
				var h = a !== e,
					k = !!c;
				this.He && (this.He.stop(), this.He = null);
				c = c || this.get("centerCoords");
				var l = this.Xd(c);
				c = function(c) {
					b || (c = g.a.wb(c, 2));
					var d = this.yg(l);
					this.set("zoom", c);
					var e = this.yg(l),
						d = e && e ? e.ab(d) : new g.H(0, 0);
					this.set("centerCoords", this.get("centerCoords").ab(d).toFixed(3));
					d.x && d.y && this.qa("mapmove");
					c === a && a << 0 === a && (this.set("targetLevel", null), h && !this.iF && (
							this.qa("zoomchange"), this.qa("zoomend")), this.q("zoomend"), k &&
						this.q("moveend"), this.Vf = null)
				};
				var m;
				this.Fd && this.Fd.Yv && (this.Fd.stop(), this.Fd.dS && (d = !0), this.Fd.sD && (m = !
					0), this.Fd = null, this.set("targetLevel",
						null));
				this.Vf && this.Vf.Yv && (this.Vf.stop(), d = !0, this.Vf.sD && (m = !0), this.Vf =
					null, this.set("targetLevel", null));
				h && !d && this.qa("zoomstart");
				k && !m && this.qa("movestart");
				this.q("zoomstart");
				b ? c.call(this, a) : (this.Vf = new g.Kj(e, a, null, 0.04), this.Vf.dS = h, this.Vf
					.sD = k, this.Vf.transition = function(a, b, c) {
						return c >= g.r.QH ? b : (b - a) * (1 - Math.pow(1 - c / g.r.QH, 4)) + a
					}, this.Vf.Iq = c, this.Vf.Nn(this, !0), this.set("targetLevel", a))
			}
		},
		UK: function(a, b, c, d) {
			var e = null;
			a || (a = this.Fd ? this.Fd.jya : this.get("targetLevel") || this.get("zoom"));
			var e = b ? this.Bb(b).toFixed(3) : this.Fd ? this.Fd.D9 : this.get("centerCoords"),
				f = a !== this.get("zoom"),
				h = !e.gb(this.get("centerCoords")),
				k = b = !1;
			this.Vf && this.Vf.Yv && (this.Vf.stop(), b = !0, this.Vf.sD && (k = !0), this.Vf = null,
				this.set("targetLevel", null));
			this.Fd && this.Fd.Yv && (this.Fd.stop(), this.Fd.dS && (b = !0), this.Fd.sD && (k = !0),
				this.Fd = null, this.set("targetLevel", null));
			this.He && (this.He.stop(), this.He = null);
			if (f || h) {
				if (!this.D.view.jm().contains(e) || f && "3D" !== this.D.view.type && (g.l.ba || g.l
						.Ue)) c = !0;
				if (c) f && (b ||
					(this.q("zoomstart"), this.qa("zoomstart")), this.set("zoom", a), this.qa(
						"zoomchange"), this.qa("zoomend"), this.q("zoomend")), h && (k || d || (this
						.qa("movestart"), this.q("movestart")), this.set("centerCoords", e), this
					.qa("mapmove"), this.q("moveend", {
						M5: d
					})), this.set("targetLevel", null);
				else {
					this.set("targetLevel", a);
					var l = a - this.get("zoom"),
						m = e.ab(this.get("centerCoords")).toFixed(3);
					this.Fd = new g.Kj(1, 0, null, 0.001);
					this.Fd.dS = f;
					this.Fd.sD = h;
					this.Fd.D9 = e;
					this.Fd.jya = a;
					this.Fd.transition = function(a, b, c) {
						return Math.pow(1 -
							Math.min(g.r.QH, c) / g.r.QH, 2)
					};
					this.Fd.Iq = function(b) {
						0.02 > b ? (this.Fd && (this.Fd.stop(), this.Fd = null), f && (this.set(
								"zoom", a), this.qa("zoomchange"), this.qa("zoomend"), f = !
							1, this.q("zoomend")), h && (this.set("centerCoords", e), this
							.q("mapmove"), this.q("moveend", {
								M5: d
							})), this.set("targetLevel", null)) : (f && this.set("zoom", a - l *
							b), h && (b = e.ab(m.Nd(b)).toFixed(3), this.set("centerCoords",
							b), this.qa("mapmove")));
						this.set("display", 1)
					};
					this.Fd.Nn(this);
					f && !b && (this.q("zoomstart"), this.qa("zoomstart"));
					!h || k || d || (this.q("movestart"),
						this.qa("movestart"))
				}
			}
		}
	});
	g.o = {};
	g.o.Yb = g.da.extend({
		ka: [g.va, g.Ze],
		A: function(a, b) {
			this.S = a;
			this.Ya = [3, 18];
			this.cx = g.a.yb(this);
			a && this.af(["opacity", "visible", "zIndex", "zooms"], a);
			a.Uf = b.D.view.type;
			this.e = b;
			this.X("display", b)
		},
		gg: function() {
			this.Di && this.hQ();
			if (g.Da && g.Da.jr && g.Da.jr.length) {
				var a = g.a.indexOf(g.Da.jr, this); - 1 !== a && (g.Da.jr = g.a.Fo(g.Da.jr, a))
			}
			if (a = this.Nb) {
				if (a.length)
					for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode
						.removeChild(a[b]);
				else a.parentNode && a.parentNode.removeChild(a);
				this.Nb = null
			}
			this.S.gg && this.S.gg();
			this.S.qi = !1;
			this.S.o = null;
			this.yl();
			var c;
			this.M && (this.M.$j(), this.M = null, c = "-" + this.lc);
			this.Bf && (this.Bf.$j(), this.Bf = null, c = "-" + this.lc);
			if (c)
				for (var d in g.Da.Fj) g.a.cD(d, c) && delete g.Da.Fj[d]
		},
		qa: function(a, b) {
			this.S.q(a, b)
		},
		visibleChanged: function() {
			this.set("display", 0)
		},
		zIndexChanged: function() {
			this.set("display", 0)
		},
		DU: function(a) {
			g.f.Wq(a, this.opacity)
		},
		opacityChanged: function() {
			var a = this.get("opacity");
			this.opacity = Math.min(Math.max(0, a), 1);
			if (a = this.Nb)
				if (a.length)
					for (var b = 0; b < a.length; b +=
						1) this.DU(a[b]);
				else this.DU(a);
			this.e && this.e.D && "3D" == this.e.D.view.type && this.set("display", 0)
		},
		yn: function() {
			return this.e.Nc && !this.S.get("rejectMapMask")
		},
		aJ: function() {
			var a = this.get("bounds");
			if (a) {
				if (a instanceof g.oe) {
					var b = a.dk(),
						a = a.No(),
						c = this.e.Bb(new g.U(180, 0)).x,
						d = this.e.Bb(b),
						e = this.e.Bb(a),
						f = this.e.get("center");
					b.R > a.R && (0 < f.R ? e.x += c : d.x -= c);
					this.I = [d.x, d.y, e.x, e.y]
				} else a instanceof g.Wf ? this.I = [a.hc.x, a.hc.y, a.Vd.x, a.Vd.y] : a instanceof g
					.OF && "3D" === this.S.Uf && (b = a.path[1], d =
						this.e.Bb(a.path[0]), e = this.e.Bb(b), this.I = [d.x, d.y, e.x, e.y, a.N8, a
							.height
						]);
				return this.I
			}
			return null
		}
	});
	var Nc = function() {
		function a(a) {
			this.RF[g.a.yb(a)] = a;
			return this
		}

		function b(a) {
			this.RF[g.a.yb(a)] = null;
			return this
		}
		return function() {
			function c() {
				var a = c.RF,
					b, f = [],
					h;
				for (h in a) a.hasOwnProperty(h) && f.push(a[h]);
				for (a = f.length - 1; 0 <= a; a -= 1) h = f[a].apply(this, arguments), void 0 !== h && (b =
					h);
				return b
			}
			c.RF = {};
			c.J1 = a;
			c.PGa = b;
			return c
		}
	}();
	g.og = g.da.extend({
		ka: [g.va],
		A: function(a, b) {
			this.Hp = a | 0;
			this.UF = !!b;
			this.count = 0;
			this.hK = Nc();
			this.clear();
			this.CB = []
		},
		uh: function() {
			return !this.count
		},
		gFa: function() {
			return this.count >= this.Hp
		},
		xHa: function(a) {
			this.Hp !== a && (this.Hp = a | 0) && this.t1(this.Hp)
		},
		Ld: function(a) {
			return !!this.e[a]
		},
		get: function(a, b) {
			var c = this.vY(a);
			return c ? c.value : b
		},
		set: function(a, b) {
			var c = this.vY(a);
			c ? c.value = b : (c = new g.og.sr(a, b), this.e[a] = c, this.tB(c), this.count += 1, this
				.count > this.Hp && this.t1(this.Hp))
		},
		xw: function(a) {
			this.remove(a)
		},
		remove: function(a) {
			return this.e.hasOwnProperty(a) && this.UB(this.e[a]) ? !0 : !1
		},
		forEach: function(a, b) {
			for (var c = this.cd.next; c !== this.cd; c = c.next) a.call(b, c.value, c.key, this)
		},
		oK: function(a, b) {
			return this.e.hasOwnProperty(a) ? this.e[a].value : b
		},
		sGa: function() {
			return this.cd.next.value
		},
		tGa: function() {
			return this.cd.Ia.value
		},
		shift: function() {
			return this.m0(this.cd.next)
		},
		B2: function() {
			this.CB.length = 0
		},
		s6: function(a) {
			this.CB.push(a)
		},
		push: function(a) {
			a = new g.og.sr("", a);
			0 === this.count ? (this.cd.Ia = null,
				a.Ia = this.cd, this.cd.next = a) : (this.iC.next = a, a.Ia = this.iC);
			this.count += 1;
			this.iC = a
		},
		pza: function(a) {
			a = new g.og.sr("", a);
			0 === this.count ? (this.cd.Ia = null, a.Ia = this.cd, this.iC = this.cd.next = a) : (this
				.cd.next.Ia = a, a.next = this.cd.next, a.Ia = this.cd, this.cd.next = a);
			this.count += 1
		},
		tua: function() {
			if (this.count) {
				this.count -= 1;
				var a = this.cd.next;
				a.next ? (a.next.Ia = this.cd, this.cd.next = a.next) : (this.cd.next = null, this.iC =
					this.cd.Ia = null);
				a.next = null;
				a.Ia = null;
				return a.value
			}
			return null
		},
		pop: function() {
			return this.m0(this.cd.Ia)
		},
		vY: function(a) {
			if (this.e.hasOwnProperty(a)) return a = this.e[a], this.UF && (a.remove(), this.tB(a)), a
		},
		tB: function(a) {
			this.UF ? (a.next = this.cd.next, a.Ia = this.cd, this.cd.next = a, a.next.Ia = a) : (a.Ia =
				this.cd.Ia, a.next = this.cd, this.cd.Ia = a, a.Ia.next = a)
		},
		t1: function(a) {
			if (!(this.count <= a || this.count < 2 * this.CB.length)) {
				for (var b = this.UF ? this.cd.Ia : this.cd.next, c = {}, d = 0, e = this.CB.length; d <
					e; d++) c[this.CB[d]] = !0;
				for (a = Math.ceil(2 * a / 3); b && this.count > a && (d = this.UF ? b.Ia : b.next, b
						.key && !c[b.key] && this.UB(b) && this.hK(b.value),
						b = d, b !== this.cd && b !== this.iC););
			}
		},
		UB: function(a) {
			if (this.xC && !1 == this.xC(a.value)) return !1;
			a.remove();
			delete this.e[a.key];
			this.count -= 1;
			return !0
		},
		m0: function(a) {
			this.cd !== a && (this.xC && console.log("Warnning!!!"), this.UB(a));
			return a.value
		},
		clear: function() {
			this.e = {};
			this.cd = new g.og.sr("", null);
			this.cd.Ia = this.cd.next = this.cd;
			this.count = 0
		}
	});
	g.og.sr = function(a, b) {
		this.key = a;
		this.value = b
	};
	g.og.sr.prototype.Ia = null;
	g.og.sr.prototype.next = null;
	g.og.sr.prototype.remove = function() {
		this.Ia.next = this.next;
		this.next.Ia = this.Ia;
		this.next = this.Ia = null
	};

	function Oc(a, b, c) {
		this.url = a;
		this.Mc = b;
		this.fR = c;
		this.qn = this.LK = !1
	}

	function Pc(a, b, c) {
		var d = Qc;
		return function() {
			return d.call(this, a, b, c)
		}
	}

	function Qc(a, b, c) {
		a.JDa = +new Date;
		a.loaded = b;
		clearTimeout(a.xya);
		var d = a.Gta;
		d.Ln.remove(a.url) && d.Rga();
		d = a.Lsa ? a.ga : a.Ba;
		a.ga = null;
		(c || b || a.fR) && a.Mc(b ? d : null, a);
		a.U5 ? (a.U5.ti(), a.U5 = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.Ba = null)
	}
	g.wF = g.da.extend({
		JBa: "assets/image/blank.gif",
		A: function(a, b, c) {
			this.timeout = b || 15E3;
			this.Nq = new g.og(1024);
			this.Ln = new g.og(1024);
			this.L2 = a;
			this.TQ = c
		},
		MM: function(a) {
			a && this.Ln.count >= this.L2 && (a = this.Ln.cd.Ia.value, a.qn && (this.Ln.remove(a.url),
				this.eX(a)));
			for (; this.Nq.count && !(this.Ln.count >= this.L2);) this.dea(this.Nq.shift())
		},
		Rga: function() {
			if (!this.OX) {
				this.OX = !0;
				var a = this;
				setTimeout(function() {
					a.OX = !1;
					a.MM()
				}, 0)
			}
		},
		dea: function(a) {
			var b = document.createElement("img");
			a.cqa && (b.crossOrigin =
				"anonymous");
			b.src = a.url;
			a.Ba = b;
			a.Gta = this;
			a.startTime = +new Date;
			a.LK = !0;
			b.complete ? Qc(a, !0) : (this.Ln.set(a.url, a), b.onload = Pc(a, !0), b.onerror = Pc(a, !1,
				!0), b.onabort = Pc(a, !1), a.xya = setTimeout(Pc(a, !1, !0), this.timeout))
		},
		eX: function(a) {
			a.LK && (Qc(a, !1), a.qn = !0, a.FCa = !0)
		},
		FFa: function(a, b, c) {
			return this.mz(a.url, b, c, !0, a.ta.z + "_" + a.ta.x + "_" + a.ta.y)
		},
		mz: function(a, b, c, d, e) {
			var f = this.Ln.get(a);
			if (f && f.qn) f.qn = !1, f.Mc = b, f.fR = c;
			else {
				f = new Oc(a, b, c);
				f.Lsa = d;
				f.key = e;
				if (this.Nq.get(g.a.yb(f))) return;
				this.Nq.set(g.a.yb(f),
					f);
				this.MM(!0)
			}
			return f
		},
		vta: function(a, b, c) {
			var d = this.Ln.get(a);
			if (d && d.qn) d.qn = !1, d.Mc = b, d.fR = c;
			else {
				d = new Oc(a, b, c);
				d.cqa = !0;
				if (this.Nq.get(g.a.yb(d))) return;
				this.Nq.set(g.a.yb(d), d);
				this.MM(!0)
			}
			return d
		},
		p2: function(a) {
			a.qn || (a.qn = !0, this.Nq.remove(g.a.yb(a)))
		},
		clear: function(a) {
			this.Nq.forEach(function(a) {
				a.qn = !0
			});
			this.Nq.clear();
			if (a)
				for (; 0 < this.Ln.length;) a = this.Ln.pop(), this.eX(a);
			else this.Ln.forEach(function(a) {
				a.qn = !0
			})
		}
	});

	function Rc(a, b, c) {
		this.z = a;
		this.x = b;
		this.y = c
	}
	Rc.prototype.cb = function() {
		return new Rc(this.z, this.x, this.y)
	};
	Rc.prototype.toString = function() {
		return this.z + "/" + this.x + "/" + this.y
	};
	g.rb = function(a) {
		var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
		this.ta = a;
		this.key = a.toString();
		this.Ie = b
	};
	g.or = Rc;
	g.o.rb = g.o.Yb.extend({
		A: function(a, b, c, d, e) {
			arguments.callee.ma.apply(this, arguments);
			this.X("tileSize", a);
			this.X("tiles", a);
			this.af(["zooms", "type", "detectRetina", "errorUrl"], a);
			a.FG && (this.X("lang", b, !0), this.X("mapStyle", b, !0), this.X("style", b, !0), this.X(
				"features", b, !0));
			var f = "overlayer" === a.get("type") || !1 === a.get("blend");
			this.Il = !1;
			var h = b.get("size"),
				h = h.width * h.height / 65536;
			this.ja = g.l.ba && g.l.ja && this.get("detectRetina");
			g.l.Jc && g.l.ba && 9 < h && (this.Il = !1);
			this.Yi = !f && !a.Rv;
			this.Zi = !f && !a.Rv;
			this.fL = c;
			this.X("reload", a);
			a.Hsa ? this.X("createTile", a) : this.X("tileFun", a);
			this.ff = d;
			this.mS = e
		},
		langChanged: function() {
			this.set("reload");
			this.S.Zs()
		},
		styleChanged: function() {
			this.e.Bd || (this.set("reload"), this.S.Zs())
		},
		featuresChanged: function() {
			this.set("reload");
			this.S.Zs()
		},
		reloadChanged: function() {
			this.set("display", 0)
		},
		tileFunChanged: function() {
			var a = this.fL || this.get("tileFun");
			this.Bo = function(b, c, d) {
				var e = a(b.ta.x, b.ta.y, b.ta.z);
				if (!b.Hs || b.Hs.qn) b.loaded = !1, b.Hs = ("3D" === this.e.D.view.type ?
					g.pm.vta : g.pm.mz).call(g.pm, e, function(a) {
					b.Hs = null;
					a ? c(a) : d()
				}, !1)
			}
		},
		createTileChanged: function() {
			this.S.C = !0;
			var a = this.S.getCreateTile();
			this.S.C = !1;
			this.Bo = function(b, c, d) {
				a.call(this.g.S, b.ta.x, b.ta.y, b.ta.z, c, d, b)
			};
			this.set("reload")
		},
		me: function() {
			var a = this.S.get("zooms", null, !0);
			this.S.Gsa && (a = [Math.min(a[0], 18), Math.min(a[1], 18)]);
			return {
				Dd: this.S.get("tileSize"),
				visible: this.S.get("visible"),
				I: this.aJ(),
				Ya: a,
				ZH: this.Il,
				Yi: this.Yi,
				Zi: this.Zi,
				opacity: this.S.get("opacity"),
				Bo: this.S.get("createTile"),
				Oo: this.fL || this.S.get("tileFun"),
				Jc: this.S.Fq ? !1 : this.S.get("detectRetina") && g.l.ja && g.l.ba,
				Nc: this.yn()
			}
		},
		$l: function(a) {
			if (g.M.be.Ti) return new g.M.be.Ti(this, a)
		}
	});
	g.pm = new g.wF(6, null);
	g.o.fd = g.o.Yb.extend({
		A: function(a, b) {
			this.Ua = Math.min(2, window.devicePixelRatio || 1);
			this.Jc = g.l.ja;
			this.map = b;
			this.dr = 0;
			this.mm = !1;
			this.ig = this.Af = 0;
			this.ah = [];
			arguments.callee.ma.apply(this, arguments);
			this.Iv = [];
			this.em = new g.o.kaa;
			a && (this.X("style", a), this.X("cursor", a, !0), this.Wxa = a.get("stable") || !1, this.X(
				"dataSources", a), this.X("bubble", a));
			this.X("display", b);
			this.yca()
		},
		me: function() {
			return {
				visible: this.get("visible"),
				Ya: this.get("zooms"),
				opacity: this.get("opacity"),
				zIndex: this.get("zIndex"),
				cy: this.S.get("alwaysRender") || !1,
				Nc: this.yn()
			}
		},
		dataSourcesChanged: function() {
			var a = this.get("dataSources");
			a && a.length ? "string" === typeof a ? (new g.jb.zb(a)).h("complete", function(a) {
				this.x7(a.data);
				this.ks = a.data;
				this.mm = !0;
				this.set("display");
				this.Ra = !0;
				this.S.q("complete")
			}, this) : a.length && (this.x7(a), this.ks = a, this.mm = !0, this.set("display"), this
				.Ra = !0, this.S.q("complete")) : this.clear()
		},
		getDatas: function() {
			return this.ks
		},
		uza: function() {
			if (this.S.zj) {
				var a = this.Cm;
				this.Af = a.Af;
				this.ig = a.ig
			}
		},
		qa: function(a, b) {
			var c = {
				type: a,
				data: "mouseout" === a ? this.Oga || null : b.ru.hb,
				target: this.S,
				originEvent: b.uT
			};
			this.Oga = "mouseout" === a ? null : b.ru.hb;
			this.S.q(a, c)
		},
		rc: function(a) {
			this.qa(a.type, a)
		},
		yca: function() {
			this.h("click", this.rc);
			this.h("dblclick", this.rc);
			this.h("mousedown", this.rc);
			this.h("mouseup", this.rc);
			this.h("mouseover", this.rc);
			this.h("mouseout", this.rc);
			this.h("touchstart", this.rc);
			this.h("touchend", this.rc)
		},
		CCa: function() {
			this.G("click", this.rc);
			this.G("dblclick", this.rc);
			this.G("mousedown",
				this.rc);
			this.G("mouseup", this.rc);
			this.G("mouseover", this.rc);
			this.G("mouseout", this.rc);
			this.G("touchstart", this.rc);
			this.G("touchend", this.rc)
		},
		styleChanged: function() {
			this.Cm = this.get("style");
			this.uza();
			this.set("display", 0)
		},
		x7: function(a) {
			if (a) {
				this.clear();
				for (var b = 0; b < a.length; b += 1) {
					var c = a[b].lnglat;
					a[b].lnglat = g.a.Ka(c);
					c = this.map.Bb(c);
					c = new g.ai({
						name: "point-" + g.a.yb(this),
						W: new g.Aa.Mg([c.x, c.y], !0)
					});
					c.uo = this;
					c.hb = a[b];
					this.OH(c)
				}
			}
		},
		ara: function(a) {
			if ("geojson" === a) return new g.qaa({
				map: this.map
			});
			if ("topjson" === a) return new g.eBa({
				map: this.map
			});
			if ("subway" === a) return new g.$Aa({
				map: this.map
			})
		},
		Hva: function(a) {
			if (a) {
				var b = [],
					b = [],
					c = {};
				if (a.rules) {
					for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
						for (var f = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k]
							.fill && (f[k] = new g.style.Ng.bW(h[k].fill)), h[k].stroke && (f[k] = new g
								.style.Ng.GW(h[k].stroke));
						h = f;
						b[d].cL = h;
						b[d] = new g.style.iba(b[d])
					}
					c.rules = b
				}
				if (a.symbolizers) {
					b = a.symbolizers;
					a = 0;
					for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new g.style.Ng.bW(b[a]
						.fill)),
						b[a].stroke && (b[a] = new g.style.Ng.GW(b[a].stroke));
					c.cL = b
				}
				a = new g.kM(c)
			} else a = new g.kM({});
			this.set("style", a);
			return a
		},
		yCa: function(a, b) {
			var c = new g.jb.zb(a);
			c.h("complete", function(c) {
				c = this.ga[a] = this.ara(b).QT(c);
				this.$x(c);
				this.qa("complete")
			}, this);
			c.h("error", this.mc, this)
		},
		iwa: function(a) {
			"px" === a.target.get("unit") ? (this.Af = Math.max(a.tl, this.Af), this.ig = Math.max(a.tl,
				this.ig)) : a.tl > this.Ms && (this.Ms = a.tl, this.pz = this.Ms / this.map.D.mj.mq(
				20))
		},
		OH: function(a) {
			this.em.add(a);
			if (!this.WC &&
				!this.S.zj) {
				if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
					a.h("rad", this.iwa, this);
					var b = a.get("radius");
					b.length && (b = Math.max.apply(null, b));
					"px" === a.get("unit") ? (this.Af = Math.max(b, this.Af), this.ig = Math.max(b, this
						.ig)) : this.Ms ? b > this.Ms && (this.Ms = b, this.pz = this.Ms / this.map
						.D.mj.mq(20)) : (this.Ms = b, this.pz = this.Ms / this.map.D.mj.mq(20))
				}
				b = a.get("strokeWeight") || 0;
				if (!this.qz || b > this.qz) this.qz = b
			}
			this.Wxa || a.X("feature", this, !0)
		},
		$x: function(a) {
			this.mm = !0;
			for (var b = 0, c = a.length; b <
				c; b += 1) this.OH(a[b])
		},
		clear: function() {
			this.mm = !0;
			this.ks = [];
			this.em.clear();
			this.set("display", 0)
		},
		xn: function(a) {
			var b, c;
			b = this.em.xn([a[0] + g.a.Fa, a[1], a[2] + g.a.Fa, a[3]]);
			c = this.em.xn([a[0] - g.a.Fa, a[1], a[2] - g.a.Fa, a[3]]);
			a = this.em.xn(a);
			return g.extend(a, g.extend(b, c))
		},
		yEa: function(a) {
			var b, c = this.get("style"),
				d = a.ul;
			c instanceof g.kM || (c = this.Hva(c));
			if (d && 0 < d.length) b = c.P2(d, a);
			else {
				if (c.H8.length || c.ul.length) b = c.ooa(a);
				b || (b = a.Dqa())
			}
			return b
		},
		TR: function(a) {
			function b(a, b) {
				return a.fm - b.fm
			}
			var c = [],
				d, e, f, h, k, l = {};
			for (d in a)
				if (a.hasOwnProperty(d)) {
					f = a[d];
					h = f.get("zIndex");
					for (e in l)
						if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
					"undefined" === typeof l[h] && (c.push([
						[],
						[], h
					]), l[h] = c.length - 1);
					h = c[l[h]];
					h[0].push(f)
				} c.sort(this.Sxa);
			a = 0;
			for (d = c.length; a < d; a += 1) c[a][0].sort(b);
			return c
		},
		featureChanged: function(a) {
			this.mm = !0;
			var b = a.target,
				c = b.ec();
			0 !== this.em.Iqa([g.a.yb(b)]).length && (this.em.remove(b, a.Kv), c && !a.Hoa && this.em
				.add(b))
		},
		j8: function(a) {
			this.mm = !0;
			for (var b, c = 0, d = a.length; c <
				d; c += 1) b = a[c], b.W.Kv = null, b.qs(!0), b.xl("feature")
		},
		CHa: function(a, b) {
			return a[1].zIndex === b[1].zIndex ? g.a.yb(a[1]) - g.a.yb(b[1]) : a[1].zIndex - b[1].zIndex
		},
		Sxa: function(a, b) {
			return a[2] - b[2]
		},
		pHa: function(a) {
			return a.EEa() === g.o.jBa.TAa
		},
		$l: function(a) {
			return this.WC ? new g.M.Ke.Gl(this, a) : "c" === this.map.get("overlayRender") && g.M
				.canvas.Gl ? new g.M.canvas.Gl(this, a) : g.M.be.Gl && "d" === this.map.get(
					"overlayRender") ? new g.M.be.Gl(this, a) : null
		}
	});
	g.o.fd.Hb({
		am: function(a) {
			return this.WC ? new g.Ea.Ke.Gl(this, a) : this.S.zj ? new g.Ea.Raa(this, a) : new g.Ea.Gl(
				this, a)
		}
	});
	g.o.kaa = g.da.extend({
		A: function() {
			this.clear()
		},
		clear: function() {
			this.pq = [];
			this.MT = new g.Kk
		},
		add: function(a) {
			var b = g.a.yb(a),
				c = a.ec();
			this.pq[b] || (this.count += 1, this.pq[b] = a, c && !g.I.gb(c.Kd(), [Infinity, Infinity, -
				Infinity, -Infinity
			]) && this.MT.Fs(c.Kd(), a))
		},
		sEa: function() {
			return this.pq
		},
		xn: function(a) {
			return this.MT.fxa(a)
		},
		Iqa: function(a) {
			var b = a.length,
				c = [],
				d;
			for (d = 0; d < b; d += 1) this.pq[a[d]] && c.push(this.pq[a[d]]);
			return c
		},
		remove: function(a, b) {
			var c = g.a.yb(a).toString(),
				d = a.ec();
			this.pq[c] && (this.pq[c] =
				null, d && (c = "undefined" !== typeof b ? b : d.Kd(), this.MT.remove(c, a)))
		}
	});
	g.Kk = g.da.extend({
		A: function(a) {
			this.y6 = "undefined" !== typeof a ? a : 6;
			this.UJ = Math.floor(this.y6 / 2);
			this.PK = {
				I: [Infinity, Infinity, -Infinity, -Infinity],
				Jb: []
			};
			this.count = 0
		},
		qna: function(a, b) {
			var c = -1,
				d = [],
				e;
			d.push(b);
			var f = b.Jb;
			do {
				-1 !== c && (d.push(f[c]), f = f[c].Jb, c = -1);
				for (var h = f.length - 1; 0 <= h; h -= 1) {
					var k = f[h];
					if ("undefined" !== typeof k.Ve) {
						c = -1;
						break
					}
					var l = g.Kk.Tz(k.I[2] - k.I[0], k.I[3] - k.I[1], k.Jb.length + 1),
						k = g.Kk.Tz((k.I[2] > a.I[2] ? k.I[2] : a.I[2]) - (k.I[0] < a.I[0] ? k.I[0] : a
								.I[0]), (k.I[3] > a.I[3] ? k.I[3] : a.I[3]) -
							(k.I[1] < a.I[1] ? k.I[1] : a.I[1]), k.Jb.length + 2);
					if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
				}
			} while (-1 !== c);
			return d
		},
		Fs: function(a, b, c) {
			a = {
				I: a,
				Ve: b
			};
			"undefined" !== typeof c && (a.type = c);
			this.w5(a, this.PK);
			this.count += 1
		},
		w5: function(a, b) {
			var c;
			if (0 === b.Jb.length) b.I = g.I.cb(a.I), b.Jb.push(a);
			else {
				var d = this.qna(a, b),
					e = a;
				do {
					if (c && "undefined" !== typeof c.Jb && 0 === c.Jb.length) {
						var f = c;
						c = d.pop();
						for (var h = 0, k = c.Jb.length; h < k; h += 1)
							if (c.Jb[h] === f || 0 === c.Jb[h].Jb.length) {
								c.Jb.splice(h, 1);
								break
							}
					} else c = d.pop();
					f =
						e instanceof Array;
					if ("undefined" !== typeof e.Ve || "undefined" !== typeof e.Jb || f) {
						if (f) {
							f = 0;
							for (h = e.length; f < h; f += 1) g.I.extend(c.I, e[f].I);
							c.Jb = c.Jb.concat(e)
						} else g.I.extend(c.I, e.I), c.Jb.push(e);
						if (c.Jb.length <= this.y6)
							if (0 < d.length) e = {
								I: g.I.cb(c.I)
							};
							else break;
						else e = f = this.kta(c.Jb), 1 > d.length && (c.Jb.push(f[0]), d.push(c), e = f[
							1])
					} else g.I.extend(c.I, e.I), e = {
						I: g.I.cb(c.I)
					}
				} while (0 < d.length)
			}
		},
		kta: function(a) {
			for (var b = this.Mva(a); 0 < a.length;) this.Nva(a, b[0], b[1]);
			return b
		},
		Mva: function(a) {
			for (var b =
					a.length - 1, c = 0, d = a.length - 1, e = 0, f = a.length - 2; 0 <= f; f -= 1) {
				var h = a[f];
				h.I[0] > a[c].I[0] ? c = f : h.I[2] < a[b].I[1] && (b = f);
				h.I[1] > a[e].I[1] ? e = f : h.I[3] < a[d].I[3] && (d = f)
			}
			Math.abs(a[b].I[2] - a[c].I[0]) > Math.abs(a[d].I[3] - a[e].I[1]) ? b > c ? (b = a.splice(b,
					1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d >
				e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a
					.splice(d, 1)[0]);
			return [{
				I: g.I.cb(b.I),
				Jb: [b]
			}, {
				I: g.I.cb(c.I),
				Jb: [c]
			}]
		},
		Nva: function(a, b, c) {
			for (var d = g.Kk.Tz(b.I[2] - b.I[0], b.I[3] - b.I[1],
						b.Jb.length + 1), e = g.Kk.Tz(c.I[2] - c.I[0], c.I[3] - c.I[1], c.Jb.length +
					1), f, h, k, l = a.length - 1; 0 <= l; l -= 1) {
				var m = a[l],
					n = [b.I[0] < m.I[0] ? b.I[0] : m.I[0], b.I[2] > m.I[2] ? b.I[2] : m.I[2], b.I[1] <
						m.I[1] ? b.I[1] : m.I[1], b.I[3] > m.I[3] ? b.I[3] : m.I[3]
					],
					n = Math.abs(g.Kk.Tz(n[1] - n[0], n[3] - n[2], b.Jb.length + 2) - d),
					m = [c.I[0] < m.I[0] ? c.I[0] : m.I[0], c.I[2] > m.I[2] ? c.I[2] : m.I[2], c.I[1] <
						m.I[1] ? c.I[1] : m.I[1], c.I[3] > m.I[3] ? c.I[3] : m.I[3]
					],
					m = Math.abs(g.Kk.Tz(m[1] - m[0], m[3] - m[2], c.Jb.length + 2) - e),
					p = Math.abs(m - n);
				if (!h || !f || p < f) h = l, f = p, k = m < n ? c :
					b
			}
			d = a.splice(h, 1)[0];
			b.Jb.length + a.length + 1 <= this.UJ ? (b.Jb.push(d), g.I.extend(b.I, d.I)) : c.Jb.length +
				a.length + 1 <= this.UJ ? (c.Jb.push(d), g.I.extend(c.I, d.I)) : (k.Jb.push(d), g.I
					.extend(k.I, d.I))
		},
		remove: function(a, b) {
			var c = [];
			c[0] = {
				I: a
			};
			(c[1] = b) || (c[1] = !1);
			c[2] = this.PK;
			this.count -= 1;
			if (!1 === c[1]) {
				var d = 0,
					e = [];
				do d = e.length, e = e.concat(this.m8.apply(this, c)); while (d !== e.length);
				return e
			}
			return this.m8.apply(this, c)
		},
		m8: function(a, b, c) {
			var d = [],
				e = [],
				f = [];
			if (!a || !g.I.Zg(a.I, c.I)) return f;
			a = g.I.cb(a.I);
			var h;
			e.push(c.Jb.length);
			d.push(c);
			do {
				c = d.pop();
				var k = e.pop() - 1;
				if ("undefined" !== typeof b)
					for (; 0 <= k;) {
						var l = c.Jb[k];
						if (g.I.Zg(a, l.I))
							if (b && "undefined" !== typeof l.Ve && l.Ve === b || !b && ("undefined" !==
									typeof l.Ve || g.I.M2(a, l.I))) {
								"undefined" !== typeof l.Jb ? (f = this.Nz(l, !0, [], l), c.Jb.splice(k,
									1)) : f = c.Jb.splice(k, 1);
								g.Kk.WT(c);
								b = void 0;
								c.Jb.length < this.UJ && (h = this.Nz(c, !0, [], c));
								break
							} else "undefined" !== typeof l.Jb && (e.push(k), d.push(c), c = l, k = l.Jb
								.length);
						k -= 1
					} else if ("undefined" !== typeof h) {
						c.Jb.splice(k + 1, 1);
						0 < c.Jb.length && g.Kk.WT(c);
						k = 0;
						for (l = h.length; k < l; k += 1) this.w5(h[k], c);
						h.length = 0;
						0 === d.length && 1 >= c.Jb.length ? (h = this.Nz(c, !0, h, c), c.Jb.length = 0,
							d.push(c), e.push(1)) : 0 < d.length && c.Jb.length < this.UJ ? (h =
							this.Nz(c, !0, h, c), c.Jb.length = 0) : h = void 0
					} else g.Kk.WT(c)
			} while (0 < d.length);
			return f
		},
		search: function(a, b) {
			return this.Nz({
				I: a
			}, !1, [], this.PK, b)
		},
		fxa: function(a, b) {
			return this.Nz({
				I: a
			}, !1, [], this.PK, b, !0)
		},
		Nz: function(a, b, c, d, e, f) {
			var h = {},
				k = [];
			if (!g.I.Zg(a.I, d.I)) return f ? h : c;
			k.push(d.Jb);
			do {
				d = k.pop();
				for (var l = d.length - 1; 0 <= l; l -= 1) {
					var m = d[l];
					if (g.I.Zg(a.I, m.I))
						if ("undefined" !== typeof m.Jb) k.push(m.Jb);
						else if ("undefined" !== typeof m.Ve)
						if (b) c.push(m);
						else if ("undefined" === typeof e || m.type === e) m = m.Ve, "undefined" !==
						typeof f ? h[g.a.yb(m)] = m : c.push(m)
				}
			} while (0 < k.length);
			return "undefined" !== typeof f ? h : c
		}
	});
	g.Kk.WT = function(a) {
		var b = a.Jb.length,
			c = a.I;
		if (0 === b) g.I.empty(c);
		else {
			var d = a.Jb[0].I;
			c[0] = d[0];
			c[2] = d[2];
			c[1] = d[1];
			c[3] = d[3];
			for (d = 1; d < b; d += 1) g.I.extend(c, a.Jb[d].I)
		}
	};
	g.Kk.Tz = function(a, b, c) {
		var d = (a + b) / 2;
		a *= b;
		return a * c / (a / (d * d))
	};
	g.B = g.B || {};
	g.B.Eh = g.da.extend({
		ka: [g.va, g.Ze],
		rva: ["position", "altitude", "visible", "clickable", "bubble"],
		A: function(a, b) {
			this.map = b;
			this.af(this.rva, a);
			this.X("zIndex", a);
			this.X("draggable", a);
			g.l.Tf && this.Fca();
			g.l.ba || this.FM();
			this.Lb = a;
			this.Lb.B = this
		},
		draggableChanged: function() {
			this.get("draggable") ? this.EM() : this.xO()
		},
		qa: function(a, b) {
			var c;
			c = b ? {
				type: a,
				pixel: b.Cb,
				target: this.Lb,
				lnglat: b.Nf,
				originEvent: b.uT
			} : {
				type: a
			};
			this.Lb && this.Lb.q(a, c)
		},
		rc: function(a) {
			("click" !== a.type && "rightclick" !== a.type && "dblclick" !==
				a.type && "longclick" !== a.type || this.get("clickable")) && this.qa(a.type, a)
		},
		DM: function() {
			this.h("click", this.rc);
			this.h("rightclick", this.rc);
			this.h("longclick", this.rc);
			this.h("longpress", this.rc);
			this.h("dblclick", this.rc)
		},
		v1: function() {
			this.G("click", this.rc);
			this.G("rightclick", this.rc);
			this.G("longclick", this.rc);
			this.G("longpress", this.rc);
			this.G("dblclick", this.rc)
		},
		FM: function() {
			this.get("clickable") && this.DM();
			this.h("mousemove", this.rc);
			this.h("mouseout", this.rc);
			this.h("mouseover", this.rc);
			this.h("mousedown", this.rc);
			this.h("mouseup", this.rc)
		},
		DCa: function() {
			this.v1();
			this.G("mousemove", this.rc);
			this.G("mouseout", this.rc);
			this.G("mouseover", this.rc);
			this.G("mousedown", this.rc);
			this.G("mouseup", this.rc)
		},
		clickableChanged: function() {
			this.get("clickable") ? this.DM() : this.v1()
		},
		Fca: function() {
			this.get("clickable") && this.DM();
			this.h("touchstart", this.rc, this);
			this.h("touchmove", this.rc, this);
			this.h("touchend", this.rc, this)
		},
		EM: function() {
			this.h("dragstart", this.du);
			this.h("dragging", this.bu);
			this.h("dragend", this.cu)
		},
		du: function(a) {
			this.map.VS(a);
			this.fg = a.Cb;
			this.Y5 = a.Ta;
			this.X5 = a.Nf;
			this.qa("dragstart", a)
		},
		bu: function(a) {
			var b = this.map.D.view.type;
			if ("2D" == b) {
				var c = a.Cb.ab(this.fg),
					b = c.x,
					c = c.y;
				this.fg = a.Cb;
				var d = this.map.get("rotation") * Math.PI / 180,
					e = b * Math.cos(d) + Math.sin(d) * c,
					b = -Math.sin(d) * b + Math.cos(d) * c;
				this.Yo(new g.H(e, b));
				this.qa("dragging", a)
			} else "3D" == b && a.Ta && (c = a.Cb.ab(this.fg), b = c.x, c = c.y, e = a.Ta.ab(this.Y5), a
				.Nf.ab(this.X5), this.fg = a.Cb, "function" === typeof this.rz && this.rz(b,
					c, e), this.Y5 = a.Ta, this.X5 = a.Nf, this.qa("dragging", a))
		},
		cu: function(a) {
			this.map.vw();
			"3D" == this.map.D.view.type && this.Lb.reset && this.Lb.reset();
			this.qa("dragend", a)
		},
		xO: function() {
			this.G("dragstart", this.du);
			this.G("dragging", this.bu);
			this.G("dragend", this.cu)
		},
		xN: function(a) {
			var b, c, d = [];
			if (a)
				for (b = 0, c = a.length; b < c; b += 1) d.push(this.yN(a[b]));
			return d
		},
		yN: function(a) {
			a = this.map.Bb(a);
			return [a.x, a.y]
		},
		hg: function(a) {
			var b = this.L.mb || this.map.get("centerCoords"),
				c = Math.pow(2, 20 - this.map.get("zoom"));
			return [(a[0] - b.x) / c, (a[1] - b.y) / c]
		},
		Rt: function(a, b) {
			var c = this.map.D,
				d = [],
				e = !1;
			a[0] instanceof Array && "number" !== typeof a[0][0] && (e = !0);
			if (e)
				for (var e = 0, f = a.length; e < f; e++) {
					for (var h = [], k = 0, l = a[e].length; k < l; k++) {
						var m = c.Bb(a[e][k]);
						m.x += b[0];
						m.y += b[1];
						h.push(c.Od(m))
					}
					d.push(h)
				} else
					for (e = 0, f = a.length; e < f; e++) h = c.Bb(a[e]), h.x += b[0], h.y += b[1], d
						.push(c.Od(h));
			return d
		}
	});
	g.B.vb = g.B.Eh.extend({
		fE: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect anchor"
			.split(" "),
		cma: {
			AMAP_ANIMATION_NONE: !1,
			AMAP_ANIMATION_DROP: g.Kj.Easing.Bounce,
			AMAP_ANIMATION_BOUNCE: g.Kj.Easing.Cubic
		},
		A: function(a, b) {
			arguments.callee.ma.apply(this, arguments);
			this.af(this.fE, a);
			this.X("move", a);
			this.Sma();
			this.Eu();
			this.set("AnimationOffset", new g.H(0, 0), !0);
			this.X("raiseOnDrag", a);
			this.X("animation",
				a)
		},
		PN: function(a, b, c) {
			var d = this.get("animation");
			if (d && "AMAP_ANIMATION_NONE" !== d) {
				var e = this;
				this.Gn = new g.Kj;
				this.Gn.transition = function(c, h, k) {
					if ("AMAP_ANIMATION_NONE" === d) return 0;
					if (a && 600 <= k) return e.Gn.stop(), 0;
					c = 0 === Math.floor(k / 600) % 2 ? "Out" : "In";
					"out" === b ? c = "Out" : "in" === b && (c = "In");
					return e.cma[d][c](k % 600 / 600)
				};
				c = c || 40;
				this.Gn.Iq = function(a) {
					e.set("AnimationOffset", e.AO.add(new g.H(0, -1 * c * a)))
				};
				this.AO = new g.H(0, 0);
				this.Gn.Nn()
			}
		},
		AnimationOffsetChanged: function() {
			this.positionChanged()
		},
		x0: function() {
			this.Gn && (this.Gn.stop(), this.set("AnimationOffset", this.AO));
			this.set("AnimationOffset", new g.H(0, -40));
			if (this.mr) this.mr.set("position", this.get("position"));
			else {
				var a = new z.B.vb({
					zIndex: this.get("zIndex") - 1,
					icon: new z.B.ci({
						image: g.r.Gb + "/theme/v1.3/dragCross.png",
						size: new g.xd(14, 11),
						innerOverlay: !0
					}),
					offset: new g.H(-4, -5),
					position: this.get("position"),
					innerOverlay: !0
				});
				a.Ca = !0;
				this.mr = a
			}
			this.mr.C = !0;
			this.mr.setMap(this.map.D);
			this.mr.C = !1
		},
		jY: function() {
			this.set("animation", "AMAP_ANIMATION_DROP",
				!0);
			this.PN(!0, "in");
			this.mr.C = !0;
			this.mr.C = !1
		},
		animationChanged: function() {
			this.Gn && (this.Gn.stop(), this.set("AnimationOffset", this.AO), this.Gn = null);
			var a = this.get("animation");
			a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.PN(!0, "in", 100) :
				this.PN())
		},
		rg: function() {
			this.mr && this.mr.set("position", this.get("position"))
		},
		raiseOnDragChanged: function() {
			this.get("raiseOnDrag") ? (this.h("dragstart", this.x0, this), this.h("dragging", this.rg,
				this), this.h("dragend", this.jY, this)) : (this.G("dragstart",
				this.x0, this), this.G("dragging", this.rg, this), this.G("dragend", this.jY,
				this))
		},
		Yo: function(a) {
			var b = this.get("position");
			a = this.map.Bb(b).add(a.Nd(Math.pow(2, 20 - this.map.get("zoom"))));
			b instanceof g.U ? this.set("position", this.map.Od(a)) : this.set("position", a)
		},
		rz: function(a, b) {
			var c = this.get("position"),
				d = this.get("altitude"),
				c = this.map.Ks(c, d),
				d = this.map.Zp(new g.H(c.x + a, c.y + b), null, d);
			this.set("position", d)
		},
		Sma: function() {
			var a = this.get("content"),
				b = this.get("shadow"),
				c = this.get("offset"),
				d = this.get("label"),
				e, f = this;
			e = a ? this.c2(a, c) : this.SP(this.get("icon"), function() {
				f.L && f.L.fa ? (g.l.zi && g.a.iepngFix(e), f.offsetChanged(), f.qL()) : f
					.map && f.map.set("display")
			});
			this.set("contentDom", e, !0);
			b && (a = this.i2(b, c), this.set("shadowDom", a, !0));
			d && d.content && this.set("labelDom", this.TP(d.content), !0)
		},
		TP: function(a) {
			var b = document.createElement("div");
			b.className = "amap-marker-label";
			b.innerHTML = a;
			return b
		},
		Eu: function() {
			var a = this.get("position");
			if (this.map && a && !this.L) {
				var b = this.map,
					a = this.map.Bb(a),
					a = this.L =
					new g.ai({
						name: "marker-" + g.a.yb(this),
						map: b,
						W: new g.Aa.Mg([a.x, a.y])
					});
				a.Sp = this.Lb.CLASS_NAME;
				a.uo = this;
				this.X("coords", a, !0);
				a.af("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
			}
		},
		getParams: function() {
			return {
				zIndex: this.get("zIndex"),
				Qp: this.get("angle"),
				Ug: this.get("contentDom"),
				HJ: this.get("labelDom"),
				d9: this.get("shadowDom"),
				opacity: this.get("opacity"),
				altitude: this.get("altitude"),
				title: this.get("title"),
				label: this.get("label"),
				nF: this.get("AnimationOffset"),
				verticalAlign: this.get("verticalAlign"),
				textAlign: this.get("textAlign"),
				offset: this.get("offset"),
				R5: this.get("isTop"),
				shape: this.get("shape"),
				visible: this.get("visible") && !this.Lb.get("outOfZooms"),
				anchor: this.get("anchor")
			}
		},
		offsetChanged: function() {
			function a(a) {
				var c = b.get("offset"),
					f = b.get("AnimationOffset"),
					h = b.get("verticalAlign"),
					k = b.get("textAlign"),
					l = Math.round(a.x) + c.x + f.x;
				a = Math.round(a.y) + c.y + f.y;
				var f = b.get("anchor"),
					m = b.L.Wj || g.f.Ko(b.L.Ug);
				b.L.Wj = m;
				c = m[0];
				m = m[1];
				f && (f = f.split("-"), 2 === f.length ? (k = f[1], h = f[0]) : 1 === f.length &&
					"center" === f[0] && (k = "center", h = "middle"));
				switch (k) {
					case "center":
						l -= c / 2;
						break;
					case "right":
						l -= c
				}
				switch (h) {
					case "middle":
						a -= m / 2;
						break;
					case "bottom":
						a -= m
				}
				b.L.fa.style.left = l + "px";
				b.L.fa.style.top = a + "px"
			}
			if (this.map)
				if (this.L && this.L.fa) {
					var b = this,
						c = this.map.D.view.type;
					"2D" == c ? (c = this.map.Bb(this.get("position")), c = c.ab(this.L.Na).ld(Math.pow(
							2, 20 - this.map.get("zoom"))), this.L.fa && (this.L.fa.LB && this.L.fa
							.parentNode !== this.L.fa.LB ? this.map.set("display") : a(c))) : "3D" ==
						c && (c = this.get("position"), c =
							this.map.Ks(c, this.get("altitude")), this.L.fa && (this.L.fa.LB && this.L
								.fa.parentNode !== this.L.fa.LB ? this.map.set("display") : a(c)))
				} else this.map.set("display")
		},
		altitudeChanged: function() {
			this.offsetChanged()
		},
		positionChanged: function() {
			if (this.L) {
				var a = this.map.Bb(this.get("position"));
				this.set("coords", [a.x, a.y]);
				this.map && (this.L.bba = !0, this.offsetChanged())
			}
		},
		anchorChanged: function() {
			this.SF()
		},
		textAlignChanged: function() {
			this.SF()
		},
		verticalAlignChanged: function() {
			this.SF()
		},
		SF: function() {
			this.L &&
				(this.L.Wj = null, this.L.re = !0, this.map && (this.map.td.lm = !0, this.map.set(
					"display")))
		},
		contentChanged: function() {
			if (this.L) {
				this.L.Wj = null;
				this.map.td.lm = !0; - 1 === g.a.indexOf(this.map.td.ah, this.L) && this.map.td.ah.push(
					this.L);
				var a = this.get("contentDom");
				this.L.fa && this.L.fa === a.parentNode && this.L.fa.removeChild(a);
				var a = this.get("content"),
					b = this.get("offset"),
					a = this.c2(a, b);
				this.set("contentDom", a);
				this.L.fa ? (g.l.zi && g.a.iepngFix(a), this.L.fa.appendChild(a), this.L.Ug = a, this
						.offsetChanged(), this.qL()) :
					this.map && this.map.set("display");
				this.titleChanged()
			}
		},
		iconChanged: function() {
			if (this.L && !this.get("content")) {
				this.L.Wj = null;
				this.map.td.lm = !0; - 1 === g.a.indexOf(this.map.td.ah, this.L) && this.map.td.ah.push(
					this.L);
				this.L.fa && this.get("contentDom") && this.L.fa.removeChild(this.get("contentDom"));
				var a = this.get("icon");
				this.get("offset");
				var b = this,
					c = this.SP(a, function() {
						b.L && b.L.fa ? (g.l.zi && g.a.iepngFix(c), b.offsetChanged(), b.qL()) : b
							.map && b.map.set("display")
					});
				this.set("contentDom", c);
				this.L.fa && (this.L.fa.appendChild(c),
					this.L.Ug = c);
				this.titleChanged()
			}
		},
		shadowChanged: function() {
			if (this.L) {
				var a = this.get("shadowDom");
				this.L.fa && a && a.parentNode === this.L.fa && this.L.fa.removeChild(a);
				if (a = this.get("shadow")) {
					var b = this.get("offset"),
						a = this.i2(a, b);
					this.set("shadowDom", a);
					this.L.fa && this.L.fa.appendChild(a)
				}
			}
		},
		titleChanged: function() {
			this.L && this.L.Ug && "string" === typeof this.get("title") && this.L.Ug && this.get(
				"title") && (this.L.Ug.title = this.get("title"))
		},
		qL: function(a, b) {
			a = a || this.get("label");
			b = b || this.get("labelDom");
			if (a && b) {
				var c = a.direction,
					d = this.L.Wj || g.f.Ko(this.L.Ug),
					e = d[0],
					d = d[1],
					f = g.f.Ko(b),
					h = f[0],
					k = f[1];
				this.L.Bv = f;
				var l = f = 0;
				switch (c) {
					case "top":
						f = -k;
						l = (e - h) / 2;
						break;
					case "right":
						f = (d - k) / 2;
						l = e;
						break;
					case "bottom":
						f = d;
						l = (e - h) / 2;
						break;
					case "left":
						f = (d - k) / 2;
						l = -h;
						break;
					case "center":
						f = (d - k) / 2, l = (e - h) / 2
				}
				a.offset && (f += a.offset.y, l += a.offset.x);
				b.style.top = f + "px";
				b.style.left = l + "px"
			}
		},
		labelChanged: function(a) {
			a = a || this.get("label");
			if (this.L && this.L.fa) {
				this.L.Bv = null;
				var b = this.L.fa,
					c = this.get("labelDom");
				c && c.parentNode === b && b.removeChild(c);
				a && a.content && (c = "", a.content && (c = this.TP(a.content), b.appendChild(c), this
					.qL(a, c)), this.set("labelDom", c))
			} else a && a.content ? this.set("labelDom", this.TP(a.content), !0) : this.set("labelDom",
				null)
		},
		isTopChanged: function() {
			var a = this.map.td.hL,
				b = this.get("isTop"),
				c = this.get("zIndex");
			a ? a === this ? this.L && this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.dr + 10 :
				c, this.map.td.hL = b ? this : null) : (a.L && a.L.fa && (a.L.fa.style.zIndex = b ?
					a.get("zIndex") : this.map.td.dr + 10), this.L &&
				this.L.fa && (this.L.fa.style.zIndex = b ? this.map.td.dr + 10 : c), this.map.td
				.hL = b ? this : a) : (this.map.td.hL = this, this.L && this.L.fa && (this.L.fa
				.style.zIndex = b ? this.map.td.dr + 10 : c))
		},
		visibleChanged: function() {
			this.L && this.L.fa && (this.get("visible") && !this.Lb.get("outOfZooms") ? this.L.fa.style
				.display = "block" : this.L.fa.style.display = "none")
		},
		iva: function() {
			this.visibleChanged()
		},
		angleChanged: function() {
			if (!g.l.Ue && this.L && this.L.fa) {
				var a = this.L,
					b = a.get("params"),
					c = b.textAlign,
					d = b.verticalAlign,
					e = b.offset,
					b = e.x,
					e = e.y;
				this.SF();
				if ("AMap.Text" == a.Sp) {
					var e = b = 0,
						f = a.Wj || g.f.Ko(a.Ug),
						h = f[0],
						k = f[1];
					a.Wj = f;
					switch (c) {
						case "center":
							b = h / 2;
							break;
						case "right":
							b = h
					}
					switch (d) {
						case "middle":
							e = k / 2;
							break;
						case "bottom":
							e = k
					}
				} else b = -b, e = -e;
				g.f.rotate(this.L.fa, this.get("angle") || 0, {
					x: b,
					y: e
				})
			}
		},
		zIndexChanged: function() {
			var a = this.get("zIndex");
			if (a > this.map.td.dr) {
				this.map.td.dr = a;
				var b = this.map.td.hL;
				b && b.L && b.L.fa && (b.L.fa.style.zIndex = a + 10)
			}
			this.L && this.L.fa && (this.L.fa.style.zIndex = this.get("isTop") ? this.map.td.dr + 10 :
				this.get("zIndex"))
		},
		opacityChanged: function() {
			var a = this.get("contentDom"),
				b = this.get("shadowDom");
			a && g.f.Wq(a, this.get("opacity"));
			b && g.f.Wq(b, this.get("opacity"))
		},
		c2: function(a) {
			var b;
			b = document.createElement("div");
			b.className = "amap-marker-content";
			"string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b
				.childNodes[0].style && (b.style["white-space"] = "pre"));
			g.f.Wq(b, this.get("opacity"));
			return b
		},
		SP: function(a, b) {
			var c, d = 0,
				e = 0,
				f, h, k, l, m, n;
			a ? ("string" === typeof a ? (c = a, n = !0) : (c = a.get("image"), e = a.get("size"),
				f = a.get("imageSize"), d = e.width, e = e.height, f && (l = f.width, m = f
					.height)), f = "string" !== typeof a ? a.get("imageOffset") : {
				x: 0,
				y: 0
			}) : (c = g.r.Hi + "/mark_bs.png", f = {
				x: 0,
				y: 0
			}, d = 19, e = 33, l = 19, m = 33);
			h = document.createElement("div");
			h.className = "amap-icon";
			h.style.position = "absolute";
			h.style.overflow = n ? "inherit" : "hidden";
			d && (h.style.width = d + "px");
			e && (h.style.height = e + "px");
			k = document.createElement("img");
			l && m && (k.style.width = l + "px", k.style.height = m + "px");
			k.style.top = f.y + "px";
			k.style.left = f.x + "px";
			h.appendChild(k);
			g.f.Wq(g.l.Ue &&
				n ? k : h, this.get("opacity"));
			d && e || (h.xM = !1);
			g.F.h(k, "load", function q() {
				this.L && (this.L.Wj = null);
				this.map && this.map.td && (this.map.td.lm = !0);
				g.F.G(k, "load", q, this);
				if (this.L && this.L.fa) {
					var a = this.get("labelDom");
					a && this.L.fa.appendChild(a)
				}
				h.xM = !0;
				b && b()
			}, this);
			k.src = c;
			return h
		},
		i2: function(a) {
			a = this.SP(a);
			a.style.zIndex = -1;
			return a
		},
		moveChanged: function() {
			var a = this.get("move");
			if (!1 === a) return this.cya();
			void 0 !== a && ("pause" === a.action ? this.Kva() : "[object Array]" === Object.prototype
				.toString.call(a.Nf) ?
				a.Nf && ("resume" === a.action && this.NG ? this.moveTo(a.Nf[a.Nf.Jp || 0], a.speed,
					a.xb) : (this.NG && this.q("movestop"), a.Nf.Jp = 0, this.set("position", a
					.Nf[0]), this.mua(a.Nf, a.speed, a.xb, a.una))) : this.moveTo(a.Nf, a.speed, a
					.xb, !0))
		},
		moveTo: function(a, b, c, d) {
			if (!(0 >= b)) {
				var e = this.get("position");
				a.ab(e);
				var f = Math.round(a.Ge(e) / 1E3 / b * 36E5);
				if (0 === f) return this.q("moveend");
				this.yh && (this.yh.stop(), this.yh = null);
				this.yh = new g.Kj(e, a);
				c = c || function(a) {
					return a
				};
				this.yh.transition = function(a, b, d) {
					if (d >= f) return b;
					var e = (b.R - a.R) * c(d / f) + a.R;
					a = (b.Q - a.Q) * c(d / f) + a.Q;
					return new g.U(e, a)
				};
				this.yh.Iq = function(b) {
					this.set("position", b);
					d && this.Lb.q("moving", {
						target: this.Lb,
						passedPath: [this.yh.start, this.get("position")]
					});
					this.q("moving");
					b.gb(a) && (this.yh && (this.yh.stop(), this.yh = null), this.Lb.q("moveend", {
						target: this.Lb
					}), this.q("moveend"))
				};
				this.get("autoRotation") && !g.l.Ue && (b = "2D" == (this.map.D.view.type || "2D") ?
					this.Xea(e, a) : this.Yea(e, a), this.set("angle", b));
				this.yh.Nn(this)
			}
		},
		cya: function() {
			this.yh && (this.yh.stop(),
				this.yh = null, this.q("movestop"))
		},
		Kva: function() {
			this.yh && (this.yh.stop(), this.yh = null, this.q("movepause"))
		},
		mua: function(a, b, c, d) {
			function e() {
				var b = a.slice(0, a.Jp || 0);
				b.push(this.get("position"));
				this.Lb.q("moving", {
					target: this.Lb,
					passedPath: b
				})
			}

			function f() {
				a.Jp < a.length - 1 ? (a.Jp += 1, this.moveTo(a[a.Jp], b, c)) : (this.qa("movealong"),
					d ? (a.Jp = 0, this.set("position", a[0]), this.moveTo(a[a.Jp], b, c)) : this.q(
						"movestop"))
			}
			var h = Math.min(a.Jp || 0, a.length - 1);
			this.NG || (this.NG = !0, this.h("moving", e, this), this.h("moveend",
				f, this), this.h("movestop", function l() {
				this.NG = !1;
				this.G("moveend", f, this);
				this.G("moving", e, this);
				this.G("movestop", l, this)
			}, this));
			this.moveTo(a[h], b, c)
		},
		Yea: function(a, b) {
			var c = this.map,
				d = c.Ks(a),
				c = c.Ks(b),
				e = 0;
			c.Ge(d);
			var f = c.y - d.y,
				h = c.x - d.x;
			0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI +
					e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) :
				e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return g.a.wb(180 * e / Math.PI, 1)
		},
		Xea: function(a, b) {
			var c = this.map,
				d = c.Bb(a),
				c = c.Bb(b),
				e = 0;
			c.Ge(d);
			var f = c.y -
				d.y,
				h = c.x - d.x;
			0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= f && 0 > h ? e = Math.PI +
					e : 0 > f && 0 >= h ? e = Math.PI + e : 0 > f && 0 <= h && (e = 2 * Math.PI + e)) :
				e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return g.a.wb(180 * e / Math.PI, 1)
		}
	});
	g.B.Tn = g.B.Eh.extend({
		A: function(a, b) {
			arguments.callee.ma.apply(this, arguments);
			this.X("items", a, !0);
			this.X("content", a, !0);
			this.X("resolution", b);
			this.X("centerCoords", b);
			this.Rp = a
		},
		Ss: function(a) {
			this.Yg();
			this.st();
			this.Em();
			this.xl("resolution");
			this.xl("centerCoords");
			this.xl("render");
			this.X("resolution", a);
			this.X("centerCoords", a);
			this.X("render", a);
			this.map.h("movestart", this.$m, this);
			this.map.h("mapmove", this.$m, this);
			this.map.h("zoomstart", this.$m, this);
			this.map.h("click", this.$m, this);
			this.map.h("closeOverlays", this.$m, this);
			this.map.h("rotate", this.$m, this)
		},
		$m: function() {
			this.Rp.map && (this.Rp.C = !0, this.Rp.close(), this.Rp.C = !1)
		},
		mapChanged: function() {},
		positionChanged: function() {
			this.Em()
		},
		renderChanged: function() {
			this.Em()
		},
		Yg: function() {
			this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null);
			var a = g.f.create("div", null, "amap-menu");
			g.F.h(a, "mousedown", function(a) {
				g.F.stopPropagation(a)
			}, this);
			this.K = a;
			this.map.Xa.B.appendChild(this.K)
		},
		st: function() {
			var a =
				this,
				b = this.K;
			b.innerHTML = "";
			var c = this.get("content");
			if ("object" === typeof c) b.appendChild(c);
			else if ("string" === typeof c) b.innerHTML = c;
			else if ((c = this.get("items")) && c.length) {
				var d = g.f.create("ul", b, "amap-menu-outer");
				c.sort(function(a, b) {
					return isNaN(a.iK) || isNaN(b.iK) ? 0 : a.iK - b.iK
				});
				for (b = 0; b < c.length; b += 1)(function(b) {
					var c = b.Qn,
						h = b.xb,
						k = g.f.create("li", d);
					k.innerHTML = c;
					g.F.h(k, "click", function() {
						h.call(k);
						a.Rp.C = !0;
						a.Rp.close();
						a.Rp.C = !1
					}, k)
				})(c[b])
			} else this.K.innerHTML = ""
		},
		Em: function() {
			var a =
				this.map,
				b = this.K;
			a && b && (this.map.get("zoom"), b = this.get("position"), b = a.Ks(b), a = b.y, b = b.x,
				this.K.style.right = "", this.K.style.bottom = "", this.K.style.left = b + "px",
				this.K.style.top = a + "px")
		},
		gg: function() {
			this.K && (this.map.G("click", this.PBa, this), this.map.Xa.B.removeChild(this.K), this.Rp
				.qi = !1, this.K = this.Rp.Ce.map = null, this.map.G("movestart", this.$m, this),
				this.map.G("zoomstart", this.$m, this), this.map.G("click", this.$m, this), this.map
				.G("closeOverlays", this.$m, this), this.map.G("rotate", this.$m, this))
		},
		visibleChanged: function() {
			this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display =
				"none")
		},
		itemsChanged: function() {
			this.K && this.st()
		}
	});
	g.B.Ye = g.B.Eh.extend({
		A: function(a, b) {
			arguments.callee.ma.apply(this, arguments);
			this.af("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset anchor"
				.split(" "), a);
			this.X("retainWhenClose", a, !0);
			a.X("toBeClose", this);
			this.rf = a
		},
		Ss: function(a) {
			this.Xna || (this.Yg(), this.st());
			this.xl("resolution");
			this.xl("centerCoords");
			this.xl("render");
			this.X("resolution", a);
			this.X("centerCoords", a);
			this.X("render", a);
			this.map = a;
			a.Xa.B.appendChild(this.Qc);
			this.yV();
			this.Em();
			this.mX();
			this.Xna = !0;
			this.Mna();
			this.Lb.q("onAdd", {
				type: "onAdd",
				target: this.Lb
			})
		},
		Yg: function() {
			var a = g.f.create("div");
			a.className = "amap-info";
			var b = g.f.create("div", a, "amap-info-shadowContainer"),
				c = g.f.create("div", a),
				d = this.get("anchor"),
				e = "amap-info-contentContainer";
			d && (e = d + " amap-info-contentContainer");
			d = g.f.create("div", c, e);
			a.style.position = "absolute";
			c.style.position = "absolute";
			c.style.bottom = "0px";
			c.style.left = "0px";
			b.style.position = "absolute";
			this.Qc = a;
			this.Oh = c;
			this.IU = b;
			this.ph =
				d;
			this.set("contentDom", this.ph, !0)
		},
		st: function() {
			var a = this.get("contentU");
			if (a) {
				var b = this.get("isCustom"),
					c = this.ph,
					d = this.IU;
				c.innerHTML = "";
				var e = null;
				if (b) {
					if ("string" === typeof a) c.innerHTML = a;
					else if (a instanceof Array)
						for (e = 0; e < a.length; e += 1) c.appendChild(a[e]);
					else c.appendChild(a);
					e = c;
					d.parentNode && d.parentNode.removeChild(d)
				} else {
					e = "amap-info-content amap-info-outer";
					g.l.Ue && (e += " amap-info-content-ie8");
					e = this.jsa = d = g.f.create("div", c, e);
					"string" === typeof a ? d.innerHTML = a : d.appendChild(a);
					this.Zna = d;
					a = g.f.create("a", this.jsa, "amap-info-close");
					a.innerHTML = "\u00d7";
					this.gQ = a;
					a.href = "javascript: void(0)";
					g.l.Tf && (g.F.h(a, "touchstart", function(a) {
						g.F.stop(a)
					}, this), g.F.h(a, "touchend", function(a) {
						g.F.stop(a);
						this.rf.C = !0;
						this.rf.close();
						this.rf.C = !1
					}, this), g.F.h(a, "click", function(a) {
						g.F.stop(a);
						this.rf.C = !0;
						this.rf.close();
						this.rf.C = !1
					}, this));
					g.l.ba || (g.F.h(a, "mousedown", function(a) {
						g.F.stop(a)
					}, this), g.F.h(a, "click", function(a) {
							g.F.stop(a);
							this.rf.C = !0;
							this.rf.close();
							this.rf.C = !1
						},
						this));
					if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"),
						0 !== a.height && (d.style.height = a.height + "px");
					this.get("anchor");
					g.f.create("div", c, g.l.Ue ? "amap-info-sharp-old" : "amap-info-sharp");
					this.IU.style.display = "block"
				}
				g.F.aya(e)
			}
		},
		yV: function() {
			var a = this.get("isCustom"),
				b = this.get("showShadow");
			if (!a && b) {
				var a = this.IU,
					b = g.f.lJ(this.ph),
					c = b.height - 23,
					d = b.width;
				if (g.l.zi || g.l.rv) c = this.ph.childNodes[0].offsetHeight, d = this.ph.childNodes[0]
					.offsetWidth + 26;
				b = "background-image:url(" + g.r.Gb +
					(g.l.zi ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
				a.innerHTML = "";
				var e = [],
					f;
				f = e[1] = {};
				f.height = 0.5 * c + 4;
				f.width = d;
				f.offsetX = 400;
				f.offsetY = 16;
				f.top = -f.height - 10 - 15;
				f.left = 23;
				f = e[2] = {};
				f.height = e[1].height;
				f.width = e[1].height;
				f.offsetX = 1075 - f.width;
				f.offsetY = e[1].offsetY;
				f.top = e[1].top;
				f.left = 23 + e[1].width;
				f = e[3] = {};
				f.height = 10;
				f.width = 22;
				f.offsetX = 30;
				f.offsetY = 445;
				f.top = -25;
				f.left = 23 + (g.l.rv || g.l.zi ? 5 : 0);
				f = e[4] = {};
				f.height = 10;
				f.width = d / 2 - 15 - e[3].left - e[3].width;
				f.offsetX = 132;
				f.offsetY = 445;
				f.top = -25;
				f.left = e[3].left + e[3].width;
				f = e[5] = {};
				f.height = 10;
				f.width = 70;
				f.offsetX = 80;
				f.offsetY = 445;
				f.top = -25;
				f.left = e[4].left + e[4].width;
				f = e[6] = {};
				f.height = 10;
				f.width = d - e[5].left - e[5].width;
				f.offsetX = 132;
				f.offsetY = 445;
				f.top = -25;
				f.left = e[5].left + e[5].width;
				f = e[7] = {};
				f.height = 10;
				f.width = 30;
				f.offsetX = 621;
				f.offsetY = 445;
				f.top = -25;
				f.left = d;
				f = e[8] = {};
				f.height = 15;
				f.width = 70;
				f.offsetX = 47;
				f.offsetY = 470;
				f.top = -15;
				f.left = d / 2 - 15;
				for (c = 1; 8 >= c; c += 1) d = g.f.create("div", a), f = [], f.push(
						"position:absolute;"), f.push(b), f.push("top:" +
						e[c].top + "px;"), f.push("left:" + e[c].left + "px;"), f.push("width:" + e[c]
						.width + "px;"), f.push("height:" + e[c].height + "px;"), f.push(
						"background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style
					.cssText = f.join("")
			}
		},
		gIa: function() {},
		Em: function() {
			var a = this.map,
				b = this.Qc,
				c = this.get("position"),
				d = this.get("anchor");
			if (a && b && c) {
				a = a.Ks(c, this.get("altitude"));
				d && (this.ph.className = d + " amap-info-contentContainer");
				var e = g.f.lJ(this.ph);
				if (g.l.zi || g.l.rv) e.width = this.ph.childNodes[0].offsetWidth + 14;
				b = e.height;
				c = this.get("offset");
				this.get("isCustom");
				e = e.width;
				this.Qc.style.left = Math.round(a.x - e / 2 + (c.x || 0)) + "px";
				this.Qc.style.top = Math.round(a.y + (c.y || 0)) + "px";
				if (d) {
					var f;
					"center" == d ? (d = "center", f = "middle") : (f = d.split("-"), d = f[1], f = f[
						0]);
					switch (f) {
						case "middle":
							this.Qc.style.top = Math.round(a.y + b / 2 + (c.y || 0)) + "px";
							break;
						case "top":
							this.Qc.style.top = Math.round(a.y + b + (c.y || 0)) + "px"
					}
					switch (d) {
						case "left":
							this.Qc.style.left = Math.round(a.x + (c.x || 0)) + "px";
							break;
						case "right":
							this.Qc.style.left = Math.round(a.x -
								e + (c.x || 0)) + "px"
					}
				}
				d = this.Zna;
				if (this.gQ && d.childNodes[0]) {
					for (b = a = 0; b < d.childNodes.length; b += 1) a += d.childNodes[0]
						.clientHeight || 0;
					a > (this.get("size").height || d.clientHeight) ? this.gQ.style.right = "20px" :
						this.gQ.style.right = "5px"
				}
			}
		},
		Ada: function() {
			var a = new g.H(2 - this.ph.offsetWidth / 2, 2 - this.ph.offsetHeight),
				b = this.get("offset") || new g.H(0, 0),
				c = this.get("anchor");
			if (c) {
				var a = this.ph.offsetWidth,
					d = this.ph.offsetHeight,
					e, f, h = 2 - a / 2,
					k = 2 - d;
				c && (c = c.split("-"), 2 === c.length ? (e = c[1], f = c[0]) : 1 === c.length &&
					"center" ===
					c[0] && (e = "center", f = "middle"));
				switch (e) {
					case "left":
						h = 2;
						break;
					case "right":
						h = -a
				}
				switch (f) {
					case "middle":
						k = -d / 2;
						break;
					case "top":
						k = -2
				}
				a = new g.H(h, k)
			}
			this.get("isCustom") || (a = a.add(new g.H(0, -23)));
			return a.add(b)
		},
		altitudeChanged: function() {
			this.Em()
		},
		mX: function() {
			if (this.get("position") && this.get("autoMove") && this.ph) {
				for (var a = this.map, b = new g.xd(this.ph.offsetWidth, this.ph.offsetHeight), c = a
						.Ks(this.get("position"), this.get("altitude")).add(this.Ada()), d = c.add(b
						.PE()), e = a.get("size"), f = a.vqa(),
						h = 0, k = 0, l = 0; l < f.length; l += 1) {
					var m = f[l],
						n = 0,
						p = 0;
					0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 <
							p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[
							3] ? (n = e.vj() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p &&
							(Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ?
						(n = e.vj() - m[1] - (d.x + h), p = e.tj() - m[2] - (d.y + k), 0 > n && 0 > p &&
							(Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] &&
						(n = m[3] - (c.x + h), p = e.tj() - m[2] - (d.y + k), 0 < n && 0 > p && (Math
							.abs(n) < Math.abs(p) ? h += n : k += p))
				}
				c = c.add(new g.H(h, k));
				d = d.add(new g.H(h,
					k));
				l = f = 0;
				0 > c.x || b.vj() > e.vj() ? f = 20 - c.x : e.vj() < d.x && (f = e.vj() - d.x - 25);
				0 > c.y || b.tj() > e.tj() ? l = 5 - c.y : e.tj() < d.y && (l = e.tj() - d.y - 15);
				f += h;
				l += k;
				if (f || l) a.D.C = !0, a.D.panBy(f, l), a.D.C = !1
			}
		},
		Mna: function() {
			this.get("closeWhenClickMap") && (this.map.h("clickstart", this.z_, this, !1), this.map.h(
				"clickend", this.y_, this, !1))
		},
		z_: function() {
			this.rf.qi && (this.rf.C = !0, this.rf.getIsOpen() && (this.rf.gL = !0), this.rf.C = !1)
		},
		y_: function() {
			this.rf.qi && (this.rf.gL && (this.rf.C = !0, this.rf.close(), this.rf.C = !1), this.rf
				.gL = !1)
		},
		gg: function() {
			this.Qc && this.map && (this.rf.gL = !1, this.get("closeWhenClickMap") && (this.map.G(
					"clickstart", this.z_, this), this.map.G("clickend", this.y_, this)), this.get(
					"retainWhenClose") ? this.map.Ml.appendChild(this.Qc) : (this.Qc.parentNode ===
					this.map.Xa.B && this.map.Xa.B.removeChild(this.Qc), this.rf.B = null), this
				.map = null, this.rf.qi = !1, this.Lb.q("close", {
					type: "close",
					target: this.Lb
				}))
		},
		ZBa: function() {
			if (!this.get("isCustom")) return this.ph.offsetWidth;
			for (var a = this.gi, b = a.firstChild, c = a.lastChild; b && c &&
				b.style && c.style && b === c;) a = b, b = a.firstChild, c = a.lastChild;
			a = g.f.Zc(a, "width");
			return a = parseInt(a.replace("px", ""), 10)
		},
		renderChanged: function() {
			this.Em()
		},
		positionChanged: function() {
			this.map && this.Qc && (this.Em(), this.mX())
		},
		anchorChanged: function() {
			this.positionChanged()
		},
		offsetChanged: function() {
			this.positionChanged()
		},
		contentChanged: function() {
			this.st();
			this.yV();
			this.Em()
		},
		sizeChanged: function() {
			this.st();
			this.yV();
			this.Em()
		}
	});
	g.Aa = {};
	g.Aa.Oe = g.da.extend({
		ka: [g.va, g.Ze],
		A: function() {},
		dv: function() {
			var a = this.Kd();
			a.oh || (a.oh = g.I.xi(a));
			return a.oh
		},
		cb: function() {
			return new this.A(this.za)
		},
		qR: function() {
			return this.za
		},
		setCoords: function(a) {
			this.R8(a)
		},
		R8: function(a) {
			this.Kv = this.Kd();
			this.xg = null;
			if (g.Aa.wp && this instanceof g.Aa.wp) {
				var b = a.length;
				this.je = this.je.slice(0, b);
				for (var c = 0; c < b; c += 1)
					if (this.je[c]) this.je[c].R8(a[c]);
					else {
						var d = new g.Aa.Dc(a[c]);
						this.je[c] = d
					}
			} else if (g.Aa.Dc && this instanceof g.Aa.Dc) {
				b = a.length;
				this.Qf =
					Array(b);
				for (var e, c = 0; c < b; c += 1)
					if (d = a[c], e = new g.Aa.RL(d), this.Qf[c] = e, 0 === c) {
						if (0 === d.length) break;
						e.tq(d) || d.reverse()
					} else 0 !== d.length && e.tq(d) && d.reverse()
			} else this.za = a
		}
	});
	g.Aa.Pe = g.extend({}, {
		Tw: "point",
		NL: "linestring",
		nW: "linearring",
		EF: "polygon",
		ZL: "multipoint",
		YL: "multilinestring",
		AF: "multipolygon",
		DAa: "geometrycollection"
	});
	g.ai = g.da.extend({
		ka: [g.va, g.Ze],
		A: function(a) {
			a = a || {};
			a.wB && (this.wB = a.wB);
			a.RN && (this.RN = a.RN);
			a.IZ && (this.IZ = a.IZ);
			this.map = a.map;
			this.fm = a.sN || g.a.yb(this);
			this.name = a.name || "";
			this.re = !1;
			this.set("visible", !0, !0);
			this.AU(a.W);
			this.ul = a.cL;
			this.style = a.style
		},
		Roa: function() {
			this.name = this.map = null;
			this.style = this.ul = this.uo = this.f6 = this.W = this.W.Oa = null;
			this.yl();
			this.ti()
		},
		pra: function() {
			return this.ul
		},
		Gxa: function(a) {
			this.ul = a;
			this.zIndex = this.ul[0].Hk || this.zIndex
		},
		ec: function() {
			return this.W
		},
		AU: function(a) {
			a && (this.W = a, this.X("coords", a, !0), this.wB || this.RN) && (a.X("radius", this), a.X(
				"center", this), a.X("resolution", this), a.X("strokeWeight", this))
		},
		setStyle: function(a) {
			this.Gxa(a);
			this.qs()
		},
		coordsChanged: function() {
			this.qs()
		},
		radiusChanged: function() {
			this.W.Kv = this.W.Kd();
			this.W.xg = null;
			this.qs()
		},
		qs: function(a) {
			this.set("feature", {
				target: this,
				Hoa: a,
				Kv: this.W.Kv || this.W.Kd(),
				sua: this.W.Kd()
			});
			this.W.Kv = this.W.Kd()
		},
		visibleChanged: function() {
			this.qs()
		},
		KEa: function(a) {
			for (var b = 0; b < this.ul.length; b +=
				1) {
				var c = this.ul[b];
				if (a.gb(c.ry(this))) return c
			}
		},
		Dqa: function() {
			var a = this.ec(),
				b = [];
			a.yi() === g.Aa.Pe.EF || a.yi() === g.Aa.Pe.AF ? b.push(new g.style.Be.Dc({
				fillColor: "#78cdd1",
				le: 0.2,
				strokeColor: "#122e29",
				pb: 0.5,
				pc: 1
			})) : a.yi() === g.Aa.Pe.NL || a.yi() === g.Aa.Pe.nW || a.yi() === g.Aa.Pe.YL ? b.push(
				new g.style.Be.vp({
					color: "#888888",
					width: 1,
					zIndex: 10
				})) : a.yi() !== g.Aa.Pe.Tw && a.yi() !== g.Aa.Pe.ZL || b.push(new g.style.Be.ci({
				url: g.r.Gb + "/theme/v1.3/markers/0.png",
				width: 36,
				height: 36,
				rotation: 0,
				xIa: -12,
				zIa: -36,
				zIndex: 100
			}));
			return b
		}
	});
	g.ai.yAa = "geometry";
	g.Aa.Mg = g.Aa.Oe.extend({
		A: function(a, b) {
			this.za = a;
			this.zj = b;
			this.xg = null
		},
		Kd: function() {
			if (!this.xg) {
				var a = this.za[0],
					b = this.za[1];
				if (this.zj) this.xg = [a, b, a, b];
				else {
					var c = this.get("radius"),
						d = this.get("resolution") * this.get("strokeWeight") || 0,
						c = c ? c / Math.cos(Math.PI * this.get("center").Q / 180) : 0;
					this.xg = [a - c - d, b - c - d, a + c + d, b + c + d]
				}
			}
			return this.xg
		},
		yi: function() {
			return g.Aa.Pe.Tw
		}
	});
	g.M = {
		canvas: {},
		be: {},
		Xe: {},
		Ke: {}
	};
	g.M.Yb = g.da.extend({
		ka: [g.va, g.Ze],
		A: function(a, b) {
			this.g = a;
			this.zj = a.S.zj;
			this.J = b;
			this.e = b.e;
			this.X("display", b)
		},
		$j: function() {
			this.Hq && this.Hq();
			this.yl();
			this.e = this.J = this.g = null
		},
		lq: function(a, b, c, d) {
			var e = this.zoom;
			c = [];
			var f = this.g;
			if (Math.floor(e) !== e) b(c, f);
			else {
				a = [a.x, a.y];
				if (f.lm) {
					for (var e = f.ah, h = !0, k = [], l = 0; l < e.length; l += 1) {
						var m = e[l].Ug;
						if (m)
							if (m.parentNode && m.parentNode.parentNode && this.J && m.parentNode
								.parentNode !== this.J.Ml && "none" !== m.parentNode.style.display) {
								var n = g.f.Ko(m),
									m =
									n[0],
									n = n[1];
								if (m && n) {
									var p = Math.max(Math.abs(e[l].get("offset").x), Math.abs(e[l].get(
										"offset").y)) + Math.max(m, n);
									f.Af = Math.max(f.Af, p);
									f.ig = Math.max(f.ig, p);
									e[l].width = m;
									e[l].height = n
								} else h = !1, k.push(e[l])
							} else h = !1, k.push(e[l])
					}
					h ? (f.lm = !1, f.ah = []) : f.ah = k
				}
				e = Math.max(f.Af, f.qz || 0) * this.T;
				h = Math.max(f.ig, f.qz || 0) * this.T;
				k = 0;
				f.pz && (k = f.pz / Math.cos(Math.PI * this.e.get("center").Q / 180));
				h = Math.max(h, k || 0);
				e = Math.max(e, k || 0);
				if (e = f.xn([a[0] - e, a[1] - h, a[0] + e, a[1] + h])) {
					for (var q in e)
						if (e.hasOwnProperty(q) &&
							(h = e[q], h.get("visible") && !h.get("noSelect")))
							if (k = h.ec(), k instanceof g.Aa.Mg)
								if (this.zj) {
									l = this.g.Cm;
									l instanceof Array && (l = "number" === typeof h.hb.style && l[h.hb
										.style] ? l[h.hb.style] : l[0]);
									var m = l.size.width * this.T,
										n = l.size.height * this.T,
										p = l.anchor.x * this.T,
										r = l.anchor.y * this.T,
										k = k.za,
										s = l.rotation_,
										u = [a[0], a[1]];
									if (s) {
										var v = (a[0] - k[0]) / this.T,
											w = (a[1] - k[1]) / this.T,
											t = s,
											s = Math.cos(-t),
											x = Math.sin(-t),
											t = v * s - w * x,
											v = v * x + w * s;
										u[0] = k[0] + t * this.T;
										u[1] = k[1] + v * this.T
									}
									m = g.I.PP([
										[u[0] - m + p, u[1] - n + r],
										[u[0] + p, u[1] +
											r
										]
									]);
									g.I.Sd(m, k) && c.push(h)
								} else if ("undefined" !== typeof k.get("radius")) l = k.za, l = new g
						.H(l[0], l[1]), m = new g.H(a[0], a[1]), k = k.get("radius"), "px" === h.get(
							"unit") ? m.Ge(l) / Math.pow(2, 20 - this.zoom) < k && c.push(h) : m.Ge(l) *
						Math.cos(h.get("center").Q * Math.PI / 180) <= k / this.Bq * Math.pow(2, 20 -
							this.zoom) && c.push(h);
					else if ("AMap.Text" == h.Sp) l = h.get("params"), l.visible && h.fa && g.f.HD(d, h
						.fa, "amap-markers") && c.push(h);
					else {
						if (l = h.get("params"), l.visible && h.fa)
							if (l.shape)
								for (k = k.za, s = l.Qp % 360, u = [a[0], a[1]], s && (v = (a[0] -
											k[0]) / this.T, w = (a[1] - k[1]) / this.T, t = Math.PI *
										s / 180, s = Math.cos(-t), x = Math.sin(-t), t = v * s - w * x,
										v = v * x + w * s, u[0] = k[0] + t * this.T, u[1] = k[1] + v *
										this.T), m = h.width * this.T, n = h.height * this.T, p = l
									.offset.x * this.T, r = l.offset.y * this.T, m = g.I.PP([
										[u[0] - m - p, u[1] - n - r],
										[u[0] - p, u[1] - r]
									]), k[0] instanceof Array || (k = [k]), n = k.length - 1; 0 <=
									n; n -= 1) {
									if (g.I.Sd(m, k[n])) {
										l.shape ? this.GD(h, u, k) && c.push(h) : c.push(h);
										break
									}
								} else g.f.HD(d, h.fa, "amap-markers") && c.push(h)
					} else k.Sd ? k.Sd(a) && c.push(h) : k.By && 1.8 * k.By(a) <= h.get(
						"strokeWeight") *
						this.T && c.push(h);
					this.zj ? c.sort(function(a, b) {
						return a.fm > b.fm ? -1 : 1
					}) : c.sort(function(a, b) {
						return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b
							.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.fm > b
							.fm ? -1 : 1
					});
					b(c, f)
				} else b([], f)
			}
		},
		GD: function(a, b, c) {
			var d = (b[0] - c[0][0]) / this.T;
			b = (b[1] - c[0][1]) / this.T;
			a = a.get("params");
			c = a.offset;
			var d = [d - c.x, b - c.y],
				e;
			a = a.shape;
			if ("circle" === a.w.type) {
				if (b = a.w.coords[0], c = a.w.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] -
						c) * (d[1] - c)) <= a.w.coords[2]) return !0
			} else {
				if ("poly" ===
					a.w.type) return e = a.w.coords, e = this.gI(e), g.wd.Sd(d, e);
				if ("rect" === a.w.type) return e = a.w.coords, a = e[0], b = e[1], c = e[2], e = e[3],
					e = [
						[a, b],
						[c, b],
						[c, e],
						[a, e]
					], g.wd.Sd(d, e)
			}
			return !1
		},
		gI: function(a) {
			for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
			return b
		},
		f4: function(a, b, c, d, e, f, h) {
			var k = ["position:absolute;"];
			k.push("top:" + Math.round(c) + "px;");
			k.push("left:" + Math.round(b) + "px;");
			k.push("width:" + Math.round(d) + "px;");
			k.push("height:" + Math.round(e) + "px;");
			1 > f && ("opacity" in a.style ? (k.push("opacity"),
				k.push(":"), k.push(f), k.push(";")) : 8 <= document.documentMode ? (k.push(
				"-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math
				.ceil(100 * f)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math
				.ceil(100 * f)), k.push(");")));
			k.push("z-index:" + h + ";");
			k.join("");
			g.f.S8(a, k.join(""))
		}
	});
	g.M.Rb = g.da.extend({
		ka: [g.va, g.Ze],
		A: function(a) {
			this.e = a;
			this.type = "2D";
			this.Gj = g.a.wb(a.get("zoom"), 1);
			this.Ml = a.Ml;
			this.K = a.Xa.o;
			this.X("display", a);
			this.X("rotateEnable", a);
			this.X("style", a);
			this.X("zoom", a);
			this.X("hightlight", a)
		},
		iT: function(a) {
			this.De = a || g.a.Xk("ff" + this.e.De.slice(1))
		},
		lq: function(a, b, c, d, e) {
			function f(a, d) {
				a.length && (k[g.a.indexOf(b, d)] = a);
				l -= 1;
				0 >= l && (c(k), l = 0)
			}
			for (var h = b.length, k = [], l = 0, m, n = [], p = 0; p < h; p += 1) m = b[p], (
					m instanceof g.o.fd || "AMap.LabelLayer" === m.CLASS_NAME) &&
				m.get("visible") && (n.push(this.ys(m)), l += 1);
			for (h = 0; h < n.length; h += 1) n[h].lq(a, f, d, e)
		}
	});
	g.S2 = {
		kD: function(a, b, c) {
			for (var d = null, e = null, f = 0, h = 0, k = 0, l = b.length; k < l; k++) {
				var m = b[k];
				if (m < a) d = c[m], f = m;
				else {
					e = c[m];
					h = m;
					break
				}
			}
			null === d ? (d = e, f = h) : null === e && (e = d, h = f);
			return {
				Gz: f,
				$J: h,
				Lq: d,
				WD: e
			}
		},
		sra: function(a) {
			var b = this,
				c = g.a,
				d = [],
				e = {};
			c.Tb(a.nodes, function(a) {
				!1 !== a.value && null !== a.value && (e[a.zoom] = g.r.tc + "://" + a.value, d.push(
					a.zoom))
			});
			return function(a) {
				a = c.wb(a, 1);
				void 0 === e[a] && (e[a] = b.kD(a, d, e).Lq);
				return e[a]
			}
		},
		$qa: function(a) {
			var b = this,
				c = g.a,
				d = [],
				e = {},
				f = a.transitional;
			c.Tb(a.nodes,
				function(a) {
					null !== a.value && !1 !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
				});
			return function(a) {
				a = c.wb(a, 1);
				if (void 0 === e[a]) {
					var k = b.kD(a, d, e);
					e[a] = f && "none" !== f && k.$J !== k.Gz && k.Lq !== k.WD ? c.E4(k.Lq, k.WD, (a - k
						.Gz) / (k.$J - k.Gz), f) : k.Lq
				}
				return e[a]
			}
		},
		lqa: function(a) {
			var b = this,
				c = g.a,
				d = [],
				e = {};
			c.Tb(a.nodes, function(a) {
				null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
			});
			return function(a) {
				a = c.wb(a, 1);
				void 0 === e[a] && (e[a] = b.kD(a, d, e).Lq);
				return e[a]
			}
		},
		m4: function(a) {
			var b = this,
				c = g.a,
				d = [],
				e = {};
			c.Tb(a.nodes,
				function(a) {
					null !== a.value && (e[a.zoom] = a.value, d.push(a.zoom))
				});
			return function(a) {
				a = c.wb(a, 1);
				void 0 === e[a] && (e[a] = b.kD(a, d, e).Lq);
				return e[a]
			}
		},
		tqa: function(a, b, c) {
			var d = this,
				e = g.a,
				f = [],
				h = {},
				k = a.transitional;
			e.Tb(a.nodes, function(a) {
				a.value && (h[a.zoom] = e.fma(a.value, c ? "rgba" : "webgl"), f.push(a.zoom))
			});
			return function(a) {
				var b = null;
				a = e.wb(a, 1);
				if (void 0 === h[a]) {
					var b = d.kD(a, f, h),
						n = b.Lq;
					if (k && "none" !== k && b.Gz !== b.$J && b.Lq.join("") !== b.WD.join(""))
						for (var n = n.slice(0), p = (a - b.Gz) / (b.$J - b.Gz), q = 0, r =
								b.WD.length; q < r; q++) n[q] = e.E4(b.Lq[q], b.WD[q], p, k);
					h[a] = n
				}
				b = h[a];
				return c && b ? "rgba(" + b.join(",") + ")" : b || ""
			}
		},
		Bz: function(a, b, c, d) {
			var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {},
				f;
			for (f in c)
				if (c.hasOwnProperty(f)) {
					var h = c[f];
					void 0 !== b[h] ? (b[h].nodes && 1 < b[h].nodes.length && b[h].nodes.sort(function(a,
					b) {
						return a.zoom - b.zoom
					}), a[f] = e.Bsa ? {
						Xe: d.call(this, b[h], c[f]),
						canvas: d.call(this, b[h], c[f], !0)
					} : d.call(this, b[h], c[f])) : e.Asa && (a[f] = !0)
				}
		},
		Qr: function(a, b) {
			for (var c = [], d = 0, e = a.length; d <
				e; d += 2) {
				var f = 0,
					f = "str" === b ? g.a.wb(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : g.a
					.wb(parseInt(a.substr(d, 2), 16) / 255, 3);
				c.push(f)
			}
			return c.length ? (c.push(c.shift()), "str" === b ? "rgba(" + c.join(",") + ")" : c) : ""
		},
		A7: function(a, b, c, d) {
			var e = {},
				f = {
					visible: "visible",
					KU: "showLabel",
					vk: "showIcon"
				},
				h = [
					["color", {
						color: "color"
					}, {
						opacity: "opacity"
					}],
					["fillColor", {
						fillColor: "fillColor"
					}, {
						le: "fillOpacity"
					}],
					["strokeColor", {
						strokeColor: "strokeColor"
					}, {
						pb: "strokeOpacity"
					}],
					["textFillColor", {
						mya: "textFillColor"
					}, {
						nya: "textFillOpacity"
					}],
					["textStrokeColor", {
						pya: "textStrokeColor"
					}, {
						qya: "textStrokeOpacity"
					}],
					["backgroundColor", {
						backgroundColor: "backgroundColor"
					}, {
						oma: "backgroundOpacity"
					}]
				],
				k = {
					fontSize: "fontSize"
				},
				l = {
					fillWidth: "fillWidth",
					strokeWidth: "strokeWidth"
				};
			if (a.styles) {
				a = a.styles;
				this.Bz(e, a, f, this.lqa, {
					Asa: !0
				});
				this.Bz(e, a, k, this.m4, {
					Psa: !0
				});
				this.Bz(e, a, l, this.m4, {
					Psa: !0
				});
				k = 0;
				for (l = h.length; k < l; k++) {
					var m = h[k];
					a[m[0]] ? this.Bz(e, a, m[1], this.tqa, {
						Bsa: !0
					}) : this.Bz(e, a, m[2], this.$qa)
				}
				a.texture && (this.Bz(e, a, {
						Ja: "texture"
					}, this.sra),
					e.ed = [], g.a.Tb(a.texture.nodes, function(a) {
						a.value && e.ed.push(g.r.tc + "://" + a.value)
					}))
			} else {
				for (var n in f)
					if (f.hasOwnProperty(n)) {
						var p = f[n];
						e[n] = void 0 === a[p] ? !0 : a[p]
					} f = 0;
				for (n = h.length; f < n; f++) {
					var q = h[f],
						p = g.a.keys(q[1])[0],
						r = q[1][p],
						s = g.a.keys(q[2])[0],
						q = q[2][s];
					void 0 !== a[r] ? e[p] = {
						canvas: this.Qr(a[r], "str"),
						Xe: this.Qr(a[r])
					} : e[s] = a[q]
				}
				for (m in k) k.hasOwnProperty(m) && void 0 !== a[m] && (e[m] = a[m]);
				for (var u in l) l.hasOwnProperty(u) && void 0 !== a[u] && (e[u] = a[u]);
				a.texture && (e.Ja = g.r.tc + "://" + a.texture)
			}
			b[c] ||
				(b[c] = {});
			b[c][d] = e
		},
		zT: function(a, b) {
			if (a)
				for (var c = Object.keys(a), d = 0; d < c.length; d++)
					for (var e = c[d], f = Object.keys(a[e]), h = 0; h < f.length; h++) {
						var k = f[h];
						a[e][k] && this.A7(a[e][k], b, e, k)
					}
		},
		nGa: function(a, b, c, d) {
			if (a)
				for (var e in a)
					if (a.hasOwnProperty(e) && g.a.jk(a[e], "object")) {
						var f = a[e];
						console.log(e + "--");
						var h = e;
						c && (h = c + ":" + e);
						if (f.detailedType) this.A7(f, b, h), this.zT(f.detailedType, b, h, f);
						else if (f.subType) this.zT(f.subType, b, h);
						else if (void 0 !== f.code)
							for (var k in d) d.hasOwnProperty(k) && !g.a.ka(["isDetailed",
								"detailedType", "styles"
							], k) && void 0 === f[k] && void 0 !== d[k] && (f[k] = d[k])
					}
		},
		vV: function(a) {
			if (!this.cm || this.cm.zoom != a) {
				var b = g.a.Ph,
					c = {
						zoom: a
					},
					d;
				for (d in this.ae)
					if (this.ae.hasOwnProperty(d)) {
						var e = this.ae[d];
						c[d] = {};
						for (var f in e)
							if (e.hasOwnProperty(f)) {
								var h = e[f];
								if (h) {
									c[d][f] = {};
									for (var k in h) h.hasOwnProperty(k) && void 0 !== h[k] && (c[d][f][
										k] = {}, h[k].Xe ? (b(h[k].Xe) ? c[d][f][k].Xe = h[k].Xe(a) : c[
												d][f][k].Xe = h[k].Xe, b(h[k].canvas) ? c[d][f][k]
											.canvas = h[k].canvas(a) : c[d][f][k].canvas = h[k].canvas
											) : b(h[k]) ?
										c[d][f][k] = h[k](a) : c[d][f][k] = h[k])
								} else c[d][f] = h
							}
					} this.cm = c
			}
		},
		styleChanged: function() {
			if (this.e.D.Bi) {
				var a = this.get("style");
				this.el.QA || (this.el = g.a.bind(this.el, this), this.jq = g.a.bind(this.jq, this), this.el
					.QA = !0);
				var b = g.a;
				if (a) {
					var c = {};
					this.zT(a, c);
					this.ae = c
				} else this.ae = null;
				var d, e, f, h, k;
				this.ae && (d = this.ae[30001] && this.ae[30001][1], e = this.ae[30001] && this.ae[30001][
					2], f = this.ae["00001"] && this.ae["00001"][1], h = this.ae["00001"] && this.ae[
						"00001"][2], k = this.ae[50001] && this.ae[50001][1]);
				var l,
					m, n, p, q, r, a = this.Gj;
				if (d) {
					c = "rgba(0, 0, 0, 0)";
					if (d.visible) {
						var s = this.jq(b.A8(this.e.De.substr(1)), d.opacity, d.color, !0, a);
						s && (c = this.At(s, d.visible, "rgba(0, 0, 0, 0)"), s = this.el(b.np(this.e.De
							.substr(1)), d.opacity, d.color, !0, a), l = this.At(s, d.visible))
					}
					this.e.Mu = c
				} else this.e.Mu = "";
				e && e.visible && (m = this.el(b.np(this.e.KH.substr(1)), e.opacity, e.color, !0, a), m =
					this.At(m, e.visible));
				f && f.visible && (n = this.el(b.np(this.e.nu.substr(1)), void 0, f.color, !0, a), n = this
					.At(n, f.visible), p = this.At(n, f.visible));
				h && h.visible && (d = h.color, !d && f && f.color && (d = f.color), p = this.el(b.np(this.e
					.nu.substr(1)), void 0, d, !0, a), p = this.At(p, h.visible));
				k && (k.visible ? (q = this.el(b.Xk(this.e.VF[0]), void 0, k.fillColor, !0, a), q = this.At(
						q, k.visible), r = this.el(b.Xk(this.e.VF[1]), void 0, k.strokeColor, !0,
					a), r = this.At(r, k.visible)) : (q = [1, 1, 1, 0], r = [1, 1, 1, 0]));
				this.iT && this.iT(l, m, n, [q, r], p);
				this.q$ ? this.q$(this.ae) : this.set("display");
				delete this.cm;
				this.vV(a)
			}
		},
		At: function(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [0, 0, 0, 0],
				d = g.a.Ph;
			if (d(a) && d(b)) {
				var e = a;
				a = function(a) {
					return b(a) ? e(a) : c
				}
			}
			return a
		},
		jq: function(a, b, c, d, e) {
			if (a) {
				if (void 0 !== b) return a = a.split(","), c = b, "function" === typeof b && (c = b(e)), a[
					3] = g.a.wb(c, 3) + ")", a.join(",");
				if (c) return "function" === typeof c.canvas ? d ? c.canvas : c.canvas(e) : c.canvas
			}
			return a
		},
		el: function(a, b, c, d, e) {
			if (a) {
				if (b) return c = b, "function" === typeof b && (c = b(e)), [a[0], a[1], a[2], g.a.wb(c,
				3)];
				if (c) return "function" === typeof c.Xe ? d ? c.Xe : c.Xe(e) : c.Xe
			}
			return a
		},
		qD: function(a, b) {
			var c = this.ae;
			if (c && a) {
				var d = a.split(":"),
					e = d[0],
					d = d[1];
				if (c[e]) {
					this.cm && b && b == this.cm.zoom && (c = this.cm);
					if (c[e][d]) return c[e][d];
					if (c[e].all) return c[e].all
				}
			}
		},
		IEa: function(a, b, c) {
			var d = this.ae;
			if (d) {
				this.cm && c && c == this.cm.zoom && (d = this.cm);
				if (b || 0 === b)
					if (b = d[a + ":" + b]) return b;
				return d[a]
			}
		},
		im: function(a, b, c, d, e) {
			var f = null,
				h = a;
			d = d ? this.jq : this.el;
			e = e || this.Gj;
			if (f = this.qD(b, e))
				if ("function" === typeof f.visible && !f.visible(e) || !1 === f.visible) h = "";
				else {
					var h = 1,
						k = "";
					if (c)
						if (f.fillColor || f.le) h = f.le, k = f.fillColor;
						else {
							if (f.color || f.opacity) h = f.opacity, k = f.color
						}
					else if (f.strokeColor || f.pb) h = f.pb, k = f.strokeColor;
					else if (f.color || f.opacity) h = f.opacity, k = f.color;
					h = d(a, h, k, !1, e)
				} this.Bs === b && (h = this.fv(h || a));
			return h
		},
		Zc: function(a, b, c) {
			var d = this.ae;
			if (d) {
				this.cm && c && c == this.cm.zoom && (d = this.cm);
				if (b || 0 === b)
					if (b = d[a + ":" + b]) return b;
				return d[a]
			}
		},
		jv: function(a, b) {
			var c = null;
			return c = this.qD(a, b || this.Gj)
		},
		ws: function(a, b, c, d) {
			c = c ? this.jq : this.el;
			var e = null,
				f = a;
			d = d || this.Gj;
			(e = this.qD(b, d)) && (f = "function" === typeof e.visible &&
				!e.visible(d) || !1 === e.visible ? "" : c(a, e.opacity, e.color, !1, d));
			this.Bs === b && (f = this.fv(f || a));
			return f
		},
		My: function(a, b, c, d, e, f) {
			var h = a,
				k = b,
				l = c,
				m = !0,
				n = !0,
				p, q = 1;
			f = f || this.Gj;
			var r = this.qD(d, f);
			r && ("function" === typeof r.visible && !r.visible(f) || !1 === r.visible || "function" ===
				typeof r.KU && !r.KU(f) || !1 === r.KU ? (n = m = !1, h = k = l = "") : (h = this.jq(a,
						r.nya, r.mya, !1, f), k = this.jq(b, r.qya, r.pya, !1, f), l = this.jq(c, r.oma,
						r.backgroundColor, !1, f), m = "function" === typeof r.vk ? r.vk(f) : r.vk, r
					.fontSize && (p = "function" === typeof r.fontSize ?
						r.fontSize(f) : r.fontSize, p = 12 <= p ? p : 12, p = 22 >= p ? p : 22), p && g
					.l.Jc && (p *= 2)));
			f = !1;
			this.Bs === d ? f = !0 : void 0 !== e && this.Bs === d + "-" + e && (f = !0);
			f && (h = this.fv(h || a), k = this.fv(k || b), l = this.fv(l || c), q = 1 - 1.6 * this.yD, n =
				m = !0);
			return [h, k, l, m, n, q, p]
		},
		Ly: function(a, b, c, d, e) {
			var f = null,
				h = a,
				k = b;
			d = d ? this.jq : this.el;
			var l = e || this.Gj;
			if (f = this.qD(c, e)) "function" === typeof f.visible && !f.visible(l) || !1 === f.visible ?
				h = k = "" : (h = d(a, f.le, f.fillColor, !1, l), k = d(b, f.pb, f.strokeColor, !1, l));
			this.Bs === c && (b = k || b, h = this.fv(h || a), k = this.fv(b));
			return [h, k]
		}
	};
	g.M.Rb.Hb(g.S2);
	g.M.canvas.Rb = g.M.Rb.extend({
		A: function(a) {
			arguments.callee.ma.apply(this, arguments)
		},
		ys: function(a) {
			if (!a.M) {
				var b = a.$l(this);
				b && !b.joa && (a.M = b)
			}
			return a.M
		},
		oc: function(a) {
			var b = this.e.M3();
			b && this.UT !== b && this.e.D.Bi && (this.e.Q8(b), this.UT = b);
			this.e.Xa.Wr.style.cssText = "";
			var c = a.la,
				b = a.P,
				d = this.e.D.get("features"),
				e = a.size.width,
				f = a.size.height;
			this.Gj = "vw" === this.e.D.Ce.baseRender ? g.a.wb(b.zoom, 1) : a.P.ne;
			this.T = b.T;
			if (!this.Na || 1E4 < Math.abs(b.lb.x - this.Na.x) / this.T || 1E4 < Math.abs(b.lb.y - this
					.Na.y) /
				this.T) this.Na = b.lb;
			this.Na.x - b.lb.x < -g.a.Fa / 2 ? this.Na = new g.H(this.Na.x + g.a.Fa, this.Na.y) : this
				.Na.x - b.lb.x > g.a.Fa / 2 && (this.Na = new g.H(this.Na.x - g.a.Fa, this.Na.y));
			for (var h = 0; h < c.length; h += 1) {
				var k = c[h],
					l = this.ys(k),
					m = c[h].me();
				if (l && l.g)
					if (!m.visible || k.XD || m.Ya[0] > b.zoom || m.Ya[1] < b.zoom || k.ga && 0 === k.ga
						.length) {
						if (l = l.uj())
							if (l.length)
								for (m = 0; m < l.length; m += 1) l[m].parentNode === this.K && this.K
									.removeChild(l[m]);
							else l.parentNode === this.K && this.K.removeChild(l)
					} else if (this.FJ(k, d)) {
					l.oc(a, m);
					l.kk &&
						(a.te = l.te);
					var k = l.uj(),
						n, p, q = l.transform;
					if (!q || !k || l.Ci && !this.e.D.Ra) c[h].yj && k.parentNode !== this.K && (this.K
						.appendChild(k), c[h].Nb = k);
					else {
						c[h].Nb = k;
						k.length || (k = [k], q = [q]);
						for (var r = 0; r < k.length; r += 1)
							if (n = k[r], p = q[r], !p.Zy) {
								var s = p.translate.x,
									u = p.translate.y;
								c[h].EJ || (s = g.a.wb(s, 2), u = g.a.wb(u, 2));
								var v = p.scale;
								1E-5 > Math.abs(s) && (s = 0);
								1E-5 > Math.abs(u) && (u = 0);
								var w = [];
								w.push("position:absolute");
								w.push("z-index:" + (p.Hk || c[h].get("zIndex")));
								c[h].WC ? (w.push("top:" + Math.floor(f / 2 + u) + "px"), w.push(
									"left:" +
									Math.floor(e / 2 + s) + "px")) : n.K5 ? (w.push("height:" + n
										.height * v + "px"), w.push("width:" + n.width * v + "px"),
									w.push("top:" + (f / 2 - u * v) + "px"), w.push("left:" + (e /
										2 - s * v) + "px")) : (1 !== v && (w.push(g.f.nt[g.f.pg] +
									"-origin:" + s + "px " + u + "px"), w.push(g.f.nt[g.f
									.pg] + ":scale3d(" + v + "," + v + ",1)")), w.push("top:" +
									Math.floor(f / 2 - u) + "px"), w.push("left:" + Math.floor(
									e / 2 - s) + "px"), w.push("display:block"), l.jl && (w
									.push("height:" + n.height + "px"), w.push("width:" + n
										.width + "px")));
								l.EJ || 1 === m.opacity || "number" !== typeof m.opacity || w.push(g.f
									.o4(n,
										m.opacity));
								n.parentNode !== this.K && this.K.appendChild(n);
								g.f.S8(n, w.join(";"))
							}
					}
				}
			}
			a = this.e.Xa.Wr;
			k = this.e.Xa.o;
			c = this.e.Xa.B;
			g.f.pg && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[g.f.pg + "Origin"] =
				e / 2 + "px " + f / 2 + "px", a.style[g.f.pg] = "rotate(" + b.rotation + "deg)", a
				.style.overflow = "visible", k.style.overflow = "visible", c.style.overflow =
				"visible") : (a.style.cssText = "", k.style.cssText =
				"-webkit-transform: translateZ(0);", c.style.cssText = "");
			this.e.gt = !1
		},
		FJ: function(a, b) {
			if ("all" === b || void 0 === a.Wl) return !0;
			for (var c = 0, d = a.Wl.length; c < d; c++)
				if (g.a.ka(b, "region" === a.Wl[c] ? "bg" : a.Wl[c])) return !0;
			return !1
		},
		zoomChanged: function() {
			var a = this.e.get("zoom");
			this.Gj = "vw" === this.e.D.Ce.baseRender ? g.a.wb(a, 1) : Math.round(a);
			this.ae && this.vV(this.Gj)
		}
	});
	g.M.Ti = g.M.Yb.extend({
		A: function(a, b) {
			arguments.callee.ma.apply(this, arguments);
			this.X("reload", a, !0);
			var c = a.S.get("cacheSize");
			if (this.e && this.e.D) {
				var d = this.e.D.get("tileCacheSize");
				d && 0 < d && (c = d)
			}
			this.oa = new g.og(c);
			var e = this;
			this.oa.hK.J1(function(a) {
				e.bB(a)
			});
			this.oa.xC = function(a) {
				return a.ob ? (a.ob.Sg -= 1, 0 == a.ob.Sg && (a.yv = !1), delete a.ob, !0) : a.yv ?
					a.Sg ? !1 : !0 : !0
			};
			this.gd = 1;
			this.$n = 50;
			this.oX = !0;
			this.g.oa = this.oa;
			this.pm = new g.wF(6, null, a.TQ);
			new g.wF(5, null, a.TQ)
		},
		Hq: function() {
			this.clear();
			this.Ig = null;
			this.oa.clear();
			this.oa.xC = null;
			this.oa = this.oa.hK.RF = null;
			this.Kc && (this.Kc.G("tiles", this.bE, this), this.Kc.G("ack", this.aE, this), this.Kc.G(
				"disable", this.ZD, this), this.Kc = null);
			this.e.G("zoomend", this.ck, this);
			this.e.G("moveend", this.ck, this)
		},
		reloadChanged: function() {
			this.g && (this.g.Ra = !1);
			this.oa.clear();
			this.reload = !0;
			this.set("display")
		},
		xh: function(a, b, c) {
			function d(b) {
				a.loaded = !0;
				e.g && (a.status = "loaded", a.Ba = !0, a.jd = b, e.set("display", 0), "function" ===
					typeof c && c())
			}
			var e = this;
			a.status = "loading";
			this.g.Bo && this.g.Bo.call(this, a, d, function() {
				a.loaded = !0;
				e.g && (a.status = "loaded", a.Ba = !0, e.set("display", 0), "function" ===
					typeof c && c())
			})
		},
		YHa: function(a, b, c, d) {
			var e = [];
			c = c || 18;
			b = Math.pow(2, b - c);
			for (var f = 0; f < a.length; f += 1) {
				var h = a[f].ta,
					k = Math.floor(h.x / b),
					h = Math.floor(h.y / b);
				if (d) {
					if (k = c + "/" + k + "/" + h, (h = this.oa.get(k)) && "loaded" == h.status)
						continue
				} else h = new g.or(c, k, h), k = h + "", h = new g.rb(h);
				!e[k] && h && (e.push(h), e[k] = 1)
			}
			return e
		},
		MI: function(a, b) {
			var c = this,
				d = this;
			if (this.g.uH) {
				var e,
					f, h, k, l, m, n, p = function() {
						var p = 0;
						for (e = a.length - 1; 0 <= e; e -= 1) f = a[e], p += f.length;
						if (0 == p) return b.call(c, a), {
							sL: void 0
						};
						d.dV = a;
						for (e = a.length - 1; 0 <= e; e -= 1)
							for (f = a[e], h = [], k = [], f.VT = h, f.Jv = k, l = f.length - 1; 0 <=
								l; l -= 1) m = f[l], n = m.ta, c.g.e.Re.NE(n.x, n.y, n.z, function() {
								var c = l;
								return function(e) {
									e ? h.push(f[c]) : k.push(f[c]);
									p -= 1;
									if (0 == p) {
										for (e = a.length - 1; 0 <= e; e -= 1) {
											var l = a[e];
											a[e] = l.VT;
											if (l.Jv)
												for (var m = l.Jv.length - 1; 0 <= m; m -=
													1) {
													var n = l.Jv[m];
													n.status = "loaded";
													n.loaded = !0;
													n.Ba = !0
												}
										}
										b.call(d, a)
									}
								}
							}())
					}();
				if ("object" ===
					typeof p) return p.sL
			} else b.call(this, a)
		},
		pw: function(a, b, c) {
			if (a = this.oa.get(a + "/" + b + "/" + c)) {
				if (a.yv) return a;
				if (a.ob) return a.ob;
				a.yv = !0;
				a.Sg = 0;
				return a
			}
		},
		jJ: function(a) {
			var b = a.ta;
			a = b.x;
			var c = b.y,
				b = b.z,
				d = Math.pow(2, b),
				e = (a + d) % d,
				f = e + d,
				d = e - d,
				h = null;
			e !== a && (h = this.pw(b, e, c));
			h || d === a || (h = this.pw(b, d, c));
			h || f === a || (h = this.pw(b, f, c));
			return h
		},
		Fn: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			if ((!this.kk || !this.gf && !this.ge) && a.length)
				if (this.GK) this.YJ = !0;
				else {
					for (var c =
							a.length - 1; 0 <= c; c -= 1) {
						var d = a[c];
						if (d.length)
							for (var e = Math.pow(2, 20 - d[0].ta.z), c = d.length - 1; 0 <= c; c--) {
								var f = d[c],
									h = f.ta;
								h.T = e;
								f.ra = {};
								f.al = 0;
								if (10 > h.z) {
									var k = this.jJ(f);
									k && (f.ob = k, f.status = "loaded", f.Ba = !0, k.Sg += 1, f.al = (h
											.x - k.ta.x) / Math.pow(2, h.z), d.splice(c, 1), this
										.set("display", 0))
								}
								this.oa.set(f.key, f);
								!b && f.Ie ? f.Ie = !1 : f.status = "loading"
							}
					}
					var l = this;
					this.MI(a, function(a) {
						for (var c = a.length - 1; 0 <= c; c -= 1) {
							var d = a[c];
							if (d.length)
								if (l.Di) {
									if (l.e.hA) break;
									var e = d[0].ta.z;
									l.dw(d, l.jl ? 1 : 0);
									for (var f = 0,
											h = 0; f < d.length;) l.TS(d.slice(10 * h, 10 * h +
										10), e, b), f += 10, h += 1
								} else
									for (e = function() {
											var a = d.length;
											return function() {
												--a
											}
										}(), l.dw(d), l.yq += d.length, f = d.length - 1; 0 <=
										f; f -= 1) l.xh(d[f], l.pm, e)
						}
					})
				}
		},
		Sy: function(a, b) {
			var c = this.oa.get(a + "");
			c || b || (c = new g.rb(a.cb()));
			return c
		},
		YK: function(a, b) {
			return this.Dd * Math.pow(2, a - b)
		},
		bB: function(a) {
			a.Hs && this.pm.p2(a.Hs);
			a.LK = !1;
			a.loaded = !1;
			this.Kf && this.Kf(a)
		},
		py: function(a, b) {
			var c = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0) || this.fb,
				d = a.Vd.x,
				e = a.Vd.y,
				f = a.hc.x,
				h = a.hc.y;
			new g.H(0, 0);
			var k = this.YK(20, c);
			b && (f = Math.max(b[0], f) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[
				0], e = Math.min(b[3], e) - b[1], new g.H(Math.floor(b[0] / k), Math.floor(b[
				1] / k)));
			d /= k;
			e /= k;
			d = {
				Hc: 0 === d % 1 ? d - 1 : Math.floor(d),
				sc: 0 === e % 1 ? e - 1 : Math.floor(e),
				Ic: Math.floor(f / k),
				fc: Math.floor(h / k)
			};
			d.rE = d.Hc - d.Ic + 1;
			d.yK = d.sc - d.fc + 1;
			d.z = c;
			d.T = this.T * Math.pow(2, this.zoom - c);
			d.Uy = Math.ceil(d.rE / 2);
			return d
		},
		sv: function(a, b, c) {
			return b < a.Ic || b > a.Hc || c < a.fc || c > a.sc ? !1 : !0
		},
		dw: function(a, b) {
			if (a.length) {
				var c =
					this.lb.ld(this.Dd << 20 - a[0].ta.z),
					d = Math.floor(c.x),
					e = Math.floor(c.y);
				a.sort(function(a, c) {
					var k = a.ta,
						l = c.ta,
						m = k.x - d,
						k = k.y - e,
						n = l.x - d,
						l = l.y - e;
					return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
				})
			}
		},
		clear: function() {
			this.pm.clear()
		},
		fp: function(a, b) {
			this.vg = !1;
			this.clear();
			this.Zi = b.Zi;
			this.Yi = b.Yi;
			this.Dd = b.Dd;
			var c = a.P;
			this.Pf = b.Pf || a.P.Pf;
			this.oh = c.oh;
			this.size = a.size;
			this.rotation = c.rotation;
			this.lb = c.lb;
			this.Ha = a.P.Ha;
			this.Gf = a.Gf;
			this.ge = a.ge;
			this.gf = a.gf;
			this.zoom = c.zoom;
			this.ne = c.ne;
			this.fb = "AMap.MapBox" == this.g.S.CLASS_NAME ?
				Math.max(2, this.ne - g.r.Vn) : !1 === this.Di && !this.g.mS && this.g.ja ? this.ne +
				1 : this.ne;
			this.ff && this.fb > this.ff && (this.fb = this.ff);
			this.Xo && this.fb < this.Xo && (this.fb = this.Xo);
			this.T = c.T;
			this.Gg = c.Gg;
			c = a.P.Ha;
			this.pk = this.py(c, b.I);
			this.Fw = c.M$ ? this.py(c.M$, b.I) : null;
			var c = this.pk,
				d = this.Ha.E9,
				e = null,
				e = d < this.zoom && this.Fw ? this.Fw : c,
				f = [],
				h = [],
				k, l = [],
				m = [],
				n = [],
				p = new g.or(0, 0, 0),
				q, r = this.zoom,
				m = this.Nk || "",
				s = {},
				u = {},
				v, w, t, x, y, E;
			this.ee = 1E6 * Math.random() << 0;
			for (q = m.length - 1; 0 <= q; q -= 1)
				if (k = m[q], !(k.gx < b.opacity))
					if (p.z =
						k.ta.z, p.x = k.ta.x, p.y = k.ta.y, p.z === this.fb) s[p + ""] |= 16;
					else if (p.z < this.fb) {
				if (s[p + ""] |= 64, this.Zi)
					for (x = this.fb - p.z, v = Math.max(c.Ic, p.x << x), r = Math.min(c.Hc, (p.x + 1 <<
							x) - 1), w = Math.max(c.fc, p.y << x), t = Math.min(c.sc, (p.y + 1 << x) -
							1), p.z = this.fb, x = v; x <= r; x += 1)
						for (p.x = x, y = w; y <= t; y += 1) p.y = y, E = p + "", s[E] |= 32, u[E] = u[
							E] ? Math.max(k.ta.z, u[E]) : k.ta.z
			} else if (this.Yi)
				for (v = 1; p.z >= this.fb;) {
					s[p + ""] |= v;
					v = p.x >> 1;
					w = p.y >> 1;
					r = v << 1;
					t = w << 1;
					k = 0;
					for (x = 2; 0 < x; x -= 1)
						for (p.x = r + x, y = 2; 0 < y; y -= 1) p.y = t + y, s[p + ""] & 5 && (k += 1);
					p.z -= 1;
					p.x =
						v;
					p.y = w;
					v = 4 === k ? 4 : 2
				}
			m = [];
			p.z = this.fb;
			q = !0;
			this.oa.B2();
			for (x = e.Ic; x <= e.Hc; x += 1)
				for (p.x = x, y = e.fc; y <= e.sc; y += 1) p.y = y, k = this.Sy(p), this.$t(k), v = !1,
					k.Ba ? (k.ee = this.ee, this.sv(c, x, y) && (m.push(k), this.Il && (k.gd !== this
						.gd || 1 > k.gx) && (v = !0))) : (q = !1, this.sv(c, x, y) && (v = !0), k
						.status && !k.Ie || this.ne !== d || this.Fw && !this.sv(this.Fw, x, y) || l
						.push(k)), v && n.push(k);
			q ? this.fD || (this.fD = !0) : this.g.Ra = !1;
			this.vg = q;
			m.length && this.fD && (f.push(m), m.vg = q);
			h.push(l);
			e = !1;
			if (this.Yi) {
				n = n.slice(0);
				l = [];
				for (q = n.length - 1; 0 <= q; q -=
					1) k = n[q], s[k.key] & 4 || l.push(k);
				k = b.Ya[1];
				for (r = this.fb + 1; n.length && r <= k; r += 1) {
					m = [];
					d = n;
					n = [];
					p.z = r;
					for (q = d.length - 1; 0 <= q; q -= 1)
						if (x = d[q], v = s[x.key], v & 7)
							for (v = x.ta.x << 1, w = x.ta.y << 1, x = 1; 0 <= x; x -= 1)
								for (p.x = v + x, y = 1; 0 <= y; y -= 1) p.y = w + y, E = p + "", t =
									this.oa.oK(E), s[E] & 5 && t && t.Ba ? (t.IB = !0, t.ee = this.ee, m
										.push(t), this.$t(t)) : n.push(new g.rb(p.cb()));
					m.length && (e = !0, f.push(m))
				}
				n = l
			}
			if (!e && this.Zi)
				for (x = !f.length || this.jl ? b.Ya[0] : Math.max(b.Ya[0], this.fb - 2), Math.max(x,
						this.fb - this.bha), r = this.fb - 1; n.length && r >= x; r -= 1) {
					m = [];
					y = {};
					d = n;
					n = [];
					for (q = d.length - 1; 0 <= q; q -= 1) k = d[q], p.z = r, p.x = k.ta.x >> 1, p.y = k
						.ta.y >> 1, k = this.Sy(p), y[k.key] || (y[k.key] = 1, v = !1, k.Ba && (!this
								.bja || s[k.key] & 64) ? (p.x = Math.min(c.Hc, Math.max(c.Ic, p.x <<
									this.fb - r)), p.y = Math.min(c.sc, Math.max(c.fc, p.y << this.fb -
									r)), p.z = this.fb, E = p + "", "number" === typeof u[E] && k.ta.z >
								u[E] ? v = !0 : k.IB = !0, k.ee = this.ee, m.push(k), this.$t(k)) :
							v = !0, v && n.push(k));
					m.length && f.push(m)
				}
			this.dV = h;
			this.Ev = this.yq = 0;
			this.Fn(h);
			this.Ig = f;
			this.g.set("tiles", f)
		},
		$t: function(a) {
			this.oa.s6(a.BFa)
		},
		GR: function(a, b) {
			for (var c = [], d = this.e.D.getCoordsBoundByZoom(a), d = this.py(d, b, a), e = d.Ic; e < d
				.Hc; e++)
				for (var f = d.fc; f < d.sc; f++) {
					var h = [a, e, f].join("/");
					this.oa.Ld(h) || c.push(new g.rb(new g.or(a, e, f), !0))
				}
			return c
		},
		LX: function() {
			var a = this.e.D;
			return a.V7 && a.get("preloadMode") && 200 <= this.oa.Hp && this.g.S.uq() && "stable" !=
				this.Gf && this.Xx && this.Xx() && this.zoom !== this.fb
		},
		mE: function(a, b) {
			var c = b.I,
				d = b.Ya;
			if (this.LX() && this.fb >= d[0] + 1) {
				var d = [],
					e = null,
					e = "zoomOut" === this.Gf ? Math.floor(this.zoom) : Math.ceil(this.zoom),
					e = this.GR(e, c);
				e.length && d.push(e);
				d.length && this.Fn(d, !0)
			}
		}
	});
	g.M.be.Ti = g.M.Ti.extend({
		A: function(a, b) {
			arguments.callee.ma.apply(this, arguments);
			this.$n = 120;
			this.Di = !1;
			this.Yg();
			this.ff = a.ff;
			this.Xo = a.Xo
		},
		uj: function() {
			return this.Nb
		},
		Yg: function() {
			this.Nb = document.createElement("div");
			this.Nb.className = this.g.S.get("className") || "amap-layer";
			this.av = document.createDocumentFragment()
		},
		Vv: function(a) {
			var b = Math.pow(2, a.P.zoom - this.Cf),
				c = a.P.lb.ab(this.Is).ld(this.wm);
			this.transform = {
				translate: this.transform.translate.add(c),
				scale: b,
				rotate: 0
			};
			this.lb = a.P.lb
		},
		NP: function(a, b) {
			this.Na = this.J.Na;
			this.Cf = this.ne;
			this.wm = this.Gg;
			this.ye = !1;
			this.currentTime = +new Date;
			this.AV = b.AV;
			var c = this.pk;
			this.Il = this.$n && b.ZH;
			var d = this.Ig,
				e = 256 * c.rE,
				c = 256 * c.yK;
			this.ge = this.zoom << 0 !== this.zoom;
			var f = this.lb.ab(this.Na);
			f.x < -g.a.Fa / 2 ? f.x += g.a.Fa : f.x > g.a.Fa / 2 && (f.x -= g.a.Fa);
			this.$P = f.ld(this.Gg);
			return [d, e, c, b]
		},
		Lz: function(a, b) {
			var c = this.NP(a, b);
			this.$s.apply(this, c);
			this.Ne(a);
			this.vg && !this.g.Ra && (c = this.g, c.Ra = !0, c.Jd ? c.qa("renderComplete") : (c.Jd = !0,
				c.qa("complete")))
		},
		oc: function(a, b) {
			this.rp = a.rp;
			this.gf = a.gf;
			this.fp(a, b);
			this.Is && g.l.Xl && (a.ge || a.gf) ? this.Vv(a, b) : this.Lz(a, b);
			this.Is = this.lb;
			this.ye && this.set("display", 0)
		},
		Uv: function() {
			for (var a = this.Nb.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].gd !== this
				.gd && this.Nb.removeChild(a[b])
		},
		qE: function(a, b) {
			return a.fc === b.fc && a.Ic === b.Ic && a.sc === b.sc && a.Hc === b.Hc
		},
		$s: function(a) {
			var b = this.gd;
			this.gd += 1;
			var c = !1,
				d, e, f;
			e = !1;
			var h = [],
				k, l;
			for (d = a.length - 1; 0 <= d; d -= 1)
				if (f = a[d], f.length) {
					e = f[0].ta.z;
					var m, n, p = this.YK(this.ne,
							e),
						q = !1;
					this.kk && f.vg && f[0].ta.z == this.fb && (k = [], l = [], q = !0);
					for (var r = f.length - 1; 0 <= r; r -= 1) {
						n = f[r];
						q && n.ga && (k.push.apply(k, n.ga), l.push(n.ta + ""));
						this.lU(n);
						if (this.Na === n.Na && n.Cf === this.Cf) {
							var s = n.jd;
							if (s && s.parentNode === this.Nb && 1 === n.gx) {
								h.push(n);
								s.gd = this.gd;
								n.gd = this.gd;
								continue
							}
						}
						n.Na = this.Na;
						n.Cf = this.Cf;
						m = n.ta;
						var c = !0,
							u = (new g.H((m.x << 20 - e) * this.Dd, (m.y << 20 - e) * this.Dd)).ab(this
								.Na),
							u = u.ld(this.Gg);
						u.x = g.a.wb(u.x, 1);
						u.y = g.a.wb(u.y, 1);
						var v = 1;
						if (!n.kY || this.oX && n.gd !== b) n.kY = this.currentTime;
						this.Il && !n.IB ? (v = Math.max(0, Math.abs(m.z - this.zoom) - 1), v = Math
							.min(1, (this.currentTime - n.kY) / (1 / Math.pow(1.32, v) * this.$n)),
							1 !== v && (this.ye = !0)) : n.IB = !1;
						n.gd = this.gd;
						n.gx = v;
						n.Ba ? (s = n.jd, !s && n.ob && n.ob.jd && ("CANVAS" === n.ob.jd.tagName ? (s =
							document.createElement("canvas"), s.width = n.ob.jd.width, s
							.height = n.ob.jd.height, s.getContext("2d").drawImage(n.ob.jd,
								0, 0, s.width, s.height), n.jd = s, n.ob.Sg -= 1, n.ob =
							null, n.al = 0) : "IMG" === n.ob.jd.tagName ? (s = document
							.createElement("img"), s.src = n.ob.jd.src, n.jd = s, n.ob.Sg -=
							1,
							n.ob = null, n.al = 0) : s = n.ob.jd), 0 !== v && s && (this.f4(s, u
								.x, u.y, p, p, v, m.z), s.parentNode !== this.Nb && (g.l.zi &&
								"overlayer" === this.g.get("type") && (s.style.display =
								"none"), this.av.appendChild(s)), s.gd = this.gd, n.ne = this
							.ne, h.push(n))) : n.ee = null
					}
					e = !0
				} this.kk && k && (r = l.sort().join(";"), k.GS = r, r !== this.te.GS && (this.te = k));
			1 < a.length && (this.ye = !0);
			this.Nk = h;
			this.Uv();
			this.Nb.appendChild(this.av);
			return c || !e
		},
		lU: function() {},
		Ne: function() {
			this.transform = {
				translate: this.$P,
				scale: Math.pow(2, this.zoom - this.ne),
				rotate: 0
			}
		}
	});
	window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.zQ = function(a, b, c, d, e) {
		"undefined" === typeof e && (e = [10, 10]);
		this.moveTo(a, b);
		var f = c - a,
			h = d - b,
			k = Math.floor(Math.sqrt(f * f + h * h));
		d = f / k;
		c = h / k;
		e.Eg = 0;
		for (var l = [], f = this.sI, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.Eg += e[q],
			l[q] = {
				aD: e[q] * d,
				bD: e[q] * c,
				ez: h += e[q]
			}, f -= e[q], 0 > f && !p && (m = q, n = -f, p = !0);
		for (p = 0; n + p <= k;) n < e[m] ? (f = n * d, h = n * c) : (f = l[m].aD, h = l[m].bD), a += f,
			b += h, this.HE ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.HE = !this.HE, n = e[(m +
					1) %
				e.length], m = (m + 1) % e.length;
		k -= p;
		a += k * d;
		b += k * c;
		this.HE ? this.moveTo(a, b) : this.lineTo(a, b);
		this.sI = (this.sI + p + k) % e.Eg
	}, window.CanvasRenderingContext2D.prototype.xoa = function(a, b, c, d) {
		"undefined" === typeof d && (d = [10, 10]);
		var e = 2 * Math.PI * c,
			f = 0 >= d ? e : Math.round(e / (d[0] + d[1])),
			h = (d[0] + d[1]) / e * 2 * Math.PI;
		d = d[0] / e * 2 * Math.PI;
		for (e = 0; e < f; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
	});
	g.M.Ke.Gl = g.M.Ti.extend({
		A: function(a, b) {
			arguments.callee.ma.apply(this, arguments);
			this.Yg()
		},
		KR: function() {
			return this.Za.VU
		},
		uj: function() {
			return this.Nb
		},
		Yg: function() {
			this.Nb = document.createElement("div");
			this.Nb.className = "amap-markers";
			this.Za = new g.M.Ke.fd(this.Nb);
			this.Za.g = this.g;
			this.J.K.appendChild(this.Nb)
		},
		tt: function(a, b) {
			this.av = b.av;
			this.hz = b;
			this.Pf = a.P.Pf;
			this.T = a.P.T;
			this.zoom = a.P.zoom;
			this.size = a.size;
			this.Ha = a.P.Ha;
			this.Bq = a.T;
			this.mb = a.P.lb;
			this.oh = a.P.oh;
			var c = !1;
			if (!this.Na ||
				500 < Math.abs(this.mb.x - this.Na.x) / this.T || 500 < Math.abs(this.mb.y - this.Na
				.y) / this.T) c = !0;
			if (c || this.zoom << 0 !== this.zoom || this.Cf !== this.zoom) this.Na = this.mb, this.Cf =
				this.zoom
		},
		iv: function(a) {
			var b = a.P.Ha.Ac.y * this.T;
			a = a.P.Ha.Ac.x * this.T;
			return [this.mb.x - a, this.mb.y - b, this.mb.x + a, this.mb.y + b]
		},
		Uv: function() {
			if (this.Sh && this.Sh)
				for (var a in this.Sh)
					if (this.Sh.hasOwnProperty(a)) {
						var b = this.Sh[a];
						b.ee !== this.ee && b.fa && this.J.Ml.appendChild(b.fa)
					}
		},
		oc: function(a, b) {
			this.ee = 1E6 * Math.random() << 0;
			this.tt(a,
				b);
			this.P = a.P;
			this.size = a.size;
			var c = this.g;
			this.Dd = 256;
			var d, e;
			e = this.iv(a);
			var f = 0;
			c.lm && (f = 50 * this.T);
			e[0] -= this.g.Af * this.T + f;
			e[1] -= this.g.ig * this.T + f;
			e[2] += this.g.Af * this.T + f;
			e[3] += this.g.ig * this.T + f;
			c = c.xn(e);
			for (d in c) c.hasOwnProperty(d) && (c[d].ee = this.ee, c[d].f6 = this);
			this.Uv(c);
			this.tt.call(this.Za, a, b);
			this.Za.wE(c);
			this.Sh = c;
			this.Ne(a)
		},
		Ne: function() {
			var a = Math.pow(2, this.zoom - this.ne);
			this.transform = {
				translate: this.Na.ab(this.mb).ld(this.T),
				scale: a,
				rotate: 0
			}
		}
	});
	g.M.Ke.fd = g.da.extend({
		A: function(a) {
			this.pl = a
		},
		wE: function(a, b) {
			var c = document.createDocumentFragment(),
				d = b && b.yS ? null : {},
				e = !0,
				f;
			for (f in a)
				if (a.hasOwnProperty(f)) {
					var h = a[f],
						k, l = h.get("params");
					if (h.fa) k = h.fa;
					else {
						k = g.f.create("div");
						k.className = "amap-marker";
						var m = l.Ug,
							n = l.d9,
							p = l.HJ;
						m && k.appendChild(m);
						n && k.appendChild(n);
						p && !1 !== m.xM && k.appendChild(p);
						h.fa = k;
						h.Ug = m;
						if (n = l.title) m.title = n;
						this.g.lm = !0; - 1 === g.a.indexOf(this.g.ah, h) && this.g.ah.push(h);
						h.re = !0
					}
					var p = l.offset,
						q = p.x,
						r = p.y,
						s = l.textAlign,
						u = l.verticalAlign,
						n = l.anchor,
						m = !1,
						v, w;
					n && (n = n.split("-"), 2 === n.length ? (s = n[1], u = n[0]) : 1 === n.length &&
						"center" === n[0] && (s = "center", u = "middle"));
					var t, n = t = 0;
					if ("AMap.Text" == h.Sp || "AMap.Marker" == h.Sp) {
						if (w = v = 0, k.parentNode !== this.pl && d && (m = !0, d[f] = h, e = !1), !
							m) {
							h.re || !h.Wj ? (t = g.f.Ko(h.Ug), h.Wj = t) : t = h.Wj;
							n = t[0];
							t = t[1];
							switch (s) {
								case "center":
									v = n / 2;
									break;
								case "right":
									v = n
							}
							switch (u) {
								case "middle":
									w = t / 2;
									break;
								case "bottom":
									w = t
							}
							q -= v;
							r -= w
						}
					} else v = -q, w = -r;
					var x, y;
					if (!m)
						if (h.re) {
							var E = [];
							x = this.Ju(h.W.za);
							h.Na =
								this.Na;
							y = l.nF;
							r = Math.round(x[1] + r + y.y);
							q = Math.round(x[0] + q + y.x);
							E.push("top:" + r + "px");
							E.push("left:" + q + "px");
							E.push("z-index:" + (l.R5 ? this.g.dr + 10 : l.zIndex));
							if (!g.l.Ue) {
								r = v;
								q = w;
								if ("AMap.Marker" == h.Sp) {
									r = -p.x;
									q = -p.y;
									switch (s) {
										case "center":
											r = -p.x + n / 2;
											q = -p.y + t / 2;
											break;
										case "right":
											r = -p.x + n
									}
									switch (u) {
										case "middle":
											q = -p.y + t / 2;
											break;
										case "bottom":
											q = -p.y + t
									}
								}
								E.push(g.f.B4(k, l.Qp, {
									x: r,
									y: q
								}))
							}
							E.push("display:" + (l.visible ? "block" : "none") + ";");
							k.style.cssText = E.join(";");
							if ((p = l.label) && p.content) {
								l = l.HJ;
								s =
									p.direction;
								r = null;
								h.Bv || (r = g.f.Ko(l), h.Bv = r);
								u = (r = h.Bv) && r[0];
								w = r && r[1];
								q = r = 0;
								if (s && u && w) switch (s) {
									case "top":
										r = -w;
										q = (n - u) / 2;
										break;
									case "right":
										r = (t - w) / 2;
										q = n;
										break;
									case "bottom":
										r = t;
										q = (n - u) / 2;
										break;
									case "left":
										r = (t - w) / 2;
										q = -u;
										break;
									case "center":
										r = (t - w) / 2, q = (n - u) / 2
								}
								p.offset ? (r = r + p.offset.y + "px", q = q + p.offset.x + "px") : (
									r += "px", q += "px");
								l.style.top = r;
								l.style.left = q
							}
						} else if (h.bba || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k
						.parentNode !== this.pl || h.Na !== this.Na) x = this.Ju(h.W.za), h.Na = this
						.Na, y = l.nF,
						r = Math.round(x[1] + r + y.y), q = Math.round(x[0] + q + y.x), k.style.top =
						r + "px", k.style.left = q + "px";
					h.zoom = this.zoom;
					k.parentNode !== this.pl && (g.l.zi && g.a.iepngFix(k), c.appendChild(k));
					h.re = m;
					k.LB = this.pl
				} this.pl.appendChild(c);
			e || this.wE(d, {
				yS: !0
			})
		},
		Ju: function(a) {
			var b = a[0] - this.Na.x;
			b > g.a.Fa / 2 ? b -= g.a.Fa : b < -g.a.Fa / 2 && (b += g.a.Fa);
			return [b / this.T, (a[1] - this.Na.y) / this.T]
		}
	});
	var Mc = g.r,
		Sc = g.l,
		fc = g.da.Qu,
		Tc = g.Pva,
		fa = document,
		Uc = !0,
		Vc = [];
	Sc.Tf && Vc.push("touch");
	Sc.ba || Vc.push("mouse");
	Sc.aL && (Vc.push("vectorlayer", "overlay"), Sc.pp ? Vc.push("wgl") : Vc.push("cgl"));
	if (Tc) {
		for (var Wc = [], Xc = Tc.split(","), Ic = 0; Ic < Xc.length; Ic += 1) {
			var Yc = Xc[Ic];
			fc[Yc] && Wc.push.apply(Wc, fc[Yc]);
			Wc.push(Yc)
		}
		Vc = Vc.concat(Wc)
	}
	Vc.push("sync");
	if (Sc.Fv) {
		var Zc = !0,
			$c = [],
			ad = [];
		try {
			for (var Ic = 0, bd = Vc.length; Ic < bd; Ic++) {
				var cd = JSON.parse(localStorage.getItem("_AMap_" + Vc[Ic]));
				if (cd && cd.version === Mc.Dk) $c.push(cd.script), cd.css && ad.push(cd.css);
				else {
					$c = void 0;
					Zc = !1;
					break
				}
			}
		} catch (dd) {
			$c = ad = void 0, Zc = !1
		}
		if (Zc) try {
			ad.length && ed();
			var fd = $c.join(";");
			eval(fd)
		} catch (gd) {
			Uc = !1
		} else Uc = !1
	} else Uc = !1;
	if (Uc)
		for (Ic = 0; Ic < Vc.length; Ic += 1) g.tb.QC(Vc[Ic]).status = 1;
	else Mc.LJ = !1, hd();

	function id() {
		for (var a = fa.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1)
			if (0 === a[c].src.indexOf(Mc.Gb + "/maps?")) {
				b = a[c];
				break
			} return Mc.Mc || b && b.async
	}

	function hd() {
		var a = Mc.Gb + "/maps/modules?v=" + Mc.ln + "&key=" + Mc.key + "&vrs=" + Mc.Dk + "&m=" + Vc.join(",");
		id() ? jd(a) : (fa.write('<script crossorigin="anonymous" id="amap_plus_js" src="' + a +
			'" type="text/javascript">\x3c/script>'), setTimeout(function() {
			fa.getElementById("amap_plus_js") || jd(a)
		}, 1))
	}

	function jd(a) {
		var b = fa.createElement("script");
		b.charset = "utf-8";
		b.src = a;
		b.id = "amap_plus_js";
		(a = fa.head || fa.getElementsByTagName("head")[0] || fa.body) && a.appendChild(b)
	}

	function ed() {
		var a = ad.join("\n"),
			b = fa.createElement("style");
		b.type = "text/css"; - 1 === Mc.Gb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, Mc.Gb
			.split("://")[1]));
		"https" === Mc.tc && (a = a.replace(/http:/gi, "https:"));
		if (b.styleSheet) {
			var c = function() {
				try {
					b.styleSheet.cssText = a
				} catch (c) {}
			};
			b.styleSheet.disabled ? setTimeout(c, 10) : c()
		} else b.appendChild(fa.createTextNode(a));
		c = fa.head || fa.getElementsByTagName("head")[0];
		2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
	};
	(typeof _cssload_ == "function") && _cssload_("logo",
		".amap-logo{display:block!important;pointer-events:none;}", true)
})(["2cb080ea12bbc0492419b74763f9aa1a", [109.00741,34.283077],
	"https://webapi.amap.com", 1, "1.4.16", null, "110000", "", true, false, false, true,
	"20210706011500-20201123-1", false, "C", "3_21_07_08_00", "https", "webapi.amap.com"
])
