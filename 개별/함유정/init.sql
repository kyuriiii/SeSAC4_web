USE sesac;

/* user 테이블 만들기 */
CREATE TABLE user (
    id int not null auto_increment primary key,
    name varchar(10) not null,
    pw varchar(255) not null
);