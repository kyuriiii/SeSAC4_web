package sesac.jpaPractice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.jpaPractice.dto.BoardListDTO;
import sesac.jpaPractice.dto.BoardWriteDTO;
import sesac.jpaPractice.service.BoardService;

import java.util.List;

@Controller
public class BoardController {
    @Autowired
    BoardService boardService;

    @GetMapping("/")
    public String get(Model model){
        List<BoardListDTO> boards = boardService.getBoardList();
        model.addAttribute("list", boards);
        return "list";
    }
    @GetMapping("/write")
    public String getWrite(){
        return "write";
    }
    @PostMapping("/write")
    public String postWrite(BoardWriteDTO boardWriteDTO){
        boardService.addBoard(boardWriteDTO);
        return "redirect:/";
    }
    @GetMapping("/board/{id}")
    public String getBoardone(@PathVariable String id, Model model) {
        BoardListDTO board = boardService.getBoardById(id);
        model.addAttribute("board", board);
        return "detail";
    }
    @PostMapping("/edit")
    @ResponseBody
    public boolean postEdit(@RequestBody BoardListDTO boardListDTO) {
        boardService.updateBoard(boardListDTO);
        return true;
    }
    @PostMapping("/delete")
    @ResponseBody
    public boolean postDelete(@RequestBody BoardListDTO boardListDTO) {
        boardService.deleteBoard(boardListDTO.getID());
        return true;
    }
}
