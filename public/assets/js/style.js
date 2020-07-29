$(function () {
    $('[data-toggle="popover"]').popover()
  })

let colors= ["#D45113","#F9A03F","#6B7D7D"];

let gridColors = document.querySelectorAll(".mainGrid");


for(let i=0; i <= gridColors.length; i++){
	let random = Math.floor( Math.random() * Math.floor(2));
	gridColors[i].style.backgroundColor = colors[random];
	console.log(i);
}