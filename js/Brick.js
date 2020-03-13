let Brick = function () {
    this.offsetX = DEFAULT_BRICK_OFFSET_X;
    this.offsetY = DEFAULT_BRICK_OFFSET_Y;
    this.margin = DEFAULT_BRICK_MARGIN ;
    this.width = DEFAULT_BRICK_WIDTH;
    this.height = DEFAULT_BRICK_HEIGHT;
    this.totalRow = DEFAULT_BRICK_TOTAL_ROW;
    this.totalCol = DEFAULT_BRICK_TOTAL_COL;
    this.BrickList = [];
    for (let i = 0; i < this.totalRow; i++) {
        for (let j = 0; j < this.totalCol; j++) {
            this.BrickList.push({
                x: this.offsetX + j * (this.width + this.margin),
                y: this.offsetY + i * (this.height + this.margin),
                isBroken: false
            })
        }
    }
    this.DrawBrick = function () {
        brick.BrickList.forEach(function (b) {
            if (!b.isBroken) {
                context.beginPath();
                context.rect(b.x, b.y, brick.width, brick.height);
                context.fillStyle = 'brown';
                context.fill();
                context.closePath();
            }
        })
    }
};
let brick = new Brick();
let UserScore = 0;
let MaxScore = (brick.totalRow * brick.totalCol);