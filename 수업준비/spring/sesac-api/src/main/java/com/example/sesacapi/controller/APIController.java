package com.example.sesacapi.controller;

import com.example.sesacapi.dto.UserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class APIController {
    // GET
    @GetMapping("/")
    public String send() {
        return "send";
    }
    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam(value="name") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", 10);
        return "response";
    }
    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value="name", required = false) String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", 10);
        return "response";
    }
    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String num, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", num);
        return "response";
    }
    @GetMapping({"/get/response4/{name}/{age}", "/get/response4/{name}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String num, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", num);
        return "response";
    }

    // POST
    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam(value="name") String name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", 10);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam String name,@RequestParam(value = "age", required = false) String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }
    @PostMapping("/post/response3")
    @ResponseBody // ResponseBody는 return 된 문자열이 그대로 보인다.
    public String postAPI3(@RequestParam String name, @RequestParam(value = "age", required = false) String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }

    // DTO
    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoAPI3(@RequestBody  UserDTO userDTO) {
        String msg = "이름 : " + userDTO.getName() + "\n나이 : " + userDTO.getAge();
        return msg;
    }
}
