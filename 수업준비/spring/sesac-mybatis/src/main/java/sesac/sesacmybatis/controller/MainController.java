package sesac.sesacmybatis.controller;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestParam;
import sesac.sesacmybatis.domain.User;
import sesac.sesacmybatis.service.MainService;

@Controller
public class MainController {
	@Autowired
	MainService mainService;

	@GetMapping("/users")
	public String getUsers(Model model) {
		ArrayList<User> userList = (ArrayList<User>) mainService.getUserList();
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
}
