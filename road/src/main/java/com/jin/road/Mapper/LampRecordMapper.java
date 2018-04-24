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
    
    @Insert("INSERT INTO RECORD(LAMPID, OPERCODE, ERRORTIME, OPERTIME, WORK) VALUES(#{lampid,jdbcType=VARCHAR}, #{opercode,jdbcType=VARCHAR}, #{errortime,jdbcType=VARCHAR}, #{opertime,jdbcType=VARCHAR}, #{work,jdbcType=VARCHAR})")
    void record(@Param("lampid") String lampid, @Param("opercode") String code, @Param("errortime") String errortime, @Param("opertime") String opertime, @Param("work") String work);
}
