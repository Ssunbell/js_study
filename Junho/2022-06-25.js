function show_detail(){
    document.querySelector('#desc').style.display = 'block';
    document.querySelector('#open').style.display = 'none';

}

function hide_detail(){
    document.querySelector('#desc').style.display = 'none';
    document.querySelector('#open').style.display = 'block';

}

var cover_image = document.querySelector('#cover')
cover_image.onclick = function(){
    alert('click')
}

cover_image.onmouseover = function(){
    cover_image.style.border = '5px black solid'
}

cover_image.onmouseout = function(){
    cover_image.style.border=''
}

function check_function01(){
    var book = {
        title : 'javascript',
        author : 'jjh',
        pages : 500,
        price : 50000,
        info : function(){
            alert(this.title+this.author)
        }

    }
    document.write(book['title'])

    var copy_book = book
    document.write(copy_book['title'])
    book.info()
}

function check_function02(){
    var now = new Date()
    console.log(now)
    console.log(now.toLocaleString)
    console.log(Math.random())
}
