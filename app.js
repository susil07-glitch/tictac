let boxes= document.querySelectorAll(".click");
let reset= document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let newgamebtn = document.querySelector("#newgame");
let msgbtn= document.querySelector("#msg");
let fordraw=document.querySelector(".msgdraw");
let drawbtn=document.querySelector("#newgame");




//for winner patternf-x
 let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
 ];



let palyer_1="0";
let palyer_2="X";
let palyerturn=true;
let count=0;


 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //palyer 0
        if (palyerturn){
            box.innerText=`${palyer_1}`;
            palyerturn=false;
        }else{
            //palyer X
            box.innerText=`${palyer_2}`;
            palyerturn=true;

        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gamedraw();
        }
    })
 });


 const gamedraw=()=>{
    fordraw.innerText=`Game Draw !`;

    fordraw.classList.add("hide");
    disabledbtn();
    
 }

// to disabled the buttion after getting the winner 
const disabledbtn=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}



 // to show the winner in the message box  

 const showWinner =  (winner ) => {
   msgbtn.innerText=`Congratulation!,Winner is ${winner}` ;
    msgcontainer.classList.remove("hide");
    disabledbtn();

 };  
 // for reset button function 
 const resetgame =()=>{
    palyerturn=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
    fordraw.classList.add("hide");

 };
 // to enables boxes for newgame 
 const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }

// to check the winner 
    const checkWinner=()=>{
        for(let pattern of winPatterns){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if (pos1Val !="" && pos2Val !="" && pos3Val !="" ){
                if(pos1Val===pos2Val && pos2Val=== pos3Val){
                    showWinner(pos1Val);
                } 
            }

        }
 };


 // for reset button 
 reset.addEventListener("click",resetgame );
 newgamebtn.addEventListener("click",resetgame);
 drawbtn.addEventListener("click",resetgame);

