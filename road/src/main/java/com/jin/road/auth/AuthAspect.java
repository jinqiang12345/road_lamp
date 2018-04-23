package com.jin.road.auth;

import static org.hamcrest.CoreMatchers.nullValue;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Component
@Aspect
public class AuthAspect {
	
	private static final Logger logger = LoggerFactory.getLogger(AuthAspect.class);

	@Pointcut(value="@annotation(com.jin.road.Auth)")
	public void access() {
		
	}
	
	@Around("@annotation(auth)")
	public Object around(ProceedingJoinPoint point, Auth auth) {
		
		ServletRequestAttributes attributes = (ServletRequestAttributes)RequestContextHolder.getRequestAttributes();
		HttpServletRequest request = attributes.getRequest();
		if(request.getHeader("auth").equals("road2018")) {
			try {
				return point.proceed();
			} catch (Throwable e) {
				e.printStackTrace();
				return null;// TODO: handle exception
			}
		} else {
			return null;
		}
	}
}
