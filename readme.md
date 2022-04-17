# Find Your Hat

This is interactive terminal game with JavaScript classes.

The scenario is that the player has lost their hat in a field full of holes, and must navigate back to it without falling down one of the holes or stepping outside of the field.

## The first step.
Created the ***Field constructor*** that takes a two-dimensional array representing the “field” itself. 
A field consists of a grid containing “holes” (O) and one “hat” (^). 
To indicate the rest of the field itself used a character (░)
The player will begin in the upper-left of the field, and the player’s path is represented by *.

## The second step 
Given to the Field class a ***.print()*** method that prints the current state of the field (print out a string representation of the board instead of the raw array).

## The third step
Given to the Field class a ***.prompt()*** method that enables the user to indicate which direction they’d like to “move” (by using key W (up), A (left), S (down), or D (right)).

After entering an instruction, the user can see a printed result of their current field map with the tiles they have visited marked with *.

## The fourth step
Given to the Field class a ***.play()*** method that checks if the user has won (if found their hat), lost (if he landed on (and fell in) a hole, or try to move “outside” the field).
Also added `process.stdout.write('\x1Bc');` that clear console after user indicate which direction they’d like to “move”.

## The fifth step
Added a ***.generateField()*** static method to your Field class. 
This method takes arguments for height, width, and holes of the field for generate a field with the hat and holes randomly placed.
The method returns a randomized two-dimensional array representing the field with a hat and one or more holes.