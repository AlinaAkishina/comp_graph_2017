function init() {
  console.info("initialized animation");
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  var balls = [{x: 50, y: 50, vx: 10, vy: 32, r = 15, color = "blue"}, {x: 60, y: 60, vx: 13, vy: 21, r = 30, color = "green"}];

  requestAnimationFrame(frame);
  var whenLastFrame = currentTime();
  
  function currentTime() { //текущее врем€ в миллисекундах
      //new Date() - текущее врем€.
	  //getTime() - сколько миллисекунд прошло с 1€нв1970
	  return new Date().getTime();
  }
  
  function frame() { 
      requestAnimationFrame(frame);
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  ctx.fillStyle = "rgba(123, 184, 223, 1)"; //заливка прямоугольника
	ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40); //заполненный прямоугольник
	
	for (var i = 0; i < balls.length; i++) {
		drawFrame(balls[i].x, balls[i].y, , balls[i].color);
	
		if (balls[i].x + balls[i].r >= canvas.width - 20) {
			balls[i].x = balls[i].x - 2 * (balls[i].x + balls[i].r - canvas.width + 20);
            balls[i].vx = balls[i].vx*(-1);
		}
	
		if (balls[i].x - balls[i].r <= 20)
			balls[i].vx = balls[i].vx*(-1);
		
        if (balls[i].y + balls[i].r >= canvas.height - 20) {
			balls[i].y = balls[i].y - 2 * (balls[i].y + balls[i].r - canvas.height + 20);
            balls[i].vy = balls[i].vy*(-1);
		}
		
		if (balls[i].y - balls[i].r <= 20) 
			balls[i].vy = balls[i].vy*(-1);
	
	
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		
		var now = currentTime(); //момент времени этого кадра
	  var passed = now - whenLastFrame; //прошло между кадрами
	  whenLastFrame = now;
	  balls[i].x = balls[i].x + passed * balls[i].vx / 1000;
	  balls[i].y = balls[i].y + passed * balls[i].vy / 1000;
	}
	
	/*
	  drawFrame();
	  var now = currentTime(); //момент времени этого кадра
	  var passed = now - whenLastFrame; //прошло между кадрами
	  whenLastFrame = now;
	  circleX = circleX + passed * circleVX / 1000;
	  circleY = circleY + passed * circleVY / 1000;
	  wall()
	  */
  }
  
  function wall() {
        
		
    }
  
  function drawFrame(x, y, r, color) {  
	  ctx.beginPath();
	  ctx.arc(x, y, r, 0, 2 * Math.PI);
	  ctx.fillStyle = "rgba(0, 255, 120, 1)";
	  ctx.fill();
	  ctx.strokeStyle = "green";
	  ctx.stroke();
  }
}