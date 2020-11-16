(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!***********************************!*\
  !*** D:/Project/myBar/pages.json ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/*!***************************************************!*\
  !*** D:/Project/myBar/static/images/goodsBtn.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/*!*********************************************!*\
  !*** D:/Project/myBar/static/images/bg.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/bg.jpg";

/***/ }),
/* 19 */
/*!****************************************************!*\
  !*** D:/Project/myBar/pages/index/images/user.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/index/images/user.png";

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/*!********************************************!*\
  !*** D:/Project/myBar/pages/users/mock.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.tableList = exports.userData = void 0;var userData = [
{
  content: [
  {
    id: 1,
    src: __webpack_require__(/*! ./images/tu1.png */ 45),
    isSide: true,
    total: 99 },
  {
    id: 2,
    src: __webpack_require__(/*! ./images/tu2.png */ 46),
    isSide: false,
    total: 99 },
  {
    id: 3,
    src: __webpack_require__(/*! ./images/tu3.png */ 47),
    isSide: false,
    total: 99 },
  {
    id: 4,
    src: __webpack_require__(/*! ./images/tu4.png */ 48),
    isSide: true,
    total: 99 },
  {
    id: 5,
    src: __webpack_require__(/*! ./images/tu5.png */ 49),
    isSide: false,
    total: 99 },
  {
    id: 6,
    src: __webpack_require__(/*! ./images/tu6.png */ 50),
    isSide: false,
    total: 99 },
  {
    id: 7,
    src: __webpack_require__(/*! ./images/tu7.png */ 51),
    isSide: true,
    total: 99 },
  {
    id: 8,
    src: __webpack_require__(/*! ./images/tu1.png */ 45),
    isSide: false,
    total: 99 },
  {
    id: 9,
    src: __webpack_require__(/*! ./images/tu2.png */ 46),
    isSide: true,
    total: 99 },
  {
    id: 10,
    src: __webpack_require__(/*! ./images/tu3.png */ 47),
    isSide: true,
    total: 99 },
  {
    id: 11,
    src: __webpack_require__(/*! ./images/tu4.png */ 48),
    isSide: true,
    total: 99 },
  {
    id: 12,
    src: __webpack_require__(/*! ./images/tu5.png */ 49),
    isSide: true,
    total: 99 }] },



{
  content: [
  {
    id: 1,
    src: __webpack_require__(/*! ./images/tu1.png */ 45),
    isSide: true,
    total: 99 },
  {
    id: 2,
    src: __webpack_require__(/*! ./images/tu2.png */ 46),
    isSide: false,
    total: 99 },
  {
    id: 3,
    src: __webpack_require__(/*! ./images/tu3.png */ 47),
    isSide: false,
    total: 99 },
  {
    id: 4,
    src: __webpack_require__(/*! ./images/tu4.png */ 48),
    isSide: true,
    total: 99 },
  {
    id: 5,
    src: __webpack_require__(/*! ./images/tu5.png */ 49),
    isSide: false,
    total: 99 },
  {
    id: 6,
    src: __webpack_require__(/*! ./images/tu6.png */ 50),
    isSide: false,
    total: 99 },
  {
    id: 7,
    src: __webpack_require__(/*! ./images/tu7.png */ 51),
    isSide: true,
    total: 99 },
  {
    id: 8,
    src: __webpack_require__(/*! ./images/tu1.png */ 45),
    isSide: false,
    total: 99 },
  {
    id: 9,
    src: __webpack_require__(/*! ./images/tu2.png */ 46),
    isSide: true,
    total: 99 },
  {
    id: 10,
    src: __webpack_require__(/*! ./images/tu3.png */ 47),
    isSide: true,
    total: 99 },
  {
    id: 11,
    src: __webpack_require__(/*! ./images/tu4.png */ 48),
    isSide: true,
    total: 99 },
  {
    id: 12,
    src: __webpack_require__(/*! ./images/tu5.png */ 49),
    isSide: true,
    total: 99 }] },



{
  content: [
  {
    id: 1,
    src: __webpack_require__(/*! ./images/tu1.png */ 45),
    isSide: true,
    total: 99 },
  {
    id: 2,
    src: __webpack_require__(/*! ./images/tu2.png */ 46),
    isSide: false,
    total: 99 },
  {
    id: 3,
    src: __webpack_require__(/*! ./images/tu3.png */ 47),
    isSide: false,
    total: 99 },
  {
    id: 4,
    src: __webpack_require__(/*! ./images/tu4.png */ 48),
    isSide: true,
    total: 99 },
  {
    id: 5,
    src: __webpack_require__(/*! ./images/tu5.png */ 49),
    isSide: false,
    total: 99 },
  {
    id: 6,
    src: __webpack_require__(/*! ./images/tu6.png */ 50),
    isSide: false,
    total: 99 },
  {
    id: 7,
    src: __webpack_require__(/*! ./images/tu7.png */ 51),
    isSide: true,
    total: 99 },
  {
    id: 8,
    src: __webpack_require__(/*! ./images/tu1.png */ 45),
    isSide: false,
    total: 99 },
  {
    id: 9,
    src: __webpack_require__(/*! ./images/tu2.png */ 46),
    isSide: true,
    total: 99 },
  {
    id: 10,
    src: __webpack_require__(/*! ./images/tu3.png */ 47),
    isSide: true,
    total: 99 },
  null, null] }];exports.userData = userData;




