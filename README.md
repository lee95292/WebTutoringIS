# Invisible Shield 웹 튜터링 학습 가이드라인 & 보고서 작성 방법


[Poiemaweb](https://poiemaweb.com/) : 웹 프론트엔드 언어 구분별로 레퍼런스 제공 (HTML,CSS,Javascript 참고하기)

[학습 연관관계도](https://seomal.org/) : 학습 레퍼런스 링크 및 선수지식 연관관계도 제공

### 1. 웹 프론트엔드 기초 및 버전관리

웹 기초 :

* HTML - 생활코딩 [HTML 코스](https://opentutorials.org/course/3084) - (웹 서버 운영하기 이전까지)

* CSS - [로그인화면 클론코딩](https://www.youtube.com/watch?v=HV7DtH3J2PU)

* Git - [생활코딩 Git](https://opentutorials.org/module/3733)


1번 보고서 작성 방법

* 웹 기초에 해당하는 3개 링크 학습하고 결과물 2페이지 분량 보고서에 작성. + 클론코딩 소스코드

* 기한 :10.16 23:59

* 제출 방법 : git pull request

## Pull request 하는 방법 (생활코딩 Git 수강 후에 볼것)

fork를 통해 과제 리포지토리를 내 리포지토리로 생성하기!
![fork](/mklee/fork.PNG)

```cmd
git clone https://github.com/[github아이디]/WebTutoringIS    // fork한 내 리포지토리
git checkout -b [branch_이름]   //새로운 브랜치 생성

mkdir [이름]                   // 과제 폴더 만들기
cd [이름]                      // 과제 폴더로 이동
copy [제출폴더] ./[이름]       // 과제 수행내용 과제폴더로 옮기기. 탐색기 켜서 Ctrl + c, v로 옮겨도 됩니다.

git add .
git commit -m "과제 끝"
git push origin [branch_이름]
```

완료하면, 내 계정에 브랜치 추가된것이 보임. github 페이지에서 branch 페이지로 들어간 후, new pull request 버튼 클릭!


-	2번 보고서 주제 : Frontend/Backend/Hacking 학습분야 탐색
