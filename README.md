This project is a simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The goal of the game is for two players to take turns placing their markers ("X" or "O") in a 3x3 grid. The first player to align three of their markers either horizontally, vertically, or diagonally wins the game.

Structure:
HTML:

The structure of the game is defined in the HTML file. It includes a 3x3 grid of buttons (representing the Tic-Tac-Toe board) and a message container to display the winner.
The <button> elements inside a game class div represent the game board boxes. Each button acts as a cell where players can place their markers.
There are two additional buttons: "Reset Game" and "New Game" to restart the game.
CSS:

Basic styling is applied to ensure a clean and user-friendly interface. The grid layout is flexible and responsive, adjusting to different screen sizes using vmin units.
The .box class styles the individual game buttons, giving them a distinct look with rounded corners and a shadow effect.
The msg-container is initially hidden but appears when a player wins, showing the winner's name.
Both the reset and new game buttons have custom styles to make them visually appealing.
JavaScript:

The JavaScript controls the core logic of the game. Each box in the grid is clickable, and the players take turns placing either "X" or "O" on the board.
A winpattern array stores all the possible winning combinations, which are checked after each move.
Functions like checkwinner() verify if the current move leads to a win by comparing the content of the clicked boxes.
The showwinner() function displays a congratulatory message and disables further interaction with the grid when a player wins.
The game state (turn) is managed by the turn0 variable, which switches between true and false to alternate between "O" and "X".
The reset functionality clears the game board, allowing players to start over without reloading the page.
In summary, this project provides a fun and interactive way to play the classic Tic-Tac-Toe game in a browser. With a clean design and simple logic, players can enjoy the game while learning fundamental concepts of front-end web development.
