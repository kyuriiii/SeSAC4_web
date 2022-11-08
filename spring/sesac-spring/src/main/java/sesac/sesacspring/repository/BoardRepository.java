package sesac.sesacspring.repository;

import sesac.sesacspring.domain.Board;

import java.util.List;
import java.util.Optional;

public interface BoardRepository {
    Board save(Board board); // 게시판 내용이 게시판 저장소에 기록되는 것
    Optional<Board> findById(Long ID);
    Optional<Board> findByName(String name); // 이름을 기반으로 게시판 내용 찾기
    List<Board> findAll(); // 전체 게시판 내용을 반환한다.
}
