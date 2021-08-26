# 간단한 Nodejs 도커 컨테이너 실습하기

### HomeBrew로 node 설치하기
$ brew install node

### 간단한 Hello World Nodejs 개발하기
$ vi server.js
~~~
var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!!! v1.1');
};
var www = http.createServer(handleRequest);
www.listen(8082);
~~~

### 간단한 Hello World Nodejs 개발하기
$ vi Dockerfile
~~~
 FROM node:6.9.2
 EXPOSE 8082
 COPY server.js .
 CMD node server.js
~~~
### Nodejs 도커 이미지 빌드하기
$ docker build -t twinspark81/hello-node:v1 .

### Nodejs 도커 이미지 DockerHub 나의 레이지스트리에 올리기
$ docker push twinspark81/hello-node:v1 

### Hello World Nodejs의 도커 컨테이너 실행하기
$ docker run -d -p 8888:8082 --name hello-node twinspark81/hello-node:v1
