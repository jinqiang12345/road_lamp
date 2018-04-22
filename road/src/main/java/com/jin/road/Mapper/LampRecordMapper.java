package com.jin.road.Mapper;

import com.jin.road.Dao.LampRecord;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface LampRecordMapper {

    @Select("SELECT * FROM LAMPRECORD ORDER BY ID DESC")
    List<LampRecord> findAll();
}
