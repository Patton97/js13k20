"use strict";

var CANVAS_WIDTH = 640;
var CANVAS_HEIGHT = 480;
var ctx = document.querySelector("canvas").getContext("2d");
ctx.canvas.width = CANVAS_WIDTH;
ctx.canvas.height = CANVAS_HEIGHT;
var SPRITESHEET = new Image();
SPRITESHEET.src = "/images/spritesheet.png";
var TILESIZE = 32;
var spriteDict = {
  text_css_marker: new Sprite(TILESIZE * 0, TILESIZE * 0),
  text_javascript_marker: new Sprite(TILESIZE * 1, TILESIZE * 0),
  image_png_marker: new Sprite(TILESIZE * 2, TILESIZE * 0),
  text_plain_marker: new Sprite(TILESIZE * 3, TILESIZE * 0),
  text_css: new Sprite(TILESIZE * 0, TILESIZE * 1),
  text_javascript: new Sprite(TILESIZE * 1, TILESIZE * 1),
  image_png: new Sprite(TILESIZE * 2, TILESIZE * 1),
  text_plain: new Sprite(TILESIZE * 3, TILESIZE * 1),
  star_inactive: new Sprite(TILESIZE * 0, TILESIZE * 2),
  star_active: new Sprite(TILESIZE * 1, TILESIZE * 2)
};
var ui_stars = [];

for (var i = 0; i < 5; i++) {
  ui_stars.push(new UI_Star());
}

ui_stars[1].setActive(true);
ui_stars[2].setActive(true);
var objectManager = new ObjectManager();
var gameManager = new GameManager();
var playerController = new PlayerController();
window.addEventListener("keydown", playerController);
window.addEventListener("keyup", playerController);