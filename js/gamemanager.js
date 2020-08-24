class GameManager
{
  constructor()
  {
    
  }
  update()
  {
    // since update() is invoked by window.reqanimframe, "this" is undefined
    // instead, we can fake it
    let _this = gameManager

    // frame background
    ctx.fillStyle = "#aaaaaa"
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)

    // move camera   

    objectManager.updateAll()
    _this.drawUI()

    // increment iFrame, loop back to 0 at 60
    iFrame = (iFrame >= 60) ? 0 : iFrame+1
    // req next frame
    window.requestAnimationFrame(_this.update)
  }
  moveCamera(moveAmount)
  {
    let playerPos = playerController.getPosition()
    if(playerPos.x <= CANVAS_WIDTH) { moveAmount.x = 0}
    if(playerPos.y <= CANVAS_HEIGHT) { moveAmount.y = 0}
    ctx.translate(-moveAmount.x,-moveAmount.y)
  }
  getCameraPos()
  {
    let pos = {x:0, y:0}
    let transform = ctx.getTransform()
    pos.x = -transform.e
    pos.y = -transform.f
    return pos
  }
  drawUI()
  {
    // background
    ctx.fillStyle = `#000000`
    let ui_height = 100
    let ui_yPos = ctx.canvas.height - ui_height
    ctx.fillRect(0, ui_yPos, ctx.canvas.width, ui_height)

    // character selector
    let colours = [`#ffffff`,`#5500ff`, `#f0da50`, `#888888`]
    let names = [`text/plain`, `text/css`, `text/javascript`, `image/jpeg`]
    
    for(let i = 0; i<playerController.mimes.length; i++)
    {
      // background
      let xPos = 15 + ( i * 155 )
      ctx.fillStyle = colours[i]
      ctx.fillRect(xPos, ui_yPos + 20, 145,25)

      // text
      ctx.fillStyle = `#ffffff`
      ctx.textAlign = `center`
      ctx.font = `normal bold 1em courier new`
      let headerTxt = `${i+1}`
      if(playerController.currentMime === i) { headerTxt = `> ${headerTxt} <` }
      ctx.fillText(headerTxt, xPos+72.5, ui_yPos+15)
      ctx.fillStyle = `#000000`
      ctx.fillText(names[i], xPos+72.5, ui_yPos+35)      
    }
    // stars
    ui_stars.forEach((star,i) => 
    {
      let xPos = 15 + ( i * 50 )
      let yPos = ui_yPos+55
      star.draw(xPos, yPos)
    })
  }
}