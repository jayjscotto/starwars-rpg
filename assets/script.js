$(document).ready(function () {
    //global variables
    const userChoice = $('#user-choice');
    const enemyChoice = $('#enemy-choice');
    let userSelected = false;
    let enemySelected = false;
    let userFighter ;
    let enemyFighter ;
    //array used for fighter select
    const fighterArray = [];
    //array for defeated enemies
    const defeatedEnemies = [];

    function resetGame () {
        userSelected = false;
        enemySelected = false;
        userFighter = '';
        enemyFighter = '';
        userChoice.empty();
        enemyChoice.empty();
        resetHealth();
    }

    //fighter constructor
    function Fighter (name, side, healthPoints, attackPoints, counterAttackPoints) {
        this.name = name;
        this.side = side;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.counterAttackPoints = counterAttackPoints;
    }

    //Good Guys
    const lukeSkywalker = new Fighter ("Luke Skywalker", "Rebellion", 140, 30, 25);
    const obiWan = new Fighter ("Obi-Wan Kenobi", "Rebellion", 120, 26, 22);
    const princessLeia = new Fighter ("Princess Leia", "Rebellion", 115, 35, 23);
    const hanSolo = new Fighter ("Han Solo", "Rebellion", 129, 31, 31);
    const maceWindu = new Fighter ("Mace Windu", "Jedi", 140, 56, 35);
    const yoda = new Fighter ("Yoda", "Jedi", 150, 67, 40);

    //Bad Guys
    const darthVader = new Fighter ("Darth Vader", "Empire", 119, 25, 21);
    const darthMaul = new Fighter ("Darth Maul", "Empire", 110, 24, 20);
    const tarkin = new Fighter ("Tarkin", "Empire", 90, 22, 18);
    const palpatine = new Fighter ("Palpatine", "Empire", 130, 27, 28);
    const kyloRen = new Fighter ("Kylo Ren", "First Order", 129, 32, 32);
    const snoke = new Fighter ("Snoke", "First Order", 145, 56,32 );

    //push fighters to array
    fighterArray.push(lukeSkywalker, obiWan, princessLeia,hanSolo, maceWindu, yoda, darthVader, darthMaul, tarkin, palpatine, kyloRen, snoke);

    function fighterSelect() {
        //if user has not selected a fighter, slsects their fighter on click
        if (userSelected === false) {
            $(this).detach();
            userChoice.append($(this).html());
            userSelected = true;

            //for loop that iterates over fighter array, and sets the userFighter variable to the object whose name is equivalent to the data-name attribute
            for (let i = 0; i < fighterArray.length; i++) {
                if ($(this).attr('data-name') === fighterArray[i].name) {
                    userFighter = fighterArray[i];
                    console.log('user fighter is: ' + userFighter.name);
                }
            }
        return userFighter;
        }

        //if user has selected their fighter, selects enemy on click
        else if (userSelected === true && enemySelected === false) {
                $(this).detach();
                enemyChoice.append($(this).html());
                enemySelected = true; 
                //for loop that iterates over fighter array, and sets the enemeyFighter variableto the object whose name is equivalent to the data-name attribute
                for (let i = 0; i < fighterArray.length; i++) {
                    if ($(this).attr('data-name') === fighterArray[i].name) {
                            enemyFighter = fighterArray[i];
                            console.log('enemy fighter is: ' + enemyFighter.name);
                        }
                    }
            }
            
        return enemyFighter;
    }

    function resetHealth() {
        lukeSkywalker.healthPoints = 140;
        obiWan.healthPoints = 120;
        princessLeia.healthPoints = 115;
        hanSolo.healthPoints = 129;
        maceWindu.healthPoints = 140;
        yoda.healthPoints = 150;

        darthVader.healthPoints = 119;
        darthMaul.healthPoints = 110;
        tarkin.healthPoints = 90;
        palpatine.healthPoints = 130;
        kyloRen.healthPoints = 129;
        snoke.healthPoints = 145;
        console.log('user health: ' + userFighter.healthPoints);
    }

    //button click on each avatar
    $('.avatar-btn').on('click', fighterSelect)
        
    //Execute Order 66
    $('#palpatine').one('click', function() {
        confirm('Execute Order 66.');
    })

    //Attack button to execute function that attacks enemy, but also counterattacks user
    $('#attack').on('click', function (){
        //console.log(userFighter.healthPoints + userFighter.attackPoints);
        enemyFighter.healthPoints -= userFighter.attackPoints;
        userFighter.healthPoints -= enemyFighter.counterAttackPoints;
        console.log('user health: ' + userFighter.healthPoints);
        console.log('enemy health: ' + enemyFighter.healthPoints);

        //if user runs out of health points,
        //alert game over
        //reset game function executes
        if (userFighter.healthPoints <= 0) {
            alert('Game Over!');
            resetGame();
        }

        //if enemy runs out of health points,
        //clear enemy fighter from fight area
        //push enemy fighter to defeated array
        //select another enemey
        if (enemyFighter.healthPoints <= 0 && defeatedEnemies.length < 6) {
            alert('You Win! Challenge your next fighter.');
            enemyChoice.empty();
            resetHealth();
            enemySelected = false;
            defeatedEnemies.push(enemyFighter);
            console.log('defeated enemies: ' + defeatedEnemies);
            fighterSelect();
            enemy.remove();
        }

        //if all the enemies are defeated
        //play star wars theme or credits??
        if (defeatedEnemies.length = 6) {
            alert('YOU WIN.');
            confirm('Play again?');
            resetGame();
        }
    })


})

// on document ready...
    //1. Choose Fighter
    //2. Choose Opponent
    //3. Fighters move to `fighting` section
    //4. Battle
        //4a. Each Fighter has HP (Health Points)
        //4b. Each Fighter has AP (Attack Points)
        //4c. Each Fighter has CAP (Counter Attack Points)
    //5. In Arena.... 
        //  5a. User attacks opponent (CPU) with AP.
        //  5a.2 Opponent loses HP equivalent to User AP
        //  5a.3 Opponent responds with CAP

        //  5b. Repeat Step 5a. until either User or Opponent has 0 HP
            //5b.2 If User defeats opponent, push opponent to defeated Enemies array

            //5b.3 User can select another enemy to fight

    //6. IF Opponent (CPU/ENEMY) has 0 HP, round has been won, 
        //  6a. Return to select different opponent.
        //  6b. Do not display defeated opponent

        //  6c. REPEAT until....
        //      6c.2 All Opponents defeated, show 'You Won!' Screen (roll SW credits)
        //      6c.3 User has 0 HP and is defeated, see Step 7.

    //7. IF User has 0 HP, game over
        //  7a. Reset game