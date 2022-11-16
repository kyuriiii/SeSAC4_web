package sesac.spring.study.sesacspringstudy.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.study.sesacspringstudy.dto.PersonDTO;
import sesac.spring.study.sesacspringstudy.vo.PersonVO;

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
    @GetMapping("form")
    public String getForm(){
        return "form";
    }
    @PostMapping("form-param1")
    public String postForm1(
            @RequestParam String name,
            @RequestParam String gender,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }
    // 일반 form 전송, RequestParam
    @PostMapping("form-param2")
    public String postForm3(
            @RequestParam String name,
            @RequestParam String gender,
            Model model ){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }
    @PostMapping("form-dto1")
    @ResponseBody
    public PersonDTO postDto1(
            @RequestBody PersonDTO person,
            Model model ){
    //    model.addAttribute("name", person.getName());
      //  model.addAttribute("gender", person.getGender());
        //return "result";
        return person;
    }
    @PostMapping("form-dto2")
    public String postDto2(
            PersonDTO person,
            Model model ){
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }
    @PostMapping("form-vo1")
    @ResponseBody
    public PersonVO postVo1(
            @RequestBody PersonVO person,
            Model model ){
        //    model.addAttribute("name", person.getName());
        //  model.addAttribute("gender", person.getGender());
        //return "result";
        return person;
    }
    @PostMapping("form-vo2")
    public String postVo2(
            PersonVO person,
            Model model ){
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }
}
