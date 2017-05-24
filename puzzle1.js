var bg1;
var stage = 1;
//prevent paper to pop when items are in location 2-4
var pLock;
//prevent items to pop when paper is in location 2-4
var iLock;
var soundLock;

var cameraLocation = 1;
var cameraSizeX = 50;
var cameraSizeY = 50;
var cameraFX = 5+320-(60+40)*2;
var cameraX = 570;
var cameraY = 380;

var flashlightLocation = 1;
var flashlightSizeX = 50;
var flashlightSizeY = 50;
var flashlightFX = 5+320-(60+40)*1;
var flashlightX = 610;
var flashlightY = 100;
  
var lightLocation;
var lightLocation = 1;
var lightSizeX = 50;
var lightSizeY = 50;
var lightFX = 5+320;
var lightX = 505;
var lightY = 391;

var cansLocation = 1;
var cansSizeX = 50;
var cansSizeY = 50;
var cansFX = 5+320+(60+40)*1;
var cansX = 210;
var cansY = 400;
 
var bottleLocation = 1;
var bottleSizeX = 50;
var bottleSizeY = 50;
var bottleFX = 5+320+(60+40)*2;
var bottleX = 650;
var bottleY = 300;
 
var offLocation = 1;
var offSizeX = 50;
var offSizeY = 50;
var offFX = 5+320+(60+40)*3;
var offX = 582;
var offY = 313;

var paperLocation = 1;
var paperX = 430;
var paperY = 230;
var paperSizeX = 25;
var paperSizeY = 25;

var sliderVol;

function preload() {
  
  bg1 = loadImage('https://dl.dropboxusercontent.com/s/zblpclgffvaf79r/bg1.png');
  camera = loadImage('https://dl.dropboxusercontent.com/s/ky8y62p8wtg6336/camera.png');
  flashlight = loadImage('https://dl.dropboxusercontent.com/s/ligs1cj8aot403n/flashlight.png');
  light = loadImage('https://dl.dropboxusercontent.com/s/vws4aifj9dbvfwt/lighter.png');
  cans = loadImage('https://dl.dropboxusercontent.com/s/tueam66f6182ipp/cans.png');
  bottle = loadImage('https://dl.dropboxusercontent.com/s/k2sds56c7py74bd/bottle.png');
  off = loadImage('https://dl.dropboxusercontent.com/s/jfhmr6cbsw3q9l5/off.png');
  //paper = loadImage('https://dl.dropboxusercontent.com/s/pcrzrjq5w2pe9aw/paper.png');
  
  word1 = loadImage('https://dl.dropboxusercontent.com/s/gb42espr7iredga/word1.png');
  word2 = loadImage('https://dl.dropboxusercontent.com/s/g3qm42afn0soglc/word2.png');
  word3 = loadImage('https://dl.dropboxusercontent.com/s/8m315i8pctylb9f/word3.png');
  word4 = loadImage('https://dl.dropboxusercontent.com/s/3q9n931lvuiozyg/word4.png');
  word5 = loadImage('https://dl.dropboxusercontent.com/s/r3tl8y4j2gsnlgt/word5.png');
  word6 = loadImage('https://dl.dropboxusercontent.com/s/rlg22zgoys0zhtv/word6.png');


  bgm = loadSound('https://dl.dropboxusercontent.com/s/qx215hfby2x1x5l/Aokigahara%20Puzzle%201.m4a');
  sound1 = loadSound('https://dl.dropboxusercontent.com/s/d5xexof0z8v7cd9/sound1.wav');
  sound2 = loadSound('https://dl.dropboxusercontent.com/s/ouyu2ivg3ymei8f/sound2.wav');
  sound3 = loadSound('https://dl.dropboxusercontent.com/s/8h72onv6azc3c8l/sound3.wav');
}

function setup() {
  createCanvas(800,600);
  textAlign(CENTER);

  sliderVol = createSlider(0, 1, 0.5, 0.01);
  sliderVol.style('width', '800px');

  pLock = false;
  iLock = false;
  soundLock = false;

  wordChange = word1;
}

function draw() {
  background(125);
  itemGrid();
  image(bg1, 0, 0, 800, 500);
  change();
  loadPic();
  bgm.setVolume(sliderVol.value());
  if (bgm.isPlaying() == false) {
    bgm.play();
  }

  if (pLock == false) {
    paperFunction();
  }

  if (iLock == false) {
    if (stage == 1) {
      cameraFunction();
    } else if (stage == 2) {
      wordChange = word2;
      flashlightFunction();
    } else if (stage == 3) {
      wordChange = word3;
      lightFunction();
    } else if (stage == 4) {
      wordChange = word4;
      cansFunction();
    } else if (stage == 5) {
      wordChange = word5;
      bottleFunction();
    } else if (stage == 6) {
      wordChange = word6;
      offFunction();
    }
  }
  //test();
}

