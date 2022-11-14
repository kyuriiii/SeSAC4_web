package sesac.spring.study.sesacspringstudy.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    @GetMapping("hi")
    public String iogyiubu(Model model){
        model.addAttribute("text", "hihihi");
        return "hi";
    }
    @GetMapping("hello")
    public String getHi2(){
        return "hi";
    }
}
