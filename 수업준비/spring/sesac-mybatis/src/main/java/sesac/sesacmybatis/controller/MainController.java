package sesac.sesacmybatis.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import sesac.sesacmybatis.domain.User;
import sesac.sesacmybatis.service.MainService;

@Controller
public class MainController {

	@Autowired
	MainService mainService;

	@GetMapping("/users")
	public String getUsers(Model model) {
		ArrayList<User> userList = (ArrayList<User>) this.mainService.getUserList();
		model.addAttribute("list", userList);
		return "user";
	}
}
