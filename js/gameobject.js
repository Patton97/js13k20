class GameObject
{
  constructor()
  {
    this.x = 0
    this.y = 0
    objectManager.addObject(this)
    this.active = false
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