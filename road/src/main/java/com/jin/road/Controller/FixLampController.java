package com.jin.road.Controller;

import com.jin.road.Mapper.FixLampMapper;
import com.jin.road.Mapper.LampRecordMapper;
import com.jin.road.auth.Auth;
import com.mysql.fabric.Response;

import org.apache.ibatis.annotations.Param;
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
public class FixLampController {
	
	private static final Logger logger = LoggerFactory.getLogger(FixLampController.class);

    @Autowired
    FixLampMapper fixLampMapper;
    
    @Autowired
    LampRecordMapper lampRecordMapper;

    @Auth
    @RequestMapping(value = "/fixlamp")
    public Map<String, Object> fixlamp() throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        map.put("data", fixLampMapper.findAllFix());
        return map;
    }
    
    @Auth
    @Transactional
    @RequestMapping(value = "/fix", method = RequestMethod.POST)
    public Map<String, Object> fix(@RequestParam String lampid, @RequestParam String fixcode, @RequestParam String errortime) throws Exception {
    	fixLampMapper.fix(lampid);
    	SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
    	String date = df.format(new Date());
    	lampRecordMapper.record(lampid, fixcode,errortime, date, "维修");
        Map<String, Object> map = new HashMap<>();
        map.put("success", true);
        return map;
    }

}
