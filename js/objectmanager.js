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