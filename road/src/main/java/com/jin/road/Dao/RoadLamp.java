package com.jin.road.Dao;

public class RoadLamp {

    private int id;
    private String lampid;
    private String addr;
    private String psname;
    private String state;
    private String errortime;

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

    public String getPsname() {
        return psname;
    }

    public void setPsname(String psname) {
        this.psname = psname;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getTime() {
        return errortime;
    }

    public void setTime(String time) {
        this.errortime = time;
    }
}
