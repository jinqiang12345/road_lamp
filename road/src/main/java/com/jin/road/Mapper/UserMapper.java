package com.jin.road.Mapper;

import com.jin.road.Dao.RoadUser;
import com.jin.road.Dao.WorkUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface UserMapper {

    @Select("SELECT * FROM USER WHERE LOGNAME = #{logname}")
    RoadUser findByLogname(@Param("logname") String logname);

    @Update("UPDATE WORKUSER SET STATE = #{state} WHERE code = #{code}")
    void fix(@Param("state") String state, @Param("code") String code);

    @Select("SELECT * FROM WORKUSER WHERE TYPE = #{type}")
    WorkUser findByType(@Param("logname") int type);
}
