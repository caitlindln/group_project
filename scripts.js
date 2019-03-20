var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "salmon"
words[2] = "prawn fried rice"
words[3] = "fish tacos"
words[4] = "lasagne"
words[5] = "spaghetti bolognese"
words[6] = "steak & chips"
words[7] = "meat tacos"
words[8] = "mugcake"
words[9] = "pancakes"
words[10] = "flapjacks"
words[11] = "french toast"
words[12] = "banana cake"
words[13] = "apple crumble"
words[14] = "veggie tacos"
words[15] = "potato curry"
words[16] = "spaghetti carbonara"
words[17] = "vegan salad"
words[18] = "chicken burrito"
words[19] = "easter cakes"
words[20] = "vegan muffin"
words[21] = "vegan cookies"
words[22] = "chocolate cake"
words[23] = "banana loaf"
words[24] = "macaroons"
words[25] = "fish & chips"
words[26] = "falafel burger & sweet potato fries"
words[27] = "beef stir fry"
words[28] = "breakfast smoothie"

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
