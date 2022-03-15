class Form {
    constructor() {
    //   this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.titleImg = createImg("./images/OIP.jpg", "game title");
    //   this.greeting = createElement("h2");
    }
  
    setElementsPosition() {
      this.titleImg.position(120, 45);
    //   this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
    //   this.greeting.position(width / 2, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
    //   this.input.class("customInput");
      this.playButton.class("customButton");
    //   this.greeting.class("greeting");
    }
  
    //BP
    hide() {
    //   this.greeting.hide();
      this.playButton.hide();
      this.titleImg.hide();
    //   this.input.hide();
    }
  
    //BP
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        // this.input.hide();
        this.playButton.hide();
        // var message = `
        // Hello ${this.input.value()}
        // </br>wait for another player to join...`;
        // this.greeting.html(message);
        // playerCount += 1; //Changed
        // player.name = this.input.value();
        // player.index = playerCount;
        // player.addPlayer();
        // player.updateCount(playerCount); // BP
        // player.getDistance(); //BP
      });
    }
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }

    playButtonPressed(){
        if(this.playButton.mousePressed()){
            this.hide();
    database.ref("/").update({
        gameState: 1
      });
      database.ref("/").update({
        playerCount: 1
      });
        }
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
      this.playButtonPressed();
    }
}