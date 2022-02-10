"use strict";

const model = ['4', '32', '20', '4', '32', '0', '1', '22', '20', '8', '12', '28', '5', '2', '6', '18', '5', '2', '7', '29', '5', '2', '30', '3', '9', '10', '13', '15', '2', '30', '25', '12', '31', '8', '1', '30', '23', '5', '2', '17']
console.log(model);
let speed= 500;

window.addEventListener("load",init);

function init(){
    setTimeout(loop,speed);
  
 
}
function loop(){
    displayData();
    modifyModel();
    
}


function getNumberOfCustomers(){
    return Math.floor(Math.random()*32);
}

function displayData(){
    
 let bars = document.querySelectorAll(".bar");
 let height;


for( let i=0; i < 40; i++){
height= model[i];
bars[i].style.height= height +"%";   
}

init();
}


function modifyModel(){

const queueSize = getNumberOfCustomers();

model.unshift(queueSize);
model.length=40;
    
console.log(model);
}




