//1

var first = document.querySelector('.stop');

function handler(e){
  var elem = document.querySelector('.main');
      elem.className = "timer";

e.preventDefault();

	
var elem3 = document.querySelector('.stop');
      elem3.className = "clock";
	  elem3.innerHTML = '00:00:00';
	
	
var elem4 = document.querySelector('.middle');
      elem4.className = "pause";
	  elem4.innerHTML = '<a class="af" href="#">Start';
	
	
var elem5 = document.querySelector('.count');
      elem5.className = "clear";
	  elem5.innerHTML = '<a class="af2" href="#">Clear';


 var elem6 = document.querySelector('.green');
	  elem6.style.visibility= "visible";
	
}


first.addEventListener('click', handler);

//2

var back = document.querySelector('.green');


function handlerGreen(e){
	e.preventDefault();
 var elemGreen = document.querySelector('.green');
	  elemGreen.style.visibility= "hidden";

 var elemGreen2 = document.querySelector('.timer');
      elemGreen2.className = "main";
	
 var elemGreen3 = document.querySelector('.clock');
      elemGreen3.className = "stop";
	  elemGreen3.innerHTML = '<a href="#">Stop Watch';
	
 var elemGreen4 = document.querySelector('.pause');
      elemGreen4.className = "middle";
	  elemGreen4.innerHTML = '';
	
 var elemGreen5 = document.querySelector('.clear');
      elemGreen5.className = "count";
	  elemGreen5.innerHTML = '<a href="#">Count Down';
}

back.addEventListener('click',handlerGreen);



