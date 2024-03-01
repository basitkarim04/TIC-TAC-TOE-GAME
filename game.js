// game start
function myFunction() {
    document.getElementById("inp3").style.display = "none" //For Computer
    document.getElementById("inp4").style.display= "block"
    document.getElementById("inp5").style.display= "none"
}
function myFunction2() {
    document.getElementById("inp5").style.display= "block" /// For Two Players Game
    document.getElementById("inp4").style.display= "none"
    document.getElementById("inp3").style.display = "none"
}


// ID ASSIGNED
function myfunc() {

	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// CHANCES FOR WINNING OF PLAYER 1
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        $("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
	
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        $("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
        
		
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player X won.");
            $("#gameover").css("display","block");  
			
	}

	
	// chances for Winning of player 2
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print') 
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		$("#gameover").find(".TwoPlayers-body").html("Congratulations, Player O won.");
            $("#gameover").css("display","block");  
			
	}

	//  Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			$("#gameover").find(".TwoPlayers-body").html("Match Tie.");
            $("#gameover").css("display","block");
	}
	else {

		// Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}


//  reset game
function Reset_Game() {
    location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
}

//  put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
// Game end for two players


//Game for Aganist Computer//

const firstPlayer = localStorage.getItem('first-player');
const markerChosen = localStorage.getItem('marker-chosen');
const board = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];

function getMarkerOf(player){
    let userMark = markerChosen;
// default value assigned to userMark if none selected in options menu.
    userMark = (userMark)? userMark: 'X';
    let compMark = (userMark==='X')? 'O':'X';
    if (player==='user')return userMark;
    else return compMark;
}

function modalControl(currentElement){
    if(currentElement.id==='play-again') {
        resetBoard();
        $("#gameover-msg").css("display","none");
        startGame();
    } 
}

function startGame() {
    let userMark = getMarkerOf('user');
    $('.board .potential-mark').html(userMark);
    if ($('#start-btn').html()==='start'){
        for(let id=1;id<=9;id++){ 
            // allows spaces to be marked.
            $('#'+id).addClass('active');   
            $("#mark"+id).hover( function() { 
// allow every boardspace to be hovered upon to reveal potential chosen marker.
                $(this).css("transform", "rotateY(180deg)");
            }, function(){
                $(this).css("transform", "rotateY(0deg)");
            });
        }
        if (firstPlayer==='computer') computerChose(firstPlayer, board);
        $('#user-instruction').html('The game has started, you can now place your'
        +' marker.');
// Determines user instruction in case space is occupied or game hasn't started.
        startGame.called = true;
        // change to reset button
        $('#start-btn').html('reset');
    } else {
        resetBoard();
    } 
}
function resetBoard(){
// Make spaces empty & inactive. Remove Hover bindings.
    $(".board div div div").empty();
    for(let id=1;id<=9;id++){
        $("#mark"+id).unbind('mouseenter mouseleave');
        $("#"+id).removeClass("active");
    }
    let s= 0;
    for (let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length;j++){
            s++;
            board[i][j]=s;
        }
    }
    startGame.called = false;
    $('#start-btn').html('start');
    $('#user-instruction').html('After starting the game, you will be able to make'
    +' your first move.');
}

function makeUserMark(currentElement) { // takes id from element which refers to board space.
    let userMark = getMarkerOf('user');
    let elementId=currentElement.id;    //string 
    if ( $(currentElement).hasClass('active') ) {   
        // Make mark.
        $(currentElement).find(".space").html(userMark);
        // Don't allow to be remarked.
        $(currentElement).removeClass('active');
        // turns off hover function for all spaces whilst comp moves.
        $(".board").find(".mark").unbind('mouseenter mouseleave');  
        $(currentElement).find('.mark').css("transform", "rotateY(720deg)",
        "transition","all 0.2s ease");
        // Clears any prior instructions.
        $('#user-instruction').html("");
        updateBoard(elementId,'user',board);    
    } else if (startGame.called) {
         $("#user-instruction").html("Cannot move here, this space is already"
        +" occupied!");
    } else {
       $("#user-instruction").html("Game hasn't started yet.");
    }
}

function makeCompMark(move, board) { 
    let compMark = getMarkerOf('computer');
    // Make mark first
    $("#space"+move).html(compMark);
    $("#"+move).removeClass('active');
    for(let id=1;id<=9;id++){ 
        if ( $("#space"+id).html()=== '') {
// After mark is made, hover turns back on for empty spaces.
            $("#mark"+id).hover( function() {     
                    $(this).css("transform", "rotateY(180deg)");
                }, function(){
                    $(this).css("transform", "rotateY(0deg)");
                });
            }
        }
    // except for where the mark is made.
    $("#mark"+move).unbind('mouseenter mouseleave');  
    //update board array for computer's next move.
    updateBoard(move, 'computer', board);    
}

