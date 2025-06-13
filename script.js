let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector("#mesg");
let msgc=document.querySelector(".mesg-cont");
let newg=document.querySelector(".ngame");



let turn0=true;
let count=0;


let wPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],      
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgc.classList.add('hide');
};

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showDraw=()=>{
    msg.innerText="It was a draww"
    msgc.classList.remove('hide');
    disableBoxes();
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations.${winner}`
    msgc.classList.remove('hide');
    disableBoxes();
}
const checkWinner=()=>{
    for (let pattern of wPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if (val1 !="" && val2 != "" && val3 != ""){
            if (val1==val2 && val2==val3){
                console.log("won");
                showWinner(val1);
            }
            }
        if (count==9){
            showDraw();
        }

            
    };
};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("click");
        if (turn0==true){
            box.innerText="O"
            turn0=false;
            
        }else{
            box.innerText="X";
            turn0=true;
        }
        count=count+1

        box.disabled=true;

        checkWinner();
        
    });


});

newg.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
