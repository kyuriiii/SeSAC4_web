package sesac.sesacspring.service;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import sesac.sesacspring.domain.Board;
import sesac.sesacspring.repository.BoardRepository;
import sesac.sesacspring.repository.JPABoardRepository;
import sesac.sesacspring.repository.MemoryBoardRepository;
import sesac.sesacspring.repository.SDBoardRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService3 {
    private final SDBoardRepository boardRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    /**
     * 방명록 작성
     * */
    public Long write(Board board) {
        // 만약 중복 이름으로 방명록을 기재하는 것을 막으려면?
        Optional<Board> result = boardRepository.findByName(board.getName());
        logger.info("result : " + result.toString());
        result.ifPresent(b -> {
            logger.info("exception : Name is already declared" );
            // 예외처리
            throw new IllegalStateException("이미 존재하는 이름으로는 방명록 기재가 불가능합니다.");
        });
        /*
        // 위의 코드 단축 형태
        // 결과가 나와서 그에 대한 처리를 따로 진행할 경우에는 함수로 뺴는 것이 좋다.
        boardRepository.findByName(board.getName())
            .ifPresent(b -> {
                // 예외처리
                throw new IllegalStateException("이미 존재하는 이름으로는 방명록 기재가 불가능합니다.");
            });*/
        logger.info("board save start");
        boardRepository.save(board);
        logger.info("board save finish");
        logger.info("board.id : " + board.getID());
        return board.getID();
    }
    /**
     * 전체 방명록 조회
     */
    public List<Board> findBoards() {
        return boardRepository.findAll();
    }
    public Optional<Board> findOneById(Long boardID) {
        return boardRepository.findById(boardID);
    }
    public Optional<Board> findOneByName(String name) {
        return boardRepository.findByName(name);
    }
}