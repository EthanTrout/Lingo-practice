
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
const nineLetterWords=[
    {"word": "abandoned", "clue": "Where lost socks go"},
    {"word": "blackjack", "clue": "21's favorite card game"},
    {"word": "honeymoon", "clue": "The adventure after 'I do'"},
    {"word": "laborious", "clue": "As hard as finding Waldo in a candy store"},
    {"word": "mysterious", "clue": "The secret life of socks"},
    {"word": "adventure", "clue": "The quest for excitement"},
    {"word": "boulevard", "clue": "Where streets become grand"},
    {"word": "courageous", "clue": "What lions and heroes have in common"},
    {"word": "delicious", "clue": "The sound of a meal worth savoring"},
    {"word": "enchanted", "clue": "Where fairy tales come true"},
    {"word": "flourish", "clue": "How gardens and talents thrive"},
    {"word": "gleefully", "clue": "The way laughter fills a room"},
    {"word": "harmonize", "clue": "When voices blend in perfect pitch"},
    {"word": "innocence", "clue": "The quality lost but never forgotten"},
    {"word": "jubilance", "clue": "The joy of celebration"},
    {"word": "kindheart", "clue": "The place where compassion resides"},
    {"word": "labyrinth", "clue": "A maze of twists and turns"},
    {"word": "mystique", "clue": "The allure of the unknown"},
    {"word": "nourished", "clue": "What good food does for the soul"},
    {"word": "opulence", "clue": "The luxury of abundance"},
    {"word": "paradise", "clue": "Heaven on Earth"},
    {"word": "quicksand", "clue": "The earth's sneaky trap"},
    {"word": "radiantly", "clue": "Shining like the sun"},
    {"word": "settlings", "clue": "Where disputes find resolution"},
    {"word": "tranquili", "clue": "The calm within the storm"},
    {"word": "uplifting", "clue": "What a good song or story does to the spirit"},
    {"word": "victorious", "clue": "The feeling of triumph"},
    {"word": "whimsical", "clue": "The magic of imagination"},
    {"word": "beachside", "clue": "Where sand meets surf"},
    {"word": "carousel", "clue": "A spinning symphony of childhood joy"},
    {"word": "dazzling", "clue": "Like fireworks on a starry night"},
    {"word": "euphorial", "clue": "On cloud nine"},
    {"word": "fireworks", "clue": "Sky's celebration"},
    {"word": "gigabytes", "clue": "Bytes on steroids"},
    {"word": "happiness", "clue": "The ultimate pursuit"},
    {"word": "imagining", "clue": "The playground of the mind"},
    {"word": "jellybean", "clue": "Sweet and colorful"},
    {"word": "kaleidoscope", "clue": "A visual wonder"},
    {"word": "laughting", "clue": "The sound of joy"},
    {"word": "magnified", "clue": "Brought into focus"},
    {"word": "nostalgia", "clue": "Fond memories of the past"},
    {"word": "optimistic", "clue": "Seeing the glass as half full"},
    {"word": "pizzazzed", "clue": "Adding spice to life"},
    {"word": "quicksand", "clue": "Mercury on the move"},
    {"word": "rainstorm", "clue": "Nature's shower of blessings"},
    {"word": "sunrising", "clue": "A new dawn"},
    {"word": "treasured", "clue": "Priceless possessions"},
    {"word": "uniformed", "clue": "Dressed to impress"},
    {"word": "vivacious", "clue": "Full of life and energy"},
    {"word": "wanderers", "clue": "Roaming spirits"},
    {"word": "xylophone", "clue": "Musical rainbow"},
    {"word": "yesterday", "clue": "The day before tomorrow"},
    {"word": "zestiest", "clue": "Adding a punch to life"},
    {"word": "dreamland", "clue": "Where dreams come true"},
    {"word": "festerers", "clue": "The festivity's hosts"},
    {"word": "adorkable", "clue": "Endearingly nerdy"},
    {"word": "bubblegum", "clue": "Fun to chew, fun to blow"},
    {"word": "cosmology", "clue": "The study of the universe"},
    {"word": "dazzlers", "clue": "Sparkling stars"},
    {"word": "enchanted", "clue": "Where magic resides"},
    {"word": "fabulist", "clue": "The teller of tall tales"},
    {"word": "giggliest", "clue": "Overflowing with giggles"},
    {"word": "huggable", "clue": "Just asking for a squeeze"},
    {"word": "inspiring", "clue": "Stirring the soul"},
    {"word": "jubilant", "clue": "Exuberantly joyful"},
    {"word": "kittycat", "clue": "Furry friend with whiskers"},
    {"word": "lovelight", "clue": "Radiant affection"},
    {"word": "merrymark", "clue": "The mark of happiness"},
    {"word": "noodleful", "clue": "Brimming with noodles"},
    {"word": "optimists", "clue": "Seeing the bright side"},
    {"word": "peanutbop", "clue": "Tiny dance with big flavor"},
    {"word": "quirkiness", "clue": "Irresistibly odd"},
    {"word": "rainstorm", "clue": "Color explosion after rain"},
    {"word": "sillyguts", "clue": "Laughing nonsensically"},
    {"word": "troubleso", "clue": "The origin of mischief"},
    {"word": "unifluff", "clue": "Soft as clouds"},
    {"word": "vitalists", "clue": "The keepers of vitality"},
    {"word": "wonderful", "clue": "Full of wonder"},
    {"word": "xylobop", "clue": "Drumming with xylophone sounds"},
    {"word": "yogamates", "clue": "Comrades in yoga"},
    {"word": "zealotry", "clue": "Extreme enthusiasm"},
    {"word": "zippering", "clue": "Closing with style"},
    {"word": "dreamiest", "clue": "Lost in reverie"}
]

