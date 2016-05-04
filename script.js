//CARDS


var yourHand = []
var compHand = []

var deck = [];

function Card(num, suit, key) {
    this.num = num;
    this.suit = suit;
    this.key = key;
}


for (var i = 0; i <= 51; i++) {
    var num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var value = num[Math.floor(Math.random() * num.length)];

    var type = ["heart", "diamond", "spade", "club"];
    var suit = type[Math.floor(Math.random() * type.length)];
    
    var key = value + suit;
    deck[i] = new Card(value, suit, key)

    for (var j = 0; j < deck.length; j++) {

        console.log("j is " + j)
        
        }
        
        // if (deck[i].key == deck[j].key) {
        //     console.log("match")
    //}
}


function deal() {
    for (var h = 0; h < 26; h++) {
        yourHand.push(deck[h]);
    }

    for (var x = 26; x < 52; x++) {
        compHand.push(deck[x]);
    }

    console.log("your deck has " + yourHand.length + " cards")
    console.log(yourHand)
    console.log("the computer has " + compHand.length + " cards")
    console.log(compHand)

    document.getElementById("your-hand").innerHTML = "<p>You have " + yourHand.length + " cards in your hand</p>";
    document.getElementById("comp-hand").innerHTML = "<p>The computer has " + compHand.length + "cards in its hand</p>";
    document.getElementById("deal").innerHTML = "Fire!";
    document.getElementById("deal").onclick = function() {
        fire();
    }



}

function fire() {
    var hCard = yourHand[0];
    var cCard = yourHand[0];
    
    //var hCard = Math.floor(Math.random() * yourHand.length)
    //var cCard = Math.floor(Math.random() * compHand.length)

    if (yourHand[hCard].num > compHand[cCard].num) {
        compHand.splice(cCard, 1);
        yourHand.push(compHand[cCard]);
        console.log("you win");
        console.log(yourHand);
        console.log(compHand);
    }
    else if (yourHand[hCard].num < compHand[cCard].num) {
        yourHand.splice(hCard, 1);
        compHand.push(yourHand[hCard]);
        console.log("you lose");
        console.log(yourHand);
        console.log(compHand);
    }
    else {
        console.log("tie!")
    }

    document.getElementById("your-hand").innerHTML = "<p>You have " + yourHand.length + " cards in your hand</p><p>object number " + hCard + "<p style='font-size: 30px'>" + yourHand[hCard].num + "</p><img src='" + yourHand[hCard].suit + ".png' width='20px'>"

    document.getElementById("comp-hand").innerHTML = "<p>The computer has " + compHand.length + " cards in their hand</p><p>object number " + cCard + "<p style='font-size: 30px'>" + compHand[cCard].num + "</p><img src='" + compHand[cCard].suit + ".png' width='20px'>"


}

console.log("you push " + yourHand)

console.log("your deck has " + yourHand.length + " cards")
console.log(deck)
console.log(deck.length)


// html test

var y = Math.floor((Math.random() * deck.length) + 1);
console.log(y)



//document.getElementById("app").innerHTML = "<img src='" + deck[y].suit + ".png' width='100px'>"
