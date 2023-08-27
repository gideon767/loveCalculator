
var calc = document.getElementById("calculateLove");
  calc.addEventListener("click", ()=>{
    var yourName = document.getElementById("yourName").value;
    var theirName = document.getElementById("theirName").value;
    var random = Math.floor(Math.random()*100 + 1);


var numberOfTimes = 3;

    for (var i = 0; i < numberOfTimes; i++) {
        if (random <= 40) {
         document.getElementById("result").innerHTML = `Lovescore between ${yourName} and ${theirName} is ${random}%. It won't work.`;
         document.getElementById("remarks").classList.add("bad");
         document.getElementById("remarksss").classList.remove("perfect");
         document.getElementById("remarkss").classList.remove("pairing");

       } else if (random <=75) {
         document.getElementById("result").innerHTML = `Lovescore between ${yourName} and ${theirName} is ${random}%. Congratulations, you're pairing.`;
         document.getElementById("remarkss").classList.add("pairing");
         document.getElementById("remarksss").classList.remove("perfect");
         document.getElementById("remarks").classList.remove("bad");
       } else {
         document.getElementById("result").innerHTML = `Lovescore between ${yourName} and ${theirName} is ${random}%. Wow! You are made for each other.`;
         document.getElementById("remarksss").classList.add("perfect");
         document.getElementById("remarks").classList.remove("bad");
         document.getElementById("remarkss").classList.remove("pairing");
       }

       while (random >= i) {
           calc.style.display = "none";
           break;
       }
       break;
    }
  });


