package com.jin.road.Mapper;

import com.jin.road.Dao.ProServer;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface ProServerMapper {

    @Select("SELECT * FROM PROSERVER")
    List<ProServer> findAll();
}
