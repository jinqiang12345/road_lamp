package com.jin.road.Controller;

import com.jin.road.Mapper.ErrorLampMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ErrorLampController {

    @Autowired
    private ErrorLampMapper errorLampMapper;

    @RequestMapping(value = "/errorlamp")
    public Map<String, Object> errorlamp() {
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        map.put("data", errorLampMapper.finaAll());
        return map;
    }
}
