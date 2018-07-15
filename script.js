// Even Odd 
// Raja Reddy Neelapu

var count = 20;
var numsEven = [];
var numsOdd = [];
var setInt;
var startGame = false;
var button = document.getElementById("startCount");
   

function startEvenOdd() {
  startGame = true;
  
  if(startGame){
    setInt = setInterval(goFun, 1000);
    button.textContent = 'Wait';
    }
}

function goFun() {
  //--count;
  document.getElementById("numbers").textContent = --count;
  
  if(count % 2 === 0) {
    numsEven.push(count);
    //document.getElementById("evenNum").textContent = numsEven;
  }
  
  if(Math.abs(count % 2) === 1) {
     numsOdd.push(count);
     //document.getElementById("oddNum").textContent = numsOdd;
  }
    
  for(var x of numsEven){
     document.getElementById("evenNum").textContent = x;
  };
  for(var y of numsOdd){
     document.getElementById("oddNum").textContent = y;
  };
  
  if(count === 0){
    
    clearInterval(setInt);
    document.getElementById("numbers").innerHTML = "Hi!";
    //console.log(numsEven);
    // console.log(numsOdd);
    startGame = false;
    button.textContent = 'Start';
  }
  
}

button.addEventListener('click', startEvenOdd, false);