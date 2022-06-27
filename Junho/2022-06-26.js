function check_function01(){
    var toyRobot = {  // toyRobot 객체를 선언한 후 프로퍼티와 메서드 정의
        productId: "123-12",
        name: "Robot",
        price : "25,000",
        madeIn : "Korea",
        quantity: 10,
        showStock : function() {  // showStock( ) 메서드 정의
            document.querySelector('#disp').innerHTML = this.name + " is remained " + this.quantity;
        }
        ,
        showPrice : function() {
        	alert(this.name + " product price is " + this.price);
        }
    };
    
    toyRobot.showStock();
    toyRobot.showPrice();
}

function book(author,pages,price,title){
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.title = title;
}

// var jsbook = new book('jjh',200,50000,'js')
// var python = new book('kim',200,100000,'do_it')
// var book_list = [jsbook,python]

// document.write('<h1>책 제목</h1>')
// for(let i=0; i<book_list.length; i++){
//     document.write('<p>'+book_list[i].title+'</p>')
// }

var temp = new Date('2022-06-20T10:59:59')

var now = new Date()
// now.getTime() // 1910.01.01 00:00 기준 시간흐름

var first_day = new Date('2022-01-01');

var passed = now.getTime() - first_day.getTime();
var passed_day = Math.round(passed/(1000*60*60*24))

document.querySelector('#accent').innerHTML = passed_day + '<span style="font-size:2em">일</span>'

function later(day){
    var future = first_day.getTime() + day*(1000*60*60*24) // now가 수정됨.
    var someday = new Date(future)
    document.getElementById('date'+day).innerHTML = 
    someday.getFullYear() + '년' + someday.getMonth() + '월' + someday.getDay() + '일'
}
// var day100 = later(100)
// var day200 = later(200)
// var day365 = later(365)
// var day500 = later(500)
// document.getElementById('date100').innerHTML = 
// day100.getFullYear() + '-' + day100.getMonth() + '-' + day100.getDay()

// document.getElementById('date200').innerHTML = 
// day200.getFullYear() + '-' + day200.getMonth() + '-' + day200.getDay()

// document.getElementById('date365').innerHTML = 
// day365.getFullYear() + '-' + day365.getMonth() + '-' + day365.getDay()

// document.getElementById('date500').innerHTML = 
// day500.getFullYear() + '-' + day500.getMonth() + '-' + day500.getDay()
later(100)
later(200)
later(365)
later(500)