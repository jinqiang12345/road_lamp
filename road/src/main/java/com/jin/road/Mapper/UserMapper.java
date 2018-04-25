package com.jin.road.Mapper;

import com.jin.road.Dao.RoadUser;
import com.jin.road.Dao.WorkUser;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface UserMapper {

    RoadUser findByLogname(@Param("logname") String logname);
    
    RoadUser findWorkByLogname(@Param("logname") String logname);

    @Update("UPDATE LOGUSER SET pwd = #{pwd} WHERE logname LIKE #{logname}")
    void changepwd(@Param("pwd") String pwd, @Param("logname") String logname);
    
    @Update("UPDATE LOGINWORK SET pwd = #{pwd} WHERE logname LIKE #{logname}")
    void changeworkpwd(@Param("pwd") String pwd, @Param("logname") String logname);
    
    @Update("UPDATE USER SET state = #{state} WHERE code LIKE #{code}")
    void changestate(@Param("state") String state, @Param("code") String code);
    
    @Update("UPDATE USER SET STATE = #{state} WHERE code LIKE #{code}")
    void fix(@Param("state") String state, @Param("code") String code);

    @Select("SELECT * FROM USER WHERE POSITION LIKE #{position}")
    List<WorkUser> findByPosition(@Param("position") String position);
    
    @Select("SELECT * FROM USER WHERE POSITION LIKE '维修工' AND STATE LIKE '在职'")
    List<WorkUser> findWork();
}
