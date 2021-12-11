

class Card {
 constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank; 
    this.value = value;
    }
}

class Deck { 
    constructor(myCards = createDeck()) {
    this.myCards = myCards;
    this.shuffleDeck();
    }
    get fullDeck() {
        return this.myCards.length;
    }

    shuffleDeck() {
        let shuffle = this.fullDeck;
        for (let i = 0; i < shuffle; i++) {
            let j = Math.floor(Math.random() * shuffle);
            let tmp = this.myCards[i];
            this.myCards[i] = this.myCards[j];
            this.myCards[j] = tmp;
        }
    }   
}

function createDeck() {
    myCards = [];
    let suit = ["Spade", "Club", "Heart", "Diamond"];
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < value.length; j++) {
             myCards.push(new Card(suit[i], rank[j], value[j]));
        }
    }
    return myCards;
}

class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.playerCards = [];
    }  
    
    playerDeck(deck) {
        this.playerCards = deck;
    }  
}

class Game {
    constructor() {
        this.players = [];
    }

    startGame(player1, player2) {
        this.players.push(new Player(player1));
        this.players.push(new Player(player2));
        let testDeck = new Deck;
        testDeck.shuffleDeck();
        this.players[0].playerCards = testDeck.myCards.slice(0, 26);
        this.players[1].playerCards = testDeck.myCards.slice(26, 52);

    }

    flipCard() {
        for (let i = 0 ; i < this.players[0].playerCards.length ; i++){
            if (this.players[0].playerCards[i].value > this.players[1].playerCards[i].value){
                this.players[0].score += 1;
                console.log("Yorinobu wins round # " + i);
            } else if (this.players[0].playerCards[i].value < this.players[1].playerCards[i].value){
                this.players[1].score += 1;
                console.log( "Hanako wins round # " + i);
            } else {
                 console.log("Round " + i + " was a tie.");
            }
        } 
    } 

    finalScore(player1, player2) {
        if(this.players[0].score > this.players[1].score) {
            console.log(`${player1} wins the game! Final score: Hanako- ${this.players[0].score} vs Yorinobu- ${this.players[1].score}`);
        }else if (this.players[0].score < this.players[1].score) {
            console.log(`${player2} wins the game! Final score: Yorinobu- ${this.player[1].score} vs Hanako- ${this.players[0].score}`);
        }else {
            console.log(`Score is tied! Hanako- ${this.players[0].score}, Yorinobu- ${this.players[1].score}`)
        }
    }
}

let anotherGame = new Game();
console.log(anotherGame.players);
anotherGame.startGame('Hanako', 'Yorinobu');
anotherGame.flipCard('Hanako', 'Yorinobu');
anotherGame.finalScore('Hanako', 'Yorinobu');