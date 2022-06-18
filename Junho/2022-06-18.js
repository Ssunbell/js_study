// var name = prompt('이름?');
// var name = '';
document.write("<big><b>",name,"</big></b>");

var apple = 'yummy';
var banana;

banana = 'long and yummy \n'

document.write(apple,"</br>");
document.write(banana.replace('\n',"<br>"));
document.write(apple,"</br>");


function calculator(){
    var year = 2022;
    var birth = 2002;
    var age;
    age = year - birth + 1; 
    
    return age
}

document.write(calculator())

var seasons = ['spring','summer']
document.write(seasons[0])

if(1==2){
    document.write('\nhi\n'.replace('\n',"<br>"))
}
else{
    document.write('\nhi?\n'.replace('\n',"<br>"))
}


function insert_number(){
    var num = prompt('숫자를 입력하세요;;')
    if(num < 5){
        document.write('\n',num,'은/는 5보다 작습니다.\n'.replace('\n',"<br>"))
    }
    else{
        document.write('\n',num,'은/는 5보다 큽니다.\n'.replace('\n',"<br>"))
    }
}

function null_test(){
    var sample = prompt('null?')
    if(sample == null){
        document.write('yes it is null')
        alert('select cancle.')
    }
    else if(sample == ''){
        document.write('no it is blank')
    }
    else{
        document.write('hi?',sample)
    }
}