package com.jin.road.Mapper;

import com.jin.road.Dao.Record;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface CountLampMapper {

    @Select("SELECT COUNT(*) FROM LAMP WHERE STATE LIKE 正常")
    int okcount();

    @Select("SELECT COUNT(*) FROM LAMP WHERE STATE LIKE 故障")
    int errorcount();

    @Select("SELECT COUNT(*) FROM LAMP WHERE STATE LIKE 维修")
    int fixcount();

    @Select("SELECT * FROM RECORD ORDER BY ID DESC LIMIT 5")
    List<Record> getrecord();
}
