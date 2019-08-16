function range(n, m, k = 1){
    let array = [];
    if(m && m > 0 && m > n){
        for(let i = n; i < m; i+=k){
            array.push(i);
        }
    }else{
        for(let i = 0; i < n; i++){
            array.push(i);
        }
    }

    console.log(array);
}

console.log('Значение 5');
range(5);
console.log('____________________\n\n');

console.log('Значения 5, 8');
range(5, 8);
console.log('____________________\n\n');

console.log('Значения 5, 12, 2');
range(5, 12, 2);
console.log('____________________\n\n');
