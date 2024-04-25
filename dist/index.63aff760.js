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
})({"6DoTH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
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

},{}],"adjPd":[function(require,module,exports) {
/* eslint-disable max-len */ var _createElementsJs = require("./modules/createElements.js");
var _datePickerJs = require("./modules/datePicker.js");
var _listenersJs = require("./modules/listeners.js");
document.addEventListener("DOMContentLoaded", ()=>{
    const { paymentTitle, formContainer } = (0, _createElementsJs.createElements)();
    const { container } = (0, _createElementsJs.createSvgElements)();
    document.body.append(paymentTitle, container, formContainer);
    // mount(document.body, [paymentTitle, container, formContainer]);
    const expirationDateInput = document.getElementById("expirationdate");
    const svgexpire = document.getElementById("svgexpire");
    (0, _datePickerJs.initDatepicker)(expirationDateInput, svgexpire);
    (0, _listenersJs.initListeners)();
});

},{"./modules/createElements.js":"lTxtA","./modules/datePicker.js":"lfwrK","./modules/listeners.js":"Asb2S"}],"lTxtA":[function(require,module,exports) {
/* eslint-disable indent */ /* eslint-disable max-len */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElements", ()=>createElements);
parcelHelpers.export(exports, "createSvgElements", ()=>createSvgElements);
var _redom = require("redom");
const createElements = ()=>{
    const paymentTitle = (0, _redom.el)("div.payment-title", (0, _redom.el)("h1", "Payment Information"));
    const formContainer = (0, _redom.el)("div.form-container", [
        (0, _redom.el)("div.field-container", [
            (0, _redom.el)("label", {
                for: "name"
            }, "Name"),
            (0, _redom.el)("input#name", {
                type: "text",
                maxlength: "20",
                placeholder: "NAME SURNAME"
            })
        ]),
        (0, _redom.el)("div.field-container", [
            (0, _redom.el)("label", {
                for: "cardnumber"
            }, "Card Number"),
            (0, _redom.el)("input#cardnumber", {
                type: "text",
                pattern: "[0-9]*",
                inputmode: "numeric",
                placeholder: "XXXX XXXX XXXX XXXX"
            }),
            (0, _redom.el)("div#ccicon")
        ]),
        (0, _redom.el)("div.field-container", [
            (0, _redom.el)("label", {
                for: "expirationdate"
            }, "Expiration (mm/yy)"),
            (0, _redom.el)("input#expirationdate", {
                type: "text",
                pattern: "[0-9]*",
                readonly: true,
                placeholder: "MM/YY"
            })
        ]),
        (0, _redom.el)("div.field-container", [
            (0, _redom.el)("label", {
                for: "securitycode"
            }, "Security Code"),
            (0, _redom.el)("input#securitycode", {
                type: "text",
                pattern: "[0-9]*",
                inputmode: "numeric",
                placeholder: "XXX"
            })
        ])
    ]);
    return {
        paymentTitle,
        formContainer
    };
};
const createSvgElements = (color = "grey", cardNumber = "XXXX XXXX XXXX XXXX", cardName = "Name Surname", expiration = "MM/YY", securityCode = "XXX")=>{
    const ccsingle = (0, _redom.el)("div#ccsingle", "logo");
    const cardFront = (0, _redom.svg)("svg#cardfront", {
        "version": "1.1",
        "id": "cardfront",
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "x": "0px",
        "y": "0px",
        "viewBox": "0 0 750 471",
        "style": "enable-background:new 0 0 750 471;",
        "xml:space": "preserve"
    });
    const frontSvgHTML = `
      <g id="Front">
        <g id="CardBackground">
          <g id="Page-1_1_">
            <g id="amex_1_">
            <path id="Rectangle-1_1_" class="lightcolor ${color}" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                  C0,17.9,17.9,0,40,0z" />
          </g>
          </g>
            <path class="darkcolor ${color}dark"
              d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" />
          </g>
          <text transform="matrix(1 0 0 1 60.106 295.0121)" id="svgnumber"
            class="st2 st3 st4">${cardNumber}</text>
          <text transform="matrix(1 0 0 1 54.1064 428.1723)" id="svgname"
            class="st2 st5 st6">${cardName}</text>
          <text transform="matrix(1 0 0 1 54.1074 389.8793)"
            class="st7 st5 st8">cardholder name</text>
          <text transform="matrix(1 0 0 1 479.7754 388.8793)"
            class="st7 st5 st8">expiration</text>
          <text transform="matrix(1 0 0 1 65.1054 241.5)"
            class="st7 st5 st8">card number</text>
          <g>
            <text transform="matrix(1 0 0 1 574.4219 433.8095)" id="svgexpire"
              class="st2 st5 st9">${expiration}</text>
            <text transform="matrix(1 0 0 1 479.3848 417.0097)"
              class="st2 st10 st11">VALID</text>
            <text transform="matrix(1 0 0 1 479.3848 435.6762)"
              class="st2 st10 st11">THRU</text>
            <polygon class="st2"
              points="554.5,421 540.4,414.2 540.4,427.9" />
          </g>
          <g id="cchip">
            <g>
              <path class="st2"
                d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                  c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z" />
            </g>
            <g>
              <g>
                <rect x="82" y="70" class="st12" width="1.5" height="60" />
              </g>
              <g>
                <rect x="167.4" y="70" class="st12" width="1.5" height="60" />
              </g>
              <g>
                <path class="st12"
                  d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                      c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                      C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                      c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                      c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z" />
              </g>
              <g>
                <rect x="82.8" y="82.1" class="st12" width="25.8"
                  height="1.5" />
              </g>
              <g>
                <rect x="82.8" y="117.9" class="st12" width="26.1"
                  height="1.5" />
              </g>
              <g>
                <rect x="142.4" y="82.1" class="st12" width="25.8"
                  height="1.5" />
              </g>
              <g>
                <rect x="142" y="117.9" class="st12" width="26.2"
                  height="1.5" />
              </g>
            </g>
          </g>
        </g>
        <g id="Back">
        </g>
      `;
    cardFront.innerHTML = frontSvgHTML;
    const cardBack = (0, _redom.svg)("svg#cardfront", {
        "version": "1.1",
        "id": "cardback",
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "x": "0px",
        "y": "0px",
        "viewBox": "0 0 750 471",
        "style": "enable-background:new 0 0 750 471;",
        "xml:space": "preserve"
    });
    const backSvgHTML = `
      <g id="Front">
        <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
      </g>
      <g id="Back">
        <g id="Page-1_2_">
          <g id="amex_2_">
            <path id="Rectangle-1_2_" class="darkcolor ${color}dark" d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
              C0,17.9,17.9,0,40,0z" />
          </g>
        <rect y="61.6" class="st2" width="750" height="78" />
        <g>
          <path class="st3" d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z" />
          <rect x="42.9" y="198.6" class="st4" width="664.1"
            height="10.5" />
          <rect x="42.9" y="224.5" class="st4" width="664.1"
            height="10.5" />
          <path class="st5"
            d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z" />
        </g>
        <text transform="matrix(1 0 0 1 621.999 227.2734)" id="svgsecurity"
          class="st6 st7">${securityCode}</text>
        <g class="st8">
          <text transform="matrix(1 0 0 1 518.083 280.0879)"
            class="st9 st6 st10">security code</text>
        </g>
        <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5" />
        <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5" />
        <text transform="matrix(1 0 0 1 59.5073 228.6099)" id="svgnameback"
          class="st12 st13">${cardName}</text>
      </g>

    `;
    cardBack.innerHTML = backSvgHTML;
    const creditCardFront = (0, _redom.el)("div.front", [
        ccsingle,
        cardFront
    ]);
    const creditCardBack = (0, _redom.el)("div.back", cardBack);
    const creditCard = (0, _redom.el)("div.creditcard", [
        creditCardFront,
        creditCardBack
    ]);
    const container = (0, _redom.el)("div.container", creditCard);
    return {
        cardFront,
        cardBack,
        creditCardFront,
        creditCardBack,
        creditCard,
        container
    };
};

},{"redom":"gT5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gT5MM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "el", ()=>(0, _htmlJs.el));
parcelHelpers.export(exports, "h", ()=>(0, _htmlJs.h));
parcelHelpers.export(exports, "html", ()=>(0, _htmlJs.html));
parcelHelpers.export(exports, "list", ()=>(0, _listJs.list));
parcelHelpers.export(exports, "List", ()=>(0, _listJs.List));
parcelHelpers.export(exports, "listPool", ()=>(0, _listpoolJs.listPool));
parcelHelpers.export(exports, "ListPool", ()=>(0, _listpoolJs.ListPool));
parcelHelpers.export(exports, "mount", ()=>(0, _mountJs.mount));
parcelHelpers.export(exports, "unmount", ()=>(0, _unmountJs.unmount));
parcelHelpers.export(exports, "place", ()=>(0, _placeJs.place));
parcelHelpers.export(exports, "Place", ()=>(0, _placeJs.Place));
parcelHelpers.export(exports, "router", ()=>(0, _routerJs.router));
parcelHelpers.export(exports, "Router", ()=>(0, _routerJs.Router));
parcelHelpers.export(exports, "setAttr", ()=>(0, _setattrJs.setAttr));
parcelHelpers.export(exports, "setXlink", ()=>(0, _setattrJs.setXlink));
parcelHelpers.export(exports, "setData", ()=>(0, _setattrJs.setData));
parcelHelpers.export(exports, "setStyle", ()=>(0, _setstyleJs.setStyle));
parcelHelpers.export(exports, "setChildren", ()=>(0, _setchildrenJs.setChildren));
parcelHelpers.export(exports, "s", ()=>(0, _svgJs.s));
parcelHelpers.export(exports, "svg", ()=>(0, _svgJs.svg));
parcelHelpers.export(exports, "text", ()=>(0, _textJs.text));
parcelHelpers.export(exports, "viewFactory", ()=>(0, _viewFactoryJs.viewFactory));
var _htmlJs = require("./html.js");
var _listJs = require("./list.js");
var _listpoolJs = require("./listpool.js");
var _mountJs = require("./mount.js");
var _unmountJs = require("./unmount.js");
var _placeJs = require("./place.js");
var _routerJs = require("./router.js");
var _setattrJs = require("./setattr.js");
var _setstyleJs = require("./setstyle.js");
var _setchildrenJs = require("./setchildren.js");
var _svgJs = require("./svg.js");
var _textJs = require("./text.js");
var _viewFactoryJs = require("./view-factory.js");

},{"./html.js":"hjTCY","./list.js":false,"./listpool.js":false,"./mount.js":"5qTJ0","./unmount.js":false,"./place.js":false,"./router.js":false,"./setattr.js":false,"./setstyle.js":false,"./setchildren.js":false,"./svg.js":"6md9d","./text.js":false,"./view-factory.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjTCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "el", ()=>el);
parcelHelpers.export(exports, "h", ()=>h);
var _createElementJs = require("./create-element.js");
var _utilJs = require("./util.js");
function html(query, ...args) {
    let element;
    const type = typeof query;
    if (type === "string") element = (0, _createElementJs.createElement)(query);
    else if (type === "function") {
        const Query = query;
        element = new Query(...args);
    } else throw new Error("At least one argument required");
    (0, _utilJs.parseArgumentsInternal)((0, _utilJs.getEl)(element), args, true);
    return element;
}
const el = html;
const h = html;
html.extend = function extendHtml(...args) {
    return html.bind(this, ...args);
};

},{"./create-element.js":"7ApSd","./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ApSd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
function createElement(query, ns) {
    const { tag, id, className } = parse(query);
    const element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
    if (id) element.id = id;
    if (className) {
        if (ns) element.setAttribute("class", className);
        else element.className = className;
    }
    return element;
}
function parse(query) {
    const chunks = query.split(/([.#])/);
    let className = "";
    let id = "";
    for(let i = 1; i < chunks.length; i += 2)switch(chunks[i]){
        case ".":
            className += ` ${chunks[i + 1]}`;
            break;
        case "#":
            id = chunks[i + 1];
    }
    return {
        className: className.trim(),
        tag: chunks[0] || "div",
        id
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"84GoL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseArguments", ()=>parseArguments);
parcelHelpers.export(exports, "parseArgumentsInternal", ()=>parseArgumentsInternal);
parcelHelpers.export(exports, "ensureEl", ()=>ensureEl);
parcelHelpers.export(exports, "getEl", ()=>getEl);
parcelHelpers.export(exports, "isNode", ()=>isNode);
var _htmlJs = require("./html.js");
var _mountJs = require("./mount.js");
var _setattrJs = require("./setattr.js");
var _textJs = require("./text.js");
function parseArguments(element, args) {
    parseArgumentsInternal(element, args);
}
function parseArgumentsInternal(element, args, initial) {
    for (const arg of args){
        if (arg !== 0 && !arg) continue;
        const type = typeof arg;
        if (type === "function") arg(element);
        else if (type === "string" || type === "number") element.appendChild((0, _textJs.text)(arg));
        else if (isNode(getEl(arg))) (0, _mountJs.mount)(element, arg);
        else if (arg.length) parseArgumentsInternal(element, arg, initial);
        else if (type === "object") (0, _setattrJs.setAttrInternal)(element, arg, null, initial);
    }
}
function ensureEl(parent) {
    return typeof parent === "string" ? (0, _htmlJs.html)(parent) : getEl(parent);
}
function getEl(parent) {
    return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
}
function isNode(arg) {
    return arg && arg.nodeType;
}

},{"./html.js":"hjTCY","./mount.js":"5qTJ0","./setattr.js":"ljeoO","./text.js":"9AiUK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qTJ0":[function(require,module,exports) {
/* global Node, ShadowRoot */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mount", ()=>mount);
parcelHelpers.export(exports, "trigger", ()=>trigger);
var _utilJs = require("./util.js");
var _unmountJs = require("./unmount.js");
const hookNames = [
    "onmount",
    "onremount",
    "onunmount"
];
const shadowRootAvailable = typeof window !== "undefined" && "ShadowRoot" in window;
function mount(parent, child, before, replace) {
    const parentEl = (0, _utilJs.getEl)(parent);
    const childEl = (0, _utilJs.getEl)(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (child !== childEl) childEl.__redom_view = child;
    const wasMounted = childEl.__redom_mounted;
    const oldParent = childEl.parentNode;
    if (wasMounted && oldParent !== parentEl) (0, _unmountJs.doUnmount)(child, childEl, oldParent);
    if (before != null) {
        if (replace) {
            const beforeEl = (0, _utilJs.getEl)(before);
            if (beforeEl.__redom_mounted) trigger(beforeEl, "onunmount");
            parentEl.replaceChild(childEl, beforeEl);
        } else parentEl.insertBefore(childEl, (0, _utilJs.getEl)(before));
    } else parentEl.appendChild(childEl);
    doMount(child, childEl, parentEl, oldParent);
    return child;
}
function trigger(el, eventName) {
    if (eventName === "onmount" || eventName === "onremount") el.__redom_mounted = true;
    else if (eventName === "onunmount") el.__redom_mounted = false;
    const hooks = el.__redom_lifecycle;
    if (!hooks) return;
    const view = el.__redom_view;
    let hookCount = 0;
    view && view[eventName] && view[eventName]();
    for(const hook in hooks)if (hook) hookCount++;
    if (hookCount) {
        let traverse = el.firstChild;
        while(traverse){
            const next = traverse.nextSibling;
            trigger(traverse, eventName);
            traverse = next;
        }
    }
}
function doMount(child, childEl, parentEl, oldParent) {
    const hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
    const remount = parentEl === oldParent;
    let hooksFound = false;
    for (const hookName of hookNames){
        if (!remount) {
            if (child !== childEl) {
                if (hookName in child) hooks[hookName] = (hooks[hookName] || 0) + 1;
            }
        }
        if (hooks[hookName]) hooksFound = true;
    }
    if (!hooksFound) {
        childEl.__redom_lifecycle = {};
        return;
    }
    let traverse = parentEl;
    let triggered = false;
    if (remount || traverse && traverse.__redom_mounted) {
        trigger(childEl, remount ? "onremount" : "onmount");
        triggered = true;
    }
    while(traverse){
        const parent = traverse.parentNode;
        const parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});
        for(const hook in hooks)parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
        if (triggered) break;
        else {
            if (traverse.nodeType === Node.DOCUMENT_NODE || shadowRootAvailable && traverse instanceof ShadowRoot || parent && parent.__redom_mounted) {
                trigger(traverse, remount ? "onremount" : "onmount");
                triggered = true;
            }
            traverse = parent;
        }
    }
}

},{"./util.js":"84GoL","./unmount.js":"irGDu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irGDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unmount", ()=>unmount);
parcelHelpers.export(exports, "doUnmount", ()=>doUnmount);
var _utilJs = require("./util.js");
var _mountJs = require("./mount.js");
function unmount(parent, child) {
    const parentEl = (0, _utilJs.getEl)(parent);
    const childEl = (0, _utilJs.getEl)(child);
    if (child === childEl && childEl.__redom_view) // try to look up the view if not provided
    child = childEl.__redom_view;
    if (childEl.parentNode) {
        doUnmount(child, childEl, parentEl);
        parentEl.removeChild(childEl);
    }
    return child;
}
function doUnmount(child, childEl, parentEl) {
    const hooks = childEl.__redom_lifecycle;
    if (hooksAreEmpty(hooks)) {
        childEl.__redom_lifecycle = {};
        return;
    }
    let traverse = parentEl;
    if (childEl.__redom_mounted) (0, _mountJs.trigger)(childEl, "onunmount");
    while(traverse){
        const parentHooks = traverse.__redom_lifecycle || {};
        for(const hook in hooks)if (parentHooks[hook]) parentHooks[hook] -= hooks[hook];
        if (hooksAreEmpty(parentHooks)) traverse.__redom_lifecycle = null;
        traverse = traverse.parentNode;
    }
}
function hooksAreEmpty(hooks) {
    if (hooks == null) return true;
    for(const key in hooks){
        if (hooks[key]) return false;
    }
    return true;
}

},{"./util.js":"84GoL","./mount.js":"5qTJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljeoO":[function(require,module,exports) {
/* global SVGElement */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAttr", ()=>setAttr);
parcelHelpers.export(exports, "setAttrInternal", ()=>setAttrInternal);
parcelHelpers.export(exports, "setXlink", ()=>setXlink);
parcelHelpers.export(exports, "setData", ()=>setData);
var _setstyleJs = require("./setstyle.js");
var _utilJs = require("./util.js");
const xlinkns = "http://www.w3.org/1999/xlink";
function setAttr(view, arg1, arg2) {
    setAttrInternal(view, arg1, arg2);
}
function setAttrInternal(view, arg1, arg2, initial) {
    const el = (0, _utilJs.getEl)(view);
    const isObj = typeof arg1 === "object";
    if (isObj) for(const key in arg1)setAttrInternal(el, key, arg1[key], initial);
    else {
        const isSVG = el instanceof SVGElement;
        const isFunc = typeof arg2 === "function";
        if (arg1 === "style" && typeof arg2 === "object") (0, _setstyleJs.setStyle)(el, arg2);
        else if (isSVG && isFunc) el[arg1] = arg2;
        else if (arg1 === "dataset") setData(el, arg2);
        else if (!isSVG && (arg1 in el || isFunc) && arg1 !== "list") el[arg1] = arg2;
        else {
            if (isSVG && arg1 === "xlink") {
                setXlink(el, arg2);
                return;
            }
            if (initial && arg1 === "class") arg2 = el.className + " " + arg2;
            if (arg2 == null) el.removeAttribute(arg1);
            else el.setAttribute(arg1, arg2);
        }
    }
}
function setXlink(el, arg1, arg2) {
    if (typeof arg1 === "object") for(const key in arg1)setXlink(el, key, arg1[key]);
    else if (arg2 != null) el.setAttributeNS(xlinkns, arg1, arg2);
    else el.removeAttributeNS(xlinkns, arg1, arg2);
}
function setData(el, arg1, arg2) {
    if (typeof arg1 === "object") for(const key in arg1)setData(el, key, arg1[key]);
    else if (arg2 != null) el.dataset[arg1] = arg2;
    else delete el.dataset[arg1];
}

},{"./setstyle.js":"5PSeC","./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5PSeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
var _utilJs = require("./util.js");
function setStyle(view, arg1, arg2) {
    const el = (0, _utilJs.getEl)(view);
    if (typeof arg1 === "object") for(const key in arg1)setStyleValue(el, key, arg1[key]);
    else setStyleValue(el, arg1, arg2);
}
function setStyleValue(el, key, value) {
    el.style[key] = value == null ? "" : value;
}

},{"./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9AiUK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "text", ()=>text);
function text(str) {
    return document.createTextNode(str != null ? str : "");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6md9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svg", ()=>svg);
parcelHelpers.export(exports, "s", ()=>s);
var _createElementJs = require("./create-element.js");
var _utilJs = require("./util.js");
const ns = "http://www.w3.org/2000/svg";
function svg(query, ...args) {
    let element;
    const type = typeof query;
    if (type === "string") element = (0, _createElementJs.createElement)(query, ns);
    else if (type === "function") {
        const Query = query;
        element = new Query(...args);
    } else throw new Error("At least one argument required");
    (0, _utilJs.parseArgumentsInternal)((0, _utilJs.getEl)(element), args, true);
    return element;
}
const s = svg;
svg.extend = function extendSvg(...args) {
    return svg.bind(this, ...args);
};
svg.ns = ns;

},{"./create-element.js":"7ApSd","./util.js":"84GoL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lfwrK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initDatepicker", ()=>initDatepicker);
var _airDatepicker = require("air-datepicker");
var _airDatepickerDefault = parcelHelpers.interopDefault(_airDatepicker);
var _airDatepickerCss = require("air-datepicker/air-datepicker.css");
const initDatepicker = (inputDate, cardDate)=>{
    new (0, _airDatepickerDefault.default)(inputDate, {
        view: "months",
        minView: "months",
        minDate: new Date(),
        startDate: new Date(),
        dateFormat: "MM/yy",
        multipleDatesSeparator: "/",
        onSelect: ({ formattedDate, datepicker })=>{
            inputDate.value = formattedDate;
            cardDate.textContent = formattedDate;
            datepicker.hide();
        }
    });
};

},{"air-datepicker":"grWkP","air-datepicker/air-datepicker.css":"aM9jX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grWkP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _airDatepicker = require("./air-datepicker");
var _airDatepickerDefault = parcelHelpers.interopDefault(_airDatepicker);
exports.default = (0, _airDatepickerDefault.default);

},{"./air-datepicker":"9hsv2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hsv2":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function() {
        "use strict";
        var e = {
            d: function(t, i) {
                for(var s in i)e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: i[s]
                });
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
        }, t = {};
        e.d(t, {
            default: function() {
                return R;
            }
        });
        var i = {
            days: "days",
            months: "months",
            years: "years",
            day: "day",
            month: "month",
            year: "year",
            eventChangeViewDate: "changeViewDate",
            eventChangeCurrentView: "changeCurrentView",
            eventChangeFocusDate: "changeFocusDate",
            eventChangeSelectedDate: "changeSelectedDate",
            eventChangeTime: "changeTime",
            eventChangeLastSelectedDate: "changeLastSelectedDate",
            actionSelectDate: "selectDate",
            actionUnselectDate: "unselectDate",
            cssClassWeekend: "-weekend-"
        }, s = {
            classes: "",
            inline: !1,
            locale: {
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
                dateFormat: "dd.MM.yyyy",
                timeFormat: "HH:mm",
                firstDay: 1
            },
            startDate: new Date,
            firstDay: "",
            weekends: [
                6,
                0
            ],
            dateFormat: "",
            altField: "",
            altFieldDateFormat: "T",
            toggleSelected: !0,
            keyboardNav: !0,
            selectedDates: !1,
            container: "",
            isMobile: !1,
            visible: !1,
            position: "bottom left",
            offset: 12,
            view: i.days,
            minView: i.days,
            showOtherMonths: !0,
            selectOtherMonths: !0,
            moveToOtherMonthsOnSelect: !0,
            showOtherYears: !0,
            selectOtherYears: !0,
            moveToOtherYearsOnSelect: !0,
            minDate: "",
            maxDate: "",
            disableNavWhenOutOfRange: !0,
            multipleDates: !1,
            multipleDatesSeparator: ", ",
            range: !1,
            dynamicRange: !0,
            buttons: !1,
            monthsField: "monthsShort",
            showEvent: "focus",
            autoClose: !1,
            fixedHeight: !1,
            prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
            nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
            navTitles: {
                days: "MMMM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2"
            },
            timepicker: !1,
            onlyTimepicker: !1,
            dateTimeSeparator: " ",
            timeFormat: "",
            minHours: 0,
            maxHours: 24,
            minMinutes: 0,
            maxMinutes: 59,
            hoursStep: 1,
            minutesStep: 1,
            onSelect: !1,
            onChangeViewDate: !1,
            onChangeView: !1,
            onRenderCell: !1,
            onShow: !1,
            onHide: !1,
            onClickDayName: !1
        };
        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
            return "string" == typeof e ? t.querySelector(e) : e;
        }
        function n() {
            let { tagName: e = "div", className: t = "", innerHtml: i = "", id: s = "", attrs: a = {} } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = document.createElement(e);
            return t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), a && r(n, a), n;
        }
        function r(e, t) {
            for (let [i, s] of Object.entries(t))void 0 !== s && e.setAttribute(i, s);
            return e;
        }
        function o(e) {
            return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
        }
        function h(e) {
            let t = e.getHours(), { hours: i, dayPeriod: s } = l(t);
            return {
                year: e.getFullYear(),
                month: e.getMonth(),
                fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                date: e.getDate(),
                fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                day: e.getDay(),
                hours: t,
                fullHours: d(t),
                hours12: i,
                dayPeriod: s,
                fullHours12: d(i),
                minutes: e.getMinutes(),
                fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
            };
        }
        function l(e) {
            return {
                dayPeriod: e > 11 ? "pm" : "am",
                hours: e % 12 == 0 ? 12 : e % 12
            };
        }
        function d(e) {
            return e < 10 ? "0" + e : e;
        }
        function c(e) {
            let t = 10 * Math.floor(e.getFullYear() / 10);
            return [
                t,
                t + 9
            ];
        }
        function u() {
            let e = [];
            for(var t = arguments.length, i = new Array(t), s = 0; s < t; s++)i[s] = arguments[s];
            return i.forEach((t)=>{
                if ("object" == typeof t) for(let i in t)t[i] && e.push(i);
                else t && e.push(t);
            }), e.join(" ");
        }
        function p(e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
            if (!e || !t) return !1;
            let a = h(e), n = h(t);
            return ({
                [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
                [i.months]: a.month === n.month && a.year === n.year,
                [i.years]: a.year === n.year
            })[s];
        }
        function m(e, t, i) {
            let s = g(e, !1).getTime(), a = g(t, !1).getTime();
            return i ? s >= a : s > a;
        }
        function v(e, t) {
            return !m(e, t, !0);
        }
        function g(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = new Date(e.getTime());
            return "boolean" != typeof t || t || function(e) {
                e.setHours(0, 0, 0, 0);
            }(i), i;
        }
        function D(e, t, i) {
            e.length ? e.forEach((e)=>{
                e.addEventListener(t, i);
            }) : e.addEventListener(t, i);
        }
        function y(e, t) {
            return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
        }
        function f(e, t, i) {
            return e > i ? i : e < t ? t : e;
        }
        function w(e) {
            for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
            return i.filter((e)=>e).forEach((t)=>{
                for (let [i, s] of Object.entries(t))if (void 0 !== s && "[object Object]" === s.toString()) {
                    let t = void 0 !== e[i] ? e[i].toString() : void 0, a = s.toString(), n = Array.isArray(s) ? [] : {};
                    e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
                } else e[i] = s;
            }), e;
        }
        function b(e) {
            let t = e;
            return e instanceof Date || ("string" == typeof e && /^\d{4}-\d{2}-\d{2}$/.test(e) && (e += "T00:00:00"), t = new Date(e)), isNaN(t.getTime()) && (console.log(`Unable to convert value "${e}" to Date object`), t = !1), t;
        }
        function k(e) {
            let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
        }
        function $(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class C {
            constructor(){
                let { type: e, date: t, dp: i, opts: s, body: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                $(this, "focus", ()=>{
                    this.$cell.classList.add("-focus-"), this.focused = !0;
                }), $(this, "removeFocus", ()=>{
                    this.$cell.classList.remove("-focus-"), this.focused = !1;
                }), $(this, "select", ()=>{
                    this.$cell.classList.add("-selected-"), this.selected = !0;
                }), $(this, "removeSelect", ()=>{
                    this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
                }), $(this, "onChangeSelectedDate", ()=>{
                    this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
                }), $(this, "onChangeFocusDate", (e)=>{
                    if (!e) return void (this.focused && this.removeFocus());
                    let t = p(e, this.date, this.type);
                    t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
                }), $(this, "render", ()=>(this.$cell.innerHTML = this._getHtml(), this._handleClasses(), this.$cell)), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
            }
            init() {
                var e;
                let { onRenderCell: t } = this.opts;
                t && (this.customData = t({
                    date: this.date,
                    cellType: this.singleType,
                    datepicker: this.dp
                })), this._createElement(), this._bindDatepickerEvents(), null !== (e = this.customData) && void 0 !== e && e.disabled && this.dp.disableDate(this.date);
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
                this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
                var e;
                let { year: t, month: i, date: s } = h(this.date), a = (null === (e = this.customData) || void 0 === e ? void 0 : e.attrs) || {};
                this.$cell = n({
                    attrs: {
                        "data-year": t,
                        "data-month": i,
                        "data-date": s,
                        ...a
                    }
                }), this.$cell.adpCell = this;
            }
            _getClassName() {
                var e;
                let t = new Date, { selectOtherMonths: s, selectOtherYears: a } = this.opts, { minDate: n, maxDate: r, isDateDisabled: o } = this.dp, { day: l } = h(this.date), d = this._isOutOfMinMaxRange(), c = o(this.date), m = u("air-datepicker-cell", `-${this.singleType}-`, {
                    "-current-": p(t, this.date, this.type),
                    "-min-date-": n && p(n, this.date, this.type),
                    "-max-date-": r && p(r, this.date, this.type)
                }), v = "";
                switch(this.type){
                    case i.days:
                        v = u({
                            "-weekend-": this.dp.isWeekend(l),
                            "-other-month-": this.isOtherMonth,
                            "-disabled-": this.isOtherMonth && !s || d || c
                        });
                        break;
                    case i.months:
                        v = u({
                            "-disabled-": d
                        });
                        break;
                    case i.years:
                        v = u({
                            "-other-decade-": this.isOtherDecade,
                            "-disabled-": d || this.isOtherDecade && !a
                        });
                }
                return u(m, v, null === (e = this.customData) || void 0 === e ? void 0 : e.classes).split(" ");
            }
            _getHtml() {
                var e;
                let { year: t, month: s, date: a } = h(this.date), { showOtherMonths: n, showOtherYears: r } = this.opts;
                if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                switch(this.type){
                    case i.days:
                        return !n && this.isOtherMonth ? "" : a;
                    case i.months:
                        return this.dp.locale[this.opts.monthsField][s];
                    case i.years:
                        return !r && this.isOtherDecade ? "" : t;
                }
            }
            _isOutOfMinMaxRange() {
                let { minDate: e, maxDate: t } = this.dp, { type: s, date: a } = this, { month: n, year: r, date: o } = h(a), l = s === i.days, d = s === i.years, c = !!e && new Date(r, d ? e.getMonth() : n, l ? o : e.getDate()), u = !!t && new Date(r, d ? t.getMonth() : n, l ? o : t.getDate());
                return e && t ? v(c, e) || m(u, t) : e ? v(c, e) : t ? m(u, t) : void 0;
            }
            destroy() {
                this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
                const { selectedDates: e, focusDate: t, rangeDateTo: i, rangeDateFrom: s } = this.dp, a = e.length;
                if (!a) return;
                let n = s, r = i;
                if (1 === a && t) {
                    const i = m(t, e[0]);
                    n = i ? e[0] : t, r = i ? t : e[0];
                }
                let o = u({
                    "-in-range-": n && r && (h = this.date, l = n, d = r, m(h, l) && v(h, d)),
                    "-range-from-": n && p(this.date, n, this.type),
                    "-range-to-": r && p(this.date, r, this.type)
                });
                var h, l, d;
                this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), o && this.$cell.classList.add(...o.split(" "));
            }
            _handleSelectedStatus() {
                let e = this.dp._checkIfDateIsSelected(this.date, this.type);
                e ? this.select() : !e && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
                p(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            _handleClasses() {
                this.$cell.setAttribute("class", ""), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), this.dp.opts.range && this._handleRangeStatus()), this.$cell.classList.add(...this._getClassName());
            }
            get isDisabled() {
                return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
                return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
                return this.dp.isOtherDecade(this.date);
            }
        }
        function _(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        let M = {
            [i.days]: `<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,
            [i.months]: `<div class="air-datepicker-body--cells -${i.months}-"></div>`,
            [i.years]: `<div class="air-datepicker-body--cells -${i.years}-"></div>`
        };
        const S = ".air-datepicker-cell";
        class T {
            constructor(e){
                let { dp: t, type: s, opts: a } = e;
                _(this, "handleClick", (e)=>{
                    let t = e.target.closest(S).adpCell;
                    if (t.isDisabled) return;
                    if (!this.dp.isMinViewReached) return void this.dp.down();
                    let i = this.dp._checkIfDateIsSelected(t.date, t.type);
                    i ? this.dp._handleAlreadySelectedDates(i, t.date) : this.dp.selectDate(t.date);
                }), _(this, "handleDayNameClick", (e)=>{
                    let t = e.target.getAttribute("data-day-index");
                    this.opts.onClickDayName({
                        dayIndex: Number(t),
                        datepicker: this.dp
                    });
                }), _(this, "onChangeCurrentView", (e)=>{
                    e !== this.type ? this.hide() : (this.show(), this.render());
                }), _(this, "onMouseOverCell", (e)=>{
                    let t = y(e.target, S);
                    this.dp.setFocusDate(!!t && t.adpCell.date);
                }), _(this, "onMouseOutCell", ()=>{
                    this.dp.setFocusDate(!1);
                }), _(this, "onClickBody", (e)=>{
                    let { onClickDayName: t } = this.opts, i = e.target;
                    i.closest(S) && this.handleClick(e), t && i.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e);
                }), _(this, "onMouseDown", (e)=>{
                    this.pressed = !0;
                    let t = y(e.target, S), i = t && t.adpCell;
                    p(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), p(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
                }), _(this, "onMouseMove", (e)=>{
                    if (!this.pressed || !this.dp.isMinViewReached) return;
                    e.preventDefault();
                    let t = y(e.target, S), i = t && t.adpCell, { selectedDates: s, rangeDateTo: a, rangeDateFrom: n } = this.dp;
                    if (!i || i.isDisabled) return;
                    let { date: r } = i;
                    if (2 === s.length) {
                        if (this.rangeFromFocused && !m(r, a)) {
                            let { hours: e, minutes: t } = h(n);
                            r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
                        }
                        if (this.rangeToFocused && !v(r, n)) {
                            let { hours: e, minutes: t } = h(a);
                            r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
                        }
                    }
                }), _(this, "onMouseUp", ()=>{
                    this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
                }), _(this, "onChangeViewDate", (e, t)=>{
                    if (!this.isVisible) return;
                    let s = c(e), a = c(t);
                    switch(this.dp.currentView){
                        case i.days:
                            if (p(e, t, i.months)) return;
                            break;
                        case i.months:
                            if (p(e, t, i.years)) return;
                            break;
                        case i.years:
                            if (s[0] === a[0] && s[1] === a[1]) return;
                    }
                    this.render();
                }), _(this, "render", ()=>{
                    this.destroyCells(), this._generateCells(), this.cells.forEach((e)=>{
                        this.$cells.appendChild(e.render());
                    });
                }), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", this.pressed = !1, this.isVisible = !0, this.init();
            }
            init() {
                this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _bindEvents() {
                let { range: e, dynamicRange: t } = this.opts;
                D(this.$el, "mouseover", this.onMouseOverCell), D(this.$el, "mouseout", this.onMouseOutCell), D(this.$el, "click", this.onClickBody), e && t && (D(this.$el, "mousedown", this.onMouseDown), D(this.$el, "mousemove", this.onMouseMove), D(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
                this.$el = n({
                    className: `air-datepicker-body -${this.type}-`,
                    innerHtml: M[this.type]
                }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
            }
            _getDayNamesHtml() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", s = this.dp.isWeekend, { onClickDayName: a } = this.opts, n = e, r = 0;
                for(; r < 7;){
                    let e = n % 7;
                    t += `<div class="${u("air-datepicker-body--day-name", {
                        [i.cssClassWeekend]: s(e),
                        "-clickable-": !!a
                    })}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`, r++, n++;
                }
                return t;
            }
            renderDayNames() {
                this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCell(e) {
                let { type: t, dp: i, opts: s } = this;
                return new C({
                    type: t,
                    dp: i,
                    opts: s,
                    date: e,
                    body: this
                });
            }
            _generateCells() {
                T.getDatesFunction(this.type)(this.dp, (e)=>{
                    this.cells.push(this._generateCell(e));
                });
            }
            show() {
                this.isVisible = !0, this.$el.classList.remove("-hidden-");
            }
            hide() {
                this.isVisible = !1, this.$el.classList.add("-hidden-");
            }
            destroyCells() {
                this.cells.forEach((e)=>e.destroy()), this.cells = [], this.$cells.innerHTML = "";
            }
            destroy() {
                this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
            }
            static getDaysDates(e, t) {
                let { viewDate: i, opts: { fixedHeight: s }, locale: { firstDay: a } } = e, n = o(i), { year: r, month: l } = h(i), d = new Date(r, l, 1), c = new Date(r, l, n), u = d.getDay() - a, p = 6 - c.getDay() + a;
                u = u < 0 ? u + 7 : u, p = p > 6 ? p - 7 : p;
                let m = function(e, t) {
                    let { year: i, month: s, date: a } = h(e);
                    return new Date(i, s, a - t);
                }(d, u), v = n + u + p, g = m.getDate(), { year: D, month: y } = h(m), f = 0;
                s && (v = 42);
                const w = [];
                for(; f < v;){
                    let e = new Date(D, y, g + f);
                    t && t(e), w.push(e), f++;
                }
                return w;
            }
            static getMonthsDates(e, t) {
                let { year: i } = e.parsedViewDate, s = 0, a = [];
                for(; s < 12;){
                    const e = new Date(i, s);
                    a.push(e), t && t(e), s++;
                }
                return a;
            }
            static getYearsDates(e, t) {
                let i = c(e.viewDate), s = i[0] - 1, a = i[1] + 1, n = s, r = [];
                for(; n <= a;){
                    const e = new Date(n, 0);
                    r.push(e), t && t(e), n++;
                }
                return r;
            }
            static getDatesFunction() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                return ({
                    [i.days]: T.getDaysDates,
                    [i.months]: T.getMonthsDates,
                    [i.years]: T.getYearsDates
                })[e];
            }
        }
        function F(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class V {
            constructor(e){
                let { dp: t, opts: i } = e;
                F(this, "onClickNav", (e)=>{
                    let t = y(e.target, ".air-datepicker-nav--action");
                    if (!t) return;
                    let i = t.dataset.action;
                    this.dp[i]();
                }), F(this, "onChangeViewDate", ()=>{
                    this.render(), this._resetNavStatus(), this.handleNavStatus();
                }), F(this, "onChangeCurrentView", ()=>{
                    this.render(), this._resetNavStatus(), this.handleNavStatus();
                }), F(this, "onClickNavTitle", ()=>{
                    this.dp.isFinalView || this.dp.up();
                }), F(this, "update", ()=>{
                    let { prevHtml: e, nextHtml: t } = this.opts;
                    this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), this.handleNavStatus();
                }), F(this, "renderDelay", ()=>{
                    setTimeout(this.render);
                }), F(this, "render", ()=>{
                    this.$title.innerHTML = this._getTitle(), function(e, t) {
                        for(let i in t)t[i] ? e.classList.add(i) : e.classList.remove(i);
                    }(this.$title, {
                        "-disabled-": this.dp.isFinalView
                    });
                }), this.dp = t, this.opts = i, this.init();
            }
            init() {
                this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _defineDOM() {
                this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), this.$next = a('[data-action="next"]', this.$el);
            }
            _bindEvents() {
                this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
                this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
            }
            destroy() {
                this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
            }
            _createElement() {
                this.$el = n({
                    tagName: "nav",
                    className: "air-datepicker-nav"
                });
            }
            _getTitle() {
                let { dp: e, opts: t } = this, i = t.navTitles[e.currentView];
                return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
            }
            handleNavStatus() {
                let { disableNavWhenOutOfRange: e } = this.opts, { minDate: t, maxDate: s } = this.dp;
                if (!t && !s || !e) return;
                let { year: a, month: n } = this.dp.parsedViewDate, r = !!t && h(t), o = !!s && h(s);
                switch(this.dp.currentView){
                    case i.days:
                        t && r.month >= n && r.year >= a && this._disableNav("prev"), s && o.month <= n && o.year <= a && this._disableNav("next");
                        break;
                    case i.months:
                        t && r.year >= a && this._disableNav("prev"), s && o.year <= a && this._disableNav("next");
                        break;
                    case i.years:
                        {
                            let e = c(this.dp.viewDate);
                            t && r.year >= e[0] && this._disableNav("prev"), s && o.year <= e[1] && this._disableNav("next");
                            break;
                        }
                }
            }
            _disableNav(e) {
                a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
            }
            _resetNavStatus() {
                !function(e) {
                    for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
                    e.length ? e.forEach((e)=>{
                        e.classList.remove(...i);
                    }) : e.classList.remove(...i);
                }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
            }
            _buildBaseHtml() {
                let { prevHtml: e, nextHtml: t } = this.opts;
                this.$el.innerHTML = `<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;
            }
            get isNavIsFunction() {
                let { navTitles: e } = this.opts;
                return Object.keys(e).find((t)=>"function" == typeof e[t]);
            }
        }
        var x = {
            today: {
                content: (e)=>e.locale.today,
                onClick: (e)=>e.setViewDate(new Date)
            },
            clear: {
                content: (e)=>e.locale.clear,
                onClick: (e)=>e.clear()
            }
        };
        class H {
            constructor(e){
                let { dp: t, opts: i } = e;
                this.dp = t, this.opts = i, this.init();
            }
            init() {
                this.createElement(), this.render();
            }
            createElement() {
                this.$el = n({
                    className: "air-datepicker-buttons"
                });
            }
            destroy() {
                this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
                return this.$el.innerHTML = "", this;
            }
            generateButtons() {
                let { buttons: e } = this.opts;
                Array.isArray(e) || (e = [
                    e
                ]), e.forEach((e)=>{
                    let t = e;
                    "string" == typeof e && x[e] && (t = x[e]);
                    let i = this.createButton(t);
                    t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
                });
            }
            attachEventToButton(e, t) {
                e.addEventListener("click", ()=>{
                    t(this.dp);
                });
            }
            createButton(e) {
                let { content: t, className: i, tagName: s = "button", attrs: a = {} } = e;
                return n({
                    tagName: s,
                    innerHtml: `<span tabindex='-1'>${"function" == typeof t ? t(this.dp) : t}</span>`,
                    className: u("air-datepicker-button", i),
                    attrs: a
                });
            }
            render() {
                this.generateButtons();
            }
        }
        function E(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class L {
            constructor(){
                let { opts: e, dp: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                E(this, "toggleTimepickerIsActive", (e)=>{
                    this.dp.timepickerIsActive = e;
                }), E(this, "onChangeSelectedDate", (e)=>{
                    let { date: t, updateTime: i = !1 } = e;
                    t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
                }), E(this, "onChangeLastSelectedDate", (e)=>{
                    e && (this.setTime(e), this.render());
                }), E(this, "onChangeInputRange", (e)=>{
                    let t = e.target;
                    this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
                        hours: this.hours,
                        minutes: this.minutes
                    });
                }), E(this, "onMouseEnterLeave", (e)=>{
                    let t = e.target.getAttribute("name"), i = this.$minutesText;
                    "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
                }), E(this, "onFocus", ()=>{
                    this.toggleTimepickerIsActive(!0);
                }), E(this, "onBlur", ()=>{
                    this.toggleTimepickerIsActive(!1);
                }), this.opts = e, this.dp = t;
                let { timeFormat: s } = this.dp.locale;
                s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
            }
            init() {
                this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
            }
            bindDatepickerEvents() {
                this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
            }
            bindDOMEvents() {
                let e = "input";
                navigator.userAgent.match(/trident/gi) && (e = "change"), D(this.$ranges, e, this.onChangeInputRange), D(this.$ranges, "mouseenter", this.onMouseEnterLeave), D(this.$ranges, "mouseleave", this.onMouseEnterLeave), D(this.$ranges, "focus", this.onFocus), D(this.$ranges, "mousedown", this.onFocus), D(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
                this.$el = n({
                    className: u("air-datepicker-time", {
                        "-am-pm-": this.dp.ampm
                    })
                });
            }
            destroy() {
                this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
                let { ampm: e, hours: t, displayHours: i, minutes: s, minHours: a, minMinutes: n, maxHours: r, maxMinutes: o, dayPeriod: h, opts: { hoursStep: l, minutesStep: c } } = this;
                this.$el.innerHTML = `<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   ` + (e ? `<span class='air-datepicker-time--current-ampm'>${h}</span>` : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + `      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">` + `      <input type="range" name="minutes" value="${s}" min="${n}" max="${o}" step="${c}"/>   </div></div>`;
            }
            defineDOM() {
                let e = (e)=>a(e, this.$el);
                this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
            }
            setTime(e) {
                this.setMinMaxTime(e), this.setCurrentTime(e);
            }
            addTimeToDate(e) {
                e && (e.setHours(this.hours), e.setMinutes(this.minutes));
            }
            setMinMaxTime(e) {
                if (this.setMinMaxTimeFromOptions(), e) {
                    let { minDate: t, maxDate: i } = this.dp;
                    t && p(e, t) && this.setMinTimeFromMinDate(t), i && p(e, i) && this.setMaxTimeFromMaxDate(i);
                }
            }
            setCurrentTime(e) {
                let { hours: t, minutes: i } = e ? h(e) : this;
                this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
            }
            setMinMaxTimeFromOptions() {
                let { minHours: e, minMinutes: t, maxHours: i, maxMinutes: s } = this.opts;
                this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), this.maxMinutes = f(s, 0, 59);
            }
            setMinTimeFromMinDate(e) {
                let { lastSelectedDate: t } = this.dp;
                this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
            }
            setMaxTimeFromMaxDate(e) {
                let { lastSelectedDate: t } = this.dp;
                this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
            }
            updateSliders() {
                r(this.$hours, {
                    min: this.minHours,
                    max: this.maxHours
                }).value = this.hours, r(this.$minutes, {
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).value = this.minutes;
            }
            updateText() {
                this.$hoursText.innerHTML = d(this.displayHours), this.$minutesText.innerHTML = d(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e) {
                this._hours = e;
                let { hours: t, dayPeriod: i } = l(e);
                this.displayHours = this.ampm ? t : e, this.dayPeriod = i;
            }
            get hours() {
                return this._hours;
            }
            render() {
                this.updateSliders(), this.updateText();
            }
        }
        function O(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        class A {
            constructor(e){
                let { dp: t, opts: i } = e;
                O(this, "pressedKeys", new Set), O(this, "hotKeys", new Map([
                    [
                        [
                            [
                                "Control",
                                "ArrowRight"
                            ],
                            [
                                "Control",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.month++
                    ],
                    [
                        [
                            [
                                "Control",
                                "ArrowLeft"
                            ],
                            [
                                "Control",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.month--
                    ],
                    [
                        [
                            [
                                "Shift",
                                "ArrowRight"
                            ],
                            [
                                "Shift",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.year++
                    ],
                    [
                        [
                            [
                                "Shift",
                                "ArrowLeft"
                            ],
                            [
                                "Shift",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.year--
                    ],
                    [
                        [
                            [
                                "Alt",
                                "ArrowRight"
                            ],
                            [
                                "Alt",
                                "ArrowUp"
                            ]
                        ],
                        (e)=>e.year += 10
                    ],
                    [
                        [
                            [
                                "Alt",
                                "ArrowLeft"
                            ],
                            [
                                "Alt",
                                "ArrowDown"
                            ]
                        ],
                        (e)=>e.year -= 10
                    ],
                    [
                        [
                            "Control",
                            "Shift",
                            "ArrowUp"
                        ],
                        (e, t)=>t.up()
                    ]
                ])), O(this, "handleHotKey", (e)=>{
                    let t = this.hotKeys.get(e), i = h(this.getInitialFocusDate());
                    t(i, this.dp);
                    let { year: s, month: a, date: n } = i, r = o(new Date(s, a));
                    r < n && (n = r);
                    let l = this.dp.getClampedDate(new Date(s, a, n));
                    this.dp.setFocusDate(l, {
                        viewDateTransition: !0
                    });
                }), O(this, "isHotKeyPressed", ()=>{
                    let e = !1, t = this.pressedKeys.size, i = (e)=>this.pressedKeys.has(e);
                    for (let [s] of this.hotKeys){
                        if (e) break;
                        if (Array.isArray(s[0])) s.forEach((a)=>{
                            e || t !== a.length || (e = a.every(i) && s);
                        });
                        else {
                            if (t !== s.length) continue;
                            e = s.every(i) && s;
                        }
                    }
                    return e;
                }), O(this, "isArrow", (e)=>e >= 37 && e <= 40), O(this, "onKeyDown", (e)=>{
                    let { key: t, which: i } = e, { dp: s, dp: { focusDate: a }, opts: n } = this;
                    this.registerKey(t);
                    let r = this.isHotKeyPressed();
                    if (r) return e.preventDefault(), void this.handleHotKey(r);
                    if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
                    if ("Enter" === t) {
                        if (s.currentView !== n.minView) return void s.down();
                        if (a) {
                            let e = s._checkIfDateIsSelected(a);
                            return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
                        }
                    }
                    "Escape" === t && this.dp.hide();
                }), O(this, "onKeyUp", (e)=>{
                    this.removeKey(e.key);
                }), this.dp = t, this.opts = i, this.init();
            }
            init() {
                this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
                let { $el: e } = this.dp;
                e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
                let { $el: e } = this.dp;
                e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
            }
            getInitialFocusDate() {
                let { focusDate: e, currentView: t, selectedDates: s, parsedViewDate: { year: a, month: n } } = this.dp, r = e || s[s.length - 1];
                if (!r) switch(t){
                    case i.days:
                        r = new Date(a, n, (new Date).getDate());
                        break;
                    case i.months:
                        r = new Date(a, n, 1);
                        break;
                    case i.years:
                        r = new Date(a, 0, 1);
                }
                return r;
            }
            focusNextCell(e) {
                let t = this.getInitialFocusDate(), { currentView: s } = this.dp, { days: a, months: n, years: r } = i, o = h(t), l = o.year, d = o.month, c = o.date;
                switch(e){
                    case "ArrowLeft":
                        s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                        break;
                    case "ArrowUp":
                        s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                        break;
                    case "ArrowRight":
                        s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                        break;
                    case "ArrowDown":
                        s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
                }
                let u = this.dp.getClampedDate(new Date(l, d, c));
                this.dp.setFocusDate(u, {
                    viewDateTransition: !0
                });
            }
            registerKey(e) {
                this.pressedKeys.add(e);
            }
            removeKey(e) {
                this.pressedKeys.delete(e);
            }
        }
        let N = {
            on (e, t) {
                this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [
                    t
                ];
            },
            off (e, t) {
                this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter((e)=>e !== t));
            },
            removeAllEvents () {
                this.__events = {};
            },
            trigger (e) {
                for(var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)i[s - 1] = arguments[s];
                this.__events && this.__events[e] && this.__events[e].forEach((e)=>{
                    e(...i);
                });
            }
        };
        function I(e, t, i) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var s = i.call(e, "string");
                        if ("object" != typeof s) return s;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == typeof t ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        let P = "", j = "", B = !1;
        class R {
            static buildGlobalContainer(e) {
                B = !0, P = n({
                    className: e,
                    id: e
                }), a("body").appendChild(P);
            }
            constructor(e, t){
                var r = this;
                if (I(this, "viewIndexes", [
                    i.days,
                    i.months,
                    i.years
                ]), I(this, "next", ()=>{
                    let { year: e, month: t } = this.parsedViewDate;
                    switch(this.currentView){
                        case i.days:
                            this.setViewDate(new Date(e, t + 1, 1));
                            break;
                        case i.months:
                            this.setViewDate(new Date(e + 1, t, 1));
                            break;
                        case i.years:
                            this.setViewDate(new Date(e + 10, 0, 1));
                    }
                }), I(this, "prev", ()=>{
                    let { year: e, month: t } = this.parsedViewDate;
                    switch(this.currentView){
                        case i.days:
                            this.setViewDate(new Date(e, t - 1, 1));
                            break;
                        case i.months:
                            this.setViewDate(new Date(e - 1, t, 1));
                            break;
                        case i.years:
                            this.setViewDate(new Date(e - 10, 0, 1));
                    }
                }), I(this, "_finishHide", ()=>{
                    this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
                }), I(this, "setPosition", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
                        $datepicker: r.$datepicker,
                        $target: r.$el,
                        $pointer: r.$pointer,
                        isViewChange: t,
                        done: r._finishHide
                    }));
                    let i, s, { isMobile: a } = r.opts, n = r.$el.getBoundingClientRect(), o = r.$el.getBoundingClientRect(), h = r.$datepicker.offsetParent, l = r.$el.offsetParent, d = r.$datepicker.getBoundingClientRect(), c = e.split(" "), u = window.scrollY, p = window.scrollX, m = r.opts.offset, v = c[0], g = c[1];
                    if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%";
                    else {
                        if (h === l && h !== document.body && (o = {
                            top: r.$el.offsetTop,
                            left: r.$el.offsetLeft,
                            width: n.width,
                            height: r.$el.offsetHeight
                        }, u = 0, p = 0), h !== l && h !== document.body) {
                            let e = h.getBoundingClientRect();
                            o = {
                                top: n.top - e.top,
                                left: n.left - e.left,
                                width: n.width,
                                height: n.height
                            }, u = 0, p = 0;
                        }
                        switch(v){
                            case "top":
                                i = o.top - d.height - m;
                                break;
                            case "right":
                                s = o.left + o.width + m;
                                break;
                            case "bottom":
                                i = o.top + o.height + m;
                                break;
                            case "left":
                                s = o.left - d.width - m;
                        }
                        switch(g){
                            case "top":
                                i = o.top;
                                break;
                            case "right":
                                s = o.left + o.width - d.width;
                                break;
                            case "bottom":
                                i = o.top + o.height - d.height;
                                break;
                            case "left":
                                s = o.left;
                                break;
                            case "center":
                                /left|right/.test(v) ? i = o.top + o.height / 2 - d.height / 2 : s = o.left + o.width / 2 - d.width / 2;
                        }
                        r.$datepicker.style.cssText = `left: ${s + p}px; top: ${i + u}px`;
                    }
                }), I(this, "_setInputValue", ()=>{
                    let { opts: e, $altField: t, locale: { dateFormat: i } } = this, { altFieldDateFormat: s, altField: a } = e;
                    a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
                }), I(this, "_getInputValue", (e)=>{
                    let { selectedDates: t, opts: i } = this, { multipleDates: s, multipleDatesSeparator: a } = i;
                    if (!t.length) return "";
                    let n = "function" == typeof e, r = n ? e(s ? t : t[0]) : t.map((t)=>this.formatDate(t, e));
                    return r = n ? r : r.join(a), r;
                }), I(this, "_checkIfDateIsSelected", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s = !1;
                    return r.selectedDates.some((i)=>{
                        let a = p(e, i, t);
                        return s = a && i, a;
                    }), s;
                }), I(this, "_scheduleCallAfterTransition", (e)=>{
                    this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = ()=>{
                        e && e(!0);
                    }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
                        once: !0
                    });
                }), I(this, "_cancelScheduledCall", ()=>{
                    this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
                }), I(this, "setViewDate", (e)=>{
                    if (!((e = b(e)) instanceof Date)) return;
                    if (p(e, this.viewDate)) return;
                    let t = this.viewDate;
                    this.viewDate = e;
                    let { onChangeViewDate: s } = this.opts;
                    if (s) {
                        let { month: e, year: t } = this.parsedViewDate;
                        s({
                            month: e,
                            year: t,
                            decade: this.curDecade
                        });
                    }
                    this.trigger(i.eventChangeViewDate, e, t);
                }), I(this, "setFocusDate", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.trigger(i.eventChangeFocusDate, e, t));
                }), I(this, "setCurrentView", function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r.viewIndexes.includes(e)) {
                        if (r.currentView = e, r.elIsInput && r.visible && r.setPosition(void 0, !0), r.trigger(i.eventChangeCurrentView, e), !r.views[e]) {
                            let t = r.views[e] = new T({
                                dp: r,
                                opts: r.opts,
                                type: e
                            });
                            r.shouldUpdateDOM && r.$content.appendChild(t.$el);
                        }
                        r.opts.onChangeView && !t.silent && r.opts.onChangeView(e);
                    }
                }), I(this, "_updateLastSelectedDate", (e)=>{
                    this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
                }), I(this, "destroy", ()=>{
                    let { showEvent: e, isMobile: t } = this.opts, i = this.$datepicker.parentNode;
                    i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, this.rangeDateTo = null;
                }), I(this, "update", function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = w({}, r.opts), { silent: a } = t;
                    w(r.opts, e);
                    let { timepicker: n, buttons: o, range: h, selectedDates: l, isMobile: d } = r.opts, c = r.visible || r.treatAsInline;
                    r._createMinMaxDates(), r._limitViewDateByMaxMinDates(), r._handleLocale(), l && (r.selectedDates = [], r.selectDate(l, {
                        silent: a
                    })), e.view && r.setCurrentView(e.view, {
                        silent: a
                    }), r._setInputValue(), s.range && !h ? (r.rangeDateTo = !1, r.rangeDateFrom = !1) : !s.range && h && r.selectedDates.length && (r.rangeDateFrom = r.selectedDates[0], r.rangeDateTo = r.selectedDates[1]), s.timepicker && !n ? (c && r.timepicker.destroy(), r.timepicker = !1, r.$timepicker.parentNode.removeChild(r.$timepicker)) : !s.timepicker && n && r._addTimepicker(), !s.buttons && o ? r._addButtons() : s.buttons && !o ? (r.buttons.destroy(), r.$buttons.parentNode.removeChild(r.$buttons)) : c && s.buttons && o && r.buttons.clearHtml().render(), !s.isMobile && d ? (r.treatAsInline || j || r._createMobileOverlay(), r._addMobileAttributes(), r.visible && r._showMobileOverlay()) : s.isMobile && !d && (r._removeMobileAttributes(), r.visible && (j.classList.remove("-active-"), "function" != typeof r.opts.position && r.setPosition())), c && (r.nav.update(), r.views[r.currentView].render(), r.currentView === i.days && r.views[r.currentView].renderDayNames());
                }), I(this, "disableDate", (e, t)=>{
                    (Array.isArray(e) ? e : [
                        e
                    ]).forEach((e)=>{
                        let i = b(e);
                        if (!i) return;
                        let s = t ? "delete" : "add";
                        this.disabledDates[s](this.formatDate(i, "yyyy-MM-dd"));
                        let a = this.getCell(i, this.currentViewSingular);
                        a && a.adpCell.render();
                    }, []);
                }), I(this, "enableDate", (e)=>{
                    this.disableDate(e, !0);
                }), I(this, "isDateDisabled", (e)=>{
                    let t = b(e);
                    return this.disabledDates.has(this.formatDate(t, "yyyy-MM-dd"));
                }), I(this, "isOtherMonth", (e)=>{
                    let { month: t } = h(e);
                    return t !== this.parsedViewDate.month;
                }), I(this, "isOtherYear", (e)=>{
                    let { year: t } = h(e);
                    return t !== this.parsedViewDate.year;
                }), I(this, "isOtherDecade", (e)=>{
                    let { year: t } = h(e), [i, s] = c(this.viewDate);
                    return t < i || t > s;
                }), I(this, "_onChangeSelectedDate", (e)=>{
                    let { silent: t } = e;
                    setTimeout(()=>{
                        this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
                    });
                }), I(this, "_onChangeFocusedDate", function(e) {
                    let { viewDateTransition: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e) return;
                    let i = !1;
                    t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e), r.opts.onFocus && r.opts.onFocus({
                        datepicker: r,
                        date: e
                    });
                }), I(this, "_onChangeTime", (e)=>{
                    let { hours: t, minutes: i } = e, s = new Date, { lastSelectedDate: a, opts: { onSelect: n } } = this, r = a;
                    a || (r = s);
                    let o = this.getCell(r, this.currentViewSingular), h = o && o.adpCell;
                    h && h.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), n && this._triggerOnSelect()) : this.selectDate(r));
                }), I(this, "_onFocus", (e)=>{
                    this.visible || this.show();
                }), I(this, "_onBlur", (e)=>{
                    this.inFocus || !this.visible || this.opts.isMobile || this.hide();
                }), I(this, "_onMouseDown", (e)=>{
                    this.inFocus = !0;
                }), I(this, "_onMouseUp", (e)=>{
                    this.inFocus = !1, this.$el.focus();
                }), I(this, "_onResize", ()=>{
                    this.visible && "function" != typeof this.opts.position && this.setPosition();
                }), I(this, "_onClickOverlay", ()=>{
                    this.visible && this.hide();
                }), I(this, "getViewDates", function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.days;
                    return T.getDatesFunction(e)(r);
                }), I(this, "isWeekend", (e)=>this.opts.weekends.includes(e)), I(this, "getClampedDate", (e)=>{
                    let { minDate: t, maxDate: i } = this, s = e;
                    return i && m(e, i) ? s = i : t && v(e, t) && (s = t), s;
                }), this.$el = a(e), !this.$el) return;
                this.$datepicker = n({
                    className: "air-datepicker"
                }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), this.$altField = a(this.opts.altField || !1);
                let { view: o, startDate: l } = this.opts;
                l || (this.opts.startDate = new Date), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, this.currentView = o, this.selectedDates = [], this.disabledDates = new Set, this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
            }
            init() {
                let { opts: e, treatAsInline: t, opts: { inline: i, isMobile: s, selectedDates: n, keyboardNav: r, onlyTimepicker: o } } = this, h = a("body");
                (!B || B && P && !h.contains(P)) && !i && this.elIsInput && !this.$customContainer && R.buildGlobalContainer(R.defaultGlobalContainerId), !s || j || t || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i || this._bindEvents(), r && !o && (this.keyboardNav = new A({
                    dp: this,
                    opts: e
                }))), n && this.selectDate(n, {
                    silent: !0
                }), this.opts.visible && !t && this.show(), s && !t && this.$el.setAttribute("readonly", !0), t && this._createComponents();
            }
            _createMobileOverlay() {
                j = n({
                    className: "air-datepicker-overlay"
                }), P.appendChild(j);
            }
            _createComponents() {
                let { opts: e, treatAsInline: t, opts: { inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: o, isMobile: h } } = this;
                this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), r && this.$datepicker.classList.add(...r.split(" ")), o && this.$datepicker.classList.add("-only-timepicker-"), h && !t && this._addMobileAttributes(), this.views[this.currentView] = new T({
                    dp: this,
                    type: this.currentView,
                    opts: e
                }), this.nav = new V({
                    dp: this,
                    opts: e
                }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
                for(let e in this.views)this.views[e].destroy();
                this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
                j.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", !0);
            }
            _removeMobileAttributes() {
                j.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
                let { minDate: e, maxDate: t } = this.opts;
                this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
            }
            _addTimepicker() {
                this.$timepicker = n({
                    className: "air-datepicker--time"
                }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                    dp: this,
                    opts: this.opts
                }), this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
                this.$buttons = n({
                    className: "air-datepicker--buttons"
                }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({
                    dp: this,
                    opts: this.opts
                }), this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
                this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
                let { inline: e } = this.opts;
                var t, i;
                this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), this.$nav = a(".air-datepicker--navigation", this.$datepicker);
            }
            _handleLocale() {
                let { locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r } = this.opts;
                var o;
                this.locale = (o = e, JSON.parse(JSON.stringify(o))), t && (this.locale.dateFormat = t), void 0 !== n && "" !== n && (this.locale.timeFormat = n);
                let { timeFormat: h } = this.locale;
                if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
                    let e = h ? r : "";
                    this.locale.dateFormat = [
                        this.locale.dateFormat,
                        h || ""
                    ].join(e);
                }
                a && "function" != typeof t && (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e) {
                if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                let t = (e = e.split(" "))[0], i = `air-datepicker -${t}-${e[1]}- -from-${t}-`;
                this.$datepicker.classList.add(...i.split(" "));
            }
            _bindEvents() {
                this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
                let { viewDate: e, minDate: t, maxDate: i } = this;
                i && m(e, i) && this.setViewDate(i), t && v(e, t) && this.setViewDate(t);
            }
            formatDate() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t = arguments.length > 1 ? arguments[1] : void 0;
                if (e = b(e), !(e instanceof Date)) return;
                let i = t, s = this.locale, a = h(e), n = a.dayPeriod, r = c(e), o = R.replacer, l = {
                    T: e.getTime(),
                    m: a.minutes,
                    mm: a.fullMinutes,
                    h: a.hours12,
                    hh: a.fullHours12,
                    H: a.hours,
                    HH: a.fullHours,
                    aa: n,
                    AA: n.toUpperCase(),
                    E: s.daysShort[a.day],
                    EEEE: s.days[a.day],
                    d: a.date,
                    dd: a.fullDate,
                    M: a.month + 1,
                    MM: a.fullMonth,
                    MMM: s.monthsShort[a.month],
                    MMMM: s.months[a.month],
                    yy: a.year.toString().slice(-2),
                    yyyy: a.year,
                    yyyy1: r[0],
                    yyyy2: r[1]
                };
                for (let [e, t] of Object.entries(l))i = o(i, k(e), t);
                return i;
            }
            down(e) {
                this._handleUpDownActions(e, "down");
            }
            up(e) {
                this._handleUpDownActions(e, "up");
            }
            selectDate(e) {
                let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { currentView: a, parsedViewDate: n, selectedDates: r } = this, { updateTime: o } = s, { moveToOtherMonthsOnSelect: h, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u, onBeforeSelect: p } = this.opts, v = r.length;
                if (Array.isArray(e)) return e.forEach((e)=>{
                    this.selectDate(e, s);
                }), new Promise((e)=>{
                    setTimeout(e);
                });
                if ((e = b(e)) instanceof Date) {
                    if (p && !p({
                        date: e,
                        datepicker: this
                    })) return Promise.resolve();
                    if (a === i.days && e.getMonth() !== n.month && h && (t = new Date(e.getFullYear(), e.getMonth(), 1)), a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), t && this.setViewDate(t), d && !c) {
                        if (v === d) return;
                        this._checkIfDateIsSelected(e) || r.push(e);
                    } else if (c) switch(v){
                        case 1:
                            r.push(e), this.rangeDateTo || (this.rangeDateTo = e), m(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e), this.selectedDates = [
                                this.rangeDateFrom,
                                this.rangeDateTo
                            ];
                            break;
                        case 2:
                            this.selectedDates = [
                                e
                            ], this.rangeDateFrom = e, this.rangeDateTo = "";
                            break;
                        default:
                            this.selectedDates = [
                                e
                            ], this.rangeDateFrom = e;
                    }
                    else this.selectedDates = [
                        e
                    ];
                    return this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionSelectDate,
                        silent: null == s ? void 0 : s.silent,
                        date: e,
                        updateTime: o
                    }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === v && this.hide() : this.hide()), new Promise((e)=>{
                        setTimeout(e);
                    });
                }
            }
            unselectDate(e) {
                let t = this.selectedDates, s = this;
                if ((e = b(e)) instanceof Date) return t.some((a, n)=>{
                    if (p(a, e)) return t.splice(n, 1), s.selectedDates.length ? s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]) : (s.rangeDateFrom = "", s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
                        action: i.actionUnselectDate,
                        date: e
                    }), !0;
                });
            }
            replaceDate(e, t) {
                let s = this.selectedDates.find((t)=>p(t, e, this.currentView)), a = this.selectedDates.indexOf(s);
                a < 0 || p(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionSelectDate,
                    date: t,
                    updateTime: !0
                }), this._updateLastSelectedDate(t));
            }
            clear() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.lastSelectedDate = !1, this.trigger(i.eventChangeSelectedDate, {
                    action: i.actionUnselectDate,
                    silent: e.silent
                }), new Promise((e)=>{
                    setTimeout(e);
                });
            }
            show() {
                let { onShow: e, isMobile: t } = this.opts;
                this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
            }
            hide() {
                let { onHide: e, isMobile: t } = this.opts, i = this._hasTransition();
                this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t)=>{
                    !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
                }), t && j.classList.remove("-active-");
            }
            _triggerOnSelect() {
                let e = [], t = [], { selectedDates: i, locale: s, opts: { onSelect: a, multipleDates: n, range: r } } = this, o = n || r, h = "function" == typeof s.dateFormat;
                i.length && (e = i.map(g), t = h ? n ? s.dateFormat(e) : e.map((e)=>s.dateFormat(e)) : e.map((e)=>this.formatDate(e, s.dateFormat))), a({
                    date: o ? e : e[0],
                    formattedDate: o ? t : t[0],
                    datepicker: this
                });
            }
            _handleAlreadySelectedDates(e, t) {
                let { selectedDates: i, rangeDateFrom: s, rangeDateTo: a } = this, { range: n, toggleSelected: r } = this.opts, o = i.length, h = "function" == typeof r ? r({
                    datepicker: this,
                    date: t
                }) : r, l = Boolean(n && 1 === o && e), d = l ? g(t) : t;
                n && !h && (2 !== o && this.selectDate(d), 2 === o && p(s, a)) || (h ? this.unselectDate(d) : this._updateLastSelectedDate(l ? d : e));
            }
            _handleUpDownActions(e, t) {
                if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i]);
            }
            getCell(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
                if (!((e = b(e)) instanceof Date)) return;
                let { year: s, month: a, date: n } = h(e), r = `[data-year="${s}"]`, o = `[data-month="${a}"]`, l = {
                    [i.day]: `${r}${o}[data-date="${n}"]`,
                    [i.month]: `${r}${o}`,
                    [i.year]: `${r}`
                };
                return this.views[this.currentView] ? this.views[this.currentView].$el.querySelector(l[t]) : void 0;
            }
            _showMobileOverlay() {
                j.classList.add("-active-");
            }
            _hasTransition() {
                return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e, t)=>parseFloat(t) + e, 0) > 0;
            }
            get shouldUpdateDOM() {
                return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
                return h(this.viewDate);
            }
            get currentViewSingular() {
                return this.currentView.slice(0, -1);
            }
            get curDecade() {
                return c(this.viewDate);
            }
            get viewIndex() {
                return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
                return this.currentView === i.years;
            }
            get hasSelectedDates() {
                return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
                return this.currentView === this.opts.minView || this.currentView === i.days;
            }
            get $container() {
                return this.$customContainer || P;
            }
            static replacer(e, t, i) {
                return e.replace(t, function(e, t, s, a) {
                    return t + i + a;
                });
            }
        }
        var K;
        return I(R, "defaults", s), I(R, "version", "3.5.0"), I(R, "defaultGlobalContainerId", "air-datepicker-global-container"), K = R.prototype, Object.assign(K, N), t.default;
    }();
});

},{}],"aM9jX":[function() {},{}],"Asb2S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initListeners", ()=>initListeners);
var _cardValidationJs = require("./cardValidation.js");
var _handlersJs = require("./handlers.js");
const initListeners = ()=>{
    const nameInput = document.getElementById("name");
    const cardNumberInput = document.getElementById("cardnumber");
    const securityCodeInput = document.getElementById("securitycode");
    nameInput.addEventListener("input", (0, _handlersJs.handleNameInput));
    let currentCardType = null;
    cardNumberInput.addEventListener("input", (e)=>{
        (0, _handlersJs.handleCardNumberInput)(e);
        const cardNumber = e.target.value;
        const validationResult = (0, _cardValidationJs.validateCardNumber)(cardNumber);
        const type = validationResult?.card?.type;
        if (type && type !== currentCardType) {
            currentCardType = type;
            (0, _cardValidationJs.displayCardBrandLogo)(cardNumber);
        } else if (!type) {
            currentCardType = null;
            (0, _cardValidationJs.displayCardBrandLogo)(cardNumber);
        }
    });
    securityCodeInput.addEventListener("input", (0, _handlersJs.handleSecurityCodeInput));
    document.addEventListener("click", ({ target })=>{
        const container = target.closest(".container");
        const securitycode = target.closest("#securitycode");
        const creditcard = document.querySelector(".creditcard");
        if (securitycode || container) creditcard.classList.toggle("flipped");
    });
};

},{"./cardValidation.js":"72RhE","./handlers.js":"65dUv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72RhE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateCardNumber", ()=>validateCardNumber);
parcelHelpers.export(exports, "displayCardBrandLogo", ()=>displayCardBrandLogo);
var _cardValidator = require("card-validator");
var _redom = require("redom");
var _createElementsJs = require("./createElements.js");
const validateCardNumber = (cardNumber)=>(0, _cardValidator.number)(cardNumber);
const renderCardLogo = (type, containerId)=>{
    const iconUrl = `https://logo.clearbit.com/${type}.com?size=60`;
    const logoImg = (0, _redom.el)("img", {
        src: iconUrl,
        alt: `${type} logo`,
        class: "ccicon"
    });
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = "";
        (0, _redom.mount)(container, logoImg);
    }
};
const displayCardBrandLogo = ()=>{
    const cardNameInput = document.getElementById("name");
    const cardNumberInput = document.getElementById("cardnumber");
    const expirationInput = document.getElementById("expirationdate");
    const securityCodeInput = document.getElementById("securitycode");
    const cardNumber = cardNumberInput.value || "XXXX XXXX XXXX XXXX";
    const cardName = cardNameInput.value || "Name Surname";
    const expiration = expirationInput.value || "MM/YY";
    const securityCode = securityCodeInput.value || "XXX";
    const cardTypeToColor = {
        "visa": "lightblue",
        "mastercard": "lime",
        "american-express": "orange",
        "discover": "cyan",
        "jcb": "yellow",
        "unionpay": "purple",
        "maestro": "red",
        "mir": "green"
    };
    const validationResult = validateCardNumber(cardNumber);
    const type = validationResult?.card?.type;
    console.log("type: ", type);
    if (type) {
        const color = cardTypeToColor[type] ?? "grey";
        const { creditCard } = (0, _createElementsJs.createSvgElements)(color, cardNumber, cardName, expiration, securityCode);
        const oldSvgContainer = document.querySelector(".container");
        oldSvgContainer.innerHTML = "";
        (0, _redom.mount)(oldSvgContainer, creditCard);
        renderCardLogo(type, "ccsingle");
        renderCardLogo(type, "ccicon");
    } else {
        const ccsingle = document.getElementById("ccsingle");
        const ccicon = document.getElementById("ccicon");
        ccsingle.innerHTML = "logo";
        ccicon.innerHTML = "";
        const { creditCard } = (0, _createElementsJs.createSvgElements)("grey", cardNumber, cardName, expiration, securityCode);
        const oldSvgContainer = document.querySelector(".container");
        oldSvgContainer.innerHTML = "";
        (0, _redom.mount)(oldSvgContainer, creditCard);
    }
};

},{"card-validator":"1dvO8","redom":"gT5MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./createElements.js":"lTxtA"}],"1dvO8":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var creditCardType = __importStar(require("1d3e08c74e8c57b6"));
var cardholder_name_1 = require("6d5d9c2b8eef212");
var card_number_1 = require("12de689611a5b354");
var expiration_date_1 = require("53dbbc0eeef46d42");
var expiration_month_1 = require("3558029ddb7d8ac0");
var expiration_year_1 = require("900cc6d26d05f76f");
var cvv_1 = require("aea98623c473d5cc");
var postal_code_1 = require("db1a29fa06887272");
var cardValidator = {
    creditCardType: creditCardType,
    cardholderName: cardholder_name_1.cardholderName,
    number: card_number_1.cardNumber,
    expirationDate: expiration_date_1.expirationDate,
    expirationMonth: expiration_month_1.expirationMonth,
    expirationYear: expiration_year_1.expirationYear,
    cvv: cvv_1.cvv,
    postalCode: postal_code_1.postalCode
};
module.exports = cardValidator;

},{"1d3e08c74e8c57b6":"bfoG6","6d5d9c2b8eef212":"bAkQL","12de689611a5b354":"5ZDe5","53dbbc0eeef46d42":"gwVE0","3558029ddb7d8ac0":"9z72Q","900cc6d26d05f76f":"liFsO","aea98623c473d5cc":"hl7bb","db1a29fa06887272":"5ejfE"}],"bfoG6":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cardTypes = require("85712e0c1cba7199");
var add_matching_cards_to_results_1 = require("938b984176c9165c");
var is_valid_input_type_1 = require("47c8180a2047ef8e");
var find_best_match_1 = require("f8d0f39fb43c912b");
var clone_1 = require("cae954e0d0b5a14c");
var customCards = {};
var cardNames = {
    VISA: "visa",
    MASTERCARD: "mastercard",
    AMERICAN_EXPRESS: "american-express",
    DINERS_CLUB: "diners-club",
    DISCOVER: "discover",
    JCB: "jcb",
    UNIONPAY: "unionpay",
    MAESTRO: "maestro",
    ELO: "elo",
    MIR: "mir",
    HIPER: "hiper",
    HIPERCARD: "hipercard"
};
var ORIGINAL_TEST_ORDER = [
    cardNames.VISA,
    cardNames.MASTERCARD,
    cardNames.AMERICAN_EXPRESS,
    cardNames.DINERS_CLUB,
    cardNames.DISCOVER,
    cardNames.JCB,
    cardNames.UNIONPAY,
    cardNames.MAESTRO,
    cardNames.ELO,
    cardNames.MIR,
    cardNames.HIPER,
    cardNames.HIPERCARD
];
var testOrder = clone_1.clone(ORIGINAL_TEST_ORDER);
function findType(cardType) {
    return customCards[cardType] || cardTypes[cardType];
}
function getAllCardTypes() {
    return testOrder.map(function(cardType) {
        return clone_1.clone(findType(cardType));
    });
}
function getCardPosition(name, ignoreErrorForNotExisting) {
    if (ignoreErrorForNotExisting === void 0) ignoreErrorForNotExisting = false;
    var position = testOrder.indexOf(name);
    if (!ignoreErrorForNotExisting && position === -1) throw new Error('"' + name + '" is not a supported card type.');
    return position;
}
function creditCardType(cardNumber) {
    var results = [];
    if (!is_valid_input_type_1.isValidInputType(cardNumber)) return results;
    if (cardNumber.length === 0) return getAllCardTypes();
    testOrder.forEach(function(cardType) {
        var cardConfiguration = findType(cardType);
        add_matching_cards_to_results_1.addMatchingCardsToResults(cardNumber, cardConfiguration, results);
    });
    var bestMatch = find_best_match_1.findBestMatch(results);
    if (bestMatch) return [
        bestMatch
    ];
    return results;
}
creditCardType.getTypeInfo = function(cardType) {
    return clone_1.clone(findType(cardType));
};
creditCardType.removeCard = function(name) {
    var position = getCardPosition(name);
    testOrder.splice(position, 1);
};
creditCardType.addCard = function(config) {
    var existingCardPosition = getCardPosition(config.type, true);
    customCards[config.type] = config;
    if (existingCardPosition === -1) testOrder.push(config.type);
};
creditCardType.updateCard = function(cardType, updates) {
    var originalObject = customCards[cardType] || cardTypes[cardType];
    if (!originalObject) throw new Error('"' + cardType + "\" is not a recognized type. Use `addCard` instead.'");
    if (updates.type && originalObject.type !== updates.type) throw new Error("Cannot overwrite type parameter.");
    var clonedCard = clone_1.clone(originalObject);
    clonedCard = __assign(__assign({}, clonedCard), updates);
    customCards[clonedCard.type] = clonedCard;
};
creditCardType.changeOrder = function(name, position) {
    var currentPosition = getCardPosition(name);
    testOrder.splice(currentPosition, 1);
    testOrder.splice(position, 0, name);
};
creditCardType.resetModifications = function() {
    testOrder = clone_1.clone(ORIGINAL_TEST_ORDER);
    customCards = {};
};
creditCardType.types = cardNames;
module.exports = creditCardType;

},{"85712e0c1cba7199":"dSbPR","938b984176c9165c":"4fqpt","47c8180a2047ef8e":"8cWBU","f8d0f39fb43c912b":"gDRfn","cae954e0d0b5a14c":"debrE"}],"dSbPR":[function(require,module,exports) {
"use strict";
var cardTypes = {
    visa: {
        niceType: "Visa",
        type: "visa",
        patterns: [
            4
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            18,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    mastercard: {
        niceType: "Mastercard",
        type: "mastercard",
        patterns: [
            [
                51,
                55
            ],
            [
                2221,
                2229
            ],
            [
                223,
                229
            ],
            [
                23,
                26
            ],
            [
                270,
                271
            ],
            2720
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    "american-express": {
        niceType: "American Express",
        type: "american-express",
        patterns: [
            34,
            37
        ],
        gaps: [
            4,
            10
        ],
        lengths: [
            15
        ],
        code: {
            name: "CID",
            size: 4
        }
    },
    "diners-club": {
        niceType: "Diners Club",
        type: "diners-club",
        patterns: [
            [
                300,
                305
            ],
            36,
            38,
            39
        ],
        gaps: [
            4,
            10
        ],
        lengths: [
            14,
            16,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    discover: {
        niceType: "Discover",
        type: "discover",
        patterns: [
            6011,
            [
                644,
                649
            ],
            65
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            19
        ],
        code: {
            name: "CID",
            size: 3
        }
    },
    jcb: {
        niceType: "JCB",
        type: "jcb",
        patterns: [
            2131,
            1800,
            [
                3528,
                3589
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVV",
            size: 3
        }
    },
    unionpay: {
        niceType: "UnionPay",
        type: "unionpay",
        patterns: [
            620,
            [
                624,
                626
            ],
            [
                62100,
                62182
            ],
            [
                62184,
                62187
            ],
            [
                62185,
                62197
            ],
            [
                62200,
                62205
            ],
            [
                622010,
                622999
            ],
            622018,
            [
                622019,
                622999
            ],
            [
                62207,
                62209
            ],
            [
                622126,
                622925
            ],
            [
                623,
                626
            ],
            6270,
            6272,
            6276,
            [
                627700,
                627779
            ],
            [
                627781,
                627799
            ],
            [
                6282,
                6289
            ],
            6291,
            6292,
            810,
            [
                8110,
                8131
            ],
            [
                8132,
                8151
            ],
            [
                8152,
                8163
            ],
            [
                8164,
                8171
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            14,
            15,
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVN",
            size: 3
        }
    },
    maestro: {
        niceType: "Maestro",
        type: "maestro",
        patterns: [
            493698,
            [
                500000,
                504174
            ],
            [
                504176,
                506698
            ],
            [
                506779,
                508999
            ],
            [
                56,
                59
            ],
            63,
            67,
            6
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    elo: {
        niceType: "Elo",
        type: "elo",
        patterns: [
            401178,
            401179,
            438935,
            457631,
            457632,
            431274,
            451416,
            457393,
            504175,
            [
                506699,
                506778
            ],
            [
                509000,
                509999
            ],
            627780,
            636297,
            636368,
            [
                650031,
                650033
            ],
            [
                650035,
                650051
            ],
            [
                650405,
                650439
            ],
            [
                650485,
                650538
            ],
            [
                650541,
                650598
            ],
            [
                650700,
                650718
            ],
            [
                650720,
                650727
            ],
            [
                650901,
                650978
            ],
            [
                651652,
                651679
            ],
            [
                655000,
                655019
            ],
            [
                655021,
                655058
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVE",
            size: 3
        }
    },
    mir: {
        niceType: "Mir",
        type: "mir",
        patterns: [
            [
                2200,
                2204
            ]
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16,
            17,
            18,
            19
        ],
        code: {
            name: "CVP2",
            size: 3
        }
    },
    hiper: {
        niceType: "Hiper",
        type: "hiper",
        patterns: [
            637095,
            63737423,
            63743358,
            637568,
            637599,
            637609,
            637612
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    },
    hipercard: {
        niceType: "Hipercard",
        type: "hipercard",
        patterns: [
            606282
        ],
        gaps: [
            4,
            8,
            12
        ],
        lengths: [
            16
        ],
        code: {
            name: "CVC",
            size: 3
        }
    }
};
module.exports = cardTypes;

},{}],"4fqpt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addMatchingCardsToResults = void 0;
var clone_1 = require("4ba80497c6ccd5d4");
var matches_1 = require("f863fee5bdc6faeb");
function addMatchingCardsToResults(cardNumber, cardConfiguration, results) {
    var i, patternLength;
    for(i = 0; i < cardConfiguration.patterns.length; i++){
        var pattern = cardConfiguration.patterns[i];
        if (!matches_1.matches(cardNumber, pattern)) continue;
        var clonedCardConfiguration = clone_1.clone(cardConfiguration);
        if (Array.isArray(pattern)) patternLength = String(pattern[0]).length;
        else patternLength = String(pattern).length;
        if (cardNumber.length >= patternLength) clonedCardConfiguration.matchStrength = patternLength;
        results.push(clonedCardConfiguration);
        break;
    }
}
exports.addMatchingCardsToResults = addMatchingCardsToResults;

},{"4ba80497c6ccd5d4":"debrE","f863fee5bdc6faeb":"6RvrK"}],"debrE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = void 0;
function clone(originalObject) {
    if (!originalObject) return null;
    return JSON.parse(JSON.stringify(originalObject));
}
exports.clone = clone;

},{}],"6RvrK":[function(require,module,exports) {
"use strict";
/*
 * Adapted from https://github.com/polvo-labs/card-type/blob/aaab11f80fa1939bccc8f24905a06ae3cd864356/src/cardType.js#L37-L42
 * */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matches = void 0;
function matchesRange(cardNumber, min, max) {
    var maxLengthToCheck = String(min).length;
    var substr = cardNumber.substr(0, maxLengthToCheck);
    var integerRepresentationOfCardNumber = parseInt(substr, 10);
    min = parseInt(String(min).substr(0, substr.length), 10);
    max = parseInt(String(max).substr(0, substr.length), 10);
    return integerRepresentationOfCardNumber >= min && integerRepresentationOfCardNumber <= max;
}
function matchesPattern(cardNumber, pattern) {
    pattern = String(pattern);
    return pattern.substring(0, cardNumber.length) === cardNumber.substring(0, pattern.length);
}
function matches(cardNumber, pattern) {
    if (Array.isArray(pattern)) return matchesRange(cardNumber, pattern[0], pattern[1]);
    return matchesPattern(cardNumber, pattern);
}
exports.matches = matches;

},{}],"8cWBU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidInputType = void 0;
function isValidInputType(cardNumber) {
    return typeof cardNumber === "string" || cardNumber instanceof String;
}
exports.isValidInputType = isValidInputType;

},{}],"gDRfn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findBestMatch = void 0;
function hasEnoughResultsToDetermineBestMatch(results) {
    var numberOfResultsWithMaxStrengthProperty = results.filter(function(result) {
        return result.matchStrength;
    }).length;
    /*
     * if all possible results have a maxStrength property that means the card
     * number is sufficiently long enough to determine conclusively what the card
     * type is
     * */ return numberOfResultsWithMaxStrengthProperty > 0 && numberOfResultsWithMaxStrengthProperty === results.length;
}
function findBestMatch(results) {
    if (!hasEnoughResultsToDetermineBestMatch(results)) return null;
    return results.reduce(function(bestMatch, result) {
        if (!bestMatch) return result;
        /*
         * If the current best match pattern is less specific than this result, set
         * the result as the new best match
         * */ if (Number(bestMatch.matchStrength) < Number(result.matchStrength)) return result;
        return bestMatch;
    });
}
exports.findBestMatch = findBestMatch;

},{}],"bAkQL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cardholderName = void 0;
var CARD_NUMBER_REGEX = /^[\d\s-]*$/;
var MAX_LENGTH = 255;
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function cardholderName(value) {
    if (typeof value !== "string") return verification(false, false);
    if (value.length === 0) return verification(false, true);
    if (value.length > MAX_LENGTH) return verification(false, false);
    if (CARD_NUMBER_REGEX.test(value)) return verification(false, true);
    return verification(true, true);
}
exports.cardholderName = cardholderName;

},{}],"5ZDe5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cardNumber = void 0;
var luhn10 = require("b76f36fc6ea6b135");
var getCardTypes = require("57979caee5e93b86");
function verification(card, isPotentiallyValid, isValid) {
    return {
        card: card,
        isPotentiallyValid: isPotentiallyValid,
        isValid: isValid
    };
}
function cardNumber(value, options) {
    if (options === void 0) options = {};
    var isPotentiallyValid, isValid, maxLength;
    if (typeof value !== "string" && typeof value !== "number") return verification(null, false, false);
    var testCardValue = String(value).replace(/-|\s/g, "");
    if (!/^\d*$/.test(testCardValue)) return verification(null, false, false);
    var potentialTypes = getCardTypes(testCardValue);
    if (potentialTypes.length === 0) return verification(null, false, false);
    else if (potentialTypes.length !== 1) return verification(null, true, false);
    var cardType = potentialTypes[0];
    if (options.maxLength && testCardValue.length > options.maxLength) return verification(cardType, false, false);
    if (options.skipLuhnValidation === true || cardType.type === getCardTypes.types.UNIONPAY && options.luhnValidateUnionPay !== true) isValid = true;
    else isValid = luhn10(testCardValue);
    maxLength = Math.max.apply(null, cardType.lengths);
    if (options.maxLength) maxLength = Math.min(options.maxLength, maxLength);
    for(var i = 0; i < cardType.lengths.length; i++)if (cardType.lengths[i] === testCardValue.length) {
        isPotentiallyValid = testCardValue.length < maxLength || isValid;
        return verification(cardType, isPotentiallyValid, isValid);
    }
    return verification(cardType, testCardValue.length < maxLength, false);
}
exports.cardNumber = cardNumber;

},{"b76f36fc6ea6b135":"5vhkk","57979caee5e93b86":"bfoG6"}],"5vhkk":[function(require,module,exports) {
/* eslint-disable */ /*
 * Luhn algorithm implementation in JavaScript
 * Copyright (c) 2009 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ "use strict";
function luhn10(identifier) {
    var sum = 0;
    var alt = false;
    var i = identifier.length - 1;
    var num;
    while(i >= 0){
        num = parseInt(identifier.charAt(i), 10);
        if (alt) {
            num *= 2;
            if (num > 9) num = num % 10 + 1; // eslint-disable-line no-extra-parens
        }
        alt = !alt;
        sum += num;
        i--;
    }
    return sum % 10 === 0;
}
module.exports = luhn10;

},{}],"gwVE0":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationDate = void 0;
var parse_date_1 = require("5c5d87ca73cc3887");
var expiration_month_1 = require("42c778c88cc7c395");
var expiration_year_1 = require("d3b08b7a0eece1a6");
function verification(isValid, isPotentiallyValid, month, year) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        month: month,
        year: year
    };
}
function expirationDate(value, maxElapsedYear) {
    var date;
    if (typeof value === "string") {
        value = value.replace(/^(\d\d) (\d\d(\d\d)?)$/, "$1/$2");
        date = (0, parse_date_1.parseDate)(String(value));
    } else if (value !== null && typeof value === "object") {
        var fullDate = __assign({}, value);
        date = {
            month: String(fullDate.month),
            year: String(fullDate.year)
        };
    } else return verification(false, false, null, null);
    var monthValid = (0, expiration_month_1.expirationMonth)(date.month);
    var yearValid = (0, expiration_year_1.expirationYear)(date.year, maxElapsedYear);
    if (monthValid.isValid) {
        if (yearValid.isCurrentYear) {
            var isValidForThisYear = monthValid.isValidForThisYear;
            return verification(isValidForThisYear, isValidForThisYear, date.month, date.year);
        }
        if (yearValid.isValid) return verification(true, true, date.month, date.year);
    }
    if (monthValid.isPotentiallyValid && yearValid.isPotentiallyValid) return verification(false, true, null, null);
    return verification(false, false, null, null);
}
exports.expirationDate = expirationDate;

},{"5c5d87ca73cc3887":"dNsIu","42c778c88cc7c395":"9z72Q","d3b08b7a0eece1a6":"liFsO"}],"dNsIu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseDate = void 0;
var expiration_year_1 = require("c88724e2b0e48bb");
var is_array_1 = require("6021106b5fe9a350");
function getNumberOfMonthDigitsInDateString(dateString) {
    var firstCharacter = Number(dateString[0]);
    var assumedYear;
    /*
      if the first character in the string starts with `0`,
      we know that the month will be 2 digits.
  
      '0122' => {month: '01', year: '22'}
    */ if (firstCharacter === 0) return 2;
    /*
      if the first character in the string starts with
      number greater than 1, it must be a 1 digit month
  
      '322' => {month: '3', year: '22'}
    */ if (firstCharacter > 1) return 1;
    /*
      if the first 2 characters make up a number between
      13-19, we know that the month portion must be 1
  
      '139' => {month: '1', year: '39'}
    */ if (firstCharacter === 1 && Number(dateString[1]) > 2) return 1;
    /*
      if the first 2 characters make up a number between
      10-12, we check if the year portion would be considered
      valid if we assumed that the month was 1. If it is
      not potentially valid, we assume the month must have
      2 digits.
  
      '109' => {month: '10', year: '9'}
      '120' => {month: '1', year: '20'} // when checked in the year 2019
      '120' => {month: '12', year: '0'} // when checked in the year 2021
    */ if (firstCharacter === 1) {
        assumedYear = dateString.substr(1);
        return (0, expiration_year_1.expirationYear)(assumedYear).isPotentiallyValid ? 1 : 2;
    }
    /*
      If the length of the value is exactly 5 characters,
      we assume a full year was passed in, meaning the remaining
      single leading digit must be the month value.
  
      '12202' => {month: '1', year: '2202'}
    */ if (dateString.length === 5) return 1;
    /*
      If the length of the value is more than five characters,
      we assume a full year was passed in addition to the month
      and therefore the month portion must be 2 digits.
  
      '112020' => {month: '11', year: '2020'}
    */ if (dateString.length > 5) return 2;
    /*
      By default, the month value is the first value
    */ return 1;
}
function parseDate(datestring) {
    var date;
    if (/^\d{4}-\d{1,2}$/.test(datestring)) date = datestring.split("-").reverse();
    else if (/\//.test(datestring)) date = datestring.split(/\s*\/\s*/g);
    else if (/\s/.test(datestring)) date = datestring.split(/ +/g);
    if ((0, is_array_1.isArray)(date)) return {
        month: date[0] || "",
        year: date.slice(1).join()
    };
    var numberOfDigitsInMonth = getNumberOfMonthDigitsInDateString(datestring);
    var month = datestring.substr(0, numberOfDigitsInMonth);
    return {
        month: month,
        year: datestring.substr(month.length)
    };
}
exports.parseDate = parseDate;

},{"c88724e2b0e48bb":"liFsO","6021106b5fe9a350":"4eFPr"}],"liFsO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationYear = void 0;
var DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE = 19;
function verification(isValid, isPotentiallyValid, isCurrentYear) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        isCurrentYear: isCurrentYear || false
    };
}
function expirationYear(value, maxElapsedYear) {
    if (maxElapsedYear === void 0) maxElapsedYear = DEFAULT_VALID_NUMBER_OF_YEARS_IN_THE_FUTURE;
    var isCurrentYear;
    if (typeof value !== "string") return verification(false, false);
    if (value.replace(/\s/g, "") === "") return verification(false, true);
    if (!/^\d*$/.test(value)) return verification(false, false);
    var len = value.length;
    if (len < 2) return verification(false, true);
    var currentYear = new Date().getFullYear();
    if (len === 3) {
        // 20x === 20x
        var firstTwo = value.slice(0, 2);
        var currentFirstTwo = String(currentYear).slice(0, 2);
        return verification(false, firstTwo === currentFirstTwo);
    }
    if (len > 4) return verification(false, false);
    var numericValue = parseInt(value, 10);
    var twoDigitYear = Number(String(currentYear).substr(2, 2));
    var valid = false;
    if (len === 2) {
        if (String(currentYear).substr(0, 2) === value) return verification(false, true);
        isCurrentYear = twoDigitYear === numericValue;
        valid = numericValue >= twoDigitYear && numericValue <= twoDigitYear + maxElapsedYear;
    } else if (len === 4) {
        isCurrentYear = currentYear === numericValue;
        valid = numericValue >= currentYear && numericValue <= currentYear + maxElapsedYear;
    }
    return verification(valid, valid, isCurrentYear);
}
exports.expirationYear = expirationYear;

},{}],"4eFPr":[function(require,module,exports) {
"use strict";
// Polyfill taken from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill>.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArray = void 0;
exports.isArray = Array.isArray || function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
};

},{}],"9z72Q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expirationMonth = void 0;
function verification(isValid, isPotentiallyValid, isValidForThisYear) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid,
        isValidForThisYear: isValidForThisYear || false
    };
}
function expirationMonth(value) {
    var currentMonth = new Date().getMonth() + 1;
    if (typeof value !== "string") return verification(false, false);
    if (value.replace(/\s/g, "") === "" || value === "0") return verification(false, true);
    if (!/^\d*$/.test(value)) return verification(false, false);
    var month = parseInt(value, 10);
    if (isNaN(Number(value))) return verification(false, false);
    var result = month > 0 && month < 13;
    return verification(result, result, result && month >= currentMonth);
}
exports.expirationMonth = expirationMonth;

},{}],"hl7bb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cvv = void 0;
var DEFAULT_LENGTH = 3;
function includes(array, thing) {
    for(var i = 0; i < array.length; i++){
        if (thing === array[i]) return true;
    }
    return false;
}
function max(array) {
    var maximum = DEFAULT_LENGTH;
    var i = 0;
    for(; i < array.length; i++)maximum = array[i] > maximum ? array[i] : maximum;
    return maximum;
}
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function cvv(value, maxLength) {
    if (maxLength === void 0) maxLength = DEFAULT_LENGTH;
    maxLength = maxLength instanceof Array ? maxLength : [
        maxLength
    ];
    if (typeof value !== "string") return verification(false, false);
    if (!/^\d*$/.test(value)) return verification(false, false);
    if (includes(maxLength, value.length)) return verification(true, true);
    if (value.length < Math.min.apply(null, maxLength)) return verification(false, true);
    if (value.length > max(maxLength)) return verification(false, false);
    return verification(true, true);
}
exports.cvv = cvv;

},{}],"5ejfE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postalCode = void 0;
var DEFAULT_MIN_POSTAL_CODE_LENGTH = 3;
function verification(isValid, isPotentiallyValid) {
    return {
        isValid: isValid,
        isPotentiallyValid: isPotentiallyValid
    };
}
function postalCode(value, options) {
    if (options === void 0) options = {};
    var minLength = options.minLength || DEFAULT_MIN_POSTAL_CODE_LENGTH;
    if (typeof value !== "string") return verification(false, false);
    else if (value.length < minLength) return verification(false, true);
    return verification(true, true);
}
exports.postalCode = postalCode;

},{}],"65dUv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleNameInput", ()=>handleNameInput);
parcelHelpers.export(exports, "handleCardNumberInput", ()=>handleCardNumberInput);
parcelHelpers.export(exports, "handleSecurityCodeInput", ()=>handleSecurityCodeInput);
const handleNameInput = ({ target })=>{
    const svgname = document.getElementById("svgname");
    const svgnameback = document.getElementById("svgnameback");
    const inputHolder = target;
    if (/[^a-zA-Z\s]/.test(inputHolder.value)) alert("Please use Latin characters only");
    inputHolder.value = inputHolder.value.replace(/[^a-zA-Z\s]|(.*\s.*)\s.*/g, "$1");
    const formattedValue = inputHolder.value.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, (letter)=>letter.toUpperCase());
    svgname.textContent = formattedValue || "Name Surname";
    svgnameback.textContent = formattedValue || "Name Surname";
};
const handleCardNumberInput = ({ target })=>{
    const svgnumber = document.getElementById("svgnumber");
    const inputNumber = target;
    if (/[^\d\s]/.test(inputNumber.value.replace(/ /g, ""))) alert("Please enter numbers only");
    inputNumber.value = inputNumber.value.replace(/\D/g, "");
    if (inputNumber.value.length > 16) inputNumber.value = inputNumber.value.slice(0, 16);
    const formattedValue = inputNumber.value.replace(/(\d{4})/g, "$1 ").trim();
    inputNumber.value = formattedValue;
    svgnumber.textContent = formattedValue || "XXXX XXXX XXXX XXXX";
};
const handleSecurityCodeInput = ({ target })=>{
    const svgsecurity = document.getElementById("svgsecurity");
    const inputCvv = target;
    if (/\D/.test(inputCvv.value)) alert("Please enter numbers only");
    inputCvv.value = inputCvv.value.replace(/\D/g, "");
    if (inputCvv.value.length > 3) inputCvv.value = inputCvv.value.slice(0, 3);
    svgsecurity.textContent = inputCvv.value || "XXX";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6DoTH","adjPd"], "adjPd", "parcelRequire7921")

//# sourceMappingURL=index.63aff760.js.map
