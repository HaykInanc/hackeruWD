let caruselElem = document.querySelector('.carusel');
let caruselListElem = document.querySelector('.carusel ul');
let caruselListArr = document.querySelectorAll('.carusel li');
let width = caruselElem.offsetWidth;
let height = caruselElem.offsetHeight;
let slideCnt = caruselListArr.length;

let slideNumber = 0;
/*caruselListElem.style.left = -slideNumber*width+'px';*/

for(let i=0; i<slideCnt; i++){
  caruselListArr[i].style.width  = width + 'px';
  caruselListArr[i].style.height = height + 'px';
}

function goLeft(){
  slideNumber--;
  caruselListElem.style.left = -slideNumber*width+'px';
  console.log(`sliderNumber: ${slideNumber}`);
}

function goRight(){
  slideNumber++;
  caruselListElem.style.left = -slideNumber*width+'px';
  console.log(`sliderNumber: ${slideNumber}`);
}