/**
 * @name Snake Plugin
 * @authorId 262613777357209601
 * @source https://github.com/YukiGasai/BetterDiscord/blob/master/plugins/Background.plugin.js
 */
module.exports = class Snake {
	constructor () {}

	getName () {return "Snake";}

	getDescription () {return "Ctrl S starts a game of Snake";}

	getVersion () {return "1.2.0";}

	getAuthor () {return "L7YukiGasai";}
	
	//legacy
	load(){}
	
	start(){
		

	var Highscore = BdApi.loadData("Snake","HighScore");
	if(Highscore == undefined)BdApi.saveData("Snake","HighScore", 0);
	Highscore = BdApi.loadData("Snake","HighScore");
		

	var canvas = document.createElement('canvas');

		canvas.id = "CursorLayer";
		canvas.width  = 0; 
		canvas.height = 0; 
		canvas.style.zIndex = 3;
		canvas.style.position = "absolute";
		canvas.style.border = "1px solid";
		canvas.style.top = 0;
		canvas.style.left = 0;


		var body = document.getElementsByTagName("body")[0];
		body.appendChild(canvas);

		var cursorLayer = document.getElementById("CursorLayer");

		var ctx = canvas.getContext("2d");

		var  box = document.getElementsByClassName("name-3YKhmS");
	
		// SNAKE
		var Overallspeed = 500;
		var Speed = 500;
		var Game = false;
		var Pause = false;
		var grid = 32;
		var wait = 0;
		var Versuch = 0;
		var snake = {
		  x: 320,
		  y: 320,
		  dx: grid,
		  dy: 0,
		  cells: [],
		  maxCells: 1
		};

		var apple = {
		  x: 320,
		  y: 320
		};
		
		
		var inter = setInterval(update,snake.Speed);
	
	
		function restart(){
			if(snake.maxCells > Highscore)
			{	
				Highscore = snake.maxCells;
				BdApi.saveData("Snake","HighScore", Highscore);
			}
			
			snake.x = 160;
			snake.y = 160;
			Overallspeed = 500;
			snake.Speed = 500;
			snake.cells = [];
			snake.maxCells = 1;
			snake.dx = grid;
			snake.dy = 0;
			box[0].innerHTML = 'HS: '+ Highscore  + "\t CS: "+ snake.maxCells + '';
			
			newApple();
		}

		restart();


		document.addEventListener('keydown', function(e) {
		  if (e.which === 37 && snake.dx === 0) {
			snake.dx = -grid;
			snake.dy = 0;
		  }
		  else if (e.which === 38 && snake.dy === 0) {
			snake.dy = -grid;
			snake.dx = 0;
		  }
		  else if (e.which === 39 && snake.dx === 0) {
			snake.dx = grid;
			snake.dy = 0;
		  }
		  else if (e.which === 40 && snake.dy === 0) {
			snake.dy = grid;
			snake.dx = 0;
		  }
		  if(e.ctrlKey && e.keyCode == 83){ 
				if(Game==true ){
					Game=false; 
					canvas.width = 0; 
					canvas.height = 0;				
				}else{
					Game=true;
					Pause=false;
					canvas.style.zIndex = 3;
					clearInterval(inter);
					inter = setInterval(update,200);
						
				} 
					
			}
		  if((event.keyCode == 32) && (Game == true)){  
			if(Pause==true){
				Pause=false;
					canvas.style.zIndex = 3;
					clearInterval(inter);
				inter = setInterval(update,Overallspeed);
			}else{
				Pause=true;
					canvas.style.zIndex = -1;
				
				clearInterval(inter);
				inter = setInterval(update,999999999);
		  }
		
		  }
		});

		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		}
		// game loop	

		function newApple(){
			if( Game == true){
			  apple.x = getRandomInt(0, 60) * grid;
			  apple.y = getRandomInt(0, 30) * grid;
			 
			 // apple.x =	snake.x;
			//  apple.y = snake.y;
		
			  if(apple.x> canvas.width-grid)newApple();
			  if(apple.y> canvas.height-grid)newApple();
			  
			}
			
		}

		function update(){
		if( wait < 1){	wait = wait + 1; }else{

			
			if(Game==true){	
				canvas.width =$(window).width(); 
				canvas.height = $(window).height();


		  ctx.clearRect(0,0,canvas.width,canvas.height);
		  snake.x += snake.dx;
		  snake.y += snake.dy;
		  
		 
		  
		  if (snake.x < 0) {
		   restart();
		  }
		  else if (snake.x >= canvas.width) {
		   restart();
		  }
		  if (snake.y < 0) {
		  restart();
		  }
		  else if (snake.y >= canvas.height) {
		   restart();
		  }

		  snake.cells.unshift({x: snake.x, y: snake.y});

		  if (snake.cells.length > snake.maxCells) {
			snake.cells.pop();
		  }
		  
		  ctx.fillStyle = 'red';
		  ctx.fillRect(apple.x, apple.y, grid-1, grid-1);
		  // draw snake
		  ctx.fillStyle = 'green';
		  snake.cells.forEach(function(cell, index) {
			ctx.fillRect(cell.x, cell.y, grid-1, grid-1);
			// snake ate apple
			if (cell.x === apple.x && cell.y === apple.y) {
			  snake.maxCells++;
				newApple();
				Overallspeed = Speed-28.284271*Math.sqrt(snake.cells.length)*5;
				clearInterval(inter);
				inter = setInterval(update,Overallspeed);
	
				box[0].innerHTML = 'HS: '+ Highscore  + "\t CS: "+ snake.maxCells + '';
			}
			// check collision with all cells after this one (modified bubble sort)
			for (var i = index + 1; i < snake.cells.length; i++) {
			  
			  // collision. reset game
			  if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
			   restart();
			  }
			}
		  });
		}
		}
		}
	}
	
	
	initialize(){}
	
	stop(){}
	
	
	
}