package com.jin.road.Dao;

public class ProServer {

    private int id;
    private String procode;
    private String name;
    private String addr;
    private String phone;

    public int getId() {
        return id;
    }

    public String getProcode() {
    	return procode;
    }
    
    public void setProcode(String code) {
    	this.procode = code;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
