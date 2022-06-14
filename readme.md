# 공부합시다(Java Script)
<img src="https://user-images.githubusercontent.com/97590480/173603410-fcaa0eb1-6c30-465f-a8f7-d501d4653491.gif">

## ✅ rule
자바 스크립트를 작성한 뒤 md 파일로 저장해줍니다.

### ✅ 깃헙 Push/Pull 규칙

1. 무조건 __pull__ 먼저 해줍니다. pull을 해서 해당 주차의 디렉토리가 생기지 않는다면 따로 만들어주세요

```
$ git pull <remote 이름> <브랜치이름>
$ git pull js_study master
```

2. 파일 업로드 규칙에 맞게 push해주세요.
```
$ git add .
$ git commit -m "2022-06-14_유선종.md"
$ git push <remote 이름> master
```


### 💕 원격 저장소 등록하기

`git remote add <원격저장소 이름> <주소>` 형식으로 작성합니다.

```bash
$ git remote add algorithmStudy https://github.com/Trailblazer-Yoo/Algorithm_Study/blob/master/README.md
```

### 💕 원격 저장소 조회


`git remote -v`로 등록이 잘 됐는지 확인해봅니다.
```
$ git remote -v
algorithmStudy https://github.com/Trailblazer-Yoo/Algorithm_Study/blob/master/README.md (fetch)
algorithmStudy https://github.com/Trailblazer-Yoo/Algorithm_Study/blob/master/README.md (push)