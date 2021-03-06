package com.jin.road.Controller;

import com.jin.road.Mapper.LampRecordMapper;
import com.jin.road.auth.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LampRecordController {

    @Autowired
    LampRecordMapper lampRecordMapper;

    @Auth
    @RequestMapping(value = "/lamprecord")
    public Map<String, Object> lamprecord() throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        map.put("data", lampRecordMapper.findAll());
        return map;
    }
}
