var Links = {
    setColor:function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i += 1;
        // }
        $('a').css('colors',color);
    }
}
var Body = {
    SetColor:function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('colors', color);
    },
    SetBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night'){
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        self.value = 'day';
        Links.setColor('powderblue');

    } else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value = 'night';
        Links.setColor('blue');
        }
    }