function flowControl(boardState, player) {
    let userMark = getMarkerOf('user');
    // determines winner message if winning state has been reached. 
    if ( winner(boardState) != "No winner"){
        if ( userMark===winner(boardState).substring(0,1) ){
            $("#gameover-msg").find(".modal-body").html("Congratulations, you win.");
            $("#gameover-msg").css("display","block");
        } else {
            $("#gameover-msg").find(".modal-body").html("Sorry, you lose.");
            $("#gameover-msg").css("display","block");
        }
    }
    else if (hasSpacesRemainingTwoD(boardState)) {
    //continue game --> change players.
        var nextPlayer = player === "computer" ? "user" : "computer";
    // No option for user, since makeUserMark is invoked by user clicking board-space.
        if (nextPlayer === "computer"){
            computerChose(nextPlayer, boardState);
        }
    } // draw
    else {
        $("#gameover-msg").find(".modal-body").html("It's a draw.");
        $("#gameover-msg").css("display","block");
    }
}

function updateBoard(move, player, board) {     // move is string
// coordinates of where the marker goes to be decided if 'O' or 'X'.
    var coordinates = [];
    switch (move) {
        case "1":
        coordinates = [0, 0]; 
        break;
        case "2":
        coordinates = [0, 1];
        break;
        case "3":
        coordinates = [0, 2];
        break;
        case "4":
        coordinates = [1, 0];
        break;
        case "5":
        coordinates = [1, 1];
        break;
        case "6":
        coordinates = [1, 2];
        break;
        case "7":
        coordinates = [2, 0];
        break;
        case "8":
        coordinates = [2, 1];
        break;
        case "9":
        coordinates = [2, 2];
        break;
    }
    if (player === "user") board[coordinates[0]][coordinates[1]] = getMarkerOf('user');
    else board[coordinates[0]][coordinates[1]] = getMarkerOf('computer');
    return flowControl(board, player);
}

function computerChose(player, boardState) {
  var bestMove = completeLine(boardState);
  // determines if there's a line to complete or not. Then if not it picks space w/ maximal line opportunities.
  bestMove = bestMove ? bestMove : maxMove(boardState); 
  // this move is then marked on board.
  makeCompMark(bestMove, boardState);
}

function containsNumberOf(element, array, number) {
  // determines whether line contains 3 'X's or 'O's, NOT for diagonals.
  let sameLine = [];
  let i;
  if (array) {
    i = array.indexOf(element);
    while (i != -1) {
      sameLine.push(i);
      i = array.indexOf(element, i + 1);
    }
    if (sameLine.length === number) return true;
  } else return false;
}

function copyBoard(boardState) {
  let copyBoardState = [[]];
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < boardState[i].length; j++) {
      copyBoardState[i] = boardState[i].slice();
    }
  }
  return copyBoardState;
}

function completeLine(board) {
    let compMark = getMarkerOf('computer');
// missing coordinates of marker required to complete line (defensively or 
// offensively)
    var coordLineGap = []; 
// Scan each row and column for two of same character on a line. MUST 
// include space as well!
    for (let i = 0; i < board.length; i++) {
        if (
        containsNumberOf("O", board[i], 2) &&
        hasSpacesRemainingOneD(board[i]) > -1
        ) {
            coordLineGap[0] = i;
            coordLineGap[1] = hasSpacesRemainingOneD(board[i]);
            
    // return winning line for computer marker when 'O'.
            if (getMarkerOf('computer')==='O'){
                return coordToMove(coordLineGap); 
            }
        } else if (
        containsNumberOf("X", board[i], 2) &&
        hasSpacesRemainingOneD(board[i]) > -1
        ) {
            coordLineGap[0] = i;
            coordLineGap[1] = hasSpacesRemainingOneD(board[i]);
            
    // return winning line for computer marker when 'X'.
            if (getMarkerOf('computer')==='X') {
                return coordToMove(coordLineGap);
            }
        }
    }
    // Transpose board to scan columns more easily.
    board = board[0].map((row, i) => board.map((row) => row[i])); 

    for (let j = 0; j < board.length; j++) {
        if (
            containsNumberOf("O", board[j], 2) &&
            hasSpacesRemainingOneD(board[j]) > -1
        ) {
            coordLineGap[0] = hasSpacesRemainingOneD(board[j]);
            coordLineGap[1] = j;
            
            if (getMarkerOf('computer')==='O') // if winning line
                return coordToMove(coordLineGap); 
        } else if (
            containsNumberOf("X", board[j], 2) &&
            hasSpacesRemainingOneD(board[j]) > -1
        ) {
            coordLineGap[0] = hasSpacesRemainingOneD(board[j]);
            coordLineGap[1] = j;
    
            if (getMarkerOf('computer')==='X') // if winning line
                return coordToMove(coordLineGap);
        }
    }
    //  Undo earlier board transposition.
    board = board[0].map((row, j) => board.map((col) => col[j])); 

    //scan diagonals
    let xCounter = 0;
    let oCounter = 0;
    let spaceCounter = 0;
    let m = 0;
    let n = 0;
    for (let k = 0; k < board.length; k++) {
        if (board[k][k] === "O") oCounter++;
        if (board[k][k] === "X") xCounter++;
        if (typeof board[k][k] === "number") {
        spaceCounter++;
        m = k;
        n = k;
        }
    }
    // Again searching for line containing 2 of same mark AND a space.
    if (spaceCounter === 1 && (oCounter === 2 || xCounter === 2)) {
        coordLineGap[0] = m;
        coordLineGap[1] = n;
    }
    xCounter = 0;
    oCounter = 0;
    spaceCounter = 0;

    for (let i = 0; i < board.length; i++) {
        let j = 2 - i;
        if (board[i][j] === "O") oCounter++;
        if (board[i][j] === "X") xCounter++;
        if (typeof board[i][j] === "number") {
        spaceCounter++;
        m = i;
        n = j;
        }
    }

    if (spaceCounter === 1 && (oCounter === 2 || xCounter === 2)) {
        coordLineGap[0] = m;
        coordLineGap[1] = n;
    }
    // If no conditions above are met then the empty coordinates array wouldn't have been filled. 
    // Therefore there is no line to be completed, yielding a false result.
    if (coordLineGap.length < 2) return false;
    // Line has been found with a space.
    else return coordToMove(coordLineGap);
}

