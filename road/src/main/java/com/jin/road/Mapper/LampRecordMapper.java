package com.jin.road.Mapper;

import com.jin.road.Dao.LampRecord;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface LampRecordMapper {

    List<LampRecord> findAll();
    
    @Insert("INSERT INTO RECORD(LAMPID, OPERCODE, TIME, WORK) VALUES(#{lampid,jdbcType=VARCHAR}, #{opercode,jdbcType=VARCHAR}, #{time,jdbcType=VARCHAR}), #{work,jdbcType=VARCHAR})")
    void record(@Param("lampid") String lampid, @Param("opercode") String code, @Param("time") String time, @Param("work") String work);
}
