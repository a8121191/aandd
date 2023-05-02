function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

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