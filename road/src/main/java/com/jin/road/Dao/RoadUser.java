package com.jin.road.Dao;

public class RoadUser {
    private int id;
    private String logname;
    private String pwd;
    private String name;
    private String code;
    private String phone;
    private String state;
    private String remark;

    public int getId() {
        return id;
    }

    public String getLogname() {

        return logname;
    }

    public void setLogname(String logname) {
        this.logname = logname;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
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

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
