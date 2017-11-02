function init() {
  console.info("initialized animation");
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  
  circleX = 50; //откуда начинать
  circleY = 50; //откуда начинать
  circleVX = 150; // скорость шарика по X
  circleVY = 150; // скорость шарика по Y 
  r = 15; //радиус шарика
  
  
  requestAnimationFrame(frame);
  var whenLastFrame = currentTime();
  
  function currentTime() { //текущее врем¤ в миллисекундах
      //new Date() - текущее врем¤.
	  //getTime() - сколько миллисекунд прошло с 1¤нв1970
	  return new Date().getTime();
  }
  
  function frame() { 
      requestAnimationFrame(frame);
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  drawFrame();
	  var now = currentTime(); //момент времени этого кадра
	  var passed = now - whenLastFrame; //прошло между кадрами
	  whenLastFrame = now;
	  circleX = circleX + passed * circleVX / 1000;
	  circleY = circleY + passed * circleVY / 1000;
	  wall()
  }
  
  function wall() {
        if (circleX + r >= canvas.width - 20) {
			circleX = circleX - 2 * (circleX + r - canvas.width + 20);
            circleVX = circleVX*(-1);
		}
	
		if (circleX - r <= 20)
			circleVX = circleVX*(-1);
		
        if (circleY + r >= canvas.height - 20) {
			circleY = circleY - 2 * (circleY + r - canvas.height + 20);
            circleVY = circleVY*(-1);
		}
		
		if (circleY - r <= 20) 
			circleVY = circleVY*(-1);
		
    }
  
  function drawFrame() {
	  ctx.fillStyle = "rgba(123, 184, 223, 1)"; //заливка прямоугольника
	ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40); //заполненный прямоугольник
	  ctx.beginPath();
	  ctx.arc(circleX, circleY, r, 0, 2 * Math.PI);
	  ctx.fillStyle = "rgba(0, 255, 120, 1)";
	  ctx.fill();
	  ctx.strokeStyle = "green";
	  ctx.stroke();
  }
}