//doesnot include paper
function loadPic() {
  //fliped order so the items popup wont be behind the other items
  image(off, offX, offY, offSizeX, offSizeY);
  image(bottle, bottleX, bottleY, bottleSizeX, bottleSizeY);
  image(cans, cansX, cansY, cansSizeX, cansSizeY);  
  image(light, lightX, lightY, lightSizeX, lightSizeY);
  image(flashlight, flashlightX, flashlightY, flashlightSizeX, flashlightSizeY);
  image(camera, cameraX, cameraY, cameraSizeX, cameraSizeY);
}

function cameraFunction() {
  if (cameraLocation == 1) {
  } else if (cameraLocation == 2) {
    if(soundLock == false){
      if(sound1.isPlaying() == false) {
        sound1.play();
        soundLock = true;
      }
    }
    //formula of speed: (X1-200)/(350/13)
    //formula of speed: (y1-100)/(350/13)
    cameraX = cameraX - ((570-200)/(350/13));
    cameraY = cameraY - ((380-100)/(350/13));

    cameraSizeX = cameraSizeX + 13;
    cameraSizeY = cameraSizeY + 13;

    if (cameraX < 200) {
      cameraX = 200;  
    }
    if (cameraY < 100) {
      cameraY = 100;  
    }
    if (cameraSizeX > 400) {
      cameraSizeX = 400;  
    }
    if (cameraSizeY > 400) {
      cameraSizeY = 400;  
    }

    if (cameraX == 200 && cameraY == 100 && cameraSizeX == 400 && cameraSizeY == 400) {
      cameraLocation = 3
    }
  } else if (cameraLocation == 4) {
    
    //speed of x size: ((325-(100*n))-200)/(-350/13)
    //speed of y size: (525-100)/(-350/13)
    cameraX = cameraX - (((325-(100*2))-200)/(-350/13));
    cameraY = cameraY - ((525-100)/(-350/13));

    cameraSizeX = cameraSizeX - 13;
    cameraSizeY = cameraSizeY - 13;

    if (cameraX < cameraFX) {
      cameraX = cameraFX;  
    }
    if (cameraY > 520 +5) {
      cameraY = 520 +5;
    }
    if (cameraSizeX < 50) {
      cameraSizeX = 50;  
    }
    if (cameraSizeY < 50) {
      cameraSizeY = 50;  
    }
  }
  if (cameraX == cameraFX && cameraY == 520 +5 && cameraSizeX == 50 && cameraSizeY == 50) {
    cameraLocation = 5;
    stage = 2;
    pLock = false;
  }
}

function flashlightFunction() {
  if (flashlightLocation == 1) {
  } else if (flashlightLocation == 2) {
    if(soundLock == false){
      if(sound1.isPlaying() == false) {
        sound1.play();
        soundLock = true;
      }
    }
    //formula of speed: (X1-200)/(350/13)
    //formula of speed: (Y1-100)/(350/13)
    flashlightX = flashlightX - ((610-200)/(350/13));
    flashlightY = flashlightY - ((100-200)/(350/13));
    flashlightSizeX = flashlightSizeX + 13;
    flashlightSizeY = flashlightSizeY + 13;

    if (flashlightX < 200) {
      flashlightX = 200;  
    }
    if (flashlightY > 100) {
      flashlightY = 100;  
    }
    if (flashlightSizeX > 400) {
      flashlightSizeX = 400;  
    }
    if (flashlightSizeY > 400) {
      flashlightSizeY = 400;  
    }
    if (flashlightX == 200 && flashlightY == 100 && flashlightSizeX == 400 && flashlightSizeY == 400) {
      flashlightLocation = 3;
    }
  } else if (flashlightLocation == 4) {
    //speed of x size: ((325-(100*n))-200)/(-350/13)
    //speed of y size: (525-100)/(-350/13)
    flashlightX = flashlightX - (((325-(100*1))-200)/(-350/13));
    flashlightY = flashlightY - ((525-100)/(-350/13));

    flashlightSizeX = flashlightSizeX - 13;
    flashlightSizeY = flashlightSizeY - 13;

    if (flashlightX > flashlightFX) {
      flashlightX = flashlightFX;  
    }
    if (flashlightY > 520 +5) {
      flashlightY = 520 +5;
    }
    if (flashlightSizeX < 50) {
      flashlightSizeX = 50;  
    }
    if (flashlightSizeY < 50) {
      flashlightSizeY = 50;  
    }
  }
  if (flashlightX == flashlightFX && flashlightY == 520 +5 && flashlightSizeX == 50 && flashlightSizeY == 50) {
    flashlightLocation = 5;
    stage = 3;   
    pLock = false; 
  }
}

