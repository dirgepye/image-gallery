//CARDS
var deck = [{
    key: "twoHearts",
    num: 2,
    suit: "heart"
}, {
    key: "threeHearts",
    num: 3,
    suite: "heart"
}, {
    key: "fourHearts",
    num: 4,
    suit: "heart"
}, {
    key: "fiveHearts",
    num: 5,
    suite: "heart"
}, {
    key: "sixHearts",
    num: 6,
    suit: "heart"
}, {
    key: "sevenHearts",
    num: 7,
    suite: "heart"
}, {
    key: "eightHearts",
    num: 8,
    suit: "heart"
}, {
    key: "nineHearts",
    num: 9,
    suit: "heart"
}, {
    key: "tenHearts",
    num: 10,
    suit: "heart"
}, {
    key: "jackHearts",
    num: 11,
    suite: "heart"
}, {
    key: "queenHearts",
    num: 12,
    suit: "heart"
}, {
    key: "kingHearts",
    num: 13,
    suite: "heart"
}, {
    key: "aceHearts",
    num: 13,
    suite: "heart"
}, ];


var yourHand = []
var compHand = []


function card() {
    var num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.value = num[Math.floor(Math.random() * num.length)];
    var type = ["Heart", "Diamond", "Spade", "Club"];
    this.suit = type[Math.floor(Math.random() * type.length)];
    
    
}



var i = 1;
do {
    var testDeck = [];
    var yourCard = new card;
    console.log(yourCard);
    testDeck.push(yourCard);
    i++ ;
    
}
while (i < 5);









// var card1 = new card;
// var card4 = new card;
// var card6 = new card;
// var card7 = new card;

// console.log(card7)

// testDeck.push(card1,card4,card6)

// console.log(card1);

console.log(testDeck);



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