package sesac.sesacspring.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesacspring.domain.Board;
import sesac.sesacspring.dto.BoardDTO;
import sesac.sesacspring.repository.BoardRepository;
import sesac.sesacspring.repository.MemoryBoardRepository;
import sesac.sesacspring.service.BoardService;
import sesac.sesacspring.service.BoardService2;
import sesac.sesacspring.service.BoardService3;
import sesac.sesacspring.vo.BoardVO;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class BoardController {
    /**
     * Notion : Spring/* - 간단한 방명록 예제
     */

    private final BoardService boardService;
    private final BoardService2 boardService2;
    private final BoardService3 boardService3;
    @GetMapping("board-write")
    public String getBoardWrite() {
        return "Board-write";
    }
    @PostMapping("board-write")
    public String postBoardWrite(Board board) {
        boardService.write(board);
        return "redirect:/board-view";
    }
    @GetMapping("board-view")
    public String getBoardView(Model model) {
        model.addAttribute("list", boardService.findBoards());
        return "Board-view";
    }
    @PostMapping("board-search")
    @ResponseBody
    // 동적폼전송으로 post 전송을 할 시에는 @RequestBody로 데이터를 전달받아야 한다.
    public Optional<Board> postBoardSearch(@RequestBody Board board) {
        return boardService.findOneByName(board.getName());
    }


    @GetMapping("board-write2")
    public String getBoardWrite2() {
        return "Board-write2";
    }
    @PostMapping("board-write2")
    public String postBoardWrite2(Board board) {
        boardService2.write(board);
        return "redirect:/board-view2";
    }
    @GetMapping("board-view2")
    public String getBoardView2(Model model) {
        model.addAttribute("list", boardService2.findBoards());
        return "Board-view2";
    }
    @PostMapping("board-search2")
    @ResponseBody
    // 동적폼전송으로 post 전송을 할 시에는 @RequestBody로 데이터를 전달받아야 한다.
    public Optional<Board> postBoardSearch2(@RequestBody Board board) {
        return boardService2.findOneByName(board.getName());
    }


    @GetMapping("board-write3")
    public String getBoardWrite3() {
        return "Board-write3";
    }
    @PostMapping("board-write3")
    public String postBoardWrite3(Board board) {
        boardService3.write(board);
        return "redirect:/board-view3";
    }
    @GetMapping("board-view3")
    public String getBoardView3(Model model) {
        model.addAttribute("list", boardService3.findBoards());
        return "Board-view3";
    }
    @PostMapping("board-search3")
    @ResponseBody
    // 동적폼전송으로 post 전송을 할 시에는 @RequestBody로 데이터를 전달받아야 한다.
    public Optional<Board> postBoardSearch3(@RequestBody Board board) {
        return boardService3.findOneByName(board.getName());
    }
}
