

### ⭐WEEK2 자바스크립트 스터디⭐



참고자료 

- [생활코딩_자바스크립트 입문]

  https://www.youtube.com/playlist?list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU

  https://opentutorials.org/module/532

  

#### 1. 객체 

-  데이터가 추가되면 배열 전체에서 중복되지 않는 인덱스가 자동으로 만들어져서 추가된 데이터에 대한 식별자가 됨, 인덱스를 이용해서 데이터를 가져옴
-  *인덱스로 문자를 사용하고 싶다면 객체(dictionary)를 사용*

##### 객체의 생성

1. 객체를 만드는 방법 

   ```javascript
   var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
   /// 위의 예제에서 egoing은 key가 되고, 10은 value
   
   
   var grades = {};
   grades['egoing'] = 10;
   grades['k8805'] = 6;
   grades['sorialgi'] = 80;
   
   var grades = new Object();
   grades['egoing'] = 10;
   grades['k8805'] = 6;
   grades['sorialgi'] = 80;
   ```

   

#### 2. 모듈의 사용 

- JavaScript와 HTML은 완전히 다른 문법을 가진 언어. 
- 그런데 HTML 문서 안에는 JavaScript와 HTML이 동시에 표현됨. 따라서 브라우저에게 어디서부터 어디까지가 JavaScript이고, HTML인지를 구분해서 알려줘야 한다. 
- 이 역할을 하는 HTML 태그가 script 태그다. script 태그 안쪽에 위치하는 컨텐츠는 브라우저에 의해서 JavaScript로 인식된다. 브라우저는 src 속성에 있는 파일을 다운로드해서 실행시킨다. greeting.js에는 함수 welcome가 정의되어 있기 때문에 main.html 안에 이 함수가 정의 되어 있지 않음에도 실행할 수 있는 것이다.

```javascript
///greeting.js

function welcome(){
    return 'Hello world';
}
```

```javascript
///main.html

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="greeting.js"></script>
</head>
<body>
    <script>
        alert(welcome());
    </script>
</body>
</html>
```



#### 3. 정규표현식

##### 1. 컴파일

- 컴파일은 검풀하고자 하는 패턴을 만드는 일

```javascript
var pattern = /a/ ///정규표현식 리터럴 

var pattern = new RegExp /// 정규표현식 객체 생성자 
```

##### 2. 정규표현식 메소드 실행 

```javascript
RegExp.exec()

console.log(pattern.exec('abcdef')); // 실행결과는 문자열 a를 값으로 하는 배열을 리턴
console.log(pattern.exec('bcdefg')); // null, 인자 'bcdef'에는 a가 없기 때문에 null을 리턴
```

```javascript
RegExp.test()

console.log(pattern.test('abcdef')); // true
cnosole.log(pattern.test('bcdefg')); // false
```

```javascript
String.match()

console.log('abcdef'.match(pattern)); // ["a"]
console.log('bcdefg'.match(pattern)); // null


String.replace()
console.log('abcdef'.replace(pattern, 'A'));  // Abcdef
///문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴
```

#### 4. 옵션

- 정규표현식 패턴을 만들 때 옵션을 설정할 수 있다. 
- 옵션에 따라서 검출되는 데이터가 달라진다.



##### i

- i를 붙이면 대소문자를 구분하지 않는다 

  ```javascript
  var xi = /a/;
  console.log("Abcde".match(xi)); // null
  var oi = /a/i;
  console.log("Abcde".match(oi)); // ["A"];
  ```

  


##### g

-  g를 붙이면 검색된 모든 결과를 리턴한다

```javascript
var xg = /a/;
console.log("abcdea".match(xg));
var og = /a/g;
console.log("abcdea".match(og));
```



#### 5. 유효범위

- 유효범위 (scope)는 변수의 수명을 의미한다. 

  ```javascript
  var vscope ='global';
  function fscope(){
  	alert(vscope);
  }
  fscope(); //결과: global
  ```

- 함수 밖에서 변수를 선언하면 그 변수는 전역변수가 된다. 

- 전역변수는 애플리케이션 전역에서 접근이 가능한 변수이다. (어떤 함수 안에서도 그 변수에 접근 할 수 있다.)

- 전역변수는 사용하지 않는 것이 좋다. 여러가지 이유로 그 값이 변경될 수 있기 때문이다. 

- 함수 안에서 전역변수를 사용하고 있는데, 누군가에 의해서 전역변수의 값이 달라졌다면 어떻게 될까? 함수의 동작도 달라지게 된다. 이것은 버그의 원인이 된다. 또한 함수를 다른 에플리케이션에 이식하는데도 어려움을 초래한다. 함수의 핵심은 로직의 재활용이라는 점을 상기하자. 변수를 선언할 때는 꼭 var을 붙이는 것을 습관화해야 한다. 

  ```javascript
  ///지역 변수의 사용 
  function a (){
      var i = 0;
  }
  for(var i = 0; i < 5; i++){
      a();
      document.write(i);
  }j
  ///실행결과: 01234
  ```

  ```javascript
  /// 전역 변수의 사용
  function a (){
      i = 0;
  }
  for(i = 0; i < 5; i++){
      a();j
      document.write(i);
  }
  /// 실행결과: 무한반복을 발생시킨다
  ```

  