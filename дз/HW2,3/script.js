
function bottleSong(bottles = 5) {
  while (bottles > 0) {
  console.log(`${bottles} ` + `бутылок пива на стене`);
  console.log(`${bottles} ` + `бутылок пива!`);
  bottles--;
    if (bottles > 0) {
    console.log("Возьми одну, пусти по кругу");
    console.log("");
    console.log("");
    console.log("");
    } else{
    console.log("Возьми ее пусти по кругу!");
    console.log("Ну вот и все!")
    };
  };
};


var a = [];
function range(n, m, k){
  if (m == undefined || k == undefined && m < n) {
    for (let i = 0; i < n; i++){
      a.push(i);
    };
  } else if (k == undefined){
    for (let i = n; i < m; i++){
      a.push(i);
    };
  } else {
    for(let i = n; i < m; i++){
      if(i % k !== 0){ 
        a.push(i);
      };
    };
  }; 
};
range(5, 12, 2);
console.log(a);
