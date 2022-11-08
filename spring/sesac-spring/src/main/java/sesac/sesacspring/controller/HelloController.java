package sesac.sesacspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesacspring.domain.Board;
import sesac.sesacspring.repository.BoardRepository;
import sesac.sesacspring.repository.MemoryBoardRepository;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
public class HelloController {

    /**
     * Notion : Spring/02.프로젝트 생성, 템플릿, 정적파일
      */
    @GetMapping("hi")
    public String getHi(Model model) {
        model.addAttribute("msg", "hi~");
        return "hi";
    }

    /**
     * Notion : Spring/03.Spring MVC와 템플릿 엔진
     */
    @GetMapping("mvc")
    public String getMVC(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "mvc";
    }

    /**
     * Notion : Spring/04.Spring MVC - API
     */
    @GetMapping("mvc-get1")
    public String getMVCParams(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "age", required = false) int age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "API";
    }
    @GetMapping("mvc-get2/{name}/{abc}")
    public String getMVCQuery(@PathVariable String name, @PathVariable("abc") int age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "API";
    }
    @GetMapping("mvc-post")
    public String getMVCPost() {
        return "API-post";
    }
    @PostMapping("mvc-post")
    public String postMVC(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "age", required = false) String age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "API";
    }
    // ReponseBody
    @GetMapping("response-string")
    @ResponseBody
    public String getString(@RequestParam("name") String name) {
        return "hello " + name;
    }
    @GetMapping("response-data")
    @ResponseBody
    public Hello getData(@RequestParam("name") String name ) {
        Hello hello = new Hello(); // command + shift + enter -> 자동완성
        hello.setName(name);
        return hello; // JSON 형식으로 전달된다.
    }
    static class Hello {
        private String name;
        public String getName(){
            return name;
        };
        public void setName(String name) {
            this.name = name;
        }
    }



    /**
     * Notion : Spring/5. Thymeleaf 기본 문법
     */
    @GetMapping("thymeleaf")
    public String getThymeleaf(Model model) {
        model.addAttribute("name", "admin");
        model.addAttribute("itemList", item);
        return "Thymeleaf";
    }

    
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
