package sesac.jpaPractice.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardListDTO {
    private int ID;
    private int no;
    private String title;
    private String content;
    private String writer;
}
