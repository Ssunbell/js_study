

### ⭐WEEK1 자바스크립트 스터디⭐



참고자료 

- [생활코딩_자바스크립트 입문]

  https://www.youtube.com/playlist?list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU

  https://opentutorials.org/module/532

- 6/21 기준 42강까지 수강 완료 (전체 강의 102개)



#### 0. 실행 환경 

- 자바스크립트는 원래 웹브라우저에서 HTML, CSS를 동적으로 제어하기 위해서 만들어진 언어

  a. 웹페이지에서 자바스크립트 작성 

  b. 크롬 개발자 도구 사용 

  

####  1. 숫자와 문자 



- 자바스크립트에서는 큰따옴표나 작은따옴표가 붙지 않은 숫자는 숫자로 인식한다

  ```javascript
  alert(1+1);
  #결과 2
  ```

- 문자는 "(큰 따옴표) 혹은 '(작은 따옴표) 중의 하나로 감싸야 한다. 

  큰 따옴표로 시작하면 큰 따옴표로 끝나야하고, 작은 따옴표로 시작하면 작은 따옴표로 끝나야 한다. 

- 여러줄을 표시하기 위해서는 \n를 사용한다. 줄바꿈을 의미하는 특수한 문자다

  ```
  alert("coding everybody");
  alert('coding everybody');
  alert(typeof "1")	// 값의 데이터 형식을 알려준다.
  alert("안녕하세요.\n생활코딩의 세계에 오신 것을 환영합니다");  // 여러줄의 표시하기 위해 \n을 사용
  ```

  ```javascript
  Math.pow(3,2);       // 9,   3의 2승 
  Math.round(10.6);    // 11,  10.6을 반올림
  Math.ceil(10.2);     // 11,  10.2를 올림
  Math.floor(10.6);    // 10,  10.6을 내림
  Math.sqrt(9);        // 3,   3의 제곱근
  Math.random();       // 0부터 1.0 사이의 랜덤한 숫자
  ```



#### 2. 변수 

- JavaScript에서 변수는 var로 시작한다. var은 변수를 선언하겠다는 것을 의미한다.
- //뒤에 따라오는 내용은 해석되지 않는다. (주석)
- 세미콜론(;)은 하나의 구문이 끝났음을 명시적으로 나타내는 기호

```javascript
var a = 1;
alert(a+1);  //2
 
var a = 2;
alert(a+1);  //3
```



#### 3. 비교 

- 비교 연산자를 사용하는데 비교 연산자의 결과는 true나 false 중의 하나이다.

  ####  ==

  - 연산자로 좌항과 우항을 비교해서 서로 값이 같다면 true 다르다면 false가 된다

    ```javascript
    alert(1==2)             //false
    alert(1==1)             //true
    alert("one"=="two")     //false 
    alert("one"=="one")     //true
    ```

		#### 		===

- - 일치 연산자로 === 좌항과 우항이 '정확'하게 같을 때 true 다르면 false가 된다. 

    ```javascript
    alert(1==2)             //false
    alert(1==1)             //true
    alert("one"=="two")     //false 
    alert("one"=="one")     //true
    ```

  ```javascript
  alert(null == undefined);       //true
  alert(null === undefined);      //false
  alert(true == 1);               //true
  alert(true === 1);              //false
  alert(true == '1');             //true
  alert(true === '1');            //false
   
  alert(0 === -0);                //true
  alert(NaN === NaN);             //false
  ```

  - null과 undefined는 값이 없다는 의미의 데이터 형이다. 
  - null은 값이 없음을 명시적으로 표시한 것이고, undefined는 그냥 값이 없는 상태

####		!=

- '!'는 부정을 의미한다. '같다'의 부정은 '같지 않다'이다. 이것을 기호로는 '!='로 표시한다. 

  ```javascript
  alert(1!=2);            //true
  alert(1!=1);            //false
  alert("one"!="two");    //true
  alert("one"!="one");    //false
  ```

  ####	!==

  - '!=='는 '!='와 '=='의 관계와 같다. 정확하게 같지 않다는 의미다.

  #### >

  - 좌항이 우항보다 크다면 참, 그렇지 않다면 거짓임을 알려주는 연산자

    ```javascript
    alert(10>20);   //false
    alert(10>1);    //true
    alert(10>10);   //false
    ```

    

		#### 	>=