const tenLetterWords = [
    {"word": "technology", "clue": "The magic of the future"},
    {"word": "electronics", "clue": "The heart of gadgets"},
    {"word": "harmonious", "clue": "Musical symphony of life"},
    {"word": "celebrated", "clue": "Famous and adored"},
    {"word": "efficiency", "clue": "Getting more done in less time"},
    {"word": "informants", "clue": "Gatherers of secrets"},
    {"word": "revelation", "clue": "Shocking plot twist"},
    {"word": "accomplish", "clue": "Achievement unlocked"},
    {"word": "experience", "clue": "Life's grand adventure"},
    {"word": "eavesdrops", "clue": "Secret listeners"},
    {"word": "extroverts", "clue": "Life of the party"},
    {"word": "nightmares", "clue": "Sleep's spooky visitors"},
    {"word": "advocators", "clue": "Champions of change"},
    {"word": "consultancy", "clue": "Expert advice"},
    {"word": "consummate", "clue": "Perfectly executed"},
    {"word": "storyboard", "clue": "Visual storytelling"},
    {"word": "flickering", "clue": "Intermittent light"},
    {"word": "conclusion", "clue": "Final resolution"},
    {"word": "exteriors", "clue": "Outer appearances"},
    {"word": "instrument", "clue": "Tool of creation"},
    {"word": "journeying", "clue": "Adventure seeker"},
    {"word": "originating", "clue": "Starting point"},
    {"word": "persistent", "clue": "Never giving up"},
    {"word": "revelation", "clue": "Game-changing discovery"},
    {"word": "simplified", "clue": "Made easy to understand"},
    {"word": "underrated", "clue": "Underappreciated"},
    {"word": "comfortable", "clue": "Cozy and relaxed"},
    {"word": "interaction", "clue": "Social exchange"},
    {"word": "mainstream", "clue": "Popular and widespread"},
    {"word": "opportunity", "clue": "Door to success"},
    {"word": "photograph", "clue": "Captured moment"},
    {"word": "subscribed", "clue": "Agreed to receive"},
    {"word": "tremendous", "clue": "Enormous in scale"},
    {"word": "accelerator", "clue": "Speed booster"},
    {"word": "catastrophe", "clue": "Disastrous event"},
    {"word": "intervention", "clue": "Stepping in to help"},
    {"word": "magnificent", "clue": "Grand and splendid"},
    {"word": "observation", "clue": "Keen scrutiny"},
    {"word": "practitioner", "clue": "Skilled professional"},
    {"word": "superficial", "clue": "Surface level"},
    {"word": "transmitted", "clue": "Sent across"},
    {"word": "autonomous", "clue": "Independent and self-governing"},
    {"word": "controlling", "clue": "Taking charge"},
    {"word": "invitation", "clue": "Welcome request"},
    {"word": "masterpiece", "clue": "Work of genius"},
    {"word": "watermelon", "clue": "Summer's juicy delight"},
    {"word": "lighthouse", "clue": "Beacon of hope in the dark"},
    {"word": "butterball", "clue": "Soft and creamy delight"},
    {"word": "basketball", "clue": "Bouncing fun on the court"},
    {"word": "innovation", "clue": "Thinking outside the box"},
    {"word": "holography", "clue": "3D magic in the air"},
    {"word": "jellybeans", "clue": "Colorful candy surprise"},
    {"word": "quicksands", "clue": "Sink or swim adventure"},
    {"word": "vocabulary", "clue": "Words to impress"},
    {"word": "wonderland", "clue": "Fantasy realm of dreams"},
    {"word": "creativity", "clue": "Imagination's playground"},
    {"word": "effervesce", "clue": "Fizzing with excitement"},
    {"word": "flattering", "clue": "Complimenting appearance"},
    {"word": "juxtaposed", "clue": "Oddly paired"},
    {"word": "marshmallow", "clue": "Soft and fluffy treat"},
    {"word": "nightmares", "clue": "Sleep's spooky visitors"},
    {"word": "overwhelms", "clue": "Feeling flooded with emotion"},
    {"word": "persuading", "clue": "Convincing with words"},
    {"word": "queenliest", "clue": "Most regal"},
    {"word": "rhapsodize", "clue": "Exuberant expression"},
    {"word": "strawberry", "clue": "Nature's sweetest berry"},
    {"word": "tantalized", "clue": "Teasingly tempting"},
    {"word": "university", "clue": "Learning hub of life"},
    {"word": "volleyball", "clue": "Beach or court sport"},
    {"word": "whirlwind", "clue": "Blowing through life"},
    {"word": "xylophones", "clue": "Musical rainbow"},
    {"word": "zestfulness", "clue": "Lively and spirited"},
    {"word": "butterfish", "clue": "Delicate ocean dweller"},
    {"word": "candyfloss", "clue": "Sweet cloud on a stick"},
    {"word": "dreamscape", "clue": "Where dreams roam free"},
    {"word": "enchanted", "clue": "Where magic abounds"},
    {"word": "frenchness", "clue": "French-like quality"},
    {"word": "gigglesome", "clue": "Full of joyful laughter"},
    {"word": "heartbeats", "clue": "Romantic rhythms"},
    {"word": "jackhammer", "clue": "Construction's symphony"},
    {"word": "keyboardin", "clue": "Typing adventure"},
    {"word": "locomotive", "clue": "Steam-powered journey"},
    {"word": "moonstruck", "clue": "Charmed by the moon"},
    {"word": "noodlehead", "clue": "Silly thinker"},
    {"word": "optimistic", "clue": "Always seeing the bright side"},
    {"word": "paradiddle", "clue": "Drumming rhythm"},
    {"word": "persuading", "clue": "Convincing with words"},
    {"word": "rainbowish", "clue": "Somewhat colorful"},
    {"word": "schoolroom", "clue": "Learning space"},
    {"word": "thumbprint", "clue": "Unique mark of identity"},
    {"word": "unplugging", "clue": "Digital detox"},
    {"word": "vitalizing", "clue": "Reviving energy"},
    {"word": "wonderland", "clue": "Fantasy realm of dreams"},
    {"word": "xylitolize", "clue": "Sweeten naturally"},
    {"word": "yearbooked", "clue": "Memorable memories"},
    {"word": "zookeeper", "clue": "Guardian of the wild"},
    {"word": "zombifying", "clue": "Turning into a zombie"},
    {"word": "whistlebug", "clue": "Nature's melodious friend"}
]
// document.addEventListener("DOMContentLoaded",()=>{
//     const gameController ={
//         gameTimer:28,
//         lingoWord: "",
//         challengeClue:"",
//         roundCounter:0,
//         roundTiles:[],
//         // round1Tiles: document.querySelectorAll(".round-1"),
//         // round2Tiles: document.querySelectorAll(".round-2"),
//         // round3Tiles: document.querySelectorAll(".round-3"),
//         // round4Tiles: document.querySelectorAll(".round-4"),
//         // round5Tiles: document.querySelectorAll(".round-5"),
//         userAnswer:"",
//         correctLetters:[],
//         playerMoney:0,
//         moneyIncrement:200,
//         wordLength:4,
//         gameRounds:4,
//         currentRound:0,
//         correctAnswersTally:0,
//         isPracticeGame:false
        
    
//     };
// })
const gameController ={
    gameTimer:28,
    lingoWord: "",
    challengeClue:"",
    roundCounter:0,
    roundTiles:[],
    // round1Tiles: document.querySelectorAll(".round-1"),
    // round2Tiles: document.querySelectorAll(".round-2"),
    // round3Tiles: document.querySelectorAll(".round-3"),
    // round4Tiles: document.querySelectorAll(".round-4"),
    // round5Tiles: document.querySelectorAll(".round-5"),
    userAnswer:"",
    correctLetters:[],
    playerMoney:0,
    moneyIncrement:200,
    wordLength:4,
    gameRounds:4,
    currentRound:0,
    correctAnswersTally:0,
    isPracticeGame:false,
    isChallengeWord:false,
    LingoRoundStage:0,
    letterDisplayDelay:300,
    gameRoundDisplayDelay:3000
    
    

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
async function GenerateLingo(){
    await getNewWord()
    gameController.roundCounter =0;
    var roundIndex = gameController.roundCounter;
    document.getElementById("user-answer").value =""
    console.log(gameController.lingoWord)
    resetDisplay()
    gameController.roundTiles[roundIndex][0].innerText = gameController.lingoWord[0];
    
}

function GenerateChallengeWord(challengeLength){
    var sec = 28;
    gameController.isChallengeWord =true;
    gameController.correctAnswersTally =0;
    gameController.currentRound=0;
    gameController.roundCounter =0;
    if(challengeLength === 9){
        var randomIndex = Math.floor(Math.random()*nineLetterWords.length);
        gameController.lingoWord = nineLetterWords[randomIndex].word
        document.getElementById("clue").innerText = nineLetterWords[randomIndex].clue
        gameController.roundTiles[0][0].innerText = gameController.lingoWord[0];
        console.log(gameController.lingoWord)
    }
    else if (challengeLength === 10){
        var randomIndex = Math.floor(Math.random()*nineLetterWords.length);
        gameController.lingoWord = tenLetterWords[randomIndex].word
        document.getElementById("clue").innerText = nineLetterWords[randomIndex].clue
        gameController.roundTiles[0][0].innerText = gameController.lingoWord[0];
        console.log(gameController.lingoWord)
    }
    else{
        console.log("Challenge length not identified")
    }
    timer(sec)
     
}


//  Revised Timer function 


// function challenegWordCheck() {
//     const myInterval = setInterval(myTimer, 1000);
//     function myTimer(){
//         document.getElementById('timerDisplay').innerHTML='00:'+gameController.gameTimer;
//         var interval =0;
//         var givenIndexOrder = [2,6,7,8,1,3,4,5]
//         if(interval % 4 == 0){
//             var randomIndex = givenIndexOrder.pop()
//             randomLetter = gameController.lingoWord[randomIndex]
//             if(gameController.roundTiles[0][randomIndex].innerText === ""){
//                 gameController.roundTiles[0][randomIndex].innerText = gameController.lingoWord[randomIndex];
//             }
//         }
//         gameController.gameTimer--;
//         interval++;
//         if(gameController.gameTimer>0 && gameController.userAnswer === gameController.lingoWord){
//             endGame("green")
//             clearInterval(myInterval)
//         }
//         else if (gameController.gameTimer <= 0 ) {
//             endGame("red")
//             clearInterval(myInterval)
//         }
//     }
// }

// function myStopFunction() {
//   clearInterval(myInterval);
// }
// Timer function
function timer(sec){
    console.log(sec)
    var interval =0;
    var givenIndexOrder = [2,6,7,8,1,3,4,5]
    var timer = setInterval(function(){
        if(document.getElementById('timerDisplay')){
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            console.log(sec)
            if (sec === 1 ) {
                endGame("red")
                clearInterval(timer);
            }
            else if(sec>0 && gameController.userAnswer === gameController.lingoWord){
                endGame("green")
                clearInterval(timer);
            }
            else if(gameController.isChallengeWord === false){
                clearInterval(timer);
            }
            else if(interval % 4 == 0){
                var randomIndex = givenIndexOrder.pop()
                randomLetter = gameController.lingoWord[randomIndex]
                gameController.roundTiles[0][randomIndex].innerText = gameController.lingoWord[randomIndex];
            }
            sec--;
            interval++;
        }else{clearInterval(timer)}
    }, 1000);
}

// Onlcick verify button
function submitAnswer(){
    console.log(gameController)
    if(gameController.gameTimer != 0){
        gameController.userAnswer = document.getElementById("user-answer").value;
        setTimeout(()=>{
            checkWord(gameController.userAnswer,verifyAnswer);
        },gameController.wordLength * gameController.letterDisplayDelay)
        displayAnswer(gameController.userAnswer);
       
    }
    
}

// Onclick Start Game. create all tiles and initalise GameController variables

function startGame(wordLength,roundsLength,gameRounds){
    divEl = document.getElementById("game-area")
    for(x=1;x<roundsLength+1;x++){
        var startHtml = `<ul class ="round">`
        for(y=0;y<wordLength;y++){
            startHtml += `<li class="round-${x}">.</li>`
        }
        var endHtml = `</ul>`
        var html= startHtml+endHtml;
        divEl.innerHTML += html
    }
    document.getElementById("control-area").innerHTML=`<div id="toggle-user-input">
    <div id="money-increment" class="column">£0</div>
    <div id="user-input" class="column"><input id="user-answer" type="text" minlength="${wordLength}" maxlength ="${wordLength}"required><button id="submit-answer" onclick="submitAnswer()">Verify</button></div>
    <div id="player-money" class="column">£0</div>
    </div>`
    document.getElementById("game-menu").style.visibility ="hidden"
    gameController.roundTiles =[]
    for(x=1;x<roundsLength+1;x++){
        var tileObj =document.querySelectorAll(`.round-${x}`)
        gameController.roundTiles.push(tileObj)
    }
    enterKeySubmit();
    gameController.userAnswer= document.getElementById("user-answer").value
    gameController.gameRounds = gameRounds
    gameController.wordLength = wordLength
    gameController.currentRound=0;
    gameController.gameTimer =28
    gameController.correctAnswersTally =0
    GenerateLingo(wordLength)
}
function enterKeySubmit(){
    var userTextBox = document.getElementById("user-answer")
    var userSubmitBtn = document.getElementById("submit-answer")
    userTextBox.addEventListener("keyup",e =>{
        e.preventDefault();
        if(e.key === "Enter"){
            console.log("enter key clicked")
            userSubmitBtn.click()
        }
    })
}

// Onclick Play Lingo
function playLingo(){
    startGame(4,5,4)
}

// Onclick Challenge round 
function challengeQuestion(challengeLength){
    divEl = document.getElementById("game-area")
    startHtml = `<p id="clue"></p>
    <ul class="round>`
    for(x=0;x<challengeLength+1;x++){
        startHtml += `<li class="round-1".</li>`
    }
    var endHtml = `</ul>`
    var html= startHtml+endHtml;
    divEl.innerHTML = html
    var timer =document.createElement("div")
    timer.innerHTML =`
    <div id="safeTimer">
    <h2>Timer</h2>
    <p id="timerDisplay">00:28</p>
    </div>`
    divEl.appendChild(timer)
    document.getElementById("control-area").innerHTML=`<div id="toggle-user-input"><div id="money-increment" class="column">£0</div>
    <div id="user-input" class="column"><input id="user-answer" type="text"><button id="submit-answer" onclick="submitAnswer()">Verify</button></div>
    <div id="player-money" class="column">£0</div></div>`
    document.getElementById("game-menu").style.visibility ="hidden"
    enterKeySubmit();
    gameController.roundTiles =[document.querySelectorAll(".round-1")]
    gameController.userAnswer= document.getElementById("user-answer").value
    gameController.gameRounds = 1
    gameController.wordLength = challengeLength
    gameController.gameTimer =28
    resetDisplay()
    GenerateChallengeWord(challengeLength)

}

// Onclick Play Lingo


// Onclick Extra options for practice questions

function options(){
    gameController.isPracticeGame =true;
    var gameMenu =document.getElementById("game-menu")
    gameMenu.innerHTML = `<h1>Word Length</h1>
    <div>
        <label for="w-four">4</label>
        <input type="radio" name="wordLength" id="w-four" value="4" checked>
        <label for="w-five">5</label>
        <input type="radio" name="wordLength" id="w-five" value="5">
        <label for="w-six">6</label>
        <input type="radio" name="wordLength" id="w-six" value="6">
        <label for="w-seven">7</label>
        <input type="radio" name="wordLength"id="w-seven" value="7">
    </div>

    <h1>How many guesses?</h1>
    <div>
    <label for="g-four">4</label>
        <input type="radio" name="guesses" id="g-four" value="4" >
        <label for="g-five">5</label>
        <input type="radio" name="guesses" id="g-five" value="5" checked>
        <label for="g-six">6</label>
        <input type="radio" name="guesses" id="g-six" value="6">
    </div>
    <br>
    <h1>How many total words?</h1>
    <div>
        <label for="r-five">5</label>
        <input type="radio" name="rounds" id="r-five" value="5"checked>
        <label for="r-six">6</label>
        <input type="radio" name="rounds" id="r-six" value="6">
        <label for="r-seven">7</label>
        <input type="radio" name="rounds" id="r-seven" value="7">
        <label for="r-eight">8</label>
        <input type="radio" name="rounds" id="r-eight" value="8">
        <label for="r-nine">9</label>
        <input type="radio" name="rounds" id="r-nine" value="9">
        <label for="r-ten">10</label>
        <input type="radio" name="rounds" id="r-ten" value="10">
    </div>
    <button id="confirm">Confirm</button>
    <button id="challenge"class="btn-red" onclick="challengeQuestion(9)">Play Challenge Words</button>
    `
    document.getElementById("confirm").addEventListener("click",addButton)

    function addButton(){
        var button = document.createElement("div")
        var rounds = document.querySelector('input[name = rounds]:checked').value
        var guesses = document.querySelector('input[name = guesses]:checked').value
        var wordLength = document.querySelector('input[name = wordLength]:checked').value
        button.innerHTML =`<button id="play" onclick="startGame(${wordLength},${guesses},${rounds})">Play Lingo</button>`
        gameMenu.appendChild(button)
    }

}

// Verifys if the Answer is correct or Inocrrect and calls to set tiles to approprite color 
// function verifyAnswer(isWord){
//     console.log(isWord)
//     gameController.orangeLetters.clear();
//     gameController.matchedIndices.clear();
//     if(gameController.userAnswer === gameController.lingoWord ){
//         endGame("green");
//     }
//     else if(gameController.roundCounter === gameController.roundTiles.length -1 ){
//         endGame("red")

//     }
//     else if(gameController.userAnswer != gameController.lingoWord){
//         var guessedLettersAndColor=[];
//         for(x =0; x<gameController.userAnswer.length;x++){
//             var letter = gameController.userAnswer[x]
//             if(letter === gameController.lingoWord[x]){
//                 guessedLettersAndColor.push({"green":[x,letter]})
//                 setTileGreen(x);
//             }
//         }
//         for(z =0; z<gameController.userAnswer.length;z++){
//             var letter = gameController.userAnswer[z]
//             for(y=0; y<gameController.lingoWord.length;y++){
//                 if(letter === gameController.lingoWord[y]){
//                     if(gameController.roundTiles[gameController.roundCounter][y].style.backgroundColor !="green")
//                     guessedLettersAndColor.push({"orange":[y,letter]})
//                     setTileOrange(z);
//                 }
//             }

//         }
//         console.log(guessedLettersAndColor)
//         document.getElementById("user-answer").value =""
//         gameController.roundTiles[gameController.roundCounter][0].innerText = gameController.lingoWord[0];
//         gameController.roundCounter++;
//     }
    



// }

function verifyAnswer(isWord){
    console.log(isWord)
    // Object to store Lingo word letters and indexs
    lingoLettersAndIndex ={};
    // creates key and value as indexs and letters
    for(z=0;z<gameController.lingoWord.length;z++){
        lingoLettersAndIndex[z] = gameController.lingoWord[z]
    }
    if(gameController.userAnswer === gameController.lingoWord && isWord ){
        endGame("green"); // ends game if answer is correct and is a word
    }
    else if(gameController.roundCounter === gameController.roundTiles.length -1 || !isWord ){
        endGame("red") // ends the game if all guesses have been used or word entered is not a word 

    }
    else if(gameController.userAnswer != gameController.lingoWord){
        
        for(x =0; x<gameController.userAnswer.length;x++){          // loops to get each letter of user answer 
            var letter = gameController.userAnswer[x]
            if(letter === gameController.lingoWord[x]){             // if the letter is the same as the lingo word letter
                delete lingoLettersAndIndex[x]                          // removes it from the object
                setTileGreen(x)  
            }
        }
        for(z =0; z<gameController.userAnswer.length;z++){                  // loops to get each letter of user answer
            var letter = gameController.userAnswer[z]
             if(Object.values(lingoLettersAndIndex).includes(letter)){          // if the letter is still in object
                for( var prop in lingoLettersAndIndex ) {                       // finds the values key
                    if( lingoLettersAndIndex.hasOwnProperty( prop ) ) {
                         if( lingoLettersAndIndex[ prop ] === letter ){
                            delete lingoLettersAndIndex[prop]               // removes that specific letter from the index
                            setTileOrange(z)
                            break;
                         }
                    }
                }        
                
             }

        }
        
        document.getElementById("user-answer").value =""
        document.getElementById("user-answer").focus();
        gameController.roundTiles[gameController.roundCounter][0].innerText = gameController.lingoWord[0];
        gameController.roundCounter++;
    }
    



}

function endGame(color){
    // Set all tiles to correct color//
    gameController.currentRound++;
    for(x=0; x< gameController.roundTiles[gameController.roundCounter].length;x++){
        gameController.roundTiles[gameController.roundCounter][x].style.backgroundColor =color;
        if(color ==="green"){
            gameController.roundTiles[gameController.roundCounter][x].classList.add("animate__animated")
            gameController.roundTiles[gameController.roundCounter][x].classList.add("animate__headShake")
        }
    }
    if(color === "green"){
        gameController.playerMoney += gameController.moneyIncrement;
        gameController.correctAnswersTally++;
    }
    if(gameController.currentRound === gameController.gameRounds || gameController.gameTimer ===0){
        displayLingo(color)
        setTimeout(finishGame,gameController.gameRoundDisplayDelay)
    }
    else{
        displayLingo(color)
        setTimeout(GenerateLingo,gameController.gameRoundDisplayDelay)
        
    }
    
}
function finishGame(){
    divEl = document.getElementById("game-area")
    if(gameController.isPracticeGame){
        document.getElementById("game-area").innerHTML =`
    <h1> Game Over</h1>
    <p>You got ${gameController.correctAnswersTally}/${gameController.gameRounds}
    <button onclick="returnToMenu()">Return to menu</button>`
    document.getElementById("control-area").innerHTML=""
    }else if(!gameController.isPracticeGame){
        gameController.LingoRoundStage++
        if(gameController.LingoRoundStage===1){
            divEl.innerHTML =""
            gameController.moneyIncrement=500;
            challengeQuestion(9)
        }
        else if(gameController.LingoRoundStage===2){
            divEl.innerHTML =""
            gameController.moneyIncrement=300;
            gameController.isChallengeWord =false;
            startGame(5,5,4)
        }
        else if(gameController.LingoRoundStage===3){
            divEl.innerHTML =""
            gameController.moneyIncrement=500;
            challengeQuestion(9)
        }
        else if(gameController.LingoRoundStage===4){
            divEl.innerHTML =""
            gameController.moneyIncrement=200;
            gameController.isChallengeWord =false;
            startGame(4,5,2)
        }
        else if(gameController.LingoRoundStage===5){
            divEl.innerHTML =""
            gameController.moneyIncrement=300;
            gameController.isChallengeWord =false;
            startGame(5,5,2)
        }
        else if(gameController.LingoRoundStage ===6){
            document.getElementById("control-area").innerHTML=""
            divEl.innerHTML =`<h1> Game Over</h1>
            <p>You got ${gameController.playerMoney}
            <button onclick="returnToMenu()">Return to menu</button>`
        }

    }
        
    
    
    
}

function returnToMenu(){
    document.getElementById("game-area").innerHTML =""
    document.getElementById("game-menu").innerHTML =`
    <button id="play" onclick="playLingo()">Play Lingo</button>
    <button id="practice" onclick="options()">Practice</button>
    <button>Leaderboard</button>`
    document.getElementById("game-menu").style.visibility ="visible"
}

function displayLetter(letter,index){
    gameController.roundTiles[gameController.roundCounter][index].innerText = letter;
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
function displayAnswer(answer){
    var roundIndex =gameController.roundCounter;
        for(x =0; x<gameController.roundTiles[roundIndex].length;x++){
            delayLoop(x)
        }
        
        
}
function delayLoop(x){
    setTimeout(()=>{
        gameController.roundTiles[gameController.roundCounter][x].innerText = gameController.userAnswer[x]
    },x*gameController.letterDisplayDelay)
}
function displayLingo(color){
    var roundIndex =gameController.roundCounter;
    if(roundIndex < gameController.roundTiles.length -1 &&color ==="red"){
        for(x =0; x<gameController.roundTiles[roundIndex].length;x++){
            gameController.roundTiles[roundIndex+1][x].innerText = gameController.lingoWord[x];
            gameController.roundTiles[roundIndex+1][x].style.backgroundColor ="green"
        }
        document.getElementById("toggle-user-input").style.display="none"
    }
    else if(roundIndex >= gameController.roundTiles.length -1&&color ==="red"){
        var ulElement =document.createElement("ul")
        ulElement.setAttribute("id","reveal-lingo")
        var startHtml ="";
        for(x=0;x<gameController.lingoWord.length;x++){
            var liElement = document.createElement("li");
            liElement.innerText = `${gameController.lingoWord[x]}`
            liElement.style.backgroundColor = "green"
            ulElement.append(liElement);
            
        }
        document.getElementById("game-area").appendChild(ulElement)
        document.getElementById("toggle-user-input").style.display="none"
    }
    else{
        document.getElementById("toggle-user-input").style.display="none"
    }
    
}

// clears all tiles 
function resetDisplay(){
    if(document.getElementById("toggle-user-input").style.display==="none"){
        document.getElementById("toggle-user-input").style.display="flex";
        if(document.getElementById("reveal-lingo")){
            document.getElementById("reveal-lingo").remove();
        }
    }
    document.getElementById("user-answer").focus();
    document.getElementById("user-answer").value =""
    document.getElementById("money-increment").innerText = `£${gameController.moneyIncrement}`
    document.getElementById("player-money").innerText = `£${gameController.playerMoney}`
    for(x=0; x<gameController.roundTiles.length;x++){
        for(y =0; y<gameController.roundTiles[x].length;y++){
            gameController.roundTiles[x][y].innerText = ".";
            gameController.roundTiles[x][y].style.backgroundColor ="#00225B"
        }
    }
    
    
    

}
// sets tile passed to green
function setTileGreen (index){
    var roundIndex = gameController.roundCounter;
    gameController.roundTiles[roundIndex][index].style.backgroundColor ="green";
    if(roundIndex != gameController.lingoWord.length){
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
// function setTileOrange(index) {
//     var roundIndex = gameController.roundCounter;
//     var letter = gameController.userAnswer[index];
//     var letterFound = false; // Flag to check if the letter is already matched
//     if (gameController.roundTiles[roundIndex][index].style.backgroundColor !== "green") {
//         // Check if the letter has already been matched
//         if (!gameController.orangeLetters.has(letter)) {
//             for (var y = 0; y < gameController.lingoWord.length; y++) {
//                 if (letter === gameController.lingoWord[y]) {
//                     // If the letter is found in the lingo word, mark it orange
//                     gameController.roundTiles[roundIndex][index].style.backgroundColor = "orange";
//                 }
//             }
//             // Add the letter to the set to indicate it has been marked orange
//             gameController.orangeLetters.add(letter);
//         }
//     }
// }

// function setTileOrange(index) {
//     var roundIndex = gameController.roundCounter;
//     var letter = gameController.userAnswer[index];
//     var letterFound = false; // Flag to check if the letter is already matched

//     if (gameController.roundTiles[roundIndex][index].style.backgroundColor !== "green") {
//         // Check if the letter has already been matched
//         if (!gameController.orangeLetters.has(letter)) {
//             for (var y = 0; y < gameController.lingoWord.length; y++) {
//                 if (letter === gameController.lingoWord[y]) {
//                     // If the letter is found in the lingo word, check if its index has been matched before
//                     if (!gameController.matchedIndices.has(y)) {
//                         // Mark the tile as orange
//                         gameController.roundTiles[roundIndex][y].style.backgroundColor = "orange";
//                         // Add the index to the set of matched indices
//                         gameController.matchedIndices.add(y);
//                         // Mark the letter as matched
//                         letterFound = true;
//                         // Exit the loop if we found a match for this letter
//                         break;
//                     }
//                 }
//             }
//             // If the letter is not found in the lingo word or all its occurrences have been matched, mark it as orange in the user answer
//             if (!letterFound) {
//                 gameController.roundTiles[roundIndex][index].style.backgroundColor = "orange";
//             }
//             // Add the letter to the set to indicate it has been marked orange
//             gameController.orangeLetters.add(letter);
//         }
//     }
// }



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



