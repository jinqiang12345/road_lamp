package com.jin.road.Mapper;

import com.jin.road.Dao.RoadLamp;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface ErrorLampMapper {

    @Select("SELECT ID, LAMPID, ADDR, STATE, ERRORTIME FROM LAMP WHERE STATE LIKE 故障 ORDER BY ID DESC")
    List<RoadLamp> finaAll();

    @Update("UPDATE LAMP SET STATE = 维修, FIXCODE = #{fixcode} WHERE LAMPID Like #{lampid}")
    void getfix(@Param("fixcode") String fixcode, @Param("lampid") String lampid);
}
