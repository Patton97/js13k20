class Sprite
{
  constructor(sx, sy, sw, sh)
  {
    this.sx = sx || 0
    this.sy = sy || 0
    this.sw = sw || TILESIZE
    this.sh = sh || TILESIZE
  }
  draw(dx,dy,dw,dh)
  {
    dx = dx || 0
    dy = dy || 0
    dw = dw || this.sw
    dh = dh || this.sh
    ctx.drawImage(SPRITESHEET, this.sx,this.sy,this.sw,this.sh, dx,dy,dw,dh)
  }
}