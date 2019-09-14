// on document ready...
    //1. Choose Fighter
    //2. Choose Opponent
    //3. Option to Enter Arena or (maybe) Pick a Different Oponent

    //4. Battle in the Arena
        //4a. Each Fighter has HP (Health Points)
        //4b. Each Fighter has AP (Attack Points)
        //4c. Each Fighter has CAP (Counter Attack Points)
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

$(document).ready(function playGame () {
    //global variables
    const userChoice = $('#user-choice');
    const enemyChoice = $('#enemy-choice');
    let userSelected = false;
    let enemySelected = false;
    let userFighter ;
    let enemyFighter ;
    const fighterArray = [];

    //fighter constructor
    function Fighter(name, side, healthPoints, attackPoints, counterAttackPoints) {
        this.name = name;
        this.side = side;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.counterAttackPoints = counterAttackPoints;
    }

    //REBELLION fighters
    const lukeSkywalker = new Fighter("Luke Skywalker", "Rebellion", 140, 30, 25);
    const obiWan = new Fighter("Obi Wan Kenobi", "Rebellion", 120, 26, 22);
    const princessLeia = new Fighter("Princess Leia", "Rebellion", 115, 35, 23);
    const hanSolo = new Fighter("Han Solo", "Rebellion", 129, 31, 31);
    const maceWindu = new Fighter("Mace Windu", "Jedi", 140, 56, 35);
    const yoda = new Fighter("Yoda", "Jedi", 150, 67, 40);

    //EMPIRE Chacters
    const darthVader = new Fighter("Darth Vader", "Empire", 119, 25, 21);
    const darthMaul = new Fighter("Darth Maul", "Empire", 110, 24, 20);
    const tarkin = new Fighter("Tarkin", "Empire", 90, 22, 18);
    const palpatine = new Fighter("Palpatine", "Empire", 130, 27, 28);
    const kyloRen = new Fighter("Kylo Ren", "First Order", 129, 32, 32);
    const snoke = new Fighter("Snoke", "First Order", 145, 56,32 );

    //good guys
    fighterArray.push(lukeSkywalker);
    fighterArray.push(obiWan);
    fighterArray.push(princessLeia);
    fighterArray.push(hanSolo);
    fighterArray.push(maceWindu);
    fighterArray.push(yoda);

    //bad guys
    fighterArray.push(darthVader);
    fighterArray.push(darthMaul);
    fighterArray.push(tarkin);
    fighterArray.push(palpatine);
    fighterArray.push(kyloRen);
    fighterArray.push(snoke);
   
    //array check
    console.log(fighterArray);

    // function userFighterSelect(Fighter) {
    //     console.log('user Fighter is: ' + Fighter);
    //     return userFighter = Fighter;
    // }

    // function enemyFighterSelect(Fighter) {
    //     console.log('enemy Fighter is: ' + Fighter);
    //     return enemyFighter = Fighter;
    // }


    //button click on each avatar
    $('.avatar-btn').one('click', function(){
        //if user has not selected a fighter, slsects their fighter on click
        if (!userSelected) {
            console.log('User Selected fighter:' + $(this).text());
            userChoice.append($(this).html());
            userSelected = true;
            //for loop that iterates over fighter array, and sets the userFighter to the 
            //set data-name attribute equal to fighter.name
            console.log($(this).attr('data-name'));
            for (let i = 0; i < fighterArray.length; i++) {
                if ($(this).attr('data-name') === fighterArray[i].name) {
                    userFighter = fighterArray[i];
                    console.log(userFighter);
                }
            }
            return userFighter;
        }
        //if user has selecte their fighter, selects enemy on click
        else if (userSelected && !enemySelected) {
            console.log('User Selected Enemy:' + $(this).text());
            enemyChoice.append($(this).html());
            enemySelected = true;
            enemyFighter = $(this).attr('data-name');
            return enemyFighterSelect(enemyFighter);
        } 

    })

     //Execute Order 66
     $('#palpatine').one('click', function() {
        confirm('Execute Order 66?');
    })

    //Function to move user and enemy into the Arena
    $('#enter-arena').on('click', function() {
        if(userSelected && enemySelected) {
            userChoice.detach();
            enemyChoice.detach();
            $('#arena-user').append(userChoice);
            $('#arena-enemy').append(enemyChoice);
        }
    })

    //Attack button to execute function that attacks enemy, but also counterattacks user
    //$('#)

})
