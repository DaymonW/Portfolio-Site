let player;
let platforms = [];

let pressedKeys = {};

var levelNum = 0;

let debugMode = false;

let startMenu = true;
let startButton;
let optionButton;
let optionMenu = false;
let controlsButton;
let startText;
let backToStartButton;
let speedInput;
let winScreen;

let defaultSpeed = 8;
let globalSpeed;

let defaultControls = true;

//Sprites
let flagImg;
let arrowLeftRightImg;
let arrowUpDownImg;
let introAnim1;

let debugLevel = [{type: "basic", x: 1300, y: 750, width: 300, height: 50},
              {type: "move", x: 800, y: 750, width: 300, height: 50},
              {type: "moveUp", x: 100, y: 450, width: 50, height: 300},
              {type: "bounce", x: 1500, y: 700, width: 100, height: 50},
              {type: "basic", x: 1000, y: 500, width: 300, height: 50},
              {type: "death", x: 300, y: 750, width: 300, height: 50},
              {type: "win", x: 200, y: 300},
              {type: "spawn", x: 1500, y: 0}
             ];

let level0 = [{type: "basic", x: 1300, y: 750, width: 100, height: 250},
              {type: "basic", x: 1000, y: 600, width: 100, height: 400},
              {type: "basic", x: 700, y: 450, width: 100, height: 550},
              {type: "basic", x: 200, y: 350, width: 300, height: 50},
              {type: "death", x: 0, y: 950, width: 1300, height: 50},
              {type: "win", x: 200, y: 300},
              {type: "spawn", x: 1500, y: 0}
             ];
let level1 = [{type: "basic", x: 400, y: 750, width: 100, height: 250},
              {type: "basic", x: 700, y: 600, width: 100, height: 400},
              {type: "basic", x: 1000, y: 450, width: 100, height: 550},
              {type: "move", x: 1300, y: 200, width: 300, height: 50},
              {type: "basic", x: 200, y: 150, width: 300, height: 50},
              {type: "death", x: 400, y: 950, width: 1500, height: 50},
              {type: "win", x: 200, y: 100},
              {type: "spawn", x: 50, y: 200}
             ];
let level2 = [{type: "move", x: 0, y: 300, width: 350, height: 50},
              {type: "basic", x: 0, y: 0, width: 50, height: 300},
              {type: "basic", x: 300, y: 0, width: 50, height: 300},
              {type: "move", x: 800, y: 600, width: 300, height: 50},
              {type: "basic", x: 1300, y: 400, width: 300, height: 50},
              {type: "death", x: -100, y: 950, width: 2000, height: 50},
              {type: "win", x: 1550, y: 350},
              {type: "spawn", x: 100, y: 0}
             ];
let level3 = [{type: "basic", x: 1500, y: 400, width: 450, height: 50},
              {type: "basic", x: 600, y: 400, width: 300, height: 50},
              {type: "bounce", x: 1100, y: 800, width: 100, height: 50},
              {type: "death", x: 0, y: 950, width: 1900, height: 50},
              {type: "win", x: 600, y: 350},
              {type: "spawn", x: 1750, y: 300}
             ];
let level4 = [{type: "bounce", x: 150, y: 950, width: 500, height: 50},
              {type: "basic", x: 100, y: 0, width: 50, height: 800},
              {type: "basic", x: 450, y: 200, width: 50, height: 800},
              {type: "move", x: 150, y: 400, width: 300, height: 50},
              {type: "basic", x: 1000, y: 200, width: 300, height: 50},
              {type: "death", x: 500, y: 950, width: 1500, height: 50},
              {type: "win", x: 1250, y: 150},
              {type: "spawn", x: 50, y: 200}
             ];
