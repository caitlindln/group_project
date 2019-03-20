var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Salmon"
words[2] = "Prawn Fried Rice"
words[3] = "Fish Tacos"
words[4] = "Lasagne"
words[5] = "Spaghetti Bolognese"
words[6] = "Steak & Chips"
words[7] = "Meat Tacos"
words[8] = "Mug Cake"
words[9] = "Pancakes"
words[10] = "Flapjacks"
words[11] = "French Toast"
words[12] = "Banana Cake"
words[13] = "Apple Crumble"
words[14] = "Veggie Tacos"
words[15] = "Potato Curry"
words[16] = "Spaghetti Carbonara"
words[17] = "Vegan Salad"
words[18] = "Chicken Burrito"
words[19] = "Easter Cakes"
words[20] = "Vegan Muffin"
words[21] = "Vegan Cookies"
words[22] = "Chocolate Cake"
words[23] = "Banana Loaf"
words[24] = "Macaroons"
words[25] = "Fish & Chips"
words[26] = "Falafel Burger & Sweet Potato Fries"
words[27] = "Beef Stir Fry"
words[28] = "Breakfast Smoothie"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
