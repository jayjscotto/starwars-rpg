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

    //6. IF Opponent (CPU) has 0 HP, round has been won, 
        //  6a. Return to opening screen, select different opponent.
        //  6b. Do not display defeated opponent

        //  6c. REPEAT until....
        //      6c.2 All Opponents defeated, show 'You Won!' Screen (roll SW credits)
        //      6c.3 User has 0 HP and is defeated, see Step 7.

    //7. IF User has 0 HP, game over
        //  7a. Display Reset or 'Try Again?' Button (OR.. decrement lives?)