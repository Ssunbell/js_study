## for 반복문

1. forof, forin
forof, forin은 배열과 함께 쓰임
```html
<script>
const a = ['바나나', '사과', '귤']
for (const 요소 of 배열){
    console.log(요소) // 바나나, 사과, 귤
}

for (const 인덱스 in 배열) {
    console.log(인덱스, 배열[인덱스]) // 0 바나나, 1 사과, 2 귤
}
</script>
```

2. for 반복문
```html
<script>
for (let i = 0; i < 5; i++){
    console.log(`${i}번째 반복입니다`)
}

for (let i = 20; i >= 10; i--){
    console.log(`${i}번째 반복입니다`)
}

</script>
```