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

Pull request 하는 방법 (생활코딩 Git 수강 후에 볼것)

```cmd
mkdir WebTutoringIS
cd WebTutoringIS
git init

git clone https://github.com/lee95292/WebTutoringIS
git branch [이름_branch]
git checkout [이름_branch]

mkdir [이름]
cd [이름]
copy [제출폴더] ./[이름]

git add .
git commit -m "과제 끝"
git checkout master

git merge [이름_branch]
git push origin master
```


-	2번 보고서 주제 : Frontend/Backend/Hacking 학습분야 탐색
