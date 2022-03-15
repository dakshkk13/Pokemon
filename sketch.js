var backgroundImg;
var player1Img,player2Img;
var player1attackImg,player2attackImg;
var player1attack,player2attack,player;
var ground;
var player1, player2;
var database;
var player1LifeBar,player1back;
var player2LifeBar,player2back;
var gameState;
var life1 = 5;
var life2 = 5;

function preload() {
 backgroundImg = loadImage("./images/background.jpg");
 player1Img = loadImage("./images/player1-modified.png");
 player2Img = loadImage("./images/player2.png");
 player1attackImg = loadImage("./images/player1attack.png");
 player2attackImg = loadImage("./images/player2attack.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);


   database = firebase.database();




}

function draw(){
    // background("white");
    background(backgroundImg);
    
   // player = new Player(700,400,200,200);
    player = new Player();
    form = new Form();

    player.display();
  player.databaseConnect();
    player.playerAttack();
  
    player.handleLifeBar();
    player.players();

    form.getState();
    form.display();


    
    // player.handleCollisionPlayerAttack();
    player.handleWinner();
    // player1.depth = player2attack.depth;
    // player2attack.depth +=1;
    // player2.depth = player1attack.depth;
    // player1attack.depth += 1;
 
    drawSprites();
}