- - 좌항이 우항보다 크다면 참, 그렇지 않다면 거짓임을 알려주는 연산자

    ```javascript
    alert(10>=20);      //false
    alert(10>=1);       //true
    alert(10>=10);      //true
    ```

    

#### 5. 조건문 

##### if 문

- 조건문은 if로 시작한다. if 뒤의 괄호에 조건이 오고, 조건이 될 수 있는 값는 Boolean이다. Boolean의 값이 true라면 조건이 담겨진 괄호 다음의 중괄호 구문이 실행됨 

-  if 문의 조건이 참이면 중괄호의 시작({}부터 중괄호의 끝(})까지의 구간이 실행

  ```javascript
  if(true){
      alert('result : true');
  }
  ```

  ```javascript
  if(false){
      alert('result : true');
  }
  ```

  ```javascript
  if(true){
      alert(1);
      alert(2);
      alert(3);
      alert(4);
  }
  alert(5);
  ```

  ```javascript
  if(false){
      alert(1);
      alert(2);
      alert(3);
      alert(4);
  }
  alert(5);
  ```

##### else 문

-  else는 주어진 조건이 거짓일 때 실행할 구간을 정의

```javascript
if(true){
    alert(1);
} else {
    alert(2);
}
```

```
if(false){
    alert(1);
} else {
    alert(2);
}
```

##### else if 문

- else if는 좀 더 다양한 케이스의 조건을 검사할 수 있는 기회를 제공 
- else if의 특징은 if나 else와는 다르게 여러개가 올 수 있다는 점 
- else if의 모든 조건이 false라면 else가 실행

```javascript
if``(``false``){
    ``alert(1);
} ``else` `if``(``true``){
    ``alert(2);
} ``else` `if``(``true``){
    ``alert(3);
} ``else` `{
    ``alert(4);
}
```

```javascript
if(false){
    alert(1);
} else if(false){
    alert(2);
} else if(false){
    alert(3);
} else {
    alert(4);
}
```

##### 변수와 비교연산자 예제

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        id = prompt('아이디를 입력해주세요.')
        if(id=='egoing'){
            alert('아이디가 일치 합니다.')
        } else {
            alert('아이디가 일치하지 않습니다.')
        }
    </script>
</body>
</html>
```

##### 조건문의 중첩 

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>
<body>
    <script>
        id = prompt('아이디를 입력해주세요.');
        if(id=='egoing'){
            password = prompt('비밀번호를 입력해주세요.');
            if(password==='111111'){
                alert('인증 했습니다.');
            } else {
                alert('인증에 실패 했습니다.');
            }
        } else {
            alert('인증에 실패 했습니다.');
        }
    </script>
</body>
</html>
```

##### 논리 연산자

- &&

- - &&는 좌항과 우항이 모두 참(true)일 때 참

    ```javascript
    if(true && true){
        alert(1);
    }
    if(true && false){
        alert(2);
    }
    if(false && true){
        alert(3);
    }
    if(false && false){
        alert(4);
    }
    ```

- ||

- - '||'는 '||'의 좌우항 중에 하나라도 true라면 true가 되는 논리 연산자

    ```javascript
    if(true || true){
        alert(1);
    }
    if(true || false){
        alert(2);
    }
    if(false || true){
        alert(3);
    }
    if(false || false){
        alert(4);
    }
    ```

- !

  - '!'는 부정의 의미로, Boolean의 값을 역전시킨다. true를 false로 false를 true로 만든다. 

    ```javascript
    if(!true && !true){
        alert(1);
    }
    if(!false && !true){
        alert(2);
    }
    if(!true && !false){
        alert(3);
    }
    if(!false && !false){
        alert(4);
    }
    ```

    

#### 6. 반복문 

##### while 문

