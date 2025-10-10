/* Generate a sudoku 

we start with the emptyBoard, variable board;

for each (cell, index): 

    avail = [1..9]

    for (0<=k<=8) {

        while (avail) {
            randomChoice(avail) --> hValue (=hv)
            cell.value gets (provisionally) set on hv 
            //board[index] = {...cell, value: hv}

            if (bruteCheck(board)-->false) {
                avail\hv
                break (go to next k)
                
            } else if (err, but incomplete) {
                go on, next cell
            } else {
                console.log('generation finished')
            }
        }
            
        //here one should go back and change index-1...

    }

    Maybe we have to think recursively.. define a basis, a first cell
    and then define the induction step. 
*/