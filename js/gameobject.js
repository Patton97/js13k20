class GameObject
{
  constructor()
  {
    this.x = 0
    this.y = 0
    objectManager.addObject(this)
    this.active = false
    this.collidable = false
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
  addCollider(width, height, offsetX, offsetY)
  {
    width = width || this.sprite.sw
    height = height || this.sprite.sh
    offsetX = offsetX || 0
    offsetY = offsetY || 0
    this.collider = { x: offsetX, y: offsetY, w: width, h: height}
    this.collidable = true
    this.colliding = false
    console.log(`added collider: {${this.collider.x},${this.collider.y},${this.collider.w},${this.collider.h}}`)
  }
}