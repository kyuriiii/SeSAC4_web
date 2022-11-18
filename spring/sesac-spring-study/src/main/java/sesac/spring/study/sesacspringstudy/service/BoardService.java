package sesac.spring.study.sesacspringstudy.service;

import sesac.spring.study.sesacspringstudy.domain.Board;
import sesac.spring.study.sesacspringstudy.repository.BoardRepository;
import sesac.spring.study.sesacspringstudy.repository.MemoryRepository;

import java.util.List;
import java.util.Optional;

public class BoardService {
    private final BoardRepository memoryRepository = new MemoryRepository();

    public int write(Board board) {
        // 이름 중복 검사

        memoryRepository.save(board);
        return board.getID();
    }

    public Optional<Board> findOneById(int id){
        return memoryRepository.findById(id);
    }

    public Optional<Board> findOneByName(String name){
        return memoryRepository.findByName(name);
    }
    public List<Board> findBoards(){
        return memoryRepository.findAll();
    }
}
