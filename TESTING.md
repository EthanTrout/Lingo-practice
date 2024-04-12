# Basic Funcationality for a 4 letter Lingo Game
## Requirements:
- The game displays 4 letter boxes for each guess. the player gets 5 guesses
- The game displays the first letter of the Answer in the boxes(tiles)
- the Player can guess the the word 
- the correct letter in the correct place displays green
- the correct letter in the incorrect place displays orange
- after 5 guesses the player fails 
- if the guess is not a real word the Player fails
- if guessed correctly a new game starts 


## gameController obj

### the gameController object contains 
- the timer of the game 
- references to all lists on the game page for each round 
- the generated lingo word 
- round counter

#### manual testing that the refernces point to each list:

```javascript 
console.log(gameController.round3List)
```
![Result](/assets/testing-images/Screenshot%202024-04-06%20174017.png)


## submitAnswer onlick function 

### the submitAnswer function will
- add the value of user input to the game controller obj
- call the displayAnswer function 
- call the verifyAnswer function

#### manual testing the game obj is updated

```javascript
function submitAnswer(){
    if(gameController.gameTimer != 0){
        gameController.userAnswer = document.getElementById("user-answer").value;
        console.log(gameController.userAnswer)
    }
}
```
![Result](/assets/testing-images/verifyAnswerTest1.png)


## displayAnswer function

### the displayAnswer function will
- check to see which round is being played 
- loop through all tiles and add userAnswer letters to all

## VerifyAnswer function

### the verifyAnswer function will
- check if the answer and the lingo word are the same and show the player has won 
- check if the word entered is a real word in the dictonary. if not display a fail 
- check if the player has used all there round. if so display fail
- check if the each letter in the answer is in the correct place of the lingo word 
- check if the letter is in the lingo word 
- call setGreenTile if letter is correct and in correct place 
- call setOrangeTile if letter is in the lingo word 

## setGreenTile function

### the setGreenTile function will
- check to see which round is curently being played 
- update tile to green if correct placement and letter on the correct round tiles
- update tile below to contain the letters that were placed correctly

## setOrangeTile function

### the setOrangeTile function will 
- check to see which round is currently being played 
- check to see if tile is already green
- update tile to orange if the letter is correct but in the wrong place the correct round tiles


## Manual testing of displayAnswer,verifyAnswer, setGreenTile and setOrangeTile

### testing for
- user answer display on correct round tiles
- tiles are set to correct color on correct round tiles 

#### inputs
- round 1
- userAnswer best
- lingo beet

expected results are first set of tiles. green green blank green

![Result](/assets/testing-images/inputsTest1.png)

- round 2
- userAnswer bets
- lingo beet

expected result are second set of tiles. green green orange blank
![Result](/assets/testing-images/inputsTest2.png)

## Incrementing rounds 

### testing testing for 
- after each guess the round increments 
- after each round the correct letters are passed to the next tiles 
- after each round orange tiles are not passed on 
- after each round the input is reset 

![Result 1](/assets/testing-images/roundsTest1.png)
![Result 2](/assets/testing-images/roundsTest2.png)
![Result 3](/assets/testing-images/roundsTest3.png)


## Refactoring functions after testing 

### displayResults

After getting Display results functioning and tested i have refactored to code the use less lines. 

#### changes:
- each set of round tiles objects were previously stored as a variable.
    - they are now set as a array
- the displayResults function had multiple if statements checking what round it was and what variable to use.
    - now the function uses the roundCounter as an index to which round tile object to use 


#### Previous code 

