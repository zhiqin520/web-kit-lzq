class Canvas{

  constructor(startX=100, startY=100, width=20, height=20, cw =400, ch=300) {
    this.startX = startX;//矩形开始坐标
    this.startY = startY;//矩形结束坐标
    this.width = width;//矩形宽度
    this.height = height;//矩形高度
    this.cw = cw;//canvas宽度
    this.ch = ch; //canvas高度
    this.ml = 1;//每次移动长度
    this.mx = 0;//0右1左
    this.my = 0;//0下1上
    this.id = 'myCanvas';
    this.draw20();
  }

  draw20() {
    let canvas = document.getElementById(this.id);
    if (canvas == null)
      return false;
    let context = canvas.getContext("2d");

    let interal = setInterval(()=> {
      this.move(context);
    }, 10);
  }

  move(context) {
    context.clearRect(0, 0, 400, 300);
    context.fillStyle = "#EEEEFF";
    context.fillRect(0, 0, 400, 300);
    context.fillStyle = "red";
    context.fillRect(this.startX, this.startY, this.width, this.height);

    if (this.mx === 0) {
      this.startX = this.startX + this.ml;
      if (this.startX >= this.cw-this.width) {
        this.mx = 1;
      }
    }else {
      this.startX = this.startX - this.ml;
      if (this.startX <= 0) {
        this.mx = 0;
      }
    }

    if (this.my === 0) {
      this.startY = this.startY + this.ml;
      if (this.startY >= this.ch-this.height) {
        this.my = 1;
      }
    }else {
      this.startY = this.startY - this.ml;
      if (this.startY <= 0) {
        this.my = 0;
      }
    }
  }
}

export default Canvas;


