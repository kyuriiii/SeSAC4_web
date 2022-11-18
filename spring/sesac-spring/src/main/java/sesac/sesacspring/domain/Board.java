package sesac.sesacspring.domain;

import javax.persistence.*;

@Entity // 해당 클래스가 Entity 클래스라는 것을 알려준다.
@Table(name="board") // 테이블 이름 명시
public class Board {
    @Id // pk라는 것을 알려준다.
    @GeneratedValue // 자동으로 생성되는 ( AUTO_INCREMENT ) 것을 설정한다.
    private Long ID;
    @Column(length=20, nullable = false)
    // name varchar(20) not null
    private String name;
    @Column
    // 만약, 컬럼명이 Entity의 이름과 다르다면?
    // @Column(name="text") 로 매핑시킬 컬럼명을 적어준다.
    private String content;

    public Long getID() {
        return ID;
    }
    public void setID(Long ID) {
        this.ID = ID;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
}
