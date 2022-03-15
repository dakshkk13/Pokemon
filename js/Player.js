class Player{
 constructor(x,y,w,h){
     this.x = x;
     this.y = y;
    //  this.i = i;
    this.w = w;
    this.h = h;

    
    //this.i = i;
 }
 display() {
     push();
    //  rect(this.x,this.y,this.w,this.h);
     pop();
 }
 databaseConnect(){
     var playerPositionRef = database.ref("positions");
     playerPositionRef.on("value", data =>{
         this.x = data.x,
         this.y = data.y
     });
 }

 players(){
    player1 = createSprite(400,600);
    player1.scale = 0.6;
    player1.addImage(player1Img);

    player2 = createSprite(1200,600);
    player2.scale = 1;
    player2.addImage(player2Img);

    if(keyDown("right")){
        player2.position.x +=1;
    }
    if(keyDown("left")){
        player2.position.x -= 1;
    }

    // if(keyIsDown(UP_ARROW)){
    //     player2.position.y -= 1;
    // }

    // if (keyIsDown(68)){
    //     player1.position.x += 1;
    // }
    // if (keyIsDown(65)){
    //     player1.position.x -= 1;
    // }
    // if (keyIsDown(119)){
    //     player1.position.y -= 1;
    // }
 }
 playerAttack(){
    if (keyCode === 83){
     player1attack = createSprite(750,600);
     player1attack.scale = 0.4;
     player1attack.addImage(player1attackImg);
     player1attack.velocity.x = 10;
    }
   
    if(keyIsDown(DOWN_ARROW)){
        player2attack = createSprite(900,600)
        player2attack.scale = 0.4;
        player2attack.addImage(player2attackImg);
        player2attack.velocity.x = -10;
    }
}


gameOver(){
    swal({
        title: `Game Over`,
        text: "Oops you lost....!!!",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
}


handleLifeBar(){
    player1back = createSprite(200,200,200,40);
    player1back.shapeColor = "white";
    player1LifeBar = createSprite(200,200,300,40);
    player1LifeBar.shapeColor = "red";
    if (life1 -=1){
        player1LifeBar.width -= 40;
    }

    player2back = createSprite(width-200,200,200,40);
    player2back.shapeColor = "white";
    player2LifeBar = createSprite(width-200,200,200,40);
    player2LifeBar.shapeColor = "red";
    if (life2 -=1){
        player1LifeBar.width -= 40;
    }
}

     handleWinner(){
         if (life1 = 0){
        gameOver();
        database.ref("/").update({
            gameState: 2
          });
         }
         else if (life2 = 0){
        gameOver();
        database.ref("/").update({
            gameState: 2
          });
         }
     }
     
    handleCollisionPlayerAttack(){
        if (player2attack.collide(player1)){
            life1 -= 1;
            player2attack.remove();
        }
         if (player1attack.collide(player2)){
             life2 -= 1;
             player1attack.remove();
         }

     }

}
