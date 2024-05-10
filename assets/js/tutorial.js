function nextTutorialStep(tutorialStep){
    var tutorialSection = document.getElementById("tutorial-section")
    if(tutorialStep === 1){
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                <button class ="menu-button" onclick="returnToMenu()" aria-label = "Return to menu">back to menu</button>
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
                    <button id="show" onclick="nextTutorialStep(1)">Show</button>
                </div>
            </div>
        </div>`
        document.getElementById("overlay").style.display="none"
        document.getElementById("rules-display").style.display ="none"
        setTimeout(()=>{
            document.getElementById("overlay").style.display="block"
            document.getElementById("rules-display").style.display ="block"
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
                <button id="show" onclick="nextTutorialStep(2)">Show</button>
            </div>
        </div>`
        },5000)
        
    }
    else if(tutorialStep === 1){
        tutorialSection.innerHTML=`
        <div class="container">
            <div id="tutorial-area">
                <button class ="menu-button" onclick="returnToMenu()" aria-label = "Return to menu">back to menu</button>
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
                    <button id="show" onclick="nextTutorialStep(1)">Show</button>
                </div>
            </div>
        </div>`
        document.getElementById("overlay").style.display="none"
        document.getElementById("rules-display").style.display ="none"
        setTimeout(()=>{
            document.getElementById("overlay").style.display="block"
            document.getElementById("rules-display").style.display ="block"
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
                <button id="show" onclick="nextTutorialStep(2)">Show</button>
            </div>
        </div>`
        },5000)
    }

}