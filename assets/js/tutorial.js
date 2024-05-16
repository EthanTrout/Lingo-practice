let isExited =false;
function tutorial(){
    document.getElementById("tutorial-section").innerHTML=""
    document.getElementById("tutorial-section").style.display ="block";
    document.getElementById("tutorial").style.display="none";
}

function nextTutorialStep(tutorialStep){
    let tutorialSection = document.getElementById("tutorial-section");
    if(tutorialStep ===0){
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                
                <ul class="round">
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">W</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
            </div>
        </div>
        <div id="tutorial-control-area">
            <div id="tutorial-toggle-user-input">
                <div id="money-increment" class="column">£200</div>
                <div id="user-input" class="column"><input id="user-answer" type="text" value="wade" autocomplete="off" spellcheck="false" readonly><button id="submit-answer" >Verify</button></div>
                <div id="player-money" class="column">£0</div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="rules-display">
            <div id="rules-display-inner">
                <h1>Game Play</h1>
                <ul>
                    <li>The word length is determined by the amount of horizontal tiles</li>
                    <li>the amount of guesses you get is determined by the vertical tiles</li>
                    <li>The game will give you the first letter of the lingo word</li>
                    <li>you will then guess the word</li>
                    <li>You can click verify or the enter key to submit your answer</li>
                </ul>
                <div class ="tutorial-buttons">
                    <button onclick= "returnToMenu()">Exit</button>
                    <button id="show" onclick="nextTutorialStep(1)">Show</button>
                </div>
            </div>
        </div>
    </section>`
    }
    if(tutorialStep === 1){
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                
                <ul class="round">
                    <li class="round-1 mobile-length-4" style="background-color: green;">w</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">a</li>
                    <li class="round-1 mobile-length-4" style="background-color: orange;">d</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">e</li>
                </ul> 
                <ul class="round">
                    <li class="round-2 mobile-length-4" style="background-color: green;">w</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
            </div>
        </div>
        <div id="tutorial-control-area">
            <div id="tutorial-toggle-user-input">
                <div id="money-increment" class="column">£200</div>
                <div id="user-input" class="column"><input id="user-answer" value="word" type="text" autocomplete="off" spellcheck="false" readonly><button id="submit-answer" >Verify</button></div>
                <div id="player-money" class="column">£0</div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="rules-display">
            <div id="rules-display-inner">
                <h1>Game Play</h1>
                <ul>
                    <li>The word length is determined by the amount of horizontal tiles</li>
                    <li>the amount of guesses you get is determined by the vertical tiles</li>
                    <li>The game will give you the first letter of the lingo word</li>
                    <li>you will then guess the word</li>
                    <li>You can click verify or the enter key to submit your answer</li>
                </ul>
                <div class ="tutorial-buttons">
                    <button onclick= "returnToMenu()">Exit</button>
                    <button id="show" onclick="nextTutorialStep(1)">Show</button>
                </div>
            </div>
        </div>`;
        document.getElementById("overlay").style.display="none";
        document.getElementById("rules-display").style.display ="none";
        setTimeout(function(){
            document.getElementById("overlay").style.display="block";
            document.getElementById("rules-display").style.display ="block";
            document.getElementById("rules-display").innerHTML=`
            <div id="rules-display-inner">
            <h1>Game Play</h1>
            <ul>
                <li>The tile goes orange if its in the Lingo word but its not in the correct place</li>
                <li>the tile goes green if its in the correct place</li>
                <li>The game will give any letter that is correct into your next guess</li>
                <li>you will then guess the word</li>
                <li>You can click verify or the enter key to submit your answer</li>
            </ul>
            <div class ="tutorial-buttons">
                <button onclick= "returnToMenu()">Exit</button>
                <button id="show" onclick="nextTutorialStep(2)">Show</button>
            </div>
        </div>`;
        },5000);
        
    }
    else if(tutorialStep === 2){
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                
                <ul class="round">
                    <li class="round-1 mobile-length-4" style="background-color: green;">w</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">a</li>
                    <li class="round-1 mobile-length-4" style="background-color: orange;">d</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">e</li>
                </ul> 
                <ul class="round">
                    <li class="round-2 mobile-length-4" style="background-color: green;">w</li>
                    <li class="round-2 mobile-length-4" style="background-color: green;">o</li>
                    <li class="round-2 mobile-length-4" style="background-color: green;">r</li>
                    <li class="round-2 mobile-length-4" style="background-color: green;">d</li>
                </ul> 
                <ul class="round">
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
            </div>
        </div>
        <div id="tutorial-control-area">
            <div id="tutorial-toggle-user-input">
                <div id="money-increment" class="column">£200</div>
                <div id="user-input" class="column"><input id="user-answer" type="text" autocomplete="off" spellcheck="false" readonly><button id="submit-answer" >Verify</button></div>
                <div id="player-money" class="column">£200</div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="rules-display">
            <div id="rules-display-inner">
                <h1>Game Play</h1>
                <ul>
                    <li>The word length is determined by the amount of horizontal tiles</li>
                    <li>the amount of guesses you get is determined by the vertical tiles</li>
                    <li>The game will give you the first letter of the lingo word</li>
                    <li>you will then guess the word</li>
                    <li>You can click verify or the enter key to submit your answer</li>
                </ul>
                <div class ="tutorial-buttons">
                    <button onclick= "returnToMenu()">Exit</button>
                    <button id="show" onclick="nextTutorialStep(2)">Show</button>
                </div>
            </div>
        </div>`;
        document.getElementById("overlay").style.display="none";
        document.getElementById("rules-display").style.display ="none";
        setTimeout(function(){
            document.getElementById("overlay").style.display="block";
            document.getElementById("rules-display").style.display ="block";
            document.getElementById("rules-display").innerHTML=`
            <div id="rules-display-inner">
            <h1>Win</h1>
            <ul>
                <li>If you guess the correct word the tiles will all highlight green</li>
                <li>the money that the word is worth is shown on the left</li>
                <li>this will be added to your score on the right</li>
                <li>all tiles will then be reset</li>
                <li>a new word will be generate for you to guess</li>
            </ul>
            <div class ="tutorial-buttons">
                <button onclick= "returnToMenu()">Exit</button>
                <button id="show" onclick="nextTutorialStep(3)">Show</button>
            </div>
        </div>`;
        },5000);
    }
    else if(tutorialStep === 3){
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                
                <ul class="round">
                    <li class="round-1 mobile-length-4" style="background-color: green;">w</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">a</li>
                    <li class="round-1 mobile-length-4" style="background-color: orange;">d</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">e</li>
                </ul> 
                <ul class="round">
                    <li class="round-2 mobile-length-4" style="background-color: red;">w</li>
                    <li class="round-2 mobile-length-4" style="background-color: red;">o</li>
                    <li class="round-2 mobile-length-4" style="background-color: red;">r</li>
                    <li class="round-2 mobile-length-4" style="background-color: red;">b</li>
                </ul> 
                <ul class="round">
                    <li class="round-3 mobile-length-4" style="background-color: green;">w</li>
                    <li class="round-3 mobile-length-4" style="background-color: green;">o</li>
                    <li class="round-3 mobile-length-4" style="background-color: green;">r</li>
                    <li class="round-3 mobile-length-4" style="background-color: green;">d</li>
                </ul> 
                <ul class="round">
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
            </div>
        </div>
        <div id="tutorial-control-area">
            <div id="tutorial-toggle-user-input">
                <div id="money-increment" class="column">£200</div>
                <div id="user-input" class="column"><input id="user-answer" type="text" autocomplete="off" spellcheck="false" readonly><button id="submit-answer" >Verify</button></div>
                <div id="player-money" class="column">£0</div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="rules-display">
            <div id="rules-display-inner">
                <h1>Game Play</h1>
                <ul>
                    <li>The word length is determined by the amount of horizontal tiles</li>
                    <li>the amount of guesses you get is determined by the vertical tiles</li>
                    <li>The game will give you the first letter of the lingo word</li>
                    <li>you will then guess the word</li>
                    <li>You can click verify or the enter key to submit your answer</li>
                </ul>
                <div class ="tutorial-buttons">
                    <button onclick= "returnToMenu()">Exit</button>
                    <button id="show" onclick="nextTutorialStep(3)">Show</button>
                </div>
            </div>
        </div>`;
        document.getElementById("overlay").style.display="none";
        document.getElementById("rules-display").style.display ="none";
        setTimeout(function(){
            document.getElementById("overlay").style.display="block";
            document.getElementById("rules-display").style.display ="block";
            document.getElementById("rules-display").style.backgroundColor ="rgba(128,0,0,0.75)";

            document.getElementById("rules-display").innerHTML=`
            <div id="rules-display-inner">
            <h1>Lose</h1>
            <ul>
                <li>If you guess a word that isnt in the english dictonary the tiles will highlight red</li>
                <li>If you run out of guesses the tiles will highlight red</li>
                <li>the correct lingo will be displayed on the next set of tiles</li>
                <li>You will not win any money and it will move the the next game</li>
                <li>a new word will be generate for you to guess</li>
            </ul>
            <div class ="tutorial-buttons">
                <button onclick= "returnToMenu()">Exit</button>
                <button id="show" onclick="nextTutorialStep(4)">Challenege Words</button>
            </div>
        </div>`;
        },5000);
    }
    else if(tutorialStep === 4){
        isExited =false;
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                
                <ul class="round">
                    <li class="round-1 mobile-length-9" style="background-color: green">l</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91)">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> <p id="clue">This will be a clue to the given word</p>
            </div>
        </div>
        <div class ="timer-container">
            <div id="timer-skip-container">
                <p id="final-timer-display"></p>
                <div id="tutorial-progress-bar">
                <div id="tutorial-timer-display"></div>
                </div>
                <button id="skip-word" onclick="endGame('red')" aria-label="Skip word">Skip</button>
            </div>
        </div>
        <div id="tutorial-control-area">
            <div id="tutorial-toggle-user-input">
                <div id="money-increment" class="column">£500</div>
                <div id="user-input" class="column"><input id="user-answer" type="text" autocomplete="off" spellcheck="false" readonly><button id="submit-answer" >Verify</button></div>
                <div id="player-money" class="column">£0</div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="rules-display">
            <div id="rules-display-inner">
                <h1>Game Play</h1>
                <ul>
                    <li>The word length is determined by the amount of horizontal tiles</li>
                    <li>the amount of guesses you get is determined by the vertical tiles</li>
                    <li>The game will give you the first letter of the lingo word</li>
                    <li>you will then guess the word</li>
                    <li>You can click verify or the enter key to submit your answer</li>
                </ul>
                <div class ="tutorial-buttons">
                    <button onclick= "returnToMenu()">Exit</button>
                    <button id="show" onclick="nextTutorialStep(2)">Show</button>
                </div>
            </div>
        </div>`;
        document.getElementById("overlay").style.display="none";
        document.getElementById("rules-display").style.display ="none";
        setTimeout(function(){
            document.getElementById("overlay").style.display="block";
            document.getElementById("rules-display").style.display ="block";
            document.getElementById("rules-display").innerHTML=`
            <div id="rules-display-inner">
            <h1>Challenge Word</h1>
            <ul>
                <li>A challenge word and clue will be shown</li>
                <li>the timer counts down and letters are revealed</li>
                <li>if the timer ends before you make a guess, you lose and get no money</li>
                <li>if you guess an incorrect word , you lose and get no money </li>
                <li>the money you will earn will decrease with every letter given</li>
            </ul>
            <div class ="tutorial-buttons">
                <button onclick= "returnToMenu()">Exit</button>
                <button id="show" onclick="nextTutorialStep(5)">show</button>
            </div>
        </div>`;
        },5000);
    }
    else if(tutorialStep === 5){
        if(!isExited){tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                
                <ul id ="round-1" class="round">
                    <li class="round-1 mobile-length-9" style="background-color: green">l</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: green;">n</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91)">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> <p id="clue">This will be a clue to the given word</p>
            </div>
        </div>
        <div class ="timer-container">
            <div id="timer-skip-container">
                <p id="final-timer-display"></p>
                <div id="tutorial-progress-bar">
                <div id="tutorial-timer-display"></div>
                </div>
                <button id="skip-word" onclick="endGame('red')" aria-label="Skip word">Skip</button>
            </div>
        </div>
        <div id="tutorial-control-area">
            <div id="tutorial-toggle-user-input">
                <div id="money-increment" class="column">£500</div>
                <div id="user-input" class="column"><input id="user-answer" type="text" autocomplete="off" spellcheck="false" readonly><button id="submit-answer" >Verify</button></div>
                <div id="player-money" class="column">£0</div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="rules-display">
            <div id="rules-display-inner">
                <h1>Game Play</h1>
                <ul>
                    <li>The word length is determined by the amount of horizontal tiles</li>
                    <li>the amount of guesses you get is determined by the vertical tiles</li>
                    <li>The game will give you the first letter of the lingo word</li>
                    <li>you will then guess the word</li>
                    <li>You can click verify or the enter key to submit your answer</li>
                </ul>
                <div class ="tutorial-buttons">
                    <button onclick= "returnToMenu()">Exit</button>
                    <button id="show" onclick="nextTutorialStep(2)">Show</button>
                </div>
            </div>
        </div>`;
        document.getElementById("overlay").style.display="none";
        document.getElementById("rules-display").style.display ="none";
        setTimeout(function(){
            document.getElementById("round-1").innerHTML=`
            <li class="round-1 mobile-length-9" style="background-color: green">l</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">n</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">g</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91)">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>`;
        },4000);
        setTimeout(function(){
            document.getElementById("round-1").innerHTML=`
            <li class="round-1 mobile-length-9" style="background-color: green">l</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">n</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">g</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91)">.</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">g</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>`;
        },8000);
        setTimeout(function(){
            document.getElementById("round-1").innerHTML=`
            <li class="round-1 mobile-length-9" style="background-color: green">l</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">n</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">g</li>
            <li class="round-1 mobile-length-9" style="background-color: green">o</li>
            <li class="round-1 mobile-length-9" style="background-color: green;">g</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>
            <li class="round-1 mobile-length-9" style="background-color: rgb(0, 34, 91);">.</li>`;
        },12000);
        setTimeout(function(){
            document.getElementById("overlay").style.display="block";
            document.getElementById("rules-display").style.display ="block";
            document.getElementById("rules-display").style.backgroundColor ="rgba(128,0,0,0.75)";

            document.getElementById("rules-display").innerHTML=`
            <div id="rules-display-inner">
            <h1>Challenge words</h1>
            <ul>
                <li>Good luck with your challenge words. you can win alot of money</li>
            </ul>
            <div class ="tutorial-buttons">
                <button onclick= "returnToMenu()">Exit</button>
                <button id="show" onclick="nextTutorialStep(6)">final</button>
            </div>
        </div>`;
        },17000);}
        
    }
    else if(tutorialStep === 6){
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                
                <ul class="round">
                    <li class="round-1 mobile-length-4" style="background-color: green;">w</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-1 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91)">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-2 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-3 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-4 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
                <ul class="round">
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                    <li class="round-5 mobile-length-4" style="background-color: rgb(0, 34, 91);">.</li>
                </ul> 
            </div>
        </div>
        <div class ="timer-container">
            <div id="timer-skip-container">
                <p id="tutorial-final-timer-display">90s remain</p>
                </div>
                <button id="tutorial-skip-word" onclick="endGame('red')" aria-label="Skip word">Skip</button>
            </div>
        <div id="tutorial-control-area">
            <div id="tutorial-toggle-user-input">
                <div id="money-increment" class="column">£200</div>
                <div id="user-input" class="column"><input id="user-answer" value="word" type="text" autocomplete="off" spellcheck="false" readonly><button id="submit-answer" >Verify</button></div>
                <div id="player-money" class="column">£0</div>
            </div>
        </div>
        <div id="overlay"></div>
        <div id="rules-display">
            <div id="rules-display-inner">
                <h1>Final</h1>
                <ul>
                    <li>In the final you get 90s on the clock to answer 1-3 lingo words</li>
                    <li>if you answer the 4 letter lingo in 90s you get half the money you banked</li>
                    <li>if you answer the 5 letter lingo in 90s you get all the money you banked</li>
                    <li>if you answer the 6 letter lingo in 90s you get double the money you banked</li>
                    <li>if you answer the 7 letter lingo in 90s you get the grand prize of £15000 but you risk all of your money</li>
                </ul>
                <div class ="tutorial-buttons">
                    <button onclick= "returnToMenu()">Exit</button>
                    <button id="show" onclick="nextTutorialStep(1)">Show</button>
                </div>
            </div>
        </div>`;
        document.getElementById("overlay").style.display="none";
        document.getElementById("rules-display").style.display ="none";
        setTimeout(function(){
            document.getElementById("overlay").style.display="block";
            document.getElementById("rules-display").style.display ="block";
            document.getElementById("rules-display").innerHTML=`
            <div id="rules-display-inner">
            <h1>Final</h1>
            <ul>
            <li>In the final you get 90s on the clock to answer 1-3 lingo words</li>
            <li>if you answer the 4 letter lingo in 90s you get half the money you banked</li>
            <li>if you answer the 5 letter lingo in 90s you get all the money you banked</li>
            <li>if you answer the 6 letter lingo in 90s you get double the money you banked</li>
            <li>if you answer the 7 letter lingo in 90s you get the grand prize of £15000 but you risk all of your money</li>
            </ul>
            <div class ="tutorial-buttons">
                <button onclick= "returnToMenu()">Exit</button>
                <button id="show" onclick="nextTutorialStep(2)">Show</button>
            </div>
        </div>`;
        },5000);
        
    }
    
}
function returnToMenu(){
    document.getElementById("tutorial-section").style.display ="none";
    document.getElementById("tutorial").style.display="block";
    isExited =true;
}