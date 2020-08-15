class GameManager
{
  constructor()
  {

  }
  update()
  {
    // construct default frane
    ctx.fillStyle = "#aaaaaa"
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)

    // draw objects
    objectManager.updateAll()

    // draw UI
    let x = ctx.canvas.width - 50
    let y = ctx.canvas.height - 50
    ctx.fillStyle = "#000088"
    ctx.fillRect(x,y, -100, 10)
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.font = "normal bold 1em courier new"    
    ctx.fillText(`COOLDOWN`,x,y)

    // req next frame
    window.requestAnimationFrame(gameManager.update)
  }
}