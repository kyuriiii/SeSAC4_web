package sesac.jpaPractice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.jpaPractice.domain.Board;
import sesac.jpaPractice.dto.BoardListDTO;
import sesac.jpaPractice.dto.BoardWriteDTO;
import sesac.jpaPractice.repository.BoardRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    public List<BoardListDTO> getBoardList(){
        List<Board> boards = boardRepository.findAll();
        List<BoardListDTO> list = new ArrayList<>();

        for ( int i = 0; i < boards.size(); i++ ) {
            BoardListDTO board = new BoardListDTO();
            board.setID(boards.get(i).getId());
            board.setNo(i+1);
            board.setTitle(boards.get(i).getTitle());
            board.setContent(boards.get(i).getContent());
            board.setWriter(boards.get(i).getWriter());

            list.add(board);
        }
        return list;
    }
    public BoardListDTO getBoardById(String id) {
        Optional<Board> board = boardRepository.findById(Integer.parseInt(id));
        BoardListDTO boardListDTO = new BoardListDTO();
        if ( board.isPresent() ){
            boardListDTO.setID(board.get().getId());
            boardListDTO.setTitle(board.get().getTitle());
            boardListDTO.setContent(board.get().getContent());
            boardListDTO.setWriter(board.get().getWriter());
        }
        return boardListDTO;
    }
    public void addBoard(BoardWriteDTO boardWriteDTO) {
        Board board = new Board();
        board.setTitle(boardWriteDTO.getTitle());
        board.setContent(boardWriteDTO.getContent());
        board.setWriter(boardWriteDTO.getWriter());

        boardRepository.save(board);
    }
    public void updateBoard(BoardListDTO boardListDTO) {
        Board board = new Board();
        board.setId(boardListDTO.getID());
        board.setTitle(boardListDTO.getTitle());
        board.setContent(boardListDTO.getContent());
        board.setWriter(boardListDTO.getWriter());

        boardRepository.save(board);
    }
    public void deleteBoard(int Id) {
        boardRepository.deleteById(Id);
    }
}
