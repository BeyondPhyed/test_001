let rad = 10;
let xpos, vx, ax, dt;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	ellipseMode(RADIUS);
	xpos = windowWidth/8;
    ypos = windowHeight/2;
	vx = 0;  //초기속도
	ax = 80;  //초기 가속도
    dt = 0.1;  //시간간격
}

//반복적 작동 부분
function draw() {
	vx += ax*dt;  //y방향 초기 가속도
	xpos += vx*dt;  //y방향 초기 가속도
	ellipse(xpos, ypos, rad, rad);
}