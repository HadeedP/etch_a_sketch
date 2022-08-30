let colour = "black"
let click = true;

function board(size){
    let board = document.querySelector(".board")
    let sqaures = board.querySelectorAll("div");
    sqaures.forEach((div) => div.remove())

    //make 16 columns each column have width of 1/16 of width of container 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    //make 16 rows each column have width of 1/16 of width of container 
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size*size;
    for(let i=0; i<amount; i++){
        let sqaure = document.createElement("div");
        sqaure.addEventListener("mouseover", colourSqaure)
        sqaure.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", sqaure); 
}
}

board(16)

function changeSize(input){
    if(input>=2 && input<=100){
        document.querySelector(".error").style.display = "none";
        board(input);
    
    } else{
    document.querySelector(".error").style.display = "flex";
}
}

function colourSqaure(){

    if (click){
        if(colour==="rainbow"){
        this.style.backgroundColor=`hsl(${Math.random()*360}, 100%, 50%)`
        }else{
        this.style.backgroundColor= colour;

        }
    }
}

function changeColour(choice){
    colour=choice;
}

function reset(){
    let board = document.querySelector(".board")
    let sqaures = board.querySelectorAll("div");
    sqaures.forEach((div) => div.style.backgroundColor= "white");

}


document.querySelector("body").addEventListener("click", (e) =>{

    if(e.target.tagName != "BUTTON"){
        click=!click;
        if(click){
            document.querySelector(".mode").textContent="Mode: Colouring"
        }else{
            document.querySelector(".mode").textContent="Mode: Not Colouring"
    }
 

    }
});
