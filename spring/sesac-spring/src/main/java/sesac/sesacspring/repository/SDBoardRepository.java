package sesac.sesacspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sesac.sesacspring.domain.Board;

import java.util.Optional;

public interface SDBoardRepository extends JpaRepository<Board, Long> {

    Optional<Board> findByName(String name);
}
