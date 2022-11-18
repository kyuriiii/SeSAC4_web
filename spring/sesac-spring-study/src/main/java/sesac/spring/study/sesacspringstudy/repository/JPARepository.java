package sesac.spring.study.sesacspringstudy.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import sesac.spring.study.sesacspringstudy.domain.Board;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class JPARepository implements BoardRepository{
    private final EntityManager em;
    @Override
    public Board save(Board board) {
        this.em.persist(board);
        return board;
    }

    @Override
    public Optional<Board> findById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Board> findByName(String name) {
        return Optional.empty();
    }

    @Override
    public List<Board> findAll() {
        // Select * from board as b;
        List<Board> result = em.createQuery("select b from Board b", Board.class)
                .getResultList();
        return result;
    }
}
