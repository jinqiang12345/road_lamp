package com.jin.road.Dao;

public class WorkUser {
    private int id;
    private String code;
    private String name;
    private String state;
    private String phone;
    private String position;

    public int getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getType() {
        return position;
    }

    public void setType(String type) {
        this.position = type;
    }
}