```javascript 
const gameController ={
    gameTimer:10,
    lingoWord: "beet",
    roundCounter:0,
    round1Tiles: document.querySelectorAll(".round-1"),
    round2Tiles: document.querySelectorAll(".round-2"),
    round3Tiles: document.querySelectorAll(".round-3"),
    round4Tiles: document.querySelectorAll(".round-4"),
    round5Tiles: document.querySelectorAll(".round-5"),
    userAnswer: document.getElementById("user-answer").value,
    correctLetters:[]

};

function displayAnswer(){
    if(gameController.roundCounter ===1){
        for(x =0; x<gameController.round1Tiles.length;x++){
            gameController.round1Tiles[x].innerText = gameController.userAnswer[x];
        }
    }
    else if(gameController.roundCounter ===2){
        for(x =0; x<gameController.round2Tiles.length;x++){
            gameController.round2Tiles[x].innerText = gameController.userAnswer[x];
        }
    }
    else if(gameController.roundCounter ===3){
        for(x =0; x<gameController.round3Tiles.length;x++){
            gameController.round3Tiles[x].innerText = gameController.userAnswer[x];
        }
    }
    else if(gameController.roundCounter ===4){
        for(x =0; x<gameController.round4Tiles.length;x++){
            gameController.round4Tiles[x].innerText = gameController.userAnswer[x];
        }
    }
    else if(gameController.roundCounter ===5){
        for(x =0; x<gameController.round5Tiles.length;x++){
            gameController.round5Tiles[x].innerText = gameController.userAnswer[x];
        }
    }
}

```

#### Refactored code 

```javascript 
const gameController ={
    gameTimer:10,
    lingoWord: "beet",
    roundCounter:0,
    roundTiles:[document.querySelectorAll(".round-1"),document.querySelectorAll(".round-2"),document.querySelectorAll(".round-3"),document.querySelectorAll(".round-4"),document.querySelectorAll(".round-5")],
    userAnswer: document.getElementById("user-answer").value,
    correctLetters:[]

};

function displayAnswer(){
    var roundIndex =gameController.roundCounter;
    console.log(gameController.roundTiles[roundIndex])
    for(x =0; x<gameController.roundTiles[roundIndex].length;x++){
        gameController.roundTiles[roundIndex][x].innerText = gameController.userAnswer[x];
    }
    
}
```

### SetTileGreen

After getting setTileGreen functioning and tested i have refactored to code the use less lines.

### changes
- using the new index of roundTiles objects i removed all if statment
    - they were replaced by using the roundCounter as an index.
- an if statment was added to ensure on the fith round nothing was passed to the the 6th as it would not exisit 

#### Previous Code

```javascript 
function setTileGreen (index){
if(gameController.roundCounter ===0){
    gameController.round1Tiles[index].style.backgroundColor = "green";
    gameController.round2Tiles[index].innerText = gameController.userAnswer[index];
    
}
else if (gameController.roundCounter ===1){
    gameController.round2Tiles[index].style.backgroundColor = "green";
    gameController.round3Tiles[index].innerText = gameController.userAnswer[index];
    
}
else if (gameController.roundCounter ===2){
    gameController.round3Tiles[index].style.backgroundColor = "green";
    gameController.round4Tiles[index].innerText = gameController.userAnswer[index];
    
}
else if (gameController.roundCounter ===3){
    gameController.round4Tiles[index].style.backgroundColor = "green";
    gameController.round5Tiles[index].innerText = gameController.userAnswer[index];
    
}
else if (gameController.roundCounter ===4){
    gameController.round5Tiles[index].style.backgroundColor = "green";
}
else{
    
}

}
```

#### Refactored code

```javascript 
function setTileGreen (index){
    var roundIndex = gameController.roundCounter;
    gameController.roundTiles[roundIndex][index].style.backgroundColor ="green";
    if(roundIndex != 4){
        gameController.roundTiles[roundIndex+1][index].innerText = gameController.userAnswer[index];
    }
}
```

## setTileOrange 
the same changes to setTileGreen were done to setTileOrange

#### Previous code

