package sesac.spring.study.sesacspringstudy.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="board")
public class Board {
    @Id
    @GeneratedValue // = auto_increment
    private int ID;

    @Column(length=20, nullable = false)
    // @Column(name=userName)
    private String name;
    // name varchar(20) not null
    private String content;
    // content varchar(255)
}
