$(function () {
    $('[data-toggle="popover"]').popover();
	
  })

let colors= ["#896A67","#EAC435","#03CEA4","#3066BE","#FF858D","#2CA58D","#447604","#6CC551","#52AD9C","#F87060","#EE4266","#3F88C5"];

let gridColors = document.querySelectorAll(".mainGrid");
let limitApiText = document.querySelectorAll(".apiText");
let limitApiHeader = document.querySelectorAll(".apiHeader");
let current = 0;
let random = 0;
let count = [];



for(let i=0; i < gridColors.length; i++){
	while(current === random){
	 random = Math.floor( Math.random() * Math.floor(11));
		}
	gridColors[i].style.backgroundColor = colors[random];
	current = random;
	count = random;
	
}

window.addEventListener('resize', function(event){
	if(innerWidth < 1100){
		
		limitApiHeader.forEach(function(header){
			header.style.fontSize = "18px";
		})
		limitApiText.forEach(function(teyt){
			teyt.style.fontSize = "16px";
		})
	} else{
		limitApiHeader.forEach(function(header){
			header.style.fontSize = "1.3vw";
		})
		limitApiText.forEach(function(teyt){
			teyt.style.fontSize = "1.2vw";
		})
	}
});

