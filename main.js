var ctx = document.querySelector("canvas").getContext("2d")
ctx.canvas.height = 480
ctx.canvas.width = 640

const SPRITESHEET = new Image()
SPRITESHEET.src = `/images/spritesheet.png`

const TILESIZE = 32

// --------------------------------------------------------------------------------

class Sprite
{
  constructor(sx, sy, sw, sh)
  {
    this.sx = sx || 0
    this.sy = sy || 0
    this.sw = sw || TILESIZE
    this.sh = sh || TILESIZE
  }
  draw(dx,dy,dw,dh)
  {
    dx = dx || 0
    dy = dy || 0
    dw = dw || this.sw
    dh = dh || this.sh
    ctx.drawImage(SPRITESHEET, this.sx,this.sy,this.sw,this.sh, dx,dy,dw,dh)
  }
}
var spriteDict = {
  css : new Sprite(TILESIZE * 0, TILESIZE * 0),
   js : new Sprite(TILESIZE * 1, TILESIZE * 0),
  png : new Sprite(TILESIZE * 2, TILESIZE * 0),
  txt : new Sprite(TILESIZE * 3, TILESIZE * 0)
}

// --------------------------------------------------------------------------------

class ObjectManager
{
  constructor()
  { 
    this.objects = []
  }
  addObject(object)
  {
    this.objects.push(object)
  }
  updateAll()
  {
    this.objects.forEach(obj=>{obj.update()})
  }
}
var objectManager = new ObjectManager

// --------------------------------------------------------------------------------

class GameManager
{
  constructor()
  {
    
  }
  update()
  {
    //Construct initial frame
    ctx.fillStyle = "#aaaaaa";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    window.requestAnimationFrame(gameManager.update)

    objectManager.updateAll()
  }
}
var gameManager = new GameManager

// --------------------------------------------------------------------------------

class GameObject
{
  constructor(sprite)
  {
    this.sprite = sprite
    this.x = 0
    this.y = 0
    objectManager.addObject(this)
  }
  update()
  {
    this.sprite.draw(this.x, this.y)
  }
}
var css = new GameObject(spriteDict["css"])
var  js = new GameObject(spriteDict[ "js"])
var png = new GameObject(spriteDict["png"])
var txt = new GameObject(spriteDict["txt"])
css.x += TILESIZE * 1
js.x  += TILESIZE * 2
png.x += TILESIZE * 3

//Keyboard controls
/*
window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup",   controller.keyListener)
*/
//Instigate game loop
window.requestAnimationFrame(gameManager.update)