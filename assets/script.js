// on document ready...
    //1. Choose Character
    //2. Choose Opponent
    //3. Option to Enter Arena or (maybe) Pick a Different Oponent

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



$(document).ready(function playGame () {
    //global variables
    const userChoice = $('#user-choice');
    const enemyChoice = $('#enemy-choice');
    let userSelected = false;
    let enemySelected = false;
    let userChar ;
    let enemyChar ;

    //Character constructor
    function Char(name, side, healthPoints, attackPoints, counterAttackPoints) {
        this.name = name;
        this.side = side;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.counterAttackPoints = counterAttackPoints;
        function attack(attack, counterAttack) {
            enemyChar.healthPoints -= this.attackPoints;
        }
        
    }

    //REBELLION Characters
    const lukeSkywalker = new Char("Luke Skywalker", "Rebellion", 140, 30, 25);
    const obiWan = new Char("Obi Wan Kenobi", "Rebellion", 120, 26, 22);
    const princessLeia = new Char("Princess Leia", "Rebellion", 115, 35, 23);
    const hanSolo = new Char("Han Solo", "Rebellion", 129, 31, 31);
    const maceWindu = new Char("Mace Windu", "Jedi", 140, 56, 35);
    const yoda = new Char("Yoda", "Jedi", 150, 67, 40);

    //EMPIRE Chacters
    const darthVader = new Char("Darth Vader", "Empire", 119, 25, 21);
    const darthMaul = new Char("Darth Maul", "Empire", 110, 24, 20);
    const tarkin = new Char("Tarkin", "Empire", 90, 22, 18);
    const palpatine = new Char("Palpatine", "Empire", 130, 27, 28);
    const kyloRen = new Char("Kylo Ren", "First Order", 129, 32, 32);
    const snoke = new Char("Snoke", "First Order", 145, 56,32 );

    function userCharSelect(char) {
        console.log('user char is: ' + char);
        return userChar = char;
    }

    function enemyCharSelect(char) {
        console.log('enemy char is: ' + char);
        return enemyChar = char;
    }

    //button click on each avatar
    $('.avatar-btn').one('click', function(){
        //if user has not selected a fighter, slsects their fighter on click
        if (!userSelected) {
            console.log('User Selected fighter:' + $(this).text());
            userChoice.append($(this).html());
            userSelected = true;
            userChar = $(this).attr('data-name');
            return userCharSelect(userChar)
        }
        //if user has selecte their fighter, selects enemy on click
        else if (userSelected && !enemySelected) {
            console.log('User Selected Enemy:' + $(this).text());
            enemyChoice.append($(this).html());
            enemySelected = true;
            enemyChar = $(this).attr('data-name');
            return enemyCharSelect(enemyChar);
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

    

})
