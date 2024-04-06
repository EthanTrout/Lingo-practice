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