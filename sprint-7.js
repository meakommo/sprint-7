Minimum

// Your code here.
function min(a, b){
if (a < b){
	return a
}
  else 
  	{return b
       }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

RECURSION

function isEven(num){

  if (num % 2 == 0){
        return true
    }
    else {
        return false
    }


}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

Bean counting
// Your code here.

function countBs(a){

  var b = a.split("")
	var j = 0
  	for (var i = 0; i < b.length -1; i ++){
  		if (b[i] == "B") {
    		j += +1
        }
    }
  return j
}
function countChar(a, p){

  	var b = a.split("")
	var j = 0
  	for (var i = 0; i < b.length; i ++){
  		if (b[i] != p) {
    		j += +1
        }
    }
  return j
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4