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
    this.checkAllCollisions() 
  }
  checkAllCollisions()
  {
    // inefficient af, lots of redundant checks, but its a jam so who cares
    this.objects.forEach(obj1=>{
      // if obj1 isn't collidable, skip
      if(!obj1.collidable) { return }
      // at the start of each frame, we assume no collisions until they are (re)found
      obj1.colliding = false 

      this.objects.forEach(obj2=>{
        // if obj2 isn't collidable, skip
        if(!obj2.collidable) { return }
        // if obj1 and obj2 are the same object, skip
        if(obj1 === obj2) { return }
        
        if(this.checkCollision(obj1, obj2))
        {
          obj1.colliding = true
          obj2.colliding = true
        }
      })
      
      // DEBUG: Draw green square 
      ctx.fillStyle = obj1.colliding ? `#00ff00` : `#ff0000`
      ctx.fillRect(obj1.x + obj1.collider.x, obj1.y + obj1.collider.y, obj1.collider.w, obj1.collider.h)
    })
  }
  checkCollision(obj1, obj2)
  {
    let x1 = obj1.x + obj1.collider.x
    let y1 = obj1.y + obj1.collider.y
    let w1 = obj1.collider.w
    let h1 = obj1.collider.h

    let x2 = obj2.x + obj2.collider.x
    let y2 = obj2.y + obj2.collider.y
    let w2 = obj2.collider.w
    let h2 = obj2.collider.h

    if(x1 < (x2 + w2)
    && x2 < (x1 + w1)
    && y1 < (y2 + h2)
    && y2 < (y1 + h1))
    {
      return true
    }
    return false
  }
}