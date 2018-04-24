package com.jin.road.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jin.road.Mapper.UserMapper;

@RestController
public class RoadWorkController {
	
	@Autowired
	UserMapper userMapper;
	
	@RequestMapping(value = "/man", method = RequestMethod.POST)
	public Map<String, Object> man(@RequestParam String position) throws Exception{
		Map<String, Object> map = new HashMap<>();
		map.put("success", true);
		map.put("data", userMapper.findByPosition(position));
		return map;
	}
	
	@RequestMapping(value = "/workman", method = RequestMethod.POST)
	public Map<String, Object> workman() throws Exception{
		Map<String, Object> map = new HashMap<>();
		map.put("success", true);
		map.put("data", userMapper.findWork());
		return map;
	}

}