function lightFunction() {
  if (lightLocation == 1) {
  } else if (lightLocation == 2) {
    if(soundLock == false){
      if(sound1.isPlaying() == false) {
        sound1.play();
        soundLock = true;
      }
    }
    //formula of speed: (X1-200)/(350/13)
    //formula of speed: (Y1-100)/(350/13)
    lightX = lightX - ((505-200)/(350/13));
    lightY = lightY - ((391-100)/(350/13));
    lightSizeX = lightSizeX + 13;
    lightSizeY = lightSizeY + 13;

    if (lightX < 200) {
      lightX = 200;  
    }
    if (lightY < 100) {
      lightY = 100;  
    }
    if (lightSizeX > 400) {
      lightSizeX = 400;  
    }
    if (lightSizeY > 400) {
      lightSizeY = 400;  
    }
    if (lightX == 200 && lightY == 100 && lightSizeX == 400 && lightSizeY == 400) {
      lightLocation = 3;
    }
  } else if (lightLocation == 4) {
    //speed of x size: ((325-(100*n))-200)/(-350/13)
    //speed of y size: (525-100)/(-350/13)
    lightX = lightX - ((325-(100*0))-200)/(-350/13);
    lightY = lightY - ((525-100)/(-350/13));

    lightSizeX = lightSizeX - 13;
    lightSizeY = lightSizeY - 13;

    if (lightX > lightFX) {
      lightX = lightFX;  
    }
    if (lightY > 520 +5) {
      lightY = 520 +5;
    }
    if (lightSizeX < 50) {
      lightSizeX = 50;  
    }
    if (lightSizeY < 50) {
      lightSizeY = 50;  
    }
  }
  if (lightX == lightFX && lightY == 520 +5 && lightSizeX == 50 && lightSizeY == 50) {
    lightLocation = 5;
    stage = 4;    
    pLock = false;
  }
}

function cansFunction() {
  if (cansLocation == 1) {
  } else if (cansLocation == 2) {
    if(soundLock == false){
      if(sound1.isPlaying() == false) {
        sound1.play();
        soundLock = true;
      }
    }
    //formula of speed: (X1-200)/(350/13)
    //formula of speed: (Y1-100)/(350/13)
    cansX = cansX - ((210-200)/(350/13));
    cansY = cansY - ((400-100)/(350/13));
    cansSizeX = cansSizeX + 13;
    cansSizeY = cansSizeY + 13;

    if (cansX < 200) {
      cansX = 200;  
    }
    if (cansY < 100) {
      cansY = 100;  
    }
    if (cansSizeX > 400) {
      cansSizeX = 400;  
    }
    if (cansSizeY > 400) {
      cansSizeY = 400;  
    }
    if (cansX == 200 && cansY == 100 && cansSizeX == 400 && cansSizeY == 400) {
      cansLocation = 3;
    }
  } else if (cansLocation == 4) {
    //speed of x size: ((325+(100*n))-200)/(-350/13)
    //speed of y size: (525-100)/(-350/13)
    cansX = cansX - (((325+(100*1))-200)/(-350/13));
    cansY = cansY - ((525-100)/(-350/13));

    cansSizeX = cansSizeX - 13;
    cansSizeY = cansSizeY - 13;

    if (cansX > cansFX) {
      cansX = cansFX;  
    }
    if (cansY > 520 +5) {
      cansY = 520 +5;
    }
    if (cansSizeX < 50) {
      cansSizeX = 50;  
    }
    if (cansSizeY < 50) {
      cansSizeY = 50;  
    }
  }
  if (cansX == cansFX && cansY == 520 +5 && cansSizeX == 50 && cansSizeY == 50) {
    cansLocation = 5;
    stage = 5;
    pLock = false;
  }
}

