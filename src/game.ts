import 'phaser';

export default class Main extends Phaser.Scene
{
    constructor ()
    {
        super('main');
    }

    preload ()
    {
        this.load.image('logo', 'assets/phaser3-logo.png');
        this.load.image('libs', 'assets/libs.png');
        this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        this.load.glsl('stars', 'assets/starfields.glsl.js');
    }

    create ()
    {
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        this.add.image(400, 300, 'libs');

        const logo = this.add.image(400, 70, 'logo');

        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 360,
    height: 640,
    scene: Main,
    antialias: false, 
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    autoRound: 1,
    disableContextMenu: true,
    // domCreateContainer: true,
    expandParent: true,
    fps: {
        target: 60,
        min: 30
    },
    gameTitle: 'Mobile Mayhem',
    gameVersion: '0.0.1',
    inputActivePointers: 2, // start with 2 active pointers for multi-touch
    inputGamepad: false, // disable Gamepad Plugin
    inputKeyboard: false, // disable Keyboard Plugin
    inputMouse: false, // disable Mouse Plugin
    inputTouch: true, // enable Touch Plugin,
    inputTouchCapture: true, // call preventDefault on touch events (we'll handle it)
    loaderAsync: true,
    loaderCrossOrigin: 'anonymous', // maybe remove
    physics: {
        default: 'arcade', // 'arcade', 'impact', 'matter'
        arcade: {
            debug: true,
        }
    },
    powerPreference: 'high-performance', // 'low-power', 'high-performance', 'default'
    resizeInterval: 15,
    roundPixels: true,
    // scaleMode: Phaser.Scale.ScaleModes.RESIZE,
    scaleMode: Phaser.Scale.ScaleModes.WIDTH_CONTROLS_HEIGHT,
    transparent: false,
};

const game = new Phaser.Game(config);

window['loop'] = game.loop;
// game.scale.scaleMode = Phaser.Scale.FIT;
// game.scale.refresh();