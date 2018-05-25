package com.jin.road.Mapper;

import com.jin.road.Dao.Position;
import com.jin.road.Dao.Record;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface CountLampMapper {

    @Select("SELECT COUNT(*) FROM LAMP WHERE STATE LIKE '正常'")
    int okcount();

    @Select("SELECT COUNT(*) FROM LAMP WHERE STATE LIKE '故障'")
    int errorcount();

    @Select("SELECT COUNT(*) FROM LAMP WHERE STATE LIKE '维修'")
    int fixcount();
    
    @Select("SELECT * FROM COUNTRECORD ORDER BY ID DESC LIMIT 6")
    List<Record> getrecord();
    
    @Insert("INSERT INTO COUNTRECORD(ERROR, FIX, OK, TIME) VALUES(#{error,jdbcType=INTEGER}, #{fix,jdbcType=INTEGER}, #{ok,jdbcType=INTEGER}, #{time,jdbcType=VARCHAR})")
    List<Record> setrecord(@Param("error") int error, @Param("fix") int fix, @Param("ok") int ok, @Param("time") String time);
    
    @Select("SELECT LONGITUDE, LATITUDE FROM LAMP")
    List<Position> getposition();
}
