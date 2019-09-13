//maybe utilize $(document).ready(function () {--- jQuery inside this--- })

// Game Loads And...
    //1. Choose Character
    //2. Choose Opponent
    //3. Option to Enter Arena or Pick a Different Oponent
    //4. Battle in the Arena
        //4a. Each character has HP (Health Points)
        //4b. Each character has AP (Attack Points)
        //4c. Each character has CAP (Counter Attack Points)
    //5. In Arena.... 
        //  5a. User attacks opponent (CPU) with AP.
        //  5a.2 Opponent loses HP equivalent to User AP
        //  5a.3 Opponent responds with CAP

        //  5b. Repeat Step 5a. until either User or Opponent has 0 HP

    //6. IF Opponent (CPU/ENEMY) has 0 HP, round has been won, 
        //  6a. Return to opening screen, select different opponent.
        //  6b. Do not display defeated opponent

        //  6c. REPEAT until....
        //      6c.2 All Opponents defeated, show 'You Won!' Screen (roll SW credits)
        //      6c.3 User has 0 HP and is defeated, see Step 7.

    //7. IF User has 0 HP, game over
        //  7a. Display Reset or 'Try Again?' Button (OR.. decrement lives?)



$(document).ready(function() {
    const userChoice = $('#user-choice');
    let userSelected = "";
    const enemyChoice = $('#enemy-choice');
    let enemySelected = "";

    //button click on each avatar
    $('.avatar-btn').one('click', function(){
        //if user has not selected a fighter, slsects their fighter on click
        if(!userSelected) {
            console.log('User Selected fighter:' + $(this).text());
            userChoice.append($(this).html());
            userSelected = true;
        }
        //if user has selecte their fighter, selects enemy on click
        else if (userSelected) {
            console.log('User Selected Enemy:' + $(this).text());
            enemyChoice.append($(this).html());
            enemySelected = true;
        }

        //Execute Order 66
        $('#palpatine').one('click', function() {
            confirm('Execute Order 66?');
        })
    
    })

    $('#enter-arena').on('click', function() {
        if(userSelected && enemySelected) {
            userChoice.detach();
            enemyChoice.detach();
            $('#arena-user').append(userChoice);
            $('#arena-enemy').append(enemyChoice);
        }
    })




})
