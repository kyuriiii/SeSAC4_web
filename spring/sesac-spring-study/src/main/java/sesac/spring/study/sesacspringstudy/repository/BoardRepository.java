package sesac.spring.study.sesacspringstudy.repository;

import sesac.spring.study.sesacspringstudy.domain.Board;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface BoardRepository {
    Board save(Board board);
    Optional<Board> findById(int id);
    Optional<Board> findByName(String name);
    List<Board> findAll();
}
