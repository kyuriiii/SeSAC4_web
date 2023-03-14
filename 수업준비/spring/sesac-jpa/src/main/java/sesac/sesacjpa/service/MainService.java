package sesac.sesacjpa.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sesac.sesacjpa.domain.User;
import sesac.sesacjpa.domain.UserEntity;
import sesac.sesacjpa.mapper.MainMapper;
import sesac.sesacjpa.repository.UserRepository;

@Service
public class MainService {
	@Autowired
	private UserRepository userRepository;

	public List<UserDTO> getUserList(){
		List<UserEntity> result = userRepository.findAll();
		List<UserDTO> users = new ArrayList<UserDTO>();

		for ( int i = 0; i < result.size(); i++ ) {
			UserDTO user = new UserDTO();
			user.setId(result.get(i).getId());
			user.setName(result.get(i).getName());
			user.setNickname(result.get(i).getNickname());
			user.setNo(i+1);

			users.add(user);
		}
		return users;
	}
	public Optional<UserEntity> getUserName(String name){
		return userRepository.findByName(name);
	}
	public void addUser(UserEntity user){
		userRepository.save(user);
	}
//	@Autowired
//	private MainMapper mainMapper;
//
//	public List<User> getUserList(){
//	List<User> result = mainMapper.retrieveAll();
//	List<UserDTO> users = new ArrayList<UserDTO>();
//
//		for ( int i = 0; i < result.size(); i++ ) {
//		UserDTO user = new UserDTO();
//		user.setId(result.get(i).getId());
//		user.setName(result.get(i).getName());
//		user.setNickname(result.get(i).getNickname());
//		user.setNo(i+1);
//
//		users.add(user);
//	}
//		return users;
//	}
//	public void addUser(User user){
//		mainMapper.insertUser(user);
//	}
}
