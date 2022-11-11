package sesac.sesacspring.repository;

import sesac.sesacspring.domain.Board;

import java.sql.Array;
import java.util.*;

public class MemoryBoardRepository implements BoardRepository{

    private static Map<Long, Board> store = new HashMap<>(); // 저장소
    private static long sequence = 0L; // sequence 는 0, 1, 2 key 값을 생성해주는 친구

    @Override
    public Board save(Board board) {
        board.setID(++sequence); // ID 값 세팅
        store.put(board.getID(), board); // 이름과 내용은 전달되었으니 저장소에 저장한다.
        return board;
    }

    @Override
    public Optional<Board> findById(Long ID) {
        // store.get(ID); 로 꺼내면 되는데, 결과가 없으면 NULL이 나온다.
        // null 의 가능성이 있으면 Optional 로 보낸다.
        // 즉, 정보의 유무에 상관없이 Optional이라는 같은 형태로 전송할 수 있다.
        return Optional.ofNullable(store.get(ID));
    }

    @Override
    public Optional<Board> findByName(String name) {
        return store.values().stream()
                .filter(board -> board.getName().equals(name))
                .findAny();
        // 저장소에 있는 value 들을 loop로 돌면서 filter 안의 내용. 즉, 돌면서 나온 board의 이름이 받아온 이름과 동일하면
        // findAny() -> 한 개가 찾아지면 그걸 바로 반환한다.
        // 끝까지 돌렸는데 없으면 Optionadl null이 들어가서 반환된다.
    }

    @Override
    public List<Board> findAll() {
        // 자바에서 실무할 때는 List를 많이 쓴다.
        return new ArrayList<>(store.values());
    }
}
