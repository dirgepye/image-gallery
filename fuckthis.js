var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var empty = []

function del(num) {
    empty.push(fruits[num])
    //delete fruits[num]
    fruits.splice(num, 1)
    
    console.log(fruits)
    console.log(empty)
}

del(0);

