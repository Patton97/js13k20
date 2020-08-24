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

var PlayerController =
/*#__PURE__*/
function (_GameObject) {
  _inherits(PlayerController, _GameObject);

  function PlayerController() {
    var _this2;

    _classCallCheck(this, PlayerController);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PlayerController).call(this));
    _this2.mimes = [new MimeTXT(), new MimeCSS(), new MimeJS(), new MimePNG()];
    _this2.currentMime = 0;
    _this2.speed = 1;
    _this2.up = false;
    _this2.down = false;
    _this2.left = false;
    _this2.right = false;
    _this2.switchCooldown = 0;

    var _this = _assertThisInitialized(_this2); // hack to ref this (playercontroller) rather than this (controlDict)
    // b: true = keydown, false = keyup


    _this2.controlDict = {
      "87": function _(b) {
        _this.up = b;
      },
      // W
      "83": function _(b) {
        _this.down = b;
      },
      // S
      "65": function _(b) {
        _this.left = b;
      },
      // A
      "68": function _(b) {
        _this.right = b;
      },
      // D
      "37": function _(b) {
        if (b) {
          _this.prevMime();
        }
      },
      // left arrow
      "39": function _(b) {
        if (b) {
          _this.nextMime();
        }
      },
      // right arrow
      "49": function _(b) {
        _this.switchMime(0);
      },
      // Digit1
      "50": function _(b) {
        _this.switchMime(1);
      },
      // Digit2
      "51": function _(b) {
        _this.switchMime(2);
      },
      // Digit3
      "52": function _(b) {
        _this.switchMime(3);
      },
      // Digit4
      "97": function _(b) {
        _this.switchMime(0);
      },
      // Numpad1
      "98": function _(b) {
        _this.switchMime(1);
      },
      // Numpad2
      "99": function _(b) {
        _this.switchMime(2);
      },
      // Numpad3
      "100": function _(b) {
        _this.switchMime(3);
      } // Numpad4

    };

    _this2.switchMime(0);

    return _this2;
  }

  _createClass(PlayerController, [{
    key: "update",
    value: function update() {
      var moveAmount = {
        x: 0,
        y: 0
      };

      if (this.up) {
        moveAmount.y -= this.speed;
      }

      if (this.down) {
        moveAmount.y += this.speed;
      }

      if (this.left) {
        moveAmount.x -= this.speed;
      }

      if (this.right) {
        moveAmount.x += this.speed;
      }

      this.mimes[this.currentMime].move(moveAmount.x, moveAmount.y);
      gameManager.moveCamera(moveAmount);

      if (this.switchCooldown > 0) {
        this.switchCooldown--;
      } // update go


      _get(_getPrototypeOf(PlayerController.prototype), "update", this).call(this);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var key_state = event.type == "keydown";
      var key_code = event.keyCode;

      if (key_code in this.controlDict) {
        this.controlDict[key_code](key_state);
      } else {
        console.log("Key #".concat(key_code, " has no registered implementation"));
      }
    }
  }, {
    key: "prevMime",
    value: function prevMime() {
      // decrement, wrap back around if below 0
      var prevMime = this.currentMime > 0 ? this.currentMime - 1 : this.mimes.length - 1;
      this.switchMime(prevMime);
    }
  }, {
    key: "nextMime",
    value: function nextMime() {
      // increment, wrap back around if too high
      var nextMime = this.currentMime < this.mimes.length - 1 ? this.currentMime + 1 : 0;
      this.switchMime(nextMime);
    }
  }, {
    key: "switchMime",
    value: function switchMime(mimeID) {
      // if cooldown ongoing, ignore
      if (this.switchCooldown > 0) {
        return;
      }

      this.mimes[this.currentMime].setActive(false);
      this.mimes[mimeID].setActive(true);
      this.currentMime = mimeID;
      this.switchCooldown += 60;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var position = {
        x: 0,
        y: 0
      };
      position.x = this.mimes[this.currentMime].x + TILESIZE * 0.5;
      position.y = this.mimes[this.currentMime].y + TILESIZE * 0.5;
      return position;
    }
  }]);

  return PlayerController;
}(GameObject);