```javascript 
function setTileOrange(index){
    if(gameController.roundCounter ===0 && gameController.round1Tiles[index].style.backgroundColor != "green"){
        gameController.round1Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter ===1 && gameController.round2Tiles[index].style.backgroundColor != "green"){
        gameController.round2Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter ===2 && gameController.round3Tiles[index].style.backgroundColor != "green"){
        gameController.round3Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter ===3 && gameController.round4Tiles[index].style.backgroundColor != "green"){
        gameController.round4Tiles[index].style.backgroundColor = "orange";
    }
    else if(gameController.roundCounter ===4 && gameController.round5Tiles[index].style.backgroundColor != "green"){
        gameController.round5Tiles[index].style.backgroundColor = "orange";
    }
    else{
        
    }
}
```

#### Refactored code

```javascript 
function setTileOrange(index){
    var roundIndex = gameController.roundCounter;
    if(gameController.roundTiles[roundIndex][index].style.backgroundColor != "green"){
        gameController.roundTiles[roundIndex][index].style.backgroundColor ="orange"
    }
}

```
#### bugs with setTile Orange 

- set tile orange doesnt currently only tests for if the current tile is not green. 
- the function is not testing for if the letter is already green in another tile and the letter isnt repeated and therefore the letter does not need to be set to orange.

- word: Step
    - ![Examples](/assets/testing-images/setTileOrangeTest1.png)

- word: Dart
    - ![Examples](/assets/testing-images/setTileOrangeTest2.png)


#### Previous code in VerifyAnswer function

```javascript 
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
        gameController.roundTiles[gameController.roundCounter][0].innerText = gameController.lingoWord[0];
        gameController.roundCounter++;
    }
```

#### Fix 

```javascript 
else if(gameController.userAnswer != gameController.lingoWord){
        for(x =0; x<gameController.userAnswer.length;x++){
            var letter = gameController.userAnswer[x]
            if(letter === gameController.lingoWord[x]){
                setTileGreen(x);
            }
            for(y=0; y<gameController.lingoWord.length;y++){
                if(letter === gameController.lingoWord[y]){
                    if(gameController.roundTiles[gameController.roundCounter][y].style.backgroundColor !="green")
                    setTileOrange(x);
                }
            }
        }
        document.getElementById("user-answer").value =""
        gameController.roundTiles[gameController.roundCounter][0].innerText = gameController.lingoWord[0];
        gameController.roundCounter++;
    }
``` 
The for loop checks to see if the letter is found elsewhere in the lingoWord. the index for this is Y
Because the lingoWord and the tiles will always be the same length we can use the index of the found lingoWord letter to also check to see if that letter has already been found and set green.

- ![Fix](/assets/testing-images/setTileOrangeFix.png)

This has created a new issue that the code will only work if the letter is after the orange one:

- ![New Error](/assets/testing-images/setTileOrangeNewError.png)


This is easily fixed by turning all the tiles green before checking if the tiles need to be made orange

```javascript 
else if(gameController.userAnswer != gameController.lingoWord){
        for(x =0; x<gameController.userAnswer.length;x++){
            var letter = gameController.userAnswer[x]
            if(letter === gameController.lingoWord[x]){
                setTileGreen(x);
            }
        }
        for(z =0; z<gameController.userAnswer.length;z++){
            for(y=0; y<gameController.lingoWord.length;y++){
                if(letter === gameController.lingoWord[y]){
                    if(gameController.roundTiles[gameController.roundCounter][y].style.backgroundColor !="green")
                    setTileOrange(z);
                }
            }

        }
}
```

## endGame()
### this function will:
- take one argument color 
- if red then the player has failed 
- if green then the player has won
- if green icrement money
- call resetDisplay

## resetDisplay
### this function will:
- set round to 0
- set all tiles to "."
- set all tiles to white
- call GenerateLingo

## getNewWord

### this function will:
- call words API and get a 4 letter word 
- set lingoWord to found word 
- display errors if server cannot be reached 

## GenerateLingo 

### this function will:
- call getNewWord function 
- set rounds to 1 
- set first letter of tiles to new lingo first letter 

## Testing EndGame, resetDisplay, getNewWord,GenerateLingo

