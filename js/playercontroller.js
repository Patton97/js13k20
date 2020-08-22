
class PlayerController extends GameObject
{
  constructor()
  {
    super()

    this.mimes = [ new MimeTXT, new MimeCSS, new MimeJS, new MimePNG ]
    this.currentMime = 0

    this.speed = 1

    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.switchCooldown = 0

    let _this = this // hack to ref this (playercontroller) rather than this (controlDict)
    // b: true = keydown, false = keyup
    this.controlDict = {
      "87" : function(b) { _this.up = b    }, // W
      "83" : function(b) { _this.down = b  }, // S
      "65" : function(b) { _this.left = b  }, // A
      "68" : function(b) { _this.right = b }, // D
      "37" : function(b) { if(b){_this.prevMime()} }, // left arrow
      "39" : function(b) { if(b){_this.nextMime()} }, // right arrow
      "49" : function(b) { _this.switchMime(0) }, // Digit1
      "50" : function(b) { _this.switchMime(1) }, // Digit2
      "51" : function(b) { _this.switchMime(2) }, // Digit3
      "52" : function(b) { _this.switchMime(3) }, // Digit4
      "97" : function(b) { _this.switchMime(0) }, // Numpad1
      "98" : function(b) { _this.switchMime(1) }, // Numpad2
      "99" : function(b) { _this.switchMime(2) }, // Numpad3
      "100": function(b) { _this.switchMime(3) }, // Numpad4
    }

    this.switchMime(0)
  }
  update()
  {
    let moveAmount = {x: 0, y: 0}
    if(this.up)    { moveAmount.y -= this.speed }
    if(this.down)  { moveAmount.y += this.speed }
    if(this.left)  { moveAmount.x -= this.speed }
    if(this.right) { moveAmount.x += this.speed }

    this.mimes[this.currentMime].move(moveAmount.x, moveAmount.y)
    gameManager.moveCamera(moveAmount)

    if(this.switchCooldown > 0) { this.switchCooldown-- }

    // update go
    super.update()
  }
  handleEvent(event)
  {
    let key_state = (event.type == "keydown")
    let key_code = event.keyCode
    if(key_code in this.controlDict)
    {
      this.controlDict[key_code](key_state)
    }
    else
    {
      console.log(`Key #${key_code} has no registered implementation`)
    }
  }
  prevMime()
  {
    // decrement, wrap back around if below 0
    let prevMime = this.currentMime > 0 ? this.currentMime - 1 : this.mimes.length - 1    
    this.switchMime(prevMime)
  }
  nextMime()
  {
    // increment, wrap back around if too high
    let nextMime = this.currentMime < this.mimes.length - 1 ? this.currentMime + 1 : 0
    this.switchMime(nextMime)
  }
  switchMime(mimeID)
  {
    // if cooldown ongoing, ignore
    if(this.switchCooldown > 0) { return; }

    this.mimes[this.currentMime].setActive(false)
    this.mimes[mimeID].setActive(true)
    this.currentMime = mimeID
    
    this.switchCooldown += 60
  }
  getPosition()
  {
    let position = { x: 0, y: 0}
    position.x = this.mimes[this.currentMime].x + (TILESIZE*0.5)
    position.y = this.mimes[this.currentMime].y + (TILESIZE*0.5)
    return position
  }
}
