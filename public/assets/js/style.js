$(function () {
    $('[data-toggle="popover"]').popover()
  })

let colors= ["#896A67","#EAC435","#03CEA4","#3066BE","#FF858D","#2CA58D","#447604","#6CC551","#52AD9C","#F87060","#EE4266","#3F88C5"];

let gridColors = document.querySelectorAll(".mainGrid");
let limitApiText = document.querySelectorAll(".apiText");
let limitApiHeader = document.querySelectorAll(".apiHeader");
let current = 0;
let random = 0;



for(let i=0; i < gridColors.length; i++){
	while(current === random){
	 random = Math.floor( Math.random() * Math.floor(11));
		}
	gridColors[i].style.backgroundColor = colors[random];
	current = random;
	
	
}


for(let i=0; i < limitApiText.length; i++){
limitApiText[i].innerText.replace(/^(.{11}[^\s]*).*/, "$1"); 
limitApiHeader[i].innerText.replace(/^(.{11}[^\s]*).*/, "$1"); 
}