function bottleFunction() {
  if (bottleLocation == 1) {
  } else if (bottleLocation == 2) {
    if(soundLock == false){
      if(sound1.isPlaying() == false) {
        sound1.play();
        soundLock = true;
      }
    }
    //formula of speed: (X1-200)/(350/13)
    //formula of speed: (Y1-100)/(350/13)
    bottleX = bottleX - ((650-200)/(350/13));
    bottleY = bottleY - ((300-100)/(350/13));
    bottleSizeX = bottleSizeX + 13;
    bottleSizeY = bottleSizeY + 13;

    if (bottleX < 200) {
      bottleX = 200;  
    }
    if (bottleY < 100) {
      bottleY = 100;  
    }
    if (bottleSizeX > 400) {
      bottleSizeX = 400;  
    }
    if (bottleSizeY > 400) {
      bottleSizeY = 400;  
    }
    if (bottleX == 200 && bottleY == 100 && bottleSizeX == 400 && bottleSizeY == 400) {
      bottleLocation = 3;
    }
  } else if (bottleLocation == 4) {
    //speed of x size: ((325+(100*n))-200)/(-350/13)
    //speed of y size: (525-100)/(-350/13)
    bottleX = bottleX - (((325+(100*2))-200)/(-350/13));
    bottleY = bottleY - ((525-100)/(-350/13));

    bottleSizeX = bottleSizeX - 13;
    bottleSizeY = bottleSizeY - 13;

    if (bottleX > bottleFX) {
      bottleX = bottleFX;  
    }
    if (bottleY > 520 +5) {
      bottleY = 520 +5;
    }
    if (bottleSizeX < 50) {
      bottleSizeX = 50;  
    }
    if (bottleSizeY < 50) {
      bottleSizeY = 50;  
    }
  }
  if (bottleX == bottleFX && bottleY == 520 +5 && bottleSizeX == 50 && bottleSizeY == 50) {
    bottleLocation = 5;
    stage = 6;    
    pLock = false;
  }
}

function offFunction() {
  if (offLocation == 1) {
  } else if (offLocation == 2) {
    if(soundLock == false){
      if(sound1.isPlaying() == false) {
        sound1.play();
        soundLock = true;
      }
    }
    //formula of speed: (X1-200)/(350/13)
    //formula of speed: (Y1-100)/(350/13)
    offX = offX - ((582-200)/(350/13));
    offY = offY - ((313-100)/(350/13));
    offSizeX = offSizeX + 13;
    offSizeY = offSizeY + 13;

    if (offX < 200) {
      offX = 200;  
    }
    if (offY < 100) {
      offY = 100;  
    }
    if (offSizeX > 400) {
      offSizeX = 400;  
    }
    if (offSizeY > 400) {
      offSizeY = 400;  
    }
    if (offX == 200 && offY == 100 && offSizeX == 400 && offSizeY == 400) {
      offLocation = 3;
    }
  } else if (offLocation == 4) {
    //speed of x size: ((325+(100*n))-200)/(-350/13)
    //speed of y size: (525-100)/(-350/13)
    offX = offX - (((325+(100*3))-200)/(-350/13));
    offY = offY - ((525-100)/(-350/13));

    offSizeX = offSizeX - 13;
    offSizeY = offSizeY - 13;

    if (offX > offFX) {
      offX = offFX;  
    }
    if (offY > 520 +5) {
      offY = 520 +5;
    }
    if (offSizeX < 50) {
      offSizeX = 50;  
    }
    if (offSizeY < 50) {
      offSizeY = 50;  
    }
  }
  if (offX == offFX && offY == 520 +5 && offSizeX == 50 && offSizeY == 50) {
    offLocation = 5;
    stage = 7;
    pLock = false;
  }
}

function paperFunction() {
  //image(paper, paperX, paperY, paperSizeX, paperSizeY);////////////////////////////////////////////
  image(wordChange, paperX, paperY, paperSizeX, paperSizeY);
  if (paperLocation == 1) {
  } else if (paperLocation == 2) {
    paperX = paperX - 10;
    paperY = paperY - 10;
    paperSizeX = paperSizeX + 13;
    paperSizeY = paperSizeY + 13;

    if (paperX < 200) {
      paperX = 200;  
    }
    if (paperY < 100) {
      paperY = 100;  
    }
    if (paperSizeX > 400) {
      paperSizeX = 400;  
    }
    if (paperSizeY > 400) {
      paperSizeY = 400;  
    }
    if (paperX == 200 && paperY == 100 && paperSizeX == 400 && paperSizeY == 400) {
      paperLocation = 3;
    }
  } else if (paperLocation == 4) {
    paperX = paperX + 10;
    paperY = paperY + 10;

    paperSizeX = paperSizeX - 13;
    paperSizeY = paperSizeY - 13;

    if (paperX > 430) {
      paperX = 430;  
    }
    if (paperY > 230) {
      paperY = 230;
    }
    if (paperSizeX < 25) {
      paperSizeX = 25;  
    }
    if (paperSizeY < 25) {
      paperSizeY = 25;  
    }
  }
  if (paperX == 430 && paperY == 230 && paperSizeX == 25 && paperSizeY == 25) {
    paperLocation = 1;
    iLock = false;
  }




  if (mouseX > paperX && mouseX < paperX+paperSizeX && mouseY > paperY && mouseY < paperY+paperSizeY) {
    cursor(HAND);
    if (paperLocation == 1 && mouseIsPressed == true) {
      paperLocation = 2;
      iLock = true;
    } else if (paperLocation == 3 && mouseIsPressed == true) {
      paperLocation = 4;
    }
  }



}

