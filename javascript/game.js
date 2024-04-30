let btn1 = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontainer=document.querySelector(".msg");
let paragraph=document.querySelector("#win");

let playerO = true;

const Winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];




btn1.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("button was clicked");
       if(playerO)
       {
        box.innerText="O";
        playerO=false;
       }
       else{
       box. innerText="X";
        playerO=true;
       }
       box.disabled=true;
       checkwinner();
    })
})
       
const resetgame = () =>{

    playerO=true;
    enableboxes();
    msgcontainer.classList.add("hide");

};
       
 const  newgame = () =>{
    playerO = true;
    enableboxes();
 }
const disableboxes = () =>{

    for (let box of btn1){
        box.disabled=true;
    }

};

const enableboxes = () =>{

    for (let box of btn1){
        box.disabled=false;
        box.innerText="";
    }

};


const showwinner=(winner)=>{
    win.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

};

const checkwinner = ()=>{
    for (let pattern of Winningpattern)
    {
        
            
        let pos1=btn1[pattern[0]].innerText;
        let pos2=btn1[pattern[1]].innerText;
        let pos3=btn1[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                 showwinner(pos1);
                 

            }
        }
    }

};

newbtn.addEventListener("click",resetgame);

resetbtn.addEventListener("click",resetgame);
