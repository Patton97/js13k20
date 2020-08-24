class Mime extends CollidableGO
{
  constructor(type)
  {
    super(spriteDict[type])
    this.type = type
    this.type = type
    this.active = true
    this.marker = new Marker(type)
  }
  update()
  {
    
    super.update()
  }
  setActive(isActive)
  {
    //this.active = isActive
    this.marker.active = isActive
  }
  move(xAmount,yAmount)
  {
    this.moveTo(this.x + xAmount, this.y + yAmount)
  }
  moveTo(x, y)
  {
    this.x = x
    this.y = y
    this.marker.x = this.x 
    this.marker.y = this.y - (TILESIZE * 0.9)
  }

}
class MimeTXT extends Mime
{
  constructor() { super("text_plain") }
}
class MimeCSS extends Mime
{
  constructor() { super("text_css") }
}
class MimeJS extends Mime
{
  constructor() { super("text_javascript") }
}
class MimePNG extends Mime
{
  constructor() { super("image_png") }
}

// ********************************************************************************

class Marker extends GameObject
{
  constructor(type)
  {
    super(spriteDict[`${type}_marker`])
  }
}

// ********************************************************************************