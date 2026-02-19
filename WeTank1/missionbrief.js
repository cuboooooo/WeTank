function setupMissionBrief() { // combine the tank bg and mission brief into one container.
    // only separete containers if you need diff update logic, diff z ordering, or if parts are reused.
    scenes.missionbrief = new PIXI.Container();
    app.stage.addChild(scenes.missionbrief);
    // create a conrtrainer for the tank bg, and the mission banner
    bgContainer = new PIXI.Container();
    const tilesX = Math.floor(app.screen.width / 64) + 2;
    const tilesY = Math.floor(app.screen.height / 64) + 2;
    // 64x64 is the size of the tank background tile piece.
    // +2 is to allow "infinite" scrolling.

    for (let i = 0; i < tilesX; i++) {
        for (let j = 0; j < tilesY; j++) {
            const tile = new PIXI.Sprite(tankBGTexture);
            tile.tint = 0xE7E6B3; // the sprites are greyscale.
            tile.x = i * 64;
            tile.y = j*64;
            bgContainer.addChild(tile);
    }
}
    //done with scrolliong tank background
    scenes.missionbrief.addChild(bgContainer);
    
    // now construct the mission banner on top
    // this will evenatully need to be variable, for different mission levels

    for (let i = 0; i < 5; i++){
        const banner = new PIXI.Sprite(missionBannerTexture)
        const cm = new PIXI.ColorMatrixFilter()
        cm.contrast(0, false) // something aint working here
        banner.filters = [cm] // lowers contrast of banner image.
        banner.tint = "#BE4836"; //#B64231
        banner.y = (app.screen.height / 5) + i * app.screen.height/11; // i think its 47 cuz thats half of 96, its height. i lowk nudged it until it looped perfectly.
        banner.width = app.screen.width;
        banner.height = app.screen.width/14; // this kept it square.
        scenes.missionbrief.addChild(banner);
    }
    // banner texture, do text.
    const titleShadow = new PIXI.Text({
        text: `Mission ${currMission.number}`,
        style: {
            fontFamily: 'weFont',
            fontSize: (52/854)*app.screen.width, 
            fill: 0x973627,
            letterSpacing: (10/854)*app.screen.width,
        }
    })
    titleShadow.anchor.set(0.5) // position by center 
    titleShadow.x = app.screen.width / 2 + (app.screen.height / 60);
    titleShadow.y = app.screen.height / 5 + (app.screen.height / 8) + app.screen.height / 60;
    // trying to avoid hardcoded values in case i want variable screen size.
    titleShadow.scale = 0.1
    scenes.missionbrief.addChild(titleShadow);

    const title = new PIXI.Text({
        text: `Mission ${currMission.number}`,
        style: {
            fontFamily: 'weFont',
            fontSize: (52/854)*app.screen.width, 
            fill: 0xFAE59F,
            stroke: {color: 0x634921, width : (8/854)*app.screen.width},
            letterSpacing: (10/854)*app.screen.width,
            //LineJoin: 'round', miterLevel: 5, // NEVER WORKED???
        }
    })
    title.anchor.set(0.5);
    title.x = app.screen.width / 2;
    title.y = app.screen.height / 5 + app.screen.height / 8;
    title.scale = 0.1
    scenes.missionbrief.addChild(title);

    const enemyTextShadow = new PIXI.Text({
        text: `Enemy tanks: ${currMission.enemyTanks}`,
        style: {
            fontFamily: 'weFont',
            fontSize: (32/854)*app.screen.width, 
            fill: 0x973627, //#973425
            letterSpacing: (6.15/854)*app.screen.width,
        }
    });
    enemyTextShadow.anchor.set(0.5);
    enemyTextShadow.x = app.screen.width / 2 + (app.screen.height / 80);
    enemyTextShadow.y = (app.screen.height / 5) + (app.screen.height / 3) + (app.screen.height / 80);
    enemyTextShadow.scale = 0.1
    scenes.missionbrief.addChild(enemyTextShadow);

    const enemyText = new PIXI.Text({
        text: `Enemy tanks: ${currMission.enemyTanks}`,
        style: {
            fontFamily: 'weFont',
            fontSize: (32/854)*app.screen.width, 
            fill: 0xFAE59F,
            stroke: {color: 0x634921, width : (6/854)*app.screen.width},
            letterSpacing: (6.15/854)*app.screen.width,
        }
    });
    enemyText.anchor.set(0.5);
    enemyText.x = app.screen.width / 2;
    enemyText.y = (app.screen.height / 5) + (app.screen.height / 3);
    enemyText.scale = 0.1
    scenes.missionbrief.addChild(enemyText);  // so much code for a few lines of text damn

    // gold bars 
    const topBar = new PIXI.Graphics();
    topBar.rect(0, (app.screen.height / 5)  // where banner element starts
    + app.screen.height / 60, // plus the gap
     app.screen.width, app.screen.height / 40);
    topBar.fill(0xCCA82A);
    scenes.missionbrief.addChild(topBar);
    
    const bottomBar = new PIXI.Graphics();
    bottomBar.rect(0, 
        (app.screen.width/14 * 5) // height of the banner element
        - app.screen.height / 60 // minus the gap
        + app.screen.height / 40, // minus the width of the bar
         app.screen.width, app.screen.height / 40);
    bottomBar.fill(0xCCA82A);
    scenes.missionbrief.addChild(bottomBar);

    sounds.missionbrief = new Howl({
        src: ['assets/music/round_start.mp3'],
        volume: 1,
    });
}