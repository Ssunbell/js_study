## if 문

```javascript
if(true) {
  document.write("if문의 조건을 만족하여 이 문장이 실행되었습니다.")
}
```

```javascript
/if ... else 문

var number = prompt("숫자를 입력하세요.");
if(number < 0) {
  alert("0 이상의 수를 입력하세요");
}
else {
  document.write("입력한 숫자: " + number);
}
```

- 실행

<img src="/Users/parkjubro/Desktop/자바스크립트/정리/week3_image/if_else1.png" alt="if_else1" style="zoom:25%;" />

<img src="/Users/parkjubro/Desktop/자바스크립트/정리/week3_image/if_else2.png" alt="if_else2" style="zoom:25%;" />

<img src="/Users/parkjubro/Desktop/자바스크립트/정리/week3_image/if_else3.png" alt="if_else3" style="zoom:25%;" />

<img src="/Users/parkjubro/Desktop/자바스크립트/정리/week3_image/if_else4.png" alt="if_else4" style="zoom:25%;" />

<img src="/Users/parkjubro/Desktop/자바스크립트/정리/week3_image/if_else5.png" alt="if_else5" style="zoom:25%;" />

## 조건 연산자 - ? 와 :

- ? 왼쪽에 조건을 넣는다
- : 왼쪽에는 true일 때 실행할 명령을 넣는다
- : 오른쪽에는 false일 때 실행할 명령을 넣는다

```javascript
var score = 75;
(score >= 60)?alert("통과"):alert("실패");

```

## switch 문

```javascript
var session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인", "1");

		switch(session) {
			case "1" : document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
				break;
			case "2" : document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
				break;
			case "3" : document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
				break;
		default: alert("잘못 입력했습니다.");
		}
```



## for 문

```javascript
var sum = 0;

for (var i = 1; i < 6; i++){ //i = 1부터 5까지 총 5번 반복
  sum += i;
}

var sum = 0;

for (var i = 1; i < 101; i++){
  sum += i;
}

let seasons = ["봄", "여름", "가을", "겨울"];
for(let value of seasons){
  console.log(value);
}
// 봄
// 여름
// 가을
// 겨울
// 리스트 안의 값들이 인덱스 순서대로 순회
```



- 별찍기

```javascript
for(var i = 0; i < 30; i++){
			document.write("*");
		}

		document.write("<br><br>")

		for(var k = 0; k < 5; k++){
			for(var i =0; i < 30; i++){
				document.write('*');
			}
			document.write('<br>')
		}
```

![별찍기](../정리/week3_image/별찍기.png)



## while, do...while문

```javascript
var i = 0
while(i < 10) {
  document.write('반복 조건이 true이면 반복합니다. <br>');
  i += 1;
}

var i = 0
do {
  document.write('반복 조건이 true이면 반복합니다. <br>'); // 명령 실행
  i += 1;
} while(i < 10); // 조건이 false가 되면 반복 종료
```

