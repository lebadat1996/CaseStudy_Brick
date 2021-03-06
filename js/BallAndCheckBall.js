let Canvas = document.getElementById("canvas");
let context = Canvas.getContext('2d');
let isGameOver = false;
let isGameWin = false;
let Ball = function (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.drawBall = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = 'red';
        context.fill();
        context.closePath();
    };
    this.updateBallPosition = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
    this.HandlingCollisions = function () {
        if (this.x < this.radius || this.x > Canvas.clientWidth - this.radius) {
            this.dx = -this.dx;
        }
        if ((this.y < this.radius)) {
            this.dy = -this.dy;
        }
    };
    this.checkBallWidthBorder = function () {
        if (this.y > Canvas.clientHeight - this.radius) {
            isGameOver = true;
        }
    };
    this.checkBallWidthPaddle = function () {
        if (this.x + this.radius >= paddle.x
            && this.x + this.radius <= paddle.x + paddle.width
            && this.y + this.radius >= Canvas.clientHeight - paddle.height) {
            this.dy = -this.dy;
        }
    };
    this.checkBallWidthBrick = function () {
        brick.BrickList.forEach(function (b) {
            if (!b.isBroken) {
                if (ball.x >= b.x && ball.x <= b.x + brick.width &&
                    ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y + brick.height) {
                    ball.dy = -ball.dy;
                    b.isBroken = true;
                    UserScore += DEFAULT_SCORE_INCREASED;
                    if (UserScore < Score_Check) {
                        ball.dx++;
                        console.log(ball.dx);
                        ball.dy++;
                        console.log(ball.dy);
                    } else {
                        ball.dx = ball.dx + Change_dx;
                        console.log(ball.dx);
                        ball.dy = ball.dy + Change_dy;
                        console.log(ball.dy);
                    }
                    document.getElementById("score").innerHTML = "Score: " + UserScore;
                    if (UserScore === MaxScore) {
                        isGameOver = true;
                        isGameWin = true;
                    }

                }
            }
        })
    }
};


let ball = new Ball(x1_Ball, Canvas.clientHeight - numberBall, DEFAULT_dx, DEFAULT_dy, DEFAULT_Radius);