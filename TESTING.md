# Testing

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

### setTileOrange 
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



