const isLeapYear = function (연도) {
    const 윤년이면 =
    (연도 % 4 === 0)
     && (연도 % 100 !== 0)
     || (연도 % 400 ===0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`) // 윤년 -> true

const min = function(배열) {
    let output = 배열[0]
    console.log(`처음 실행 때의 output = ${output}`)

    for (const value of 배열){
        console.log(`현재 비교 대상 ${output}과 ${value} 중에 작은 것은?`)
        if (output > value) {
            output = value
        }
    }
}

console.log(min([52, 273, 32, 103, 275, 24, 57]))