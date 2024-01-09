let gameSeq = [];
let userSeq = [];

let btns = [ 'red','yellow','green','purple'];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started == false){
    console.log("game started");
    started = true;

    levelUp();
   }
     
});
function gameFlash(btn) {
   btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },100);
}
function userFlash(btn) {
   btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },100);
   }

function levelUp(){
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;
  
   //random btn flash
   let randmIdx  = Math.floor(Math.random()*3);
   let randmColor = btns[randmIdx];
   let randombtn = document.querySelector(`.${randmColor}`);

   // console.log(randmIdx);
   // console.log(randmColor);
   // console.log(randombtn);
    gameSeq.push(randmColor);

   gameFlash(randombtn);
}

function checkAns(idx){
   if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
         setTimeout(levelUp,1000);
      }
   }else{
      h2.innerHTML = `Game Over! your score was <b>${level}</b> <br> Press any key start the game`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";

      })
      reset();
   }

}

function btnPress() {
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute('id');
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
  btn.addEventListener("click", btnPress);
}

function reset () {
   started = false;
   userSeq = [];
   gameSeq = [];
   level =0;
}