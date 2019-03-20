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
words[8] = "Mugcake"
words[9] = "Pancakes"
words[10] = "Flapjacks"
words[11] = "French Toast"
words[12] = "Banana Cake"
words[13] = "Apple Crumble"
words[14] = "Veggie Tacos"
words[15] = ""
words[16] = ""
words[17] = ""
words[18] = ""
words[19] = ""
words[20] = ""
words[21] = ""
words[22] = ""
words[23] = ""
words[24] = ""
words[25] = ""
words[26] = ""
words[27] = ""
words[28] = ""

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
