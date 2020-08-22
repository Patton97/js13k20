"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameObject =
/*#__PURE__*/
function () {
  function GameObject() {
    _classCallCheck(this, GameObject);

    this.x = 0;
    this.y = 0;
    objectManager.addObject(this);
    this.active = false;
    this.collidable = false;
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
  }, {
    key: "addCollider",
    value: function addCollider(width, height, offsetX, offsetY) {
      width = width || this.sprite.sw;
      height = height || this.sprite.sh;
      offsetX = offsetX || 0;
      offsetY = offsetY || 0;
      this.collider = {
        x: offsetX,
        y: offsetY,
        w: width,
        h: height
      };
      this.collidable = true;
      this.colliding = false;
      console.log("added collider: {".concat(this.collider.x, ",").concat(this.collider.y, ",").concat(this.collider.w, ",").concat(this.collider.h, "}"));
    }
  }]);

  return GameObject;
}();