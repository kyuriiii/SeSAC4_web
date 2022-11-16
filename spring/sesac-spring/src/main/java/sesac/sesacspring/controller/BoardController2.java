package sesac.sesacspring.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesacspring.domain.Board;
import sesac.sesacspring.repository.BoardRepository;
import sesac.sesacspring.repository.MemoryBoardRepository;
import sesac.sesacspring.vo.BoardVO;

import java.util.List;
import java.util.Optional;

@Api(tags = {"Board2"})
@RestController
public class BoardController2 {
    /**
     * Notion : Spring/* - 간단한 방명록 예제
     */
    final BoardRepository boardRepository = new MemoryBoardRepository();

    @ApiOperation(value="방명록 추가", notes="이름과 내용을 이용해 방명록 작성")
    @GetMapping("board-write2")
    public String getBoardWrite() {
        return "Board-write";
    }
    @PostMapping("board-write2")
    public String postBoardWrite(@RequestParam("name") String name, @RequestParam("content") String content) {
        Board board = new Board();
        board.setName(name);
        board.setContent(content);
        boardRepository.save(board);
        return "success";
    }
    @GetMapping("board-view2")
    public List<Board> getBoardView(Model model) {
        return boardRepository.findAll();
    }
    @PostMapping("board-search2")
    // 동적폼전송으로 post 전송을 할 시에는 @RequestBody로 데이터를 전달받아야 한다.
    public Optional<Board> postBoardSearch(@RequestBody BoardVO boardVO) {
        return boardRepository.findByName(boardVO.getName());
    }
}
