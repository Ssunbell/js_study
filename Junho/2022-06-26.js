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
