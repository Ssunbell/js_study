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