// with shown3.html

var my_array = new Array();
var numbers = ['one','two','three','four']; // same
var numbers = new Array('one','two','three','four'); // same

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}

var nums = ['1','2','3']
var chars = ['a','b','c']
console.log(nums.concat(chars)) // concat : complextiy n

console.log(nums.join()) // default ','
console.log(nums.join('-')) // complexity ?
console.log(nums.push('4','5')) // return value : 추가된 후 배열의 길이
console.log(nums)

console.log(nums.unshift('0')) // return value : 추가된 후 배열의 길이
console.log(nums) // 왼쪽 삽입
// pop : 오른쪽요소 추출 후 리턴
// shift : 왼쪽요소 추출 후 리턴
// python list 와 같이 pop,push complexty 1
// python list 와 같이 shift,unshift complexty n -> 자료구조 이용해야한다. 


// splice : complexity n 
console.log(nums.splice(2)) // 해당 위치 기준으로 배열을 자른다.
// return : [2,3,4,5] // 변수 할당시키거나 버리거나 .. 
console.log(nums)
// remain : [0,1]

var numbers = ['one','two','three','four']; // same
console.log(numbers.splice(2,1)) // 인덱스 2번위치에서 1개 삭제, 제거 대상 리턴
console.log(numbers)
console.log(numbers.splice(2,1,'hi?')) // 위 방식으로 제거 대상 리턴
console.log(numbers) // 제거 후 'hi?' 삽입된 배열

var numbers = ['one','two','three','four'];
console.log(numbers.splice(2,0,'web')) // 0개 제거 한다면, 단순삽입으로 활용가능
console.log(numbers)

var numbers = ['one','two','three','four'];
console.log(numbers.splice(2,0,'two.3','two.6')) // 다중삽입 가능
console.log(numbers)

// slice : complexity n
var numbers = ['one','two','three','four'];
console.log(numbers.slice(2)) // 해당 인덱스 위치부터의 배열, 기존배열은 변하지 않음.
console.log(numbers)
var numbers2 = numbers.slice(1,3) // 인덱스 1~2
console.log(numbers)
console.log(numbers2)