package com.jin.road.Mapper;

import com.jin.road.Dao.FixLamp;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface FixLampMapper {
    @Select("SELECT ID, LAMPID, ADDR, STATE, ERRORTIME, FIXCODE, FIXNAME FROM LAMP WHERE STATE LIKE 维修 ORDER BY ID DESC")
    List<FixLamp> finaAll();

    @Update("UPDATE LAMP SET STATE = 正常 WHERE LAMPID = #{lampid}")
    void fix(@Param("lampid") String lampid);
}
