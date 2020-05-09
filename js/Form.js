class Form {

  constructor() {
    this.reset = createButton("Reset")
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h1')
    fill(0);
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 150, 30);

    this.input.position(displayWidth/2 - 150,displayHeight/2 - 150);
    this.button.position(displayWidth/2 - 150,displayHeight/2 - 100);
    this.reset.position(displayWidth - 100, displayHeight/2 - 40);
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.Updatecarsatend(0);
    });
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 130,displayHeight/2 - 150);


    });

  }
}

