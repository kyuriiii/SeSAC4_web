USE sesac;
ALTER DATABASE sesac default charset=utf8 collate utf8_general_ci; 

DROP TABLE IF EXISTS `sesac`;
CREATE TABLE `sesac` (
    `name` varchar(10) not nul,
    `registered` timestamp not null default current_timestamp
);
insert into `sesac` (name) values ('sesac');