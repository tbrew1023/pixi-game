console.log('i love you');

const canvas = document.getElementById('mycanvas');

const app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight
});

console.log(PIXI.utils.TextureCache);

//container creation
let container = new PIXI.Container();

//texture creation
const texture1 = PIXI.Texture.from('assets/bunnyboy.gif');
const texture2 = PIXI.Texture.from('assets/bunnyboy2.gif');
const texture3 = PIXI.Texture.from('assets/bunnyboy3.gif');
const texture4 = PIXI.Texture.from('assets/bunnyboy4.gif');

//sprite creation
let sprite1, sprite2, sprite3;
img = new PIXI.Sprite(texture1);

let sprites = []; //sprite array to keep track
addSprites();

//positioning / sizing
img.x = app.renderer.width / 2;
img.y = app.renderer.height / 2;
img.anchor.x = 0.5;
img.anchor.y = 0.5;
img.width = 300;
img.height = 300;

//staging
app.stage.addChild(container);
container.addChild(img);

//ticking
app.ticker.add(animate);

//----------functions----------

let delta = 0;
function animate() {
    delta += 0.1;
    for(let i = 0; i < sprites.length; i++) {
        sprites[i].rotation += 0.1;
    }
}

function addSprites() {
    for(let i = 0; i<10;i++) {
        let sprite = new PIXI.Sprite(texture3);
        sprite.width = 150;
        sprite.height = 150;
        sprite.x = Math.random() * app.renderer.screen.width;
        sprite.y = Math.random() * app.renderer.screen.height;
        sprite.tint = Math.random() * 0xffffff;
        sprite.anchor.set(0.5);
        container.addChild(sprite);
        sprites.push(sprite);
    }
}