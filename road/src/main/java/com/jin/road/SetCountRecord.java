package com.jin.road;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.jin.road.Mapper.CountLampMapper;

@Component
public class SetCountRecord {
	
	@Autowired
	CountLampMapper countLampMapper;
	@Transactional
	@Scheduled(cron="0 0 23 * * ?")
	public void setcountrecord() {
		int error = countLampMapper.errorcount();
		int fix = countLampMapper.fixcount();
		int ok = countLampMapper.okcount();
		SimpleDateFormat d = new SimpleDateFormat("yyyy-MM-dd");
		String time = d.format(new Date());
		countLampMapper.setrecord(error, fix, ok, time);
	}

}
