class Players {
    constructor(){
      this.players = []
    }
 
    newPlayer(name){
      let p = new Players(name)
      this.players.push(p)
      return p
    }
    get allPlayers(){
        for(let i=0; i<this.players.length; i++){
            console.log("my players",i);
            console.log(this.players);
      }
      return this.players
    }
  
    get numberOfPlayers(){
        return this.players.length
    }
    play(){
        console.log("come on play!!");
    }
  }
  
  let league = new Players();
  league.newPlayer("Mark");
  league.newPlayer("Roger");
  league.newPlayer("Tom")
 
  // list all the players
  console.log(league.numberOfPlayers + " Players")
  console.log(league.allPlayers)
  
  
  // make them do something
  league.allPlayers.forEach(player => player.play())