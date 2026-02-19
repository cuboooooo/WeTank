async function setupLevel() {
    await PIXI.Assets.load([

    ]);
    sounds.intro = new Howl({
        src: ['assets/music/intro.mp3'],
        volume: 1,
    });
    sounds.brown = new Howl({
        src: ['assets/music/brown.ogg'],
        volume: 1.5,
        loop: true,
    });

    console.log("finished!")
}