# Invisible Shield 웹 튜터링 학습 가이드라인 & 보고서 작성 방법


[Poiemaweb](https://poiemaweb.com/) : 웹 프론트엔드 언어 구분별로 레퍼런스 제공 (HTML,CSS,Javascript 참고하기)

[학습 연관관계도](https://seomal.org/) : 학습 레퍼런스 링크 및 선수지식 연관관계도 제공

### 1. 웹 프론트엔드 기초 및 버전관리

웹 기초 :

1. HTML - 생활코딩 [HTML 코스](https://opentutorials.org/course/3084) - (웹 서버 운영하기 이전까지)

2. CSS - [로그인화면 클론코딩](https://www.youtube.com/watch?v=HV7DtH3J2PU)

3. Git - [생활코딩 Git](https://opentutorials.org/module/3733)

1번 보고서 작성 방법

* 웹 기초에 해당하는 3개 링크 학습하고 결과물 2페이지 분량 보고서에 작성. + 클론코딩 소스코드

* 기한 :2019 10.16 23:59

* 제출 방법 : git pull request

### 2. 리눅스 기초 학습 / 서버 구축 기초 학습

1.  [리눅스 기초 명령어](https://gomguard.tistory.com/73) 학습 - 링크에 포함된 명령어와, chmod, grep  명령어와 같이 링크에 포함되지 않은 3개 이상의 자주쓰이는 명령어 알아보기

2.  웹 서버와 웹 애플리케이션 서버(Web Application Server) 알아보기

3. [링크](https://jcloud-devops.github.io/user-guide.html) 참고해서 Jcloud 인스턴스 생성, Xshell 접속까지

2번 보고서 작성방법

* 2번에 해당하는 내용을 A4 1/3 페이지 분량으로 작성

* 1번 학습 -> 3번, "Source 탭 이미지 생성과정"에서 ubuntu 18.0.4버전 선택 -> **접속 후 스크린샷**

* 접속 후, **명령어 사용 스크린샷 "또는" 명령어 보고서에 간략하게 정리하기** 

* 기한 :2019 11.12 23:59

* 제출 방법 : git pull request

### 3.웹 해킹 기초

웹 해킹 기초 :
* 웹 언어 및 인코딩 [WEB 언어, 인코딩](http://blog.naver.com/PostView.nhn?blogId=r00t_ict10&logNo=220080867407&categoryNo=21&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView&userTopListOpen=true&userTopListCount=5&userTopListManageOpen=false&userTopListCurrentPage=1)
* Get, Post [Get과 Post 방식의 비교](https://mangkyu.tistory.com/17)
* 쿠키, 세션 [쿠키와 세션](https://www.opentutorials.org/course/1706/240)
* SQL Injection [SQL Injection 기초](https://mrrootable.tistory.com/25)

3번 보고서 작성 방법
* 정해준 5문제를 각자의 방법으로 풀고 보고서에 Write-up 작성
* 기한 ~ 11.26
* 제출 방법 git pull request

## Webhacking 과제

1. Webhacking.kr 로그인 [Webhacing.kr](https://webhacking.kr)
2. Challenge(old) 접속 및 문제 풀기
```
보고서에 작성할 문제 - 힌트
6번 - base64 인코딩 디코딩
15번 - JS 종료
16번 - 아스키코드
17번 - JS 콘솔 
26번 - Get 방식으로 값 넘기기
```
이 외에도 풀어보고 싶은 문제가 있으면 마음껏 풀어도 됨.

### 4. 웹 해킹 심화
1. 3번 과제와 같이 Webhacking.kr 로그인
2. 저번 과제를 잘 끝냈으면 현재 점수는 450점.
3. 각자 풀고싶은 문제를 풀고 950점 이상을 달성한다.
4. 푼 문제들을 보고서에 정리한다.

* 문제를 풀다가 어렵다면 검색하고 풀어도 됨. 단 보고서에서 그 문제가 어떤점에서 막혔고 어떤점에 대해 잘 알아야 하는지 등 자기 성찰을 꼭 쓸것.
* 기한 ~ 12.10
* 제출 방법 : git pull request

### 5. 튜터링 이후 학습 계획

1. 서버 프로그래밍/해킹/클라이언트 프로그래밍/ 확장프로그램 프로그래밍 등(웹과 관련 없이) 관심분야 학습계획 작성

* 각 분야별로 어떤 특징이 있는지 잘 알아보고, A4기준 1/3 이상 작성하기
* 기한: ~ 12.20

## Pull request 하는 방법 (생활코딩 Git 수강 후에 볼것)

**Prerequisite**


1. [git 설치](https://coding-factory.tistory.com/245)

2. git bash 프로그램 열어서 [git 계정 설정](https://goodtogreate.tistory.com/entry/Git-config-%EC%84%A4%EC%A0%95-%EA%B3%84%EC%A0%95%EC%84%A4%EC%A0%95)

**start**

fork를 통해 과제 리포지토리를 내 리포지토리로 생성하기!
![fork](/mklee/fork.PNG)

```cmd
git clone https://github.com/[github아이디]/WebTutoringIS    // fork한 내 리포지토리를 다운로드 받는다는 뜻!
cd [프로젝트_폴더]                                            //프로젝트_폴더로 Change Directory(cd) 들어간다는 뜻! 
git checkout -b [branch_이름]                                 //새로운 브랜치 생성          

mkdir [이름]                                                     // 과제 폴더 만들기(Make Direcory의 약자) 
cp -r [제출폴더] ./[이름]       // git bash에서는 cp, cmd에서 하는경우 copy 명령어를 사용! 과제 수행내용 과제폴더로 옮기기. 탐색기 켜서 Ctrl + c, v로 옮겨도 됩니다.

git add .
git commit -m "과제 끝"
git push origin [branch_이름]
```

완료하면, 내 계정에 브랜치 추가된것이 보임. github 페이지에서 branch 페이지로 들어간 후, new pull request 버튼 클릭!
