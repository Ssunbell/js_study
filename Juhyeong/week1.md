# 상수 vs 변수

변수 : 언제든 변하는 값

상수 : 항상 일정한 값



# 변수를 선언하는 규칙

> 변수 선언은 `var apple;` 과 같이 `var` 키워드 뒤에 변수 이름을 적는다.

1. 이름은 의미 있게 짓는다.
   - 예를 들어, 올해  연도는 currentYear, 태어난 연도는 birthYear

2. 여러 단어를 연결한 변수 이름은 낙타 모양으로 만들어준다. (Camel Case 표기법)

   - 첫번째 단어는 소문자, 두번째 단어부터는 대문자로 시작하는 방법을 많이 사용한다
   - '_'를 사용하여 변수 이름을 짓는 방법도 존재

3. 선언할 수 없는 이름도 있다.

   - ```javascript
     var 1value;
     var .key;
     var #obj;
     // 등등
     ```



# 변수에 값이나 식 저장하기

> 변수 오른쪽에 '=' 기호를 붙이고 오른쪽에 저장하고 싶은 값이나 식을 쓴다.

``` javascript
var apple = "yummy"; // 변수를 선언하면서 값을 저장
var banana;
banana = "long and yummy" // 변수를 선언한 다음에 값을 저장
```

> 변수에 식을 저장할 경우 식에 있는 변수는 미리 선언해 두어야 한다.

```javascript
var apple = 2000;
var banana = 10000;
var total = apple + banana;
```



# 실습 : 나이 계산 프로그램 만들기

1. 변수 선언하기

```javascript
<script>
		function calc(){
			var currentYear = 2019;
			var birthYear = 1990;
			var age;
			age = currentYear - birthYear + 1;
			// 올해 연도에서 태어난 연도를 뺀 다음 1을 더하여 age에 저장
			document.querySelector('#result').innerHTML = "당신의 나이는 " + age + "세입니다."
		}
	</script>
```

> 결과

![스크린샷 2022-06-19 오후 7.47.37](/Users/parkjubro/Library/Application Support/typora-user-images/스크린샷 2022-06-19 오후 7.47.37.png)

2. 사용자 입력값 변수에 할당하기

```javascript
<script>
		function calc(){
			var currentYear = 2022;
			var birthYear = prompt("태어난 연도를 입력하세요.", 'YYYY'); // 프롬프트 창에 태어난 연도를 입력하게 함.
			var age;
			age = currentYear - birthYear + 1;
			// 올해 연도에서 태어난 연도를 뺀 다음 1을 더하여 age에 저장
			document.querySelector('#result').innerHTML = "당신의 나이는 " + age + "세입니다."
		}
	</script>
```

> 결과

![스크린샷 2022-06-19 오후 7.49.29](/Users/parkjubro/Library/Application Support/typora-user-images/스크린샷 2022-06-19 오후 7.50.26.png)

![스크린샷 2022-06-19 오후 7.50.43](/Users/parkjubro/Library/Application Support/typora-user-images/스크린샷 2022-06-19 오후 7.50.43.png)

> let과 const 예약어

- ES6 버전부터 변수를 선언할 때 var 예약어 외에 let, const 예약어를 사용할 수 있다.

- Let으로 선언한 변수는 블록({}로 묶은 범위)을 벗어나면 사용할 수 없다.

- const는 상숫값을 선언할 때 사용 가능하다.

- 앞의 소스를 변형한 예시

```javascript
<script>
		function calc(){
			const currentYear = 2022;
			let birthYear = prompt("태어난 연도를 입력하세요.", 'YYYY');
			let age = currentYear - birthYear + 1;
		}
	</script>
```

