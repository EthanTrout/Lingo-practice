# Lingo Practice Game 

The Lingo Practice game is a word game inspired from the uk TV show Lingo. 

The game allows users to play the exact game seen on tv and see how much money they could get in the hit TV show.

The game also offers practice rounds for each letter length 

The game can be used for recreation and learning. 

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
The a site is a single page with 4 sections 
- The Tutorial section
    - Runs through the game rules
    - displays the game board and explains what each element does

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
- How to play
- PlayLingo
- Practice
- LeaderBoard
- Dictonary

![Home page/ game menu](/assets/readme-images/game-menu.png)

You can see here the inspiration for the look and feel of the Website comes from the Orginal Tv show

![Lingo tv show image](/assets/readme-images/lingo-show.png)
## Play Lingo


- When the user clicks this button the game becomes occupied with two options. Timed and untimed.
    - This allows the user to decide a diffculty. its much harder when every answer needs to be made quickly!
![play Lingo options](/assets/readme-images/play-lingo-options.png)


### The board
- a back button allows the player to exit the game 
- A board is created and a new Lingo word is generated for the player to guess. This will be new everytime
- The player has 5 guesses and therefore 5 rows of boxes are shown.
- The first letter of the Lingo Word is given to the player 
![Untimed board](/assets/readme-images/untimed-board.png)

#### Timed board
- when a game is timed a progress bar is shown for each answer.
- the player has 10s to enter there answer or the round will end and the next one will start
![Timed board](/assets/readme-images/timed-board.png)

### User input
- A box under the board is highlighted and is where a user can enter the word. they can click verify or enter to guess
- to the left of this box the money increment is displayed. the player will get this money if they guess correctly
- to the right of this box the players gained money is displayed

![User controls](/assets/readme-images/user-controls-desktop.png)

#### User input mobile
- On mobile the increment and player money are moved under the user input for a better UI experience

Note: this is done via JS not CSS when a game is started so will not be visible if game is started and Dev tools are used to decrease the screen width

![Mobile user controls](/assets/readme-images/user-controls-mobile.png)

### GamePlay 
#### Player input
- When the user guesses a word is it displayed in the row they are on.
- The game Highlights any letter in the correct place as green.
- the game Highlights any letter that is correct but in the wrong place as being orange.
- the round then moves down to the next set of gueses 

Note: word is Bias
![First Guess](/assets/readme-images/gameplay-guess.png)

#### Player Input incorrect 
- if the word is not a word or the player is out of guesses then the game will display the tiles as red and show the Lingo word in the next set of tile 
- If there are not any tiles left it will create them 
- The user input area will hide its self to stop the user from entering another word

![Incorrect Answer](/assets/readme-images/Incorrect-guess.png)
![Last Guess](/assets/readme-images/last-guess.png)

#### Player Input correct 
- if the guess is correct the tiles will animate and show all tiles as green before moving onto the next game.
- The user input area will hide its self to stop the user from entering another word

![Correct Answer](/assets/readme-images/correct-guess.png)

### Challenge rounds
- a challenege round is timed 
- the money decreases with each letter given.
- The player only gets one guess
- a clue is given to the player
![ChallenegeRound1](/assets/readme-images/challenge-round-1.png)
![ChallenegeRound2](/assets/readme-images/challenge-round-2.png)
![ChallenegeRound3](/assets/readme-images/challenge-round-3.png)

### Game Structure 
The game structure is the same as the TV show Lingo. all rounds Except Challenege rounds get five guesses

- Stage 1: 4 letter Lingo word. 4 games worth £200 each. 
- Stage 2: A Challenge Lingo round 9 letter word.
- Stage 3: 5 letter Lingo word. 4 games worth £300 each.
- Stage 4: A challenege Lingo round. 10 letter word.
- Stage 5: 4 letter Lingo Word. 2 games starting at £500 but decreases by £50 each guess
- Stage 6: 5 letter Lingo Word. 2 games starting at £500 but decreases by £50 each guess
- Stage 7: A Challeneg round 10 letter word
- Final: The user gets 90 sections on the clock. They must answer a 4 letter word and a 5 letter word. They can skip each word and the game will only end when the timer runs out.
    - 4 letter win: the player gets half of there money 
    - 5 letter win: the player banks all of there money and can move onto next round
