## 자료형을 확인하는 방법

> typeof 연산자를 사용한다.

```javascript
typeof 1990; /결과 : "number"
typeof "hello"; /결과 : "string"
var birthYear = 2000; /결과 : undefined
typeof birthYear; /결과 : "number"
```



## 자료형의 종류

### 1. 기본형

	1. 숫자형 : 따옴표 없이 표기한 숫자

    1. 정수

    2. 실수

       - 2진수로 변환하여 계산하므로 정밀한 숫자를 계산하는 프로그램을 만들 때는 주의해야함

       ```javascript
       0.1 + 0.2; /결과 : 0.30000000000000004
       ```

	2. 문자형 : 작은따옴표(''), 큰따옴표("")로 묶은 자료

    	1. 문자형의 경우 따옴표 안에 동일한 따옴표를 넣지 않도록 주의해야한다.

	3. 논리형 : 참, 거짓이라는 값을 표현하는 자료형

    ```javascript
    typeof true; / 결과 : "boolean"
    typeof false; / 결과 : "boolean"
    ```

	4. Undefined : 자료형을 지정하지 않았을 때의 유형.

	5. Null : 값이 유효하지 않을 때의 유형. 보통 변수를 초기할 때 많이 사용한다.

### 2. 복합형

1. 배열(array) : 하나의 변수에 여러 값을 저장하는 유형

   1. 사용법

   ```javascript
   var seasons = ['봄', '여름', '가을', '겨울']
   seasons; / 결과 : ['봄', '여름', '가을', '겨울']
   ```

2. 객체(object) : 함수와 속성이 함께 포함된 유형

   1. 사용법

   ```javascript
   var kim = {
     firstName : "John",
     lastName : "Kim",
     age : 35,
     address: "Seoul"
   }
   ```

## 증감연산자

> 피연산자의 값을 1만큼 증가시키거나 감소시킨다

```javascript
var a = 10;
var b = a++ + 5;
var c = b--;
/ a = 11, b = 14, c = 15
```

```javascript
var a = 10;
var b = a++ + 5;
/ b = 15
var c = 10;
var d = ++c + 5;
/ d = 16
```

- 피연산자 뒤에 있을 때 전체 수식의 처리가 끝난 다음 적용
- 피연산자 앞에 있을 때 전체 수식을 처리하기 전에 적용됨

```javascript
var i = 1;
var j = i++ + 1;
var k = ++i + 1;
/ i = 3, j = 2, k = 4
```



