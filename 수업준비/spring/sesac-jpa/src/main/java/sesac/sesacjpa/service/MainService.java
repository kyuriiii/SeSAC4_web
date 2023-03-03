package sesac.sesacjpa.service;

import java.util.List;
import java.util.Optional;

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

	public List<UserEntity> getUserList(){
		return userRepository.findAll();
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
//		return mainMapper.retrieveAll();
//	}
//	public void addUser(User user){
//		mainMapper.insertUser(user);
//	}
}
