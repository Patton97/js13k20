class Player extends GameObject
{
  constructor()
  {
    super(spriteDict["txt"])

    this.mimes = [
      spriteDict["txt"],
      spriteDict["css"],
      spriteDict[ "js"],
      spriteDict["png"],
    ]
    this.currentMime = 0

    this.speed = 1

    this.up = false
    this.down = false
    this.left = false
    this.right = false

    this.switchCooldown = 0

    let _this = this // hack to ref this (playercontroller) rather than this (controlDict)
    this.controlDict = {
      "87": function(b) { _this.moveUp(b)    },
      "83": function(b) { _this.moveDown(b)  },
      "65": function(b) { _this.moveLeft(b)  },
      "68": function(b) { _this.moveRight(b) },
      "37": function(b) { if(b){_this.prevMime()} },
      "39": function(b) { _this.nextMime() }
    }
  }
  update()
  {
    if(this.up)    { this.y -= this.speed }
    if(this.down)  { this.y += this.speed }
    if(this.left)  { this.x -= this.speed }
    if(this.right) { this.x += this.speed }

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
  moveUp(keyDown)
  {
    this.up = keyDown
  }
  moveDown(keyDown)
  {
    this.down = keyDown
  }
  moveLeft(keyDown)
  {
    this.left = keyDown
  }
  moveRight(keyDown)
  {
    this.right = keyDown
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

    this.currentMime = mimeID
    this.sprite = this.mimes[mimeID]
    this.switchCooldown += 60
  }
}
