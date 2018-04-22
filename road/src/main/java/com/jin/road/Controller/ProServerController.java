package com.jin.road.Controller;

import com.jin.road.Mapper.ProServerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ProServerController {

    @Autowired
    private ProServerMapper proServerMapper;

    @RequestMapping(value = "/proserver")
    public Map<String, Object> proserver() {
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        map.put("data", proServerMapper.findAll());
        return map;
    }
}
