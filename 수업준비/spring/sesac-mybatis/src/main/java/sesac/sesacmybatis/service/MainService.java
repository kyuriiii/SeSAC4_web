package sesac.sesacmybatis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sesac.sesacmybatis.domain.User;
import sesac.sesacmybatis.mapper.MainMapper;

@Service
public class MainService {
	@Autowired
	private MainMapper mainMapper;

	public List<User> getUserList(){
		return mainMapper.retrieveAll();
	}
}
