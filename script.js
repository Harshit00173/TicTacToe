// console.log("Hello")

let bgmusic=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="0";
isgameover = false
bgmusic.play();

// function to change the turn
const changeturn=()=>{
    return turn==='X'? '0':'X'
    // return turn==='0'? 'X':'0'
    
}

// function for win
const chkwin = ()=>{
    let boxtext=document.getElementsByClassName("box-text");
    let wins=[
        [0,1,2,1.6,5,0],
        [3,4,5,0.6,15,0],
        [6,7,8,0.6,25,0],
        [0,3,6,-9.4,15,90],
        [1,4,7,0.6,15,90],
        [2,5,8,10.6,15,90],
        [0,4,8,1.6,15,45],
        [2,4,6,-0.14,15,-43]
    ]
    wins.forEach (e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
       { document.getElementById('info').innerText = boxtext[e[0]].innerText + " Won";
        isgameover = true;
        document.getElementsByTagName('img')[0].style.width = "200px"
        gameover.play();
        document.getElementsByClassName('line')[0].style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        document.getElementsByClassName('line')[0].style.height='0.5vh'
        document.getElementsByClassName('line')[0].style.width="29vw"

        // console.log(document.getElementsByClassName('line'))

        // console.log(boxtext[e[0]].innerText + " Won")
        // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        // console.log(document.querySelector('.imgbox').getElementsByTagName('img'))
    }
    
})
}


// game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    // let boxtext = element.getElementsByClassName("box-text");
    let boxtext = element.querySelector("span");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            chkwin();
            if(!isgameover){
                document.getElementById("info").innerText  = "Turn for " + turn;
            }
            
            // console.log(document.getElementById("info"));
            // document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            // console.log(document.getElementsByClassName("info"))
            
        }
    })

})


// click listner for reset

reset.addEventListener('click',()=>{
    let boxtext =document.getElementsByClassName("box-text")
    Array.from(boxtext).forEach(e => {
        e.innerText = ""
    })
    turn = "0"; 
    isgameover = false
    // document.querySelector(".line").style.width = "0vw";
    document.getElementById("info").innerText  = "Turn for " + turn;
    document.getElementsByTagName('img')[0].style.width = "0px"
    document.getElementsByClassName('line')[0].style.width="0px"
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})