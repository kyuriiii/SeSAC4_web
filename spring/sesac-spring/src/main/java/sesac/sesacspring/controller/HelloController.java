package sesac.sesacspring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.sesacspring.domain.Board;
import sesac.sesacspring.repository.BoardRepository;
import sesac.sesacspring.repository.MemoryBoardRepository;

import javax.servlet.http.HttpServletRequest;
import java.sql.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
public class HelloController {
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
        return "04_API";
    }
    @GetMapping("mvc-get2/{name}/{abc}")
    public String getMVCQuery(@PathVariable String name, @PathVariable("abc") int age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "04_API";
    }
    @GetMapping("mvc-post")
    public String getMVCPost() {
        return "04_API-post";
    }
    @PostMapping("mvc-post")
    public String postMVC(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "age", required = false) String age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "04_API";
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
        String[] names = {"kim", "lee", "hong", "park", "shin"};
        model.addAttribute("names", names);
        return "05_Thymeleaf";
    }
    @GetMapping("thymeleaf_practice1")
    public String getThymeleafPractice1(Model model) {
        model.addAttribute("age", "10");
        return "05_Thymeleaf_practice1";
    }
    @GetMapping("people")
    public String getThymeleafPractice2(Model model){
        ArrayList<Person> list = new ArrayList<>();
        String[] names = {"kim", "lee", "hong", "park", "shin"};
        int[] ages = {10, 20, 30, 40, 50};
        for ( int i = 0; i < 5; i++ ) {
            Person person = new Person();
            person.setName(names[i]);
            person.setAge(ages[i]);
            list.add(person);
        }
        model.addAttribute("listItem", list);
        return "05_Thymeleaf";
    }
    static class Person {
        private String name;
        private int age;
        public String getName(){ return name; }
        public void setName(String name) { this.name = name; }
        public int getAge() { return age; }
        public void setAge(int age) { this.age = age; }
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
