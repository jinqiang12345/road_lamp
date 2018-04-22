package com.jin.road.Controller;

import com.jin.road.Dao.RoadUser;
import com.jin.road.Mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    private UserMapper userMapper;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Map<String, Object> login(@RequestParam String logname, @RequestParam String pwd) {
        Map<String, Object> map = new HashMap<>();
        RoadUser roaduser = userMapper.findByLogname(logname);
        if(roaduser == null) {
            map.put("success", false);
        } else {
            if(pwd == roaduser.getPwd()) {
                map.put("success", true);
                map.put("data", roaduser);
            } else {
                map.put("success", false);
            }
        }
        return map;
    }
}