//doesnot include paper
function change() {
  cursor(ARROW);

  if (mouseX > cameraX && mouseX < cameraX+cameraSizeX && mouseY > cameraY && mouseY < cameraY+cameraSizeY && iLock == false) {
    cursor(HAND);
    if (cameraLocation == 1 && mouseIsPressed == true) {
      pLock = true;
      cameraLocation = 2;
    } else if (cameraLocation == 3 && mouseIsPressed == true) {
      cameraLocation = 4;
      soundLock = false;
    }
  }




  if (mouseX > flashlightX && mouseX < flashlightX+flashlightSizeX && mouseY > flashlightY && mouseY < flashlightY+flashlightSizeY  && cameraLocation == 5 && iLock == false) {
    cursor(HAND);
    if (flashlightLocation == 1 && mouseIsPressed == true) {
      pLock = true;
      flashlightLocation = 2;
    } else if (flashlightLocation == 3 && mouseIsPressed == true) {
      flashlightLocation = 4;
      soundLock = false;
    }
  }



  if (mouseX > lightX && mouseX < lightX+lightSizeX && mouseY > lightY && mouseY < lightY+lightSizeY  && flashlightLocation == 5 && iLock == false) {
    cursor(HAND);
    if (lightLocation == 1 && mouseIsPressed == true) {
      pLock = true;
      lightLocation = 2;
    } else if (lightLocation == 3 && mouseIsPressed == true) {
      lightLocation = 4;
      soundLock = false;
    }
  }


  if (mouseX > cansX && mouseX < cansX+cansSizeX && mouseY > cansY && mouseY < cansY+cansSizeY  && lightLocation == 5 && iLock == false) {
    cursor(HAND);
    if (cansLocation == 1 && mouseIsPressed == true) {
      pLock = true
      cansLocation = 2;
    } else if (cansLocation == 3 && mouseIsPressed == true) {
      cansLocation = 4;
      soundLock = false;
    }
  }


  if (mouseX > bottleX && mouseX < bottleX+bottleSizeX && mouseY > bottleY && mouseY < bottleY+bottleSizeY  && cansLocation == 5 && iLock == false) {
    cursor(HAND);
    if (bottleLocation == 1 && mouseIsPressed == true) {
      pLock = true
      bottleLocation = 2;
    } else if (bottleLocation == 3 && mouseIsPressed == true) {
      bottleLocation = 4;
      soundLock = false;
    }
  }


  if (mouseX > offX && mouseX < offX+offSizeX && mouseY > offY && mouseY < offY+offSizeY  && bottleLocation == 5 && iLock == false) {
    cursor(HAND);
    if (offLocation == 1 && mouseIsPressed == true) {
      pLock = true
      offLocation = 2;
    } else if (offLocation == 3 && mouseIsPressed == true) {
      offLocation = 4;
      soundLock = false;
    }
  }


}

function itemGrid() {
  // background for item grid
  fill(50,50,50);
  rect(10,510,800-20,100-20);
  // spacing between box should be 31.111
  fill(125);
  rect(320-(60+40)*2, 520, 60, 60);
  rect(320-(60+40)*1, 520, 60, 60);
  rect(320, 520, 60, 60);
  rect(320+(60+40)*1, 520, 60, 60);
  rect(320+(60+40)*2, 520, 60, 60);
  rect(320+(60+40)*3, 520, 60, 60);
}

function test() {
  fill(0);
  text(int(mouseX)+","+int(mouseY), 40, 20);
  text(stage, 40, 40);
  text("cam "+cameraLocation, 40, 60);
  text("flash "+flashlightLocation, 40, 80);
  text("light "+lightLocation, 40, 100);
  text("can "+cansLocation, 40, 120);
  text("bott "+bottleLocation, 40, 140);
  text("off "+offLocation, 40, 160);
  text("paper "+paperLocation, 40, 180);
  text("pLock "+pLock, 40, 200);
  text("iLock "+iLock, 40, 220);
  text("pressed "+mouseIsPressed, 40, 240);
  text("wordChange"+wordChange, 40, 260);
  text("soundLock"+soundLock,40,280);
}




//when everything endes, stage == 7