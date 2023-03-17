package sesac.jpaPractice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.jpaPractice.domain.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
}
