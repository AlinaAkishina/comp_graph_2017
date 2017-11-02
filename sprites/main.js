function init() {
  console.info("sprites");
  
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  
  balls_image = document.getElementById("balls");

  requestAnimationFrame(draw_frame);
  //время момента начала программы
  var program_start_time = new Date().getTime();
  var FRAMES_PER_SECONS /*FPS*/ = 15;
  var BALL_SPRITE = {
	  x0: 6, y0: 100, //координаты на картинке
	                 //первого кадра
	  w: 50, h: 50, //размеры кадра
	  num: 10   //всего кадров
  };
  
  function draw_frame() {
	  requestAnimationFrame(draw_frame);
	  
	  //определим текущий кадр
	  var current_time = new Date().getTime();
	  var time_from_start = current_time - program_start_time;
	  var frame = Math.round(
	    time_from_start / 1000 * FRAMES_PER_SECONS
	  );
	  
	  //рисуем один кадр, в нашем случае -
	  //рисуем один кадр с мячиком
	  
	  var sprite_x = BALL_SPRITE.x0 +
	      BALL_SPRITE.w * (frame % BALL_SPRITE.num);
	  ctx.drawImage(
	    balls_image,
		sprite_x, BALL_SPRITE.y0, //координаты на картинке
		BALL_SPRITE.w, BALL_SPRITE.h, //размеры на картинке
        
		123, 123, //где рисовать на canvas
		BALL_SPRITE.w, BALL_SPRITE.h //размер рисования на canvas
	  );
  }
  
  function drawBall(i) { 
    var sprite_x = BALL_SPRITE.x0 + (BALL_SPRITE.w + BALL_SPRITE.x0) * (frameNumber % BALL_SPRITE.num); 

    ctx.drawImage( 
    balls_image, 
    sprite_x, BALL_SPRITE.y0,// координаты 
    BALL_SPRITE.w, BALL_SPRITE.h,//размер 
    balls[i].x-balls[i].r,balls[i].y-balls[i].r,//где рисовать 
    2*balls[i].r,2*balls[i].r 
  );
  
  //Заливка по шаблону
  var pattern = ctx.createPattern(
	  document.getElementById("pattern"),
	  "repeat", //repeat-x, repeat-y, no-repeat
  );
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0, canvas.width, canvas.height);
  
  //линейный градиент
  var gradient = ctx.createLinearGradient(
	0, 0, //начало градиента
	canvas.width, canvas.height //конец градиента
  );
  
  gradient.addColorStop(0, '#157832');
  gradient.addColorStop(0.5, '#006688');
  gradient.addColorStop(1, 'blue');
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0, canvas.width, canvas.height);
  
  
  
  }
  }