package sesac.sesacjpa.domain;

import javax.persistence.*;

@Entity
@Table(name="user")
public class UserEntity {
    @Id
    @GeneratedValue
    private int id;

    @Column(length=10, nullable=false)
    private String name;

    @Column(length=10, nullable=false)
    private String nickname;


    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }
}
