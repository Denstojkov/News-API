$(function () {
    $('[data-toggle="popover"]').popover()
  })

let colors= ["#E01A4F","#F15946","#F9C22E"];

let gridColors = document.querySelectorAll(".mainGrid");
let current = 0;
let random = 0;

for(let i=0; i <= gridColors.length; i++){
	while(current === random){
	 random = Math.floor( Math.random() * Math.floor(3));
		}
	gridColors[i].style.backgroundColor = colors[random];
	current = random;
	console.log(i);
}