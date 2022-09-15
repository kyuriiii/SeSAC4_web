/* sesac2 데이터베이스 만들기 */
CREATE DATABASE sesac2 DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

/* 사용자명: user, 비밀번호: 1234 인 사용자 만들기 */
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

/* sesac2 데이터베이스 만들기 */
USE sesac2;

/* user 테이블 만들기 */
CREATE TABLE user (
    id int not null auto_increment primary key,
    name varchar(10) not null,
    pw varchar(255) not null
);