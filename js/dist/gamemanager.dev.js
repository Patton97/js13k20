"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    _classCallCheck(this, GameManager);
  }

  _createClass(GameManager, [{
    key: "update",
    value: function update() {
      // since update() is invoked by window.reqanimframe, "this" is undefined
      // instead, we can fake it
      var _this = gameManager; // frame background

      ctx.fillStyle = "#aaaaaa";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // move camera   

      objectManager.updateAll();

      _this.drawUI(); // increment iFrame, loop back to 0 at 60


      iFrame = iFrame >= 60 ? 0 : iFrame + 1; // req next frame

      window.requestAnimationFrame(_this.update);
    }
  }, {
    key: "moveCamera",
    value: function moveCamera(moveAmount) {
      var playerPos = playerController.getPosition();

      if (playerPos.x <= CANVAS_WIDTH) {
        moveAmount.x = 0;
      }

      if (playerPos.y <= CANVAS_HEIGHT) {
        moveAmount.y = 0;
      }

      ctx.translate(-moveAmount.x, -moveAmount.y);
    }
  }, {
    key: "getCameraPos",
    value: function getCameraPos() {
      var pos = {
        x: 0,
        y: 0
      };
      var transform = ctx.getTransform();
      pos.x = -transform.e;
      pos.y = -transform.f;
      return pos;
    }
  }, {
    key: "drawUI",
    value: function drawUI() {
      // background
      ctx.fillStyle = "#000000";
      var ui_height = 100;
      var ui_yPos = ctx.canvas.height - ui_height;
      ctx.fillRect(0, ui_yPos, ctx.canvas.width, ui_height); // character selector

      var colours = ["#ffffff", "#5500ff", "#f0da50", "#888888"];
      var names = ["text/plain", "text/css", "text/javascript", "image/jpeg"];

      for (var i = 0; i < playerController.mimes.length; i++) {
        // background
        var xPos = 15 + i * 155;
        ctx.fillStyle = colours[i];
        ctx.fillRect(xPos, ui_yPos + 20, 145, 25); // text

        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.font = "normal bold 1em courier new";
        var headerTxt = "".concat(i + 1);

        if (playerController.currentMime === i) {
          headerTxt = "> ".concat(headerTxt, " <");
        }

        ctx.fillText(headerTxt, xPos + 72.5, ui_yPos + 15);
        ctx.fillStyle = "#000000";
        ctx.fillText(names[i], xPos + 72.5, ui_yPos + 35);
      } // stars


      ui_stars.forEach(function (star, i) {
        var xPos = 15 + i * 50;
        var yPos = ui_yPos + 55;
        star.draw(xPos, yPos);
      });
    }
  }]);

  return GameManager;
}();