let colorCircles = [];

function setup() {
	let mv = document.getElementById("mv");
	let canvas = createCanvas(mv.offsetWidth, mv.offsetHeight);
	canvas.parent(mv);
	canvas.style("position", "absolute");
	canvas.style("top", "0");
	canvas.style("left", "0");
	canvas.style("z-index", "-1");
	background(255);
	for (let i = 0; i < 40; i++) {
		colorCircles.push(new colorCircle());
	}
}

function windowResized() {
	let mv = document.getElementById("mv");
	resizeCanvas(mv.offsetWidth, mv.offsetHeight);
}

function draw() {
	background(255);
	for (let colorCircle of colorCircles) {
		colorCircle.drawColorCircle();
		colorCircle.floatCircle()
	}
}

class colorCircle {
	// コンストラクタ
	constructor(x, y, size, circleColor, xSpeed, ySpeed, radius) {
		this.size = random(30, 100);
		this.radius = this.size / 2;
		this.x = random(this.radius, mv.offsetWidth - this.radius);
		this.y = random(this.radius, mv.offsetHeight - this.radius);
		this.circleColor = color(random(255), random(255), random(255), random(40, 70));
		this.xSpeed = random(-1, 1);
		this.ySpeed = random(-1, 1);
	}
	
	// 円を描画する
	drawColorCircle() {
		fill(this.circleColor);
		noStroke();
		circle(this.x, this.y, this.size);
	}
	
	// ふわふわさせる
	floatCircle() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		
		// 画面端に来たら反対方向へ
		if (this.x - this.radius < 0 || this.x + this.radius > mv.offsetWidth) {
			this.xSpeed *= -1;
		}
		if (this.y - this.radius < 0 || this.y + this.radius > mv.offsetHeight) {
			this.ySpeed *= -1;
		}
	}
}