FROM node:16
# 작업 디렉토리 생성
WORKDIR /app
# 소스 추가
COPY . /app
RUN npm install
# 포트 매핑
EXPOSE 3000
# 실행 명령
CMD [ "npm", "run", "start" ]
