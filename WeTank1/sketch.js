// f it we tank

// core gameplay first 

// global vars
let gameState;

let tankBG;
let missionBanner;
let weFont
function preload(){
    tankBG = loadImage('assets/images/tank_background_billboard_white.png')
    missionBanner = loadImage('assets/images/mission_info.png')
    weFont = loadFont('assets/en_US.ttf')

}

function setup() {
  createCanvas(854, 480);
  textFont(weFont);
  
  // initialize
  gameState = "missionbrief"
}

function draw() {
    background("red"); // should never be seen.
    switch (gameState) {
        case "missionbrief":
            push()
            translate(frameCount%64, frameCount%64)
            tint("#E7E6B3")
            for(let i = -1; i<floor(width/64)+1; i++){
                for(let j = -1; j<floor(width/64)+1; j++){
                    image(tankBG, 0+i*64, 0+j*64)
                } 
            } 
            pop()
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
}