var tableList = {
  tableRight: [
  {
    id: 1,
    tabelUrl: __webpack_require__(/*! ./images/tableBG.png */ 52),
    number: 234,
    isShadow: false },
  {
    id: 2,
    tabelUrl: __webpack_require__(/*! ./images/tableBG.png */ 52),
    number: 16,
    isShadow: true },
  {
    id: 3,
    tabelUrl: __webpack_require__(/*! ./images/tableBG.png */ 52),
    number: 16,
    isShadow: true },
  {
    id: 4,
    tabelUrl: __webpack_require__(/*! ./images/tableBG.png */ 52),
    number: 16,
    isShadow: true }],


  tableLeft: [
  {
    id: 1,
    tabelNumber: 712,
    tabelUrl: __webpack_require__(/*! ./images/tableBG.png */ 52),
    users: [
    {
      userId: 1,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: false },
    {
      userId: 2,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: true },
    {
      userId: 3,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: true },
    {
      userId: 4,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: false },
    {
      userId: 1,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: false },
    {
      userId: 2,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: true },
    {
      userId: 3,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: true },
    {
      userId: 4,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: false }] },


  {
    id: 2,
    tabelNumber: 58,
    tabelUrl: __webpack_require__(/*! ./images/tableBG.png */ 52),
    users: [
    {
      userId: 1,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: false },
    {
      userId: 2,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: true },
    {
      userId: 3,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: true },
    {
      userId: 1,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: false },
    {
      userId: 2,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: true },
    {
      userId: 3,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: true },
    {
      userId: 4,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: false },
    {
      userId: 1,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: false },
    {
      userId: 2,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: true },
    {
      userId: 3,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: true },
    {
      userId: 4,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: false }] },


  {
    id: 3,
    tabelNumber: 699,
    tabelUrl: __webpack_require__(/*! ./images/tableBG.png */ 52),
    users: [
    {
      userId: 1,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: false },
    {
      userId: 2,
      userUrl: __webpack_require__(/*! ./images/user2.png */ 54),
      isShadow: true },
    {
      userId: 3,
      userUrl: __webpack_require__(/*! ./images/user1.png */ 53),
      isShadow: true }] }] };exports.tableList = tableList;

/***/ }),
/* 45 */
/*!***************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tu1.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/tu1.png";

/***/ }),
/* 46 */
/*!***************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tu2.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/tu2.png";

/***/ }),
/* 47 */
/*!***************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tu3.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/tu3.png";

/***/ }),
/* 48 */
/*!***************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tu4.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/tu4.png";

/***/ }),
/* 49 */
/*!***************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tu5.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/tu5.png";

/***/ }),
/* 50 */
/*!***************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tu6.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADrCAYAAABq1nqsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFFMDhGMkQ2MTdGQzExRUI4MzA0RTc2QUJCODBDMkYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFFMDhGMkQ3MTdGQzExRUI4MzA0RTc2QUJCODBDMkYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUUwOEYyRDQxN0ZDMTFFQjgzMDRFNzZBQkI4MEMyRjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUUwOEYyRDUxN0ZDMTFFQjgzMDRFNzZBQkI4MEMyRjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4mH7hpAACQZklEQVR42uy9CZxt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"

/***/ }),
/* 51 */
/*!***************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tu7.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/tu7.png";

/***/ }),
/* 52 */
/*!*******************************************************!*\
  !*** D:/Project/myBar/pages/users/images/tableBG.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/tableBG.png";

/***/ }),
/* 53 */
/*!*****************************************************!*\
  !*** D:/Project/myBar/pages/users/images/user1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/user1.png";

/***/ }),
/* 54 */
/*!*****************************************************!*\
  !*** D:/Project/myBar/pages/users/images/user2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/user2.png";

/***/ }),
/* 55 */
/*!**************************************************!*\
  !*** D:/Project/myBar/static/images/tableBG.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/tableBG.png";

/***/ }),
/* 56 */
/*!*******************************************************!*\
  !*** D:/Project/myBar/pages/users/images/bottles.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/users/images/bottles.png";

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/*!*****************************************************!*\
  !*** D:/Project/myBar/pages/photos/images/left.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 66 */
/*!*********************************************************!*\
  !*** D:/Project/myBar/pages/photos/images/goodsBtn.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 67 */
/*!****************************************************!*\
  !*** D:/Project/myBar/static/images/swiperBG2.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/swiperBG2.jpg";

/***/ }),
/* 68 */
/*!************************************************!*\
  !*** D:/Project/myBar/static/images/movie.mp4 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/movie.mp4";

/***/ }),
/* 69 */
/*!*****************************************************!*\
  !*** D:/Project/myBar/pages/photos/images/user.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/photos/images/user.png";

/***/ }),
/* 70 */
/*!****************************************************!*\
  !*** D:/Project/myBar/static/images/swiperBG1.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/swiperBG1.png";

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/*!****************************************************!*\
  !*** D:/Project/myBar/pages/share/images/user.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/pages/share/images/user.png";

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/*!***********************************************************!*\
  !*** D:/Project/myBar/pages/camera/images/cameraIcon.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 96 */
/*!*****************************************************!*\
  !*** D:/Project/myBar/pages/camera/images/down.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map