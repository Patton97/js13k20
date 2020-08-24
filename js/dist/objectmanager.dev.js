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
      // for every object
      for (var i = 0; i < this.objects.length - 1; i++) {
        var obj1 = this.objects[i]; // if obj1 isn't collidable, skip

        if (!(obj1 instanceof CollidableGO)) {
          continue;
        } // for each object, beginning with the object AFTER obj1 in the list


        for (var j = i + 1; j < this.objects.length - 1; j++) {
          var obj2 = this.objects[j]; // if obj2 isn't collidable, skip

          if (!(obj2 instanceof CollidableGO)) {
            continue;
          }

          if (this.checkCollision(obj1, obj2)) {
            obj1.processCollision(obj2);
            obj2.processCollision(obj1);
          }
        }
      }
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