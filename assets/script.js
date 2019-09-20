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
    
    

        $(document).ready(function () {

            //global variables
            const userChoice = $('#user-choice');
            const enemyChoice = $('#enemy-choice');
            const heroSelection = $('.hero-select');
            const villainSelection = $('.villain-select');
          
            //array used for fighter select
            const fighterArray = [];
            //array for defeated enemies
            const defeatedEnemies = [];
            let userSelected = false;
            let enemySelected = false;
            let userFighter ;
            let enemyFighter ;
          
            
          
            //fighter constructor
            function Fighter (name, side, healthPoints, attackPoints, counterAttackPoints, imageHtml, role) {
                  return this.name = name,
                  this.side = side,
                  this.healthPoints = healthPoints,
                  this.attackPoints = attackPoints,
                  this.counterAttackPoints = counterAttackPoints,
                  this.imageHtml = imageHtml,
                  this.role = role;
              }
          
              //Good Guys
              const lukeSkywalker = new Fighter ("Luke Skywalker", "Rebellion", 140, 30, 25,  '<img src="assets/images/luke-skywalker.jpg" alt="Luke Skywalker" class="m-2 rounded avatar-btn" >', 'hero');
              const obiWan = new Fighter ("Obi-Wan Kenobi", "Rebellion", 120, 26, 22, '<img src="assets/images/obi-wan.jpg" alt="Obi-Wan" class="m-2 rounded avatar-btn">', 'hero');
              const princessLeia = new Fighter ("Princess Leia", "Rebellion", 115, 35, 23, ' <img src="assets/images/princess-leia.jpg" alt="Leia" width="128px" height="128px" class="m-2 rounded avatar-btn">', 'hero');
              const hanSolo = new Fighter ("Han Solo", "Rebellion", 129, 31, 31, ' <img src="assets/images/han-solo.jpg" alt="Han Solo" width="128px" height="128px" class="m-2 rounded avatar-btn">', 'hero');
              const maceWindu = new Fighter ("Mace Windu", "Jedi", 140, 56, 35, '<img src="assets/images/mace-windu.jpg" alt="Mace Windu" width="128px" height="128px" class="m-2 rounded avatar-btn">', 'hero');
              const yoda = new Fighter ("Yoda", "Jedi", 150, 67, 40, '<img src="assets/images/yoda.jpg" alt="Yoda" class="m-2 rounded avatar-btn">', 'hero');
          
              //Bad Guys
              const darthVader = new Fighter ("Darth Vader", "Empire", 119, 25, 21, '<img src="assets/images/vader.webp" alt="Darth Vader" width="128px" height="128px" class="m-2 rounded avatar-btn">', 'villain');
              const darthMaul = new Fighter ("Darth Maul", "Empire", 110, 24, 20, '<img src="assets/images/darth-maul.jpg" alt="Darth Maul" width="128px" height="128px"  class="m-2 rounded avatar-btn">', 'villain');
              const tarkin = new Fighter ("Tarkin", "Empire", 90, 22, 18, '<img src="assets/images/tarkin.jpg" alt="Tarkin" width="128px" height="128px" class="m-2 rounded avatar-btn">', 'villain');
              const palpatine = new Fighter ("Palpatine", "Empire", 130, 27, 28, '<img src="assets/images/palpatine.jpg" alt="Palpatine" width="128px" height="128px" class="m-2 rounded avatar-btn">', 'villain');
              const kyloRen = new Fighter ("Kylo Ren", "First Order", 129, 32, 32, '<img src="assets/images/kylo-ren.webp" alt="Kylo Ren" width="128px" height="128px" class="m-2 rounded avatar-btn" >', 'villain');
              const snoke = new Fighter ("Snoke", "First Order", 145, 56, 32, '<img src="assets/images/snoke.jpg" alt="Snoke" class="m-2 rounded avatar-btn">', 'villain');
          
              //push fighters to array
              fighterArray.push(lukeSkywalker, obiWan, princessLeia, hanSolo, maceWindu, yoda, darthVader, darthMaul, tarkin, palpatine, kyloRen, snoke);
          
              //reset health after each fight
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
          
              //dynamically add fighter images to page
              function fighterInit() {
                  for (let i = 0; i < fighterArray.length; i++) {
                      let fighterImg = fighterArray[i].imageHtml;
                      if (fighterArray[i].role === 'hero') {
                          heroSelection.append(fighterImg);
                      }
                      if (fighterArray[i].role === 'villain') {
                          villainSelection.append(fighterArray[i].imageHtml);
                      }
                  }
              }
          
              //select user and enemy fighters
              function fighterSelect() {
                  if (userSelected === false) {
                      userChoice.append($(this));
                      userSelected = true;
                      for (let i = 0; i < fighterArray.length; i++) {
                          if ($(this).attr('alt') === fighterArray[i].name) {
                              userFighter = fighterArray[i];
                              userFighter.hide();
                          }
                      }
                      return userFighter
                  }
                  
                  else if (userSelected === true && enemySelected === false) {
                      enemyChoice.append($(this));
                      enemySelected = true;
                      for (let i = 0; i < fighterArray.length; i++) {
                          if ($(this).attr('alt') === fighterArray[i].name) {
                              enemyFighter = fighterArray[i];
                              enemyFighter.hide();
                          }
                      }
                  return enemyFighter;
                  }
              }
          
              //reset function
              function reset() {
                  userSelected = false;
                  enemySelected = false;
                  userFighter = '';
                  enemyFighter = '';
                  heroSelection.empty();
                  villainSelection.empty();
                  userChoice.empty();
                  enemyChoice.empty();
                  fighterInit();
              }
              reset();
          
          
              //button click on each avatar (using event delegation)
              $(document).on('click', '.avatar-btn', fighterSelect);
          
              //Attack button to execute function that attacks enemy, but also counterattacks user
              $('#attack').on('click',  function () {
                  enemyFighter.healthPoints -= userFighter.attackPoints;
                  userFighter.healthPoints -= enemyFighter.counterAttackPoints;
                  console.log('user health: ' + userFighter.healthPoints);
                  console.log('enemy health: ' + enemyFighter.healthPoints);
          
                  
                  //if user runs out of health points,
                  //alert game over
                  //reset game function executes
                  if (userFighter.healthPoints <= 0) {
                      alert('Game Over!');
                      reset();
                  }
          
                  //if enemy runs out of health points,
                  //clear enemy fighter from fight area
                  //push enemy fighter to defeated array
                  //select another enemey
                  if (enemyFighter.healthPoints <= 0) {
                      defeatedEnemies.push(enemyFighter.name);
                      console.log(defeatedEnemies.length)
                      if (defeatedEnemies.length > 5) {
                          enemyChoice.remove();
                          alert('YOU HAVE WON. MAY THE FORCE BE WITH YOU.');
                          
                          reset();
                      } else {
                          alert('You Win! Challenge your next fighter.');
                          enemyChoice.empty();
                          resetHealth();
                          enemySelected = false;
                          console.log('defeated enemies: ' + defeatedEnemies);
                          fighterSelect();
                      }
                  }
              }
          );    
          
          });
          