function maxMove(board) {
  // Iterate through boardState array check available spaces and then check which available space has max output on strategyArray.
  let strategyArray = [
    [3, 2, 3],
    [2, 4, 2],
    [3, 2, 3],
  ];
  let max = 0;
  let move = 0;
  let maxMove = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      move++;
      if (board[i][j] != "X" && board[i][j] != "O") {
        if (strategyArray[i][j] > max) {
          // determine max strategy space
          max = strategyArray[i][j];
          maxMove = move;
        }
      }
    }
  }
  return maxMove.toString();
}

function hasSpacesRemainingTwoD(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] != "X" && board[i][j] != "O") {
        return true;
      }
    }
  }
  return false;
}
function hasSpacesRemainingOneD(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      return i;
    }
  }
  return -1;
}
function moveToCoord(move) {
    let coords = [];
    let mv=0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        mv++;
        if (mv === move) coords[0] === i && coords[1] === j;
    }
  }
  return coords;
}


function coordToMove(coords) {
  // takes coordinates in [i,j] form and converts them to string [1-9] move on 3X3 board.
  let move = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      move++;
      if (coords[0] === i && coords[1] === j) return move.toString();
    }
  }
  return move.toString();
}

function winner(boardState) {
    //let i = 0;
    let xCount = 0;
    let oCount = 0;
    let result = "";
    let xRowCoordinates = [];
    let xColCoordinates = [];
    let oRowCoordinates = [];
    let oColCoordinates = [];
    for (let i = 0; i < boardState.length; i++) {   // row
        for (let j = 0; j < boardState[i].length; j++) {    // col
            if (boardState[i][j] === "X") {
                xCount += 1;
                xRowCoordinates.push(i);
                xColCoordinates.push(j);
            } else if (boardState[i][j] === "O") {
                oCount += 1;
                oRowCoordinates.push(i);
                oColCoordinates.push(j);
            }
        }
    }

    if (
        containsNumberOf(0, xRowCoordinates, 3) ||
        containsNumberOf(1, xRowCoordinates, 3) ||
        containsNumberOf(2, xRowCoordinates, 3) ||
        containsNumberOf(0, xColCoordinates, 3) ||
        containsNumberOf(1, xColCoordinates, 3) ||
        containsNumberOf(2, xColCoordinates, 3) ||
        containsDiagonalThree(xRowCoordinates, xColCoordinates)
    ) {
        result = "X is winner!";
    } else if (
        containsNumberOf(0, oRowCoordinates, 3) ||
        containsNumberOf(1, oRowCoordinates, 3) ||
        containsNumberOf(2, oRowCoordinates, 3) ||
        containsNumberOf(0, oColCoordinates, 3) ||
        containsNumberOf(1, oColCoordinates, 3) ||
        containsNumberOf(2, oColCoordinates, 3) ||
        containsDiagonalThree(oRowCoordinates, oColCoordinates)
    ) {
        result = "O is winner!";
    } else result = "No winner";

    return result;
}

function containsDiagonalThree(array1, array2) {
    // top left to bottom right.
    let counter = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) counter++;
    }
    if (counter > 2) return true;
    // top right to bottom left.
    counter = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] + array2[i] === 2) counter++;
    }
    if (counter > 2) return true;
    return false;
}
