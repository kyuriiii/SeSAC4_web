package sesac.jpaPractice.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.jpaPractice.domain.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
	List<Board> findByTitle(String title);

	void deleteByWriter(String writer);
	// delete from board where writer = #{writer}
}
