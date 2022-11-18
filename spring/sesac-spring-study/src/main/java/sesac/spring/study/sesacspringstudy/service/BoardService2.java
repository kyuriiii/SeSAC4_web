package sesac.spring.study.sesacspringstudy.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sesac.spring.study.sesacspringstudy.domain.Board;
import sesac.spring.study.sesacspringstudy.repository.BoardRepository;
import sesac.spring.study.sesacspringstudy.repository.JPARepository;
import sesac.spring.study.sesacspringstudy.repository.SDBoardRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class BoardService2 {
    private final SDBoardRepository boardRepository;
    public int write(Board board) {
        // 이름 중복 검사
        boardRepository.save(board);
        return board.getID();
    }

    public Optional<Board> findOneById(int id){
        return boardRepository.findById(id);
    }

    public Optional<Board> findOneByName(String name){
        return boardRepository.findByName(name);
    }
    public List<Board> findBoards(){
        return boardRepository.findAll();
    }
}
