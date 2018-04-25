package com.jin.road.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jin.road.Mapper.CountLampMapper;

@RestController
public class CounterController {
	
	@Autowired
	CountLampMapper countLampMapper;
	
	@RequestMapping("/data")
	public Map<String, Object> data() throws Exception {
		Map<String, Object> map = new HashMap<>();
		map.put("success", true);
		map.put("okcount", countLampMapper.okcount());
		map.put("errorcount", countLampMapper.errorcount());
		map.put("fixcount", countLampMapper.fixcount());
		map.put("countrecord", countLampMapper.getrecord());
		return map;
	}
	
	@RequestMapping("/position")
	public Map<String, Object> position() throws Exception {
		Map<String, Object> map = new HashMap<>();
		map.put("success", true);
		map.put("data", countLampMapper.getposition());
		return map;
	}
}
