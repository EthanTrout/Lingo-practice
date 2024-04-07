
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
    roundCounter:0,
    roundTiles:[document.querySelectorAll(".round-1"),document.querySelectorAll(".round-2"),document.querySelectorAll(".round-3"),document.querySelectorAll(".round-4"),document.querySelectorAll(".round-5")],
    // round1Tiles: document.querySelectorAll(".round-1"),
    // round2Tiles: document.querySelectorAll(".round-2"),
    // round3Tiles: document.querySelectorAll(".round-3"),
    // round4Tiles: document.querySelectorAll(".round-4"),
    // round5Tiles: document.querySelectorAll(".round-5"),
    userAnswer: document.getElementById("user-answer").value,
    correctLetters:[]

};


function submitAnswer(){
    if(gameController.gameTimer != 0){
        gameController.userAnswer = document.getElementById("user-answer").value;
        displayAnswer()
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
    else if(gameController.roundCounter === 5){
        loose()

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
        
        document.getElementById("user-answer").value =""
        gameController.roundCounter++;
    }
    



}

function win(){
    // Set all tiles green//
    gameController.roundCounter =0;
    console.log("win")
}

function loose(){
    // Set all tiles red //
    gameController.roundCounter =0;
    console.log("loose")
}

// function displayAnswer(){
//     if(gameController.roundCounter ===1){
//         for(x =0; x<gameController.round1Tiles.length;x++){
//             gameController.round1Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===2){
//         for(x =0; x<gameController.round2Tiles.length;x++){
//             gameController.round2Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===3){
//         for(x =0; x<gameController.round3Tiles.length;x++){
//             gameController.round3Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===4){
//         for(x =0; x<gameController.round4Tiles.length;x++){
//             gameController.round4Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
//     else if(gameController.roundCounter ===5){
//         for(x =0; x<gameController.round5Tiles.length;x++){
//             gameController.round5Tiles[x].innerText = gameController.userAnswer[x];
//         }
//     }
// }
function displayAnswer(){
    var roundIndex =gameController.roundCounter;
    console.log(gameController.roundTiles[roundIndex])
    for(x =0; x<gameController.roundTiles[roundIndex].length;x++){
        gameController.roundTiles[roundIndex][x].innerText = gameController.userAnswer[x];
    }
    
}

function setTileGreen (index){
    var roundIndex = gameController.roundCounter;
    gameController.roundTiles[roundIndex][index].style.backgroundColor ="green";
    if(roundIndex != 4){
        gameController.roundTiles[roundIndex+1][index].innerText = gameController.userAnswer[index];
    }
}

// function setTileGreen (index){
// if(gameController.roundCounter ===0){
//     gameController.round1Tiles[index].style.backgroundColor = "green";
//     gameController.round2Tiles[index].innerText = gameController.userAnswer[index];
    
// }
// else if (gameController.roundCounter ===1){
//     gameController.round2Tiles[index].style.backgroundColor = "green";
//     gameController.round3Tiles[index].innerText = gameController.userAnswer[index];
    
// }
// else if (gameController.roundCounter ===2){
//     gameController.round3Tiles[index].style.backgroundColor = "green";
//     gameController.round4Tiles[index].innerText = gameController.userAnswer[index];
    
// }
// else if (gameController.roundCounter ===3){
//     gameController.round4Tiles[index].style.backgroundColor = "green";
//     gameController.round5Tiles[index].innerText = gameController.userAnswer[index];
    
// }
// else if (gameController.roundCounter ===4){
//     gameController.round5Tiles[index].style.backgroundColor = "green";
// }
// else{
    
// }

// }

function setTileOrange(index){
    var roundIndex = gameController.roundCounter;
    if(gameController.roundTiles[roundIndex][index].style.backgroundColor != "green"){
        gameController.roundTiles[roundIndex][index].style.backgroundColor ="orange"
    }
}

// function setTileOrange(index){
//     if(gameController.roundCounter ===0 && gameController.round1Tiles[index].style.backgroundColor != "green"){
//         gameController.round1Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===1 && gameController.round2Tiles[index].style.backgroundColor != "green"){
//         gameController.round2Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===2 && gameController.round3Tiles[index].style.backgroundColor != "green"){
//         gameController.round3Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===3 && gameController.round4Tiles[index].style.backgroundColor != "green"){
//         gameController.round4Tiles[index].style.backgroundColor = "orange";
//     }
//     else if(gameController.roundCounter ===4 && gameController.round5Tiles[index].style.backgroundColor != "green"){
//         gameController.round5Tiles[index].style.backgroundColor = "orange";
//     }
//     else{
        
//     }
// }