let level5 = [{type: "basic", x: 1500, y: 200, width: 500, height: 50},
              {type: "moveUp", x: 1500, y: -100, width: 50, height: 300},
              {type: "basic", x: 1600, y: 500, width: 300, height: 50},
              {type: "basic", x: 900, y: 500, width: 300, height: 50},
              {type: "death", x: 0, y: 950, width: 1950, height: 50},
              {type: "win", x: 1850, y: 450},
              {type: "spawn", x: 1700, y: 100}
             ];
  function preload() {
    flagImg = loadImage('Images/flag.png');
    arrowLeftRightImg = loadImage('Images/arrow-left-rightWhite.png');
    arrowUpDownImg = loadImage('Images/arrow-up-downWhite.png');
  }

  function setup() {

    startWindowWidth = windowWidth;
    startWindowHeight = windowHeight;

    globalSpeed = defaultSpeed;

    if (startMenu) {
      createStartMenu();
    } else {
      loadLevel(level0);
    }
    
    

    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(220);
    if (startMenu) {
      textSize(64);
      text('PUZZLE PLATFORMER', startWindowWidth/2 - 300, startWindowHeight/2 - 128);  
    } else if(optionMenu) {
      textSize(64);
      text('Controls: ', startWindowWidth/2 - 300, startWindowHeight/2 - 128);
      text('Player Speed: ', startWindowWidth/2 - 300, startWindowHeight/2);
    } else if(winScreen) {
      textSize(64);
      text('CONGRATULATIONS', startWindowWidth/2 - 300, startWindowHeight/2 - 128);
      text('YOU FINISHED THE GAME', startWindowWidth/2 - 375, startWindowHeight/2 - 64);    
    } else {
      for (let i=0; i < platforms.length; i++) {
        platforms[i].display();
  
        if (platforms[i] instanceof movablePlatform || platforms[i] instanceof movablePlatformUp) {
          platforms[i].update();
        } else if (platforms[i] instanceof winPoint) {
          platforms[i].checkForPlayer(player);
        } else if (platforms[i] instanceof deathBarrier) {
          platforms[i].killPlayer(player);
        } else if (platforms[i] instanceof bouncePad) {
          platforms[i].bouncePlayer(player);
        } //else if (platforms[i] instanceof teleporterDoor) {
        //   platforms[i].teleportPlayer(player);
        // }
      }
  
      player.display();
      player.update();
      // player.moveWithWindow();
      player.collision();
      player.fall();
      player.debug();
    }
  }

  function startGame() {
    startButton.remove();
    optionButton.remove();
    startMenu = false;
    optionMenu = false;
    loadLevel(level0);
  }

  function createStartMenu() {
    startMenu = true;

    startButton = createButton("Start");
    startButton.position(windowWidth/2 - 250, windowHeight/2 - 50);
    startButton.style('background-color', "white");
    startButton.size(250, 100);
    startButton.mousePressed(startGame);

    optionButton = createButton("Options");
    optionButton.position(windowWidth/2 + 125, windowHeight/2 - 50);
    optionButton.style('background-color', "white");
    optionButton.size(250, 100);
    optionButton.mousePressed(createOptions);
  }

  function createOptions() {
    optionMenu = true;
    startMenu = false;
    startButton.remove();
    optionButton.remove();


    controlsButton = createButton("WASD");
    controlsButton.position(startWindowWidth/2, startWindowHeight/2 - 200);
    controlsButton.style('background-color', "white");
    controlsButton.size(250, 100);
    controlsButton.mousePressed(changeControls);

    backToStartButton = createButton("Back");
    backToStartButton.position(startWindowWidth/2 - 125, startWindowHeight/2 + 200);
    backToStartButton.style('background-color', "white");
    backToStartButton.size(250, 100);
    backToStartButton.mousePressed(backToStart);

    speedInput = createInput(globalSpeed);
    speedInput.position(startWindowWidth/2 + 150, startWindowHeight/2 - 50);
    speedInput.size(300, 50);
    speedInput.attribute('type', 'number');
    speedInput.input(changeSpeed);
  }

  function changeSpeed() {
    globalSpeed = this.value();
    globalSpeed = parseInt(globalSpeed);
  }

  function backToStart() {
    if (optionMenu || startMenu) {
      controlsButton.remove();
      speedInput.remove();
      backToStartButton.remove();
    }
    if (winScreen) {
      backToStartButton.remove();
    }
    optionMenu = false;
    winScreen = false;  
    createStartMenu();
  }

  function changeControls() {
    if (defaultControls) {
      defaultControls = false;
      controlsButton.html("↑↓←→");
    } else {
      defaultControls = true;
      controlsButton.html("WASD");
    }
  }

  function keyPressed() {
    pressedKeys[key] = true;
    if (keyCode == 85) {
      if (debugMode) {
        nextLevel();
      }
    } else if (keyCode == 70) {
      if (debugMode) {
        debugMode = false;
      } else {
        debugMode = true;
      }
    } else if (keyCode == 27) {
      if (!startMenu && !optionMenu && !winScreen) {
        backToStart();
      }
    }
  }
  
  function keyReleased() {
    delete pressedKeys[key];
  }

  function mousePressed() {
    for (let i=0; i < platforms.length; i++) {
      if (platforms[i] instanceof movablePlatform || platforms[i] instanceof movablePlatformUp) {
        platforms[i].pressed();
      } 
    }
  }
  
  function mouseReleased() {
    for (let i=0; i < platforms.length; i++) {
      if (platforms[i] instanceof movablePlatform || platforms[i] instanceof movablePlatformUp) {
        platforms[i].release();
      }
    }
  }

  function nextLevel() {
    var nextLvlNum = levelNum + 1;
    if (nextLvlNum == 6) {
      winScreen = true;
      backToStartButton = createButton("Back");
      backToStartButton.position(startWindowWidth/2 - 125, startWindowHeight/2 + 200);
      backToStartButton.style('background-color', "white");
      backToStartButton.size(250, 100);
      backToStartButton.mousePressed(backToStart);
      levelNum = 0;
    } else {
      var nextLvl = eval("level" + nextLvlNum);
      levelNum++;
      loadLevel(nextLvl); 
    }
    
  }

  function loadLevel(lvl) {

    platforms = [];

    for (i=0; i < lvl.length; i++) {
      if (lvl[i].type == "basic") {
        platforms.push(new basicPlatform(lvl[i].x, lvl[i].y, lvl[i].width, lvl[i].height));
      } else if (lvl[i].type == "move") {
        platforms.push(new movablePlatform(lvl[i].x, lvl[i].y, lvl[i].width, lvl[i].height));
      } else if (lvl[i].type == "moveUp") {
        platforms.push(new movablePlatformUp(lvl[i].x, lvl[i].y, lvl[i].width, lvl[i].height));
      } else if (lvl[i].type == "win") {
        platforms.push(new winPoint(lvl[i].x, lvl[i].y));
      } else if (lvl[i].type == "spawn") {
        player = new Player(lvl[i].x, lvl[i].y, 50);
      } else if (lvl[i].type == "death") {
        platforms.push(new deathBarrier(lvl[i].x, lvl[i].y, lvl[i].width, lvl[i].height));
      } else if (lvl[i].type == "bounce") {
        platforms.push(new bouncePad(lvl[i].x, lvl[i].y, lvl[i].width, lvl[i].height));
      } //else if (lvl[i].type == "door") {
      //   var door = lvl.find(({ doorID }) => doorID === lvl[i].assoDoor);
      //   console.log(door);
      //   platforms.push(new teleporterDoor(lvl[i].x, lvl[i].y, lvl[i].width, lvl[i].height, door));
      // }
    }
  }

  class Player {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.velocity = 0;
        this.accel = 1;
        this.speed = globalSpeed;

        this.isFalling = true;

        this.colSide;

        this.hasTeleported;
    }

    update() {
        // Move
        let mvmt = createVector(0, 0);
        if (defaultControls) {
          if(pressedKeys.a && this.x > 0) {
            mvmt.x -= 1;
          }
          if(pressedKeys.d && this.x < windowWidth - this.radius) {
            mvmt.x += 1;
          }
          if(pressedKeys.w) {
            this.jump();
          }
        } else {
          if(pressedKeys.ArrowLeft && this.x > 0) {
            mvmt.x -= 1;
          }
          if(pressedKeys.ArrowRight && this.x < windowWidth - this.radius) {
            mvmt.x += 1;
          }
          if(pressedKeys.ArrowUp) {
            this.jump();
          }
        }
        
        
        mvmt.setMag(this.speed);
        
        this.x += mvmt.x;
    }

    // moveWithWindow() {
    //   if (this.x > windowWidth - this.radius) {
    //     this.x = windowWidth - this.radius;
    //   } else if (this.x < 0) {
    //     this.x = 0 + this.radius;
    //   }
    // }

    fall() {
        if (this.isFalling == true) {
          this.velocity += this.accel;
          this.y += this.velocity;
        }
    }

    collision() {
      this.colSide = "none";
      // Check all platforms
      for (let p=0; p < platforms.length; p++) {

        if (this.y < platforms[p].y + platforms[p].height && this.y + this.radius > platforms[p].y) {
          if(this.x + this.radius >= platforms[p].x && this.x + this.radius <= platforms[p].x + platforms[p].width/2) {
            this.x = platforms[p].x - this.radius;
            this.colSide = "right";
          } else if (this.x <= platforms[p].x + platforms[p].width && this.x >= platforms[p].x + platforms[p].width/2) {
            this.x = platforms[p].x + platforms[p].width;
            this.colSide = "left";
          }
        }

        if (this.x < platforms[p].x + platforms[p].width && this.x + this.radius > platforms[p].x) {
          if (this.y + this.radius + this.velocity >= platforms[p].y && this.y + this.radius + this.velocity <= platforms[p].y + platforms[p].height) {
            this.isFalling = false;
            this.velocity = 0;
            this.y = platforms[p].y - this.radius;
            this.colSide = "bottom";
          } else if (this.y + this.velocity <= platforms[p].y + platforms[p].height && this.y + this.velocity >= platforms[p].y + platforms[p].height/2) {
            this.velocity = 0;
            this.y = platforms[p].y + platforms[p].height;
            this.colSide = "top";
          }
        } else if (this.y + this.radius >= platforms[p].y && this.colSide == 'none') {
          this.isFalling = true;
        }
      }

      if (this.y >= height - 50) {
        this.isFalling = false;
        this.velocity = 0;
        this.colSide = "bottom";
        this.y = height - 50;
      }
      
    }

    jump() {
      if (this.isFalling == false && this.colSide != "top") {
        this.velocity = -22;
        this.y += this.velocity;
        this.isFalling = true;
      }
    }

    display() {
        fill("black");
        rect(this.x, this.y, 50);
    }

    debug() {
      if (debugMode) {
        fill("purple");
        textSize(32);
        text('X Pos: ' + this.x, 10, 30);
        text('Y Pos: ' + this.y, 10, 60);
        text('isFalling: ' + this.isFalling, 10, 90);
        text('Velocity: ' + this.velocity, 10, 120);
        text('Collision Side: ' + this.colSide, 10, 150);
        text('Level: ' + levelNum, 10, 180);
      }
    }
}

