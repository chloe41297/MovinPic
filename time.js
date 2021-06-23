const TIME = document.querySelector(".headLine");
const HUMAN = document.querySelector(".human");
const MAIN = document.querySelector("main");
const TITLE = document.querySelector(".mainTitle");
const titleMain = document.querySelector(".mainTitle__main");
const titleSub = document.querySelector(".mainTitle__sub");

let currentX = 0;
let currentY = 0;
let moveTimeX = 0;
let moveTimeY = 0;
let humanY = 0;
let titleY = 0;
let fontScale = 70;


function handleMouse(e){
    currentX = e.clientX - 400;
    currentY = e.clientY - 400 ;
    
  
}
function loop(){
 
    moveTimeY += (currentY - moveTimeY)*0.003;
    humanY += (currentY - humanY)*-0.0005;
    titleY += (currentY - titleY)*0.0005;
    fontScale = fontScale*1.001;
    TIME.style.transform = "translate(0px,"+moveTimeY+"px)";
    TITLE.style.transform = "translate(0px,"+titleY+"px)";
    TITLE.style.fontSize = `${fontScale}px`;
    HUMAN.style.transform = "translate(0px,"+humanY+"px)";
    window.requestAnimationFrame(loop);
}

function init(){
    MAIN.addEventListener("mousemove",handleMouse);
    loop();
}
init();