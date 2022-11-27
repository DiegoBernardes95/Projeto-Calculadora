function insert(num){
    const paragraph = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = paragraph + num;
}
function limpar(){
    document.querySelector('#result').innerHTML = '';
}
function del(){
    const result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = result.substring(0, result.length -1);
}
function calc(){
    const result = document.querySelector('#result').innerHTML;
    if(result){
        document.querySelector('#result').innerHTML = eval(result);
    } else{
        document.querySelector('#result').innerHTML = 'Nada para calcular!'
    }
}
