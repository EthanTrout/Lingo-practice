
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
    lingoWord: "",
    roundCounter:0,
    roundTiles:[document.querySelectorAll(".round-1"),document.querySelectorAll(".round-2"),document.querySelectorAll(".round-3"),document.querySelectorAll(".round-4"),document.querySelectorAll(".round-5")],
    // round1Tiles: document.querySelectorAll(".round-1"),
    // round2Tiles: document.querySelectorAll(".round-2"),
    // round3Tiles: document.querySelectorAll(".round-3"),
    // round4Tiles: document.querySelectorAll(".round-4"),
    // round5Tiles: document.querySelectorAll(".round-5"),
    userAnswer: document.getElementById("user-answer").value,
    correctLetters:[],
    playerMoney:0,
    moneyIncrement:200,
    wordLength:4
    

};

// taken from WordsApi documentation //
async function getNewWord(){
    var wordLength =gameController.wordLength;
    const url = `https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=${wordLength}&lettersMax=${wordLength}&partOfSpeech=verb`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '44fbfbc299msh07c047d4921cbfap162ff8jsnd35ae1cbf043',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        gameController.lingoWord = result.word
    } catch (error) {
        console.error(error)
    }
}

// Checks to see if the word is a real word
 async function checkWord(word,cb){
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '44fbfbc299msh07c047d4921cbfap162ff8jsnd35ae1cbf043',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    console.log(word)
    try {
        const response = await fetch(url, options);
        
        if(response.ok){
            cb(true)
        }
        else if(response.status === 404){
            cb(false)
        }
        
        
        
    } catch (error) {
        console.log("error")
        console.error(error)
        
    }
    
 }


// Starts a new round 
async function GenerateLingo(wordLength){
    await getNewWord(wordLength)
    var roundIndex = gameController.roundCounter;
    document.getElementById("user-answer").value =""
    console.log(gameController.lingoWord)
    gameController.roundTiles[roundIndex][0].innerText = gameController.lingoWord[0];
    
}

// Onlcick verify button
function submitAnswer(){
    if(gameController.gameTimer != 0){
        gameController.userAnswer = document.getElementById("user-answer").value;
        displayAnswer();
        checkWord(gameController.userAnswer,verifyAnswer);
    }
    
}

// Onclick 4 letter Lingo
function fourLetterLingo(){
    gameController.wordLength=4
    GenerateLingo()
}
function fiveLetterLingo(){
    var rounds = document.querySelectorAll(".round")
    for(x=0;x<rounds.length;x++){
        console.log(rounds[x])
        var li =rounds[x].firstElementChild
        console.log(li)
        var clone = li.cloneNode(true)
        console.log(clone)
        rounds[x].appendChild(clone)
    }
    gameController.wordLength =5
    GenerateLingo()
}


// Verifys if the Answer is correct or Inocrrect and calls to set tiles to approprite color 
function verifyAnswer(isWord){
    console.log(isWord)
    if(gameController.userAnswer === gameController.lingoWord ){
        endGame("green");
    }
    else if(gameController.roundCounter === 4 || !isWord){
        endGame("red")

    }
    else if(gameController.userAnswer != gameController.lingoWord && isWord){
        for(x =0; x<gameController.userAnswer.length;x++){
            var letter = gameController.userAnswer[x]
            if(letter === gameController.lingoWord[x]){
                setTileGreen(x);
            }
        }
        for(z =0; z<gameController.userAnswer.length;z++){
            var letter = gameController.userAnswer[z]
            for(y=0; y<gameController.lingoWord.length;y++){
                if(letter === gameController.lingoWord[y]){
                    if(gameController.roundTiles[gameController.roundCounter][y].style.backgroundColor !="green")
                    setTileOrange(z);
                }
            }

        }
        document.getElementById("user-answer").value =""
        gameController.roundTiles[gameController.roundCounter][0].innerText = gameController.lingoWord[0];
        gameController.roundCounter++;
    }
    



}

function endGame(color){
    // Set all tiles to correct color//
    for(x=0; x< gameController.roundTiles[gameController.roundCounter].length;x++){
        gameController.roundTiles[gameController.roundCounter][x].style.backgroundColor =color;
    }
    if(color === "green"){
        gameController.playerMoney += gameController.moneyIncrement;
    }
    
    setTimeout(resetDisplay,2000)
    
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

// Sets user input onto tiles
function displayAnswer(){
    var roundIndex =gameController.roundCounter;
    for(x =0; x<gameController.roundTiles[roundIndex].length;x++){
        gameController.roundTiles[roundIndex][x].innerText = gameController.userAnswer[x];
    }
    
}

// clears all tiles 
function resetDisplay(){
    gameController.roundCounter =0;
    console.log(gameController.playerMoney)
    var roundIndex =gameController.roundCounter;
    for(x=0; x<gameController.roundTiles.length;x++){
        for(y =0; y<gameController.roundTiles[x].length;y++){
            gameController.roundTiles[x][y].innerText = ".";
            gameController.roundTiles[x][y].style.backgroundColor ="white"
        }
    }
    GenerateLingo();
    
    

}
// sets tile passed to green
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

// sets tile passed to orange
function setTileOrange(index,letter){
    var roundIndex = gameController.roundCounter;
    if(gameController.roundTiles[roundIndex][index].style.backgroundColor != "green"){
        gameController.roundTiles[roundIndex][index].style.backgroundColor = "orange"
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



