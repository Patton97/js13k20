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
    // for every object
    for(let i = 0; i < this.objects.length - 1; i++)
    {
      let obj1 = this.objects[i]

      // if obj1 isn't collidable, skip
      if(!(obj1 instanceof CollidableGO)) { continue }

      // for each object, beginning with the object AFTER obj1 in the list
      for(let j = i + 1; j < this.objects.length - 1; j++)
      {
        let obj2 = this.objects[j]

        // if obj2 isn't collidable, skip
        if(!(obj2 instanceof CollidableGO)) { continue }

        if(this.checkCollision(obj1, obj2))
        {
          obj1.processCollision(obj2)
          obj2.processCollision(obj1)
        }
      }
    }
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