$(function () {
    $('[data-toggle="popover"]').popover()
  })

let colors= ["#227CF2","#2793F2","#165FF2"];

let gridColors = document.querySelectorAll(".mainGrid");


for(let i=0; i <= gridColors.length; i++){
	let random = Math.floor( Math.random() * Math.floor(2));
	gridColors[i].style.backgroundColor = colors[random];
	console.log(i);
}