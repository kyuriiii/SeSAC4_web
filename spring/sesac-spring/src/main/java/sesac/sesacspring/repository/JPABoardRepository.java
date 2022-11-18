package sesac.sesacspring.repository;

import org.springframework.stereotype.Repository;
import sesac.sesacspring.domain.Board;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
public class JPABoardRepository implements BoardRepository{

    // JPA에서는 EntityManager로 모두 동작된다.
    // build.gradle에서 jpa 라이브러리를 받았는데, 그렇게 하면 spring boot가 자동으로 EntityManager을 만들어준다. ( DB연결까지 다 해서 )
    private final EntityManager em;
    public JPABoardRepository(EntityManager em){
        this.em = em;
    }
    @Override
    public Board save(Board board) {
        this.em.persist(board);
        return board;
    }

    @Override
    public Optional<Board> findById(Long ID) {
        Board board = em.find(Board.class, ID); // pk의 경우
        return Optional.ofNullable(board);
    }

    // 수업 때 findByName은 진행하지 말 것! 
    // 실제로는 JPA 만 사용하는 것이 아닌 스프링 데이터 JPA를 사용할 것이기 때문
    @Override
    public Optional<Board> findByName(String name) {
        // pk 가 아닐 경우에는 특별한 jpql 이라는 객체지향 쿼리를 써야 한다.
        List<Board> result = em.createQuery("select b from Board b where b.name = :name", Board.class)
                .setParameter("name", name)
                .getResultList();

        return result.stream().findAny();
    }

    @Override
    public List<Board> findAll() {
        // 객체를 대상으로 sql을 날리면 이게 일반 sql로 변경된다.
        // Entity 대상으로 날린다.
        // sql은 객체의 column을 기준으로 select 한다면, 객체지향 쿼리는 entity 자체를 찾는다.
        List<Board> result = em.createQuery("select b from Board b", Board.class)
                .getResultList();

        return result;
    }
}
