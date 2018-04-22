package com.jin.road.Dao;

public class LampRecord {

    private int id;
    private String lampid;
    private String addr;
    private String opercode;
    private String opername;
    private String state;
    private String time;

    public int getId() {
        return id;
    }

    public String getLampid() {
        return lampid;
    }

    public void setLampid(String lampid) {
        this.lampid = lampid;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getOpercode() {
        return opercode;
    }

    public void setOpercode(String opercode) {
        this.opercode = opercode;
    }

    public String getOpername() {
        return opername;
    }

    public void setOpername(String opername) {
        this.opername = opername;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
