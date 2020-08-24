"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameObject =
/*#__PURE__*/
function () {
  function GameObject(sprite) {
    _classCallCheck(this, GameObject);

    this.x = 0;
    this.y = 0;
    objectManager.addObject(this);
    this.active = false;
    this.setSprite(sprite);
  }

  _createClass(GameObject, [{
    key: "setSprite",
    value: function setSprite(sprite) {
      this.sprite = sprite;
    }
  }, {
    key: "update",
    value: function update() {
      //skip if not drawable
      if (this.sprite === undefined || this.sprite === null) {
        return;
      } //skip if tagged as inactive


      if (!this.active) {
        return;
      } //draw sprite


      this.sprite.draw(this.x, this.y);
    }
  }, {
    key: "isOnScreen",
    value: function isOnScreen() {}
  }]);

  return GameObject;
}();

var CollidableGO =
/*#__PURE__*/
function (_GameObject) {
  _inherits(CollidableGO, _GameObject);

  function CollidableGO(sprite, width, height, offsetX, offsetY) {
    var _this;

    _classCallCheck(this, CollidableGO);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollidableGO).call(this, sprite));
    _this.collider = {};
    _this.collider.x = offsetX || 0;
    _this.collider.y = offsetY || 0;
    _this.collider.w = width || _this.sprite.sw;
    _this.collider.h = height || _this.sprite.sh;
    return _this;
  }

  _createClass(CollidableGO, [{
    key: "update",
    value: function update() {
      _get(_getPrototypeOf(CollidableGO.prototype), "update", this).call(this);

      ctx.fillStyle = "#ff0000";
      ctx.fillRect(this.x + this.collider.x, this.y + this.collider.y, this.collider.w, this.collider.h);
    }
  }, {
    key: "processCollision",
    value: function processCollision() {
      ctx.fillStyle = "#00ff00";
      ctx.fillRect(this.x + this.collider.x, this.y + this.collider.y, this.collider.w, this.collider.h);
    }
  }]);

  return CollidableGO;
}(GameObject);
/* BUTTON PADS */


var ButtonPad =
/*#__PURE__*/
function (_CollidableGO) {
  _inherits(ButtonPad, _CollidableGO);

  function ButtonPad() {
    var _this2;

    _classCallCheck(this, ButtonPad);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ButtonPad).call(this));
    _this2.pressed = false;
    return _this2;
  }

  _createClass(ButtonPad, [{
    key: "processCollision",
    value: function processCollision(other) {
      console.log(other.constructor.name);
    }
  }]);

  return ButtonPad;
}(CollidableGO);