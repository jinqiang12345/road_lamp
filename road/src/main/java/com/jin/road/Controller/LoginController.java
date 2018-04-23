package com.jin.road.Controller;

import com.jin.road.Dao.RoadUser;
import com.jin.road.Mapper.UserMapper;
import com.jin.road.auth.Auth;

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

    @Auth
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Map<String, Object> login(@RequestParam String logname, @RequestParam String pwd) throws Exception {
    	System.err.println(logname);
        Map<String, Object> map = new HashMap<>();
        RoadUser roaduser = userMapper.findByLogname(logname);
        if(pwd.equals(roaduser.getPwd())) {
            map.put("success", true);
            map.put("data", roaduser);
        } else {
            map.put("success", false);
        }    
        return map;
    }
}