- User Choice: the user can choose to play: 
    - a 6 letter lingo with the remaning time. doing so they can bank there current money. and if they win double it. 
    - a seven letter lingo with the remaning time. doing so they risk there current money but could win £1500.
    Note: the user can not skip the 6 letter or 7 letter


### Game over 
The game over screen displays the players Total money earned and time remaning if any.

The player can enter there Name to save a highscore. this will redirect to the main menu

The player can also check all the lingo words that were given to them in the game.

![Game over](/assets/readme-images/game-over.png)

#### All Lingo words 
- when the player clicks this button it displays a list of the lingo words from all Stages. with a Add button
- when the player clicks on a word it will display its decription
- when the player clicks add it will remove the word from the list and add it to there Dictonary on the home screen
- the section includes a back button to go to the previous menu to update there score

## Practice 
This section displays setting for a practice round. allowing the user to set the word length. how many guesses. and how many total rounds 

![Practice settings](/assets/readme-images/practice-settings.png)
### Practice game play
Practice game play is the same as the main lingo game without different rounds. the user sets these indvidualy. 

### Game over 
The game over screen will display how many you got correct out of the total rounds. 

Note:You can not save scores for practice rounds 

![Practice game over](/assets/readme-images/practice-game-over.png)

## LeaderBoard 
The leaderboard section displays the 5 highest score both for Timed Gamed and Untimed Games

![Leader Board](/assets/readme-images/leader-board.png)
## Dictonary 
The dictonary Displays the words added by the user at the end of each lingo game 


# Testing

## validator testing

- HTML
    - No errors were found when passing through the offical W3C markup validator
    - [W3C Validator results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fethantrout.github.io%2FLingo-practice%2F)

- CSS
    - No errors were found when passing through the offical W3C markup validator
    - [W3C Validator results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fethantrout.github.io%2FLingo-practice%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- Javascript 
    - do the JSLint validator


# Acessibility

## Lighthouse score 

### Browser Testing
- The Website was tested on Google Chrome, Firefox, Microsoft Edge, Safari browsers with no issues noted.
    
### Device Testing
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 8, iPhoneX and iPad to ensure responsiveness on various screen sizes. The website performed as intended. The responsive design was also checked using Chrome developer tools across multiple devices with structural integrity holding for the various sizes.

    
# Technologies used
## Languages 
- HTML5
- CSS3
- JavaScript

## frameworks -libraries - API - programs Used
- Chrome dev tools- used for overall development and testing, including responsivness and preformance
- GitHub -Used for version control and hosting of the page
- W3C -used for validation testing of HTML and CSS
- WordsAPI - used for Getting random words, checking words exist and generating definitions for player dictonary 

# Deployment
## The site was deployed using GitHub pages. The steps to deploy using GitHub pages are:

1. Go to the repository on GitHub.com
2. Select 'Settings' near the top of the page.
3. Select 'Pages' from the menu bar on the left of the page.
4. Under 'Source' select the 'Branch' dropdown menu and select the main branch.
5. Once selected, click the 'Save'.
6. Deployment should be confirmed by a message on a green background saying "Your site is published at" followed by the web address.

The Live link can be found here [LingoPractice](https://ethantrout.github.io/Lingo-practice/)

## The API key was generated using WordsAPI. the steps to get a key are
1. Go to wordsapi.com
2. Go  to 'pricing' near the top of the page
3. Sign up for free using rapidAPI
4. Enter personal details
5. click generate API key 

Note: i have created a input feild at the start of the game for Demo purposes. if you choose to deploy this you can enter your API key there as to not save it to your own Github and compromise the key

## Cloning
To clone this repository follow the below steps:

1. Locate the repository at this link [Lingo Practice Repository](https://github.com/EthanTrout/Lingo-practice).
2. Under 'Code', see the different cloning options, HTTPS, SSH, and GitHub CLI. Click the prefered cloning option, and then copy the link provided.
3. Open Terminal.
4. In Terminal, change the current working directory to the desired location of the cloned directory.
5. Type 'git clone', and then paste the URL copied from GitHub earlier.
6. Type 'Enter' to create the local clone.

Note: you will need to generate your own API key for the game to work

# Credits

## Content 
The inspiration for this game came from the UK tv show Lingo. This tv show is always on at my work and there have been multiple occasions where people have said they would love to see how well they would do on this show. There are other apps such as wordle that allow you to play but none that are accurate to the Shows game mecanics and can actually score you on this.

## Resources used

