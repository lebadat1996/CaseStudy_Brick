let Paddle = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = SPEED_PADDLE;
    this.DrawPaddle = function () {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = 'darkgreen';
        context.fill();
        context.closePath();
    }
};
let paddle = new Paddle(x1_Paddle, Canvas.clientHeight - number_Paddle,DEFAULT_WIDTH,  DEFAULT_Height);
document.addEventListener('keydown', function (event) {
    if (event.keyCode === TURN_LEFT) {
        paddle.x -= paddle.speed;
    } else if (event.keyCode === TURN_RIGHT) {
        paddle.x += paddle.speed;
    }
    if (paddle.x < 0) {
        paddle.x = 0;
    } else if (paddle.x > Canvas.clientWidth - paddle.width) {
        paddle.x = Canvas.clientWidth - paddle.width;
    }
});