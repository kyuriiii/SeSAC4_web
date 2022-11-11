package sesac.sesacspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import sesac.sesacspring.domain.Board;
import sesac.sesacspring.repository.BoardRepository;
import sesac.sesacspring.repository.MemoryBoardRepository;

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
}
