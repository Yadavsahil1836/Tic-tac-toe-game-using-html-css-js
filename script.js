let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset_buttom");
let Newgamebtn = document.querySelector("#new_game");
let msgconatiner = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');


let turn0 = true;//player x, player y

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const reset_game =()=>{
    turn0 = true;
    enable_box();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerHTML = "O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
    });
});



const disable_box =()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
};

const enable_box =()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled = false;
    });
};

const showwinner=(winner)=>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disable_box();
};

const checkwinner=()=>{
    for(x of winpattern){
        let pos1 = boxes[x[0]].innerHTML;
        let pos2 = boxes[x[1]].innerHTML;
        let pos3 = boxes[x[2]].innerHTML;

        if(pos1 !="" && pos2 !="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
                return;
            }
        }
    
        
    }
};


Newgamebtn.addEventListener("click", reset_game);
reset_btn.addEventListener("click", reset_game);




