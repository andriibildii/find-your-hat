const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    // vertical position
    this.y = 0;
    // horizontal position
    this.x = 0;
    // start position before the game
    this.field[0][0] = pathCharacter;
  }

  print() {
    // print current state of the field as a string
    for (let i=0; i < this.field.length; i++) {
      console.log(this.field[i].join(''));
    }
  }

  // Prompt user to indicate which direction they’d like to “move”.
  prompt() {
    const direction = prompt('Which way would you like to move (W (up), A (left), S (down), or D (right))? ').toLowerCase();
    // update vertical and horizontal position based on direction
    switch (direction) {
      case 'w':
        this.y--;
        break;
      case 'd':
        this.x++;
        break;
      case 's':
        this.y++;
        break;
      case 'a':
        this.x--;
        break;
      default:
        console.log('Please enter (W, A, S, or D).');
        this.prompt();
        break;
    }
  }

  play() {
    let playing = true;
    while (playing) {
      this.print();
      this.prompt();
      const position = this.field[this.y][this.x];

      // if user moves into a hole
      if (position === hole) {
        console.log('Game over! You fell into a hole.');
        playing = false;
        break;
      }

      // if user moves into a hat
      if (position === hat) {
        console.log('You have found the hat!');
        playing = false;
        break;
      }

      // if user goes out of field
      if (
        this.y < 0 ||
        this.y > this.field.length ||
        this.x < 0 ||
        this.x > this.field[0].length
      ) {
        console.log('Game over. You have gone out of the field.');
        playing = false;
        break;
      }

      // add star to current location
      this.field[this.y][this.x] = pathCharacter;

      // clear console to keep things clean
      process.stdout.write('\x1Bc');
    }
  }

  // Generate a field with the hat and holes randomly placed
  static generate(rows = 10, columns = 10, holes = 25) {
    const field = [];
    for (let i = 0; i < rows; i++) {
      field.push([]);
      for (let j = 0; j < columns; j++) {
        field[i].push(fieldCharacter);
      }
    }

    // place holes in random locations
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
          if (Math.floor(Math.random() * 100) < holes) {
              field[i][j] = hole;
          }
      }
    }

    // place hat in random location that's not the starting position
    let y = 0;
    let x = 0;
    while (y === 0 && x === 0) {
      y = Math.floor(Math.random() * rows);
      x = Math.floor(Math.random() * columns);
      field[y][x] = hat;
    }
    
    return field;
  }
}

const myField = new Field(Field.generate());
myField.play();