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
