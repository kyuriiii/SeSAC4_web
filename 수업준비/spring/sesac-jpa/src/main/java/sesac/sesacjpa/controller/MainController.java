package sesac.sesacjpa.controller;

import java.util.ArrayList;
import java.util.Optional;

import dto.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;
import sesac.sesacjpa.domain.User;
import sesac.sesacjpa.domain.UserEntity;
import sesac.sesacjpa.service.MainService;

@Controller
public class MainController {
	@Autowired
	MainService mainService;

//	@GetMapping("/users")
//	public String getUsers(Model model) {
//		ArrayList<User> userList = (ArrayList<User>) mainService.getUserList();
//		model.addAttribute("list", userList);
//		return "user";
//	}
//	@GetMapping("/user")
//	public String getInsertUser(@RequestParam String name, Model model) {
//		Optional<User> user = mainService.getUserName(name);
//		ArrayList<User> userList = new ArrayList<>();
//		userList.add(user.get());
//
//		model.addAttribute("list", userList);
//		return "user";
//	}
//
//	@GetMapping("/user/insert")
//	public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
//		User user = new User();
//		user.setName(name);
//		user.setNickname(nickname);
//
//		mainService.addUser(user);
//
//		model.addAttribute("list", null);
//		return "user";
//	}

	@GetMapping("/users")
	public String getUsers(Model model) {
		ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
		model.addAttribute("list", userList);
		return "user";
	}
	@GetMapping("/user")
	public String getUser(@RequestParam String name, Model model) {
		Optional<UserEntity> user = mainService.getUserName(name);
		ArrayList<UserEntity> userList = new ArrayList<>();
		if ( user.isPresent() ) userList.add(user.get());

		model.addAttribute("list", userList);
		return "user";
	}

	@GetMapping("/user/insert")
	public String getInsertUser(@RequestParam String name, @RequestParam String nickname, Model model) {
		UserEntity user = new UserEntity();
		user.setName(name);
		user.setNickname(nickname);

		mainService.addUser(user);

		model.addAttribute("list", null);
		return "user";
	}
}
