"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectManager =
/*#__PURE__*/
function () {
  function ObjectManager() {
    _classCallCheck(this, ObjectManager);

    this.objects = [];
  }

  _createClass(ObjectManager, [{
    key: "addObject",
    value: function addObject(object) {
      this.objects.push(object);
    }
  }, {
    key: "updateAll",
    value: function updateAll() {
      this.objects.forEach(function (obj) {
        obj.update();
      });
      this.checkAllCollisions();
    }
  }, {
    key: "checkAllCollisions",
    value: function checkAllCollisions() {
      var _this = this;

      // inefficient af, lots of redundant checks, but its a jam so who cares
      this.objects.forEach(function (obj1) {
        // if obj1 isn't collidable, skip
        if (!obj1.collidable) {
          return;
        } // at the start of each frame, we assume no collisions until they are (re)found


        obj1.colliding = false;

        _this.objects.forEach(function (obj2) {
          // if obj2 isn't collidable, skip
          if (!obj2.collidable) {
            return;
          } // if obj1 and obj2 are the same object, skip


          if (obj1 === obj2) {
            return;
          }

          if (_this.checkCollision(obj1, obj2)) {
            obj1.colliding = true;
            obj2.colliding = true;
          }
        }); // DEBUG: Draw green square 


        ctx.fillStyle = obj1.colliding ? "#00ff00" : "#ff0000";
        ctx.fillRect(obj1.x + obj1.collider.x, obj1.y + obj1.collider.y, obj1.collider.w, obj1.collider.h);
      });
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(obj1, obj2) {
      var x1 = obj1.x + obj1.collider.x;
      var y1 = obj1.y + obj1.collider.y;
      var w1 = obj1.collider.w;
      var h1 = obj1.collider.h;
      var x2 = obj2.x + obj2.collider.x;
      var y2 = obj2.y + obj2.collider.y;
      var w2 = obj2.collider.w;
      var h2 = obj2.collider.h;

      if (x1 < x2 + w2 && x2 < x1 + w1 && y1 < y2 + h2 && y2 < y1 + h1) {
        return true;
      }

      return false;
    }
  }]);

  return ObjectManager;
}();