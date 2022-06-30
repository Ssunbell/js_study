## while 반복문
1. while 반복문
```html
<script>
    let i = 0
    whlie (true){
        alert({`${i}번째 반복입니다.`})
        i++
    }
</script>
```
2. for문과 while문 차이
- while문은 조건문이 중요할 때, for문은 배열을 기반으로 할 때 적절
```html
<script>
    whlie (confirm("계속 진행하시겠습니까?")) {
        본문
    }
</script>
```

3. break, continue
    - break는 반복이 진행되는 도중에 break를 만나면 반복문을 중단함
    - continue는 반복문 안의 반복 작업을 멈추고 다시 반복문을 진행함