//CARDS
function deal() {

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
    
     
    for (i = 0; i < 6; i++) {
        yourHand[i] = deck[i].key;
        //deck.splice[i];
        console.log(yourHand)
        console.log(deck)
    }
    
    // for (i = 0; i < 12; i++) {
    //     compHand = deck[i].key;
    //     console.log("comps hand " + compHand)
    // }
    //deal cards to yourHand and compHand
    var stuff = ['Grass', 'rocks', 'water'];
    this.types = stuff[Math.floor(Math.random() * stuff.length)];
    //should prevent duplicates

}

console.log(deal());

function fire() {
    //set two cards down
}

//console.log(deck.length)