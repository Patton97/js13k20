var ctx = document.querySelector("canvas").getContext("2d")
ctx.canvas.height = 480
ctx.canvas.width = 640

const SPRITESHEET = new Image()
SPRITESHEET.src = `/images/spritesheet.png`

const TILESIZE = 32

var spriteDict = {
  css : new Sprite(TILESIZE * 0, TILESIZE * 0),
   js : new Sprite(TILESIZE * 1, TILESIZE * 0),
  png : new Sprite(TILESIZE * 2, TILESIZE * 0),
  txt : new Sprite(TILESIZE * 3, TILESIZE * 0)
}

var objectManager = new ObjectManager
var gameManager = new GameManager
var player = new Player

window.addEventListener("keydown", player)
window.addEventListener("keyup",   player)