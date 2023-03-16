package sesac.sesacmybatis.mapper;

import org.apache.ibatis.annotations.*;
import sesac.sesacmybatis.domain.Person;

@Mapper
public interface PersonMapper {
    @Insert("insert into person(id, pw, name) values(#{id}, #{pw}, #{name})")
    void insertPerson(Person person);
    @Select("select * from person where (id=#{id} and pw=#{pw}) limit 1")
    Person getPerson(String id, String pw);
    @Update("update person set pw=#{pw}, name=#{name} where id=#{id}")
    void updatePerson(Person person);
    @Delete("delete from person where id=#{id}")
    void deletePerson(String id);
}
