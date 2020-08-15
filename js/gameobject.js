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