// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5YFFI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b52b6b0f11c8799d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"cOWg5":[function(require,module,exports) {
(function(window1, $, undefined) {
    (function() {
        var VERSION = "2.2.3", pluginName = "datepicker", autoInitSelector = ".datepicker-here", $body, $datepickersContainer, containerBuilt = false, baseTemplate = '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>', defaults = {
            classes: "",
            inline: false,
            language: "ru",
            startDate: new Date(),
            firstDay: "",
            weekends: [
                6,
                0
            ],
            dateFormat: "",
            altField: "",
            altFieldDateFormat: "@",
            toggleSelected: true,
            keyboardNav: true,
            position: "bottom left",
            offset: 12,
            view: "days",
            minView: "days",
            showOtherMonths: true,
            selectOtherMonths: true,
            moveToOtherMonthsOnSelect: true,
            showOtherYears: true,
            selectOtherYears: true,
            moveToOtherYearsOnSelect: true,
            minDate: "",
            maxDate: "",
            disableNavWhenOutOfRange: true,
            multipleDates: false,
            multipleDatesSeparator: ",",
            range: false,
            todayButton: false,
            clearButton: false,
            showEvent: "focus",
            autoClose: false,
            // navigation
            monthsField: "monthsShort",
            prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
            nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
            navTitles: {
                days: "MM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2"
            },
            // timepicker
            timepicker: false,
            onlyTimepicker: false,
            dateTimeSeparator: " ",
            timeFormat: "",
            minHours: 0,
            maxHours: 24,
            minMinutes: 0,
            maxMinutes: 59,
            hoursStep: 1,
            minutesStep: 1,
            // events
            onSelect: "",
            onShow: "",
            onHide: "",
            onChangeMonth: "",
            onChangeYear: "",
            onChangeDecade: "",
            onChangeView: "",
            onRenderCell: ""
        }, hotKeys = {
            "ctrlRight": [
                17,
                39
            ],
            "ctrlUp": [
                17,
                38
            ],
            "ctrlLeft": [
                17,
                37
            ],
            "ctrlDown": [
                17,
                40
            ],
            "shiftRight": [
                16,
                39
            ],
            "shiftUp": [
                16,
                38
            ],
            "shiftLeft": [
                16,
                37
            ],
            "shiftDown": [
                16,
                40
            ],
            "altUp": [
                18,
                38
            ],
            "altRight": [
                18,
                39
            ],
            "altLeft": [
                18,
                37
            ],
            "altDown": [
                18,
                40
            ],
            "ctrlShiftUp": [
                16,
                17,
                38
            ]
        }, datepicker;
        var Datepicker = function(el, options) {
            this.el = el;
            this.$el = $(el);
            this.opts = $.extend(true, {}, defaults, options, this.$el.data());
            if ($body == undefined) $body = $("body");
            if (!this.opts.startDate) this.opts.startDate = new Date();
            if (this.el.nodeName == "INPUT") this.elIsInput = true;
            if (this.opts.altField) this.$altField = typeof this.opts.altField == "string" ? $(this.opts.altField) : this.opts.altField;
            this.inited = false;
            this.visible = false;
            this.silent = false; // Need to prevent unnecessary rendering
            this.currentDate = this.opts.startDate;
            this.currentView = this.opts.view;
            this._createShortCuts();
            this.selectedDates = [];
            this.views = {};
            this.keys = [];
            this.minRange = "";
            this.maxRange = "";
            this._prevOnSelectValue = "";
            this.init();
        };
        datepicker = Datepicker;
        datepicker.prototype = {
            VERSION: VERSION,
            viewIndexes: [
                "days",
                "months",
                "years"
            ],
            init: function() {
                if (!containerBuilt && !this.opts.inline && this.elIsInput) this._buildDatepickersContainer();
                this._buildBaseHtml();
                this._defineLocale(this.opts.language);
                this._syncWithMinMaxDates();
                if (this.elIsInput) {
                    if (!this.opts.inline) {
                        // Set extra classes for proper transitions
                        this._setPositionClasses(this.opts.position);
                        this._bindEvents();
                    }
                    if (this.opts.keyboardNav && !this.opts.onlyTimepicker) this._bindKeyboardEvents();
                    this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this));
                    this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this));
                }
                if (this.opts.classes) this.$datepicker.addClass(this.opts.classes);
                if (this.opts.timepicker) {
                    this.timepicker = new $.fn.datepicker.Timepicker(this, this.opts);
                    this._bindTimepickerEvents();
                }
                if (this.opts.onlyTimepicker) this.$datepicker.addClass("-only-timepicker-");
                this.views[this.currentView] = new $.fn.datepicker.Body(this, this.currentView, this.opts);
                this.views[this.currentView].show();
                this.nav = new $.fn.datepicker.Navigation(this, this.opts);
                this.view = this.currentView;
                this.$el.on("clickCell.adp", this._onClickCell.bind(this));
                this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this));
                this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this));
                this.inited = true;
            },
            _createShortCuts: function() {
                this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-8639999913600000);
                this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(8639999913600000);
            },
            _bindEvents: function() {
                this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this));
                this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this));
                this.$el.on("blur.adp", this._onBlur.bind(this));
                this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this));
                $(window1).on("resize.adp", this._onResize.bind(this));
                $("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
            },
            _bindKeyboardEvents: function() {
                this.$el.on("keydown.adp", this._onKeyDown.bind(this));
                this.$el.on("keyup.adp", this._onKeyUp.bind(this));
                this.$el.on("hotKey.adp", this._onHotKey.bind(this));
            },
            _bindTimepickerEvents: function() {
                this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
            },
            isWeekend: function(day) {
                return this.opts.weekends.indexOf(day) !== -1;
            },
            _defineLocale: function(lang) {
                if (typeof lang == "string") {
                    this.loc = $.fn.datepicker.language[lang];
                    if (!this.loc) {
                        console.warn("Can't find language \"" + lang + '" in Datepicker.language, will use "ru" instead');
                        this.loc = $.extend(true, {}, $.fn.datepicker.language.ru);
                    }
                    this.loc = $.extend(true, {}, $.fn.datepicker.language.ru, $.fn.datepicker.language[lang]);
                } else this.loc = $.extend(true, {}, $.fn.datepicker.language.ru, lang);
                if (this.opts.dateFormat) this.loc.dateFormat = this.opts.dateFormat;
                if (this.opts.timeFormat) this.loc.timeFormat = this.opts.timeFormat;
                if (this.opts.firstDay !== "") this.loc.firstDay = this.opts.firstDay;
                if (this.opts.timepicker) this.loc.dateFormat = [
                    this.loc.dateFormat,
                    this.loc.timeFormat
                ].join(this.opts.dateTimeSeparator);
                if (this.opts.onlyTimepicker) this.loc.dateFormat = this.loc.timeFormat;
                var boundary = this._getWordBoundaryRegExp;
                if (this.loc.timeFormat.match(boundary("aa")) || this.loc.timeFormat.match(boundary("AA"))) this.ampm = true;
            },
            _buildDatepickersContainer: function() {
                containerBuilt = true;
                $body.append('<div class="datepickers-container" id="datepickers-container"></div>');
                $datepickersContainer = $("#datepickers-container");
            },
            _buildBaseHtml: function() {
                var $appendTarget, $inline = $('<div class="datepicker-inline">');
                if (this.el.nodeName == "INPUT") {
                    if (!this.opts.inline) $appendTarget = $datepickersContainer;
                    else $appendTarget = $inline.insertAfter(this.$el);
                } else $appendTarget = $inline.appendTo(this.$el);
                this.$datepicker = $(baseTemplate).appendTo($appendTarget);
                this.$content = $(".datepicker--content", this.$datepicker);
                this.$nav = $(".datepicker--nav", this.$datepicker);
            },
            _triggerOnChange: function() {
                if (!this.selectedDates.length) {
                    // Prevent from triggering multiple onSelect callback with same argument (empty string) in IE10-11
                    if (this._prevOnSelectValue === "") return;
                    this._prevOnSelectValue = "";
                    return this.opts.onSelect("", "", this);
                }
                var selectedDates = this.selectedDates, parsedSelected = datepicker.getParsedDate(selectedDates[0]), formattedDates, _this = this, dates = new Date(parsedSelected.year, parsedSelected.month, parsedSelected.date, parsedSelected.hours, parsedSelected.minutes);
                formattedDates = selectedDates.map(function(date) {
                    return _this.formatDate(_this.loc.dateFormat, date);
                }).join(this.opts.multipleDatesSeparator);
                // Create new dates array, to separate it from original selectedDates
                if (this.opts.multipleDates || this.opts.range) dates = selectedDates.map(function(date) {
                    var parsedDate = datepicker.getParsedDate(date);
                    return new Date(parsedDate.year, parsedDate.month, parsedDate.date, parsedDate.hours, parsedDate.minutes);
                });
                this._prevOnSelectValue = formattedDates;
                this.opts.onSelect(formattedDates, dates, this);
            },
            next: function() {
                var d = this.parsedDate, o = this.opts;
                switch(this.view){
                    case "days":
                        this.date = new Date(d.year, d.month + 1, 1);
                        if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(d.year + 1, d.month, 1);
                        if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(d.year + 10, 0, 1);
                        if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
                        break;
                }
            },
            prev: function() {
                var d = this.parsedDate, o = this.opts;
                switch(this.view){
                    case "days":
                        this.date = new Date(d.year, d.month - 1, 1);
                        if (o.onChangeMonth) o.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(d.year - 1, d.month, 1);
                        if (o.onChangeYear) o.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(d.year - 10, 0, 1);
                        if (o.onChangeDecade) o.onChangeDecade(this.curDecade);
                        break;
                }
            },
            formatDate: function(string, date) {
                date = date || this.date;
                var result = string, boundary = this._getWordBoundaryRegExp, locale = this.loc, leadingZero = datepicker.getLeadingZeroNum, decade = datepicker.getDecade(date), d = datepicker.getParsedDate(date), fullHours = d.fullHours, hours = d.hours, ampm = string.match(boundary("aa")) || string.match(boundary("AA")), dayPeriod = "am", replacer = this._replacer, validHours;
                if (this.opts.timepicker && this.timepicker && ampm) {
                    validHours = this.timepicker._getValidHoursFromDate(date, ampm);
                    fullHours = leadingZero(validHours.hours);
                    hours = validHours.hours;
                    dayPeriod = validHours.dayPeriod;
                }
                switch(true){
                    case /@/.test(result):
                        result = result.replace(/@/, date.getTime());
                    case /aa/.test(result):
                        result = replacer(result, boundary("aa"), dayPeriod);
                    case /AA/.test(result):
                        result = replacer(result, boundary("AA"), dayPeriod.toUpperCase());
                    case /dd/.test(result):
                        result = replacer(result, boundary("dd"), d.fullDate);
                    case /d/.test(result):
                        result = replacer(result, boundary("d"), d.date);
                    case /DD/.test(result):
                        result = replacer(result, boundary("DD"), locale.days[d.day]);
                    case /D/.test(result):
                        result = replacer(result, boundary("D"), locale.daysShort[d.day]);
                    case /mm/.test(result):
                        result = replacer(result, boundary("mm"), d.fullMonth);
                    case /m/.test(result):
                        result = replacer(result, boundary("m"), d.month + 1);
                    case /MM/.test(result):
                        result = replacer(result, boundary("MM"), this.loc.months[d.month]);
                    case /M/.test(result):
                        result = replacer(result, boundary("M"), locale.monthsShort[d.month]);
                    case /ii/.test(result):
                        result = replacer(result, boundary("ii"), d.fullMinutes);
                    case /i/.test(result):
                        result = replacer(result, boundary("i"), d.minutes);
                    case /hh/.test(result):
                        result = replacer(result, boundary("hh"), fullHours);
                    case /h/.test(result):
                        result = replacer(result, boundary("h"), hours);
                    case /yyyy/.test(result):
                        result = replacer(result, boundary("yyyy"), d.year);
                    case /yyyy1/.test(result):
                        result = replacer(result, boundary("yyyy1"), decade[0]);
                    case /yyyy2/.test(result):
                        result = replacer(result, boundary("yyyy2"), decade[1]);
                    case /yy/.test(result):
                        result = replacer(result, boundary("yy"), d.year.toString().slice(-2));
                }
                return result;
            },
            _replacer: function(str, reg, data) {
                return str.replace(reg, function(match, p1, p2, p3) {
                    return p1 + data + p3;
                });
            },
            _getWordBoundaryRegExp: function(sign) {
                var symbols = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                return new RegExp("(^|>|" + symbols + ")(" + sign + ")($|<|" + symbols + ")", "g");
            },
            selectDate: function(date) {
                var _this = this, opts = _this.opts, d = _this.parsedDate, selectedDates = _this.selectedDates, len = selectedDates.length, newDate = "";
                if (Array.isArray(date)) {
                    date.forEach(function(d) {
                        _this.selectDate(d);
                    });
                    return;
                }
                if (!(date instanceof Date)) return;
                this.lastSelectedDate = date;
                // Set new time values from Date
                if (this.timepicker) this.timepicker._setTime(date);
                // On this step timepicker will set valid values in it's instance
                _this._trigger("selectDate", date);
                // Set correct time values after timepicker's validation
                // Prevent from setting hours or minutes which values are lesser then `min` value or
                // greater then `max` value
                if (this.timepicker) {
                    date.setHours(this.timepicker.hours);
                    date.setMinutes(this.timepicker.minutes);
                }
                if (_this.view == "days") {
                    if (date.getMonth() != d.month && opts.moveToOtherMonthsOnSelect) newDate = new Date(date.getFullYear(), date.getMonth(), 1);
                }
                if (_this.view == "years") {
                    if (date.getFullYear() != d.year && opts.moveToOtherYearsOnSelect) newDate = new Date(date.getFullYear(), 0, 1);
                }
                if (newDate) {
                    _this.silent = true;
                    _this.date = newDate;
                    _this.silent = false;
                    _this.nav._render();
                }
                if (opts.multipleDates && !opts.range) {
                    if (len === opts.multipleDates) return;
                    if (!_this._isSelected(date)) _this.selectedDates.push(date);
                } else if (opts.range) {
                    if (len == 2) {
                        _this.selectedDates = [
                            date
                        ];
                        _this.minRange = date;
                        _this.maxRange = "";
                    } else if (len == 1) {
                        _this.selectedDates.push(date);
                        if (!_this.maxRange) _this.maxRange = date;
                        else _this.minRange = date;
                        // Swap dates if they were selected via dp.selectDate() and second date was smaller then first
                        if (datepicker.bigger(_this.maxRange, _this.minRange)) {
                            _this.maxRange = _this.minRange;
                            _this.minRange = date;
                        }
                        _this.selectedDates = [
                            _this.minRange,
                            _this.maxRange
                        ];
                    } else {
                        _this.selectedDates = [
                            date
                        ];
                        _this.minRange = date;
                    }
                } else _this.selectedDates = [
                    date
                ];
                _this._setInputValue();
                if (opts.onSelect) _this._triggerOnChange();
                if (opts.autoClose && !this.timepickerIsActive) {
                    if (!opts.multipleDates && !opts.range) _this.hide();
                    else if (opts.range && _this.selectedDates.length == 2) _this.hide();
                }
                _this.views[this.currentView]._render();
            },
            removeDate: function(date) {
                var selected = this.selectedDates, _this = this;
                if (!(date instanceof Date)) return;
                return selected.some(function(curDate, i) {
                    if (datepicker.isSame(curDate, date)) {
                        selected.splice(i, 1);
                        if (!_this.selectedDates.length) {
                            _this.minRange = "";
                            _this.maxRange = "";
                            _this.lastSelectedDate = "";
                        } else _this.lastSelectedDate = _this.selectedDates[_this.selectedDates.length - 1];
                        _this.views[_this.currentView]._render();
                        _this._setInputValue();
                        if (_this.opts.onSelect) _this._triggerOnChange();
                        return true;
                    }
                });
            },
            today: function() {
                this.silent = true;
                this.view = this.opts.minView;
                this.silent = false;
                this.date = new Date();
                if (this.opts.todayButton instanceof Date) this.selectDate(this.opts.todayButton);
            },
            clear: function() {
                this.selectedDates = [];
                this.minRange = "";
                this.maxRange = "";
                this.views[this.currentView]._render();
                this._setInputValue();
                if (this.opts.onSelect) this._triggerOnChange();
            },
            /**
         * Updates datepicker options
         * @param {String|Object} param - parameter's name to update. If object then it will extend current options
         * @param {String|Number|Object} [value] - new param value
         */ update: function(param, value) {
                var len = arguments.length, lastSelectedDate = this.lastSelectedDate;
                if (len == 2) this.opts[param] = value;
                else if (len == 1 && typeof param == "object") this.opts = $.extend(true, this.opts, param);
                this._createShortCuts();
                this._syncWithMinMaxDates();
                this._defineLocale(this.opts.language);
                this.nav._addButtonsIfNeed();
                if (!this.opts.onlyTimepicker) this.nav._render();
                this.views[this.currentView]._render();
                if (this.elIsInput && !this.opts.inline) {
                    this._setPositionClasses(this.opts.position);
                    if (this.visible) this.setPosition(this.opts.position);
                }
                if (this.opts.classes) this.$datepicker.addClass(this.opts.classes);
                if (this.opts.onlyTimepicker) this.$datepicker.addClass("-only-timepicker-");
                if (this.opts.timepicker) {
                    if (lastSelectedDate) this.timepicker._handleDate(lastSelectedDate);
                    this.timepicker._updateRanges();
                    this.timepicker._updateCurrentTime();
                    // Change hours and minutes if it's values have been changed through min/max hours/minutes
                    if (lastSelectedDate) {
                        lastSelectedDate.setHours(this.timepicker.hours);
                        lastSelectedDate.setMinutes(this.timepicker.minutes);
                    }
                }
                this._setInputValue();
                return this;
            },
            _syncWithMinMaxDates: function() {
                var curTime = this.date.getTime();
                this.silent = true;
                if (this.minTime > curTime) this.date = this.minDate;
                if (this.maxTime < curTime) this.date = this.maxDate;
                this.silent = false;
            },
            _isSelected: function(checkDate, cellType) {
                var res = false;
                this.selectedDates.some(function(date) {
                    if (datepicker.isSame(date, checkDate, cellType)) {
                        res = date;
                        return true;
                    }
                });
                return res;
            },
            _setInputValue: function() {
                var _this = this, opts = _this.opts, format = _this.loc.dateFormat, altFormat = opts.altFieldDateFormat, value = _this.selectedDates.map(function(date) {
                    return _this.formatDate(format, date);
                }), altValues;
                if (opts.altField && _this.$altField.length) {
                    altValues = this.selectedDates.map(function(date) {
                        return _this.formatDate(altFormat, date);
                    });
                    altValues = altValues.join(this.opts.multipleDatesSeparator);
                    this.$altField.val(altValues);
                }
                value = value.join(this.opts.multipleDatesSeparator);
                this.$el.val(value);
            },
            /**
         * Check if date is between minDate and maxDate
         * @param date {object} - date object
         * @param type {string} - cell type
         * @returns {boolean}
         * @private
         */ _isInRange: function(date, type) {
                var time = date.getTime(), d = datepicker.getParsedDate(date), min = datepicker.getParsedDate(this.minDate), max = datepicker.getParsedDate(this.maxDate), dMinTime = new Date(d.year, d.month, min.date).getTime(), dMaxTime = new Date(d.year, d.month, max.date).getTime(), types = {
                    day: time >= this.minTime && time <= this.maxTime,
                    month: dMinTime >= this.minTime && dMaxTime <= this.maxTime,
                    year: d.year >= min.year && d.year <= max.year
                };
                return type ? types[type] : types.day;
            },
            _getDimensions: function($el) {
                var offset = $el.offset();
                return {
                    width: $el.outerWidth(),
                    height: $el.outerHeight(),
                    left: offset.left,
                    top: offset.top
                };
            },
            _getDateFromCell: function(cell) {
                var curDate = this.parsedDate, year = cell.data("year") || curDate.year, month = cell.data("month") == undefined ? curDate.month : cell.data("month"), date = cell.data("date") || 1;
                return new Date(year, month, date);
            },
            _setPositionClasses: function(pos) {
                pos = pos.split(" ");
                var main = pos[0], sec = pos[1], classes = "datepicker -" + main + "-" + sec + "- -from-" + main + "-";
                if (this.visible) classes += " active";
                this.$datepicker.removeAttr("class").addClass(classes);
            },
            setPosition: function(position) {
                position = position || this.opts.position;
                var dims = this._getDimensions(this.$el), selfDims = this._getDimensions(this.$datepicker), pos = position.split(" "), top, left, offset = this.opts.offset, main = pos[0], secondary = pos[1];
                switch(main){
                    case "top":
                        top = dims.top - selfDims.height - offset;
                        break;
                    case "right":
                        left = dims.left + dims.width + offset;
                        break;
                    case "bottom":
                        top = dims.top + dims.height + offset;
                        break;
                    case "left":
                        left = dims.left - selfDims.width - offset;
                        break;
                }
                switch(secondary){
                    case "top":
                        top = dims.top;
                        break;
                    case "right":
                        left = dims.left + dims.width - selfDims.width;
                        break;
                    case "bottom":
                        top = dims.top + dims.height - selfDims.height;
                        break;
                    case "left":
                        left = dims.left;
                        break;
                    case "center":
                        if (/left|right/.test(main)) top = dims.top + dims.height / 2 - selfDims.height / 2;
                        else left = dims.left + dims.width / 2 - selfDims.width / 2;
                }
                this.$datepicker.css({
                    left: left,
                    top: top
                });
            },
            show: function() {
                var onShow = this.opts.onShow;
                this.setPosition(this.opts.position);
                this.$datepicker.addClass("active");
                this.visible = true;
                if (onShow) this._bindVisionEvents(onShow);
            },
            hide: function() {
                var onHide = this.opts.onHide;
                this.$datepicker.removeClass("active").css({
                    left: "-100000px"
                });
                this.focused = "";
                this.keys = [];
                this.inFocus = false;
                this.visible = false;
                this.$el.blur();
                if (onHide) this._bindVisionEvents(onHide);
            },
            down: function(date) {
                this._changeView(date, "down");
            },
            up: function(date) {
                this._changeView(date, "up");
            },
            _bindVisionEvents: function(event) {
                this.$datepicker.off("transitionend.dp");
                event(this, false);
                this.$datepicker.one("transitionend.dp", event.bind(this, this, true));
            },
            _changeView: function(date, dir) {
                date = date || this.focused || this.date;
                var nextView = dir == "up" ? this.viewIndex + 1 : this.viewIndex - 1;
                if (nextView > 2) nextView = 2;
                if (nextView < 0) nextView = 0;
                this.silent = true;
                this.date = new Date(date.getFullYear(), date.getMonth(), 1);
                this.silent = false;
                this.view = this.viewIndexes[nextView];
            },
            _handleHotKey: function(key) {
                var date = datepicker.getParsedDate(this._getFocusedDate()), focusedParsed, o = this.opts, newDate, totalDaysInNextMonth, monthChanged = false, yearChanged = false, decadeChanged = false, y = date.year, m = date.month, d = date.date;
                switch(key){
                    case "ctrlRight":
                    case "ctrlUp":
                        m += 1;
                        monthChanged = true;
                        break;
                    case "ctrlLeft":
                    case "ctrlDown":
                        m -= 1;
                        monthChanged = true;
                        break;
                    case "shiftRight":
                    case "shiftUp":
                        yearChanged = true;
                        y += 1;
                        break;
                    case "shiftLeft":
                    case "shiftDown":
                        yearChanged = true;
                        y -= 1;
                        break;
                    case "altRight":
                    case "altUp":
                        decadeChanged = true;
                        y += 10;
                        break;
                    case "altLeft":
                    case "altDown":
                        decadeChanged = true;
                        y -= 10;
                        break;
                    case "ctrlShiftUp":
                        this.up();
                        break;
                }
                totalDaysInNextMonth = datepicker.getDaysCount(new Date(y, m));
                newDate = new Date(y, m, d);
                // If next month has less days than current, set date to total days in that month
                if (totalDaysInNextMonth < d) d = totalDaysInNextMonth;
                // Check if newDate is in valid range
                if (newDate.getTime() < this.minTime) newDate = this.minDate;
                else if (newDate.getTime() > this.maxTime) newDate = this.maxDate;
                this.focused = newDate;
                focusedParsed = datepicker.getParsedDate(newDate);
                if (monthChanged && o.onChangeMonth) o.onChangeMonth(focusedParsed.month, focusedParsed.year);
                if (yearChanged && o.onChangeYear) o.onChangeYear(focusedParsed.year);
                if (decadeChanged && o.onChangeDecade) o.onChangeDecade(this.curDecade);
            },
            _registerKey: function(key) {
                var exists = this.keys.some(function(curKey) {
                    return curKey == key;
                });
                if (!exists) this.keys.push(key);
            },
            _unRegisterKey: function(key) {
                var index = this.keys.indexOf(key);
                this.keys.splice(index, 1);
            },
            _isHotKeyPressed: function() {
                var currentHotKey, found = false, _this = this, pressedKeys = this.keys.sort();
                for(var hotKey in hotKeys){
                    currentHotKey = hotKeys[hotKey];
                    if (pressedKeys.length != currentHotKey.length) continue;
                    if (currentHotKey.every(function(key, i) {
                        return key == pressedKeys[i];
                    })) {
                        _this._trigger("hotKey", hotKey);
                        found = true;
                    }
                }
                return found;
            },
            _trigger: function(event, args) {
                this.$el.trigger(event, args);
            },
            _focusNextCell: function(keyCode, type) {
                type = type || this.cellType;
                var date = datepicker.getParsedDate(this._getFocusedDate()), y = date.year, m = date.month, d = date.date;
                if (this._isHotKeyPressed()) return;
                switch(keyCode){
                    case 37:
                        type == "day" && (d -= 1);
                        type == "month" && (m -= 1);
                        type == "year" && (y -= 1);
                        break;
                    case 38:
                        type == "day" && (d -= 7);
                        type == "month" && (m -= 3);
                        type == "year" && (y -= 4);
                        break;
                    case 39:
                        type == "day" && (d += 1);
                        type == "month" && (m += 1);
                        type == "year" && (y += 1);
                        break;
                    case 40:
                        type == "day" && (d += 7);
                        type == "month" && (m += 3);
                        type == "year" && (y += 4);
                        break;
                }
                var nd = new Date(y, m, d);
                if (nd.getTime() < this.minTime) nd = this.minDate;
                else if (nd.getTime() > this.maxTime) nd = this.maxDate;
                this.focused = nd;
            },
            _getFocusedDate: function() {
                var focused = this.focused || this.selectedDates[this.selectedDates.length - 1], d = this.parsedDate;
                if (!focused) switch(this.view){
                    case "days":
                        focused = new Date(d.year, d.month, new Date().getDate());
                        break;
                    case "months":
                        focused = new Date(d.year, d.month, 1);
                        break;
                    case "years":
                        focused = new Date(d.year, 0, 1);
                        break;
                }
                return focused;
            },
            _getCell: function(date, type) {
                type = type || this.cellType;
                var d = datepicker.getParsedDate(date), selector = '.datepicker--cell[data-year="' + d.year + '"]', $cell;
                switch(type){
                    case "month":
                        selector = '[data-month="' + d.month + '"]';
                        break;
                    case "day":
                        selector += '[data-month="' + d.month + '"][data-date="' + d.date + '"]';
                        break;
                }
                $cell = this.views[this.currentView].$el.find(selector);
                return $cell.length ? $cell : $("");
            },
            destroy: function() {
                var _this = this;
                _this.$el.off(".adp").data("datepicker", "");
                _this.selectedDates = [];
                _this.focused = "";
                _this.views = {};
                _this.keys = [];
                _this.minRange = "";
                _this.maxRange = "";
                if (_this.opts.inline || !_this.elIsInput) _this.$datepicker.closest(".datepicker-inline").remove();
                else _this.$datepicker.remove();
            },
            _handleAlreadySelectedDates: function(alreadySelected, selectedDate) {
                if (this.opts.range) {
                    if (!this.opts.toggleSelected) // Add possibility to select same date when range is true
                    {
                        if (this.selectedDates.length != 2) this._trigger("clickCell", selectedDate);
                    } else this.removeDate(selectedDate);
                } else if (this.opts.toggleSelected) this.removeDate(selectedDate);
                // Change last selected date to be able to change time when clicking on this cell
                if (!this.opts.toggleSelected) {
                    this.lastSelectedDate = alreadySelected;
                    if (this.opts.timepicker) {
                        this.timepicker._setTime(alreadySelected);
                        this.timepicker.update();
                    }
                }
            },
            _onShowEvent: function(e) {
                if (!this.visible) this.show();
            },
            _onBlur: function() {
                if (!this.inFocus && this.visible) this.hide();
            },
            _onMouseDownDatepicker: function(e) {
                this.inFocus = true;
            },
            _onMouseUpDatepicker: function(e) {
                this.inFocus = false;
                e.originalEvent.inFocus = true;
                if (!e.originalEvent.timepickerFocus) this.$el.focus();
            },
            _onKeyUpGeneral: function(e) {
                var val1 = this.$el.val();
                if (!val1) this.clear();
            },
            _onResize: function() {
                if (this.visible) this.setPosition();
            },
            _onMouseUpBody: function(e) {
                if (e.originalEvent.inFocus) return;
                if (this.visible && !this.inFocus) this.hide();
            },
            _onMouseUpEl: function(e) {
                e.originalEvent.inFocus = true;
                setTimeout(this._onKeyUpGeneral.bind(this), 4);
            },
            _onKeyDown: function(e) {
                var code = e.which;
                this._registerKey(code);
                // Arrows
                if (code >= 37 && code <= 40) {
                    e.preventDefault();
                    this._focusNextCell(code);
                }
                // Enter
                if (code == 13) {
                    if (this.focused) {
                        if (this._getCell(this.focused).hasClass("-disabled-")) return;
                        if (this.view != this.opts.minView) this.down();
                        else {
                            var alreadySelected = this._isSelected(this.focused, this.cellType);
                            if (!alreadySelected) {
                                if (this.timepicker) {
                                    this.focused.setHours(this.timepicker.hours);
                                    this.focused.setMinutes(this.timepicker.minutes);
                                }
                                this.selectDate(this.focused);
                                return;
                            }
                            this._handleAlreadySelectedDates(alreadySelected, this.focused);
                        }
                    }
                }
                // Esc
                if (code == 27) this.hide();
            },
            _onKeyUp: function(e) {
                var code = e.which;
                this._unRegisterKey(code);
            },
            _onHotKey: function(e, hotKey) {
                this._handleHotKey(hotKey);
            },
            _onMouseEnterCell: function(e) {
                var $cell = $(e.target).closest(".datepicker--cell"), date = this._getDateFromCell($cell);
                // Prevent from unnecessary rendering and setting new currentDate
                this.silent = true;
                if (this.focused) this.focused = "";
                $cell.addClass("-focus-");
                this.focused = date;
                this.silent = false;
                if (this.opts.range && this.selectedDates.length == 1) {
                    this.minRange = this.selectedDates[0];
                    this.maxRange = "";
                    if (datepicker.less(this.minRange, this.focused)) {
                        this.maxRange = this.minRange;
                        this.minRange = "";
                    }
                    this.views[this.currentView]._update();
                }
            },
            _onMouseLeaveCell: function(e) {
                var $cell = $(e.target).closest(".datepicker--cell");
                $cell.removeClass("-focus-");
                this.silent = true;
                this.focused = "";
                this.silent = false;
            },
            _onTimeChange: function(e, h, m) {
                var date = new Date(), selectedDates = this.selectedDates, selected = false;
                if (selectedDates.length) {
                    selected = true;
                    date = this.lastSelectedDate;
                }
                date.setHours(h);
                date.setMinutes(m);
                if (!selected && !this._getCell(date).hasClass("-disabled-")) this.selectDate(date);
                else {
                    this._setInputValue();
                    if (this.opts.onSelect) this._triggerOnChange();
                }
            },
            _onClickCell: function(e, date) {
                if (this.timepicker) {
                    date.setHours(this.timepicker.hours);
                    date.setMinutes(this.timepicker.minutes);
                }
                this.selectDate(date);
            },
            set focused (val){
                if (!val && this.focused) {
                    var $cell = this._getCell(this.focused);
                    if ($cell.length) $cell.removeClass("-focus-");
                }
                this._focused = val;
                if (this.opts.range && this.selectedDates.length == 1) {
                    this.minRange = this.selectedDates[0];
                    this.maxRange = "";
                    if (datepicker.less(this.minRange, this._focused)) {
                        this.maxRange = this.minRange;
                        this.minRange = "";
                    }
                }
                if (this.silent) return;
                this.date = val;
            },
            get focused () {
                return this._focused;
            },
            get parsedDate () {
                return datepicker.getParsedDate(this.date);
            },
            set date (val){
                if (!(val instanceof Date)) return;
                this.currentDate = val;
                if (this.inited && !this.silent) {
                    this.views[this.view]._render();
                    this.nav._render();
                    if (this.visible && this.elIsInput) this.setPosition();
                }
                return val;
            },
            get date () {
                return this.currentDate;
            },
            set view (val){
                this.viewIndex = this.viewIndexes.indexOf(val);
                if (this.viewIndex < 0) return;
                this.prevView = this.currentView;
                this.currentView = val;
                if (this.inited) {
                    if (!this.views[val]) this.views[val] = new $.fn.datepicker.Body(this, val, this.opts);
                    else this.views[val]._render();
                    this.views[this.prevView].hide();
                    this.views[val].show();
                    this.nav._render();
                    if (this.opts.onChangeView) this.opts.onChangeView(val);
                    if (this.elIsInput && this.visible) this.setPosition();
                }
                return val;
            },
            get view () {
                return this.currentView;
            },
            get cellType () {
                return this.view.substring(0, this.view.length - 1);
            },
            get minTime () {
                var min = datepicker.getParsedDate(this.minDate);
                return new Date(min.year, min.month, min.date).getTime();
            },
            get maxTime () {
                var max = datepicker.getParsedDate(this.maxDate);
                return new Date(max.year, max.month, max.date).getTime();
            },
            get curDecade () {
                return datepicker.getDecade(this.date);
            }
        };
        //  Utils
        // -------------------------------------------------
        datepicker.getDaysCount = function(date) {
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        };
        datepicker.getParsedDate = function(date) {
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                fullMonth: date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
                date: date.getDate(),
                fullDate: date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
                day: date.getDay(),
                hours: date.getHours(),
                fullHours: date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
                minutes: date.getMinutes(),
                fullMinutes: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
            };
        };
        datepicker.getDecade = function(date) {
            var firstYear = Math.floor(date.getFullYear() / 10) * 10;
            return [
                firstYear,
                firstYear + 9
            ];
        };
        datepicker.template = function(str, data) {
            return str.replace(/#\{([\w]+)\}/g, function(source, match) {
                if (data[match] || data[match] === 0) return data[match];
            });
        };
        datepicker.isSame = function(date1, date2, type) {
            if (!date1 || !date2) return false;
            var d1 = datepicker.getParsedDate(date1), d2 = datepicker.getParsedDate(date2), _type = type ? type : "day", conditions = {
                day: d1.date == d2.date && d1.month == d2.month && d1.year == d2.year,
                month: d1.month == d2.month && d1.year == d2.year,
                year: d1.year == d2.year
            };
            return conditions[_type];
        };
        datepicker.less = function(dateCompareTo, date, type) {
            if (!dateCompareTo || !date) return false;
            return date.getTime() < dateCompareTo.getTime();
        };
        datepicker.bigger = function(dateCompareTo, date, type) {
            if (!dateCompareTo || !date) return false;
            return date.getTime() > dateCompareTo.getTime();
        };
        datepicker.getLeadingZeroNum = function(num) {
            return parseInt(num) < 10 ? "0" + num : num;
        };
        /**
     * Returns copy of date with hours and minutes equals to 0
     * @param date {Date}
     */ datepicker.resetTime = function(date) {
            if (typeof date != "object") return;
            date = datepicker.getParsedDate(date);
            return new Date(date.year, date.month, date.date);
        };
        $.fn.datepicker = function(options) {
            return this.each(function() {
                if (!$.data(this, pluginName)) $.data(this, pluginName, new Datepicker(this, options));
                else {
                    var _this = $.data(this, pluginName);
                    _this.opts = $.extend(true, _this.opts, options);
                    _this.update();
                }
            });
        };
        $.fn.datepicker.Constructor = Datepicker;
        $.fn.datepicker.language = {
            ru: {
                days: [
                    "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
                    "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
                    "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
                    "\u0421\u0440\u0435\u0434\u0430",
                    "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
                    "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
                    "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"
                ],
                daysShort: [
                    "\u0412\u043E\u0441",
                    "\u041F\u043E\u043D",
                    "\u0412\u0442\u043E",
                    "\u0421\u0440\u0435",
                    "\u0427\u0435\u0442",
                    "\u041F\u044F\u0442",
                    "\u0421\u0443\u0431"
                ],
                daysMin: [
                    "\u0412\u0441",
                    "\u041F\u043D",
                    "\u0412\u0442",
                    "\u0421\u0440",
                    "\u0427\u0442",
                    "\u041F\u0442",
                    "\u0421\u0431"
                ],
                months: [
                    "\u042F\u043D\u0432\u0430\u0440\u044C",
                    "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
                    "\u041C\u0430\u0440\u0442",
                    "\u0410\u043F\u0440\u0435\u043B\u044C",
                    "\u041C\u0430\u0439",
                    "\u0418\u044E\u043D\u044C",
                    "\u0418\u044E\u043B\u044C",
                    "\u0410\u0432\u0433\u0443\u0441\u0442",
                    "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
                    "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
                    "\u041D\u043E\u044F\u0431\u0440\u044C",
                    "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
                ],
                monthsShort: [
                    "\u042F\u043D\u0432",
                    "\u0424\u0435\u0432",
                    "\u041C\u0430\u0440",
                    "\u0410\u043F\u0440",
                    "\u041C\u0430\u0439",
                    "\u0418\u044E\u043D",
                    "\u0418\u044E\u043B",
                    "\u0410\u0432\u0433",
                    "\u0421\u0435\u043D",
                    "\u041E\u043A\u0442",
                    "\u041D\u043E\u044F",
                    "\u0414\u0435\u043A"
                ],
                today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
                clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",
                dateFormat: "dd.mm.yyyy",
                timeFormat: "hh:ii",
                firstDay: 1
            }
        };
        $(function() {
            $(autoInitSelector).datepicker();
        });
    })();
    (function() {
        var templates = {
            days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
            months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
            years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
        }, datepicker = $.fn.datepicker, dp = datepicker.Constructor;
        datepicker.Body = function(d, type, opts) {
            this.d = d;
            this.type = type;
            this.opts = opts;
            this.$el = $("");
            if (this.opts.onlyTimepicker) return;
            this.init();
        };
        datepicker.Body.prototype = {
            init: function() {
                this._buildBaseHtml();
                this._render();
                this._bindEvents();
            },
            _bindEvents: function() {
                this.$el.on("click", ".datepicker--cell", $.proxy(this._onClickCell, this));
            },
            _buildBaseHtml: function() {
                this.$el = $(templates[this.type]).appendTo(this.d.$content);
                this.$names = $(".datepicker--days-names", this.$el);
                this.$cells = $(".datepicker--cells", this.$el);
            },
            _getDayNamesHtml: function(firstDay, curDay, html, i) {
                curDay = curDay != undefined ? curDay : firstDay;
                html = html ? html : "";
                i = i != undefined ? i : 0;
                if (i > 7) return html;
                if (curDay == 7) return this._getDayNamesHtml(firstDay, 0, html, ++i);
                html += '<div class="datepicker--day-name' + (this.d.isWeekend(curDay) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[curDay] + "</div>";
                return this._getDayNamesHtml(firstDay, ++curDay, html, ++i);
            },
            _getCellContents: function(date, type) {
                var classes = "datepicker--cell datepicker--cell-" + type, currentDate = new Date(), parent = this.d, minRange = dp.resetTime(parent.minRange), maxRange = dp.resetTime(parent.maxRange), opts = parent.opts, d = dp.getParsedDate(date), render = {}, html = d.date;
                switch(type){
                    case "day":
                        if (parent.isWeekend(d.day)) classes += " -weekend-";
                        if (d.month != this.d.parsedDate.month) {
                            classes += " -other-month-";
                            if (!opts.selectOtherMonths) classes += " -disabled-";
                            if (!opts.showOtherMonths) html = "";
                        }
                        break;
                    case "month":
                        html = parent.loc[parent.opts.monthsField][d.month];
                        break;
                    case "year":
                        var decade = parent.curDecade;
                        html = d.year;
                        if (d.year < decade[0] || d.year > decade[1]) {
                            classes += " -other-decade-";
                            if (!opts.selectOtherYears) classes += " -disabled-";
                            if (!opts.showOtherYears) html = "";
                        }
                        break;
                }
                if (opts.onRenderCell) {
                    render = opts.onRenderCell(date, type) || {};
                    html = render.html ? render.html : html;
                    classes += render.classes ? " " + render.classes : "";
                }
                if (opts.range) {
                    if (dp.isSame(minRange, date, type)) classes += " -range-from-";
                    if (dp.isSame(maxRange, date, type)) classes += " -range-to-";
                    if (parent.selectedDates.length == 1 && parent.focused) {
                        if (dp.bigger(minRange, date) && dp.less(parent.focused, date) || dp.less(maxRange, date) && dp.bigger(parent.focused, date)) classes += " -in-range-";
                        if (dp.less(maxRange, date) && dp.isSame(parent.focused, date)) classes += " -range-from-";
                        if (dp.bigger(minRange, date) && dp.isSame(parent.focused, date)) classes += " -range-to-";
                    } else if (parent.selectedDates.length == 2) {
                        if (dp.bigger(minRange, date) && dp.less(maxRange, date)) classes += " -in-range-";
                    }
                }
                if (dp.isSame(currentDate, date, type)) classes += " -current-";
                if (parent.focused && dp.isSame(date, parent.focused, type)) classes += " -focus-";
                if (parent._isSelected(date, type)) classes += " -selected-";
                if (!parent._isInRange(date, type) || render.disabled) classes += " -disabled-";
                return {
                    html: html,
                    classes: classes
                };
            },
            /**
         * Calculates days number to render. Generates days html and returns it.
         * @param {object} date - Date object
         * @returns {string}
         * @private
         */ _getDaysHtml: function(date) {
                var totalMonthDays = dp.getDaysCount(date), firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(), lastMonthDay = new Date(date.getFullYear(), date.getMonth(), totalMonthDays).getDay(), daysFromPevMonth = firstMonthDay - this.d.loc.firstDay, daysFromNextMonth = 6 - lastMonthDay + this.d.loc.firstDay;
                daysFromPevMonth = daysFromPevMonth < 0 ? daysFromPevMonth + 7 : daysFromPevMonth;
                daysFromNextMonth = daysFromNextMonth > 6 ? daysFromNextMonth - 7 : daysFromNextMonth;
                var startDayIndex = -daysFromPevMonth + 1, m, y, html = "";
                for(var i = startDayIndex, max = totalMonthDays + daysFromNextMonth; i <= max; i++){
                    y = date.getFullYear();
                    m = date.getMonth();
                    html += this._getDayHtml(new Date(y, m, i));
                }
                return html;
            },
            _getDayHtml: function(date) {
                var content = this._getCellContents(date, "day");
                return '<div class="' + content.classes + '" ' + 'data-date="' + date.getDate() + '" ' + 'data-month="' + date.getMonth() + '" ' + 'data-year="' + date.getFullYear() + '">' + content.html + "</div>";
            },
            /**
         * Generates months html
         * @param {object} date - date instance
         * @returns {string}
         * @private
         */ _getMonthsHtml: function(date) {
                var html = "", d = dp.getParsedDate(date), i = 0;
                while(i < 12){
                    html += this._getMonthHtml(new Date(d.year, i));
                    i++;
                }
                return html;
            },
            _getMonthHtml: function(date) {
                var content = this._getCellContents(date, "month");
                return '<div class="' + content.classes + '" data-month="' + date.getMonth() + '">' + content.html + "</div>";
            },
            _getYearsHtml: function(date) {
                var d = dp.getParsedDate(date), decade = dp.getDecade(date), firstYear = decade[0] - 1, html = "", i = firstYear;
                for(i; i <= decade[1] + 1; i++)html += this._getYearHtml(new Date(i, 0));
                return html;
            },
            _getYearHtml: function(date) {
                var content = this._getCellContents(date, "year");
                return '<div class="' + content.classes + '" data-year="' + date.getFullYear() + '">' + content.html + "</div>";
            },
            _renderTypes: {
                days: function() {
                    var dayNames = this._getDayNamesHtml(this.d.loc.firstDay), days = this._getDaysHtml(this.d.currentDate);
                    this.$cells.html(days);
                    this.$names.html(dayNames);
                },
                months: function() {
                    var html = this._getMonthsHtml(this.d.currentDate);
                    this.$cells.html(html);
                },
                years: function() {
                    var html = this._getYearsHtml(this.d.currentDate);
                    this.$cells.html(html);
                }
            },
            _render: function() {
                if (this.opts.onlyTimepicker) return;
                this._renderTypes[this.type].bind(this)();
            },
            _update: function() {
                var $cells = $(".datepicker--cell", this.$cells), _this = this, classes, $cell, date;
                $cells.each(function(cell, i) {
                    $cell = $(this);
                    date = _this.d._getDateFromCell($(this));
                    classes = _this._getCellContents(date, _this.d.cellType);
                    $cell.attr("class", classes.classes);
                });
            },
            show: function() {
                if (this.opts.onlyTimepicker) return;
                this.$el.addClass("active");
                this.acitve = true;
            },
            hide: function() {
                this.$el.removeClass("active");
                this.active = false;
            },
            //  Events
            // -------------------------------------------------
            _handleClick: function(el) {
                var date = el.data("date") || 1, month = el.data("month") || 0, year = el.data("year") || this.d.parsedDate.year, dp = this.d;
                // Change view if min view does not reach yet
                if (dp.view != this.opts.minView) {
                    dp.down(new Date(year, month, date));
                    return;
                }
                // Select date if min view is reached
                var selectedDate = new Date(year, month, date), alreadySelected = this.d._isSelected(selectedDate, this.d.cellType);
                if (!alreadySelected) {
                    dp._trigger("clickCell", selectedDate);
                    return;
                }
                dp._handleAlreadySelectedDates.bind(dp, alreadySelected, selectedDate)();
            },
            _onClickCell: function(e) {
                var $el = $(e.target).closest(".datepicker--cell");
                if ($el.hasClass("-disabled-")) return;
                this._handleClick.bind(this)($el);
            }
        };
    })();
    (function() {
        var template = '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>', buttonsContainerTemplate = '<div class="datepicker--buttons"></div>', button = '<span class="datepicker--button" data-action="#{action}">#{label}</span>', datepicker = $.fn.datepicker, dp = datepicker.Constructor;
        datepicker.Navigation = function(d, opts) {
            this.d = d;
            this.opts = opts;
            this.$buttonsContainer = "";
            this.init();
        };
        datepicker.Navigation.prototype = {
            init: function() {
                this._buildBaseHtml();
                this._bindEvents();
            },
            _bindEvents: function() {
                this.d.$nav.on("click", ".datepicker--nav-action", $.proxy(this._onClickNavButton, this));
                this.d.$nav.on("click", ".datepicker--nav-title", $.proxy(this._onClickNavTitle, this));
                this.d.$datepicker.on("click", ".datepicker--button", $.proxy(this._onClickNavButton, this));
            },
            _buildBaseHtml: function() {
                if (!this.opts.onlyTimepicker) this._render();
                this._addButtonsIfNeed();
            },
            _addButtonsIfNeed: function() {
                if (this.opts.todayButton) this._addButton("today");
                if (this.opts.clearButton) this._addButton("clear");
            },
            _render: function() {
                var title = this._getTitle(this.d.currentDate), html = dp.template(template, $.extend({
                    title: title
                }, this.opts));
                this.d.$nav.html(html);
                if (this.d.view == "years") $(".datepicker--nav-title", this.d.$nav).addClass("-disabled-");
                this.setNavStatus();
            },
            _getTitle: function(date) {
                return this.d.formatDate(this.opts.navTitles[this.d.view], date);
            },
            _addButton: function(type) {
                if (!this.$buttonsContainer.length) this._addButtonsContainer();
                var data = {
                    action: type,
                    label: this.d.loc[type]
                }, html = dp.template(button, data);
                if ($("[data-action=" + type + "]", this.$buttonsContainer).length) return;
                this.$buttonsContainer.append(html);
            },
            _addButtonsContainer: function() {
                this.d.$datepicker.append(buttonsContainerTemplate);
                this.$buttonsContainer = $(".datepicker--buttons", this.d.$datepicker);
            },
            setNavStatus: function() {
                if (!(this.opts.minDate || this.opts.maxDate) || !this.opts.disableNavWhenOutOfRange) return;
                var date = this.d.parsedDate, m = date.month, y = date.year, d = date.date;
                switch(this.d.view){
                    case "days":
                        if (!this.d._isInRange(new Date(y, m - 1, 1), "month")) this._disableNav("prev");
                        if (!this.d._isInRange(new Date(y, m + 1, 1), "month")) this._disableNav("next");
                        break;
                    case "months":
                        if (!this.d._isInRange(new Date(y - 1, m, d), "year")) this._disableNav("prev");
                        if (!this.d._isInRange(new Date(y + 1, m, d), "year")) this._disableNav("next");
                        break;
                    case "years":
                        var decade = dp.getDecade(this.d.date);
                        if (!this.d._isInRange(new Date(decade[0] - 1, 0, 1), "year")) this._disableNav("prev");
                        if (!this.d._isInRange(new Date(decade[1] + 1, 0, 1), "year")) this._disableNav("next");
                        break;
                }
            },
            _disableNav: function(nav) {
                $('[data-action="' + nav + '"]', this.d.$nav).addClass("-disabled-");
            },
            _activateNav: function(nav) {
                $('[data-action="' + nav + '"]', this.d.$nav).removeClass("-disabled-");
            },
            _onClickNavButton: function(e) {
                var $el = $(e.target).closest("[data-action]"), action = $el.data("action");
                this.d[action]();
            },
            _onClickNavTitle: function(e) {
                if ($(e.target).hasClass("-disabled-")) return;
                if (this.d.view == "days") return this.d.view = "months";
                this.d.view = "years";
            }
        };
    })();
    (function() {
        var template = '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>', datepicker = $.fn.datepicker, dp = datepicker.Constructor;
        datepicker.Timepicker = function(inst, opts) {
            this.d = inst;
            this.opts = opts;
            this.init();
        };
        datepicker.Timepicker.prototype = {
            init: function() {
                var input = "input";
                this._setTime(this.d.date);
                this._buildHTML();
                if (navigator.userAgent.match(/trident/gi)) input = "change";
                this.d.$el.on("selectDate", this._onSelectDate.bind(this));
                this.$ranges.on(input, this._onChangeRange.bind(this));
                this.$ranges.on("mouseup", this._onMouseUpRange.bind(this));
                this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this));
                this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this));
            },
            _setTime: function(date) {
                var _date = dp.getParsedDate(date);
                this._handleDate(date);
                this.hours = _date.hours < this.minHours ? this.minHours : _date.hours;
                this.minutes = _date.minutes < this.minMinutes ? this.minMinutes : _date.minutes;
            },
            /**
         * Sets minHours and minMinutes from date (usually it's a minDate)
         * Also changes minMinutes if current hours are bigger then @date hours
         * @param date {Date}
         * @private
         */ _setMinTimeFromDate: function(date) {
                this.minHours = date.getHours();
                this.minMinutes = date.getMinutes();
                // If, for example, min hours are 10, and current hours are 12,
                // update minMinutes to default value, to be able to choose whole range of values
                if (this.d.lastSelectedDate) {
                    if (this.d.lastSelectedDate.getHours() > date.getHours()) this.minMinutes = this.opts.minMinutes;
                }
            },
            _setMaxTimeFromDate: function(date) {
                this.maxHours = date.getHours();
                this.maxMinutes = date.getMinutes();
                if (this.d.lastSelectedDate) {
                    if (this.d.lastSelectedDate.getHours() < date.getHours()) this.maxMinutes = this.opts.maxMinutes;
                }
            },
            _setDefaultMinMaxTime: function() {
                var maxHours = 23, maxMinutes = 59, opts = this.opts;
                this.minHours = opts.minHours < 0 || opts.minHours > maxHours ? 0 : opts.minHours;
                this.minMinutes = opts.minMinutes < 0 || opts.minMinutes > maxMinutes ? 0 : opts.minMinutes;
                this.maxHours = opts.maxHours < 0 || opts.maxHours > maxHours ? maxHours : opts.maxHours;
                this.maxMinutes = opts.maxMinutes < 0 || opts.maxMinutes > maxMinutes ? maxMinutes : opts.maxMinutes;
            },
            /**
         * Looks for min/max hours/minutes and if current values
         * are out of range sets valid values.
         * @private
         */ _validateHoursMinutes: function(date) {
                if (this.hours < this.minHours) this.hours = this.minHours;
                else if (this.hours > this.maxHours) this.hours = this.maxHours;
                if (this.minutes < this.minMinutes) this.minutes = this.minMinutes;
                else if (this.minutes > this.maxMinutes) this.minutes = this.maxMinutes;
            },
            _buildHTML: function() {
                var lz = dp.getLeadingZeroNum, data = {
                    hourMin: this.minHours,
                    hourMax: lz(this.maxHours),
                    hourStep: this.opts.hoursStep,
                    hourValue: this.hours,
                    hourVisible: lz(this.displayHours),
                    minMin: this.minMinutes,
                    minMax: lz(this.maxMinutes),
                    minStep: this.opts.minutesStep,
                    minValue: lz(this.minutes)
                }, _template = dp.template(template, data);
                this.$timepicker = $(_template).appendTo(this.d.$datepicker);
                this.$ranges = $('[type="range"]', this.$timepicker);
                this.$hours = $('[name="hours"]', this.$timepicker);
                this.$minutes = $('[name="minutes"]', this.$timepicker);
                this.$hoursText = $(".datepicker--time-current-hours", this.$timepicker);
                this.$minutesText = $(".datepicker--time-current-minutes", this.$timepicker);
                if (this.d.ampm) {
                    this.$ampm = $('<span class="datepicker--time-current-ampm">').appendTo($(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod);
                    this.$timepicker.addClass("-am-pm-");
                }
            },
            _updateCurrentTime: function() {
                var h = dp.getLeadingZeroNum(this.displayHours), m = dp.getLeadingZeroNum(this.minutes);
                this.$hoursText.html(h);
                this.$minutesText.html(m);
                if (this.d.ampm) this.$ampm.html(this.dayPeriod);
            },
            _updateRanges: function() {
                this.$hours.attr({
                    min: this.minHours,
                    max: this.maxHours
                }).val(this.hours);
                this.$minutes.attr({
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).val(this.minutes);
            },
            /**
         * Sets minHours, minMinutes etc. from date. If date is not passed, than sets
         * values from options
         * @param [date] {object} - Date object, to get values from
         * @private
         */ _handleDate: function(date) {
                this._setDefaultMinMaxTime();
                if (date) {
                    if (dp.isSame(date, this.d.opts.minDate)) this._setMinTimeFromDate(this.d.opts.minDate);
                    else if (dp.isSame(date, this.d.opts.maxDate)) this._setMaxTimeFromDate(this.d.opts.maxDate);
                }
                this._validateHoursMinutes(date);
            },
            update: function() {
                this._updateRanges();
                this._updateCurrentTime();
            },
            /**
         * Calculates valid hour value to display in text input and datepicker's body.
         * @param date {Date|Number} - date or hours
         * @param [ampm] {Boolean} - 12 hours mode
         * @returns {{hours: *, dayPeriod: string}}
         * @private
         */ _getValidHoursFromDate: function(date, ampm) {
                var d = date, hours = date;
                if (date instanceof Date) {
                    d = dp.getParsedDate(date);
                    hours = d.hours;
                }
                var _ampm = ampm || this.d.ampm, dayPeriod = "am";
                if (_ampm) switch(true){
                    case hours == 0:
                        hours = 12;
                        break;
                    case hours == 12:
                        dayPeriod = "pm";
                        break;
                    case hours > 11:
                        hours = hours - 12;
                        dayPeriod = "pm";
                        break;
                    default:
                        break;
                }
                return {
                    hours: hours,
                    dayPeriod: dayPeriod
                };
            },
            set hours (val){
                this._hours = val;
                var displayHours = this._getValidHoursFromDate(val);
                this.displayHours = displayHours.hours;
                this.dayPeriod = displayHours.dayPeriod;
            },
            get hours () {
                return this._hours;
            },
            //  Events
            // -------------------------------------------------
            _onChangeRange: function(e) {
                var $target = $(e.target), name = $target.attr("name");
                this.d.timepickerIsActive = true;
                this[name] = $target.val();
                this._updateCurrentTime();
                this.d._trigger("timeChange", [
                    this.hours,
                    this.minutes
                ]);
                this._handleDate(this.d.lastSelectedDate);
                this.update();
            },
            _onSelectDate: function(e, data) {
                this._handleDate(data);
                this.update();
            },
            _onMouseEnterRange: function(e) {
                var name = $(e.target).attr("name");
                $(".datepicker--time-current-" + name, this.$timepicker).addClass("-focus-");
            },
            _onMouseOutRange: function(e) {
                var name = $(e.target).attr("name");
                if (this.d.inFocus) return; // Prevent removing focus when mouse out of range slider
                $(".datepicker--time-current-" + name, this.$timepicker).removeClass("-focus-");
            },
            _onMouseUpRange: function(e) {
                this.d.timepickerIsActive = false;
            }
        };
    })();
})(window, jQuery);

},{}]},["5YFFI","cOWg5"], "cOWg5", "parcelRequire7921")

//# sourceMappingURL=index.11c8799d.js.map