- while문은 while문 뒤에 따라오는 괄호 안의 조건이 참(true)면 중괄호 안의 코드 구간을 반복적으로 실행 

- 조건이 false면 반복문이 실행되지 않는다

  ```javascript
  var i = 0;
  // 종료조건으로 i의 값이 10보다 작다면 true, 같거나 크다면 false가 된다.
  while(i < 10){
      // 반복이 실행될 때마다 coding everybody <br />이 출력된다. <br /> 줄바꿈을 의미하는 HTML 태그
      document.write('coding everybody <br />');
      // i의 값이 1씩 증가한다.
      i++
  }
  ```

##### for문

- for문은 제일 먼저 '초기화'를 한다

  ```javascript
  for(var i = 0; i < 10; i++){
      document.write('coding everybody'+i+'<br />');
  }
  ```

##### break

- 반복작업을 중간에 중단시키고 싶을 때 사용 

  ```javascript
  for(var i = 0; i < 10; i++){
      if(i === 5) {
          break;
      }
      document.write('coding everybody'+i+'<br />');
  }
  ```

##### continue

- 실행을 즉시 중단하면서 반복은 지속하게 하려고 할 때 사용 

  ```javascript
  for(var i = 0; i < 10; i++){
      if(i === 5) {
          continue;
      }
      document.write('coding everybody'+i+'<br />');
  }
  ```

  



#### 7. 함수 

- 함수는 function 뒤에 함수의 이름이 오고, 소괄호가 따라온다. 소괄호에 인자라는 값이 차례로 들어오는데 이 값은 함수를 호출할 때 함수의 로직으로 전달될 변수다. 인자는 생략 할 수 있다. 함수를 호출 했을 때 실행하게 될 부분이 중괄호 안쪽에 온다.

- 함수의 핵심은 입력과 출력이다. 입력된 값을 연산해서 출력하는 것이 함수의 기본적인 역할이다

  ```javascript
  function numbering(){
      i = 0;
      while(i < 10){
          document.write(i);
          i += 1;
      }   
  }
  numbering();
  ```

##### return 

- 함수 내에서 사용한 return은 return 뒤에 따라오는 값을 함수의 결과로 반환한다. 동시에 함수를 종료시킨다.

  ```javascript
  function get_member1(){
      return 'egoing';
  }
   
  function get_member2(){
      return 'k8805';
  }
   
  alert(get_member1());
  alert(get_member2());
  ```

##### 인자 

- 인자(argument)는 함수로 유입되는 입력 값을 의미하는데, 어떤 값을 인자로 전달하느냐에 따라서 함수가 반환하는 값이나 메소드의 동작방법을 다르게 할 수 있다. 

  ```javascript
  function get_argument(arg){
      return arg;
  }
   
  alert(get_argument(1));
  alert(get_argument(2));
  ```

  

#### 8. 배열 

- 배열(array)이란 연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입
- 변수가 하나의 데이터를 저장하기 위한 것이라면 배열은 여러 개의 데이터를 하나의 변수에 저장하기 위한 것

##### 배열의 생성 

```javascript
var member = ['egoing', 'k8805', 'sorialgi']

alert(member[0]);
alert(member[1]);
alert(member[2]);


var arr = [1, 2, 3, 4, 5];
alert(arr.length); // 배열의 크기
```



##### 배열의 조작 

```javascript
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
alert(li); // 배열에 추가 

var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
alert(li);// 복수의 원수를 배열에 추가 

var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift('z');
alert(li); // 배열의 시작점에 원소를 추가 

var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B');
alert(li);

var li = ['a', 'b', 'c', 'd', 'e'];
li.shift();
alert(li); //배열의 첫번째 원소 제거 

var li = ['a', 'b', 'c', 'd', 'e'];
li.pop();
alert(li); // 배열의 끝 원소 제거 

var li = ['c', 'e', 'a', 'b', 'd'];
li.sort();
alert(li); // 배열의 정렬 

var li = ['c', 'e', 'a', 'b', 'd'];
li.reverse();
alert(li); //배열을 역순으로 정렬 
```



#### 





