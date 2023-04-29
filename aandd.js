/*function createSequentialNumbers(array, n){
    for(var j=0; j<n; j++){
        array.push(j+1);
    }
}*/

function createRandomNumbers(array,n){
    for(var k=0; k<n; k++){
        var x = Math.floor(Math.random()*10+1);
        array.push(x);
    }
}