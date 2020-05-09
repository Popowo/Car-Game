var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;
var car1IMG,car2IMG,car3IMG,car4IMG,trackImg,groundImg;


function preload(){

trackImg = loadImage('assets/track.jpg');
car1IMG = loadImage('assets/car1.png');
car2IMG = loadImage('assets/car2.png');
car3IMG = loadImage('assets/car3.png');
car4IMG = loadImage('assets/car4.png');
groundImg = loadImage('assets/ground.png');

}


function setup(){
  canvas = createCanvas(displayWidth - 30,displayHeight - 130);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(255);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    if(gameState===2){
      game.end();
      
    }
  }
}


