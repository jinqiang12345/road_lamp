package com.jin.road.Controller;

import com.jin.road.Mapper.ErrorLampMapper;
import com.jin.road.Mapper.LampRecordMapper;
import com.jin.road.auth.Auth;
import com.jin.road.auth.AuthAspect;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ErrorLampController {
	
	private static final Logger logger = LoggerFactory.getLogger(ErrorLampController.class);

    @Autowired
    private ErrorLampMapper errorLampMapper;
    
    @Autowired
    LampRecordMapper lampRecordMapper;

    @Auth
    @RequestMapping(value = "/errorlamp")
    public Map<String, Object> errorlamp() throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        map.put("data", errorLampMapper.findAllErrorLamp());
        return map;
    }
    
    @Auth
    @Transactional
    @RequestMapping(value = "/report", method = RequestMethod.POST)
    public Map<String, Object> fix(@RequestParam String lampid, @RequestParam String fixcode, @RequestParam String opercode, @RequestParam String errortime) throws Exception {
    	errorLampMapper.getfix(fixcode, lampid);
    	SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
    	String date = df.format(new Date());
    	lampRecordMapper.record(lampid, opercode, errortime, date, "处理");
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        return map;
    }
}
