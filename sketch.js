var canvas, backgroundImage;

var gameState = 0;
var database;
var bird1, bird2, bird3, bird4, bird5, bird6 ;
this.trajectory =[];

function preload(){

  facebook_img = loadImage("images/facebook.png");
  instagram_img = loadImage("images/insta.jpg");
  whatsapp_img = loadImage("images/whatsapp.png");
  snapchat_img = loadImage("images/snapchat.png");
  youtube_img = loadImage("images/youtube.png");
}

function setup(){

  canvas = createCanvas (1000,1000);
  database = firebase.database();

  facebook =  createSprite (90,500,20,20);
  facebook.addImage(facebook_img);
  facebook.scale = 0.3;

  whatsapp =  createSprite (900,900,20,20);
  whatsapp.addImage(whatsapp_img);
  whatsapp.scale = 0.3;

  whatsapp2 =  createSprite (700,700,20,20);
  whatsapp2.addImage(whatsapp_img);
  whatsapp2.scale = 0.3;

  instagram = createSprite (900,700,20,20);
  instagram.addImage(instagram_img);
  instagram.scale = 0.2;

  instagram2 = createSprite (90,700,20,20);
  instagram2.addImage(instagram_img);
  instagram2.scale = 0.2;

  snapchat = createSprite (900,90,20,20);
  snapchat.addImage(snapchat_img);
  snapchat.scale = 0.3;

  youtube = createSprite (500,300,20,20);
  youtube.addImage(youtube_img);
  youtube.scale = 0.3;

  facebook2 = createSprite (700,90,20,20);
  facebook2.addImage(facebook_img);
  facebook2.scale = 0.3;

  snapchat2 = createSprite (700,300,20,20);
  snapchat2.addImage(snapchat_img);
  snapchat2.scale = 0.3;

  youtube2 = createSprite (300,700,20,20);
  youtube2.addImage(youtube_img);
  youtube2.scale = 0.3;

}


function draw(){
  background("yellow");

  facebook.x = World.mouseX;
  facebook.y = World.mouseY;

if(facebook.isTouching(facebook2)){
facebook.x = 0;
facebook.y = 0;
    // var position = [facebook.position.x, facebook.position.y];
    // this.trajectory.push(position);
  
  //for(var i=0; i<this.trajectory.length; i++){
    console.log(this.trajectory)
    line(90,500)
  //}
//}
}
drawSprites();
}