### Test 1 
#### EndGame is called when player runs out of rounds or guesses correctly
1. the display should be set to green when getting the correct answer
2. the display should be set to red when running out of guesses
3. the display should be reset to the beginning 
4. the next guess should start on round 0
5. A new word i generated each reset

#### Results
##### 1  word:gown     Guess:Correct
- ![Set To green](/assets/testing-images/correctAnswerTest.png)

##### 2 word:stem     Guess:Incorrect
-![Set To Red](/assets/testing-images/incorrectAnswerTest.png)

##### 3 word:gown     Guess:Correct
- ![Reset](/assets/testing-images/correctAnswerTestReset.png)
##### 3 word:stem     Guess:Incorrect
- ![Reset](/assets/testing-images/incorrectAnswerTestReset.png)

##### 4  word:gown     Guess:Correct
- ![Round](/assets/testing-images/correctAnswerTestRound.png)

##### 4  word:stem     Guess:Incorrect
- ![Round](/assets/testing-images/incorrectAnswerTestRound.png)

##### 5 It can be seen from the previous screenshots that a new word is generated evertime 

## checkWord

### The final functunality for the simple game:
- Check If the word is a real word if not then end the game

### This function will:
- call the WordsAPI with the userAnswer 
- if a entry is returned then Continue to verifyAnswer
- if no entry is returned then end the game

I had alot of trouble with this Function and tried many different options to get it work. I rewatched CodeInstitutes Working with External resourses sections and realised that using VerifyAnswer as call back function inside of checkWord was the best way to get this working.

i previously tried to use the GetWord inside of my verifyAnswer as a condition. but as it returns a promise and the API takes time to generate this never worked. Instead Now. When Submiting the userAnswer it will call checkWord which will call VerifyAnswer with true or false.

#### changes to submitAnswer
```javascript
function submitAnswer(){
    if(gameController.gameTimer != 0){
        gameController.userAnswer = document.getElementById("user-answer").value;
        displayAnswer();
        checkWord(gameController.userAnswer,verifyAnswer);
    }
    
}
```

#### CheckWord
```javascript 
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
 ```

 #### changes to VerifyAnswer
 ```javascript
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
```
## Conclusion
The Basic functionality for the Lingo Game is in place. Next will be giving the player options on word length. round length. implementing scoring and eventually a leaderboard.

# User Game options 

## fiveLetterLingo function

### fiverLetterLingo function will:
- generate five boxes for each round
- generate a five letter lingo

#### The button adds an extra tile for each round sucessfully 
![Results](/assets/testing-images/fiveLetterLingoTest.png)

#### The issue when testing found is that the displayAnswer and verifyAnswer dont contain the new LI element 
![Results](/assets/testing-images/fiveLetterLingoEroor.png)

This is because the roundTiles is initialised before the button is clicked 

#### Fix 
To fix this the rounds will have to be initalised after the player selects the game option. 

### Code change 

#### fiveLetterLingo will change to StartGame.
- this will take two parameters. Word length and roundLength
- this will create a set of tiles for any of the parameters given 

```javascript 
function startGame(wordLength,roundsLength){
    for(x=1;x<roundsLength+1;x++){
        var startHtml = `<ul class ="round">`
        for(y=0;y<wordLength;y++){
            startHtml += `<li class="round-${x}".</li>`
        }
        var endHtml = `</ul>`
        var html= startHtml+endHtml;
        console.log(html,x)

    }
}
```
![results when called](/assets/testing-images/startGameTest.png)

- this works but will not need to be pushed to the correct div element on the DOM

#### fix
```javascript 
function startGame(wordLength,roundsLength){
    divEl = document.getElementById("game-area")
    for(x=1;x<roundsLength+1;x++){
        var startHtml = `<ul class ="round">`
        for(y=0;y<wordLength;y++){
            startHtml += `<li class="round-${x}".</li>`
        }
        var endHtml = `</ul>`
        var html= startHtml+endHtml;
        divEl.innerHTML += html
    }
    var userInput =document.createElement("div")
    userInput.innerHTML =`<input id="user-answer" type="text">
    <button id="submit-answer" onclick="submitAnswer()">Verify</button>`
    divEl.appendChild(userInput)
}
```

