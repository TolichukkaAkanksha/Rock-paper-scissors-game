let audioTurn = new Audio("ting.mp3")
let userscore=0;
let compscore=0;
const userscore1=document.querySelector("#user");
const compcore1=document.querySelector("#comp");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const compchoice=()=>{
   let arr=["rock","paper","scissors"];
   const randomind=Math.floor(Math.random()*3);
   return arr[randomind];
}
const draw=()=>{
   msg.innerText="Game was Draw!";
   msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userchoice,comp)=>{
   if(userwin){
      userscore++;
      userscore1.innerText=userscore;
   msg.innerText=`You Win The Game! your ${userchoice} beats ${comp}`;
   msg.style.backgroundColor="green";
   }
else{
   compscore++;
   compcore1.innerText=compscore;
msg.innerText=`You Lose The Game! ${comp} beats your ${userchoice}`;
msg.style.backgroundColor="red";
}
}
const playGame=(userchoice)=>{
  const comp=compchoice();
  if(userchoice==comp)
  {
   draw();
  }
  else
  {
   let userwin=true;
   if(userchoice==="rock"){
   userwin=comp==="paper"?false:true;
   }
   else if(userchoice=="paper")
   {
      userwin=comp==="scissors" ? false : true; 
   }
   else if(userchoice=="scissors")
   {
      userwin=comp==="rock"?false : true;
   }
   showwinner(userwin,userchoice,comp);
  }
 
}
choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id");
      audioTurn.play();
      playGame(userchoice);
   })
})