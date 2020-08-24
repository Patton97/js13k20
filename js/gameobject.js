class GameObject
{
  constructor(sprite)
  {
    this.x = 0
    this.y = 0
    objectManager.addObject(this)
    this.active = false
    this.setSprite(sprite)
  }
  setSprite(sprite)
  {
    this.sprite = sprite
  }
  update()
  {
    //skip if not drawable
    if(this.sprite === undefined || this.sprite === null) { return }
    //skip if tagged as inactive
    if(!this.active) { return }

    //draw sprite
    this.sprite.draw(this.x, this.y)
  }
  isOnScreen()
  {
    
  }
  
}

class CollidableGO extends GameObject
{
  constructor(sprite, width, height, offsetX, offsetY)
  {
    super(sprite)
    this.collider = {} 
    this.collider.x = offsetX || 0
    this.collider.y = offsetY || 0
    this.collider.w = width   || this.sprite.sw
    this.collider.h = height  || this.sprite.sh
  }
  update()
  {
    super.update()
    ctx.fillStyle = `#ff0000`
    ctx.fillRect(this.x + this.collider.x, this.y + this.collider.y, this.collider.w, this.collider.h)
  }
  processCollision()
  {
    ctx.fillStyle = `#00ff00`
    ctx.fillRect(this.x + this.collider.x, this.y + this.collider.y, this.collider.w, this.collider.h)
  }
}

/* BUTTON PADS */
class ButtonPad extends CollidableGO
{
  constructor()
  {
    super()
    this.pressed = false
  }
  processCollision(other)
  {
    console.log(other.constructor.name)
  }
}
