var diameter=0x12c,snelheid=0x1,blueBallY=0x0,greenBallY=0x1c2;function setup(){canvas=createCanvas(0x1c2,0x1c2),colorMode(RGB,0xff,0xff,0xff,0x1),frameRate(0x32),noStroke();}function draw(){background(0xff,0xff,0xff,0x1),fill(0xff,0x0,0x0,0.5),ellipse(width/0x2,height/0x2,diameter),fill(0x0,0xff,0x0,0.5),ellipse(width/0x2,greenBallY,diameter),fill(0x0,0x0,0xff,0.5),ellipse(width/0x2,blueBallY,diameter),greenBallY-=snelheid,blueBallY+=snelheid;}