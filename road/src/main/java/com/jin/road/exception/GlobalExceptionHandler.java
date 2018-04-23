package com.jin.road.exception;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@ControllerAdvice
@RestController
public class GlobalExceptionHandler {
	
	private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
	@ExceptionHandler(value = Exception.class)
    public Map<String, Object> defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
		logger.error(e.getMessage());
        Map<String, Object> map = new HashMap<>();
        map.put("success", false);
        return map;
    }

}
