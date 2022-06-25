function addNumber(a,b){
    var a = Number(prompt('첫번쨰 숫자?'))
    var b = Number(prompt('두번쨰 숫자?'))

    var sum = a+b;
    alert(sum)
}

function check_function01(){
    let sum = 0
    for(let i=1; i<6; i++){
        sum += i;
    }
    console.log(sum)
}

function check_function02(a,b){
    var a = parseInt(prompt('첫번쨰 숫자?'))
    var b = parseInt(prompt('두번쨰 숫자?'))

    var sum = a+b;
    alert(sum)
}
