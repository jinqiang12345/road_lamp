package com.jin.road.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import com.jin.road.Dao.WorkMission;

@Component
@Mapper
public interface WorkMissionMapper {
	
	List<WorkMission> findMission(@Param("fixcode") String fixcode);
	
	@Insert("INSERT INTO WORKMISSION(LAMPID, fixCODE, TYPE, TIME) VALUES(#{lampid,jdbcType=VARCHAR}, #{fixcode,jdbcType=VARCHAR}, #{type,jdbcType=INTEGER}, #{time,jdbcType=VARCHAR})")
    void report(@Param("lampid") String lampid, @Param("fixcode") String fixcode, @Param("type") int type, @Param("time") String time);

}
