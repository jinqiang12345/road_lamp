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
    
    @Auth
    @RequestMapping(value = "/loginwork", method = RequestMethod.POST)
    public Map<String, Object> loginwork(@RequestParam String logname, @RequestParam String pwd) throws Exception {
    	System.err.println(logname);
        Map<String, Object> map = new HashMap<>();
        RoadUser roaduser = userMapper.findWorkByLogname(logname);
        if(pwd.equals(roaduser.getPwd())) {
            map.put("success", true);
            map.put("data", roaduser);
        } else {
            map.put("success", false);
        }    
        return map;
    }
    
    @Auth
    @RequestMapping(value = "/changepwd", method = RequestMethod.POST)
    public Map<String, Object> changepwd(@RequestParam String logname, @RequestParam String oldpwd, @RequestParam String newpwd) throws Exception {
        Map<String, Object> map = new HashMap<>();
        RoadUser roaduser = userMapper.findByLogname(logname);
        if(oldpwd.equals(roaduser.getPwd())) {
        	userMapper.changepwd(newpwd, logname);
            map.put("success", true);
        } else {
            map.put("success", false);
        }    
        return map;
    }
    
    @Auth
    @RequestMapping(value = "/changeworkpwd", method = RequestMethod.POST)
    public Map<String, Object> changeworkpwd(@RequestParam String logname, @RequestParam String oldpwd, @RequestParam String newpwd) throws Exception {
        Map<String, Object> map = new HashMap<>();
        RoadUser roaduser = userMapper.findWorkByLogname(logname);
        if(oldpwd.equals(roaduser.getPwd())) {
        	userMapper.changeworkpwd(newpwd, logname);
            map.put("success", true);
        } else {
            map.put("success", false);
        }    
        return map;
    }
    
    @Auth
    @RequestMapping(value = "/changestate", method = RequestMethod.POST)
    public Map<String, Object> changestate(@RequestParam String state, @RequestParam String code) throws Exception {
        Map<String, Object> map = new HashMap<>();
        userMapper.changestate(state, code);
        map.put("success", true);
        return map;
    }
}
