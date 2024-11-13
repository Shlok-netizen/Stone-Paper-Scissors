let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);//math.random hame 0->1 tak value deta hai so,*3 aab 0->2 tak value dega(Math.floor remove decimal)
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText="Game was Draw! Play again";
    msg.style.backgroundColor="#080b32";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice)
    //generate computer choice->modular way of programming(small f'n for each work)
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
     let userWin=true;
     if(userChoice==="rock"){
        //scissors,paper->if rock come game draw pahle hi ho jata;
        userWin=compChoice==="paper"?false:true;
     }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
     }else{
        userWin=compChoice==="rock"?false:true;
     }
     showWinner(userWin,userChoice,compChoice);   
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});