function init() {
  console.info("initialized"); //console.log,info,error,warn,debug
  
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d'); //контекст - это объект, с помощью которого происходит рисование. Мы изучаем только 2d контекст
 
  ctx.fillStyle = "rgba(182, 230, 82, 0.5)";
  ctx.fillRect(5,5, 400, 250); //заполненный прямоугольник
  
  circleX = 5;
  circleY = 5;
  circleVX = 50; //скорость шарика по Х
  circleVY = 50; //скорость шарика по Y
  
  requestAnimationFrame(frame);
  
  function currentTime() {//текущее время в миллисекнудах
	  //newDate() - текущее время
	  //getTime() - сколько миллисекунд прошло с 1янв1970
	  return new Date().getTime();
  }
  
  return whenLastFrame = currentTime();
  
  function drawFrame() {
	  //рисуем круг в координатах
	  ctx.beginPath();
	  ctx.arc(circleX, circleY, 10, 0, 2 * Math.PI);
	  ctx.fillStyle = "rgba(0, 255, 120, 0.5)";
	  ctx.fill();
	  ctx.strokeStyle = "green";
	  ctx.stroke();
  }
  
  function frame() {
	  requestAnimationFrame(frame);
	  ctx.clearRect(0,0, canvas.width, canvas.height);

	  drawFrame();
 	  var now = currentTime(); //момент времени этого кадра
	  var passed = now - whenLastFrame; //прошло между кадрами
	  whenLastFrame = now;
	  
	  do {
	  circleX = circleX + passed * circleVX / 1000;
	  circleY = circleY + passed * circleVY / 1000;
	  } until
	  
	  
  }
 

}