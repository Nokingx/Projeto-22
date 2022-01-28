var starImg,bgImg;
var star, starBody;
var fada, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fada = loadImage("imagens/fairy.png");
}   fairyVoice = loadSound("sound/JoyMusic.mp3");

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
 
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130, 520);
	fada.addAnimation("fairyflying",fada);  
	fada.scale =0.25;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
function draw ()

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
if (star.y > 470 && starBody.position.y > 470 ){
    Matter.Body.setStatic(starBody,true);
    }
 drawSprites();
}
