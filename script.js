//CARDS

var yourHand = []
var compHand = []

var deck = [];

function Card(num, suit) {
    this.num = num;
    this.suit = suit;
}


for(var i = 0; i < 52; i++) {
    var num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    var value = num[Math.floor(Math.random() * num.length)];
    
    var type = ["Heart", "Diamond", "Spade", "Club"];
    var suit = type[Math.floor(Math.random() * type.length)];
    
    deck[i] = new Card(value, suit)
    
    //document.getElementById("app").innerHTML = "<p>Suit is " + deck[i].suit + " and it has a value of " + deck[i].num + "</p>"
    //$("#app").append("<p>Suit is " + deck[i].suit + " and it has a value of " + deck[i].num + "</p>")
    
    deck.forEach(verify);
    
    function verify() {
    for (var y = 0; y = deck.length; y++) {
        if (deck[i].suit == deck[y].suit && deck[i].num == deck[y].num) {
            console.log(deck[i] + "matches with" + deck[y])
        }
    }
    }
}

console.log("lookin at " + deck[5].suit)

console.log(deck)
console.log(deck.length)

// function num() {
//     var num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//     var value = num[Math.floor(Math.random() * num.length)];
//     //var numRes = this.value;
//     return value;
// }

// function suit() {
//     var type = ["Heart", "Diamond", "Spade", "Club"];
//     var suit = type[Math.floor(Math.random() * type.length)];
//     return suit;
// };




// var theTree = new Tree('Redwood');
// console.log('theTree.constructor is ' + theTree.constructor);

// var i = 1;
// do {
//     var testDeck = [];
//     var yourCard = new card;
//     console.log(yourCard);
//     testDeck.push(yourCard);
//     i++ ;
    
// }
// while (i < 5);









// var card1 = new card;
// var card4 = new card;
// var card6 = new card;
// var card7 = new card;

// console.log(card7)

// testDeck.push(card1,card4,card6)

// console.log(card1);

//console.log(testDeck);



    // for (i = 0; i < 6; i++) {
    //     yourHand[i] = deck[i].key;
    //     //deck.splice[i];
    //     console.log(yourHand)
    //     console.log(deck)
    // }

    // for (i = 0; i < 12; i++) {
    //     compHand = deck[i].key;
    //     console.log("comps hand " + compHand)
    // }
    //deal cards to yourHand and compHand
    //should prevent duplicates




// var warrior1 = new warrior("steve","male");
// var warrior2 = new warrior("alf","male");
// var warrior3 = new warrior("barbara walters","female");
// var warrior4 = new warrior("hillary clinton","female");
// var warrior5 = new warrior("george clooney","male");
// var warrior6 = new warrior("henry kissinger","male")

// console.log(warrior1.faceoff(warrior4));

// console.log(warrior2);

// var deck = []

// deck.push(warrior2,warrior3)

// console.log(deck)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var testDeck = [1,2,3,4];
// testDeck.push({deal});

// var card = new deal();

// console.log(card);


// console.log(testDeck);

//console.log(deal());

function fire() {
    //set two cards down
}

//console.log(deck.length)