class basicPlatform {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
  }

  display() {
    fill("blue");
    rect(this.x, this.y, this.width, this.height);
  }
}

class movablePlatform {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height

    this.dragging = false;
  }

  update() {
    if(this.dragging) {
      this.x = mouseX + this.offsetX;
    }
  }

  display() {
    fill("red");
    rect(this.x, this.y, this.width, this.height);
    image(arrowLeftRightImg, this.x + this.width/4, this.y + this.height/4, this.width/2, this.height/2);
  } 

  // moveWithWindow() {
  //   if (this.x > windowWidth - this.width) {
  //     this.x = windowWidth - this.width;
  //   } else if (this.x < 0) {
  //     this.x = 0 + this.width;
  //   }
  // }

  pressed() {
    if (mouseX <= this.x || mouseX >= this.x + this.width || mouseY <= this.y || mouseY >= this.y + this.height) {
    } else {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      cursor('move');
    }
  }

  release() {
    this.dragging = false;
    cursor(null);
  }
}

class movablePlatformUp {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height

    this.dragging = false;
  }

  update() {
    if(this.dragging) {
      this.y = mouseY + this.offsetY;
    }
  }

  display() {
    fill("red");
    rect(this.x, this.y, this.width, this.height);
    image(arrowUpDownImg, this.x + this.width/4, this.y + this.height/4, this.width/2, this.height/2);
  } 

  // moveWithWindow() {
  //   if (this.x > windowWidth - this.width) {
  //     this.x = windowWidth - this.width;
  //   } else if (this.x < 0) {
  //     this.x = 0 + this.width;
  //   }
  // }

  pressed() {
    if (mouseX <= this.x || mouseX >= this.x + this.width || mouseY <= this.y || mouseY >= this.y + this.height) {
    } else {
      this.dragging = true;
      this.offsetY = this.y - mouseY;
      cursor('move');
    }
  }

  release() {
    this.dragging = false;
    cursor(null);
  }
}

class winPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill("pink");
    rect(this.x, this.y, 50);
    image(flagImg, this.x + 25/2, this.y + 25/2, 25, 25);
  }

  checkForPlayer(player) {
    if (player.x + player.radius <= this.x || player.x >= this.x + 50 || player.y + player.radius <= this.y || player.y >= this.y + 50) {
      
    } else {
      console.log("Next Level");
      nextLevel();
    }
  }
}

class bouncePad {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.bwidth = width;
    this.bheight = height;
  }

  display() {
    fill("green");
    rect(this.x, this.y, this.bwidth, this.bheight);
  }

  bouncePlayer(player) {
    if (player.x + player.radius <= this.x || player.x >= this.x + this.bwidth || player.y + player.radius <= this.y || player.y >= this.y + this.bheight) {
      
    } else {
      player.velocity = -35;
      player.y -= 1;
    }
  }
}

// class teleporterDoor {
//   constructor(x, y, width, height, assoDoor) {
//     this.x = x;
//     this.y = y;
//     this.bwidth = width;
//     this.bheight = height;
//     this.assoDoor = assoDoor;

//     this.hasTeleported = false;
//   }

//   display() {
//     fill("yellow");
//     rect(this.x, this.y, this.bwidth, this.bheight);
//   }

//   teleportPlayer(player) {
//     if (player.x + player.radius <= this.x || player.x >= this.x + this.bwidth || player.y + player.radius <= this.y || player.y >= this.y + this.bheight) {

//     } else {
//       if(this.hasTeleported === false) {
//         player.x = this.assoDoor.x;
//         player.y = this.assoDoor.y;
//         player.hasTeleported = true;
//         this.assoDoor.hasTeleported = true;
//         console.log("This Teleport: " + this.hasTeleported);
//         console.log("Other Teleport: " + this.assoDoor.hasTeleported);
//       }
//     }
//   }
// }

class deathBarrier {
  constructor(x, y, deathWidth, deathHeight) {
    this.x = x;
    this.y = y;
    this.deathWidth = deathWidth;
    this.deathHeight = deathHeight;
  }

  display() {
    fill("brown");
    rect(this.x, this.y, this.deathWidth, this.deathHeight);
  }

  killPlayer(player) {
    if (player.x + player.radius <= this.x || player.x >= this.x + this.deathWidth || player.y + player.radius <= this.y || player.y >= this.y + this.deathHeight) {
      
    } else {
      console.log("Dead");
      var thisLevel = eval("level" + levelNum);

      loadLevel(thisLevel);
    }
  }
}
