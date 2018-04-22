package com.jin.road.Controller;

import com.jin.road.Mapper.FixLampMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class FixLampController {

    @Autowired
    FixLampMapper fixLampMapper;

    @RequestMapping(value = "/fixlamp")
    public Map<String, Object> fixlamp() {
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        map.put("data", fixLampMapper.finaAll());
        return map;
    }

}
