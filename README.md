# Lingo Practice Game 

The Lingo Practice game is a word game inspired from the uk TV show Lingo. 

The game allows users to play the exact game seen on tv and see how much money they could get in the hit TV show.

The game also offers practice rounds for each letter length 

The game can be used for recration and learning. 

Indviduals that are going to go onto the show can use the game as practice as the rounds are Identical.

The game can also be used by people learning English or people who want to increase there vocabulary as it has an inbuilt dictonary system that the user can save the Lingo words that have been generated and look back on these with there definitions

# Site Owner Goals
- To create a visually apealing site that is easy for users to navigate 
- To have a functional Lingo game that accurately follows the the logic in the Tv show 
- To have customiseable practice runs for the player to choose the settings
- To entice to user to return to the game to get a better score or practice words of different lengths

# User Stories

- ## first time user
    - As a first time user i want to be able to easily understand how to play the game.
    - As a first time user i want to be able to easily naviagte the menu and start a game or practice round.
    - As a first time user i want to be able to easily select settings for the game or practice round.
    - As a first time user i want to have fun and get a score for how well i have done. 

- ## Returning user
    - As a returning user i want to be able to be able to play the game again without getting the same words as before.
    - As a returning user i want to be able to save my score to the leaderboard and view my scores.
    

- ## Frequent user
    - As a frequent user i want options to make the game more difficult by playing a timed version of the game.
    - As a frequent user i want to be able to beat my highscore on the leaderboard
    - As a frequent user i want to be able to save words that i like to my personal dictionary

# Imagery 

- The imagery in the game were given carful consideration. i wanted the game to feel as if the player is on the TV show lingo and therefore used a similar color scheme to that on the show.

## color scheme
![Color pallet from coolors](/assets/readme-images/lingo-color-pallet.png)

The color pallet has high contrast and makes it easy for a user to determin a correct answer and incorrect answer. 


# Layout 
The a site is a signle page with 4 sections 

- The full game area 
    - Displays the game area
    - Displays the selection for final rounds
    - Displays the Game over screen
    - Displays the add to dictionary section on the game over screen

- The Settings section 
    - Displays The Main game settings- timed or untimed
    - Displays the Practice game setting- word length, guesses and round length.

- The leaderBoard section
    - Displays the leaderboard

- The Dictonary Section
    - Displays the user added words and there descriptions

# Features

## Homepage 

The Home page is the Game menu. The user will come back to this page at the end of every game. The user can choose from 4 interactive buttons that are:
- PlayLingo
- Practice
- LeaderBoard
- Dictonary

## Play Lingo

When the user clicks this button the main game area will be become visible. 

### The board
- a back button allows the player to exit the game 
- A board is created and a new Lingo word is generated for the player to guess.
- The player has 5 guesses and therefore 5 rows of boxes are shown.
- The first letter of the Lingo Word is given to the player 

### User input
- A box under the board is highlighted and is where a user can enter the word. they can click verify or enter to guess
- to the left of this box the money increment is displayed. the player will get this money if they guess correctly
- to the right of this box the players gained money is displayed

### GamePlay 
#### Player input
- When the user guesses a word is it displayed in the row they are on.
- The game Highlights any letter in the correct place as green.
- the game Highlights any letter that is correct but in the wrong place as being orange.
- the round then moves down to the next set of gueses 


#### Player Input incorrect 
- if the word is not a word or the player is out of guesses then the game will display the tiles as red and show the Lingo word in the next set of tile 
- If there are not any tiles left it will create them 
- The user input area will hide its self to stop the user from entering another word


#### Player Input correct 
- if the guess is correct the tiles will animate and show all tiles as green before moving onto the next game.
- The user input area will hide its self to stop the user from entering another word

### Challenge rounds
a challenege round is timed and the money decreases with each letter given. The player only gets one guess
### Game Structure 
The game structure is the same as the TV show Lingo. all rounds Except Challenege rounds get five guesses

- Stage 1: 4 letter Lingo word. 4 games worth £200 each. 
- Stage 2: a Challenge Lingo round 9 letter word.
- Stage 3: 5 letter Lingo word. 4 games worth £300 each.
- Stage 4: a challenege Lingo round. 10 letter word.
- Stage 5: 4 letter Lingo Word. 2 games starting at £500 but decreases by £50 each guess
- Stage 6: 5 letter Lingo Word. 2 games starting at £500 but decreases by £50 each guess
- Stage 7: a Challeneg round 10 letter word
- Final: The user gets 90 sections on the clock. They must answer a 4 letter word and a 5 letter word. They can skip each word and the game will only end when the timer runs out.
    - 4 letter win: the player gets half of there money 
    - 5 letter win: the player banks all of there money and can move onto next round
- User Choice: the user can choose to play: 
    - a 6 letter lingo with the remaning time. doing so they can bank there current money. and if they win double it. 
    - a seven letter lingo with the remaning time. doing so they risk there current money but could win £1500.


### Game over 
The game over screen displays the players Total money earned. 

The player can enter there Name to save a highscore 

The player can also check all the lingo words that were given to them in the game.

#### All Lingo words 
- when the player clicks this button it displays a list of the lingo words from all Stages. with a Add button
- when the player clicks on a word it will display its decription
- when the player clicks add it will remove the word from the list and add it to there Dictonary on the home screen
- the section includes a back button to go to the previous menu to update there score

## Practice 
This section displays setting for a practice round. allowing the user to set the word length. how many guesses. and how many total rounds 

### Practice game play
Practice game play is the same as the main lingo game without different rounds. the user sets these indvidualy. 

### Game over 
The game over screen will display how many you got correct out of the total rounds. 

You can not save scores for practice rounds 


## LeaderBoard 
The leaderboard section displays the 5 highest score both for Timed Gamed and Untimed Games

## Dictonary 
The dictonary Displays the words added by the user at the end of each lingo game 




