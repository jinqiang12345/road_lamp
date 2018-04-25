package com.jin.road.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jin.road.Mapper.WorkMissionMapper;

@RestController
public class WorkMissionController {
	
	@Autowired
	WorkMissionMapper workMissionMapper;
	
	@RequestMapping(value = "/workmission", method = RequestMethod.POST)
	public Map<String, Object> workmission(@RequestParam String code) {
		Map<String, Object> map = new HashMap<>();
		map.put("success", true);
		map.put("data", workMissionMapper.findMission(code));
		return map;
	}

}
