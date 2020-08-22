"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Mime =
/*#__PURE__*/
function (_GameObject) {
  _inherits(Mime, _GameObject);

  function Mime(type) {
    var _this;

    _classCallCheck(this, Mime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mime).call(this));
    _this.type = type;

    _this.setSprite(spriteDict[type]);

    _this.type = type;
    _this.active = true;
    _this.marker = new Marker(type);

    _this.addCollider();

    return _this;
  }

  _createClass(Mime, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(Mime.prototype), "update", this).call(this);
    }
  }, {
    key: "setActive",
    value: function setActive(isActive) {
      //this.active = isActive
      this.marker.active = isActive;
    }
  }, {
    key: "move",
    value: function move(xAmount, yAmount) {
      this.moveTo(this.x + xAmount, this.y + yAmount);
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this.x = x;
      this.y = y;
      this.marker.x = this.x;
      this.marker.y = this.y - TILESIZE * 0.9;
    }
  }]);

  return Mime;
}(GameObject);

var MimeTXT =
/*#__PURE__*/
function (_Mime) {
  _inherits(MimeTXT, _Mime);

  function MimeTXT() {
    _classCallCheck(this, MimeTXT);

    return _possibleConstructorReturn(this, _getPrototypeOf(MimeTXT).call(this, "text_plain"));
  }

  return MimeTXT;
}(Mime);

var MimeCSS =
/*#__PURE__*/
function (_Mime2) {
  _inherits(MimeCSS, _Mime2);

  function MimeCSS() {
    _classCallCheck(this, MimeCSS);

    return _possibleConstructorReturn(this, _getPrototypeOf(MimeCSS).call(this, "text_css"));
  }

  return MimeCSS;
}(Mime);

var MimeJS =
/*#__PURE__*/
function (_Mime3) {
  _inherits(MimeJS, _Mime3);

  function MimeJS() {
    _classCallCheck(this, MimeJS);

    return _possibleConstructorReturn(this, _getPrototypeOf(MimeJS).call(this, "text_javascript"));
  }

  return MimeJS;
}(Mime);

var MimePNG =
/*#__PURE__*/
function (_Mime4) {
  _inherits(MimePNG, _Mime4);

  function MimePNG() {
    _classCallCheck(this, MimePNG);

    return _possibleConstructorReturn(this, _getPrototypeOf(MimePNG).call(this, "image_png"));
  }

  return MimePNG;
}(Mime);

var Marker =
/*#__PURE__*/
function (_GameObject2) {
  _inherits(Marker, _GameObject2);

  function Marker(type) {
    var _this2;

    _classCallCheck(this, Marker);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Marker).call(this));

    _this2.setSprite(spriteDict["".concat(type, "_marker")]);

    return _this2;
  }

  return Marker;
}(GameObject);