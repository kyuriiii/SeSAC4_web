package sesac.spring.study.sesacspringstudy.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloController {
    @GetMapping("hi")
    public String iogyiubu(Model model){
        model.addAttribute("text", "hihihi");
        model.addAttribute("utext", "<strong>utext</strong>");
        String[] names = {"kim", "lee", "park"};
        model.addAttribute("names", names);
        return "hi";
    }
    @GetMapping("hello")
    public String getHi2(){
        return "hi";
    }

    @GetMapping("api")
    public String getApi(@RequestParam(value="name", required = false) String n, Model model){
        model.addAttribute("name", n);
        return "api";
    }
    @GetMapping("api2/{n}")
    public String getApi2(@PathVariable("n") String nn, Model model) {
        model.addAttribute("name", nn);
        return "api";
    }
}
