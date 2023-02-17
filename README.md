https://github.com/walking-sunset/selection-task

# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 목차
[실행 / 전체 영상](#실행)

[파일구조](#파일-구조)

[각 페이지 설명](#로그인-하기-전-메인화면)

[후기](#후기)

[리팩토링](https://github.com/users/jgy4419/projects/1)

---

## 실행
### Node 버전 16 이상

1. git clone https://github.com/jgy4419/wanted-pre-onboarding-frontend.git
2. npm install
3. npm start (실행 전 node 버전 확인)

## 배포 URL / 전체 영상

### 배포 URL
https://jgytodo.vercel.app/

### 전체 영상
https://user-images.githubusercontent.com/76980526/217550955-a0b74920-e89d-4d1e-ad14-73fcccdb43b6.mov

## 파일 구조

```
── src
│   ├── App.tsx
│   ├── AppStyled.ts
│   ├── component
│   │   ├── auth
│   │   │   ├── Join.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── api
│   │   │   │   └── useAuthPost.ts
│   │   │   ├── hooks
│   │   │   │   ├── useAuthCheck.tsx
│   │   │   │   ├── useLogout.tsx
│   │   │   │   └── useSignUp.tsx
│   │   │   └── style
│   │   │       ├── join.ts
│   │   │       └── login.ts
│   │   ├── common
│   │   │   ├── Header.tsx
│   │   │   └── Progress.tsx
│   │   └── todo
│   │       ├── TodoAdd.tsx
│   │       ├── TodoBlur.tsx
│   │       ├── TodoEdit.tsx
│   │       ├── TodoItem.tsx
│   │       ├── TodoList.tsx
│   │       ├── TodoMain.tsx
│   │       ├── api
│   │       │   ├── deleteTodo.ts
│   │       │   ├── getTodo.ts
│   │       │   ├── todoPost.ts
│   │       │   └── todoPut.ts
│   │       ├── hooks
│   │       │   └── useTodoMovement.tsx
│   │       ├── style
│   │       │   ├── addTodo.ts
│   │       │   ├── todoBlur.ts
│   │       │   ├── todoItem.ts
│   │       │   └── todoList.ts
│   │       └── types
│   │           ├── interface.ts
│   │           └── type.ts
│   ├── index.tsx
│   ├── logo.svg
│   ├── pages
│   │   ├── 404.tsx
│   │   └── Home.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── router
│   │   └── Router.tsx
│   ├── setupTests.ts
│   ├── styles
│   │   └── styledComponents
│   │       ├── global.ts
│   │       ├── overlapStyle.ts
│   │       ├── styled404.ts
│   │       └── styledHeader.ts
│   └── utils
│       ├── api
│       │   └── useApi.ts
│       ├── constants.ts
│       ├── hooks
│       │   └── useTokenCheck.tsx
│       └── types
│           ├── auth
│           │   └── interface.ts
│           └── todo
│               ├── interface.ts
│               └── type.ts
└── tsconfig.json

```

# 로그인 하기 전 메인화면
![image](https://user-images.githubusercontent.com/76980526/217566259-bf1ee252-fd5e-402e-9ec4-aa0802a942d3.png)

- [x] 로그인 전에 투두 내용들을 blur 처리를 해서 궁금증 + 나름 회원가입 유도 목적으로 만들어보았습니다.

# 1 - SignIn / SignUp
## /signin 경로에 로그인 /signup 회원가입 기능을 개발
---

- [x] 이메일 조건 : 최소 `@`, `.` 포함해서 회원가입 가능하게 구현하기.
- [x] 비밀번호 조건 : 8자 이상 입력, 비밀번호 확인 input 창과 동일하게 입력되어야 되도록 하기.
- [x] 이메일과 비밀번호 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주기.

![image](https://user-images.githubusercontent.com/76980526/217566399-16d61e6c-9fd5-4ffc-ae72-75ace2c7ae73.png)
![image](https://user-images.githubusercontent.com/76980526/217566627-59b215b0-ef16-414b-8359-3e3416782c24.png)
## 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동.
--- 
- [x] id, pw input 창에서 enter 버튼을 누르면 submit 되도록 하기.
- [x] 응답으로 받은 토큰은 로컬스토리지에 저장.

<img width="552" alt="image" src="https://user-images.githubusercontent.com/76980526/210497229-052aaf64-8cb4-4188-a2fc-3ca97db2f620.png">

- [x] 토큰이 있을 때 /signin 또는 /signup 으로 이동하면 /todo로 리다이렉트 시키기.

# 2 - Todo List
## Todo List API를 호출하여 Todo List CRUD 기능을 구현하기.
--- 
- [x] TODO 목록 구현 

![image](https://user-images.githubusercontent.com/76980526/217566846-14c72552-8689-4d57-81e3-da59aafa4265.png)

# 3 - 반응형 작업
- [x] 페이지 전체적으로 반응형 작업을 완료하였습니다.

![image](https://user-images.githubusercontent.com/76980526/217569065-5fa276f0-af42-4eaa-b6e6-83200d243f87.png)



### Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있도록 하기.
--- 
![image](https://user-images.githubusercontent.com/76980526/217567076-a46f35d5-0664-4499-913c-3acef3030c97.png)
