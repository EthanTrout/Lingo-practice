
// const lingoWord =["bent","best","beet","part","pent","rake","rent"]
// var answerSubmitted;
// var generatedLingo;
// var correctLetters =[]
// var gameLetters = (document.querySelectorAll(".letter"))



// function submitAnswer(){
//     answerSubmitted = document.getElementById("userAnswer").value
//     if(generatedLingo === answerSubmitted){
//         console.log("correct")
//         for(let i=0;i<generatedLingo.length;i++){
//             if(generatedLingo[i] === answerSubmitted[i]){
//                 correctLetters.push(i)
//             }
//         }
//         for(let x=0; x<correctLetters.length;x++){
//             var z =correctLetters[x];
//             gameLetters[z].innerText = generatedLingo[z]
//         }
//         GenerateLingo()
//         alert("correct")
        

        
//     }
//     else{
//         for(let i=0;i<generatedLingo.length;i++){
//             if(generatedLingo[i] === answerSubmitted[i]){
//                 correctLetters.push(i)
//             }
//         }
//         for(let x=0; x<correctLetters.length;x++){
//             var z =correctLetters[x];
//             gameLetters[z].innerText = generatedLingo[z]
//         }
        

        
//     }
// }

// function GenerateLingo(){
//     var lingo = lingoWord[Math.floor(Math.random()*7)]
//     // document.getElementById("answer").innerText = lingo
//     generatedLingo = lingo
//     correctLetters =[]
//     gameLetters[0]. innerText = generatedLingo[0];
//     for(let x =1; x<gameLetters.length;x++){
//         gameLetters[x].innerText =""
//     }
    
// }




// window.onload =GenerateLingo

const gameController ={
    gameTimer:10,
    lingoWord: "beet",
    roundCounter:1,
    round1Tiles: document.querySelectorAll(".round-1"),
    round2Tiles: document.querySelectorAll(".round-2"),
    round3Tiles: document.querySelectorAll(".round-3"),
    round4Tiles: document.querySelectorAll(".round-4"),
    round5Tiles: document.querySelectorAll(".round-5"),
    userAnswer: document.getElementById("user-answer").value,
    correctLetters:[]

};
console.log(gameController.userAnswer);

function submitAnswer(){
    if(gameController.gameTimer != 0){
        gameController.userAnswer = document.getElementById("user-answer").value;
        verifyAnswer()
    }
    else{
        // End game, show score, set all tiles to red //
    }
}

function verifyAnswer(){
    if(gameController.userAnswer === gameController.lingoWord ){
        win();
        
    }
    else if(gameController.userAnswer != gameController.lingoWord){
        for(x =0; x<gameController.userAnswer.length;x++){
            var letter = gameController.userAnswer[x]
            if(letter === gameController.lingoWord[x]){
                setTileGreen(x);
            }
            for(y=0; y<gameController.lingoWord.length;y++){
                if(letter === gameController.lingoWord[y]){
                    setTileOrange(x);
                }
            }
        }
    }



}

function win(){
    console.log("win")
}

function loose(){
    console.log("loose")
}

function setTileGreen (index){
if(gameController.roundCounter =1){
    gameController.round1Tiles[index].style.backgroundColor = "green";
}
else if (gameController.roundCounter =2){
    gameController.round2Tiles[index].style.backgroundColor = "green";
}
else if (gameController.roundCounter =3){
    gameController.round3Tiles[index].style.backgroundColor = "green";
}
else if (gameController.roundCounter =4){
    gameController.round4Tiles[index].style.backgroundColor = "green";
}
else if (gameController.roundCounter =5){
    gameController.round5Tiles[index].style.backgroundColor = "green";
}



}


function setTileOrange(index){
    if(gameController.roundCounter =1 && gameController.round1Tiles[index].style.backgroundColor != "green"){
        gameController.round1Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter =2 && gameController.round2Tiles[index].style.backgroundColor != "green"){
        gameController.round2Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter =3 && gameController.round3Tiles[index].style.backgroundColor != "green"){
        gameController.round3Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter =4 && gameController.round4Tiles[index].style.backgroundColor != "green"){
        gameController.round4Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter =5 && gameController.round5Tiles[index].style.backgroundColor != "green"){
        gameController.round5Tiles[index].style.backgroundColor = "orange";
    }
}

