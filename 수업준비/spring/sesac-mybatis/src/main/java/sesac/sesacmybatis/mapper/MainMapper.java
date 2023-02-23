package sesac.sesacmybatis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import sesac.sesacmybatis.domain.User;

@Mapper
public interface MainMapper {
	List<User> retrieveAll();
}
