# Smart Phone Emulator

<br>
<br>

## 🔖 0. Introduction

스마트폰 화면과 App을 가상으로 구성한 Smart Phone Emulator입니다.
Vanilla Javascript를 이용한 SPA로 구현하였습니다.

<br>
<br>

## 💻 1. Architecture

최상의 폴더의 index.html을 기준으로 SPA로 동작하며, root id를 가진 Element안에 해당 App의 화면을 rendering합니다.

entry는 index.js 파일이고, 전반적인 폴더 구조 및 역할은 다음과 같습니다.

modules - 컴포넌트를 담은 폴더입니다. app component는 4개의 컴포넌트를 느슨하게 결합하며, 제어합니다. 나머지 4개의 파일은 각각의 view를 담당합니다.

styles - 각각의 모듈이 사용하는 css 파일이 위치합니다.

images - 프로젝트에 사용한 정적 파일들이 담겨있습니다.

utils - 각 모듈에서 공동으로 사용되는 함수들이 위치합니다.

dist - webpack의 output path로, build된 파일이 위치합니다.

<br>
<br>

## 🔖 2. Build & Start

### install

```
npm install
```

### start

```
npm run start
```

### build

```
npm run build
```

<br>
<br>
