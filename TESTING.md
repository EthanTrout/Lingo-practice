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
![](/assets/testing-images/Screenshot%202024-04-06%20174017.png)


## submitAnswer onlick function 

### the submitAnswer function will
- add the value of user input to the game controller obj 
- call the verifyAnswer function