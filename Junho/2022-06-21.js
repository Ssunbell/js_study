var user = prompt('name?')
if (user != null){
    console.log(user)
}
else {
    alert('no name')
}


function check_function01(){
    var sum = 0
    for(let i=1; i<6; i++){
        sum += i;
    }
    document.write('ans:',sum)
}

function check_function02(){
    let seasons = ['spring','summer']
    for(let season of seasons){
        console.log(season)
    }
}

function check_function03(){
    for(let k=0; k<5; k++){
        for(let i=0; i<30; i++){
            console.log('*')
        }
        console.log('</br>')
    }
}

function check_function04(a,b){
    var sum = a+b;
    console.log(sum)
}