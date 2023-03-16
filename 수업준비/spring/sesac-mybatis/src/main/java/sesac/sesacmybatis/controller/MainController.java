package sesac.sesacmybatis.controller;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import sesac.sesacmybatis.domain.User;
import sesac.sesacmybatis.dto.PersonDTO;
import sesac.sesacmybatis.dto.UserDTO;
import sesac.sesacmybatis.service.MainService;
import sesac.sesacmybatis.service.PersonService;

@Controller
public class MainController {
	@Autowired
	MainService mainService;
	@Autowired
	PersonService personService;

	@GetMapping("/users")
	public String getUsers(Model model) {
		ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
		model.addAttribute("list", userList);
		return "user";
	}

	@GetMapping("/user/insert")
	public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
		User user = new User();
		user.setName(name);
		user.setNickname(nickname);

		mainService.addUser(user);

		model.addAttribute("list", null);
		return "user";
	}

	@GetMapping("/register")
	public String getRegister(){
		return "register";
	}
	@PostMapping("/register")
	@ResponseBody
	public boolean postRegister(@RequestBody PersonDTO personDTO){
		personService.insertPerson(personDTO);
		return true;
	}
	@GetMapping("/login")
	public String getLogin(){
		return "login";
	}
	@PostMapping("/login")
	@ResponseBody
	public PersonDTO postLogin(@RequestBody PersonDTO personDTO){
		PersonDTO person = personService.getPerson(personDTO);
		return person;
	}
	@PostMapping("/info")
	public String postInfo(PersonDTO personDTO,Model model){
		PersonDTO person = personService.getPerson(personDTO);
		model.addAttribute("person", person);
		return "info";
	}
	@PostMapping("/info/edit")
	@ResponseBody
	public boolean postInfoEdit(@RequestBody PersonDTO personDTO){
		personService.updatePerson(personDTO);
		return true;
	}
	@PostMapping("/info/delete")
	@ResponseBody
	public boolean postInfoDelete(@RequestBody PersonDTO personDTO){
		personService.deletePerson(personDTO);
		return true;
	}
}
