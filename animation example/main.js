function init() {
  console.info("initialized animation");
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  
  /* ВАРИАНТ 1
  circleX = 100;
  circleY = 100;
  
  //setInterval(frame, 1000 / 60);
  requestAnimationFrame(frame);
  
  function frame() {
  requestAnimationFrame(frame);
  ctx.clearRect(0,0, canvas.width, canvas.height);
  //рисуем круг в координатах 100, 100
  ctx.beginPath();
  ctx.arc(circleX, circleY, 10,0,2*Math.PI);
  ctx.fillStyle = "rgba(223, 71, 178, 0.5)";
  ctx.fill();
  ctx.strokeStyle = "rgba(123, 56, 224, 1)";
  ctx.stroke();
  
  circleX += 1; // изменения параметра какого-то, чтобы сдвиг
  }
  
  */
  
  circleX = 100;
  circleY = 100;
  circleVX = 20; //скорость шарика по Х
  circleVY = 10; //скорость шарика по Y
  
  //setInterval(frame, 1000 / 60);
  requestAnimationFrame(frame);
  
  function currentTime() {//текущее время в миллисекнудах
	  //newDate() - текущее время
	  //getTime() - сколько миллисекунд прошло с 1янв1970
	  return new Date().getTime();
  }
  
  return whenLastFrame = currentTime();
  
  function frame() {
	  requestAnimationFrame(frame);
	  ctx.clearRect(0,0, canvas.width, canvas.height);

	  drawFrame();
	  //1) Простая анимация, не зависит от времени
	  //circleX += 1; // изменения параметра
	  //2) как учитывать реальное время между кадрами
	  
	  var now = currentTime(); //момент времени этого кадра
	  var passed = now - whenLastFrame; //прошло между кадрами
	  whenLastFrame = now;
	  //circleX = circleX + passed * 20 / 1000;  //за 1000 миллисекунд сдвиг будет 20
	  circleX = circleX + passed * circleVX / 1000;
	  circleY = circleY + passed * circleVY / 1000;
  }
  
  function drawFrame() {
	  //рисуем круг в координатах 100, 100
	  ctx.beginPath();
	  ctx.arc(circleX, circleY, 10, 0, 2 * Math.PI);
	  ctx.fillStyle = "rgba(0, 255, 120, 0.5)";
	  ctx.fill();
	  ctx.strokeStyle = "green";
	  ctx.stroke();
  }
}

//нужно нарисовать прямоугольник, шарик летает