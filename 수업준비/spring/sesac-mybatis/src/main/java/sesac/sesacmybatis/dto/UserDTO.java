package sesac.sesacmybatis.dto;

public class UserDTO {

    private int id;
    private String name;
    private String nickname;
    private int no;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }
    public int getNo(){ return this.no;}
    public void setNo(int no) { this.no = no; }
}
