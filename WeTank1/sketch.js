// f it we tank

// core gameplay first 

// global vars
let gameState;
let frameRate = 0;
let avgTime = 0;
let bgBuffer;

let tankBG;
let missionBanner;
let weFont
let cursor
function preload(){
    tankBG = loadImage('assets/images/tank_background_billboard_white.png')
    missionBanner = loadImage('assets/images/mission_info.png')
    weFont = loadFont('assets/en_US.ttf')
    cursor = loadImage('assets/images/cursor_1.png')

}

function setup() {
  createCanvas(854, 480);
  textFont(weFont);
  
  // initialize
  gameState = "missionbrief"
  bgBuffer = createGraphics(width+64,height+64)
  bgBuffer.tint("#E7E6B3");
  for(let i = 0; i < floor(width/64) + 2; i++){
    for(let j = 0; j < floor(height/64) + 2; j++){
      bgBuffer.image(tankBG, i * 64, j * 64);
    }
  }
}

function draw() {
    background("red"); // should never be seen.
    switch (gameState) {
        case "missionbrief":
            image(bgBuffer, frameCount%64-64, -frameCount%64)
            push()
            tint("#C04736");
            for(let i = 0; i < 5; i++){
                image(missionBanner, 0, (height/5)+i*47, width, 67)
            }
            pop()// pop tint
            noStroke()
            fill("#CCA82A")
            rect(0,(height/5)+height/60,width,(height/40))
            rect(0,(67*5)-height/60,width,(height/40))
            
            // 3 words.
            fill("#973627")
            textAlign(CENTER,CENTER)
            textSize(52)
            text("Mission 1", width/2+(height/60), (height/5)+(height/8)+height/60)
            stroke("#634921")
            strokeWeight(8)
            fill("#FAE59F")
            text("Mission 1", width/2, (height/5)+(height/8))

            noStroke()
            fill("#973627")
            textAlign(CENTER,CENTER)
            textSize(32)
            text("Enemy Tanks: 1", width/2+(height/60), (height/5)+(height/3)+height/60)
            stroke("#634921")
            strokeWeight(8)
            fill("#FAE59F")
            text("Enemy Tanks: 1", width/2, (height/5)+(height/3))

            break;

    }

    // render cursor (is it always on?)
    push()
    tint('#096EE7')
    image(cursor, mouseX-15, mouseY-15, 30, 30)
    pop()



    // frameRate
    if (frameCount % 10 == 0){
        frameRate = floor( (10 / avgTime) * 1000)
        avgTime = 0
    } else {
        avgTime += deltaTime;
    }
    noStroke();
    fill("green")
    textSize(12)
    text(frameRate, 12,12);


}