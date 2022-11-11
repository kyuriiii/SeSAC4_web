package sesac.sesacspring.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesacspring.domain.Board;
import sesac.sesacspring.repository.BoardRepository;
import sesac.sesacspring.repository.MemoryBoardRepository;
import sesac.sesacspring.vo.BoardVO;

import java.util.Optional;

@Controller
public class BoardController {
    /**
     * Notion : Spring/* - 간단한 방명록 예제
     */
    final BoardRepository boardRepository = new MemoryBoardRepository();
    @GetMapping("board-write")
    public String getBoardWrite() {
        return "Board-write";
    }
    @PostMapping("board-write")
    public String postBoardWrite(@RequestParam("name") String name, @RequestParam("content") String content) {
        Board board = new Board();
        board.setName(name);
        board.setContent(content);
        boardRepository.save(board);
        return "redirect:/board-view";
    }
    @GetMapping("board-view")
    public String getBoardView(Model model) {
        model.addAttribute("list", boardRepository.findAll());
        return "Board-view";
    }
    @PostMapping("board-search")
    @ResponseBody
    // 동적폼전송으로 post 전송을 할 시에는 @RequestBody로 데이터를 전달받아야 한다.
    public Optional<Board> postBoardSearch(@RequestBody BoardVO boardVO) {
        return boardRepository.findByName(boardVO.getName());
    }
}
