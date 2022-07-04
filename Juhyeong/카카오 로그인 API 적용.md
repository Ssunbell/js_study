## 카카오 로그인 API 적용

1. 어플리케이션 만들기

![스크린샷 2022-07-04 오후 7.44.07](/Users/parkjubro/Desktop/스크린샷 2022-07-04 오후 7.44.07.png)



2. 요약 정보에 연동시킬 수 있는 키가 부여됨. JavaScript 키를 사용할 예정.

![스크린샷 2022-07-04 오후 7.45.49](/Users/parkjubro/Desktop/스크린샷 2022-07-04 오후 7.45.49.png)



3. 플랫폼으로 들어가 도메인 등록 (테스트의 경우 html로 진행했기에 웹 도메인 적용)![스크린샷 2022-07-04 오후 7.49.51](/Users/parkjubro/Desktop/스크린샷 2022-07-04 오후 7.49.51.png)



4. 등록 후 카카오 로그인으로 들어가 활성화 상태 ON으로 설정하기

![스크린샷 2022-07-04 오후 7.52.20](/Users/parkjubro/Library/Application Support/typora-user-images/스크린샷 2022-07-04 오후 7.52.20.png)



## 적용코드

```javascript
<!-- 카카오 스크립트 -->
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>
Kakao.init('775737d774fdccb2434c909a853de03d'); //발급받은 키 중 javascript키를 사용해준다.
console.log(Kakao.isInitialized()); // sdk초기화여부판단
//카카오로그인
function kakaoLogin() {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
        	  console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
      },
      fail: function (error) {
        console.log(error)
      },
    })
  }
//카카오로그아웃  
function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
        	console.log(response)
        },
        fail: function (error) {
          console.log(error)
        },
      })
      Kakao.Auth.setAccessToken(undefined)
    }
  }  
```



- 적용

![스크린샷 2022-07-04 오후 9.40.47](../../../Library/Application Support/typora-user-images/스크린샷 2022-07-04 오후 9.40.47.png)

![스크린샷 2022-07-04 오후 9.44.19](../../../Library/Application Support/typora-user-images/스크린샷 2022-07-04 오후 9.44.19.png)