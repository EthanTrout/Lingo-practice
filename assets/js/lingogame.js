
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
    roundCounter:1,
    round1List: document.querySelectorAll(".round-1"),
    round2List: document.querySelectorAll(".round-2"),
    round3List: document.querySelectorAll(".round-3"),
    round4List: document.querySelectorAll(".round-4"),
    round5List: document.querySelectorAll(".round-5"),
    userAnswer: document.getElementById("user-answer").value

};
console.log(gameController.userAnswer);

function submitAnswer(){
    if(gameController.gameTimer != 0){
        gameController.userAnswer = document.getElementById("user-answer").value;
        console.log(gameController.userAnswer)
    }
}