- This works and will now need to remove the buttons aswell as initalise GameController and generateLingo

##### Initalising Gamecontroller and generateLingo
```javascript
gameController.roundTiles =[document.querySelectorAll(".round-1"),document.querySelectorAll(".round-2"),document.querySelectorAll(".round-3"),document.querySelectorAll(".round-4"),document.querySelectorAll(".round-5")]
    gameController.userAnswer= document.getElementById("user-answer").value
    gameController.wordLength = wordLength
    GenerateLingo()
```

##### Removing Buttons

```javascript
document.getElementById("game-menu").style.display ="none"
```

### Final testing of startGame
![result](/assets/testing-images/startGameFinished.png)

## FinishGame functionality 
### The game needs to 
- Allow players to select how many guesses they can have 
- Allow players to select how many games to have 
- end the game and display total correct 
- send players back to start menu 

### second menu for more options 
- Once the player has selected the gamemode they want to play they can then select how many guesses and rounds to complete 
- this functionality is mainly for the practice lingos and not the main game which these values will be set

changing the onclick for the practice 4 letters, 5 letters and challenge questions will allow them to change these options 

```html 
<div id="game-menu">
            <button id="4-letter" onclick="options(4)">4 Letter Lingo</button>
            <button id="5-letter" onclick="options(5)">5 Letter Lingo</button>
            <button id="challenge" onclick="options(9)">Challenge Words</button>
            <button id="play" onclick="startGame()">Play Lingo</button>
        </div>
```
### Rough JS for options menu 
i am aware that i can make this less complicated and will return to it once everything is completed.
``` javascript
function options(wordLength){
    var gameMenu =document.getElementById("game-menu")
    gameMenu.innerHTML = `<h1>Guesses</h1>
    <div>
        <label for="g-five">5</label>
        <input type="radio" name="guesses" id="g-five" value="5">
        <label for="g-six">6</label>
        <input type="radio" name="guesses" id="g-six" value="6">
        <label for="g-seven">7</label>
        <input type="radio" name="guesses" id="g-seven" value="7">
    </div>
    <br>
    <h1>Total rounds</h1>
    <div>
        <label for="r-five">5</label>
        <input type="radio" name="rounds" id="r-five" value="5">
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
    `
    document.getElementById("confirm").addEventListener("click",addButton)

    function addButton(){
        var button = document.createElement("div")
        var rounds = document.querySelector('input[name = rounds]:checked').value
        var guesses = document.querySelector('input[name = guesses]:checked').value
        button.innerHTML =`<button id="play" onclick="startGame(${wordLength},${guesses})">Play Lingo</button>`
        gameMenu.appendChild(button)
    }

}
```

### Implementing Game Rounds

- Adding varible to startGame 
```javascript
function startGame(wordLength,roundsLength,gameRounds)
```
- updating variable in gameController from startGame
```javascript
gameController.gameRounds = gameRounds
```

- updating endGame to have condition 
```javascript
function endGame(color){
    gameController.currentRound++;
    // Set all tiles to correct color//
    for(x=0; x< gameController.roundTiles[gameController.roundCounter].length;x++){
        gameController.roundTiles[gameController.roundCounter][x].style.backgroundColor =color;
    }
    if(color === "green"){
        gameController.playerMoney += gameController.moneyIncrement;
    }
    if(gameController.currentRound === gameController.gameRounds){
        // Display End 
    }
    else{
        setTimeout(resetDisplay,2000)
    }
    
}
```

### finishGame function 
#### finishGame function will: 
- display a score 
- allow user to get back to menu
- in future add options to add score to leaderboard 

