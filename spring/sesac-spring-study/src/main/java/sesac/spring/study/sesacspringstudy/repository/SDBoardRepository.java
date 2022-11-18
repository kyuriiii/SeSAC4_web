package sesac.spring.study.sesacspringstudy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sesac.spring.study.sesacspringstudy.domain.Board;

import java.util.Optional;

public interface SDBoardRepository extends JpaRepository<Board, Integer> {
    Optional<Board> findByName(String name);
}
