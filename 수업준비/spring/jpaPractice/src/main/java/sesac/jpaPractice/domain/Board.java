package sesac.jpaPractice.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="board")
public class Board {
    @Id
    @GeneratedValue
    private int id;

    @Column(length=100, nullable = false)
    private String title;

    @Lob
    private String content;

    @Column(length=50, nullable = false)
    private String writer;
}