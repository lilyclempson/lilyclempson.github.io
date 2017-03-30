console.log('hello world');


var myStudentDebt = 800;
myStudentDebt

var myLuckyNumbers = [ 4, 7, 8, 16];

console.log(myLuckyNumbers);
console.log(myLuckyNumbers[0]);

myLuckyNumbers[2] = 36;
console.log(myLuckyNumbers[2]);

add(10,10);

function addFive(x) {
	return x + 5;
}

function add(x, y) {
	console.log(x + y);
}

addFive(10);
add(8,9);
add("Bryant" + "Wells");


var myAge = 20;

if (myAge < 21) {
	console.log("u cant party");
} else {
	console.log("party on garth");
}


console.log(addFive(6));

var hamburgers = 0;

for (var i = 0; i < 10; i = i + 1) {
	hamburgers++;
	console.log(hamburgers);
}


console.log("How many licks does it take to get to the center of a tootsie pop??");


for (var licks = 1; licks <= 3; licks ++) {
	if (licks < 4) {
		console.log("ahhh " + licks);
	} else {
		console.log("CRUNCH!!")
	}
} 


function askMrOwl(numOfLicks) {
	for (var licks = 1; licks <= 3; licks ++) {
	if (licks < 4) {
		console.log("ahhh " + licks);
	} else {
		console.log("CRUNCH!!")
	}
 }

}


askMrOwl(18);



//# # # #
 
 //# # # #
//# # # #
  //# # # #


function makeCheckerboard(width, height) {

	var checkerboard = "";

	for (j = 0; j < height; j++){

		if (j % 2) {
			for (i = 0; i < width; i++) {
				if ( i % 2) {
	    				checkerboard = checkerboard + "#"
				} else {
					checkerboard = checkerboard + " "
	  			}
			}

		} else {
			for (i = 0; i < width; i++) {
				if ( i % 2 ){
					checkerboard = checkerboard + " "
				} else {
					checkerboard = checkerboard + "#"
				}
			}
		} 

 		checkerboard = checkerboard + "\n"
	}

	console.log(checkerboard);
}



























