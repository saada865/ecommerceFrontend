var project = setInterval(projectDone, 10);
var clients = setInterval(happyClients, 10);
var phones = setInterval(phonesSold, 10);
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone(){
  count1++;
  document.querySelector("#number1").innerHTML= count1;

  if(count1 == 2000){
    count1 = 1;
  }
}

function happyClients(){
  count2++;
  document.querySelector("#number2").innerHTML= count2;

  if(count2 == 2000){
    count2 = 1;
  }
}

function phonesSold(){
  count3++;
  document.querySelector("#number3").innerHTML= count3;

  if(count3 == 2000){
    count3 = 1;
  }
}

  document.querySelector(".buyNowBtn").onclick = myFun1;

function myFun1(){
  document.querySelector(".buyNowBtn").style.backgroundColor = "grey";
}


document.querySelector("#buyNewBtn1").onclick = myFun2;

function myFun2(){
document.querySelector("#buyNewBtn1").style.backgroundColor = "blue";
}

document.querySelector("#buyNewBtn2").onclick = myFun3;

function myFun3(){
document.querySelector("#buyNewBtn2").style.backgroundColor = "blue";
}

document.querySelector("#buyNewBtn3").onclick = myFun4;

function myFun4(){
document.querySelector("#buyNewBtn3").style.backgroundColor = "blue";
}
